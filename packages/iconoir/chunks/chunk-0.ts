import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAccessibilityIcon],svg[iconoir-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M7 9l5 1m5-1l-5 1m0 0v3m0 0l-2 5m2-5l2 5"></svg:path><svg:path fill="currentColor" d="M12 7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirActivityIcon],svg[iconoir-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h3l3-9l6 18l3-9h3"></svg:path>`,
})
export class IconoirActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeAfterEffectsSolidIcon],svg[iconoir-adobe-after-effects-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zm-3.5-1a.75.75 0 0 1-.75.75H16A2.75 2.75 0 0 1 13.25 14v-2a2.75 2.75 0 1 1 5.5 0v1a.75.75 0 0 1-.75.75h-3.25V14c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 1 .75.75m-1-3.75V12a1.25 1.25 0 1 0-2.5 0v.25zM5.298 15.736a.75.75 0 1 0 1.404.527l.943-2.513h2.71l.943 2.513a.75.75 0 1 0 1.404-.527l-3-8a.75.75 0 0 0-1.404 0zm4.495-3.486H8.207L9 10.136z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAdobeAfterEffectsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAccessibilitySignIcon],svg[iconoir-accessibility-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11.5 12.5l7-.5l-1.5 6.5m-5.5-6l4.5-5L12.5 5L10 7.5m8.5-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M5.5 12.5a5 5 0 0 1 7.584 6M3.729 15A5 5 0 0 0 11 20.831"></svg:path></svg:g>`,
})
export class IconoirAccessibilitySignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeIllustratorIcon],svg[iconoir-adobe-illustrator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4m-5 5v4m0-7v.01"></svg:path><svg:path d="m7 16l1.125-3M13 16l-1.125-3m-3.75 0L10 8l1.875 5m-3.75 0h3.75"></svg:path></svg:g>`,
})
export class IconoirAdobeIllustratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeAfterEffectsIcon],svg[iconoir-adobe-after-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"></svg:path><svg:path d="M14 13v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1zm0 0v1a2 2 0 0 0 2 2h1.5M6 16l1.125-3M12 16l-1.125-3m-3.75 0L9 8l1.875 5m-3.75 0h3.75"></svg:path></svg:g>`,
})
export class IconoirAdobeAfterEffectsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeIndesignIcon],svg[iconoir-adobe-indesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M8.5 8v8"></svg:path><svg:path d="M15.5 12v3.4a.6.6 0 0 1-.6.6h-1.4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zm0 0V9"></svg:path></svg:g>`,
})
export class IconoirAdobeIndesignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeIllustratorSolidIcon],svg[iconoir-adobe-illustrator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 21.75A4.75 4.75 0 0 0 21.75 17V7A4.75 4.75 0 0 0 17 2.25H7A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75zM15.25 16a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0zM16 9.76a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v.01a.75.75 0 0 1-.75.75m-9.702 5.977a.75.75 0 1 0 1.404.526l.943-2.513h2.71l.943 2.513a.75.75 0 1 0 1.404-.527l-3-8a.75.75 0 0 0-1.404 0zM10 10.136l.793 2.114H9.207z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAdobeIllustratorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeIndesignSolidIcon],svg[iconoir-adobe-indesign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zM8.5 16.75a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75m5-4h1.25v2.5H13.5a1.25 1.25 0 1 1 0-2.5m0 4a2.75 2.75 0 1 1 0-5.5h1.25V9a.75.75 0 0 1 1.5 0v6.4a1.35 1.35 0 0 1-1.35 1.35z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAdobeIndesignSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeLightroomIcon],svg[iconoir-adobe-lightroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"></svg:path><svg:path d="M7 8v8h4m3-5.5V13m0 3v-3m0 0s0-2.5 3-2.5"></svg:path></svg:g>`,
})
export class IconoirAdobeLightroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeLightroomSolidIcon],svg[iconoir-adobe-lightroom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zM7 16.75a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v7.25H11a.75.75 0 0 1 0 1.5zm6.25-.75a.75.75 0 0 0 1.5 0v-2.998l.003-.045a2 2 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887a.75.75 0 0 0 0-1.5c-.973 0-1.713.232-2.268.586a.75.75 0 0 0-1.482.164z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAdobeLightroomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobePhotoshopIcon],svg[iconoir-adobe-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"></svg:path><svg:path d="M7 16v-4m0 0V8h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2zm10-1c-.306-.613-.933-1-1.618-1H15a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 15 13h.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-.382a1.81 1.81 0 0 1-1.618-1v0"></svg:path></svg:g>`,
})
export class IconoirAdobePhotoshopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobePhotoshopSolidIcon],svg[iconoir-adobe-photoshop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zM7 16.75a.75.75 0 0 1-.75-.75V8A.75.75 0 0 1 7 7.25h2a2.75 2.75 0 1 1 0 5.5H7.75V16a.75.75 0 0 1-.75.75m.75-5.5H9a1.25 1.25 0 1 0 0-2.5H7.75zm8.579.085a.75.75 0 1 0 1.342-.67a2.56 2.56 0 0 0-2.29-1.415H15a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.382a1.06 1.06 0 0 1-.947-.585a.75.75 0 0 0-1.342.67a2.56 2.56 0 0 0 2.289 1.415h.382a2.25 2.25 0 1 0 0-4.5H15a.75.75 0 0 1 0-1.5h.382c.4 0 .768.227.947.585" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAdobePhotoshopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeXdIcon],svg[iconoir-adobe-xd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M7 8l4 8m-4 0l4-8"></svg:path><svg:path d="M17 12v3.4a.6.6 0 0 1-.6.6H15a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zm0 0V9"></svg:path></svg:g>`,
})
export class IconoirAdobeXdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeXdSolidIcon],svg[iconoir-adobe-xd-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zm-15.085-.33a.75.75 0 0 1-.336-1.006L8.162 12L6.329 8.335a.75.75 0 0 1 1.342-.67l1.33 2.658l1.328-2.659a.75.75 0 0 1 1.342.671L9.839 12l1.832 3.664a.75.75 0 0 1-1.342.671L9 13.677l-1.329 2.658a.75.75 0 0 1-1.006.336M15 12.75h1.25v2.5H15a1.25 1.25 0 1 1 0-2.5m0 4a2.75 2.75 0 1 1 0-5.5h1.25V9a.75.75 0 0 1 1.5 0v6.4a1.35 1.35 0 0 1-1.35 1.35z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAdobeXdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAfricanTreeIcon],svg[iconoir-african-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V12m0-4v4m0 0l3-3m-2.576 9.576l6.169-6.169a5.502 5.502 0 0 0-.513-8.234a9.904 9.904 0 0 0-12.16 0a5.502 5.502 0 0 0-.513 8.234l6.169 6.169a.6.6 0 0 0 .848 0"></svg:path>`,
})
export class IconoirAfricanTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAgileIcon],svg[iconoir-agile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.5 19H22m0 0l-2.5-2.5M22 19l-2.5 2.5M12 2L9.5 4.5L12 7"></svg:path><svg:path d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2"></svg:path><svg:path d="M6.756 5.5A7.5 7.5 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5"></svg:path></svg:g>`,
})
export class IconoirAgileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirConditionerIcon],svg[iconoir-air-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 3.6V11H2V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6M18 7h1M2 11l.79 2.584A2 2 0 0 0 4.702 15H6m16-4l-.79 2.584A2 2 0 0 1 19.298 15H18m-8.5-.5s0 7-3.5 7m8.5-7s0 7 3.5 7m-6-7v7"></svg:path>`,
})
export class IconoirAirConditionerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplaneIcon],svg[iconoir-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 4.5v4.667a.6.6 0 0 1-.282.51l-7.436 4.647a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l6.51 1.628a.6.6 0 0 0 .745-.582v-.9a.6.6 0 0 0-.282-.508l-7.436-4.648a.6.6 0 0 1-.282-.509V4.5a1.5 1.5 0 0 0-3 0"></svg:path>`,
})
export class IconoirAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplaneHelixIcon],svg[iconoir-airplane-helix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M12 9s-1.988-1.975-2-4c.001-1.993-.05-4.001 2-4c1.948.001 1.997 1.976 2 4c.003 1.985-2 4-2 4m3 3s1.975-1.988 4-2c1.993.001 4.001-.05 4 2c-.001 1.948-1.976 1.997-4 2c-1.985.003-4-2-4-2m-6 0s-1.975 1.988-4 2c-1.993-.001-4.001.05-4-2c.001-1.948 1.976-1.997 4-2c1.985-.003 4 2 4 2m3 3s1.988 1.975 2 4c-.001 1.993.05 4.001-2 4c-1.948-.001-1.997-1.976-2-4c-.003-1.985 2-4 2-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirAirplaneHelixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplaneHelix45degIcon],svg[iconoir-airplane-helix-45deg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path d="M14.12 14.121A3 3 0 1 0 9.879 9.88a3 3 0 0 0 4.243 4.242"></svg:path><svg:path d="M9.879 9.879s-2.803.009-4.243-1.415c-1.409-1.41-2.864-2.793-1.414-4.242c1.378-1.377 2.81-.015 4.242 1.414C9.87 7.037 9.88 9.879 9.88 9.879m4.241 0s-.009-2.803 1.415-4.243c1.41-1.409 2.793-2.864 4.242-1.414c1.377 1.378.015 2.81-1.414 4.242c-1.402 1.406-4.243 1.415-4.243 1.415m-4.242 4.242s.009 2.803-1.415 4.243c-1.41 1.409-2.793 2.864-4.242 1.414c-1.377-1.378-.015-2.81 1.414-4.242c1.401-1.406 4.243-1.415 4.243-1.415m4.242 0s2.803-.009 4.243 1.415c1.409 1.41 2.864 2.793 1.414 4.242c-1.378 1.377-2.81.015-4.242-1.414c-1.406-1.402-1.415-4.243-1.415-4.243" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirAirplaneHelix45degIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplaneOffIcon],svg[iconoir-airplane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.881 9.887l-7.099 4.437a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l.458.115M10.5 7.5v-3A1.5 1.5 0 0 1 12 3v0a1.5 1.5 0 0 1 1.5 1.5v4.667a.6.6 0 0 0 .282.51l7.436 4.647a.6.6 0 0 1 .282.508v.9a.6.6 0 0 1-.745.582l-2.006-.502M3 3l18 18"></svg:path>`,
})
export class IconoirAirplaneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplaneRotationIcon],svg[iconoir-airplane-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.879 14.122a3 3 0 1 0 4.242-4.243a3 3 0 0 0-4.242 4.243M4.37 16.773A8.96 8.96 0 0 1 3.002 12c0-4.236 2.934-7.792 6.878-8.747A9 9 0 0 1 12 3.002m7.715 4.365A8.95 8.95 0 0 1 20.999 12c0 3.806-2.368 7.063-5.709 8.378c-1.02.4-2.13.621-3.29.621"></svg:path><svg:path d="M14.121 9.88s-.009-2.803 1.415-4.243c1.41-1.409 2.793-2.865 4.242-1.415c1.377 1.378.015 2.81-1.414 4.243c-1.402 1.406-4.243 1.414-4.243 1.414M9.879 14.12s.009 2.803-1.415 4.243c-1.41 1.409-2.793 2.865-4.242 1.415c-1.377-1.378-.015-2.81 1.414-4.243c1.402-1.406 4.243-1.414 4.243-1.414" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirAirplaneRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplayIcon],svg[iconoir-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 17H3V4h18v13h-3"></svg:path><svg:path d="M8.622 19.067L11.5 14.75a.6.6 0 0 1 .998 0l2.88 4.318a.6.6 0 0 1-.5.933H9.12a.6.6 0 0 1-.5-.933Z"></svg:path></svg:g>`,
})
export class IconoirAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplaySolidIcon],svg[iconoir-airplay-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 17H3V4h18v13h-3"></svg:path><svg:path fill="currentColor" d="M8.622 19.067L11.5 14.75a.6.6 0 0 1 .998 0l2.88 4.318a.6.6 0 0 1-.5.933H9.12a.6.6 0 0 1-.5-.933Z"></svg:path></svg:g>`,
})
export class IconoirAirplaySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlarmIcon],svg[iconoir-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 13h-5V8M5 3.5L7 2m12 1.5L17 2"></svg:path><svg:path d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g>`,
})
export class IconoirAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlarmSolidIcon],svg[iconoir-alarm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m0 10.5a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v4.25H17a.75.75 0 0 1 0 1.5zm-7.6-9.8a.75.75 0 0 0 1.05.15l2-1.5a.75.75 0 1 0-.9-1.2l-2 1.5a.75.75 0 0 0-.15 1.05m15.2 0a.75.75 0 0 1-1.05.15l-2-1.5a.75.75 0 1 1 .9-1.2l2 1.5a.75.75 0 0 1 .15 1.05" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAlarmSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlbumIcon],svg[iconoir-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" d="M12 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 0V7.6a.6.6 0 0 1 .6-.6H15"></svg:path></svg:g>`,
})
export class IconoirAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlbumCarouselIcon],svg[iconoir-album-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 19.4V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" d="M22 6v12m-11-3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 0V8.6a.6.6 0 0 1 .6-.6H13"></svg:path></svg:g>`,
})
export class IconoirAlbumCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlbumListIcon],svg[iconoir-album-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 17.4V2.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" d="M8 22h13.4a.6.6 0 0 0 .6-.6V8m-11 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 0V6.6a.6.6 0 0 1 .6-.6H13"></svg:path></svg:g>`,
})
export class IconoirAlbumListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlbumOpenIcon],svg[iconoir-album-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 2.2c4.564.927 8 4.962 8 9.8s-3.436 8.873-8 9.8"></svg:path><svg:path stroke-linejoin="round" d="M15 9c1.141.284 2 1.519 2 3s-.859 2.716-2 3M1 2h10v20H1"></svg:path><svg:path d="M4 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 0V7.6a.6.6 0 0 1 .6-.6H7"></svg:path></svg:g>`,
})
export class IconoirAlbumOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignBottomBoxIcon],svg[iconoir-align-bottom-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8l.01.011M4 4l.01.011M8 4l.01.011M12 4l.01.011M16 4l.01.011M20 4l.01.011M20 8l.01.011M4 12v8h16v-8z"></svg:path>`,
})
export class IconoirAlignBottomBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignBottomBoxSolidIcon],svg[iconoir-align-bottom-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 8l.01.01M4 4l.01.01M8 4l.01.01M12 4l.01.01M16 4l.01.01M20 4l.01.01M20 8l.01.01"></svg:path><svg:path fill="currentColor" d="M4 12v8h16v-8z"></svg:path></svg:g>`,
})
export class IconoirAlignBottomBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignCenterIcon],svg[iconoir-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 14h18M6 10h12M6 18h12"></svg:path>`,
})
export class IconoirAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignHorizontalCentersIcon],svg[iconoir-align-horizontal-centers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22V2"></svg:path><svg:path d="M19 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirAlignHorizontalCentersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignHorizontalCentersSolidIcon],svg[iconoir-align-horizontal-centers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22V2"></svg:path><svg:path fill="currentColor" d="M19 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirAlignHorizontalCentersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignHorizontalSpacingIcon],svg[iconoir-align-horizontal-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22V2m18 20V2"></svg:path><svg:path d="M15 16H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirAlignHorizontalSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignHorizontalSpacingSolidIcon],svg[iconoir-align-horizontal-spacing-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22V2m18 20V2"></svg:path><svg:path fill="currentColor" d="M15 16H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirAlignHorizontalSpacingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignJustifyIcon],svg[iconoir-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 10h18M3 14h18M3 18h18"></svg:path>`,
})
export class IconoirAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignLeftIcon],svg[iconoir-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h14M3 6h18M3 18h14M3 14h18"></svg:path>`,
})
export class IconoirAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignLeftBoxIcon],svg[iconoir-align-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.004 3.995l-.011.01m4.011-.01l-.011.01m.011 3.99l-.011.01m.011 3.99l-.011.01m.011 3.99l-.011.01m.011 3.99l-.011.01m-3.989-.01l-.011.01m-3.987-16.01h-8v16h8z"></svg:path>`,
})
export class IconoirAlignLeftBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignLeftBoxSolidIcon],svg[iconoir-align-left-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.005 3.995l-.011.01m4.011-.01l-.011.01m.011 3.99l-.011.01m.011 3.99l-.011.01m.011 3.99l-.011.01m.011 3.99l-.011.01m-3.989-.01l-.011.01"></svg:path><svg:path fill="currentColor" d="M12.005 3.995h-8v16h8z"></svg:path></svg:g>`,
})
export class IconoirAlignLeftBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignRightIcon],svg[iconoir-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 10h14M3 6h18M7 18h14M3 14h18"></svg:path>`,
})
export class IconoirAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignRightBoxIcon],svg[iconoir-align-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.006 20.005l.01-.01m-4.01.01l.01-.01m-.01-3.99l.01-.01m-.01-3.99l.01-.01m-.01-3.99l.01-.01m-.01-3.99l.01-.01m3.99.01l.01-.01m3.99 16.01h8v-16h-8z"></svg:path>`,
})
export class IconoirAlignRightBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignRightBoxSolidIcon],svg[iconoir-align-right-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.005 20.005l.011-.01m-4.011.01l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m3.989.01l.011-.01"></svg:path><svg:path fill="currentColor" d="M12.005 20.005h8v-16h-8z"></svg:path></svg:g>`,
})
export class IconoirAlignRightBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignTopBoxIcon],svg[iconoir-align-top-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 16l.01-.011M4 20l.01-.011M8 20l.01-.011M12 20l.01-.011M16 20l.01-.011M20 20l.01-.011M20 16l.01-.011M4 12V4h16v8z"></svg:path>`,
})
export class IconoirAlignTopBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignTopBoxSolidIcon],svg[iconoir-align-top-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 16l.01-.01M4 20l.01-.01M8 20l.01-.01M12 20l.01-.01M16 20l.01-.01M20 20l.01-.01M20 16l.01-.01"></svg:path><svg:path fill="currentColor" d="M4 12V4h16v8z"></svg:path></svg:g>`,
})
export class IconoirAlignTopBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignVerticalCentersIcon],svg[iconoir-align-vertical-centers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 12H2"></svg:path><svg:path d="M8 19V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirAlignVerticalCentersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignVerticalCentersSolidIcon],svg[iconoir-align-vertical-centers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 12H2"></svg:path><svg:path fill="currentColor" d="M8 19V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirAlignVerticalCentersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignVerticalSpacingIcon],svg[iconoir-align-vertical-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 3H2m20 18H2"></svg:path><svg:path d="M8 15V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirAlignVerticalSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignVerticalSpacingSolidIcon],svg[iconoir-align-vertical-spacing-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 3H2m20 18H2"></svg:path><svg:path fill="currentColor" d="M8 15V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirAlignVerticalSpacingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAngleToolIcon],svg[iconoir-angle-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M3 21V3h6v12h12v6z"></svg:path><svg:path d="M13 19v2m-4-2v2M3 7h2m-2 4h2m-2 4h2m12 4v2"></svg:path></svg:g>`,
})
export class IconoirAngleToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAntennaIcon],svg[iconoir-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M16 1s1.5 1 1.5 3S16 7 16 7M8 1S6.5 2 6.5 4S8 7 8 7M7 23l1.111-4M17 23l-1.111-4M14.5 14L12 5l-2.5 9m5 0h-5m5 0l1.389 5M9.5 14l-1.389 5m0 0h7.778"></svg:path></svg:g>`,
})
export class IconoirAntennaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAntennaOffIcon],svg[iconoir-antenna-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="m7 23l1.111-4M17 23l-1.111-4M9.5 14l-1.389 5M9.5 14h4m-4 0l.8-2.88M8.11 19h7.778m0 0l-1.184-4.264M11.445 7L12 5l1.047 3.768M3 3l18 18"></svg:path></svg:g>`,
})
export class IconoirAntennaOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAntennaSignalIcon],svg[iconoir-antenna-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.5 8S19 9.5 19 12s-1.5 4-1.5 4m3-11S23 7.5 23 12s-2.5 7-2.5 7M6.5 8S5 9.5 5 12s1.5 4 1.5 4m-3-11S1 7.5 1 12s2.5 7 2.5 7"></svg:path><svg:path fill="currentColor" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirAntennaSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAntennaSignalTagIcon],svg[iconoir-antenna-signal-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 9s1 1.125 1 3s-1 3-1 3m-3-2.99l.01-.011M17 7s2 1.786 2 5s-2 5-2 5M9 9s-1 1.125-1 3s1 3 1 3M7 7s-2 1.786-2 5s2 5 2 5"></svg:path></svg:g>`,
})
export class IconoirAntennaSignalTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppNotificationIcon],svg[iconoir-app-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2 4v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6h3"></svg:path>`,
})
export class IconoirAppNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppNotificationSolidIcon],svg[iconoir-app-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0"></svg:path><svg:path d="M14.527 2.25a5.25 5.25 0 0 0 7.223 7.223V15A6.75 6.75 0 0 1 15 21.75H9A6.75 6.75 0 0 1 2.25 15V9A6.75 6.75 0 0 1 9 2.25z"></svg:path></svg:g>`,
})
export class IconoirAppNotificationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppStoreIcon],svg[iconoir-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M10.5 5.5l7 11m-4-11l-7 11m7-2.5h-7m11 0H16"></svg:path>`,
})
export class IconoirAppStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppStoreSolidIcon],svg[iconoir-app-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m8.847-7.133a.75.75 0 0 1 1.036.23L12 6.46l.867-1.363a.75.75 0 1 1 1.266.806l-1.244 1.954l3.432 5.393H17.5a.75.75 0 0 1 0 1.5h-.225l.858 1.347a.75.75 0 1 1-1.266.806L12 9.254L9.457 13.25H13.5a.75.75 0 0 1 0 1.5H8.503l-1.37 2.153a.75.75 0 0 1-1.266-.806l.858-1.347H6.5a.75.75 0 0 1 0-1.5h1.18l3.431-5.393l-1.244-1.954a.75.75 0 0 1 .23-1.036" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAppStoreSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppWindowIcon],svg[iconoir-app-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 19V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirAppWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleIcon],svg[iconoir-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12.147 21.265l-.147-.03l-.147.03c-2.377.475-4.62.21-6.26-1.1C3.964 18.86 2.75 16.373 2.75 12c0-4.473 1.008-6.29 2.335-6.954c.695-.347 1.593-.448 2.735-.317c1.141.132 2.458.488 3.943.983l.26.086l.255-.102c2.482-.992 4.713-1.373 6.28-.641c1.47.685 2.692 2.538 2.692 6.945c0 4.374-1.213 6.86-2.843 8.164c-1.64 1.312-3.883 1.576-6.26 1.1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 5.5C12 3 11 2 9 2"></svg:path></svg:g>`,
})
export class IconoirAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleHalfIcon],svg[iconoir-apple-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12.147 21.265l-.147-.03l-.147.03c-2.377.475-4.62.21-6.26-1.1C3.964 18.86 2.75 16.373 2.75 12c0-4.473 1.008-6.29 2.335-6.954c.695-.347 1.593-.448 2.735-.317c1.141.132 2.458.488 3.943.983l.26.086l.255-.102c2.482-.992 4.713-1.373 6.28-.641c1.47.685 2.692 2.538 2.692 6.945c0 4.374-1.213 6.86-2.843 8.164c-1.64 1.312-3.883 1.576-6.26 1.1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 5.5C12 3 11 2 9 2"></svg:path><svg:path d="M12 6v15"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 12v2"></svg:path></svg:g>`,
})
export class IconoirAppleHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleHalfAltIcon],svg[iconoir-apple-half-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12.147 21.265l-.147-.03l-.147.03c-2.377.475-4.62.21-6.26-1.1C3.964 18.86 2.75 16.373 2.75 12c0-4.473 1.008-6.29 2.335-6.954c.695-.347 1.593-.448 2.735-.317c1.141.132 2.458.488 3.943.983l.26.086l.255-.102c2.482-.992 4.713-1.373 6.28-.641c1.47.685 2.692 2.538 2.692 6.945c0 4.374-1.213 6.86-2.843 8.164c-1.64 1.312-3.883 1.576-6.26 1.1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 5.5C12 3 11 2 9 2"></svg:path><svg:path d="M12 6v15"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 12v2"></svg:path></svg:g>`,
})
export class IconoirAppleHalfAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleImac2021Icon],svg[iconoir-apple-imac-2021-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 15.5V2.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.9m-20 0v1.9a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-1.9m-20 0h20M9 22h1.5m0 0v-4m0 4h3m0 0H15m-1.5 0v-4"></svg:path>`,
})
export class IconoirAppleImac2021Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleImac2021SideIcon],svg[iconoir-apple-imac-2021-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 22h2m6 0H8m0 0l2-8.5m0 0L7 2m3 11.5l1.5 5.5m5.5 3h1"></svg:path>`,
})
export class IconoirAppleImac2021SideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleMacIcon],svg[iconoir-apple-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 2c.363 2.18-1.912 3.83-3.184 4.571c-.375.219-.799-.06-.734-.489C12.299 4.64 13.094 2 16 2Z"></svg:path><svg:path d="M9 6.5c.897 0 1.69.2 2.294.42a3.58 3.58 0 0 0 2.412 0A6.7 6.7 0 0 1 16 6.5c1.085 0 2.465.589 3.5 1.767C16 11 17 15.5 20.269 16.692c-1.044 2.867-3.028 4.808-4.77 4.808c-1.5 0-1.499-.7-2.999-.7s-1.5.7-3 .7c-2.5 0-5.5-4-5.5-9c0-4 3-6 5-6Z"></svg:path></svg:g>`,
})
export class IconoirAppleMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleShortcutsIcon],svg[iconoir-apple-shortcuts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m9.853 14.633l-6.201-3.946a2 2 0 0 1 0-3.374l6.2-3.946a4 4 0 0 1 4.296 0l6.2 3.946a2 2 0 0 1 0 3.374l-6.2 3.946a4 4 0 0 1-4.296 0Z"></svg:path><svg:path d="m18.286 12l2.063 1.313a2 2 0 0 1 0 3.374l-6.201 3.946a4 4 0 0 1-4.296 0l-6.2-3.946a2 2 0 0 1 0-3.374L5.714 12"></svg:path></svg:g>`,
})
export class IconoirAppleShortcutsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleShortcutsSolidIcon],svg[iconoir-apple-shortcuts-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.249 11.32c-1.698-1.08-1.698-3.56 0-4.64l6.2-3.946a4.75 4.75 0 0 1 5.101 0l6.201 3.946c1.698 1.08 1.698 3.56 0 4.64l-6.2 3.946a4.75 4.75 0 0 1-5.101 0z"></svg:path><svg:path d="m19.66 11.986l-5.11-3.252a4.75 4.75 0 0 0-5.1 0l-5.11 3.252l5.915 3.765a3.25 3.25 0 0 0 3.49 0zm1.362.889q-.127.104-.27.195l-6.202 3.946a4.75 4.75 0 0 1-5.1 0L3.249 13.07a3 3 0 0 1-.27-.195c-1.423 1.16-1.333 3.425.27 4.445l6.2 3.946a4.75 4.75 0 0 0 5.101 0l6.201-3.946c1.603-1.02 1.693-3.285.27-4.445"></svg:path></svg:g>`,
})
export class IconoirAppleShortcutsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleSwiftIcon],svg[iconoir-apple-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.457 14.59c.446-1.437 1.451-6.75-5.93-11.49a.636.636 0 0 0-.808.1a.593.593 0 0 0-.022.79c.03.036 2.75 3.35 1.783 7.135c-1.673-1.151-8.324-6.423-8.324-6.423L11 11L3.862 6.4s5.046 6.195 8.134 8.526c-1.495.536-4.743 1.104-9.033-1.562a.64.64 0 0 0-.771.074a.59.59 0 0 0-.106.743C2.229 14.42 5.668 20 12.939 20c1.995 0 3.16-.568 4.098-1.024c.576-.279 1.031-.501 1.528-.501c1.236 0 2.047 1.227 2.054 1.238a.63.63 0 0 0 .583.285a.62.62 0 0 0 .526-.37c.893-2.074-.645-4.269-1.271-5.039"></svg:path>`,
})
export class IconoirAppleSwiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleWalletIcon],svg[iconoir-apple-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"></svg:path><svg:path d="M3 15h6.4c.331 0 .605.278.75.576c.206.423.694.924 1.85.924s1.644-.5 1.85-.924c.145-.298.419-.576.75-.576H21M3 7h18M3 11h18"></svg:path></svg:g>`,
})
export class IconoirAppleWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArTagIcon],svg[iconoir-ar-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 15.5v-2.8m2.857 0c.714 0 2.143 0 2.143-2.1s-1.429-2.1-2.143-2.1H13v4.2m2.857 0H13m2.857 0L18 15.5m-7 0L9.929 13M5 15.5L6.071 13m0 0L8 8.5L9.929 13M6.07 13h3.86"></svg:path></svg:g>`,
})
export class IconoirArTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArc3dIcon],svg[iconoir-arc-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 16c0-5.523-4.477-10-10-10S2 10.477 2 16"></svg:path><svg:path fill="currentColor" d="M2 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m20 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirArc3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArc3dCenterPointIcon],svg[iconoir-arc-3d-center-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-dasharray="3 3" d="M22 16c0-5.523-4.477-10-10-10c-4.1 0-7.625 2.468-9.168 6"></svg:path><svg:path fill="currentColor" d="M2 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M2 16h10"></svg:path><svg:path fill="currentColor" d="M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirArc3dCenterPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArcadeIcon],svg[iconoir-arcade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11 8.5L9.8 9l-7.448 3.386a.6.6 0 0 0-.352.546v.136a.6.6 0 0 0 .352.546l8.82 4.01a2 2 0 0 0 1.656 0l8.82-4.01a.6.6 0 0 0 .352-.546v-.136a.6.6 0 0 0-.352-.546L14.2 9L13 8.5"></svg:path><svg:path d="M22 13v4.112a.6.6 0 0 1-.354.547l-8.825 3.972a2 2 0 0 1-1.642 0l-8.825-3.972A.6.6 0 0 1 2 17.112V13"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path d="M11 8v5a1 1 0 1 0 2 0V8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 13h1"></svg:path></svg:g>`,
})
export class IconoirArcadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArcheryIcon],svg[iconoir-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h9m-9 0l-2-2H2l2 2l-2 2h4zm9 0l-2-2m2 2l-2 2m1 8.5c2.761 0 5-4.701 5-10.5S18.761 1.5 16 1.5S11 6.201 11 12s2.239 10.5 5 10.5"></svg:path>`,
})
export class IconoirArcheryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArcheryMatchIcon],svg[iconoir-archery-match-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.611 15.89l12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828zm12.02-12.02h-2.828m2.829 0v2.828M15.39 15.89L3.367 3.867M15.39 15.89h2.829l2.828 2.829h-2.828v2.828l-2.829-2.828zM3.37 3.87h2.828m-2.829 0v2.828"></svg:path>`,
})
export class IconoirArcheryMatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArchiveIcon],svg[iconoir-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 6h10M7 9h10m-8 8h6"></svg:path><svg:path d="M3 12h-.4a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-8.8a.6.6 0 0 0-.6-.6H21M3 12V2.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V12M3 12h18"></svg:path></svg:g>`,
})
export class IconoirArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAreaSearchIcon],svg[iconoir-area-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.124 20.119a3 3 0 1 0-4.248-4.237a3 3 0 0 0 4.248 4.237m0 0L22 22M7 2H4v3m0 6v2m7-11h2m-2 20h2m7-11v2M17 2h3v3M7 22H4v-3"></svg:path>`,
})
export class IconoirAreaSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowArcheryIcon],svg[iconoir-arrow-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.611 15.89l12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828zm12.02-12.02h-2.828m2.829 0v2.828"></svg:path>`,
})
export class IconoirArrowArcheryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownIcon],svg[iconoir-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v18m0 0l8.5-8.5M12 21l-8.5-8.5"></svg:path>`,
})
export class IconoirArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownCircleIcon],svg[iconoir-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v8m0 0l3.5-3.5M12 16l-3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownCircleSolidIcon],svg[iconoir-arrow-down-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m4.03 11.78l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V8a.75.75 0 0 1 1.5 0v6.19l2.22-2.22a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowDownCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownLeftIcon],svg[iconoir-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6L6 19m0 0V6.52M6 19h12.48"></svg:path>`,
})
export class IconoirArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownLeftCircleIcon],svg[iconoir-arrow-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.828 9.172l-5.656 5.656m0 0h4.95m-4.95 0v-4.95M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowDownLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownLeftCircleSolidIcon],svg[iconoir-arrow-down-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m3.359 8.452a.75.75 0 0 0-1.06-1.061l-4.377 4.377v-3.14a.75.75 0 1 0-1.5 0v4.95c0 .414.335.75.75.75h4.95a.75.75 0 0 0 0-1.5h-3.14z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowDownLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownLeftSquareIcon],svg[iconoir-arrow-down-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.828 9.172l-5.656 5.656m0 0h4.95m-4.95 0v-4.95M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirArrowDownLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownLeftSquareSolidIcon],svg[iconoir-arrow-down-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.4 21.75a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35zm-6.278-6.171h-4.95a.747.747 0 0 1-.75-.75v-4.95a.75.75 0 1 1 1.5 0v3.139l4.376-4.377a.75.75 0 0 1 1.061 1.061l-4.376 4.377h3.139a.75.75 0 1 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowDownLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownRightIcon],svg[iconoir-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l13 13m0 0V6.52M19 19H6.52"></svg:path>`,
})
export class IconoirArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownRightCircleIcon],svg[iconoir-arrow-down-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.171 9.172l5.657 5.656m0 0h-4.95m4.95 0v-4.95M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowDownRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownRightCircleSolidIcon],svg[iconoir-arrow-down-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M9.702 8.641a.75.75 0 1 0-1.06 1.06l4.376 4.377h-3.14a.75.75 0 0 0 0 1.5h4.95a.747.747 0 0 0 .75-.75v-4.95a.75.75 0 0 0-1.5 0v3.14z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowDownRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownRightSquareIcon],svg[iconoir-arrow-down-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.171 9.172l5.657 5.656m0 0h-4.95m4.95 0v-4.95M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirArrowDownRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownRightSquareSolidIcon],svg[iconoir-arrow-down-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm6.102 6.391a.75.75 0 1 0-1.06 1.06l4.376 4.377h-3.14a.75.75 0 0 0 0 1.5h4.95a.747.747 0 0 0 .75-.75v-4.95a.75.75 0 0 0-1.5 0v3.14z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowDownRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownTagIcon],svg[iconoir-arrow-down-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4"></svg:path><svg:path d="m14.5 10.75l-2.5 2.5l-2.5-2.5"></svg:path></svg:g>`,
})
export class IconoirArrowDownTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowEmailForwardIcon],svg[iconoir-arrow-email-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10H8c-8 0-8 11 0 11m14-11l-7-7m7 7l-7 7"></svg:path>`,
})
export class IconoirArrowEmailForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowEnlargeTagIcon],svg[iconoir-arrow-enlarge-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5L6 12l2.5 2.5m7-5L18 12l-2.5 2.5"></svg:path><svg:path d="M2 15V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"></svg:path></svg:g>`,
})
export class IconoirArrowEnlargeTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowLeftIcon],svg[iconoir-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5"></svg:path>`,
})
export class IconoirArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowLeftCircleIcon],svg[iconoir-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowLeftCircleSolidIcon],svg[iconoir-arrow-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m-1.03 14.78l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 1 1 1.06 1.06l-2.22 2.22H16a.75.75 0 0 1 0 1.5H9.81l2.22 2.22a.75.75 0 1 1-1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowLeftTagIcon],svg[iconoir-arrow-left-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.75 12h-10m0 0l2.75 2.75M6.75 12L9.5 9.25"></svg:path><svg:path d="M2 15V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"></svg:path></svg:g>`,
})
export class IconoirArrowLeftTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowLeftTagSolidIcon],svg[iconoir-arrow-left-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 4.25A4.75 4.75 0 0 1 22.75 9v6A4.75 4.75 0 0 1 18 19.75H6A4.75 4.75 0 0 1 1.25 15V9A4.75 4.75 0 0 1 6 4.25zM8.97 15.28l-2.75-2.75a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 1 1 1.06 1.06l-1.47 1.47h8.19a.75.75 0 0 1 0 1.5H8.56l1.47 1.47a.75.75 0 1 1-1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowLeftTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowReduceTagIcon],svg[iconoir-arrow-reduce-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 9.5L9.5 12L7 14.5m9.5-5L14 12l2.5 2.5"></svg:path><svg:path d="M6 5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class IconoirArrowReduceTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowRightIcon],svg[iconoir-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"></svg:path>`,
})
export class IconoirArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowRightCircleIcon],svg[iconoir-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h8m0 0l-3.5-3.5M16 12l-3.5 3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowRightCircleSolidIcon],svg[iconoir-arrow-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m1.03 6.72l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H8a.75.75 0 0 1 0-1.5h6.19l-2.22-2.22a.75.75 0 0 1 1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowRightTagIcon],svg[iconoir-arrow-right-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12h10m0 0L14 14.75M16.75 12L14 9.25"></svg:path><svg:path d="M2 15V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"></svg:path></svg:g>`,
})
export class IconoirArrowRightTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowRightTagSolidIcon],svg[iconoir-arrow-right-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 4.25A4.75 4.75 0 0 0 1.25 9v6A4.75 4.75 0 0 0 6 19.75h12A4.75 4.75 0 0 0 22.75 15V9A4.75 4.75 0 0 0 18 4.25zm8.53 11.03l2.75-2.75a.75.75 0 0 0 0-1.06l-2.75-2.75a.75.75 0 1 0-1.06 1.06l1.47 1.47H6.75a.75.75 0 0 0 0 1.5h8.19l-1.47 1.47a.75.75 0 1 0 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowRightTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowSeparateIcon],svg[iconoir-arrow-separate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 7l-5 5l5 5m8-10l5 5l-5 5"></svg:path>`,
})
export class IconoirArrowSeparateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowSeparateVerticalIcon],svg[iconoir-arrow-separate-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 8l-5-5l-5 5m10 8l-5 5l-5-5"></svg:path>`,
})
export class IconoirArrowSeparateVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUnionIcon],svg[iconoir-arrow-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 7l-5 5l5 5M4 7l5 5l-5 5"></svg:path>`,
})
export class IconoirArrowUnionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUnionVerticalIcon],svg[iconoir-arrow-union-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l-5 5l-5-5m10 16l-5-5l-5 5"></svg:path>`,
})
export class IconoirArrowUnionVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpIcon],svg[iconoir-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21V3m0 0l8.5 8.5M12 3l-8.5 8.5"></svg:path>`,
})
export class IconoirArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpCircleIcon],svg[iconoir-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16V8m0 0l3.5 3.5M12 8l-3.5 3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpCircleSolidIcon],svg[iconoir-arrow-up-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m4.03 9.72l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V16a.75.75 0 0 0 1.5 0V9.81l2.22 2.22a.75.75 0 1 0 1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowUpCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpLeftIcon],svg[iconoir-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 19L6 6m0 0v12.48M6 6h12.48"></svg:path>`,
})
export class IconoirArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpLeftCircleIcon],svg[iconoir-arrow-up-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828L9.172 9.172m0 0h4.95m-4.95 0v4.95M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowUpLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpLeftCircleSolidIcon],svg[iconoir-arrow-up-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m2.121 7.171h-4.95a.75.75 0 0 0-.75.75v4.95a.75.75 0 0 0 1.5 0v-3.139l4.377 4.377a.75.75 0 1 0 1.06-1.061L10.983 9.92h3.14a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowUpLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpLeftSquareIcon],svg[iconoir-arrow-up-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828L9.172 9.172m0 0h4.95m-4.95 0v4.95M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirArrowUpLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpLeftSquareSolidIcon],svg[iconoir-arrow-up-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm10.521 6.171h-4.95a.75.75 0 0 0-.75.75v4.95a.75.75 0 0 0 1.5 0v-3.139l4.377 4.377a.75.75 0 1 0 1.06-1.061L10.983 9.92h3.14a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowUpLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpRightIcon],svg[iconoir-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19L19 6m0 0v12.48M19 6H6.52"></svg:path>`,
})
export class IconoirArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpRightCircleIcon],svg[iconoir-arrow-up-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.171 14.828l5.657-5.656m0 0h-4.95m4.95 0v4.95M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirArrowUpRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpRightCircleSolidIcon],svg[iconoir-arrow-up-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M9.879 8.421h4.95a.747.747 0 0 1 .75.75v4.95a.75.75 0 0 1-1.5 0v-3.139l-4.377 4.377a.75.75 0 1 1-1.06-1.061l4.376-4.377h-3.14a.75.75 0 0 1 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowUpRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpRightSquareIcon],svg[iconoir-arrow-up-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.171 14.828l5.657-5.656m0 0h-4.95m4.95 0v4.95M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirArrowUpRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpRightSquareSolidIcon],svg[iconoir-arrow-up-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm6.279 6.171h4.95a.747.747 0 0 1 .75.75v4.95a.75.75 0 0 1-1.5 0v-3.139l-4.377 4.377a.75.75 0 1 1-1.06-1.061l4.376-4.377h-3.14a.75.75 0 0 1 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowUpRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpTagIcon],svg[iconoir-arrow-up-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14.5 13.25l-2.5-2.5l-2.5 2.5"></svg:path><svg:path d="M6 5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class IconoirArrowUpTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowsUpFromLineIcon],svg[iconoir-arrows-up-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20h18M6 17V4m0 0L2 8m4-4l4 4m8 9V4m0 0l-4 4m4-4l4 4"></svg:path>`,
})
export class IconoirArrowsUpFromLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAsanaIcon],svg[iconoir-asana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-5 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class IconoirAsanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAsteriskIcon],svg[iconoir-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V2m8.572 15.55L3.428 7.249m0 10.301L20.572 7.249"></svg:path>`,
})
export class IconoirAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAtSignIcon],svg[iconoir-at-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.5 19.125A9 9 0 1 1 21 12c0 5.5-6 5.5-6 2V8"></svg:path><svg:path d="M15 12v-1.5C15 9.12 13.657 8 12 8s-3 1.12-3 2.5V12m6 0v1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5V12"></svg:path></svg:g>`,
})
export class IconoirAtSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAtSignCircleIcon],svg[iconoir-at-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.278 17.541A7 7 0 1 1 19 12c0 4.278-5 3.722-5 1V8.5"></svg:path><svg:path d="M14 12v-.5a2.5 2.5 0 0 0-5 0v.5m5 0v.5a2.5 2.5 0 0 1-5 0V12"></svg:path><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class IconoirAtSignCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAtomIcon],svg[iconoir-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.404 13.61C3.515 13.145 3 12.592 3 12c0-1.657 4.03-3 9-3s9 1.343 9 3c0 .714-.75 1.37-2 1.886m-7-2.876l.01-.011"></svg:path><svg:path d="M16.883 6c-.005-1.023-.263-1.747-.797-2.02c-1.477-.751-4.503 2.23-6.76 6.658s-2.889 8.629-1.412 9.381c.527.269 1.252.061 2.07-.519"></svg:path><svg:path d="M9.6 4.252c-.66-.386-1.243-.497-1.686-.271c-1.477.752-.844 4.952 1.413 9.38c2.256 4.43 5.282 7.41 6.759 6.658c1.312-.669.958-4.061-.722-7.917"></svg:path></svg:g>`,
})
export class IconoirAtomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAttachmentIcon],svg[iconoir-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.438 11.662l-9.19 9.19a6.003 6.003 0 1 1-8.49-8.49l9.19-9.19a4.002 4.002 0 0 1 5.66 5.66l-9.2 9.19a2.001 2.001 0 1 1-2.83-2.83l8.49-8.48"></svg:path>`,
})
export class IconoirAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAugmentedRealityIcon],svg[iconoir-augmented-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5.5 15.5l.614-1.718M10.5 15.5l-.614-1.718m-3.772 0L8 8.5l1.886 5.282m-3.772 0h3.772M13 15.5v-2.8m2.857 0c.714 0 2.143 0 2.143-2.1s-1.429-2.1-2.143-2.1H13v4.2m2.857 0H13m2.857 0L18 15.5"></svg:path><svg:path d="M2 18.4V5.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirAugmentedRealityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAutoFlashIcon],svg[iconoir-auto-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 9.5l.692-1.5M22 9.5L21.308 8m0 0L19 3l-2.308 5m4.616 0h-4.616M13 10h-3V3L2 14h6v7l6-8.25"></svg:path>`,
})
export class IconoirAutoFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAviFormatIcon],svg[iconoir-avi-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m12 9l1.5 6L15 9m3 6V9"></svg:path><svg:path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"></svg:path><svg:path stroke-linejoin="round" d="M6 15v-3m0 0v-1.5A1.5 1.5 0 0 1 7.5 9v0A1.5 1.5 0 0 1 9 10.5V12m-3 0h3m0 0v3"></svg:path></svg:g>`,
})
export class IconoirAviFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirAxesIcon],svg[iconoir-axes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 19.452l-9-6.61m0 0V3m0 9.843l-9 6.609m17.438-2.742L21 19.452L18.188 20M9.75 5.194L12 3l2.25 2.194M5.813 20L3 19.452l.563-2.742"></svg:path>`,
})
export class IconoirAxesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBackward15SecondsIcon],svg[iconoir-backward-15-seconds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 13a9 9 0 1 0 9-9M9 9v7"></svg:path><svg:path d="M15 9h-2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-2m0-12H4.5m0 0l2-2m-2 2l2 2"></svg:path></svg:g>`,
})
export class IconoirBackward15SecondsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBadgeCheckIcon],svg[iconoir-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10.521 2.624a2 2 0 0 1 2.958 0l1.02 1.12a2 2 0 0 0 1.572.651l1.513-.07a2 2 0 0 1 2.092 2.09l-.071 1.514a2 2 0 0 0 .651 1.572l1.12 1.02a2 2 0 0 1 0 2.958l-1.12 1.02a2 2 0 0 0-.651 1.572l.07 1.513a2 2 0 0 1-2.09 2.092l-1.514-.071a2 2 0 0 0-1.572.651l-1.02 1.12a2 2 0 0 1-2.958 0l-1.02-1.12a2 2 0 0 0-1.572-.651l-1.513.07a2 2 0 0 1-2.092-2.09l.071-1.514a2 2 0 0 0-.651-1.572l-1.12-1.02a2 2 0 0 1 0-2.958l1.12-1.02a2 2 0 0 0 .651-1.572l-.07-1.513a2 2 0 0 1 2.09-2.092l1.514.071a2 2 0 0 0 1.572-.651z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 12l2 2l4-4"></svg:path></svg:g>`,
})
export class IconoirBadgeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBagIcon],svg[iconoir-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.508 20h14.984a.6.6 0 0 0 .592-.501l1.8-10.8A.6.6 0 0 0 21.292 8H2.708a.6.6 0 0 0-.592.699l1.8 10.8a.6.6 0 0 0 .592.501Z"></svg:path><svg:path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></svg:path></svg:g>`,
})
export class IconoirBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBalconyIcon],svg[iconoir-balcony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 13v8m4-8v8m8-8v8m-4-8v8m8-8v8M2 21h20M2 13h20m-4-3V3.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V10"></svg:path>`,
})
export class IconoirBalconyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBankIcon],svg[iconoir-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.5L12 4l9 5.5M5 20h14M10 9h4m-8 8v-5m4 5v-5m4 5v-5m4 5v-5"></svg:path>`,
})
export class IconoirBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBarcodeIcon],svg[iconoir-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19V5h1m6 14V5h1M9 5v14m7-14v14m3-14v14M6 5v14H5m8-14v14h-1"></svg:path>`,
})
export class IconoirBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBasketballIcon],svg[iconoir-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.736 20.192c4.524-3.168 5.623-9.404 2.455-13.928C17.024 1.74 10.788.641 6.264 3.81C1.74 6.976.641 13.212 3.808 17.736s9.404 5.623 13.928 2.456m0 0L6.264 3.809"></svg:path><svg:path d="M19.577 5.473c-3.77 5.896-8.508 9.214-16.302 11.415"></svg:path><svg:path d="M13.06 2.056c.413 5.24 3.392 9.494 8.646 12.35M2.293 9.595c4.783 2.18 7.761 6.434 8.647 12.349"></svg:path></svg:g>`,
})
export class IconoirBasketballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBasketballFieldIcon],svg[iconoir-basketball-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 5h9.4a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H12m0-14H2.6a.6.6 0 0 0-.6.6v12.8a.6.6 0 0 0 .6.6H12m0-14v14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6M2 17A5 5 0 0 0 2 7m20 10a5 5 0 0 1 0-10"></svg:path></svg:g>`,
})
export class IconoirBasketballFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBathroomIcon],svg[iconoir-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 13v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2.4a.6.6 0 0 1 .6-.6zm-5 7l1 2m-9-2l-1 2m14-9V7a4 4 0 0 0-4-4h-5"></svg:path><svg:path d="M15.4 8H8.6c-.331 0-.596-.268-.56-.598C8.186 6.075 8.863 3 12 3s3.814 3.075 3.96 4.402c.036.33-.229.598-.56.598"></svg:path></svg:g>`,
})
export class IconoirBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBathroomSolidIcon],svg[iconoir-bathroom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M21 13v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2.4a.6.6 0 0 1 .6-.6z"></svg:path><svg:path d="m16 20l1 2m-9-2l-1 2m14-9V7a4 4 0 0 0-4-4h-5"></svg:path><svg:path fill="currentColor" d="M15.4 8H8.6c-.331 0-.596-.268-.56-.598C8.186 6.075 8.863 3 12 3s3.814 3.075 3.96 4.402c.036.33-.229.598-.56.598"></svg:path></svg:g>`,
})
export class IconoirBathroomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBattery25Icon],svg[iconoir-battery-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 10v4"></svg:path><svg:path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M4 14.4V9.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirBattery25Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBattery50Icon],svg[iconoir-battery-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 10v4"></svg:path><svg:path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M4 14.4V9.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirBattery50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBattery75Icon],svg[iconoir-battery-75-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 10v4"></svg:path><svg:path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M4 14.4V9.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirBattery75Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBatteryChargingIcon],svg[iconoir-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 10v4"></svg:path><svg:path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.167 9L8.5 12h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBatteryEmptyIcon],svg[iconoir-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 10v4"></svg:path><svg:path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirBatteryEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBatteryFullIcon],svg[iconoir-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 10v4"></svg:path><svg:path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M4 14.4V9.6a.6.6 0 0 1 .6-.6h11.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBatteryIndicatorIcon],svg[iconoir-battery-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 13h4M6 13h2m2 0H8m0 0v-2m0 2v2M6 7H2.6a.6.6 0 0 0-.6.6v10.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6H18M6 7V5h2v2M6 7h2m0 0h8m0 0V5h2v2m-2 0h2"></svg:path>`,
})
export class IconoirBatteryIndicatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBatterySlashIcon],svg[iconoir-battery-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 3l18 18m2-11v4M5.5 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14.5m2.5-3.5V8a2 2 0 0 0-2-2h-6.5"></svg:path>`,
})
export class IconoirBatterySlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBatteryWarningIcon],svg[iconoir-battery-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 10v4"></svg:path><svg:path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.5 9v2m0 4.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirBatteryWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBbqIcon],svg[iconoir-bbq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 14.5L5 22M8 6s1-1.061 1-2c0-1.333-1-2-1-2m4 4s1-1.061 1-2c0-1.333-1-2-1-2m4 4s1-1.061 1-2c0-1.333-1-2-1-2"></svg:path><svg:path stroke-linejoin="round" d="M16.5 17.5h-9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.5 14.5l2.1 4.5m.9 3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path d="M12 15a7 7 0 0 0 6.975-6.4a.563.563 0 0 0-.575-.6H5.6a.563.563 0 0 0-.575.6A7 7 0 0 0 12 15Z"></svg:path></svg:g>`,
})
export class IconoirBbqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBeachBagIcon],svg[iconoir-beach-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m2.77 13l-.633-3.287A.6.6 0 0 1 2.727 9h18.547a.6.6 0 0 1 .589.713L21.23 13M2.769 13h18.462M2.769 13l.616 4m17.846-4l-.616 4m0 0l-.537 3.491a.6.6 0 0 1-.593.509H4.515a.6.6 0 0 1-.593-.509L3.385 17m17.23 0H3.385"></svg:path><svg:path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"></svg:path></svg:g>`,
})
export class IconoirBeachBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBeachBagBigIcon],svg[iconoir-beach-bag-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m2.77 12l-.633-3.287A.6.6 0 0 1 2.727 8h18.547a.6.6 0 0 1 .589.713L21.23 12M2.769 12h18.462M2.769 12l.616 4m17.846-4l-.616 4m0 0l-.537 3.491a.6.6 0 0 1-.593.509H4.515a.6.6 0 0 1-.593-.509L3.385 16m17.23 0H3.385M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></svg:path>`,
})
export class IconoirBeachBagBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBedIcon],svg[iconoir-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 4v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></svg:path><svg:path d="M3 8h8V6m10 2h-8V6"></svg:path></svg:g>`,
})
export class IconoirBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBedReadyIcon],svg[iconoir-bed-ready-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9"></svg:path><svg:path d="M3 8h8V6m10 2h-8V6m3 14l2 2l4-4"></svg:path></svg:g>`,
})
export class IconoirBedReadyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBehanceIcon],svg[iconoir-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.197 11.217c5.07 0 5.07 6.783 0 6.783H2v-6.783m6.197 0H2m6.197 0c5.07 0 5.07-6.217 0-6.217H2v6.217M18 9c-2.21 0-4 2.015-4 4.5h8c0-2.485-1.79-4.5-4-4.5m-4 4.5c0 2.485 1.79 4.5 4 4.5c2.755 0 3.5-2 3.5-2m-1-10h-5"></svg:path>`,
})
export class IconoirBehanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBehanceTagIcon],svg[iconoir-behance-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></svg:path><svg:path d="M9.099 11.826c2.535 0 2.535 4.174 0 4.174H6v-4.174m3.099 0H6m3.099 0c2.535 0 2.535-3.826 0-3.826H6v3.826M15.5 11a2.5 2.5 0 0 0-2.5 2.5h5a2.5 2.5 0 0 0-2.5-2.5M13 13.5a2.5 2.5 0 0 0 2.5 2.5c.928 0 1.49-.322 1.813-.62M17 8.5h-3"></svg:path></svg:g>`,
})
export class IconoirBehanceTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBellIcon],svg[iconoir-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8.4c0-1.697-.632-3.325-1.757-4.525S13.59 2 12 2s-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4C6 15.867 3 18 3 18h18s-3-2.133-3-9.6M13.73 21a2 2 0 0 1-3.46 0"></svg:path>`,
})
export class IconoirBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBellNotificationIcon],svg[iconoir-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525S10.41 2 12 2q.507 0 1 .09M19 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.27 13a2 2 0 0 1-3.46 0"></svg:path>`,
})
export class IconoirBellNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBellNotificationSolidIcon],svg[iconoir-bell-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M14.752 1.914a5.25 5.25 0 0 0 4.07 8.333v.011c.015.198.03.401.05.597c.237 2.247.777 3.79 1.296 4.803c.345.675.684 1.123.924 1.394a3.4 3.4 0 0 0 .34.335l.01.006A.75.75 0 0 1 21 18.75H3a.75.75 0 0 1-.441-1.356l.008-.007l.064-.054c.06-.054.157-.145.277-.281c.24-.27.579-.718.924-1.393C4.522 14.31 5.25 12.03 5.25 8.4c0-1.881.7-3.694 1.96-5.038C8.472 2.016 10.194 1.25 12 1.25q.574 0 1.133.101c.238.043 1.018.286 1.619.563"></svg:path><svg:path d="M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M9.894 20.351a.75.75 0 0 1 1.025.273a1.25 1.25 0 0 0 2.162 0a.75.75 0 1 1 1.298.753a2.75 2.75 0 0 1-4.758 0a.75.75 0 0 1 .273-1.026"></svg:path></svg:g>`,
})
export class IconoirBellNotificationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBellOffIcon],svg[iconoir-bell-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.27 6.5C6.093 7.11 6 7.75 6 8.4C6 15.867 3 18 3 18h15M7.757 3.875C8.883 2.675 10.41 2 12 2s3.117.674 4.243 1.875C17.368 5.075 18 6.703 18 8.4c0 7.467 3 9.6 3 9.6m-7.27 3a2 2 0 0 1-3.46 0M3 3l18 18"></svg:path>`,
})
export class IconoirBellOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBicycleIcon],svg[iconoir-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 19a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8.5 7.5h6M19 15l-4-7.5h-.5m0 0l2-3m0 0H14m2.5 0h2"></svg:path><svg:path d="m5 15l3.5-7.5L12 14h3M8.5 7.5c-.333-1-1.5-3-3.5-3"></svg:path><svg:path d="M19 19a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class IconoirBicycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBinIcon],svg[iconoir-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0"></svg:path></svg:g>`,
})
export class IconoirBinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBinFullIcon],svg[iconoir-bin-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m19.262 17.038l1.676-12.575a.6.6 0 0 0-.372-.636L16 2h-5.5l-.682 1.5L5 2L3.21 3.79a.6.6 0 0 0-.17.504l1.698 12.744a4 4 0 0 0 1.98 2.944l.32.183a10 10 0 0 0 9.923 0l.32-.183a4 4 0 0 0 1.98-2.944ZM16 2l-2 5m-5-.5l.818-3"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0"></svg:path></svg:g>`,
})
export class IconoirBinFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBinHalfIcon],svg[iconoir-bin-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0M11 18l3-3.5m0 0l5 2.5m-5-2.5l6-3M4.5 16l3.236-.462a.6.6 0 0 1 .469.133L11 18l3 3m-6-5.5l2.615-3.05a.6.6 0 0 1 .84-.071L14 14.5"></svg:path></svg:g>`,
})
export class IconoirBinHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBinMinusInIcon],svg[iconoir-bin-minus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.992 13h6"></svg:path><svg:path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0"></svg:path></svg:g>`,
})
export class IconoirBinMinusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBinPlusInIcon],svg[iconoir-bin-plus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.992 14h3m3 0h-3m0 0v-3m0 3v3"></svg:path><svg:path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0"></svg:path></svg:g>`,
})
export class IconoirBinPlusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBinocularIcon],svg[iconoir-binocular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.5 14L20 9s-.5-2-2.5-2c0 0 0-2-2-2s-2 2-2 2h-3s0-2-2-2s-2 2-2 2C4.5 7 4 9 4 9l-1.5 5"></svg:path><svg:path d="M6 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8m12 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M12 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconoirBinocularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBirthdayCakeIcon],svg[iconoir-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-9-6v3m0-3c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8"></svg:path><svg:path d="M9 14a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0"></svg:path></svg:g>`,
})
export class IconoirBirthdayCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBishopIcon],svg[iconoir-bishop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 17h10m-8-5h6m-3-9V2m-.446 1.582c-.921 1.251-2.916 4.243-2.497 6.168C9.451 11.558 11.02 12 12 12s2.549-.442 2.943-2.25c.42-1.925-1.576-4.917-2.497-6.168a.548.548 0 0 0-.892 0ZM17.8 22H6.2a.617.617 0 0 1-.5-.97c1.316-1.866 4.063-5.986 4.493-8.434c.057-.326.326-.596.657-.596h2.3c.331 0 .6.27.657.596c.43 2.448 3.177 6.568 4.492 8.434a.617.617 0 0 1-.499.97Z"></svg:path>`,
})
export class IconoirBishopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBitbucketIcon],svg[iconoir-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.916 4.674l-1.85 14.8a.6.6 0 0 1-.596.526H5.53a.6.6 0 0 1-.596-.526l-1.85-14.8A.6.6 0 0 1 3.68 4h16.64a.6.6 0 0 1 .596.674"></svg:path><svg:path d="m16.75 7.75l-.937 7.97a.6.6 0 0 1-.596.53H8.784a.6.6 0 0 1-.596-.53l-.859-7.3a.6.6 0 0 1 .596-.67zm0 0h3.75"></svg:path></svg:g>`,
})
export class IconoirBitbucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBitcoinCircleIcon],svg[iconoir-bitcoin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 12v4.394c0 .332.269.6.6.602c2.966.018 5.4.076 5.4-2.496c0-2.744-3-2.5-6-2.5Zm0 0V7.606c0-.331.269-.6.6-.602C12.566 6.986 15 6.928 15 9.5c0 2.744-3 2.5-6 2.5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7V5.5m0 13V17m0 5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class IconoirBitcoinCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBitcoinCircleSolidIcon],svg[iconoir-bitcoin-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m3.75 8.25c0-.763-.182-1.416-.583-1.936c-.397-.515-.947-.817-1.532-1a6 6 0 0 0-.885-.193V5.5a.75.75 0 0 0-1.5 0v.758a46 46 0 0 0-1.44-.006l-.214.002A1.353 1.353 0 0 0 8.25 7.606v8.788c0 .746.604 1.348 1.346 1.352l.214.002c.48.003.966.006 1.44-.006v.758a.75.75 0 0 0 1.5 0v-.87q.471-.069.885-.195c.585-.182 1.135-.484 1.532-1c.4-.519.583-1.172.583-1.935c0-.83-.231-1.522-.71-2.051a2.7 2.7 0 0 0-.525-.449a2.7 2.7 0 0 0 .526-.449c.478-.529.709-1.22.709-2.051m-2.807 1.551c-.55.138-1.205.185-1.942.199a48 48 0 0 0-1.251-.004V7.753c1.467-.009 2.625-.01 3.44.244c.394.123.638.287.79.483c.148.193.27.497.27 1.02c0 .541-.144.848-.322 1.045c-.192.212-.502.385-.985.506M11 12.751c-.416.008-.838.006-1.251.003v3.493c1.467.009 2.625.01 3.44-.244c.394-.123.638-.287.79-.483c.148-.193.27-.497.27-1.02c0-.541-.144-.848-.322-1.045c-.192-.212-.502-.385-.985-.506c-.55-.138-1.205-.185-1.942-.199" clip-rule="evenodd"></svg:path>`,
})
export class IconoirBitcoinCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBitcoinRotateOutIcon],svg[iconoir-bitcoin-rotate-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.168 8A10 10 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6c5.186 0 9.45-3.947 9.951-9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20"></svg:path><svg:path d="M9 12v4.394c0 .332.269.6.6.602c2.966.018 5.4.076 5.4-2.496c0-2.744-3-2.5-6-2.5Zm0 0V7.606c0-.331.269-.6.6-.602C12.566 6.986 15 6.928 15 9.5c0 2.744-3 2.5-6 2.5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7V5.5m0 13V17"></svg:path></svg:g>`,
})
export class IconoirBitcoinRotateOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBluetoothIcon],svg[iconoir-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.75 8l10.5 8.5l-5.5 5.5V2l5.5 5.5L6.75 16"></svg:path>`,
})
export class IconoirBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBluetoothTagIcon],svg[iconoir-bluetooth-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 9.6l6 5.1l-3.143 3.3V6L15 9.3l-6 5.1"></svg:path><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path></svg:g>`,
})
export class IconoirBluetoothTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBluetoothTagSolidIcon],svg[iconoir-bluetooth-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 1.25 9v6A6.75 6.75 0 0 0 8 21.75h8A6.75 6.75 0 0 0 22.75 15V9A6.75 6.75 0 0 0 16 2.25zm4.4 3.233A.75.75 0 0 0 11.107 6v4.407L9.486 9.029a.75.75 0 1 0-.972 1.143L10.666 12l-2.152 1.829a.75.75 0 1 0 .972 1.143l1.621-1.379V18a.75.75 0 0 0 1.293.517l3.143-3.3a.75.75 0 0 0-.057-1.088L12.982 12l2.504-2.129a.75.75 0 0 0 .057-1.088zm1.51 9.275l-1.303-1.108v2.475zm-1.303-6.883v2.475l1.303-1.107z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirBluetoothTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBoldIcon],svg[iconoir-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 11.667H8m4 0s3.333 0 3.333-3.334S12 5 12 5H8.6a.6.6 0 0 0-.6.6v6.067m4 0s4 0 4 3.666S12 19 12 19H8.6a.6.6 0 0 1-.6-.6v-6.733"></svg:path>`,
})
export class IconoirBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBoldSquareIcon],svg[iconoir-bold-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path d="M12 12H9m3 0s2.5 0 2.5-2.5S12 7 12 7H9.6a.6.6 0 0 0-.6.6V12m3 0s3 0 3 2.75s-3 2.75-3 2.75H9.6a.6.6 0 0 1-.6-.6V12"></svg:path></svg:g>`,
})
export class IconoirBoldSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBoldSquareSolidIcon],svg[iconoir-bold-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm6 4A1.35 1.35 0 0 0 8.25 7.6v9.3c0 .746.604 1.35 1.35 1.35H12v-.75v.75h.02a3 3 0 0 0 .158-.007c.1-.006.24-.02.404-.045c.326-.05.773-.15 1.23-.36c.459-.21.95-.54 1.326-1.057c.382-.525.612-1.198.612-2.031s-.23-1.506-.612-2.031a3.2 3.2 0 0 0-.877-.815a2.8 2.8 0 0 0 .472-.543c.326-.488.517-1.105.517-1.861s-.191-1.373-.517-1.861a2.94 2.94 0 0 0-1.148-.997A3.85 3.85 0 0 0 12 6.25zm.15 6.5h2.261l.069.004a3.2 3.2 0 0 1 1.108.272c.291.133.55.319.737.575c.18.249.325.607.325 1.149s-.145.9-.325 1.149a1.84 1.84 0 0 1-.738.575a3.2 3.2 0 0 1-1.107.272l-.07.004H9.75zm2.247 4H12zm-.001-5.5H9.75v-3.5h2.249h-.001h.001c.03.001.48.016.916.233c.223.112.424.268.57.488c.144.215.265.535.265 1.029s-.121.814-.265 1.03a1.45 1.45 0 0 1-.57.487a2.3 2.3 0 0 1-.912.233z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirBoldSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBonfireIcon],svg[iconoir-bonfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9 14c0 1.61 1.377 2 3.076 2c2.89 0 3.845-1.667 1.922-5c-2.691 3-3.076-1.667-2.691-3C10.153 10 9 11.879 9 14"></svg:path><svg:path stroke-linejoin="round" d="M12 16c3.156 0 5-2.098 5-5.687S12 3 12 3s-5 3.723-5 7.313S8.844 16 12 16"></svg:path><svg:path d="m4.273 21.07l15.454-4.14m-15.454 0L12 19m7.727 2.07l-3.863-1.035"></svg:path></svg:g>`,
})
export class IconoirBonfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookIcon],svg[iconoir-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"></svg:path><svg:path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path><svg:path d="M9 7h6"></svg:path></svg:g>`,
})
export class IconoirBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookLockIcon],svg[iconoir-book-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></svg:path><svg:path stroke-linejoin="round" d="M14 10h.4a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6v-2.8a.6.6 0 0 1 .6-.6h.4m4 0V8c0-.667-.4-2-2-2s-2 1.333-2 2v2m4 0h-4"></svg:path><svg:path d="M6 17h14M6 21h14"></svg:path><svg:path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path></svg:g>`,
})
export class IconoirBookLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookSolidIcon],svg[iconoir-book-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.75 16.714a1 1 0 0 1-.014.143a.75.75 0 0 1-.736.893H6a1.25 1.25 0 1 0 0 2.5h14a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 19V5A2.75 2.75 0 0 1 6 2.25h13.4c.746 0 1.35.604 1.35 1.35zM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirBookSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookStackIcon],svg[iconoir-book-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5 19.5V5a2 2 0 0 1 2-2h11.4a.6.6 0 0 1 .6.6V21M9 7h6m-8.5 8H19M6.5 18H19M6.5 21H19"></svg:path><svg:path stroke-linejoin="round" d="M6.5 18c-1 0-1.5-.672-1.5-1.5S5.5 15 6.5 15m0 6c-1 0-1.5-.672-1.5-1.5S5.5 18 6.5 18"></svg:path></svg:g>`,
})
export class IconoirBookStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookmarkIcon],svg[iconoir-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0z"></svg:path>`,
})
export class IconoirBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookmarkBookIcon],svg[iconoir-bookmark-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></svg:path><svg:path stroke-linejoin="round" d="M8 3v8l2.5-1.6L13 11V3"></svg:path><svg:path d="M6 17h14M6 21h14"></svg:path><svg:path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path></svg:g>`,
})
export class IconoirBookmarkBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookmarkCircleIcon],svg[iconoir-bookmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 16v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6l-1.89-1.26a2 2 0 0 0-2.22 0z"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirBookmarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookmarkCircleSolidIcon],svg[iconoir-bookmark-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m-1 6A2.75 2.75 0 0 0 8.25 10v6a.75.75 0 0 0 1.166.624l1.89-1.26c.42-.28.968-.28 1.387 0l1.891 1.26A.75.75 0 0 0 15.75 16v-6A2.75 2.75 0 0 0 13 7.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirBookmarkCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBookmarkSolidIcon],svg[iconoir-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0z"></svg:path>`,
})
export class IconoirBookmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderBlIcon],svg[iconoir-border-bl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v16h16m.01-4l-.011.01M20.01 12l-.011.01M20.01 8l-.011.01M20.01 4l-.011.01M8.01 4l-.011.01M12.01 4l-.011.01M16.01 4l-.011.01"></svg:path>`,
})
export class IconoirBorderBlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderBottomIcon],svg[iconoir-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 4.01l.01-.011M16 4.01l.01-.011M12 4.01l.01-.011M8 4.01l.01-.011M4 4.01l.01-.011M4 8.01l.01-.011M4 12.01l.01-.011m7.99.011l.01-.011M4 16.01l.01-.011M20 8.01l.01-.011M20 12.01l.01-.011M20 16.01l.01-.011M4 20h16"></svg:path>`,
})
export class IconoirBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderBrIcon],svg[iconoir-border-br-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.01 4v16h-16M4 16l.011.01M4 12l.011.01M4 8l.011.01M4 4l.011.01M16 4l.011.01M12 4l.011.01M8 4l.011.01"></svg:path>`,
})
export class IconoirBorderBrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderInnerIcon],svg[iconoir-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 20.01l.01-.011M4 16.01l.01-.011M4 8.01l.01-.011M4 4.01l.01-.011M8 4.01l.01-.011M16 4.01l.01-.011M20 4.01l.01-.011M20 8.01l.01-.011M8 20.01l.01-.011m7.99.011l.01-.011m3.99.011l.01-.011M20 16.01l.01-.011M4 12h8m8 0h-8m0 0V4m0 8v8"></svg:path>`,
})
export class IconoirBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderLeftIcon],svg[iconoir-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.01 20l-.011.01M20.01 16l-.011.01M20.01 12l-.011.01M20.01 8l-.011.01M20.01 4l-.011.01M8.01 4l-.011.01M12.01 4l-.011.01M12.01 12l-.011.01M16.01 4l-.011.01M8.01 20l-.011.01M12.01 20l-.011.01M16.01 20l-.011.01M4 4v16"></svg:path>`,
})
export class IconoirBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderOutIcon],svg[iconoir-border-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.01 16l-.01.011M12.01 12l-.01.011M12.01 8l-.01.011M8.01 12l-.01.011M16.01 12l-.01.011M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirBorderOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderRightIcon],svg[iconoir-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 20l.01.01M4 16l.01.01M4 12l.01.01M4 8l.01.01M4 4l.01.01M16 4l.01.01M12 4l.01.01M12 12l.01.01M8 4l.01.01M16 20l.01.01M12 20l.01.01M8 20l.01.01M20.01 4v16"></svg:path>`,
})
export class IconoirBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderTlIcon],svg[iconoir-border-tl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 20.01l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011M20 16.01l.01-.011M20 12.01l.01-.011M20 8.01l.01-.011M4 20V4h16"></svg:path>`,
})
export class IconoirBorderTlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderTopIcon],svg[iconoir-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 20.01l.01-.011M16 20.01l.01-.011M12 20.01l.01-.011M8 20.01l.01-.011M4 20.01l.01-.011M4 8.01l.01-.011M4 12.01l.01-.011m7.99.011l.01-.011M4 16.01l.01-.011M20 8.01l.01-.011M20 12.01l.01-.011M20 16.01l.01-.011M4 4h16"></svg:path>`,
})
export class IconoirBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderTrIcon],svg[iconoir-border-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.01 20V4h-16M4 8l.01-.01M4 12l.01-.01M4 16l.01-.01M4 20l.01-.01M16 20l.01-.01M12 20l.01-.01M8 20l.01-.01"></svg:path>`,
})
export class IconoirBorderTrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBounceLeftIcon],svg[iconoir-bounce-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m15 8.5c-3-1-5.5-.5-8 4.5c-.5-3-2-7.5-3.5-10"></svg:path>`,
})
export class IconoirBounceLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBounceRightIcon],svg[iconoir-bounce-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4M4 15.5c3-1 5.5-.5 8 4.5c.5-3 2-7.5 3.5-10"></svg:path>`,
})
export class IconoirBounceRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBowlingBallIcon],svg[iconoir-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M11.5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-4 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4 2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class IconoirBowlingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBoxIcon],svg[iconoir-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 12h4M3 3h18m0 4v13.4a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V7"></svg:path>`,
})
export class IconoirBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBox3dCenterIcon],svg[iconoir-box-3d-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></svg:path><svg:path d="m20.5 16.722l-8.209-4.56a.6.6 0 0 0-.582 0L3.5 16.722m.028-9.428l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 3v9m0 7.5V22"></svg:path></svg:g>`,
})
export class IconoirBox3dCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBox3dPointIcon],svg[iconoir-box-3d-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M3 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></svg:path><svg:path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></svg:path></svg:g>`,
})
export class IconoirBox3dPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBox3dThreePointsIcon],svg[iconoir-box-3d-three-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2M3 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></svg:path><svg:path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></svg:path></svg:g>`,
})
export class IconoirBox3dThreePointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBoxIsoIcon],svg[iconoir-box-iso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path fill="currentColor" d="m2.695 7.185l9 4l.61-1.37l-9-4zM12.75 21.5v-11h-1.5v11zm-.445-10.315l9-4l-.61-1.37l-9 4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 17.11V6.89a.6.6 0 0 1 .356-.548l8.4-3.734a.6.6 0 0 1 .488 0l8.4 3.734A.6.6 0 0 1 21 6.89v10.22a.6.6 0 0 1-.356.548l-8.4 3.734a.6.6 0 0 1-.488 0l-8.4-3.734A.6.6 0 0 1 3 17.11"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 4.5l8.644 3.842a.6.6 0 0 1 .356.548v3.61"></svg:path></svg:g>`,
})
export class IconoirBoxIsoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBoxingGloveIcon],svg[iconoir-boxing-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.489 17.727h9.867m-9.867 0V21h9.867v-3.273m-9.867 0C5.2 15.546 3.556 10.091 4.104 8.455c.438-1.31 2.375-.91 3.289-.546C7.393 4.091 9.037 3 13.423 3C17.806 3 20 4.09 20 9.545c0 4.364-1.096 7.273-1.644 8.182"></svg:path><svg:path d="M7.393 7.91C7.758 8.272 8.818 9 10.133 9h4.934M7.393 7.91c0 3.817 1.644 4.363 2.74 4.363"></svg:path></svg:g>`,
})
export class IconoirBoxingGloveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrainIcon],svg[iconoir-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 14a3 3 0 1 0 1 5.83"></svg:path><svg:path d="M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m.238.065A2.5 2.5 0 1 1 12 4.5V20m-4 0a2 2 0 1 0 4 0m0-13a3 3 0 0 0 3 3m2 4a3 3 0 1 1-1 5.83"></svg:path><svg:path d="M19.736 15.605a4 4 0 0 0 .874-6.636m-.03-.081A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M16 20a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class IconoirBrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrainElectricityIcon],svg[iconoir-brain-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 14a3 3 0 1 0 1 5.83"></svg:path><svg:path d="M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m.238.065A2.5 2.5 0 1 1 12 4.5V20m-4 0a2 2 0 1 0 4 0m0-13a3 3 0 0 0 3 3m5.61-1.031A3.99 3.99 0 0 1 22 12c0 .703-.181 1.364-.5 1.938m-.92-5.05A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M14 22a2 2 0 0 1-2-2m6.667-4L17 19h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirBrainElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrainResearchIcon],svg[iconoir-brain-research-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 14a3 3 0 1 0 1 5.83"></svg:path><svg:path d="M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m.238.065A2.5 2.5 0 1 1 12 4.5V20m-4 0a2 2 0 1 0 4 0m0-13a3 3 0 0 0 3 3m5.61-1.031A3.99 3.99 0 0 1 22 12c0 .703-.181 1.364-.5 1.938m-.92-5.05A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M14 22a2 2 0 0 1-2-2m8.5.5L22 22m-6-3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path></svg:g>`,
})
export class IconoirBrainResearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrainWarningIcon],svg[iconoir-brain-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 14a3 3 0 1 0 1 5.83"></svg:path><svg:path d="M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m5-1a2.5 2.5 0 1 0-4.762 1.065M8 20a2 2 0 1 0 4 0m5-6a3 3 0 1 1-1 5.83"></svg:path><svg:path d="M19.736 15.605a4 4 0 0 0 .874-6.636m-.03-.081A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M16 20a2 2 0 1 1-4 0m0-12v4m0 4.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirBrainWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBreadSliceIcon],svg[iconoir-bread-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 20V9S3 4 9.5 4H17c7 0 3 5 3 5v9a2 2 0 0 1-2 2z"></svg:path><svg:path d="M7 20H6a2 2 0 0 1-2-2V9S0 4 6.5 4H10"></svg:path></svg:g>`,
})
export class IconoirBreadSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBridge3dIcon],svg[iconoir-bridge-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 4h3"></svg:path><svg:path fill="currentColor" d="M10 21a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-16a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M10 20s6.5-2.5 2-8s2-8 2-8M3 20h3"></svg:path></svg:g>`,
})
export class IconoirBridge3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBridgeSurfaceIcon],svg[iconoir-bridge-surface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12c0 4 2 9 8 9M10 6c0 4 2 9 8 9M3 8.5v-2M10 3V1M3 12l7-6m1 15l7-6m-3.5 6h2m4.5-6h2"></svg:path>`,
})
export class IconoirBridgeSurfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrightCrownIcon],svg[iconoir-bright-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1m14.8 3.5l1.2-7l-4.2 2.1L12 8.5l-1.8 2.1L6 8.5l1.2 7z"></svg:path>`,
})
export class IconoirBrightCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrightStarIcon],svg[iconoir-bright-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.952 9.623l1.559-3.305a.535.535 0 0 1 .978 0l1.559 3.305l3.485.533c.447.068.625.644.302.974l-2.522 2.57l.595 3.631c.077.467-.391.822-.791.602L12 16.218l-3.117 1.715c-.4.22-.868-.135-.791-.602l.595-3.63l-2.522-2.571c-.323-.33-.145-.906.302-.974zM22 12h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"></svg:path>`,
})
export class IconoirBrightStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrightnessIcon],svg[iconoir-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" d="m12 7l1.53 1.304l2.006.16l.16 2.005L17 12l-1.305 1.53l-.16 2.006l-2.004.16L12 17l-1.53-1.305l-2.006-.16l-.16-2.004L7 12l1.304-1.53l.16-2.006l2.005-.16z"></svg:path><svg:path fill="currentColor" d="M10.47 15.696L12 17V7l-1.53 1.304l-2.006.16l-.16 2.005L7 12l1.304 1.53l.16 2.006z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBrightnessWindowIcon],svg[iconoir-brightness-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" stroke-linecap="round" d="M12 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"></svg:path><svg:path stroke="currentColor" d="m18 14l1.225 1.044l1.603.128l.128 1.603L22 18l-1.044 1.225l-.128 1.603l-1.603.128L18 22l-1.225-1.044l-1.603-.128l-.128-1.603L14 18l1.044-1.225l.128-1.603l1.603-.128z"></svg:path><svg:path fill="currentColor" d="M16.775 20.956L18 22v-8l-1.225 1.044l-1.603.128l-.128 1.603L14 18l1.044 1.225l.128 1.603z"></svg:path></svg:g>`,
})
export class IconoirBrightnessWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleDownloadIcon],svg[iconoir-bubble-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 2v6m0 0l3-3m-3 3l-3-3m-3-2.95Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path>`,
})
export class IconoirBubbleDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleIncomeIcon],svg[iconoir-bubble-income-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 5h-6m0 0l3-3m-3 3l3 3m-6-5.95Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path>`,
})
export class IconoirBubbleIncomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleOutcomeIcon],svg[iconoir-bubble-outcome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 5h6m0 0l-3 3m3-3l-3-3m-6 .05Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path>`,
})
export class IconoirBubbleOutcomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleSearchIcon],svg[iconoir-bubble-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 6.5L22 8m-6-3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path><svg:path d="M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path></svg:g>`,
})
export class IconoirBubbleSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleSearchSolidIcon],svg[iconoir-bubble-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.586 10.173a2.25 2.25 0 0 1-2.177-.582l-.541-.541a4.75 4.75 0 0 1-5.19-7.371a7.7 7.7 0 0 0-1.604-.376A11 11 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75q0-.543-.053-1.074s-.045-.325-.111-.753M19.97 5.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M18.5 2.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M15.25 4.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path></svg:g>`,
})
export class IconoirBubbleSearchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleStarIcon],svg[iconoir-bubble-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17.306 4.113l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.177.568l-1.471 1.5l.347 2.118c.044.272-.229.48-.462.351l-1.818-1l-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.176-.568z"></svg:path><svg:path d="M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path></svg:g>`,
})
export class IconoirBubbleStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleUploadIcon],svg[iconoir-bubble-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 8V2m0 0l3 3m-3-3l-3 3m-3-2.95Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path>`,
})
export class IconoirBubbleUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleWarningIcon],svg[iconoir-bubble-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 2v3m0 4.01l.01-.011M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path>`,
})
export class IconoirBubbleWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleXmarkIcon],svg[iconoir-bubble-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1m-4.829-3.636l2.121-2.121m0 0l2.122-2.122m-2.122 2.122l-2.12-2.122m2.12 2.122l2.122 2.121"></svg:path>`,
})
export class IconoirBubbleXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleXmarkSolidIcon],svg[iconoir-bubble-xmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m19.773 8.955l-.53-.53l-.53.53a2.25 2.25 0 0 1-3.183-3.182l.53-.53l-.53-.53a2.25 2.25 0 0 1-.21-2.94A10.7 10.7 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75c0-.914-.114-1.802-.329-2.65a2.25 2.25 0 0 1-2.648-.395"></svg:path><svg:path d="M16.59 2.59a.75.75 0 0 1 1.061 0l1.591 1.592l1.591-1.591a.75.75 0 1 1 1.061 1.06l-1.591 1.591l1.591 1.591a.75.75 0 0 1-1.06 1.061l-1.592-1.59l-1.59 1.59a.75.75 0 1 1-1.061-1.06l1.59-1.592l-1.59-1.59a.75.75 0 0 1 0-1.061"></svg:path></svg:g>`,
})
export class IconoirBubbleXmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBugIcon],svg[iconoir-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21c-3.866 0-7-4.03-7-9s3.134-9 7-9s7 4.03 7 9s-3.134 9-7 9m6-3.5l2 2m-1-10l2-1m-16 1l-2-1"></svg:path><svg:path d="M18 8s-3 1-6 1M6 8s3 1 6 1m0 0v12m-7-7H2m20 0h-3M6 17.5l-2 2"></svg:path></svg:g>`,
})
export class IconoirBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBugSolidIcon],svg[iconoir-bug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c3.415 0 6.157 2.687 7.244 6.29l1.42-.711a.75.75 0 0 1 .671 1.342l-1.743.872a12.2 12.2 0 0 1 .094 3.207H22a.75.75 0 0 1 0 1.5h-2.565a11.3 11.3 0 0 1-.811 2.313l1.906 1.907a.75.75 0 1 1-1.06 1.06l-1.624-1.623C16.452 20.433 14.391 21.75 12 21.75s-4.452-1.317-5.846-3.343L4.53 20.03a.75.75 0 0 1-1.06-1.06l1.906-1.907a11.3 11.3 0 0 1-.81-2.313H2a.75.75 0 0 1 0-1.5h2.314a12.2 12.2 0 0 1 .094-3.207L2.665 9.17a.75.75 0 1 1 .67-1.342l1.42.71C5.843 4.937 8.585 2.25 12 2.25M11.25 19a.75.75 0 0 0 1.5 0V9.731a21 21 0 0 0 3.409-.47a.75.75 0 1 0-.318-1.467c-1.081.235-2.47.456-3.841.456c-1.372 0-2.76-.221-3.841-.456A.75.75 0 0 0 7.84 9.26c.95.206 2.154.41 3.409.471z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirBugSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBuildingIcon],svg[iconoir-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 9.01l.01-.011M14 9.01l.01-.011M10 13.01l.01-.011m3.99.011l.01-.011M10 17.01l.01-.011m3.99.011l.01-.011M6 20.4V5.6a.6.6 0 0 1 .6-.6H12V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6"></svg:path>`,
})
export class IconoirBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBusIcon],svg[iconoir-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 16.01l.01-.011m9.99.011l.01-.011M3 12h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm18-4V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m4 0h10"></svg:path><svg:path d="M4.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20m7 0v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20"></svg:path></svg:g>`,
})
export class IconoirBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBusGreenIcon],svg[iconoir-bus-green-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 16.01l.01-.011M21 12H3v7a1 1 0 0 0 1 1h9m4 3s.9-3.118 3-5"></svg:path><svg:path stroke-linejoin="round" d="m19.802 21.425l-.134.012a3.094 3.094 0 0 1-3.366-2.774a3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.497M21 8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m4 0h10"></svg:path><svg:path d="M4.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20"></svg:path></svg:g>`,
})
export class IconoirBusGreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirBusStopIcon],svg[iconoir-bus-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m16 16.01l.01-.011M6 16.01l.01-.011M20 22V8m0 0h-2V2h4v6zm-4 12H2.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H16m-2-4H6m8-6H6a4 4 0 0 0-4 4v2"></svg:path><svg:path d="M3.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20m7 0v1.9a.6.6 0 0 0 .6.6h.9"></svg:path></svg:g>`,
})
export class IconoirBusStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCSquareIcon],svg[iconoir-c-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M14 10v-.2A1.8 1.8 0 0 0 12.2 8h-.4A1.8 1.8 0 0 0 10 9.8v4.4a1.8 1.8 0 0 0 1.8 1.8h.4a1.8 1.8 0 0 0 1.8-1.8V14"></svg:path></svg:g>`,
})
export class IconoirCSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCableTagIcon],svg[iconoir-cable-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.667 8L10 12h4l-1.667 4"></svg:path></svg:g>`,
})
export class IconoirCableTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCableTagSolidIcon],svg[iconoir-cable-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 1.25 9v6A6.75 6.75 0 0 0 8 21.75h8A6.75 6.75 0 0 0 22.75 15V9A6.75 6.75 0 0 0 16 2.25zm4.359 6.039a.75.75 0 0 0-1.385-.577l-1.666 4A.75.75 0 0 0 10 12.75h2.875l-1.234 2.962a.75.75 0 0 0 1.385.577l1.666-4A.75.75 0 0 0 14 11.25h-2.875z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCableTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalculatorIcon],svg[iconoir-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1 21V3a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 7h4m-4 8.5h4m-4 3h4M5 7h2m2 0H7m0 0V5m0 2v2m-1.414 9.414L7 17m1.415-1.414L7 17m0 0l-1.414-1.414M7 17l1.415 1.414"></svg:path></svg:g>`,
})
export class IconoirCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarIcon],svg[iconoir-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9zm0 0V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5"></svg:path>`,
})
export class IconoirCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarArrowDownIcon],svg[iconoir-calendar-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21H5a2 2 0 0 1-2-2v-9h18v3m-6-9V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5m.5 12v6m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirCalendarArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarArrowDownSolidIcon],svg[iconoir-calendar-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3 9.25a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 5 21.75h10.568l-1.159-1.159a2.25 2.25 0 0 1 2.341-3.713V16a2.25 2.25 0 0 1 4.5 0v.81l.28-.28a.75.75 0 0 0 .22-.53v-6a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M7 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 5 3.25h1.25V2A.75.75 0 0 1 7 1.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H10.5a.75.75 0 0 1 0-1.5h3.75V2a.75.75 0 0 1 .75-.75M17.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21.75 6v4a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75m.72 18.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V16a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 1 0-1.06 1.06z"></svg:path></svg:g>`,
})
export class IconoirCalendarArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarArrowUpIcon],svg[iconoir-calendar-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21H5a2 2 0 0 1-2-2v-9h18v3m-6-9V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5m.5 18v-6m0 0l3 3m-3-3l-3 3"></svg:path>`,
})
export class IconoirCalendarArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarArrowUpSolidIcon],svg[iconoir-calendar-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3 9.25a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 5 21.75h11a.75.75 0 0 0 .53-.22l.22-.22v-.188a2.25 2.25 0 0 1-2.341-3.713l3-3a2.25 2.25 0 0 1 3.182 0l1.159 1.159V10a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M7 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 5 3.25h1.25V2A.75.75 0 0 1 7 1.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H10.5a.75.75 0 0 1 0-1.5h3.75V2a.75.75 0 0 1 .75-.75M17.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21.75 6v4a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75m.72 11.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-4.19l-1.72 1.72a.75.75 0 1 1-1.06-1.06z"></svg:path></svg:g>`,
})
export class IconoirCalendarArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarCheckIcon],svg[iconoir-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21H5a2 2 0 0 1-2-2v-9h18v5M15 4V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5M16 20l2 2l4-4"></svg:path>`,
})
export class IconoirCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarCheckSolidIcon],svg[iconoir-calendar-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3 9.25a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 5 21.75h9.568l-.159-.159a2.25 2.25 0 1 1 3.182-3.182l.41.409l2.408-2.409a2.24 2.24 0 0 1 1.341-.645V10a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M7 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 5 3.25h1.25V2A.75.75 0 0 1 7 1.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H10.5a.75.75 0 0 1 0-1.5h3.75V2a.75.75 0 0 1 .75-.75M17.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21.75 6v4a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75m-2.28 15.47a.75.75 0 0 1 1.06 0L18 20.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class IconoirCalendarCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarMinusIcon],svg[iconoir-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21H5a2 2 0 0 1-2-2v-9h18v3m-6-9V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5m-2.508 15H22"></svg:path>`,
})
export class IconoirCalendarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarMinusSolidIcon],svg[iconoir-calendar-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M15.242 19a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 0 1.5h-6.008a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M3 9.25a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 5 21.75h11a.75.75 0 0 0 .53-.22l.28-.28h-.818a2.25 2.25 0 1 1 0-4.5h5.319l.22-.22a.75.75 0 0 0 .219-.53v-6a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M7 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 5 3.25h1.25V2A.75.75 0 0 1 7 1.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H10.5a.75.75 0 0 1 0-1.5h3.75V2a.75.75 0 0 1 .75-.75M17.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21.75 6v4a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class IconoirCalendarMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarPlusIcon],svg[iconoir-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21H5a2 2 0 0 1-2-2v-9h18v3m-6-9V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5m-2.508 15h3M22 19h-3.008m0 0v-3m0 3v3"></svg:path>`,
})
export class IconoirCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarPlusSolidIcon],svg[iconoir-calendar-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M18.992 15.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.258V22a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M3 9.25a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 5 21.75h11a.75.75 0 0 0 .53-.22l.212-.212v-.068h-.75a2.25 2.25 0 1 1 0-4.5h.75V16a2.25 2.25 0 1 1 4.5 0v.75h.069l.22-.22a.75.75 0 0 0 .219-.53v-6a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M7 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 5 3.25h1.25V2A.75.75 0 0 1 7 1.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H10.5a.75.75 0 0 1 0-1.5h3.75V2a.75.75 0 0 1 .75-.75M17.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21.75 6v4a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class IconoirCalendarPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarRotateIcon],svg[iconoir-calendar-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 21H5a2 2 0 0 1-2-2v-9h18m-6-6V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5"></svg:path><svg:path d="M21.667 16.667C21.048 15.097 19.635 14 17.99 14c-1.759 0-3.253 1.255-3.794 3"></svg:path><svg:path d="M19.995 16.772H21.4a.6.6 0 0 0 .6-.6V14.55m-7.666 4.783C14.953 20.903 16.366 22 18.01 22c1.759 0 3.253-1.255 3.794-3"></svg:path><svg:path d="M16.005 19.228H14.6a.6.6 0 0 0-.6.6v1.622"></svg:path></svg:g>`,
})
export class IconoirCalendarRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarRotateSolidIcon],svg[iconoir-calendar-rotate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3 9.25a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 5 21.75h6.5v-3.5a6.75 6.75 0 0 1 6.75-6.75c1.281 0 2.48.473 3.5 1.093V10a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M7 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 5 3.25h1.25V2A.75.75 0 0 1 7 1.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H10.5a.75.75 0 0 1 0-1.5h3.75V2a.75.75 0 0 1 .75-.75M17.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21.75 6v4a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75m.24 10.75c-1.378 0-2.617.989-3.076 2.472a.75.75 0 1 1-1.433-.444c.622-2.008 2.371-3.528 4.51-3.528c1.998 0 3.66 1.33 4.374 3.142a.75.75 0 0 1-1.396.55c-.524-1.329-1.688-2.192-2.978-2.192"></svg:path><svg:path d="M22 13.8a.75.75 0 0 1 .75.75v1.622a1.35 1.35 0 0 1-1.35 1.35h-1.405a.75.75 0 0 1 0-1.5h1.255V14.55a.75.75 0 0 1 .75-.75m-3.99 7.45c1.379 0 2.618-.989 3.077-2.472a.75.75 0 1 1 1.433.444c-.622 2.008-2.371 3.528-4.51 3.528c-1.998 0-3.66-1.33-4.374-3.142a.75.75 0 1 1 1.396-.55c.524 1.329 1.688 2.192 2.978 2.192"></svg:path><svg:path d="M14 22.2a.75.75 0 0 1-.75-.75v-1.622c0-.746.604-1.35 1.35-1.35h1.405a.75.75 0 0 1 0 1.5H14.75v1.472a.75.75 0 0 1-.75.75"></svg:path></svg:g>`,
})
export class IconoirCalendarRotateSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarXmarkIcon],svg[iconoir-calendar-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 21H5a2 2 0 0 1-2-2v-9h18v5M15 4V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5M18 22.243l2.121-2.122m0 0L22.243 18m-2.122 2.121L18 18m2.121 2.121l2.122 2.122"></svg:path>`,
})
export class IconoirCalendarXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarXmarkSolidIcon],svg[iconoir-calendar-xmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3 9.25a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 5 21.75h10.804a2.24 2.24 0 0 1 .605-1.098l.53-.53l-.53-.531a2.25 2.25 0 1 1 3.182-3.182l.53.53l.53-.53a2.24 2.24 0 0 1 1.099-.605V10a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M7 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 5 3.25h1.25V2A.75.75 0 0 1 7 1.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H10.5a.75.75 0 0 1 0-1.5h3.75V2a.75.75 0 0 1 .75-.75M17.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21.75 6v4a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75m-.28 13.47a.75.75 0 0 1 1.06 0l1.591 1.59l1.591-1.59a.75.75 0 0 1 1.061 1.06l-1.591 1.591l1.591 1.591a.75.75 0 0 1-1.06 1.061l-1.592-1.591l-1.59 1.591a.75.75 0 1 1-1.061-1.06l1.59-1.592l-1.59-1.59a.75.75 0 0 1 0-1.061"></svg:path></svg:g>`,
})
export class IconoirCalendarXmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCameraIcon],svg[iconoir-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 19V9a2 2 0 0 1 2-2h.5a2 2 0 0 0 1.6-.8l2.22-2.96A.6.6 0 0 1 8.8 3h6.4a.6.6 0 0 1 .48.24L17.9 6.2a2 2 0 0 0 1.6.8h.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"></svg:path><svg:path d="M12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class IconoirCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCameraSolidIcon],svg[iconoir-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.72 2.79L5.5 5.75a1.25 1.25 0 0 1-1 .5H4A2.75 2.75 0 0 0 1.25 9v10A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V9A2.75 2.75 0 0 0 20 6.25h-.5a1.25 1.25 0 0 1-1-.5l-2.22-2.96a1.35 1.35 0 0 0-1.08-.54H8.8c-.425 0-.825.2-1.08.54M12 8.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCameraSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCandlestickChartIcon],svg[iconoir-candlestick-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 16v-2m7 7v-2m7-6v-2M5 8V6m7 7v-2m7-6V3M7 8.6v4.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6m7 5v4.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6m7-8v4.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirCandlestickChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCarIcon],svg[iconoir-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8m-9 4h1m8 0h1"></svg:path><svg:path d="M3 18v-6.59a2 2 0 0 1 .162-.787l2.319-5.41A2 2 0 0 1 7.319 4h9.362a2 2 0 0 1 1.838 1.212l2.32 5.41a2 2 0 0 1 .161.789V18M3 18v2.4a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V18m-4 0h4m14 0v2.4a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6V18m4 0h-4M7 18h10"></svg:path></svg:g>`,
})
export class IconoirCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCardLockIcon],svg[iconoir-card-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10m8-10H6m16 0v4m-.833 5.5h.233a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6h-3.8a.6.6 0 0 1-.6-.6v-2.3a.6.6 0 0 1 .6-.6h.233m3.334 0v-1.75c0-.583-.334-1.75-1.667-1.75s-1.667 1.167-1.667 1.75v1.75m3.334 0h-3.334"></svg:path>`,
})
export class IconoirCardLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCardNoAccessIcon],svg[iconoir-card-no-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8M22 9H6m16 0v4m-1 3.05a3.5 3.5 0 1 0-5 4.9m5-4.9a3.5 3.5 0 0 1-5 4.9m5-4.9l-5 4.9"></svg:path>`,
})
export class IconoirCardNoAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCardReaderIcon],svg[iconoir-card-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 19V3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M5 6H3.5a1.5 1.5 0 1 1 0-3h17a1.5 1.5 0 0 1 0 3H19"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 3v18"></svg:path></svg:g>`,
})
export class IconoirCardReaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCardShieldIcon],svg[iconoir-card-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8M22 9H6m16 0v2"></svg:path><svg:path d="m18.992 14.125l2.556.649c.266.068.453.31.445.584C21.821 21.116 18.5 22 18.5 22s-3.321-.884-3.493-6.642a.59.59 0 0 1 .445-.584l2.556-.649c.323-.082.661-.082.984 0"></svg:path></svg:g>`,
})
export class IconoirCardShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCardWalletIcon],svg[iconoir-card-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2ZM7 7V3.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6V7m-7-4v4m2-4v4"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirCardWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCartIcon],svg[iconoir-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"></svg:path></svg:g>`,
})
export class IconoirCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCartAltIcon],svg[iconoir-cart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path d="M16.5 4H22l-2 11h-4.5m1-11l-1 11m1-11h-5.75m4.75 11h-4m-.75-11H5l2 11h4.5m-.75-11l.75 11M5 4c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"></svg:path></svg:g>`,
})
export class IconoirCartAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCartMinusIcon],svg[iconoir-cart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h19l-3 10H6zm0 0l-.75-2.5M9.992 11h4M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class IconoirCartMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCartPlusIcon],svg[iconoir-cart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h19l-3 10H6zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class IconoirCartPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCashIcon],svg[iconoir-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"></svg:path><svg:path d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m6.5-2.99l.01-.011M5.5 12.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCashSolidIcon],svg[iconoir-cash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V7A2.75 2.75 0 0 0 20 4.25zm15.067 8.251a.75.75 0 1 0-1.114-1.004l-.01.011a.75.75 0 1 0 1.114 1.004zm-13.055-1.06a.75.75 0 0 1 .055 1.06l-.01.011a.75.75 0 1 1-1.114-1.004l.01-.011a.75.75 0 0 1 1.059-.055M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCell2x2Icon],svg[iconoir-cell-2x2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M21 3.6V12h-9V3h8.4a.6.6 0 0 1 .6.6Zm0 16.8V12h-9v9h8.4a.6.6 0 0 0 .6-.6ZM3 12V3.6a.6.6 0 0 1 .6-.6H12v9zm0 0v8.4a.6.6 0 0 0 .6.6H12v-9z"></svg:path>`,
})
export class IconoirCell2x2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCellarIcon],svg[iconoir-cellar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 21h18v-9a9 9 0 1 0-18 0zm0-4h18"></svg:path><svg:path d="M9 17v-4h12m-8 0V9h7"></svg:path></svg:g>`,
})
export class IconoirCellarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCenterAlignIcon],svg[iconoir-center-align-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 16.01l.01-.011M4 20.01l.01-.011M4 8.01l.01-.011M4 4.01l.01-.011M4 12.01l.01-.011M8 20.01l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011M20 16.01l.01-.011M20 12.01l.01-.011M20 8.01l.01-.011M20 4.01l.01-.011M16 4.01l.01-.011M12 4.01l.01-.011M8 4.01l.01-.011M8 16V8h8v8z"></svg:path>`,
})
export class IconoirCenterAlignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCenterAlignSolidIcon],svg[iconoir-center-align-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 16.01l.01-.011M4 20.01l.01-.011M4 8.01l.01-.011M4 4.01l.01-.011M4 12.01l.01-.011M8 20.01l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011M20 16.01l.01-.011M20 12.01l.01-.011M20 8.01l.01-.011M20 4.01l.01-.011M16 4.01l.01-.011M12 4.01l.01-.011M8 4.01l.01-.011"></svg:path><svg:path fill="currentColor" d="M8 16V8h8v8z"></svg:path></svg:g>`,
})
export class IconoirCenterAlignSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleIcon],svg[iconoir-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M17 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path></svg:g>`,
})
export class IconoirChatBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleCheckIcon],svg[iconoir-chat-bubble-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 12l3 3l5-5"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path></svg:g>`,
})
export class IconoirChatBubbleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleCheckSolidIcon],svg[iconoir-chat-bubble-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m4.53 9.28a.75.75 0 1 0-1.06-1.06L11 13.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleEmptyIcon],svg[iconoir-chat-bubble-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path>`,
})
export class IconoirChatBubbleEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleEmptySolidIcon],svg[iconoir-chat-bubble-empty-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleEmptySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleQuestionIcon],svg[iconoir-chat-bubble-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path></svg:g>`,
})
export class IconoirChatBubbleQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleQuestionSolidIcon],svg[iconoir-chat-bubble-question-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m9.095-4.397C10 7.895 9.75 8.341 9.75 9a.75.75 0 0 1-1.5 0c0-1.091.437-1.958 1.124-2.54c.67-.57 1.538-.835 2.376-.835s1.705.265 2.376.834c.687.583 1.124 1.45 1.124 2.541c0 .766-.196 1.35-.517 1.83c-.269.404-.619.716-.894.962l-.087.078c-.308.276-.539.504-.709.804c-.162.287-.293.688-.293 1.326a.75.75 0 0 1-1.5 0c0-.862.181-1.524.488-2.065c.299-.528.693-.894 1.01-1.18l.072-.065c.3-.27.508-.455.665-.692c.149-.222.265-.514.265-.998c0-.659-.25-1.105-.595-1.397c-.36-.306-.868-.478-1.405-.478s-1.045.172-1.405.478m2.222 10.898a.75.75 0 1 0-1.114-1.004l-.01.011a.75.75 0 0 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleQuestionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleSolidIcon],svg[iconoir-chat-bubble-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m5 9.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M10.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0M7 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleTranslateIcon],svg[iconoir-chat-bubble-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path><svg:path d="M7 8.517h5m5 0h-1.786m-3.214 0h3.214m-3.214 0V7m3.214 1.517c-.586 2.075-1.813 4.037-3.214 5.76M8.429 18C9.56 16.97 10.84 15.705 12 14.277m0 0c-.714-.829-1.714-2.17-2-2.777m2 2.777l2.143 2.206"></svg:path></svg:g>`,
})
export class IconoirChatBubbleTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleTranslateSolidIcon],svg[iconoir-chat-bubble-translate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25M12.75 7a.75.75 0 0 0-1.5 0v.767H7a.75.75 0 0 0 0 1.5h7.173c-.512 1.326-1.286 2.61-2.187 3.81a25 25 0 0 1-.54-.713c-.376-.516-.658-.952-.767-1.183a.75.75 0 0 0-1.358.638c.177.375.538.914.912 1.428c.252.345.527.703.791 1.03a35 35 0 0 1-3.1 3.168a.75.75 0 1 0 1.01 1.11a37 37 0 0 0 3.107-3.16l1.564 1.61a.75.75 0 1 0 1.076-1.045l-1.684-1.733c1.15-1.492 2.17-3.17 2.77-4.96H17a.75.75 0 0 0 0-1.5h-4.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleTranslateSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleWarningIcon],svg[iconoir-chat-bubble-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path>`,
})
export class IconoirChatBubbleWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleWarningSolidIcon],svg[iconoir-chat-bubble-warning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12M12 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m.567 9.251a.75.75 0 1 0-1.114-1.004l-.01.011a.75.75 0 1 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleWarningSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleXmarkIcon],svg[iconoir-chat-bubble-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.5 14.5l2.493-2.5M14.5 9.5L11.993 12m0 0L9.5 9.5m2.493 2.5l2.507 2.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path>`,
})
export class IconoirChatBubbleXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleXmarkSolidIcon],svg[iconoir-chat-bubble-xmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m-1.969 7.72a.75.75 0 0 0-1.062 1.06L10.934 12l-1.965 1.97a.75.75 0 1 0 1.062 1.06l1.963-1.97l1.976 1.971a.75.75 0 1 0 1.06-1.062L13.055 12l1.975-1.969a.75.75 0 1 0-1.06-1.062l-1.976 1.97z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleXmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatLinesIcon],svg[iconoir-chat-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h8m-8 4h4m0 8c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path>`,
})
export class IconoirChatLinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatLinesSolidIcon],svg[iconoir-chat-lines-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatLinesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatMinusInIcon],svg[iconoir-chat-minus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22M9 12h6"></svg:path>`,
})
export class IconoirChatMinusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatMinusInSolidIcon],svg[iconoir-chat-minus-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m-3 10a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatMinusInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatPlusInIcon],svg[iconoir-chat-plus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h3m3 0h-3m0 0V9m0 3v3m0 7c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path>`,
})
export class IconoirChatPlusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChatPlusInSolidIcon],svg[iconoir-chat-plus-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatPlusInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCheckIcon],svg[iconoir-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 13l4 4L19 7"></svg:path>`,
})
export class IconoirCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCheckCircleIcon],svg[iconoir-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m7 12.5l3 3l7-7"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCheckCircleSolidIcon],svg[iconoir-check-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M7.53 11.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l7-7a.75.75 0 0 0-1.06-1.06L10 14.44z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCheckCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCheckSquareIcon],svg[iconoir-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 12.5l3 3l7-7"></svg:path></svg:g>`,
})
export class IconoirCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCheckSquareSolidIcon],svg[iconoir-check-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm13.93 6.78a.75.75 0 0 0-1.06-1.06L10 14.44l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCheckSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChocolateIcon],svg[iconoir-chocolate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6.5c-3 0-4.5-.5-4.5-3.5H5v18h14zm0 8.5H5m0-6h14m-7 12V3"></svg:path>`,
})
export class IconoirChocolateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChromecastIcon],svg[iconoir-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 20.01l.01-.011M15 20h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1m0 9c2 .5 3.5 2 4 4m-4-8c4 .5 7.5 4 8 8"></svg:path>`,
})
export class IconoirChromecastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChromecastActiveIcon],svg[iconoir-chromecast-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2 20.01l.01-.011M15 20h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1m0 9c2 .5 3.5 2 4 4m-4-8c4 .5 7.5 4 8 8"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.002 7.63a.6.6 0 0 1 .6-.6h12.804a.6.6 0 0 1 .6.6v8.832a.6.6 0 0 1-.6.6H13.44a.62.62 0 0 1-.556-.355c-.422-.892-1.622-3.26-3.07-4.707c-1.42-1.419-3.572-2.444-4.435-2.82a.62.62 0 0 1-.378-.569z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirChromecastActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChurchIcon],svg[iconoir-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 6l-7.718 4.824a.6.6 0 0 0-.282.508V21.4a.6.6 0 0 0 .6.6H12m0-16l7.718 4.824a.6.6 0 0 1 .282.508V21.4a.6.6 0 0 1-.6.6H12m0-16V4m0-2v2m-2 0h2m0 0h2m-2 18v-5m4 .01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011"></svg:path>`,
})
export class IconoirChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirChurchSideIcon],svg[iconoir-church-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.576 7.424a.6.6 0 0 1 .848 0l3.4 3.4a.6.6 0 0 1 .176.425V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V11.249a.6.6 0 0 1 .176-.425zM8 7V4m0-2v2m0 0H6m2 0h2"></svg:path><svg:path d="M12 22h7.4a.6.6 0 0 0 .6-.6V10.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 7H8m0 15v-5m0-3.99l.01-.011"></svg:path></svg:g>`,
})
export class IconoirChurchSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCigaretteSlashIcon],svg[iconoir-cigarette-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 15v3m0-7c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V2m11 9c0-6-4-6-4-6s4 1 4-3m0 13v3"></svg:path><svg:path d="M2.6 18H18l-3-3H2.6a.6.6 0 0 0-.6.6v1.8a.6.6 0 0 0 .6.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3 3l18 18"></svg:path></svg:g>`,
})
export class IconoirCigaretteSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCinemaOldIcon],svg[iconoir-cinema-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m0 0v10"></svg:path></svg:g>`,
})
export class IconoirCinemaOldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCircleIcon],svg[iconoir-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCircleSparkIcon],svg[iconoir-circle-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path d="M13 6.5c3.134 0 4.5-1.318 4.5-4.5c0 3.182 1.357 4.5 4.5 4.5c-3.143 0-4.5 1.357-4.5 4.5c0-3.143-1.366-4.5-4.5-4.5Z"></svg:path></svg:g>`,
})
export class IconoirCircleSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCityIcon],svg[iconoir-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 9.01l.01-.011M11 9.01l.01-.011M7 13.01l.01-.011m3.99.011l.01-.011M7 17.01l.01-.011m3.99.011l.01-.011M15 21H3.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6H9V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V9m0 12h5.4a.6.6 0 0 0 .6-.6V9.6a.6.6 0 0 0-.6-.6H15m0 12v-4m0-8v4m0 0h2m-2 0v4m0 0h2"></svg:path>`,
})
export class IconoirCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirClipboardCheckIcon],svg[iconoir-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8.5 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m3.5-18H18a2 2 0 0 1 2 2v9"></svg:path><svg:path d="M8 6.4V4.5a.5.5 0 0 1 .5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 0 1 .5.5v1.9a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linejoin="round" d="m15.5 20.5l2 2l5-5"></svg:path></svg:g>`,
})
export class IconoirClipboardCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirClockIcon],svg[iconoir-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6h6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirClockRotateRightIcon],svg[iconoir-clock-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6h6"></svg:path><svg:path d="M21.888 10.5C21.164 5.689 17.013 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c4.1 0 7.625-2.468 9.168-6"></svg:path><svg:path d="M17 16h4.4a.6.6 0 0 1 .6.6V21"></svg:path></svg:g>`,
})
export class IconoirClockRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirClockSolidIcon],svg[iconoir-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-5.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirClockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirClosedCaptionsTagIcon],svg[iconoir-closed-captions-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" d="m10.5 10l-.172-.172a2.83 2.83 0 0 0-2-.828v0A2.83 2.83 0 0 0 5.5 11.828v.344A2.83 2.83 0 0 0 8.328 15v0c.75 0 1.47-.298 2-.828L10.5 14m8-4l-.172-.172a2.83 2.83 0 0 0-2-.828v0a2.83 2.83 0 0 0-2.828 2.828v.344A2.83 2.83 0 0 0 16.328 15v0c.75 0 1.47-.298 2-.828L18.5 14"></svg:path></svg:g>`,
})
export class IconoirClosedCaptionsTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirClosedCaptionsTagSolidIcon],svg[iconoir-closed-captions-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.25 9A6.75 6.75 0 0 1 7 2.25h10A6.75 6.75 0 0 1 23.75 9v6A6.75 6.75 0 0 1 17 21.75H7A6.75 6.75 0 0 1 .25 15zm4.5 2.828a3.578 3.578 0 0 1 6.109-2.53l.171.172a.75.75 0 0 1-1.06 1.06l-.172-.171a2.078 2.078 0 0 0-3.548 1.47v.343a2.078 2.078 0 0 0 3.548 1.47l.172-.172a.75.75 0 1 1 1.06 1.06l-.171.172a3.578 3.578 0 0 1-6.109-2.53zM16.328 8.25a3.58 3.58 0 0 0-3.578 3.578v.344a3.578 3.578 0 0 0 6.109 2.53l.171-.172a.75.75 0 1 0-1.06-1.06l-.172.171a2.079 2.079 0 0 1-3.548-1.47v-.343a2.078 2.078 0 0 1 3.548-1.47l.172.172a.75.75 0 0 0 1.06-1.06l-.171-.172a3.58 3.58 0 0 0-2.53-1.048" clip-rule="evenodd"></svg:path>`,
})
export class IconoirClosedCaptionsTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirClosetIcon],svg[iconoir-closet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 14H8m8 0h-1"></svg:path><svg:path d="M12 2h8.4a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6H12m0-20H3.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H12m0-20v20"></svg:path></svg:g>`,
})
export class IconoirClosetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudIcon],svg[iconoir-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12 4c-6 0-6 4-6 6c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5c0-2 0-6-6-6Z"></svg:path>`,
})
export class IconoirCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudBookmarkIcon],svg[iconoir-cloud-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.5 12h7v10L12 20l-3.5 2z"></svg:path><svg:path d="M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"></svg:path></svg:g>`,
})
export class IconoirCloudBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudCheckIcon],svg[iconoir-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 18l3 3l5-5"></svg:path><svg:path d="M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"></svg:path></svg:g>`,
})
export class IconoirCloudCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudDesyncIcon],svg[iconoir-cloud-desync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607m12.42 1.88l-1.768 1.768a4 4 0 0 1-5.656 0l-.354-.353"></svg:path><svg:path d="m16.067 21.962l.353-2.475l-2.475.354zm-8.487-5.06l1.768-1.768a4 4 0 0 1 5.657 0l.354.353"></svg:path><svg:path d="m7.934 14.427l-.353 2.475l2.474-.354z"></svg:path></svg:g>`,
})
export class IconoirCloudDesyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudDownloadIcon],svg[iconoir-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13v9m0 0l3.5-3.5M12 22l-3.5-3.5m11.5-.893c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"></svg:path>`,
})
export class IconoirCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudSquareIcon],svg[iconoir-cloud-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linejoin="round" d="M12 8c-3.273 0-3.273 2-3.273 3C7.818 11 6 11.5 6 13.5S7.818 16 8.727 16h6.546c.909 0 2.727-.5 2.727-2.5S16.182 11 15.273 11c0-1 0-3-3.273-3Z"></svg:path></svg:g>`,
})
export class IconoirCloudSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudSquareSolidIcon],svg[iconoir-cloud-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm8.4 5c-1.792 0-2.897.557-3.491 1.464c-.35.536-.47 1.128-.511 1.609c-.445.085-.94.255-1.388.551c-.76.502-1.36 1.353-1.36 2.626s.6 2.124 1.36 2.626c.72.475 1.555.624 2.117.624h6.546c.562 0 1.398-.149 2.117-.624c.76-.502 1.36-1.353 1.36-2.626s-.6-2.124-1.36-2.626a3.9 3.9 0 0 0-1.388-.551c-.04-.481-.16-1.073-.51-1.609c-.594-.907-1.7-1.464-3.492-1.464" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCloudSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudSunnyIcon],svg[iconoir-cloud-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 13c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5m-6-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7-3h1m-8-7V1m6.5 2.5l-1 1m-12-1l1 1M4 9h1"></svg:path>`,
})
export class IconoirCloudSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudSyncIcon],svg[iconoir-cloud-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607m3.58 1.88l1.768 1.768a4 4 0 0 0 5.657 0l.354-.353"></svg:path><svg:path d="m7.934 21.962l-.353-2.475l2.474.354zm8.364-5.06l-1.768-1.768a4 4 0 0 0-5.657 0l-.353.353"></svg:path><svg:path d="m15.945 14.427l.353 2.475l-2.475-.354z"></svg:path></svg:g>`,
})
export class IconoirCloudSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudUploadIcon],svg[iconoir-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-9m0 0l3.5 3.5M12 13l-3.5 3.5M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"></svg:path>`,
})
export class IconoirCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudXmarkIcon],svg[iconoir-cloud-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 22l3-3m3-3l-3 3m0 0l-3-3m3 3l3 3m5-4.393c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"></svg:path>`,
})
export class IconoirCloudXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCodeIcon],svg[iconoir-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"></svg:path>`,
})
export class IconoirCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCodeBracketsIcon],svg[iconoir-code-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 21H8c-1.105 0-2-.894-2-1.999V14c0-1-1.5-2-1.5-2S6 11 6 10V5a2 2 0 0 1 2-2h1m6 18h1c1.105 0 2-.894 2-1.999V14c0-1 1.5-2 1.5-2S18 11 18 10V5a2 2 0 0 0-2-2h-1"></svg:path>`,
})
export class IconoirCodeBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCodeBracketsSquareIcon],svg[iconoir-code-brackets-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 17h-.667a2 2 0 0 1-2-2v-1.889C7.333 12.556 6 12 6 12s1.333-.556 1.333-1.111V9a2 2 0 0 1 2-2H10m4 10h.667a2 2 0 0 0 2-2v-1.889C16.667 12.556 18 12 18 12s-1.333-.556-1.333-1.111V9a2 2 0 0 0-2-2H14"></svg:path><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirCodeBracketsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCodepenIcon],svg[iconoir-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6l9 6z"></svg:path><svg:path d="m12 21l-9-6l9-6l9 6z"></svg:path></svg:g>`,
})
export class IconoirCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCoffeeCupIcon],svg[iconoir-coffee-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 11.6V15a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3.4a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6M12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0 0 17 4.143V3.5M8 9v-.5a3 3 0 0 1 3-3v0a2 2 0 0 0 2-2V3"></svg:path><svg:path d="M16 11h2.5a2.5 2.5 0 0 1 0 5H17"></svg:path></svg:g>`,
})
export class IconoirCoffeeCupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCoinSlashIcon],svg[iconoir-coin-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.623 5.248A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.615-2.5m2.687-3.822A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10c-1.231 0-2.41.223-3.5.63"></svg:path><svg:path d="M9 15c.644.86 1.843 1.35 3 1.391c1.114.04 2.19-.336 2.697-1.198M12 16.391V18.5m-2.5-9c0 1.181.852 1.665 1.886 2M15 8.5c-.685-.685-1.891-1.161-3-1.191V5.5M3 3l18 18"></svg:path></svg:g>`,
})
export class IconoirCoinSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCoinsIcon],svg[iconoir-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 13c-2.761 0-5-1.12-5-2.5S13.239 8 16 8s5 1.12 5 2.5s-2.239 2.5-5 2.5m-5 1.5c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5m-18-5C3 10.88 5.239 12 8 12c1.126 0 2.165-.186 3-.5M3 13c0 1.38 2.239 2.5 5 2.5c1.126 0 2.164-.186 3-.5"></svg:path><svg:path d="M3 5.5v11C3 17.88 5.239 19 8 19c1.126 0 2.164-.186 3-.5m2-10v-3m-2 5v8c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5v-8"></svg:path><svg:path d="M8 8C5.239 8 3 6.88 3 5.5S5.239 3 8 3s5 1.12 5 2.5S10.761 8 8 8"></svg:path></svg:g>`,
})
export class IconoirCoinsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCoinsSwapIcon],svg[iconoir-coins-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.019 9A6.5 6.5 0 1 1 15 14.981"></svg:path><svg:path d="M8.5 22a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13M22 17a3 3 0 0 1-3 3h-2m0 0l2-2m-2 2l2 2M2 7a3 3 0 0 1 3-3h2m0 0L5 6m2-2L5 2"></svg:path></svg:g>`,
})
export class IconoirCoinsSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCollageFrameIcon],svg[iconoir-collage-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M19.4 20H4.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6ZM11 12V4m-7 8h16"></svg:path>`,
})
export class IconoirCollageFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCollapseIcon],svg[iconoir-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 20l-5-5m0 0v4m0-4h4M4 20l5-5m0 0v4m0-4H5M20 4l-5 5m0 0V5m0 4h4M4 4l5 5m0 0V5m0 4H5"></svg:path>`,
})
export class IconoirCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirColorFilterIcon],svg[iconoir-color-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 14.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M16 21.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M8 21.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path></svg:g>`,
})
export class IconoirColorFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirColorPickerIcon],svg[iconoir-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 13.161l5.464-5.464a1 1 0 0 1 1.415 0l2.12 2.12a1 1 0 0 1 0 1.415l-1.928 1.929m-7.071 0l-2.172 2.172a1 1 0 0 0-.218.327l-1.028 2.496c-.508 1.233.725 2.466 1.958 1.959l2.497-1.028q.185-.077.326-.218l5.708-5.708m-7.071 0h7.071m-.193-9.707l2.121 2.121m4.243 4.243l-2.121-2.121m-2.122-2.122l1.414-1.414a1 1 0 0 1 1.415 0l.707.707a1 1 0 0 1 0 1.414L18.12 7.697m-2.122-2.122l2.122 2.122"></svg:path>`,
})
export class IconoirColorPickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirColorPickerEmptyIcon],svg[iconoir-color-picker-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.879 7.697L16 9.817a1 1 0 0 1 0 1.415L8.363 18.87a1.001 1.001 0 0 1-.326.218L5.54 20.114c-1.233.508-2.466-.725-1.958-1.958L4.61 15.66a.999.999 0 0 1 .218-.327l7.636-7.636a1 1 0 0 1 1.415 0Zm0-4.243L16 5.575m4.243 4.243L18.12 7.697M16 5.575l1.413-1.414a1 1 0 0 1 1.414 0l.708.707a1 1 0 0 1 0 1.414L18.12 7.697M16 5.575l2.12 2.122"></svg:path>`,
})
export class IconoirColorPickerEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirColorWheelIcon],svg[iconoir-color-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-14v6m0 8v6M2 12h6m8 0h6M4.929 4.929L9.172 9.17m5.656 5.659l4.243 4.242m-14.142 0l4.243-4.242m5.656-5.658l4.243-4.242"></svg:path></svg:g>`,
})
export class IconoirColorWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCombineIcon],svg[iconoir-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 9.6v10.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M15 3.6v10.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirCombineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCommodityIcon],svg[iconoir-commodity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m12.147 18.28l1.184-5.8a.6.6 0 0 1 .588-.48h6.162a.6.6 0 0 1 .588.48l1.184 5.8a.6.6 0 0 1-.588.72h-8.53a.6.6 0 0 1-.588-.72Z"></svg:path><svg:path d="m7.147 11.28l1.184-5.8A.6.6 0 0 1 8.918 5h6.164a.6.6 0 0 1 .587.48l1.184 5.8a.6.6 0 0 1-.588.72h-8.53a.6.6 0 0 1-.588-.72Z"></svg:path><svg:path d="m2.147 18.28l1.184-5.8a.6.6 0 0 1 .587-.48h6.163a.6.6 0 0 1 .588.48l1.184 5.8a.6.6 0 0 1-.588.72h-8.53a.6.6 0 0 1-.588-.72Z"></svg:path></svg:g>`,
})
export class IconoirCommodityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCommunityIcon],svg[iconoir-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M1 18v-1a3 3 0 0 1 3-3v0m19 4v-1a3 3 0 0 0-3-3v0m-8-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-8 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class IconoirCommunityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignBottomIcon],svg[iconoir-comp-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 21H2"></svg:path><svg:path d="M8 15V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignBottomSolidIcon],svg[iconoir-comp-align-bottom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 21H2"></svg:path><svg:path fill="currentColor" d="M8 15V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignBottomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignLeftIcon],svg[iconoir-comp-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22V2"></svg:path><svg:path d="M19 16H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignLeftSolidIcon],svg[iconoir-comp-align-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22V2"></svg:path><svg:path fill="currentColor" d="M19 16H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignRightIcon],svg[iconoir-comp-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 22V2"></svg:path><svg:path d="M15 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignRightSolidIcon],svg[iconoir-comp-align-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 22V2"></svg:path><svg:path fill="currentColor" d="M15 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignTopIcon],svg[iconoir-comp-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 3H2"></svg:path><svg:path d="M8 19V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignTopSolidIcon],svg[iconoir-comp-align-top-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 3H2"></svg:path><svg:path fill="currentColor" d="M8 19V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignTopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompactDiscIcon],svg[iconoir-compact-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirCompactDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompassIcon],svg[iconoir-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.586 10.586L16.95 7.05l-3.536 6.364L7.05 16.95z"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompassSolidIcon],svg[iconoir-compass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12S6.063 1.25 12 1.25m5.605 6.164a.75.75 0 0 0-1.02-1.02L10.221 9.93a.75.75 0 0 0-.291.291l-3.536 6.364a.75.75 0 0 0 1.02 1.02l6.364-3.535a.75.75 0 0 0 .291-.292z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCompassSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirComponentIcon],svg[iconoir-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m5.212 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0Zm6.364 6.364l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0Zm0-12.727L8.889 6.06a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0Zm6.364 6.363l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"></svg:path>`,
})
export class IconoirComponentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirComponentSolidIcon],svg[iconoir-component-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="m5.212 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0Zm6.364 6.365l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0Zm0-12.729L8.889 6.06a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0Zm6.364 6.364l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"></svg:path>`,
})
export class IconoirComponentSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompressIcon],svg[iconoir-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 12H6m6 10v-6m0 0l3 3m-3-3l-3 3m3-17v6m0 0l3-3m-3 3L9 5"></svg:path>`,
})
export class IconoirCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCompressLinesIcon],svg[iconoir-compress-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 2H6m12 20H6m6-17v5m0 0l3-3m-3 3L9 7m3 12v-5m0 0l3 3m-3-3l-3 3"></svg:path>`,
})
export class IconoirCompressLinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirComputerIcon],svg[iconoir-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 21h15m4 0h1"></svg:path><svg:path d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirConstrainedSurfaceIcon],svg[iconoir-constrained-surface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 23a2 2 0 1 1 0-4a2 2 0 0 1 0 4m18 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4M3 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m18 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-8 7c0-1.246-1.158-2.5-2.572-2.5h-.857C8.152 9.5 7 10.62 7 12c0 1.19.855 2.185 2 2.438q.283.062.572.062"></svg:path><svg:path d="M11 12c0 1.246 1.159 2.5 2.572 2.5h.857C15.849 14.5 17 13.38 17 12c0-1.19-.855-2.186-2-2.438a2.7 2.7 0 0 0-.572-.062M21 19V5M3 19V5m2-2h14M5 21h14"></svg:path></svg:g>`,
})
export class IconoirConstrainedSurfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirConsumableIcon],svg[iconoir-consumable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22.003 3v4.497A.503.503 0 0 1 21.5 8v0a.52.52 0 0 1-.466-.3A10 10 0 0 0 12.003 2c-5.185 0-9.449 3.947-9.95 9"></svg:path><svg:path d="M17 10v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m-5 1V8"></svg:path><svg:path d="M2.05 21v-4.497c0-.278.226-.503.504-.503v0c.2 0 .38.119.466.3a10 10 0 0 0 9.03 5.7c5.186 0 9.45-3.947 9.952-9"></svg:path></svg:g>`,
})
export class IconoirConsumableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirContactlessIcon],svg[iconoir-contactless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 21.5c4-5.5 4-13.5 0-19M11.5 20c3.5-5 3.5-11 0-16m-3 14c2.667-3.75 2.667-8.25 0-12m-3 10c1.5-2.5 1.5-5.5 0-8"></svg:path>`,
})
export class IconoirContactlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirControlSliderIcon],svg[iconoir-control-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m6.755 17.283l-1.429-10A2 2 0 0 1 7.306 5h3.388a2 2 0 0 1 1.98 2.283l-1.429 10A2 2 0 0 1 9.265 19h-.53a2 2 0 0 1-1.98-1.717Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 12h4m16 0H12"></svg:path></svg:g>`,
})
export class IconoirControlSliderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCookieIcon],svg[iconoir-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M7.5 11a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m5.5 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2M11 7.01l.01-.011M8 16.01l.01-.011M16 9.01l.01-.011M17 14.01l.01-.011M13 12.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCoolingSquareIcon],svg[iconoir-cooling-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6M12 7v5m0 5v-5m0 0L7.5 9.5M12 12l4.5 2.5M12 12l4.5-2.5M12 12l-4.5 2.5"></svg:path>`,
})
export class IconoirCoolingSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCoolingSquareSolidIcon],svg[iconoir-cooling-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.4 21.75a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35zM12.75 7a.75.75 0 0 0-1.5 0v3.725l-3.386-1.88a.75.75 0 0 0-.728 1.31L10.456 12l-3.32 1.844a.75.75 0 1 0 .728 1.312l3.386-1.881V17a.75.75 0 0 0 1.5 0v-3.725l3.386 1.88a.75.75 0 1 0 .728-1.31L13.544 12l3.32-1.844a.75.75 0 1 0-.728-1.312l-3.386 1.881z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCoolingSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCopyIcon],svg[iconoir-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.4 20H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h9.8a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6"></svg:path><svg:path d="M15 9V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6H9"></svg:path></svg:g>`,
})
export class IconoirCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCopyrightIcon],svg[iconoir-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M13.5 9.17a3 3 0 1 0 0 5.659"></svg:path></svg:g>`,
})
export class IconoirCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCornerBottomLeftIcon],svg[iconoir-corner-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8l.01.011M4 4l.01.011M8 4l.01.011M12 4l.01.011M16 4l.01.011M20 4l.01.011M20 8l.01.011M20 12l.01.011M20 16l.01.011M20 20l.01.011M16 20l.01.011M4 12.01v8h8v-8z"></svg:path>`,
})
export class IconoirCornerBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCornerBottomRightIcon],svg[iconoir-corner-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.01 8l-.01.011M20.01 4l-.01.011M16.01 4l-.01.011M12.01 4l-.01.011M8.01 4L8 4.011M4.01 4L4 4.011M4.01 8L4 8.011M4.01 12l-.01.011M4.01 16l-.01.011M4.01 20l-.01.011M8.01 20l-.01.011m12.01-8.001v8h-8v-8z"></svg:path>`,
})
export class IconoirCornerBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCornerTopLeftIcon],svg[iconoir-corner-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 16.01l.01-.011M4 20.01l.01-.011M8 20.01l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011M20 16.01l.01-.011M20 12.01l.01-.011M20 8.01l.01-.011M20 4.01l.01-.011M16 4.01l.01-.011M4 12V4h8v8z"></svg:path>`,
})
export class IconoirCornerTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCornerTopRightIcon],svg[iconoir-corner-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.01 16.01l-.01-.011m.01 4.011l-.01-.011m-3.99.011l-.01-.011m-3.99.011l-.01-.011m-3.99.011L8 19.999m-3.99.011L4 19.999m.01-3.989L4 15.999m.01-3.989L4 11.999m.01-3.989L4 7.999m.01-3.989L4 3.999m4.01.011L8 3.999M20.01 12V4h-8v8z"></svg:path>`,
})
export class IconoirCornerTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCpuIcon],svg[iconoir-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 15.4V8.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="M20 4.6v14.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6M17 4V2m-5 2V2M7 4V2m0 18v2m5-2v2m5-2v2m3-5h2m-2-5h2m-2-5h2M4 17H2m2-5H2m2-5H2"></svg:path></svg:g>`,
})
export class IconoirCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCpuWarningIcon],svg[iconoir-cpu-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 2v4m0 4.01l.01-.011M16 14v1.4a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6H14"></svg:path><svg:path d="M20 14v5.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6H14m6 13h2m-5 3v2m-5-2v2m-5-2v2m-3-5H2m2-5H2m2-5H2m10-3V2M7 4V2"></svg:path></svg:g>`,
})
export class IconoirCpuWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCrackedEggIcon],svg[iconoir-cracked-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22a8 8 0 0 0 8-8c0-4.418-3.582-12-8-12S4 9.582 4 14a8 8 0 0 0 8 8"></svg:path><svg:path d="M9.5 3.5L12 8l-2.5 3l2.5 3.5"></svg:path></svg:g>`,
})
export class IconoirCrackedEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCreativeCommonsIcon],svg[iconoir-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M10.5 9.17a3 3 0 1 0 0 5.659m6.25-5.659a3 3 0 1 0 0 5.659"></svg:path></svg:g>`,
})
export class IconoirCreativeCommonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCardIcon],svg[iconoir-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm0 0H6"></svg:path>`,
})
export class IconoirCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCard2Icon],svg[iconoir-credit-card-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 9V5.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V9Zm0 0h14"></svg:path><svg:rect width="4" height="4" x="15" y="12" fill="currentColor" rx=".6"></svg:rect></svg:g>`,
})
export class IconoirCreditCard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCardSlashIcon],svg[iconoir-credit-card-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9h3M3 3l18 18m1-12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1m17 4V7a2 2 0 0 0-2-2H10m12 4h-8M9 9H6"></svg:path>`,
})
export class IconoirCreditCardSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCardSolidIcon],svg[iconoir-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V9.75H6a.75.75 0 0 1 0-1.5h16.75V7A2.75 2.75 0 0 0 20 4.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCreditCardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCardsIcon],svg[iconoir-credit-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 11.429V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1.5m17-5.071V10a2 2 0 0 0-2-2h-1m3 3.429h-3"></svg:path><svg:path d="M19 8v6.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2zm0 0H5.5"></svg:path></svg:g>`,
})
export class IconoirCreditCardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCribIcon],svg[iconoir-crib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 5v16"></svg:path><svg:path d="M3 16h18M3 7h18m-3 9V7m-4 9V7m-4 9V7m-4 9V7M3 19h18"></svg:path><svg:path stroke-linecap="round" d="M21 5v16m0-16a1 1 0 1 0 0-2a1 1 0 0 0 0 2M3 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirCribIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCropIcon],svg[iconoir-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 18H6V3"></svg:path><svg:path d="M3 6h15v15"></svg:path></svg:g>`,
})
export class IconoirCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateBlIcon],svg[iconoir-crop-rotate-bl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 14v3a4 4 0 0 0 4 4h4"></svg:path><svg:path d="M1.5 16.5L4 14l2.5 2.5M20 11V5a1 1 0 0 0-1-1h-6M8 4h2m10 12v-2M10 2v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateBlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateBrIcon],svg[iconoir-crop-rotate-br-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 20h3a4 4 0 0 0 4-4v-4"></svg:path><svg:path d="M16.5 22.5L14 20l2.5-2.5M14 11V5a1 1 0 0 0-1-1H7M2 4h2m10 12v-2M4 2v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateBrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateTlIcon],svg[iconoir-crop-rotate-tl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 4H7a4 4 0 0 0-4 4v4"></svg:path><svg:path d="M7.5 1.5L10 4L7.5 6.5M20 17v-6a1 1 0 0 0-1-1h-6m-5 0h2m10 12v-2M10 8v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateTlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateTrIcon],svg[iconoir-crop-rotate-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 10V7a4 4 0 0 0-4-4h-4"></svg:path><svg:path d="M22.5 7.5L20 10l-2.5-2.5M14 17v-6a1 1 0 0 0-1-1H7m-5 0h2m10 12v-2M4 8v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateTrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCrownIcon],svg[iconoir-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.2 17L21 7l-6.3 3L12 7l-2.7 3L3 7l1.8 10z"></svg:path>`,
})
export class IconoirCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCrownCircleIcon],svg[iconoir-crown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="m16.8 15.5l1.2-7l-4.2 2.1L12 8.5l-1.8 2.1L6 8.5l1.2 7z"></svg:path></svg:g>`,
})
export class IconoirCrownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCss3Icon],svg[iconoir-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 3l1.778 17.09L12 22l6.222-1.91L20 3z"></svg:path><svg:path d="M7 7h9.5l-1 10l-3.5 1l-3.5-1l-.25-2.5m7.75-3H7.5"></svg:path></svg:g>`,
})
export class IconoirCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeIcon],svg[iconoir-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></svg:path><svg:path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></svg:path></svg:g>`,
})
export class IconoirCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeBandageIcon],svg[iconoir-cube-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12 22l-8.691-4.828A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524V11"></svg:path><svg:path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 12v5.5M12 2v7m6.657 8.243l.707.707m-2.121.707l.707.707m.707-4.95l-4.243 4.243a2 2 0 0 0 0 2.828l.707.708a2 2 0 0 0 2.829 0l4.242-4.243a2 2 0 0 0 0-2.828l-.707-.708a2 2 0 0 0-2.828 0"></svg:path></svg:g>`,
})
export class IconoirCubeBandageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeCutWithCurveIcon],svg[iconoir-cube-cut-with-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.528 7.293L9 10.333M22 2h-2m-8 10v-2a8 8 0 0 1 5.5-7.602M22 12h-2m-8 10v-2a8 8 0 0 1 5.5-7.602"></svg:path><svg:path d="m12 22l-8.691-4.828A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0L15 3.667M12 12L3.528 7.293M12 21v-9m3 1.5V4"></svg:path></svg:g>`,
})
export class IconoirCubeCutWithCurveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeDotsIcon],svg[iconoir-cube-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.496 19.717l6-3.43A1 1 0 0 0 19 15.42V9.58a1 1 0 0 0-.504-.868l-6-3.428a1 1 0 0 0-.992 0l-6 3.428A1 1 0 0 0 5 9.58v5.84a1 1 0 0 0 .504.868l6 3.428a1 1 0 0 0 .992 0M5.5 9.5L12 13m0 0l6.5-3.5M12 13v6.5M3 3.01L3.01 3M3 21.01l.01-.01M21 3.01l.01-.01M21 21.01l.01-.011"></svg:path>`,
})
export class IconoirCubeDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeDotsSolidIcon],svg[iconoir-cube-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.868 4.632a1.75 1.75 0 0 0-1.736 0l-6 3.429A1.75 1.75 0 0 0 4.25 9.58v5.84c0 .627.337 1.207.882 1.519l6 3.428a1.75 1.75 0 0 0 1.736 0l6-3.428a1.75 1.75 0 0 0 .882-1.52V9.58a1.75 1.75 0 0 0-.882-1.518zM7.356 9.647a.75.75 0 1 0-.712 1.321l4.606 2.48V17.5a.75.75 0 1 0 1.5 0v-4.052l4.606-2.48a.75.75 0 1 0-.712-1.32L12 12.147zM3.512 2.442A.75.75 0 0 1 3.567 3.5l-.01.01a.75.75 0 1 1-1.114-1.003l.01-.01a.75.75 0 0 1 1.059-.056m0 18.001a.75.75 0 0 1 .055 1.059l-.01.01a.75.75 0 1 1-1.114-1.003l.01-.01a.75.75 0 0 1 1.059-.056m18-18a.75.75 0 0 1 .055 1.059l-.01.01a.75.75 0 0 1-1.114-1.003l.01-.01a.75.75 0 0 1 1.059-.056m0 18a.75.75 0 0 1 .055 1.059l-.01.01a.75.75 0 1 1-1.114-1.003l.01-.01a.75.75 0 0 1 1.059-.056" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCubeDotsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeHoleIcon],svg[iconoir-cube-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524M3.528 7.294L8.4 10m12.1-2.722L15.6 10M12 21v-5"></svg:path></svg:g>`,
})
export class IconoirCubeHoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeReplaceFaceIcon],svg[iconoir-cube-replace-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 13.5v5.152a.6.6 0 0 1-.302.52l-6.4 3.658a.6.6 0 0 1-.596 0l-6.4-3.657A.6.6 0 0 1 5 18.652V13m7 9.5V17m11-9L11 1m2 14L1 8m0 0c3-5 7-2 10-7"></svg:path><svg:path d="M13 15c3-5 7-2 10-7"></svg:path></svg:g>`,
})
export class IconoirCubeReplaceFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeScanIcon],svg[iconoir-cube-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 3H3v3m15-3h3v3M6 21H3v-3m15 3h3v-3m-8.485-.309l4-2.4a1 1 0 0 0 .485-.857v-3.868a1 1 0 0 0-.485-.857l-4-2.4a1 1 0 0 0-1.03 0l-4 2.4a1 1 0 0 0-.485.857v3.868a1 1 0 0 0 .486.857l4 2.4a1 1 0 0 0 1.028 0"></svg:path><svg:path d="M7.5 10.5L12 13m0 0s3.764-2.05 4.5-2.5M12 13v4.5"></svg:path></svg:g>`,
})
export class IconoirCubeScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeScanSolidIcon],svg[iconoir-cube-scan-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 3A.75.75 0 0 1 3 2.25h3a.75.75 0 0 1 0 1.5H3.75V6a.75.75 0 0 1-1.5 0zm15 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3.75H18a.75.75 0 0 1-.75-.75M3 17.25a.75.75 0 0 1 .75.75v2.25H6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h2.25V18a.75.75 0 0 1 .75-.75M12.9 6.665a1.75 1.75 0 0 0-1.8 0l-4 2.4a1.75 1.75 0 0 0-.85 1.501v3.868c0 .614.323 1.184.85 1.5l4 2.4a1.75 1.75 0 0 0 1.8 0l4-2.4a1.75 1.75 0 0 0 .85-1.5v-3.868a1.75 1.75 0 0 0-.85-1.5zm-3.536 4.013a.75.75 0 1 0-.728 1.312l2.614 1.452V16a.75.75 0 1 0 1.5 0v-2.554a525 525 0 0 0 2.614-1.438a.75.75 0 0 0-.728-1.312a424 424 0 0 1-2.633 1.448z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCubeScanSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCursorPointerIcon],svg[iconoir-cursor-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M19.503 9.97c1.204.489 1.112 2.224-.137 2.583l-6.305 1.813l-2.88 5.895c-.571 1.168-2.296.957-2.569-.314L4.677 6.257A1.369 1.369 0 0 1 6.53 4.7z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCursorPointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCurveArrayIcon],svg[iconoir-curve-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.164 17a17.5 17.5 0 0 1 1.132-3M11.5 7.794A17 17 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path><svg:path d="M9.5 12a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m10-5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path></svg:g>`,
})
export class IconoirCurveArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCutIcon],svg[iconoir-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12h1m4 0h1M6.236 7a3 3 0 1 0-4.472-4a3 3 0 0 0 4.472 4m0 0L19 18M6.236 17a3 3 0 1 1-4.472 4a3 3 0 0 1 4.472-4m0 0L19 6"></svg:path>`,
})
export class IconoirCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCutAltIcon],svg[iconoir-cut-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.236 8a3 3 0 1 0-4.472-4a3 3 0 0 0 4.472 4Zm0 0L16 16m1-4h1m4 0h1M6.236 16a3 3 0 1 1-4.472 4a3 3 0 0 1 4.472-4Zm0 0L16 8"></svg:path>`,
})
export class IconoirCutAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCutleryIcon],svg[iconoir-cutlery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20h3m3 0H9m0 0v-5m8 5v-8s2.5-1 2.5-3V4.5m-2.5 4v-4M4.5 11c1 2.128 4.5 4 4.5 4s3.5-1.872 4.5-4c1.08-2.297 0-6.5 0-6.5h-9s-1.08 4.203 0 6.5"></svg:path>`,
})
export class IconoirCutleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCyclingIcon],svg[iconoir-cycling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5.5-3l1.5-4l-4.882-2l3-3.5l3 2.5h3.5"></svg:path>`,
})
export class IconoirCyclingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirCylinderIcon],svg[iconoir-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2c8 0 8 3 8 3s0 3-8 3s-8-3-8-3s0-3 8-3Zm0 14c8 0 8 3 8 3s0 3-8 3s-8-3-8-3s0-3 8-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 5v14M4 5v14"></svg:path></svg:g>`,
})
export class IconoirCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDashFlagIcon],svg[iconoir-dash-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 15l.95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654l-.891 9.8a.6.6 0 0 1-.598.546zm0 0l-.6 6M9 7.5l7 4"></svg:path>`,
})
export class IconoirDashFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDashboardIcon],svg[iconoir-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15 15.8c0-1.767-3-4.8-3-4.8s-3 3.033-3 4.8s1.343 3.2 3 3.2s3-1.433 3-3.2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 4v4m-8.5-.5l3 3m11 0l3-3M2 17h4m12 0h4"></svg:path></svg:g>`,
})
export class IconoirDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDashboardDotsIcon],svg[iconoir-dashboard-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12 7.01l.01-.011M16 9.01l.01-.011M8 9.01l.01-.011M18 13.01l.01-.011M6 13.01l.01-.011M17 17.01l.01-.011M7 17.01l.01-.011M12 17l1-6m-4.5 9.001H4A9.96 9.96 0 0 1 2 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20"></svg:path><svg:path d="M12 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirDashboardDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDashboardSpeedIcon],svg[iconoir-dashboard-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 4v4M4 8l2.5 2.5m11 0L20 8M3 17h3m6 0l1-6m5 6h3M8.5 20.001H4A9.96 9.96 0 0 1 2 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20"></svg:path><svg:path d="M12 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirDashboardSpeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDataTransferBothIcon],svg[iconoir-data-transfer-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20V4m0 0l3 3m-3-3l-3 3M7 4v16m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirDataTransferBothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDataTransferCheckIcon],svg[iconoir-data-transfer-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 19l3 3l5-5m-5-3V4m0 0l3 3m-3-3l-3 3M7 4v16m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirDataTransferCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDataTransferDownIcon],svg[iconoir-data-transfer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20v-1m0-4v-1M7 4v16m0 0l-3-3m3 3l3-3m7-7V4m0 0l-3 3m3-3l3 3"></svg:path>`,
})
export class IconoirDataTransferDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDataTransferUpIcon],svg[iconoir-data-transfer-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4v1m0 4v1m10 10V4m0 0l3 3m-3-3l-3 3m-7 7v6m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirDataTransferUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDataTransferWarningIcon],svg[iconoir-data-transfer-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4v1m0 4v1m10 2V4m0 0l3 3m-3-3l-3 3m6 9v2m0 4.01l.01-.011M7 14v6m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirDataTransferWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseIcon],svg[iconoir-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12v6s0 3 7 3s7-3 7-3v-6"></svg:path><svg:path d="M5 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z"></svg:path></svg:g>`,
})
export class IconoirDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseBackupIcon],svg[iconoir-database-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 6v6s0 3 7 3q.888 0 1.631-.06M18 6v6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m18.666 5.667C22.048 16.097 20.634 15 18.99 15c-1.758 0-3.252 1.255-3.793 3"></svg:path><svg:path d="M20.995 17.667h1.671v0c.185 0 .334-.15.334-.334v-1.888m-7.666 4.888C15.952 21.903 17.366 23 19.01 23c1.758 0 3.252-1.255 3.793-3"></svg:path><svg:path d="M17.005 20.333h-1.671v0a.334.334 0 0 0-.334.334v1.888"></svg:path></svg:g>`,
})
export class IconoirDatabaseBackupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseCheckIcon],svg[iconoir-database-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14 19l3 3l5-5M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6"></svg:path></svg:g>`,
})
export class IconoirDatabaseCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseCheckSolidIcon],svg[iconoir-database-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.47 18.47a.75.75 0 0 1 1.06 0L17 20.94l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M15.591 17.409a2.25 2.25 0 1 0-3.182 3.182l1.021 1.02c-.713.09-1.519.139-2.43.139c-3.59 0-5.547-.767-6.613-1.68c-.536-.46-.825-.939-.977-1.33a2.5 2.5 0 0 1-.156-.648l-.003-.055v-.02l-.001-.01v-.005S3.25 18 4 18h-.75v-2.25A.75.75 0 0 1 4 15c.414-.001.954.266 1.237.568a1 1 0 0 0 .074.072c.69.493 2.256 1.11 5.689 1.11s4.999-.617 5.69-1.11q.045-.033.087-.067c.36-.288.761-.574 1.223-.573a.75.75 0 0 1 .75.75v1.318L17 18.818z"></svg:path><svg:path d="M4 9a.75.75 0 0 0-.75.75V12H4c-.75 0-.75.002-.75.002v.035a1.4 1.4 0 0 0 .024.215c.021.128.061.296.136.489c.152.39.441.87.977 1.329c1.066.913 3.023 1.68 6.613 1.68s5.547-.767 6.613-1.68c.536-.46.825-.938.977-1.33a2.5 2.5 0 0 0 .156-.648l.003-.055v-.02l.001-.01v-.005S18.75 12 18 12h.75V9.75A.75.75 0 0 0 18 9c-.462-.001-.863.285-1.223.573l-.088.067c-.69.493-2.256 1.11-5.689 1.11s-4.999-.617-5.69-1.11a1 1 0 0 1-.073-.071C4.954 9.266 4.414 8.999 4 9"></svg:path><svg:path d="M4.387 3.93C5.453 3.018 7.41 2.25 11 2.25s5.547.767 6.613 1.68c.536.46.825.939.977 1.33a2.5 2.5 0 0 1 .156.648a1.2 1.2 0 0 1-.02.344a2.5 2.5 0 0 1-.136.489c-.152.39-.441.87-.977 1.328C16.547 8.983 14.59 9.75 11 9.75s-5.547-.767-6.613-1.68c-.536-.46-.825-.939-.977-1.33a2.5 2.5 0 0 1-.136-.488a1.4 1.4 0 0 1-.024-.256q.002-.125.024-.248c.021-.128.061-.295.136-.489c.152-.39.441-.87.977-1.328"></svg:path></svg:g>`,
})
export class IconoirDatabaseCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseExportIcon],svg[iconoir-database-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 16v6m0 0l3-3m-3 3l-3-3M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6"></svg:path></svg:g>`,
})
export class IconoirDatabaseExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseMonitorIcon],svg[iconoir-database-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m14 10h3m-1.5-2.571h2.333V16h-4.666v3.429z"></svg:path></svg:g>`,
})
export class IconoirDatabaseMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseRestoreIcon],svg[iconoir-database-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m15 10v-6m0 0l3 3m-3-3l-3 3"></svg:path></svg:g>`,
})
export class IconoirDatabaseRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseScriptIcon],svg[iconoir-database-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 14V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7"></svg:path><svg:path d="M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"></svg:path></svg:g>`,
})
export class IconoirDatabaseScriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseScriptMinusIcon],svg[iconoir-database-script-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 14V8.5M6 13V6a3 3 0 0 1 3-3h5m4 1h4M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"></svg:path>`,
})
export class IconoirDatabaseScriptMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseScriptPlusIcon],svg[iconoir-database-script-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 14V8.5M6 13V6a3 3 0 0 1 3-3h5m2.992 1h3m3 0h-3m0 0V1m0 3v3M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"></svg:path>`,
})
export class IconoirDatabaseScriptPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseSearchIcon],svg[iconoir-database-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 20.5L22 22m-6-3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6"></svg:path></svg:g>`,
})
export class IconoirDatabaseSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseSettingsIcon],svg[iconoir-database-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m15 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke-dasharray=".3 2" d="M19 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirDatabaseSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseSolidIcon],svg[iconoir-database-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 15a.75.75 0 0 0-.75.75V18H5c-.75 0-.75.002-.75.002v.035a1.4 1.4 0 0 0 .024.215c.021.128.061.296.136.489c.152.39.441.87.977 1.329c1.066.913 3.023 1.68 6.613 1.68s5.547-.767 6.613-1.68c.536-.46.825-.939.977-1.33a2.5 2.5 0 0 0 .156-.648l.003-.055v-.02l.001-.01v-.005S19.75 18 19 18h.75v-2.25A.75.75 0 0 0 19 15c-.462-.001-.863.285-1.223.573l-.088.067c-.69.493-2.256 1.11-5.689 1.11s-4.999-.617-5.69-1.11a1 1 0 0 1-.073-.071c-.283-.303-.823-.57-1.237-.569"></svg:path><svg:path d="M5 9a.75.75 0 0 0-.75.75V12H5c-.75 0-.75.002-.75.002v.035a1.4 1.4 0 0 0 .024.215c.021.128.061.296.136.489c.152.39.441.87.977 1.329c1.066.913 3.023 1.68 6.613 1.68s5.547-.767 6.613-1.68c.536-.46.825-.938.977-1.33a2.5 2.5 0 0 0 .156-.648l.003-.055v-.02l.001-.01v-.005S19.75 12 19 12h.75V9.75A.75.75 0 0 0 19 9c-.462-.001-.863.285-1.223.573l-.088.067c-.69.493-2.256 1.11-5.689 1.11s-4.999-.617-5.69-1.11a1 1 0 0 1-.073-.071C5.954 9.266 5.414 8.999 5 9"></svg:path><svg:path d="M5.387 3.93C6.453 3.018 8.41 2.25 12 2.25s5.547.767 6.613 1.68c.536.46.825.939.977 1.33a2.5 2.5 0 0 1 .156.648a1.2 1.2 0 0 1-.02.344a2.5 2.5 0 0 1-.136.489c-.152.39-.441.87-.977 1.328C17.547 8.983 15.59 9.75 12 9.75s-5.547-.767-6.613-1.68c-.536-.46-.825-.939-.977-1.33a2.5 2.5 0 0 1-.136-.488a1.4 1.4 0 0 1-.024-.256q.002-.125.024-.248c.021-.128.061-.295.136-.489c.152-.39.441-.87.977-1.328"></svg:path></svg:g>`,
})
export class IconoirDatabaseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseStarIcon],svg[iconoir-database-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m13.306 5.113l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.177.568l-1.471 1.5l.347 2.118c.044.272-.229.48-.462.351l-1.818-1l-1.818 1c-.233.129-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.176-.568z"></svg:path></svg:g>`,
})
export class IconoirDatabaseStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseStatsIcon],svg[iconoir-database-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path stroke-linejoin="round" d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6"></svg:path><svg:path d="M15 21v-2m3 2v-4m3 4v-6"></svg:path></svg:g>`,
})
export class IconoirDatabaseStatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseTagIcon],svg[iconoir-database-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.357 12c.714 0 2.143 0 2.143-2s-1.429-2-2.143-2H13.5v4m2.857 0H13.5m2.857 0c.714 0 2.143 0 2.143 2s-1.429 2-2.143 2H13.5v-4M8.357 8H5.5v8h2.857c.714 0 2.143 0 2.143-2v-4c0-2-1.429-2-2.143-2"></svg:path></svg:g>`,
})
export class IconoirDatabaseTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseTagSolidIcon],svg[iconoir-database-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 9A6.75 6.75 0 0 1 8 2.25h8A6.75 6.75 0 0 1 22.75 9v6A6.75 6.75 0 0 1 16 21.75H8A6.75 6.75 0 0 1 1.25 15zm16.08-.096c-.25-.14-.588-.154-.973-.154H14.25v2.5h2.128c.377 0 .706-.017.952-.154c.158-.089.42-.302.42-1.096s-.262-1.007-.42-1.096M18.582 12c.423-.45.668-1.112.668-2c0-1.206-.452-1.993-1.187-2.404c-.62-.348-1.325-.346-1.67-.346H13.5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.894c.344 0 1.049.002 1.669-.346c.735-.411 1.187-1.198 1.187-2.404c0-.888-.245-1.549-.668-2m-2.203.75H14.25v2.5h2.107c.385 0 .723-.014.973-.154c.158-.089.42-.302.42-1.096s-.262-1.007-.42-1.095c-.245-.138-.575-.154-.951-.155m-8.022-4c.385 0 .723.014.973.154c.158.089.42.302.42 1.096v4c0 .794-.262 1.007-.42 1.096c-.25.14-.588.154-.973.154H6.25v-6.5zM11.25 10c0-1.206-.452-1.993-1.187-2.404c-.62-.348-1.325-.346-1.67-.346H5.5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.894c.344 0 1.049.002 1.669-.346c.735-.411 1.187-1.198 1.187-2.404z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDatabaseTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseWarningIcon],svg[iconoir-database-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 16v2m0 4.01l.01-.011M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6"></svg:path></svg:g>`,
})
export class IconoirDatabaseWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseXmarkIcon],svg[iconoir-database-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17.121 21.364l2.122-2.121m2.121-2.122l-2.121 2.122m0 0L17.12 17.12m2.122 2.122l2.121 2.121M4 6v6s0 3 7 3s7-3 7-3V6"></svg:path><svg:path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6"></svg:path></svg:g>`,
})
export class IconoirDatabaseXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseXmarkSolidIcon],svg[iconoir-database-xmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M15.008 16.346c-.916.234-2.204.404-4.008.404c-3.433 0-4.999-.617-5.69-1.11a1 1 0 0 1-.073-.072c-.283-.302-.823-.57-1.237-.568a.75.75 0 0 0-.75.75V18H4c-.75 0-.75.002-.75.002v.035a1.4 1.4 0 0 0 .024.215c.021.128.061.295.136.489c.152.39.441.87.977 1.328C5.453 20.983 7.41 21.75 11 21.75c1.589 0 2.858-.15 3.871-.397a2.24 2.24 0 0 1 .66-1.58l.53-.53l-.53-.531a2.25 2.25 0 0 1-.523-2.366" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a.75.75 0 0 0-.75.75V12H4c-.75 0-.75.002-.75.002v.035a1.4 1.4 0 0 0 .024.215c.021.128.061.296.136.489c.152.39.441.87.977 1.329c1.066.913 3.023 1.68 6.613 1.68s5.547-.767 6.613-1.68c.536-.46.825-.938.977-1.33a2.5 2.5 0 0 0 .156-.648l.003-.055v-.02l.001-.01v-.005S18.75 12 18 12h.75V9.75A.75.75 0 0 0 18 9c-.462-.001-.863.285-1.223.573l-.088.067c-.69.493-2.256 1.11-5.689 1.11s-4.999-.617-5.69-1.11a1 1 0 0 1-.073-.071C4.954 9.266 4.414 8.999 4 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.387 3.93C5.453 3.018 7.41 2.25 11 2.25s5.547.767 6.613 1.68c.536.46.825.939.977 1.33a2.5 2.5 0 0 1 .156.648a1.2 1.2 0 0 1-.02.344a2.5 2.5 0 0 1-.136.489c-.152.39-.441.87-.977 1.328C16.547 8.983 14.59 9.75 11 9.75s-5.547-.767-6.613-1.68c-.536-.46-.825-.939-.977-1.33a2.5 2.5 0 0 1-.136-.488a1.4 1.4 0 0 1-.024-.256q.002-.125.024-.248c.021-.128.061-.295.136-.489c.152-.39.441-.87.977-1.328" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.121 21.364l2.122-2.122m2.121-2.121l-2.121 2.121m0 0l-2.122-2.121m2.122 2.121l2.121 2.121"></svg:path></svg:g>`,
})
export class IconoirDatabaseXmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDbStarIcon],svg[iconoir-db-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6s0-3 7-3s7 3 7 3M4 6s0 3 7 3s7-3 7-3M4 6v6m14-6v6s0 3-7 3s-7-3-7-3m7 9c-7 0-7-3-7-3v-6m13.306 5.113l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.177.568l-1.471 1.5l.347 2.118c.044.272-.229.48-.462.351l-1.818-1l-1.818 1c-.233.129-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.176-.568l2.033-.31Z"></svg:path>`,
})
export class IconoirDbStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDeCompressIcon],svg[iconoir-de-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 12H6m6 4v6m0 0l3-3m-3 3l-3-3m3-11V2m0 0l3 3m-3-3L9 5"></svg:path>`,
})
export class IconoirDeCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDeliveryIcon],svg[iconoir-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m8-3V4M8 8H3"></svg:path>`,
})
export class IconoirDeliveryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDeliveryTruckIcon],svg[iconoir-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"></svg:path><svg:path stroke-linejoin="round" d="M2 9h4"></svg:path><svg:path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"></svg:path></svg:g>`,
})
export class IconoirDeliveryTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDepthIcon],svg[iconoir-depth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 20h20M5 4h14M3 16.01l.01-.011m18 .011l-.01-.011M4 12.01l.01-.011m16 .011l-.01-.011M5 8.01l.01-.011m14 .011L19 7.999M12 7v10m0-10l-1.5 1.5M12 7l1.5 1.5M12 17l-3-3m3 3l3-3"></svg:path>`,
})
export class IconoirDepthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDesignNibIcon],svg[iconoir-design-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17.674 11.408l-1.905 5.715a.6.6 0 0 1-.398.386L3.693 20.98a.6.6 0 0 1-.74-.765L6.745 8.841a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.406a.6.6 0 0 1 .145.614M3.296 20.602l6.364-6.364"></svg:path><svg:path d="m17.792 11.056l2.828-2.829a2 2 0 0 0 0-2.828L18.5 3.277a2 2 0 0 0-2.829 0l-2.828 2.829m-1.062 6.01a1.5 1.5 0 1 0-2.121 2.122a1.5 1.5 0 0 0 2.121-2.122"></svg:path></svg:g>`,
})
export class IconoirDesignNibIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDesignNibSolidIcon],svg[iconoir-design-nib-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17.674 11.408l-1.905 5.716a.6.6 0 0 1-.398.385L3.693 20.981a.6.6 0 0 1-.74-.765L6.745 8.842a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.614M3.296 20.602l6.364-6.364"></svg:path><svg:path fill="currentColor" d="m18.403 3.182l2.364 2.364a1.846 1.846 0 1 1-2.61 2.61l-2.365-2.364a1.846 1.846 0 0 1 2.61-2.61"></svg:path><svg:path d="M11.781 12.116a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.121-2.121"></svg:path></svg:g>`,
})
export class IconoirDesignNibSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDesignPencilIcon],svg[iconoir-design-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path d="M8 21.168V14l4-7l4 7v7.168"></svg:path><svg:path d="M8 14s1.127 1 2 1s2-1 2-1s1.127 1 2 1s2-1 2-1"></svg:path></svg:g>`,
})
export class IconoirDesignPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDeskIcon],svg[iconoir-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10M1 7h22M4 10h16m-6 4h6m0-7v10M14 7v10m3-7v1m0 3v1"></svg:path>`,
})
export class IconoirDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDeveloperIcon],svg[iconoir-developer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.818 22v-2.857C6.662 17.592 5.633 16.416 4.682 15m9.772 7v-1.714c4.91 0 4.364-5.714 4.364-5.714s2.182 0 2.182-2.286l-2.182-3.428c0-4.572-3.709-6.816-7.636-6.857c-2.2-.023-3.957.53-5.27 1.499"></svg:path><svg:path d="m13 7l2 2.5l-2 2.5M5 7L3 9.5L5 12m5-6l-2 7"></svg:path></svg:g>`,
})
export class IconoirDeveloperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDewPointIcon],svg[iconoir-dew-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 12a5 5 0 1 0 6 0m-6 0V3h6v9m0-9h2m-2 3h2m-2 3h2"></svg:path><svg:path d="M8 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V9"></svg:path><svg:path stroke-miterlimit="1.5" d="M19 3s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C16.01 5.992 19 3 19 3" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirDewPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDialpadIcon],svg[iconoir-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M12 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m6.5-15a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class IconoirDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiameterIcon],svg[iconoir-diameter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m7-10l-3-3m3 3l-3 3m3-3H5m0 0l3-3m-3 3l3 3"></svg:path>`,
})
export class IconoirDiameterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiameterSolidIcon],svg[iconoir-diameter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12S6.063 1.25 12 1.25M8.53 14.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72h10.38l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H6.81z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDiameterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiceFiveIcon],svg[iconoir-dice-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M12 12.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M7.5 17a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirDiceFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiceFourIcon],svg[iconoir-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-9 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirDiceFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiceOneIcon],svg[iconoir-dice-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 12.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirDiceOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiceSixIcon],svg[iconoir-dice-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-9 4.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-9 4.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirDiceSixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiceThreeIcon],svg[iconoir-dice-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4.5 4.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4.5 4.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirDiceThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiceTwoIcon],svg[iconoir-dice-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m9 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirDiceTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDimmerSwitchIcon],svg[iconoir-dimmer-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m3.5-10.5L12 12"></svg:path></svg:g>`,
})
export class IconoirDimmerSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDirectorChairIcon],svg[iconoir-director-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 12L5 21M5 3v9m14-9v9M5 12l14 9M4 12h16"></svg:path><svg:path d="M5 4h14M5 7h14"></svg:path></svg:g>`,
})
export class IconoirDirectorChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDiscordIcon],svg[iconoir-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.5 16c5 2.5 8 2.5 13 0"></svg:path><svg:path d="m15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5c-1.5-1-4-1.5-4-1.5l-1 2h-2"></svg:path><svg:path d="m8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5c1.5-1 4-1.5 4-1.5l1 2h2"></svg:path><svg:path d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2s1.5.895 1.5 2s-.672 2-1.5 2m7 0c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2s1.5.895 1.5 2s-.672 2-1.5 2"></svg:path></svg:g>`,
})
export class IconoirDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDishwasherIcon],svg[iconoir-dishwasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.5M21 7H3m9 9v5m0 0h-2m2 0h2"></svg:path><svg:path d="M12 16c1.657 0 3-1.492 3-3.333V10H9v2.667C9 14.507 10.343 16 12 16m6-10.99l.01-.011M15 5.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirDishwasherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDisplay4kIcon],svg[iconoir-display-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.5 9v4m0 2v-2m0 0l1.37-1.566M17 9l-2.13 2.434m0 0L17 15M9.5 9l-3 4.5H10V15"></svg:path><svg:path d="M2 18.4V5.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirDisplay4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDivideIcon],svg[iconoir-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21v-9a5 5 0 0 0-5-5H3m9 14v-9a5 5 0 0 1 5-5h4"></svg:path><svg:path d="M7 3L3 7l4 4m10-8l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconoirDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDivideSolidIcon],svg[iconoir-divide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M2.25 7A.75.75 0 0 1 3 6.25h4A5.75 5.75 0 0 1 12.75 12v9a.75.75 0 0 1-1.5 0v-9A4.25 4.25 0 0 0 7 7.75H3A.75.75 0 0 1 2.25 7"></svg:path><svg:path d="M17 7.75A4.25 4.25 0 0 0 12.75 12v9a.75.75 0 0 1-1.5 0v-9A5.75 5.75 0 0 1 17 6.25h4a.75.75 0 0 1 0 1.5zM7.287 2.307A.75.75 0 0 1 7.75 3v8a.75.75 0 0 1-1.28.53l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 .817-.163"></svg:path><svg:path d="M16.713 2.307A.75.75 0 0 0 16.25 3v8a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-.817-.163"></svg:path></svg:g>`,
})
export class IconoirDivideSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDivideThreeIcon],svg[iconoir-divide-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21v-4a5 5 0 0 0-5-5H3m9 9v-4a5 5 0 0 1 5-5h4M12 2v20"></svg:path><svg:path d="m6 8l-4 4l4 4M16 6l-4-4l-4 4m10 2l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconoirDivideThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDivideThreeSolidIcon],svg[iconoir-divide-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M2.25 12a.75.75 0 0 1 .75-.75h4A5.75 5.75 0 0 1 12.75 17v4a.75.75 0 0 1-1.5 0v-4A4.25 4.25 0 0 0 7 12.75H3a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M17 12.75A4.25 4.25 0 0 0 12.75 17v4a.75.75 0 0 1-1.5 0v-4A5.75 5.75 0 0 1 17 11.25h4a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="M12 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M6.287 7.307A.75.75 0 0 1 6.75 8v8a.75.75 0 0 1-1.28.53l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 .817-.163m11.426 0A.75.75 0 0 0 17.25 8v8a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-.817-.163"></svg:path><svg:path d="M11.47 1.47a.75.75 0 0 1 1.06 0l4 4A.75.75 0 0 1 16 6.75H8a.75.75 0 0 1-.53-1.28z"></svg:path></svg:g>`,
})
export class IconoirDivideThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDnaIcon],svg[iconoir-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 3c0 5.625 8 9 8 9s8 3.375 8 9"></svg:path><svg:path d="M20 3c0 5.625-8 9-8 9s-8 3.375-8 9M8 6h11M8 18h11m-8-9h5.5M11 15h5.5"></svg:path></svg:g>`,
})
export class IconoirDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDnsIcon],svg[iconoir-dns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 13v-1c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.251.744 4.329 2 6"></svg:path><svg:path d="M13 2.049s3 3.95 3 9.95v1m-5-10.95s-3 3.95-3 9.95v1M2.63 15.5H4m-1.37-7h18.74M7 22v-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm6 0v-6l3 6v-6m3 6h2a1.5 1.5 0 0 0 1.5-1.5v0A1.5 1.5 0 0 0 21 19h-.5a1.5 1.5 0 0 1-1.5-1.5v0a1.5 1.5 0 0 1 1.5-1.5H22"></svg:path></svg:g>`,
})
export class IconoirDnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDocMagnifyingGlassIcon],svg[iconoir-doc-magnifying-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 20.5L22 22m-7-4a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11"></svg:path><svg:path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirDocMagnifyingGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDocMagnifyingGlassInIcon],svg[iconoir-doc-magnifying-glass-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14 15l1.5 1.5m-7-4a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirDocMagnifyingGlassInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDocStarIcon],svg[iconoir-doc-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.306 17.113l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.177.568l-1.471 1.5l.347 2.118c.044.272-.229.48-.462.351l-1.818-1l-1.818 1c-.234.129-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.176-.568z"></svg:path><svg:path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11"></svg:path><svg:path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirDocStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDocStarInIcon],svg[iconoir-doc-star-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="m10.635 10.415l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L12 14.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65zM16 2v3.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirDocStarInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDogecoinCircleIcon],svg[iconoir-dogecoin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10 16.402V7.598c0-.331.268-.599.6-.604c2.49-.035 5.9-.072 5.9 5.006s-3.41 5.042-5.9 5.006a.606.606 0 0 1-.6-.604Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12h4m0 10C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class IconoirDogecoinCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDogecoinCircleSolidIcon],svg[iconoir-dogecoin-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m15.348-3.268c.426.845.652 1.919.652 3.268c0 1.35-.226 2.424-.652 3.268a4.1 4.1 0 0 1-1.761 1.814c-1.341.716-2.988.692-4.184.675l-.065-.001a1.356 1.356 0 0 1-1.338-1.354V12.75H8a.75.75 0 0 1 0-1.5h1.25V7.598c0-.747.603-1.343 1.338-1.354h.065c1.196-.018 2.843-.042 4.184.674c.71.38 1.329.959 1.76 1.814M10.75 11.25V7.742c1.242-.015 2.453.004 3.38.5c.454.241.844.602 1.129 1.167c.29.576.491 1.401.491 2.591s-.2 2.015-.491 2.592a2.6 2.6 0 0 1-1.129 1.167c-.927.495-2.138.515-3.38.5V12.75H12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDogecoinCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDogecoinRotateOutIcon],svg[iconoir-dogecoin-rotate-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.168 8A10 10 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6c5.186 0 9.45-3.947 9.951-9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20"></svg:path><svg:path d="M10 16.402V7.598c0-.331.268-.599.6-.604c2.49-.035 5.9-.072 5.9 5.006s-3.41 5.042-5.9 5.006a.606.606 0 0 1-.6-.604Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12h4"></svg:path></svg:g>`,
})
export class IconoirDogecoinRotateOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDollarIcon],svg[iconoir-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.154 7.154c-.949-.949-2.619-1.608-4.154-1.65m-4.154 10.65c.893 1.19 2.552 1.868 4.154 1.926m0-12.576c-1.826-.049-3.461.778-3.461 3.034c0 4.154 7.615 2.077 7.615 6.231c0 2.37-2.027 3.387-4.154 3.31m0-12.575V3m0 15.08V21"></svg:path>`,
})
export class IconoirDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDollarCircleIcon],svg[iconoir-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191c0 3 5.5 1.5 5.5 4.5c0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5"></svg:path></svg:g>`,
})
export class IconoirDollarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDollarCircleSolidIcon],svg[iconoir-dollar-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m.75 4.25a.75.75 0 0 0-1.5 0v1.103c-.515.077-1.02.255-1.447.579C9.13 7.692 8.75 8.483 8.75 9.5q0 .744.342 1.316c.225.376.534.653.865.864c.612.39 1.393.602 2.039.778l.057.016c.719.196 1.284.357 1.685.612c.185.118.305.239.382.367c.073.123.13.292.13.547c0 .61-.245.992-.604 1.243c-.39.273-.965.422-1.62.399c-1-.037-1.955-.464-2.426-1.092a.75.75 0 1 0-1.2.9c.67.893 1.757 1.425 2.85 1.615V18.5a.75.75 0 0 0 1.5 0v-1.391c.628-.075 1.242-.276 1.756-.637c.757-.53 1.244-1.37 1.244-2.472q0-.744-.342-1.316a2.6 2.6 0 0 0-.865-.864c-.612-.39-1.393-.602-2.039-.778l-.057-.016c-.719-.196-1.284-.357-1.685-.612a1.1 1.1 0 0 1-.382-.367a1.03 1.03 0 0 1-.13-.547c0-.614.21-.935.458-1.122c.28-.212.716-.335 1.272-.32c.949.026 1.961.444 2.49.972a.75.75 0 1 0 1.06-1.06c-.682-.683-1.731-1.163-2.78-1.34z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDollarCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDomoticWarningIcon],svg[iconoir-domotic-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3m0 4.01l.01-.011M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path>`,
})
export class IconoirDomoticWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDonateIcon],svg[iconoir-donate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 6.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.822-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.232 0L12 4.78l.106-.107A2.276 2.276 0 0 1 16 6.28Z"></svg:path><svg:path stroke-linecap="round" d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15"></svg:path><svg:path stroke-linecap="round" d="m18 16l.858-.858a.48.48 0 0 0 .142-.343v0a.49.49 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15"></svg:path><svg:path stroke-linecap="round" d="m6 16l-.858-.858A.5.5 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20"></svg:path></svg:g>`,
})
export class IconoirDonateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDotArrowDownIcon],svg[iconoir-dot-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 3v13m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirDotArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDotArrowLeftIcon],svg[iconoir-dot-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-5-2H2m0 0l3-3m-3 3l3 3"></svg:path>`,
})
export class IconoirDotArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDotArrowRightIcon],svg[iconoir-dot-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5-2h13m0 0l-3-3m3 3l-3 3"></svg:path>`,
})
export class IconoirDotArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDotArrowUpIcon],svg[iconoir-dot-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-7V2m0 0l3 3m-3-3L9 5"></svg:path>`,
})
export class IconoirDotArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDotsGrid3x3Icon],svg[iconoir-dots-grid-3x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M12 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m6.5-13a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class IconoirDotsGrid3x3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDotsGrid3x3SolidIcon],svg[iconoir-dots-grid-3x3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 20.4a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35V3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDotsGrid3x3SolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDoubleCheckIcon],svg[iconoir-double-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m1.5 12.5l4.076 4.076a.6.6 0 0 0 .848 0L9 14m7-7l-4 4"></svg:path><svg:path d="m7 12l4.576 4.576a.6.6 0 0 0 .848 0L22 7"></svg:path></svg:g>`,
})
export class IconoirDoubleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDownloadIcon],svg[iconoir-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5"></svg:path>`,
})
export class IconoirDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDownloadCircleIcon],svg[iconoir-download-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirDownloadCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDownloadCircleSolidIcon],svg[iconoir-download-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m7.78-6.97l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v5.19l2.22-2.22a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDownloadCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDownloadDataWindowIcon],svg[iconoir-download-data-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9"></svg:path><svg:path stroke-linejoin="round" d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M19.5 16v6m0 0L17 19.5m2.5 2.5l2.5-2.5"></svg:path></svg:g>`,
})
export class IconoirDownloadDataWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDownloadSquareIcon],svg[iconoir-download-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 18h12M12 6v8m0 0l3.5-3.5M12 14l-3.5-3.5"></svg:path><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirDownloadSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDownloadSquareSolidIcon],svg[iconoir-download-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35zm3 14.4a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m10.78-6.97l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v6.19l2.22-2.22a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDownloadSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDragIcon],svg[iconoir-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12L4 4m0 0v4m0-4h4m4 8l8-8m0 0v4m0-4h-4m-4 8l-8 8m0 0v-4m0 4h4m4-8l8 8m0 0v-4m0 4h-4"></svg:path>`,
})
export class IconoirDragIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDragHandGestureIcon],svg[iconoir-drag-hand-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m7 10.5l-2.004 2.672a2 2 0 0 0 .126 2.552l3.784 4.128c.378.413.912.648 1.473.648H15c2.4 0 4-1.5 4-4q0 0 0 0V7.929M16 8.5v-.571c0-2.286 3-2.286 3 0"></svg:path><svg:path d="M13 8.5V7.027m0-.527v.527M16 8.5V7.027c0-2.286-3-2.286-3 0"></svg:path><svg:path d="M13 8.5V7.027c0-2.286 3-2.286 3 0V8.5m-6 0v-2c0-2.286 3-2.286 3 0q0 0 0 0v2m-6 5v-7A1.5 1.5 0 0 1 8.5 5v0c.828 0 1.5.555 1.5 1.384V8.5"></svg:path></svg:g>`,
})
export class IconoirDragHandGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDragSolidIcon],svg[iconoir-drag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3.25 4A.75.75 0 0 1 4 3.25h4a.75.75 0 0 1 .53 1.28L7.06 6l5.47 5.47a.75.75 0 1 1-1.06 1.06L6 7.06L4.53 8.53A.75.75 0 0 1 3.25 8z"></svg:path><svg:path d="M3.25 20c0 .414.336.75.75.75h4a.75.75 0 0 0 .53-1.28L7.06 18l5.47-5.47a.75.75 0 1 0-1.06-1.06L6 16.94l-1.47-1.47a.75.75 0 0 0-1.28.53z"></svg:path><svg:path d="M20.75 4a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.53 1.28L16.94 6l-5.47 5.47a.75.75 0 1 0 1.06 1.06L18 7.06l1.47 1.47A.75.75 0 0 0 20.75 8z"></svg:path><svg:path d="M20.75 20a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.53-1.28L16.94 18l-5.47-5.47a.75.75 0 1 1 1.06-1.06L18 16.94l1.47-1.47a.75.75 0 0 1 1.28.53z"></svg:path></svg:g>`,
})
export class IconoirDragSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
