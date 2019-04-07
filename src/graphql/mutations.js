// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
export const createStyleSchema = `mutation CreateStyleSchema($input: CreateStyleSchemaInput!) {
  createStyleSchema(input: $input) {
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
export const updateStyleSchema = `mutation UpdateStyleSchema($input: UpdateStyleSchemaInput!) {
  updateStyleSchema(input: $input) {
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
export const deleteStyleSchema = `mutation DeleteStyleSchema($input: DeleteStyleSchemaInput!) {
  deleteStyleSchema(input: $input) {
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
export const createStyleGuide = `mutation CreateStyleGuide($input: CreateStyleGuideInput!) {
  createStyleGuide(input: $input) {
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
export const updateStyleGuide = `mutation UpdateStyleGuide($input: UpdateStyleGuideInput!) {
  updateStyleGuide(input: $input) {
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
export const deleteStyleGuide = `mutation DeleteStyleGuide($input: DeleteStyleGuideInput!) {
  deleteStyleGuide(input: $input) {
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
export const createComponentLibrary = `mutation CreateComponentLibrary($input: CreateComponentLibraryInput!) {
  createComponentLibrary(input: $input) {
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
export const updateComponentLibrary = `mutation UpdateComponentLibrary($input: UpdateComponentLibraryInput!) {
  updateComponentLibrary(input: $input) {
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
export const deleteComponentLibrary = `mutation DeleteComponentLibrary($input: DeleteComponentLibraryInput!) {
  deleteComponentLibrary(input: $input) {
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
export const createComponent = `mutation CreateComponent($input: CreateComponentInput!) {
  createComponent(input: $input) {
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
export const updateComponent = `mutation UpdateComponent($input: UpdateComponentInput!) {
  updateComponent(input: $input) {
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
export const deleteComponent = `mutation DeleteComponent($input: DeleteComponentInput!) {
  deleteComponent(input: $input) {
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
