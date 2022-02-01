import React from 'react';
import Card from './components/Card';
import Columns from "./components/Columns";
import ProductDiagram from "./components/ProductDiagram";
import { Button, Tooltip, IconButton, Grid, Typography, Box, Stack } from '@mui/material';
import { Close, GitHub, Link, Videocam } from '@mui/icons-material';
import profileLogo512 from "~/assets/static/img/profile-logo512.png";
import { ReactLogo, NodeLogo, MuiLogo, GithubLogo } from "~/assets/Logo";

const Portfolio = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const handleClickDetailBtn = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

    const DetailDialog = () => {

        const Abstract = () =>
            <Grid container spacing={2} columns={{ xs: 12, sm: 12 }}>
                <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
                    <img src={profileLogo512} style={{ width: "min(100%, 300px)" }} />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ alignSelf: "center" }}>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        自分のエンジニアとしての価値を、実際に形にしたいと思って作りました。
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        静的ファイルのみなので、github.ioで公開しています(本当に便利)
                    </Typography>
                    <Typography
                        variant={"body1"}
                        gutterBottom
                    >
                        よいReact.jsの勉強になりました。
                    </Typography>

                </Grid>
            </Grid>

        const Tech = () => {

            const contents = [
                {
                    label: "使用技術", content:
                        <Box display="flex" flexWrap={'wrap'}>
                            <ReactLogo /><NodeLogo /><GithubLogo /><MuiLogo />
                        </Box>
                },
                { label: "開発期間", content: <>期間 : 2週間 ~<br />人数 : 1人</> }
            ]

            return (
                < Columns contents={contents} />
            )
        }

        const contents = [
            { label: "ABSTRACT", content: <Abstract /> },
            { label: "TECHS", content: <Tech /> }
        ]
        const Actions = () =>
            <>
                <IconButton
                    href={"/oura-hideyoshi"}>
                    <Videocam />
                </IconButton>
                <IconButton
                    href={"https://github.com/oura-hideyoshi/oura-hideyoshi"}
                    target={"_blank"}>
                    <GitHub />
                </IconButton>
            </>

        return (
            <>
                <ProductDiagram
                    title={"ポートフォリオ(このページ)"}
                    contents={contents}
                    actions={<Actions />}
                    onClose={handleClose}
                    open={isOpen}
                ></ProductDiagram>
            </>
        )
    }

    return (
        <>
            <Card
                title={"ポートフォリオ"}
                content={"私のポートフォリオです。"}
                img={profileLogo512}
                actions={
                    <>
                        <Button onClick={handleClickDetailBtn}>DETAIL</Button>
                        <DetailDialog />
                    </>
                }
            >
            </Card>
        </>
    )
}
export default Portfolio