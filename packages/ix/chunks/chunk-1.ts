import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFacebookLogoIcon],svg[ix-facebook-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42.667c-111.476-.174-204.29 85.51-213.011 196.644c-8.72 111.134 69.593 210.245 179.731 227.462V317.44h-54.187V256h54.187v-46.933a75.094 75.094 0 0 1 80.427-82.987a335.5 335.5 0 0 1 47.786 4.053v52.48h-26.88a30.934 30.934 0 0 0-34.773 33.28V256h59.307l-9.6 61.653H289.28v149.334c110.805-16.546 189.934-115.984 181.174-227.675S368.03 41.735 256 42.667"></svg:path>`,
})
export class IxFacebookLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFaceplateContainerIcon],svg[ix-faceplate-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 42.667v298.666h298.666V106.667zm42.666 42.666h85.334v85.334h-85.334zm213.334 0h-64v85.334h64zM149.333 298.667h85.334v64h-85.334zm150-21.334c-12.15 0-22 9.85-22 22v41.334c0 12.15 9.85 22 22 22h41.334c12.15 0 22-9.85 22-22v-41.334c0-12.15-9.85-22-22-22z" clip-rule="evenodd"></svg:path>`,
})
export class IxFaceplateContainerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFactoryResetIcon],svg[ix-factory-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v42.666l-68.666-.003c36.078 31.659 58.188 77.991 58.146 128.474c-.065 78.179-53.241 146.318-129.062 165.376c-75.82 19.058-154.896-15.838-191.92-84.695c-13.778-25.625-20.421-53.514-20.357-81.152h42.538q-.013.96-.012 1.92c1.05 69.942 58.05 126.088 128 126.08c64.072 1.056 118.709-46.195 126.906-109.749c6.124-47.483-15.135-92.74-52.237-118.947l-.002 79.363h-42.667V128zM85.334 85.333v85.333L170.667 128v42.666L256 128v149.333H42.667v-192zm128 106.667h-128v42.666h128z"></svg:path>`,
})
export class IxFactoryResetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFactoryResetFilledIcon],svg[ix-factory-reset-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v42.666l-68.666-.003c36.078 31.659 58.188 77.991 58.146 128.474c-.065 78.179-53.241 146.318-129.062 165.376c-75.82 19.058-154.896-15.838-191.92-84.695c-13.778-25.625-20.421-53.514-20.357-81.152h42.538q-.013.96-.012 1.92c1.05 69.942 58.05 126.088 128 126.08c64.072 1.056 118.709-46.195 126.906-109.749c6.124-47.483-15.135-92.74-52.237-118.947l-.002 79.363h-42.667V128zM85.334 85.333v85.333L170.667 128v42.666L256 128v149.333H42.667v-192z"></svg:path>`,
})
export class IxFactoryResetFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFastForwardIcon],svg[ix-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 256L42.667 128v256zm0 0V128l213.333 128L256 384zM85.333 203.328L173.1 256l-87.766 52.651zm213.334 0L386.432 256l-87.765 52.651z" clip-rule="evenodd"></svg:path>`,
})
export class IxFastForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFastForwardFilledIcon],svg[ix-fast-forward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 253.32l-213.333 128v-256zm0 0v128l213.333-128L256 125.32z" clip-rule="evenodd"></svg:path>`,
})
export class IxFastForwardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFeedbackIcon],svg[ix-feedback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M224.815 85.323c-.094-32.021-37.478-42.657-75.482-42.657L96 139.733l-53.333 30.925v128.007l157.7 27.515c4.96.639 9.592.931 13.924.931c45.085 0 57.574-31.975 62.553-44.722c9.693-24.877 17.748-69.811 20.75-86.964l.029-.098c3.216-19.174-1.058-36.633-12.023-49.169c-6.838-7.814-15.993-13.424-26.592-16.199c-4.934-1.292-10.181-1.97-15.653-1.97h-27.862s4.339-17.17 7.605-29.894c1.179-4.593 1.729-8.844 1.717-12.772m28.676 88.932c-1.279-1.461-4.205-3.6-10.136-3.6h-82.652q2.64-10.45 5.275-20.902l.012-.047l.001-.002c5.04-19.985 10.081-39.971 15.195-59.938l-7.821-2.235l-45.69 83.154l-42.342 24.552v67.56l121.329 21.169c2.897.342 5.428.477 7.629.477c6.116 0 9.656-1.059 11.533-1.85c1.865-.786 3.173-1.765 4.289-2.906c2.754-2.817 4.561-6.61 6.982-12.806c7.821-20.072 15.227-60.274 18.471-78.813l.095-.54c1.236-8.36-1.105-12.052-2.17-13.273m-27.09 191.587c-4.435-5.071-7.776-10.947-9.969-17.417c16.991-.317 30.877-4.397 42.084-10.675c1.282 1.462 4.208 3.594 10.13 3.594h82.652l-13.427 53.133l-.009.038l-.038.149l-.144.57l-.539 2.129l-1.855 7.318a8918 8918 0 0 1-4.471 17.552c1.9.73 4.472 1.522 7.821 2.235l39.971-72.747l5.719-10.407l10.273-5.957l32.069-18.596v-67.559l-113.733-19.844c2.443-12.003 4.318-22.525 5.466-29.067l.051-.172l.211-1.261a96 96 0 0 0 1.238-11.596l149.433 26.073v128.007l-53.333 30.925l-53.333 97.067c-38.004 0-75.388-10.636-75.482-42.657c-.012-3.928.538-8.179 1.717-12.772c3.267-12.725 7.605-29.894 7.605-29.894h-27.862c-5.472 0-10.719-.678-15.653-1.97c-10.599-2.775-19.753-8.385-26.592-16.199" clip-rule="evenodd"></svg:path>`,
})
export class IxFeedbackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFeedbackFilledIcon],svg[ix-feedback-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M196.423 321.225c4.837.623 9.353.907 13.576.907c43.958 0 56.135-31.174 60.99-43.604l.006-.016c9.45-24.254 17.298-68.048 20.253-84.868c3.136-18.695-1.032-35.718-11.723-47.94c-9.771-11.165-24.392-17.715-41.188-17.715h-47.966s4.23-16.741 7.415-29.147c10.518-40.972-12.854-55.658-46.137-53.904l-48.566 90.79l-60.417 33.863v124.806zm36.052 45.263c-4.631-5.294-8.038-11.49-10.157-18.331c24.081-1.754 41.46-11.362 53.539-23.708c12.439-12.712 18.11-27.249 20.705-33.902l.161-.414c10.384-26.649 18.618-72.398 21.679-89.844l.05-.172l.212-1.261q.603-3.599.935-7.187l149.736 26.125v124.807l-60.417 33.863l-48.567 90.79c-33.283 1.754-56.654-12.932-46.137-53.904a9808 9808 0 0 0 7.416-29.147h-47.966c-16.796 0-31.418-6.55-41.189-17.715" clip-rule="evenodd"></svg:path>`,
})
export class IxFeedbackFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFilterIcon],svg[ix-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333L234.232 320h.435v149.333h42.667V320l192-234.667zm214.448 192h-2.636L132.575 128h246.722z"></svg:path>`,
})
export class IxFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFilterFilledIcon],svg[ix-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333L234.232 320h.435v149.333h42.667V320l192-234.667z"></svg:path>`,
})
export class IxFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFilterUpdateIcon],svg[ix-filter-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 389.336v-122l-149.333-182H384l-149.333 182v122zm-59.136-261.333h160.917l-80.448 98.048zm336.469 149.333h-32v28.065c-16.709-15.747-39.228-25.398-64-25.398c-43.045 0-79.285 29.14-90.067 68.769l30.022 8.188c7.188-26.42 31.348-45.846 60.045-45.846c17.849 0 33.943 7.516 45.29 19.555H384v32h85.333zm-192 138.667v53.333h32v-28.065c16.71 15.747 39.228 25.398 64 25.398c43.045 0 79.284-29.14 90.067-68.769l-30.022-8.188c-7.189 26.419-31.348 45.846-60.045 45.846c-17.85 0-33.944-7.516-45.29-19.555h34.624v-32h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxFilterUpdateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFirmwareIcon],svg[ix-firmware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 405.333V448h-42.667v-42.667zm-85.333 0V448H64v-42.667zm170.666 0V448h-42.666v-42.667zm85.334 0V448H320v-42.667zm85.333 0V448h-42.667v-42.667zM469.333 128v256H42.667V128zm-42.666 42.667H85.333v170.666h341.334zm-164.46 20.532l20.606 5.522l-33.129 123.638l-20.606-5.521zm-63.642 4.811l15.052 15.061l-45.297 45.296l45.275 45.264l-15.03 15.058l-60.34-60.34zm115.251-.041l60.339 60.339l-60.339 60.34l-15.031-15.058l45.275-45.264l-45.297-45.296zM192 64v42.667h-42.667V64zm-85.333 0v42.667H64V64zm170.666 0v42.667h-42.666V64zm85.334 0v42.667H320V64zM448 64v42.667h-42.667V64z" clip-rule="evenodd"></svg:path>`,
})
export class IxFirmwareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFitToScreenIcon],svg[ix-fit-to-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.334 85.333v341.333H42.667V85.333zM426.667 128H85.334v256h341.333zM283.582 294.248l30.17 30.17l-42.667 42.667L256 382.17l-57.751-57.752l30.17-30.17L256 321.813zm-138.667-96l30.17 30.17L147.52 256l27.565 27.581l-30.17 30.17L87.164 256l15.085-15.085zm222.17 0L424.837 256l-15.085 15.085l-42.667 42.666l-30.17-30.17L364.48 256l-27.565-27.582zM256 129.83l15.085 15.085l42.667 42.666l-30.17 30.17L256 190.186l-27.581 27.565l-30.17-30.17z"></svg:path>`,
})
export class IxFitToScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFlagIcon],svg[ix-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.333 85.333l-64 85.333l64 85.334l-234.667-.001v170.667H128V85.333zM320 128H170.667v85.333H320l-32-42.667z"></svg:path>`,
})
export class IxFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFlagAltIcon],svg[ix-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 42.664H85.333v426.667H128V354.754l298.334-143.2L128 92.221zm0 95.51v169.253l192.333-92.32z" clip-rule="evenodd"></svg:path>`,
})
export class IxFlagAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFlagAltFilledIcon],svg[ix-flag-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42.664v42.667l298.667 128L128 362.664v106.667H85.333V42.664z"></svg:path>`,
})
export class IxFlagAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFlagFilledIcon],svg[ix-flag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.333 85.333l-64 85.333l64 85.334l-234.667-.001v170.667H128V85.333z"></svg:path>`,
})
export class IxFlagFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFlashingIcon],svg[ix-flashing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m391.764 361.595l30.17 30.17l-30.17 30.17l-30.17-30.17zm-271.529 0l30.17 30.17l-30.17 30.17l-30.17-30.17zM256 128c70.692 0 128 57.308 128 128s-57.308 128-128 128s-128-57.307-128-128c0-70.692 57.307-128 128-128m0 42.667c-47.128 0-85.333 38.205-85.333 85.333c0 22.767 8.915 43.451 23.446 58.752l120.639-120.639c-15.301-14.531-35.985-23.446-58.752-23.446M120.235 90.066l30.17 30.17l-30.17 30.169l-30.17-30.169zm271.529 0l30.17 30.17l-30.17 30.169l-30.17-30.169zm-114.431-47.4v42.667h-42.666V42.667zm0 384.001v42.666h-42.666v-42.666zm192-149.334h-42.666v-42.666h42.666zm-384 0H42.667v-42.666h42.666z"></svg:path>`,
})
export class IxFlashingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFlowPhysicallyIcon],svg[ix-flow-physically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.334h426.666V128H42.667zm43.607 94.63l-21.82-11.902l20.43-37.457l21.821 11.902A405.3 405.3 0 0 0 300.799 192h19.203v-54.286L472.083 256L320.002 374.286V320h-19.203a405.3 405.3 0 0 0-194.094 49.493l-21.82 11.902l-20.432-37.457l21.82-11.902A448 448 0 0 1 300.8 277.333h61.87v9.715L402.587 256l-39.918-31.048v9.715h-61.87a448 448 0 0 1-214.525-54.703M469.333 384H42.667v42.667h426.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxFlowPhysicallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderIcon],svg[ix-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.666H42.667V85.333H220.75L274.71 128h194.625zM85.334 384h341.333V170.666H259.875L205.917 128H85.334z"></svg:path>`,
})
export class IxFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderApplicationScreenIcon],svg[ix-folder-application-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 106.667L192 64H42.667v320h128v-42.667H85.333V106.667h88.994l55.006 42.666H384v64h42.667V106.667zm224 128H192V448h277.333zM426.667 320h-192v85.333h192zm-192-42.667h192v21.334h-192z" clip-rule="evenodd"></svg:path>`,
})
export class IxFolderApplicationScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderCollapseAllIcon],svg[ix-folder-collapse-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.757 319.999l53.952 42.667H448v42.667H259.861l-53.93-42.667h-99.264v42.667H64v-85.334zm0-106.666l53.952 42.666H448v42.667H259.861l-53.93-42.667h-99.264v42.667H64v-85.333zm0-106.667l53.952 42.667H448v42.666H259.861l-53.93-42.666h-99.264v42.666H64v-85.333z"></svg:path>`,
})
export class IxFolderCollapseAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderDownIcon],svg[ix-folder-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm56.583 193.82l48.916-48.905l30.17 30.17L256 360.836L155.582 260.418l30.17-30.17l48.914 48.903V150.732L205.916 128H85.335v256h341.333V170.666H277.333z"></svg:path>`,
})
export class IxFolderDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderDownFilledIcon],svg[ix-folder-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm56.522 85.333h-42.667v129.819L185.69 251.58l-30.17 30.17l100.42 100.42l100.417-100.42l-30.17-30.17l-48.916 48.905z"></svg:path>`,
})
export class IxFolderDownFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderExpandAllIcon],svg[ix-folder-expand-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.282 170.667l53.051 42.666H448V448H64V170.667zm-15.023 42.666H106.667v192h298.666V256H262.305zM220.757 64l53.952 42.667H448V192h-42.667v-42.667l-145.45.022l-53.952-42.688h-99.264v42.666H64V64z"></svg:path>`,
})
export class IxFolderExpandAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderFilledIcon],svg[ix-folder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.666H42.667V85.333H220.75L274.709 128h194.625z"></svg:path>`,
})
export class IxFolderFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderNewIcon],svg[ix-folder-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 128v298.667H42.667V85.334H220.75L274.709 128zm-42.667 42.667H259.875L205.917 128H85.334v256h341.333zM341.334 256v-42.667h-42.667V256H256v42.667h42.667v42.666h42.667v-42.666H384V256z" clip-rule="evenodd"></svg:path>`,
})
export class IxFolderNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderNewFilledIcon],svg[ix-folder-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm120.584 128h-42.667V256H256v42.666h42.667v42.667h42.667v-42.667H384V256h-42.666z"></svg:path>`,
})
export class IxFolderNewFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderNewOutlineIcon],svg[ix-folder-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.334 213.333V256H320v42.666h-42.666v42.667h-42.667v-42.667H192V256h42.667v-42.667zm192-85.333v298.666H42.667V85.333H220.75L274.71 128zm-42.667 42.666H259.875L205.917 128H85.334v256h341.333z"></svg:path>`,
})
export class IxFolderNewOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderOpenIcon],svg[ix-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.333V128H274.709L220.75 85.333H42.667v341.333H415.25L480 213.333zM85.334 338.773V128h120.583l53.958 42.666H384v42.667H124.688zM383.625 384h-267.77l40.166-128h266.437z"></svg:path>`,
})
export class IxFolderOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderOpenFilledIcon],svg[ix-folder-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h151.958v63.959H116.651L44.004 426.667h-1.337V85.333zm-72.636 149.288l330.757.004l-58.287 192.041H88.667z"></svg:path>`,
})
export class IxFolderOpenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderOpenOutlineIcon],svg[ix-folder-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.333V128H274.709L220.75 85.333H42.667v341.333h361.604l64.75-213.333zM85.334 338.773V128h120.583l53.958 42.666H384v42.667H124.688zM372.646 384H115.854l40.167-128h255.458z"></svg:path>`,
})
export class IxFolderOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderTagIcon],svg[ix-folder-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 106.667L192 64H42.667v320H256v-42.667H85.333V106.667h88.994l55.006 42.666H384V257.83l42.667 42.667v-193.83zm245.334 288L373.333 277.333h-96v96l117.334 117.334zM320 320h21.333v21.333H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxFolderTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderUpIcon],svg[ix-folder-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zM205.917 128H85.334v256l149.421-.001l.453-109.057l-48.918 48.918l-30.167-30.167l100.418-100.522l100.415 100.522l-30.166 30.167l-48.916-48.915l-.452 109.054h149.245V170.667H259.875z"></svg:path>`,
})
export class IxFolderUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFolderUpFilledIcon],svg[ix-folder-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm35.791 107.838L156.123 293.693l30.167 30.167l48.918-48.918L234.667 384h42.667l.54-109.055l48.916 48.915l30.166-30.167z"></svg:path>`,
})
export class IxFolderUpFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFramesIcon],svg[ix-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 127.999H106.667v64h298.666zm-298.666 256V234.665H192v149.334zm128 0h170.666V234.665H234.667zm-128-298.667H64v341.333h384V85.332z" clip-rule="evenodd"></svg:path>`,
})
export class IxFramesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFramesFilledIcon],svg[ix-frames-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 85.332h384v106.667H64zm0 149.333h128v192H64zm384 0H234.667v192H448z" clip-rule="evenodd"></svg:path>`,
})
export class IxFramesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFullScreenIcon],svg[ix-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 64H64v128h42.667v-85.333H192V64zm0 256H64v128h128v-42.667h-85.333zM320 64v42.667h85.333V192H448V64zm85.333 341.333H320V448h128V320h-42.667z"></svg:path>`,
})
export class IxFullScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFullScreenExitIcon],svg[ix-full-screen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m192 64l-.001 85.333H192V192l-.001-.001l.001.001h-42.667v-.001L64 192v-42.667h85.333V64zm0 256v42.667l-.001-.001L192 448h-42.667v-85.334H64V320zM362.667 64l-.001 85.333H448V192l-85.334-.001V192H320V64zM448 320v42.667l-85.334-.001V448H320V320z"></svg:path>`,
})
export class IxFullScreenExitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFunctionBlockIcon],svg[ix-function-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 85.333v149.333h64v42.667h-64v149.334H149.333v-85.334h-64v-42.666h64v-85.334h-64v-42.666h64V85.332zM320 128H192v256h128z"></svg:path>`,
})
export class IxFunctionBlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFunctionBlockLibraryIcon],svg[ix-function-block-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 277.333l-.001 85.333h42.667V384h-42.667v85.333h-128v-42.667H256v-21.333h42.666v-64H256V320l42.666-.001v-42.666zm-32 32h-64v128h64zm-160.001-10.667v42.667H64v-42.666zM128 64v213.333H85.333V64zm64 21.333v192h-42.667v-192zm64 0v192h-42.667v-192zm68.236 4.506l33.993 166.16h-55.146l-29.27-155.047z"></svg:path>`,
})
export class IxFunctionBlockLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFunctionBlockNewIcon],svg[ix-function-block-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64v42.667h-64v64H384v-64h-64V384h64v-64zM341.333 85.333l-.001 149.333h64.001v42.667h-64.001l.001 85.333h-42.666V128h-128v256h128l-.001 42.666H128v-85.333H64v-42.666h64v-85.335l-64 .001v-42.666h64V85.332z"></svg:path>`,
})
export class IxFunctionBlockNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFunctionDiagramIcon],svg[ix-function-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zm-170.666 42.666V256h-21.334v42.666h64V256h85.334v106.667h-85.334v-42.668h-64V320H192v-64h-42.667V149.333z"></svg:path>`,
})
export class IxFunctionDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixFunctionDiagramNewIcon],svg[ix-function-diagram-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64v42.667l-64-.001v64H384v-64h-64V384h64v-64zm0-256l-.001 234.666H384v-192H106.667V384h191.999v42.666H64V64zm-192 85.333V256h-21.334v21.333h64v-42.666h85.334v106.666h-85.334v-42.666H192v-42.668l-42.667.001V149.333z"></svg:path>`,
})
export class IxFunctionDiagramNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGanttchartIcon],svg[ix-ganttchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 341.332v106.667h-192V341.332zm-384 0v106.667H42.667V341.332zm341.334 42.667H320v21.333h106.667zM384 213.332v106.667H128V213.332zm-42.667 42.667H170.667v21.333h170.666zm-128-170.667v106.667H42.667V85.332zm213.334 0v106.667H384V85.332zm-256 42.667H85.333v21.333h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxGanttchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGaugeIcon],svg[ix-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c117.821 0 213.334 95.513 213.334 213.333c0 69.794-33.516 131.76-85.33 170.68L384 448l-.001-.001H128.001v.01c-51.818-38.917-85.334-100.882-85.334-170.676C42.667 159.513 138.18 64 256 64m21.335 43.987l-.001 41.346h-42.667l-.002-41.346c-46.698 5.824-87.537 30.514-114.649 66.203l35.8 20.668l-21.334 36.95l-35.83-20.686c-8.577 20.36-13.318 42.732-13.318 66.211c0 23.48 4.741 45.852 13.319 66.211l35.83-20.686l21.333 36.95l-35.799 20.67a171.7 171.7 0 0 0 23.096 24.856h225.775a171.7 171.7 0 0 0 23.096-24.856l-35.8-20.67l21.334-36.95l35.83 20.687c8.577-20.36 13.319-42.732 13.319-66.212s-4.742-45.852-13.32-66.212l-35.829 20.688l-21.333-36.95l35.8-20.67c-27.112-35.688-67.952-60.378-114.65-66.202m24.19 47.828l36.95 21.334l-45.52 78.844a42.47 42.47 0 0 1 5.712 21.34C298.667 300.897 279.564 320 256 320s-42.666-19.103-42.666-42.667s19.102-42.666 42.666-42.666z"></svg:path>`,
})
export class IxGaugeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGaugeFilledIcon],svg[ix-gauge-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c117.821 0 213.334 95.513 213.334 213.333c0 69.789-33.51 131.75-85.319 170.671h-256.03c-51.807-38.921-85.318-100.882-85.318-170.67C42.667 159.512 138.18 64 256 64M134.482 322.858l-36.95 21.333l21.333 36.95l36.95-21.332zm243.036 0l-21.333 36.95l36.95 21.334l21.334-36.95zm-75.993-167.043L256 234.667l-.705.005c-23.239.377-41.961 19.333-41.961 42.661C213.334 300.897 232.436 320 256 320s42.667-19.103 42.667-42.667a42.47 42.47 0 0 0-5.712-21.34l45.52-78.844zm91.61 17.71l-36.95 21.333l21.333 36.95l36.95-21.333zm-274.27 0l-21.333 36.95l36.95 21.334l21.334-36.95zm158.469-66.858h-42.667v42.666h42.667z"></svg:path>`,
})
export class IxGaugeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGaugechartIcon],svg[ix-gaugechart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 298.667V320H192v-21.333zM256 64c117.821 0 213.334 95.513 213.334 213.333c0 7.208-.358 14.333-1.056 21.357l-86.05-.006a129 129 0 0 0 1.772-21.35c0-70.693-57.307-128-128-128c-70.692 0-128 57.307-128 128c0 7.274.607 14.407 1.773 21.35l-86.05.006a216 216 0 0 1-1.056-21.357C42.667 159.513 138.18 64 256 64m85.334 192v21.333H170.667V256zm32.19-116.765l-13.834 16.24c30.787 26.222 51.513 63.905 55.578 106.45l.37 4.742l21.377.021v-.202c-3.004-50.915-27.016-96.18-63.49-127.25m-74.857 74.098v21.334h-85.333v-21.334zM64 384h384v42.667H64z"></svg:path>`,
})
export class IxGaugechartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGithubLogoIcon],svg[ix-github-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M258.934 42.667c-119.59 0-216.267 97.239-216.267 217.538c0 96.161 61.944 177.559 147.877 206.369c10.744 2.166 14.68-4.681 14.68-10.44c0-5.043-.354-22.33-.354-40.341c-60.161 12.968-72.689-25.932-72.689-25.932c-9.668-25.212-23.993-31.691-23.993-31.691c-19.69-13.327 1.434-13.327 1.434-13.327c21.842 1.441 33.303 22.33 33.303 22.33c19.332 33.132 50.484 23.771 63.016 18.007c1.788-14.047 7.521-23.771 13.608-29.172c-47.982-5.043-98.466-23.771-98.466-107.33c0-23.771 8.588-43.219 22.196-58.344c-2.147-5.401-9.668-27.735 2.152-57.628c0 0 18.26-5.763 59.434 22.33a208.3 208.3 0 0 1 54.069-7.205c18.261 0 36.876 2.524 54.065 7.205c41.178-28.093 59.439-22.33 59.439-22.33c11.82 29.893 4.294 52.227 2.147 57.628c13.967 15.125 22.2 34.573 22.2 58.344c0 83.559-50.483 101.924-98.824 107.33c7.88 6.842 14.68 19.806 14.68 40.337c0 29.172-.355 52.584-.355 59.785c0 5.763 3.94 12.61 14.68 10.448c85.933-28.818 147.877-110.212 147.877-206.373c.355-120.299-96.677-217.538-215.909-217.538" clip-rule="evenodd"></svg:path>`,
})
export class IxGithubLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGlassesPlayIcon],svg[ix-glasses-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M357.333 64c28.822 0 55.469 9.858 77.098 26.563l35.486-5.048v32l-21.978 17.609q.061 1.763.061 3.543c0 53.019-40.593 96-90.667 96s-90.666-42.981-90.666-96q.002-5.036.48-9.938a86.2 86.2 0 0 0-22.343-.001c.367 3.282.529 6.59.529 9.939c0 53.019-40.592 96-90.666 96S64 191.686 64 138.667l.107-4.182l-21.44-17.152v-32l35.221 5.014l1.765-1.356C100.902 73.238 126.766 64 154.667 64c27.469 0 52.963 8.955 74.02 24.257A128.2 128.2 0 0 1 256 85.333c9.378 0 18.52 1.009 27.324 2.923C304.37 72.955 329.864 64 357.333 64m-202.666 42.667c-15.724 0-30.798 4.458-44.07 12.811l-.944.629l-.113.339a58 58 0 0 0-2.69 13.507l-.183 4.714c0 29.983 22.053 53.333 48 53.333s48-23.35 48-53.333c0-6.342-.988-12.474-2.876-18.224l-.132-.336l-.922-.631c-11.797-7.423-25.02-11.771-38.855-12.645zm202.666 0c-15.723 0-30.797 4.458-44.069 12.811l-.944.629l-.113.339a57.8 57.8 0 0 0-2.69 13.507l-.184 4.714c0 29.983 22.053 53.333 48 53.333s48-23.35 48-53.333c0-6.342-.987-12.474-2.875-18.224l-.133-.336l-.921-.631c-11.798-7.423-25.02-11.771-38.855-12.645zm16 170.666c53.02 0 96 42.981 96 96c0 53.02-42.98 96-96 96c-53.019 0-96-42.98-96-96c0-53.019 42.981-96 96-96m-31.779 49.264v96l85.333-48z"></svg:path>`,
})
export class IxGlassesPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGlobalPlantIcon],svg[ix-global-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h204.794a116.6 116.6 0 0 1-12.316-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l128-70.135v24.777c3.513-.316 7.071-.478 10.666-.478a117.4 117.4 0 0 1 32 4.417v-95.869l-128 70.119v-69.334zm194.075 207.094c-6.806-15.07-11.375-35.242-12.481-57.761h-31.504c3.711 25.948 20.763 47.592 43.985 57.761m19.25-9.21c-5.312-11.952-9.295-28.86-10.369-48.551h42.089c-1.075 19.691-5.057 36.599-10.369 48.551c-3.137 7.057-6.319 11.447-8.775 13.784c-.873.832-1.505 1.275-1.901 1.503c-.395-.228-1.027-.671-1.901-1.503c-2.455-2.337-5.638-6.727-8.774-13.784m0-118.436c-5.312 11.952-9.295 28.861-10.369 48.552h42.089c-1.075-19.691-5.057-36.6-10.369-48.552c-3.137-7.057-6.319-11.447-8.775-13.784c-.873-.831-1.505-1.274-1.901-1.503c-.395.229-1.027.672-1.901 1.503c-2.455 2.337-5.638 6.727-8.774 13.784m40.601 127.646c6.806-15.07 11.374-35.242 12.481-57.761h31.504c-3.712 25.948-20.764 47.592-43.985 57.761m12.481-79.094h31.504c-3.712-25.948-20.764-47.592-43.985-57.762c6.806 15.07 11.374 35.242 12.481 57.762m-116.317 0h31.504c1.106-22.52 5.675-42.692 12.481-57.762c-23.222 10.17-40.274 31.814-43.985 57.762m73.91 106.666c53.02 0 96-42.98 96-96c0-53.019-42.98-96-96-96c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96" clip-rule="evenodd"></svg:path>`,
})
export class IxGlobalPlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGlobalPlantFilledIcon],svg[ix-global-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v95.869a117.4 117.4 0 0 0-32-4.417C308.532 256 256 308.532 256 373.333c0 19.205 4.614 37.332 12.794 53.334H64V64zm194.075 377.761c-6.806-15.07-11.375-35.242-12.481-57.761h-31.504c3.711 25.948 20.763 47.592 43.985 57.761m19.25-9.21c-5.312-11.952-9.295-28.86-10.369-48.551h42.089c-1.075 19.691-5.057 36.599-10.369 48.551c-3.137 7.057-6.319 11.447-8.775 13.784c-.873.832-1.505 1.275-1.901 1.503c-.395-.228-1.027-.671-1.901-1.503c-2.455-2.337-5.638-6.727-8.774-13.784m0-118.436c-5.312 11.952-9.295 28.861-10.369 48.552h42.089c-1.075-19.691-5.057-36.6-10.369-48.552c-3.137-7.057-6.319-11.447-8.775-13.784c-.873-.831-1.505-1.274-1.901-1.503c-.395.229-1.027.672-1.901 1.503c-2.455 2.337-5.638 6.727-8.774 13.784m40.601 127.646c6.806-15.07 11.374-35.242 12.481-57.761h31.504c-3.712 25.948-20.764 47.592-43.985 57.761m12.481-79.094h31.504c-3.712-25.948-20.764-47.592-43.985-57.762c6.806 15.07 11.374 35.242 12.481 57.762m-116.317 0h31.504c1.106-22.52 5.675-42.692 12.481-57.762c-23.222 10.17-40.274 31.814-43.985 57.762m73.91 106.666c53.02 0 96-42.98 96-96c0-53.019-42.98-96-96-96c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96" clip-rule="evenodd"></svg:path>`,
})
export class IxGlobalPlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGlobeIcon],svg[ix-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m52.84 234.667H203.16c.258 5.539.612 10.99 1.057 16.344l1.154 11.927q.325 2.937.685 5.827l1.575 11.362c3.982 26.038 10.058 48.678 17.105 66.118l3.077 7.15c8.867 19.327 18.932 30.605 28.186 30.605s19.32-11.278 28.187-30.605l3.076-7.15c7.048-17.44 13.124-40.08 17.106-66.118l1.575-11.362q.36-2.891.685-5.827l1.154-11.927c.444-5.353.799-10.805 1.056-16.344m-148.418 0H86.654c7.629 61.173 47.631 112.291 102.322 135.669c-7.732-16.349-14.061-35.65-18.81-57.093l-2.337-11.397c-2.921-15.443-5.06-31.857-6.357-48.965l-.814-12.956q-.13-2.62-.236-5.258m264.924 0H351.58q-.106 2.638-.236 5.258l-.814 12.956c-1.297 17.108-3.436 33.522-6.358 48.965l-2.337 11.397c-4.748 21.442-11.077 40.744-18.81 57.09c54.691-23.375 94.694-74.493 102.322-135.665M188.976 99.002l-1.847.8c-53.743 23.73-92.933 74.383-100.475 134.865l73.768.002a519 519 0 0 1 .236-5.259l.814-12.957c1.297-17.108 3.436-33.521 6.357-48.965l2.337-11.396c4.749-21.442 11.078-40.744 18.81-57.09M256 85.334l-.278.003c-9.177.223-19.13 11.468-27.908 30.602l-3.077 7.15c-7.047 17.44-13.123 40.08-17.105 66.118l-1.575 11.362q-.36 2.89-.685 5.827l-1.154 11.927a450 450 0 0 0-1.057 16.343H308.84a450 450 0 0 0-1.056-16.343l-1.154-11.927q-.325-2.937-.685-5.827l-1.575-11.362c-3.982-26.038-10.058-48.679-17.106-66.118l-3.076-7.15C275.319 96.612 265.255 85.334 256 85.334m67.025 13.664l.645 1.381c7.44 16.05 13.549 34.87 18.164 55.712l2.337 11.396c2.922 15.444 5.06 31.857 6.358 48.965l.814 12.957q.13 2.62.236 5.259l73.767-.002c-7.628-61.172-47.63-112.29-102.32-135.668"></svg:path>`,
})
export class IxGlobeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGlobeFilledIcon],svg[ix-globe-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M314.18 461.115c81.867-23.442 143.589-94.571 153.189-181.411H372.77c-3.899 63.282-23.429 125.799-58.59 181.411m58.59-228.818h94.599c-9.599-86.84-71.322-157.97-153.189-181.412c35.161 55.613 54.691 118.129 58.59 181.412M256.001 42.667a343 343 0 0 1 25.623 36.694c28.569 47.211 44.698 99.731 48.388 152.936H181.988c3.689-53.205 19.819-105.725 48.388-152.936a343 343 0 0 1 25.623-36.693zm-57.893 7.763C115.44 73.395 52.968 144.888 43.307 232.297h95.923c3.909-63.455 23.536-126.14 58.878-181.867M139.23 279.704H43.307c9.662 87.409 72.133 158.901 154.801 181.866c-35.342-55.726-54.968-118.411-58.878-181.866m116.771 189.628h-.002a343 343 0 0 1-25.623-36.693c-28.569-47.211-44.698-99.73-48.388-152.935h148.024c-3.69 53.205-19.819 105.724-48.388 152.935a343 343 0 0 1-25.623 36.693" clip-rule="evenodd"></svg:path>`,
})
export class IxGlobeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGlobeTagIcon],svg[ix-globe-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m355.745 255.997l134.922 134.922l-99.745 99.745L256 355.742v-99.745zM256 42.664a213.33 213.33 0 0 1 213.333 213.333c0 24.978-4.292 48.954-12.18 71.229l-33.447-33.446a171 171 0 0 0 2.149-10.91l.812-5.539h-19.435l-42.651-42.667h60.592c-7.937-63.628-50.87-117.438-111.146-139.307a273.7 273.7 0 0 1 47.941 130.501l.699 8.806H320a228.27 228.27 0 0 0-64-141.867a228.26 228.26 0 0 0-63.294 134.271l-.706 7.596h42.667v42.667H192a228.28 228.28 0 0 0 58.772 136.311l5.228 5.555a228 228 0 0 0 15.559-17.74l55.67 55.693c-22.276 7.888-46.251 12.181-71.229 12.181c-117.821 0-213.333-95.513-213.333-213.334c0-117.82 95.512-213.333 213.333-213.333M149.333 277.331H86.827c7.937 63.628 50.87 117.437 111.146 139.306a273.7 273.7 0 0 1-48.64-139.306M320 298.664c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.333-9.552 21.333-21.334s-9.551-21.333-21.333-21.333M197.675 95.763l-4.534 1.672C136.8 119.165 96.113 169.107 86.22 228.677l-.887 5.988h64a273.7 273.7 0 0 1 43.706-131.98z"></svg:path>`,
})
export class IxGlobeTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGotoIcon],svg[ix-goto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.334 256l-128 128l-30.294-30.293l76.587-76.374H42.667v-42.666h216.96l-76.587-76.374L213.334 128zM416 309.333c29.456 0 53.334-23.878 53.334-53.333S445.456 202.667 416 202.667c-29.455 0-53.333 23.878-53.333 53.333s23.878 53.333 53.333 53.333"></svg:path>`,
})
export class IxGotoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGraphIcon],svg[ix-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 60.54l79.376 238.128H448v42.666h-79.376L320 195.463l-85.333 256l-64-192l-27.291 81.871H64v-42.666h48.624l58.043-174.129l64 192z" clip-rule="evenodd"></svg:path>`,
})
export class IxGraphIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGraphFilledIcon],svg[ix-graph-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M318.846 64H64v234.668h48.624l58.043-174.129l64 192zM64 341.334V448h169.512l-62.845-188.537l-27.291 81.871zM235.821 448H448V341.334h-79.376L320 195.463zM448 298.668V64H321.154l78.222 234.668z" clip-rule="evenodd"></svg:path>`,
})
export class IxGraphFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGridPenIcon],svg[ix-grid-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 426.668h192v-20.837l21.83-21.83h-43.164v-42.667h85.334v.497l43.163-43.163h-.497v-42.667h43.164l24.836-24.836l17.334 16.308l42.666 40.143V85.335H42.667zm384-179.195v-34.139h-85.334v-42.666h85.334zM85.334 170.668h85.333v42.666H85.334zm127.999 128v-42.667h85.334v42.667zm-42.666 0v-42.667H85.334v42.667zm-85.333 42.666h85.333v42.667H85.334zm127.999-128h85.334v-42.666h-85.334zm196 48L464 316l-34.457 34.458l-54.667-54.667zm-49.542 49.542l54.667 54.667l-103.791 103.791H256v-54.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxGridPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGroupIcon],svg[ix-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64v42.667h-64v298.666h64V448H64V64zM448 64v384H341.333v-42.667h64V106.667h-64V64zm-85.333 256v42.667H149.333V320zm0-85.333v42.666H149.333v-42.666zm0-85.334V192H149.333v-42.667z"></svg:path>`,
})
export class IxGroupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixGroupObjectsIcon],svg[ix-group-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42.667V64h256V42.667h85.333V128H448v256h21.333v85.334H384V448H128v21.334H42.667V384H64V128H42.667V42.667zm256 64H128V128h-21.333v256H128v21.334h256V384h21.333V128H384zm-85.333 42.667v64h64v149.333H213.333v-64h-64V149.334zM320 256h-64v64h64zm-64-64h-64v64h21.333v-42.666H256z"></svg:path>`,
})
export class IxGroupObjectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHandIcon],svg[ix-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 288.001v5.334c0 43.281 11.428 81.02 23.178 108.262c4 9.275 7.98 17.2 11.446 23.555l199.814 1.367c4.834-7.1 10.602-16.117 16.342-26.359C372.47 373.353 384 343.913 384 320.001v-85.333h-8.333c-7.18 0-13 5.82-13 13v72.333H320V117.335c0-5.891-4.776-10.667-10.667-10.667s-10.666 4.776-10.666 10.667v138.666H256v-160c0-5.89-4.776-10.666-10.667-10.666S234.667 90.11 234.667 96v160H192V117.335c0-5.891-4.776-10.667-10.667-10.667s-10.666 4.776-10.666 10.667v160H128V160.001c0-5.891-4.776-10.666-10.667-10.666s-10.666 4.775-10.666 10.666zm10.666-181.333C87.878 106.668 64 130.546 64 160.001v133.334c0 101.333 53.333 174.321 53.333 174.321l245.334 1.679s64-79.064 64-149.334V170.668c-7.306 0-14.441.734-21.334 2.134A105.8 105.8 0 0 0 384 179.544a106.6 106.6 0 0 0-21.333 12.449v-74.658c0-29.455-23.879-53.334-53.334-53.334a53.2 53.2 0 0 0-18.937 3.46c-9.458-14.902-26.105-24.793-45.063-24.793c-18.957 0-35.604 9.89-45.062 24.793a53.2 53.2 0 0 0-18.938-3.46c-24.773 0-45.601 16.89-51.597 39.784a54 54 0 0 0-.906 4.125a54 54 0 0 0-4.161-.742a54 54 0 0 0-7.336-.5" clip-rule="evenodd"></svg:path>`,
})
export class IxHandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHandFilledIcon],svg[ix-hand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.333 321.173H320l-.144-234.666c0-11.783-9.551-21.334-21.333-21.334c-10.94 0-19.957 8.236-21.19 18.846l-.143 2.487l.143 170.667H256v-192c0-11.782-9.551-21.333-21.333-21.333c-10.941 0-19.958 8.235-21.19 18.845l-.144 2.488v192H192V86.507c0-11.783-9.551-21.334-21.333-21.334c-10.941 0-19.958 8.236-21.19 18.846l-.144 2.487V267.84H128V129.173c0-11.782-9.551-21.333-21.333-21.333c-10.94 0-19.958 8.235-21.19 18.845l-.144 2.488v119.581c0 49.739 7.402 99.178 21.943 146.697l28.404 75.056h212.352a223.85 223.85 0 0 0 57.074-149.904l-.391-147.568l-2.35.564c-21.762 5.738-59.413 24.884-60.918 48.068l-.114 3.506z"></svg:path>`,
})
export class IxHandFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHandshakeIcon],svg[ix-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.333 42.667c70.693 0 128 54.292 128 121.263q0 30.083-12.208 63.25l-34.12-34.026c2.069-8.638 3.258-16.943 3.575-24.907l.087-4.317c0-42.876-37.705-78.597-85.334-78.597c-16.237 0-31.658 4.17-44.915 11.775l-59.732 57.571c-8.331 8.331-8.331 21.838 0 30.169c8.331 8.332 21.839 8.332 30.17 0l57.896-60.211l29.04 29.432l82.37 82.364c24.994 24.994 24.994 65.517 0 90.51c-7.998 7.998-17.586 13.437-27.746 16.316l-1.055.274c4.479 20.576-1.28 42.932-17.276 58.928c-16.465 16.465-39.669 22.083-60.733 16.855c-2.891 9.893-8.279 19.013-16.137 26.173c-22.449 20.456-55.242 22.352-79.798 4.414l-3.782-3.284l-16.611-14.899Q42.666 276.306 42.666 163.93c0-66.972 57.308-121.263 128.001-121.263c32.792 0 62.704 11.682 85.351 30.893c22.63-19.218 52.533-30.893 85.315-30.893M170.667 85.333c-47.629 0-85.334 35.721-85.334 78.597c0 59.965 50.908 139.989 156.18 236.028l9.58 8.597c8.44 8.515 24.062 15.111 33.143 6.355c8.248-7.954 7.404-19.021.935-27.226l-13.168-13.434l-49.297-49.296l-.907-.797l30.528-30.549l44.188 44.823l16.7 16.693a62 62 0 0 1 3.265 3.528l10.659 10.86c11.108 11.109 24.879 11.521 33.21 3.19s8.068-22.251-3.04-33.36l-51.024-51.772l-23.942-23.957l30.165-30.187l15.433 15.439a65 65 0 0 1 4.5 4.098l19.455 19.887l23.927 23.923c8.331 8.331 21.838 8.331 30.169 0c8.332-8.331 8.332-21.838 0-30.17l-80.296-80.278l-28.67 28.693c-24.994 24.994-65.516 24.994-90.51 0c-24.993-24.993-24.993-65.516 0-90.509l19.959-19.976l-2.059-1.628c-15.021-11.26-33.772-17.572-53.749-17.572"></svg:path>`,
})
export class IxHandshakeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHardDiskDriveIcon],svg[ix-hard-disk-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 469.333H320v-42.666h-42.667v42.666H256v-42.666h-42.667v42.666h-128V42.667h341.334v426.666H384v-42.666h-42.667zm10.667-64l32-32v-256l-32-32H160l-32 32v256l32 32zm10.667-192c0-58.91-47.757-106.666-106.667-106.666s-106.667 47.756-106.667 106.666c0 39.744 21.736 74.411 53.969 92.762l71.01-47.953l30.294 27.887l-14.648 28.452c42.262-14.182 72.709-54.11 72.709-101.148m-76.934 77.733l-13.883-13.722l-79.389 62.067c-18.678 14.605-8.352 44.578 15.357 44.578a25.73 25.73 0 0 0 21.15-11.072zm-51.066-77.733c0-11.782 9.551-21.333 21.333-21.333s21.333 9.551 21.333 21.333s-9.551 21.334-21.333 21.334s-21.333-9.552-21.333-21.334" clip-rule="evenodd"></svg:path>`,
})
export class IxHardDiskDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHardResetIcon],svg[ix-hard-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v42.667l-68.666-.003c36.078 31.658 58.188 77.99 58.146 128.473c-.065 78.18-53.241 146.318-129.062 165.376c-75.82 19.058-154.896-15.838-191.92-84.694c-13.778-25.625-20.421-53.515-20.357-81.153h42.538q-.013.96-.012 1.92c1.05 69.942 58.05 126.089 128 126.08c64.072 1.056 118.709-46.194 126.906-109.748c6.124-47.483-15.135-92.74-52.237-118.948l-.002 79.363h-42.667V128zM178.847 64l.001 22.836a88.8 88.8 0 0 1 28.134 16.267l19.797-11.43l29.63 51.32l-19.784 11.424a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.509 10.981-1.482 16.25l19.784 11.423l-29.63 51.32l-19.797-11.43a88.8 88.8 0 0 1-28.134 16.267v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.134-16.266L71.657 249.66l-29.63-51.32l19.784-11.423a89.4 89.4 0 0 1-1.482-16.25c0-5.55.509-10.983 1.482-16.251l-19.784-11.423l29.63-51.32l19.796 11.43a88.8 88.8 0 0 1 28.135-16.267V64zm-29.63 71.111c-19.636 0-35.555 15.919-35.555 35.556s15.92 35.555 35.556 35.555c19.637 0 35.555-15.919 35.555-35.555c0-19.637-15.918-35.556-35.555-35.556"></svg:path>`,
})
export class IxHardResetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHardwareCabinetIcon],svg[ix-hardware-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 469.334V42.667H106.667v426.667zm-42.667-85.333H149.334V85.334h213.333zM213.334 192v-85.334h-42.667V192zm128-21.334V128H234.667v42.666zm-64 106.667v-64h-42.667v64zm64 0v-64h-42.667v64zm-128 0v-64h-42.667v64zm128 85.333v-64H170.667v64z"></svg:path>`,
})
export class IxHardwareCabinetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHatManIcon],svg[ix-hat-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M322.035 100.31c-.888-4.672-6.74-6.307-9.921-2.773c-29.991 33.323-82.243 33.323-112.233 0c-3.181-3.534-9.033-1.899-9.921 2.773l-13.368 70.356h158.81zm21.474 113.022H168.486l-4.054 21.334h183.13zM148.043 92.345l-27.04 142.321h-35.67v42.666h341.334v-42.666h-35.675l-27.04-142.32c-7.475-39.343-56.762-53.118-83.552-23.351c-13.041 14.49-35.764 14.49-48.805 0c-26.79-29.767-76.077-15.992-83.552 23.35m22.624 334.321L128 405.332l-42.667-21.333v85.333h341.334v-85.333L384 405.332l-42.667 21.334L256 469.332zM384 298.665H128v21.334h.062c1.392 29.689 25.904 53.333 55.938 53.333h8c22.679 0 34.959-14.259 39.955-32.235c3.155-11.352 12.263-21.098 24.045-21.098s20.89 9.746 24.045 21.098c4.996 17.976 17.276 32.235 39.955 32.235h8c30.034 0 54.546-23.644 55.938-53.333H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxHatManIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHatManFilledIcon],svg[ix-hat-man-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M280.4 68.995c26.79-29.767 76.077-15.992 83.552 23.35l14.88 78.321h-245.67l14.881-78.32c7.475-39.343 56.762-53.118 83.552-23.351c13.041 14.49 35.764 14.49 48.805 0M129.109 191.999l-8.106 42.667h-35.67v42.666h341.334v-42.666h-35.675l-8.106-42.667zm41.558 234.667L128 405.332l-42.667-21.333v85.333h341.334v-85.333L384 405.332l-42.667 21.334L256 469.332zm213.333-128H128v21.333h.062c1.392 29.69 25.904 53.333 55.938 53.333h8c22.679 0 34.959-14.259 39.955-32.235c3.155-11.352 12.263-21.098 24.045-21.098s20.89 9.746 24.045 21.098c4.996 17.976 17.276 32.235 39.955 32.235h8c30.034 0 54.546-23.643 55.938-53.333H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxHatManFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHeadingIcon],svg[ix-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.667 448V64h48.496v169.101h201.674V64h48.496v384h-48.496V269.685H155.163V448z"></svg:path>`,
})
export class IxHeadingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHealthIcon],svg[ix-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M433.256 101.735c29.053 30.388 40.558 72.179 34.517 111.598h-43.409c6.515-28.563-.801-59.995-21.948-82.113c-31.299-32.737-81.216-32.737-112.515 0L256 166.679l-33.902-35.46c-31.299-32.737-81.216-32.737-112.515 0c-21.147 22.119-28.463 53.551-21.948 82.114H44.227c-6.042-39.419 5.464-81.211 34.516-111.599c44.631-46.68 114.991-50.05 163.335-10.107a127 127 0 0 1 10.86 10.107l3.062 3.203l3.061-3.202c3.472-3.631 7.099-7 10.86-10.108c48.345-39.943 118.704-36.574 163.335 10.108M360.14 298.667h59.03L256 469.333L92.83 298.667h59.029L256 407.592zM192 122.964l-55.872 111.703H42.667v42.666h119.851L192 218.368l64 128.001l34.517-69.036h178.816v-42.666H311.851L288 186.964l-32 63.98z" clip-rule="evenodd"></svg:path>`,
})
export class IxHealthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHealthFilledIcon],svg[ix-health-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M248.959 107.967c-44.804-55.608-124.849-58.955-173.652-7.261c-34.192 36.217-43.081 89.085-26.668 133.961h87.489L192 122.964l64 127.98l32-63.98l23.851 47.703h151.512c16.412-44.875 7.523-97.744-26.668-133.961c-48.804-51.693-128.848-48.347-173.653 7.261l-7.041 8.739zM437.26 277.333H290.518L256 346.369l-64-128.001l-29.482 58.965H74.742q.281.302.565.603L255.91 469.237l.089.096H256l180.694-191.397q.283-.3.565-.603" clip-rule="evenodd"></svg:path>`,
})
export class IxHealthFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHeartIcon],svg[ix-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M433.256 101.735c48.102 50.312 48.102 131.885 0 182.198L256 469.333l-177.257-185.4c-48.102-50.313-48.102-131.886 0-182.199c44.631-46.68 114.991-50.05 163.335-10.107a127 127 0 0 1 10.86 10.107l3.062 3.203l3.061-3.202c3.472-3.631 7.099-7 10.86-10.108c48.345-39.943 118.704-36.574 163.335 10.108m-323.673 29.484c31.299-32.737 81.216-32.737 112.515 0L256 166.679l33.901-35.459c31.299-32.737 81.216-32.737 112.515 0c32.333 33.818 32.332 89.409 0 123.228l-3.061 3.202L256 407.592L109.583 254.448c-32.333-33.819-32.333-89.41 0-123.229" clip-rule="evenodd"></svg:path>`,
})
export class IxHeartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHeartFilledIcon],svg[ix-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M75.307 100.706c48.803-51.694 128.848-48.347 173.652 7.261l7.042 8.739l7.041-8.739c44.805-55.608 124.849-58.954 173.653-7.261c46.203 48.941 46.203 128.289 0 177.23L256.001 469.333H256l-.089-.096L75.307 277.936c-46.204-48.941-46.204-128.289 0-177.23" clip-rule="evenodd"></svg:path>`,
})
export class IxHeartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHeatMapChartIcon],svg[ix-heat-map-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h149.333v149.333H64zm42.667 42.667v64h64v-64zm-21.334 128H192v106.666H85.333zM128 277.333v21.334h21.333v-21.334zm213.333-42.666H234.667v106.666h106.666zm-64 64v-21.334h21.334v21.334zM234.667 85.333h106.666V192H234.667zM277.333 128v21.333h21.334V128zM448 405.333h-42.667V448H448zm-64-234.666h64v-64h-64zM106.667 384h64v64h-64zM320 384h-64v64h64zm64-128h64v64h-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxHeatMapChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHeatMapChartFilledIcon],svg[ix-heat-map-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h149.333v149.333H64zm21.333 170.667H192v106.666H85.333zm256 0H234.667v106.666h106.666zM234.667 85.333h106.666V192H234.667zm213.333 320h-42.667V448H448zm-64-234.666h64v-64h-64zM106.667 384h64v64h-64zM320 384h-64v64h64zm64-128h64v64h-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxHeatMapChartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHeightIcon],svg[ix-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 85.333V42.667H128v42.666h127.999l-79.085 79.085l30.17 30.17l27.583-27.583v178.018l-27.584-27.583l-30.17 30.17l79.057 79.057H128v42.666h256v-42.666H256.027l79.056-79.057l-30.17-30.17l-27.58 27.58V167.007l27.581 27.581l30.17-30.17l-79.085-79.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxHeightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHexagonVerticalBarsIcon],svg[ix-hexagon-vertical-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.246l192 110.851V366.8L256 477.65L64 366.8V145.097zm0 49.259l-149.333 86.208V342.17L256 428.38l149.333-86.229V169.734zM277.333 160v192h-42.666V160zM192 202.666v106.667h-42.667V202.666zm170.667 0v106.667H320V202.666z"></svg:path>`,
})
export class IxHexagonVerticalBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHexagonVerticalBarsDatabaseIcon],svg[ix-hexagon-vertical-bars-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m234.667 34.246l192 110.851l.001 74.638c-12.81-3.289-27.257-5.467-42.667-6.162v-43.839l-149.334-86.23l-149.333 86.209V342.17l149.333 86.208l21.426-12.372l.035 49.254l-21.461 12.39l-192-110.851V145.097zm234.248 367.087q.418 1.974.419 4v.027l-.001 21.252v.054c0 23.329-42.125 42.284-94.412 42.661l-1.587.006c-53.02 0-96-19.103-96-42.667v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.037 8.494 21.331 11.983c19.36 8.144 45.463 13.344 74.254 13.344c29.932 0 56.956-5.629 76.546-14.335c7.323-3.255 13.697-6.982 19.035-10.998m0-64q.418 1.974.419 4v.027l-.001 21.252v.054c0 23.329-42.125 42.284-94.412 42.661l-1.587.006c-53.02 0-96-19.103-96-42.667v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.037 8.494 21.331 11.983c19.36 8.144 45.463 13.344 74.254 13.344c29.932 0 56.956-5.629 76.546-14.335c7.323-3.255 13.697-6.982 19.035-10.998M256 160v116.313l-.006.07l.006 8.484V352h-42.666V160zm117.334 74.666c52.489 0 95.14 18.723 95.987 41.961l.013.706v21.333c0 23.564-42.981 42.667-96 42.667c-52.49 0-95.14-18.722-95.987-41.961l-.013-.706v-21.333l.142-2.341c2.734-22.475 44.606-40.326 95.858-40.326m-202.667-32v106.667H128V202.666zm170.667 0v12.896c-16.41 2.35-31.147 6.454-43.228 11.823l.561-.247v-24.472z"></svg:path>`,
})
export class IxHexagonVerticalBarsDatabaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHexagonVerticalBarsDatabaseFilledIcon],svg[ix-hexagon-vertical-bars-database-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m234.667 34.246l192 110.851l.001 74.638c-15.727-4.037-33.92-6.402-53.334-6.402c-11.147 0-21.89.781-32 2.229v-12.896h-42.667v24.472l-.56.247c-26.734 11.882-40.344 30.053-42.064 48.441l-.043.487V160h-42.666v192H256v-67.133l.128 180.394l-21.461 12.39l-192-110.851V145.097zm-64 168.42H128v106.667h42.667z"></svg:path><svg:path fill-rule="nonzero" d="M468.915 401.333q.418 1.974.419 4v21.333c0 23.564-42.981 42.667-96 42.667c-53.02 0-96-19.103-96-42.667v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.037 8.494 21.331 11.983c19.36 8.144 45.463 13.344 74.254 13.344c29.932 0 56.956-5.629 76.546-14.335c7.323-3.255 13.697-6.982 19.035-10.998m0-64q.418 1.974.419 4v21.333c0 23.564-42.981 42.667-96 42.667c-53.02 0-96-19.103-96-42.667v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.037 8.494 21.331 11.983c19.36 8.144 45.463 13.344 74.254 13.344c29.932 0 56.956-5.629 76.546-14.335c7.323-3.255 13.697-6.982 19.035-10.998m-95.581-102.667c52.489 0 95.14 18.723 95.987 41.961l.013.706v21.333c0 23.564-42.981 42.667-96 42.667c-52.49 0-95.14-18.722-95.987-41.961l-.013-.706v-21.333l.142-2.341c2.734-22.475 44.606-40.326 95.858-40.326"></svg:path></svg:g>`,
})
export class IxHexagonVerticalBarsDatabaseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHexagonVerticalBarsFilledIcon],svg[ix-hexagon-vertical-bars-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.246l192 110.851V366.8L256 477.65L64 366.8V145.097zM277.333 160h-42.666v192h42.666zM192 202.666h-42.667v106.667H192zm170.667 0H320v106.667h42.667z"></svg:path>`,
})
export class IxHexagonVerticalBarsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHierarchyIcon],svg[ix-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64h170.667v106.667H170.667zm-128 277.333h128v85.334h-128zm298.667 0h128v85.334h-128zm-149.334 0h128v85.334H192zM277.334 192l-.001 42.666h149.334V320H384v-42.688H277.333V320h-42.666v-42.688H128V320H85.334v-85.333l149.333-.001V192z"></svg:path>`,
})
export class IxHierarchyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHighlightIcon],svg[ix-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.333 426.667l-42.666 42.666H149.333L192 426.667zM346.327 44.957l120.68 120.68l-18.036 23.249l-32.555 41.5l-19.099 23.965l-17.014 21.002l-11.393 13.809l-13.367 15.819l-8.658 9.92l-7.485 8.255l-6.314 6.589l-14.992 14.827l-30.848 31.298l-16.274 16.742l-5.875-.29l-6.153-.096q-15.73.004-34.944 2.44l-8.03 1.128l-7.846 1.292l-7.507 1.39l-10.282 2.12l-19.668 4.737l-64 32L64 448l10.667-42.667l32-64l1.011-2.406l1.789-4.932l1.5-4.758l1.635-5.922c1.668-6.5 3.391-14.732 4.731-24.648q3.797-28.096 2.79-56.904l3.305-3.722l3.374-3.591l15.737-16.104l37.854-37.624l11.667-11.196l12.974-11.881l11.319-9.998l12.156-10.437l12.991-10.875l13.828-11.314l14.664-11.752l23.564-18.45l16.754-12.85l17.59-13.286zM162.25 277.753a376 376 0 0 1-1.137 13.92l-1.496 12.708c-.996 7.37-2.194 14.215-3.55 20.548l-4.278 18.118l18.647 17.122l18.41-2.857c10.161-2.054 20.156-3.751 29.787-4.973a381 381 0 0 1 16.467-1.738zm180.044-176.484l-6.018 4.558l-24.406 18.788l-15.194 11.947l-14.329 11.481l-13.459 11.009l-12.584 10.53l-11.704 10.043l-10.816 9.546l-13.234 12.13l-10.078 9.682l-27.412 27.24l90.596 90.596l5.58-5.684l18.978-18.938l4.066-3.971l5.514-5.73l6.945-7.648l8.215-9.405L336 262.007l11.151-13.511l16.8-20.737l18.896-23.707l27.351-34.879z"></svg:path>`,
})
export class IxHighlightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHighlightFilledIcon],svg[ix-highlight-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.333 426.667l-42.666 42.666H149.333L192 426.667zm-364.165-82.338l62.502 62.502l-61.003 30.502L64 448l10.667-42.667zM125.1 236.261l151.037 151.037l-5.165 5.314l-5.875-.29l-6.153-.096q-15.73.004-34.944 2.44l-8.03 1.128l-7.846 1.292l-7.507 1.39l-9.23 1.902l-78.438-78.438c1.558-6.273 3.137-14.044 4.384-23.273q3.797-28.096 2.79-56.904l3.305-3.722zM346.327 44.957l120.68 120.68l-18.036 23.249l-32.555 41.5l-19.099 23.965l-17.014 21.002l-11.393 13.809l-13.367 15.819l-8.658 9.92l-7.485 8.255l-6.314 6.589l-14.992 14.827l-27.059 27.454l-151.059-151.059l2.563-2.621l37.854-37.624l11.667-11.196l12.974-11.881l11.319-9.998l12.156-10.437l12.991-10.875l13.828-11.314l14.664-11.752l23.564-18.45l16.754-12.85l17.59-13.286z"></svg:path>`,
})
export class IxHighlightFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHistoryIcon],svg[ix-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 256c0 106.039-85.961 192-192 192c-49.795 0-95.163-18.956-129.281-50.046l29.775-30.602c26.414 23.621 61.283 37.981 99.506 37.981c82.475 0 149.334-66.858 149.334-149.333s-66.859-149.333-149.334-149.333C194.859 106.667 128 173.525 128 256q.002 6.066.476 12.01l42.191-42.18l30.17 30.17l-94.17 94.17L12.497 256l30.17-30.17l43.094 43.083A195 195 0 0 1 85.333 256c0-106.039 85.962-192 192-192c106.039 0 192 85.961 192 192M255.999 149.333V267.52l73.6 48.853l23.467-35.413l-54.4-36.48v-95.147z" clip-rule="evenodd"></svg:path>`,
})
export class IxHistoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHistoryListIcon],svg[ix-history-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 378.623c-13.637 3.51-27.934 5.376-42.667 5.376c-47.128 0-89.795-19.102-120.68-49.987l30.17-30.17c23.164 23.164 55.164 37.491 90.51 37.491c14.96 0 29.321-2.567 42.667-7.284zM85.333 213.333q.002 6.547.486 12.972l-32.486-32.476l-30.17 30.17l83.504 83.504l83.503-83.504l-30.17-30.17l-31.451 31.441c-.363-3.93-.549-7.912-.549-11.937c0-70.693 57.308-128 128-128s128 57.307 128 128c0 32.783-12.324 62.687-32.593 85.333h52.428c14.521-25.103 22.832-54.247 22.832-85.333c0-94.257-76.41-170.667-170.667-170.667S85.333 119.076 85.333 213.333m149.334 11.52V106.666h42.666v95.147l54.4 36.48l-23.466 35.413zm256 95.146v42.667H384v-42.667zm-128 0v42.667H320v-42.667zm128 106.667v-42.667H384v42.667zm-128-42.667v42.667H320v-42.667zm128 106.667v-42.667H384v42.667zm-128-42.667v42.667H320v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxHistoryListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHomeIcon],svg[ix-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l192 153.6V448H277.333V341.333h-42.666V448H64V217.6zm0 53.333L106.667 234.667v170.666H192V298.667h128v106.666h85.333V234.667z"></svg:path>`,
})
export class IxHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHomeFilledIcon],svg[ix-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64L64 217.6V448h149.333V320h85.334v128H448V217.6z"></svg:path>`,
})
export class IxHomeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHourglassIcon],svg[ix-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.667v115.477L286.165 256L384 353.814v115.52H128v-115.52L225.813 256L128 158.144V42.667zM256 286.166l-85.333 85.333V416L256 362.667L341.333 416v-44.5zm85.333-200.832H170.667v55.146l30.236 30.244l110.453-.26l29.977-29.984z"></svg:path>`,
})
export class IxHourglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHourglassEmptyIcon],svg[ix-hourglass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 42.667h256V169.5L287.89 256L384 342.499v126.834H128V342.499L224.11 256L128 169.501zm128 184.632l85.333-76.8V85.333H170.667V150.5zm0 57.402l-85.333 76.8v65.166h170.666v-65.166z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHourglassEndIcon],svg[ix-hourglass-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.667H128V169.5l96.11 86.5L128 342.499v126.834h256V342.499L287.89 256L384 169.501zm-42.667 107.832L256 227.299l-85.333-76.8V85.333h170.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassEndIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHourglassFilledIcon],svg[ix-hourglass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.667H128V169.5l96.11 86.5L128 342.499v126.834h256V342.499L287.89 256L384 169.501z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixHourglassStartIcon],svg[ix-hourglass-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 469.333h256V342.499L287.89 256L384 169.501V42.667H128V169.5l96.11 86.5L128 342.499zm42.667-107.832l85.333-76.8l85.333 76.8v65.166H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassStartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixIdIcon],svg[ix-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128H85.333v256h341.334zm-384-42.667v341.334h426.666V85.333zm188.333 256V164.208h49q31.25 0 50 6q24.5 7.875 37.5 29.25q13 21.25 13 53.375q0 33-13 53.875q-16.25 26.375-50.25 32q-15.625 2.625-40 2.625zm39.875-31.25h7.625q27.25 0 40.375-8.875q11.5-7.625 16.625-23.625q3.75-11.874 3.75-25.25q0-14.374-4.375-26.625q-4.375-12.249-12-19.125q-7.25-6.5-16.5-8.75q-9.25-2.375-27.875-2.375h-7.625zM149 164.208v177.125h39.875V164.208z" clip-rule="evenodd"></svg:path>`,
})
export class IxIdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixIdFilledIcon],svg[ix-id-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333v341.334h426.666V85.333zm188.333 256V164.208h49q31.25 0 50 6q24.5 7.875 37.5 29.25q13 21.25 13 53.375q0 33-13 53.875q-16.25 26.375-50.25 32q-15.625 2.625-40 2.625zm39.875-31.25h7.625q27.25 0 40.375-8.875q11.5-7.625 16.625-23.625q3.75-11.874 3.75-25.25q0-14.374-4.375-26.625q-4.375-12.249-12-19.125q-7.25-6.5-16.5-8.75q-9.25-2.375-27.875-2.375h-7.625zM149 164.208v177.125h39.875V164.208z" clip-rule="evenodd"></svg:path>`,
})
export class IxIdFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixImageIcon],svg[ix-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 448V64h384v384zm109.227-198.4l-66.561 106.948v48.785h298.667v-33.92l-64-64l-65.493 65.494zm232.106-142.934H106.666v169.211l61.44-98.81l110.72 132.693l62.507-62.507l64 64zm-96 42.667c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class IxImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixImageFilledIcon],svg[ix-image-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM173.227 206.933l-66.561 106.948v91.452h298.667v-76.587l-64-64l-65.493 65.494zm136.106-57.6c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxImageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixImportIcon],svg[ix-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V448H64V170.666h42.667v234.667h298.667V128H320V85.333zm-277.333 0c57.36 0 104.145 45.276 106.568 102.04l.099 4.627l-.001 76.485l48.916-48.904l30.17 30.17L256 350.17L155.582 249.75l30.17-30.17l48.915 48.904V192c0-34.084-26.644-61.945-60.24-63.892l-3.76-.108h-128V85.333z"></svg:path>`,
})
export class IxImportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixIndicatorIcon],svg[ix-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.668c94.257 0 170.667 76.41 170.667 170.667c0 87.024-65.135 158.836-149.313 169.343l-.021 22.657h149.334v64H85.333v-64h149.334l.001-22.654c-84.189-10.498-149.335-82.314-149.335-169.346c0-94.257 76.41-170.667 170.667-170.667m0 42.667c-70.692 0-128 57.307-128 128c0 70.692 57.308 128 128 128s128-57.308 128-128s-57.308-128-128-128m59.582 38.248l30.17 30.17l-48.525 48.551a42.7 42.7 0 0 1 1.44 11.031c0 23.564-19.103 42.666-42.667 42.666s-42.667-19.102-42.667-42.666c0-23.565 19.103-42.667 42.667-42.667c3.814 0 7.512.5 11.03 1.439z" clip-rule="evenodd"></svg:path>`,
})
export class IxIndicatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixIndicatorFilledIcon],svg[ix-indicator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 43.84c94.257 0 170.667 76.41 170.667 170.667c0 87.024-65.135 158.836-149.313 169.343v21.485h149.313v65.172H85.333v-65.172h149.335v-21.482C152.2 373.57 88.004 304.448 85.415 219.822l-.082-5.315C85.333 120.25 161.743 43.84 256 43.84m59.582 80.915l-48.552 48.524A42.7 42.7 0 0 0 256 171.84c-23.564 0-42.667 19.102-42.667 42.667c0 23.564 19.103 42.666 42.667 42.666s42.667-19.102 42.667-42.666a42.7 42.7 0 0 0-1.44-11.031l48.525-48.551z" clip-rule="evenodd"></svg:path>`,
})
export class IxIndicatorFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInfoIcon],svg[ix-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"></svg:path>`,
})
export class IxInfoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInfoFeedIcon],svg[ix-info-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192.021 128.021h256.022V85.354H192.02zM64.043 170.688h85.333V85.333H64.043zm127.978 42.666h256.022v-42.666H192.02zm170.667 170.667h85.355v-85.355h-85.355zM64 341.354h256v-42.688H64zm.043 85.334h256V384.02h-256z"></svg:path>`,
})
export class IxInfoFeedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInfoFilledIcon],svg[ix-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m26.714 128c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"></svg:path>`,
})
export class IxInfoFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInfoMultipleIcon],svg[ix-info-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 266.667c0 30.622 6.792 59.659 18.951 85.685c-25.25-32.504-40.284-73.339-40.284-117.685c0-106.039 85.961-192 192-192c44.346 0 85.181 15.034 117.685 40.284C326.326 70.791 297.289 64 266.667 64C154.737 64 64 154.737 64 266.667m213.333 202.666c106.039 0 192-85.961 192-192s-85.961-192-192-192s-192 85.961-192 192s85.961 192 192 192m0-42.227c-82.717 0-149.773-67.055-149.773-149.773S194.616 127.56 277.333 127.56c82.718 0 149.773 67.056 149.773 149.773c0 82.718-67.055 149.773-149.773 149.773M256 384V256h42.666v128zm48.041-192c0 15.467-11.261 26.667-26.496 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.151 11.283-26.371 26.837-26.371c15.235 0 26.496 11.22 26.496 26.667" clip-rule="evenodd"></svg:path>`,
})
export class IxInfoMultipleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInfoMultipleFilledIcon],svg[ix-info-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 266.667c0 30.622 6.792 59.659 18.951 85.685c-25.25-32.504-40.284-73.339-40.284-117.685c0-106.039 85.961-192 192-192c44.346 0 85.181 15.034 117.685 40.284C326.326 70.791 297.289 64 266.667 64C154.737 64 64 154.737 64 266.667m213.333 202.666c106.039 0 192-85.961 192-192s-85.961-192-192-192s-192 85.961-192 192s85.961 192 192 192M256 256v128h42.666V256zm21.545-37.333c15.235 0 26.496-11.2 26.496-26.667c0-15.447-11.261-26.667-26.496-26.667c-15.554 0-26.837 11.22-26.837 26.371c0 15.763 10.986 26.963 26.837 26.963" clip-rule="evenodd"></svg:path>`,
})
export class IxInfoMultipleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixIngestionIcon],svg[ix-ingestion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 64v362.667H64V192h42.666v192H384V106.667l-192-.001V64zM79.085 48.915l198.248 198.248v-76.496H320V320H170.667v-42.667h76.496L48.915 79.085z"></svg:path>`,
})
export class IxIngestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixIngestionReportIcon],svg[ix-ingestion-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384.003 85.336l85.333 85.333v256H42.669v-128h42.666v85.333H426.67V181.336l-53.333-53.334h-96V85.336zm0 234.666v21.334h-256v-21.334zm-128-256v213.334H42.669V94.17l97.83 97.831H85.336v42.667h128v-128h-42.667v55.163l-97.831-97.83zm21.332 192h106.668v21.334l-106.668-.001zm0-64h106.668v21.334H277.335z"></svg:path>`,
})
export class IxIngestionReportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInkPenIcon],svg[ix-ink-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m308.685 110.437l92.876 92.876L352 352L86.913 440.362l163.572-163.748c1.76.47 3.608.72 5.515.72c11.782 0 21.333-9.552 21.333-21.334s-9.551-21.333-21.333-21.333s-21.334 9.55-21.334 21.333c0 1.915.253 3.771.726 5.537L71.447 425.66L160 160zM362.666 64L448 149.333l-35.125 35.124l-85.333-85.333z"></svg:path>`,
})
export class IxInkPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInkPenAddIcon],svg[ix-ink-pen-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 298.668v64h64v42.667h-64v64h-42.666v-64h-64v-42.667h64v-64zm-64-256l85.334 85.333L384 170.668l-53.333 160l-288 96l96-288l160-53.333zm-19.619 79.959l-149.319 49.769l-54.742 164.181l96.402-96.388a21 21 0 0 1-.578-3.033l-.144-2.488c0-11.782 9.552-21.333 21.334-21.333S256 222.886 256 234.668s-9.551 21.333-21.333 21.333c-1.909 0-3.76-.25-5.521-.721l-96.367 96.337l164.138-54.698l49.791-149.299z"></svg:path>`,
})
export class IxInkPenAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInkPenFilledIcon],svg[ix-ink-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m362.667 64l-35.135 35.135l85.333 85.333L448 149.333zM160 160l148.67-49.557l92.887 92.887L352 352L86.916 440.362l163.569-163.748c1.759.469 3.608.719 5.515.719c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333c0 1.915.252 3.771.725 5.537L71.446 425.661z" clip-rule="evenodd"></svg:path>`,
})
export class IxInkPenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInquiryIcon],svg[ix-inquiry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V384H341.333v85.333L211.2 384H64V85.333zM405.333 128H106.667v213.333h117.275l74.725 49.003v-49.003h106.666zM256.935 286.4q10.25 0 16.938 6.75t6.687 17q0 10.125-6.687 16.875q-6.689 6.75-16.938 6.75q-10.5 0-17.125-6.75t-6.625-17.25q0-10 6.75-16.688t17-6.687m9.25-136q28.5 0 43.375 13.5q13.125 12.125 13.125 31.5q0 13.125-6.375 22.437q-5.579 8.148-18.812 17.493l-3.938 2.695q-12.5 8.375-15.375 12.812q-2.875 4.439-2.875 15.813v5.125h-36.875v-11q0-15.876 3.25-22.125q1.875-3.626 5-6.438l2.327-1.939q1.433-1.135 3.408-2.602l13.41-9.6q8.495-6.234 11.543-9.796q4.062-4.75 4.062-11.125q0-8-5.687-12.688q-5.688-4.687-15.438-4.687q-16 0-38.625 12.875L210.56 164.9q27.75-14.5 55.625-14.5"></svg:path>`,
})
export class IxInquiryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInquiryFilledIcon],svg[ix-inquiry-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V384H341.333v85.333L211.2 384H64V85.333zM256.935 286.4q-10.25 0-17 6.687t-6.75 16.688q0 10.5 6.625 17.25t17.125 6.75q10.25 0 16.938-6.75t6.687-16.875q0-10.25-6.687-17q-6.689-6.75-16.938-6.75m9.25-136q-27.875 0-55.625 14.5l11.125 27.75q22.624-12.876 38.625-12.875q9.75 0 15.438 4.687q5.687 4.687 5.687 12.688q0 6.375-4.062 11.125q-3.048 3.562-11.543 9.797l-13.41 9.6a142 142 0 0 0-3.408 2.601l-2.327 1.94q-3.125 2.811-5 6.437q-3.25 6.249-3.25 22.125v11h36.875v-5.125q0-11.375 2.875-15.813q2.875-4.437 15.375-12.812l3.938-2.695q13.233-9.344 18.812-17.493q6.375-9.312 6.375-22.437q0-19.376-13.125-31.5q-14.875-13.5-43.375-13.5"></svg:path>`,
})
export class IxInquiryFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInquiryMailIcon],svg[ix-inquiry-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m229.038 149.333l-8.266 6.346l-.58.53c-5.187 4.792-9.316 10.3-12.405 16.507c-2.27 4.537-4.194 10.935-5.478 19.284H144l70.114 60.098c-8.747 9.664-13.27 21.432-13.27 35.434q0 3.89.431 7.537l-94.608-81.735v192h298.666v-192l-98.74 85.306q.915-5.068.917-10.602c0-13.445-4.033-24.77-11.733-34.131L368 192h-40.632c14.442-10.946 24.611-21.388 30.92-30.966a76.4 76.4 0 0 0 6.324-11.7H448V448H64V149.334zm28.272 191.883l-1.31 1.13l-1.228-1.06q1.282-.01 2.538-.07m-1.222-85.26q13.846 0 22.881 9.12q9.034 9.117 9.034 22.965q0 13.678-9.034 22.797t-22.881 9.118q-14.185 0-23.135-9.118q-8.95-9.12-8.95-23.304q0-13.509 9.12-22.543q9.117-9.035 22.965-9.035m9.916-213.333q43.38 0 66.022 21.355q19.977 19.18 19.977 49.83q0 20.76-9.703 35.493q-8.49 12.89-28.635 27.672l-5.993 4.262q-19.026 13.248-23.403 20.268t-4.376 25.013v8.107h-56.127v-17.4q0-25.113 4.946-35q2.855-5.733 7.611-10.183l3.541-3.067a217 217 0 0 1 5.188-4.116l20.411-15.186q12.932-9.861 17.57-15.497q6.183-7.514 6.183-17.598q0-12.655-8.657-20.07t-23.497-7.415q-24.354 0-58.792 20.366L181.337 65.56q42.238-22.937 84.667-22.937"></svg:path>`,
})
export class IxInquiryMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInstagramLogoIcon],svg[ix-instagram-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M395.52 142.08c0 14.139-11.461 25.6-25.6 25.6c-14.138 0-25.6-11.461-25.6-25.6c0-14.138 11.462-25.6 25.6-25.6s25.6 11.462 25.6 25.6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M146.347 256c0-60.56 49.093-109.653 109.653-109.653A109.653 109.653 0 0 1 365.653 256c0 60.56-49.093 109.653-109.653 109.653S146.347 316.56 146.347 256m38.613 0c0 39.234 31.806 71.04 71.04 71.04A71.04 71.04 0 0 0 327.04 256c0-39.234-31.806-71.04-71.04-71.04s-71.04 31.806-71.04 71.04" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c-58.027 0-65.28 0-87.893 1.28a161.9 161.9 0 0 0-51.84 9.813a103.5 103.5 0 0 0-37.76 24.747a103.5 103.5 0 0 0-24.747 37.76a161.9 161.9 0 0 0-9.813 51.84c-1.28 22.613-1.28 29.866-1.28 87.893s0 65.28 1.28 87.893a161.9 161.9 0 0 0 9.813 51.84a103.5 103.5 0 0 0 24.747 37.76a103.5 103.5 0 0 0 37.76 24.747a161.9 161.9 0 0 0 51.84 9.813c22.613 1.28 29.866 1.28 87.893 1.28s65.28 0 87.893-1.28a161.9 161.9 0 0 0 51.84-9.813a110.72 110.72 0 0 0 62.507-62.507a161.9 161.9 0 0 0 9.813-51.84c0-8.69.189-15.111.422-23.018c.373-12.667.858-29.151.858-64.875c0-58.027 0-65.28-1.28-87.893a161.9 161.9 0 0 0-9.813-51.84a103.5 103.5 0 0 0-24.747-37.76a103.5 103.5 0 0 0-37.76-24.747a161.9 161.9 0 0 0-51.84-9.813c-22.613-1.28-29.866-1.28-87.893-1.28m0 38.4c56.96 0 64 0 85.333 1.28a119.7 119.7 0 0 1 39.68 7.253a71.04 71.04 0 0 1 40.534 40.533a119.7 119.7 0 0 1 8.106 40.534c1.067 21.333 1.28 29.226 1.28 85.333c0 56.102 0 64.001-1.28 85.333a119.7 119.7 0 0 1-7.253 39.68a71.04 71.04 0 0 1-40.533 40.534a119.7 119.7 0 0 1-39.68 7.253c-21.334 1.067-29.227 1.28-85.334 1.28s-64 0-85.333-1.28a119.7 119.7 0 0 1-41.387-6.4A71.04 71.04 0 0 1 89.6 381.867a119.7 119.7 0 0 1-7.253-40.534c0-8.137-.186-14.318-.417-21.966c-.374-12.403-.863-28.661-.863-63.367c0-56.107 0-64 1.28-85.333a119.7 119.7 0 0 1 7.253-40.534A71.04 71.04 0 0 1 130.133 89.6a119.7 119.7 0 0 1 40.534-7.253c8.137 0 14.319-.186 21.966-.417c12.403-.374 28.661-.863 63.367-.863" clip-rule="evenodd"></svg:path>`,
})
export class IxInstagramLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInterpreterIcon],svg[ix-interpreter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m307.503 42.668l119.164 119.163v307.504H85.333V42.668zm-17.69 42.667H128v341.333h256V179.521zM202.667 320c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m16.339-155.546l15.085 15.085l-45.26 45.246l45.313 45.315l-15.085 15.085l-60.34-60.34zm74.175-.519l60.287 60.39l-60.34 60.34l-15.085-15.085l45.312-45.314l-45.259-45.246z"></svg:path>`,
})
export class IxInterpreterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixInterpreterFilledIcon],svg[ix-interpreter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 161.831L307.503 42.668H85.333v426.667h341.334zm-133.486 2.105l60.287 60.391l-60.34 60.34l-15.085-15.085l45.312-45.315l-45.259-45.246zm-59.09 15.604l-15.085-15.085l-60.287 60.391l60.34 60.34l15.084-15.085l-45.312-45.315zm.576 172.462c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32c17.673 0 32-14.327 32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxInterpreterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixIpcsIcon],svg[ix-ipcs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 213.333v213.334H170.667V213.333zm-192 42.667h-64v128h64zm85.334 0H320v128h42.667zm64 0H384v128h42.667zm-21.334-106.667V192h-256v170.667h-42.666V149.333zm-64-64V128h-256v170.667H42.667V85.333z"></svg:path>`,
})
export class IxIpcsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixItemDetailsIcon],svg[ix-item-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zM426.667 128H85.334v256h341.333zM384 298.666v32H277.334v-32zm0-64v32H277.334v-32zm-149.333-64V256H128v-85.334zm149.333 0v32H277.334v-32z"></svg:path>`,
})
export class IxItemDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixItemDetailsFilledIcon],svg[ix-item-details-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zm-64 213.333h-128v32h128zm0-64h-128v32h128zm-170.667-64h-128v96h128zm170.667 0h-128v32h128z"></svg:path>`,
})
export class IxItemDetailsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJavaScriptIcon],svg[ix-java-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 64l-21.333 330.667L256 469.333L85.333 394.667L64 64zm-45.504 42.667H109.483l16.746 259.306L256 422.741l129.749-56.768zm-38.882 42.718v42.667h-42.666v32h44.573l-9.66 112.699l-77.581 20.954v-44.202l37.612-10.155l3.136-36.629H278.28V149.385zm-106.666 0v206.814l-100.69-17.98l-5.871-58.711l42.455-4.246l2.666 26.614l18.773 3.349V192.052h-42.667v-42.667z"></svg:path>`,
})
export class IxJavaScriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJavaScriptConnectionIcon],svg[ix-java-script-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m352 64l-16 248l-13.1 5.731l-24.307-24.311l6.719-2.94L317.872 96H98.112l12.56 194.48l85.805 37.535l-24.308 24.309L80 312L64 64zm-63.289 64.039v32h-32v24h33.43l-7.245 84.524l-58.186 15.716v-33.152l28.209-7.616l2.352-27.472H224.71v-88zm-80 0v155.11l-75.518-13.485l-4.403-44.033l31.841-3.184l2 19.96l14.08 2.512v-84.88h-32v-32zm153.956 255.954h-88.956l6.21 6.248l15.085 15.085l-30.169 30.17L192 362.659l72.837-72.836l30.169 30.17l-21.316 21.333h88.977zM320 448l89.259-.007l-6.21 6.248l-15.085 15.085l30.169 30.17l72.837-72.837l-72.837-72.836l-30.169 30.17l21.316 21.333l-89.28.007z" clip-rule="evenodd"></svg:path>`,
})
export class IxJavaScriptConnectionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJigsawIcon],svg[ix-jigsaw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m245.234 42.667l70.989 70.977l3.81 3.661c5.58 5.107 7.508 5.46 8.737 4.338l.351-.378c.409-.506.681-1.064.769-1.318a49.4 49.4 0 0 1 11.576-18.305c18.175-18.162 46.991-19.134 66.279-2.917l3.202 2.918c19.185 19.185 19.185 50.275.004 69.455c-5.24 5.247-11.497 9.172-18.554 11.654c-2.881 2.146-2.742 4.298 6.522 13.599l70.414 70.408l-59.234 59.235c-17.064 17.047-32.911 18.104-42.592 6.118c-1.613-1.998-2.734-3.967-3.454-5.624l-.59-1.543a29 29 0 0 0-6.883-10.89c-11.393-11.401-29.866-11.401-42.787 1.247l1.501-1.234c-11.389 11.389-11.385 29.874.04 41.295a28.8 28.8 0 0 0 10.661 6.794c2.104.693 4.713 1.971 7.372 4.124c11.967 9.692 10.899 25.536-6.15 42.589l-60.451 60.463l-70.324-70.33c-9.37-9.368-11.543-9.514-13.01-7.7l-.619.967l-.138.316a48.75 48.75 0 0 1-11.581 18.326c-18.139 18.172-46.974 19.141-66.275 2.924l-3.187-2.919c-19.172-19.179-19.172-50.261-.008-69.439c5.228-5.242 11.465-9.147 18.567-11.667c2.685-2.003 2.752-4.019-4.751-11.795l-72.773-72.793l60.457-60.463c17.057-17.053 32.903-18.116 42.589-6.138c1.615 1.996 2.736 3.964 3.459 5.627l.594 1.553a29.04 29.04 0 0 0 6.88 10.895c11.401 11.393 29.872 11.396 41.278.01c11.41-11.413 11.41-29.896.012-41.29c-3.124-3.125-6.829-5.447-10.687-6.815c-2.106-.692-4.717-1.968-7.379-4.119c-11.982-9.686-10.92-25.532 6.133-42.586zm-.013 56.348l-23.89 23.889l1.58 1.328l3.198 3.002c26.97 26.961 26.961 70.678-.032 97.674c-26.967 26.922-70.643 26.912-97.627-.052a69 69 0 0 1-3.023-3.227l-1.287-1.554l-25.125 25.145l42.734 42.719c7.085 7.085 11.466 12.171 14.799 18.7l1.587 3.401c8.208 19.254 1.947 38.104-11.651 49.74l-2.474 1.977l-4.822 3.595l-5.668 2.012c-1.561.554-2.697 1.268-3.709 2.282c-3.163 3.165-3.558 8.049-2.035 10.831l.768 1.052l1.91 1.798c3.62 3.042 9.056 2.82 12.535-.666c.947-.941 1.662-2.074 1.967-2.93c1.641-4.816 4.249-9.476 7.49-13.484c13.161-16.275 34.842-19.979 52.82-10.689c5.76 2.976 10.51 6.714 16.34 12.31l3.014 2.958l42.119 42.138l25.145-25.145l-1.573-1.302l-3.15-2.972c-26.015-26.006-26.973-67.587-2.83-94.702l1.735-1.861l-.148-.157c27.019-26.447 68.41-28.214 95.833-3.788l2.988 2.822l3.026 3.223l1.29 1.566l23.91-23.89l-42.28-42.286c-7.045-7.074-11.397-12.147-14.707-18.678l-1.575-3.403c-8.143-19.252-1.848-38.027 11.714-49.621l2.467-1.97l4.868-3.628l5.728-2.014c1.444-.507 2.577-1.218 3.594-2.237c3.166-3.166 3.562-8.048 2.077-10.793l-.748-1.034l-2.001-1.867c-3.612-3.037-9.049-2.815-12.441.574c-1.013 1.015-1.762 2.202-2.074 3.064c-1.634 4.766-4.21 9.409-7.47 13.444c-13.132 16.253-34.796 19.993-52.778 10.711c-5.736-2.961-10.456-6.669-16.278-12.246l-3.013-2.95z" clip-rule="evenodd"></svg:path>`,
})
export class IxJigsawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJigsawDetailsIcon],svg[ix-jigsaw-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m245.234 42.667l70.989 70.977l3.81 3.661c5.58 5.107 7.508 5.46 8.737 4.338l.351-.378c.409-.506.681-1.064.769-1.318a49.4 49.4 0 0 1 11.576-18.305c18.175-18.162 46.991-19.134 66.279-2.917l3.202 2.918c19.185 19.185 19.185 50.275.004 69.455c-5.24 5.247-11.497 9.172-18.554 11.653c-2.881 2.147-2.742 4.299 6.522 13.6L458.573 256h-56.365l-31.523-31.528c-7.045-7.074-11.397-12.147-14.707-18.678l-1.575-3.403c-8.143-19.252-1.848-38.027 11.714-49.621l2.467-1.97l4.868-3.628l5.728-2.014c1.444-.507 2.576-1.218 3.594-2.237c3.166-3.166 3.562-8.048 2.077-10.793l-.748-1.035l-2.001-1.866c-3.612-3.037-9.049-2.815-12.441.574c-1.013 1.015-1.763 2.202-2.075 3.064c-1.633 4.765-4.209 9.409-7.469 13.444c-13.132 16.253-34.796 19.993-52.778 10.711c-5.736-2.961-10.456-6.669-16.278-12.246l-3.013-2.95l-42.827-42.81l-23.89 23.89l1.58 1.328l3.198 3.002c26.97 26.961 26.961 70.678-.032 97.674c-26.967 26.922-70.643 26.912-97.627-.052a69 69 0 0 1-3.023-3.227l-1.287-1.554l-25.125 25.145l42.734 42.719c7.085 7.085 11.466 12.171 14.799 18.7l1.587 3.401c8.208 19.254 1.947 38.104-11.651 49.74l-2.474 1.977l-4.822 3.595l-5.668 2.012c-1.561.554-2.697 1.268-3.709 2.282c-3.163 3.165-3.558 8.049-2.035 10.831l.768 1.052l1.91 1.798c3.62 3.042 9.056 2.819 12.535-.666c.947-.941 1.662-2.074 1.967-2.93c1.641-4.816 4.248-9.476 7.49-13.485c13.161-16.274 34.842-19.978 52.82-10.688c5.76 2.976 10.51 6.714 16.34 12.31l3.014 2.958L256 402.22v56.346l-59.558-59.563c-9.37-9.368-11.543-9.514-13.01-7.7l-.619.966l-.138.317a48.76 48.76 0 0 1-11.581 18.326c-18.139 18.172-46.974 19.141-66.275 2.924l-3.187-2.919c-19.172-19.179-19.172-50.261-.008-69.439c5.228-5.242 11.465-9.147 18.567-11.667c2.685-2.003 2.752-4.019-4.751-11.795l-72.773-72.793l60.457-60.463c17.057-17.053 32.903-18.116 42.589-6.138c1.614 1.996 2.736 3.964 3.459 5.627l.594 1.552a29 29 0 0 0 6.88 10.896c11.401 11.393 29.872 11.396 41.278.01c11.41-11.413 11.41-29.896.012-41.29c-3.124-3.125-6.829-5.447-10.687-6.815c-2.106-.692-4.717-1.968-7.379-4.119c-11.982-9.686-10.92-25.532 6.133-42.586zM448 320v-42.667H277.333V320zm0 64v-42.667H277.333V384zm0 21.333V448H277.333v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxJigsawDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJigsawDetailsFilledIcon],svg[ix-jigsaw-details-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M354.348 99.438a42.2 42.2 0 0 0-9.899 15.655s-7.257 22.096-32.208-2.79l-68.476-68.464l-55.877 55.876c-25.046 25.046-2.878 32.333-2.878 32.333a41.8 41.8 0 0 1 15.655 9.887c16.37 16.364 16.37 42.91 0 59.275l-.006.011c-16.376 16.364-42.911 16.364-59.287 0c-4.574-4.58-7.872-9.946-9.887-15.666c0 0-7.287-22.162-32.338 2.884l-57.189 57.194l68.376 68.364c25.046 25.046 2.878 32.338 2.878 32.338a41.8 41.8 0 0 0-15.66 9.893c-16.365 16.376-16.365 42.905 0 59.275h.005c16.37 16.376 42.917 16.388 59.275 0a41.55 41.55 0 0 0 9.893-15.643s7.287-22.162 32.338 2.884L256 459.686V256h199.931l-55.156-55.151c-24.874-24.975-2.772-32.238-2.772-32.238a41.6 41.6 0 0 0 15.649-9.881c16.376-16.376 16.376-42.911 0-59.286h-.023c-16.364-16.382-42.893-16.382-59.281-.006m-87.529 371.067l-1.172-1.172h2.343zM448 320v-42.667H277.333V320zm0 64v-42.667H277.333V384zm0 21.333V448H277.333v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxJigsawDetailsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJigsawFilledIcon],svg[ix-jigsaw-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M354.348 99.438a42.2 42.2 0 0 0-9.899 15.654s-7.257 22.097-32.208-2.789l-68.476-68.464l-55.877 55.876c-25.046 25.046-2.878 32.333-2.878 32.333a41.8 41.8 0 0 1 15.655 9.887c16.37 16.364 16.37 42.91 0 59.274l-.006.012c-16.376 16.364-42.911 16.364-59.287 0c-4.574-4.58-7.872-9.946-9.887-15.667c0 0-7.287-22.161-32.338 2.884l-57.189 57.195l68.376 68.364c25.046 25.046 2.878 32.338 2.878 32.338a41.8 41.8 0 0 0-15.66 9.893c-16.365 16.376-16.365 42.905 0 59.275h.005c16.37 16.376 42.917 16.388 59.275 0a41.55 41.55 0 0 0 9.893-15.643s7.287-22.162 32.338 2.884l67.756 67.761l57.182-57.194c25.04-25.046 2.896-32.345 2.896-32.345c-5.715-2.038-11.092-5.307-15.643-9.887c-16.376-16.37-16.376-42.916-.018-59.274l.018-.012c16.376-16.376 42.911-16.376 59.275 0a41.75 41.75 0 0 1 9.881 15.643s7.275 22.173 32.338-2.866l55.877-55.877l-67.85-67.844c-24.874-24.975-2.772-32.238-2.772-32.238a41.6 41.6 0 0 0 15.649-9.881c16.376-16.376 16.376-42.911 0-59.287h-.023c-16.364-16.381-42.893-16.381-59.281-.005" clip-rule="evenodd"></svg:path>`,
})
export class IxJigsawFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJoinIcon],svg[ix-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M168.836 128H42.666v42.667h108.497L236.497 256l-85.334 85.333H42.666V384h126.17l106.667-106.667h99.664l-27.584 27.584l30.17 30.17l79.085-79.085l-79.085-79.085l-30.17 30.17l27.58 27.58h-99.66z" clip-rule="evenodd"></svg:path>`,
})
export class IxJoinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJsonDocumentIcon],svg[ix-json-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M321.338 42.664H85.703v233.392h42.298V85.331l177.082-.232l78.918 85.565v105.392h42.666V149.331zm27.652 405.332V320.023h28.947l31.086 57.62q6.579 12.192 14.145 30.074q-.411-8.038-.411-24.475v-63.219h25.247v127.973H419.55l-29.113-53.645q-8.716-15.986-16.612-34.319q.412 11.47.412 30.706v57.258zM321.8 336.912q-14.638-19.146-42.106-19.146q-25.164 0-39.556 15.985q-16.612 18.605-16.612 49.491q0 29.533 14.063 47.866q14.638 19.146 42.105 19.146q25.248 0 39.557-16.076q16.611-18.603 16.612-50.123q0-28.81-14.063-47.143m-64.145 16.437q7.73-13.005 21.957-13.005q12.994 0 20.806 11.108q8.307 11.74 8.306 32.603q0 18.966-6.99 30.526q-7.895 13.095-22.04 13.095q-12.91 0-20.723-11.109q-8.306-11.74-8.306-33.054q0-18.423 6.99-30.164m-123.077 89.68l3.783-24.565q19.985 9.212 33.882 9.212q9.046 0 13.323-4.877q3.7-4.245 3.7-10.386q0-5.509-3.618-8.58q-3.619-3.07-17.846-9.482q-10.526-4.787-14.885-7.135a51 51 0 0 1-7.895-5.328q-10.28-8.4-10.279-24.204q0-13.637 6.743-23.933q10.362-15.985 34.047-15.985q17.105 0 37.171 6.954l-5.263 23.481q-11.843-4.786-17.846-6.322q-5.921-1.535-12.418-1.535q-7.401 0-11.266 3.612q-4.03 3.884-4.03 9.844q0 5.149 3.372 8.128q3.453 2.89 16.447 8.761q12.912 5.87 17.106 8.218a48 48 0 0 1 7.895 5.329q10.115 8.489 10.115 25.919q0 20.592-12.747 31.158q-10.856 8.941-30.428 8.941q-20.395 0-39.063-7.225m-12.059-123.006H96.285v81.733q0 8.49-.575 12.554q-.494 3.973-1.892 6.502q-3.7 6.232-12.335 6.232q-6.168 0-14.803-4.335l-2.138 23.662q9.21 3.883 21.957 3.883q28.208 0 34.211-24.113q1.809-7.316 1.809-30.707z" clip-rule="evenodd"></svg:path>`,
})
export class IxJsonDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixJsonDocumentFilledIcon],svg[ix-json-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M321.338 42.664H85.703l-.37 234.667h341.334v-128zm27.652 405.332V320.023h28.947l31.086 57.62q6.579 12.192 14.145 30.074q-.411-8.038-.411-24.475v-63.219h25.247v127.973H419.55l-29.113-53.645q-8.716-15.986-16.612-34.319q.412 11.47.412 30.706v57.258zM321.8 336.912q-14.638-19.146-42.106-19.146q-25.164 0-39.556 15.985q-16.612 18.605-16.612 49.491q0 29.533 14.063 47.866q14.638 19.146 42.105 19.146q25.248 0 39.557-16.076q16.611-18.603 16.612-50.123q0-28.81-14.063-47.143m-64.145 16.437q7.73-13.005 21.957-13.005q12.994 0 20.806 11.108q8.307 11.74 8.306 32.603q0 18.966-6.99 30.526q-7.895 13.095-22.04 13.095q-12.91 0-20.723-11.109q-8.306-11.74-8.306-33.054q0-18.423 6.99-30.164m-123.077 89.68l3.783-24.565q19.985 9.212 33.882 9.212q9.046 0 13.323-4.877q3.7-4.245 3.7-10.386q0-5.509-3.618-8.58q-3.619-3.07-17.846-9.482q-10.526-4.787-14.885-7.135a51 51 0 0 1-7.895-5.328q-10.28-8.4-10.279-24.204q0-13.637 6.743-23.933q10.362-15.985 34.047-15.985q17.105 0 37.171 6.954l-5.263 23.481q-11.843-4.786-17.846-6.322q-5.921-1.535-12.418-1.535q-7.401 0-11.266 3.612q-4.03 3.884-4.03 9.844q0 5.149 3.372 8.128q3.453 2.89 16.447 8.761q12.912 5.87 17.106 8.218a48 48 0 0 1 7.895 5.329q10.115 8.489 10.115 25.919q0 20.592-12.747 31.158q-10.856 8.941-30.428 8.941q-20.395 0-39.063-7.225m-12.059-123.006H96.285v81.733q0 8.49-.575 12.554q-.494 3.973-1.892 6.502q-3.7 6.232-12.335 6.232q-6.168 0-14.803-4.335l-2.138 23.662q9.21 3.883 21.957 3.883q28.208 0 34.211-24.113q1.809-7.316 1.809-30.707z" clip-rule="evenodd"></svg:path>`,
})
export class IxJsonDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKeyIcon],svg[ix-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M373.333 309.333c29.456 0 53.334-23.878 53.334-53.333s-23.878-53.333-53.334-53.333C343.878 202.667 320 226.545 320 256s23.878 53.333 53.333 53.333m0 42.667c-45.687 0-83.92-31.915-93.621-74.667H170.667v64H85.333v-64H42.667v-42.666h237.045C289.413 191.915 327.646 160 373.333 160c53.02 0 96 42.981 96 96s-42.98 96-96 96" clip-rule="evenodd"></svg:path>`,
})
export class IxKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKeyboardIcon],svg[ix-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 128v234.667H42.667V128zm-42.666 42.667H85.333V320h341.334zM149.333 256v42.667h-42.666V256zm192 0v42.667H170.667V256zm64 0v42.667h-42.666V256zm-256-64v42.667h-42.666V192zm64 0v42.667h-42.666V192zm64 0v42.667h-42.666V192zm64 0v42.667h-42.666V192zm64 0v42.667h-42.666V192z"></svg:path>`,
})
export class IxKeyboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKeyboardDockedBottomIcon],svg[ix-keyboard-docked-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.336v341.333H42.667V85.336zm-42.666 42.667H85.333v256H128v-128h256v128h42.667zm-64 149.333H149.333v106.667h213.334zm-176 64v21.333h-16v-21.333zm154.666 0v21.333h-16v-21.333zm-42.666 0v21.333h-85.334v-21.333zm-112-42.667v21.334h-16v-21.334zm42.666 0v21.334h-16v-21.334zm42.667 0v21.334h-16v-21.334zm69.333 0v21.334h-42.666v-21.334z"></svg:path>`,
})
export class IxKeyboardDockedBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKeyboardFloatingIcon],svg[ix-keyboard-floating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.336v341.333H42.667V85.336zm-42.666 42.667H85.333v256h341.334zM384 170.669v170.667H128V170.669zm-21.333 21.334H149.333v128h213.334zm-176 85.333v21.333h-16v-21.333zm154.666 0v21.333h-16v-21.333zm-42.666 0v21.333h-85.334v-21.333zm-112-64v21.333h-16v-21.333zm42.666 0v21.333h-16v-21.333zm42.667 0v21.333h-16v-21.333zm69.333 0v21.333h-42.666v-21.333z"></svg:path>`,
})
export class IxKeyboardFloatingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKeyboardFramedIcon],svg[ix-keyboard-framed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 277.333v149.334H42.667V277.333zm-21.333 21.334H64v106.666h234.667zm-192 64V384H85.333v-21.333zm128 0V384H128v-21.333zm42.666 0V384H256v-21.333zM106.667 320v21.333H85.333V320zm42.666 0v21.333H128V320zM192 320v21.333h-21.333V320zm42.667 0v21.333h-21.334V320zm42.666 0v21.333H256V320zm192-234.667V320h-128v-42.667h85.334V128H85.333v128H42.667V85.333zm-320 128V256h-42.666v-42.667zm192 0V256H170.667v-42.667zm64 0V256h-42.666v-42.667zm-256-64V192h-42.666v-42.667zm64 0V192h-42.666v-42.667zm64 0V192h-42.666v-42.667zm64 0V192h-42.666v-42.667zm64 0V192h-42.666v-42.667z"></svg:path>`,
})
export class IxKeyboardFramedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKinematicsIcon],svg[ix-kinematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 64v341.333H448V448H64V64zM192 256c35.346 0 64 28.654 64 64s-28.654 64-64 64s-64-28.654-64-64s28.654-64 64-64m0 42.667c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333M448 64v149.333h-42.667l-.014-76.608l-135.312 135.338l-30.17-30.17l135.21-135.226h-76.38V64z" clip-rule="evenodd"></svg:path>`,
})
export class IxKinematicsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKpiIcon],svg[ix-kpi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 170.665h85.333l-42.667-85.333zm-235.307 42.667v-20q24.584-20.667 36.75-32.333q13-12.5 17.5-19.084q4.583-6.666 4.583-13.083q0-6.583-5.5-10.667q-5.416-4.166-14.167-4.166q-12.5 0-31.5 8.083l-6.666-20.667q21-8.25 41.416-8.25q20.167 0 31.334 8.667q11.75 9.084 11.75 25.833q0 10.667-4.75 19.417q-4.667 8.75-17.084 21.167q-10.25 10.25-26.416 24.25h49.25v20.833zm116.557-4.583l5.75-20.75q14.5 6.75 30.917 6.75q13.583 0 19.25-5.667q4.416-4.25 4.416-10.667q0-9.25-8.583-13.416q-6.333-3.084-19.917-3.084q-5.083 0-13.25.334v-19.417q3.917.167 7.75.167q18.917 0 26-4.084q6.917-3.917 6.917-10.916q0-6.75-5.333-10.334q-5.25-3.666-15.167-3.666q-12.833 0-29.417 6.416L269 99.915q18.583-6.75 38.833-6.75q19.334 0 30.5 7.167q12.75 8.25 12.75 25.417q0 11.666-6 18.333q-6 6.583-18.416 8.5q12.333 1.833 18.5 7.833q7.083 7 7.083 19.167q0 11-5.833 19.583q-5.667 8.417-15.834 12.417t-25.916 4q-21.75 0-39.417-6.833m-175.5-85.834v90.417h25.75V95.249H92.667l-37.75 22.166l12 19.75zm373.826 142.972l-98.278 98.897L351.4 378.77l-13.899-13.986l-54.896-55.242l-123.691 124.47l-13.898 13.986l-13.899-13.986l-88.45-89.007l27.797-27.972l74.552 75.021l123.69-124.47l13.899-13.986l13.898 13.986l54.897 55.242l84.379-84.911z" clip-rule="evenodd"></svg:path>`,
})
export class IxKpiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixKpiFilledIcon],svg[ix-kpi-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 170.665h85.333l-42.667-85.333zm-235.307 42.667v-20q24.584-20.667 36.75-32.333q13-12.5 17.5-19.084q4.583-6.666 4.583-13.083q0-6.583-5.5-10.667q-5.416-4.166-14.167-4.166q-12.5 0-31.5 8.083l-6.666-20.667q21-8.25 41.416-8.25q20.167 0 31.334 8.667q11.75 9.084 11.75 25.833q0 10.667-4.75 19.417q-4.667 8.75-17.084 21.167q-10.25 10.25-26.416 24.25h49.25v20.833zm116.557-4.583l5.75-20.75q14.5 6.75 30.917 6.75q13.583 0 19.25-5.667q4.416-4.25 4.416-10.667q0-9.25-8.583-13.416q-6.333-3.084-19.917-3.084q-5.083 0-13.25.334v-19.417q3.917.167 7.75.167q18.917 0 26-4.084q6.917-3.917 6.917-10.916q0-6.75-5.333-10.334q-5.25-3.666-15.167-3.666q-12.833 0-29.417 6.416L269 99.915q18.583-6.75 38.833-6.75q19.334 0 30.5 7.167q12.75 8.25 12.75 25.417q0 11.666-6 18.333q-6 6.583-18.416 8.5q12.333 1.833 18.5 7.833q7.083 7 7.083 19.167q0 11-5.833 19.583q-5.667 8.417-15.834 12.417t-25.916 4q-21.75 0-39.417-6.833m-175.5-85.834v90.417h25.75V95.249H92.667l-37.75 22.166l12 19.75zm360.282 124.711v200.371L64 446.263V326.734l86.858 82.577l135.11-141.474l67.556 70.737z" clip-rule="evenodd"></svg:path>`,
})
export class IxKpiFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLabelIcon],svg[ix-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 106.667v298.667H128L21.333 256L128 106.667zm-42.667 42.667H149.93L73.75 256l76.203 106.667h276.714zM160 224c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m74.666 53.334H384V320H234.666zm0-85.334H384v42.667H234.666z"></svg:path>`,
})
export class IxLabelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLabelFilledIcon],svg[ix-label-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 106.667v298.667H128L21.333 256L128 106.667zM384 277.334H234.666V320H384zM138.666 224c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32M384 192H234.666v42.667H384z"></svg:path>`,
})
export class IxLabelFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLandingPageLogoIcon],svg[ix-landing-page-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m45.76 341.241l86.745-120.35l-82.44-114.224h61.416l54.629 76.48l55.291-76.48h60.423L196.57 222.216l86.248 119.025h-63.734L163.46 262.94l-55.29 78.3zm252.856 72.84V236.948q0-47.676-1.656-69.362h49.497l1.656 22.183q12.58-14.568 24.252-20.445q11.67-5.877 27.894-5.877q35.923 0 54.132 27.15q17.051 25.492 17.051 64.727q0 42.378-19.534 66.879q-18.54 23.176-50.821 23.176q-33.11 0-51.319-25.163v93.863zm52.859-134.587q7.449 13.41 17.134 20.693q9.684 7.284 20.113 7.284q15.065 0 23.342-15.727t8.277-38.24q0-22.183-8.443-36.916q-8.608-15.23-25.162-15.23q-18.707 0-35.261 26.155z"></svg:path>`,
})
export class IxLandingPageLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLanguageIcon],svg[ix-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 170.666v256h-64.04l.04 64l-106.667-64h-85.333v-256zM298.667 85.333v64H256V128H85.334v170.666H192v55.467l-85.333 51.2l.04-64h-64.04v-256zm128 128H256V384h170.667zm-72.801 21.333l48.417 128h-23.847l-13.189-36.674h-48.056l-13.098 36.674H281.6l47.334-128zm-12.647 21.409q-2.6 9.105-6.868 21.041l-.358 1l-10.75 30.351h35.862l-10.75-30.351l-.941-2.716a498 498 0 0 1-6.195-19.325m-160.188-114.87v10.666H192l.001 78.68a133 133 0 0 1-4.78 8.438A123 123 0 0 0 192 242.99v26.25q-9.824-6.424-17.708-13.222c-14.56 15.378-34.394 26.278-59.244 32.734l-6.368 1.533l-4.628-20.826c24.259-5.39 42.587-14.982 55.328-28.73c-11.6-14.211-19.795-30.276-24.545-48.104l-1.565-6.513l20.858-4.48c3.244 15.104 9.247 28.664 18.048 40.768c7.932-14.66 12.542-31.025 13.821-49.194h-79.631v-21.334h53.333v-10.667z"></svg:path>`,
})
export class IxLanguageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLanguageFilledIcon],svg[ix-language-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 170.666v256h-64.04l.04 64l-106.667-64h-85.333v-256zM298.667 85.333v64H192v204.8l-85.333 51.2l.04-64h-64.04v-256zm55.199 149.333h-24.932l-47.334 128h22.493l13.098-36.674h48.056l13.189 36.674h23.847zm-12.647 21.409a498 498 0 0 0 6.195 19.325l.941 2.716l10.75 30.351h-35.862l10.75-30.351q4.516-12.556 7.226-22.041M159.698 119.872h-21.333v10.666H85.03v21.334l79.632.001c-1.28 18.168-5.889 34.533-13.822 49.194c-8.613-11.847-14.547-25.088-17.837-39.806l-.21-.962l-20.858 4.48l1.565 6.512c4.75 17.829 12.944 33.894 24.545 48.104c-12.582 13.577-30.612 23.1-54.422 28.527l-.907.204l4.628 20.825l6.368-1.532c24.851-6.456 44.684-17.356 59.245-32.734c10.204 8.801 22.85 17.121 37.934 25.003l1.108.575V235.97c-10.322-5.945-19.025-12.058-26.112-18.314c11.763-19.116 18.454-40.729 20.083-64.692l.07-1.09l5.958-.002v-21.334h-32.302z"></svg:path>`,
})
export class IxLanguageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLayersIcon],svg[ix-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m421.654 327.53l47.68 23.83L256 458.026L42.667 351.36l47.68-23.83L256 410.37zm.021-95.377L469.334 256L256 362.666L42.667 256l47.659-23.847L256 315.009zM256 53.973L469.334 160.64L256 267.306L42.667 160.64zm0 47.68L138.048 160.64L256 219.605l117.931-58.965z"></svg:path>`,
})
export class IxLayersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLayersFilledIcon],svg[ix-layers-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m421.654 327.53l47.68 23.83L256 458.026L42.667 351.36l47.68-23.83L256 410.37zM256 244.693L278.592 256L256 267.304L233.408 256z"></svg:path><svg:path d="M421.675 232.153L469.334 256L256 362.666L42.667 256l47.659-23.847L256 315.009z"></svg:path><svg:path d="M256 53.973L469.334 160.64L256 267.306L42.667 160.64z"></svg:path></svg:g>`,
})
export class IxLayersFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLeadingAxisProxyIcon],svg[ix-leading-axis-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m348.932 255.997l4.951 25.511c11.081 3.728 21.133 9.811 29.602 17.675l23.894-8.327l20.651 36.95l-18.914 17.199a88.5 88.5 0 0 1 1.771 17.659c0 6.054-.611 11.962-1.771 17.659l18.914 17.199l-20.651 36.951l-23.894-8.328c-8.469 7.865-18.521 13.947-29.602 17.675l-4.951 25.511h-41.303l-4.93-25.504c-11.089-3.728-21.149-9.813-29.623-17.682l-23.894 8.328l-20.651-36.951l18.919-17.177a88.4 88.4 0 0 1-1.776-17.681c0-6.062.612-11.976 1.776-17.681l-13.508-12.271l2.209-11.349l.249-.091a135.2 135.2 0 0 0 27.245-16.277l.179-.166l22.622 7.912l14.106 4.926c-14.37 9.47-23.9 26.084-23.9 44.997c0 29.455 23.115 53.333 51.629 53.333s51.628-23.878 51.628-53.333s-23.115-53.333-51.628-53.333a50.1 50.1 0 0 0-24.295 6.262l6.952-12.397l26.365-47.199zM211.228 42.664l6.932 35.716c15.517 5.22 29.593 13.738 41.452 24.752l33.442-11.667l28.912 51.731l-26.483 24.063a124 124 0 0 1 2.482 24.738c0 8.482-.856 16.757-2.482 24.739l26.483 24.063l-28.912 51.73l-33.442-11.667c-11.859 11.015-25.935 19.533-41.452 24.753l-6.932 35.716h-57.824l-6.911-35.709c-15.529-5.221-29.615-13.745-41.481-24.768l-33.433 11.675l-28.912-51.73l26.487-24.042a123.8 123.8 0 0 1-2.486-24.76c0-8.481.855-16.756 2.482-24.738l-26.483-24.063l28.912-51.73l33.433 11.675c11.871-11.028 25.964-19.555 41.502-24.775l6.89-35.702zm-28.912 74.667c-39.919 0-72.28 33.429-72.28 74.666c0 41.238 32.361 74.667 72.28 74.667s72.281-33.429 72.281-74.667s-32.361-74.666-72.281-74.666m207.919-74.667l4.951 25.511c11.081 3.728 21.133 9.81 29.603 17.675l23.893-8.328l20.651 36.951l-18.914 17.199a88.4 88.4 0 0 1 1.771 17.659a88.4 88.4 0 0 1-1.771 17.659l18.914 17.199l-20.651 36.95l-23.893-8.328c-8.47 7.865-18.522 13.948-29.603 17.675l-4.951 25.511h-41.303l-4.93-25.504l-3.602-1.354l-4.795-4.359l-17.963-16.313l.239-1.771c.489-4.861.736-9.765.736-14.699l-.185-7.376a145 145 0 0 0-.551-7.322l-.239-1.792l4.818-4.355c8.073 18.575 26.136 31.512 47.124 31.512c28.514 0 51.629-23.878 51.629-53.333s-23.115-53.334-51.629-53.334c-15.859 0-30.048 7.387-39.518 19.01l-16.451-29.42l.764.263c8.475-7.87 18.534-13.955 29.623-17.682l4.93-25.504z" clip-rule="evenodd"></svg:path>`,
})
export class IxLeadingAxisProxyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLeafIcon],svg[ix-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m427.582 54.248l30.17 30.17l-81.108 81.111c39.686 53.604 35.027 126.8-13.977 175.804q-64 64-298.667 106.667q42.666-234.667 106.667-298.667c49.004-49.004 122.2-53.663 175.804-13.977zm-74.667 90.667l-47.262 47.084H202.667v21.334h81.572l-64.242 64H160v21.333h38.583l-88.792 88.458l15.085 15.085l88.457-88.125V352h21.334l-.001-59.17l64-63.758v80.26H320V207.819L368 160z"></svg:path>`,
})
export class IxLeafIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLegalIcon],svg[ix-legal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M355.646 276.647a70.3 70.3 0 0 0-2.765-15.559c-1.479-5-3.491-9.821-5.966-14.495c-2.474-4.675-5.411-9.2-8.74-13.608s-7.05-8.696-11.092-12.896c-4.041-4.199-8.404-8.309-13.017-12.358s-9.476-8.038-14.518-11.996s-10.264-7.885-15.594-11.81s-10.77-7.849-16.246-11.8l-2.514-1.816l-5.077-3.674a2414 2414 0 0 1-5.165-3.756a1571 1571 0 0 1-5.28-3.87q-1.338-.984-2.693-1.987a102 102 0 0 1-8.676-6.849a84 84 0 0 1-7.052-6.99a69 69 0 0 1-5.507-7.004a56 56 0 0 1-4.043-6.886a45 45 0 0 1-2.66-6.641a36 36 0 0 1-1.356-6.265a28.4 28.4 0 0 1-.133-5.76a22.5 22.5 0 0 1 1.01-5.126a22 22 0 0 1 2.094-4.575a23 23 0 0 1 3.1-4.024a27 27 0 0 1 4.067-3.455a34 34 0 0 1 5-2.865a45 45 0 0 1 5.894-2.257a59 59 0 0 1 6.752-1.63a77 77 0 0 1 7.572-.982a99 99 0 0 1 8.355-.316c4.997.164 9.377.835 13.216 1.884s7.136 2.476 9.968 4.153a34 34 0 0 1 7.18 5.651a34.2 34.2 0 0 1 4.847 6.377a37.5 37.5 0 0 1 2.973 6.33a40 40 0 0 1 1.557 5.514c.334 1.616.508 2.966.599 3.924s.097 1.52.097 1.563H344.5c0-3.644-.347-7.565-1.07-11.642a79.6 79.6 0 0 0-3.333-12.576a82.7 82.7 0 0 0-5.776-12.773a80 80 0 0 0-8.402-12.233a77 77 0 0 0-11.21-10.959a77.2 77.2 0 0 0-14.198-8.946c-5.252-2.566-11.032-4.673-17.37-6.199c-6.34-1.526-13.237-2.472-20.724-2.714a44 44 0 0 1-.82-.007l-.271-.004q-.136 0-.271-.003q-.135-.005-.27-.007h-.535c-5.177 0-10.186.288-15.008.852a110 110 0 0 0-13.887 2.512a94 94 0 0 0-12.65 4.105a81 81 0 0 0-11.299 5.63a72 72 0 0 0-9.834 7.09a66 66 0 0 0-8.256 8.48a64 64 0 0 0-6.562 9.808A66 66 0 0 0 178 92.272a65 65 0 0 0-2.127 8.394a66 66 0 0 0-.991 8.55a69 69 0 0 0 .112 8.648c.218 2.892.615 5.79 1.184 8.686a80 80 0 0 0 2.224 8.667a87 87 0 0 0 3.23 8.588a96 96 0 0 0 4.205 8.452a105 105 0 0 0 5.149 8.257a196 196 0 0 0-8.664 9.621a158 158 0 0 0-7.417 9.519a128 128 0 0 0-6.175 9.43a106 106 0 0 0-4.937 9.353a89 89 0 0 0-3.702 9.291a78 78 0 0 0-2.471 9.241a71 71 0 0 0-1.245 9.205a69 69 0 0 0-.02 9.181a70.3 70.3 0 0 0 2.764 15.559c1.479 4.999 3.491 9.82 5.966 14.495s5.411 9.2 8.74 13.608c3.33 4.407 7.05 8.696 11.092 12.895c4.041 4.2 8.404 8.31 13.017 12.359s9.475 8.038 14.518 11.996c5.042 3.958 10.264 7.885 15.594 11.81s10.77 7.848 16.246 11.799l2.514 1.817l5.077 3.674a2416 2416 0 0 1 5.165 3.755a1570 1570 0 0 1 5.28 3.87q1.338.984 2.693 1.988a102 102 0 0 1 8.676 6.849a84 84 0 0 1 7.052 6.99a69 69 0 0 1 5.507 7.004a56 56 0 0 1 4.043 6.886a45 45 0 0 1 2.66 6.64a36 36 0 0 1 1.356 6.266c.243 2.011.283 3.938.133 5.76a22.5 22.5 0 0 1-1.01 5.126a22 22 0 0 1-2.098 4.582a23.2 23.2 0 0 1-3.11 4.04a27 27 0 0 1-4.08 3.476a34 34 0 0 1-5.012 2.884a44.5 44.5 0 0 1-5.9 2.267a58 58 0 0 1-6.75 1.627a75 75 0 0 1-7.559.96q-3.976.31-8.325.268c-4.995-.164-9.372-.835-13.209-1.884c-3.837-1.05-7.132-2.477-9.963-4.153a34 34 0 0 1-7.176-5.651a34.2 34.2 0 0 1-4.845-6.377a37.5 37.5 0 0 1-2.971-6.331a40 40 0 0 1-1.557-5.513a37 37 0 0 1-.598-3.924a20 20 0 0 1-.098-1.563h-42.666c0 3.643.346 7.565 1.07 11.642a79.6 79.6 0 0 0 3.332 12.576a82.7 82.7 0 0 0 5.776 12.772a80 80 0 0 0 8.4 12.234a77 77 0 0 0 11.207 10.958a77.2 77.2 0 0 0 14.195 8.947c5.25 2.565 11.029 4.672 17.366 6.199c6.336 1.526 13.232 2.472 20.716 2.714a44 44 0 0 1 .82.006l.271.004l.271.004c.09.001.18.007.27.007h.535c5.177 0 10.186-.288 15.008-.852a110 110 0 0 0 13.887-2.512a94 94 0 0 0 12.65-4.105a81 81 0 0 0 11.299-5.63a72 72 0 0 0 9.834-7.09a66 66 0 0 0 8.256-8.481a64 64 0 0 0 6.562-9.807A66 66 0 0 0 334 419.73a65 65 0 0 0 2.127-8.394a66 66 0 0 0 .991-8.55c.145-2.87.105-5.756-.112-8.648a74 74 0 0 0-1.184-8.686a80 80 0 0 0-2.224-8.667a87 87 0 0 0-3.23-8.589a96 96 0 0 0-4.206-8.451a105 105 0 0 0-5.148-8.257a196 196 0 0 0 8.664-9.621q4.02-4.784 7.417-9.52q3.399-4.736 6.175-9.429a106 106 0 0 0 4.937-9.354a89 89 0 0 0 3.702-9.29a78 78 0 0 0 2.471-9.242a71 71 0 0 0 1.244-9.204q.316-4.595.022-9.181m-86.396 28.625c-8.854-6.386-17.585-12.684-25.723-18.898s-15.685-12.343-22.17-18.391c-6.486-6.049-11.911-12.015-15.807-17.904s-6.264-11.698-6.633-17.432c-.183-2.9.168-5.954 1.034-9.156c.866-3.201 2.248-6.55 4.128-10.036c1.88-3.487 4.257-7.112 7.114-10.866c2.858-3.755 6.195-7.638 9.994-11.643q.103.074.197.152q.095.077.188.157l.188.157a4 4 0 0 0 .198.151q2.61 1.946 5.22 3.861q2.611 1.916 5.215 3.809q2.604 1.891 5.195 3.765l5.162 3.732c8.854 6.385 17.585 12.684 25.723 18.897c8.138 6.214 15.685 12.344 22.17 18.392s11.911 12.015 15.807 17.903c3.896 5.889 6.264 11.699 6.633 17.433c.183 2.9-.168 5.954-1.034 9.155c-.866 3.202-2.248 6.55-4.128 10.037s-4.257 7.112-7.114 10.866s-6.195 7.638-9.995 11.643a4 4 0 0 1-.197-.152l-.187-.157l-.188-.157a4 4 0 0 0-.198-.152a899 899 0 0 0-5.22-3.86q-2.611-1.917-5.215-3.809a2679 2679 0 0 0-5.195-3.765q-2.59-1.874-5.162-3.732"></svg:path>`,
})
export class IxLegalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLegalCircleIcon],svg[ix-legal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 256.001c0 117.821 95.512 213.334 213.333 213.334s213.333-95.513 213.333-213.334c0-117.82-95.512-213.333-213.333-213.333S42.667 138.181 42.667 256.001m42.666 0c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666S85.333 161.745 85.333 256m210.54-143.289c-3.831-1.872-8.047-3.412-12.672-4.526c-4.456-1.072-9.293-1.816-26.642-1.402l-.241.006c-.085.01-.168.019-10.182 1.827a68 68 0 0 0-9.15 2.97a59.6 59.6 0 0 0-8.273 4.124a53.3 53.3 0 0 0-7.285 5.253a49.5 49.5 0 0 0-6.167 6.337a48 48 0 0 0-4.919 7.352a49.4 49.4 0 0 0-3.553 8.267a48.5 48.5 0 0 0-1.594 6.291a49 49 0 0 0-.742 6.393a51 51 0 0 0 .084 6.434a55 55 0 0 0 .874 6.42a59 59 0 0 0 1.63 6.357a64 64 0 0 0 2.351 6.25a69 69 0 0 0 3.038 6.106q.648 1.16 1.347 2.306a130 130 0 0 0-3.12 3.577a110 110 0 0 0-5.195 6.668a91 91 0 0 0-4.374 6.68a76 76 0 0 0-3.54 6.709a65 65 0 0 0-2.689 6.75a57 57 0 0 0-1.815 6.794a53 53 0 0 0-.922 6.823a52.2 52.2 0 0 0 2.035 18.372c1.086 3.671 2.561 7.214 4.378 10.647c1.78 3.362 3.89 6.62 6.285 9.79c2.343 3.103 4.961 6.125 7.807 9.081c2.796 2.905 5.812 5.748 9.002 8.549c3.147 2.762 6.465 5.484 9.905 8.185a430 430 0 0 0 10.526 7.972a1358 1358 0 0 0 10.873 7.897l1.672 1.209l1.685 1.218l.846.612l.849.615l1.709 1.241l1.724 1.255l1.742 1.273l3.545 2.612a64 64 0 0 1 5.419 4.27a51 51 0 0 1 4.256 4.218a41 41 0 0 1 3.248 4.127a32 32 0 0 1 2.312 3.936a24.6 24.6 0 0 1 1.46 3.641a18.6 18.6 0 0 1 .707 3.248c.117.963.14 1.886.068 2.759a9.6 9.6 0 0 1-.428 2.201a9.3 9.3 0 0 1-.891 1.948a10 10 0 0 1-1.364 1.769a13 13 0 0 1-1.926 1.636a18 18 0 0 1-2.561 1.469a24 24 0 0 1-3.224 1.237a33 33 0 0 1-3.881.933a45 45 0 0 1-4.5.571a58 58 0 0 1-5.086.163c-2.741-.091-5.252-.466-7.451-1.068c-2.052-.561-3.818-1.316-5.332-2.213a17.4 17.4 0 0 1-3.665-2.884a17.4 17.4 0 0 1-2.474-3.258a19.7 19.7 0 0 1-1.558-3.323a21 21 0 0 1-.83-2.94a19 19 0 0 1-.312-2.039l-.349-5.872h-38.444c-.577 4.034-.48 8.866.436 14.026a58.4 58.4 0 0 0 2.444 9.23a60.4 60.4 0 0 0 4.224 9.339a59 59 0 0 0 6.159 8.969a56.7 56.7 0 0 0 8.247 8.065a56.8 56.8 0 0 0 10.444 6.581c3.828 1.872 8.044 3.411 12.668 4.525c4.554 1.097 9.508 1.782 14.887 1.957l.677.007l.89.008a92 92 0 0 0 10.675-.603a79 79 0 0 0 9.932-1.798a68 68 0 0 0 9.149-2.971a60 60 0 0 0 8.272-4.122a53.3 53.3 0 0 0 7.285-5.255a49.6 49.6 0 0 0 6.167-6.335a48 48 0 0 0 4.92-7.353a49.5 49.5 0 0 0 3.554-8.269a48 48 0 0 0 1.594-6.29c.387-2.112.633-4.247.741-6.393a51 51 0 0 0-.083-6.433a55 55 0 0 0-.875-6.421a59 59 0 0 0-1.63-6.356a64 64 0 0 0-2.35-6.25a69 69 0 0 0-3.039-6.107a72 72 0 0 0-1.347-2.306a129 129 0 0 0 3.12-3.576a111 111 0 0 0 5.196-6.668a91 91 0 0 0 4.373-6.68a76 76 0 0 0 3.54-6.709a65 65 0 0 0 2.689-6.751a57 57 0 0 0 1.816-6.793a53 53 0 0 0 .922-6.823q.234-3.418.016-6.829a52.2 52.2 0 0 0-2.052-11.543c-1.086-3.672-2.56-7.214-4.378-10.647c-1.78-3.362-3.89-6.62-6.284-9.791c-2.344-3.103-4.962-6.124-7.808-9.081c-2.795-2.904-5.811-5.747-9.002-8.548c-3.147-2.763-6.464-5.485-9.904-8.185a432 432 0 0 0-10.527-7.973c-3.567-2.627-7.207-5.252-10.873-7.896l-1.672-1.209l-.842-.608l-.843-.61l-4.264-3.094l-3.487-2.55l-2.666-1.966a64 64 0 0 1-5.417-4.269a51 51 0 0 1-4.255-4.216a41 41 0 0 1-3.247-4.127a32 32 0 0 1-2.313-3.936a25 25 0 0 1-1.461-3.642a18.7 18.7 0 0 1-.707-3.249a13.6 13.6 0 0 1-.068-2.759a9.7 9.7 0 0 1 .429-2.202q.336-1.032.888-1.944a10 10 0 0 1 1.353-1.752a12.6 12.6 0 0 1 1.911-1.618a17.4 17.4 0 0 1 2.554-1.46a24.5 24.5 0 0 1 3.227-1.234a34 34 0 0 1 3.892-.937a46 46 0 0 1 4.525-.586a61 61 0 0 1 5.121-.193c2.704.091 5.217.466 7.418 1.067c2.053.561 3.82 1.317 5.336 2.214a17.4 17.4 0 0 1 3.667 2.884a17.5 17.5 0 0 1 2.476 3.26a19.7 19.7 0 0 1 1.558 3.32c.389 1.076.652 2.078.83 2.94c.173.84.265 1.543.313 2.041l.348 5.871h38.445c.576-4.043.479-8.868-.437-14.026a58.3 58.3 0 0 0-2.444-9.23a60.5 60.5 0 0 0-4.224-9.34a59 59 0 0 0-6.161-8.969a56.6 56.6 0 0 0-8.25-8.065a56.8 56.8 0 0 0-10.444-6.581m-64.232 120.737q.414-1.53 10.364-15.447l1.238.927l1.742 1.269l3.474 2.517l3.447 2.492c5.862 4.228 11.643 8.398 17.031 12.512c5.278 4.029 10.174 8.001 14.38 11.922c3.982 3.714 7.334 7.362 9.727 10.978c2.018 3.05 3.355 6.035 3.547 9.015c.088 1.387-.101 2.845-.515 4.375c-.479 1.773-1.257 3.623-2.298 5.553c-1.133 2.101-2.57 4.283-4.292 6.545a75 75 0 0 1-1.898 2.388l-1.231 1.4c-.651-.466-1.195-.864-1.73-1.254l-.147-.108l-1.748-1.273l-3.474-2.518l-3.446-2.492c-5.863-4.228-11.644-8.397-17.032-12.511c-5.277-4.03-10.174-8.001-14.38-11.923c-3.982-3.713-7.334-7.361-9.727-10.978c-2.018-3.05-3.355-6.034-3.547-9.014c-.087-1.387.101-2.846.515-4.375" clip-rule="evenodd"></svg:path>`,
})
export class IxLegalCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLegalCircleFilledIcon],svg[ix-legal-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 256.001c0 117.821 95.512 213.334 213.333 213.334s213.333-95.513 213.333-213.334c0-117.82-95.512-213.333-213.333-213.333S42.667 138.181 42.667 256.001m253.206-143.289c-3.831-1.872-8.047-3.412-12.672-4.526c-4.456-1.072-9.293-1.816-26.642-1.402l-.241.006c-.085.01-.168.019-10.182 1.827a68 68 0 0 0-9.15 2.97a59.6 59.6 0 0 0-8.273 4.124a53.3 53.3 0 0 0-7.285 5.253a49.5 49.5 0 0 0-6.167 6.337a48 48 0 0 0-4.919 7.352a49.4 49.4 0 0 0-3.553 8.267a48.5 48.5 0 0 0-1.594 6.291a49 49 0 0 0-.742 6.393a51 51 0 0 0 .084 6.434a55 55 0 0 0 .874 6.42a59 59 0 0 0 1.63 6.357a64 64 0 0 0 2.351 6.25a69 69 0 0 0 3.038 6.106q.648 1.16 1.347 2.306a130 130 0 0 0-3.12 3.577a110 110 0 0 0-5.195 6.668a91 91 0 0 0-4.374 6.68a76 76 0 0 0-3.54 6.709a65 65 0 0 0-2.689 6.75a57 57 0 0 0-1.815 6.794a53 53 0 0 0-.922 6.823a52.2 52.2 0 0 0 2.035 18.372c1.086 3.671 2.561 7.214 4.378 10.647c1.78 3.362 3.89 6.62 6.285 9.79c2.343 3.103 4.961 6.125 7.807 9.081c2.796 2.905 5.812 5.748 9.002 8.549c3.147 2.762 6.465 5.484 9.905 8.185a430 430 0 0 0 10.526 7.972a1358 1358 0 0 0 10.873 7.897l1.672 1.209l1.685 1.218l.846.612l.849.615l1.709 1.241l1.724 1.255l1.742 1.273l3.545 2.612a64 64 0 0 1 5.419 4.27a51 51 0 0 1 4.256 4.218a41 41 0 0 1 3.248 4.127a32 32 0 0 1 2.312 3.936a24.6 24.6 0 0 1 1.46 3.641a18.6 18.6 0 0 1 .707 3.248c.117.963.14 1.886.068 2.759a9.6 9.6 0 0 1-.428 2.201a9.3 9.3 0 0 1-.891 1.948a10 10 0 0 1-1.364 1.769a13 13 0 0 1-1.926 1.636a18 18 0 0 1-2.561 1.469a24 24 0 0 1-3.224 1.237a33 33 0 0 1-3.881.933a45 45 0 0 1-4.5.571a58 58 0 0 1-5.086.163c-2.741-.091-5.252-.466-7.451-1.068c-2.052-.561-3.818-1.316-5.332-2.213a17.4 17.4 0 0 1-3.665-2.884a17.4 17.4 0 0 1-2.474-3.258a19.7 19.7 0 0 1-1.558-3.323a21 21 0 0 1-.83-2.94a19 19 0 0 1-.312-2.039l-.349-5.872h-38.444c-.577 4.034-.48 8.866.436 14.026a58.4 58.4 0 0 0 2.444 9.23a60.4 60.4 0 0 0 4.224 9.339a59 59 0 0 0 6.159 8.969a56.7 56.7 0 0 0 8.247 8.065a56.8 56.8 0 0 0 10.444 6.581c3.828 1.872 8.044 3.411 12.668 4.525c4.554 1.097 9.508 1.782 14.887 1.957l.677.007l.89.008a92 92 0 0 0 10.675-.603a79 79 0 0 0 9.932-1.798a68 68 0 0 0 9.149-2.971a60 60 0 0 0 8.272-4.122a53.3 53.3 0 0 0 7.285-5.255a49.6 49.6 0 0 0 6.167-6.335a48 48 0 0 0 4.92-7.353a49.5 49.5 0 0 0 3.554-8.269a48 48 0 0 0 1.594-6.29c.387-2.112.633-4.247.741-6.393a51 51 0 0 0-.083-6.433a55 55 0 0 0-.875-6.421a59 59 0 0 0-1.63-6.356a64 64 0 0 0-2.35-6.25a69 69 0 0 0-3.039-6.107a72 72 0 0 0-1.347-2.306a129 129 0 0 0 3.12-3.576a111 111 0 0 0 5.196-6.668a91 91 0 0 0 4.373-6.68a76 76 0 0 0 3.54-6.709a65 65 0 0 0 2.689-6.751a57 57 0 0 0 1.816-6.793a53 53 0 0 0 .922-6.823q.234-3.418.016-6.829a52.2 52.2 0 0 0-2.052-11.543c-1.086-3.672-2.56-7.214-4.378-10.647c-1.78-3.362-3.89-6.62-6.284-9.791c-2.344-3.103-4.962-6.124-7.808-9.081c-2.795-2.904-5.811-5.747-9.002-8.548c-3.147-2.763-6.464-5.485-9.904-8.185a432 432 0 0 0-10.527-7.973c-3.567-2.627-7.207-5.252-10.873-7.896l-1.672-1.209l-.842-.608l-.843-.61l-4.264-3.094l-3.487-2.55l-2.666-1.966a64 64 0 0 1-5.417-4.269a51 51 0 0 1-4.255-4.216a41 41 0 0 1-3.247-4.127a32 32 0 0 1-2.313-3.936a25 25 0 0 1-1.461-3.642a18.7 18.7 0 0 1-.707-3.249a13.6 13.6 0 0 1-.068-2.759a9.7 9.7 0 0 1 .429-2.202q.336-1.032.888-1.944a10 10 0 0 1 1.353-1.752a12.6 12.6 0 0 1 1.911-1.618a17.4 17.4 0 0 1 2.554-1.46a24.5 24.5 0 0 1 3.227-1.234a34 34 0 0 1 3.892-.937a46 46 0 0 1 4.525-.586a61 61 0 0 1 5.121-.193c2.704.091 5.217.466 7.418 1.067c2.053.561 3.82 1.317 5.336 2.214a17.4 17.4 0 0 1 3.667 2.884a17.5 17.5 0 0 1 2.476 3.26a19.7 19.7 0 0 1 1.558 3.32c.389 1.076.652 2.078.83 2.94c.173.84.265 1.543.313 2.041l.348 5.871h38.445c.576-4.043.479-8.868-.437-14.026a58.3 58.3 0 0 0-2.444-9.23a60.5 60.5 0 0 0-4.224-9.34a59 59 0 0 0-6.161-8.969a56.6 56.6 0 0 0-8.25-8.065a56.8 56.8 0 0 0-10.444-6.581m-64.232 120.737q.414-1.53 10.364-15.447l1.238.927l1.742 1.269l3.474 2.517l3.447 2.492c5.862 4.228 11.643 8.398 17.031 12.512c5.278 4.029 10.174 8.001 14.38 11.922c3.982 3.714 7.334 7.362 9.727 10.978c2.018 3.05 3.355 6.035 3.547 9.015c.088 1.387-.101 2.845-.515 4.375c-.479 1.773-1.257 3.623-2.298 5.553c-1.133 2.101-2.57 4.283-4.292 6.545a75 75 0 0 1-1.898 2.388l-1.231 1.4c-.651-.466-1.195-.864-1.73-1.254l-.147-.108l-1.748-1.273l-3.474-2.518l-3.446-2.492c-5.863-4.228-11.644-8.397-17.032-12.511c-5.277-4.03-10.174-8.001-14.38-11.923c-3.982-3.713-7.334-7.361-9.727-10.978c-2.018-3.05-3.355-6.034-3.547-9.014c-.087-1.387.101-2.846.515-4.375" clip-rule="evenodd"></svg:path>`,
})
export class IxLegalCircleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLibraryIcon],svg[ix-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 384h426.667v42.666H42.667zM85.334 85.333h64v277.333h-64zm85.333 21.333h64v256h-64zm160.934 15.62l63.027-11.114l47.949 251.494l-69.268.37zm-75.6-15.62h64v256h-64z"></svg:path>`,
})
export class IxLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLibraryNewIcon],svg[ix-library-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 63.999h64.001v42.667h-64.001l.001 64H384v-64h-64V384l64-.001v-64zm-128 64v42.666h-256V384zM320 106.666v256h-64v-256zM149.334 85.333v277.333h-64V85.333zm85.333 21.333v256h-64v-256zm159.028.585l36.494 191.415h-68.286l-31.236-180.302z"></svg:path>`,
})
export class IxLibraryNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLicenseIcon],svg[ix-license-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m268.078 387.728l.393.3l.115.087za85.7 85.7 0 0 0 12.6 8.028a85 85 0 0 0 4.824 2.319l.058.025l.145.064a85 85 0 0 0 16.477 5.307a85 85 0 0 0 5.17.932L281.29 465.8l-39.274-16.671zm103.846-.004l26.063 61.402l-39.275 16.672l-26.06-61.396a85 85 0 0 0 11.796-2.623a84.7 84.7 0 0 0 17.16-7.26a85 85 0 0 0 4.308-2.579l.147-.094l.073-.047a85 85 0 0 0 5.443-3.811zM319.996 256C355.35 256 384 284.652 384 319.999c0 35.35-28.651 64.001-64.004 64.001C284.65 384 256 355.348 256 319.999C256 284.652 284.649 256 319.996 256M448 64v298.667h-54.081a85 85 0 0 0 6.102-12.961a84.7 84.7 0 0 0 4.886-21.123l.02-.203l.015-.153a86 86 0 0 0 .391-8.229V106.667H106.667V320h127.999l.012 1.41a87 87 0 0 0 .55 8.437a85 85 0 0 0 2.237 11.909a84 84 0 0 0 2.012 6.562a85 85 0 0 0 1.286 3.42l.1.248l.048.119a85 85 0 0 0 5.17 10.561H64V64zM319.999 298.667c-11.783 0-21.332 9.55-21.332 21.333s9.55 21.333 21.332 21.333c11.784 0 21.334-9.55 21.334-21.333s-9.55-21.333-21.334-21.333M149.333 149.333h213.334V192H149.333zm0 85.334h85.334v42.666h-85.334z" opacity=".85"></svg:path>`,
})
export class IxLicenseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLightDarkIcon],svg[ix-light-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603zm234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"></svg:path>`,
})
export class IxLightDarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLimitsCancelledIcon],svg[ix-limits-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M271.083 469.331v-42.667H57.75v42.667zm-85.333-85.334v-42.666h-42.667v42.666zm0-85.333v-42.667h-42.667v42.667zm0-85.333v-42.667h-42.667v42.667zm85.333-128V42.664H57.75v42.667h97.813l-91.562 91.584l30.165 30.165l70.251-70.229l70.25 70.229l30.166-30.165l-91.563-91.584zm102.25 352c11.87 0 22.984-3.231 32.513-8.862l-87.651-87.651c-5.631 9.529-8.862 20.643-8.862 32.513c0 35.346 28.654 64 64 64m-32.51-119.14l87.65 87.65c5.63-9.528 8.86-20.642 8.86-32.51c0-35.346-28.653-64-64-64c-11.868 0-22.982 3.23-32.51 8.86m32.51 151.14c53.02 0 96-42.981 96-96c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96" clip-rule="evenodd"></svg:path>`,
})
export class IxLimitsCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLimitsCheckIcon],svg[ix-limits-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 85.33V42.665H64v42.667h97.813l-91.562 91.584l30.165 30.165l48.917-48.917v247.168H192V158.163l48.917 48.917l30.166-30.165l-91.563-91.584zm0 384.001v-42.667H64v42.667zm198.244-146.994l-33.818-26.014l-92.83 120.655l-68.213-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxLimitsCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineCapFlatIcon],svg[ix-line-cap-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.334v42.667h-384v42.666h128v64h256v42.667h-256v64h-128v42.667h384v42.666H42.667V85.334zm-298.666 128H85.333v85.333h85.334z"></svg:path>`,
})
export class IxLineCapFlatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineCapRoundIcon],svg[ix-line-cap-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.334v42.667h-256c-69.085 0-125.388 54.732-127.911 123.201l-.089 4.799c0 69.085 54.733 125.388 123.202 127.911l4.798.089h256v42.666h-256c-94.256 0-170.666-76.41-170.666-170.666c0-94.257 76.41-170.667 170.666-170.667zm-128 85.333v64h128v42.667h-128v64H170.667V170.667zm-42.666 42.667h-85.334v85.333h85.334z"></svg:path>`,
})
export class IxLineCapRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineCapSquareIcon],svg[ix-line-cap-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.334v42.667H128v256h341.333v42.666h-384V85.334zm-128 85.333v64h128v42.667h-128v64H170.667V170.667zm-42.666 42.667h-85.334v85.333h85.334z"></svg:path>`,
})
export class IxLineCapSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineDashIcon],svg[ix-line-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 234.666v42.667H85.333v-42.667zm192 0v42.667H277.333v-42.667z"></svg:path>`,
})
export class IxLineDashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineDashDotIcon],svg[ix-line-dash-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 234.666v42.667H85.333v-42.667zm213.333 0v42.667H170.667v-42.667zm85.334 0v42.667H384v-42.667z"></svg:path>`,
})
export class IxLineDashDotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineDashDotDotIcon],svg[ix-line-dash-dot-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 234.666v42.667H85.333v-42.667zm85.333 0v42.667h-42.666v-42.667zm85.334 0v42.667H384v-42.667z"></svg:path>`,
})
export class IxLineDashDotDotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineDiagonalIcon],svg[ix-line-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M431.024 111.085L111.023 431.084l-30.17-30.169l319.999-320z"></svg:path>`,
})
export class IxLineDiagonalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineDotIcon],svg[ix-line-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.333 234.666v42.667h-42.666v-42.667zm85.334 0v42.667H192v-42.667zm85.333 0v42.667h-42.667v-42.667zm85.333 0v42.667h-42.666v-42.667z"></svg:path>`,
})
export class IxLineDotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLineSolidIcon],svg[ix-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 234.666H85.333v42.667h341.334z"></svg:path>`,
})
export class IxLineSolidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLinechartIcon],svg[ix-linechart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m437.478 107.795l-21.623-23.59l-123.418 113.128H142.706l-79.353 79.353l22.627 22.628l69.967-69.981H304.89zm-7.3 123.228l14.311 28.621l-111.222 55.611l-136.894-21.068l-90.55 70.443l-19.646-25.26l101.442-78.899l140.445 21.598zm-366.18 174.31H448V448H64z" clip-rule="evenodd"></svg:path>`,
})
export class IxLinechartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLinkIcon],svg[ix-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 234.667v42.666H170.667v-42.666zM234.667 341.333h-64c-47.053 0-85.333-38.28-85.333-85.333s38.28-85.333 85.333-85.333h64V128h-64c-70.693 0-128 57.307-128 128s57.307 128 128 128h64zM341.334 128h-64v42.667h64c47.053 0 85.333 38.28 85.333 85.333s-38.28 85.333-85.333 85.333h-64V384h64c70.692 0 128-57.307 128-128s-57.308-128-128-128"></svg:path>`,
})
export class IxLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLinkBreakIcon],svg[ix-link-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#ixLinkBreak0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m258.588 352.758l-23.921 23.922c-33.272 33.271-87.408 33.271-120.68 0c-33.271-33.272-33.271-87.408 0-120.68l23.922-23.921l-30.17-30.17l-23.922 23.921c-49.987 49.987-49.987 131.032 0 181.02s131.033 49.987 181.02 0l23.921-23.922zm82.745-246.091h-42.666v42.666h42.666c47.054 0 85.334 38.28 85.334 85.334c0 47.053-38.28 85.333-85.334 85.333h-42.666v42.667h42.666c70.693 0 128-57.308 128-128s-57.307-128-128-128m-128 63.999V63.999h42.666v106.667zm-41.056 37.239l-75.424-75.424l30.17-30.17l75.424 75.424zm21.085 46.28L153.6 307.2l34.133 25.6l50.037-66.716zm64.31 1.815h83.661v-42.666h-72.228z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="ixLinkBreak0"><svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class IxLinkBreakIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLinkDiagonalIcon],svg[ix-link-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m301.255 180.575l30.169 30.17l-120.679 120.68l-30.17-30.17zm0 150.85L256 376.68c-33.272 33.271-87.408 33.271-120.68 0s-33.272-87.408 0-120.68l45.255-45.255l-30.17-30.17l-45.255 45.255c-49.987 49.987-49.987 131.032 0 181.02s131.032 49.987 181.02 0l45.254-45.255zM225.83 105.151l-45.255 45.254l30.17 30.17L256 135.321c33.272-33.272 87.408-33.272 120.679 0s33.272 87.407 0 120.679l-45.255 45.255l30.17 30.17l45.255-45.255c49.987-49.987 49.987-131.032 0-181.019c-49.987-49.988-131.032-49.988-181.019 0" clip-rule="evenodd"></svg:path>`,
})
export class IxLinkDiagonalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLinkedinLogoIcon],svg[ix-linkedin-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M75.093 42.667H437.76a31.15 31.15 0 0 1 31.573 30.72v365.226a31.145 31.145 0 0 1-32.426 30.72H74.24a31.15 31.15 0 0 1-31.573-30.72V73.387a31.147 31.147 0 0 1 32.426-30.72m31.574 362.666h62.506l1.494-202.666h-64zM137.6 174.72c-20.265 0-36.693-16.428-36.693-36.693c0-20.266 16.428-36.694 36.693-36.694s36.693 16.428 36.693 36.694c0 20.265-16.428 36.693-36.693 36.693m203.733 230.613h64l-2.346-110.72c0-54.4-11.947-97.066-75.947-97.066a66.13 66.13 0 0 0-59.733 32.853v-27.733h-60.8v202.666h64v-99.84c0-26.453 5.12-52.266 37.973-52.266s32.853 30.293 32.853 53.973z" clip-rule="evenodd"></svg:path>`,
})
export class IxLinkedinLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListIcon],svg[ix-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64H448v42.667H170.667zM64 64h64v42.667H64zm106.667 106.667H448v42.666H170.667zm-106.667 0h64v42.666H64zm106.667 106.666H448V320H170.667zm-106.667 0h64V320H64zM170.667 384H448v42.667H170.667zM64 384h64v42.667H64z"></svg:path>`,
})
export class IxListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListAddIcon],svg[ix-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h64v42.667H64zm0 106.667h64v42.666H64zm64 106.666H64V320h64zM170.667 64H448v42.667H170.667zM448 170.667H170.667v42.666H448zM170.667 277.333h170.666V320H170.667zm320 106.667h-64v-64H384v64h-64v42.667h64v64h42.667v-64h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxListAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListGraphicsIcon],svg[ix-list-graphics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.614 277.388v170.667H64.948V277.388zm213.334 0v170.667H278.281V277.388zm-256 42.667h-85.334v85.333h85.334zm213.333 0h-85.333v85.333h85.333zm-170.667-256V234.72H64.948V64.055zm213.334 0V234.72H278.281V64.055zm-42.667 42.666h-85.333v85.334h85.333z"></svg:path>`,
})
export class IxListGraphicsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListGraphicsTextIcon],svg[ix-list-graphics-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 341.336v85.333h-192v-85.333zm234.666 21.333v42.667h-192v-42.667zM234.667 213.336v85.333h-192v-85.333zm234.666 21.333v42.667h-192v-42.667zM234.667 85.336v85.333h-192V85.336zm234.666 21.333v42.667h-192v-42.667z"></svg:path>`,
})
export class IxListGraphicsTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListPercentageIcon],svg[ix-list-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h64v42.667H64zm0 106.667h64v42.666H64zm64 106.666H64V320h64zM170.667 64H448v42.667H170.667zM448 170.667H170.667v42.666H448zM170.667 277.333h42.666V320h-42.666zM128 384H64v42.667h64zm85.333 0h-42.666v42.667h42.666zm130.292-77.917q-10.75-15.375-34.375-15.375q-21.75 0-32.75 12.875q-11 13.125-11 36.75q0 22.376 9.25 35.375q10.75 15.375 34.375 15.375q21.75 0 32.75-13t11-37.25q0-21.75-9.25-34.75m-46 13.375q4.125-7.5 11.625-7.5t11.5 7.5q4 7.375 4 21.375q0 14.125-4 21.625q-4 7.375-11.5 7.375q-15.625 0-15.625-29.25q0-13.75 4-21.125M395 288.083l-70.375 185.375h24.75l70.375-185.375zm74.625 97.75q-10.75-15.375-34.375-15.375q-21.75 0-32.75 12.875q-11 13.125-11 36.875q0 22.251 9.25 35.25q10.75 15.375 34.375 15.375q21.75 0 32.75-12.875q11-13.125 11-37.375q0-21.75-9.25-34.75m-46 13.25q4-7.375 11.625-7.375q15.5 0 15.5 28.875q0 29-15.5 29q-15.625 0-15.625-29.25q0-13.875 4-21.25" clip-rule="evenodd"></svg:path>`,
})
export class IxListPercentageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListRemoveIcon],svg[ix-list-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h64v42.667H64zm0 106.667h64v42.666H64zm64 106.666H64V320h64zM170.667 64H448v42.667H170.667zM448 170.667H170.667v42.666H448zM170.667 277.333H448V320H170.667zm320 106.667H320v42.667h170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxListRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListSortedIcon],svg[ix-list-sorted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M109.917 80.25v90.417h25.75V52.583h-22.834L75.083 74.75l12 19.75zm103.416 5.083h256V128h-256zm0 149.333h256v42.667h-256zm0 149.334h256v42.667h-256zM71.667 320v-20q24.584-20.667 36.75-32.333q13-12.5 17.5-19.084q4.583-6.666 4.583-13.083q0-6.583-5.5-10.667q-5.416-4.166-14.167-4.166q-12.5 0-31.5 8.083l-6.666-20.667q21-8.25 41.416-8.25q20.167 0 31.334 8.667q11.75 9.084 11.75 25.833q0 10.667-4.75 19.417q-4.667 8.75-17.084 21.167q-10.25 10.25-26.416 24.25h49.25V320zM75.5 444l-5.75 20.75q17.667 6.833 39.417 6.833q15.75 0 25.916-4t15.834-12.416q5.833-8.584 5.833-19.584q0-12.167-7.083-19.166q-6.167-6-18.5-7.834q12.416-1.916 18.416-8.5q6-6.666 6-18.333q0-17.167-12.75-25.417q-11.166-7.166-30.5-7.166q-20.25 0-38.833 6.75l5.583 20.5Q95.667 370 108.5 370q9.917 0 15.167 3.667Q129 377.25 129 384q0 7-6.917 10.917Q115 399 96.083 399q-3.833 0-7.75-.167v19.417q8.167-.333 13.25-.333q13.584 0 19.917 3.083q8.583 4.167 8.583 13.417q0 6.416-4.416 10.666q-5.667 5.667-19.25 5.667Q90 450.75 75.5 444" clip-rule="evenodd"></svg:path>`,
})
export class IxListSortedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListSortedAltIcon],svg[ix-list-sorted-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 213.333V98.127l-29.094 18.157l-15.29-25.165l48.1-28.244h29.094v150.458zm362.666-42.666h-256V128h256zM213.333 384h256v-42.667h-256zM64 401.105v25.562h110.555V400.04h-62.946q20.662-17.893 33.763-30.994q15.868-15.869 21.834-27.053q6.07-11.182 6.071-24.816q0-21.408-15.018-33.017q-14.273-11.077-40.047-11.077q-26.094 0-52.934 10.545l8.52 26.413q24.285-10.33 40.261-10.331q11.182 0 18.106 5.325q7.029 5.22 7.029 13.633q0 8.202-5.858 16.722q-5.75 8.414-22.366 24.39Q95.42 374.691 64 401.105" clip-rule="evenodd"></svg:path>`,
})
export class IxListSortedAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixListTextIcon],svg[ix-list-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 426.667v42.666H149.333v-42.666zm-85.334-64v42.666h-192v-42.666zm-234.666 0v42.666H64v-42.666zm320-85.334V320H149.333v-42.667zm-320-64V256H64v-42.667zm234.666 0V256h-192v-42.667zM426.667 128v42.667H149.333V128zm-320-64v42.667H64V64zm234.666 0v42.667h-192V64z"></svg:path>`,
})
export class IxListTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLiveScheduleIcon],svg[ix-live-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M490.666 256v234.666H277.333V256zM448 426.666H320V448h128zM213.333 21.333c106.039 0 192 85.961 192 192a176 176 0 0 1-1.707 21.333H360.96a141.4 141.4 0 0 0 1.706-21.333C362.666 130.858 295.808 64 213.333 64S64 130.858 64 213.333s66.858 149.333 149.333 149.333A147.4 147.4 0 0 0 256 356.48v43.946a187 187 0 0 1-42.667 4.907c-106.039 0-192-85.961-192-192s85.961-192 192-192M448 362.666H320V384h128zm0-64H320V320h128zM145.547 115.302l67.74 67.74l59.462-59.46l30.17 30.17l-59.462 59.46l.142.142l-30.17 30.17l-.142-.142l-.123.125l-30.17-30.17l.123-.125l-67.74-67.74z"></svg:path>`,
})
export class IxLiveScheduleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLocationIcon],svg[ix-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c82.475 0 149.334 66.859 149.334 149.333c0 24.937-6.095 48.433-16.916 69.108L256 490.667L126.65 266.676c-12.73-21.982-19.983-47.472-19.983-74.676c0-82.474 66.859-149.333 149.333-149.333m0 42.667c-58.91 0-106.666 47.756-106.666 106.666c0 16.94 3.908 33.194 11.303 47.867l3.584 6.546L256 405.333l92.427-160.04c9.293-16.046 14.239-34.235 14.239-53.293c0-58.91-47.756-106.666-106.667-106.666M256 128c35.347 0 64 28.654 64 64s-28.653 64-64 64c-35.346 0-64-28.653-64-64c0-35.346 28.654-64 64-64m0 42.667c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.334-9.552 21.334-21.334s-9.552-21.333-21.334-21.333"></svg:path>`,
})
export class IxLocationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLocationFilledIcon],svg[ix-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c82.475 0 149.334 66.859 149.334 149.333c0 27.204-7.254 52.694-19.983 74.676Q372.62 288.657 256 490.667q-116.622-202.01-129.35-223.991c-12.73-21.982-19.984-47.472-19.984-74.676c0-82.474 66.859-149.333 149.333-149.333M256 128c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.653 64-64c0-35.346-28.653-64-64-64"></svg:path>`,
})
export class IxLocationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLockIcon],svg[ix-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c70.49 0 128 57.695 128 128V256h42.666v213.334H85.333V256H128v-85.333c0-70.305 57.51-128 128-128m128 256H128v128h256zM256 85.334c-47.331 0-85.334 38.996-85.334 85.333V256h170.667v-85.333c0-46.337-38.003-85.333-85.333-85.333"></svg:path>`,
})
export class IxLockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLockCheckIcon],svg[ix-lock-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 170.667v127.999H128v128h106.667v42.667H85.333V256H128v-85.333c0-70.306 57.51-128 128-128s128 57.694 128 128M256 85.333c-47.331 0-85.333 38.996-85.333 85.334V256h170.666v-85.333c0-46.338-38.003-85.334-85.333-85.334m212.776 238.795l-31.218-24.014l-85.688 111.374l-62.966-55.11l-25.935 29.64l94.555 82.736z" clip-rule="evenodd"></svg:path>`,
})
export class IxLockCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLockFilledIcon],svg[ix-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c70.49 0 128 57.695 128 128V256h42.666v213.334H85.333V256H128v-85.333c0-70.305 57.51-128 128-128m0 42.667c-47.331 0-85.334 38.996-85.334 85.333V256h170.667v-85.333c0-46.337-38.003-85.333-85.333-85.333"></svg:path>`,
})
export class IxLockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLockKeyIcon],svg[ix-lock-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v-64H384v-85.333c0-70.305-57.51-128-128-128s-128 57.695-128 128V256H85.333v213.334h128v-42.667H128v-128h256v32.749c12.551-7.26 27.124-11.416 42.667-11.416m-256-149.333c0-46.338 38.002-85.333 85.333-85.333s85.333 38.995 85.333 85.333V256H170.667zm320 234.667c0-35.347-28.654-64-64-64c-27.866 0-51.573 17.809-60.359 42.666H234.667v42.667H256v42.667h64v-42.667h46.308c8.786 24.857 32.493 42.667 60.359 42.667c35.346 0 64-28.654 64-64m-96 0c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxLockKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLockKeyFilledIcon],svg[ix-lock-key-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M352.749 362.667C367.504 337.161 395.081 320 426.667 320v-64H384v-85.333c0-70.305-57.51-128-128-128s-128 57.695-128 128V256H85.333v213.334h128V362.667zm-182.082-192c0-46.338 38.002-85.333 85.333-85.333s85.333 38.995 85.333 85.333V256H170.667zm320 234.667c0-35.347-28.654-64-64-64c-27.866 0-51.573 17.809-60.359 42.666H234.667v42.667H256v42.667h64v-42.667h46.308c8.786 24.857 32.493 42.667 60.359 42.667c35.346 0 64-28.654 64-64m-96 0c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxLockKeyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLogIcon],svg[ix-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M321.923 42.667H87.256v234.667h42.667v-192h174.293l81.707 81.706v110.294h42.666v-128zM85.573 448V320.028h28.81v105.394h55V448zm153.17-130.23q30.165 0 46.24 19.146q15.444 18.334 15.443 47.143q0 31.519-18.243 50.124q-15.714 16.075-43.44 16.075q-30.165 0-46.24-19.146q-15.443-18.334-15.443-47.866q0-30.887 18.243-49.491q15.804-15.985 43.44-15.985m-.09 22.578q-15.624 0-24.114 13.005q-7.676 11.74-7.676 30.164q0 21.315 9.121 33.055q8.58 11.108 22.759 11.108q15.534 0 24.204-13.095q7.676-11.56 7.676-30.526q0-20.862-9.121-32.603q-8.58-11.108-22.85-11.108m190.83 36.035v65.295q-11.018 3.704-15.534 4.877q-13.998 3.703-30.074 3.703q-31.61 0-48.136-15.895q-18.334-17.52-18.334-48.859q0-36.035 22.759-54.368q16.527-13.365 44.614-13.366q24.024 0 44.705 8.76l-9.844 22.488q-9.754-4.876-17.07-6.819q-7.315-1.941-16.075-1.941q-20.952 0-30.887 13.637q-8.399 11.559-8.399 30.435q0 22.669 12.644 34.138q10.115 9.212 25.107 9.212q8.76 0 16.617-2.98v-25.74H379.54v-22.577z"></svg:path>`,
})
export class IxLogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLogInIcon],svg[ix-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 42.667v426.667H213.334V384H256v42.667h149.334V85.334H256V128h-42.666V42.667zM117.334 181.334c33.824 0 62.395 22.49 71.574 53.333h173.759v42.667h-21.333V320h-64v-42.666h-88.426c-9.179 30.842-37.75 53.333-71.574 53.333c-41.238 0-74.667-33.43-74.667-74.667s33.43-74.666 74.667-74.666m0 42.666c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxLogInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLogOutIcon],svg[ix-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.667V128h-42.666l-.001-42.666H128v341.333h149.333V384H320v85.334H85.333V42.667zm57.751 112.915L478.17 256L377.75 356.42l-30.17-30.17l48.915-48.916H192v-42.666h204.496l-48.915-48.915z"></svg:path>`,
})
export class IxLogOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLogicDiagramIcon],svg[ix-logic-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.666V85.333H42.667v341.333zm-42.667-42.667H85.334V128h341.333zM256 277.333h21.334v-85.334H256zm0 21.333h85.334v-21.333H256zm-64-85.333h64v-21.334h-64zm0 42.666V149.333h-85.333v106.666zm0 106.667v-21.333h149.334v21.333h64V255.999h-64v64H192v-21.333h-85.333v64z"></svg:path>`,
})
export class IxLogicDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLongerIcon],svg[ix-longer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 384h42.666V128h-42.666zm-192-128.64l84.693 85.76l30.293-30.293l-33.066-33.067H192v-43.947h-67.413l33.066-32.853l-30.293-30.293zm341.973-84.693l84.693 85.76l-84.693 84.693l-30.293-30.293l33.066-33.067H320v-43.947h67.413l-33.066-32.853z"></svg:path>`,
})
export class IxLongerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixLowerLimitIcon],svg[ix-lower-limit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 405.333L114.325 287.296l27.328-32.79l93.013 77.505V64h42.667v268.01l92.992-77.503l27.328 32.789zm-170.667 0h341.333V448H85.333z"></svg:path>`,
})
export class IxLowerLimitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMachineAIcon],svg[ix-machine-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M96 42.667H68.07l7.349 26.946l27.559 101.054H42.667V384h42.666v64H128v-64h85.333v64H256v-64h42.667v-21.333H384V448h42.667v-85.333h42.666V320H298.667V170.667h-81.645l27.56-101.054l7.348-26.946zm76.797 128l23.272-85.334h-72.138l23.272 85.334zM85.333 341.333v-128H256v128zm256-149.333H320v106.667h128V192zm21.334 64v-21.333h42.666V256z" clip-rule="evenodd"></svg:path>`,
})
export class IxMachineAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMachineAFilledIcon],svg[ix-machine-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M68.07 42.667h183.862l-7.35 26.946l-27.56 101.054h81.645V320h170.666v42.667h-42.666V448H384v-85.333h-85.333V384H256v64h-42.667v-64H128v64H85.333v-64H42.667V170.667h60.311L75.418 69.613zM448 192H320v106.667h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxMachineAFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMachineBIcon],svg[ix-machine-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 42.667H384v106.666h-42.667v-64h-192v21.334h149.334v128h-32v64H224v-64h-32v-85.334h-85.333zM256 192h-21.333v-42.667H256zM85.333 170.667H64V448h362.667V170.667H320v42.666h64v192H106.667v-192h64v-42.666zm64 106.666v85.334h192v-85.334h-42.666V320H192v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxMachineBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMachineBFilledIcon],svg[ix-machine-b-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 42.667H384v106.666h-42.667v-64h-192v21.334h149.334v128h-32v64H224v-64h-32v-85.334h-85.333zm64 128v170.666H320V170.667h106.667V448H64V170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxMachineBFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMachineCIcon],svg[ix-machine-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m389.676 102.627l-2.294-17.293H333.73l-2.3 17.282l-1.433 10.707l-2.817 1.629l-2.524 1.664l-9.49-4.039l-15.293-6.505l-8.257 15.075l-10.265 18.741l-8.272 15.101l13.001 10.76l8.032 6.645l-.025.311a64 64 0 0 0-.072 2.981l.072 2.957l.044.417l-8.049 6.669l-13.009 10.759l8.274 15.105l10.271 18.751l8.255 15.073l15.293-6.502l9.471-4.037l2.634 1.74l2.726 1.553l1.408 10.577l2.294 17.291h53.649l2.301-17.281l1.416-10.728l2.834-1.608l2.507-1.685l9.505 4.058l15.295 6.505l8.257-15.075l10.265-18.74L448 196.384l-13.001-10.76l-8.03-6.645l.021-.311q.073-1.51.072-2.982l-.07-2.956l-.042-.457l8.051-6.64L448 154.873l-8.272-15.1l-10.267-18.745l-8.257-15.072l-15.291 6.502l-9.488 4.017l-2.617-1.721l-2.743-1.572zm-27.271 113.216c20.995 0 38.013-17.979 38.013-40.157S383.4 135.53 362.405 135.53s-38.013 17.978-38.013 40.156s17.018 40.157 38.013 40.157m-181.804 47.412l-2.293-17.294h-53.652l-2.301 17.281l-1.433 10.708l-2.816 1.629l-2.525 1.664l-9.489-4.038l-15.293-6.505l-8.257 15.075l-10.266 18.741l-8.272 15.101l13 10.76l8.033 6.644l-.023.311a63 63 0 0 0-.073 2.982l.071 2.955l.045.418l-8.05 6.67L64 357.115l8.273 15.105l10.27 18.751l8.256 15.073l15.292-6.501l9.471-4.038l2.634 1.741l2.726 1.552l1.41 10.577l2.294 17.292h53.648l2.301-17.282l1.416-10.728l2.833-1.608l2.508-1.684l9.506 4.057l15.293 6.506l8.257-15.075l10.266-18.741l8.272-15.101l-13.001-10.76l-8.03-6.644l.021-.311q.072-1.512.073-2.982l-.071-2.956l-.042-.457l8.051-6.64l12.999-10.76l-8.272-15.099l-10.267-18.746l-8.256-15.073l-15.292 6.502l-9.488 4.018l-2.617-1.721l-2.743-1.572zm-27.27 113.216c20.994 0 38.013-17.979 38.013-40.157c0-22.179-17.019-40.157-38.013-40.157c-20.995 0-38.014 17.978-38.014 40.157s17.019 40.157 38.014 40.157M448 384H256v42.667h192zM64 85.334h192V128H64zm192 127.999h-42.667V256H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxMachineCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMachineCFilledIcon],svg[ix-machine-c-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m389.676 102.627l-2.294-17.293H333.73l-2.3 17.282l-1.433 10.707l-2.817 1.629l-2.524 1.664l-9.49-4.039l-15.293-6.505l-8.257 15.075l-10.265 18.741l-8.272 15.101l13.001 10.76l8.032 6.645l-.025.311a64 64 0 0 0-.072 2.981l.072 2.957l.044.417l-8.049 6.669l-13.009 10.759l8.274 15.105l10.271 18.751l8.255 15.073l15.293-6.502l9.471-4.037l2.634 1.74l2.726 1.553l1.408 10.577l2.294 17.291h53.649l2.301-17.281l1.416-10.728l2.834-1.608l2.507-1.685l9.505 4.058l15.295 6.505l8.257-15.075l10.265-18.74L448 196.384l-13.001-10.76l-8.03-6.645l.021-.311q.073-1.51.072-2.982l-.07-2.956l-.042-.457l8.051-6.64L448 154.873l-8.272-15.1l-10.267-18.745l-8.257-15.072l-15.291 6.502l-9.488 4.017l-2.617-1.721l-2.743-1.572zM178.308 245.961l2.293 17.294l1.39 10.555l2.743 1.572l2.617 1.721l9.488-4.018l15.292-6.502l8.256 15.073l10.267 18.746l8.272 15.099l-12.999 10.76l-8.051 6.64l.042.457l.071 2.956q0 1.47-.073 2.982l-.021.311l8.03 6.644l13.001 10.76l-8.272 15.101l-10.266 18.741l-8.257 15.075l-15.293-6.506l-9.506-4.057l-2.508 1.684l-2.833 1.608l-1.416 10.728l-2.301 17.282h-53.648l-2.294-17.292l-1.41-10.577l-2.726-1.552l-2.634-1.741l-9.471 4.038l-15.292 6.501l-8.255-15.073l-10.27-18.751L64 357.115l13.007-10.758l8.05-6.67l-.045-.418l-.07-2.955q0-1.47.072-2.982l.023-.311l-8.032-6.644l-13.001-10.76l8.272-15.101l10.266-18.741l8.257-15.075l15.293 6.505l9.489 4.038l2.525-1.664l2.816-1.629l1.433-10.708l2.301-17.281zM448 384H256v42.667h192zM64 85.334h192V128H64zm192 127.999h-42.667V256H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxMachineCFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMagnetIcon],svg[ix-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 106.668c82.475 0 149.333 66.859 149.333 149.333S402.475 405.335 320 405.335H192v-128h128c11.782 0 21.333-9.552 21.333-21.334c0-10.94-8.235-19.957-18.845-21.189l-2.488-.144H192v-128zm-170.667 256v42.667H42.667v-42.667zM320 149.335h-42.667v42.666H320c35.346 0 64 28.654 64 64s-28.654 64-64 64h-42.667v42.667H320c58.91 0 106.667-47.756 106.667-106.667c0-57.36-45.276-104.145-102.04-106.568zm-170.667 128v42.666H42.667v-42.666zm0-85.334v42.667H42.667v-42.667zm0-85.333v42.667H42.667v-42.667z"></svg:path>`,
})
export class IxMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMagnetCancelledIcon],svg[ix-magnet-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 136.835l-36.422-36.422l30.17-30.167l15.086 15.086h.002L192 183.163v.002l8.834 8.834h.001l42.667 42.666h-.001l41.317 41.317h.001l31.089 31.09h-.001l45.472 45.471l30.224 30.223l-.001.001l50.146 50.146l-30.17 30.167l-55.584-55.584c-23.539 12.247-50.291 19.169-78.661 19.169h-192V277.332H225.83l-42.667-42.667h-97.83zm183.164 183.164H192v64h85.333c16.392 0 32.063-3.081 46.468-8.696zM154.508 85.332l42.667 42.667h80.158c70.693 0 128 57.307 128 128c0 23.061-6.099 44.699-16.771 63.386l30.99 30.991C437.527 323.344 448 290.895 448 255.999c0-94.257-76.41-170.667-170.667-170.667zm185.174 185.174l-78.507-78.507h16.158c35.347 0 64 28.653 64 64a64.2 64.2 0 0 1-1.651 14.507" clip-rule="evenodd"></svg:path>`,
})
export class IxMagnetCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMailIcon],svg[ix-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333v341.333h426.667V85.333zM391.894 128L256 248.746L120.107 128zM85.334 384V154.24L256 305.92l170.667-151.68V384z"></svg:path>`,
})
export class IxMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMailAlarmAnalogIcon],svg[ix-mail-alarm-analog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64v298.667H323.66L366.328 320H85.333V128l149.334 129.013L384 128v174.328l42.667-42.667V64zm304 42.667l-112 96l-112-96zm80 320V289.831L289.83 426.667H192v42.667h115.503L384 392.837v76.497h106.667v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxMailAlarmAnalogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMailAlarmClassesIcon],svg[ix-mail-alarm-classes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 362.667V64h384v230.838a39.4 39.4 0 0 0-13.207-12.314c-9.299-5.314-19.853-6.42-29.46-3.919V128L234.667 257.013L85.333 128v192h85.326a106.2 106.2 0 0 0-19.192 42.667zm192-160l112-96h-224zm97.484 142.771c-.443-.854-.825-1.576-1.137-2.15c-14.457-26.58-42.629-44.621-75.014-44.621c-47.128 0-85.333 38.205-85.333 85.333s38.205 85.333 85.333 85.333c8.309 0 16.34-1.187 23.934-3.402a39.3 39.3 0 0 1-2.601-14.103a39.4 39.4 0 0 1 5.19-19.54l2.43-4.254l-1.54-1.538L256 399.083l-32 32.002L208.915 416l31.981-32l-31.981-32L224 336.915l32 31.981l32-31.981L303.085 352l-32.002 32l23.296 23.296s.533.583 1.511 1.599zm77.442-37.669a18.04 18.04 0 0 0-6.717-6.717c-8.656-4.946-19.683-1.939-24.629 6.717l-77.202 135.104a18.04 18.04 0 0 0-2.378 8.956c0 9.969 8.082 18.051 18.051 18.051h154.404c3.142 0 6.229-.82 8.956-2.379c8.656-4.946 11.663-15.972 6.717-24.628zm-2.438 89.822h-27.077v-54.154h27.077zm-13.538 18.052c10.315 0 18.051 7.637 18.051 18.051s-7.736 18.051-18.051 18.051c-10.55 0-18.052-7.637-18.052-18.283c0-10.182 7.737-17.819 18.052-17.819" clip-rule="evenodd"></svg:path>`,
})
export class IxMailAlarmClassesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMailAlarmDiscreteIcon],svg[ix-mail-alarm-discrete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64v298.667h170.666V320h-128V128l149.334 129.013L384 128v170.667h42.667V64zm304 42.667l-112 96l-112-96zm80 320V320h-192v106.667h-64v42.666h106.666V362.667H384v106.666h106.667v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxMailAlarmDiscreteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMailFilledIcon],svg[ix-mail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.687 114.04l213.334 192.001l213.333-192v312.633H42.688zm394.776-28.7L256.021 248.626L74.577 85.34z"></svg:path>`,
})
export class IxMailFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceIcon],svg[ix-maintenance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 42.667c70.692 0 128 57.308 128 128c0 12.931-1.918 25.414-5.484 37.181l133.484 133.486c23.564 23.564 23.564 61.769 0 85.333s-61.77 23.564-85.333 0L207.848 293.183c-11.767 3.566-24.25 5.484-37.181 5.484c-70.692 0-128-57.308-128-128c0-13.642 2.134-26.786 6.087-39.115L109.302 192l60.014-19.987l2.68-2.68L192 109.375L131.382 48.81c12.378-3.988 25.58-6.142 39.285-6.142"></svg:path>`,
})
export class IxMaintenanceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceDocumentsIcon],svg[ix-maintenance-documents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 106.667L448 192v277.334H106.667V106.667zm-17.673 42.667h-195.66v277.333h256V209.673zM298.667 42.667l42.667 42.667h-256v320H42.667V42.667zM286.97 209.842c16.137 20.982 21.58 46.795 16.41 65.64q-.969 4.653 68.231 72.545q22.627 22.627 0 45.255q-21.296 21.297-42.593 2.506l-74.869-71.075c-18.847 5.172-44.659-.273-65.64-16.41c-15.39-20.235-20.698-46.684-16.41-65.64l32.82 32.82l32.82-16.41l16.41-32.821l-32.82-32.82c18.956-4.287 45.406 1.02 65.64 16.41"></svg:path>`,
})
export class IxMaintenanceDocumentsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceInfoIcon],svg[ix-maintenance-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M160 106.667c64.802 0 117.334 52.532 117.334 117.333c0 12.184-1.857 23.933-5.303 34.981L389.377 376.33c21.276 21.276 21.276 55.771 0 77.047s-55.771 21.276-77.047 0L194.982 336.03c-11.048 3.447-22.798 5.304-34.982 5.304c-64.8 0-117.333-52.532-117.333-117.334c0-12.505 1.956-24.553 5.58-35.856l55.502 55.412l50.238-16.732a54 54 0 0 1 3.437-3.778l1.623-1.623a54 54 0 0 1 3.767-3.428l16.742-50.179l-55.568-55.52c11.348-3.655 23.45-5.629 36.012-5.629m266.667 42.667v128H384v-128zm-21.333-90.667c14.727 0 26.666 11.94 26.666 26.667S420.061 112 405.334 112s-26.667-11.939-26.667-26.666s11.94-26.667 26.667-26.667"></svg:path>`,
})
export class IxMaintenanceInfoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceWarningIcon],svg[ix-maintenance-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.627 0 213.334 95.707 213.334 213.333S373.627 469.334 256 469.334c-117.626 0-213.333-95.707-213.333-213.334c0-117.626 95.707-213.333 213.333-213.333m0 42.667C161.56 85.334 85.334 161.56 85.334 256S161.56 426.667 256 426.667S426.667 350.441 426.667 256c0-94.44-76.226-170.666-170.667-170.666m.914 72.781c16.137 20.983 21.581 46.796 16.41 65.641q-.967 4.652 68.232 72.545q22.627 22.627 0 45.255q-21.296 21.295-42.593 2.505l-74.87-71.074c-18.846 5.171-44.658-.273-65.64-16.41c-15.39-20.235-20.697-46.685-16.41-65.641l32.82 32.82l32.82-16.41l16.41-32.82l-32.82-32.821c18.957-4.287 45.407 1.02 65.641 16.41"></svg:path>`,
})
export class IxMaintenanceWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceWarningFilledIcon],svg[ix-maintenance-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.627 0 213.334 95.707 213.334 213.333S373.627 469.334 256 469.334c-117.626 0-213.333-95.707-213.333-213.334c0-117.626 95.707-213.333 213.333-213.333m.914 115.448c-20.234-15.39-46.684-20.697-65.64-16.41l32.82 32.82l-16.41 32.82l-32.82 16.411l-32.821-32.82c-4.287 18.956 1.02 45.406 16.41 65.64c20.982 16.138 46.794 21.582 65.64 16.41l74.87 71.075q21.296 18.79 42.593-2.505q22.627-22.627 0-45.255q-69.2-67.893-68.231-72.545c5.17-18.845-.274-44.658-16.41-65.64"></svg:path>`,
})
export class IxMaintenanceWarningFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMandatoryIcon],svg[ix-mandatory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m295.481 362.666l46.268-33.246l-54.303-60.676l81.178-15.792l-16.901-54.303l-77.021 34.078l9.42-83.394h-56.52l9.42 83.394L160 198.649l-16.623 54.303l80.9 15.792l-54.303 60.676l46.546 33.246l39.342-72.034z"></svg:path>`,
})
export class IxMandatoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMandatoryDoneIcon],svg[ix-mandatory-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m437.361 189.44l45.255 45.255L245.361 471.95L114.773 341.362l45.255-45.255l85.333 85.34zM284.121 42.667l-9.42 83.394l77.022-34.078l16.9 54.303l-81.177 15.792l54.303 60.676L295.48 256l-39.619-72.034L216.52 256l-46.545-33.246l54.303-60.676l-80.9-15.792L160 91.983l77.021 34.078l-9.42-83.394z"></svg:path>`,
})
export class IxMandatoryDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMapIcon],svg[ix-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M309.333 64L448 106.667V448l-138.667-42.667L202.667 448L64 405.333V64l138.667 42.667zm-202.666 57.77v252.033L192 400.062V148.026zm191.999-7.563l-85.333 34.145v249.414l85.333-34.121zM320 111.922v252.052l85.333 26.255V138.176z"></svg:path>`,
})
export class IxMapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMapAlt1Icon],svg[ix-map-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m308.209 85.336l8.783 2.972l138.667 46.934l13.674 4.629v67.6c-11.815-12.515-26.353-22.432-42.666-28.803v-13.01l-85.334-28.882v41.892c-16.313 6.371-30.851 16.288-42.666 28.803v-75.958l-85.334 37.547v146.941c17.629-7.069 37.995-14.979 53.585-20.261a116.7 116.7 0 0 0 8.719 37.337c-14.943 5.312-33.613 12.641-49.9 19.221a2696 2696 0 0 0-32.453 13.367l-2.015.848l-.516.218l-.128.055l-.031.013l-9.001 3.813l-9.087-3.635l-117.334-46.934l-12.505-5.003V86.062l30.16 12.064l108.069 43.228l118.897-52.315zM85.333 144.373l85.334 34.133v146.492l-85.334-34.134zm298.66 68.963c43.201 0 78.222 35.021 78.222 78.222c0 14.25-3.799 27.601-10.467 39.116c-6.668 11.514-67.755 117.329-67.755 117.329s-61.087-105.815-67.755-117.329c-6.668-11.515-10.467-24.866-10.467-39.116c0-43.201 35.021-78.222 78.222-78.222m33.523 78.222c0 18.515-15.01 33.524-33.524 33.524s-33.524-15.009-33.524-33.524c0-18.514 15.009-33.524 33.524-33.524c18.514 0 33.524 15.01 33.524 33.524" clip-rule="evenodd"></svg:path>`,
})
export class IxMapAlt1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMapAlt1FilledIcon],svg[ix-map-alt-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M266.667 288.003c0 21.254 5.651 41.188 15.533 58.382l-15.442 6.22L192 381.879V140.468l106.667-50.12V207.47c-19.839 21.013-32 49.352-32 80.532M469.333 145.48v61.991c-21.392-22.66-51.711-36.802-85.333-36.802c-23.611 0-45.594 6.975-64 18.976v-100.3zM170.667 381.427V140.853l-128-55.517V325.91zm213.326-168.091c43.201 0 78.222 35.021 78.222 78.222c0 14.25-3.799 27.601-10.467 39.116c-6.668 11.514-67.755 117.329-67.755 117.329s-61.087-105.815-67.755-117.329c-6.668-11.515-10.467-24.866-10.467-39.116c0-43.201 35.021-78.222 78.222-78.222m33.523 78.222c0 18.515-15.01 33.524-33.524 33.524s-33.524-15.009-33.524-33.524c0-18.514 15.009-33.524 33.524-33.524c18.514 0 33.524 15.01 33.524 33.524" clip-rule="evenodd"></svg:path>`,
})
export class IxMapAlt1FilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMapAlt2Icon],svg[ix-map-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.66 42.664c43.201 0 78.222 35.021 78.222 78.222c0 14.25-3.799 27.602-10.467 39.116S298.66 277.331 298.66 277.331s-61.087-105.815-67.755-117.329s-10.467-24.866-10.467-39.116c0-43.2 35.021-78.222 78.222-78.222m0 234.667h128.007v-42.667H384v-42.667h85.333v234.667H42.667V191.997H192v42.667H90.667l63.422 85.333l77.07-69.12l23.655 26.454zm33.522-156.445c0 18.515-15.009 33.524-33.524 33.524c-18.514 0-33.523-15.009-33.523-33.524c0-18.514 15.009-33.523 33.523-33.523s33.524 15.009 33.524 33.523M179.778 354.131l76.992-68.907l92.359 98.773H202.667zm246.889 29.866h-21.334l-57.574-64h78.908zM85.333 298.664l64 85.333h-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxMapAlt2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMapAlt2FilledIcon],svg[ix-map-alt-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.66 42.664c43.201 0 78.222 35.021 78.222 78.222c0 14.25-3.799 27.602-10.467 39.116S298.66 277.331 298.66 277.331s-61.087-105.815-67.755-117.329s-10.467-24.866-10.467-39.116c0-43.2 35.021-78.222 78.222-78.222m33.522 78.222c0 18.515-15.009 33.524-33.524 33.524c-18.514 0-33.523-15.009-33.523-33.524c0-18.514 15.009-33.523 33.523-33.523s33.524 15.009 33.524 33.523m-139.117 71.216H48l99.689 132.919l83.18-73.939c-13.774-18.877-26.852-38.339-37.804-58.98m155.379 128h120.889v106.561h-19.302zm42.666 106.561H224l-50.622-67.391l83.102-73.867zM42.667 256.102l128 170.561h-128zm426.668-64h-65.067l-57.83 85.333h122.897z" clip-rule="evenodd"></svg:path>`,
})
export class IxMapAlt2FilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMapAlt3Icon],svg[ix-map-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 448V64H64v384zm-341.333-42.667V270.912l128 52.693v81.728zm170.666 0v-64.149l128 52.693v11.456zM192 106.667h213.333v241.088L192 259.904zm-85.333 0h42.666v135.68l-42.666-17.579zM319.993 128c31.419 0 56.889 25.47 56.889 56.889c0 10.363-2.763 20.074-7.613 28.448c-4.849 8.374-49.276 85.33-49.276 85.33s-44.427-76.956-49.276-85.33s-7.613-18.085-7.613-28.448c0-31.419 25.47-56.889 56.889-56.889m24.385 56.889c0 13.465-10.916 24.381-24.381 24.381s-24.381-10.916-24.381-24.381s10.916-24.381 24.381-24.381s24.381 10.916 24.381 24.381" clip-rule="evenodd"></svg:path>`,
})
export class IxMapAlt3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMapAlt3FilledIcon],svg[ix-map-alt-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.663 448V323.605L64 253.312L64.01 448zm213.328-36.544l-170.663-70.293V448H448zm0-46.123L448 64H191.997v195.904zm-298.66-123.008V64H64.009L64 207.189zm170.662-135.658c31.419 0 56.889 25.47 56.889 56.889c0 10.363-2.763 20.073-7.613 28.447c-4.849 8.374-49.276 85.33-49.276 85.33s-44.427-76.956-49.276-85.33s-7.613-18.084-7.613-28.447c0-31.419 25.47-56.889 56.889-56.889m24.385 56.889c0 13.465-10.916 24.381-24.381 24.381s-24.381-10.916-24.381-24.381s10.916-24.381 24.381-24.381s24.381 10.915 24.381 24.381" clip-rule="evenodd"></svg:path>`,
})
export class IxMapAlt3FilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMastodonLogoIcon],svg[ix-mastodon-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M369.308 48.155c47.364 7 87.319 43.128 93.487 88.972c2.687 27.267 1.356 68.236.71 88.151c-.161 4.956-.28 8.608-.283 10.42c0 2.676-.388 27.11-.543 29.689c-4.151 65.508-44.999 91.377-87.921 99.619c-.463.139-.988.241-1.526.345l-.414.081c-27.212 5.314-56.364 6.729-84.022 7.505c-6.614.175-13.209.175-19.822.175a347.8 347.8 0 0 1-81.636-9.696a.94.94 0 0 0-.824.18a.92.92 0 0 0-.34.77a100 100 0 0 0 5.624 25.481c3.705 9.503 16.642 32.327 64.743 32.327a354.5 354.5 0 0 0 82.994-9.696a.96.96 0 0 1 .8.178a.95.95 0 0 1 .364.734v32.152a1.02 1.02 0 0 1-.407.776c-8.5 6.16-19.93 9.781-29.939 12.953l-1.347.427a186 186 0 0 1-13.829 3.782a234.47 234.47 0 0 1-127.895-6.749c-38.462-13.497-77.718-46.58-87.416-86.334a469 469 0 0 1-10.92-65.43c-2.198-24.102-2.932-48.245-3.668-72.421c-.277-9.106-.554-18.218-.91-27.333c-.911-23.232-.387-48.558 4.52-71.402c10.202-46.387 52.252-78.85 98.297-85.656c.946-.14 1.992-.324 3.216-.54c9.113-1.602 28.134-4.948 89.981-4.948h.523c70.135 0 100.411 4.305 108.403 5.488m25.486 254.369V188.633q.02-34.927-17.786-55.462c-12.297-13.672-28.376-20.692-48.315-20.692c-23.061 0-40.517 8.881-52.155 26.626l-11.249 18.849l-11.23-18.849c-11.638-17.745-29.094-26.626-52.194-26.626c-19.958 0-36.037 7.02-48.295 20.692q-17.825 20.555-17.825 55.462v113.891h45.114V191.988c0-23.271 9.795-35.139 29.404-35.139c21.685 0 32.566 14.04 32.566 41.771v60.504h44.862V198.62c0-27.731 10.861-41.771 32.546-41.771c19.726 0 29.423 11.868 29.423 35.139v110.536z" clip-rule="evenodd"></svg:path>`,
})
export class IxMastodonLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMaximizeIcon],svg[ix-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v149.333h-42.667v-76.23L302.805 239.374l-30.17-30.17l102.796-102.538h-76.764V64zM209.516 273.224l30.17 30.17l-102.684 101.939h76.331V448H64V298.667h42.667l-.001 76.661z"></svg:path>`,
})
export class IxMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMeasuringInputIcon],svg[ix-measuring-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 426.669h426.666V256.003H42.667zm42.666-128h21.334v42.667h42.666v-42.667h21.334v64h42.666v-64h21.334v42.667h42.666v-42.667h21.334v64h42.666v-64h21.334v42.667h42.666v-42.667h21.334v84.373H85.333zm250.292-85.333c-7.377 12.753-21.166 21.333-36.958 21.333c-23.564 0-42.667-19.102-42.667-42.666c0-23.565 19.103-42.667 42.667-42.667c15.792 0 29.581 8.58 36.958 21.333h133.708v42.667zm-53.141-97.152l-30.17-30.848l-81.647 85.333h-128v42.667H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxMeasuringInputIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMediaPlayerIcon],svg[ix-media-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 320H64V64h384zm-42.667-213.333H106.667v170.666h298.666zm-192 32L317.773 192l-104.44 53.333zm64 245.333H64v42.667h213.333zM384 384h64v42.667h-64zm-21.333-21.333h-64V448h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxMediaPlayerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMicrophoneIcon],svg[ix-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 213.334c0 13.013 4.48 128 128 128s128-114.987 128-128h42.666c0 55.68-32 158.293-149.333 170.666v85.334h-42.667V384C117.333 371.627 85.333 269.014 85.333 213.334ZM256 42.667c41.237 0 74.666 33.43 74.666 74.667V224c0 41.238-33.43 74.667-74.666 74.667A74.667 74.667 0 0 1 181.333 224V117.334c0-41.238 33.43-74.667 74.667-74.667m0 42.667c-17.673 0-32 14.327-32 32V224c0 17.673 14.327 32 32 32s32-14.327 32-32V117.334c0-17.673-14.327-32-32-32"></svg:path>`,
})
export class IxMicrophoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMicrophoneFilledIcon],svg[ix-microphone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 213.334c0 13.013 4.48 128 128 128s128-114.987 128-128h42.666c0 55.68-32 158.293-149.333 170.666v85.334h-42.667V384C117.333 371.627 85.333 269.014 85.333 213.334ZM256 42.667c41.237 0 74.666 33.43 74.666 74.667V224c0 41.238-33.43 74.667-74.666 74.667A74.667 74.667 0 0 1 181.333 224V117.334c0-41.238 33.43-74.667 74.667-74.667"></svg:path>`,
})
export class IxMicrophoneFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMinimizeIcon],svg[ix-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m239.386 281.309l-.021 149.321h-42.667l-.001-76.229L94.17 456.671L64 426.501l102.796-102.538H90.031l.022-42.654zM427.76 64l30.17 30.17l-102.55 101.805h76.005v42.667H282.053V89.31h42.667l-.001 76.985z"></svg:path>`,
})
export class IxMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMinusIcon],svg[ix-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 234.667h384v42.667H64z"></svg:path>`,
})
export class IxMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMissingSymbolIcon],svg[ix-missing-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM256 271.085L121.751 405.333h268.497zM106.666 121.751v268.497L240.915 256zm298.667 0L271.085 256l134.248 134.248zm-15.085-15.085H121.751L256 240.915z"></svg:path>`,
})
export class IxMissingSymbolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMixIcon],svg[ix-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m269.264 271.083l70.256 70.25l56.966-.001l-27.57-27.58l30.17-30.17l79.084 79.084l-79.085 79.085l-30.17-30.17L396.487 384H321.83l-82.745-82.74zM399.085 70.248l79.085 79.085l-79.085 79.085l-30.17-30.17l27.572-27.582H339.52L126.17 384H42.667v-42.667h65.813L321.83 128l74.657-.001l-27.572-27.581zM126.17 128l82.745 82.739l-30.179 30.177l-70.256-70.25H42.667V128z"></svg:path>`,
})
export class IxMixIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMobilePhoneIcon],svg[ix-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.335c0-23.564 19.103-42.667 42.667-42.667h170.666c23.565 0 42.667 19.103 42.667 42.667v341.333c0 23.564-19.103 42.667-42.667 42.667H170.667c-23.564 0-42.667-19.103-42.667-42.667zm42.667 0v341.333h170.666V85.335z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M277.333 405.335h-42.666v-42.667h42.666zm-64-298.667h85.334v21.333h-85.334z"></svg:path>`,
})
export class IxMobilePhoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMobilePhoneFilledIcon],svg[ix-mobile-phone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 426.668c0 23.564-19.103 42.667-42.667 42.667H170.667c-23.564 0-42.667-19.103-42.667-42.667V85.335c0-23.564 19.103-42.667 42.667-42.667h170.666c23.564 0 42.667 19.103 42.667 42.667zm-106.667 0h-42.666v-42.667h42.666zm21.334-362.667h-85.334v21.334h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxMobilePhoneFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMonitorIcon],svg[ix-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M427.194 333.682c15.308-21.497 23.671-47.078 23.671-73.995c0-27.213-8.561-53.062-24.198-74.695V64h-384v298.667h170.667v64H128v42.666h213.334v-42.666H256v-58.203c20.466 12.567 43.603 19.161 66.865 19.161c26.034 0 51.887-8.208 73.996-23.94l51.327 50.898l30.041-30.291zM209.907 320H85.334V106.667H384v40.55c-18.548-10.118-39.416-15.53-61.125-15.53c-34.198 0-66.333 13.313-90.51 37.5c-24.177 24.167-37.49 56.313-37.49 90.5c0 21.386 5.211 41.974 15.032 60.313m173.302.042c-33.25 33.27-87.386 33.27-120.677 0c-16.115-16.125-24.99-37.563-24.99-60.355s8.875-44.208 24.99-60.333c16.125-16.125 37.552-25 60.343-25c22.781 0 44.209 8.875 60.333 25c16.115 16.125 24.99 37.542 24.99 60.333c0 22.792-8.875 44.23-24.99 60.355"></svg:path>`,
})
export class IxMonitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMonitorFilledIcon],svg[ix-monitor-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 64l.004 87.492c-27.105-27.662-64.883-44.825-106.67-44.825c-82.475 0-149.334 66.858-149.334 149.333c0 59.57 34.88 110.994 85.332 134.962l.001 35.705h85.334v42.666H128v-42.666h85.334v-64H42.667V64zM320 128c70.693 0 128 57.308 128 128c0 27.651-8.767 53.254-23.674 74.181l53.778 53.78l-30.17 30.169l-53.783-53.783C373.23 375.24 347.638 384 320.001 384c-70.693 0-128-57.308-128-128s57.307-128 128-128m0 42.667c-47.128 0-85.333 38.205-85.333 85.333s38.205 85.333 85.333 85.333s85.334-38.205 85.334-85.333s-38.205-85.333-85.334-85.333"></svg:path>`,
})
export class IxMonitorFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMonitorTrendIcon],svg[ix-monitor-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.173 343.395L448 405.333V448H64l.173-384zM448 128v128h-42.667v-56.633l-107.44 96.696l-52.56-52.543l-102.248 102.232l-30.17-30.17l132.418-132.419l54.102 54.085l74.003-66.582H320V128z"></svg:path>`,
})
export class IxMonitorTrendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMonitoringIcon],svg[ix-monitoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zm-37.178 170.048l16.463 27.44l-13.72 8.232l-106.666 64l-13.082 7.849l-8.463-12.694l-26.175-39.254l-57.579 43.179l-12.8 9.6l-19.2-25.6l12.8-9.6l71.111-53.334l13.531-10.148l9.382 14.073l27.086 40.62l93.592-56.131zm-6.993-128.626l24.082 21.073l-10.536 12.04l-74.667 85.334l-9.24 10.56l-11.676-7.783l-52.352-34.881l-65.398 74.77l-10.537 12.042l-24.082-21.072l10.536-12.041l74.667-85.334l9.24-10.56l11.676 7.784l52.33 34.859l65.42-74.75z"></svg:path>`,
})
export class IxMonitoringIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMonitoringAddIcon],svg[ix-monitoring-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m426.667 320l-.001 64h64v42.667l-64-.001v64H384v-64h-64V384h64v-64zm0-256l-.001 234.666h-42.667l.001-192H106.667V384l191.999-.001v42.667H64V64z"></svg:path><svg:path fill-rule="nonzero" d="m338.662 126.864l25.141 19.798l-9.899 12.57l-67.2 85.334l-9.611 12.204l-12.483-9.246l-45.922-34.02l-57.462 63.866l-10.703 11.893l-23.786-21.407l10.704-11.893l67.2-74.666l9.729-10.811l11.687 8.657l45.09 33.401l57.616-73.11z"></svg:path><svg:path fill-rule="nonzero" d="m345.771 255.145l17.75 26.626l-109.312 72.875l-14.611 9.74l-8.343-15.45l-19.735-36.552l-52.24 41.482l-12.533 9.946l-19.893-25.065l12.533-9.946l67.2-53.334l14.954-11.868l9.071 16.799l20.439 37.874l81.407-54.251z"></svg:path></svg:g>`,
})
export class IxMonitoringAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMonitoringsIcon],svg[ix-monitorings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v320H128V128zm-42.667 42.667H170.667v234.666h234.666zM368.62 298.17l15.877 27.784l-88.559 50.605l-12.674 7.242l-8.372-11.959l-15.65-22.338l-36.609 26.182l-13.02 9.3l-18.6-26.04l13.02-9.3l49.778-35.555l13.145-9.388l9.263 13.233l16.496 23.59l62.013-35.418zM384 64v42.667H106.667V384H64V64zm-22.29 126.726l23.564 21.65l-10.825 11.782l-52.267 56.89l-9.057 9.857l-11.301-7.175l-33.515-21.266l-43.193 47.028l-10.825 11.782l-23.565-21.65l10.825-11.782l52.267-56.89l9.057-9.857l11.301 7.175l33.493 21.266l43.215-47.028z"></svg:path>`,
})
export class IxMonitoringsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoonIcon],svg[ix-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.667 85.333c17.379 0 34.319 2.567 50.467 7.578c-41.92 39.469-68.118 94.41-70.669 153.413c-2.852 65.958 24.061 128.872 70.65 172.77c-16.144 5.008-33.076 7.573-50.448 7.573C204.561 426.667 128 350.106 128 256S204.561 85.333 298.667 85.333m0-42.666C180.847 42.667 85.334 138.18 85.334 256s95.513 213.333 213.333 213.333c50.253 0 96.359-17.487 132.816-46.56c-67.601-28.707-113.751-96.907-110.392-174.606c3.12-72.153 48.091-132.441 110.399-158.936c-36.457-29.076-82.567-46.564-132.823-46.564"></svg:path>`,
})
export class IxMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoonFilledIcon],svg[ix-moon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M321.091 248.167c3.12-72.153 48.091-132.441 110.399-158.936c-36.457-29.076-82.567-46.564-132.823-46.564C180.846 42.667 85.334 138.18 85.334 256s95.512 213.333 213.333 213.333c50.254 0 96.359-17.487 132.816-46.56c-67.601-28.707-113.751-96.907-110.392-174.606"></svg:path>`,
})
export class IxMoonFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoreMenuIcon],svg[ix-more-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M117.333 256c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32m341.333 0c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32M288 256c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32"></svg:path>`,
})
export class IxMoreMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMouseClickIcon],svg[ix-mouse-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.304 128h42.654V42.667h-42.654zM42.688 256h85.308v-42.666H42.688zm101.466-81.674L83.84 113.974l30.156-30.166l60.313 60.352zm-30.159 211.187l-30.156-30.165l60.312-60.352l30.157 30.165zM325.12 174.326l-30.157-30.166l60.313-60.352l30.157 30.166zm3.156 178.041l59.588 59.606l24.142-24.15l-59.609-59.605l42.932-42.923l-150.612-40.682l40.67 150.656zm-62.659 116.97l-75.39-279.21l279.128 75.392l-62.66 62.699l59.61 59.605l-78.441 78.443l-59.588-59.605z"></svg:path>`,
})
export class IxMouseClickIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMouseClickFilledIcon],svg[ix-mouse-click-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.304 128h42.654V42.667h-42.654zM42.688 256h85.308v-42.666H42.688zm101.466-81.674L83.84 113.974l30.156-30.166l60.313 60.352zm-30.159 211.187l-30.156-30.165l60.312-60.352l30.157 30.165zM325.12 174.326l-30.157-30.166l60.313-60.352l30.157 30.166zM270.933 464l-80.707-273.873L464 270.934l-62.72 62.72l59.733 59.52l-67.84 67.84l-59.52-59.734z"></svg:path>`,
})
export class IxMouseClickFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMouseSelectIcon],svg[ix-mouse-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m62.226 62.127l383.887 103.687l-86.175 86.23l81.98 81.975l-107.88 107.883l-81.951-81.975l-86.175 86.2zm60.526 60.54l65.109 241.13l64.226-64.22l81.929 81.97l47.552-47.53l-81.961-81.963l64.211-64.278z"></svg:path>`,
})
export class IxMouseSelectIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMouseSelectFilledIcon],svg[ix-mouse-select-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m62.226 62.127l364.44 103.206l-88.062 86.711l92.648 92.642l-86.547 86.549l-92.618-92.642l-86.754 88.074z"></svg:path>`,
})
export class IxMouseSelectFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoveIcon],svg[ix-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 96c0 5.891-4.777 10.667-10.667 10.667S405.333 101.891 405.333 96S410.11 85.333 416 85.333S426.667 90.11 426.667 96m42.666 0c0 29.455-23.878 53.333-53.333 53.333S362.667 125.455 362.667 96S386.545 42.667 416 42.667S469.333 66.545 469.333 96M106.667 416c0 5.89-4.776 10.667-10.667 10.667c-5.89 0-10.667-4.777-10.667-10.667S90.11 405.333 96 405.333s10.667 4.777 10.667 10.667m42.666 0c0 29.455-23.878 53.333-53.333 53.333S42.667 445.455 42.667 416S66.545 362.667 96 362.667s53.333 23.878 53.333 53.333M320 222.17L164.418 377.751l-30.17-30.169L289.83 192h-55.163v-42.667h128v128H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoveHorizontallyIcon],svg[ix-move-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m377.751 356.419l-30.17-30.17l48.915-48.915H277.333v-42.666h119.164l-48.916-48.916l30.17-30.169l100.418 100.418zM134.252 155.583l30.17 30.17l-48.915 48.915h119.162v42.666H115.506l48.916 48.916l-30.17 30.17L33.833 256.001z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoveLayerDownIcon],svg[ix-move-layer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m298.667 255.997l42.667 21.324v47.68L256 282.344l-117.952 58.987L256 400.296l13.292-6.667l31.821 31.821L256 447.997L42.667 341.331l170.666-85.334L256 277.331zM256 42.664l213.333 106.667L256 255.997L42.667 149.331zM454.247 347.58l-48.914 48.914V277.331h-42.667v119.164l-48.915-48.916l-30.17 30.169l100.418 100.419l100.418-100.419z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveLayerDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoveLayerUpIcon],svg[ix-move-layer-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m298.667 267.302l34.68 21.676l-79.933 79.933l60.34 60.34l27.581-27.544v23.463L256 459.302L42.667 352.635l170.666-85.333L256 288.635zM256 53.969l213.333 106.666L256 267.302L42.667 160.635zm0 47.68l-117.952 58.986L256 219.601l117.931-58.966zm228.419 267.269l-30.169 30.17l-48.916-48.916v119.164h-42.667V350.174l-48.914 48.914l-30.17-30.17L384.001 268.5z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveLayerUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMoveVerticallyIcon],svg[ix-move-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m155.584 377.751l30.169-30.17l48.915 48.915V277.333h42.667v119.164l48.915-48.916l30.17 30.17l-100.418 100.418zM356.42 134.252l-30.17 30.17l-48.915-48.915v119.162h-42.667V115.506l-48.915 48.916l-30.17-30.17L256.001 33.833z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMovieIcon],svg[ix-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 324.48L328.96 256L192 187.52z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M64 448h384V64H64zm341.333-42.667H106.667V106.667h298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxMovieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMovieFilledIcon],svg[ix-movie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 448H64V64h384zM328.96 256.001L192 324.481v-136.96z" clip-rule="evenodd"></svg:path>`,
})
export class IxMovieFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMp4DocumentIcon],svg[ix-mp4-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.667H85.333v234.667H128v-192h174.293L384 167.04v110.294h42.667v-128zM143.83 389.274c-2.177 6.677-4.673 15.317-7.51 25.856c-2.816-10.667-5.312-19.285-7.403-25.856l-22.144-69.27H64v128.129h26.667V344.41c2.944 11.05 5.525 19.904 7.68 26.603l24.96 77.12h24.768l25.685-79.296c2.645-8.086 5.013-16.214 7.04-24.427v103.723h27.776V320.005h-42.304zm131.769-69.27c12.288 0 21.653.811 28.117 2.433q13.377 3.456 20.416 15.104c3.819 6.208 5.718 13.482 5.718 21.802c0 13.547-4.523 23.958-13.568 31.19c-3.926 3.136-8.662 5.397-14.251 6.74c-5.568 1.345-12.757 2.028-21.568 2.028h-12.096v48.832h-28.864V320.005Zm.341 21.718h-8.298v35.883h8.298c8.022 0 13.782-.854 17.28-2.54c5.184-2.516 7.766-7.444 7.766-14.72c0-7.167-2.496-12.287-7.488-15.295c-3.67-2.24-9.536-3.328-17.558-3.328m127.576 56.593h-35.52l35.52-51.35zm27.221 0V320h-33.899l-55.509 76.416v22.614h61.483v29.098h27.925V419.03h17.28v-20.715z"></svg:path>`,
})
export class IxMp4DocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMqttIcon],svg[ix-mqtt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M295.509 106.667a323.64 323.64 0 0 1 109.824 106.325V106.667zm109.824 215.722c-24.789-107.392-110.186-190.4-218.389-212.053l-18.389-3.669h-61.888v43.475C242.83 160.498 351.502 269.17 361.858 405.333h43.475zm0 125.611H64V64h384v384zM106.667 192.957v67.8c71.787 16.286 128.29 72.789 144.576 144.576h67.8c-10.145-112.576-99.8-202.231-212.376-212.376m100.482 212.376c-14.335-48.166-52.316-86.147-100.482-100.482v100.482z" clip-rule="evenodd"></svg:path>`,
})
export class IxMqttIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMqttFilledIcon],svg[ix-mqtt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v355.2C448 223.034 288.966 64 92.8 64zm-38.4 384H352c0-159.053-128.947-288-288-288v-57.6h28.8c174.97 0 316.8 141.83 316.8 316.8zm-96 0H256c0-106.042-85.958-192-192-192v-57.6c137.856 0 249.6 111.744 249.6 249.6m-96 0H64V294.4c84.826 0 153.6 68.774 153.6 153.6" clip-rule="evenodd"></svg:path>`,
})
export class IxMqttFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixMusicNoteIcon],svg[ix-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 351.997V64.813l-234.666 91.259v186.326A53.6 53.6 0 0 0 160 341.331c-29.455 0-53.333 23.878-53.333 53.333s23.878 53.333 53.333 53.333s53.333-23.877 53.333-53.332V247.576l149.334-61.49v113.645A53.6 53.6 0 0 0 352 298.664c-29.455 0-53.333 23.878-53.333 53.333c0 29.456 23.878 53.334 53.333 53.334s53.333-23.878 53.333-53.332zm-42.666 0c0-5.891-4.776-10.666-10.667-10.666s-10.667 4.775-10.667 10.666s4.776 10.667 10.667 10.667s10.666-4.775 10.667-10.665zM213.333 185.259v27.711l149.334-61.491v-24.294zm-42.666 209.405c0 5.891-4.776 10.667-10.667 10.667s-10.667-4.776-10.667-10.667s4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667" clip-rule="evenodd"></svg:path>`,
})
export class IxMusicNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurCheckFunctionIcon],svg[ix-namur-check-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M512 64.008L255.877 512L0 64.008zm-36.779 21.325H36.736l219.136 383.659zM287.36 115.626c25.687 10.948 42.441 36.08 42.667 64c-.453 27.644-17.188 52.413-42.667 63.147v113.28c0 17.673-14.327 32-32 32s-32-14.327-32-32V244.266c-25.761-10.857-42.553-36.044-42.667-64c.226-27.92 16.98-53.052 42.667-64v48.854c0 10.368 8.405 18.773 18.773 18.773h26.454c10.368 0 18.773-8.405 18.773-18.773Z"></svg:path>`,
})
export class IxNamurCheckFunctionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurCheckFunctionFilledIcon],svg[ix-namur-check-function-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M475.221 85.333L255.872 468.992L36.736 85.333zM287.36 115.626v49.494c0 10.368-8.405 18.773-18.773 18.773h-26.454c-10.368 0-18.773-8.405-18.773-18.773v-48.854c-25.687 10.948-42.441 36.08-42.667 64c.114 27.956 16.906 53.143 42.667 64v111.787c0 17.673 14.327 32 32 32s32-14.327 32-32v-113.28c25.479-10.734 42.214-35.503 42.667-63.147c-.226-27.92-16.98-53.052-42.667-64"></svg:path>`,
})
export class IxNamurCheckFunctionFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurDiagnosticsPassiveIcon],svg[ix-namur-diagnostics-passive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 85.333v341.334h341.334V85.333zM64 64h384v384H64z" clip-rule="evenodd"></svg:path>`,
})
export class IxNamurDiagnosticsPassiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurDiagnosticsPassiveFilledIcon],svg[ix-namur-diagnostics-passive-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.333 85.333h341.334v341.334H85.333z"></svg:path>`,
})
export class IxNamurDiagnosticsPassiveFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurFailureIcon],svg[ix-namur-failure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M256 64C149.962 64 64 149.962 64 256c0 106.039 85.962 192 192 192c106.039 0 192-85.961 192-192c0-106.038-85.961-192-192-192m81.018 80.824l30.17 30.17L286.182 256l81.006 81.006l-30.17 30.17l-81.006-81.007l-80.855 80.857l-30.17-30.17L225.842 256l-80.855-80.855l30.17-30.17l80.855 80.855z"></svg:path>`,
})
export class IxNamurFailureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurFailureFilledIcon],svg[ix-namur-failure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c106.039 0 192 85.961 192 192s-85.961 192-192 192S64 362.039 64 256S149.961 64 256 64m81.018 80.824l-81.006 81.006l-80.855-80.855l-30.17 30.17L225.842 256l-80.855 80.855l30.17 30.17l80.855-80.855l81.006 81.006l30.17-30.17L286.182 256l81.006-81.006z"></svg:path>`,
})
export class IxNamurFailureFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurMaintenanceRequiredIcon],svg[ix-namur-maintenance-required-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 1.83L510.17 256L256 510.17L1.83 256zM256 32L32 256l224 224l224-224zm-21.333 160c31.36 0 31.987 20.488 32 21.308v.025h-21.334v21.333h53.334v10.667L384 224l-85.333 64v32h-128l-.001-64.001h-21.333v21.334H160v21.334h-32v-64l95.999-.001v-21.333h-21.332v-.025c.012-.82.64-21.308 32-21.308M384 245.333a118.4 118.4 0 0 1 17.707 35.627c0 9.779-7.928 17.707-17.707 17.707s-17.707-7.928-17.707-17.707A118.4 118.4 0 0 1 384 245.333"></svg:path>`,
})
export class IxNamurMaintenanceRequiredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurMaintenanceRequiredFilledIcon],svg[ix-namur-maintenance-required-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 32l224 224l-224 224L32 256zm-21.333 160c-31.36 0-31.988 20.489-32 21.308v.025H224l-.001 21.333H128v64h32v-21.333h-10.667V256l21.333-.001V320h128v-32L384 224l-85.333 21.333v-10.666l-53.334-.001v-21.333h21.334v-.025c-.013-.82-.64-21.308-32-21.308M384 245.333a118.4 118.4 0 0 0-17.707 35.627c0 9.78 7.928 17.707 17.707 17.707s17.707-7.928 17.707-17.707A118.4 118.4 0 0 0 384 245.333"></svg:path>`,
})
export class IxNamurMaintenanceRequiredFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurOkIcon],svg[ix-namur-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-21.333 21.333H85.333v341.334h341.334zm-57.814 70.187l30.294 30.293l-185.814 185.6l-100.48-100.266l30.294-30.294l70.186 70.4z"></svg:path>`,
})
export class IxNamurOkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurOkFilledIcon],svg[ix-namur-ok-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 85.333v341.333H85.333V85.333zm-57.813 70.187l-155.52 155.733l-70.187-70.4l-30.293 30.293l100.48 100.267l185.813-185.6z"></svg:path>`,
})
export class IxNamurOkFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurOutOfSpecIcon],svg[ix-namur-out-of-spec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256-.007L512 448H0zm0 42.994L36.757 426.667h438.464zm13.12 297.325a26.88 26.88 0 0 1 7.787 19.795a27.733 27.733 0 1 1-27.52-27.734a26.88 26.88 0 0 1 19.734 7.939m-10.133-166.659c42.666 0 65.92 19.627 65.92 52.48c0 21.334-8.534 33.067-33.92 49.707c-19.642 13.306-21.302 16.157-21.333 32.98v6.487h-42.027v-12.8c0-25.387 1.92-29.44 24.32-44.587s25.813-19.84 25.813-29.653c0-9.814-9.6-20.267-24.747-20.267a99.4 99.4 0 0 0-45.226 14.933l-12.8-32.64a136.5 136.5 0 0 1 64-16.64"></svg:path>`,
})
export class IxNamurOutOfSpecIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNamurOutOfSpecFilledIcon],svg[ix-namur-out-of-spec-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 42.987l219.221 383.68H36.757zm-6.142 289.38l-.472.007a27.733 27.733 0 1 0 27.52 27.733a26.88 26.88 0 0 0-27.52-27.733Zm9.128-158.713a136.5 136.5 0 0 0-64 16.64l12.8 32.64A99.4 99.4 0 0 1 253.013 208c15.147 0 24.747 10.454 24.747 20.267s-3.414 14.507-25.814 29.653l-.666.451c-21.772 14.78-23.654 19.003-23.654 44.136v12.8h42.027v-5.973c0-17.28 1.493-20.054 21.333-33.494c25.387-16.64 33.92-28.373 33.92-49.706c0-32.854-23.253-52.48-65.92-52.48"></svg:path>`,
})
export class IxNamurOutOfSpecFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNavigationIcon],svg[ix-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.335 43.987L277.334 128h-42.667l-.002-41.346c-77.198 9.628-138.383 70.813-148.01 148.011l41.345.002v42.667H86.654c9.627 77.199 70.813 138.385 148.011 148.012l.002-41.346h42.667v41.346c77.2-9.627 138.385-70.813 148.012-148.011L384 277.334v-42.667h41.346c-9.626-77.2-70.813-138.386-148.011-148.013m85.332 62.68L288 288l-138.666 74.667L224 224zM256 234.667c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.334-9.552 21.334-21.334s-9.552-21.333-21.334-21.333"></svg:path>`,
})
export class IxNavigationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNavigationFilledIcon],svg[ix-navigation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M277.334 384h-42.667v42.667h42.667zm85.333-234.666L224 224l-74.666 138.667L288 288zM256 234.667c11.782 0 21.334 9.551 21.334 21.333s-9.552 21.334-21.334 21.334s-21.333-9.552-21.333-21.334s9.551-21.333 21.333-21.333m170.667 0H384v42.667h42.667zm-298.667 0H85.334v42.667H128zM277.334 85.334h-42.667V128h42.667z"></svg:path>`,
})
export class IxNavigationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNavigationLeftIcon],svg[ix-navigation-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM149.333 362.666h-42.667v42.667h42.667zm256-256H192v298.667h213.334zM149.333 320v-42.667h-42.667V320zm0-85.334V192h-42.667v42.666zm0-85.333v-42.667h-42.666l-.001 42.667z"></svg:path>`,
})
export class IxNavigationLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNavigationLeftHideIcon],svg[ix-navigation-left-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H192v298.666h213.333zm-298.666 0h42.666v42.666h-42.666zm0 85.333h42.666v42.819h-42.666zm42.666 170.667v42.666h-42.666v-42.666zm0-85.181V320h-42.666v-42.514zm153.752-111.238l30.17 30.17l-38.248 38.248l88.993.153v42.667l-88.994-.153l38.249 38.249l-30.17 30.17L213.333 256z" clip-rule="evenodd"></svg:path>`,
})
export class IxNavigationLeftHideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNavigationRightIcon],svg[ix-navigation-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-128 42.666H106.667v298.667H320zm42.667 256l-.001 42.667h42.667v-42.667zM405.333 192h-42.666v42.667l42.666-.001zm0-85.333l-42.667-.001v42.667h42.667zM362.667 320h42.666v-42.667h-42.666z"></svg:path>`,
})
export class IxNavigationRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNavigationRightHideIcon],svg[ix-navigation-right-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v384h384V64zm42.667 42.667H320v298.666H106.667zm298.666 0h-42.666v42.666h42.666zm0 85.333h-42.666v42.819h42.666zm-42.666 170.667v42.666h42.666v-42.666zm0-85.181V320h42.666v-42.514zM208.915 166.248l-30.17 30.17l38.248 38.248l-88.993.153v42.667l88.994-.153l-38.249 38.249l30.17 30.17L298.667 256z" clip-rule="evenodd"></svg:path>`,
})
export class IxNavigationRightHideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNetworkDeviceIcon],svg[ix-network-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 42.668v256H277.333l.02 46.315c18.176 6.431 32.581 20.841 39.006 39.02l152.974-.002v42.667l-152.981.019c-8.792 24.848-32.493 42.648-60.352 42.648s-51.56-17.8-60.351-42.648l-152.982-.019v-42.667l152.974.002c6.427-18.186 20.841-32.6 39.028-39.027l-.002-46.308H85.333v-256zM256 384.001c-11.782 0-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334M384 85.335H128V256h256z"></svg:path>`,
})
export class IxNetworkDeviceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNetworkDeviceFilledIcon],svg[ix-network-device-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 42.668v256H277.333l.02 46.315c18.176 6.431 32.581 20.841 39.006 39.02l152.974-.002v42.667l-152.981.019c-8.792 24.848-32.493 42.648-60.352 42.648s-51.56-17.8-60.351-42.648l-152.982-.019v-42.667l152.974.002c6.427-18.186 20.841-32.6 39.028-39.027l-.002-46.308H85.333v-256zM256 384.001c-11.782 0-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334"></svg:path>`,
})
export class IxNetworkDeviceFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNetworkDevicePlayIcon],svg[ix-network-device-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 42.668H64v256h149.333v46.308c-18.184 6.428-32.597 20.84-39.025 39.025H64v42.667h110.308c8.786 24.857 32.493 42.667 60.359 42.667c19.081 0 36.211-8.35 47.937-21.596C265.979 427.491 256 401.578 256 373.335c0-9.345 1.092-18.434 3.156-27.148a64 64 0 0 0-3.156-1.211v-46.308h26.819c21.521-26.059 54.078-42.667 90.514-42.667a117.4 117.4 0 0 1 32 4.417zm-42.666 42.667h-256V256h256zm-149.334 320c0-11.782 9.552-21.334 21.334-21.334S256 393.553 256 405.335s-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333m256-32c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96m-127.778-46.736l85.333 48l-85.333 48z" clip-rule="evenodd"></svg:path>`,
})
export class IxNetworkDevicePlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNetworkDevicePlayFilledIcon],svg[ix-network-device-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 42.668H64v256h149.333v46.308c-18.184 6.428-32.597 20.84-39.025 39.025H64v42.667h110.308c8.786 24.857 32.493 42.667 60.359 42.667c19.081 0 36.211-8.35 47.937-21.596C265.979 427.491 256 401.578 256 373.335c0-9.345 1.092-18.434 3.156-27.148a64 64 0 0 0-3.156-1.211v-46.308h26.819c21.521-26.059 54.078-42.667 90.514-42.667a117.4 117.4 0 0 1 32 4.417zm-192 362.667c0-11.782 9.552-21.334 21.334-21.334S256 393.553 256 405.335s-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333m256-32c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96m-127.778-46.736l85.333 48l-85.333 48z" clip-rule="evenodd"></svg:path>`,
})
export class IxNetworkDevicePlayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNetworkWiredIcon],svg[ix-network-wired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 42.668h170.666v128h-64v64h192v42.667h-64v64h64v128H298.667v-128h64v-64H149.333v64h64v128H42.667v-128h64v-64h-64v-42.667h192v-64h-64zm42.666 42.667h85.334V128h-85.334zM85.333 384h85.334v42.667H85.333zm341.334 0h-85.334v42.667h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxNetworkWiredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNetworkWiredWirelessIcon],svg[ix-network-wired-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 42.668h170.666v128h-64v64h192v42.667h-64v64h64v128H298.667v-128h64v-64h-128V170.668h-64zm42.666 42.667h85.334V128h-85.334zM42.667 234.668h170.666v21.333H42.667zm138.666 42.667H74.667v21.333h106.666zm-74.666 42.666h42.666v21.334h64v128H42.667v-128h64zm-21.334 64h85.334v42.667H85.333zm341.334 0h-85.334v42.667h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxNetworkWiredWirelessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNewIndicatorIcon],svg[ix-new-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333c94.256 0 170.666 76.41 170.666 170.667c0 94.256-76.41 170.666-170.666 170.666c-94.257 0-170.667-76.41-170.667-170.666c0-94.257 76.41-170.667 170.667-170.667M256 128c-70.693 0-128 57.307-128 128c0 70.692 57.307 128 128 128c70.692 0 128-57.308 128-128s-57.308-128-128-128m21.333 42.666v64h64v42.667h-64v64h-42.667v-64h-64v-42.667h64v-64z"></svg:path>`,
})
export class IxNewIndicatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNewIndicatorFilledIcon],svg[ix-new-indicator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333c94.256 0 170.666 76.41 170.666 170.667c0 94.256-76.41 170.666-170.666 170.666c-94.257 0-170.667-76.41-170.667-170.666c0-94.257 76.41-170.667 170.667-170.667m21.333 85.333h-42.667v64h-64v42.667h64v64h42.667v-64h64v-42.667h-64z"></svg:path>`,
})
export class IxNewIndicatorFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNoFilterIcon],svg[ix-no-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m310.109 279.878l142.31 142.309l-30.17 30.17l-139.292-139.293l-5.623 6.874v149.334h-42.667V319.938h-.448L42.667 85.272L64 85.27l25.752-25.75zM175.841 85.271h293.493l-132.072 161.42l-30.312-30.312l72.357-88.44l-160.798-.001z"></svg:path>`,
})
export class IxNoFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNoFilterFilledIcon],svg[ix-no-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m310.109 279.878l142.31 142.309l-30.17 30.17l-139.292-139.293l-5.623 6.874v149.334h-42.667V319.938h-.448L42.667 85.272L64 85.27l25.752-25.75zM175.841 85.271h293.493l-132.072 161.42z"></svg:path>`,
})
export class IxNoFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNoImageIcon],svg[ix-no-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m72.837 72.837l362.667 362.667l-30.17 30.17L387.66 448H64V124.34l-21.333-21.332zm204.497 289.83L170.667 256l-64.001 101.12v48.213h238.327l-56.282-56.283zM448 64v323.661L313.796 253.457l27.538-27.537l63.999 64V106.666H167.005L124.339 64zM106.666 167.005v108.872l41.741-67.131zm202.668-17.671c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class IxNoImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNoteIcon],svg[ix-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 343.045L343.045 448H64V64h384zm-42.667-65.712V106.667H106.667v298.666h170.666v-128zm0 42.667H320v85.333h5.333l80-80z"></svg:path>`,
})
export class IxNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNoteFilledIcon],svg[ix-note-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v277.333L341.333 448H64V64zM277.333 277.333V448H320V320h128v-42.667z"></svg:path>`,
})
export class IxNoteFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNotebookIcon],svg[ix-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 85.333c-11.782 0-21.334 9.552-21.334 21.334v256h341.334v-256c0-11.782-9.551-21.334-21.334-21.334zM384 128H128v192h256zM277.333 384h192v21.333c0 11.783-9.551 21.334-21.333 21.334H64c-11.782 0-21.333-9.551-21.333-21.334V384h192v21.333h42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxNotebookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNotebookFilledIcon],svg[ix-notebook-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 85.333c-11.782 0-21.334 9.552-21.334 21.334v256h341.334v-256c0-11.782-9.551-21.334-21.334-21.334zM384 128H128v192h256zM277.333 384h192v21.333c0 11.783-9.551 21.334-21.333 21.334H64c-11.782 0-21.333-9.551-21.333-21.334V384h192v21.333h42.666z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M149.333 149.333h213.334v149.334H149.333z"></svg:path>`,
})
export class IxNotebookFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNotificationIcon],svg[ix-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V384H341.333v85.333L192 384H64V85.333zM405.333 128H106.667v213.333h96.664l95.336 54.464v-54.464h106.666z"></svg:path>`,
})
export class IxNotificationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNotificationFilledIcon],svg[ix-notification-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V384H341.333v85.333L192 384H64V85.333z"></svg:path>`,
})
export class IxNotificationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNotificationsIcon],svg[ix-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 149.333V384h101.183l154.817 85.333l-.04-85.333h64.04V149.333zM426.667 192v149.333h-64.04v55.698l-101.143-55.698H192V192zm-64-128v42.667h-256v170.666H64V64z"></svg:path>`,
})
export class IxNotificationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixNotificationsFilledIcon],svg[ix-notifications-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 149.333V384h-64.04l.04 85.333L250.516 384H149.333V149.333zM362.667 64v42.667h-256v170.666H64V64z"></svg:path>`,
})
export class IxNotificationsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixObjectsIcon],svg[ix-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m362.667 266.156l106.666 101.587l-106.666 101.588L256 367.743zm0 57.478l-46.315 44.109l46.315 44.11zM181.333 123.517L320 255.581L181.333 387.644L42.667 255.581zm0 57.468l-78.336 74.586l78.336 74.605zm181.334-138.32L469.333 144.25L362.667 245.839L256 144.251zm0 57.477l-46.315 44.109l46.315 44.11z"></svg:path>`,
})
export class IxObjectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixObjectsTreeIcon],svg[ix-objects-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 138.664l-96-96l-96 96l96 96zm-137.683 0L160 96.981v83.366zm31.016 117.333v170.667H320v-21.333H170.667v-85.334H320v-21.333H170.667v-42.667zm234.665 10.67l42.667 42.663L384 351.997l-42.667-42.666zm42.671 149.326L384 373.331l-42.665 42.664l42.667 42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxObjectsTreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOntologyIcon],svg[ix-ontology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 149.333h-42.667V192h-64v128h64v42.667H256zm-85.333 213.334h-64v42.666h64zm0-256h-64v42.666h64zm170.666 170.666h-42.666v128h-85.334V448H64V320h42.667V192H64V64h149.333v42.667h85.334v128h42.666zm128-85.333v128h-128V192zm-42.666 42.667H384v42.666h42.667z"></svg:path>`,
})
export class IxOntologyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOntologyFilledIcon],svg[ix-ontology-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 149.333h-42.667V192h-64v128h64v42.667H256zm85.333 128h-42.666v128h-85.334V448H64V320h42.667V192H64V64h149.333v42.667h85.334v128h42.666zm128-85.333v128h-128V192z"></svg:path>`,
})
export class IxOntologyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOpenExternalIcon],svg[ix-open-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 128v42.666H128V384h213.333v-85.334h42.666v128H85.334V128zM448 64v170.667h-42.667v-97.832L228.418 313.752l-30.17-30.17l176.915-176.916h-97.83V64z"></svg:path>`,
})
export class IxOpenExternalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOpenFileIcon],svg[ix-open-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m220.75 85.334l43.511 34.405l-30.377 30.377L205.917 128H85.334v210.774l39.354-125.44H384v-.001h96l-64.75 213.334H42.667V85.334zM422.458 256H156.021l-40.167 128h267.771z"></svg:path><svg:path fill-rule="nonzero" d="M426.667 42.667V192H384v-76.497L307.504 192h-60.34L353.83 85.333h-76.496V42.668z"></svg:path></svg:g>`,
})
export class IxOpenFileIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOpenFileFilledIcon],svg[ix-open-file-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m220.75 85.334l53.889 42.61l-64.003 64.016h-93.985L44.004 426.667h-1.337V85.334zM148.114 234.62l330.757.005l-58.287 192.041H88.667z"></svg:path><svg:path fill-rule="nonzero" d="M426.667 42.667V192H384v-76.497L307.503 192h-60.34L353.83 85.333h-76.496V42.668z"></svg:path></svg:g>`,
})
export class IxOpenFileFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOperatePlantIcon],svg[ix-operate-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h192.94a127.2 127.2 0 0 1-11.169-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l128-70.135v14.07q5.277-.436 10.666-.438c11.05 0 21.772 1.4 32 4.033v-84.818l-128 70.119v-69.334zm325.285 104.869l-18.963 10.948a85.4 85.4 0 0 1 3.094 22.849a85.4 85.4 0 0 1-3.094 22.85l18.963 10.948a106 106 0 0 1-7.78 17.723l-1.993 3.453a107 107 0 0 1-11.586 15.759l-18.957-10.944c-10.7 10.895-24.301 18.931-39.553 22.856v21.888A107 107 0 0 1 373.416 480c-7.306 0-14.44-.735-21.334-2.134v-21.888c-15.252-3.926-28.855-11.962-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.628-15.832l-1.906-3.3a106 106 0 0 1-7.823-17.804l18.961-10.948a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.947a106 106 0 0 1 7.825-17.808l1.902-3.293a107 107 0 0 1 11.63-15.836l18.956 10.944c10.7-10.896 24.303-18.933 39.555-22.859v-21.887a107 107 0 0 1 21.334-2.134c7.306 0 14.44.734 21.333 2.133v21.888c15.252 3.926 28.853 11.962 39.553 22.857l18.957-10.945a107 107 0 0 1 11.587 15.762l1.991 3.449a106 106 0 0 1 7.781 17.725m-59.239-4.817l17.351 17.351l-70.021 70.02l-45.482-45.482l17.351-17.351l28.131 28.122z" clip-rule="evenodd"></svg:path>`,
})
export class IxOperatePlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOperatePlantFilledIcon],svg[ix-operate-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v84.818a128.2 128.2 0 0 0-32-4.033c-70.692 0-128 57.308-128 128c0 19.034 4.155 37.098 11.607 53.334H64V64zm325.285 275.536l-18.963 10.948a85.4 85.4 0 0 1 3.094 22.849a85.4 85.4 0 0 1-3.094 22.85l18.963 10.948a106 106 0 0 1-7.78 17.723l-1.993 3.453a107 107 0 0 1-11.586 15.759l-18.957-10.944c-10.7 10.895-24.301 18.931-39.553 22.856v21.888A107 107 0 0 1 373.416 480c-7.306 0-14.44-.735-21.334-2.134v-21.888c-15.252-3.926-28.855-11.962-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.628-15.832l-1.906-3.3a106 106 0 0 1-7.823-17.804l18.961-10.948a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.947a106 106 0 0 1 7.825-17.808l1.902-3.293a107 107 0 0 1 11.63-15.836l18.956 10.944c10.7-10.896 24.303-18.933 39.555-22.859v-21.887a107 107 0 0 1 21.334-2.134c7.306 0 14.44.734 21.333 2.133v21.888c15.252 3.926 28.853 11.962 39.553 22.857l18.957-10.945a107 107 0 0 1 11.587 15.762l1.991 3.449a106 106 0 0 1 7.781 17.725m-59.239-4.817l17.351 17.351l-70.021 70.02l-45.482-45.482l17.351-17.351l28.131 28.122z" clip-rule="evenodd"></svg:path>`,
})
export class IxOperatePlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOperatingSystemIcon],svg[ix-operating-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64v298.667H277.333v64h85.334v42.666H149.333v-42.666h85.334v-64H64V64zm-42.667 42.667H106.667V320h298.666zm-203.565 37.937q31.312 0 48 19.875Q265.8 183.51 265.8 213.417q0 32.718-18.938 52.031q-16.312 16.688-45.094 16.688q-31.313 0-48-19.875q-16.03-19.031-16.031-49.688q0-32.062 18.938-51.375q16.405-16.594 45.093-16.594m128.344 0q19.5 0 42.375 7.219l-6 24.375q-13.5-4.968-20.297-6.562q-6.796-1.594-14.203-1.594q-8.437 0-12.844 3.75q-4.593 4.031-4.593 10.219q0 5.343 3.89 8.39q3.405 2.667 15.171 7.665l3.532 1.476q14.72 6.094 19.5 8.484a57.7 57.7 0 0 1 9 5.578q11.532 8.812 11.532 26.907q0 21.375-14.532 32.343q-12.375 9.282-34.687 9.282q-23.25 0-44.531-7.5l4.312-25.5q22.782 9.562 38.625 9.562q10.313 0 15.188-5.062q4.218-4.407 4.218-10.782q0-5.718-4.125-8.906q-4.125-3.187-20.343-9.844q-12-4.968-16.922-7.406t-9.047-5.531q-11.72-8.72-11.719-25.125q0-14.157 7.688-24.844q11.812-16.594 38.812-16.594m-128.437 23.438q-16.22 0-25.032 13.5q-7.968 12.187-7.968 31.312q0 22.125 9.468 34.313q8.907 11.53 23.625 11.531q16.125 0 25.125-13.594q7.97-12 7.969-31.687q0-21.657-9.469-33.844q-8.905-11.53-23.718-11.531"></svg:path>`,
})
export class IxOperatingSystemIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixOptimizeIcon],svg[ix-optimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 448.055h384V405.39H64zM405.683 64l-107.008.064v42.645h76.502L268.51 213.397H161.822l-91.563 91.584l30.166 30.166l79.082-79.083h106.646l119.53-119.53v76.778h42.667V64z"></svg:path>`,
})
export class IxOptimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPAndISymbolsIcon],svg[ix-p-and-i-symbols-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 256v213.334l-138.68-83.05l-138.653 83.05V256l138.653 83.03zm-42.666 75.243l-52.459 31.403l52.459 31.402zm-192 .021v62.763l52.394-31.381zM192 42.667c82.475 0 149.334 66.859 149.334 149.333c0 44.298-19.288 84.091-49.924 111.44l-39.126-23.43c25.628-17.587 43.188-46.079 45.99-78.785l-66.494 66.506l-37.758-22.611L247.147 192l-97.803-97.795c-37.678 16.458-64.01 54.051-64.01 97.795c0 43.74 26.327 81.331 64 97.791v45.359C87.649 316.79 42.667 259.649 42.667 192c0-82.474 66.859-149.333 149.333-149.333m9.247 43.062l97.025 97.025c-4.425-51.534-45.492-92.6-97.025-97.025"></svg:path>`,
})
export class IxPAndISymbolsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPIDiagramIcon],svg[ix-p-i-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zM85.334 384h341.333V128H85.334v170.666h85.333V256l64 36.57V256h-21.333v-21.334h64V256H256v36.57L320 256v42.666h42.667v-76.01c-14.993-3.86-26.796-15.663-30.656-30.655L213.334 192v21.333H106.667v-64h106.667v21.333H332.01c4.737-18.402 21.442-32 41.323-32c23.564 0 42.666 19.103 42.666 42.667c0 19.88-13.597 36.586-32 41.322V320h-64v42.666L245.334 320l-74.667 42.666V320H85.334zM192 292.757v33.13l28.971-16.554zm106.667 0l-28.992 16.576l28.992 16.555zM373.334 160C361.552 160 352 169.55 352 181.333s9.552 21.333 21.334 21.333s21.333-9.55 21.333-21.333S385.116 160 373.334 160M192 170.666h-64V192h64z"></svg:path>`,
})
export class IxPIDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPackageIcon],svg[ix-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 42.664l192 106.667v213.333L256 469.331L64 362.664V149.331zm149.333 147.733l-128 73.899v143.915l128-73.638zm-298.666 1.195v143.007l128 73.612v-142.72zm69.12-55.531l-40.043 23.04l119.232 68.843l39.979-23.083zM256 89.945l-37.461 21.54l119.082 68.736l37.59-21.696z"></svg:path>`,
})
export class IxPackageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPackageFilledIcon],svg[ix-package-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 173.836v188.83l170.667 94.815V268.557zm213.333 283.645L448 362.666v-188.92l-170.667 94.806zm-84.03-379.087l62.702-34.8l169.367 93.914l-62.712 34.837zm-43.967 24.401l169.377 93.963l-62.717 34.839l-169.367-93.999z" clip-rule="evenodd"></svg:path>`,
})
export class IxPackageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPanIcon],svg[ix-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.334 298.667V384H320l-64 85.334L192 384h42.667v-85.333zM384 192l85.334 64L384 320v-42.666h-85.333v-42.667H384zm-256 0v42.667h85.334v42.667H128V320l-85.333-64zM256 42.667L320 128h-42.666v85.334h-42.667V128H192z"></svg:path>`,
})
export class IxPanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPanelIpcIcon],svg[ix-panel-ipc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 106.667v298.666H42.666V106.667zm-42.666 64H85.333v192h341.334zM149.333 128h-64v21.333h64z"></svg:path>`,
})
export class IxPanelIpcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPanelIpcFailIcon],svg[ix-panel-ipc-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-199.199H42.667v298.666l217.751.004A117.4 117.4 0 0 1 256 373.333q.002-5.39.478-10.658l-171.145-.008v-192h341.334l.008 98.131a117.9 117.9 0 0 1 42.667 37.068M85.333 128h64v21.333h-64zm288 149.333c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96c53.02 0 96-42.98 96-96c0-53.019-42.98-96-96-96m-18.855 96.001l-38.572-38.571l18.857-18.857l38.571 38.572l38.572-38.572l18.857 18.857l-38.572 38.571l38.572 38.572l-18.857 18.857l-38.572-38.572l-38.571 38.572l-18.857-18.857z" clip-rule="evenodd"></svg:path>`,
})
export class IxPanelIpcFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPanelIpcQuestionIcon],svg[ix-panel-ipc-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-199.199H42.667v298.666l217.751.004A117.4 117.4 0 0 1 256 373.333q.002-5.39.478-10.658l-171.145-.008v-192h341.334l.008 98.131a117.9 117.9 0 0 1 42.667 37.068M85.333 128h64v21.333h-64zm192.008 246.705c0-53.02 42.981-96 96-96s96 42.98 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96m140.956-8.868c4.271-6.282 6.412-13.638 6.412-22.063c0-17.458-6.412-28.417-21.314-37.136c-8.542-4.397-18.473-6.6-29.792-6.6c-12.944 0-23.822 3.526-32.623 10.559c-10.429 8.424-15.639 22.684-15.639 37.334h28.274v-.19c0-6.283 1.324-11.437 3.964-15.457q5.468-8.107 17.724-8.109c5.028 0 9.307 1.32 12.821 3.955c4.397 3.652 6.603 9.178 6.603 16.595c0 4.652-1.137 8.797-3.397 12.445q-2.827 4.9-9.055 9.614q-13.199 9.05-17.154 17.915c-2.263 4.903-3.4 12.695-3.4 23.377h26.593c0-7.041.936-12.317 2.83-15.838c1.506-2.891 4.652-5.968 9.429-9.239c8.299-6.161 14.202-11.882 17.724-17.162m-42.476 52.211c-9.179 0-16.621 7.442-16.621 16.622s7.442 16.621 16.621 16.621c9.18 0 16.622-7.441 16.622-16.621s-7.442-16.622-16.622-16.622" clip-rule="evenodd"></svg:path>`,
})
export class IxPanelIpcQuestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPanelIpcSuccessIcon],svg[ix-panel-ipc-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-199.199H42.667v298.666l217.751.004A117.4 117.4 0 0 1 256 373.333q.001-5.39.478-10.658l-171.145-.008v-192h341.334l.008 98.131a117.9 117.9 0 0 1 42.667 37.068M85.333 128h64v21.333h-64zm288 149.333c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96s96-42.98 96-96c0-53.019-42.981-96-96-96m62.763 62.763l-84.095 84.095l-41.428-41.428l18.856-18.857l22.572 22.572l65.239-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxPanelIpcSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixParameterIcon],svg[ix-parameter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M169.357 335.059h-20.323v-45.177h33.159l19.254-67.764h-31.02v-45.177h43.856l9.627-33.882h42.787l-9.627 33.882h42.786l9.627-33.882h42.787l-9.627 33.882h20.323v45.177h-33.159l-19.254 67.764h31.02v45.177h-43.856l-9.627 33.882h-42.787l9.627-33.882h-42.786l-9.627 33.882H159.73zm74.877-112.941l-19.254 67.764h42.786l19.254-67.764zm-127.29-112.942v95.571c0 19.923-8.279 38.536-22.185 51.253c13.906 12.717 22.185 31.33 22.185 51.253v95.571h53.483V448h-53.483c-23.64 0-42.787-20.216-42.787-45.176v-95.571c0-8.335-4.342-15.97-11.295-19.923L42.667 275.9v-39.8l20.195-11.452c6.953-3.931 11.295-11.566 11.295-19.901v-95.571C74.158 84.216 93.306 64 116.945 64h41.588v45.176zm278.112 293.648v-95.571c0-19.923 8.279-38.536 22.185-51.253c-13.906-12.717-22.185-31.33-22.185-51.253v-95.571h-53.483V64h53.483c23.64 0 42.786 20.216 42.786 45.176v95.571c0 8.335 4.343 15.97 11.296 19.923l20.195 11.43v39.8l-20.195 11.452c-6.953 3.931-11.296 11.566-11.296 19.901v95.571c0 24.96-19.146 45.176-42.786 45.176h-41.588v-45.176z" clip-rule="evenodd"></svg:path>`,
})
export class IxParameterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPasteIcon],svg[ix-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 42.667h149.334v42.666H384v128h-42.667V128h-42.666v42.667H149.333V128h-42.666v256h128v42.667H64V85.333h85.333zM256 128V85.333h-64V128zm149.333 298.667H298.667V277.333h67.66l39.006 39.007zm42.667-128l-64-64H256v234.666h192z" clip-rule="evenodd"></svg:path>`,
})
export class IxPasteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPasteFilledIcon],svg[ix-paste-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 42.664H170.667v85.333h106.666zM128 85.331H64v341.333h170.667V213.331H384v-128h-64v85.333H128zm256 170.666l64 64v149.334H277.333V255.997z" clip-rule="evenodd"></svg:path>`,
})
export class IxPasteFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPauseIcon],svg[ix-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 128h42.667v256h-42.667zm128 0h42.667v256h-42.667z"></svg:path>`,
})
export class IxPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPcTowerIcon],svg[ix-pc-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 42.667v426.667H106.667V42.667zM364.8 256H151.467v170.667H364.8zm-87.466 42.667v42.667h-42.667v-42.667zm85.333-128H149.334v42.667h213.333zm0-85.333H149.334V128h213.333z"></svg:path>`,
})
export class IxPcTowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPcTowerFilledIcon],svg[ix-pc-tower-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 42.667v426.667H106.667V42.667zm-128 234.667h-42.667V320h42.667zM364.8 170.667H151.467v42.667H364.8zm-2.133-85.333H149.334V128h213.333z"></svg:path>`,
})
export class IxPcTowerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPcTowerSettingsIcon],svg[ix-pc-tower-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.664v192.404q-5.282-.403-10.667-.405c-27.181 0-52.535 7.821-73.935 21.334H130.133v170.667h115.161a138.9 138.9 0 0 0 27.977 42.667H85.333V42.664zm-128 256v.731a137.9 137.9 0 0 0-17.623 41.936h-25.044v-42.667zm85.333-128H128v42.667h213.333zm0-85.333H128v42.666h213.333zm133.285 254.202l-18.963 10.948a85.4 85.4 0 0 1 3.094 22.85a85.4 85.4 0 0 1-3.094 22.849l18.963 10.948a106 106 0 0 1-7.78 17.723l-1.993 3.453a107 107 0 0 1-11.586 15.76l-18.957-10.945c-10.7 10.895-24.301 18.931-39.553 22.857v21.888a107 107 0 0 1-21.333 2.133c-7.306 0-14.44-.734-21.334-2.133v-21.888c-15.252-3.926-28.855-11.963-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.628-15.832l-1.906-3.301a106 106 0 0 1-7.823-17.804l18.961-10.947a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.948a106 106 0 0 1 7.825-17.807l1.902-3.294a107 107 0 0 1 11.63-15.835l18.956 10.944c10.7-10.897 24.303-18.933 39.555-22.859v-21.888a107 107 0 0 1 21.334-2.134c7.306 0 14.44.735 21.333 2.134v21.888c15.252 3.925 28.853 11.961 39.553 22.856l18.957-10.944a107 107 0 0 1 11.587 15.761l1.991 3.449a106 106 0 0 1 7.781 17.725m-69.201 33.798c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxPcTowerSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPcTowerSettingsFilledIcon],svg[ix-pc-tower-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.664v192.404q-5.282-.403-10.667-.405c-49.403 0-92.772 25.836-117.333 64.732v-22.064h-42.667v42.666h31.961c-6.847 16.418-10.627 34.434-10.627 53.333c0 37.259 14.694 71.086 38.604 96.001H85.333V42.664zm-40.533 128H130.133v42.667h213.334zm-2.134-85.333H128v42.666h213.333zm133.285 254.202l-18.963 10.948a85.4 85.4 0 0 1 3.094 22.85a85.4 85.4 0 0 1-3.094 22.849l18.963 10.948a106 106 0 0 1-7.78 17.723l-1.993 3.453a107 107 0 0 1-11.586 15.76l-18.957-10.945c-10.7 10.895-24.301 18.931-39.553 22.857v21.888a107 107 0 0 1-21.333 2.133c-7.306 0-14.44-.734-21.334-2.133v-21.888c-15.252-3.926-28.855-11.963-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.628-15.832l-1.906-3.301a106 106 0 0 1-7.823-17.804l18.961-10.947a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.948a106 106 0 0 1 7.825-17.807l1.902-3.294a107 107 0 0 1 11.63-15.835l18.956 10.944c10.7-10.897 24.303-18.933 39.555-22.859v-21.888a107 107 0 0 1 21.334-2.134c7.306 0 14.44.735 21.333 2.134v21.888c15.252 3.925 28.853 11.961 39.553 22.856l18.957-10.944a107 107 0 0 1 11.587 15.761l1.991 3.449a106 106 0 0 1 7.781 17.725m-69.201 33.798c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxPcTowerSettingsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPdfDocumentIcon],svg[ix-pdf-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M161.28 328.32a61 61 0 0 0-40.32-8.32H85.333v128h28.373v-48.853h12.16a55.04 55.04 0 0 0 35.84-8.747a38.61 38.61 0 0 0 13.44-30.933a37.33 37.33 0 0 0-13.866-31.147m-22.827 46.72a32.85 32.85 0 0 1-17.067 2.56h-8.32v-36.266h8.32a30.3 30.3 0 0 1 17.494 3.413a17.49 17.49 0 0 1 7.466 15.36a15.15 15.15 0 0 1-7.893 14.933M236.16 320h-35.414v128h33.92a90.24 90.24 0 0 0 50.134-9.6a60.16 60.16 0 0 0 23.893-54.4a64 64 0 0 0-17.707-48.853A73.4 73.4 0 0 0 236.16 320m28.16 98.987a51.2 51.2 0 0 1-29.227 6.4h-5.547v-82.773h5.12c17.92 0 24.96 1.706 32 8.106a43.95 43.95 0 0 1 12.16 33.28a41.39 41.39 0 0 1-14.506 34.987M339.84 448h28.8v-53.546h58.026V371.84H368.64v-29.226h58.026V320H339.84zM320 42.667H85.333v234.667H128v-192h174.293L384 167.04v110.294h42.666v-128z"></svg:path>`,
})
export class IxPdfDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPdfDocumentFilledIcon],svg[ix-pdf-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.664H85.333v234.667h341.334v-128zm-218.329 279.87v125.463h28.245v-47.812h11.865q12.927.001 21.073-1.948q8.234-2.037 13.989-6.641q13.281-10.624 13.281-30.547q0-12.217-5.578-21.337q-6.906-11.423-20.01-14.787q-9.474-2.392-27.537-2.391zm35.683 56.401h-8.146v-35.151h8.146q11.775 0 17.177 3.277q7.348 4.425 7.348 14.963q0 10.713-7.614 14.432q-5.136 2.48-16.911 2.479m70.567-56.401v125.463h32.762q17.264 0 28.332-1.86q24.085-3.983 35.595-22.667q9.207-14.784 9.208-38.161q0-22.754-9.208-37.806q-9.209-15.14-26.564-20.719q-13.28-4.25-35.416-4.25zm33.647 103.328h-5.402v-81.193h5.402q13.194 0 19.744 1.684q6.553 1.593 11.689 6.197q5.402 4.87 8.499 13.547q3.1 8.675 3.099 18.858q0 9.475-2.656 17.886q-3.631 11.333-11.776 16.734q-9.298 6.287-28.599 6.287m95.447-103.328v125.463h28.246v-52.593h48.962v-22.135h-48.962v-28.6h51.53v-22.135z" clip-rule="evenodd"></svg:path>`,
})
export class IxPdfDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPenIcon],svg[ix-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.667v42.667H42.667v-42.667zM320 42.667l106.667 106.667L192 384H85.334V277.334zM249.747 173.25L128 294.998v46.336h46.336l121.747-121.748zM320 102.998l-40.083 40.082l46.336 46.336l40.083-40.082z"></svg:path>`,
})
export class IxPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPenCancelledIcon],svg[ix-pen-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M333.159 242.841L226.503 136.163L320 42.666l106.667 106.667zM89.679 59.657L469.334 439.39v29.943H42.667v-42.666h353.83L272.915 303.085L192 384H85.333V277.333l80.915-80.915L59.583 89.753zm84.657 281.676l68.414-68.414l-46.336-46.336L128 294.997v46.336zM320 102.997l46.336 46.336l-40.083 40.083l-46.336-46.336z" clip-rule="evenodd"></svg:path>`,
})
export class IxPenCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPenCancelledFilledIcon],svg[ix-pen-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.68 59.657l379.653 379.734v29.943H42.667v-42.667h353.83L267.582 297.752L181.333 384h-96v-96l86.249-86.248L59.583 89.753zm161.634 62.363l96 96L416 149.333l-96-96z" clip-rule="evenodd"></svg:path>`,
})
export class IxPenCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPenFilledIcon],svg[ix-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ixPenFilled0" fill="currentColor" d="M426.667 373.333V416H0v-42.667zM186.019 91.314l96 95.999l-143.352 143.354h-96v-96zM277.333 0l96 96l-68.686 68.686l-96-96z"></svg:path></svg:defs><svg:use fill-rule="evenodd" href="#ixPenFilled0" transform="translate(42.667 53.333)"></svg:use>`,
})
export class IxPenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhoneIcon],svg[ix-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m430.08 327.253l-49.28-49.92l-18.134-18.133l-25.173 8.32l-48.853 16.427l-61.227-61.44l16.213-48.854l7.894-24.32l-18.56-18.773l-49.28-49.92l-30.294-30.08l-30.08 30.08l-6.186 6.187c-47.845 48.14-61.458 120.605-34.347 182.826a312.1 312.1 0 0 0 65.28 93.014a309.1 309.1 0 0 0 93.013 64c62.171 27.549 134.893 13.887 182.827-34.347l6.187-6.187l30.293-30.08zm-36.267 35.414a122.03 122.03 0 0 1-86.4 35.84a118.4 118.4 0 0 1-48.853-10.454a263.3 263.3 0 0 1-80.427-56.32a269 269 0 0 1-56.32-80.213c-20.299-46.105-10.123-99.948 25.6-135.467l5.973-5.973l49.494 50.133l-17.92 53.12a34.99 34.99 0 0 0 8.32 35.627l68.266 68.053a35 35 0 0 0 24.534 10.24a38.8 38.8 0 0 0 11.093-1.706l53.547-17.92l49.28 49.28z"></svg:path>`,
})
export class IxPhoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhoneFilledIcon],svg[ix-phone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m142.747 65.618l22.676 22.515l49.285 49.926l13.996 14.156l-5.867 18.078l-18.283 55.09q23.144 26.253 46.113 46.617t45.76 34.835l55.08-18.52l18.932-6.258l13.437 13.436l49.399 50.04l22.46 21.353l-22.551 22.392c-25.176 25.316-54.599 41.333-85.029 47.859c-30.873 6.62-62.746 3.451-92.081-9.548c-33.475-14.91-74.584-46.522-100.55-72.537c-26.337-25.835-58.374-56.284-73.638-89.66c-12.683-29.106-15.84-60.608-10.23-90.463c5.608-29.856 19.983-58.064 42.34-80.56z"></svg:path>`,
})
export class IxPhoneFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhotoCameraIcon],svg[ix-photo-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 64l38.395 63.99l110.939.01v298.667H42.667V128H153.6L192 64zm-24.17 42.667h-79.702l-38.37 64H85.334V384h341.333V170.645l-92.43.01zm-39.83 64c53.02 0 96 42.98 96 96c0 53.019-42.98 96-96 96c-53.019 0-96-42.981-96-96c0-53.02 42.981-96 96-96m0 42.666c-29.455 0-53.333 23.878-53.333 53.334C202.667 296.122 226.545 320 256 320c29.456 0 53.334-23.878 53.334-53.333c0-29.456-23.878-53.334-53.334-53.334M384 192c11.782 0 21.334 9.551 21.334 21.333s-9.552 21.334-21.334 21.334s-21.333-9.552-21.333-21.334S372.218 192 384 192"></svg:path>`,
})
export class IxPhotoCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhotoCameraAddIcon],svg[ix-photo-camera-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64zm-128-245.333l38.394 53.324l89.606.01v170.666H384V170.646l-71.097.01l-38.407-53.322h-79.701l-38.37 53.333H85.333V384h213.333v42.667h-256V128h89.6l38.4-53.333zm-64 117.333C281.795 192 320 230.205 320 277.334c0 47.128-38.205 85.333-85.333 85.333s-85.333-38.205-85.333-85.333S187.539 192 234.667 192m0 42.667c-23.564 0-42.667 19.103-42.667 42.667S211.103 320 234.667 320s42.667-19.102 42.667-42.666s-19.103-42.667-42.667-42.667M341.334 192c11.782 0 21.333 9.552 21.333 21.334s-9.551 21.333-21.333 21.333S320 225.116 320 213.334S329.552 192 341.334 192"></svg:path>`,
})
export class IxPhotoCameraAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhotoCameraCancelledIcon],svg[ix-photo-camera-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m435.504 435.503l-30.17 30.17a4768 4768 0 0 0-35.364-39.007H42.667V128h26.528q-12.927-12.196-26.528-24.994l30.17-30.17zM320 64l38.395 63.99l110.939.01l-.001 280.993l-42.666-42.666V170.645l-92.43.01l-38.407-63.988h-79.702l-18.412 30.709l-31.089-31.088L192 64zM114.292 170.668l-28.958-.001V384l244.978-.001a3694 3694 0 0 0-30.45-31.919c-13.145 6.768-28.057 10.587-43.862 10.587c-53.019 0-96-42.981-96-96c0-15.389 3.621-29.931 10.057-42.823a14849 14849 0 0 0-55.765-53.176m89.396 85.575l-.021.092c-.656 3.343-1 6.797-1 10.332C202.667 296.122 226.545 320 256 320c3.87 0 7.643-.412 11.28-1.195q-3.442-3.465-6.861-6.883q-23.514-23.515-56.731-55.679M256 170.667c53.02 0 96 42.98 96 96c0 7.702-.907 15.193-2.62 22.371l-45.133-45.133a53.55 53.55 0 0 0-25.486-25.485l-45.132-45.133a96.3 96.3 0 0 1 22.371-2.62M384 192c11.782 0 21.334 9.551 21.334 21.333s-9.552 21.334-21.334 21.334s-21.333-9.552-21.333-21.334S372.218 192 384 192"></svg:path>`,
})
export class IxPhotoCameraCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhotoCameraCancelledFilledIcon],svg[ix-photo-camera-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m435.504 435.503l-30.17 30.17a4768 4768 0 0 0-35.364-39.007H42.667V128h26.528q-12.927-12.196-26.528-24.994l30.17-30.17zM320 64l1.046 1.673l.32.512l3.12 4.992l.64 1.024l5.2 8.32l.96 1.536l7.28 11.648l1.28 2.048q4.23 6.766 9.36 14.976l1.6 2.56l9.193 14.71l109.335.001l-.001 280.993l-102.817-102.818c4.414-12.345 6.818-25.646 6.818-39.508c0-64.802-52.532-117.334-117.334-117.334c-13.862 0-27.163 2.404-39.508 6.818l-50.515-50.514L192 64zM154.062 208.533l-.577 1.013c-9.439 16.904-14.818 36.384-14.818 57.12C138.667 331.469 191.199 384 256 384c21.574 0 41.789-5.823 59.157-15.982a3473 3473 0 0 0-31.057-32.154c-8.674 3.527-18.16 5.47-28.1 5.47c-41.237 0-74.666-33.43-74.666-74.667c0-9.563 1.797-18.706 5.073-27.109a11332 11332 0 0 0-32.345-31.025M256 192c41.238 0 74.667 33.43 74.667 74.667q0 1.797-.084 3.575l-78.158-78.158A76 76 0 0 1 256 192m170.667-21.333c-11.782 0-21.333 9.55-21.333 21.333s9.55 21.333 21.333 21.333S448 203.783 448 192s-9.55-21.333-21.333-21.333"></svg:path>`,
})
export class IxPhotoCameraCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhotoCameraFilledIcon],svg[ix-photo-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 64l1.046 1.673l.32.512l3.12 4.992l.64 1.024l5.2 8.32l.96 1.536l7.28 11.648l1.28 2.048q4.23 6.766 9.36 14.976l1.6 2.56l9.193 14.71l109.335.001v298.667H42.667V128H152l40-64zm-64 85.333c-64.801 0-117.333 52.532-117.333 117.334C138.667 331.468 191.199 384 256 384c64.802 0 117.334-52.532 117.334-117.333c0-64.802-52.532-117.334-117.334-117.334M256 192c41.238 0 74.667 33.43 74.667 74.667s-33.43 74.666-74.667 74.666s-74.666-33.43-74.666-74.666c0-41.238 33.43-74.667 74.666-74.667m170.667-21.333c-11.782 0-21.333 9.55-21.333 21.333s9.55 21.333 21.333 21.333S448 203.783 448 192s-9.55-21.333-21.333-21.333"></svg:path>`,
})
export class IxPhotoCameraFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPhotoCamerasIcon],svg[ix-photo-cameras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m352 106.667l38.395 42.657l78.939.01v277.333H106.667V149.334H185.6l38.4-42.667zm-24.17 42.667h-79.702L209.758 192h-60.424v192h277.333V191.98l-60.43.01zM288 42.667l38.395 42.657l78.939.01l-.001 1.294l-1.165-1.294h-220.04L145.758 128H85.334l-.001 234.667H42.667V85.334H121.6L160 42.667zM288 192c47.129 0 85.334 38.205 85.334 85.334c0 47.128-38.205 85.333-85.334 85.333c-47.128 0-85.333-38.205-85.333-85.333S240.872 192 288 192m0 42.667c-23.564 0-42.666 19.103-42.666 42.667S264.436 320 288 320s42.667-19.102 42.667-42.666s-19.103-42.667-42.667-42.667m106.667-21.333c5.891 0 10.667 4.775 10.667 10.666s-4.776 10.667-10.667 10.667S384 229.891 384 224c0-5.89 4.776-10.666 10.667-10.666"></svg:path>`,
})
export class IxPhotoCamerasIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPiechartIcon],svg[ix-piechart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m213.33 46.935l.002 43.776C139.722 109.657 85.334 176.477 85.334 256c0 94.256 76.41 170.666 170.666 170.666c79.524 0 146.343-54.39 165.29-127.998h43.776C445.299 396.044 359.209 469.334 256 469.334C138.18 469.334 42.667 373.82 42.667 256c0-103.208 73.29-189.298 170.664-209.065M256 42.667c116.643 0 211.421 93.612 213.305 209.805l.029 3.528H256z"></svg:path>`,
})
export class IxPiechartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPiechartFilledIcon],svg[ix-piechart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m234.666 43.72l.001 233.613l233.613.002C457.576 385.138 366.62 469.333 256 469.333c-117.82 0-213.333-95.512-213.333-213.333c0-110.62 84.195-201.576 191.999-212.28m42.668 0c100.787 10.007 180.94 90.159 190.946 190.946H277.334z"></svg:path>`,
})
export class IxPiechartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPinIcon],svg[ix-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m301.755 327.147l107.501-107.651l30.049 29.943l30.05-30.007l-88.362-88.361l-88.383-88.404l-30.007 30.028l29.943 30.049l-107.65 107.501l-80.557-9.421l-61.672 61.63L58 277.617l-.064.064l73.071 73.071l-66.755 66.67l.106 30.028h30.199l66.712-66.457l73.071 73.071l.064-.064l15.163 15.333l61.63-61.63l-9.421-80.556zm-52.252 81.96l-146.61-146.589l16.609-16.63l82.131 8.017l121.069-121.069l56.462 56.462l-121.048 121.069l8.017 82.131z"></svg:path>`,
})
export class IxPinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPinCancelledIcon],svg[ix-pin-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m70.827 105.173l105.386 103.68l-71.253-8.746L42.667 262.4l88.32 88.32l-66.774 66.987V448H94.08l66.987-67.2l88.533 88.533l62.293-62.293l-8.96-73.813L408.96 437.333l29.867-30.506l-338.134-332.16zm178.986 304L103.04 262.187l17.28-17.28l80.213 9.6l11.094-11.094l57.386 56.32l-11.306 11.307l9.6 80.64zm219.52-189.866l-176.64-176.64l-30.08 30.293l29.654 29.653l-50.774 50.774L272 183.04l50.347-50.347l56.96 56.96L329.6 239.36l30.507 29.653l49.28-49.28l29.653 29.654z"></svg:path>`,
})
export class IxPinCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPinCancelledFilledIcon],svg[ix-pin-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m70.827 105.173l105.386 103.68l-71.253-8.746L42.667 262.4l88.32 88.32l-66.774 66.987V448H94.08l66.987-67.2l88.533 88.533l62.293-62.293l-8.96-73.813L408.96 437.333l29.867-30.506l-338.134-332.16zm398.506 114.134l-176.64-176.64l-30.08 30.293l29.654 29.653l-50.774 50.774l118.614 115.626l49.28-49.28l29.653 29.654z"></svg:path>`,
})
export class IxPinCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPinFilledIcon],svg[ix-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m301.755 327.147l107.501-107.651l30.049 29.943l30.05-30.006L292.61 42.667l-30.007 30.028l29.943 30.049l-107.65 107.501l-80.557-9.421l-61.672 61.63l88.34 88.298l-66.755 66.67l.106 30.028h30.199l66.712-66.457l88.298 88.34l61.63-61.63z"></svg:path>`,
})
export class IxPinFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantIcon],svg[ix-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v192l149.334-69.333V256L448 185.882V448H64V64zm-42.666 258.85v82.483h298.666V253.035L256 323.17v-69.645z"></svg:path>`,
})
export class IxPlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantDetailsIcon],svg[ix-plant-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 127.999h341.334v256H85.333zM42.667 426.665V85.332h426.666v341.333zm64-268.19h32v86.857l42.666-32v32l53.334-32v85.333h-128zM384 170.665v32H277.333v-32zm0 96v-32H277.333v32zm0 64v-32H277.333v32z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantDetailsFilledIcon],svg[ix-plant-details-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 85.332H42.667v341.333h426.666zM128 127.999H85.333v170.666H256V191.999l-64 32v-32l-64 30.666zm170.667 192h128v42.666h-128zm128-85.334h-128v42.667h128zm-128-85.333h128v42.667h-128z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantDetailsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantFilledIcon],svg[ix-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v384h384V185.882L298.667 256v-69.333L149.333 256V64z"></svg:path>`,
})
export class IxPlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantHandbookIcon],svg[ix-plant-handbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h192v-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645L256 293.702v-16.369c0-23.564 19.103-42.666 42.667-42.666h106.666v-70.119l-128 70.119v-69.334zm128 41.846c0-11.329 9.045-20.513 20.202-20.513h129.132v170.667h-123a5 5 0 0 0-5 5V443a5 5 0 0 0 5 5H448V298.667h21.333v170.666H297.535c-11.157 0-20.202-9.184-20.202-20.512zM352 317.867c10.604 0 19.2-8.596 19.2-19.2s-8.596-19.2-19.2-19.2s-19.2 8.596-19.2 19.2s8.596 19.2 19.2 19.2m16 87.466v-64h-32l.047 64.146z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantHandbookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantHandbookFilledIcon],svg[ix-plant-handbook-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v70.119H298.667c-23.564 0-42.667 19.102-42.667 42.666v149.334H64V64zm128 212.513c0-11.329 9.045-20.513 20.202-20.513h129.132v170.667h-123a5 5 0 0 0-5 5V443a5 5 0 0 0 5 5H448V298.667h21.333v170.666H297.535c-11.157 0-20.202-9.184-20.202-20.512zM352 317.867c10.604 0 19.2-8.596 19.2-19.2s-8.596-19.2-19.2-19.2s-19.2 8.596-19.2 19.2s8.596 19.2 19.2 19.2m16 87.466v-64h-32l.047 64.146z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantHandbookFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantSearchIcon],svg[ix-plant-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h227.655c-13.657-11.052-24.222-25.775-30.193-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l128-70.135v24.885a95.4 95.4 0 0 1 42.666 15.58V164.548l-128 70.119v-69.334zm202.667 160c23.564 0 42.667-19.103 42.667-42.667S375.564 309.333 352 309.333S309.333 328.436 309.333 352s19.103 42.667 42.667 42.667m0 32c14.826 0 28.643-4.321 40.259-11.773l45.502 45.502l22.628-22.627l-45.501-45.5c7.455-11.619 11.779-25.439 11.779-40.269c0-41.237-33.43-74.667-74.667-74.667s-74.666 33.43-74.666 74.667s33.429 74.667 74.666 74.667" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantSearchFilledIcon],svg[ix-plant-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v107.618C390.079 261.955 371.735 256 352 256c-53.019 0-96 42.981-96 96c0 30.158 13.906 57.067 35.655 74.667H64V64zM352 394.667c23.564 0 42.667-19.103 42.667-42.667S375.564 309.333 352 309.333S309.333 328.436 309.333 352s19.103 42.667 42.667 42.667m0 32c14.826 0 28.643-4.321 40.259-11.773l45.502 45.502l22.628-22.627l-45.501-45.5c7.455-11.619 11.779-25.439 11.779-40.269c0-41.237-33.43-74.667-74.667-74.667s-74.666 33.43-74.666 74.667s33.429 74.667 74.666 74.667" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantSearchFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantSecurityIcon],svg[ix-plant-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h234.745c-7.831-12.816-13.7-27.036-17.294-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l42.666-16.268v-25.011L384 234.667l21.333 5.178v-75.297l-128 70.119v-69.334zm319.552 41.92L384 256l-85.333 20.712v69.04l.136 6.293c2.344 53.708 34.435 85.868 58.545 102.576l5.405 3.584l6.201 3.734l5.396 2.936l3.602 1.795l2.855 1.322l3.193 1.341l3.055-1.282l6.191-2.98l4.08-2.187l4.607-2.673l7.689-4.955l5.504-3.958c24.332-18.316 54.013-51.914 53.733-106.73l-.059-12.71l-.025-46.642zm-127.552 33.664L384 299.883l.037.009v121.156l-.08.051l-3.029-2.037l-3.994-2.895c-20.844-15.795-34.253-37.306-35.505-65.982l-.106-5.357z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantSecurityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantSecurityFilledIcon],svg[ix-plant-security-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v75.297L384 234.667l-106.667 25.89v85.814c0 31.098 7.697 57.85 21.412 80.296H64V64zm319.552 212.587L384 256l-85.333 20.712v69.04l.136 6.293c2.344 53.708 34.435 85.868 58.545 102.576l5.405 3.584l6.201 3.734l5.396 2.936l3.602 1.795l2.855 1.322l3.193 1.341l3.055-1.282l6.191-2.98l4.08-2.187l4.607-2.673l7.689-4.955l5.504-3.958c24.332-18.316 54.013-51.914 53.733-106.73l-.059-12.71l-.025-46.642zm-127.552 33.664L384 299.883l.037.009v121.156l-.08.051l-3.029-2.037l-3.994-2.895c-20.844-15.795-34.253-37.306-35.505-65.982l-.106-5.357z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantSecurityFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantSettingsIcon],svg[ix-plant-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h192.94a127.2 127.2 0 0 1-11.169-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l128-70.135v14.07q5.277-.436 10.666-.438c11.05 0 21.772 1.4 32 4.033v-84.818l-128 70.119v-69.334zm325.285 104.869l-18.963 10.948a85.4 85.4 0 0 1 3.094 22.849a85.4 85.4 0 0 1-3.094 22.85l18.963 10.948a106 106 0 0 1-7.78 17.723l-1.993 3.453a107 107 0 0 1-11.586 15.759l-18.957-10.944c-10.7 10.895-24.301 18.931-39.553 22.856v21.888A107 107 0 0 1 373.416 480c-7.306 0-14.44-.735-21.334-2.134v-21.888c-15.252-3.926-28.855-11.962-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.628-15.832l-1.906-3.3a106 106 0 0 1-7.823-17.804l18.961-10.948a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.947a106 106 0 0 1 7.825-17.808l1.902-3.293a107 107 0 0 1 11.63-15.836l18.956 10.944c10.7-10.896 24.303-18.933 39.555-22.859v-21.887a107 107 0 0 1 21.334-2.134c7.306 0 14.44.734 21.333 2.133v21.888c15.252 3.926 28.853 11.962 39.553 22.857l18.957-10.945a107 107 0 0 1 11.587 15.762l1.991 3.449a106 106 0 0 1 7.781 17.725m-69.201 33.797c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantSettingsFilledIcon],svg[ix-plant-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v84.818a128.2 128.2 0 0 0-32-4.033c-70.692 0-128 57.308-128 128c0 19.034 4.155 37.098 11.607 53.334H64V64zm325.285 275.536l-18.963 10.948a85.4 85.4 0 0 1 3.094 22.849a85.4 85.4 0 0 1-3.094 22.85l18.963 10.948a106 106 0 0 1-7.78 17.723l-1.993 3.453a107 107 0 0 1-11.586 15.759l-18.957-10.944c-10.7 10.895-24.301 18.931-39.553 22.856v21.888A107 107 0 0 1 373.416 480c-7.306 0-14.44-.735-21.334-2.134v-21.888c-15.252-3.926-28.855-11.962-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.628-15.832l-1.906-3.3a106 106 0 0 1-7.823-17.804l18.961-10.948a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.947a106 106 0 0 1 7.825-17.808l1.902-3.293a107 107 0 0 1 11.63-15.836l18.956 10.944c10.7-10.896 24.303-18.933 39.555-22.859v-21.887a107 107 0 0 1 21.334-2.134c7.306 0 14.44.734 21.333 2.133v21.888c15.252 3.926 28.853 11.962 39.553 22.857l18.957-10.945a107 107 0 0 1 11.587 15.762l1.991 3.449a106 106 0 0 1 7.781 17.725m-69.201 33.797c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantSettingsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantUserIcon],svg[ix-plant-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M381.334 277.333c47.128 0 85.603 37.72 87.892 85.128l.108 4.472v59.733H234.667v-59.733c0-47.985 37.047-87.16 83.608-89.49l4.392-.11zm0 42.667h-58.667c-23.782 0-43.545 19.07-45.219 43.56l-.114 3.373V384h149.333v-17.067c0-24.957-18.729-45.111-42.117-46.816zm-296-234.667V192l85.333-42.667V192L256 149.333v149.333H42.667V85.333zm128 128h-128V256h128zm138.666-64c29.456 0 53.334 23.878 53.334 53.333C405.334 232.122 381.456 256 352 256c-29.455 0-53.333-23.878-53.333-53.334c0-29.455 23.878-53.333 53.333-53.333"></svg:path>`,
})
export class IxPlantUserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantUserFilledIcon],svg[ix-plant-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M381.334 277.333c47.128 0 85.603 37.72 87.892 85.128l.108 4.472v59.733H234.667v-59.733c0-47.985 37.047-87.16 83.608-89.49l4.392-.11zm-296-192V192l85.333-42.667V192L256 149.333v149.333H42.667V85.333zm266.666 64c29.456 0 53.334 23.878 53.334 53.333C405.334 232.122 381.456 256 352 256c-29.455 0-53.333-23.878-53.333-53.334c0-29.455 23.878-53.333 53.333-53.333"></svg:path>`,
})
export class IxPlantUserFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantsIcon],svg[ix-plants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 170.667v128L192 245.334v53.333l106.667-53.333v181.333h-256v-256zM256 320H85.334v64H256zm0-277.333v128l106.667-53.333v53.333l106.667-53.333v181.333H320V256h106.667v-64H256v50.803l-42.666 21.325V42.667z"></svg:path>`,
})
export class IxPlantsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlantsFilledIcon],svg[ix-plants-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 170.667v128L192 245.334v53.333l106.667-53.333v181.333h-256v-256zM256 42.667v128l106.667-53.333v53.333l106.667-53.333v181.333H320v-87.851l-106.666 53.312V42.667z"></svg:path>`,
})
export class IxPlantsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlayIcon],svg[ix-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 106.667L426.667 256L128 405.334zm42.667 64v170.667l170.666-85.324z"></svg:path>`,
})
export class IxPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlayFilledIcon],svg[ix-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 256L128 405.334V106.667z"></svg:path>`,
})
export class IxPlayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlayPauseIcon],svg[ix-play-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.667 128l256 128l-256 128zm42.667 64v128l128-63.992zM320 128h42.667v256H320Zm106.667 0h42.667v256h-42.667Z"></svg:path>`,
})
export class IxPlayPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlayPauseFilledIcon],svg[ix-play-pause-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.667 128l256 128l-256 128zM320 128h42.667v256H320Zm106.667 0h42.667v256h-42.667Z"></svg:path>`,
})
export class IxPlayPauseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlayStepwiseIcon],svg[ix-play-stepwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m149.334 128l213.333 128l-213.333 128zM192 203.328v105.323L279.766 256zM85.334 213.333C108.898 213.333 128 232.436 128 256s-19.102 42.667-42.666 42.667S42.667 279.564 42.667 256s19.103-42.667 42.667-42.667m341.333 0c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667S384 279.564 384 256s19.103-42.667 42.667-42.667"></svg:path>`,
})
export class IxPlayStepwiseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlayStepwiseFilledIcon],svg[ix-play-stepwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m149.334 128l213.333 128l-213.333 128zm-64 85.333C108.898 213.333 128 232.436 128 256s-19.102 42.667-42.666 42.667S42.667 279.564 42.667 256s19.103-42.667 42.667-42.667m341.333 0c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667S384 279.564 384 256s19.103-42.667 42.667-42.667"></svg:path>`,
})
export class IxPlayStepwiseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlcIcon],svg[ix-plc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 42.668v426.667H106.667V42.668zm-42.666 42.667H149.333v341.333h213.334zm-85.334 277.333v42.667h-42.666v-42.667zm-42.666-42.667v42.667H192v-42.667zm85.333 0v42.667h-42.667v-42.667zm-42.667-42.666v42.666h-42.666v-42.666zm64-170.667v149.333H170.667V106.668zm-42.666 42.667h-85.334v64h85.334z"></svg:path>`,
})
export class IxPlcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlcDeviceIcon],svg[ix-plc-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v384h384V64zm42.667 341.333V106.667h128v298.666zm170.666 0V106.667H320v298.666zm85.334 0V106.667h42.666v298.666zM213.333 128H128v106.667h85.333zM128 320h21.333v21.333H128zm85.333 0H192v21.333h21.333zM160 277.333h21.333v21.334H160zm21.333 85.334H160V384h21.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcDeviceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlcDeviceTagIcon],svg[ix-plc-device-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h384v236.497L384 257.83V106.667h-42.667V256h-42.666V106.667H256V448H42.667zm42.666 42.667v298.666h128V106.667zm288 170.666l117.334 117.334l-96 96l-117.334-117.334v-96zm-32 42.667H320v21.333h21.333zM192 128h-85.333v106.667H192zm-85.333 192H128v21.333h-21.333zM192 320h-21.333v21.333H192zm-53.333-42.667H160v21.334h-21.333zM160 362.667h-21.333V384H160z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcDeviceTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlcDeviceUserDataTypeIcon],svg[ix-plc-device-user-data-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h384v160H384V106.667h-42.667v144h-42.666v-144H256V448H42.667zm42.666 42.667v298.666h128V106.667zm394.667 128h-32v10.666h-42.667V272h-128v160h64v26.667H384v10.666h32v-42.666h-32v10.666h-21.333v-42.666H384v10.666h32v-42.666h-32v10.666h-42.667V400h-32v-96h96v26.667H448v10.666h32v-42.666h-32v10.666h-21.333v-42.666H448v10.666h32zM192 128h-85.333v106.667H192zm-85.333 192H128v21.333h-21.333zM192 320h-21.333v21.333H192zm-53.333-42.667H160v21.334h-21.333zM160 362.667h-21.333V384H160z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcDeviceUserDataTypeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlcTagIcon],svg[ix-plc-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h256v192h-42.667V106.667H106.667v298.666h170.666L320 448H64zm64 64h128v128H128zm42.667 42.667v42.666h42.666v-42.666zm0 96h42.666v42.666h-42.666zm0 85.333H128v-42.667h42.667zm42.666 0v42.667h-42.666V352zm0 0H256v-42.667h-42.667zm160-74.667l117.334 117.334l-96 96l-117.334-117.334v-96zm-32 42.667H320v21.333h21.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlcUserDataTypeIcon],svg[ix-plc-user-data-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v384h192v-42.667H106.667V106.667h170.666v144H320V64zm64 64h128v128H128zm42.667 42.667v42.666h42.666v-42.666zm0 96h42.666v42.666h-42.666zm0 85.333H128v-42.667h42.667zm42.666 0v42.667h-42.666V352zm0 0H256v-42.667h-42.667zM448 234.667h32v42.666h-32v-10.666h-21.333v42.666H448v-10.666h32v42.666h-32v-10.666h-42.667V304h-96v96h32v-26.667H384v-10.666h32v42.666h-32v-10.666h-21.333v42.666H384v-10.666h32v42.666h-32v-10.666h-42.667V432h-64V272h128v-26.667H448z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcUserDataTypeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlusIcon],svg[ix-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64v170.666H448v42.667H277.333V448h-42.666l-.001-170.667H64v-42.666l170.666-.001V64z"></svg:path>`,
})
export class IxPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPlusMinusTimesDivideIcon],svg[ix-plus-minus-times-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64H128v64H64v42.667h64v64h42.667v-64h64V128h-64zm23.922 234.667l30.17 30.17l-45.256 45.256l45.254 45.254l-30.17 30.17l-45.254-45.255l-45.254 45.255l-30.17-30.17l45.255-45.254l-45.256-45.257l30.17-30.17l45.255 45.255zM277.333 128H448v42.667H277.333zm85.334 192c11.782 0 21.333-9.55 21.333-21.333s-9.55-21.334-21.333-21.334s-21.334 9.551-21.334 21.334S350.884 320 362.667 320M448 384v-42.667H277.333V384zm-64 42.667c0 11.782-9.55 21.333-21.333 21.333s-21.334-9.55-21.334-21.333s9.551-21.334 21.334-21.334S384 414.884 384 426.667"></svg:path>`,
})
export class IxPlusMinusTimesDivideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPointUpIcon],svg[ix-point-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m234.666 64l-3.76.109c-33.596 1.946-60.24 29.807-60.24 63.891v143.765l-2.809-2.14c-26.063-18.603-62.112-16.832-86.273 5.316c-24.582 22.534-27.16 60.102-6.56 85.727l3.877 4.39l104.262 104.275h243.503v-196.71l-128-42.671V128c0-35.346-28.653-64-64-64m0 42.667c11.783 0 21.334 9.55 21.334 21.333v132.71l128 42.65v123.307H200.853l-91.68-91.691c-7.55-8.236-6.994-21.034 1.242-28.583c9.95-9.12 25.22-9.12 35.17 0l67.748 62.103V128c0-11.782 9.551-21.333 21.333-21.333"></svg:path>`,
})
export class IxPointUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPointUpFilledIcon],svg[ix-point-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M424.323 469.333V290.51l-143.06-47.686V111.686c0-26.336-21.35-47.686-47.686-47.686s-47.686 21.35-47.686 47.686v214.589l-35.765-32.785c-20.235-18.549-51.293-18.549-71.529 0c-18.912 17.336-20.19 46.721-2.854 65.634q.682.744 1.396 1.457l108.752 108.752z"></svg:path>`,
})
export class IxPointUpFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPolarPlotIcon],svg[ix-polar-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m261.333 21.333l.002 21.399c54.398 1.335 103.745 23.033 140.708 57.76l16.12-16.12l7.542 7.542l-16.072 16.072c34.666 35.974 56.815 84.093 59.438 137.346l21.595.001v21.333h-21.595c-2.575 52.288-23.974 99.625-57.563 135.377l14.197 14.198l-7.542 7.542l-14.15-14.149c-37.171 35.819-87.308 58.274-142.678 59.634l-.002 21.398h-10.667l-.001-21.398c-55.37-1.36-105.508-23.815-142.679-59.635l-14.15 14.15l-7.542-7.542l14.198-14.198c-34.727-36.963-56.425-86.31-57.76-140.708l-21.399-.002v-10.667l21.399-.001c1.359-55.37 23.815-105.508 59.634-142.679L86.294 91.914l7.543-7.542l16.12 16.12c36.963-34.727 86.31-56.425 140.708-57.76l.001-21.399zm-77.896 312.85l-45.274 45.274c29.438 28.106 68.913 45.79 112.503 47.128v-64.05c-25.92-1.276-49.408-11.805-67.229-28.353m77.897 28.352v64.05c43.59-1.339 83.064-19.022 112.502-47.128l-45.274-45.274c-17.821 16.547-41.308 27.076-67.228 28.352m-111.87-101.201h-64.05c1.31 42.619 18.243 81.304 45.266 110.521l45.31-45.31c-15.493-17.56-25.297-40.258-26.526-65.211m276.874 5.333H362.14c-2.27 22.85-11.748 43.578-26.13 59.877l45.31 45.31c25.891-27.993 42.52-64.678 45.018-105.187m-175.672.286l-52.13 52.132c13.936 12.702 32.098 20.849 52.13 22.084zm10.667.001v74.215c20.033-1.235 38.194-9.382 52.131-22.084zm-20.132-5.621h-70.37c1.175 19.068 8.613 36.441 20.281 50.09zm99.472 5.334l-64.542-.001l44.756 44.756c10.571-12.364 17.67-27.786 19.786-44.755m-255.258-16h64.049c1.276-25.92 11.805-49.408 28.353-67.229l-45.275-45.274c-28.106 29.438-45.789 68.913-47.127 112.503m85.415 0h74.216l-52.131-52.13c-12.703 13.936-20.85 32.098-22.085 52.13m208.627-112.503l-45.275 45.274c15.405 16.59 25.594 38.092 27.958 61.895h64.198c-2.558-41.472-19.926-78.937-46.881-107.17m-60.372 60.372l-46.798 46.797h68.386c-2.235-17.917-10.023-34.108-21.588-46.797m-118.508-7.423l50.089 50.089v-70.37c-19.067 1.175-36.44 8.613-50.089 20.281m60.757-20.282l-.001 70.37l50.09-50.088c-13.649-11.668-31.022-19.106-50.09-20.282m-121.19-40.15l45.311 45.31c17.559-15.494 40.258-25.297 65.212-26.526l-.001-64.05c-42.62 1.31-81.305 18.243-110.521 45.266m121.19-45.265v64.049c24.953 1.229 47.651 11.033 65.21 26.526l45.31-45.31c-29.217-27.023-67.902-43.957-110.52-45.265"></svg:path>`,
})
export class IxPolarPlotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPolarchartIcon],svg[ix-polarchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M215.746 89.955v-45.45l19.19-1.293c43.676-2.946 84.294 5.996 121.874 26.74c38.175 21.063 65.391 47.783 82.2 79.609l8.99 17.015l-35.015 24.114c12.11 25.618 18.267 54.118 18.267 85.542c0 35.428-7.82 67.128-23.193 95.204l-10.59 19.324l-18.205-11.823a18165 18165 0 0 0-39.756-25.809c-7.984 8.539-18.041 17.079-30.274 25.512c-15.762 10.828-33.229 18.159-52.44 21.889v68.802l-22.7-2.501c-31.012-3.432-57.447-11.4-79.388-23.605c-22.782-12.671-42.629-32.716-59.11-60.58l-10.263-17.397l53.425-36.763c-3.386-12.841-5.11-26.72-5.11-41.659c0-19.875 5.357-38.098 16.214-54.626c-14.182-8.794-26.435-16.231-36.718-22.355l-15.086-8.963l6.117-16.824c12.109-33.374 45.441-75.414 111.571-94.103m0 236.474l-73.847 50.834c9.564 12.374 20.278 21.994 32.264 28.648c12.13 6.738 26.005 11.76 41.583 15.129zm41.048-26.635v57.296c10.694-2.924 20.586-7.479 29.658-13.73c6.568-4.514 12.335-8.942 17.282-13.371a33231 33231 0 0 0-46.94-30.195m121.628-85.33l-85.34 58.737a21381 21381 0 0 1 88.337 57.064c5.89-16.592 8.784-34.603 8.784-54.033c0-22.461-3.879-43.079-11.781-61.768m-162.676 59.14a6464 6464 0 0 0-30.643-19.388c-6.876 9.81-10.406 20.659-10.406 32.61c0 5.637.308 11.04.964 16.274l40.085-27.61zm41.048-26.36l135.975-93.593c-13.321-18.011-31.834-33.374-55.314-46.32c-25.204-13.922-52.091-21.296-80.661-22.186zm-41.048-112.939c-32.675 11.569-53.713 30.343-65.371 48.905c17.713 10.764 39.489 24.325 65.371 40.663z" clip-rule="evenodd"></svg:path>`,
})
export class IxPolarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPolarchartFilledIcon],svg[ix-polarchart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.855 295.594v173.737c-71.667-6.693-118.935-32.948-155.642-85.038zm22.797-12.518l173.232-92.691q20.982 37.614 20.982 92.691t-29.68 95.724zm0 28.913l83.842 47.362c-18.899 20.571-52.505 35.992-83.834 41.318zm-123.98-69.33l74.651 41.756l-82.398 42.949a109.6 109.6 0 0 1-5.1-33.102c0-18.157 4.454-35.722 12.847-51.603M222.846 93.541v177.077L64 185.616c18.817-40.253 81.34-88.508 136.296-92.075zM448 148.97L245.652 258.734l.016-216.07c91.216 0 168.459 49.633 202.332 106.306" clip-rule="evenodd"></svg:path>`,
})
export class IxPolarchartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPolygonIcon],svg[ix-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 33.83v234.65l143.085 143.102L456.837 448H64V247.163L240.915 70.248zm-42.666 103.002l-128 128v140.501h247.146L240.915 292.418l-6.248-6.248z"></svg:path>`,
})
export class IxPolygonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPolygonFilledIcon],svg[ix-polygon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 33.83v234.65L456.837 448H64V247.163z"></svg:path>`,
})
export class IxPolygonFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPolygonLineIcon],svg[ix-polygon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 33.83v234.65l143.085 143.102L456.836 448H64v-42.667h289.813L240.915 292.418l-6.249-6.248V136.832L85.333 286.17L55.163 256l15.085-15.085L240.915 70.248z"></svg:path>`,
})
export class IxPolygonLineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPowerSupplyIcon],svg[ix-power-supply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 128V42.667h-42.666V128h-64v128c0 67.648 44.981 124.79 106.665 143.149l.001 70.184h85.333l.023-70.19C360.362 380.777 405.333 323.64 405.333 256V128h-64V42.667h-42.667V128zm64 106.667l25.817-64h-78.507L202.667 256h42.666l-32 106.667l117.333-128z" clip-rule="evenodd"></svg:path>`,
})
export class IxPowerSupplyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPptDocumentIcon],svg[ix-ppt-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.667H85.334v234.667H128v-192h174.294L384 167.04v110.294h42.667v-128zM139.042 375.301c-3.498 1.685-9.258 2.538-17.28 2.538h-8.298v-35.882h8.298c8.022 0 13.888 1.088 17.558 3.328c4.992 3.008 7.488 8.128 7.488 15.296c0 7.274-2.582 12.202-7.766 14.72m10.496-52.63c-6.464-1.621-15.829-2.432-28.117-2.432H85.325v128.128h28.864v-48.832h12.096c8.81 0 16-.682 21.568-2.026c5.59-1.344 10.325-3.606 14.25-6.742c9.046-7.232 13.569-17.642 13.569-31.19c0-8.32-1.899-15.594-5.718-21.802q-7.04-11.648-20.416-15.104m115.38 52.275c-3.5 1.686-9.26 2.54-17.28 2.54h-8.3v-35.884h8.3c8.02 0 13.888 1.088 17.557 3.328c4.992 3.008 7.488 8.128 7.488 15.296c0 7.275-2.581 12.203-7.765 14.72m10.496-52.629c-6.464-1.621-15.83-2.432-28.118-2.432H211.2v128.128h28.864v-48.832h12.096c8.81 0 16-.683 21.568-2.027c5.59-1.344 10.326-3.605 14.25-6.74c9.046-7.233 13.569-17.644 13.569-31.19c0-8.32-1.899-15.595-5.717-21.803q-7.041-11.648-20.416-15.104m44.586-2.08v22.613h37.056v105.515h28.864V342.85h37.61v-22.613z"></svg:path>`,
})
export class IxPptDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPrintIcon],svg[ix-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 192h-85.333V85.333H149.333V192H64v192h85.333v42.666h213.334V384H448zm-256-64h128v64H192zm0 256v-42.667h128V384zm213.333-42.667h-42.666v-42.667H149.333v42.667h-42.666V234.666h298.666z"></svg:path>`,
})
export class IxPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPrintFilledIcon],svg[ix-print-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 192h-85.333V85.333H149.333V192H64v192h85.333v42.666h213.334V384H448zm-256-64h128v64H192zm0 256v-64h128v64z"></svg:path>`,
})
export class IxPrintFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPrioHighIcon],svg[ix-prio-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 85.333h85.333v341.333H64zm149.333 0h85.334v341.333h-85.334zm149.334 0H448v341.333h-85.333z"></svg:path>`,
})
export class IxPrioHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPrioLowIcon],svg[ix-prio-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 85.333h85.333v341.333h-85.333z"></svg:path>`,
})
export class IxPrioLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPrioMiddleIcon],svg[ix-prio-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333v341.333H128zm170.667 0H384v341.333h-85.333z"></svg:path>`,
})
export class IxPrioMiddleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProcessControlIcon],svg[ix-process-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 448V64H64v384zM106.667 106.667h298.666v298.666H106.667zM192 149.333h-64V192h64zm32 0h64V192h-64zm160 0h-64V192h64zm-256 85.334h64v42.666h-64zm160 0h-64v42.666h64zm32 0h64v42.666h-64zM192 320h-64v42.667h64zm32 0h64v42.667h-64zm160 0h-64v42.667h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxProcessControlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProductIcon],svg[ix-product-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.347l192 110.851v221.703L256 477.752L64 366.901V145.198zm-64.001 206.918L192 391.536l42.667 24.635V265.899zM106.667 192v150.267l42.666 24.635V216.633zm233.324-59.894l-125.578 72.836L256 228.952l125.867-72.669zM256 83.614l-125.867 72.67l41.662 24.052l125.579-72.835z"></svg:path>`,
})
export class IxProductIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProductCatalogIcon],svg[ix-product-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m128.001 149.333l.001 42.666l-42.668.001v192H218.37l16.297 8.139V292.51l10.665 5.921l10.667 5.91l10.667-5.91l10.667-5.922v99.63L293.631 384h133.036V192l-42.668-.001l-.001-42.666h85.336v277.334H303.68L256 450.518l-47.7-23.851H42.667V149.333zM405.334 320v32H298.667v-32zm-192 0v32H106.667v-32zm192-64v32H298.667v-7.335l44.43-24.666zm-236.43-.001l44.429 24.666V288H106.668v-32zM256 41.6l106.667 59.26v118.52L256 278.642l-106.666-59.26V100.86zm-42.666 107.37v81.558l21.333 11.861v-81.557zm-42.667-23.7v81.557L192 218.688v-81.557zm128.768-35.137l-74.73 40.747l20.309 11.285l74.026-41.152zM256 66.005l-74.026 41.131l20.65 11.477l74.731-40.746z"></svg:path>`,
})
export class IxProductCatalogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProductManagementIcon],svg[ix-product-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M468.915 401.333q.345 1.631.406 3.295l.013.706v21.333c0 23.564-42.981 42.667-96 42.667c-52.49 0-95.14-18.723-95.987-41.961l-.013-.706v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.037 8.494 21.331 11.983c19.36 8.144 45.463 13.344 74.254 13.344c29.932 0 56.956-5.629 76.546-14.335c7.323-3.255 13.697-6.982 19.035-10.999M234.667 34.347l192 106.667l.001 78.722c-15.727-4.038-33.92-6.402-53.334-6.402c-29.239 0-55.704 5.375-75.228 14.052c-26.733 11.882-40.343 30.052-42.063 48.441l-.049.557l.122 172.713l-21.449 11.917l-192-106.667V141.014zm234.248 302.986q.345 1.631.406 3.295l.013.706v21.333c0 23.564-42.981 42.667-96 42.667c-52.49 0-95.14-18.723-95.987-41.961l-.013-.706v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.037 8.494 21.331 11.983c19.36 8.144 45.463 13.344 74.254 13.344c29.932 0 56.956-5.629 76.546-14.335c7.323-3.255 13.697-6.982 19.035-10.999M170.666 233.455l.001 144.598l42.667 23.704V257.158zm-85.332-47.406v144.594L128 354.348V209.752zm288 48.618c52.489 0 95.14 18.722 95.987 41.961l.013.706v21.333c0 23.564-42.981 42.667-96 42.667c-52.49 0-95.14-18.723-95.987-41.961l-.013-.706v-21.333l.142-2.341c2.734-22.476 44.606-40.326 95.858-40.326m-54.676-106.251l-125.579 70.086l41.588 23.104l125.867-69.926zm-83.991-46.662L108.8 151.68l41.662 23.146L276.04 104.74z"></svg:path>`,
})
export class IxProductManagementIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectIcon],svg[ix-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.347l192 110.851v221.703L256 477.752L64 366.901V145.198zM106.666 192.001v150.266l128 73.9V265.902zm298.667.001l-128 73.9v150.265l128-73.9zM256 83.614l-125.867 72.67L256 228.952l125.867-72.67z"></svg:path>`,
})
export class IxProjectIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectArrowDiagonalTopRightIcon],svg[ix-project-arrow-diagonal-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m243.07 65.728l34.263 14.684v46.42l-41.306-17.703l-107.695 61.54l116.919 66.811L256 243.623v146.285l106.667-60.952v-94.288h42.666v119.048l-10.749 6.143l-149.333 85.333l-10.584 6.048l-10.585-6.048l-149.333-85.333L64 353.716V158.289l10.749-6.142l149.333-85.333l9.224-5.271zm-29.737 324.18V268.383l-106.666-60.952v121.525zm106.666-283.24h55.163l-91.581 91.582l30.17 30.17l91.581-91.582v55.163h42.667v-128h-128z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectArrowDiagonalTopRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectArrowLeftIcon],svg[ix-project-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.522 145.779L234.595 42.666L42.667 145.779v206.227l191.928 103.113l21.325-11.466V256.915l127.952-71.437v68.467l42.65 43.246zM85.317 324.875V186.633l127.952 71.436v137.966zm29.067-169.651l120.211-66.852l119.165 66.296l-120.189 67.106zm254.532 128.359l30.17 30.169l-48.915 48.915h119.162v42.667H350.17l48.916 48.915l-30.17 30.17l-100.419-100.418z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectArrowRightIcon],svg[ix-project-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m378.699 283.633l100.419 100.418l-100.419 100.418l-30.17-30.169l48.877-48.915H278.281v-42.667h119.168l-48.92-48.915zM234.667 42.666l192 106.667v156.629L384 261.226v-70.827l-128 73.899v193.173l-21.333 11.862l-192-106.667V149.333zM85.333 191.594V334.6l128 73.613v-142.72zM234.667 89.947l-120.256 69.156l119.232 68.843l120.234-69.419z"></svg:path>`,
})
export class IxProjectArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectCloseIcon],svg[ix-project-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 42.668l192 106.667v119.162l-4.419-4.418l-38.248 38.248V190.401l-128 73.899v143.915l44.776-25.767l1.552 1.551l-59.583 59.583l13.669 13.669L256 469.335L64 362.668V149.335zM106.667 191.596v143.006l128 73.613v-142.72zM256 89.949l-120.256 69.156l119.232 68.843l120.235-69.419zm217.753 234.47l-59.58 59.58l59.582 59.583l-30.17 30.17l-59.582-59.583l-59.583 59.583l-30.17-30.17l59.583-59.583l-59.581-59.58l30.17-30.17l59.581 59.58l59.58-59.58z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectConfigurationIcon],svg[ix-project-configuration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 277.334v21.333h21.334v42.667H320v128h-21.333v-128h-21.333v-42.667h21.333v-21.333zm64 0V384h21.334v42.667H384v42.667h-21.333v-42.667h-21.333V384h21.333V277.334zm64 0V320h21.334v42.667H448v106.667h-21.333V362.667h-21.333V320h21.333v-42.666zM213.334 42.667l170.666 96V256h-42.667v-74.586l-106.666 61.584v122.687l21.333-12v8.982h21.334l-.001 28l-64 36l-170.666-96v-192zM85.333 182.58v123.127L192 365.689V244.164zm128-90.953l-101.42 57.031l100.41 57.972l101.392-58.539z"></svg:path>`,
})
export class IxProjectConfigurationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectDuplicateIcon],svg[ix-project-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 149.333l-192-106.667l-192 106.667v213.333l192 106.667L256 457.471V264.298l128-73.899v65.6h42.667zM85.333 334.6V191.594l128 73.899v142.72zm29.078-175.497l120.256-69.156l119.21 68.58l-120.234 69.419zm162.922 118.23h149.334v21.333h-128v128h-21.334zM320 319.999h149.333v149.334H320zm128 64v21.334h-42.667v42.666H384v-42.666h-42.667v-21.334H384v-42.666h21.333v42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectDuplicateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectHistoryIcon],svg[ix-project-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 149.333l-192-106.667l-192 106.667v213.333l192 106.667L256 457.471v-38.823l-42.667-42.667v32.232l-128-73.613V191.594l128 73.899v105.191l42.605-42.604l.062.062v-63.844l128-73.899v66.079a116.6 116.6 0 0 1 42.667 12.315zm-312.256 9.77l120.256-69.156l119.21 68.58l-120.234 69.419zm258.861 310.23c53.019 0 96-42.981 96-96c0-53.02-42.981-96-96-96c-53.02 0-96 42.98-96 96q0 3.254.213 6.456l-21.547-21.541l-15.085 15.085l47.085 47.085l47.085-47.085l-15.085-15.085l-21.095 21.09a76 76 0 0 1-.238-6.005c0-41.238 33.429-74.667 74.667-74.667s74.666 33.429 74.666 74.667s-33.429 74.666-74.666 74.666c-19.112 0-36.547-7.18-49.754-18.99l-14.887 15.301c17.059 15.545 39.743 25.023 64.641 25.023m10.727-149.334h-21.333v64h53.333v-21.333h-32z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectHistoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectNewIcon],svg[ix-project-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.347l192 110.851v132.135h-42.667v-85.331l-128 73.9v199.533L256 477.752L64 366.901V145.198zm149.333 264.32v64h64v42.667l-64-.001v64h-42.666l-.001-64h-64v-42.666h64v-64zM106.666 192.001v150.266l128 73.9V265.902zM256 83.614l-125.867 72.67L256 228.952l125.867-72.67z"></svg:path>`,
})
export class IxProjectNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectScenariosIcon],svg[ix-project-scenarios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m213.334 42.667l170.666 96V256h-42.667v-74.586l-106.667 61.584v122.687l21.334-12v48.982l-42.666 24l-170.667-96v-192zM85.333 182.58v123.127L192 365.689V244.164zm128-90.953l-101.42 57.031l100.41 57.972l101.392-58.538zm64 185.707H448V320H277.334Zm0 64H448V384H277.334Zm0 64H448V448H277.334Z"></svg:path>`,
})
export class IxProjectScenariosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectServerIcon],svg[ix-project-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 64h277.334v85.333H320v-42.666H85.333v192h192v42.666H224V384h32v42.667H149.333V384h32v-42.667H42.667V64zm192 95.549l-74.666-43.119L128 159.549v86.236l74.667 43.12l74.666-43.12zm-128 73.921v-50.228L192 207.867v50.243zm64 24.64v-50.243L256 183.242v50.228zm-10.666-117.045l41.854 24.171l-41.854 24.156l-41.855-24.156zm266.666 29.602V448H298.667V170.667zm-42.666 42.666h-85.334V256h85.334zm-85.334 192v-128h85.334v128zm64-85.333v42.667h-42.666V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectServerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectServerFilledIcon],svg[ix-project-server-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333h320v64h-85.334v192H224V384h32v42.667H149.333V384h32v-42.667H42.667zM256 170.266l-74.667-43.119l-74.666 43.119v86.236l74.666 43.12L256 256.502zm-128 73.921v-50.228l42.667 24.625v50.243zm64 24.64v-50.243l42.667-24.625v50.228zm-10.667-117.045l41.855 24.17l-41.855 24.156l-41.854-24.156zm288 296.218V170.667H298.667V448zm-128-234.667h85.334V256h-85.334zm0 64v128h85.334v-128zm21.334 85.334h42.666V320h-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectServerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectSettingsIcon],svg[ix-project-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 149.333l-192-106.667l-192 106.667v213.333l192 106.667L256 457.471V264.298l128-73.899v70.827l42.667 44.736zM85.333 334.6V191.594l128 73.899v142.72zm29.078-175.497l120.256-69.156l119.21 68.58l-120.234 69.419zm360.207 201.766l-18.962 10.948a85.4 85.4 0 0 1 3.093 22.849a85.4 85.4 0 0 1-3.093 22.849l18.962 10.948a106 106 0 0 1-7.782 17.728l-1.988 3.444a107 107 0 0 1-11.589 15.764l-18.957-10.945c-10.7 10.895-24.301 18.931-39.553 22.857v21.888a107 107 0 0 1-21.333 2.134c-7.306 0-14.44-.735-21.334-2.134v-21.888c-15.252-3.926-28.855-11.963-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.626-15.827l-1.911-3.31a106 106 0 0 1-7.82-17.8l18.961-10.947a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.948a106 106 0 0 1 7.822-17.802l1.908-3.304a107 107 0 0 1 11.627-15.83l18.956 10.944c10.7-10.896 24.303-18.933 39.555-22.859v-21.888a107 107 0 0 1 21.334-2.134c7.306 0 14.44.735 21.333 2.134v21.888c15.252 3.926 28.853 11.962 39.553 22.857l18.957-10.945a107 107 0 0 1 11.59 15.767l1.985 3.438a106 106 0 0 1 7.784 17.731m-69.201 33.797c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectSimulationIcon],svg[ix-project-simulation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M421.935 90.066c2.286 2.287 5.356 7.973 4.013 21.398c-1.323 13.221-6.731 30.687-16.845 51.505a306 306 0 0 1-3.77 7.492v42.31c39.823-61.993 54.037-115.44 31.687-137.79c-22.529-22.528-76.652-7.907-139.277 32.646l20.879 12.054c10.535-6.46 20.717-12.073 30.411-16.783c20.817-10.114 38.283-15.522 51.504-16.845c13.425-1.343 19.112 1.727 21.398 4.013M405.333 341.54v-42.31c39.823 61.993 54.037 115.44 31.687 137.79c-22.536 22.536-76.689 7.897-139.341-32.687l20.877-12.053c10.559 6.477 20.763 12.104 30.477 16.823c20.817 10.114 38.283 15.522 51.505 16.845c13.424 1.343 19.111-1.727 21.397-4.013c2.287-2.287 5.357-7.973 4.013-21.398c-1.322-13.221-6.73-30.687-16.845-51.505a306 306 0 0 0-3.77-7.492m-211.888 50.74l20.876 12.053c-62.651 40.584-116.804 55.223-139.34 32.687c-22.35-22.35-8.136-75.795 31.686-137.788v42.31a309 309 0 0 0-3.769 7.49c-10.114 20.818-15.522 38.284-16.845 51.505c-1.343 13.425 1.727 19.111 4.013 21.398c2.287 2.286 7.973 5.356 21.398 4.013c13.221-1.323 30.687-6.731 51.505-16.845c9.713-4.719 19.917-10.346 30.476-16.823M74.981 74.981c-22.35 22.35-8.136 75.795 31.686 137.788v-42.311a308 308 0 0 1-3.769-7.489c-10.114-20.818-15.522-38.284-16.845-51.505c-1.343-13.425 1.727-19.111 4.013-21.398c2.287-2.286 7.973-5.356 21.398-4.013c13.221 1.323 30.687 6.73 51.505 16.845c9.693 4.709 19.874 10.322 30.41 16.782l20.878-12.054C151.633 67.074 97.51 52.453 74.981 74.981M256 108.16l128 73.901v147.801l-128 73.901l-128-73.901V182.06zm85.333 123.132v73.937l-64 36.95v-73.937zm-106.666 36.95v73.937l-64-36.95v-73.937zM256 231.291l-63.969-36.933L256 157.426l63.969 36.932z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectSimulationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectsIcon],svg[ix-projects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 160.617l128-74l.043.025L256 62l-42.667-24.666L42.667 136v197.333L85.333 358zm87.581 23.701l104.419-60.367l104.43 60.373l-104.419 60.368zm-23.581 35.651V346.05L256 407.716v-126.08zm256 126.081l-106.667 61.666V281.649l106.667-61.667zm-128-271.383L448 173.333v197.334l-170.667 98.667l-170.666-98.667V173.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProjectsCloseIcon],svg[ix-projects-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m277.201 97.707l149.466 82.24v101.045l-42.666 42.666l-.039-.038v-88.531l-106.761 55.967l-106.762-55.947v85.448l106.74 58.739l11.402-6.291l23.472 22.601l-26.422 26.422l-8.43 4.639l-149.467-82.24v-164.48zM212.164 64l42.32 23.52l-147.779 81.848v165.53L64 311.152v-165.64zm65.037 81.057l-92.328 50.783l92.328 48.398l92.306-48.398zm196.552 179.36l-59.58 59.581l59.582 59.583l-30.17 30.17l-59.582-59.583l-59.583 59.583l-30.17-30.17l59.583-59.583l-59.581-59.581l30.17-30.17l59.581 59.581l59.58-59.581z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectsCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixProtocolIcon],svg[ix-protocol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 42.667v426.667H85.333V42.667zM384 85.334H128v341.333h256zM341.333 320v42.667H170.666V320zm0-85.333v42.667H170.666v-42.667zm0-85.333V192H170.666v-42.666z"></svg:path>`,
})
export class IxProtocolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPublishIcon],svg[ix-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 45.554L441.183 197.7l-29.033 31.266l-113.484-105.39v175.09c0 80.757-64.102 146.541-144.2 149.247l-5.133.087h-64v-42.667h64c57.36 0 104.145-45.276 106.568-102.04l.099-4.627l-.001-175.089l-113.483 105.389l-29.033-31.266z"></svg:path>`,
})
export class IxPublishIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixPublishDocumentIcon],svg[ix-publish-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m213.334 85.333l85.333 85.334v256h-256V85.333zM195.66 128H85.334v256H256V188.34zM384 33.83l89.75 89.752l-30.169 30.17l-38.249-38.239V256c0 45.7-35.924 83.01-81.074 85.229l-4.259.104v-42.666c22.493 0 40.921-17.406 42.55-39.483l.117-3.184l-.001-140.486l-38.247 38.238l-30.17-30.17z"></svg:path>`,
})
export class IxPublishDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixQrCodeIcon],svg[ix-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 213.334V448H213.333l.015-85.333h42.65l-.015 42.667H405.35V256H384v-.021h-21.322v-42.645zM106.667 362.667v42.683h64V448H64v-85.333zm256-64v64h-64v-64zM320 64v191.98h-42.667V106.667H106.667v170.667H256V320H64V64zm-85.333 85.334v85.333h-85.334v-85.333zm128-85.355L448 64v85.312l-42.654-.021v-42.645h-42.68z"></svg:path>`,
})
export class IxQrCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixQualityReportIcon],svg[ix-quality-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l85.333 85.334v256H42.667V182.113l42.666 49.777V384h341.334V181.333L373.333 128h-46.985l-34.34-42.667zM384 320v32H128v-32zM256 64l53.333 74.667l-138.666 160L32 138.667L85.333 64zm-20.664 192H384v32H234.667v-31.22zm-41.663-106.667H147.64l23.027 91.478zm-79.059 0H81.86l58.37 80.05zm144.839 0h-32.734l-25.611 80.033zm30.74 42.666L384 192v32H262.765zM137.214 96h-35.433l-22.853 32h36.953zm39.306 0h-11.745l-13.609 32h38.974zm63.01 0h-35.412l21.334 32h36.931z"></svg:path>`,
})
export class IxQualityReportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixQuestionIcon],svg[ix-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M334.434 206.171c0 13.516-3.435 25.318-10.288 35.397c-5.65 8.47-15.12 17.649-28.436 27.534c-7.664 5.247-12.711 10.184-15.126 14.823c-3.04 5.648-4.54 14.113-4.54 25.409h-42.666c0-17.137 1.824-29.64 5.454-37.504c4.23-9.483 13.407-19.064 27.521-28.743c6.664-5.045 11.503-10.183 14.529-15.425c3.625-5.852 5.449-12.503 5.449-19.966c0-11.899-3.539-20.766-10.594-26.624c-5.636-4.228-12.502-6.345-20.569-6.345c-13.108 0-22.59 4.339-28.436 13.009c-4.236 6.45-6.36 14.719-6.36 24.8v.304h-45.361c0-26.422 8.36-46.382 25.09-59.898c14.12-11.283 31.574-16.94 52.34-16.94c18.16 0 34.092 3.533 47.798 10.588c22.803 11.703 34.195 31.572 34.195 59.581m134.9 49.83c0 117.82-95.513 213.333-213.334 213.333c-117.82 0-213.333-95.513-213.333-213.334S138.18 42.667 256 42.667S469.334 138.179 469.334 256m-42.667 0c0-94.107-76.561-170.667-170.667-170.667S85.334 161.894 85.334 256S161.894 426.667 256 426.667S426.667 350.106 426.667 256m-170.668 69.333c-14.728 0-26.667 11.938-26.667 26.666s11.94 26.667 26.667 26.667s26.667-11.939 26.667-26.667s-11.94-26.666-26.667-26.666"></svg:path>`,
})
export class IxQuestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixQuestionFilledIcon],svg[ix-question-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.82 0 213.334 95.512 213.334 213.333c0 117.82-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334S138.18 42.667 256 42.667m0 282.667c-14.729 0-26.668 11.938-26.668 26.666s11.94 26.667 26.667 26.667s26.667-11.939 26.667-26.667s-11.94-26.666-26.667-26.666m-3.56-189.332c-20.765 0-38.218 5.657-52.338 16.94c-16.732 13.516-25.091 33.476-25.091 59.898h45.362v-.304c0-10.081 2.123-18.35 6.36-24.8c5.845-8.67 15.327-13.01 28.435-13.01c8.067 0 14.933 2.118 20.57 6.346c7.054 5.858 10.593 14.725 10.593 26.624c0 7.463-1.824 14.114-5.45 19.966c-3.025 5.242-7.864 10.38-14.528 15.425c-14.114 9.679-23.292 19.26-27.52 28.743c-3.631 7.864-5.455 20.367-5.455 37.504h42.665c0-11.296 1.501-19.76 4.54-25.41c2.416-4.638 7.463-9.575 15.127-14.822c13.315-9.885 22.785-19.064 28.436-27.534c6.853-10.08 10.288-21.881 10.288-35.397c0-28.01-11.392-47.878-34.195-59.58C286.533 139.534 270.6 136 252.44 136"></svg:path>`,
})
export class IxQuestionFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixQuestionMarkIcon],svg[ix-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M324.636 229.391c6.852-10.08 10.287-21.882 10.287-35.397c0-28.01-11.392-47.878-34.195-59.581c-13.706-7.055-29.638-10.589-47.798-10.589c-20.766 0-38.219 5.658-52.339 16.94c-16.732 13.516-25.091 33.477-25.091 59.899h45.362v-.305c0-10.081 2.124-18.35 6.359-24.799c5.847-8.671 15.329-13.009 28.437-13.009c8.066 0 14.932 2.117 20.569 6.345c7.054 5.858 10.593 14.725 10.593 26.623c0 7.464-1.824 14.115-5.449 19.966c-3.026 5.242-7.864 10.381-14.528 15.426c-14.115 9.678-23.292 19.259-27.521 28.742c-3.631 7.865-5.455 20.368-5.455 37.504h42.666c0-11.295 1.501-19.76 4.54-25.409c2.415-4.639 7.462-9.575 15.126-14.822c13.316-9.886 22.786-19.064 28.437-27.534M282.667 352c-.356-15.116-11.382-26.675-26.608-26.675c-15.362 0-27.073 11.628-26.718 26.675c-.355 15.116 11.356 26.676 26.718 26.676c15.268 0 26.252-11.56 26.608-26.676" clip-rule="evenodd"></svg:path>`,
})
export class IxQuestionMarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixQuoteIcon],svg[ix-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176.61 254.781q-43.886-9.752-43.886-51.2q0-24.076 14.629-39.01q14.934-15.237 39.01-15.238q24.075 0 38.4 14.934q14.628 14.933 14.628 39.619q0 57.905-84.114 158.781l-24.076-18.286q35.961-48.762 45.409-89.6m142.019 0q-43.885-9.752-43.885-51.2q0-24.076 14.628-39.01q14.934-15.237 39.01-15.238q23.77 0 38.4 14.934q14.628 14.933 14.628 39.619q0 58.818-84.114 158.781l-24.076-18.286q35.962-48.457 45.409-89.6"></svg:path>`,
})
export class IxQuoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRackIpcIcon],svg[ix-rack-ipc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 149.333v213.334H42.667V149.333zM106.667 192H85.333v128h21.334zm64 0h-21.334v128h21.334zm64 0h-21.334v128h21.334zm192 0H320v128h106.667z"></svg:path>`,
})
export class IxRackIpcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRackIpcFailIcon],svg[ix-rack-ipc-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-156.533H42.666v213.334l213.811.008c3.696-41.047 28.531-75.999 63.536-93.888L320 192h106.667l.008 76.798a117.9 117.9 0 0 1 42.667 37.068M85.333 192h21.334v128H85.333zm64 0h21.334v128h-21.334zm64 0h21.334v128h-21.334zm160 85.333c-53.019 0-96 42.981-96 96s42.981 96 96 96s96-42.981 96-96s-42.981-96-96-96m-18.855 96.001l-38.572-38.572l18.856-18.856l38.572 38.572l38.572-38.572l18.856 18.856l-38.572 38.572l38.572 38.572l-18.856 18.856l-38.572-38.572l-38.572 38.572l-18.856-18.856z" clip-rule="evenodd"></svg:path>`,
})
export class IxRackIpcFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRackIpcQuestionIcon],svg[ix-rack-ipc-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-156.533H42.666v213.334l213.811.008c3.696-41.047 28.531-75.999 63.536-93.888L320 192h106.667l.008 76.798a117.9 117.9 0 0 1 42.667 37.068M85.333 192h21.334v128H85.333zm64 0h21.334v128h-21.334zm64 0h21.334v128h-21.334zm64.008 182.704c0-53.019 42.98-96 96-96c53.019 0 96 42.981 96 96c0 53.02-42.981 96-96 96c-53.02 0-96-42.98-96-96m140.956-8.867c4.271-6.282 6.412-13.638 6.412-22.063c0-17.458-6.412-28.417-21.314-37.136q-12.814-6.599-29.793-6.6c-12.943 0-23.821 3.526-32.622 10.558c-10.429 8.425-15.639 22.684-15.639 37.335h28.274v-.19q.001-9.426 3.963-15.457q5.468-8.108 17.725-8.109c5.028 0 9.307 1.32 12.82 3.955c4.398 3.651 6.603 9.178 6.603 16.595c0 4.652-1.137 8.797-3.396 12.444c-1.886 3.268-4.902 6.47-9.056 9.615q-13.197 9.049-17.153 17.915c-2.263 4.902-3.4 12.695-3.4 23.377h26.593c0-7.041.936-12.317 2.83-15.838q2.26-4.335 9.428-9.239c8.3-6.161 14.202-11.882 17.725-17.162m-42.476 52.211c-9.18 0-16.621 7.442-16.621 16.621c0 9.18 7.441 16.622 16.621 16.622s16.622-7.442 16.622-16.622s-7.442-16.621-16.622-16.621" clip-rule="evenodd"></svg:path>`,
})
export class IxRackIpcQuestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRackIpcSuccessIcon],svg[ix-rack-ipc-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-156.533H42.666v213.334l213.811.008c3.696-41.047 28.531-75.999 63.536-93.888L320 192h106.667l.008 76.798a117.9 117.9 0 0 1 42.667 37.068M85.333 192h21.334v128H85.333zm64 0h21.334v128h-21.334zm64 0h21.334v128h-21.334zm160 85.333c-53.019 0-96 42.981-96 96s42.981 96 96 96s96-42.981 96-96s-42.981-96-96-96m62.763 62.763l-84.095 84.094l-41.428-41.428l18.856-18.856l22.572 22.572l65.238-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxRackIpcSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRadarchartIcon],svg[ix-radarchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 42.929v42.733c-89.288 5.506-160 79.664-160 170.338c0 94.257 76.41 170.667 170.667 170.667c40.065 0 76.905-13.805 106.023-36.918l28.587 31.763c-36.716 29.897-83.57 47.822-134.61 47.822c-117.82 0-213.333-95.513-213.333-213.334c0-114.244 89.801-207.513 202.666-213.071m188.106 94.597c22.673 33.89 35.895 74.638 35.895 118.474c0 59.107-24.038 112.6-62.87 151.235l-28.588-31.763c30.18-30.784 48.791-72.955 48.791-119.472c0-33.528-9.668-64.798-26.369-91.174zm-188.106-30.48v42.814c-53.902 5.352-96 50.83-96 106.14c0 58.91 47.757 106.667 106.667 106.667c23.6 0 45.409-7.664 63.075-20.638l28.65 31.834c-58.59 45.714-143.426 41.625-197.32-12.268c-58.318-58.318-58.318-152.871 0-211.19c26.445-26.444 60.34-40.897 94.928-43.359m138.36 71.46c34.468 56.694 27.762 131.382-20.12 181.073l-28.644-31.827c17.233-18.947 27.738-44.122 27.738-71.752c0-18.051-4.484-35.055-12.399-49.959zm-138.36-7.179v43.351c-18.402 4.737-32 21.442-32 41.322c0 23.564 19.103 42.667 42.667 42.667a42.5 42.5 0 0 0 19.714-4.817l29 32.222c-13.813 9.62-30.604 15.262-48.714 15.262c-47.128 0-85.333-38.205-85.333-85.334c0-43.515 32.572-79.423 74.666-84.673m88.039 48.633c5.109 10.949 7.962 23.161 7.962 36.04c0 21.332-7.827 40.835-20.766 55.795l-28.999-32.221A42.47 42.47 0 0 0 298.667 256c0-2.384-.196-4.723-.572-7c1.845-1.498 3.357-2.745 4.43-3.629zm-66.704-48.633a84.8 84.8 0 0 1 25.43 7.328l-25.416 30.87l-.015.017zm0-64.28c23.29 1.657 46.266 8.752 66.865 21.284l-27.524 33.428a106 106 0 0 0-39.34-11.899zm0-64.118c39.783 1.96 76.7 14.816 107.83 35.648l-27.29 33.146c-23.565-14.928-51.038-24.242-80.54-26.061zm137.88 59.954h-.001l.082.079a215 215 0 0 1 3.486 3.465l.306.312q.396.403.788.808l.062.065l.015.015l.055.057l.049.05l.627.651l.16.167l.221.233l-.166-.175l.855.9l.099.105l-.07-.074l.181.192l.16.17l.14.148l.556.595l.26.279l.168.183l-.41-.442q.606.651 1.207 1.307l.017.02l.312.34l.128.14l.46.507l-.588-.647a215 215 0 0 1 3.054 3.423l-.314-.358l.557.637l.23.266q.306.35.608.703l.08.093l.14.163l-.044-.05l.779.912l.092.11l.085.1l.052.062l-.106-.126l.23.273l-.124-.147l.125.147l.464.552l.245.293l.085.103l-.079-.095q.014.015.027.032l.052.063l.263.315l.483.584l-32.933 27.129l-.011-.015l-16.463 13.56l.014.017l-32.939 27.132l-.017-.022l-16.468 13.563l.02.024l-32.933 27.13l-.043-.053a43 43 0 0 0-2.66-2.934l.456.465a43 43 0 0 0-3.29-3.07l.351.297a43 43 0 0 0-.65-.547L391.622 91.318q.65.536 1.295 1.076l-1.283-1.067a214 214 0 0 1 5.58 4.764l.04.036l.142.126l.255.227l-.255-.228l.916.817q.613.549 1.221 1.102l.033.031l.186.169l.156.142q.418.382.834.766l.125.116l.111.103l-.161-.15q.499.462.995.927l.235.22l-.099-.092l.098.092l.204.191l.079.076l.308.29l.355.336l.267.255l.105.101l.038.036l.1.096l.199.19l.424.41l.181.173l.155.15z"></svg:path>`,
})
export class IxRadarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRadioWavesIcon],svg[ix-radio-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 256c0 23.563-19.102 42.667-42.667 42.667c-23.564 0-42.666-19.104-42.666-42.667s19.102-42.667 42.666-42.667c23.565 0 42.667 19.104 42.667 42.667m-128 0c0-29.583 15.072-55.622 37.936-70.932l-23.713-35.484C150.593 172.547 128 211.624 128 256s22.593 83.454 56.89 106.417l23.713-35.488c-22.864-15.309-37.936-41.346-37.936-70.93m170.667 0c0 29.583-15.072 55.62-37.937 70.929l23.714 35.488C361.408 339.454 384 300.375 384 256s-22.593-83.453-56.89-106.416l-23.714 35.484c22.865 15.31 37.937 41.349 37.937 70.932m33.185-177.36l-23.704 35.471c45.728 30.618 75.853 82.724 75.853 141.888s-30.125 111.27-75.853 141.888l23.704 35.47c57.158-38.267 94.816-103.4 94.816-177.357c0-73.955-37.656-139.088-94.816-177.359M137.483 433.359l23.703-35.469C115.457 367.27 85.334 315.164 85.334 256s30.123-111.27 75.852-141.89l-23.703-35.47C80.323 116.911 42.667 182.042 42.667 256s37.656 139.089 94.816 177.359"></svg:path>`,
})
export class IxRadioWavesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRadioWavesOffIcon],svg[ix-radio-waves-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.752 59.582l362.667 362.667l-30.17 30.17l-155.197-155.197A42.7 42.7 0 0 1 256 298.667c-23.564 0-42.666-19.104-42.666-42.667c0-3.822.502-7.527 1.445-11.052l-32.286-32.284c-7.512 12.698-11.826 27.51-11.826 43.336c0 29.287 14.772 55.1 37.253 70.467l.683.462l-23.713 35.488C150.593 339.454 128 300.376 128 256c0-27.647 8.77-53.237 23.675-74.155l-30.482-30.482C98.72 180.256 85.333 216.56 85.333 256c0 58.572 29.525 110.228 74.486 140.965l1.367.925l-23.703 35.47C80.323 395.09 42.667 329.958 42.667 256c0-51.23 18.069-98.225 48.173-134.99L59.582 89.751zm284.766 19.06c57.16 38.27 94.816 103.403 94.816 177.358c0 35.604-8.728 69.164-24.158 98.665l-32.022-32.02c8.7-20.473 13.513-42.995 13.513-66.645c0-58.572-29.525-110.227-74.486-140.962l-1.367-.925zm-47.407 70.942C361.408 172.547 384 211.624 384 256a128 128 0 0 1-4.338 33.153l-38.494-38.494c-1.674-27.069-15.984-50.7-37.089-65.128l-.683-.463z"></svg:path>`,
})
export class IxRadioWavesOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRadioWavesWarningIcon],svg[ix-radio-waves-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.847 272.366a20.74 20.74 0 0 1 7.718 7.718l88.704 155.232c5.683 9.946 2.228 22.615-7.718 28.299a20.74 20.74 0 0 1-10.29 2.732H263.852c-11.455 0-20.74-9.286-20.74-20.74c0-3.61.941-7.157 2.732-10.29l88.705-155.233c5.683-9.946 18.352-13.401 28.298-7.718M137.483 78.64l23.703 35.469C115.457 144.73 85.334 196.836 85.334 256s30.123 111.27 75.852 141.89l-23.703 35.469c-57.16-38.27-94.816-103.4-94.816-177.36c0-73.957 37.656-139.087 94.816-177.358M352 401.851c-7.407 0-12.963 5.476-12.963 12.777c0 7.633 5.388 13.108 12.963 13.108c7.408 0 12.963-5.475 12.963-12.942s-5.555-12.942-12.963-12.942M362.667 320h-21.333v64h21.333zM184.89 149.584l23.713 35.484c-22.864 15.31-37.936 41.349-37.936 70.932s15.072 55.62 37.936 70.929l-23.713 35.488C150.593 339.454 128 300.375 128 256s22.593-83.453 56.89-106.416M374.518 78.64c57.16 38.27 94.816 103.404 94.816 177.359c0 38.305-10.102 74.243-27.784 105.307l-25.798-45.146c7.055-18.708 10.915-38.982 10.915-60.161c0-59.164-30.125-111.27-75.853-141.888zM256 213.333c23.552 0 42.667 19.104 42.667 42.667S279.552 298.667 256 298.667S213.334 279.563 213.334 256s19.114-42.667 42.666-42.667m71.11-63.75C361.409 172.548 384 211.625 384 256q0 3.142-.15 6.249a42.1 42.1 0 0 0-10.419-8.406c-10.087-5.764-21.557-6.894-31.945-4.06l-.369.102c-1.916-27.036-16.445-50.571-37.72-64.817z"></svg:path>`,
})
export class IxRadioWavesWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRandomIcon],svg[ix-random-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M465.023 135.32L376.68 465.023L46.977 376.68L135.32 46.977zm-52.256 30.17L165.49 99.233L99.233 346.51l247.277 66.257zM317.08 316.538c17.07 4.574 27.201 22.121 22.627 39.192c-4.574 17.07-22.121 27.201-39.192 22.627c-17.07-4.574-27.201-22.12-22.627-39.192c4.574-17.07 22.12-27.201 39.192-22.627m-52.798-91.448c17.071 4.575 27.202 22.121 22.628 39.192s-22.121 27.202-39.192 22.628s-27.202-22.121-22.628-39.192s22.121-27.202 39.192-22.628m-52.797-91.447c17.07 4.574 27.201 22.12 22.627 39.192c-4.574 17.07-22.12 27.201-39.192 22.627c-17.07-4.574-27.201-22.12-22.627-39.192c4.574-17.07 22.121-27.201 39.192-22.627"></svg:path>`,
})
export class IxRandomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRandomFilledIcon],svg[ix-random-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M465.023 135.32L376.68 465.023L46.977 376.68L135.32 46.977zM317.08 316.538c-17.071-4.574-34.618 5.557-39.192 22.627c-4.574 17.071 5.556 34.618 22.627 39.192s34.618-5.556 39.192-22.627s-5.557-34.618-22.627-39.192m-52.798-91.448c-17.07-4.574-34.617 5.557-39.192 22.628c-4.574 17.07 5.557 34.618 22.628 39.192s34.617-5.557 39.192-22.628c4.574-17.07-5.557-34.617-22.628-39.192m-52.797-91.447c-17.071-4.574-34.618 5.556-39.192 22.627s5.557 34.618 22.627 39.192c17.071 4.574 34.618-5.556 39.192-22.627s-5.556-34.618-22.627-39.192"></svg:path>`,
})
export class IxRandomFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRebootIcon],svg[ix-reboot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 264.876v50.087c-13.093 11.72-21.333 28.75-21.333 47.704c0 35.346 28.653 64 64 64c35.346 0 64-28.654 64-64c0-18.954-8.24-35.984-21.332-47.703v-50.088c37.672 16.46 63.998 54.051 63.998 97.79c0 58.911-47.756 106.667-106.666 106.667S256 421.577 256 362.667c0-43.74 26.327-81.331 64-97.791M213.333 64v149.333h-42.666l-.003-79.898c-38.686 26.986-63.997 71.82-63.997 122.565c0 77.656 59.274 141.468 135.046 148.657c5.564 16.03 14.225 30.611 25.27 43.034Q261.53 448 256 448c-106.039 0-192-85.961-192-192c0-60.316 27.813-114.136 71.313-149.335L64 106.667V64zM384 234.667v128h-42.667v-128zM279.818 65.463C374.618 77.193 448 158.026 448 256q0 5.53-.314 10.98c-12.418-11.042-27-19.703-43.027-25.266c-6.61-69.652-61.063-125.364-130.134-133.91Z"></svg:path>`,
})
export class IxRebootIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRecordIcon],svg[ix-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 107.836c82.475 0 149.333 66.859 149.333 149.333S338.475 406.503 256 406.503s-149.333-66.859-149.333-149.334c0-82.474 66.858-149.333 149.333-149.333m0 42.667c-58.91 0-106.667 47.756-106.667 106.666c0 58.911 47.757 106.667 106.667 106.667s106.667-47.756 106.667-106.667c0-58.91-47.757-106.666-106.667-106.666" clip-rule="evenodd"></svg:path>`,
})
export class IxRecordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRecordFilledIcon],svg[ix-record-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 107.836c82.475 0 149.333 66.859 149.333 149.333S338.475 406.503 256 406.503s-149.333-66.859-149.333-149.334c0-82.474 66.858-149.333 149.333-149.333" clip-rule="evenodd"></svg:path>`,
})
export class IxRecordFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRectangleIcon],svg[ix-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667zm-42.667 42.667H85.334v213.333h341.333z"></svg:path>`,
})
export class IxRectangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRectangleFilledIcon],svg[ix-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667z"></svg:path>`,
})
export class IxRectangleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRedditLogoIcon],svg[ix-reddit-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M295.822 315.556c1.6 1.422 1.6 3.911 0 5.511c-8.355 8.178-21.155 12.266-39.644 12.266s-31.467-4.088-39.645-12.266c-1.6-1.422-1.6-3.911 0-5.511c1.423-1.423 3.912-1.423 5.512 0c6.755 6.755 17.955 9.955 34.133 9.955s27.378-3.2 34.133-9.955c1.6-1.423 3.911-1.423 5.511 0m-61.155-43.023a16.313 16.313 0 0 0-16.356-16.355a16.31 16.31 0 0 0-16.355 16.355a16.313 16.313 0 0 0 16.355 16.356a16.313 16.313 0 0 0 16.356-16.356M469.333 256c0 117.867-95.466 213.333-213.333 213.333S42.667 373.867 42.667 256S138.133 42.667 256 42.667S469.333 138.133 469.333 256m-88.888-2.311c0-15.111-12.267-27.378-27.556-27.378c-7.467 0-14.222 3.022-19.022 7.822c-18.845-12.266-44.089-20.266-72.356-21.155l15.289-48.356l41.6 9.778v.533c0 12.445 10.133 22.4 22.4 22.4s22.578-10.133 22.578-22.4s-10.133-22.4-22.578-22.4c-9.6 0-17.6 6.045-20.978 14.223l-44.977-10.489c-1.956-.534-3.912.711-4.623 2.489L252.978 212.8c-29.511.356-56 8.356-75.733 20.978c-4.978-4.622-11.378-7.289-18.667-7.289c-15.111 0-27.556 12.267-27.556 27.378c0 10.133 5.511 18.844 13.689 23.466c-.533 2.845-.889 5.867-.889 8.889c0 40.534 49.778 73.6 111.111 73.6s111.112-33.066 111.112-73.6c0-2.844-.356-5.689-.712-8.355c8.712-4.622 14.578-13.689 14.578-24zm-86.578 2.489a16.313 16.313 0 0 0-16.356 16.355a16.313 16.313 0 0 0 16.356 16.356a16.313 16.313 0 0 0 16.355-16.356a16.31 16.31 0 0 0-16.355-16.355"></svg:path>`,
})
export class IxRedditLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRedoIcon],svg[ix-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M345.752 80.915L456.837 192L345.752 303.085l-30.17-30.17l59.527-59.541H202.646c-52.917 0-95.98 43.063-95.98 95.98s43.063 95.98 95.98 95.98h74.896V448h-74.896C126.188 448 64 385.812 64 309.354s62.188-138.646 138.646-138.646h172.547l-59.611-59.623z"></svg:path>`,
})
export class IxRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReferenceIcon],svg[ix-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M106.667 85.333V128c0 80.756 64.102 146.54 144.2 149.246l5.133.087h149.333V320H256c-104.145 0-188.924-82.919-191.918-186.34L64 128.001V85.333z"></svg:path><svg:path fill-rule="nonzero" d="m315.582 217.751l30.17-30.17l111.085 111.085l-111.085 111.085l-30.17-30.17l80.898-80.915z"></svg:path></svg:g>`,
})
export class IxReferenceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointBottomLeftIcon],svg[ix-reference-point-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 192V64H320v42.667h85.333V192zm-341.333 0v-85.333H192V64H64v128zM448 448V320h-42.667v85.333H320V448zm-256 0V320H64v128zm-42.667-42.667h-42.666v-42.666h42.666z"></svg:path>`,
})
export class IxReferencePointBottomLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointBottomRightIcon],svg[ix-reference-point-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 192V64H320v42.667h85.333V192zm-341.333 0v-85.333H192V64H64v128zM64 448V320h42.667v85.333H192V448zm384 0V320H320v128zm-42.667-42.667h-42.666v-42.666h42.666z"></svg:path>`,
})
export class IxReferencePointBottomRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointCenteredIcon],svg[ix-reference-point-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 320v128H320v-42.667h85.333V320zm-341.333 0v85.333H192V448H64V320zM320 192v128H192V192zm-42.667 42.667h-42.666v42.666h42.666zM448 64v128h-42.667v-85.333H320V64zm-256 0v42.667h-85.333V192H64V64z"></svg:path>`,
})
export class IxReferencePointCenteredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointTopLeftIcon],svg[ix-reference-point-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 320v128H320v-42.667h85.333V320zm-341.333 0v85.333H192V448H64V320zM448 64v128h-42.667v-85.333H320V64zm-256 0v128H64V64zm-42.667 42.667h-42.666v42.666h42.666z"></svg:path>`,
})
export class IxReferencePointTopLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointTopRightIcon],svg[ix-reference-point-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 320v128H320v-42.667h85.333V320zm-341.333 0v85.333H192V448H64V320zM64 64v128h42.667v-85.333H192V64zm384 0v128H320V64zm-42.667 42.667h-42.666v42.666h42.666z"></svg:path>`,
})
export class IxReferencePointTopRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRefreshIcon],svg[ix-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m404.195 274.526l42.342 5.292C434.807 374.618 353.974 448 256 448c-60.316 0-114.136-27.813-149.335-71.313l.002 71.313H64V298.667h149.333v42.666l-79.887.019c26.987 38.677 71.816 63.981 122.554 63.981c76.201 0 139.072-57.074 148.195-130.807M448 64v149.333H298.667v-42.666l79.898-.003c-26.986-38.686-71.82-63.997-122.565-63.997c-76.202 0-139.073 57.075-148.196 130.808l-42.341-5.292C77.192 137.383 158.026 64 256 64c60.316 0 114.136 27.813 149.335 71.313L405.333 64z"></svg:path>`,
})
export class IxRefreshIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRefreshArrowDownIcon],svg[ix-refresh-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m446.537 279.817l-42.341-5.293C395.073 348.258 332.202 405.333 256 405.333c-50.74 0-95.569-25.305-122.556-63.984l69.223-.016L160 298.667H64V448h42.667v-71.31C141.866 420.188 195.685 448 256 448c97.974 0 178.808-73.383 190.537-168.183m-47.388-66.484h-47.15l-42.666-42.666h69.234c-26.986-38.688-71.82-64-122.567-64c-76.202 0-139.073 57.075-148.196 130.809l-42.341-5.293C77.192 137.383 158.026 64 256 64c60.315 0 114.134 27.812 149.333 71.31V64H448v149.333zm-164.481-42.666v97.83l-43.581-43.582l-30.17 30.17l95.085 95.085l95.085-95.085l-30.17-30.17l-43.582 43.582v-97.83z" clip-rule="evenodd"></svg:path>`,
})
export class IxRefreshArrowDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRefreshCancelledIcon],svg[ix-refresh-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.752 59.582l362.667 362.667l-30.17 30.17l-46.405-46.405C342.998 432.29 301.334 448 256 448c-60.316 0-114.136-27.812-149.335-71.312l.002 71.312H64V298.667h149.334v42.667l-79.887.018c26.987 38.677 71.815 63.982 122.553 63.982c33.543 0 64.503-11.06 89.433-29.73L136.398 166.567c-15.18 20.268-25.328 44.521-28.593 70.908l-42.342-5.292c4.462-36.062 18.923-69.024 40.524-96.027L59.582 89.752zm314.444 214.944l42.341 5.292a190.7 190.7 0 0 1-17.248 58.96l-32.596-32.597a148.4 148.4 0 0 0 7.503-31.655M448 64v149.334H298.667v-42.667l79.898-.003c-26.986-38.686-71.82-63.997-122.565-63.997c-17.605 0-34.499 3.046-50.182 8.641L173.22 82.712C198.286 70.717 226.359 64 256 64c60.315 0 114.136 27.813 149.335 71.313L405.334 64z"></svg:path>`,
})
export class IxRefreshCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRefreshExclamationIcon],svg[ix-refresh-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m404.195 274.525l42.342 5.293C434.808 374.617 353.974 448 256 448c-63.911 0-120.529-31.227-155.429-79.256v57.923H64v-128h128v36.571l-62.593.013c26.409 42.095 73.232 70.082 126.592 70.082c76.202 0 139.073-57.075 148.196-130.808m-5.046-61.191h44.094l-.001-.001H448v-128h-36.571v57.923C376.529 95.227 319.911 64 256 64c-97.974 0-178.808 73.383-190.537 168.183l42.34 5.293c9.123-73.734 71.994-130.81 148.196-130.81c53.366 0 100.194 27.993 126.601 70.096H320v36.571h79.149zm-158.516 63.999h30.734l2.139-106.666h-35.012zm30.621 25.535q-5.966-6.391-15.198-6.391q-9.23 0-15.31 6.391q-6.08 6.273-6.079 15.741q0 9.942 5.966 16.333t15.423 6.391q9.232 0 15.198-6.391q6.08-6.39 6.079-15.978q0-9.823-6.079-16.096" clip-rule="evenodd"></svg:path>`,
})
export class IxRefreshExclamationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRefreshSettingsIcon],svg[ix-refresh-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M133.445 341.349c23.77 34.07 61.384 57.763 104.687 62.926a137.9 137.9 0 0 0 18.333 43.724L256 448c-60.315 0-114.134-27.812-149.333-71.31V448H64V298.667h149.333v42.666zm165.222-128.016H448V64h-42.667v71.31C370.134 91.812 316.315 64 256 64c-97.974 0-178.808 73.383-190.537 168.183l42.341 5.293c9.123-73.734 71.994-130.809 148.196-130.809c50.747 0 95.581 25.312 122.567 64h-79.9zm175.951 126.203l-18.963 10.948a85.4 85.4 0 0 1 3.094 22.849a85.4 85.4 0 0 1-3.094 22.85l18.963 10.948a106 106 0 0 1-7.781 17.724l-1.992 3.45a107 107 0 0 1-11.586 15.761l-18.957-10.944c-10.7 10.895-24.301 18.931-39.553 22.856v21.888A107 107 0 0 1 373.416 480c-7.306 0-14.44-.735-21.334-2.134v-21.888c-15.252-3.926-28.855-11.962-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.628-15.831l-1.906-3.302a106 106 0 0 1-7.823-17.803l18.961-10.948a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.947a106 106 0 0 1 7.824-17.806l1.904-3.297a107 107 0 0 1 11.629-15.834l18.956 10.944c10.7-10.896 24.303-18.933 39.555-22.859v-21.887a107 107 0 0 1 21.334-2.134c7.306 0 14.44.734 21.333 2.133v21.888c15.252 3.926 28.853 11.962 39.553 22.857l18.957-10.945a107 107 0 0 1 11.588 15.763l1.989 3.446a106 106 0 0 1 7.782 17.727m-69.201 33.797c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxRefreshSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReloadIcon],svg[ix-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 213.333v-42.666l79.898-.003c-26.986-38.686-71.82-63.997-122.565-63.997c-82.475 0-149.333 66.858-149.333 149.333S173.525 405.333 256 405.333c76.201 0 139.072-57.074 148.195-130.807l42.342 5.292C434.807 374.618 353.974 448 256 448c-106.039 0-192-85.961-192-192S149.961 64 256 64c60.316 0 114.136 27.813 149.335 71.313L405.333 64H448v149.333z"></svg:path>`,
})
export class IxReloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRemoteAccessIcon],svg[ix-remote-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.327H42.667v192h106.666v21.334H128v21.333h64v-85.333H85.333V127.994H256v85.333h42.667v-128zm148.04 149.334H213.333v192H320v21.333h-21.333v21.333H384v-21.333h-21.333v-21.333h106.666v-192h-62.698l74.014-74.017l-22.628-22.627l-36.684 36.686l-.001-30.707c-.001-32.401-26.266-58.666-58.667-58.666h-42.667v32h42.667c14.728 0 26.667 11.939 26.667 26.666l.001 30.707l-36.688-36.687l-22.628 22.628zM256 383.994h170.667V277.327H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxRemoteAccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRemoveApplicationIcon],svg[ix-remove-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M394.667 277.333v21.334H448v42.666h-21.333v128h-128v-128h-21.334v-42.666h53.334v-21.334zm-48 74.667h-21.334v74.667h21.334zM400 352h-21.333v74.667H400z"></svg:path><svg:path fill-rule="nonzero" d="M234.667 64v170.667H64V64zM192 106.667h-85.333V192H192zm42.667 170.666V448H64V277.333zM192 320h-85.333v85.333H192zM448 64v170.667H277.333V64zm-42.667 42.667H320V192h85.333z"></svg:path></svg:g>`,
})
export class IxRemoveApplicationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRemoveCircleIcon],svg[ix-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 427.84c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666S85.333 162.917 85.333 257.173c0 94.257 76.41 170.667 170.667 170.667m0 42.667c-117.821 0-213.333-95.513-213.333-213.334S138.179 43.84 256 43.84s213.333 95.512 213.333 213.333S373.821 470.507 256 470.507m-106.667-192V235.84h213.334v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxRemoveCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRemoveCircleFilledIcon],svg[ix-remove-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 470.507c-117.821 0-213.333-95.513-213.333-213.334S138.179 43.84 256 43.84s213.333 95.512 213.333 213.333S373.821 470.507 256 470.507m-106.667-192V235.84h213.334v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxRemoveCircleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRemoveEyeIcon],svg[ix-remove-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333C405.334 85.333 469.334 256 469.334 256s-21.838 58.234-69.765 106.668l-68.222.002c49-29.274 79.256-81.165 91.267-106.67c-17.28-36.694-72.32-128-166.614-128c-94.293 0-149.333 91.306-166.613 128c17.28 36.693 72.32 128 166.613 128c15.247 0 29.468-2.388 42.668-6.545v44.338c-13.366 3.131-27.581 4.873-42.668 4.873C106.667 426.666 42.667 256 42.667 256S106.667 85.333 256 85.333M490.667 384v42.666H320V384zM256 181.333c41.238 0 74.667 33.43 74.667 74.667s-33.43 74.666-74.667 74.666s-74.666-33.43-74.666-74.666c0-41.238 33.43-74.667 74.666-74.667M256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxRemoveEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRemoveEyeFilledIcon],svg[ix-remove-eye-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333C405.334 85.333 469.334 256 469.334 256s-21.838 58.234-69.765 106.668l-100.902-.002l.002 59.127c-13.367 3.131-27.582 4.873-42.669 4.873C106.667 426.666 42.667 256 42.667 256S106.667 85.333 256 85.333M490.667 384v42.666H320V384zM256 181.333c-41.237 0-74.666 33.43-74.666 74.667s33.43 74.666 74.666 74.666c41.238 0 74.667-33.43 74.667-74.666c0-41.238-33.43-74.667-74.667-74.667M256 224c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class IxRemoveEyeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRenameIcon],svg[ix-rename-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 64v21.333h-42.667v341.333h42.667V448l-42.667-.001V448h-21.333l-.001-.001l-42.666.001v-21.333l42.666-.001V85.333h-42.666V64zm64 64v256H384v-42.667h42.667V170.667H384V128zM320 128v256H42.667V128zm-98.133 25.6H192v145.067c0 13.333-.833 21.666-1.458 29.687l-.082 1.068l-.079 1.067c-.296 4.09-.514 8.207-.514 12.978h29.867v-19.2a42.67 42.67 0 0 0 38.4 21.333a45.65 45.65 0 0 0 36.266-17.067a99.63 99.63 0 0 0 19.2-53.333c0-40.533-21.333-68.267-53.333-68.267a48.43 48.43 0 0 0-38.4 19.2zm-59.733 72.533a54.61 54.61 0 0 0-44.8-17.066a102.2 102.2 0 0 0-49.067 10.666l8.533 21.334a96.2 96.2 0 0 1 36.267-10.667a27.093 27.093 0 0 1 29.867 29.867v2.133H121.6a89.2 89.2 0 0 0-38.4 6.4a35.63 35.63 0 0 0-21.333 36.267a38.187 38.187 0 0 0 42.667 38.4a50.35 50.35 0 0 0 40.533-17.067v14.933H172.8a172.4 172.4 0 0 1-2.133-34.133v-38.4a66.77 66.77 0 0 0-8.533-42.667m-21.334 51.2v25.6a37.12 37.12 0 0 1-29.866 19.2a17.92 17.92 0 0 1-19.2-19.2c0-14.933 10.666-23.466 36.266-25.6zM251.734 230.4c17.066 0 29.866 17.067 29.866 44.8S270.934 320 253.867 320a35.84 35.84 0 0 1-32-21.333v-46.934a40.32 40.32 0 0 1 29.867-21.333"></svg:path>`,
})
export class IxRenameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReorderIcon],svg[ix-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m443.582 196.295l30.169-30.17L384 76.373l-89.751 89.752l30.169 30.17l38.249-38.249V353.92l-38.249-38.249l-30.169 30.17L384 435.592l89.751-89.751l-30.169-30.17l-38.249 38.249V158.046zM42.667 149.333h234.666v-42.666H42.666zm192 85.334h-192V192h192zM42.667 320H192v-42.667H42.666zm106.666 85.333H42.667v-42.666h106.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxReorderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReplaceIcon],svg[ix-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M160 85.333c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m-32.002 76.497l94.17 94.17l-30.17 30.17l-42.671-42.671l.004 97.834c0 35.347 28.654 64 64 64h85.334V448h-85.334c-58.91 0-106.666-47.756-106.666-106.667l-.005-97.834l-42.662 42.671L33.828 256zM298.665 64c58.91 0 106.666 47.756 106.666 106.667l-.004 97.792l42.671-42.629l30.17 30.17l-94.17 94.17l-94.17-94.17l30.17-30.17a61237 61237 0 0 0 42.662 42.629l.005-97.792c0-35.347-28.654-64-64-64h-85.334V64zM384 458.667c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxReplaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReportBarchartIcon],svg[ix-report-barchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l85.334 85.333v256H42.667V85.333zM373.334 128h-288v256h341.333V181.333zm-224 42.666L149.333 320H384v21.334H128V170.666zm64 64v64h-42.667v-64zm64-42.666v106.666h-42.667V192zm64 64v42.666h-42.667V256z"></svg:path>`,
})
export class IxReportBarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReportGeneralIcon],svg[ix-report-general-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.336l85.333 85.333v256H42.667V85.336zm-10.667 42.667h-288v256h341.334V181.336zM256 277.336h-42.667v64H256zm21.333-42.667H320v106.667h-42.667zm106.667 64h-42.667v42.667H384zm-234.667 0H192v42.667h-42.667zm106.667-128H128v42.667h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxReportGeneralIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReportLinechartIcon],svg[ix-report-linechart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l85.334 85.333v256H42.667V85.333zM373.334 128h-288v256h341.333V181.333zm-224 42.666v132.258l61.057-76.321l65.215 32.597l47.925-43.129l14.272 15.857l-58.737 52.863l-62.81-31.394l-53.265 66.602h221.01v21.334H128V170.666z"></svg:path>`,
})
export class IxReportLinechartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixReportTextIcon],svg[ix-report-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l85.334 85.333v256H42.667V85.333zM373.334 128h-288v256h341.333V181.333zM192 320v32h-64v-32zm192 0v32H234.667v-32zm-192-64v32h-64v-32zm192 0v32H234.667v-32zm-192-64v32h-64v-32zm192 0v32H234.667v-32z"></svg:path>`,
})
export class IxReportTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixResetIcon],svg[ix-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 106.667v42.666L358 149.33c36.077 31.659 58.188 77.991 58.146 128.474c-.065 78.179-53.242 146.318-129.062 165.376s-154.896-15.838-191.92-84.695C58.141 289.63 72.637 204.42 130.347 151.68a85.33 85.33 0 0 0 33.28 30.507a124.59 124.59 0 0 0-46.294 97.066c1.05 69.942 58.051 126.088 128 126.08c64.072 1.056 118.71-46.195 126.906-109.749c6.124-47.483-15.135-92.74-52.236-118.947L320 256h-42.667V106.667zM202.667 64c23.564 0 42.666 19.103 42.666 42.667s-19.102 42.666-42.666 42.666S160 130.231 160 106.667S179.103 64 202.667 64"></svg:path>`,
})
export class IxResetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRestoreIcon],svg[ix-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 448c-97.974 0-178.808-73.383-190.537-168.183l42.341-5.293c9.123 73.734 71.994 130.809 148.196 130.809c82.475 0 149.333-66.858 149.333-149.333S338.475 106.667 256 106.667c-50.747 0-95.581 25.312-122.567 64h79.9v42.666H64V64h42.667v71.31C141.866 91.812 195.685 64 256 64c106.039 0 192 85.961 192 192s-85.961 192-192 192" clip-rule="evenodd"></svg:path>`,
})
export class IxRestoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRestoreBackupIcon],svg[ix-restore-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M160 168.296c64.802 0 117.334 29.715 117.334 66.37q0 1.34-.093 2.665l.028-.294h.065v165.926c0 36.655-52.532 66.37-117.334 66.37c-63.361 0-114.992-28.409-117.256-63.937l-.077-2.433V237.037h.073a38 38 0 0 1-.073-2.37c0-36.656 52.532-66.37 117.333-66.37m0 218.074c-28.365 0-54.38-5.693-74.667-15.17v22.316l.018 1.197c.684 12.202 32.466 31.954 74.657 31.954c23.075 0 44.362-5.79 59.26-15.367c10.256-6.594 14.782-12.874 15.34-16.01l.059-.623V371.2c-20.286 9.478-46.3 15.171-74.667 15.171m0-85.333c-28.361 0-54.373-5.692-74.658-15.167l-.002 35.906l1.446-.009c1.73 1.73 5.179 4.59 11.254 8.027c15.143 8.566 37.48 13.91 61.96 13.91s46.818-5.344 61.96-13.91c7.501-4.243 11-7.609 12.2-9.05l.507-.004l.003-34.875c-20.287 9.478-46.303 15.172-74.67 15.172m0-90.074c-41.237 0-74.666 10.984-74.666 24.533S118.764 260.03 160 260.03c41.238 0 74.667-10.984 74.667-24.534s-33.43-24.533-74.667-24.533m248.775 144.288l-29.779-30.563C401.874 301.564 416 269.765 416 234.667c0-42.82-21.025-80.729-53.316-103.966l-.017 82.632H320V64h149.334v42.667l-68.447-.002c35.432 31.273 57.78 77.027 57.78 128.002c0 47.08-19.063 89.707-49.892 120.584"></svg:path>`,
})
export class IxRestoreBackupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRestoreBackupFilledIcon],svg[ix-restore-backup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m408.775 355.25l-29.779-30.562C401.874 301.564 416 269.765 416 234.667c0-42.82-21.025-80.729-53.316-103.966l-.017 82.632H320V64h149.334v42.667l-68.447-.002c35.432 31.273 57.78 77.027 57.78 128.002c0 47.08-19.063 89.707-49.892 120.584M43.132 388.97a24.3 24.3 0 0 0-.465 4.728v25.212c0 27.849 47.756 50.424 106.667 50.424c58.91 0 106.666-22.575 106.666-50.424v-25.212l-.014-.834a24.5 24.5 0 0 0-.447-3.887c-6.533 5.223-14.486 10.04-23.702 14.163c-21.51 9.625-50.514 15.77-82.503 15.77c-33.259 0-63.285-6.652-85.052-16.942c-8.136-3.846-15.219-8.252-21.15-12.998m0-75.637a24.3 24.3 0 0 0-.465 4.729v25.212c0 27.848 47.756 50.424 106.667 50.424c58.91 0 106.666-22.576 106.666-50.424V318.06l-.014-.834a24.5 24.5 0 0 0-.447-3.888c-6.533 5.224-14.486 10.04-23.702 14.164c-21.51 9.624-50.514 15.77-82.503 15.77c-33.259 0-63.285-6.653-85.052-16.942c-8.136-3.846-15.219-8.252-21.15-12.999M149.334 192c-58.91 0-106.667 22.576-106.667 50.424v25.212c0 27.849 47.756 50.425 106.667 50.425c58.91 0 106.666-22.576 106.666-50.425v-25.212l-.157-2.766C252.804 213.096 206.28 192 149.333 192"></svg:path>`,
})
export class IxRestoreBackupFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRestoreBackupPcIcon],svg[ix-restore-backup-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 64v213.333H64V64zm-64 149.333H128v21.334h21.333zM192 138.667H85.333v32H192zm0-53.334H85.333v32H192zm21.333 213.334v42.666l-79.887.019c26.987 38.677 71.816 63.981 122.554 63.981a150.6 150.6 0 0 0 21.335-1.512v43.007A194 194 0 0 1 256 448c-60.316 0-114.136-27.813-149.335-71.313l.002 71.313H64V298.667zm255.63 108.847a18 18 0 0 1 .37 3.638v19.393c0 21.422-38.205 38.788-85.333 38.788s-85.333-17.366-85.333-38.788v-19.393l.011-.642q.055-1.51.358-2.99c5.226 4.018 11.588 7.723 18.961 10.895c17.208 7.403 40.411 12.13 66.003 12.13c26.607 0 50.628-5.117 68.041-13.032c6.51-2.959 12.176-6.348 16.921-10m0-58.182a18 18 0 0 1 .37 3.638v19.394c0 21.422-38.205 38.788-85.333 38.788s-85.333-17.366-85.333-38.788V352.97l.011-.642q.055-1.51.358-2.99c5.226 4.018 11.588 7.723 18.961 10.895c17.208 7.403 40.411 12.13 66.003 12.13c26.607 0 50.628-5.116 68.041-13.032c6.51-2.958 12.176-6.347 16.921-9.999M384 256c46.657 0 84.568 17.02 85.322 38.146l.011.642v19.394c0 21.422-38.205 38.788-85.333 38.788c-46.657 0-84.568-17.02-85.322-38.147l-.011-.641v-19.394l.126-2.128C301.223 272.227 338.443 256 384 256"></svg:path>`,
})
export class IxRestoreBackupPcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRewindIcon],svg[ix-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 256V128L42.667 256L256 384zm0 0l213.333-128v256zm-42.667 52.672L125.568 256l87.765-52.651zm213.334 0L338.901 256l87.766-52.651z" clip-rule="evenodd"></svg:path>`,
})
export class IxRewindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRewindFilledIcon],svg[ix-rewind-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 253.32v128l-213.333-128L256 125.32zm0 0l213.333 128v-256z" clip-rule="evenodd"></svg:path>`,
})
export class IxRewindFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRhombIcon],svg[ix-rhomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M466.95 225.83c16.663 16.662 16.663 43.677 0 60.34L286.17 466.95c-16.662 16.663-43.678 16.663-60.34 0L45.05 286.17c-16.663-16.663-16.663-43.678 0-60.34L225.83 45.049c16.662-16.663 43.678-16.663 60.34 0zM436.78 256L256 75.218L75.22 255.999L256 436.78z"></svg:path>`,
})
export class IxRhombIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRhombFilledIcon],svg[ix-rhomb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m286.17 45.049l180.78 180.78c16.663 16.663 16.663 43.678 0 60.34L286.17 466.95c-16.662 16.663-43.678 16.663-60.34 0L45.05 286.17c-16.663-16.663-16.663-43.678 0-60.34L225.83 45.049c16.662-16.663 43.678-16.663 60.34 0"></svg:path>`,
})
export class IxRhombFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRoadIcon],svg[ix-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m356.519 64l91.119 384h-43.85L312.667 64zm-157.208 0L108.19 448H64.362L155.48 64zm78.023 256v106.667h-42.667V320zm0-128v85.333h-42.667V192zm0-106.667v64h-42.667v-64z"></svg:path>`,
})
export class IxRoadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRoadFilledIcon],svg[ix-road-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m352 64l96 384H64l85.333-384zm-74.667 256h-42.666v106.667h42.666zm0-128h-42.666v85.333h42.666zm0-106.667h-42.666v64h42.666z"></svg:path>`,
})
export class IxRoadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRoboticArmIcon],svg[ix-robotic-arm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m283.016 48.38l-139.713 83.54a59.9 59.9 0 0 0-17.585-2.632C91.632 129.288 64 157.904 64 193.204c0 14.546 4.692 27.957 12.594 38.699a64 64 0 0 1-2.918-4.325l75.413 135.295l-.137.557a88.3 88.3 0 0 0-2.439 20.679l.013 42.607l-41.158.004v42.611h257.299v-42.667l-51.559.052l-.012-42.607c0-34.106-19.346-63.533-47.294-77.153l-4.438-1.999l-60.217-108.02l105.111-62.851l45.841 82.325c-1.918 7.072-1.495 14.819 1.621 21.884l1.363 2.739c2.069 3.709 4.747 6.828 7.828 9.296l.028 43.648l-.037.164l39.743 11.029l5.325-20.58l-24.457-6.802l.002-20.818c4.685-.265 9.382-1.644 13.723-4.24c4.593-2.746 8.247-6.531 10.844-10.903l18.013 10.779l-6.488 25.161l19.872 5.514L448 242.357l-.046-.005l.034-.067l-37.749-22.591a32.7 32.7 0 0 0-3.706-10.619c-4.794-8.599-12.864-14.018-21.635-15.542l-47.13-84.511c8.451-13.07 9.561-30.503 1.454-45.045c-11.362-20.38-36.526-27.364-56.206-15.597m-54.211 293.118c21.691 0 39.462 17.383 41.032 39.431l.113 3.18v42.611h-82.291v-42.611c0-22.464 16.785-40.867 38.075-42.494zm-58.397-104.21l2.278-2.616l37.087 66.506l.785-.188c-12.526 2.936-23.968 8.832-33.605 16.939l-3.588 3.2l-36.294-65.087l-.561.105c13.232-2.417 25.01-9.199 33.898-18.859m-44.69-65.389c11.362 0 20.573 9.539 20.573 21.305s-9.211 21.306-20.573 21.306s-20.572-9.539-20.572-21.306c0-11.766 9.21-21.305 20.572-21.305m175.35-96.784c5.681 0 10.286 4.77 10.286 10.653s-4.605 10.653-10.286 10.653s-10.286-4.77-10.286-10.653s4.605-10.653 10.286-10.653"></svg:path>`,
})
export class IxRoboticArmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRoboticGripperIcon],svg[ix-robotic-gripper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362.667 234.664h-21.334l-.001 62.485l65.517 65.515l-108.184 108.181v-60.352l47.845-47.829l-42.682-42.667h-26.496l.001 149.334h-42.666l-.002-149.334h-26.496l-42.679 42.667l47.842 47.829v60.352L105.151 362.664l65.514-65.515l.002-62.485h-21.334v-192h213.334zm-64.002 0h-85.333l.001 42.667h85.334zM320 85.331H192v106.666h128z"></svg:path>`,
})
export class IxRoboticGripperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRocketIcon],svg[ix-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64q-13.525 184.193-96 266.667q-14.626 14.626-32.03 26.742v47.826l-64 64l-39.055-68.344l-105.723-105.734L42.667 256l64-64h48.08q12.006-17.42 26.587-32Q263.809 77.526 448 64m-48 47.979l-9.13 1.384c-81.874 12.885-141.439 38.88-179.366 76.807c-22.833 22.832-40.2 52.562-51.96 89.711l-.781 2.508l71.488 71.488l3.537-1.112c33.41-11.216 60.854-26.958 82.698-47.132l5.344-5.136c37.928-37.928 63.923-97.493 76.807-179.367zM118.657 333.368l-45.255 45.255l-30.17-30.17l45.255-45.255zm45.255 45.255l-75.425 75.425l-30.17-30.17l75.425-75.425zm15.085 15.085l30.17 30.17l-45.255 45.255l-30.17-30.17zM288 192c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class IxRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRocketFilledIcon],svg[ix-rocket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64q-13.525 184.193-96 266.667q-14.626 14.626-32.03 26.742v47.826l-64 64l-39.055-68.344l-105.723-105.734L42.667 256l64-64h48.08q12.006-17.42 26.587-32Q263.809 77.526 448 64M178.997 393.708l30.17 30.17l-45.255 45.255l-30.17-30.17zm-45.255-45.255l30.17 30.17l-75.425 75.425l-30.17-30.17zm-45.255-45.255l30.17 30.17l-45.255 45.255l-30.17-30.17zM288 192c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxRocketFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRolesIcon],svg[ix-roles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m213.33 28.445l72.568 96.757l106.085-26.521l-25.985 103.942c-16.061-1.671-32.799 2.121-47.045 12.263l14.391-57.565l-64.582 16.145l-55.432-73.91l-55.432 73.91l-64.581-16.145l30.003 120.013h42.954l-8.106 42.667H90.007l-55.33-221.32l106.085 26.521zm141.451 239.761c3.181-3.535 9.033-1.899 9.921 2.772l13.367 70.356h-158.81l13.368-70.356c.887-4.671 6.74-6.307 9.92-2.772c29.991 33.323 82.243 33.323 112.234 0M211.152 384.001h175.024l4.053 21.333h-183.13zm-47.483 21.333l27.041-142.32c7.475-39.342 56.762-53.117 83.551-23.351c13.042 14.491 35.764 14.491 48.806 0c26.79-29.766 76.076-15.992 83.551 23.351l27.041 142.32h35.674v42.667H128v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxRolesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRolesFilledIcon],svg[ix-roles-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m213.33 28.445l72.568 96.757l106.085-26.521l-25.985 103.942c-20.742-2.159-42.612 4.795-58.788 22.769c-4.567 5.075-12.525 5.075-17.092 0c-38.594-42.882-109.598-23.038-120.366 33.64l-11.584 60.969H90.007l-55.33-221.32l106.085 26.521zm193.288 234.569c-7.475-39.342-56.761-53.117-83.551-23.351c-13.042 14.491-35.764 14.491-48.806 0c-26.789-29.766-76.076-15.991-83.551 23.351l-18.934 99.654h253.777zm22.988 120.987H167.723l-4.054 21.333H128v42.667h341.333v-42.667h-35.674z" clip-rule="evenodd"></svg:path>`,
})
export class IxRolesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRotateIcon],svg[ix-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.444 64C147.026 64 64 149.961 64 256s83.026 192 185.444 192c24.654 0 48.67-4.995 70.988-14.576c20.003-8.588 38.37-20.75 54.287-35.858l5.853-5.802l-29.14-30.169c-13.395 13.869-29.294 24.907-46.785 32.416c-17.335 7.443-35.99 11.322-55.203 11.322c-79.659 0-144.234-66.858-144.234-149.333s64.575-149.333 144.234-149.333c76.693 0 139.405 61.974 143.968 140.191l-26.374-27.276l-29.14 30.17l76.384 79.085l76.385-79.085l-29.14-30.17l-26.825 27.76C430.329 145.321 349.059 64 249.444 64"></svg:path>`,
})
export class IxRotateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRotate180Icon],svg[ix-rotate-180-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.15 466.786V356.338l-27.63 17.407L64 349.62l45.679-27.078h27.63v144.244zm88.238-74.847q-12.202-6.108-17.647-13.539t-5.445-18.12q0-18.119 14.218-28.808q14.42-10.688 38.318-10.688t38.318 10.688q14.218 10.69 14.218 28.808q0 10.893-5.294 18.171t-17.798 13.488q11.496 4.682 17.143 10.586q9.075 9.467 9.075 24.126q0 21.885-16.739 33.49q-14.319 9.976-38.923 9.976t-38.923-9.976q-16.739-11.604-16.739-33.49q0-12.725 6.151-20.868q6.151-8.144 20.067-13.844m29.444-10.994l1.815-.407q8.47-2.138 13.815-7.584t5.344-12.165q0-7.329-5.596-11.553q-5.597-4.225-15.378-4.225q-9.681 0-15.327 4.174q-5.647 4.173-5.647 11.299q0 14.556 20.974 20.461m-1.109 23.107q-22.386 6.312-22.386 23.108q0 8.55 6.403 13.64t17.092 5.09q11.293 0 17.647-5.599q5.848-5.191 5.848-13.029q0-16.899-24.604-23.21m126.847-84.055q32.672 0 46.486 25.246q9.277 17.101 9.277 49.472q0 35.424-11.394 52.832q-14.218 21.784-44.369 21.784q-32.57 0-46.485-25.245q-9.277-17-9.277-50.287q0-34.611 11.394-52.017q14.218-21.785 44.368-21.785m0 25.449q-11.999 0-17.797 11.91t-5.798 36.748q0 25.754 5.646 37.563q5.849 12.215 17.949 12.215t17.849-11.961q5.747-11.961 5.747-37.206q0-25.347-5.546-37.053q-5.848-12.216-18.05-12.216M234.667 42.664c94.256 0 170.666 76.41 170.666 170.667l-.021 1.13l38.348-38.336l30.17 30.17l-90.51 90.51l-90.509-90.51l30.17-30.17l39.663 39.63q.023-1.209.023-2.424c0-70.693-57.308-128-128-128s-128 57.307-128 128c0 7.274.607 14.407 1.772 21.35l-43.116.003A172 172 0 0 1 64 213.331c0-94.257 76.41-170.667 170.667-170.667"></svg:path>`,
})
export class IxRotate180Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRotate90LeftIcon],svg[ix-rotate-90-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118.868 319.999q27.586 0 41.735 15.981q13.641 15.474 13.641 45.503q0 28.91-10.281 50.897q-10.281 21.886-30.335 30.946q-13.335 6.006-33.287 6.006q-11.808 0-26.365-2.545l3.156-26.772q12.52 3.868 22.903 3.868q19.545 0 29.928-12.622q8.348-10.078 9.467-25.449q-13.54 12.622-31.556 12.622q-20.868 0-32.778-12.724Q64 393.698 64 371.914q0-23.209 12.724-36.443q14.862-15.472 42.144-15.472m137.799-.207q32.981 0 46.927 25.246q9.365 17.101 9.365 49.472q0 35.424-11.502 52.832q-14.354 21.784-44.79 21.784q-32.88 0-46.928-25.245q-9.365-17-9.365-50.287q0-34.61 11.503-52.018q14.353-21.784 44.79-21.784m0 25.449q-12.114 0-17.967 11.91t-5.853 36.748q0 25.754 5.7 37.563q5.904 12.215 18.12 12.215q12.215 0 18.017-11.961q5.803-11.961 5.803-37.206q0-25.347-5.599-37.053q-5.904-12.216-18.221-12.216m-138.003-.608q-10.485 0-16.44 6.871t-5.955 18.883q0 11.096 5.65 17.204q5.649 6.107 15.931 6.107q11.706 0 18.526-8.042q5.395-6.31 5.395-15.88q0-12.01-6.107-18.425q-6.311-6.718-17-6.718m30.795-301.961l-.027 57.387a173 173 0 0 1 6.843-7.247c66.649-66.65 174.709-66.65 241.359 0c65.392 65.392 66.626 170.647 3.701 237.543l-3.43 3.545l-30.169-30.172c49.715-50.009 49.624-130.85-.272-180.746c-49.987-49.987-131.032-49.987-181.019 0a130 130 0 0 0-4.748 5.006l53.095.017v42.667h-128v-128z"></svg:path>`,
})
export class IxRotate90LeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRotate90RightIcon],svg[ix-rotate-90-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.868 319.998q27.587 0 41.736 15.982q13.64 15.473 13.64 45.502q0 28.91-10.281 50.898q-10.281 21.886-30.335 30.946q-13.335 6.006-33.287 6.006q-11.809 0-26.365-2.545l3.156-26.772q12.52 3.867 22.903 3.868q19.545 0 29.928-12.623q8.348-10.077 9.467-25.449q-13.54 12.623-31.556 12.623q-20.868 0-32.778-12.724Q192 393.698 192 371.914q0-23.21 12.724-36.443q14.862-15.473 42.144-15.473m137.799-.206q32.981 0 46.927 25.245q9.365 17.102 9.365 49.472q0 35.425-11.502 52.832q-14.354 21.784-44.79 21.784q-32.88 0-46.928-25.245q-9.365-17-9.365-50.287q0-34.61 11.503-52.017q14.354-21.784 44.79-21.784m0 25.449q-12.114 0-17.967 11.91t-5.853 36.748q0 25.754 5.7 37.562q5.904 12.216 18.12 12.215q12.215 0 18.017-11.96q5.803-11.96 5.803-37.207q0-25.347-5.599-37.053q-5.904-12.215-18.221-12.215m-138.003-.608q-10.485 0-16.44 6.871t-5.955 18.883q0 11.095 5.65 17.203q5.649 6.108 15.931 6.108q11.706 0 18.526-8.042q5.395-6.312 5.395-15.88q0-12.012-6.107-18.425q-6.312-6.718-17-6.718m158.86-302.14v127.999h-128v-42.666l53.095-.017a129 129 0 0 0-4.748-5.007c-49.987-49.987-131.032-49.987-181.019 0c-49.896 49.896-49.987 130.738-.272 180.747l-30.169 30.171l-3.43-3.545c-62.924-66.896-61.69-172.151 3.701-237.543c66.65-66.65 174.71-66.65 241.359 0a173 173 0 0 1 6.843 7.247l-.027-57.387z"></svg:path>`,
})
export class IxRotate90RightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRouteIcon],svg[ix-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 362.667c23.564 0 42.667 19.102 42.667 42.666S428.897 448 405.333 448s-42.666-19.103-42.666-42.667s19.102-42.666 42.666-42.666M167.025 85.333H288c53.02 0 96 42.981 96 96c0 53.02-42.98 96-96 96h-85.333c-29.456 0-53.334 23.878-53.334 53.334c0 29.455 23.878 53.333 53.334 53.333h142.308a63.9 63.9 0 0 0-3.642 21.333c0 7.48 1.284 14.661 3.642 21.334H202.667c-53.02 0-96-42.981-96-96c0-53.02 42.98-96 96-96H288c29.455 0 53.333-23.878 53.333-53.334C341.333 151.878 317.455 128 288 128H167.025a63.9 63.9 0 0 0 3.642-21.333a63.9 63.9 0 0 0-3.642-21.334M106.667 64c23.564 0 42.666 19.103 42.666 42.667s-19.102 42.666-42.666 42.666S64 130.231 64 106.667S83.103 64 106.667 64"></svg:path>`,
})
export class IxRouteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRouteTargetIcon],svg[ix-route-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.333 234.667l64 32l-64 31.999v46.31A63.9 63.9 0 0 0 384 341.332a63.9 63.9 0 0 0-21.334 3.642V234.667zM167.024 85.333H224c53.019 0 96 42.981 96 96c0 53.02-42.981 96-96 96h-74.667c-29.455 0-53.333 23.878-53.333 53.334C96 360.122 119.878 384 149.333 384h97.826l-6.244-6.248l-15.085-15.085l30.17-30.17l72.836 72.836L256 478.17L225.83 448l15.085-15.085l6.244-6.249h-97.826c-53.02 0-96-42.98-96-96c0-53.019 42.98-96 96-96H224c29.455 0 53.333-23.877 53.333-53.333C277.333 151.878 253.455 128 224 128h-56.976a63.9 63.9 0 0 0 3.642-21.333c0-7.48-1.283-14.662-3.642-21.334M106.666 64c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.666-42.667 42.666S64 130.231 64 106.667S83.102 64 106.666 64M384 448c23.564 0 42.666-19.103 42.666-42.667S407.564 362.667 384 362.667s-42.667 19.102-42.667 42.666S360.436 448 384 448"></svg:path>`,
})
export class IxRouteTargetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRulerHorizontalIcon],svg[ix-ruler-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.667 170.665h426.666v170.667H42.667zm42.666 42.667v85.333h341.334v-85.333H384v42.667h-42.667v-42.667h-64v42.667h-42.666v-42.667h-64v42.667H128v-42.667z"></svg:path>`,
})
export class IxRulerHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRulerVerticalIcon],svg[ix-ruler-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.333 42.668v426.667H170.667V42.668zm-42.666 42.667h-85.334v341.333h85.334v-42.667H256v-42.666h42.667v-64H256v-42.667h42.667v-64H256v-42.667h42.667z"></svg:path>`,
})
export class IxRulerVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRulesIcon],svg[ix-rules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 426.667c94.257 0 170.667-76.41 170.667-170.667S350.257 85.333 256 85.333S85.333 161.743 85.333 256c0 49.272 20.88 93.667 54.274 124.82l8.972-26.587q6.891 3.264 12.33 3.264q7.012 0 10.155-4.956q3.142-4.836 5.44-19.584l16.095-101.472h-20.768l4.135-27.211h20.949l.623-3.927q3.021-19.342 5.198-24.902q10.154-26.112 42.188-26.112q12.693 0 25.991 4.715l-9.188 30.1q-7.977-2.901-12.934-2.901q-5.923 0-9.067 4.473q-3.143 4.352-4.835 15.231l-.526 3.323h19.493l-.055-.089h39.65l22.122 35.782l32.035-35.782h43.639l-59.113 62.497l39.771 64.311h-39.771l-24.298-39.771l-35.781 39.771h-43.398l62.497-66.728l-20.38-32.78h-40.722l-16.076 101.472q-2.781 17.65-5.319 25.991q-2.538 8.462-6.649 14.022q-12.089 16.441-35.661 16.441q-10.891 0-20.464-3.015c29.722 25.124 68.15 40.271 110.115 40.271m0 42.666c117.821 0 213.333-95.512 213.333-213.333S373.821 42.667 256 42.667S42.667 138.179 42.667 256S138.179 469.333 256 469.333" clip-rule="evenodd"></svg:path>`,
})
export class IxRulesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRulesFilledIcon],svg[ix-rules-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 256c0 117.821-95.512 213.333-213.333 213.333S42.667 373.821 42.667 256S138.179 42.667 256 42.667S469.333 138.179 469.333 256m-320.754 98.233l-9.912 29.375q12.572 5.802 27.682 5.803q23.572 0 35.661-16.441q4.11-5.56 6.649-14.022q2.538-8.342 5.319-25.991l16.076-101.472h40.722l20.38 32.78l-62.497 66.728h43.398l35.781-39.771l24.298 39.771h39.771l-39.771-64.311l59.113-62.497H347.61l-32.035 35.782l-22.122-35.782h-39.65l.055.088h-19.493l.526-3.322q1.692-10.88 4.835-15.231q3.144-4.473 9.067-4.473q4.956 0 12.934 2.901l9.188-30.1q-13.298-4.715-25.991-4.715q-32.034 0-42.188 26.111q-2.177 5.561-5.198 24.903l-.623 3.926h-20.949l-4.135 27.212h20.768l-16.095 101.472q-2.298 14.748-5.44 19.584q-3.143 4.956-10.155 4.956q-5.439 0-12.33-3.264" clip-rule="evenodd"></svg:path>`,
})
export class IxRulesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRuntimePlayIcon],svg[ix-runtime-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 256c0 31.094-8.315 60.243-22.841 85.351l-36.958-21.338C377.764 301.184 384 279.32 384 256c0-37.909-16.48-71.969-42.667-95.407V192h-42.667V85.334h106.667V128h-36.446c35.433 31.273 57.779 77.027 57.779 128m-256-147.801c26.928-15.547 56.33-22.92 85.337-22.894v42.675c-21.755-.023-43.808 5.509-64.003 17.169c-32.831 18.955-54.088 50.257-61.292 84.654l27.199-15.704l21.334 36.951l-92.376 53.333l-53.334-92.376l36.95-21.333l18.224 31.563c9.366-46.322 37.817-88.552 81.961-114.038m0 295.603c-26.927-15.547-48.014-37.323-62.495-62.457l36.958-21.337c10.858 18.851 26.675 35.184 46.871 46.843c32.83 18.955 70.567 21.713 103.958 10.754l-27.199-15.704l21.333-36.95l92.376 53.333l-53.333 92.376l-36.951-21.333l18.223-31.563c-44.799 15.049-95.596 11.525-139.741-13.962m42.667-83.799v-128l106.667 64z" clip-rule="evenodd"></svg:path>`,
})
export class IxRuntimePlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRuntimeSettingsIcon],svg[ix-runtime-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M145.129 320.005c10.858 18.851 26.675 35.184 46.871 46.844c13.687 7.902 28.228 12.99 42.951 15.441a138 138 0 0 0 10.213 44.063c-25.444-1.594-50.92-8.941-74.498-22.554c-26.927-15.547-48.014-37.323-62.495-62.457zm237.148-85.055a138 138 0 0 1 44.05 10.203c-2.921-46.595-24.539-88.118-57.44-117.156h36.446V85.331H298.666v106.666h42.667V160.59c21.235 19.006 36.087 44.996 40.944 74.36M256.003 85.302v42.675c-21.755-.023-43.808 5.509-64.003 17.169c-32.831 18.955-54.088 50.257-61.292 84.654l27.199-15.704l21.334 36.951l-92.376 53.333l-53.334-92.376l36.95-21.333l18.224 31.563c9.366-46.322 37.817-88.552 81.961-114.038c26.928-15.547 56.33-22.92 85.337-22.894m218.615 254.234l-18.962 10.948a85.4 85.4 0 0 1 3.093 22.849a85.4 85.4 0 0 1-3.093 22.849l18.962 10.948a106 106 0 0 1-7.783 17.73l-1.987 3.44a107 107 0 0 1-11.589 15.766l-18.957-10.945c-10.7 10.895-24.301 18.931-39.553 22.857v21.888A107 107 0 0 1 373.416 480c-7.306 0-14.44-.735-21.334-2.134v-21.888c-15.252-3.926-28.855-11.963-39.555-22.859l-18.956 10.944a107 107 0 0 1-11.625-15.827l-1.912-3.311a106 106 0 0 1-7.82-17.799l18.961-10.947a85.4 85.4 0 0 1-3.093-22.846a85.4 85.4 0 0 1 3.093-22.846l-18.961-10.948a106 106 0 0 1 7.822-17.801l1.908-3.305a107 107 0 0 1 11.627-15.83l18.956 10.944c10.7-10.896 24.303-18.933 39.555-22.859V268.8a107 107 0 0 1 21.334-2.134c7.306 0 14.44.735 21.333 2.134v21.888c15.252 3.926 28.853 11.962 39.553 22.857l18.957-10.945a107 107 0 0 1 11.59 15.768l1.984 3.436a106 106 0 0 1 7.785 17.732m-69.201 33.797c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxRuntimeSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixRuntimeStopIcon],svg[ix-runtime-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 256c0 31.094-8.315 60.243-22.841 85.351l-36.958-21.338C377.764 301.184 384 279.32 384 256c0-37.909-16.48-71.969-42.667-95.407V192h-42.667V85.334h106.667V128h-36.446c35.433 31.273 57.779 77.027 57.779 128m-256-147.801c26.928-15.547 56.33-22.92 85.337-22.894v42.675c-21.755-.023-43.808 5.509-64.003 17.169c-32.831 18.955-54.088 50.257-61.292 84.654l27.199-15.704l21.334 36.951l-92.376 53.333l-53.334-92.376l36.95-21.333l18.224 31.563c9.366-46.322 37.817-88.552 81.961-114.038m0 295.603c-26.927-15.547-48.014-37.323-62.495-62.457l36.958-21.337c10.858 18.851 26.675 35.184 46.871 46.843c32.83 18.955 70.567 21.713 103.958 10.754l-27.199-15.704l21.333-36.95l92.376 53.333l-53.333 92.376l-36.951-21.333l18.223-31.563c-44.799 15.049-95.596 11.525-139.741-13.962m128.001-190.466h-85.334v85.333h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxRuntimeStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSankeychartIcon],svg[ix-sankeychart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M447.468 64v42.56H241.167a50.39 50.39 0 0 0-39.658 19.309l-2.268 3.135a92.93 92.93 0 0 1-72.169 41.254l-5.159.143H64.532V127.84h57.381a50.38 50.38 0 0 0 39.658-19.309l2.268-3.135a92.93 92.93 0 0 1 72.17-41.253l5.158-.143zm0 297.922v-42.56h-77.366a139.37 139.37 0 0 1-99.342-41.623l-4.266-4.533a181.9 181.9 0 0 0-128.8-60.131l-6.433-.114h-66.73v42.56h66.73a139.37 139.37 0 0 1 99.342 41.623l4.265 4.533a181.92 181.92 0 0 0 128.801 60.131l6.433.114zM448 405.44V448H64v-42.56z" clip-rule="evenodd"></svg:path>`,
})
export class IxSankeychartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSaveAllIcon],svg[ix-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h224l42.667 42.667h-224V384H64zm64 384h320V219.72L356.28 128H128zm85.333-277.333h-42.666v234.666h42.666V320h149.334v85.333h42.666v-167.94l-42.666-42.667v82.607H213.333zm106.667 0h-64v64h64zm0 192v42.666h-64v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxSaveAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScaleIcon],svg[ix-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 42.668h384v42.667h-49.185l70.518 181.333c0 41.237-33.429 74.667-74.666 74.667c-41.238 0-74.667-33.43-74.667-74.667l70.519-181.333H277.333v320h85.334v64H149.333v-64h85.334v-320H121.481L192 266.668c0 41.237-33.429 74.667-74.667 74.667s-74.666-33.43-74.666-74.667l70.518-181.333H64zm305.928 213.333l24.739-63.614l24.739 63.614zm-252.595-63.614l-24.739 63.614h49.478z" clip-rule="evenodd"></svg:path>`,
})
export class IxScaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScatterplotIcon],svg[ix-scatterplot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 384h384v42.667H64zm32-42.667c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32M202.667 256c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m106.666 0c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m-64 85.333c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32M416 192c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m-85.333-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32"></svg:path>`,
})
export class IxScatterplotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSchedulerIcon],svg[ix-scheduler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 128H106.666v213.333h298.667zM192 320v42.667h-42.667V320zm170.667 0v42.667H320V320zm-85.334-85.333v42.666h-42.666v-42.666zm85.334 0v42.666H320v-42.666zm42.666-128H106.667l-.001 42.666h298.667z"></svg:path>`,
})
export class IxSchedulerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSchedulerFilledIcon],svg[ix-scheduler-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 170.667V448H64V170.667zM192 320h-42.667v42.667H192zm170.667 0H320v42.667h42.667zm-85.334-85.333h-42.666v42.666h42.666zm85.334 0H320v42.666h42.667zM64 64h384v64H64z"></svg:path>`,
})
export class IxSchedulerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenIcon],svg[ix-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 469.333v-42.666l85.333-.001v-64H64V64h384v298.667l-170.667-.001v64h85.334v42.667zm256-362.666H106.667V320h298.666z"></svg:path>`,
})
export class IxScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenDuplicateIcon],svg[ix-screen-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362.667 64v192H320V106.667H85.333v170.666H256V320h-32v42.667h32v42.666H149.333v-42.666h32V320H42.667V64z"></svg:path><svg:path fill="currentColor" d="M277.333 277.333h149.334v21.334h-128v128h-21.334z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M320 320h149.333v149.333H320zm128 64v21.333h-42.667V448H384v-42.667h-42.667V384H384v-42.667h21.333V384z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenDuplicateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenDuplicateFilledIcon],svg[ix-screen-duplicate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 64H42.667v256h138.666v42.667h-32v42.666H256v-42.666h-32V320h32v-42.667H85.333V106.667H320V256h42.667V64zm106.667 213.333H277.333v149.334h21.334v-128h128zM469.333 320H320v149.333h149.333zM448 405.333V384h-42.667v-42.667H384V384h-42.667v21.333H384V448h21.333v-42.667zM298.667 128h-192v128h192z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenDuplicateFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenFilledIcon],svg[ix-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v298.667l-170.667-.001v64h85.334v42.667H149.333v-42.666l85.333-.001v-64H64V64zm-42.667 42.667H106.667V320h298.666zM384 128v170.667H128V128z"></svg:path>`,
})
export class IxScreenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenPcTowerIcon],svg[ix-screen-pc-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 448.003V170.669H298.667v277.334zM362.667 149.336v-64h-320v234.667h138.666v42.666h-32v42.667H256v-42.667h-32v-42.666h53.333v-42.667h-192V128.003H320v21.333zm-21.334 64h85.334v42.667h-85.334zm0 64v128h85.334v-128zm64 85.333v-42.666h-42.666v42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenPcTowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenPcTowerFilledIcon],svg[ix-screen-pc-tower-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 448.003V170.669H298.667v277.334zM362.667 149.336v-64h-320v234.667h138.666v42.666h-32v42.667H256v-42.667h-32v-42.666h53.333V149.336zm-21.334 64h85.334v42.667h-85.334zm0 64v128h85.334v-128zm64 85.333v-42.666h-42.666v42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenPcTowerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenPcTowerSettingsIcon],svg[ix-screen-pc-tower-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 64h277.334v85.333H320v-42.666H85.333v192h192v42.666H224V384h32v42.667H149.333V384h32v-42.667H42.667V64zm189.412 115.006l-13.276 7.665a59.8 59.8 0 0 1 2.166 15.996a59.8 59.8 0 0 1-2.166 15.996l13.276 7.665a74 74 0 0 1-5.318 12.172l-1.658 2.873a75 75 0 0 1-7.977 10.809l-13.271-7.662c-7.49 7.626-17.011 13.251-27.686 15.998v15.322a75 75 0 0 1-14.93 1.493a75 75 0 0 1-14.937-1.494v-15.321c-10.677-2.748-20.199-8.374-27.689-16.002l-13.267 7.66a75 75 0 0 1-8.278-11.313l-1.063-1.842a74 74 0 0 1-5.608-12.701l13.27-7.662a59.8 59.8 0 0 1-2.165-15.991c0-5.539.754-10.901 2.165-15.991l-13.271-7.661a74 74 0 0 1 5.648-12.772l.984-1.705a75 75 0 0 1 8.317-11.38l13.267 7.66c7.491-7.628 17.013-13.254 27.69-16.003v-15.321a75 75 0 0 1 14.73-1.494h.415c5.04.014 9.963.527 14.722 1.493v15.323c10.676 2.747 20.196 8.372 27.686 15.998l13.273-7.662a75 75 0 0 1 8.001 10.851l1.608 2.786a74 74 0 0 1 5.342 12.217m-48.446 23.661c0 12.371-10.028 22.4-22.4 22.4s-22.4-10.029-22.4-22.4c0-12.372 10.029-22.4 22.4-22.4c12.372 0 22.4 10.028 22.4 22.4m243.034-32V448H298.667V170.667zm-42.666 42.666h-85.334V256h85.334zm-85.334 192v-128h85.334v128zm64-85.333v42.667h-42.666V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenPcTowerSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenPcTowerSettingsFilledIcon],svg[ix-screen-pc-tower-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.336h320v64h-85.334v192H224v42.667h32v42.666H149.333v-42.666h32v-42.667H42.667zm210.136 100.963l-15.172 8.759a68.3 68.3 0 0 1 2.475 18.278c0 6.331-.862 12.46-2.475 18.278l15.172 8.759a85 85 0 0 1-6.252 14.229l-1.538 2.664a85.6 85.6 0 0 1-9.297 12.656l-15.167-8.757c-8.56 8.717-19.441 15.146-31.642 18.286v17.512a85.7 85.7 0 0 1-17.065 1.706a85.7 85.7 0 0 1-17.068-1.707v-17.51c-12.203-3.14-23.084-9.57-31.645-18.286l-15.163 8.754a85.6 85.6 0 0 1-9.286-12.637l-1.558-2.698a85 85 0 0 1-6.242-14.214l15.167-8.757a68.3 68.3 0 0 1-2.475-18.278c0-6.331.862-12.461 2.475-18.279l-15.167-8.756a85 85 0 0 1 6.233-14.197l1.577-2.732a85.6 85.6 0 0 1 9.276-12.621l15.163 8.755c8.56-8.717 19.442-15.146 31.645-18.287V129.71a85.7 85.7 0 0 1 17.068-1.707c5.844 0 11.551.587 17.065 1.706v17.511c12.201 3.141 23.082 9.57 31.642 18.286l15.167-8.756a85.6 85.6 0 0 1 9.286 12.637l1.56 2.702a85 85 0 0 1 6.241 14.21m-55.361 27.037c0 14.138-11.461 25.6-25.6 25.6c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6s25.6 11.462 25.6 25.6m271.891 234.667V170.669H298.667v277.334zm-128-234.667h85.334v42.667h-85.334zm0 64v128h85.334v-128zm21.334 85.333h42.666v-42.666h-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenPcTowerSettingsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenSettingsIcon],svg[ix-screen-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 106.667V320h298.666V106.667zM64 362.667h170.667v42.666H192V448h128v-42.667h-42.667v-42.666H448V64H64zm273.26-176.37l-15.169 8.757a68.3 68.3 0 0 1 2.475 18.279c0 6.332-.862 12.461-2.474 18.279l15.168 8.757a85 85 0 0 1-6.301 14.319l-1.437 2.488a85.6 85.6 0 0 1-9.348 12.742l-15.165-8.755c-8.559 8.716-19.44 15.145-31.641 18.286v17.51a85.7 85.7 0 0 1-17.07 1.708c-5.843 0-11.55-.588-17.063-1.707v-17.51c-12.203-3.14-23.086-9.57-31.646-18.288l-15.166 8.756a85.6 85.6 0 0 1-9.24-12.561l-1.648-2.854a85 85 0 0 1-6.198-14.134l15.17-8.758a68.4 68.4 0 0 1-2.474-18.278c0-6.33.862-12.46 2.474-18.278l-15.17-8.758a85 85 0 0 1 6.186-14.112l1.673-2.897a85.6 85.6 0 0 1 9.227-12.54l15.166 8.756c8.561-8.717 19.443-15.147 31.646-18.287v-17.511A85.7 85.7 0 0 1 256.298 128c5.846 0 11.555.588 17.07 1.708v17.51c12.201 3.141 23.081 9.569 31.641 18.285l15.164-8.755a85.6 85.6 0 0 1 9.336 12.72l1.463 2.534a85 85 0 0 1 6.288 14.295m-55.358 27.037c0 14.138-11.462 25.6-25.6 25.6s-25.6-11.462-25.6-25.6s11.461-25.6 25.6-25.6c14.138 0 25.6 11.461 25.6 25.6" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
