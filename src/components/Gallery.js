import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function MasonryImageList() {
    return (
        <Box>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://i.ibb.co/GWcpFVb/engagement.jpg',
        title: 'Engagement Photo'
    },
    {
        img: 'https://i.ibb.co/Yt5hgZS/orion-stacked.png',
        title: 'Orion Nebula',
    },
    {
        img: 'https://i.ibb.co/g3w0SK0/cbaidproduct.jpg',
        title: 'Product Photography: CBaid',
    },
    {
        img: 'https://i.ibb.co/xFNqzdn/rushhempfarmsproduct.jpg',
        title: 'Product Photography: Rush Hemp Farms',
    },
    {
        img: 'https://i.ibb.co/v39ychM/salveproduct.jpg',
        title: 'Product Photography: Veteran Grown CBD',
    },
    {
        img: 'https://i.ibb.co/KhLjZhS/comfy-whiskey.png',
        title: 'Our rescue pup, Whiskey',
    },
    {
        img: 'https://i.ibb.co/XY8d3LR/butteryfly.png',
        title: 'Butterfly in our wildflower garden',
    },
    {
        img: 'https://i.ibb.co/PmZrd3s/Roast-of-Kyle-20.jpg',
        title: 'Roast of Kyle',
    },
    {
        img: 'https://i.ibb.co/stkjZzh/rings.png',
        title: 'Our Wedding Rings',
    },
    {
        img: 'https://i.ibb.co/zJzXfJj/ross.png',
        title: 'Memphis Comedian Ross Turner',
    },
    {
        img: 'https://i.ibb.co/7jc6FsT/Suffrage-monument.png',
        title: 'Womans Suffrage Monument Model',
    },
    {
        img: 'https://i.ibb.co/HCgwGTL/train.png',
        title: 'Polar Express Train Ride',
    },
    {
        img: 'https://i.ibb.co/b3jdxvC/wes.jpg',
        title: 'Wes Corwin',
    },
    {
        img: 'https://i.ibb.co/mJVQt9c/ashanti.jpg',
        title: 'Memphis Comedian Ashanti',
    },
    {
        img: 'https://i.ibb.co/7gn4crH/bridge.png',
        title: 'Bridge',
    },
    {
        img: 'https://i.ibb.co/v4TBz91/juju-bushman.png',
        title: 'Memphis Musician JuJu Bushman',
    },
    {
        img: 'https://i.ibb.co/1G0bq16/katrina.jpg',
        title: 'Katrina Coleman',
    },
    {
        img: 'https://i.ibb.co/mFSGppB/kyle.jpg',
        title: 'Kyle at his roast',
    },
    {
        img: 'https://i.ibb.co/n8SsdQY/moon.jpg',
        title: 'Backyard Moon',
    },
    {
        img: 'https://i.ibb.co/kGPKHb6/mustang.png',
        title: 'Mustang and Flag',
    },
];