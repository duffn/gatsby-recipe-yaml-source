import React from "react"
import { graphql } from "gatsby"

const TestPage = ({ data }) => (
  <div>
    <ul>
      {data.allTestDataYaml.nodes.map((node, index) => (
        <li key={index}>
          {node.name} - {node.profession}
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query TestPageQuery {
    allTestDataYaml {
      nodes {
        name
        profession
      }
    }
  }
`

export default TestPage
