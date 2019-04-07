// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    projects {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      projects {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    title
    styleGuide {
      id
      schema {
        primaryColor1
        primaryColor2
        primaryColor3
        primaryColor4
        primaryColor5
        marginLarge
        marginMedium
        marginSmall
        paddingLarge
        paddingMedium
        paddingSmall
        borderLarge
        borderMedium
        borderSmall
        heading1FontFamily
        heading2FontFamily
        heading3FontFamily
        heading1FontSize
        heading2FontSize
        heading3FontSize
        textColor1
        textColor2
        textColor3
        lineHeightLarge
        lineHeightMedium
        lineHeightSmall
        letterSpacingLarge
        letterSpacingMedium
        letterSpacingSmall
      }
      project {
        id
        title
      }
    }
    componentLibrary {
      id
      project {
        id
        title
      }
      styleGuide {
        id
      }
      components {
        nextToken
      }
    }
    user {
      id
      name
      projects {
        nextToken
      }
    }
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      styleGuide {
        id
      }
      componentLibrary {
        id
      }
      user {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getStyleSchema = `query GetStyleSchema($id: ID!) {
  getStyleSchema(id: $id) {
    primaryColor1
    primaryColor2
    primaryColor3
    primaryColor4
    primaryColor5
    marginLarge
    marginMedium
    marginSmall
    paddingLarge
    paddingMedium
    paddingSmall
    borderLarge
    borderMedium
    borderSmall
    heading1FontFamily
    heading2FontFamily
    heading3FontFamily
    heading1FontSize
    heading2FontSize
    heading3FontSize
    textColor1
    textColor2
    textColor3
    lineHeightLarge
    lineHeightMedium
    lineHeightSmall
    letterSpacingLarge
    letterSpacingMedium
    letterSpacingSmall
  }
}
`;
export const listStyleSchemas = `query ListStyleSchemas(
  $filter: ModelStyleSchemaFilterInput
  $limit: Int
  $nextToken: String
) {
  listStyleSchemas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      primaryColor1
      primaryColor2
      primaryColor3
      primaryColor4
      primaryColor5
      marginLarge
      marginMedium
      marginSmall
      paddingLarge
      paddingMedium
      paddingSmall
      borderLarge
      borderMedium
      borderSmall
      heading1FontFamily
      heading2FontFamily
      heading3FontFamily
      heading1FontSize
      heading2FontSize
      heading3FontSize
      textColor1
      textColor2
      textColor3
      lineHeightLarge
      lineHeightMedium
      lineHeightSmall
      letterSpacingLarge
      letterSpacingMedium
      letterSpacingSmall
    }
    nextToken
  }
}
`;
export const getStyleGuide = `query GetStyleGuide($id: ID!) {
  getStyleGuide(id: $id) {
    id
    schema {
      primaryColor1
      primaryColor2
      primaryColor3
      primaryColor4
      primaryColor5
      marginLarge
      marginMedium
      marginSmall
      paddingLarge
      paddingMedium
      paddingSmall
      borderLarge
      borderMedium
      borderSmall
      heading1FontFamily
      heading2FontFamily
      heading3FontFamily
      heading1FontSize
      heading2FontSize
      heading3FontSize
      textColor1
      textColor2
      textColor3
      lineHeightLarge
      lineHeightMedium
      lineHeightSmall
      letterSpacingLarge
      letterSpacingMedium
      letterSpacingSmall
    }
    project {
      id
      title
      styleGuide {
        id
      }
      componentLibrary {
        id
      }
      user {
        id
        name
      }
    }
  }
}
`;
export const listStyleGuides = `query ListStyleGuides(
  $filter: ModelStyleGuideFilterInput
  $limit: Int
  $nextToken: String
) {
  listStyleGuides(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      schema {
        primaryColor1
        primaryColor2
        primaryColor3
        primaryColor4
        primaryColor5
        marginLarge
        marginMedium
        marginSmall
        paddingLarge
        paddingMedium
        paddingSmall
        borderLarge
        borderMedium
        borderSmall
        heading1FontFamily
        heading2FontFamily
        heading3FontFamily
        heading1FontSize
        heading2FontSize
        heading3FontSize
        textColor1
        textColor2
        textColor3
        lineHeightLarge
        lineHeightMedium
        lineHeightSmall
        letterSpacingLarge
        letterSpacingMedium
        letterSpacingSmall
      }
      project {
        id
        title
      }
    }
    nextToken
  }
}
`;
export const getComponentLibrary = `query GetComponentLibrary($id: ID!) {
  getComponentLibrary(id: $id) {
    id
    project {
      id
      title
      styleGuide {
        id
      }
      componentLibrary {
        id
      }
      user {
        id
        name
      }
    }
    styleGuide {
      id
      schema {
        primaryColor1
        primaryColor2
        primaryColor3
        primaryColor4
        primaryColor5
        marginLarge
        marginMedium
        marginSmall
        paddingLarge
        paddingMedium
        paddingSmall
        borderLarge
        borderMedium
        borderSmall
        heading1FontFamily
        heading2FontFamily
        heading3FontFamily
        heading1FontSize
        heading2FontSize
        heading3FontSize
        textColor1
        textColor2
        textColor3
        lineHeightLarge
        lineHeightMedium
        lineHeightSmall
        letterSpacingLarge
        letterSpacingMedium
        letterSpacingSmall
      }
      project {
        id
        title
      }
    }
    components {
      items {
        id
        componentName
        componentAttributes
        styles
      }
      nextToken
    }
  }
}
`;
export const listComponentLibrarys = `query ListComponentLibrarys(
  $filter: ModelComponentLibraryFilterInput
  $limit: Int
  $nextToken: String
) {
  listComponentLibrarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      project {
        id
        title
      }
      styleGuide {
        id
      }
      components {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComponent = `query GetComponent($id: ID!) {
  getComponent(id: $id) {
    id
    componentName
    componentAttributes
    componentLibrary {
      id
      project {
        id
        title
      }
      styleGuide {
        id
      }
      components {
        nextToken
      }
    }
    styleGuide {
      id
      schema {
        primaryColor1
        primaryColor2
        primaryColor3
        primaryColor4
        primaryColor5
        marginLarge
        marginMedium
        marginSmall
        paddingLarge
        paddingMedium
        paddingSmall
        borderLarge
        borderMedium
        borderSmall
        heading1FontFamily
        heading2FontFamily
        heading3FontFamily
        heading1FontSize
        heading2FontSize
        heading3FontSize
        textColor1
        textColor2
        textColor3
        lineHeightLarge
        lineHeightMedium
        lineHeightSmall
        letterSpacingLarge
        letterSpacingMedium
        letterSpacingSmall
      }
      project {
        id
        title
      }
    }
    styles
  }
}
`;
export const listComponents = `query ListComponents(
  $filter: ModelComponentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      componentName
      componentAttributes
      componentLibrary {
        id
      }
      styleGuide {
        id
      }
      styles
    }
    nextToken
  }
}
`;
