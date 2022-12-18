import React from "react"
import cuid from "cuid"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { Container, Box } from "@mui/material"

import { RowCol } from "../RowCol"
import { Title } from "../Title"
import { AnimateOnScroll } from "../AnimateOnScroll"

import BlogCard from "./BlogCard"

import ImgGenerativeNfts from "../../images/projects/generative-nft.jpg"

const blogData = [
  {
    id: cuid(),
    title: `Generative NFT Drop`,
    description: ["Create an NFT from scratch and an NFT minting website."],
    imgSrc: ImgGenerativeNfts,
    imgAlt: "dj boombox remix crew",
  },
  {
    id: cuid(),
    title: `Crowdfunding App`,
    description: ["Create an NFT from scratch and an NFT minting website."],
    imgSrc: ImgGenerativeNfts,
    imgAlt: "dj boombox remix crew",
  },
  {
    id: cuid(),
    title: `DAO`,
    description: ["Create an NFT from scratch and an NFT minting website."],
    imgSrc: ImgGenerativeNfts,
    imgAlt: "dj boombox remix crew",
  },
]

const Blog = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            author
            slug
            title
          }
          html
        }
      }
    }
  `)
  return (
    <Box py={6}>
      <Container>
        <RowCol mb={4}>
          <AnimateOnScroll animateIn={`fadeInUp`}>
            <Title variant="segment" align="center">
              Blog
            </Title>
          </AnimateOnScroll>
        </RowCol>
        <RowCol>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent={`space-evenly`}
          >
            {nodes.map((data, index) => {
              return (
                <AnimateOnScroll
                  animateIn="fadeInUp"
                  delay={index * 200}
                  key={index}
                >
                  <BlogCard {...data} />
                </AnimateOnScroll>
              )
            })}
          </Box>
        </RowCol>
      </Container>
    </Box>
  )
}

Blog.propTypes = {
  children: PropTypes.node,
}

export default Blog
