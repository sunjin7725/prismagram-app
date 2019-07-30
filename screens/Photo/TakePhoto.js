import React, { useState, useEffect, useRef } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import Loader from "../../components/Loader";
import constants from "../../constants";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "@unimodules/core";
import styles from "../../styles";

const View = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.View``;
const Button = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border: 10px solid ${styles.lightGrayColor};
`;

export default ({ navigation }) => {
    const cameraRef = useRef();
    const [canTakePhoto, setCanTakePhoto] = useState(true);
    const [loading, setLoading] = useState(true);
    const [hasPermission, setHasPermission] = useState(false);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const takePhoto = async () => {
        if (!canTakePhoto) {
            return;
        }
        try {
            setCanTakePhoto(false);
            const photo = await cameraRef.current.takePictureAsync({
                quality: 1,
                exif: true
            });
            const asset = await MediaLibrary.createAssetAsync(photo.uri);
            setCanTakePhoto(true);
            navigation.navigate("Upload", { photo: asset });
        } catch (error) {
            console.log(error);
            setCanTakePhoto(true);
        }
    };

    const toggleType = () => {
        if (cameraType === Camera.Constants.Type.back) {
            setCameraType(Camera.Constants.Type.front);
        } else setCameraType(Camera.Constants.Type.back);
    };

    const askPermission = async () => {
        try {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status === "granted") {
                setHasPermission(true);
            }
        } catch (e) {
            console.log(e);
            hasPermission(false);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        askPermission();
    }, []);

    return (
        <View>
            {loading ? (
                <Loader />
            ) : hasPermission ? (
                <>
                    <Camera
                        ref={cameraRef}
                        type={cameraType}
                        style={{
                            justifyContent: "flex-end",
                            padding: 15,
                            width: constants.width,
                            height: constants.height / 2
                        }}
                    >
                        <TouchableOpacity onPress={toggleType}>
                            <Ionicons
                                name={
                                    Platform.OS === "ios"
                                        ? "ios-reverse-camera"
                                        : "md-reverse-camera"
                                }
                                size={32}
                                color={"white"}
                            />
                        </TouchableOpacity>
                    </Camera>
                    <View>
                        <TouchableOpacity
                            onPress={takePhoto}
                            disabled={!canTakePhoto}
                        >
                            <Button />
                        </TouchableOpacity>
                    </View>
                </>
            ) : null}
        </View>
    );
};
