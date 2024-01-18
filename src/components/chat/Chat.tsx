import React, { useState } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";

function Chat() {
    const [inputText, setInputText] = useState<string>("");
    const channelName = useAppSelector((state) => state.channel.channelName);

    const sendMessage = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
    };
    return (
        <div className="chat">
            {/* chatHeader */}
            <ChatHeader channelName={channelName} />
            {/* chatMessage */}
            <div className="chatMessage">
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
            {/* chatInput */}
            <div className="chatInput">
                <AddCircleOutlineIcon />
                <form>
                    <input
                        type="text"
                        placeholder="#udemyへメッセージを送信"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setInputText(e.target.value)
                        }
                    />
                    <button
                        type="submit"
                        className="chatInputButton"
                        onClick={(
                            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                        ) => sendMessage(e)}
                    >
                        送信
                    </button>
                </form>

                <div className="chatInputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    );
}

export default Chat;
