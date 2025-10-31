import React from "react";
import styled from "styled-components";
import Title from "../../../components/texts/Title";
import IconBtn from "../../../components/buttons/IconBtn";

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
`

const Texts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Actions = styled.ol`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    & li {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: underline;
        gap: 0px;
    }
`

const Images = styled.div`
    height: 500px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
`

const Image = styled.div`
    height: 100%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 1s ease-in-out;
    }
    
    &:nth-child(1){
        grid-area: 1 / 1 / 3 / 3;
        border-radius: 16px 0 0 16px;
    }
    &:nth-child(2){
        grid-area: 1 / 3 / 2 / 4;
    }
    &:nth-child(3){
        grid-area: 2 / 3 / 3 / 4;
    }
    &:nth-child(4){
        grid-area: 1 / 4 / 2 / 5;
        border-radius: 0 16px 0 0px;
    }
    &:nth-child(5){
        grid-area: 2 / 4 / 3 / 5;
        border-radius: 0 0 16px 0px;
    }
`

export default function AirbnbGalery () {
    return (
        <>
            <Container>
                <Texts>
                    <Title 
                        children={`Chalé Oiti`}
                        fontSize="32px"
                    />
                    <Actions>
                        <li>
                            <IconBtn 
                                icon="Send"
                                bgColor="transparent"
                                size="30px"
                            />
                            <p>Compartilhar</p>
                        </li>
                        <li>
                            <li>
                                <IconBtn 
                                    icon="Heart"
                                    bgColor="transparent"
                                    size="30px"
                                />
                                <p>Salvar</p>
                            </li>
                        </li>
                    </Actions>
                </Texts>
                <Images>
                    <Image data-aos="zoom-in">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59fbe6f7-055a-4dc7-9419-75fcbc831100/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="100">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9f058ed0-8b43-4432-fb4b-137fe2398800/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="200">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f34c6265-3b90-44cc-67b5-d6c6087d5700/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="300">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/871a3aa2-9db5-4767-ee9e-cf0a19ed3a00/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="400">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3537856c-a77b-49b1-deba-39683036af00/public" alt="" />
                    </Image>
                </Images>
            </Container>
        </>
    )
}