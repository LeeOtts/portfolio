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
        img: 'https://i.ibb.co/PmZrd3s/Roast-of-Kyle-20.jpg',
        title: 'Books',
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
        title: 'Train Ride',
    },
    {
        img: 'https://i.ibb.co/b3jdxvC/wes.jpg',
        title: 'Chairs',
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