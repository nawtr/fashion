import React, { useState } from "react";
import { TextInput as RNTextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Box, theme } from "../../../components";
interface TextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;

const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, placeholder, validator }: TextInputProps) => {
  const [state, setState] = useState<InputState>(Valid);
  return (
    <Box
      height={45}
      flexDirection="row"
      alignItems="center"
      borderWidth={1}
      borderRadius="s"
      borderColor="primary"
      paddingHorizontal="s"
    >
      <Icon name={icon} size={25} color={theme.colors.primary} />
      <Box flex={1}>
        <RNTextInput
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
      </Box>

      {(state === Valid || state === Invalid) && (
        <Box
          justifyContent="center"
          alignItems="center"
          borderRadius="l"
          height={SIZE}
          width={SIZE}
          backgroundColor={"primary"}
        >
          <Icon name={state ? "check" : "x"} size={SIZE / 2} color="white" />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
