// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateStyleSchema = `subscription OnCreateStyleSchema {
  onCreateStyleSchema {
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
export const onUpdateStyleSchema = `subscription OnUpdateStyleSchema {
  onUpdateStyleSchema {
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
export const onDeleteStyleSchema = `subscription OnDeleteStyleSchema {
  onDeleteStyleSchema {
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
export const onCreateStyleGuide = `subscription OnCreateStyleGuide {
  onCreateStyleGuide {
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
export const onUpdateStyleGuide = `subscription OnUpdateStyleGuide {
  onUpdateStyleGuide {
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
export const onDeleteStyleGuide = `subscription OnDeleteStyleGuide {
  onDeleteStyleGuide {
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
export const onCreateComponentLibrary = `subscription OnCreateComponentLibrary {
  onCreateComponentLibrary {
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
export const onUpdateComponentLibrary = `subscription OnUpdateComponentLibrary {
  onUpdateComponentLibrary {
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
export const onDeleteComponentLibrary = `subscription OnDeleteComponentLibrary {
  onDeleteComponentLibrary {
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
export const onCreateComponent = `subscription OnCreateComponent {
  onCreateComponent {
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
export const onUpdateComponent = `subscription OnUpdateComponent {
  onUpdateComponent {
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
export const onDeleteComponent = `subscription OnDeleteComponent {
  onDeleteComponent {
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
