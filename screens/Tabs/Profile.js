import React from "react";
import { gql } from "apollo-boost";
import { ScrollView } from "react-native";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import { USER_FRAGMENT } from "../../fragments";
import UserProfile from "../../components/UserProfile";

export const ME = gql`
    {
        me {
            ...UserParts
        }
    }
    ${USER_FRAGMENT}
`;

export default ({ navigation }) => {
    const { loading, data } = useQuery(ME);

    return (
        <ScrollView>
            {loading ? (
                <Loader />
            ) : (
                data && data.me && <UserProfile {...data.me} />
            )}
        </ScrollView>
    );
};
