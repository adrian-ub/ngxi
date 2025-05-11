import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoon3dIcon],svg[iconamoon-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 3l7.794 4.5v7.845a2 2 0 0 1-1 1.732L13 20.423a2 2 0 0 1-2 0l-5.794-3.346a2 2 0 0 1-1-1.732V7.5z"></svg:path><svg:path d="M12 7v5l-4.33 2.5M12 12l4.33 2.5"></svg:path></svg:g>`,
})
export class Iconamoon3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoon3dBoldIcon],svg[iconamoon-3d-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="m12 3l7.794 4.5v7.845a2 2 0 0 1-1 1.732L13 20.423a2 2 0 0 1-2 0l-5.794-3.346a2 2 0 0 1-1-1.732V7.5z"></svg:path><svg:path d="M12 7v5l-4.33 2.5M12 12l4.33 2.5"></svg:path></svg:g>`,
})
export class Iconamoon3dBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoon3dFillIcon],svg[iconamoon-3d-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 2.134a1 1 0 0 1 1 0l7.794 4.5a1 1 0 0 1 .5.866v7.845a3 3 0 0 1-1.5 2.598L13.5 21.29a3 3 0 0 1-3 0l-5.794-3.346a3 3 0 0 1-1.5-2.598V7.5a1 1 0 0 1 .5-.866zM12 6a1 1 0 0 1 1 1v4.423l3.83 2.211a1 1 0 1 1-1 1.732L12 13.155l-3.83 2.211a1 1 0 1 1-1-1.732L11 11.423V7a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class Iconamoon3dFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoon3dDuotoneIcon],svg[iconamoon-3d-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 3l7.794 4.5v7.845a2 2 0 0 1-1 1.732L13 20.423a2 2 0 0 1-2 0l-5.794-3.346a2 2 0 0 1-1-1.732V7.5z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l7.794 4.5v7.845a2 2 0 0 1-1 1.732L13 20.423a2 2 0 0 1-2 0l-5.794-3.346a2 2 0 0 1-1-1.732V7.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5l-4.33 2.5M12 12l4.33 2.5"></svg:path></svg:g>`,
})
export class Iconamoon3dDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoon3dLightIcon],svg[iconamoon-3d-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12 3l7.794 4.5v7.845a2 2 0 0 1-1 1.732L13 20.423a2 2 0 0 1-2 0l-5.794-3.346a2 2 0 0 1-1-1.732V7.5z"></svg:path><svg:path d="M12 7v5l-4.33 2.5M12 12l4.33 2.5"></svg:path></svg:g>`,
})
export class Iconamoon3dLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoon3dThinIcon],svg[iconamoon-3d-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12 3l7.794 4.5v7.845a2 2 0 0 1-1 1.732L13 20.423a2 2 0 0 1-2 0l-5.794-3.346a2 2 0 0 1-1-1.732V7.5z"></svg:path><svg:path d="M12 7v5l-4.33 2.5M12 12l4.33 2.5"></svg:path></svg:g>`,
})
export class Iconamoon3dThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAppsFillIcon],svg[iconamoon-apps-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM18 3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-8 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm8-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm8-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonAppsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAppsBoldIcon],svg[iconamoon-apps-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h2v2H4zm0 14h2v2H4zM18 4h2v2h-2zm0 7h2v2h-2zm-7 0h2v2h-2zm-7 0h2v2H4zm7-7h2v2h-2zm0 14h2v2h-2zm7 0h2v2h-2z"></svg:path>`,
})
export class IconamoonAppsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAppsIcon],svg[iconamoon-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h2v2H4zm0 14h2v2H4zM18 4h2v2h-2zm0 7h2v2h-2zm-7 0h2v2h-2zm-7 0h2v2H4zm7-7h2v2h-2zm0 14h2v2h-2zm7 0h2v2h-2z"></svg:path>`,
})
export class IconamoonAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAppsLightIcon],svg[iconamoon-apps-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h2v2H4zm0 14h2v2H4zM18 4h2v2h-2zm0 7h2v2h-2zm-7 0h2v2h-2zm-7 0h2v2H4zm7-7h2v2h-2zm0 14h2v2h-2zm7 0h2v2h-2z"></svg:path>`,
})
export class IconamoonAppsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAppsThinIcon],svg[iconamoon-apps-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h2v2H4zm0 14h2v2H4zM18 4h2v2h-2zm0 7h2v2h-2zm-7 0h2v2h-2zm-7 0h2v2H4zm7-7h2v2h-2zm0 14h2v2h-2zm7 0h2v2h-2z"></svg:path>`,
})
export class IconamoonAppsThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft1Icon],svg[iconamoon-arrow-bottom-left-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17H7m0 0V7m0 10L17 7"></svg:path>`,
})
export class IconamoonArrowBottomLeft1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft1BoldIcon],svg[iconamoon-arrow-bottom-left-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 17H7m0 0V7m0 10L17 7"></svg:path>`,
})
export class IconamoonArrowBottomLeft1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft1FillIcon],svg[iconamoon-arrow-bottom-left-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 7v10a1 1 0 0 0 1 1h10a1 1 0 0 0 .707-1.707L13.414 12l4.293-4.293a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293A1 1 0 0 0 6 7" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft1LightIcon],svg[iconamoon-arrow-bottom-left-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 17H7m0 0V7m0 10L17 7"></svg:path>`,
})
export class IconamoonArrowBottomLeft1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft1ThinIcon],svg[iconamoon-arrow-bottom-left-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 17H7m0 0V7m0 10L17 7"></svg:path>`,
})
export class IconamoonArrowBottomLeft1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft2Icon],svg[iconamoon-arrow-bottom-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8h8"></svg:path>`,
})
export class IconamoonArrowBottomLeft2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft2BoldIcon],svg[iconamoon-arrow-bottom-left-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 8v8h8"></svg:path>`,
})
export class IconamoonArrowBottomLeft2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft2FillIcon],svg[iconamoon-arrow-bottom-left-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 8v8a1 1 0 0 0 1 1h8a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 7 8" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft2LightIcon],svg[iconamoon-arrow-bottom-left-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 8v8h8"></svg:path>`,
})
export class IconamoonArrowBottomLeft2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft2ThinIcon],svg[iconamoon-arrow-bottom-left-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 8v8h8"></svg:path>`,
})
export class IconamoonArrowBottomLeft2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft3SquareIcon],svg[iconamoon-arrow-bottom-left-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 6v4m0 0h4m-4 0l4-4"></svg:path>`,
})
export class IconamoonArrowBottomLeft3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft3SquareBoldIcon],svg[iconamoon-arrow-bottom-left-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 6v4m0 0h4m-4 0l4-4"></svg:path>`,
})
export class IconamoonArrowBottomLeft3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft3SquareDuotoneIcon],svg[iconamoon-arrow-bottom-left-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 6v4m0 0h4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft3SquareFillIcon],svg[iconamoon-arrow-bottom-left-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6 6v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-1.586l2.293-2.293a1 1 0 0 0-1.414-1.414L11 11.586V10a1 1 0 1 0-2 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft3SquareLightIcon],svg[iconamoon-arrow-bottom-left-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 6v4m0 0h4m-4 0l4-4"></svg:path>`,
})
export class IconamoonArrowBottomLeft3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft3SquareThinIcon],svg[iconamoon-arrow-bottom-left-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 6v4m0 0h4m-4 0l4-4"></svg:path>`,
})
export class IconamoonArrowBottomLeft3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft4SquareIcon],svg[iconamoon-arrow-bottom-left-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft4SquareBoldIcon],svg[iconamoon-arrow-bottom-left-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft4SquareDuotoneIcon],svg[iconamoon-arrow-bottom-left-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft4SquareFillIcon],svg[iconamoon-arrow-bottom-left-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6 10a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3v-3a1 1 0 1 0-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft4SquareLightIcon],svg[iconamoon-arrow-bottom-left-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft4SquareThinIcon],svg[iconamoon-arrow-bottom-left-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft5CircleIcon],svg[iconamoon-arrow-bottom-left-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4m0 0h4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft5CircleBoldIcon],svg[iconamoon-arrow-bottom-left-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4m0 0h4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft5CircleDuotoneIcon],svg[iconamoon-arrow-bottom-left-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10v4m0 0h4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft5CircleFillIcon],svg[iconamoon-arrow-bottom-left-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m8-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-1.586l2.293-2.293a1 1 0 0 0-1.414-1.414L11 11.586V10a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft5CircleLightIcon],svg[iconamoon-arrow-bottom-left-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4m0 0h4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft5CircleThinIcon],svg[iconamoon-arrow-bottom-left-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4m0 0h4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft6CircleIcon],svg[iconamoon-arrow-bottom-left-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft6CircleBoldIcon],svg[iconamoon-arrow-bottom-left-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft6CircleDuotoneIcon],svg[iconamoon-arrow-bottom-left-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft6CircleFillIcon],svg[iconamoon-arrow-bottom-left-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7 2a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3v-3a1 1 0 1 0-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft6CircleLightIcon],svg[iconamoon-arrow-bottom-left-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft6CircleThinIcon],svg[iconamoon-arrow-bottom-left-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 10v4h4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomLeft6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight1Icon],svg[iconamoon-arrow-bottom-right-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7v10m0 0H7m10 0L7 7"></svg:path>`,
})
export class IconamoonArrowBottomRight1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight1BoldIcon],svg[iconamoon-arrow-bottom-right-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 7v10m0 0H7m10 0L7 7"></svg:path>`,
})
export class IconamoonArrowBottomRight1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight1FillIcon],svg[iconamoon-arrow-bottom-right-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 18h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1.707-.707L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293A1 1 0 0 0 7 18" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomRight1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight1LightIcon],svg[iconamoon-arrow-bottom-right-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7v10m0 0H7m10 0L7 7"></svg:path>`,
})
export class IconamoonArrowBottomRight1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight1ThinIcon],svg[iconamoon-arrow-bottom-right-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 7v10m0 0H7m10 0L7 7"></svg:path>`,
})
export class IconamoonArrowBottomRight1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight3SquareIcon],svg[iconamoon-arrow-bottom-right-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4m0 0v-4m0 4l-4-4"></svg:path>`,
})
export class IconamoonArrowBottomRight3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight3SquareBoldIcon],svg[iconamoon-arrow-bottom-right-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4m0 0v-4m0 4l-4-4"></svg:path>`,
})
export class IconamoonArrowBottomRight3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight3SquareDuotoneIcon],svg[iconamoon-arrow-bottom-right-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4m0 0v-4m0 4l-4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight3SquareFillIcon],svg[iconamoon-arrow-bottom-right-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm7 11h4a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v1.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13H10a1 1 0 1 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomRight3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight3SquareLightIcon],svg[iconamoon-arrow-bottom-right-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4m0 0v-4m0 4l-4-4"></svg:path>`,
})
export class IconamoonArrowBottomRight3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight3SquareThinIcon],svg[iconamoon-arrow-bottom-right-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4m0 0v-4m0 4l-4-4"></svg:path>`,
})
export class IconamoonArrowBottomRight3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight4SquareIcon],svg[iconamoon-arrow-bottom-right-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight4SquareBoldIcon],svg[iconamoon-arrow-bottom-right-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight4SquareDuotoneIcon],svg[iconamoon-arrow-bottom-right-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight4SquareFillIcon],svg[iconamoon-arrow-bottom-right-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm11 11a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3h-3a1 1 0 1 0 0 2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomRight4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight4SquareLightIcon],svg[iconamoon-arrow-bottom-right-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight4SquareThinIcon],svg[iconamoon-arrow-bottom-right-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight5CircleIcon],svg[iconamoon-arrow-bottom-right-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4m0 0v-4m0 4l-4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight5CircleBoldIcon],svg[iconamoon-arrow-bottom-right-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4m0 0v-4m0 4l-4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight5CircleDuotoneIcon],svg[iconamoon-arrow-bottom-right-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14h4m0 0v-4m0 4l-4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight5CircleFillIcon],svg[iconamoon-arrow-bottom-right-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7 2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v1.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13H10a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomRight5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight5CircleLightIcon],svg[iconamoon-arrow-bottom-right-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4m0 0v-4m0 4l-4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight5CircleThinIcon],svg[iconamoon-arrow-bottom-right-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4m0 0v-4m0 4l-4-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight6CircleIcon],svg[iconamoon-arrow-bottom-right-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight6CircleBoldIcon],svg[iconamoon-arrow-bottom-right-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight6CircleDuotoneIcon],svg[iconamoon-arrow-bottom-right-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight6CircleFillIcon],svg[iconamoon-arrow-bottom-right-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m12 3a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3h-3a1 1 0 1 0 0 2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomRight6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight6CircleLightIcon],svg[iconamoon-arrow-bottom-right-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomRight6CircleThinIcon],svg[iconamoon-arrow-bottom-right-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 14h4v-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomRight6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomUp4SquareIcon],svg[iconamoon-arrow-bottom-up-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomUp4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomUp4SquareBoldIcon],svg[iconamoon-arrow-bottom-up-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomUp4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomUp4SquareDuotoneIcon],svg[iconamoon-arrow-bottom-up-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomUp4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomUp4SquareFillIcon],svg[iconamoon-arrow-bottom-up-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm12 6a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomUp4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomUp4SquareLightIcon],svg[iconamoon-arrow-bottom-up-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomUp4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomUp4SquareThinIcon],svg[iconamoon-arrow-bottom-up-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowBottomUp4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown1Icon],svg[iconamoon-arrow-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m-7 7l7 7l7-7"></svg:path>`,
})
export class IconamoonArrowDown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown1BoldIcon],svg[iconamoon-arrow-down-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 19V5m-7 7l7 7l7-7"></svg:path>`,
})
export class IconamoonArrowDown1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown1DuotoneIcon],svg[iconamoon-arrow-down-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l7 7m0 0l7-7m-7 7V5"></svg:path>`,
})
export class IconamoonArrowDown1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown1FillIcon],svg[iconamoon-arrow-down-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 11a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 19 11h-6V5a1 1 0 1 0-2 0v6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowDown1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown1LightIcon],svg[iconamoon-arrow-down-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 12l7 7m0 0l7-7m-7 7V5"></svg:path>`,
})
export class IconamoonArrowDown1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown1ThinIcon],svg[iconamoon-arrow-down-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 12l7 7m0 0l7-7m-7 7V5"></svg:path>`,
})
export class IconamoonArrowDown1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown2Icon],svg[iconamoon-arrow-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"></svg:path>`,
})
export class IconamoonArrowDown2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown2BoldIcon],svg[iconamoon-arrow-down-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 10l5 5m0 0l5-5"></svg:path>`,
})
export class IconamoonArrowDown2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown2DuotoneIcon],svg[iconamoon-arrow-down-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"></svg:path>`,
})
export class IconamoonArrowDown2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown2FillIcon],svg[iconamoon-arrow-down-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowDown2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown2LightIcon],svg[iconamoon-arrow-down-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5"></svg:path>`,
})
export class IconamoonArrowDown2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown2ThinIcon],svg[iconamoon-arrow-down-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5"></svg:path>`,
})
export class IconamoonArrowDown2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown3SquareIcon],svg[iconamoon-arrow-down-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 8l3 3m0 0l3-3m-3 3V9"></svg:path>`,
})
export class IconamoonArrowDown3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown3SquareBoldIcon],svg[iconamoon-arrow-down-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 8l3 3m0 0l3-3m-3 3V9"></svg:path>`,
})
export class IconamoonArrowDown3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown3SquareDuotoneIcon],svg[iconamoon-arrow-down-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 8l3 3m0 0l3-3m-3 3V9"></svg:path></svg:g>`,
})
export class IconamoonArrowDown3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown3SquareFillIcon],svg[iconamoon-arrow-down-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm10 5a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 12.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowDown3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown3SquareLightIcon],svg[iconamoon-arrow-down-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 8l3 3m0 0l3-3m-3 3V9"></svg:path>`,
})
export class IconamoonArrowDown3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown3SquareThinIcon],svg[iconamoon-arrow-down-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 8l3 3m0 0l3-3m-3 3V9"></svg:path>`,
})
export class IconamoonArrowDown3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown4SquareIcon],svg[iconamoon-arrow-down-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown4SquareBoldIcon],svg[iconamoon-arrow-down-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown4SquareDuotoneIcon],svg[iconamoon-arrow-down-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown4SquareFillIcon],svg[iconamoon-arrow-down-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6.707 6.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowDown4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown4SquareLightIcon],svg[iconamoon-arrow-down-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown4SquareThinIcon],svg[iconamoon-arrow-down-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown5CircleIcon],svg[iconamoon-arrow-down-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 12l3 3m0 0l3-3m-3 3V9"></svg:path></svg:g>`,
})
export class IconamoonArrowDown5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown5CircleBoldIcon],svg[iconamoon-arrow-down-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 12l3 3m0 0l3-3m-3 3V9"></svg:path></svg:g>`,
})
export class IconamoonArrowDown5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown5CircleDuotoneIcon],svg[iconamoon-arrow-down-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12l3 3m0 0l3-3m-3 3V9"></svg:path></svg:g>`,
})
export class IconamoonArrowDown5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown5CircleFillIcon],svg[iconamoon-arrow-down-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-3a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 12.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowDown5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown5CircleLightIcon],svg[iconamoon-arrow-down-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 12l3 3m0 0l3-3m-3 3V9"></svg:path></svg:g>`,
})
export class IconamoonArrowDown5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown5CircleThinIcon],svg[iconamoon-arrow-down-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 12l3 3m0 0l3-3m-3 3V9"></svg:path></svg:g>`,
})
export class IconamoonArrowDown5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown6CircleIcon],svg[iconamoon-arrow-down-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown6CircleBoldIcon],svg[iconamoon-arrow-down-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown6CircleDuotoneIcon],svg[iconamoon-arrow-down-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown6CircleFillIcon],svg[iconamoon-arrow-down-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7.707-1.707a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowDown6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown6CircleLightIcon],svg[iconamoon-arrow-down-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown6CircleThinIcon],svg[iconamoon-arrow-down-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft1Icon],svg[iconamoon-arrow-left-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l-7 7l7 7"></svg:path>`,
})
export class IconamoonArrowLeft1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft1BoldIcon],svg[iconamoon-arrow-left-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14m-7-7l-7 7l7 7"></svg:path>`,
})
export class IconamoonArrowLeft1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft1DuotoneIcon],svg[iconamoon-arrow-left-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 5l-7 7m0 0l7 7m-7-7h14"></svg:path>`,
})
export class IconamoonArrowLeft1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft1FillIcon],svg[iconamoon-arrow-left-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 5a1 1 0 0 0-1.707-.707l-7 7a1 1 0 0 0 0 1.414l7 7A1 1 0 0 0 13 19v-6h6a1 1 0 1 0 0-2h-6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowLeft1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft1LightIcon],svg[iconamoon-arrow-left-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 5l-7 7m0 0l7 7m-7-7h14"></svg:path>`,
})
export class IconamoonArrowLeft1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft1ThinIcon],svg[iconamoon-arrow-left-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 5l-7 7m0 0l7 7m-7-7h14"></svg:path>`,
})
export class IconamoonArrowLeft1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft2Icon],svg[iconamoon-arrow-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5m0 0l5 5"></svg:path>`,
})
export class IconamoonArrowLeft2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft2BoldIcon],svg[iconamoon-arrow-left-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m14 7l-5 5m0 0l5 5"></svg:path>`,
})
export class IconamoonArrowLeft2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft2DuotoneIcon],svg[iconamoon-arrow-left-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5l5 5"></svg:path>`,
})
export class IconamoonArrowLeft2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft2FillIcon],svg[iconamoon-arrow-left-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 7a1 1 0 0 0-1.707-.707l-5 5a1 1 0 0 0 0 1.414l5 5A1 1 0 0 0 15 17z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowLeft2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft2LightIcon],svg[iconamoon-arrow-left-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5"></svg:path>`,
})
export class IconamoonArrowLeft2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft2ThinIcon],svg[iconamoon-arrow-left-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14 7l-5 5l5 5"></svg:path>`,
})
export class IconamoonArrowLeft2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft3SquareIcon],svg[iconamoon-arrow-left-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 5l-3 3m0 0l3 3m-3-3h6"></svg:path>`,
})
export class IconamoonArrowLeft3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft3SquareBoldIcon],svg[iconamoon-arrow-left-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 5l-3 3m0 0l3 3m-3-3h6"></svg:path>`,
})
export class IconamoonArrowLeft3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft3SquareDuotoneIcon],svg[iconamoon-arrow-left-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 5l-3 3m0 0l3 3m-3-3h6"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft3SquareFillIcon],svg[iconamoon-arrow-left-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9.707 5.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 13H15a1 1 0 1 0 0-2h-3.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowLeft3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft3SquareLightIcon],svg[iconamoon-arrow-left-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 5l-3 3m0 0l3 3m-3-3h6"></svg:path>`,
})
export class IconamoonArrowLeft3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft3SquareThinIcon],svg[iconamoon-arrow-left-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 5l-3 3m0 0l3 3m-3-3h6"></svg:path>`,
})
export class IconamoonArrowLeft3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft4SquareIcon],svg[iconamoon-arrow-left-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft4SquareBoldIcon],svg[iconamoon-arrow-left-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft4SquareDuotoneIcon],svg[iconamoon-arrow-left-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft4SquareFillIcon],svg[iconamoon-arrow-left-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm10.707 5.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 12z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowLeft4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft4SquareLightIcon],svg[iconamoon-arrow-left-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft4SquareThinIcon],svg[iconamoon-arrow-left-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft5CircleIcon],svg[iconamoon-arrow-left-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 9l-3 3m0 0l3 3m-3-3h6"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft5CircleBoldIcon],svg[iconamoon-arrow-left-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 9l-3 3m0 0l3 3m-3-3h6"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft5CircleDuotoneIcon],svg[iconamoon-arrow-left-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 9l-3 3m0 0l3 3m-3-3h6"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft5CircleFillIcon],svg[iconamoon-arrow-left-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10.707-2.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 13H15a1 1 0 1 0 0-2h-3.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowLeft5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft5CircleLightIcon],svg[iconamoon-arrow-left-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 9l-3 3m0 0l3 3m-3-3h6"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft5CircleThinIcon],svg[iconamoon-arrow-left-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 9l-3 3m0 0l3 3m-3-3h6"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft6CircleIcon],svg[iconamoon-arrow-left-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft6CircleBoldIcon],svg[iconamoon-arrow-left-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft6CircleDuotoneIcon],svg[iconamoon-arrow-left-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft6CircleFillIcon],svg[iconamoon-arrow-left-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11.707-2.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 12z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowLeft6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft6CircleLightIcon],svg[iconamoon-arrow-left-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft6CircleThinIcon],svg[iconamoon-arrow-left-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m13 9l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowLeft6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight1Icon],svg[iconamoon-arrow-right-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m7 7l7-7l-7-7"></svg:path>`,
})
export class IconamoonArrowRight1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight1BoldIcon],svg[iconamoon-arrow-right-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 12H5m7 7l7-7l-7-7"></svg:path>`,
})
export class IconamoonArrowRight1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight1DuotoneIcon],svg[iconamoon-arrow-right-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l7-7l-7-7m7 7H5"></svg:path>`,
})
export class IconamoonArrowRight1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight1FillIcon],svg[iconamoon-arrow-right-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 11 5v6H5a1 1 0 1 0 0 2h6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowRight1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight1LightIcon],svg[iconamoon-arrow-right-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 19l7-7l-7-7m7 7H5"></svg:path>`,
})
export class IconamoonArrowRight1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight1ThinIcon],svg[iconamoon-arrow-right-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 19l7-7l-7-7m7 7H5"></svg:path>`,
})
export class IconamoonArrowRight1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight2Icon],svg[iconamoon-arrow-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5"></svg:path>`,
})
export class IconamoonArrowRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight2BoldIcon],svg[iconamoon-arrow-right-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"></svg:path>`,
})
export class IconamoonArrowRight2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight2DuotoneIcon],svg[iconamoon-arrow-right-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"></svg:path>`,
})
export class IconamoonArrowRight2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight2FillIcon],svg[iconamoon-arrow-right-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 17a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 9 7z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowRight2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight2LightIcon],svg[iconamoon-arrow-right-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5"></svg:path>`,
})
export class IconamoonArrowRight2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight2ThinIcon],svg[iconamoon-arrow-right-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"></svg:path>`,
})
export class IconamoonArrowRight2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight3SquareIcon],svg[iconamoon-arrow-right-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 11l3-3m0 0l-3-3m3 3H9"></svg:path>`,
})
export class IconamoonArrowRight3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight3SquareBoldIcon],svg[iconamoon-arrow-right-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 11l3-3m0 0l-3-3m3 3H9"></svg:path>`,
})
export class IconamoonArrowRight3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight3SquareDuotoneIcon],svg[iconamoon-arrow-right-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 11l3-3m0 0l-3-3m3 3H9"></svg:path></svg:g>`,
})
export class IconamoonArrowRight3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight3SquareFillIcon],svg[iconamoon-arrow-right-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9.707 4.293a1 1 0 1 0-1.414 1.414L12.586 11H9a1 1 0 1 0 0 2h3.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowRight3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight3SquareLightIcon],svg[iconamoon-arrow-right-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 11l3-3m0 0l-3-3m3 3H9"></svg:path>`,
})
export class IconamoonArrowRight3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight3SquareThinIcon],svg[iconamoon-arrow-right-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 11l3-3m0 0l-3-3m3 3H9"></svg:path>`,
})
export class IconamoonArrowRight3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight4SquareIcon],svg[iconamoon-arrow-right-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight4SquareBoldIcon],svg[iconamoon-arrow-right-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight4SquareDuotoneIcon],svg[iconamoon-arrow-right-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight4SquareFillIcon],svg[iconamoon-arrow-right-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm7.293 10.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L12.586 12z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowRight4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight4SquareLightIcon],svg[iconamoon-arrow-right-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight4SquareThinIcon],svg[iconamoon-arrow-right-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight5CircleIcon],svg[iconamoon-arrow-right-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 15l3-3m0 0l-3-3m3 3H9"></svg:path></svg:g>`,
})
export class IconamoonArrowRight5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight5CircleBoldIcon],svg[iconamoon-arrow-right-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 15l3-3m0 0l-3-3m3 3H9"></svg:path></svg:g>`,
})
export class IconamoonArrowRight5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight5CircleDuotoneIcon],svg[iconamoon-arrow-right-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 15l3-3m0 0l-3-3m3 3H9"></svg:path></svg:g>`,
})
export class IconamoonArrowRight5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight5CircleFillIcon],svg[iconamoon-arrow-right-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10.707-3.707a1 1 0 1 0-1.414 1.414L12.586 11H9a1 1 0 1 0 0 2h3.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowRight5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight5CircleLightIcon],svg[iconamoon-arrow-right-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 15l3-3m0 0l-3-3m3 3H9"></svg:path></svg:g>`,
})
export class IconamoonArrowRight5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight5CircleThinIcon],svg[iconamoon-arrow-right-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m12 15l3-3m0 0l-3-3m3 3H9"></svg:path></svg:g>`,
})
export class IconamoonArrowRight5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight6CircleIcon],svg[iconamoon-arrow-right-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight6CircleBoldIcon],svg[iconamoon-arrow-right-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight6CircleDuotoneIcon],svg[iconamoon-arrow-right-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight6CircleFillIcon],svg[iconamoon-arrow-right-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m8.293 2.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L12.586 12z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowRight6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight6CircleLightIcon],svg[iconamoon-arrow-right-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight6CircleThinIcon],svg[iconamoon-arrow-right-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m11 15l3-3l-3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowRight6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft1Icon],svg[iconamoon-arrow-top-left-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7H7m0 0v10M7 7l10 10"></svg:path>`,
})
export class IconamoonArrowTopLeft1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft1BoldIcon],svg[iconamoon-arrow-top-left-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 7H7m0 0v10M7 7l10 10"></svg:path>`,
})
export class IconamoonArrowTopLeft1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft1FillIcon],svg[iconamoon-arrow-top-left-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1.707.707L12 13.414l4.293 4.293a1 1 0 0 0 1.414-1.414L13.414 12l4.293-4.293A1 1 0 0 0 17 6" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopLeft1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft1LightIcon],svg[iconamoon-arrow-top-left-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7H7m0 0v10M7 7l10 10"></svg:path>`,
})
export class IconamoonArrowTopLeft1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft1ThinIcon],svg[iconamoon-arrow-top-left-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 7H7m0 0v10M7 7l10 10"></svg:path>`,
})
export class IconamoonArrowTopLeft1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft2Icon],svg[iconamoon-arrow-top-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8H8v8"></svg:path>`,
})
export class IconamoonArrowTopLeft2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft2BoldIcon],svg[iconamoon-arrow-top-left-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 8H8v8"></svg:path>`,
})
export class IconamoonArrowTopLeft2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft2FillIcon],svg[iconamoon-arrow-top-left-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 7H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1.707.707l8-8A1 1 0 0 0 16 7" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopLeft2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft2LightIcon],svg[iconamoon-arrow-top-left-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8H8v8"></svg:path>`,
})
export class IconamoonArrowTopLeft2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft2ThinIcon],svg[iconamoon-arrow-top-left-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 8H8v8"></svg:path>`,
})
export class IconamoonArrowTopLeft2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft3SquareIcon],svg[iconamoon-arrow-top-left-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6h-4m0 0v4m0-4l4 4"></svg:path>`,
})
export class IconamoonArrowTopLeft3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft3SquareBoldIcon],svg[iconamoon-arrow-top-left-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6h-4m0 0v4m0-4l4 4"></svg:path>`,
})
export class IconamoonArrowTopLeft3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft3SquareDuotoneIcon],svg[iconamoon-arrow-top-left-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6h-4m0 0v4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft3SquareFillIcon],svg[iconamoon-arrow-top-left-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm11 5h-4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.586l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 11H14a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopLeft3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft3SquareLightIcon],svg[iconamoon-arrow-top-left-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6h-4m0 0v4m0-4l4 4"></svg:path>`,
})
export class IconamoonArrowTopLeft3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft3SquareThinIcon],svg[iconamoon-arrow-top-left-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6h-4m0 0v4m0-4l4 4"></svg:path>`,
})
export class IconamoonArrowTopLeft3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft4SquareIcon],svg[iconamoon-arrow-top-left-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft4SquareBoldIcon],svg[iconamoon-arrow-top-left-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft4SquareDuotoneIcon],svg[iconamoon-arrow-top-left-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft4SquareFillIcon],svg[iconamoon-arrow-top-left-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm7 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopLeft4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft4SquareLightIcon],svg[iconamoon-arrow-top-left-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft4SquareThinIcon],svg[iconamoon-arrow-top-left-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft5CircleIcon],svg[iconamoon-arrow-top-left-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4m0 0v4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft5CircleBoldIcon],svg[iconamoon-arrow-top-left-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4m0 0v4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft5CircleDuotoneIcon],svg[iconamoon-arrow-top-left-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h-4m0 0v4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft5CircleFillIcon],svg[iconamoon-arrow-top-left-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m13-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.586l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 11H14a1 1 0 0 0 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopLeft5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft5CircleLightIcon],svg[iconamoon-arrow-top-left-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4m0 0v4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft5CircleThinIcon],svg[iconamoon-arrow-top-left-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4m0 0v4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft6CircleIcon],svg[iconamoon-arrow-top-left-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft6CircleBoldIcon],svg[iconamoon-arrow-top-left-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft6CircleDuotoneIcon],svg[iconamoon-arrow-top-left-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft6CircleFillIcon],svg[iconamoon-arrow-top-left-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m8-3a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopLeft6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft6CircleLightIcon],svg[iconamoon-arrow-top-left-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft6CircleThinIcon],svg[iconamoon-arrow-top-left-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight1Icon],svg[iconamoon-arrow-top-right-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10m0 0v10m0-10L7 17"></svg:path>`,
})
export class IconamoonArrowTopRight1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight1BoldIcon],svg[iconamoon-arrow-top-right-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 7h10m0 0v10m0-10L7 17"></svg:path>`,
})
export class IconamoonArrowTopRight1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight1FillIcon],svg[iconamoon-arrow-top-right-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 17V7a1 1 0 0 0-1-1H7a1 1 0 0 0-.707 1.707L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293A1 1 0 0 0 18 17" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight1LightIcon],svg[iconamoon-arrow-top-right-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h10m0 0v10m0-10L7 17"></svg:path>`,
})
export class IconamoonArrowTopRight1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight1ThinIcon],svg[iconamoon-arrow-top-right-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 7h10m0 0v10m0-10L7 17"></svg:path>`,
})
export class IconamoonArrowTopRight1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight2Icon],svg[iconamoon-arrow-top-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16V8H8"></svg:path>`,
})
export class IconamoonArrowTopRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight2BoldIcon],svg[iconamoon-arrow-top-right-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 16V8H8"></svg:path>`,
})
export class IconamoonArrowTopRight2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight2FillIcon],svg[iconamoon-arrow-top-right-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 16V8a1 1 0 0 0-1-1H8a1 1 0 0 0-.707 1.707l8 8A1 1 0 0 0 17 16" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight2LightIcon],svg[iconamoon-arrow-top-right-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 16V8H8"></svg:path>`,
})
export class IconamoonArrowTopRight2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight2ThinIcon],svg[iconamoon-arrow-top-right-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 16V8H8"></svg:path>`,
})
export class IconamoonArrowTopRight2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight3SquareIcon],svg[iconamoon-arrow-top-right-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 10v-4m0 0h-4m4 0l-4 4"></svg:path>`,
})
export class IconamoonArrowTopRight3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight3SquareBoldIcon],svg[iconamoon-arrow-top-right-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 10v-4m0 0h-4m4 0l-4 4"></svg:path>`,
})
export class IconamoonArrowTopRight3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight3SquareDuotoneIcon],svg[iconamoon-arrow-top-right-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 10v-4m0 0h-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight3SquareFillIcon],svg[iconamoon-arrow-top-right-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm12 10v-4a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-2.293 2.293a1 1 0 1 0 1.414 1.414L13 12.414V14a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight3SquareLightIcon],svg[iconamoon-arrow-top-right-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 10v-4m0 0h-4m4 0l-4 4"></svg:path>`,
})
export class IconamoonArrowTopRight3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight3SquareThinIcon],svg[iconamoon-arrow-top-right-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 10v-4m0 0h-4m4 0l-4 4"></svg:path>`,
})
export class IconamoonArrowTopRight3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight5CircleIcon],svg[iconamoon-arrow-top-right-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4m0 0h-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight5CircleBoldIcon],svg[iconamoon-arrow-top-right-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4m0 0h-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight5CircleDuotoneIcon],svg[iconamoon-arrow-top-right-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 14v-4m0 0h-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight5CircleFillIcon],svg[iconamoon-arrow-top-right-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m12 3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-2.293 2.293a1 1 0 1 0 1.414 1.414L13 12.414V14a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight5CircleLightIcon],svg[iconamoon-arrow-top-right-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4m0 0h-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight5CircleThinIcon],svg[iconamoon-arrow-top-right-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4m0 0h-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight6CircleIcon],svg[iconamoon-arrow-top-right-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight6CircleBoldIcon],svg[iconamoon-arrow-top-right-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight6CircleDuotoneIcon],svg[iconamoon-arrow-top-right-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight6CircleFillIcon],svg[iconamoon-arrow-top-right-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m13-2a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight6CircleLightIcon],svg[iconamoon-arrow-top-right-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight6CircleThinIcon],svg[iconamoon-arrow-top-right-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 14v-4h-4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopRight6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp1Icon],svg[iconamoon-arrow-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7l-7-7l-7 7"></svg:path>`,
})
export class IconamoonArrowUp1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp1BoldIcon],svg[iconamoon-arrow-up-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 5v14m7-7l-7-7l-7 7"></svg:path>`,
})
export class IconamoonArrowUp1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp1DuotoneIcon],svg[iconamoon-arrow-up-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 12l-7-7l-7 7m7-7v14"></svg:path>`,
})
export class IconamoonArrowUp1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp1FillIcon],svg[iconamoon-arrow-up-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 13a1 1 0 0 0 .707-1.707l-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 13h6v6a1 1 0 1 0 2 0v-6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowUp1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp1LightIcon],svg[iconamoon-arrow-up-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 12l-7-7l-7 7m7-7v14"></svg:path>`,
})
export class IconamoonArrowUp1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp1ThinIcon],svg[iconamoon-arrow-up-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19 12l-7-7l-7 7m7-7v14"></svg:path>`,
})
export class IconamoonArrowUp1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp2Icon],svg[iconamoon-arrow-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5m0 0l-5 5"></svg:path>`,
})
export class IconamoonArrowUp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp2BoldIcon],svg[iconamoon-arrow-up-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m17 14l-5-5m0 0l-5 5"></svg:path>`,
})
export class IconamoonArrowUp2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp2DuotoneIcon],svg[iconamoon-arrow-up-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5l-5 5"></svg:path>`,
})
export class IconamoonArrowUp2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp2FillIcon],svg[iconamoon-arrow-up-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 15a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 15z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowUp2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp2LightIcon],svg[iconamoon-arrow-up-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5"></svg:path>`,
})
export class IconamoonArrowUp2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp2ThinIcon],svg[iconamoon-arrow-up-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17 14l-5-5l-5 5"></svg:path>`,
})
export class IconamoonArrowUp2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp3SquareIcon],svg[iconamoon-arrow-up-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 8l-3-3m0 0l-3 3m3-3v6"></svg:path>`,
})
export class IconamoonArrowUp3SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp3SquareBoldIcon],svg[iconamoon-arrow-up-3-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 8l-3-3m0 0l-3 3m3-3v6"></svg:path>`,
})
export class IconamoonArrowUp3SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp3SquareDuotoneIcon],svg[iconamoon-arrow-up-3-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 8l-3-3m0 0l-3 3m3-3v6"></svg:path></svg:g>`,
})
export class IconamoonArrowUp3SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp3SquareFillIcon],svg[iconamoon-arrow-up-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9.707 4.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 11.414V15a1 1 0 1 0 2 0v-3.586l1.293 1.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowUp3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp3SquareLightIcon],svg[iconamoon-arrow-up-3-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 8l-3-3m0 0l-3 3m3-3v6"></svg:path>`,
})
export class IconamoonArrowUp3SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp3SquareThinIcon],svg[iconamoon-arrow-up-3-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 8l-3-3m0 0l-3 3m3-3v6"></svg:path>`,
})
export class IconamoonArrowUp3SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp4SquareIcon],svg[iconamoon-arrow-up-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp4SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp4SquareBoldIcon],svg[iconamoon-arrow-up-4-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp4SquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp4SquareDuotoneIcon],svg[iconamoon-arrow-up-4-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp4SquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp4SquareFillIcon],svg[iconamoon-arrow-up-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm11.293 9.707a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L12 11.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowUp4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp4SquareLightIcon],svg[iconamoon-arrow-up-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp4SquareThinIcon],svg[iconamoon-arrow-up-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp5CircleIcon],svg[iconamoon-arrow-up-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 12l-3-3m0 0l-3 3m3-3v6"></svg:path></svg:g>`,
})
export class IconamoonArrowUp5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp5CircleBoldIcon],svg[iconamoon-arrow-up-5-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 12l-3-3m0 0l-3 3m3-3v6"></svg:path></svg:g>`,
})
export class IconamoonArrowUp5CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp5CircleDuotoneIcon],svg[iconamoon-arrow-up-5-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 12l-3-3m0 0l-3 3m3-3v6"></svg:path></svg:g>`,
})
export class IconamoonArrowUp5CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp5CircleFillIcon],svg[iconamoon-arrow-up-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m13.707-.707l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 11.414V15a1 1 0 1 0 2 0v-3.586l1.293 1.293a1 1 0 0 0 1.414-1.414" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowUp5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp5CircleLightIcon],svg[iconamoon-arrow-up-5-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 12l-3-3m0 0l-3 3m3-3v6"></svg:path></svg:g>`,
})
export class IconamoonArrowUp5CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp5CircleThinIcon],svg[iconamoon-arrow-up-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 12l-3-3m0 0l-3 3m3-3v6"></svg:path></svg:g>`,
})
export class IconamoonArrowUp5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp6CircleIcon],svg[iconamoon-arrow-up-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp6CircleBoldIcon],svg[iconamoon-arrow-up-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp6CircleDuotoneIcon],svg[iconamoon-arrow-up-6-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp6CircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp6CircleFillIcon],svg[iconamoon-arrow-up-6-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m12.293 1.707a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L12 11.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowUp6CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp6CircleLightIcon],svg[iconamoon-arrow-up-6-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp6CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp6CircleThinIcon],svg[iconamoon-arrow-up-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 13l-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconamoonArrowUp6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentIcon],svg[iconamoon-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15V9a6 6 0 1 1 12 0v8a4 4 0 0 1-8 0V9a2 2 0 1 1 4 0v8"></svg:path>`,
})
export class IconamoonAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentBoldIcon],svg[iconamoon-attachment-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 15V9a6 6 0 1 1 12 0v8a4 4 0 0 1-8 0V9a2 2 0 1 1 4 0v8"></svg:path>`,
})
export class IconamoonAttachmentBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentDuotoneIcon],svg[iconamoon-attachment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15V9a6 6 0 1 1 12 0v8a4 4 0 1 1-8 0V9a2 2 0 1 1 4 0v8"></svg:path>`,
})
export class IconamoonAttachmentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentFillIcon],svg[iconamoon-attachment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a5 5 0 0 0-5 5v6a1 1 0 1 1-2 0V9a7 7 0 1 1 14 0v8a5 5 0 0 1-10 0V9a3 3 0 0 1 6 0v8a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v8a3 3 0 0 0 6 0V9a5 5 0 0 0-5-5" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonAttachmentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentLightIcon],svg[iconamoon-attachment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 15V9a6 6 0 1 1 12 0v8a4 4 0 1 1-8 0V9a2 2 0 1 1 4 0v8"></svg:path>`,
})
export class IconamoonAttachmentLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentThinIcon],svg[iconamoon-attachment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 15V9a6 6 0 1 1 12 0v8a4 4 0 1 1-8 0V9a2 2 0 1 1 4 0v8"></svg:path>`,
})
export class IconamoonAttachmentThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionCircleIcon],svg[iconamoon-attention-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path stroke-width="3" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionCircleBoldIcon],svg[iconamoon-attention-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2.5"></svg:circle><svg:path stroke-width="3.75" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2.5" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionCircleDuotoneIcon],svg[iconamoon-attention-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionCircleFillIcon],svg[iconamoon-attention-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 1a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m-1.5 3a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonAttentionCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionCircleLightIcon],svg[iconamoon-attention-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="1.5"></svg:circle><svg:path stroke-width="2.25" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionCircleThinIcon],svg[iconamoon-attention-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round"></svg:circle><svg:path stroke-width="1.5" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionCircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionSquareIcon],svg[iconamoon-attention-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="2" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="3" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionSquareBoldIcon],svg[iconamoon-attention-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="2.5" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="3.75" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2.5" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionSquareDuotoneIcon],svg[iconamoon-attention-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionSquareFillIcon],svg[iconamoon-attention-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM12 13a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m-1.5 3a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonAttentionSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionSquareLightIcon],svg[iconamoon-attention-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="1.5" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="2.25" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionSquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionSquareThinIcon],svg[iconamoon-attention-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="1.5" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionSquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBackspaceIcon],svg[iconamoon-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.92 5a2 2 0 0 0-1.519.698l-4.285 5a2 2 0 0 0 0 2.604l4.285 5A2 2 0 0 0 7.92 19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM15 10l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBackspaceBoldIcon],svg[iconamoon-backspace-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7.92 5a2 2 0 0 0-1.519.698l-4.285 5a2 2 0 0 0 0 2.604l4.285 5A2 2 0 0 0 7.92 19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM15 10l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonBackspaceBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBackspaceDuotoneIcon],svg[iconamoon-backspace-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.92 5a2 2 0 0 0-1.519.698l-4.285 5a2 2 0 0 0 0 2.604l4.285 5A2 2 0 0 0 7.92 19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.92 5a2 2 0 0 0-1.519.698l-4.285 5a2 2 0 0 0 0 2.604l4.285 5A2 2 0 0 0 7.92 19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM15 10l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonBackspaceDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBackspaceFillIcon],svg[iconamoon-backspace-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.92 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.92a3 3 0 0 1-2.278-1.048l-4.285-5a3 3 0 0 1 0-3.904l4.285-5A3 3 0 0 1 7.92 4m2.373 5.293a1 1 0 0 1 1.414 0L13 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L14.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L13 13.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L11.586 12l-1.293-1.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBackspaceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBackspaceLightIcon],svg[iconamoon-backspace-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.92 5a2 2 0 0 0-1.519.698l-4.285 5a2 2 0 0 0 0 2.604l4.285 5A2 2 0 0 0 7.92 19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM15 10l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonBackspaceLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBackspaceThinIcon],svg[iconamoon-backspace-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.92 5a2 2 0 0 0-1.519.698l-4.285 5a2 2 0 0 0 0 2.604l4.285 5A2 2 0 0 0 7.92 19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM15 10l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonBackspaceThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeIcon],svg[iconamoon-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="2" d="M12.586 4.586A2 2 0 0 0 11.172 4H4v7.172a2 2 0 0 0 .586 1.414l7 7a2 2 0 0 0 2.828 0l5.172-5.172a2 2 0 0 0 0-2.828z"></svg:path><svg:path stroke-width="3" d="M9 9h.01v.01H9z"></svg:path></svg:g>`,
})
export class IconamoonBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeBoldIcon],svg[iconamoon-badge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="2.5" d="M12.586 4.586A2 2 0 0 0 11.172 4H4v7.172a2 2 0 0 0 .586 1.414l7 7a2 2 0 0 0 2.828 0l5.172-5.172a2 2 0 0 0 0-2.828z"></svg:path><svg:path stroke-width="3.75" d="M9 9h.01v.01H9z"></svg:path></svg:g>`,
})
export class IconamoonBadgeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeDuotoneIcon],svg[iconamoon-badge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.586 4.586A2 2 0 0 0 11.172 4H4v7.172a2 2 0 0 0 .586 1.414l7 7a2 2 0 0 0 2.828 0l5.172-5.172a2 2 0 0 0 0-2.828z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.586 4.586A2 2 0 0 0 11.172 4H4v7.172a2 2 0 0 0 .586 1.414l7 7a2 2 0 0 0 2.828 0l5.172-5.172a2 2 0 0 0 0-2.828z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M9 9h.01v.01H9z"></svg:path></svg:g>`,
})
export class IconamoonBadgeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeFillIcon],svg[iconamoon-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h7.172a3 3 0 0 1 2.12.879l7 7a3 3 0 0 1 0 4.242l-5.17 5.172a3 3 0 0 1-4.243 0l-7-7A3 3 0 0 1 3 11.172zm6 3.5A1.5 1.5 0 0 0 7.5 9v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBadgeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeLightIcon],svg[iconamoon-badge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="1.5" d="M12.586 4.586A2 2 0 0 0 11.172 4H4v7.172a2 2 0 0 0 .586 1.414l7 7a2 2 0 0 0 2.828 0l5.172-5.172a2 2 0 0 0 0-2.828z"></svg:path><svg:path stroke-width="2.25" d="M9 9h.01v.01H9z"></svg:path></svg:g>`,
})
export class IconamoonBadgeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeThinIcon],svg[iconamoon-badge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M12.586 4.586A2 2 0 0 0 11.172 4H4v7.172a2 2 0 0 0 .586 1.414l7 7a2 2 0 0 0 2.828 0l5.172-5.172a2 2 0 0 0 0-2.828z"></svg:path><svg:path stroke-width="1.5" d="M9 9h.01v.01H9z"></svg:path></svg:g>`,
})
export class IconamoonBadgeThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBluetoothIcon],svg[iconamoon-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17L19 7l-7-4v18l7-4L5 7"></svg:path>`,
})
export class IconamoonBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBluetoothBoldIcon],svg[iconamoon-bluetooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 17L19 7l-7-4v18l7-4L5 7"></svg:path>`,
})
export class IconamoonBluetoothBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBluetoothDuotoneIcon],svg[iconamoon-bluetooth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 3l7 4l-7 5l7 5l-7 4z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17L19 7l-7-4v18l7-4L5 7"></svg:path></svg:g>`,
})
export class IconamoonBluetoothDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBluetoothFillIcon],svg[iconamoon-bluetooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.498 2.135a1 1 0 0 1 .998-.003l7 4a1 1 0 0 1 .085 1.682L13.721 12l5.86 4.186a1 1 0 0 1-.085 1.682l-7 4A1 1 0 0 1 11 21v-7.057l-5.419 3.87a1 1 0 1 1-1.162-1.627L10.279 12L4.42 7.814a1 1 0 1 1 1.16-1.628l5.42 3.87V3a1 1 0 0 1 .498-.865M13 13.943l4.148 2.963L13 19.276zm0-3.886V4.723l4.148 2.37z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBluetoothFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBluetoothLightIcon],svg[iconamoon-bluetooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17L19 7l-7-4v18l7-4L5 7"></svg:path>`,
})
export class IconamoonBluetoothLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBluetoothThinIcon],svg[iconamoon-bluetooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 17L19 7l-7-4v18l7-4L5 7"></svg:path>`,
})
export class IconamoonBluetoothThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkIcon],svg[iconamoon-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class IconamoonBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkBoldIcon],svg[iconamoon-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class IconamoonBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkDuotoneIcon],svg[iconamoon-bookmark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class IconamoonBookmarkDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkFillIcon],svg[iconamoon-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.447.894L12 19.118l5.553 2.776A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBookmarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkLightIcon],svg[iconamoon-bookmark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class IconamoonBookmarkLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffIcon],svg[iconamoon-bookmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M8.657 3H16a2 2 0 0 1 2 2v7.343M6 6v15l6-3l6 3v-3"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonBookmarkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffBoldIcon],svg[iconamoon-bookmark-off-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"><svg:path stroke-linejoin="round" d="M8.657 3H16a2 2 0 0 1 2 2v7.343M6 6v15l6-3l6 3v-3"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonBookmarkOffBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffDuotoneIcon],svg[iconamoon-bookmark-off-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 18l6 3v-3L6 6v15z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.657 3H16a2 2 0 0 1 2 2v7.343M6 6v15l6-3l6 3v-3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonBookmarkOffDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffFillIcon],svg[iconamoon-bookmark-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.657 3a1 1 0 0 1 1-1H16a3 3 0 0 1 3 3v7.343a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H8.657a1 1 0 0 1-1-1m11.061 14.304l-.023-.023L6.72 5.304l-.023-.023l-1.989-1.988a1 1 0 0 0-1.414 1.414L5 6.414V21a1 1 0 0 0 1.447.894L12 19.118l5.553 2.776A1 1 0 0 0 19 21v-.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBookmarkOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffLightIcon],svg[iconamoon-bookmark-off-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8.657 3H16a2 2 0 0 1 2 2v7.343M6 6v15l6-3l6 3v-3"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonBookmarkOffLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffThinIcon],svg[iconamoon-bookmark-off-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M8.657 3H16a2 2 0 0 1 2 2v7.343M6 6v15l6-3l6 3v-3"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonBookmarkOffThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkThinIcon],svg[iconamoon-bookmark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class IconamoonBookmarkThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBoxIcon],svg[iconamoon-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-4h8l4 4H4zm0 8h4"></svg:path>`,
})
export class IconamoonBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBoxBoldIcon],svg[iconamoon-box-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-4h8l4 4H4zm0 8h4"></svg:path>`,
})
export class IconamoonBoxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBoxDuotoneIcon],svg[iconamoon-box-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-4h8l4 4H4zm0 8h4"></svg:path></svg:g>`,
})
export class IconamoonBoxDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBoxFillIcon],svg[iconamoon-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 3 7.954m0 .054V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.008l-.001-.054a1 1 0 0 0-.292-.661l-4-4A1 1 0 0 0 16 3H8m9.586 4l-2-2H8.414l-2 2zM7 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBoxLightIcon],svg[iconamoon-box-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-4h8l4 4H4zm0 8h4"></svg:path>`,
})
export class IconamoonBoxLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBoxThinIcon],svg[iconamoon-box-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-4h8l4 4H4zm0 8h4"></svg:path>`,
})
export class IconamoonBoxThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBriefcaseIcon],svg[iconamoon-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="2" d="M5 16h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM4 7h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="3" d="M12 12h.01v.01H12z"></svg:path><svg:path stroke-width="2" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path></svg:g>`,
})
export class IconamoonBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBriefcaseBoldIcon],svg[iconamoon-briefcase-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="2.5" d="M5 16h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM4 7h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="3.75" d="M12 12h.01v.01H12z"></svg:path><svg:path stroke-width="2.5" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path></svg:g>`,
})
export class IconamoonBriefcaseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBriefcaseDuotoneIcon],svg[iconamoon-briefcase-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 7h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 16h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM4 7h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M12 12h.01v.01H12z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path></svg:g>`,
})
export class IconamoonBriefcaseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBriefcaseFillIcon],svg[iconamoon-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 2a3 3 0 0 0-3 3v1H4a1 1 0 0 0-1 1v7a3 3 0 0 0 1 2.236V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2.764c.614-.55 1-1.348 1-2.236V7a1 1 0 0 0-1-1h-4V5a3 3 0 0 0-3-3zm3 4V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1zM6 19v-2h12v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1m6-8.5a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBriefcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBriefcaseLightIcon],svg[iconamoon-briefcase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M5 16h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM4 7h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="2.25" d="M12 12h.01v.01H12z"></svg:path><svg:path stroke-width="1.5" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path></svg:g>`,
})
export class IconamoonBriefcaseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonBriefcaseThinIcon],svg[iconamoon-briefcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M5 16h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM4 7h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="1.5" d="M12 12h.01v.01H12z"></svg:path><svg:path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path></svg:g>`,
})
export class IconamoonBriefcaseThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalculatorIcon],svg[iconamoon-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M5 3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" d="M5 9h14M9 13h1m4 0h1m-6 4h1m4 0h1"></svg:path></svg:g>`,
})
export class IconamoonCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalculatorBoldIcon],svg[iconamoon-calculator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2.5"><svg:path stroke-linejoin="round" d="M5 3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" d="M5 9h14M9 13h1m4 0h1m-6 4h1m4 0h1"></svg:path></svg:g>`,
})
export class IconamoonCalculatorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalculatorDuotoneIcon],svg[iconamoon-calculator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5 9h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 9h14"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 13h1m4 0h1m-6 4h1m4 0h1"></svg:path></svg:g>`,
})
export class IconamoonCalculatorDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalculatorFillIcon],svg[iconamoon-calculator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm14 1v4H6V4zM8 13a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-4 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm4 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCalculatorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalculatorLightIcon],svg[iconamoon-calculator-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 9h14"></svg:path><svg:path stroke-linejoin="round" d="M5 3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" d="M9 13h1m4 0h1m-6 4h1m4 0h1"></svg:path></svg:g>`,
})
export class IconamoonCalculatorLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalculatorThinIcon],svg[iconamoon-calculator-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M5 9h14"></svg:path><svg:path stroke-linejoin="round" d="M5 3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" d="M9 13h1m4 0h1m-6 4h1m4 0h1"></svg:path></svg:g>`,
})
export class IconamoonCalculatorThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar1Icon],svg[iconamoon-calendar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar1BoldIcon],svg[iconamoon-calendar-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar1DuotoneIcon],svg[iconamoon-calendar-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16m-4-5v2M8 3v2"></svg:path></svg:g>`,
})
export class IconamoonCalendar1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar1FillIcon],svg[iconamoon-calendar-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 2a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1h3a1 1 0 0 1 2 0h6a1 1 0 0 1 1-1M7 5a1 1 0 0 0 2 0h6a1 1 0 1 0 2 0h2v2H5V5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCalendar1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar1LightIcon],svg[iconamoon-calendar-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar1ThinIcon],svg[iconamoon-calendar-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar2Icon],svg[iconamoon-calendar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16M8 12h4m4-9v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar2BoldIcon],svg[iconamoon-calendar-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16M8 12h4m4-9v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar2DuotoneIcon],svg[iconamoon-calendar-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16M8 12h4m4-9v2M8 3v2"></svg:path></svg:g>`,
})
export class IconamoonCalendar2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar2FillIcon],svg[iconamoon-calendar-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3a1 1 0 1 0-2 0H9a1 1 0 0 0-2 0H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1zM8 6a1 1 0 0 1-1-1H5v2h14V5h-2a1 1 0 1 1-2 0H9a1 1 0 0 1-1 1m0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCalendar2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar2LightIcon],svg[iconamoon-calendar-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16M8 12h4m4-9v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar2ThinIcon],svg[iconamoon-calendar-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16M8 12h4m4-9v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendar2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarAddIcon],svg[iconamoon-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 8v4m-2-2h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarAddBoldIcon],svg[iconamoon-calendar-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 8v4m-2-2h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarAddDuotoneIcon],svg[iconamoon-calendar-add-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 8v4m-2-2h4M4 8h16m-4-5v2M8 3v2"></svg:path></svg:g>`,
})
export class IconamoonCalendarAddDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarAddFillIcon],svg[iconamoon-calendar-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3a1 1 0 1 0-2 0H9a1 1 0 0 0-2 0H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1zM8 6a1 1 0 0 1-1-1H5v2h14V5h-2a1 1 0 1 1-2 0H9a1 1 0 0 1-1 1m4 5a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCalendarAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarAddLightIcon],svg[iconamoon-calendar-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 8v4m-2-2h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarAddThinIcon],svg[iconamoon-calendar-add-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 8v4m-2-2h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarAddThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarRemoveIcon],svg[iconamoon-calendar-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarRemoveBoldIcon],svg[iconamoon-calendar-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarRemoveDuotoneIcon],svg[iconamoon-calendar-remove-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4M4 8h16m-4-5v2M8 3v2"></svg:path></svg:g>`,
})
export class IconamoonCalendarRemoveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarRemoveFillIcon],svg[iconamoon-calendar-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3a1 1 0 1 0-2 0H9a1 1 0 0 0-2 0H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1zM8 6a1 1 0 0 1-1-1H5v2h14V5h-2a1 1 0 1 1-2 0H9a1 1 0 0 1-1 1m2 7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCalendarRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarRemoveLightIcon],svg[iconamoon-calendar-remove-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarRemoveLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarRemoveThinIcon],svg[iconamoon-calendar-remove-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 10h4M4 8h16m-4-5v2M8 3v2"></svg:path>`,
})
export class IconamoonCalendarRemoveThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraImageIcon],svg[iconamoon-camera-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="12" cy="12" r="3" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M17 2h2"></svg:path></svg:g>`,
})
export class IconamoonCameraImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraImageBoldIcon],svg[iconamoon-camera-image-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="12" cy="12" r="3" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M17 2h2"></svg:path></svg:g>`,
})
export class IconamoonCameraImageBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraImageDuotoneIcon],svg[iconamoon-camera-image-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 6H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-9 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 2h2"></svg:path></svg:g>`,
})
export class IconamoonCameraImageDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraImageFillIcon],svg[iconamoon-camera-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 3a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zM2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm10 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCameraImageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraImageLightIcon],svg[iconamoon-camera-image-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="12" cy="12" r="3" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M17 2h2"></svg:path></svg:g>`,
})
export class IconamoonCameraImageLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraImageThinIcon],svg[iconamoon-camera-image-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="12" cy="12" r="3" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M17 2h2"></svg:path></svg:g>`,
})
export class IconamoonCameraImageThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoIcon],svg[iconamoon-camera-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 5h14v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 4l2.758-.69A1 1 0 0 1 21 9.28v5.44a1 1 0 0 1-1.242.97L17 15z"></svg:path>`,
})
export class IconamoonCameraVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoBoldIcon],svg[iconamoon-camera-video-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5" d="M3 5h14v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 4l2.758-.69A1 1 0 0 1 21 9.28v5.44a1 1 0 0 1-1.242.97L17 15z"></svg:path>`,
})
export class IconamoonCameraVideoBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoDuotoneIcon],svg[iconamoon-camera-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 6h14v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 5h14v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 4l2.758-.69A1 1 0 0 1 21 9.28v5.44a1 1 0 0 1-1.242.97L17 15z"></svg:path></svg:g>`,
})
export class IconamoonCameraVideoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoFillIcon],svg[iconamoon-camera-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2.72l1.515-.38A2 2 0 0 1 22 9.28v5.44a2 2 0 0 1-2.485 1.94L18 16.28V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm16 9.22l2 .5V9.28l-2 .5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCameraVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoLightIcon],svg[iconamoon-camera-video-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M3 5h14v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 4l2.758-.69A1 1 0 0 1 21 9.28v5.44a1 1 0 0 1-1.242.97L17 15z"></svg:path>`,
})
export class IconamoonCameraVideoLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoThinIcon],svg[iconamoon-camera-video-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3 5h14v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 4l2.758-.69A1 1 0 0 1 21 9.28v5.44a1 1 0 0 1-1.242.97L17 15z"></svg:path>`,
})
export class IconamoonCameraVideoThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCategoryIcon],svg[iconamoon-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="17" cy="7" r="3"></svg:circle><svg:circle cx="7" cy="17" r="3"></svg:circle><svg:path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class IconamoonCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCategoryBoldIcon],svg[iconamoon-category-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="17" cy="7" r="3"></svg:circle><svg:circle cx="7" cy="17" r="3"></svg:circle><svg:path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class IconamoonCategoryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCategoryDuotoneIcon],svg[iconamoon-category-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="17" cy="7" r="3" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="7" cy="17" r="3" fill="currentColor" opacity=".16"></svg:circle><svg:path fill="currentColor" d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" opacity=".16"></svg:path><svg:circle cx="17" cy="7" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:circle cx="7" cy="17" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class IconamoonCategoryDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCategoryFillIcon],svg[iconamoon-category-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8M3 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0m10-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zM3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCategoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCategoryLightIcon],svg[iconamoon-category-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="17" cy="7" r="3"></svg:circle><svg:circle cx="7" cy="17" r="3"></svg:circle><svg:path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class IconamoonCategoryLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCategoryThinIcon],svg[iconamoon-category-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="17" cy="7" r="3"></svg:circle><svg:circle cx="7" cy="17" r="3"></svg:circle><svg:path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class IconamoonCategoryThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCertificateBadgeIcon],svg[iconamoon-certificate-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15 22l-.555.832A1 1 0 0 0 16 22zm-3-2l.555-.832a1 1 0 0 0-1.11 0zm-3 2H8a1 1 0 0 0 1.555.832zM8.75 3.537l-.08.997zm1.685-.697l-.762-.648zM6.532 5.686l-.997.08zm2.154-2.154l.08-.997zM5.84 7.435l.648.761zm.697-1.684l.997-.08zm-.747 4.772l-.648.762zm0-3.046l-.648-.762zm.747 4.772l-.997-.08zm-.697-1.684l.648-.761zm2.846 3.903l.08.997zm-2.154-2.154l.997.08zm3.903 2.846l.761-.648zm-1.684-.697l-.08-.997zm4.772.747l.762.648zm-3.046 0l-.762.648zm4.772-.747l.08-.997zm-1.684.697l-.761-.648zm3.903-2.846l.997-.08zm-2.154 2.154l-.08.997zm2.846-3.903l.648.762zm-.697 1.684l-.997.08zm.747-4.772l.648-.762zm0 3.046l-.648-.761zm-.747-4.772l-.997-.08zm.697 1.684l-.648.761zm-2.846-3.903l-.08-.997zm2.154 2.154l.997.08zM13.565 2.84l.762-.648zm1.684.697l.08.997zm-1.726-.747l-.761.648zm-3.046 0l.761.648zM9 14.458l.044-.999zm6.555 6.71l-3-2l-1.11 1.664l3 2zm-4.11-2l-3 2l1.11 1.664l3-2zm1.317-15.73l.042.05l1.523-1.296l-.042-.05zm2.567 1.096l.065-.005l-.16-1.994l-.065.005zm1.142 1.072l-.005.065l1.994.16l.005-.065zm1.041 2.59l.05.042l1.296-1.523l-.05-.042zm.05 1.566l-.05.042l1.296 1.523l.05-.042zm-1.096 2.567l.005.065l1.994-.16l-.005-.065zm-1.072 1.142l-.065-.005l-.16 1.994l.065.005zm-2.59 1.041l-.042.05l1.523 1.296l.042-.05zm-1.566.05l-.042-.05l-1.523 1.296l.042.05zm-2.567-1.096l-.065.005l.16 1.994l.065-.005zm-1.142-1.072l.005-.065l-1.994-.16l-.005.065zm-1.041-2.59l-.05-.042l-1.296 1.523l.05.042zm-.05-1.566l.05-.042l-1.296-1.523l-.05.042zm1.096-2.567l-.005-.065l-1.994.16l.005.065zm1.072-1.142l.065.005l.16-1.994l-.065-.005zm2.59-1.041l.042-.05l-1.523-1.296l-.042.05zM8.671 4.534a3 3 0 0 0 2.525-1.046L9.673 2.192a1 1 0 0 1-.842.348zM7.529 5.606a1 1 0 0 1 1.077-1.077l.16-1.994a3 3 0 0 0-3.23 3.231zm-1.041 2.59a3 3 0 0 0 1.046-2.525l-1.994.16a1 1 0 0 1-.348.842zm-.05 1.566a1 1 0 0 1 0-1.524L5.142 6.715a3 3 0 0 0 0 4.57zm1.096 2.567a3 3 0 0 0-1.046-2.525l-1.296 1.523a1 1 0 0 1 .348.842zm1.072 1.142a1 1 0 0 1-1.077-1.077l-1.994-.16a3 3 0 0 0 3.231 3.23zm4.156 1.09a1 1 0 0 1-1.524 0l-1.523 1.297a3 3 0 0 0 4.57 0zm3.71-2.167a1 1 0 0 1-1.078 1.077l-.16 1.994a3 3 0 0 0 3.23-3.231zm1.04-2.59a3 3 0 0 0-1.046 2.525l1.994-.16a1 1 0 0 1 .348-.842zm.05-1.566a1 1 0 0 1 0 1.524l1.296 1.523a3 3 0 0 0 0-4.57zm-1.096-2.567a3 3 0 0 0 1.046 2.525l1.296-1.523a1 1 0 0 1-.348-.842zm-1.072-1.142a1 1 0 0 1 1.077 1.077l1.994.16a3 3 0 0 0-3.231-3.23zm-2.59-1.041a3 3 0 0 0 2.525 1.046l-.16-1.994a1 1 0 0 1-.842-.348zm1.48-1.346a3 3 0 0 0-4.569 0l1.523 1.296a1 1 0 0 1 1.524 0zm-3.088 12.37a3 3 0 0 0-2.152-1.053l-.088 1.998a1 1 0 0 1 .717.351zM9.044 13.46a3 3 0 0 0-.373.007l.16 1.994a1 1 0 0 1 .125-.003zM10 22v-7.542H8V22zm5.33-8.534a3 3 0 0 0-.374-.007l.088 1.998a1 1 0 0 1 .125.003zm-.374-.007a3 3 0 0 0-2.152 1.053l1.523 1.296a1 1 0 0 1 .717-.35zm-.956 1V22h2v-7.542z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8l-3 3l-1-1"></svg:path></svg:g>`,
})
export class IconamoonCertificateBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCertificateBadgeBoldIcon],svg[iconamoon-certificate-badge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15 22l-.693 1.04A1.25 1.25 0 0 0 16.25 22zm-3-2l.693-1.04a1.25 1.25 0 0 0-1.386 0zm-3 2H7.75a1.25 1.25 0 0 0 1.943 1.04zM8.75 3.537l-.1 1.246zm1.685-.697l-.952-.81zM6.532 5.686l-1.246.1zm2.154-2.154l.1-1.246zM5.84 7.435l.81.952zm.697-1.684l1.246-.1zm-.747 4.772l-.81.952zm0-3.046l-.81-.952zm.747 4.772l-1.246-.1zm-.697-1.684l.81-.952zm2.846 3.903l.1 1.246zm-2.154-2.154l1.246.1zm3.903 2.846l.952-.81zm-1.684-.697l-.1-1.246zm4.772.747l.952.81zm-3.046 0l-.952.81zm4.772-.747l.1-1.246zm-1.684.697l-.952-.81zm3.903-2.846l1.246-.1zm-2.154 2.154l-.1 1.246zm2.846-3.903l.81.952zm-.697 1.684l-1.246.1zm.747-4.772l.81-.952zm0 3.046l-.81-.952zm-.747-4.772l-1.246-.1zm.697 1.684l-.81.952zm-2.846-3.903l-.1-1.246zm2.154 2.154l1.246.1zM13.565 2.84l.952-.81zm1.684.697l.1 1.246zm-1.726-.747l-.952.81zm-3.046 0l.952.81zM9 14.458l.055-1.248zm6.693 6.502l-3-2l-1.386 2.08l3 2zm-4.386-2l-3 2l1.386 2.08l3-2zM12.57 3.6l.042.05l1.904-1.62l-.042-.05zm2.779 1.183l.064-.005l-.2-2.492l-.065.005zm.872.803l-.005.064l2.492.201l.005-.065zm1.128 2.8l.05.043l1.62-1.904l-.05-.042zm.05 1.185l-.05.042l1.62 1.904l.05-.042zm-1.183 2.779l.005.064l2.492-.2l-.005-.065zm-.803.872l-.064-.005l-.201 2.492l.065.005zm-2.8 1.128l-.043.05l1.904 1.62l.042-.05zm-1.185.05l-.042-.05l-1.904 1.62l.042.05zM8.65 13.217l-.064.005l.2 2.492l.065-.005zm-.872-.803l.005-.064l-2.492-.201l-.005.065zm-1.128-2.8L6.6 9.57l-1.62 1.904l.05.042zM6.6 8.428l.05-.042l-1.62-1.904l-.05.042zM7.783 5.65l-.005-.064l-2.492.2l.005.065zm.803-.872l.064.005l.201-2.492l-.065-.005zm2.8-1.128l.043-.05l-1.904-1.62l-.042.05zM8.65 4.783a3.25 3.25 0 0 0 2.737-1.133L9.483 2.03a.75.75 0 0 1-.632.261zm-.872.803a.75.75 0 0 1 .808-.808l.2-2.492a3.25 3.25 0 0 0-3.5 3.5zm-1.128 2.8A3.25 3.25 0 0 0 7.783 5.65l-2.492.201a.75.75 0 0 1-.261.632zM6.6 9.572a.75.75 0 0 1 0-1.142L4.98 6.525a3.25 3.25 0 0 0 0 4.95zm1.183 2.779A3.25 3.25 0 0 0 6.65 9.613l-1.62 1.904a.75.75 0 0 1 .261.632zm.803.872a.75.75 0 0 1-.808-.808l-2.492-.2a3.25 3.25 0 0 0 3.5 3.5zM12.57 14.4a.75.75 0 0 1-1.142 0l-1.904 1.62a3.25 3.25 0 0 0 4.95 0zm3.651-1.986a.75.75 0 0 1-.808.808l-.2 2.492a3.25 3.25 0 0 0 3.5-3.5zm1.128-2.8a3.25 3.25 0 0 0-1.133 2.736l2.492-.201a.75.75 0 0 1 .261-.632zm.05-1.185a.75.75 0 0 1 0 1.142l1.62 1.904a3.25 3.25 0 0 0 0-4.95zM16.217 5.65a3.25 3.25 0 0 0 1.133 2.737l1.62-1.904a.75.75 0 0 1-.261-.632zm-.803-.872a.75.75 0 0 1 .808.808l2.492.2a3.25 3.25 0 0 0-3.5-3.5zm-2.8-1.128a3.25 3.25 0 0 0 2.736 1.133l-.201-2.492a.75.75 0 0 1-.632-.261zm1.861-1.67a3.25 3.25 0 0 0-4.95 0l1.904 1.62a.75.75 0 0 1 1.142 0zm-3.088 12.37a3.25 3.25 0 0 0-2.332-1.14l-.11 2.497a.75.75 0 0 1 .538.263zm-2.332-1.14a3 3 0 0 0-.405.007l.201 2.492a1 1 0 0 1 .094-.002zM10.25 22v-7.542h-2.5V22zm5.1-8.783a3 3 0 0 0-.405-.007l.11 2.497q.046-.001.094.002zm-.405-.007a3.25 3.25 0 0 0-2.332 1.14l1.904 1.62a.75.75 0 0 1 .538-.263zm-1.195 1.248V22h2.5v-7.542z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m14 8l-3 3l-1-1"></svg:path></svg:g>`,
})
export class IconamoonCertificateBadgeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCertificateBadgeDuotoneIcon],svg[iconamoon-certificate-badge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10.477 2.79a2 2 0 0 1 3.046 0l.042.05a2 2 0 0 0 1.684.697l.065-.005a2 2 0 0 1 2.154 2.154l-.005.065a2 2 0 0 0 .697 1.684l.05.042a2 2 0 0 1 0 3.046l-.05.042a2 2 0 0 0-.697 1.684l.005.065a2 2 0 0 1-2.154 2.154l-.065-.005a2 2 0 0 0-1.684.697l-.042.05a2 2 0 0 1-3.046 0l-.042-.05a2 2 0 0 0-1.684-.697l-.065.005a2 2 0 0 1-2.154-2.154l.005-.065a2 2 0 0 0-.697-1.684l-.05-.042a2 2 0 0 1 0-3.046l.05-.042a2 2 0 0 0 .697-1.684l-.005-.065a2 2 0 0 1 2.154-2.154l.065.005a2 2 0 0 0 1.684-.697z" opacity=".16"></svg:path><svg:path fill="currentColor" d="m15 22l-.555.832A1 1 0 0 0 16 22zm-3-2l.555-.832a1 1 0 0 0-1.11 0zm-3 2H8a1 1 0 0 0 1.555.832zM8.75 3.537l-.08.997zm1.685-.697l-.762-.648zM6.532 5.686l-.997.08zm2.154-2.154l.08-.997zM5.84 7.435l.648.761zm.697-1.684l.997-.08zm-.747 4.772l-.648.762zm0-3.046l-.648-.762zm.747 4.772l-.997-.08zm-.697-1.684l.648-.761zm2.846 3.903l.08.997zm-2.154-2.154l.997.08zm3.903 2.846l.761-.648zm-1.684-.697l-.08-.997zm4.772.747l.762.648zm-3.046 0l-.762.648zm4.772-.747l.08-.997zm-1.684.697l-.761-.648zm3.903-2.846l.997-.08zm-2.154 2.154l-.08.997zm2.846-3.903l.648.762zm-.697 1.684l-.997.08zm.747-4.772l.648-.762zm0 3.046l-.648-.761zm-.747-4.772l-.997-.08zm.697 1.684l-.648.761zm-2.846-3.903l-.08-.997zm2.154 2.154l.997.08zM13.565 2.84l.762-.648zm1.684.697l.08.997zm-1.726-.747l-.761.648zm-3.046 0l.761.648zM9 14.458l.044-.999zm6.555 6.71l-3-2l-1.11 1.664l3 2zm-4.11-2l-3 2l1.11 1.664l3-2zm1.317-15.73l.042.05l1.523-1.296l-.042-.05zm2.567 1.096l.065-.005l-.16-1.994l-.065.005zm1.142 1.072l-.005.065l1.994.16l.005-.065zm1.041 2.59l.05.042l1.296-1.523l-.05-.042zm.05 1.566l-.05.042l1.296 1.523l.05-.042zm-1.096 2.567l.005.065l1.994-.16l-.005-.065zm-1.072 1.142l-.065-.005l-.16 1.994l.065.005zm-2.59 1.041l-.042.05l1.523 1.296l.042-.05zm-1.566.05l-.042-.05l-1.523 1.296l.042.05zm-2.567-1.096l-.065.005l.16 1.994l.065-.005zm-1.142-1.072l.005-.065l-1.994-.16l-.005.065zm-1.041-2.59l-.05-.042l-1.296 1.523l.05.042zm-.05-1.566l.05-.042l-1.296-1.523l-.05.042zm1.096-2.567l-.005-.065l-1.994.16l.005.065zm1.072-1.142l.065.005l.16-1.994l-.065-.005zm2.59-1.041l.042-.05l-1.523-1.296l-.042.05zM8.671 4.534a3 3 0 0 0 2.525-1.046L9.673 2.192a1 1 0 0 1-.842.348zM7.529 5.606a1 1 0 0 1 1.077-1.077l.16-1.994a3 3 0 0 0-3.23 3.231zm-1.041 2.59a3 3 0 0 0 1.046-2.525l-1.994.16a1 1 0 0 1-.348.842zm-.05 1.566a1 1 0 0 1 0-1.524L5.142 6.715a3 3 0 0 0 0 4.57zm1.096 2.567a3 3 0 0 0-1.046-2.525l-1.296 1.523a1 1 0 0 1 .348.842zm1.072 1.142a1 1 0 0 1-1.077-1.077l-1.994-.16a3 3 0 0 0 3.231 3.23zm4.156 1.09a1 1 0 0 1-1.524 0l-1.523 1.297a3 3 0 0 0 4.57 0zm3.71-2.167a1 1 0 0 1-1.078 1.077l-.16 1.994a3 3 0 0 0 3.23-3.231zm1.04-2.59a3 3 0 0 0-1.046 2.525l1.994-.16a1 1 0 0 1 .348-.842zm.05-1.566a1 1 0 0 1 0 1.524l1.296 1.523a3 3 0 0 0 0-4.57zm-1.096-2.567a3 3 0 0 0 1.046 2.525l1.296-1.523a1 1 0 0 1-.348-.842zm-1.072-1.142a1 1 0 0 1 1.077 1.077l1.994.16a3 3 0 0 0-3.231-3.23zm-2.59-1.041a3 3 0 0 0 2.525 1.046l-.16-1.994a1 1 0 0 1-.842-.348zm1.48-1.346a3 3 0 0 0-4.569 0l1.523 1.296a1 1 0 0 1 1.524 0zm-3.088 12.37a3 3 0 0 0-2.152-1.053l-.088 1.998a1 1 0 0 1 .717.351zM9.044 13.46a3 3 0 0 0-.373.007l.16 1.994a1 1 0 0 1 .125-.003zM10 22v-7.542H8V22zm5.33-8.534a3 3 0 0 0-.374-.007l.088 1.998a1 1 0 0 1 .125.003zm-.374-.007a3 3 0 0 0-2.152 1.053l1.523 1.296a1 1 0 0 1 .717-.35zm-.956 1V22h2v-7.542z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8l-3 3l-1-1"></svg:path></svg:g>`,
})
export class IconamoonCertificateBadgeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCertificateBadgeFillIcon],svg[iconamoon-certificate-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.285 2.142a3 3 0 0 0-4.57 0l-.042.05a1 1 0 0 1-.842.348l-.065-.005a3 3 0 0 0-3.23 3.231l.004.065a1 1 0 0 1-.348.842l-.05.042a3 3 0 0 0 0 4.57l.05.042a1 1 0 0 1 .348.842l-.005.065A3 3 0 0 0 8 15.429V22a1 1 0 0 0 1.555.832L12 21.202l2.445 1.63A1 1 0 0 0 16 22v-6.57a3 3 0 0 0 2.465-3.196l-.005-.065a1 1 0 0 1 .348-.842l.05-.042a3 3 0 0 0 0-4.57l-.05-.042a1 1 0 0 1-.348-.842l.005-.065a3 3 0 0 0-3.231-3.23l-.065.004a1 1 0 0 1-.842-.348zM10 20.132V16.15a3 3 0 0 0 4 0v3.98l-1.445-.963a1 1 0 0 0-1.11 0zm4.707-11.425a1 1 0 0 0-1.414-1.414L11 9.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCertificateBadgeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCertificateBadgeLightIcon],svg[iconamoon-certificate-badge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15 22l-.416.624A.75.75 0 0 0 15.75 22zm-3-2l.416-.624a.75.75 0 0 0-.832 0zm-3 2h-.75a.75.75 0 0 0 1.166.624zM8.75 3.537l-.06.748zm1.685-.697l-.572-.486zM6.532 5.686l-.748.06zm2.154-2.154l.06-.748zM5.84 7.435l.486.57zm.697-1.684l.748-.06zm-.747 4.772l-.486.571zm0-3.046l-.486-.571zm.747 4.772l-.747-.06zm-.697-1.684l.486-.57zm2.846 3.903l.06.748zm-2.154-2.154l.747.06zm3.903 2.846l.57-.486zm-1.684-.697l-.06-.748zm4.772.747l.571.486zm-3.046 0l-.571.486zm4.772-.747l.06-.748zm-1.684.697l-.57-.486zm3.903-2.846l.748-.06zm-2.154 2.154l-.06.748zm2.846-3.903l.486.572zm-.697 1.684l-.748.06zm.747-4.772l.486-.571zm0 3.046l-.486-.571zm-.747-4.772l-.748-.06zm.697 1.684l-.486.57zm-2.846-3.903l-.06-.748zm2.154 2.154l.748.06zM13.565 2.84l.572-.486zm1.684.697l.06.748zm-1.726-.747l-.571.486zm-3.046 0l.571.486zM9 14.458l.033-.749zm6.416 6.918l-3-2l-.832 1.248l3 2zm-3.832-2l-3 2l.832 1.248l3-2zm1.368-16.1l.042.05l1.143-.972l-.043-.05zm2.357 1.009l.065-.006l-.12-1.495l-.065.006zm1.412 1.34l-.006.066l1.495.12l.006-.065zm.953 2.38l.05.043l.972-1.142l-.05-.043zm.05 1.947l-.05.042l.972 1.143l.05-.043zm-1.009 2.357l.006.065l1.495-.12l-.006-.065zm-1.34 1.412l-.066-.006l-.12 1.495l.065.006zm-2.38.953l-.043.05l1.142.972l.043-.05zm-1.947.05l-.042-.05l-1.143.972l.043.05zm-2.357-1.009l-.065.005l.12 1.496l.065-.005zm-1.412-1.34l.006-.066l-1.495-.12l-.006.065zm-.953-2.38l-.05-.043l-.972 1.142l.05.043zm-.05-1.947l.05-.042l-.972-1.143l-.05.043zm1.009-2.357l-.006-.065l-1.495.12l.006.065zm1.34-1.412l.066.006l.12-1.495l-.065-.006zm2.38-.953l.043-.05l-1.142-.972l-.043.05zm-2.314.959a2.75 2.75 0 0 0 2.315-.96l-1.143-.971a1.25 1.25 0 0 1-1.052.436zm-1.412 1.34A1.25 1.25 0 0 1 8.626 4.28l.12-1.495a2.75 2.75 0 0 0-2.962 2.962zm-.953 2.38a2.75 2.75 0 0 0 .959-2.314l-1.495.12c.032.4-.13.792-.436 1.052zm-.05 1.947a1.25 1.25 0 0 1 0-1.904l-.972-1.142a2.75 2.75 0 0 0 0 4.188zm1.009 2.357a2.75 2.75 0 0 0-.96-2.315l-.971 1.143c.306.26.468.652.436 1.052zm1.34 1.412a1.25 1.25 0 0 1-1.346-1.347l-1.495-.12a2.75 2.75 0 0 0 2.962 2.962zm4.327 1.003a1.25 1.25 0 0 1-1.904 0l-1.142.972a2.75 2.75 0 0 0 4.188 0zm3.769-2.35a1.25 1.25 0 0 1-1.347 1.346l-.12 1.496a2.75 2.75 0 0 0 2.962-2.962zm.953-2.38a2.75 2.75 0 0 0-.959 2.315l1.495-.12c-.032-.4.13-.792.436-1.052zm.05-1.946a1.25 1.25 0 0 1 0 1.904l.972 1.142a2.75 2.75 0 0 0 0-4.188zm-1.009-2.357a2.75 2.75 0 0 0 .96 2.315l.971-1.143a1.25 1.25 0 0 1-.436-1.052zm-1.34-1.412a1.25 1.25 0 0 1 1.346 1.347l1.495.12a2.75 2.75 0 0 0-2.962-2.962zm-2.38-.953a2.75 2.75 0 0 0 2.314.959l-.12-1.495a1.25 1.25 0 0 1-1.052-.436zm1.1-1.022a2.75 2.75 0 0 0-4.19 0l1.143.972a1.25 1.25 0 0 1 1.904 0zm-3.09 12.37a2.75 2.75 0 0 0-1.972-.965l-.066 1.499c.344.015.67.172.896.438zm-1.972-.965a3 3 0 0 0-.342.006l.12 1.495q.078-.006.156-.002zM9.75 22v-7.542h-1.5V22zm5.56-8.285a3 3 0 0 0-.343-.006l.066 1.499q.078-.004.156.002zm-.343-.006a2.75 2.75 0 0 0-1.973.965l1.143.972a1.25 1.25 0 0 1 .896-.438zm-.717.75V22h1.5v-7.542z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 8l-3 3l-1-1"></svg:path></svg:g>`,
})
export class IconamoonCertificateBadgeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCertificateBadgeThinIcon],svg[iconamoon-certificate-badge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15 22l-.277.416A.5.5 0 0 0 15.5 22zm-3-2l.277-.416a.5.5 0 0 0-.554 0zm-3 2h-.5a.5.5 0 0 0 .777.416zM8.75 3.537l-.04.499zm1.685-.697l-.381-.324zM6.532 5.686l-.498.04zm2.154-2.154l.04-.498zM5.84 7.435l.324.38zm.697-1.684l.499-.04zm-.747 4.772l-.324.381zm0-3.046l-.324-.381zm.747 4.772l-.498-.04zm-.697-1.684l.324-.38zm2.846 3.903l.04.498zm-2.154-2.154l.498.04zm3.903 2.846l.38-.324zm-1.684-.697l-.04-.498zm4.772.747l.381.324zm-3.046 0l-.381.324zm4.772-.747l.04-.498zm-1.684.697l-.38-.324zm3.903-2.846l.498-.04zm-2.154 2.154l-.04.498zm2.846-3.903l.324.381zm-.697 1.684l-.498.04zm.747-4.772l.324-.381zm0 3.046l-.324-.38zm-.747-4.772l-.498-.04zm.697 1.684l-.324.38zm-2.846-3.903l-.04-.498zm2.154 2.154l.498.04zM13.565 2.84l.381-.324zm1.684.697l.04.499zm-1.726-.747l-.38.324zm-3.046 0l.38.324zM9 14.458l.022-.5zm6.277 7.126l-3-2l-.554.832l3 2zm-3.554-2l-3 2l.554.832l3-2zm1.42-16.47l.042.05l.761-.648l-.042-.05zm2.146.922l.065-.006l-.08-.996l-.065.005zm1.68 1.61l-.005.065l.997.08l.006-.065zm.867 2.17l.05.042l.648-.762l-.05-.042zm.05 2.326l-.05.043l.648.761l.05-.042zm-.921 2.147l.005.065l.997-.08l-.006-.065zm-1.61 1.68l-.066-.005l-.08.997l.065.005zm-2.17.867l-.043.05l.762.648l.042-.05zm-2.327.05l-.043-.05l-.761.648l.042.05zm-2.147-.921l-.065.005l.08.996l.065-.005zm-1.68-1.61l.005-.066l-.997-.08l-.005.065zm-.867-2.17l-.05-.043l-.648.762l.05.042zm-.05-2.327l.05-.043l-.648-.761l-.05.042zm.922-2.147l-.006-.065l-.996.08l.005.065zm1.61-1.68l.065.005l.08-.997l-.065-.005zm2.17-.867l.042-.05l-.762-.648l-.042.05zm-2.105.872a2.5 2.5 0 0 0 2.105-.872l-.762-.648a1.5 1.5 0 0 1-1.263.523zm-1.68 1.61A1.5 1.5 0 0 1 8.645 4.03l.08-.996a2.5 2.5 0 0 0-2.692 2.692zm-.867 2.17a2.5 2.5 0 0 0 .872-2.105l-.997.08a1.5 1.5 0 0 1-.523 1.263zm-.05 2.326a1.5 1.5 0 0 1 0-2.284l-.648-.762a2.5 2.5 0 0 0 0 3.808zm.922 2.147a2.5 2.5 0 0 0-.872-2.104l-.648.761a1.5 1.5 0 0 1 .523 1.263zm1.61 1.68a1.5 1.5 0 0 1-1.616-1.615l-.996-.08a2.5 2.5 0 0 0 2.692 2.693zm4.496.917a1.5 1.5 0 0 1-2.284 0l-.762.648a2.5 2.5 0 0 0 3.808 0zm3.828-2.532a1.5 1.5 0 0 1-1.616 1.616l-.08.996a2.5 2.5 0 0 0 2.693-2.692zm.866-2.17a2.5 2.5 0 0 0-.871 2.105l.996-.08a1.5 1.5 0 0 1 .523-1.263zm.05-2.326a1.5 1.5 0 0 1 0 2.284l.648.762a2.5 2.5 0 0 0 0-3.808zm-.921-2.147a2.5 2.5 0 0 0 .871 2.104l.648-.761a1.5 1.5 0 0 1-.523-1.263zm-1.61-1.68a1.5 1.5 0 0 1 1.615 1.615l.997.08a2.5 2.5 0 0 0-2.693-2.692zm-2.17-.867a2.5 2.5 0 0 0 2.104.872l-.08-.997a1.5 1.5 0 0 1-1.263-.523zm.719-.698a2.5 2.5 0 0 0-3.808 0l.762.648a1.5 1.5 0 0 1 2.284 0zm-3.088 12.37a2.5 2.5 0 0 0-1.794-.877l-.044.999a1.5 1.5 0 0 1 1.076.526zm-1.794-.877a3 3 0 0 0-.311.005l.08.997q.094-.008.187-.003zM9.5 22v-7.542h-1V22zm5.79-8.036a3 3 0 0 0-.312-.005l.044.999q.093-.005.187.003zm-.312-.005a2.5 2.5 0 0 0-1.793.877l.761.648a1.5 1.5 0 0 1 1.076-.526zm-.478.5V22h1v-7.542z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14 8l-3 3l-1-1"></svg:path></svg:g>`,
})
export class IconamoonCertificateBadgeThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckIcon],svg[iconamoon-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7L10 17l-5-5"></svg:path>`,
})
export class IconamoonCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckBoldIcon],svg[iconamoon-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 7L10 17l-5-5"></svg:path>`,
})
export class IconamoonCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle1Icon],svg[iconamoon-check-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle1BoldIcon],svg[iconamoon-check-circle-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle1DuotoneIcon],svg[iconamoon-check-circle-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle1FillIcon],svg[iconamoon-check-circle-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCheckCircle1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle1LightIcon],svg[iconamoon-check-circle-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle1ThinIcon],svg[iconamoon-check-circle-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle2Icon],svg[iconamoon-check-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 7l1 1l3-3"></svg:path><svg:path d="M21 12a9 9 0 1 1-9-9"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle2BoldIcon],svg[iconamoon-check-circle-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="m15 7l1 1l3-3"></svg:path><svg:path d="M21 12a9 9 0 1 1-9-9"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle2DuotoneIcon],svg[iconamoon-check-circle-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 7l1 1l3-3"></svg:path><svg:path d="M21 12a9 9 0 1 1-9-9"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle2FillIcon],svg[iconamoon-check-circle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12a8 8 0 0 1 8-8a1 1 0 1 0 0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a1 1 0 1 0-2 0a8 8 0 1 1-16 0m15.707-6.293a1 1 0 0 0-1.414-1.414L16 6.586l-.293-.293a1 1 0 1 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCheckCircle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle2LightIcon],svg[iconamoon-check-circle-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15 7l1 1l3-3"></svg:path><svg:path d="M21 12a9 9 0 1 1-9-9"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckCircle2ThinIcon],svg[iconamoon-check-circle-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m15 7l1 1l3-3"></svg:path><svg:path d="M21 12a9 9 0 1 1-9-9"></svg:path></svg:g>`,
})
export class IconamoonCheckCircle2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckDuotoneIcon],svg[iconamoon-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7L10 17l-5-5"></svg:path>`,
})
export class IconamoonCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckFillIcon],svg[iconamoon-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.207 6.793a1 1 0 0 1 0 1.414l-9.5 9.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 1.414-1.414L10 15.586l8.793-8.793a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckLightIcon],svg[iconamoon-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7L10 17l-5-5"></svg:path>`,
})
export class IconamoonCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckSquareIcon],svg[iconamoon-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckSquareBoldIcon],svg[iconamoon-check-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckSquareDuotoneIcon],svg[iconamoon-check-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckSquareFillIcon],svg[iconamoon-check-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm12.707 6.707a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCheckSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckSquareLightIcon],svg[iconamoon-check-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckSquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckSquareThinIcon],svg[iconamoon-check-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m15 10l-4 4l-2-2"></svg:path></svg:g>`,
})
export class IconamoonCheckSquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCheckThinIcon],svg[iconamoon-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 7L10 17l-5-5"></svg:path>`,
})
export class IconamoonCheckThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeIcon],svg[iconamoon-cheque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 9h3m-3-4h10"></svg:path>`,
})
export class IconamoonChequeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeBoldIcon],svg[iconamoon-cheque-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 9h3m-3-4h10"></svg:path>`,
})
export class IconamoonChequeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeDuotoneIcon],svg[iconamoon-cheque-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 9h3m-3-4h10"></svg:path></svg:g>`,
})
export class IconamoonChequeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeFillIcon],svg[iconamoon-cheque-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm4 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonChequeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeLightIcon],svg[iconamoon-cheque-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 9h3m-3-4h10"></svg:path>`,
})
export class IconamoonChequeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeThinIcon],svg[iconamoon-cheque-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 9h3m-3-4h10"></svg:path>`,
})
export class IconamoonChequeThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonClockIcon],svg[iconamoon-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M11 8v5h5"></svg:path></svg:g>`,
})
export class IconamoonClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonClockBoldIcon],svg[iconamoon-clock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M11 8v5h5"></svg:path></svg:g>`,
})
export class IconamoonClockBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonClockDuotoneIcon],svg[iconamoon-clock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 8v5h5"></svg:path></svg:g>`,
})
export class IconamoonClockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonClockFillIcon],svg[iconamoon-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-4a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-4z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonClockLightIcon],svg[iconamoon-clock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M11 8v5h5"></svg:path></svg:g>`,
})
export class IconamoonClockLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonClockThinIcon],svg[iconamoon-clock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M11 8v5h5"></svg:path></svg:g>`,
})
export class IconamoonClockThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseIcon],svg[iconamoon-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10M7 17L17 7"></svg:path>`,
})
export class IconamoonCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseBoldIcon],svg[iconamoon-close-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 7l10 10M7 17L17 7"></svg:path>`,
})
export class IconamoonCloseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle1Icon],svg[iconamoon-close-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m14 10l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonCloseCircle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle1BoldIcon],svg[iconamoon-close-circle-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m14 10l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonCloseCircle1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle1DuotoneIcon],svg[iconamoon-close-circle-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 10l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonCloseCircle1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle1FillIcon],svg[iconamoon-close-circle-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7.293-2.707a1 1 0 0 1 1.414 0L12 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 12l-1.293-1.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloseCircle1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle1LightIcon],svg[iconamoon-close-circle-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m14 10l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonCloseCircle1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle1ThinIcon],svg[iconamoon-close-circle-1-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m14 10l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonCloseCircle1ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle2Icon],svg[iconamoon-close-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-9-9m7 2l-3 3m0-3l3 3"></svg:path>`,
})
export class IconamoonCloseCircle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle2BoldIcon],svg[iconamoon-close-circle-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12a9 9 0 1 1-9-9m7 2l-3 3m0-3l3 3"></svg:path>`,
})
export class IconamoonCloseCircle2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle2DuotoneIcon],svg[iconamoon-close-circle-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-9-9m7 2l-3 3m0-3l3 3"></svg:path>`,
})
export class IconamoonCloseCircle2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle2FillIcon],svg[iconamoon-close-circle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 1 0 8 8a1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2a1 1 0 1 1 0 2m7.707.293a1 1 0 0 1 0 1.414l-.793.793l.793.793a1 1 0 0 1-1.414 1.414l-.793-.793l-.793.793a1 1 0 1 1-1.414-1.414l.793-.793l-.793-.793a1 1 0 0 1 1.414-1.414l.793.793l.793-.793a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloseCircle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle2LightIcon],svg[iconamoon-close-circle-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-9-9m7 2l-3 3m0-3l3 3"></svg:path>`,
})
export class IconamoonCloseCircle2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle2ThinIcon],svg[iconamoon-close-circle-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-9-9m7 2l-3 3m0-3l3 3"></svg:path>`,
})
export class IconamoonCloseCircle2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseDuotoneIcon],svg[iconamoon-close-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10M7 17L17 7"></svg:path>`,
})
export class IconamoonCloseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseFillIcon],svg[iconamoon-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.793 6.793a1 1 0 0 1 1.414 0L12 10.586l3.793-3.793a1 1 0 1 1 1.414 1.414L13.414 12l3.793 3.793a1 1 0 0 1-1.414 1.414L12 13.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L10.586 12L6.793 8.207a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseLightIcon],svg[iconamoon-close-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 7l10 10M7 17L17 7"></svg:path>`,
})
export class IconamoonCloseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseSquareIcon],svg[iconamoon-close-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 10l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonCloseSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseSquareBoldIcon],svg[iconamoon-close-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 10l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonCloseSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseSquareDuotoneIcon],svg[iconamoon-close-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonCloseSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseSquareFillIcon],svg[iconamoon-close-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6.293 5.293a1 1 0 0 1 1.414 0L12 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 12l-1.293-1.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloseSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseSquareLightIcon],svg[iconamoon-close-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonCloseSquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseSquareThinIcon],svg[iconamoon-close-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 6l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonCloseSquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseThinIcon],svg[iconamoon-close-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 7l10 10M7 17L17 7"></svg:path>`,
})
export class IconamoonCloseThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudIcon],svg[iconamoon-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path>`,
})
export class IconamoonCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudAddIcon],svg[iconamoon-cloud-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M12 11v4m-2-2h4"></svg:path></svg:g>`,
})
export class IconamoonCloudAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudAddBoldIcon],svg[iconamoon-cloud-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M12 11v4m-2-2h4"></svg:path></svg:g>`,
})
export class IconamoonCloudAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudAddDuotoneIcon],svg[iconamoon-cloud-add-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v4m-2-2h4"></svg:path></svg:g>`,
})
export class IconamoonCloudAddDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudAddFillIcon],svg[iconamoon-cloud-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088M12 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudAddLightIcon],svg[iconamoon-cloud-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M12 11v4m-2-2h4"></svg:path></svg:g>`,
})
export class IconamoonCloudAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudAddThinIcon],svg[iconamoon-cloud-add-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M12 11v4m-2-2h4"></svg:path></svg:g>`,
})
export class IconamoonCloudAddThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudBoldIcon],svg[iconamoon-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path>`,
})
export class IconamoonCloudBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudClockIcon],svg[iconamoon-cloud-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M11 11v3h3"></svg:path></svg:g>`,
})
export class IconamoonCloudClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudClockBoldIcon],svg[iconamoon-cloud-clock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M11 11v3h3"></svg:path></svg:g>`,
})
export class IconamoonCloudClockBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudClockDuotoneIcon],svg[iconamoon-cloud-clock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11v3h3"></svg:path></svg:g>`,
})
export class IconamoonCloudClockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudClockFillIcon],svg[iconamoon-cloud-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088M12 11v2h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudClockLightIcon],svg[iconamoon-cloud-clock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M11 11v3h3"></svg:path></svg:g>`,
})
export class IconamoonCloudClockLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudClockThinIcon],svg[iconamoon-cloud-clock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="M11 11v3h3"></svg:path></svg:g>`,
})
export class IconamoonCloudClockThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudDownloadIcon],svg[iconamoon-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 13l2 2m0 0l2-2m-2 2V9"></svg:path></svg:g>`,
})
export class IconamoonCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudDownloadBoldIcon],svg[iconamoon-cloud-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 13l2 2m0 0l2-2m-2 2V9"></svg:path></svg:g>`,
})
export class IconamoonCloudDownloadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudDownloadDuotoneIcon],svg[iconamoon-cloud-download-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 13l2 2m0 0l2-2m-2 2V9"></svg:path></svg:g>`,
})
export class IconamoonCloudDownloadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudDownloadFillIcon],svg[iconamoon-cloud-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088m4.596 9.01a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414l-.293.293V9a1 1 0 1 0-2 0v3.586l-.293-.293a1 1 0 0 0-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudDownloadLightIcon],svg[iconamoon-cloud-download-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 13l2 2m0 0l2-2m-2 2V9"></svg:path></svg:g>`,
})
export class IconamoonCloudDownloadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudDownloadThinIcon],svg[iconamoon-cloud-download-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 13l2 2m0 0l2-2m-2 2V9"></svg:path></svg:g>`,
})
export class IconamoonCloudDownloadThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudDuotoneIcon],svg[iconamoon-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path></svg:g>`,
})
export class IconamoonCloudDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudErrorIcon],svg[iconamoon-cloud-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-width="3" d="M12 15.5h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M12 12V9"></svg:path></svg:g>`,
})
export class IconamoonCloudErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudErrorBoldIcon],svg[iconamoon-cloud-error-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="2.5" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-width="3.75" d="M12 15.5h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2.5" d="M12 12V9"></svg:path></svg:g>`,
})
export class IconamoonCloudErrorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudErrorDuotoneIcon],svg[iconamoon-cloud-error-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M12 15.5h.01v.01H12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V9"></svg:path></svg:g>`,
})
export class IconamoonCloudErrorDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudErrorFillIcon],svg[iconamoon-cloud-error-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088M12 13a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1m-1.5 2.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudErrorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudErrorLightIcon],svg[iconamoon-cloud-error-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-width="2.25" d="M12 15.5h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M12 12V9"></svg:path></svg:g>`,
})
export class IconamoonCloudErrorLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudErrorThinIcon],svg[iconamoon-cloud-error-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-width="1.5" d="M12 15.5h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" d="M12 12V9"></svg:path></svg:g>`,
})
export class IconamoonCloudErrorThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudFillIcon],svg[iconamoon-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.303 6.697a7.5 7.5 0 0 0-12.47 3.088A5.002 5.002 0 0 0 6.5 19.5h12a4 4 0 0 0 .99-7.876a7.47 7.47 0 0 0-2.187-4.927" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudLightIcon],svg[iconamoon-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path>`,
})
export class IconamoonCloudLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudNoIcon],svg[iconamoon-cloud-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 11l4 4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonCloudNoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudNoBoldIcon],svg[iconamoon-cloud-no-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 11l4 4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonCloudNoBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudNoDuotoneIcon],svg[iconamoon-cloud-no-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 11l4 4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonCloudNoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudNoFillIcon],svg[iconamoon-cloud-no-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088m4.01 3.596a1 1 0 0 0-1.414 1.414L10.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 14.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 13l1.293-1.293a1 1 0 0 0-1.414-1.414L12 11.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudNoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudNoLightIcon],svg[iconamoon-cloud-no-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 11l4 4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonCloudNoLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudNoThinIcon],svg[iconamoon-cloud-no-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></svg:path><svg:path stroke-linecap="round" d="m10 11l4 4m-4 0l4-4"></svg:path></svg:g>`,
})
export class IconamoonCloudNoThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudOffIcon],svg[iconamoon-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M7.05 7.05a6.96 6.96 0 0 0-1.81 3.129A4.502 4.502 0 0 0 6.5 19h12q.239 0 .469-.031m-8.203-13.86A6.99 6.99 0 0 1 16.95 7.05A6.98 6.98 0 0 1 19 12.035a3.5 3.5 0 0 1 2.917 4.225"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonCloudOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudOffBoldIcon],svg[iconamoon-cloud-off-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"><svg:path stroke-linejoin="round" d="M7.05 7.05a6.96 6.96 0 0 0-1.81 3.129A4.502 4.502 0 0 0 6.5 19h12q.239 0 .469-.031m-8.203-13.86A6.99 6.99 0 0 1 16.95 7.05A6.98 6.98 0 0 1 19 12.035a3.5 3.5 0 0 1 2.917 4.225"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonCloudOffBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudOffDuotoneIcon],svg[iconamoon-cloud-off-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path fill="currentColor" stroke-linejoin="round" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12q.239 0 .469-.031L7.05 7.05a6.96 6.96 0 0 0-1.81 3.129A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke-linejoin="round" d="M7.05 7.05a6.96 6.96 0 0 0-1.81 3.129A4.502 4.502 0 0 0 6.5 19h12q.239 0 .469-.031m-8.203-13.86A6.99 6.99 0 0 1 16.95 7.05A6.98 6.98 0 0 1 19 12.035a3.5 3.5 0 0 1 2.917 4.225"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonCloudOffDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudOffFillIcon],svg[iconamoon-cloud-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.707 3.293a1 1 0 0 0-1.414 1.414L5.68 7.094a8 8 0 0 0-1.248 2.308A5.501 5.501 0 0 0 6.5 20h12.085l.708.707a1 1 0 0 0 1.414-1.414l-1.023-1.023l-.015-.015L7.757 6.343zm11.536 4.464a5.99 5.99 0 0 0-5.302-1.663a1 1 0 1 1-.35-1.97a7.99 7.99 0 0 1 7.066 2.22a7.97 7.97 0 0 1 2.307 4.9a4.5 4.5 0 0 1 2.93 5.233a1 1 0 0 1-1.953-.433q.058-.261.059-.544a2.5 2.5 0 0 0-2.142-2.475A1 1 0 0 1 18 12.03a5.98 5.98 0 0 0-1.757-4.273" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudOffLightIcon],svg[iconamoon-cloud-off-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7.05 7.05a6.96 6.96 0 0 0-1.81 3.129A4.502 4.502 0 0 0 6.5 19h12q.239 0 .469-.031m-8.203-13.86A6.99 6.99 0 0 1 16.95 7.05A6.98 6.98 0 0 1 19 12.035a3.5 3.5 0 0 1 2.917 4.225"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonCloudOffLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
