import React, { useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import styles from "../styles";
import { Platform } from "@unimodules/core";
import constants from "../constants";
import SquarePhoto from "./SquarePhoto";
import Post from "./Post";

/// TODO
/**
 * Grid에서 사진이 세로로 뜸 2개이상일때
 */

const ProfileHeader = styled.View`
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const HeaderColumn = styled.View``;

const ProfleStats = styled.View`
    flex-direction: row;
`;
const Stat = styled.View`
    margin-left: 40px;
    align-items: center;
`;
const Bold = styled.Text`
    font-weight: 600;
`;
const StatName = styled.Text`
    margin-top: 15px;
    font-size: 12px;
    color: ${styles.darkGrayColor};
`;

const ProfileMeta = styled.View`
    margin-top: 10px;
    padding-horizontal: 20px;
`;
const Bio = styled.Text``;

const ButtonContainer = styled.View`
    padding-vertical:5px;
    border: 1px solid ${styles.lightGrayColor}
    flex-direction: row;
    margin-top: 30px;
`;

const Button = styled.View`
    width: ${constants.width / 2};
    align-items: center;
`;

const UserProfile = ({
    avatar,
    postsCount,
    followingCount,
    followersCount,
    fullName,
    bio,
    posts
}) => {
    const [isGrid, setIsGrid] = useState(true);
    const toggleGrid = () => setIsGrid(i => !i);
    return (
        <View>
            <ProfileHeader>
                <Image
                    style={{ height: 80, width: 80, borderRadius: 40 }}
                    source={{ uri: avatar }}
                />
                <HeaderColumn>
                    <ProfleStats>
                        <Stat>
                            <Bold>{postsCount}</Bold>
                            <StatName>Posts</StatName>
                        </Stat>
                        <Stat>
                            <Bold>{followersCount}</Bold>
                            <StatName>Follower</StatName>
                        </Stat>
                        <Stat>
                            <Bold>{followingCount}</Bold>
                            <StatName>Followings</StatName>
                        </Stat>
                    </ProfleStats>
                </HeaderColumn>
            </ProfileHeader>
            <ProfileMeta>
                <Bold>{fullName}</Bold>
                <Bio>{bio}</Bio>
            </ProfileMeta>
            <ButtonContainer>
                <TouchableOpacity onPress={toggleGrid}>
                    <Button>
                        <Ionicons
                            color={
                                isGrid
                                    ? styles.blackColor
                                    : styles.darkGrayColor
                            }
                            size={32}
                            name={
                                Platform.OS === "ios" ? "ios-grid" : "md-grid"
                            }
                        />
                    </Button>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleGrid}>
                    <Button>
                        <Ionicons
                            color={
                                !isGrid
                                    ? styles.blackColor
                                    : styles.darkGrayColor
                            }
                            size={32}
                            name={
                                Platform.OS === "ios" ? "ios-list" : "md-list"
                            }
                        />
                    </Button>
                </TouchableOpacity>
            </ButtonContainer>
            {posts &&
                posts.map(p =>
                    isGrid ? (
                        <SquarePhoto key={p.id} {...p} />
                    ) : (
                        <Post key={p.id} {...p} />
                    )
                )}
        </View>
    );
};

UserProfile.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    isSelf: PropTypes.bool.isRequired,
    bio: PropTypes.string.isRequired,
    followingCount: PropTypes.number.isRequired,
    followersCount: PropTypes.number.isRequired,
    postsCount: PropTypes.number.isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.shape({
                id: PropTypes.string.isRequired,
                avatar: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired,
            files: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired
                })
            ).isRequired,
            likeCount: PropTypes.number.isRequired,
            isLiked: PropTypes.bool.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                    user: PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        username: PropTypes.string.isRequired
                    }).isRequired
                })
            ).isRequired,
            caption: PropTypes.string.isRequired,
            location: PropTypes.string,
            createdAt: PropTypes.string.isRequired
        })
    )
};

export default UserProfile;
