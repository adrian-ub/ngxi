import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAbacusIcon],svg[vaadin-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm14 2v3h-.1c-.2-.6-.8-1-1.4-1s-1.2.4-1.4 1H7.9c-.2-.6-.7-1-1.4-1s-1.2.4-1.4 1h-.2c-.2-.6-.7-1-1.4-1s-1.2.4-1.4 1H2V2zm-.1 8c-.2-.6-.8-1-1.4-1s-1.2.4-1.4 1h-.2c-.2-.6-.8-1-1.4-1s-1.2.4-1.4 1H4.9c-.2-.6-.7-1-1.4-1s-1.2.4-1.4 1H2V6h.1c.2.6.8 1 1.4 1s1.2-.4 1.4-1h.2c.2.6.8 1 1.4 1s1.2-.4 1.4-1h3.2c.2.6.8 1 1.4 1s1.2-.4 1.4-1h.1zM2 14v-3h.1c.2.6.8 1 1.4 1s1.2-.4 1.4-1h3.2c.2.6.8 1 1.4 1s1.2-.4 1.4-1h.2c.2.6.8 1 1.4 1s1.2-.4 1.4-1h.1v3z"></svg:path>`,
})
export class VaadinAbacusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAbsolutePositionIcon],svg[vaadin-absolute-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm15 15H1V9h3v1l3-2l-3-2v1H1V1h6v3H6l2 3l2-3H9V1h6z"></svg:path>`,
})
export class VaadinAbsolutePositionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAcademyCapIcon],svg[vaadin-academy-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.09 12.79a1 1 0 0 0-.086-1.638L15 5.33L14 6v5.15a1 1 0 0 0-.092 1.629l-.378.502a2.48 2.48 0 0 0-.53 1.498v1.222h.815a.88.88 0 0 0 .853-.664l.331-1.336v2h1v-1.21a2.5 2.5 0 0 0-.534-1.505zM8 0L0 4l8 5l8-5z"></svg:path><svg:path fill="currentColor" d="M8 10L3 6.67v1.71C3 9.29 5.94 12 8 12s5-2.71 5-3.62V6.67z"></svg:path>`,
})
export class VaadinAcademyCapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAddDockIcon],svg[vaadin-add-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 11v5h16v-5zm12 4H9v-3h3zm0-8V5c0-5-8-5-8-5s5 0 5 5v2H7l3.5 3L14 7z"></svg:path>`,
})
export class VaadinAddDockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAccessibilityIcon],svg[vaadin-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.4 10h-.5c.1.3.1.7.1 1c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-.2-1C2.9 6.4 1 8.4 1 11c0 2.8 2.2 5 5 5c2.4 0 4.4-1.7 4.9-3.9z"></svg:path><svg:path fill="currentColor" d="M13.1 13L12 8H7.9l-.2-1H11V6H7.5l-.6-2.5c.9-.1 1.6-.8 1.6-1.7C8.5.8 7.7 0 6.7 0S5 .8 5 1.8c0 .6.3 1.2.8 1.5L7.1 9h4.1l1.2 5H15v-1z"></svg:path>`,
})
export class VaadinAccessibilityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAccordionMenuIcon],svg[vaadin-accordion-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4v8h16V4zm15 7H1V7h14zM0 0h16v3H0zm0 13h16v3H0z"></svg:path>`,
})
export class VaadinAccordionMenuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAdjustIcon],svg[vaadin-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6"></svg:path>`,
})
export class VaadinAdjustIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAdobeFlashIcon],svg[vaadin-adobe-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm13 4.4C10 4.4 9.7 7 9.7 7H11v2H8.6C6.8 14.8 3 14 3 14v-2.5s2.5.6 3.9-4C8.7 1.4 13 2 13 2z"></svg:path>`,
})
export class VaadinAdobeFlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAirplaneIcon],svg[vaadin-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 6.5c.5-.5.9-.8 1.2-1.1c1.6-1.6 3.2-4.1 2.2-5.1s-3.4.6-5 2.2c-.3.3-.6.7-1.1 1.2L2.6.5C1.9.2 1.1.3.6.8l-.6.5L6.6 7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-.6c-.5-.3-1.2-.3-1.6.2l-.3.3L3 13l2 2.8l.3-.3c.4-.4.5-1.1.2-1.6L5 12.8c.9-.7 2.4-2.1 4-3.4l5.7 6.6l.5-.5c.5-.5.6-1.3.3-2z"></svg:path>`,
})
export class VaadinAirplaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAlignCenterIcon],svg[vaadin-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h6v3H5zM1 4h14v3H1zm2 4h10v3H3zm-3 4h16v3H0z"></svg:path>`,
})
export class VaadinAlignCenterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAlignJustifyIcon],svg[vaadin-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h16v3H0zm0 4h16v3H0zm0 8h16v3H0zm0-4h16v3H0z"></svg:path>`,
})
export class VaadinAlignJustifyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAlarmIcon],svg[vaadin-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5H7v5h4V9l-2.93.07zM5.46.87A2.1 2.1 0 0 0 2.651.335L1.66 1.1a2.095 2.095 0 0 0-.207 2.844zm8.88.23l-1-.77a2.097 2.097 0 0 0-2.796.534L14.54 3.94c.287-.356.46-.813.46-1.312c0-.602-.253-1.145-.659-1.528z"></svg:path><svg:path fill="currentColor" d="M12.87 14A6.98 6.98 0 0 0 15 9.002A7.05 7.05 0 0 0 8.003 2A7.05 7.05 0 0 0 1 8.997a6.98 6.98 0 0 0 2.128 5.001l-.938.942a.63.63 0 0 0 .882.878l.998-.999c1.092.758 2.446 1.211 3.905 1.211s2.813-.453 3.928-1.226l.977 1.015a.63.63 0 0 0 .878-.882zm-10-5a5.18 5.18 0 0 1 5.127-5.13a5.18 5.18 0 0 1 5.133 5.127a5.18 5.18 0 0 1-5.127 5.133A5.18 5.18 0 0 1 2.87 9.003z"></svg:path>`,
})
export class VaadinAlarmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAlignLeftIcon],svg[vaadin-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h11v3H0zm0 4h15v3H0zm0 4h13v3H0zm0 4h16v3H0z"></svg:path>`,
})
export class VaadinAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAlignRightIcon],svg[vaadin-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h11v3H5zM1 4h15v3H1zm2 4h13v3H3zm-3 4h16v3H0z"></svg:path>`,
})
export class VaadinAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAltIcon],svg[vaadin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.89 9h2.22L5 5.1z"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm7 12l-.61-2H3.61L3 12H2l2.27-8h1.46L8 12zm3 0H9V3h1zm4-5h-1v3.5s0 .5 1 .5v1c-1 0-2-.44-2-1.44V7h-.5V6h.5V5h1v1h1z"></svg:path>`,
})
export class VaadinAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAltAIcon],svg[vaadin-alt-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7V6h-1V5h-1v1h-.5v1h.5v3.56c0 1 .56 1.44 2 1.44v-1a.9.9 0 0 1-.998-.495L13 7zM9 3h1v9H9zm-6 9l.57-2h2.82L7 12h1L5.73 4H4.27L2 12zm2-6.9L6.11 9H3.89z"></svg:path>`,
})
export class VaadinAltAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAmbulanceIcon],svg[vaadin-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.18 14a2 2 0 1 1-3.999.001A2 2 0 0 1 6.18 14M14 14a2 2 0 1 1-3.999.001A2 2 0 0 1 14 14M5 6H4v1H3v1h1v1h1V8h1V7H5z"></svg:path><svg:path fill="currentColor" d="m15.76 8.64l-3-4.53A2.5 2.5 0 0 0 10.682 3H8V2a1 1 0 0 0-2 0v1H1.5A1.5 1.5 0 0 0 0 4.5V13h1.37a3.24 3.24 0 0 1 2.812-2a3.24 3.24 0 0 1 2.81 1.978l2.188.021a3.24 3.24 0 0 1 2.812-2a3 3 0 0 1 2.822 1.979l1.187.021v-3.57a1.43 1.43 0 0 0-.243-.795zm-8.84-.52a2.5 2.5 0 1 1-3.017-2.997a2.48 2.48 0 0 1 3.014 3.014zM10 8V5h.859a2.25 2.25 0 0 1 1.866.992L14.05 8z"></svg:path>`,
})
export class VaadinAmbulanceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAnchorIcon],svg[vaadin-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9v2s-.8 1.7-4 1.9V6h2.2c.2.3.5.5.8.5c.6 0 1-.4 1-1s-.4-1-1-1c-.4 0-.7.2-.8.5H9V3.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2S6 .9 6 2c0 .7.4 1.4 1 1.7V5H4.8c-.1-.3-.4-.5-.8-.5c-.6 0-1 .4-1 1s.4 1 1 1c.4 0 .7-.2.8-.5H7v7c-3.3-.3-4-2-4-2V9H0s2.8 7 8 7c5 0 8-7 8-7zM8 1c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"></svg:path>`,
})
export class VaadinAnchorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleDownIcon],svg[vaadin-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v2l5 5l5-5V2L8 7z"></svg:path><svg:path fill="currentColor" d="M3 7v2l5 5l5-5V7l-5 5z"></svg:path>`,
})
export class VaadinAngleDoubleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleLeftIcon],svg[vaadin-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3h-2L7 8l5 5h2L9 8z"></svg:path><svg:path fill="currentColor" d="M9 3H7L2 8l5 5h2L4 8z"></svg:path>`,
})
export class VaadinAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleRightIcon],svg[vaadin-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13h2l5-5l-5-5H2l5 5z"></svg:path><svg:path fill="currentColor" d="M7 13h2l5-5l-5-5H7l5 5z"></svg:path>`,
})
export class VaadinAngleDoubleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleUpIcon],svg[vaadin-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14v-2L8 7l-5 5v2l5-5z"></svg:path><svg:path fill="currentColor" d="M13 9V7L8 2L3 7v2l5-5z"></svg:path>`,
})
export class VaadinAngleDoubleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDownIcon],svg[vaadin-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v2l-5 5l-5-5V4l5 5z"></svg:path>`,
})
export class VaadinAngleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleLeftIcon],svg[vaadin-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2L5 8l5-5h2L7 8z"></svg:path>`,
})
export class VaadinAngleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleRightIcon],svg[vaadin-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13h2l5-5l-5-5H4l5 5z"></svg:path>`,
})
export class VaadinAngleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleUpIcon],svg[vaadin-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v-2l5-5l5 5v2L8 7z"></svg:path>`,
})
export class VaadinAngleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArchiveIcon],svg[vaadin-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v3H0zm1 4v11h14V5zm10 4H5V7h6z"></svg:path>`,
})
export class VaadinArchiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArchivesIcon],svg[vaadin-archives-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H5v4h6zM9 4H7V3h2z"></svg:path><svg:path fill="currentColor" d="M3 0v16h2v-1h6v1h2V0zm9 14H4V8h8zm0-7H4V1h8z"></svg:path><svg:path fill="currentColor" d="M11 9H5v4h6zm-2 2H7v-1h2z"></svg:path>`,
})
export class VaadinArchivesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAreaSelectIcon],svg[vaadin-area-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.9 7.9l2.1 7.5l1.7-2.6l3.2 3.2l1.1-1.1l-3.3-3.2l2.7-1.6z"></svg:path><svg:path fill="currentColor" d="M8 12H1V3h12v5.4l1 .2V2H0v11h8.2z"></svg:path>`,
})
export class VaadinAreaSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowBackwardIcon],svg[vaadin-arrow-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7.9L6 3v3h2c8 0 8 8 8 8s-1-4-7.8-4H6v2.9z"></svg:path>`,
})
export class VaadinArrowBackwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleDownIcon],svg[vaadin-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8m9 1.6l1.8-1.8l1.4 1.4L8 13.4L3.8 9.2l1.4-1.4L7 9.6V3h2z"></svg:path>`,
})
export class VaadinArrowCircleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleDownOIcon],svg[vaadin-arrow-circle-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8"></svg:path><svg:path fill="currentColor" d="m9 9.6l1.8-1.8l1.4 1.4L8 13.4L3.8 9.2l1.4-1.4L7 9.6V3h2z"></svg:path>`,
})
export class VaadinArrowCircleDownOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleLeftIcon],svg[vaadin-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M6.4 9l1.8 1.8l-1.4 1.4L2.6 8l4.2-4.2l1.4 1.4L6.4 7H13v2z"></svg:path>`,
})
export class VaadinArrowCircleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleLeftOIcon],svg[vaadin-arrow-circle-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="m6.4 9l1.8 1.8l-1.4 1.4L2.6 8l4.2-4.2l1.4 1.4L6.4 7H13v2z"></svg:path>`,
})
export class VaadinArrowCircleLeftOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleRightIcon],svg[vaadin-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m1.6-9L7.8 5.2l1.4-1.4L13.4 8l-4.2 4.2l-1.4-1.4L9.6 9H3V7z"></svg:path>`,
})
export class VaadinArrowCircleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleRightOIcon],svg[vaadin-arrow-circle-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7m0 1c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8"></svg:path><svg:path fill="currentColor" d="M9.6 7L7.8 5.2l1.4-1.4L13.4 8l-4.2 4.2l-1.4-1.4L9.6 9H3V7z"></svg:path>`,
})
export class VaadinArrowCircleRightOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleUpIcon],svg[vaadin-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8s8-3.6 8-8M7 6.4L5.2 8.2L3.8 6.8L8 2.6l4.2 4.2l-1.4 1.4L9 6.4V13H7z"></svg:path>`,
})
export class VaadinArrowCircleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowCircleUpOIcon],svg[vaadin-arrow-circle-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7m1 0c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8s8-3.6 8-8"></svg:path><svg:path fill="currentColor" d="M7 6.4L5.2 8.2L3.8 6.8L8 2.6l4.2 4.2l-1.4 1.4L9 6.4V13H7z"></svg:path>`,
})
export class VaadinArrowCircleUpOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowDownIcon],svg[vaadin-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 8.6L9 12.2V0H7v12.2L3.5 8.6l-1.4 1.5L8 16l5.9-5.9z"></svg:path>`,
})
export class VaadinArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowForwardIcon],svg[vaadin-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.9L10 3v3H8c-8 0-8 8-8 8s1-4 7.8-4H10v2.9z"></svg:path>`,
})
export class VaadinArrowForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowLeftIcon],svg[vaadin-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 12.5L3.8 9H16V7H3.8l3.6-3.5l-1.5-1.4L0 8l5.9 5.9z"></svg:path>`,
})
export class VaadinArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowLongDownIcon],svg[vaadin-arrow-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h2v11h2l-3 3l-3-3h2z"></svg:path>`,
})
export class VaadinArrowLongDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowLongLeftIcon],svg[vaadin-arrow-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7v2H4v2L1 8l3-3v2z"></svg:path>`,
})
export class VaadinArrowLongLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowRightIcon],svg[vaadin-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.6 3.5L12.1 7H0v2h12.1l-3.5 3.5l1.4 1.4L16 8l-6-5.9z"></svg:path>`,
})
export class VaadinArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowUpIcon],svg[vaadin-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.4 7.4L7 3.8V16h2V3.8l3.5 3.6l1.4-1.5L8 0L2 5.9z"></svg:path>`,
})
export class VaadinArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsIcon],svg[vaadin-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l-3-3v2H9V3h2L8 0L5 3h2v4H3V5L0 8l3 3V9h4v4H5l3 3l3-3H9V9h4v2z"></svg:path>`,
})
export class VaadinArrowsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsCrossIcon],svg[vaadin-arrows-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5V1h-4l1.3 1.3L8 6.6L3.7 2.3L5 1H1v4l1.3-1.3L6.6 8l-4.3 4.3L1 11v4h4l-1.3-1.3L8 9.4l4.3 4.3L11 15h4v-4l-1.3 1.3L9.4 8l4.3-4.3z"></svg:path>`,
})
export class VaadinArrowsCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsLongHIcon],svg[vaadin-arrows-long-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l-3-3v2H3V5L0 8l3 3V9h10v2z"></svg:path>`,
})
export class VaadinArrowsLongHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsLongRightIcon],svg[vaadin-arrows-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 9V7h11V5l3 3l-3 3V9z"></svg:path>`,
})
export class VaadinArrowsLongRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsLongUpIcon],svg[vaadin-arrows-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15H7V4H5l3-3l3 3H9z"></svg:path>`,
})
export class VaadinArrowsLongUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsLongVIcon],svg[vaadin-arrows-long-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3h2L8 0L5 3h2v10H5l3 3l3-3H9z"></svg:path>`,
})
export class VaadinArrowsLongVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAsteriskIcon],svg[vaadin-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 5.7l-2-3.4L10 4.5V0H6v4.5L2 2.3L0 5.7L3.9 8L0 10.3l2 3.4l4-2.2V16h4v-4.5l3.9 2.2l2-3.4l-4-2.3z"></svg:path>`,
})
export class VaadinAsteriskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAtIcon],svg[vaadin-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2c.1 2.3-1.9 4.2-4.2 4.2m0-7C6 5.2 4.8 6.5 4.8 8s1.2 2.8 2.8 2.8s2.8-1.2 2.8-2.8S9 5.2 7.5 5.2"></svg:path><svg:path fill="currentColor" d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8c0 1.5-.4 3-1.2 4.2c-.3.5-1.1 1.2-2.3 1.2c-.8 0-1.3-.3-1.6-.6c-.7-.7-.6-1.8-.6-1.9V4h1.5v7c0 .2 0 .6.2.8c0 0 .2.2.5.2c.7 0 1.1-.5 1.1-.5c.6-1 1-2.2 1-3.4c0-3.6-2.9-6.5-6.5-6.5S1.5 4.4 1.5 8s2.9 6.5 6.5 6.5c.7 0 1.3-.1 1.9-.3l.4 1.4c-.7.3-1.5.4-2.3.4"></svg:path>`,
})
export class VaadinAtIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAutomationIcon],svg[vaadin-automation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12"></svg:path><svg:path fill="currentColor" d="M11.7 16c-.8 0-1.6-.2-2.3-.7L3.2 12c-.5-.4-.9-.6-1.3-1C.7 9.8 0 8.1 0 6.4s.7-3.3 1.9-4.5S4.7 0 6.4 0S9.7.7 11 1.9c.4.4.6.7 1 1.2l3.5 6.4c1 1.7.7 3.8-.7 5.2c-.9.9-1.9 1.3-3.1 1.3M6.4 1C5 1 3.6 1.6 2.6 2.6S1 5 1 6.4c0 1.5.6 2.8 1.6 3.8c.3.3.6.5 1.1.8l6.3 3.4c.6.4 1.2.5 1.8.5c.9 0 1.7-.3 2.3-1c1.1-1.1 1.3-2.7.5-4l-3.5-6.4c-.3-.4-.5-.7-.8-1C9.2 1.6 7.9 1 6.4 1"></svg:path><svg:path fill="currentColor" d="M11 7V6l-1.4-.5c-.1-.2-.1-.3-.2-.5l.6-1.3l-.7-.7l-1.3.6c-.2-.1-.3-.1-.5-.2L7 2H6l-.5 1.4c-.2.1-.3.1-.5.2L3.7 3l-.7.7l.6 1.3c-.1.2-.1.3-.2.5L2 6v1l1.4.5c.1.2.1.3.2.5L3 9.3l.7.7L5 9.4c.2.1.3.2.5.2L6 11h1l.5-1.4c.2-.1.3-.1.5-.2l1.3.6l.7-.7L9.4 8c.1-.2.2-.3.2-.5zM6.5 8C5.7 8 5 7.3 5 6.5S5.7 5 6.5 5S8 5.7 8 6.5S7.3 8 6.5 8"></svg:path>`,
})
export class VaadinAutomationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBackspaceIcon],svg[vaadin-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm13 7H6v2L3 8l3-3v2h7z"></svg:path>`,
})
export class VaadinBackspaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBackspaceAIcon],svg[vaadin-backspace-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12L0 8l5-4v2h11v4H5z"></svg:path>`,
})
export class VaadinBackspaceAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBackwardsIcon],svg[vaadin-backwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15V1L8 8zm-8 0V1L0 8z"></svg:path>`,
})
export class VaadinBackwardsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBanIcon],svg[vaadin-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 2c1.3 0 2.5.4 3.5 1.1l-8.4 8.4C2.4 10.5 2 9.3 2 8c0-3.3 2.7-6 6-6m0 12c-1.3 0-2.5-.4-3.5-1.1l8.4-8.4c.7 1 1.1 2.2 1.1 3.5c0 3.3-2.7 6-6 6"></svg:path>`,
})
export class VaadinBanIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBarChartIcon],svg[vaadin-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h15v1H0zm0-4h3v3H0zm4-2h3v5H4zm4-4h3v9H8zm4-5h3v14h-3z"></svg:path>`,
})
export class VaadinBarChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBarChartHIcon],svg[vaadin-bar-chart-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M2 8h4v6H2zm5-6h4v12H7zm5 4h4v8h-4z"></svg:path>`,
})
export class VaadinBarChartHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBarChartVIcon],svg[vaadin-bar-chart-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M8 0v4H2V0zm6 5v4H2V5zm-4 5v4H2v-4z"></svg:path>`,
})
export class VaadinBarChartVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBarcodeIcon],svg[vaadin-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1v10H0zm8 0h2v10H8zm3 0h1v10h-1zm2 0h1v10h-1zm2 0h1v10h-1zM2 3h3v10H2zm4 0h1v10H6z"></svg:path>`,
})
export class VaadinBarcodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBedIcon],svg[vaadin-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.28 7H7L5.85 5.32a3.32 3.32 0 0 0-2.295-1.319L3 4v1.54a1.248 1.248 0 0 0 1.232 1.461L4.282 7zM13 7v-.29A1.71 1.71 0 0 0 11.322 5H6.63C7.13 5.62 8 7 8 7z"></svg:path><svg:path fill="currentColor" d="M15 5.1a1 1 0 0 0-1 1V8H2V4a1 1 0 0 0-2 0v9h2v-2h12v2h2V6.1a1 1 0 0 0-1-1"></svg:path>`,
})
export class VaadinBedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBellIcon],svg[vaadin-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h4s.1 2-2 2s-2-2-2-2m6.7-2.6c-.5-.2-.7-.7-.7-1.2V5s-.2-2.4-3-2.9V1s.1-1-1-1s-1 1-1 1v1.1C4.2 2.6 4 5 4 5v5.2c0 .5-.3 1-.7 1.2L2 12v1h12v-1zM6 4.8V12H4c.8 0 1-1 1-1V5s0-.8.7-1.4C6.4 2.9 7 3 7 3s-1 .7-1 1.8"></svg:path>`,
})
export class VaadinBellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBellOIcon],svg[vaadin-bell-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.7 11.4c-.5-.2-.7-.7-.7-1.2V5s0-2.4-3-2.9V1s.1-1-1-1s-1 1-1 1v1.1C4 2.6 4 5 4 5v5.2c0 .5-.3 1-.7 1.2L2 12v2h4s-.1 2 2 2s2-2 2-2h4v-2zM13 13H3v-.4l.7-.4c.8-.3 1.3-1.1 1.3-2V5c0-.1 0-1.6 2.2-1.9l.8-.2l.8.1c2 .4 2.2 1.7 2.2 2v5.2c0 .9.5 1.7 1.3 2.1l.7.4z"></svg:path>`,
})
export class VaadinBellOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBellSlashIcon],svg[vaadin-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.2 0l-3.6 3.6C11.1 3 10.4 2.3 9 2.1V1s.1-1-1-1s-1 1-1 1v1.1C4.2 2.6 4 5 4 5v5.2c0 .5-.3 1-.7 1.2L2 12v1h.3L0 15.3v.7h.7L16 .6V0zM6 4.8v4.5l-1 1V5s0-.8.7-1.4C6.4 2.9 7 3 7 3s-1 .7-1 1.8M8 16c2.1 0 2-2 2-2H6s-.1 2 2 2m4-5.8V5.6l-6 6l-.3.4l-1 1H14v-1l-1.3-.6c-.4-.3-.7-.7-.7-1.2"></svg:path>`,
})
export class VaadinBellSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBellSlashOIcon],svg[vaadin-bell-slash-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.2 0l-3.6 3.6C11.2 3 10.4 2.3 9 2.1V1s.1-1-1-1s-1 1-1 1v1.1C4 2.6 4 5 4 5v5.2c0 .5-.3 1-.7 1.2L2 12v1.3l-2 2v.7h.7L16 .6V0zM5 10.3q0-.15 0 0V5c0-.1.1-1.6 2.2-1.9l.8-.2l.8.1c1.2.2 1.8.8 2 1.3zm7-.1V5.6l-1 1v3.5c0 .9.5 1.7 1.3 2.1l.7.4v.4H4.7l-1 1h2.4s-.1 2 2 2s2-2 2-2H14v-2l-1.3-.6c-.4-.3-.7-.7-.7-1.2"></svg:path>`,
})
export class VaadinBellSlashOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBoatIcon],svg[vaadin-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 9.6c1.1.7 2.5 1.9 2.5 3.3V14h.1s.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1h.1v-1.1c0-1.4 1.4-2.6 2.5-3.3c.6-.4.5-1.2-.2-1.4L13 7.8V4h-1V3H9V1H7v2H4v1H3v3.8l-1.3.4c-.8.2-.8 1-.2 1.4M4 5h1V4h6v1h1v2.5l-3.3-1q-.75-.15-1.5 0L4 7.5zm10 9c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1s-1 0-2-1"></svg:path>`,
})
export class VaadinBoatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBoldIcon],svg[vaadin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7.5s2-.8 2-3.6C13-.2 7.9 0 6 0H2v16h4c3.7 0 8 0 8-4.4c0-3.8-3-4.1-3-4.1M9 4.4C9 6.2 7.5 6 6 6V3c1.8 0 3 .1 3 1.4M6 13V9c1.8 0 4-.3 4 2.2c0 1.9-2.5 1.8-4 1.8"></svg:path>`,
})
export class VaadinBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBoltIcon],svg[vaadin-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.99 0L.98 9.38L7 8.96L2.04 16L15 6l-7.01.47L15 0z"></svg:path>`,
})
export class VaadinBoltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBombIcon],svg[vaadin-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1h1v1h-1zm0 4h1v1h-1zm2-2h1v1h-1zm-4 0h1v1h-1zm4.6-.9l.7-.7l-.7-.7l-1.4 1.4l.7.7zm-.7 2.1l-.7.7l1.4 1.4l.7-.7l-.7-.7zm-2.8-1.4l.7-.7L10.4.7l-.7.7l.7.7z"></svg:path><svg:path fill="currentColor" d="m10.4 6.4l2-2l-.7-.7l-2 2L9 5l-.7.8C7.5 5.3 6.5 5 5.5 5C2.5 5 0 7.5 0 10.5S2.5 16 5.5 16s5.5-2.5 5.5-5.5c0-1-.3-1.9-.7-2.8L11 7zM6 7.2C4 7.2 2.6 9 2.6 10h-1C1.6 8 4 6.2 6 6.2z"></svg:path>`,
})
export class VaadinBombIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBookIcon],svg[vaadin-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 2.5C11 1.3 11 0 11 0H2v12.5C2 14.4 3.6 16 5.5 16H14V3s-1-.2-1.4-.5M4 2h5v2H4zm9 13H5.5c-1 0-1.8-.6-2-1.3c-.1-.4 0-.7.4-.7H11V2.7c.4.6 1.2 1.1 2 1.3z"></svg:path>`,
})
export class VaadinBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBookDollarIcon],svg[vaadin-book-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.9 2.5C11.3 1.3 11.5 0 11.5 0H2v12.5C2 14.4 4.1 16 6 16h8V3s-.8-.2-1.1-.5M7 6.3c-.9-.3-2.3-.8-2.3-1.9C4.8 3.6 6 3 6 2.8V2h1v.7c1 .1 1.8.4 1.9.4l-.3.9s-.7-.3-1.5-.3c-.7 0-1.1.3-1.2.8c0 .3.5.6 1.3.9c1.5.5 1.9 1.1 1.9 1.9C9.1 8 9 8.9 7 9.1v.9H6v-.8c0-.1-1.4-.5-1.5-.5l.5-.9s1.1.5 2 .4s1.3-.6 1.3-1c.1-.3-.4-.6-1.3-.9m6 8.7H6c-1 0-1.8-.6-2-1.3c-.1-.3 0-.7.4-.7H11V2.7c1 .6 2 1.1 2 1.3z"></svg:path>`,
})
export class VaadinBookDollarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBookPercentIcon],svg[vaadin-book-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 2.5C11 1.3 11 0 11 0H2v12.5C2 14.4 3.6 16 5.5 16H14V3s-1-.2-1.4-.5m-7.1.7c.8 0 1.5.7 1.5 1.6s-.7 1.4-1.5 1.4S4 5.6 4 4.8s.7-1.6 1.5-1.6M9 3h1l-5 7H4zm1 5.5c0 .8-.7 1.5-1.5 1.5S7 9.3 7 8.5S7.7 7 8.5 7s1.5.7 1.5 1.5m3 6.5H5.5c-1 0-1.8-.6-2-1.3c-.1-.4 0-.7.4-.7H11V2.7c0 .6 1 1.1 2 1.3z"></svg:path><svg:path fill="currentColor" d="M9 8.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M6 4.8a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path>`,
})
export class VaadinBookPercentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBookmarkIcon],svg[vaadin-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v1h10l.1-1zm0 2h10v14l-5-5l-5 5z"></svg:path>`,
})
export class VaadinBookmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBookmarkOIcon],svg[vaadin-bookmark-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v16l5-5l5 5V0zm9 13.7L8 9.8l-4 3.9V3h8zM12 2H4V1h8z"></svg:path>`,
})
export class VaadinBookmarkOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBriefcaseIcon],svg[vaadin-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3V1H5v2H0v12h16V3zm-1 0H6V2h4z"></svg:path>`,
})
export class VaadinBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBrowserIcon],svg[vaadin-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1V0H0v15h1v1h15V1zM3 1h9v1H3zM1 1h1v1H1zm0 2h13v11H1z"></svg:path>`,
})
export class VaadinBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBugIcon],svg[vaadin-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.2a7.6 7.6 0 0 0 3.903-1.129a.3.3 0 0 0 .098-.229L12 4.819a2.91 2.91 0 0 0-1.781-2.522c-.137-.05-.219-.16-.219-.29V.499a.5.5 0 0 0-1 0v1.2a.3.3 0 0 1-.3.3H7.3a.3.3 0 0 1-.3-.3v-1.2a.5.5 0 0 0-1 0v1.5a.3.3 0 0 1-.198.269A2.92 2.92 0 0 0 4 4.812l-.001.029c0 .102.051.193.13.247a5.85 5.85 0 0 0 3.89 1.11zM10 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2M6 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path><svg:path fill="currentColor" d="M13 8V7a6.2 6.2 0 0 0 2-4.497a.5.5 0 1 0-1-.003a4.54 4.54 0 0 1-1.105 2.906A4.78 4.78 0 0 1 9.326 7H6.73l-.075.001a4.78 4.78 0 0 1-3.561-1.586A4.54 4.54 0 0 1 2 2.514a.5.5 0 1 0-1-.003a6.2 6.2 0 0 0 1.996 4.486L3 8.001c-3 .06-3 1.42-3 3.47a.5.5 0 0 0 1 0c0-1.72 0-2.4 2-2.47a9.6 9.6 0 0 0 .612 3.136c-.383.006-.696.176-.942.414a3.86 3.86 0 0 0-.711 2.242q0 .3.044.589L2 15.5a.5.5 0 0 0 1 0v-.14a3.27 3.27 0 0 1 .389-2.096c.165-.152.401-.257.66-.264a3.8 3.8 0 0 0 2.934 1.998L7 14h2v1a3.8 3.8 0 0 0 2.94-1.98c.012-.02.015-.02.018-.02a1 1 0 0 1 .663.251a3.26 3.26 0 0 1 .377 2.127l.002.121a.5.5 0 0 0 1 0v-.14a3.88 3.88 0 0 0-.678-2.802a1.84 1.84 0 0 0-.9-.466c.336-.917.55-1.975.578-3.08c2-.012 2 .708 2 2.458a.5.5 0 0 0 1 0c0-2.03 0-3.39-3-3.47zm-4 5H7v-1h2zm0-2H7v-1h2zm0-2H7V8h2z"></svg:path>`,
})
export class VaadinBugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBugOIcon],svg[vaadin-bug-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8V7a6.2 6.2 0 0 0 2-4.497a.5.5 0 1 0-1-.003a4.54 4.54 0 0 1-1.105 2.906A4.78 4.78 0 0 1 9.326 7H6.73l-.075.001a4.78 4.78 0 0 1-3.561-1.586A4.54 4.54 0 0 1 2 2.514a.5.5 0 1 0-1-.003a6.2 6.2 0 0 0 1.996 4.486L3 8.001c-3 .06-3 1.42-3 3.47a.5.5 0 0 0 1 0c0-1.72 0-2.4 2-2.47a9.6 9.6 0 0 0 .612 3.136c-.383.006-.696.176-.942.414a3.86 3.86 0 0 0-.711 2.242q0 .3.044.589L2 15.5a.5.5 0 0 0 1 0v-.14a3.27 3.27 0 0 1 .389-2.096c.165-.152.401-.257.66-.264a4.75 4.75 0 0 0 2.92 1.994L7 14h2v1a4.75 4.75 0 0 0 2.939-1.983c.013-.017.016-.017.019-.017a1 1 0 0 1 .663.251a3.26 3.26 0 0 1 .377 2.127l.002.121a.5.5 0 0 0 1 0v-.14a3.88 3.88 0 0 0-.678-2.802a1.84 1.84 0 0 0-.9-.466c.336-.917.55-1.975.578-3.08c2-.012 2 .708 2 2.458a.5.5 0 0 0 1 0c0-2.03 0-3.39-3-3.47zm-7 5.5a3.3 3.3 0 0 1-1.083-.989L4.67 12.1l-.15-.39A8.5 8.5 0 0 1 4 9.013V7.35a5.4 5.4 0 0 0 1.973.647L6 13.57zm3-.5H7v-1h2zm0-2H7v-1h2zm0-2H7V8h2zm3 0a8.6 8.6 0 0 1-.54 2.77l-.13.33l-.24.4c-.285.411-.65.747-1.074.992L10 8a5.5 5.5 0 0 0 2.029-.624z"></svg:path><svg:path fill="currentColor" d="M8 6.2a7.6 7.6 0 0 0 3.903-1.129a.3.3 0 0 0 .098-.229L12 4.819a2.91 2.91 0 0 0-1.781-2.522c-.137-.05-.219-.16-.219-.29V.499a.5.5 0 0 0-1 0v1.2a.3.3 0 0 1-.3.3H7.3a.3.3 0 0 1-.3-.3v-1.2a.5.5 0 0 0-1 0v1.5a.3.3 0 0 1-.198.269A2.92 2.92 0 0 0 4 4.812l-.001.029c0 .102.051.193.13.247a5.85 5.85 0 0 0 3.89 1.11zM10 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2M6 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class VaadinBugOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBuildingIcon],svg[vaadin-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v16h4v-3h2v3h4V0zm3 12H4v-2h2zm0-3H4V7h2zm0-3H4V4h2zm0-3H4V1h2zm3 9H7v-2h2zm0-3H7V7h2zm0-3H7V4h2zm0-3H7V1h2zm3 9h-2v-2h2zm0-3h-2V7h2zm0-3h-2V4h2zm0-3h-2V1h2z"></svg:path>`,
})
export class VaadinBuildingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBuildingOIcon],svg[vaadin-building-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v16h12V0zm11 15H9v-3H7v3H3V1h10z"></svg:path><svg:path fill="currentColor" d="M4 9h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zM4 6h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zM4 3h2v2H4zm3 0h2v2H7zm3 0h2v2h-2z"></svg:path>`,
})
export class VaadinBuildingOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBulletsIcon],svg[vaadin-bullets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2.5C0 3.3.7 4 1.5 4S3 3.3 3 2.5S2.3 1 1.5 1S0 1.7 0 2.5m0 5C0 8.3.7 9 1.5 9S3 8.3 3 7.5S2.3 6 1.5 6S0 6.7 0 7.5m0 5c0 .8.7 1.5 1.5 1.5S3 13.3 3 12.5S2.3 11 1.5 11S0 11.7 0 12.5M5 1h11v3H5zm0 5h11v3H5zm0 5h11v3H5z"></svg:path>`,
})
export class VaadinBulletsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBullseyeIcon],svg[vaadin-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 14.9c-3.8 0-6.9-3.1-6.9-6.9S4.2 1.1 8 1.1s6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9"></svg:path><svg:path fill="currentColor" d="M8 2.3C4.8 2.3 2.3 4.8 2.3 8s2.6 5.7 5.7 5.7s5.7-2.6 5.7-5.7S11.2 2.3 8 2.3m0 10.3c-2.5 0-4.6-2.1-4.6-4.6S5.5 3.4 8 3.4s4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6"></svg:path><svg:path fill="currentColor" d="M8 4.6C6.1 4.6 4.6 6.1 4.6 8s1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4S9.9 4.6 8 4.6"></svg:path>`,
})
export class VaadinBullseyeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinBussIcon],svg[vaadin-buss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.67 4H14V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2h-.68a.32.32 0 0 0-.32.32v2.36c0 .177.143.32.32.32H2v6c0 .55 0 1 1 1v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h4v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14c1 0 1-.45 1-1V7h.67a.33.33 0 1 0 0-.66a.33.33 0 0 0 0 .66a.33.33 0 0 0 .33-.33V4.33a.33.33 0 0 0-.33-.33M6 1h4v1H6zM4 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2M3 8V3h10v5zm9 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class VaadinBussIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinButtonIcon],svg[vaadin-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 5.3l-1-1c-.2-.2-.4-.3-.7-.3H1c-.6 0-1 .4-1 1v5c0 .3.1.6.3.7l1 1c.2.2.4.3.7.3h13c.6 0 1-.4 1-1V6c0-.3-.1-.5-.3-.7M14 10H1V5h13z"></svg:path>`,
})
export class VaadinButtonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalcIcon],svg[vaadin-calc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3h6v2H9zm0 8h6v2H9zM5 1H3v2H1v2h2v2h2V5h2V3H5zm2 9.4L5.6 9L4 10.6L2.4 9L1 10.4L2.6 12L1 13.6L2.4 15L4 13.4L5.6 15L7 13.6L5.4 12zm6 4.1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinCalcIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalcBookIcon],svg[vaadin-calc-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.9 0c-1.3 0-2 .4-2.4.8C9.1.4 8.4 0 7 0C3.6 0 3 2 3 2v4H0v10h7v-4.6l1.5-.2s.2-.3.3.7h1.3c.1-1 .4-.7.4-.7l5.5.7V2.1S15.4 0 11.9 0M1 7h5v2H1zm5 3v1H5v-1zm-2 0v1H3v-1zm-2 5H1v-1h1zm0-2H1v-1h1zm0-2H1v-1h1zm2 4H3v-1h1zm0-2H3v-1h1zm2 2H5v-1h1zm0-2H5v-1h1zm3-3.5c-.9-.1-1.3-.3-2-.3V6H4V2.1c0-.4.8-1.5 3-1.5c1.8 0 1.9.8 1.9 1v7.9zm6 .4c-1-.4-1.1-.7-2.5-.7h-.2c-1 0-1.3.2-2.3.4V1.8c0-.2.2-1.1 1.9-1.1c2.3 0 3.1.9 3.1 1.4z"></svg:path>`,
})
export class VaadinCalcBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarIcon],svg[vaadin-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1zM3 15H1v-2h2zm0-3H1v-2h2zm0-3H1V7h2zm3 6H4v-2h2zm0-3H4v-2h2zm0-3H4V7h2zm3 6H7v-2h2zm0-3H7v-2h2zm0-3H7V7h2zm3 6h-2v-2h2zm0-3h-2v-2h2zm0-3h-2V7h2zm3 6h-2v-2h2zm0-3h-2v-2h2zm0-3h-2V7h2z"></svg:path><svg:path fill="currentColor" d="M3 0h1v3H3zm9 0h1v3h-1z"></svg:path>`,
})
export class VaadinCalendarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarBriefcaseIcon],svg[vaadin-calendar-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1v3H3zm8 0h1v3h-1z"></svg:path><svg:path fill="currentColor" d="M13 1v3h-3V1H5v3H2V1H0v14h5v-1H1V6h13v3h1V1z"></svg:path><svg:path fill="currentColor" d="M13 10V8H9v2H6v6h10v-6zm-3-1h2v1h-2z"></svg:path>`,
})
export class VaadinCalendarBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarClockIcon],svg[vaadin-calendar-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1v3H3zm8 0h1v3h-1z"></svg:path><svg:path fill="currentColor" d="M6.6 14H1V6h13v.6c.4.2.7.4 1 .7V1h-2v3h-3V1H5v3H2V1H0v14h7.3c-.3-.3-.5-.6-.7-1"></svg:path><svg:path fill="currentColor" d="M14 12h-3V9h1v2h2z"></svg:path><svg:path fill="currentColor" d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5S13.4 15 11.5 15S8 13.4 8 11.5S9.6 8 11.5 8m0-1C9 7 7 9 7 11.5S9 16 11.5 16s4.5-2 4.5-4.5S14 7 11.5 7"></svg:path>`,
})
export class VaadinCalendarClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarEnvelopeIcon],svg[vaadin-calendar-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1v2H3zm6 0h1v2H9z"></svg:path><svg:path fill="currentColor" d="M13 7V1h-2v2H8V1H5v2H2V1H0v12h4v3h12V7zm-9 5H1V5h11v2H4zm1-1.8l2.6 1.5L5 14.3zm.7 4.8l2.8-2.8l1.5.9l1.5-.8l2.8 2.8H5.7zm9.3-.7l-2.6-2.6l2.6-1.4zm0-5.1l-5 2.7L5 9V8h10zm.4.4"></svg:path>`,
})
export class VaadinCalendarEnvelopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarOIcon],svg[vaadin-calendar-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1zm1 14H1V6h14z"></svg:path><svg:path fill="currentColor" d="M3 0h1v3H3zm9 0h1v3h-1z"></svg:path>`,
})
export class VaadinCalendarOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarUserIcon],svg[vaadin-calendar-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1v3H3zm8 0h1v3h-1z"></svg:path><svg:path fill="currentColor" d="M9 14.1q0-.15 0 0L1 14V6h13v1.2c.4.1.7.3 1 .6V1h-2v3h-3V1H5v3H2V1H0v14h9z"></svg:path><svg:path fill="currentColor" d="M15 10a2 2 0 1 1-3.999.001A2 2 0 0 1 15 10"></svg:path><svg:path fill="currentColor" d="M13.9 12h-1.8c-1.1 0-2.1.9-2.1 2.1V16h6v-1.9c0-1.2-.9-2.1-2.1-2.1"></svg:path>`,
})
export class VaadinCalendarUserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCameraIcon],svg[vaadin-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M11 4V1H5v3H0v9h5c.8.6 1.9 1 3 1s2.2-.4 3-1h5V4zM6 2h4v2H6zm2 11c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4m7-7h-2V5h2z"></svg:path>`,
})
export class VaadinCameraIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCarIcon],svg[vaadin-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 6.1l-1.4-2.9c-.4-.7-1.1-1.2-1.9-1.2H4.3c-.8 0-1.5.5-1.9 1.2L1 6.1c-.6.1-1 .6-1 1.1v3.5c0 .6.4 1.1 1 1.2v2c0 .6.5 1.1 1.1 1.1H3c.5 0 1-.5 1-1.1V12h8v1.9c0 .6.5 1.1 1.1 1.1h.9c.6 0 1.1-.5 1.1-1.1v-2c.6-.1 1-.6 1-1.2V7.2c-.1-.5-.5-1-1.1-1.1M4 8.4c0 .3-.3.6-.6.6H1.6c-.3 0-.6-.3-.6-.6v-.8c0-.3.3-.6.6-.6h1.8c.3 0 .6.3.6.6zm6 2.6H6v-1h4zM2.1 6l1.2-2.4c.2-.4.6-.6 1-.6h7.4c.4 0 .8.2 1 .6L13.9 6zM15 8.4c0 .3-.3.6-.6.6h-1.8c-.3 0-.6-.3-.6-.6v-.8c0-.3.3-.6.6-.6h1.8c.3 0 .6.3.6.6z"></svg:path>`,
})
export class VaadinCarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretDownIcon],svg[vaadin-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h10l-5 7z"></svg:path>`,
})
export class VaadinCaretDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretLeftIcon],svg[vaadin-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v10L4 8z"></svg:path>`,
})
export class VaadinCaretLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretRightIcon],svg[vaadin-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13V3l7 5z"></svg:path>`,
})
export class VaadinCaretRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretSquareDownOIcon],svg[vaadin-caret-square-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path><svg:path fill="currentColor" d="M4 6h8l-4 5z"></svg:path>`,
})
export class VaadinCaretSquareDownOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretSquareLeftOIcon],svg[vaadin-caret-square-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path><svg:path fill="currentColor" d="M10 4v8L5 8z"></svg:path>`,
})
export class VaadinCaretSquareLeftOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretSquareRightOIcon],svg[vaadin-caret-square-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path><svg:path fill="currentColor" d="M5.9 12V4l5 4z"></svg:path>`,
})
export class VaadinCaretSquareRightOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretSquareUpOIcon],svg[vaadin-caret-square-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path><svg:path fill="currentColor" d="M12 10H4l4-5z"></svg:path>`,
})
export class VaadinCaretSquareUpOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretUpIcon],svg[vaadin-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12H3l5-7z"></svg:path>`,
})
export class VaadinCaretUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCartIcon],svg[vaadin-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"></svg:path>`,
})
export class VaadinCartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCartOIcon],svg[vaadin-cart-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4M4 5h10.7l-1.1 4l-8.4.9z"></svg:path>`,
})
export class VaadinCartOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCashIcon],svg[vaadin-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14H2v-1h13V6h1z"></svg:path><svg:path fill="currentColor" d="M13 4v7H1V4zm1-1H0v9h14z"></svg:path><svg:path fill="currentColor" d="M3 6H2v3h1v1h4a2.5 2.5 0 1 1 0-5H3zm8 0V5H7a2.5 2.5 0 1 1 0 5h4V9h1V6z"></svg:path>`,
})
export class VaadinCashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChartIcon],svg[vaadin-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h16v1H0z"></svg:path><svg:path fill="currentColor" d="M0 0h1v16H0zm9 8L6.1 5L2 9v5h14V.9z"></svg:path>`,
})
export class VaadinChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChart3dIcon],svg[vaadin-chart-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4V2L8 0L4 2v1L0 5v5l12 6l4-2V6zm-8 6.88l-3-1.5v-3.3l3 1.53zm0-4.39l-2.34-1.2L4 4.12zm4 6.39l-3-1.5V3.07l3 1.54zM5.66 2.29L8 1.12l2.34 1.17L8 3.49zM12 14.88l-3-1.5V7.07l3 1.54zm0-7.39l-2.34-1.2L12 5.12l2.34 1.17z"></svg:path>`,
})
export class VaadinChart3dIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChartGridIcon],svg[vaadin-chart-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 9v7h16V9zm5 6H1v-1h4zm0-2H1v-1h4zm0-2H1v-1h4zm5 4H6v-1h4zm0-2H6v-1h4zm0-2H6v-1h4zm5 4h-4v-1h4zm0-2h-4v-1h4zm0-2h-4v-1h4zm1-3H0V0h1v7h15z"></svg:path><svg:path fill="currentColor" d="M15 1.57L9.98 4.43L6.02 2.45L2 4.06v1.08l3.98-1.59l4.04 2.02L15 2.72z"></svg:path>`,
})
export class VaadinChartGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChartLineIcon],svg[vaadin-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 16h16V0h-1v2.6L11 6V0h-1v6.4l-4-.9V0H5v5.7L1 8.6V0H0zm5-2H1v-1.7l4-2.9zm5 0H6V8.7l.1-.1l3.9.9zm5 0h-4V9.7h.1L15 6.5z"></svg:path>`,
})
export class VaadinChartLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChartTimelineIcon],svg[vaadin-chart-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13v-1H1V0H0v13h5v2H0v1h16v-1h-5v-2z"></svg:path><svg:path fill="currentColor" d="M9 7L6 4L2 8v3h14V0z"></svg:path>`,
})
export class VaadinChartTimelineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChatIcon],svg[vaadin-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.2c0-.6 2-1.8 2-3.1c0-1.5-1.4-2.7-3.1-3.2c.7-.8 1.1-1.7 1.1-2.8C14 2.3 11.1 0 7.4 0C3.9 0 0 2.1 0 5.1c0 2.1 1.6 3.6 2.3 4.2c-.1 1.2-.6 1.7-.6 1.7L.5 12H2c1.6 0 2.9-.5 3.7-1.1v.2c0 2 2.2 3.6 5 3.6h.6c.4.5 1.7 1.4 3.4 1.4c.1-.1-.7-.5-.7-1.9M7.4 1C10.5 1 13 2.9 13 5.1s-2.6 4.1-5.8 4.1H6.1l-.1.2c-.3.4-1.5 1.2-3.1 1.5c.1-.4.1-1 .1-1.8v-.3C2 8 .9 6.6.9 5.2C.9 3 4.1 1 7.4 1"></svg:path>`,
})
export class VaadinChatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCheckIcon],svg[vaadin-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.3 14.2L.2 9l1.7-2.4l4.8 3.5l6.6-8.5l2.3 1.8z"></svg:path>`,
})
export class VaadinCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCheckCircleIcon],svg[vaadin-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m-.9 11.7L2.9 7.6l1.4-1.4L7 8.9L12 4l1.4 1.4z"></svg:path>`,
})
export class VaadinCheckCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCheckCircleOIcon],svg[vaadin-check-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M7.1 11.7L2.9 7.6l1.4-1.4l2.8 2.7L12 4l1.4 1.4z"></svg:path>`,
})
export class VaadinCheckCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCheckSquareIcon],svg[vaadin-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 .9L12 2H0v14h14V5.5l1.7-2zM6.5 11.7L2.3 7.5l1.4-1.4l2.7 2.7L13 2.2l1.4 1.4z"></svg:path>`,
})
export class VaadinCheckSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCheckSquareOIcon],svg[vaadin-check-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6.2V14H2V2h10.5l1-1H1v14h14V5.2z"></svg:path><svg:path fill="currentColor" d="M7.9 10.9L3.7 6.7l1.5-1.4l2.7 2.8l6.7-6.7L16 2.8z"></svg:path>`,
})
export class VaadinCheckSquareOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleDownIcon],svg[vaadin-chevron-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8m11.6-2.8L13 6.6l-5 5l-5-5l1.4-1.4L8 8.8z"></svg:path>`,
})
export class VaadinChevronCircleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleDownOIcon],svg[vaadin-chevron-circle-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 6.6l-5 5l-5-5l1.4-1.4L8 8.8l3.6-3.6z"></svg:path><svg:path fill="currentColor" d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8"></svg:path>`,
})
export class VaadinChevronCircleDownOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleLeftIcon],svg[vaadin-chevron-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m2.8 11.6L9.4 13l-5-5l5-5l1.4 1.4L7.2 8z"></svg:path>`,
})
export class VaadinChevronCircleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleLeftOIcon],svg[vaadin-chevron-circle-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.4 13l-5-5l5-5l1.4 1.4L7.2 8l3.6 3.6z"></svg:path><svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path>`,
})
export class VaadinChevronCircleLeftOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleRightIcon],svg[vaadin-chevron-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8M5.2 4.4L6.6 3l5 5l-5 5l-1.4-1.4L8.8 8z"></svg:path>`,
})
export class VaadinChevronCircleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleRightOIcon],svg[vaadin-chevron-circle-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.6 13l5-5l-5-5l-1.4 1.4L8.8 8l-3.6 3.6z"></svg:path><svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path>`,
})
export class VaadinChevronCircleRightOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleUpIcon],svg[vaadin-chevron-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8s8-3.6 8-8M4.4 10.8L3 9.4l5-5l5 5l-1.4 1.4L8 7.2z"></svg:path>`,
})
export class VaadinChevronCircleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleUpOIcon],svg[vaadin-chevron-circle-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 9.4l5-5l5 5l-1.4 1.4L8 7.2l-3.6 3.6z"></svg:path><svg:path fill="currentColor" d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7m1 0c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8s8-3.6 8-8"></svg:path>`,
})
export class VaadinChevronCircleUpOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronDownIcon],svg[vaadin-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 13.1l-8-8l2.1-2.2L8 8.8l5.9-5.9L16 5.1z"></svg:path>`,
})
export class VaadinChevronDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronDownSmallIcon],svg[vaadin-chevron-down-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12L1.68 5.68L3.35 4L8 8.65L12.65 4l1.67 1.68z"></svg:path>`,
})
export class VaadinChevronDownSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronLeftIcon],svg[vaadin-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.9 8l8-8l2.2 2.1L7.2 8l5.9 5.9l-2.2 2.1z"></svg:path>`,
})
export class VaadinChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronLeftSmallIcon],svg[vaadin-chevron-left-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l6.32-6.32L12 3.35L7.35 8L12 12.65l-1.68 1.67z"></svg:path>`,
})
export class VaadinChevronLeftSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronRightIcon],svg[vaadin-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.1 8l-8 8l-2.2-2.1L8.8 8L2.9 2.1L5.1 0z"></svg:path>`,
})
export class VaadinChevronRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronRightSmallIcon],svg[vaadin-chevron-right-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8L5.68 1.68L4 3.35L8.65 8L4 12.65l1.68 1.67z"></svg:path>`,
})
export class VaadinChevronRightSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronUpIcon],svg[vaadin-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 2.9l8 8l-2.1 2.2L8 7.2l-5.9 5.9L0 10.9z"></svg:path>`,
})
export class VaadinChevronUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronUpSmallIcon],svg[vaadin-chevron-up-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 4l-6.32 6.32L3.35 12L8 7.35L12.65 12l1.67-1.68z"></svg:path>`,
})
export class VaadinChevronUpSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinChildIcon],svg[vaadin-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5a2 2 0 1 1-3.999.001A2 2 0 0 1 10 5"></svg:path><svg:path fill="currentColor" d="m12.79 10.32l-2.6-2.63A2.3 2.3 0 0 0 8.54 7H7.469c-.648 0-1.235.264-1.659.69l-2.6 2.63a.73.73 0 1 0 .998 1.003L6 9.53V16h1.5v-4h1v4H10V9.53l1.75 1.8a.73.73 0 1 0 1.041-1.009z"></svg:path>`,
})
export class VaadinChildIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCircleIcon],svg[vaadin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path>`,
})
export class VaadinCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCircleThinIcon],svg[vaadin-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path>`,
})
export class VaadinCircleThinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardIcon],svg[vaadin-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path>`,
})
export class VaadinClipboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardCheckIcon],svg[vaadin-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path><svg:path fill="currentColor" d="m7.39 12.47l-3-2.73l1.35-1.48L7.32 9.7l2.87-2.9l1.42 1.4z"></svg:path>`,
})
export class VaadinClipboardCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardCrossIcon],svg[vaadin-clipboard-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path><svg:path fill="currentColor" d="M11 8H9V6H7v2H5v2h2v2h2v-2h2z"></svg:path>`,
})
export class VaadinClipboardCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardHeartIcon],svg[vaadin-clipboard-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 7c-.6 0-1.1.6-1.5 1c-.4-.4-.9-1-1.5-1c-1.5 0-2.1 1.9-1 2.9L8 12l2.5-2.1c1.1-1 .5-2.9-1-2.9"></svg:path><svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path>`,
})
export class VaadinClipboardHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardPulseIcon],svg[vaadin-clipboard-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path><svg:path fill="currentColor" d="M9.3 13c-.2 0-.3-.1-.4-.3l-.8-4.8l-.7 3.1q0 .15-.3.3c-.1 0-.3 0-.4-.1l-1-1.3H4.4c-.2 0-.4-.2-.4-.4s.2-.4.4-.4H6c.1 0 .2.1.3.1l.6.8l.9-4.3c0-.2.2-.3.4-.3s.3.2.3.4l.9 5.3l.6-1.7c.1-.1.2-.2.3-.2h1.3c.2 0 .4.2.4.4s-.2.4-.4.4h-1l-1 2.9s-.2.1-.3.1"></svg:path>`,
})
export class VaadinClipboardPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardTextIcon],svg[vaadin-clipboard-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h8v1H4zm0 2h8v1H4zm0 2h5v1H4z"></svg:path><svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path>`,
})
export class VaadinClipboardTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardUserIcon],svg[vaadin-clipboard-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path><svg:path fill="currentColor" d="M8 6C5.5 6 6.7 9.2 6.7 9.2c.3.4.7.4.7.6c0 .3-.3.3-.6.4c-.5.1-.9-.1-1.4.8c-.3.4-.4 2-.4 2h6s-.1-1.6-.4-2c-.4-.8-.9-.7-1.4-.8c-.3 0-.6-.1-.6-.4s.3-.2.6-.6C9.3 9.2 10.5 6 8 6"></svg:path>`,
})
export class VaadinClipboardUserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClockIcon],svg[vaadin-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6"></svg:path><svg:path fill="currentColor" d="M8 3H7v6h5V8H8z"></svg:path>`,
})
export class VaadinClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloseIcon],svg[vaadin-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z"></svg:path>`,
})
export class VaadinCloseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloseBigIcon],svg[vaadin-close-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 0l-1 .01L8 7L1 .01L0 0v1l7 7l-7 7v1h1l7-7l7 7h1v-1L9 8l7-7z"></svg:path>`,
})
export class VaadinCloseBigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloseCircleIcon],svg[vaadin-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m4.2 10.8l-1.4 1.4L8 9.4l-2.8 2.8l-1.4-1.4L6.6 8L3.8 5.2l1.4-1.4L8 6.6l2.8-2.8l1.4 1.4L9.4 8z"></svg:path>`,
})
export class VaadinCloseCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloseCircleOIcon],svg[vaadin-close-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M12.2 10.8L9.4 8l2.8-2.8l-1.4-1.4L8 6.6L5.2 3.8L3.8 5.2L6.6 8l-2.8 2.8l1.4 1.4L8 9.4l2.8 2.8z"></svg:path>`,
})
export class VaadinCloseCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloseSmallIcon],svg[vaadin-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.96 4.46l-1.42-1.42L8 6.59L4.46 3.04L3.04 4.46L6.59 8l-3.55 3.54l1.42 1.42L8 9.41l3.54 3.55l1.42-1.42L9.41 8z"></svg:path>`,
})
export class VaadinCloseSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloudIcon],svg[vaadin-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13c1.1 0 2-.9 2-2s-.9-2-2-2h-.1c0-.3.1-.6.1-1c0-2.2-1.8-4-4-4c-.8 0-1.5.2-2.2.6C7.5 3.7 6.6 3 5.5 3C4.1 3 3 4.1 3 5.5c0 .6.2 1.1.6 1.6C3.4 7 3.2 7 3 7c-1.7 0-3 1.3-3 3s1.3 3 3 3z"></svg:path>`,
})
export class VaadinCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloudDownloadIcon],svg[vaadin-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h-.1c0-.3.1-.6.1-1c0-2.2-1.8-4-4-4V1H6v3.1C5.8 4 5.7 4 5.5 4C4.1 4 3 5.1 3 6.5c0 .6.2 1.1.6 1.6C3.4 8 3.2 8 3 8c-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-.9 2-2s-.9-2-2-2m-6 1.4L5.1 8H7V2h2v6h1.9z"></svg:path>`,
})
export class VaadinCloudDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloudDownloadOIcon],svg[vaadin-cloud-download-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.1 9.8v-.6c0-2.4-1.9-4.3-4.2-4.3c-.3.1-.6.1-.9.1V2H7v2.4c-.4-.3-.9-.4-1.3-.4c-1.6 0-2.9 1.3-2.9 2.9c0 .3.1.6.2.9c-1.6.2-3 1.8-3 3.6C0 13.3 1.5 15 3.3 15h10.3c1.4 0 2.4-1.5 2.4-2.7s-.8-2.3-1.9-2.5m-.5 4.2H3.3C2.1 14 1 12.7 1 11.4s1.1-2.6 2.3-2.6h.4l1.4.2l-.9-1c-.2-.3-.4-.7-.4-1.2c0-1 .8-1.8 1.8-1.8c.5 0 1 .2 1.3.6V8H5l3 4l3-4H9V6.1c.3-.1.6-.1.9-.1c1.8 0 3.2 1.5 3.2 3.3c0 .3 0 .6-.1.9l-.2.6l.8.1c.7 0 1.4.7 1.4 1.5c0 .7-.6 1.6-1.4 1.6"></svg:path>`,
})
export class VaadinCloudDownloadOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloudOIcon],svg[vaadin-cloud-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.1 8.9v-.6c0-2.4-1.9-4.3-4.2-4.3c-.6 0-1.2.1-1.8.4c-.5-.7-1.5-1.2-2.4-1.2c-1.6 0-2.9 1.2-2.9 2.8c0 .3.1.6.2.9c-1.6.2-3 1.8-3 3.5C0 12.3 1.5 14 3.3 14h10.3c1.4 0 2.4-1.4 2.4-2.6s-.8-2.2-1.9-2.5m-.5 4.1H3.3C2.1 13 1 11.8 1 10.5S2.1 8 3.3 8h.4l1.3.3l-.8-1.2c-.2-.3-.4-.7-.4-1.1c0-1 .8-1.8 1.8-1.8c.8 0 1.5.5 1.7 1.2l.3.6l.5-.3c.5-.3 1.1-.5 1.8-.5c1.8 0 3.2 1.5 3.2 3.3c0 .3 0 .6-.1.9l-.2.6h.8c.7 0 1.4.7 1.4 1.5c0 .6-.6 1.5-1.4 1.5"></svg:path>`,
})
export class VaadinCloudOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloudUploadIcon],svg[vaadin-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h-.1c0-.3.1-.6.1-1c0-1.6-1-3-2.4-3.6L8 1L5.5 4C4.1 4 3 5.1 3 6.5c0 .6.2 1.1.6 1.6C3.4 8 3.2 8 3 8c-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-.9 2-2s-.9-2-2-2M9 6v6H7V6H5.1L8 2.6L10.9 6z"></svg:path>`,
})
export class VaadinCloudUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCloudUploadOIcon],svg[vaadin-cloud-upload-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.1 10.9v-.6c0-2.4-1.9-4.3-4.2-4.3c-.3 0-.6 0-.9.1V4h2L8 0L5 4h2v1.5c-.4-.2-.9-.3-1.3-.3c-1.6 0-2.9 1.2-2.9 2.8c0 .3.1.6.2.9c-1.6.2-3 1.8-3 3.5C0 14.3 1.5 16 3.3 16h10.3c1.4 0 2.4-1.4 2.4-2.6s-.8-2.2-1.9-2.5m-.5 4.1H3.3C2.1 15 1 13.8 1 12.5S2.1 10 3.3 10h.4l1.3.3l-.8-1.2c-.2-.3-.4-.7-.4-1.1c0-1 .8-1.8 1.8-1.8c.5 0 1 .2 1.3.6V10h2V7.2c.3-.1.6-.1.9-.1c1.8 0 3.2 1.5 3.2 3.3c0 .3 0 .6-.1.9l-.2.6h.8c.7 0 1.4.7 1.4 1.5c.1.7-.5 1.6-1.3 1.6"></svg:path>`,
})
export class VaadinCloudUploadOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinClusterIcon],svg[vaadin-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12a2 2 0 0 0-1.008.305L10.78 10.15a3.44 3.44 0 0 0 .74-1.993L13.09 8a1.49 1.49 0 1 0-.089-.768l-1.591.128a3.51 3.51 0 0 0-1.978-2.521L9.74 4H10a2 2 0 1 0-1.01-.265l-.27.855a3.3 3.3 0 0 0-.754-.084c-.83 0-1.59.296-2.181.789L2.791 2.291a1.5 1.5 0 1 0-1.291.71c.281-.001.544-.079.767-.214L5.26 5.791a3.45 3.45 0 0 0-.76 2.168v.203l-.66.11a2 2 0 1 0 .161.786L4 8.999l.63-.097a3.52 3.52 0 0 0 1.466 1.992l-.556 1.188a2 2 0 0 0-.539-.08h-.017a2 2 0 1 0 1.231.423l.566-1.153c.364.146.787.231 1.229.231c.847 0 1.621-.311 2.216-.824l2.176 2.124a2 2 0 1 0 1.6-.8zm-9 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3-4.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class VaadinClusterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCodeIcon],svg[vaadin-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.2 14L9.7 2h1.1L6.3 14zm5.9-1h1.2L16 8l-3.7-5H11l3.8 5zm-6.2 0H3.7L0 8l3.7-5H5L1.2 8z"></svg:path>`,
})
export class VaadinCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCoffeeIcon],svg[vaadin-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 13l-4 1H4l-4-1v-1h14zm.7-10H13V2H1v5c0 1.5.8 2.8 2 3.4v.6h8v-.6c.9-.5 1.6-1.4 1.9-2.4h.1c2.3 0 2.9-2 3-3.5c.1-.8-.5-1.5-1.3-1.5M13 7V4h1.7c.1 0 .2.1.2.1s.1.1.1.3C14.8 7 13.4 7 13 7"></svg:path>`,
})
export class VaadinCoffeeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCogIcon],svg[vaadin-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9V7l-1.7-.6c-.2-.6-.4-1.2-.7-1.8l.8-1.6L13 1.6l-1.6.8c-.5-.3-1.1-.6-1.8-.7L9 0H7l-.6 1.7c-.6.2-1.2.4-1.7.7l-1.6-.8l-1.5 1.5l.8 1.6c-.3.5-.5 1.1-.7 1.7L0 7v2l1.7.6c.2.6.4 1.2.7 1.8L1.6 13L3 14.4l1.6-.8c.5.3 1.1.6 1.8.7L7 16h2l.6-1.7c.6-.2 1.2-.4 1.8-.7l1.6.8l1.4-1.4l-.8-1.6c.3-.5.6-1.1.7-1.8zm-8 3c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"></svg:path><svg:path fill="currentColor" d="M10.6 7.9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class VaadinCogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCogOIcon],svg[vaadin-cog-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.2 6l-1.1-.2c-.1-.2-.1-.4-.2-.6l.6-.9l.5-.7L12.4 1l-.7.5l-.9.6c-.2-.1-.4-.1-.6-.2L10 .8L9.8 0H6.2L6 .8l-.2 1.1c-.2.1-.4.1-.6.2l-.9-.6l-.7-.4l-2.5 2.5l.5.7l.6.9c-.2.2-.2.4-.3.6L.8 6l-.8.2v3.6l.8.2l1.1.2c.1.2.1.4.2.6l-.6.9l-.5.7L3.6 15l.7-.5l.9-.6c.2.1.4.1.6.2l.2 1.1l.2.8h3.6l.2-.8l.2-1.1c.2-.1.4-.1.6-.2l.9.6l.7.5l2.6-2.6l-.5-.7l-.6-.9c.1-.2.2-.4.2-.6l1.1-.2l.8-.2V6.2zM15 9l-1.7.3q-.15.75-.6 1.5l.9 1.4l-1.4 1.4l-1.4-.9q-.75.45-1.5.6L9 15H7l-.3-1.7q-.75-.15-1.5-.6l-1.4.9l-1.4-1.4l.9-1.4q-.45-.75-.6-1.5L1 9V7l1.7-.3q.15-.75.6-1.5l-1-1.4l1.4-1.4l1.4.9q.75-.45 1.5-.6L7 1h2l.3 1.7q.75.15 1.5.6l1.4-.9l1.4 1.4l-.9 1.4q.45.75.6 1.5L15 7z"></svg:path><svg:path fill="currentColor" d="M8 4.5C6.1 4.5 4.5 6.1 4.5 8s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5S9.9 4.5 8 4.5m0 6c-1.4 0-2.5-1.1-2.5-2.5S6.6 5.5 8 5.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class VaadinCogOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCogsIcon],svg[vaadin-cogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5l-1.2-.4c-.1-.3-.2-.7-.4-1l.6-1.2l-1.5-1.3l-1.1.5c-.3-.2-.6-.3-1-.4L7 0H5l-.4 1.2c-.3.1-.7.2-1 .4l-1.1-.5l-1.4 1.4l.6 1.2c-.2.3-.3.6-.4 1L0 5v2l1.2.4c.1.3.2.7.4 1l-.5 1.1l1.4 1.4l1.2-.6c.3.2.6.3 1 .4L5 12h2l.4-1.2c.3-.1.7-.2 1-.4l1.2.6L11 9.6l-.6-1.2c.2-.3.3-.6.4-1zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3"></svg:path><svg:path fill="currentColor" d="M7.5 6a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 7.5 6M16 3V2h-.6c0-.2-.1-.4-.2-.5l.4-.4l-.7-.7l-.4.4c-.2-.1-.3-.2-.5-.2V0h-1v.6c-.2 0-.4.1-.5.2l-.4-.4l-.7.7l.4.4c-.1.2-.2.3-.2.5H11v1h.6c0 .2.1.4.2.5l-.4.4l.7.7l.4-.4c.2.1.3.2.5.2V5h1v-.6c.2 0 .4-.1.5-.2l.4.4l.7-.7l-.4-.4c.1-.2.2-.3.2-.5zm-2.5.5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1.9 8.3c-.1-.3-.2-.6-.4-.9l.3-.6l-.7-.7l-.5.4c-.3-.2-.6-.3-.9-.4L13 9h-1l-.2.6c-.3.1-.6.2-.9.4l-.6-.3l-.7.7l.3.6c-.2.3-.3.6-.4.9L9 12v1l.6.2c.1.3.2.6.4.9l-.3.6l.7.7l.6-.3c.3.2.6.3.9.4l.1.5h1l.2-.6c.3-.1.6-.2.9-.4l.6.3l.7-.7l-.4-.5c.2-.3.3-.6.4-.9l.6-.2v-1zM12.5 14c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class VaadinCogsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCoinPilesIcon],svg[vaadin-coin-piles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 0C7.46 0 5 .88 5 2v2c-3 .1-5 .94-5 2v6c0 1.09 2.46 2 5.5 2h.067q1.098-.001 2.153-.16c.698 1.305 2.094 2.158 3.69 2.158a4.38 4.38 0 0 0 4.224-3.217c.209-.199.344-.442.367-.717V2c0-1.12-2.46-2-5.5-2zm-5 5C8 5 10 5.45 10 6S8 7 5.5 7S1 6.55 1 6s2-1 4.5-1m0 8c-2.71 0-4.25-.71-4.5-1v-.8a10.4 10.4 0 0 0 4.522.799c.508-.001 1.03-.03 1.544-.085c-.043.371.022.712.123 1.037c-.452.021-.967.051-1.488.051L5.49 13zm1.57-2.09c-.467.057-1.008.09-1.556.09H5.5c-2.709 0-4.249-.71-4.499-1v-.84a10.4 10.4 0 0 0 4.518.84a14.5 14.5 0 0 0 1.897-.128c-.197.306-.291.654-.342 1.015zM5.5 9C2.79 9 1.25 8.29 1 8v-.9a10.4 10.4 0 0 0 4.518.84a10.55 10.55 0 0 0 4.551-.866l-.068.366a4.4 4.4 0 0 0-1.935 1.304C7.314 8.909 6.455 9 5.575 9h-.077zm5.91 6a3.41 3.41 0 1 1 0-6.82a3.41 3.41 0 0 1 0 6.82M15 8c-.175.167-.385.3-.617.386c-.288-.244-.6-.46-.938-.634a7.6 7.6 0 0 0 1.593-.61zm0-2c-.24.31-1.61.94-4 1V6h.011a10 10 0 0 0 4.053-.855zm0-2c-.25.33-1.79 1-4.5 1h-.23a9.1 9.1 0 0 0-4.169-1H6v-.9a10.4 10.4 0 0 0 4.518.84a10.55 10.55 0 0 0 4.551-.866zm-4.5-1C8 3 6 2.55 6 2s2-1 4.5-1s4.5.45 4.5 1s-2 1-4.5 1"></svg:path><svg:path fill="currentColor" d="M10.5 11h.5v3h1V9h-.5z"></svg:path>`,
})
export class VaadinCoinPilesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCoinsIcon],svg[vaadin-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 0A4.5 4.5 0 0 0 7 4.5q.006.391.074.758a4.7 4.7 0 0 0-1.591-.261a5.51 5.51 0 1 0 5.266 3.884c.23.077.484.099.742.099A4.49 4.49 0 0 0 11.5 0M10 10.5A4.5 4.5 0 1 1 5.5 6a4.51 4.51 0 0 1 4.5 4.499zM12.5 7h-2v-.5h.5v-3h-.5l1-1.5h.5v4.5h.5z"></svg:path><svg:path fill="currentColor" d="M5.63 8a1.26 1.26 0 0 1 1.371 1.255L7 9.302C7 11 5.14 12 5.14 12h1.37v-.5H7V13H4v-1s2-1.27 2-2.33C6 9.3 6 9 5.58 9c-.69 0-.65 1-.65 1H4s-.23-2 1.63-2"></svg:path>`,
})
export class VaadinCoinsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinComboboxIcon],svg[vaadin-combobox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1m-5 7H1V5h9zm3-2.6L11 7h4z"></svg:path><svg:path fill="currentColor" d="M2 6h1v4H2z"></svg:path>`,
})
export class VaadinComboboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCommentIcon],svg[vaadin-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1C3.6 1 0 3.5 0 6.5c0 2 2 3.8 4 4.8c0 2.1-2 2.8-2 2.8c2.8 0 4.4-1.3 5.1-2.1H8c4.4 0 8-2.5 8-5.5S12.4 1 8 1"></svg:path>`,
})
export class VaadinCommentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCommentEllipsisIcon],svg[vaadin-comment-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1C3.6 1 0 3.5 0 6.5c0 2 2 3.8 4 4.8c0 2.1-2 2.8-2 2.8c2.8 0 4.4-1.3 5.1-2.1H8c4.4 0 8-2.5 8-5.5S12.4 1 8 1M5 8c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class VaadinCommentEllipsisIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCommentEllipsisOIcon],svg[vaadin-comment-ellipsis-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.2q0 .15 0 0q0 .15 0 0M8.3 1C3.9 1 0 3.6 0 6.6c0 2 1.1 3.7 3 4.7s0 .1 0 .1c-.1 1.3-.9 1.7-.9 1.7L.3 14h2c2.5 0 4.3-1.1 5.1-1.9h.8c4.3 0 7.8-2.5 7.8-5.6S12.6 1 8.3 1m-.1 10.1H7.1l-.2.2c-.5.5-1.6 1.4-3.3 1.7c.3-.5.5-1.1.5-2v-.3l-.3-.1C2 9.7 1 8.3 1 6.6C1 4.2 4.5 2 8.3 2C12 2 15 4 15 6.6c0 2.4-3.1 4.5-6.8 4.5"></svg:path><svg:path fill="currentColor" d="M6 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinCommentEllipsisOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCommentOIcon],svg[vaadin-comment-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.2q0 .15 0 0q0 .15 0 0M8.3 1C3.9 1 0 3.6 0 6.6c0 2 1.1 3.7 3 4.7s0 .1 0 .1c-.1 1.3-.9 1.7-.9 1.7L.3 14h2c2.5 0 4.3-1.1 5.1-1.9h.8c4.3 0 7.8-2.5 7.8-5.6S12.6 1 8.3 1m-.1 10.1H7l-.2.2c-.5.5-1.6 1.4-3.3 1.7c.3-.5.5-1.1.5-2v-.3l-.3-.1C1.9 9.7 1 8.3 1 6.6C1 4.2 4.5 2 8.3 2C12 2 15 4 15 6.6c0 2.4-3.1 4.5-6.8 4.5"></svg:path>`,
})
export class VaadinCommentOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCommentsIcon],svg[vaadin-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3c-1.3 1.5-3.9 2.4-6.4 2.4h-.5c-.1.3-.1.5-.1.8c0 2 2.2 3.6 5 3.6h.6c.4.5 1.7 1.4 3.4 1.4c0 0-.8-.4-.8-1.8c0-.6 2-1.8 2-3.1"></svg:path><svg:path fill="currentColor" d="M13 4.6C13 2.1 10.2 0 6.6 0S0 2.1 0 4.6c0 1.7 2 3.2 3 4C3 10.4 1.6 11 1.6 11c2.3 0 3.6-1.1 4.2-1.8h.8c3.5.1 6.4-2 6.4-4.6"></svg:path>`,
})
export class VaadinCommentsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCommentsOIcon],svg[vaadin-comments-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 14c.6-.5 1.8-1.6 1.8-3.2c0-1.4-1.2-2.6-2.8-3.3c.5-.6.8-1.5.8-2.4C14 2.3 11.1 0 7.4 0C3.9 0 0 2.1 0 5.1c0 2.1 1.6 3.6 2.3 4.2c-.1 1.2-.6 1.7-.6 1.7L.5 12H2c1.2 0 2.2-.3 3-.7c.3 1.9 2.5 3.4 5.3 3.4h.5c.6.5 1.8 1.3 3.5 1.3h1.4l-1.1-.9s-.3-.3-.4-1.1m-3.9-.3C8 13.7 6 12.4 6 10.9v-.2c.2-.2.4-.3.5-.5h.7c2.1 0 4-.7 5.2-1.9c1.5.5 2.6 1.5 2.6 2.5s-.9 2-1.7 2.5l-.3.2v.3c0 .5.2.8.3 1.1c-1-.2-1.7-.7-1.9-1l-.1-.2zM7.4 1C10.5 1 13 2.9 13 5.1s-2.6 4.1-5.8 4.1H6.1l-.1.2c-.3.4-1.5 1.2-3.1 1.5c.1-.4.1-1 .1-1.8v-.3C2 8 .9 6.6.9 5.2C.9 3 4.1 1 7.4 1"></svg:path>`,
})
export class VaadinCommentsOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCompileIcon],svg[vaadin-compile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12h4v4H1zm5 0h4v4H6zm5 0h4v4h-4zM1 7h4v4H1zm0-5h4v4H1zm5 5h4v4H6zm1-6h4v4H7zm4 6h4v4h-4zm2-7h3v3h-3z"></svg:path>`,
})
export class VaadinCompileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCompressIcon],svg[vaadin-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.3 9.3l-5 5l1.4 1.4l5-5L8 12V8H4zm10.4-7.6L14.3.3l-4 4L9 3v4h4l-1.3-1.3z"></svg:path>`,
})
export class VaadinCompressIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCompressSquareIcon],svg[vaadin-compress-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0H0v12l1-1V1h10zM4 16h12V4l-1 1v10H5z"></svg:path><svg:path fill="currentColor" d="M7 9H2l1.8 1.8L0 14.6L1.4 16l3.8-3.8L7 14zm9-7.6L14.6 0l-3.8 3.8L9 2v5h5l-1.8-1.8z"></svg:path>`,
})
export class VaadinCompressSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinConnectIcon],svg[vaadin-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c-.8 0-1.4.3-2 .8L6.8 9c.1-.3.2-.7.2-1s-.1-.7-.2-1L10 5.2c.6.5 1.2.8 2 .8c1.7 0 3-1.3 3-3s-1.3-3-3-3s-3 1.3-3 3v.5L5.5 5.4C5.1 5.2 4.6 5 4 5C2.4 5 1 6.3 1 8c0 1.6 1.4 3 3 3c.6 0 1.1-.2 1.5-.4L9 12.5v.5c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3"></svg:path>`,
})
export class VaadinConnectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinConnectOIcon],svg[vaadin-connect-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 9c-1 0-1.8.4-2.4 1L6.9 8.3c.1-.3.1-.5.1-.8v-.4l2.9-1.3c.6.7 1.5 1.2 2.6 1.2C14.4 7 16 5.4 16 3.5S14.4 0 12.5 0S9 1.6 9 3.5v.4L6.1 5.2C5.5 4.5 4.6 4 3.5 4C1.6 4 0 5.6 0 7.5S1.6 11 3.5 11c1 0 1.8-.4 2.4-1L9 11.7v.8c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5S14.4 9 12.5 9m0-8C13.9 1 15 2.1 15 3.5S13.9 6 12.5 6S10 4.9 10 3.5S11.1 1 12.5 1m-9 9C2.1 10 1 8.9 1 7.5S2.1 5 3.5 5S6 6.1 6 7.5S4.9 10 3.5 10m9 5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class VaadinConnectOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinControllerIcon],svg[vaadin-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.951.249l.981-.195l.195.981l-.981.195zm2.926 14.717l.981-.195l.195.981l-.981.195zM.055 9.071l.981-.195l.195.981l-.981.195zm14.718-2.926l.981-.195l.195.981l-.981.195zm-3.302-4.248l.556-.831l.831.556l-.556.831zM3.139 14.441l.56-.83l.83.56l-.56.83zM1.069 3.989l.56-.83l.83.56l-.56.83zm12.478 8.31l.556-.831l.831.556l-.556.831zM8.875 1.039L9.07.058l.981.195l-.195.981zM5.953 15.745l.195-.981l.981.195l-.195.981zM.061 6.931l.195-.981l.981.195l-.195.981zm14.706 2.923l.195-.981l.981.195l-.195.981zM3.139 1.628l.831-.556l.556.831l-.831.556zm8.338 12.473l.831-.556l.556.831l-.831.556zM1.071 12.033l.831-.556l.556.831l-.831.556zM13.539 3.63l.83-.56l.56.83l-.83.56z"></svg:path><svg:path fill="currentColor" d="M14 8a5.99 5.99 0 0 0-2.258-4.681L8.42 8.31l-.84-.59l3.32-5A5.93 5.93 0 0 0 8 1.973a6 6 0 1 0 6 6.029z"></svg:path>`,
})
export class VaadinControllerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCopyIcon],svg[vaadin-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0v3h3z"></svg:path><svg:path fill="currentColor" d="M9 4H5V0H0v12h9zm4 0v3h3z"></svg:path><svg:path fill="currentColor" d="M12 4h-2v9H7v3h9V8h-4z"></svg:path>`,
})
export class VaadinCopyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCopyOIcon],svg[vaadin-copy-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h-3L7 0H0v13h6v3h10V6zM7 1l2 2H7zM1 12V1h5v3h3v8zm14 3H7v-2h3V4h2v3h3zm-2-9V4l2 2z"></svg:path>`,
})
export class VaadinCopyOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCopyrightIcon],svg[vaadin-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5S1.5 11.6 1.5 8S4.4 1.5 8 1.5M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M9.9 10.3c-.5.4-1.2.7-1.9.7c-1.7 0-3-1.3-3-3s1.3-3 3-3c.8 0 1.6.3 2.1.9l1.1-1.1c-.8-.8-2-1.3-3.2-1.3c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-.4 2.8-1z"></svg:path>`,
})
export class VaadinCopyrightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerLowerLeftIcon],svg[vaadin-corner-lower-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16L0 0v16z"></svg:path>`,
})
export class VaadinCornerLowerLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerLowerRightIcon],svg[vaadin-corner-lower-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16H0L16 0z"></svg:path>`,
})
export class VaadinCornerLowerRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerUpperLeftIcon],svg[vaadin-corner-upper-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 16L16 0H0z"></svg:path>`,
})
export class VaadinCornerUpperLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerUpperRightIcon],svg[vaadin-corner-upper-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16L0 0h16z"></svg:path>`,
})
export class VaadinCornerUpperRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCreditCardIcon],svg[vaadin-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm15 11H1V8h14zm0-8H1V3h14z"></svg:path><svg:path fill="currentColor" d="M10 11h3v1h-3zm-8 0h6v1H2z"></svg:path>`,
})
export class VaadinCreditCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCropIcon],svg[vaadin-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 .7V0h-.7l-3 3H5V0H3v3H0v2h3v8h8v3h2v-3h3v-2h-3V3.7zM5 5h5.3L5 10.3zm6 6H5.7L11 5.7z"></svg:path>`,
})
export class VaadinCropIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCrossCutleryIcon],svg[vaadin-cross-cutlery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.9 8.6c.6-.1 1.2-.4 1.6-.9l3.1-3.1c.4-.4.4-1 0-1.4l-.1-.2l-3 3c-.2.2-.6.2-.9 0s-.2-.6 0-.9l2.6-2.6c.2-.2.2-.6 0-.9c-.2-.2-.6-.2-.9 0l-2.6 2.6c-.2.2-.6.2-.9 0c-.2-.2-.2-.6 0-.9l3-3l-.1-.1c-.4-.4-1-.4-1.4 0L8.2 3.5c-.4.4-.7 1-.8 1.6L2.5.3c-.4-.4-1-.3-1.3 0L1 .5C-.4 1.9.1 4.7 2.5 7.1l.8.8c.4.4.9.7 1.5.8c-.5.4-.8.8-.8.8L.6 12.9c-.7.7-.7 1.9 0 2.6s1.9.7 2.6 0L6.5 12c.2-.2.7-.8 1.3-1.5c.3.4.5.6.5.6l4.3 4.3c.7.7 1.9.7 2.6 0s.7-1.9 0-2.6z"></svg:path>`,
})
export class VaadinCrossCutleryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCrosshairsIcon],svg[vaadin-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0h1v4L8 6l-.5-2zm1 16h-1v-4l.5-2l.5 2zM16 7.5v1h-4L10 8l2-.5zm-16 1v-1h4L6 8l-2 .5z"></svg:path><svg:path fill="currentColor" d="M8 2.5a5.5 5.5 0 1 1 0 11A5.5 5.5 0 0 1 2.5 8a5.51 5.51 0 0 1 5.499-5.5zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1"></svg:path>`,
})
export class VaadinCrosshairsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCssIcon],svg[vaadin-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.1 11C5.5 11 6 10 6 10l-.8-.5s-.3.5-1 .5S3 9.1 3 7.8C3 6.6 3.6 6 4.2 6c.5 0 .9.4.9.4l.8-.6S5.2 5 4.2 5C3.1 5 2 5.9 2 7.8S2.9 11 4.1 11m4.6-1.1c-.3.1-.7 0-1-.4l-.8.5c.4.6 1 1 1.6 1c.1 0 .3 0 .4-.1c.7-.2 1.1-.8 1.1-1.6c0-1.2-.8-1.6-1.3-1.8c-.5-.3-.7-.4-.7-.8s.1-.7.6-.7c.3 0 .6.4.6.4l.8-.6c-.2-.3-.7-.8-1.4-.8C7.7 5 7 5.6 7 6.6c0 1.1.7 1.5 1.2 1.8c.6.2.8.4.8.9c0 .3 0 .6-.3.6m4 0c-.3.1-.7 0-1-.4l-.8.5c.4.6 1 1 1.6 1c.1 0 .3 0 .4-.1c.7-.2 1.1-.8 1.1-1.6c0-1.2-.8-1.6-1.3-1.8c-.5-.3-.7-.4-.7-.8s.1-.7.6-.7c.3 0 .6.4.6.4l.8-.6c-.2-.3-.7-.8-1.4-.8c-.9 0-1.6.6-1.6 1.6c0 1.1.7 1.5 1.2 1.8c.6.2.8.4.8.9c0 .3 0 .6-.3.6M0 0v16h16V0zm15 15H1V1h14z"></svg:path>`,
})
export class VaadinCssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCtrlIcon],svg[vaadin-ctrl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm4.19 12C2.16 12 1 10.54 1 8s1.16-4 3.19-4h.029c.539 0 1.052.114 1.515.32l-.424.901a2.7 2.7 0 0 0-1.08-.22h-.042C2.38 5.001 2 6.631 2 8.001s.38 3 2.19 3c.497-.013.96-.145 1.366-.368l.444.898a3.94 3.94 0 0 1-1.806.47zM9 7H8v3.5a.9.9 0 0 0 1.005.499L8.999 12a1.82 1.82 0 0 1-1.998-1.428L6.999 7h-.51V6h.51V5h1v1h1v1zm2 2v3h-1V6h1v.92a2.45 2.45 0 0 1 2.005-.919l-.004 1a1.88 1.88 0 0 0-2 2.006zm4 3h-1V3h1z"></svg:path>`,
})
export class VaadinCtrlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCtrlAIcon],svg[vaadin-ctrl-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7V6H8V5H7v1h-.5v1H7v3.56a1.823 1.823 0 0 0 2.009 1.439L9 11a.9.9 0 0 1-.998-.495L8 7zm5-4h1v9h-1zm-1 3l-.085-.001c-.773 0-1.462.358-1.911.917L11 6.001h-1v6h1v-3a1.88 1.88 0 0 1 2.006-2l-.006-1zm-8.81 6C2.16 12 1 10.54 1 8s1.16-4 3.19-4h.029c.539 0 1.052.114 1.515.32l-.424.901a2.7 2.7 0 0 0-1.08-.22h-.042C2.38 5.001 2 6.631 2 8.001s.38 3 2.19 3c.497-.013.96-.145 1.366-.368l.444.898a3.94 3.94 0 0 1-1.806.47z"></svg:path>`,
})
export class VaadinCtrlAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCubeIcon],svg[vaadin-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 2v10l8 4l8-4V2zm6.4 2.6L8.5 4.8L1.9 2.6L8 1zM1 11.4V3.3l7 2.4v9.2z"></svg:path>`,
})
export class VaadinCubeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCubesIcon],svg[vaadin-cubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6V2L8 0L4 2v4L0 8v5l4 2l4-2l4 2l4-2V8zM8.09 1.12L11 2.56l-2.6 1.3l-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5zm-1 11.1l-3-1.5v-3.6l3 1.5zm.28-4L1.4 8.42L4 7.12l2.88 1.44zm7.72 4l-3-1.5v-3.6l3 1.5zm.28-4L9.4 8.42l2.6-1.3l2.88 1.44z"></svg:path>`,
})
export class VaadinCubesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCurlyBracketsIcon],svg[vaadin-curly-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.1 3.1c.2 1.3.4 1.6.4 2.9C2.5 6.8 1 7.5 1 7.5v1s1.5.7 1.5 1.5c0 1.3-.2 1.6-.4 2.9c-.3 2.1.8 3.1 1.8 3.1H6v-2s-1.8.2-1.8-1c0-.9.2-.9.4-2.9c.1-.9-.5-1.6-1.1-2.1c.6-.5 1.2-1.1 1.1-2c-.3-2-.4-2-.4-2.9C4.2 1.9 6 2 6 2V0H3.9C2.8 0 1.8 1 2.1 3.1m11.8 0c-.2 1.3-.4 1.6-.4 2.9c0 .8 1.5 1.5 1.5 1.5v1s-1.5.7-1.5 1.5c0 1.3.2 1.6.4 2.9c.3 2.1-.8 3.1-1.8 3.1H10v-2s1.8.2 1.8-1c0-.9-.2-.9-.4-2.9c-.1-.9.5-1.6 1.1-2.1c-.6-.5-1.2-1.1-1.1-2c.2-2 .4-2 .4-2.9C11.8 1.9 10 2 10 2V0h2.1c1.1 0 2.1 1 1.8 3.1"></svg:path>`,
})
export class VaadinCurlyBracketsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCursorIcon],svg[vaadin-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v13l3.31-3.47L10 16l1.37-.63L8.65 9H13z"></svg:path>`,
})
export class VaadinCursorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCursorOIcon],svg[vaadin-cursor-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.6L10.75 9H8.29l.63 1.41l1.8 4l-.91.34l-1.88-4.3l-.5-1.11l-1 .71L5 11.07zM4 0v13l3-2.14L9.26 16l2.8-1l-2.23-5H13z"></svg:path>`,
})
export class VaadinCursorOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinCutleryIcon],svg[vaadin-cutlery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 .8c0-.5-.4-.8-.8-.8H12c-1.7 0-3 1.9-3 4.7v.9c0 1 .5 1.9 1.4 2.4c-.3 1.2-.4 2.5-.4 2.5v4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4c0-.4-.1-1.4-.3-2.3c.2-.2.3-.4.3-.7zM7.2 0H7v3.5c0 .3-.2.5-.5.5S6 3.8 6 3.5v-3c0-.3-.2-.5-.5-.5S5 .2 5 .5v3c0 .3-.2.5-.5.5S4 3.8 4 3.5V0h-.2c-.4 0-.8.4-.8.8v3.7c0 1 .6 1.9 1.5 2.3c-.4 1.6-.5 3.7-.5 3.7v4c0 .8.7 1.5 1.5 1.5S7 15.3 7 14.5v-4c0-.5-.1-2.3-.4-3.7C7.4 6.4 8 5.5 8 4.5V.8c0-.4-.4-.8-.8-.8"></svg:path>`,
})
export class VaadinCutleryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDashboardIcon],svg[vaadin-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.1C16 5.7 12.4 2 8 2s-8 3.7-8 8.1c0 1.4.3 2.9.9 3.9h4.9c.5.6 1.3 1 2.2 1s1.7-.4 2.2-1h4.9c.6-1 .9-2.5.9-3.9M14 7v1l-4.1 3.5c0 .1.1.3.1.5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.3 0 .6.1.8.2L13 7zm-4-3h1v1h-1zM5 4h1v1H5zm-3 8H1v-1h1zm1-4H2V7h1zm12 4h-1v-1h1z"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinDashboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDatabaseIcon],svg[vaadin-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.5C14 3.328 11.314 4 8 4s-6-.672-6-1.5S4.686 1 8 1s6 .672 6 1.5"></svg:path><svg:path fill="currentColor" d="M8 5c-3.3 0-6-.7-6-1.5v3C2 7.3 4.7 8 8 8s6-.7 6-1.5v-3C14 4.3 11.3 5 8 5"></svg:path><svg:path fill="currentColor" d="M8 9c-3.3 0-6-.7-6-1.5v3c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-3C14 8.3 11.3 9 8 9"></svg:path><svg:path fill="currentColor" d="M8 13c-3.3 0-6-.7-6-1.5v3c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-3c0 .8-2.7 1.5-6 1.5"></svg:path>`,
})
export class VaadinDatabaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDateInputIcon],svg[vaadin-date-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1zm1 14H1V6h14z"></svg:path><svg:path fill="currentColor" d="M3 0h1v3H3zm9 0h1v3h-1zM3 8h1v5H3z"></svg:path>`,
})
export class VaadinDateInputIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDeindentIcon],svg[vaadin-deindent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5v-6l-4 3zM0 0h16v3H0zm6 4h10v3H6zm0 4h10v3H6zm-6 4h16v3H0z"></svg:path>`,
})
export class VaadinDeindentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDelIcon],svg[vaadin-del-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm3 12H1V3h2a4.11 4.11 0 0 1 3.999 4.517c.013.1.02.236.02.374A4.11 4.11 0 0 1 3.005 12zm10-3H9v.012c0 .607.211 1.164.564 1.603c.252.244.601.397.986.397l.074-.002a2.4 2.4 0 0 0 1.518-.631l.708.712a3.4 3.4 0 0 1-2.225.92l-.09.002a2.4 2.4 0 0 1-1.696-.702a3.52 3.52 0 0 1-.84-2.289v-.041c0-.968.344-1.855.915-2.547a2.14 2.14 0 0 1 1.578-.623l.086-.002a2.33 2.33 0 0 1 1.641.672c.47.532.762 1.23.78 1.996zm2 3h-1V3h1z"></svg:path><svg:path fill="currentColor" d="M3 4H2v7h1c.31 0 3-.12 3-3.5S3.12 4 3 4m7.49 2.8a1.43 1.43 0 0 0-1.339 1.192L11.93 8a1.73 1.73 0 0 0-.431-.831a1.36 1.36 0 0 0-.934-.371l-.079.002z"></svg:path>`,
})
export class VaadinDelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDelAIcon],svg[vaadin-del-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3h1v9h-1zM3 12H1V3h2a4.11 4.11 0 0 1 3.999 4.517c.013.1.02.236.02.374A4.11 4.11 0 0 1 3.005 12zm-1-1h1c.31 0 3-.12 3-3.5S3.12 4 3 4H2zm11-2v-.5a3.12 3.12 0 0 0-.783-2.003a2.33 2.33 0 0 0-1.732-.666l-.054-.001c-.594 0-1.132.241-1.521.631A3.98 3.98 0 0 0 8 9.001v.009c0 .881.322 1.686.854 2.306c.43.429 1.03.697 1.692.697l.089-.002a3.4 3.4 0 0 0 2.228-.922l-.712-.708a2.4 2.4 0 0 1-1.515.63l-.076.002c-.385 0-.734-.153-.99-.402A2.54 2.54 0 0 1 9 9.001zm-2.5-2.2l.066-.002c.362 0 .691.141.935.372c.209.224.361.505.427.818l-2.778.011a1.43 1.43 0 0 1 1.337-1.2z"></svg:path>`,
})
export class VaadinDelAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDentalChairIcon],svg[vaadin-dental-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 8.2c-.3-.1-.6-.2-.8-.2H8V7h3c0-.6-.4-1-1-1H6c0 .6.4 1 1 1v1c-.5 0-1-.2-1.2-.6L4.7 5.6C4.4 5.2 4 5 3.6 5H3v-.7c0-.3-.1-.5-.2-.8l-.3-.7C2.2 2.3 1.6 2 1 2H0l5 7c.4.6 1.1 1 1.8 1H8v1H7v2h-.6c-.9 0-1.8.4-2.4 1H3v1h11v-1h-1c-.6-.6-1.5-1-2.4-1H10v-2H9v-1h1.6c.2 0 .5.1.7.2l1.7.9c.9.5 2 .5 2.9 0h.1z"></svg:path>`,
})
export class VaadinDentalChairIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDesktopIcon],svg[vaadin-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H0v13h6v2H4v1h8v-1h-2v-2h6zM9 12H7v-1h2zm6-2H1V1h14z"></svg:path>`,
})
export class VaadinDesktopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDiamondIcon],svg[vaadin-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6h4l3 8.6zm16 0h-4l-3 8.6zm-8 9L5 6h6zM4 5H0l2-3zm12 0h-4l2-3zm-6 0H6l2-3zM3.34 2H7L5 5zM9 2h4l-2 3z"></svg:path>`,
})
export class VaadinDiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDiamondOIcon],svg[vaadin-diamond-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2H3L0 5.5L8 15l8-9.5zM4.64 5H1.75l1.52-1.78zm1.78 0L8 3.16L9.58 5zM10 6l-2 6.68L6 6zM5.26 6l1.89 6.44L1.73 6zm5.49 0h3.53l-5.43 6.44zm.62-1l1.37-1.78L14.25 5h-2.9zM12 3l-1.44 1.81L9.1 3zM5.43 4.83L4 3h2.9z"></svg:path>`,
})
export class VaadinDiamondOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDiplomaIcon],svg[vaadin-diploma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10.58a.37.37 0 0 0-.001-.332l-.479-.698q-.014-.02-.014-.045c0-.025.005-.032.014-.045l.48-.7a.37.37 0 0 0-.001-.332a.4.4 0 0 0-.236-.237l-.823-.301a.09.09 0 0 1-.06-.069V6.98a.39.39 0 0 0-.169-.299a.4.4 0 0 0-.231-.071h-.17l-.85.22a.1.1 0 0 1-.071 0l-.549-.65a.43.43 0 0 0-.63 0l-.55.65a.1.1 0 0 1-.071 0h.001l-.9-.23h-.108a.4.4 0 0 0-.234.071a.39.39 0 0 0-.168.298v.841a.09.09 0 0 1-.059.07l-.821.3a.4.4 0 0 0-.338.395q0 .091.039.167l.479.698q.014.02.014.045c0 .025-.005.032-.014.045l-.48.7a.37.37 0 0 0 .001.332a.4.4 0 0 0 .236.237l.823.301a.09.09 0 0 1 .06.069v.841a.39.39 0 0 0 .169.299a.4.4 0 0 0 .234.071h.168l.31-.07V16l1.53-2l1.47 2v-3.69l.31.08h.118a.4.4 0 0 0 .234-.071a.39.39 0 0 0 .168-.298v-.841a.09.09 0 0 1 .059-.07l.821-.3a.4.4 0 0 0 .289-.227z"></svg:path><svg:path fill="currentColor" d="M0 1v12h8l-.11-.05a1.13 1.13 0 0 1-.49-.867V12H1V2h14v10h-1.43v.08a1.13 1.13 0 0 1-.486.868L13 13h3V1z"></svg:path><svg:path fill="currentColor" d="M7.43 6.91a1.13 1.13 0 0 1 .486-.908A.2.2 0 0 1 8.001 6H3v1h4.43zM6.42 8H3v1h3.36a.99.99 0 0 1-.047-.837A.3.3 0 0 1 6.42 8M3 4h10v1H3z"></svg:path>`,
})
export class VaadinDiplomaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDiplomaScrollIcon],svg[vaadin-diploma-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.61 8.41a5.5 5.5 0 0 1-1.454-.424A60 60 0 0 1 15.61 4.43l.1-.07l.06-.11a2.924 2.924 0 0 0-.765-3.496a2.92 2.92 0 0 0-3.459-.376l-.126.133A55 55 0 0 1 6.512 6.41a50 50 0 0 1-6.018 4.592L.1 11.25v.23a4.53 4.53 0 0 0 .7 3.655A2.83 2.83 0 0 0 3.007 16a2 2 0 0 0 1.778-.902C5.03 14.79 6.85 12.49 8.79 10.39c.268.464.476 1.003.594 1.575a6.3 6.3 0 0 1-.399 3.078L10.67 13L12 14a12.1 12.1 0 0 0-.584-3.336a5.3 5.3 0 0 0-.915-1.214c.406.346.871.643 1.372.874c.94.338 1.989.572 3.076.672L14 9.73L16 8a9 9 0 0 1-2.777.431q-.324 0-.642-.022zm-.45-7.23a1.9 1.9 0 0 1 .842-.194c.506 0 .966.196 1.309.516a1.93 1.93 0 0 1 .595 2.192c-.486.307-2.346 1.717-4.146 3.307a2 2 0 0 0-.668-1.298a1.6 1.6 0 0 0-1.24-.372A58 58 0 0 0 12.16 1.18M2.7 11.81a.46.46 0 0 1 .262-.082l.04.002h.068c.179.052.334.142.461.261l-.871.719a1.3 1.3 0 0 1-.119-.716a.33.33 0 0 1 .158-.183zM4 14.5a1 1 0 0 1-1.005.499a1.85 1.85 0 0 1-1.485-.54a3.43 3.43 0 0 1-.583-1.922q.001-.377.077-.73l.706-.457c-.094.14-.164.304-.199.481a3 3 0 0 0 .535 1.958l.354.44l1.7-1.4a2.4 2.4 0 0 1-.106 1.685zm.86-2.45a2.83 2.83 0 0 0-1.54-1.274c-.071-.012-.13-.016-.19-.016s-.119.004-.177.01a1.6 1.6 0 0 0-.35 0a45 45 0 0 0 3.988-3.052c.398.071.812.25 1.131.533c.297.313.48.739.48 1.209l-.002.094a54 54 0 0 0-3 3.506a2.8 2.8 0 0 0-.357-1.023z"></svg:path>`,
})
export class VaadinDiplomaScrollIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDiscIcon],svg[vaadin-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m7 8c0 1.1-.2 2.1-.7 3l-2.7-1.2c.2-.6.4-1.2.4-1.8c0-2.2-1.8-4-4-4c-.5 0-.9.1-1.4.3L5.4 1.5c.6-.2 1.2-.4 1.8-.5l.3 3H8V1c3.9 0 7 3.1 7 7M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3M1 8c0-1.1.2-2.1.7-3l2.7 1.2C4.2 6.8 4 7.4 4 8c0 2.2 1.8 4 4 4c.5 0 .9-.1 1.4-.3l1.2 2.8c-.6.2-1.2.4-1.8.5l-.3-3H8v3c-3.9 0-7-3.1-7-7"></svg:path><svg:path fill="currentColor" d="M10 8a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8"></svg:path>`,
})
export class VaadinDiscIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDoctorIcon],svg[vaadin-doctor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11.3c-1-1.9-2-1.6-3.1-1.7c.1.3.1.6.1 1c1.6.4 2 2.3 2 3.4v1h-2v-1h1s0-2.5-1.5-2.5S9 13.9 9 14h1v1H8v-1c0-1.1.4-3.1 2-3.4c0-.6-.1-1.1-.2-1.3c-.2-.1-.4-.3-.4-.6c0-.6.8-.4 1.4-1.5c0 0 .9-2.3.6-4.3h-1c0-.2.1-.3.1-.5s0-.3-.1-.5h.8C10.9.9 9.9 0 8 0S5.1.9 4.7 2h.8c0 .2-.1.3-.1.5s0 .3.1.5h-1c-.2 2 .6 4.3.6 4.3c.6 1 1.4.8 1.4 1.5c0 .5-.5.7-1.1.8c-.2.2-.4.6-.4 1.4v1.2c.6.2 1 .8 1 1.4c0 .7-.7 1.4-1.5 1.4S3 14.3 3 13.5c0-.7.4-1.2 1-1.4v-1.2c0-.5.1-.9.2-1.3c-.7.1-1.5.4-2.2 1.7c-.6 1.1-.9 4.7-.9 4.7h13.7c.1 0-.2-3.6-.8-4.7M6.5 2.5C6.5 1.7 7.2 1 8 1s1.5.7 1.5 1.5S8.8 4 8 4s-1.5-.7-1.5-1.5"></svg:path><svg:path fill="currentColor" d="M5 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path>`,
})
export class VaadinDoctorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDoctorBriefcaseIcon],svg[vaadin-doctor-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 12l-1.4-6.7c-.2-.7-.9-1.3-1.7-1.3H11V2.8c0-1-.8-1.8-1.8-1.8H6.8C5.8 1 5 1.8 5 2.8V4H3.1c-.8 0-1.5.6-1.7 1.3L0 12c-.2 1 .6 2 1.7 2h12.5c1.2 0 2-1 1.8-2M6 2.8c0-.4.4-.8.8-.8h2.4c.4 0 .8.4.8.8V4H6zm5 7.2H9v2H7v-2H5V8h2V6h2v2h2z"></svg:path>`,
})
export class VaadinDoctorBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDollarIcon],svg[vaadin-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.2 6.8c-.1 0-.1-.1-.2-.1V3.6c1.2.1 2.2.6 2.2.6l.9-1.8c-.1 0-1.5-.8-3.1-.8V0H7v1.6c-.8.2-1.4.5-2 .9c-.6.6-1 1.4-1 2.3c0 .7.2 2.3 3 3.6v3.9c-.9-.2-2-.7-2.4-.9l-1 1.7c.2.1 1.8 1 3.4 1.2V16h1v-1.7c2.3-.3 3.6-2.1 3.6-3.8c0-1.5-1-2.7-3.4-3.7M7 6.2c-.8-.5-1-1-1-1.3c0-.4.1-.7.4-.9l.6-.3zm1 6.1V8.9c1.1.5 1.6 1.1 1.6 1.6c0 .6-.3 1.6-1.6 1.8"></svg:path>`,
})
export class VaadinDollarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDotCircleIcon],svg[vaadin-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4"></svg:path><svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path>`,
})
export class VaadinDotCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDownloadIcon],svg[vaadin-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h-5.5L8 12.5L5.5 10H0v6h16zM4 14H2v-2h2z"></svg:path><svg:path fill="currentColor" d="M10 6V0H6v6H3l5 5l5-5z"></svg:path>`,
})
export class VaadinDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDownloadAltIcon],svg[vaadin-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14h16v2H0zm8-1l5-5h-3V0H6v8H3z"></svg:path>`,
})
export class VaadinDownloadAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinDropIcon],svg[vaadin-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0S3 8.2 3 11s2.2 5 5 5s5-2.2 5-5S8 0 8 0m.9 14.9l-.2-1c1.4-.3 2.4-1.7 2.4-3.2c0-.3-.1-1.1-.8-2.6l.9-.4c.6 1.4.8 2.4.8 3c0 2-1.3 3.8-3.1 4.2"></svg:path>`,
})
export class VaadinDropIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEditIcon],svg[vaadin-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4s0-1-1-2s-1.9-1-1.9-1L12 2.1V0H0v16h12V8zm-9.7 7.4l-.6-.6l.3-1.1l1.5 1.5zm.9-1.9l-.6-.6l5.2-5.2c.2.1.4.3.6.5zm6.9-7l-.9 1c-.2-.2-.4-.3-.6-.5l.9-.9c.1.1.3.2.6.4M11 15H1V1h10v2.1L5.1 9L4 13.1L8.1 12L11 9z"></svg:path>`,
})
export class VaadinEditIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEjectIcon],svg[vaadin-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h14L8 1zm0 1h14v3H1z"></svg:path>`,
})
export class VaadinEjectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinElasticIcon],svg[vaadin-elastic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.7 16c-1.7 0-3.1-.8-4-2.1c-1.1-1.7-.9-4 .4-5.8q1.35-1.95 3.6-2.4c1.2-.3 2.2-1.1 2.5-2.2c.2-.8.7-1.5 1.3-2C9.4.5 10.7 0 12 0c1.1 0 2.2.4 2.9 1.2c1.5 1.6 1.5 4.2-.1 6c-.5.6-1.2 1.1-2 1.4c-1.2.5-2.2 1.6-2.6 3c-.3 1-.8 1.9-1.5 2.6c-1.1 1.2-2.6 1.8-4 1.8M12 1c-1 0-2 .4-2.8 1.2c-.5.5-.8 1-1 1.6c-.5 1.5-1.8 2.5-3.3 2.9c-1.2.2-2.2.9-3 2C.8 10.2.7 12 1.6 13.4c.6 1 1.8 1.6 3.1 1.6c1.2 0 2.4-.5 3.3-1.4c.6-.6 1.1-1.4 1.3-2.2c.4-1.7 1.6-3 3.2-3.6c.6-.2 1.2-.7 1.6-1.2c1.2-1.4 1.3-3.5.1-4.7c-.6-.6-1.4-.9-2.2-.9"></svg:path>`,
})
export class VaadinElasticIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisCircleIcon],svg[vaadin-ellipsis-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M6 9H4V7h2zm3 0H7V7h2zm3 0h-2V7h2z"></svg:path>`,
})
export class VaadinEllipsisCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisCircleOIcon],svg[vaadin-ellipsis-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M4 7h2v2H4zm3 0h2v2H7zm3 0h2v2h-2z"></svg:path>`,
})
export class VaadinEllipsisCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisDotsHIcon],svg[vaadin-ellipsis-dots-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a2 2 0 1 1-3.999.001A2 2 0 0 1 4 8m6 0a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8m6 0a2 2 0 1 1-3.999.001A2 2 0 0 1 16 8"></svg:path>`,
})
export class VaadinEllipsisDotsHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisDotsVIcon],svg[vaadin-ellipsis-dots-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 10 14"></svg:path>`,
})
export class VaadinEllipsisDotsVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisHIcon],svg[vaadin-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6h4v4H0zm6 0h4v4H6zm6 0h4v4h-4z"></svg:path>`,
})
export class VaadinEllipsisHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisVIcon],svg[vaadin-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h4v4H6zm0 6h4v4H6zm0 6h4v4H6z"></svg:path>`,
})
export class VaadinEllipsisVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnterIcon],svg[vaadin-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v6H1v10h14V0zm8 11H7v2l-3-2.5L7 8v2h4V7h1z"></svg:path>`,
})
export class VaadinEnterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnterArrowIcon],svg[vaadin-enter-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 9l7 4v-3h9V3l-3 2v2H7V4z"></svg:path>`,
})
export class VaadinEnterArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeIcon],svg[vaadin-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h16v2.4l-8 4l-8-4z"></svg:path><svg:path fill="currentColor" d="m0 14l5.5-4.8L8 10.6l2.5-1.4L16 14zm4.6-5.2L0 6.5V13zm6.8 0L16 6.5V13z"></svg:path>`,
})
export class VaadinEnvelopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeOIcon],svg[vaadin-envelope-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3v11h16V3zm1 4.1l3.9 2L1 12.5zm.9 5.9l4-3.5L8 10.6l2.1-1.1l4 3.5zm13.1-.5L11.1 9L15 7zm0-6.6L8 9.4L1 5.9V4h14z"></svg:path>`,
})
export class VaadinEnvelopeOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeOpenIcon],svg[vaadin-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.7v3.7l2-1V5zM2 3.8L0 5v1.5l2 1zM11.2 2L8 0L4.8 2zM13 3H3v4.9l3.4 1.7L8 8.4l1.6 1.2L13 7.9zm3 4.6l-5.5 2.7l5.5 4.4zm-8 2L0 16h16zm-2.5.7L0 7.6v7.1z"></svg:path>`,
})
export class VaadinEnvelopeOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeOpenOIcon],svg[vaadin-envelope-open-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.7V3h-1.5L8 0L3.4 3H2v.7L0 5v11h16V5.1zM8 1.2L10.7 3H5.2zM3 4h10v3.7L9.5 9.4L8 8.1L6.5 9.5L3 7.8zM1 5.5l1-.7v2.4l-1-.4zm0 2.4l4.6 2.3l-4.6 4zm.9 7.1L8 9.7l6.1 5.3zm13.1-.8l-4.7-4.1L15 7.8zm0-7.5l-1 .5V4.9l1 .7z"></svg:path>`,
})
export class VaadinEnvelopeOpenOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopesIcon],svg[vaadin-envelopes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14H2v-1h13V4h1z"></svg:path><svg:path fill="currentColor" d="M14 10.77V5.29L9.32 7.47zM8.28 7.96L7 8.55l-1.28-.59L0 11.99V12l14-.01zM7 7.45l7-3.27V2H0v2.18zm-2.32.02L0 5.29v5.48z"></svg:path>`,
})
export class VaadinEnvelopesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopesOIcon],svg[vaadin-envelopes-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H0v10h14zM5.71 8L7 8.55L8.29 8L13 11H1zM1 9.83v-4l3.64 1.63zm8.36-2.37L13 5.78v4zM13 3v1.68L7 7.45L1 4.68V3z"></svg:path><svg:path fill="currentColor" d="M15 4v9H2v1h14V4z"></svg:path>`,
})
export class VaadinEnvelopesOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEraserIcon],svg[vaadin-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.1 14l6.4-7.2c.6-.7.6-1.8-.1-2.5l-2.7-2.7c-.3-.4-.8-.6-1.3-.6H8.6c-.5 0-1 .2-1.4.6L.5 9.2c-.6.7-.6 1.9.1 2.5l2.7 2.7c.3.4.8.6 1.3.6H16v-1zm-1.3-.1s0-.1 0 0l-2.7-2.7c-.4-.4-.4-.9 0-1.3L7.5 6h-1l-3 3.3c-.6.7-.6 1.7.1 2.4L5.9 14H4.6c-.2 0-.4-.1-.6-.2L1.2 11c-.3-.3-.3-.8 0-1.1L4.7 6h1.8L10 2h1L7.5 6l3.1 3.7l-3.5 4c-.1.1-.2.1-.3.2"></svg:path>`,
})
export class VaadinEraserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEscIcon],svg[vaadin-esc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm5 4H2v3h3v1H2v3h3v1H1V3h4zm5 6.54c-.067.511-.364.94-.782 1.186a2.4 2.4 0 0 1-1.129.276L7.996 12a6.3 6.3 0 0 1-2.038-.425l.403-.915c.435.202.945.319 1.482.319q.491-.001.943-.125a.66.66 0 0 0 .215-.484c.07-.43-.22-.62-1.17-1c-.83-.29-2.04-.76-1.83-2.08c.072-.594.46-1.082.989-1.296a3.25 3.25 0 0 1 2.649.552L9.07 7.3a2.32 2.32 0 0 0-1.663-.368a.62.62 0 0 0-.387.547c-.08.401.14.581 1.15 1.001c.83.3 2.02.75 1.83 2.06m2.67.18c.345.176.752.279 1.183.279q.44-.002.835-.134l.311.945c-.383.121-.823.19-1.279.19h-.001l-.089.001c-.583 0-1.124-.18-1.57-.488a3 3 0 0 1-1.061-2.524a2.87 2.87 0 0 1 1.044-2.516a3.5 3.5 0 0 1 1.72-.446c.443 0 .868.081 1.259.23l-.374.922a2.55 2.55 0 0 0-2.016.066a2.01 2.01 0 0 0-.633 1.764a2.06 2.06 0 0 0 .637 1.708z"></svg:path>`,
})
export class VaadinEscIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEscAIcon],svg[vaadin-esc-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a6.3 6.3 0 0 1-2.043-.425l.403-.915c.435.202.945.319 1.482.319q.491-.001.943-.125A.66.66 0 0 0 9 10.37c.07-.43-.22-.62-1.17-1C7 9.08 5.79 8.61 6 7.29c.072-.594.46-1.082.989-1.296a3.25 3.25 0 0 1 2.649.552l-.569.754a2.32 2.32 0 0 0-1.663-.368a.62.62 0 0 0-.387.547c-.08.401.14.581 1.15 1.001c.85.33 2 .77 1.8 2.08c-.067.511-.364.94-.782 1.186A2.4 2.4 0 0 1 7.994 12zm5.71 0l-.089.001c-.583 0-1.124-.18-1.57-.488a3 3 0 0 1-1.05-2.524a2.87 2.87 0 0 1 1.044-2.516a3.5 3.5 0 0 1 1.72-.446c.443 0 .868.081 1.259.23l-.374.922a2.55 2.55 0 0 0-2.016.066a2.01 2.01 0 0 0-.633 1.764a2.05 2.05 0 0 0 .647 1.748c.346.177.754.28 1.185.28q.44-.002.835-.134l.331.905c-.383.121-.823.19-1.279.19h-.012zM5 4V3H1v9h4v-1H2V8h3V7H2V4z"></svg:path>`,
})
export class VaadinEscAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEuroIcon],svg[vaadin-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.89 3a5.45 5.45 0 0 1 3.127 1.011L14 1.69a7.4 7.4 0 0 0-3.129-.686a7.48 7.48 0 0 0-7.323 5.947L2 7v1h1.41v.5a4 4 0 0 0 0 .512L1.999 9v1h1.54c.882 3.353 3.805 5.818 7.331 5.999a7.4 7.4 0 0 0 3.175-.708L14 13a5.43 5.43 0 0 1-3.108 1a5.91 5.91 0 0 1-5.28-3.959L12 10V9H5.41a3 3 0 0 1 .001-.511L5.41 8H12V7H5.6c.678-2.325 2.788-3.996 5.29-4"></svg:path>`,
})
export class VaadinEuroIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExchangeIcon],svg[vaadin-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v2H3v2L0 6l3-3v2zM0 12v-2h13V8l3 3l-3 3v-2z"></svg:path>`,
})
export class VaadinExchangeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExclamationIcon],svg[vaadin-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h4v4l-1 7H7L6 4zm4 14a2 2 0 1 1-3.999.001A2 2 0 0 1 10 14"></svg:path>`,
})
export class VaadinExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExclamationCircleIcon],svg[vaadin-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m1 13H7v-2h2zm0-3H7V3h2z"></svg:path>`,
})
export class VaadinExclamationCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExclamationCircleOIcon],svg[vaadin-exclamation-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M7 3h2v7H7zm0 8h2v2H7z"></svg:path>`,
})
export class VaadinExclamationCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExitIcon],svg[vaadin-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h-1.7c-.2 0-.4-.1-.6-.2l-1.3-1.3c-.2-.3-.6-.5-1.1-.5H9c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7l-.2.3h-2c-1.1 0-2.3.5-3 1.5l-.6.8c-.4.4-.2 1 .2 1.3c.4.2.9.1 1.2-.3l.5-.7Q4.55 6 5.3 6h.8l-.7 1.6c-.3.6-.4 1.2-.4 1.9v2c0 .3-.2.5-.5.5H2c-.6 0-1 .4-1 1s.4 1 1 1h3.5c.8 0 1.5-.7 1.5-1.5V10l3.8 4.5c.6.9 1.7 1.5 2.8 1.5h.9L9.1 9.3c-.3-.4-.2-.8 0-1.3l.6-1.5l.7.8c.4.4 1 .7 1.6.7h2c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class VaadinExitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExitOIcon],svg[vaadin-exit-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c1.1 0 2 .9 2 2c0 .9-.6 1.7-1.5 1.9V4c.4 0 .7.2 1 .5l1.3 1.3c.1.1.3.2.5.2H15V0z"></svg:path><svg:path fill="currentColor" d="M11.8 14.5L8 10v2.5c0 .8-.7 1.5-1.5 1.5H3c-.6 0-1-.4-1-1s.4-1 1-1h2.5c.3 0 .5-.2.5-.5v-2c0-.7.1-1.3.4-2L7.1 6h-.8q-.75 0-1.2.6l-.5.7c-.2.4-.7.5-1.2.3c-.4-.3-.6-.9-.2-1.3l.6-.8C4.5 4.5 5.7 4 6.9 4h2l.1-.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2H3v4.9l-.6.8c-.3.4-.5.9-.4 1.5c.1.5.4 1 .9 1.3V11c-1.1 0-2 .9-2 2s.9 2 2 2v1h11.6c-1.1 0-2.1-.6-2.7-1.5"></svg:path><svg:path fill="currentColor" d="m11.4 7.3l-.7-.8l-.6 1.5c-.2.5-.3.9 0 1.3l4.9 6.1V8h-2.1c-.6 0-1.1-.2-1.5-.7"></svg:path>`,
})
export class VaadinExitOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExpandIcon],svg[vaadin-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1h-4l1.3 1.3l-4.5 4.5l1.4 1.4l4.5-4.5L15 5zM6.8 7.8l-4.5 4.5L1 11v4h4l-1.3-1.3l4.5-4.5z"></svg:path>`,
})
export class VaadinExpandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExpandFullIcon],svg[vaadin-expand-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.3 6.7l1.4-1.4l-3-3L5 1H1v4l1.3-1.3zm1.4 4L5.3 9.3l-3 3L1 11v4h4l-1.3-1.3zm4-1.4l-1.4 1.4l3 3L11 15h4v-4l-1.3 1.3zM11 1l1.3 1.3l-3 3l1.4 1.4l3-3L15 5V1z"></svg:path>`,
})
export class VaadinExpandFullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExpandSquareIcon],svg[vaadin-expand-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v9l1-1V3h7zM5 14h9V5l-1 1v7H6z"></svg:path><svg:path fill="currentColor" d="M16 0h-5l1.8 1.8l-4.5 4.5l1.4 1.4l4.5-4.5L16 5zM7.7 9.7L6.3 8.3l-4.5 4.5L0 11v5h5l-1.8-1.8z"></svg:path>`,
})
export class VaadinExpandSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExternalBrowserIcon],svg[vaadin-external-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10L8.1 6.8L4.8 10H7v1.8c0 1.7-.9 4.2-4 4.2c4.8 0 6-1.4 6-4.3V10z"></svg:path><svg:path fill="currentColor" d="M0 0v13h6v-1H1V3h14v9h-5v1h6V0zm2 2H1V1h1zm11 0H3V1h10z"></svg:path>`,
})
export class VaadinExternalBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinExternalLinkIcon],svg[vaadin-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16V5l-1 1v9H1V3h9l1-1H0v14z"></svg:path><svg:path fill="currentColor" d="M16 0h-5l1.8 1.8L6 8.6L7.4 10l6.8-6.8L16 5z"></svg:path>`,
})
export class VaadinExternalLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEyeIcon],svg[vaadin-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.9C1.3 3.9 0 9 0 9s2.2 4.1 7.9 4.1s8.1-4 8.1-4s-1.3-5.2-8-5.2M5.3 5.4c.5-.3 1.3-.3 1.3-.3s-.5.9-.5 1.6s.2 1.1.2 1.1L5.2 8s-.3-.5-.3-1.2c0-.8.4-1.4.4-1.4m2.6 6.7c-4.1 0-6.2-2.3-6.8-3.2c.3-.7 1.1-2.2 3.1-3.2c-.1.4-.2.8-.2 1.3c0 2.2 1.8 4 4 4s4-1.8 4-4c0-.5-.1-.9-.2-1.3c2 .9 2.8 2.5 3.1 3.2c-.7.9-2.8 3.2-7 3.2"></svg:path>`,
})
export class VaadinEyeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEyeSlashIcon],svg[vaadin-eye-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.9 5.2l-.8.8c1.7.9 2.5 2.3 2.8 3c-.7.9-2.8 3.1-7 3.1c-.7 0-1.2-.1-1.8-.2l-.8.8c.8.3 1.7.4 2.6.4c5.7 0 8.1-4 8.1-4s-.6-2.4-3.1-3.9"></svg:path><svg:path fill="currentColor" d="M12 7.1c0-.3 0-.6-.1-.8L7.1 11c.3 0 .6.1.9.1c2.2 0 4-1.8 4-4M15.3 0l-4.4 4.4C10.1 4.2 9.1 4 8 4C1.3 4 0 9.1 0 9.1s1 1.8 3.3 3L0 15.3v.7h.7L16 .7V0zM4 11.3C2.4 10.6 1.5 9.5 1.1 9c.3-.7 1.1-2.2 3.1-3.2c-.1.4-.2.8-.2 1.3c0 1.1.5 2.2 1.3 2.9zm2.2-3.4l-1 .2s-.3-.5-.3-1.2c0-.8.4-1.5.4-1.5c.5-.3 1.3-.3 1.3-.3s-.5.9-.5 1.7c-.1.7.1 1.1.1 1.1"></svg:path>`,
})
export class VaadinEyeSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinEyedropperIcon],svg[vaadin-eyedropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1c-1.8-1.8-3.7-.7-4.6.1c-.4.4-.7.9-.7 1.5c0 1.1-1.1 1.8-2.1 1.5L7.5 4l-.7.8l.7.7l-6 6l-.8 2.3l-.7.7L1.5 16l.8-.8l2.3-.8l6-6l.7.7l.7-.6l-.1-.2c-.3-1 .4-2.1 1.5-2.1c.6 0 1.1-.2 1.4-.6c.9-.9 2-2.8.2-4.6M3.9 13.6l-2 .7l-.2.1l.1-.2l.7-2l5.8-5.8l1.5 1.5z"></svg:path>`,
})
export class VaadinEyedropperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFacebookIcon],svg[vaadin-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 16V8.5h-2V5.8h2V3.5C7.2 1.7 8.4 0 11.1 0c1.1 0 1.9.1 1.9.1l-.1 2.5h-1.7c-1 0-1.1.4-1.1 1.2v2H13l-.1 2.7h-2.8V16z"></svg:path>`,
})
export class VaadinFacebookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFacebookSquareIcon],svg[vaadin-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm12.9 8.4h-2.1V14H8.7V8.4H7.2v-2h1.5V4.7c0-1.5.9-2.7 2.9-2.7c.8 0 1.4.1 1.4.1V4h-1.3c-.7 0-.8.3-.8.9v1.5H13z"></svg:path>`,
})
export class VaadinFacebookSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFactoryIcon],svg[vaadin-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 1.3c-.6.3-.8 1.1-.4 1.5c.5-.9 1.3-.6 2.5.4c.8.7 1.9.1 1.9.1s.2 1.2 1.7 1.4c1.7.2 2.3-.8 2.3-.8s.4 1 1.9.4c1.1-.4.7-1.1.7-1.1s1 0 1-.7c0-.9-1.1-.8-1.1-.8s.2-1-.9-1.1c-1-.1-1.3.5-1.3.5S12.4 0 10.9 0C9.5 0 9 1.3 9 1.3S8.6.7 7.4.7c-.9 0-1.3.7-1.3.7S5 .9 4.4 1.3"></svg:path><svg:path fill="currentColor" d="M12 12.1V10l-4 2.1V10H5.6L5 3H3l-.6 7H0v6h16v-6zM6 14H2v-2h4z"></svg:path>`,
})
export class VaadinFactoryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFamilyIcon],svg[vaadin-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 7.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 9.5 7.5M14.27 4h-2.54A1.73 1.73 0 0 0 10 5.73V9a1 1 0 0 0 1 1v6h4v-6a1 1 0 0 0 1-1V5.73A1.73 1.73 0 0 0 14.27 4"></svg:path><svg:path fill="currentColor" d="M15 2a2 2 0 1 1-3.999.001A2 2 0 0 1 15 2M4.27 5H1.73a1.73 1.73 0 1 0 .001 3.461A1.73 1.73 0 0 0 1.73 5A1.73 1.73 0 0 0 0 6.73V9a1 1 0 0 0 1 1l-1 3h1v3h4v-3h1l-1-3a1 1 0 0 0 1-1V6.73A1.73 1.73 0 0 0 4.27 5"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 1 1-3.999.001A2 2 0 0 1 5 3m2 10v3h2v-3a1 1 0 0 0 1-1v-1.54A1.46 1.46 0 0 0 8.54 9H7.46A1.46 1.46 0 0 0 6 10.46V12a1 1 0 0 0 1 1"></svg:path>`,
})
export class VaadinFamilyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFastBackwardIcon],svg[vaadin-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15V1L9 8zm-7 0V1L2 8zM0 1h2v14H0z"></svg:path>`,
})
export class VaadinFastBackwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFastForwardIcon],svg[vaadin-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14l7-7zm7 0v14l7-7zm7 0h2v14h-2z"></svg:path>`,
})
export class VaadinFastForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFemaleIcon],svg[vaadin-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path><svg:path fill="currentColor" d="M10 8V6.5l1.8 1.8c.3.3.7.3 1 0s.3-.8 0-1l-2.6-2.6c-.4-.5-1-.7-1.7-.7h-1c-.7 0-1.3.2-1.7.7L3.2 7.3c-.3.3-.3.8 0 1c.3.3.7.3 1 0L6 6.5V8l-4 5h4v3h4v-3h4z"></svg:path>`,
})
export class VaadinFemaleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileIcon],svg[vaadin-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5h5v11H2V0h7zm1-1V0l4 4z"></svg:path>`,
})
export class VaadinFileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileAddIcon],svg[vaadin-file-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15H2V1h6v4h4v1h1V4L9 0H1v16h12v-2h-1zM9 1l3 3H9z"></svg:path><svg:path fill="currentColor" d="M13 7h-2v2H9v2h2v2h2v-2h2V9h-2z"></svg:path>`,
})
export class VaadinFileAddIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileCodeIcon],svg[vaadin-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M6.2 13h-.7l-2-2.5l2-2.5h.7l-2 2.5zm3.6 0h.7l2-2.5l-2-2.5h-.7l2 2.5zm-3.1 1h.6l2.1-7h-.8z"></svg:path>`,
})
export class VaadinFileCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileFontIcon],svg[vaadin-file-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M5 7v2h2v5h2V9h2V7z"></svg:path>`,
})
export class VaadinFileFontIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileMovieIcon],svg[vaadin-file-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M10 10V8H4v5h6v-2l2 2V8z"></svg:path>`,
})
export class VaadinFileMovieIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileOIcon],svg[vaadin-file-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path>`,
})
export class VaadinFileOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFilePictureIcon],svg[vaadin-file-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M4 11.5V14h8v-1.7s.1-1.3-1.3-1.5c-1.3-.2-1.5.4-2.5.5c-.8 0-.6-1.3-2.2-1.3c-1.2 0-2 1.5-2 1.5m8-3a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 12 8.5"></svg:path>`,
})
export class VaadinFilePictureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFilePresentationIcon],svg[vaadin-file-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zm3 15H3V1h6v4h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M9 6H7v1H4v6h2v1h1v-1h2v1h1v-1h2V7H9zm2 2v4H5V8z"></svg:path><svg:path fill="currentColor" d="M7 9v2l2-1z"></svg:path>`,
})
export class VaadinFilePresentationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileProcessIcon],svg[vaadin-file-process-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0H5v6h.7l.2.7l.1.1V1h5v4h4v9H9l.3.5l-.5.5H16V4zm0 4V1l3 3zm-6.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M7.9 12.4L9 12v-1l-1.1-.4c-.1-.3-.2-.6-.4-.9l.5-1l-.7-.7l-1 .5c-.3-.2-.6-.3-.9-.4L5 7H4l-.4 1.1c-.3.1-.6.2-.9.4l-1-.5l-.7.7l.5 1.1c-.2.3-.3.6-.4.9L0 11v1l1.1.4c.1.3.2.6.4.9l-.5 1l.7.7l1.1-.5c.3.2.6.3.9.4L4 16h1l.4-1.1c.3-.1.6-.2.9-.4l1 .5l.7-.7l-.5-1.1c.2-.2.3-.5.4-.8m-3.4 1.1c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class VaadinFileProcessIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileRefreshIcon],svg[vaadin-file-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zm3 15H3V1h6v4h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M4.7 7.7L4 7v3h3L5.8 8.8C6.2 8 7.1 7.5 8 7.5c1.4 0 2.5 1.1 2.5 2.5H12c0-2.2-1.8-4-4-4c-1.3 0-2.5.7-3.3 1.7m5.1 4.1c-.5.5-1.1.8-1.8.7c-1 0-1.9-.6-2.3-1.5H4.1c.4 1.7 2 3 3.8 3c1.1 0 2.1-.5 2.8-1.2L12 14v-3H9z"></svg:path>`,
})
export class VaadinFileRefreshIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileRemoveIcon],svg[vaadin-file-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15H2V1h6v4h4v2.59l1-1V4L9 0H1v16h12v-2.59l-1-1zM9 1l3 3H9z"></svg:path><svg:path fill="currentColor" d="m15 8l-1-1l-2 2l-2-2l-1 1l2 2l-2 2l1 1l2-2l2 2l1-1l-2-2z"></svg:path>`,
})
export class VaadinFileRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileSearchIcon],svg[vaadin-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.47V15H2V1h6v4h4v.56q.577.343.996.825L13 4L9 0H1v16h12v-1.53zM9 1l3 3H9z"></svg:path><svg:path fill="currentColor" d="m14.78 12.72l-1.92-1.92a.7.7 0 0 0-.325-.179a3 3 0 0 0 .468-1.618a3 3 0 1 0-1.371 2.52c.02.136.083.248.169.337l1.92 1.92a.75.75 0 0 0 1.059-1.061zM10 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 10 11"></svg:path>`,
})
export class VaadinFileSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileSoundIcon],svg[vaadin-file-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 10.5c0 1.2-.4 2.2-1 3l.4.5c.7-.9 1.2-2.1 1.2-3.5s-.5-2.6-1.2-3.5l-.4.5c.6.8 1 1.9 1 3"></svg:path><svg:path fill="currentColor" d="m9.9 8l-.4.5c.4.5.7 1.2.7 2s-.3 1.5-.7 2l.4.5c.5-.6.8-1.5.8-2.5s-.3-1.8-.8-2.5"></svg:path><svg:path fill="currentColor" d="m9.1 9l-.4.5c.2.3.3.6.3 1s-.1.7-.3 1l.4.5c.3-.4.5-.9.5-1.5S9.4 9.4 9.1 9"></svg:path><svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M6 9H4v3h2l2 2V7z"></svg:path>`,
})
export class VaadinFileSoundIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileStartIcon],svg[vaadin-file-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zm3 15H3V1h6v4h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M5 6v6l6-3z"></svg:path>`,
})
export class VaadinFileStartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTableIcon],svg[vaadin-file-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M4 7v6h8V7zm2 5H5v-1h1zm0-2H5V9h1zm3 2H7v-1h2zm0-2H7V9h2zm2 2h-1v-1h1zm0-2h-1V9h1z"></svg:path>`,
})
export class VaadinFileTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTextIcon],svg[vaadin-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0v4h4z"></svg:path><svg:path fill="currentColor" d="M9 0H2v16h12V5H9zm3 12H4v-1h8zm0-2H4V9h8zm0-3v1H4V7z"></svg:path>`,
})
export class VaadinFileTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTextOIcon],svg[vaadin-file-text-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M4 7h8v1H4zm0 2h8v1H4zm0 2h8v1H4z"></svg:path>`,
})
export class VaadinFileTextOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTreeIcon],svg[vaadin-file-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10V6H5v1H3V4h9V0H0v4h2v10h3v2h11v-4H5v1H3V8h2v2z"></svg:path>`,
})
export class VaadinFileTreeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTreeSmallIcon],svg[vaadin-file-tree-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12v2h11V9H5v2H3V7h9V2H0v5h2v5z"></svg:path>`,
})
export class VaadinFileTreeSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTreeSubIcon],svg[vaadin-file-tree-sub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11v1H7v-2h5V6H4v1H3V5h6V1H0v4h2v3h2v2h2v3h2v2h8v-4z"></svg:path>`,
})
export class VaadinFileTreeSubIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFileZipIcon],svg[vaadin-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 15H5v-2.8l.7-2.2h2.4l.9 2.2zm4 0h-3v-3L9 9H7V8H5v1l-1 3v3H3V1h4v1h2v1H7v1h2v1h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M5 6h2v1H5zm0-4h2v1H5zm0 2h2v1H5zm2 1h2v1H7zm0 2h2v1H7zm-1 5h2v2H6z"></svg:path>`,
})
export class VaadinFileZipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFillIcon],svg[vaadin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.5c.468-2.207.985-4.05 1.604-5.846c.411 1.796.928 3.638 1.337 5.521C16 15.328 15.329 16 14.5 16s-1.5-.672-1.5-1.5M8 1L6.56 2.44l-2-2a1.54 1.54 0 0 0-2.121 0a1.496 1.496 0 0 0 .001 2.119l2 2L0 8.999l7 7l8-8zm0 1.41L13.59 8H2.41l2.75-2.75a.49.49 0 0 0 .669-.672l.721-.718l1.54 1.53a.502.502 0 0 0 .71-.71L7.27 3.15zm-4.85-.56a.5.5 0 0 1 .355-.854c.138 0 .263.055.355.144l2 2l-.71.71z"></svg:path>`,
})
export class VaadinFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFilmIcon],svg[vaadin-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h1v-1h1v1h12v-1h1v1h1V0zm2 14H1v-1h1zm0-2H1v-1h1zm0-2H1V9h1zm0-2H1V7h1zm0-2H1V5h1zm0-2H1V3h1zm0-2H1V1h1zm11 13H3V9h10zm0-8H3V1h10zm2 7h-1v-1h1zm0-2h-1v-1h1zm0-2h-1V9h1zm0-2h-1V7h1zm0-2h-1V5h1zm0-2h-1V3h1zm0-2h-1V1h1z"></svg:path>`,
})
export class VaadinFilmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFilterIcon],svg[vaadin-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h14v2L9 9v7l-2-2V9L1 4zm0-2h14v1H1z"></svg:path>`,
})
export class VaadinFilterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFireIcon],svg[vaadin-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.9 15.8S1 15.4 1 10.1C1 6 4.1 3.6 4.1 3.6S5.4 5 6.4 5.5C7.4 6.1 7.8 0 7.8 0S15 3.9 15 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-.5 4.4-2.1 5c-1.6-.9-2.5-2.3-2.5-2.3s-3.7 5.8.6 9.3"></svg:path><svg:path fill="currentColor" d="M8.2 16.1c-2-.1-3.7-1.4-3.7-3.2s.7-2.6.7-2.6s.5 1 1.1 1.5s1.8.8 2.4.1c.6-.6.8-2.3.8-2.3s1.4 1.1 1.2 3c-.1 2-.9 3.5-2.5 3.5"></svg:path>`,
})
export class VaadinFireIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlagIcon],svg[vaadin-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c0-1.1-.9-2-2-2S0 .9 0 2c0 .7.4 1.4 1 1.7V16h2V3.7c.6-.3 1-1 1-1.7m0 2s1-3 3.6-3c2.7 0 2.3 1 4.4 1c2.4 0 4-1 4-1v8s-.7 2-4 2c-2.2 0-2.3-1-5-1c-2.3 0-3 2-3 2z"></svg:path>`,
})
export class VaadinFlagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlagCheckeredIcon],svg[vaadin-flag-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0C.9 0 0 .9 0 2c0 .7.4 1.4 1 1.7V16h2V3.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2m10 2c-2.1 0-1.8-1-4.4-1S4 4 4 4v8s.7-2 3-2c2.7 0 2.8 1 5 1c3.3 0 4-2 4-2V1s-1.6 1-4 1m3 2.5c-.2.2-.8.4-2 .6V2.9c.8-.1 1.5-.2 2-.4zM5 7.9V5.3c.4-.6 1.1-1.1 2-1.1V2.1c.2-.1.4-.1.6-.1c1.2 0 1.6.2 2.1.4c.1.1.2.2.3.2v2.2c.5.2 1.1.4 2 .4c.4 0 .7 0 1-.1v2.6c-.3 0-.6.1-1 .1c-1.1 0-1.5-.2-2-.5v2.3C9.3 9.3 8.5 9 7 9V6.8c-.9.2-1.5.6-2 1.1m8 2V7.7c1.1-.2 1.7-.6 2-.8v1.8c-.2.3-.7 1-2 1.2"></svg:path><svg:path fill="currentColor" d="M10 7.2V4.8s-1.2-.6-3-.6v2.6c1.7-.4 3 .4 3 .4"></svg:path>`,
})
export class VaadinFlagCheckeredIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlagOIcon],svg[vaadin-flag-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c0-1.1-.9-2-2-2S0 .9 0 2c0 .7.4 1.4 1 1.7V16h2V3.7c.6-.3 1-1 1-1.7m3.6 0c1.2 0 1.6.2 2.1.4c.5.3 1.1.6 2.3.6s2.2-.2 3-.5v6.3c-.2.3-.9 1.2-3 1.2c-.9 0-1.3-.2-1.9-.4C9.4 9.3 8.6 9 7 9c-.8 0-1.5.2-2 .5V4.2C5.2 3.7 6 2 7.6 2M16 1s-1.6 1-4 1c-2.1 0-1.8-1-4.4-1S4 4 4 4v8s.7-2 3-2c2.7 0 2.8 1 5 1c3.3 0 4-2 4-2z"></svg:path>`,
})
export class VaadinFlagOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlashIcon],svg[vaadin-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l-2.2-1.6L14.9 4l-2.7-.2l-.2-2.7l-2.4 1.1L8 0L6.4 2.2L4 1.1l-.2 2.7l-2.7.2l1.1 2.4L0 8l2.2 1.6L1.1 12l2.7.2l.2 2.7l2.4-1.1L8 16l1.6-2.2l2.4 1.1l.2-2.7l2.7-.2l-1.1-2.4z"></svg:path>`,
})
export class VaadinFlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlaskIcon],svg[vaadin-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h12l-4-8V1h1V0H5v1h1v7zM9 1v7.2l1.9 3.8H5.1L7 8.2V1z"></svg:path>`,
})
export class VaadinFlaskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlightLandingIcon],svg[vaadin-flight-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.64 7c-.71-.2-1.89-.43-3.23-.67L6.59 2.09a2.3 2.3 0 0 0-.746-.544L4.65 1c-.09 0-.15 0-.1.11S6 4 6.84 5.7c-1.84-.29-3.5-.53-4.23-.63a.92.92 0 0 1-.608-.406L1.28 3.59a.93.93 0 0 0-.474-.358L0 3l.61 3.26c.067.34.318.609.644.699C2.58 7.34 6.07 8.3 8.78 8.88c6 1.28 6.8 1.28 7.12.91S15.23 7.41 13.64 7M0 13h16v1H0z"></svg:path>`,
})
export class VaadinFlightLandingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlightTakeoffIcon],svg[vaadin-flight-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.57 2.26c-.65.29-1.66.85-2.8 1.5L4.31 3a2.2 2.2 0 0 0-.916.064L2.209 3.4c-.1 0-.1.1 0 .14l4.56 2c-1.54.92-2.91 1.76-3.51 2.14a.86.86 0 0 1-.726.088L1.339 7.39a.86.86 0 0 0-.586.002l-.754.308l2.52 2.1a.88.88 0 0 0 .926.128C4.649 9.39 7.819 7.93 10.179 6.7c5.24-2.78 5.82-3.26 5.82-3.7c0-.69-2-1.4-3.43-.74zM0 13h16v1H0z"></svg:path>`,
})
export class VaadinFlightTakeoffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlipHIcon],svg[vaadin-flip-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 15l6-5l-6-4.9zm9-4.9l6 4.9V5zm5 2.8l-3.4-2.8l3.4-3zM7 5h1v1H7zm0-2h1v1H7zm0 4h1v1H7zm0 2h1v1H7zm0 2h1v1H7zm0 2h1v1H7zm0 2h1v1H7z"></svg:path><svg:path fill="currentColor" d="M7.5 1c1.3 0 2.6.7 3.6 1.9L10 4h3V1l-1.2 1.2C10.6.8 9.1 0 7.5 0C5.6 0 3.9 1 2.6 2.9l.8.6C4.5 1.9 5.9 1 7.5 1"></svg:path>`,
})
export class VaadinFlipHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFlipVIcon],svg[vaadin-flip-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 1l5 6l4.94-6zm4.94 9L1 16h10zm-2.82 5l2.83-3.44l3 3.44zM10 8h1v1h-1zm2 0h1v1h-1zM8 8h1v1H8zM6 8h1v1H6zM4 8h1v1H4zM2 8h1v1H2zM0 8h1v1H0z"></svg:path><svg:path fill="currentColor" d="M15 8.47a4.8 4.8 0 0 1-1.879 3.632L12 11v3h3l-1.18-1.18A5.76 5.76 0 0 0 16 8.478V8.47a6.06 6.06 0 0 0-2.884-4.905l-.596.805a5.1 5.1 0 0 1 2.479 4.087z"></svg:path>`,
})
export class VaadinFlipVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderIcon],svg[vaadin-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15H0V4h1l1-2h4l1 2h9z"></svg:path>`,
})
export class VaadinFolderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderAddIcon],svg[vaadin-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4H7L6 2H2L1 4H0v11h14v-1H1V5h.62l1-2h2.57l1.19 2H13v1z"></svg:path><svg:path fill="currentColor" d="M14 7h-2v2h-2v2h2v2h2v-2h2V9h-2z"></svg:path>`,
})
export class VaadinFolderAddIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderOIcon],svg[vaadin-folder-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4L6 2H2L1 4H0v11h16V4zm8 10H1V5h.6l1-2h2.6l1.2 2H15z"></svg:path>`,
})
export class VaadinFolderOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderOpenIcon],svg[vaadin-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4H7L6 2H2L1 4H0v9.5L3 6z"></svg:path><svg:path fill="currentColor" d="M3.7 7L.5 15h12.8l2.5-8z"></svg:path>`,
})
export class VaadinFolderOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderOpenOIcon],svg[vaadin-folder-open-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4H7L6 2H2L1 4H0v11h14l2-9zm.9 1l-1.6 7l-11.9-.1L3.7 7zM1 5h.6l1-2h2.6l1.2 2H13v1H3l-2 5.9z"></svg:path>`,
})
export class VaadinFolderOpenOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderRemoveIcon],svg[vaadin-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12.41V14H1V5h.62l1-2h2.57l1.19 2H13v2.59l1-1V4H7L6 2H2L1 4H0v11h14v-1.59z"></svg:path><svg:path fill="currentColor" d="m16 8l-1-1l-2 2l-2-2l-1 1l2 2l-2 2l1 1l2-2l2 2l1-1l-2-2z"></svg:path>`,
})
export class VaadinFolderRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderSearchIcon],svg[vaadin-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13.47V14H1V5h.62l1-2h2.57l1.19 2H13v.91c.385.179.716.407 1.001.681L14 4H7L6 2H2L1 4H0v11h14v-.53z"></svg:path><svg:path fill="currentColor" d="m15.78 12.72l-1.92-1.92a.7.7 0 0 0-.325-.179a3 3 0 0 0 .468-1.618a3 3 0 1 0-1.371 2.52c.02.136.083.248.169.337l1.92 1.92a.75.75 0 0 0 1.059-1.061zM11 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 11 11"></svg:path>`,
})
export class VaadinFolderSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFontIcon],svg[vaadin-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h3L9 0H7L1 16h3l1.9-5h4.2zM6.7 9L8 5.4L9.3 9z"></svg:path>`,
})
export class VaadinFontIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFormIcon],svg[vaadin-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2v2H6V2zm1-1H5v4h11zM0 1h4v4H0zm15 6v2H6V7zm1-1H5v4h11zM0 6h4v4H0zm15 6v2H6v-2zm1-1H5v4h11zM0 11h4v4H0z"></svg:path>`,
})
export class VaadinFormIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinForwardIcon],svg[vaadin-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14l8-7zm8 0v14l8-7z"></svg:path>`,
})
export class VaadinForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFrownOIcon],svg[vaadin-frown-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m.3 6.3c-.7-1.1-2-1.8-3.3-1.8s-2.6.7-3.3 1.8l-.8-.6c.9-1.4 2.4-2.2 4.1-2.2s3.2.8 4.1 2.2z"></svg:path>`,
})
export class VaadinFrownOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFuncionIcon],svg[vaadin-funcion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0S7.9 0 7.3 3l-.4 2H5l-.5 1h2.2l-1.4 7c-.4 2-1.9 2-1.9 2h-1L2 16h3s2.1 0 2.7-3l1.4-7h2.4l.5-1H9.3l.4-2c.4-2 1.8-2 1.8-2h1l.5-1z"></svg:path>`,
})
export class VaadinFuncionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinFunnelIcon],svg[vaadin-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11h4v4H6zm7.6-6L16 1H0l2.4 4zM3 6l2.4 4h5.2L13 6z"></svg:path>`,
})
export class VaadinFunnelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGamepadIcon],svg[vaadin-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.16 2a9.8 9.8 0 0 1-4.149 1a10 10 0 0 1-4.229-1.026C1.171 2 .001 3.17.001 5.84v6A2.19 2.19 0 0 0 2.191 14h.232a2.19 2.19 0 0 0 2.074-1.485C4.802 11.6 5.642 10 6.582 10h2.84c.94 0 1.78 1.6 2.08 2.5A2.19 2.19 0 0 0 13.58 14h.232c1.21 0 2.19-.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7H4v1H3V7H2V6h1V5h1v1h1zm5.06 1.11a1.06 1.06 0 1 1 .001-2.121a1.06 1.06 0 0 1-.001 2.121M13 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class VaadinGamepadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGavelIcon],svg[vaadin-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 4.1c-.4-.4-.4-.9-.1-1.2L8.9.3c.3-.3.8-.3 1.2 0l.1.1c.3.3.3.8 0 1.2L7.6 4.1c-.3.3-.9.3-1.2 0M12 9.7c-.4-.4-.4-.9-.1-1.3l2.6-2.6c.3-.3.8-.3 1.2 0l.1.1c.3.3.3.8 0 1.2l-2.6 2.6c-.4.3-.9.3-1.2 0m-2-2L8.3 6c-.4-.4-.4-1 0-1.4l2.3-2.3c.4-.4 1-.4 1.4 0L13.7 4c.4.4.4 1 0 1.4l-2.3 2.3c-.4.4-1 .4-1.4 0m-6 6.5c.6-.6 4-5.6 4.5-5.3c.4.2 1-.5 1-.5L7.6 6.5s-.7.6-.5 1c.3.5-4.7 3.9-5.3 4.5c0 0-2.8 2.2-1.4 3.6S4 14.2 4 14.2"></svg:path>`,
})
export class VaadinGavelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGiftIcon],svg[vaadin-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 5c2-.3 3.9-1.1 2.2-3.6c-.7-1-1.4-1.4-2-1.4c-1 0-1.7 1.1-2.3 2.2C7.4 1.1 6.7 0 5.7 0c-.6 0-1.3.4-2 1.4c-1.8 2.5.2 3.3 2.2 3.6H0v3h16V5zm.2-4c.1 0 .5.1 1.2 1c.5.7.6 1.1.5 1.3c-.2.3-1.3.7-3.3.8c0-.2-.1-.4-.2-.6C9.1 2.1 9.8 1 10.3 1M4 3.3c-.1-.2 0-.6.5-1.3c.7-.9 1.1-1 1.2-1c.5 0 1.2 1.1 1.8 2.5c-.1.2-.2.4-.2.6c-2-.1-3.1-.5-3.3-.8M7 7V5h2v2zm2 8H7V9H1v7h14V9H9z"></svg:path>`,
})
export class VaadinGiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGlassIcon],svg[vaadin-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15H9V7l6-7H0l6 7v8H4c-2 0-2 1-2 1h11s0-1-2-1m1.9-14l-1.8 2H3.9L2.2 1zM7 15V7h1v8z"></svg:path>`,
})
export class VaadinGlassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGlassesIcon],svg[vaadin-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 7h-.7c-.4-1.2-1.5-2-2.8-2s-2.4.9-2.8 2.1q-.45-.6-1.2-.6c-.75 0-.9.2-1.2.6C6.4 5.9 5.3 5 4 5s-2.4.9-2.8 2H.5c-.3 0-.5.2-.5.5s.2.5.5.5H1c0 1.7 1.3 3 3 3c1.5 0 2.7-1.1 3-2.5c.3 0 .5-.2.5-.5s.2-.5.5-.5s.5.2.5.5s.2.5.5.5c.2 1.4 1.5 2.5 3 2.5c1.7 0 3-1.3 3-3h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5M4 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m8 0c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class VaadinGlassesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGlobeIcon],svg[vaadin-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m5.2 5.3c.4 0 .7.3 1.1.3c-.3.4-1.6.4-2-.1c.3-.1.5-.2.9-.2M1 8c0-.4 0-.8.1-1.3c.1 0 .2.1.3.1c0 0 .1.1.1.2c0 .3.3.5.5.5c.8.1 1.1.8 1.8 1c.2.1.1.3 0 .5c-.6.8-.1 1.4.4 1.9c.5.4.5.8.6 1.4c0 .7.1 1.5.4 2.2C2.7 13.3 1 10.9 1 8m7 7c-.7 0-1.5-.1-2.1-.3q-.15-.3 0-.6c.4-.8.8-1.5 1.3-2.2c.2-.2.4-.4.4-.7c0-.2.1-.5.2-.7c.3-.5.2-.8-.2-.9c-.8-.2-1.2-.9-1.8-1.2s-1.2-.5-1.7-.2c-.2.1-.5.2-.5-.1c0-.4-.5-.7-.4-1.1c-.1 0-.2 0-.3.1s-.2.2-.4.1c-.2-.2-.1-.4-.1-.6c.1-.2.2-.3.4-.4c.4-.1.8-.1 1 .4c.3-.9.9-1.4 1.5-1.8c0 0 .8-.7.9-.7s.2.2.4.3c.2 0 .3 0 .3-.2c.1-.5-.2-1.1-.6-1.2c0-.1.1-.1.1-.1c.3-.1.7-.3.6-.6c0-.4-.4-.6-.8-.6c-.2 0-.4 0-.6.1c-.4.2-.9.4-1.5.4C5.2 1.4 6.6 1 8 1h.8c-.6.1-1.2.3-1.6.5c.6.1.7.4.5.9c-.1.2 0 .4.2.5s.4.1.5-.1c.2-.3.6-.4.9-.5c.4-.1.7-.3 1-.7c0-.1.1-.1.2-.2c.6.2 1.2.6 1.8 1c-.1 0-.1.1-.2.1c-.2.2-.5.3-.2.7c.1.2 0 .3-.1.4c-.2.1-.3 0-.4-.1s-.1-.3-.4-.3c-.1.2-.4.3-.4.6c.5 0 .4.4.5.7c-.6.1-.8.4-.5.9c.1.2-.1.3-.2.4c-.4.6-.8 1-.8 1.7s.5 1.4 1.3 1.3c.9-.1.9-.1 1.2.7c0 .1.1.2.1.3c.1.2.2.4.1.6c-.3.8.1 1.4.4 2c.1.2.2.3.3.4c-1.3 1.4-3 2.2-5 2.2"></svg:path>`,
})
export class VaadinGlobeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGlobeWireIcon],svg[vaadin-globe-wire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m6.8 9.5c0 .5-.7.66-2 1a11.7 11.7 0 0 0 .229-1.98l2.001-.02c0 .36-.08.5-.16 1zm-13.6 0c-.1-.5-.15-.64-.2-1h2c.024.723.106 1.411.244 2.079C1.9 10.16 1.2 10 1.2 9.5m0-3c0-.5.7-.66 2-1A12 12 0 0 0 3 7.489L1 7.5c0-.36.08-.5.16-1zM8.5 5c1.13.013 2.226.107 3.298.277c.047.643.165 1.41.201 2.199L8.5 7.501v-2.5zm0-1V1.06c1.17.27 2.2 1.47 2.84 3.15A24 24 0 0 0 8.523 4zm-1-2.94V4a26 26 0 0 0-2.968.214C5.3 2.53 6.33 1.33 7.5 1.06M7.5 5v2.5H4c.031-.806.142-1.571.326-2.307c.932-.08 2.035-.177 3.158-.193zM4 8.5h3.5V11a23 23 0 0 1-3.298-.277c-.047-.643-.165-1.41-.201-2.199zM7.5 12v2.94c-1.17-.27-2.2-1.47-2.84-3.15a24 24 0 0 0 2.817.21zm1 2.94V12a26 26 0 0 0 2.968-.214C10.7 13.47 9.67 14.67 8.5 14.94m0-3.94V8.5H12a11.3 11.3 0 0 1-.326 2.307c-.932.08-2.035.177-3.158.193zM15 7.5h-2a12 12 0 0 0-.244-2.079c1.354.399 2.014.559 2.014 1.079c.13.5.18.64.23 1m-.7-2.59a9.6 9.6 0 0 0-1.726-.5c-.361-1.019-.809-1.898-1.389-2.672c1.355.726 2.413 1.811 3.067 3.131zM4.84 1.76a8.2 8.2 0 0 0-1.305 2.581c-.699.189-1.299.365-1.874.593c.751-1.39 1.823-2.475 3.139-3.156zm-3.11 9.33c.506.204 1.106.38 1.726.5c.361 1.019.809 1.898 1.389 2.672c-1.367-.722-2.436-1.807-3.097-3.131zm9.44 3.15a8.3 8.3 0 0 0 1.295-2.581c.699-.189 1.299-.365 1.874-.593c-.751 1.39-1.823 2.475-3.139 3.156z"></svg:path>`,
})
export class VaadinGlobeWireIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGolfIcon],svg[vaadin-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 1 1-3.999.001A2 2 0 0 1 7 2"></svg:path><svg:path fill="currentColor" d="M9.8 1.8c-.2-.5-1.7-.1-2 .5c-.2.3-.2 1.2-1.2 1.9c-.8.5-1.6.5-1.6.5c-.3.6-.1 1.1.2 1.6c.5.9.6 1.8.7 2.8c.1 1.3-.5 2.4-2.3 3.2c-.8.3-1.3.9-1 1.9c0 0 2-.3 3.1-1.2c1.5-1.2 1.8-2.3 1.8-2.3s.1.7 0 1.9c-.1 1-.2 1.5-.4 2.2S7.4 16 8 16s1-.4 1-1l.3-1.9c.3-2.1 0-4.3-.8-6.3c0-.1-.1-.1-.1-.2c-.6-1.6.2-2.6.6-3c.3-.4 1.2-1.2.8-1.8M12 0v10h1V4l3-2zm4 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0M1 8.4l3.7-3.7l-.7-.3L.2 8s-.4.7.1 1.7s1.6.3 1.6.3c.4-.2.2-.4 0-.6s-.9-1-.9-1"></svg:path>`,
})
export class VaadinGolfIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGooglePlusIcon],svg[vaadin-google-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.9h-2.8V1.3h-.6v2.6H9.9v.8h2.7v2.6h.6V4.7H16zM6.9 9c-.4-.2-1.1-.9-1.1-1.3s.1-.7.8-1.2s1.2-1.2 1.2-2.1c0-1.1-.5-2.1-1.3-2.4h1.3l.9-.7H4.5C2.6 1.3.9 2.7.9 4.4s1.3 3 3.2 3h.4c-.2.2-.2.4-.2.7c0 .5.3.8.6 1.2h-.7c-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3c-.1-1.3-.5-2-1.6-2.8M4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6S2.9 1.8 4 1.8S6.1 3 6.3 4.4S5.8 7 4.7 6.9m-.4 7.2c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c.4 0 .7.1 1 .2c.9.6 1.5.9 1.7 1.6c0 .1.1.3.1.4c0 1.2-.8 2.2-3 2.2"></svg:path>`,
})
export class VaadinGooglePlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGooglePlusSquareIcon],svg[vaadin-google-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.4c-.8 0-1.3.8-1.2 1.8c.1 1.1.9 1.9 1.7 2c.8 0 1.3-.8 1.2-1.9c-.1-1-.9-1.9-1.7-1.9m.4 5.9c-1.2 0-2.3.7-2.3 1.6s.9 1.7 2.1 1.7c1.7 0 2.3-.7 2.3-1.6v-.3c-.1-.5-.6-.8-1.3-1.2c-.2-.2-.5-.2-.8-.2"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm7.9 5.3c0 .7-.4 1.2-.9 1.6s-.6.6-.6.9s.5.8.8 1c.8.6 1.1 1.1 1.1 2c0 1.1-1.1 2.3-3.1 2.3c-1.7 0-3.2-.7-3.2-1.8C2 10.1 3.3 9 5.1 9h.5c-.2-.3-.4-.6-.4-.9c0-.2.1-.4.2-.6h-.3c-1.4 0-2.4-1-2.4-2.3C2.7 4 4 2.9 5.4 2.9h3.1l-.7.6h-1c.7.2 1.1 1 1.1 1.8m6.1.2h-2.1v2h-.5v-2h-2V5h2V3h.5v2H14z"></svg:path>`,
})
export class VaadinGooglePlusSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGrabIcon],svg[vaadin-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 4H12c0-.2-.2-.6-.4-.8s-.5-.4-1.1-.4c-.2 0-.4 0-.6.1c-.1-.2-.2-.3-.3-.5c-.2-.2-.5-.4-1.1-.4c-.8 0-1.2.5-1.4 1c-.1 0-.3-.1-.5-.1c-.5 0-.8.2-1.1.4C5 3.9 5 4.7 5 4.8v.4c-.6 0-1.1.2-1.4.5C3 6.4 3 7.3 3 8.5v.7c0 1.4.7 2.1 1.4 2.8l.3.4C6 13.6 7.2 14 9.8 14c2.9 0 4.2-1.6 4.2-5.1V6.4c0-.7-.2-2.1-1.4-2.4m-2.1-.2c.4 0 .5.4.5.6v.8c0 .3.2.5.4.5c.3 0 .5-.1.5-.4c0 0 0-.4.4-.3c.6.2.7 1.1.7 1.3v2.6c0 3.4-1.3 4.1-3.2 4.1c-2.4 0-3.3-.3-4.3-1.3l-.4-.4C4.4 10.6 4 10.2 4 9.2v-.6c0-1 0-1.8.3-2.1c.1-.2.4-.3.7-.3V7l-.3 1.2c0 .1 0 .1.1.1c.1.1.2 0 .2 0l1-1.2V5c0-.1 0-.6.2-.8c.1-.1.2-.2.4-.2c.3 0 .4.2.4.4v.4c0 .2.2.5.5.5S8 5 8 4.8V3.5c0-.1 0-.5.5-.5c.3 0 .5.2.5.5v1.2c0 .3.2.6.5.6s.5-.3.5-.5v-.5c0-.3.2-.5.5-.5"></svg:path>`,
})
export class VaadinGrabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridIcon],svg[vaadin-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm5 15H1v-4h4zm0-5H1V6h4zm0-5H1V1h4zm5 10H6v-4h4zm0-5H6V6h4zm0-5H6V1h4zm5 10h-4v-4h4zm0-5h-4V6h4zm0-5h-4V1h4z"></svg:path>`,
})
export class VaadinGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridBevelIcon],svg[vaadin-grid-bevel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2V1H1v13h1v1h13V2zM5 13H2v-3h3zm0-4H2V6h3zm0-4H2V2h3zm4 8H6v-3h3zm0-4H6V6h3zm0-4H6V2h3zm4 8h-3v-3h3zm0-4h-3V6h3zm0-4h-3V2h3z"></svg:path>`,
})
export class VaadinGridBevelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridBigIcon],svg[vaadin-grid-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h7v7H0zm9 0h7v7H9zM0 9h7v7H0zm9 0h7v7H9z"></svg:path>`,
})
export class VaadinGridBigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridBigOIcon],svg[vaadin-grid-big-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h7V0H0zm1-6h5v5H1zm8-1v7h7V0zm6 6h-5V1h5zM0 16h7V9H0zm1-6h5v5H1zm8 6h7V9H9zm1-6h5v5h-5z"></svg:path>`,
})
export class VaadinGridBigOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridHIcon],svg[vaadin-grid-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm5 15H1V1h4zm5 0H6V1h4zm5 0h-4V1h4z"></svg:path>`,
})
export class VaadinGridHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridSmallIcon],svg[vaadin-grid-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h4v4H0zm0 6h4v4H0zm0 6h4v4H0zM6 0h4v4H6zm0 6h4v4H6zm0 6h4v4H6zm6-12h4v4h-4zm0 6h4v4h-4zm0 6h4v4h-4z"></svg:path>`,
})
export class VaadinGridSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridSmallOIcon],svg[vaadin-grid-small-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h4V0H0zm1-3h2v2H1zm-1 9h4V6H0zm1-3h2v2H1zm-1 9h4v-4H0zm1-3h2v2H1zm5-9h4V0H6zm1-3h2v2H7zm-1 9h4V6H6zm1-3h2v2H7zm-1 9h4v-4H6zm1-3h2v2H7zm5-13v4h4V0zm3 3h-2V1h2zm-3 7h4V6h-4zm1-3h2v2h-2zm-1 9h4v-4h-4zm1-3h2v2h-2z"></svg:path>`,
})
export class VaadinGridSmallOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGridVIcon],svg[vaadin-grid-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H0v16h16zM1 5V1h14v4zm0 5V6h14v4zm0 5v-4h14v4z"></svg:path>`,
})
export class VaadinGridVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinGroupIcon],svg[vaadin-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16v-5.3c-.6-.3-1-1-1-1.7V5c0-.7.4-1.3 1-1.7V3c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2H1c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1v5zM15 5h-2c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2v.3c.6.4 1 1 1 1.7v4c0 .7-.4 1.4-1 1.7V16h4v-5c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1m-5-3a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path><svg:path fill="currentColor" d="M10 4H6c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1v6h4v-6c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1"></svg:path>`,
})
export class VaadinGroupIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHammerIcon],svg[vaadin-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 2l7 7l3-3l-4.48-4.48S8.55 2.55 7 1zm2.8 3.79L.27 14.31a1 1 0 0 0 0 1.361a1 1 0 0 0 1.371.049l8.569-8.519z"></svg:path>`,
})
export class VaadinHammerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHandIcon],svg[vaadin-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2.4c-.4-.4-1-.5-1.5-.3c0-.3-.1-.6-.4-.9c-.2-.2-.6-.4-1.1-.4c-.3 0-.5.1-.7.1c0-.2-.1-.3-.2-.5c-.5-.6-1.5-.6-2 0c-.2.2-.4.4-.4.6C7 1 6.8.9 6.6.9c-.5 0-.8.2-1.1.5C5 1.9 5 2.7 5 2.7v3.8c-.3-.3-.8-.8-1.5-.8c-.2 0-.5.1-.7.2c-.4.2-.6.5-.7.9c-.3 1 .6 2.4.6 2.5c.1.1 1.2 2.7 2.2 3.8C5.9 14.3 7 15 9.8 15c2.9 0 4.2-1.6 4.2-5.1V4.4c0-.1.1-1.3-.5-2M8 2c0-.3-.1-1 .5-1c.5 0 .5.5.5 1v4c0 .3.2.5.5.5s.5-.2.5-.5V2.2s0-.4.5-.4c.6 0 .5.9.5.9V6c0 .3.2.5.5.5s.5-.2.5-.5V3.6c0-.1 0-.6.5-.6s.5 1 .5 1v5.9c0 3.4-1.3 4.1-3.2 4.1c-2.4 0-3.3-.5-4.1-1.6c-.9-1-2.1-3.6-2.1-3.7c-.3-.3-.7-1.2-.6-1.6c0-.1.1-.2.2-.3c.1 0 .2-.1.2-.1c.4 0 .8.5.9.7l.6.9c.1.2.4.3.6.2c.4 0 .5-.2.5-.4V2.9c0-.4 0-1 .5-1c.4 0 .5.3.5.8V6c0 .3.2.5.5.5S8 6.3 8 6z"></svg:path>`,
})
export class VaadinHandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHandleCornerIcon],svg[vaadin-handle-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 16L16 6.7V5.3L5.3 16zm3 0L16 9.7V8.3L8.3 16zm3 0l3.3-3.3v-1.4L11.3 16zm3 0l.3-.3v-1.4L14.3 16z"></svg:path>`,
})
export class VaadinHandleCornerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHandsUpIcon],svg[vaadin-hands-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path><svg:path fill="currentColor" d="M6 16h1.5v-5h1v5H10V7l-.001-.052c0-.521.194-.997.513-1.36L13.79 2.27a.73.73 0 1 0-.998-1.003L10.43 3.65c-.212.216-.508.35-.835.35H6.404c-.327 0-.622-.134-.834-.35L3.25 1.26a.73.73 0 1 0-1.003.998L5.49 5.59c.317.361.511.836.511 1.358L6 7.003z"></svg:path>`,
})
export class VaadinHandsUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHandshakeIcon],svg[vaadin-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3a5.4 5.4 0 0 1-1.902 1.178c-.748.132-2.818-.828-3.838.152c-.17.17-.38.34-.6.51c-.48-.21-1.22-.53-1.76-.84S3 3 3 3L0 6.5s.74 1 1.2 1.66c.3.44.67 1.11.91 1.56l-.34.4a.88.88 0 0 0 .15 1a.83.83 0 0 0 1.002-.002a.62.62 0 0 0 .077.881a1 1 0 0 0 1.006-.002a.806.806 0 0 0-.003 1.005a1.01 1.01 0 0 0 .892-.114a.82.82 0 0 0 .187.912a1.1 1.1 0 0 0 1.054-.092l.516-.467c.472.47 1.123.761 1.842.761l.061-.001a1.31 1.31 0 0 0 1.094-.791c.146.056.312.094.488.094c.236 0 .455-.068.64-.185c.585-.387.445-.687.445-.687a1.07 1.07 0 0 0 1.229-.279a.996.996 0 0 0 .138-1.215a.04.04 0 0 0 .021.005c.421 0 .787-.232.978-.574a1.56 1.56 0 0 0-.191-1.48l.003.005c.82-.16.79-.57 1.19-1.17a4.7 4.7 0 0 1 1.387-1.208zm-.05 7.06c-.44.44-.78.25-1.53-.32S9.18 8.1 9.18 8.1c.061.305.202.57.401.781c.319.359 1.269 1.179 1.719 1.599c.28.26 1 .78.58 1.18s-.75 0-1.44-.56s-2.23-1.94-2.23-1.94a.94.94 0 0 0 .27.72c.17.2 1.12 1.12 1.52 1.54s.75.67.41 1s-1.03-.19-1.41-.58c-.59-.57-1.76-1.63-1.76-1.63l-.001.053c0 .284.098.544.263.75c.288.378.848.868 1.188 1.248s.54.7 0 1s-1.34-.44-1.69-.8v-.002a.4.4 0 0 0-.1-.269a.9.9 0 0 0-.906-.188A.61.61 0 0 0 6 11.1a.754.754 0 0 0-.912.001a.61.61 0 0 0-.085-.95a1 1 0 0 0-1.174.08a.66.66 0 0 0-.068-.911a1 1 0 0 0-1.186-.128L1.91 8.069c-.46-.73-1-1.49-1-1.49l2.28-2.77s.81.5 1.48.88c.33.19.9.44 1.33.64c-.68.51-1.25 1-1.08 1.34a1.83 1.83 0 0 0 2.087.036a2.4 2.4 0 0 1 1.343-.403c.347 0 .677.072.976.203c.554.374 1.574 1.294 2.504 1.874c1.17.85 1.4 1.4 1.12 1.68z"></svg:path>`,
})
export class VaadinHandshakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHarddriveIcon],svg[vaadin-harddrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3L.3 9h15.4zM0 10v5h16v-5zm3 3H2v-1h1zm4 0H4v-1h3z"></svg:path>`,
})
export class VaadinHarddriveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHarddriveOIcon],svg[vaadin-harddrive-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h1v1H2zm2 0h3v1H4z"></svg:path><svg:path fill="currentColor" d="M13 1H3l-3 9v5h16v-5zM3.7 2h8.6l2.7 8H1.1zM1 14v-3h14v3z"></svg:path>`,
})
export class VaadinHarddriveOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHashIcon],svg[vaadin-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6V4h-2.6l.6-2.8l-2-.4l-.7 3.2h-3L8 1.2L6 .8L5.3 4H2v2h2.9L4 10H1v2h2.6L3 14.8l2 .4l.7-3.2h3L8 14.8l2 .4l.7-3.2H14v-2h-2.9l.9-4zm-6 4H6l1-4h3z"></svg:path>`,
})
export class VaadinHashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHeaderIcon],svg[vaadin-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0v7H5V0H2v16h3V9h6v7h3V0z"></svg:path>`,
})
export class VaadinHeaderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHeadphonesIcon],svg[vaadin-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.3V6c0-3.3-2.7-6-6-6S2 2.7 2 6v2.3c-1.2.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2V8H4V6c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-.2 3-1.7 3-3.4v-1.2c0-1.4-.8-2.6-2-3.1M4 15H3V9h1zm9 0h-1V9h1z"></svg:path>`,
})
export class VaadinHeadphonesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHeadsetIcon],svg[vaadin-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.82 8a3.02 3.02 0 0 0-1.799-1.813L13 4.5C13 2 10.53 0 7.5 0S2 2 2 4.5v1.68A3.01 3.01 0 0 0 0 9v1a3 3 0 0 0 3 3h1V6H3V4.5C3 2.57 5 1 7.5 1S12 2.57 12 4.5V6h-1v7h1a3 3 0 0 0 3-3v1.73A3.27 3.27 0 0 1 11.73 15H10a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h3.73A4.27 4.27 0 0 0 16 11.73V8z"></svg:path>`,
})
export class VaadinHeadsetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHealthCardIcon],svg[vaadin-health-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v10H1V3zm1-1H0v12h16z"></svg:path><svg:path fill="currentColor" d="M9 5h5v1H9zm0 2h5v1H9zm0 2h2v1H9zM6.5 5c-.6 0-1.1.6-1.5 1c-.4-.4-.9-1-1.5-1c-1.5 0-2.1 1.9-1 2.9L5 10l2.5-2.1C8.6 6.9 8 5 6.5 5"></svg:path>`,
})
export class VaadinHealthCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHeartIcon],svg[vaadin-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2S9 2 8 5C7 2 4 2 4 2C1.8 2 0 3.8 0 6c0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class VaadinHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHeartOIcon],svg[vaadin-heart-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 2C10.8 2 9 2.5 8 4.1C7 2.5 5.2 2 4.2 2C1.9 2 0 3.9 0 6.2c0 4 7.4 8.5 7.7 8.7l.3.2l.3-.2c.3-.2 7.7-4.8 7.7-8.7C16 3.9 14.1 2 11.7 2M8 13.9c-2.2-1.4-7-5-7-7.7C1 4.4 2.5 3 4.2 3c.1 0 2.5.1 3.3 2.4L8 6.8l.5-1.4C9.3 3.1 11.7 3 11.8 3C13.5 3 15 4.4 15 6.2c0 2.7-4.8 6.3-7 7.7"></svg:path>`,
})
export class VaadinHeartOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHomeIcon],svg[vaadin-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z"></svg:path><svg:path fill="currentColor" d="M8 4L2 8v7h5v-3h2v3h5V8z"></svg:path>`,
})
export class VaadinHomeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHomeOIcon],svg[vaadin-home-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6.6L8 1.4L6 2.7V1H4v3L0 6.6l1.9 2.7l.1-.1V15h5v-4h2v4h5V9.2l.1.1zm-14.6.3L8 2.6l6.6 4.3l-.7 1L8 4L2.1 7.9zM13 14h-3v-4H6v4H3V8.6l5-3.3l5 3.3z"></svg:path>`,
})
export class VaadinHomeOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHospitalIcon],svg[vaadin-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4V0H8v4H0v12h6v-3h4v3h6V4zM4 11H2V9h2zm0-3H2V6h2zm3 3H5V9h2zm0-3H5V6h2zm3-5V2h1V1h1v1h1v1h-1v1h-1V3zm1 8H9V9h2zm0-3H9V6h2zm3 3h-2V9h2zm0-3h-2V6h2z"></svg:path>`,
})
export class VaadinHospitalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHourglassIcon],svg[vaadin-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.16 4.6A4.05 4.05 0 0 1 8 7.994c0-1.415.726-2.66 1.825-3.384c.23-.199.426-.395.609-.602L5.56 4.001q.284.32.593.594z"></svg:path><svg:path fill="currentColor" d="M11.18 6.06A4.4 4.4 0 0 0 13 2.5V2h1V0H2v2h1v.5a4.39 4.39 0 0 0 1.808 3.551A2.56 2.56 0 0 1 6 7.99a2.76 2.76 0 0 1-1.209 2.003a4.44 4.44 0 0 0-1.79 3.503v.503h-1v2h12v-2h-1v-.5a4.43 4.43 0 0 0-1.769-3.492a2.76 2.76 0 0 1-1.23-1.996a2.55 2.55 0 0 1 1.169-1.946zM9 8a3.7 3.7 0 0 0 1.519 2.763A3.48 3.48 0 0 1 12 13.495V14h-1.77c-.7-.87-1.71-2-2.23-2s-1.53 1.13-2.23 2H4v-.5a3.47 3.47 0 0 1 1.459-2.723a3.7 3.7 0 0 0 1.54-2.766a3.48 3.48 0 0 0-1.498-2.683a3.44 3.44 0 0 1-1.502-2.827v-.5h8v.5a3.43 3.43 0 0 1-1.479 2.813a3.49 3.49 0 0 0-1.521 2.678z"></svg:path>`,
})
export class VaadinHourglassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHourglassEmptyIcon],svg[vaadin-hourglass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.18 6.06A4.4 4.4 0 0 0 13 2.5V2h1V0H2v2h1v.5a4.39 4.39 0 0 0 1.808 3.551A2.56 2.56 0 0 1 6 7.99a2.76 2.76 0 0 1-1.209 2.003a4.44 4.44 0 0 0-1.79 3.503v.503h-1v2h12v-2h-1v-.5a4.43 4.43 0 0 0-1.769-3.492a2.76 2.76 0 0 1-1.23-1.996a2.55 2.55 0 0 1 1.169-1.946zM9 8a3.7 3.7 0 0 0 1.519 2.763A3.48 3.48 0 0 1 12 13.495V14H4v-.5a3.47 3.47 0 0 1 1.459-2.723a3.7 3.7 0 0 0 1.54-2.766a3.48 3.48 0 0 0-1.498-2.683a3.44 3.44 0 0 1-1.502-2.827v-.5h8v.5a3.43 3.43 0 0 1-1.479 2.813a3.49 3.49 0 0 0-1.521 2.678z"></svg:path>`,
})
export class VaadinHourglassEmptyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHourglassEndIcon],svg[vaadin-hourglass-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.18 6.06A4.4 4.4 0 0 0 13 2.5V2h1V0H2v2h1v.5a4.39 4.39 0 0 0 1.808 3.551A2.56 2.56 0 0 1 6 7.99a2.76 2.76 0 0 1-1.209 2.003a4.44 4.44 0 0 0-1.79 3.503v.503h-1v2h12v-2h-1v-.5a4.43 4.43 0 0 0-1.769-3.492a2.76 2.76 0 0 1-1.23-1.996a2.55 2.55 0 0 1 1.169-1.946zM9 8a3.7 3.7 0 0 0 1.519 2.763A3.48 3.48 0 0 1 12 13.495V14h-1s-1.62-3.5-3-3.5S5 14 5 14H4v-.5a3.47 3.47 0 0 1 1.459-2.723a3.7 3.7 0 0 0 1.54-2.766a3.48 3.48 0 0 0-1.498-2.683a3.44 3.44 0 0 1-1.502-2.827v-.5h8v.5a3.43 3.43 0 0 1-1.479 2.813a3.49 3.49 0 0 0-1.521 2.678z"></svg:path>`,
})
export class VaadinHourglassEndIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinHourglassStartIcon],svg[vaadin-hourglass-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.16 4.6A4.05 4.05 0 0 1 8 7.994c0-1.415.726-2.66 1.825-3.384a2.86 2.86 0 0 0 1.17-1.589L5 3.001c.191.67.603 1.225 1.15 1.594z"></svg:path><svg:path fill="currentColor" d="M11.18 6.06A4.4 4.4 0 0 0 13 2.5V2h1V0H2v2h1v.5a4.39 4.39 0 0 0 1.808 3.551A2.56 2.56 0 0 1 6 7.99a2.76 2.76 0 0 1-1.209 2.003a4.44 4.44 0 0 0-1.79 3.503v.503h-1v2h12v-2h-1v-.5a4.43 4.43 0 0 0-1.769-3.492a2.76 2.76 0 0 1-1.23-1.996a2.55 2.55 0 0 1 1.169-1.946zM9 8a3.7 3.7 0 0 0 1.519 2.763A3.48 3.48 0 0 1 12 13.495V14H4v-.5a3.47 3.47 0 0 1 1.459-2.723a3.7 3.7 0 0 0 1.54-2.766a3.48 3.48 0 0 0-1.498-2.683a3.44 3.44 0 0 1-1.502-2.827v-.5h8v.5a3.43 3.43 0 0 1-1.479 2.813a3.49 3.49 0 0 0-1.521 2.678z"></svg:path>`,
})
export class VaadinHourglassStartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInboxIcon],svg[vaadin-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6V0H6v6H4l4 5l4-5z"></svg:path><svg:path fill="currentColor" d="M13 1h-2v1h1.3l2.6 8H11v2H5v-2H1.1l2.6-8H5V1H3l-3 9v5h16v-5z"></svg:path>`,
})
export class VaadinInboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinIndentIcon],svg[vaadin-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h16v3H0zm6 4h10v3H6zm0 4h10v3H6zm-6 4h16v3H0zm0-7.5v6l4-3z"></svg:path>`,
})
export class VaadinIndentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInfoIcon],svg[vaadin-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h4v11H6zm4-3a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path>`,
})
export class VaadinInfoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInfoCircleIcon],svg[vaadin-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m1 13H7V6h2zm0-8H7V3h2z"></svg:path>`,
})
export class VaadinInfoCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInfoCircleOIcon],svg[vaadin-info-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M7 6h2v7H7zm0-3h2v2H7z"></svg:path>`,
})
export class VaadinInfoCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInputIcon],svg[vaadin-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1zm-1 6H1V5h14z"></svg:path><svg:path fill="currentColor" d="M2 6h1v4H2z"></svg:path>`,
})
export class VaadinInputIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInsertIcon],svg[vaadin-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16V5l-1 1v9H1V3h9l1-1H0v14z"></svg:path><svg:path fill="currentColor" d="M16 1.4L14.6 0L7.8 6.8L6 5v5h5L9.2 8.2z"></svg:path>`,
})
export class VaadinInsertIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInstitutionIcon],svg[vaadin-institution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 3v2h16V3zM0 14h16v2H0zm16-7V6H0v1h1v5H0v1h16v-1h-1V7zM4 12H3V7h1zm3 0H6V7h1zm3 0H9V7h1zm3 0h-1V7h1z"></svg:path>`,
})
export class VaadinInstitutionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinInvoiceIcon],svg[vaadin-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 10.2c-.6.1-1.4-.3-1.7-.4l-.5.9s.9.4 1.7.5v.8h1v-.9c.9-.3 1.4-1.1 1.5-1.8c0-.8-.6-1.4-1.9-1.9c-.4-.2-1.1-.5-1.1-.9c0-.5.4-.8 1-.8c.7 0 1.4.3 1.4.3l.4-.9s-.5-.2-1.2-.4V4H4v.7c-.9.2-1.5.8-1.6 1.7c0 1.2 1.3 1.7 1.8 1.9c.6.2 1.3.6 1.3.9c0 .4-.4.9-1.1 1"></svg:path><svg:path fill="currentColor" d="M0 2v12h16V2zm15 11H1V3h14z"></svg:path><svg:path fill="currentColor" d="M8 5h6v1H8zm0 2h6v1H8zm0 2h3v1H8z"></svg:path>`,
})
export class VaadinInvoiceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinItalicIcon],svg[vaadin-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0h3L8 16H5z"></svg:path>`,
})
export class VaadinItalicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinKeyIcon],svg[vaadin-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.1 7l-.6-.3L15 0h-2L6 6.1C5.7 6 5.4 6 5 6c-2.8 0-5 2.2-5 5s2.3 5 5 5s5-2.2 5-5c0-.6-.1-1.2-.3-1.7L11 8V6h2V4h2l1-1V0zM4 13.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2"></svg:path>`,
})
export class VaadinKeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinKeyOIcon],svg[vaadin-key-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0L6 6.1C5.7 6 5.4 6 5 6c-2.8 0-5 2.2-5 5s2.3 5 5 5s5-2.2 5-5c0-.3 0-.6-.1-.9L11 9V7h2V5h2l1-1V0zm-1 6h-1.7L12 4.6zm3-2.4l-.4.4h-1.9L15 2zm-7.7 4L8 8l2-1.7v2.3l-.8.8l-.3.4l.1.5c0 .2.1.5.1.7c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4c.3 0 .5 0 .8.1l.5.1l.4-.3L13.4 1H15z"></svg:path><svg:path fill="currentColor" d="M6 11.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 6 11.5"></svg:path>`,
})
export class VaadinKeyOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinKeyboardIcon],svg[vaadin-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4v9h16V4zm10 2h1v1h-1zM8 6h1v1H8zm2 2v1H9V8zM6 6h1v1H6zm2 2v1H7V8zM4 6h1v1H4zm2 2v1H5V8zM2 6h1v1H2zm1 5H2v-1h1zm0-3h1v1H3zm9 3H4v-1h8zm0-2h-1V8h1zm2 2h-1v-1h1zm0-2h-1V7h-1V6h2z"></svg:path>`,
})
export class VaadinKeyboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinKeyboardOIcon],svg[vaadin-keyboard-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v7H1V5zm1-1H0v9h16z"></svg:path><svg:path fill="currentColor" d="M4 10h8v1H4zm-2 0h1v1H2zm11 0h1v1h-1zm-2-2h1v1h-1zM9 8h1v1H9zM7 8h1v1H7zM5 8h1v1H5zM3 8h1v1H3zm7-2h1v1h-1zm2 0v1h1v2h1V6zM8 6h1v1H8zM6 6h1v1H6zM4 6h1v1H4zM2 6h1v1H2z"></svg:path>`,
})
export class VaadinKeyboardOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLaptopIcon],svg[vaadin-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11V2H2v9H0v2h16v-2zm-4 1H6v-1h4zm3-2H3V3h10z"></svg:path>`,
})
export class VaadinLaptopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLayoutIcon],svg[vaadin-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm1 3h4v12H1zm14 12H6V3h9z"></svg:path>`,
})
export class VaadinLayoutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelDownIcon],svg[vaadin-level-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h6v11h2l-3 3l-3-3h2V3H3z"></svg:path>`,
})
export class VaadinLevelDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelDownBoldIcon],svg[vaadin-level-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 16l4-7h-3V0H3l2 3h2v6H4z"></svg:path>`,
})
export class VaadinLevelDownBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelLeftIcon],svg[vaadin-level-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12V6H4V4L1 7l3 3V8h9v6z"></svg:path>`,
})
export class VaadinLevelLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelLeftBoldIcon],svg[vaadin-level-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 7l7-4v3h9v7l-3-2V9H7v3z"></svg:path>`,
})
export class VaadinLevelLeftBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelRightIcon],svg[vaadin-level-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12V6h11V4l3 3l-3 3V8H3v6z"></svg:path>`,
})
export class VaadinLevelRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelRightBoldIcon],svg[vaadin-level-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7L9 3v3H0v7l3-2V9h6v3z"></svg:path>`,
})
export class VaadinLevelRightBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelUpIcon],svg[vaadin-level-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15H5V4H3l3-3l3 3H7v9h6z"></svg:path>`,
})
export class VaadinLevelUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelUpBoldIcon],svg[vaadin-level-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 0l4 7h-3v9H3l2-3h2V7H4z"></svg:path>`,
})
export class VaadinLevelUpBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLifebuoyIcon],svg[vaadin-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M4 8c0-2.2 1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4m8.6 1.8c.3-.5.4-1.2.4-1.8s-.1-1.3-.4-1.8l1.5-1.5Q15 6.2 15 8c0 1.8-.3 2.3-.8 3.3zm-1.3-8L9.8 3.4C9.3 3.1 8.6 3 8 3s-1.3.1-1.8.4L4.7 1.8C5.7 1.3 6.8 1 8 1s2.3.3 3.3.8M1.8 4.7l1.5 1.5C3.1 6.7 3 7.4 3 8s.1 1.3.4 1.8l-1.5 1.5Q1 9.8 1 8c0-1.8.3-2.3.8-3.3m2.9 9.5l1.5-1.5c.5.2 1.2.3 1.8.3s1.3-.1 1.8-.4l1.5 1.5Q9.8 15 8 15c-1.8 0-2.3-.3-3.3-.8"></svg:path>`,
})
export class VaadinLifebuoyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLightbulbIcon],svg[vaadin-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a5 5 0 0 0-5 5a4.8 4.8 0 0 0 2.182 3.989L6 11a.5.5 0 0 0 0 1a.5.5 0 0 0 0 1a.5.5 0 0 0 0 1a.5.5 0 0 0 0 1h.41c.342.55.915.929 1.581.999a2.12 2.12 0 0 0 1.594-.99L10 15a.5.5 0 0 0 0-1a.5.5 0 0 0 0-1a.5.5 0 0 0 0-1a.5.5 0 0 0 0-1l.8-2A4.8 4.8 0 0 0 13 5.002A5 5 0 0 0 8 0m2.25 8.21l-.25.17l-.11.29L9 10.81a.29.29 0 0 1-.27.19H7.22a.29.29 0 0 1-.219-.188L6.13 8.67L6 8.38l-.25-.18A3.91 3.91 0 0 1 4 5.003A4 4 0 1 1 12 5a3.9 3.9 0 0 1-1.736 3.201z"></svg:path><svg:path fill="currentColor" d="M10.29 3a3.15 3.15 0 0 0-2.289-1L8 3a2.13 2.13 0 0 1 1.5.62c.278.386.459.858.499 1.37L11 4.999a3.8 3.8 0 0 0-.718-2.011z"></svg:path>`,
})
export class VaadinLightbulbIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLineBarChartIcon],svg[vaadin-line-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h3v5H5zm-4 3h3v2H1zm12-2h3v4h-3zM9 9h3v7H9zm7-8.93l-5.68 4.97l-5.47-1.7L0 7.1V9l5.15-4l5.53 1.72L16 2.06z"></svg:path>`,
})
export class VaadinLineBarChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLineChartIcon],svg[vaadin-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M9 8L6 5L2 9v2l4-4l3 3l7-7V1z"></svg:path>`,
})
export class VaadinLineChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLineHIcon],svg[vaadin-line-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h16v1H0z"></svg:path>`,
})
export class VaadinLineHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLineVIcon],svg[vaadin-line-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0h1v16H8z"></svg:path>`,
})
export class VaadinLineVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLinesIcon],svg[vaadin-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v2H0zm0 4h16v2H0zm0 4h16v2H0zm0 4h16v2H0z"></svg:path>`,
})
export class VaadinLinesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLinesListIcon],svg[vaadin-lines-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h3v2H0zm0 4h3v2H0zm0 4h3v2H0zm0 4h3v2H0zM4 1h12v2H4zm0 4h12v2H4zm0 4h12v2H4zm0 4h12v2H4z"></svg:path>`,
})
export class VaadinLinesListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLinkIcon],svg[vaadin-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0L5.4 5.4C4 6.9 4 9.1 5.4 10.6c.1.1.3.2.4.3l1.5-1.5c-.1-.1-.3-.2-.4-.3c-.6-.6-.6-1.6 0-2.2l4.4-4.4c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2L12.2 6c.4.8.5 1.7.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1"></svg:path><svg:path fill="currentColor" d="M10.2 5.1L8.7 6.6s.3.2.4.3c.6.6.6 1.6 0 2.2l-4.4 4.4c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2L3.8 10c-.4-.8-.1-1.3-.4-2.5L1.1 9.8c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1c-.2-.1-.4-.3-.4-.3"></svg:path>`,
})
export class VaadinLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinListIcon],svg[vaadin-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h4v3H0zm0 4h4v3H0zm0 8h4v3H0zm0-4h4v3H0zm5-8h11v3H5zm0 4h11v3H5zm0 8h11v3H5zm0-4h11v3H5z"></svg:path>`,
})
export class VaadinListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinListOlIcon],svg[vaadin-list-ol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12v4H4zm0 6h12v4H4zm0 6h12v4H4zM1 0L.1.5l.2.7l.7-.3V4h1V0zm1.2 13.9c.3-.2.5-.5.5-.8c0-.5-.4-1-1.3-1c-.5 0-1 .1-1.2.3H.1l.2.8l.1-.1c.1-.1.4-.2.7-.2s.4.1.4.3c0 .4-.5.4-.6.4H.5v.7h.4c.3 0 .6.1.6.4c0 .2-.2.4-.6.4s-.7-.2-.8-.2l-.1-.1v.9h.1c.2.2.6.3 1.1.3c1 0 1.6-.5 1.6-1.2c0-.4-.2-.8-.6-.9M.1 6.4l.3 1s.7-.6 1.2-.3C2.7 7.9 0 9.5 0 9.5v.5h3V9H1.8c.6-.5 1.2-1.2 1-1.9C2.3 5.2.1 6.4.1 6.4"></svg:path>`,
})
export class VaadinListOlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinListSelectIcon],svg[vaadin-list-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h12v2H1zm0 8h13v2H1zm0 3h11v2H1zm0 3h14v2H1zM0 3v4h16V3zm11 3H1V4h10z"></svg:path>`,
})
export class VaadinListSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinListUlIcon],svg[vaadin-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h3v3H0zm0 5h3v3H0zm0 5h3v3H0zM5 1h11v3H5zm0 5h11v3H5zm0 5h11v3H5z"></svg:path>`,
})
export class VaadinListUlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLocationArrowIcon],svg[vaadin-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 9l16-9l-9 16V9z"></svg:path>`,
})
export class VaadinLocationArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLocationArrowCircleIcon],svg[vaadin-location-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M7 14V9H2l10-5z"></svg:path>`,
})
export class VaadinLocationArrowCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLocationArrowCircleOIcon],svg[vaadin-location-arrow-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8"></svg:path><svg:path fill="currentColor" d="m2 9l10-5l-5 10V9z"></svg:path>`,
})
export class VaadinLocationArrowCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinLockIcon],svg[vaadin-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V4.9C12 2.7 10.4 1 8.2 1h-.3C5.8 1 4 2.7 4 4.9V8H3l.1 5S3 16 8 16s5-3 5-3V8zm-3 6H8v-2c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1zm1-6H6V4.9C6 3.8 6.9 3 7.9 3h.3c1 0 1.8.8 1.8 1.9z"></svg:path>`,
})
export class VaadinLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMagicIcon],svg[vaadin-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h3v1H0zm5-5h1v3H5zm1 11H5V8.5l1 1zm5-5H9.5l-1-1H11zM3.131 7.161l.707.707l-2.97 2.97l-.707-.707zm7-7l.707.707l-2.97 2.97l-.707-.707zM.836.199l3.465 3.465l-.707.707L.129.906zM6.1 4.1L4 6.1l9.8 9.9l2.2-2.1zm0 1.4L8.5 8l-.6.6l-2.5-2.5z"></svg:path>`,
})
export class VaadinMagicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMagnetIcon],svg[vaadin-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0h5v4h-5zm0 5v3c0 1.6-1.4 3-3 3S5 9.6 5 8V5H0v3c0 4.4 3.6 8 8 8s8-3.6 8-8V5zM0 0h5v4H0z"></svg:path>`,
})
export class VaadinMagnetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMailboxIcon],svg[vaadin-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3l-3 9v5h16v-5zm-2 9v2H5v-2H1.1l2.7-8h8.6l2.7 8z"></svg:path>`,
})
export class VaadinMailboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMaleIcon],svg[vaadin-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path><svg:path fill="currentColor" d="m12.79 7.32l-2.6-2.63A2.3 2.3 0 0 0 8.54 4H7.469c-.648 0-1.235.264-1.659.69l-2.6 2.63a.73.73 0 1 0 .998 1.003L6 6.53V16h1.5v-5h1v5H10V6.53l1.75 1.8a.73.73 0 1 0 1.041-1.009z"></svg:path>`,
})
export class VaadinMaleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMapMarkerIcon],svg[vaadin-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11s5-8.2 5-11s-2.2-5-5-5m0 8C6.3 8 5 6.7 5 5s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path>`,
})
export class VaadinMapMarkerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginIcon],svg[vaadin-margin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h1v1H0zm2 0h1v1H2zM1 1h1v1H1zM0 2h1v1H0zm2 0h1v1H2zM1 3h1v1H1zM0 4h1v1H0zm1 1h1v1H1zM0 6h1v1H0zm1 1h1v1H1zM0 8h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm2 0h1v1H2zm-1 1h1v1H1zm2 0h1v1H3zm2 0h1v1H5zM4 0h1v1H4zM3 1h1v1H3zm2 0h1v1H5zM4 14h1v1H4zM6 0h1v1H6zm2 0h1v1H8zM7 1h1v1H7zM6 14h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm2 0h1v1H9zm2 0h1v1h-1zM10 0h1v1h-1zM9 1h1v1H9zm2 0h1v1h-1zm-1 13h1v1h-1zm2-14h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M13 2h-1v1h-1V2h-1v1H9V2H8v1H7V2H6v1H5V2H4v1H3v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1V9h-1V8h1V7h-1V6h1V5h-1V4h1V3h-1zm-1 10H4V4h8zm2-10h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M13 13h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm0-14h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1z"></svg:path>`,
})
export class VaadinMarginIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginBottomIcon],svg[vaadin-margin-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1V0zm15 12H1V1h14zM0 15h1v1H0zm1-1h1v1H1zm1 1h1v1H2zm1-1h1v1H3zm1 1h1v1H4zm1-1h1v1H5zm1 1h1v1H6zm1-1h1v1H7zm1 1h1v1H8zm1-1h1v1H9zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1z"></svg:path>`,
})
export class VaadinMarginBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginLeftIcon],svg[vaadin-margin-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1h13V0zm13 15H4V1h11zM0 0h1v1H0zm1 1h1v1H1zM0 2h1v1H0zm1 1h1v1H1zM0 4h1v1H0zm1 1h1v1H1zM0 6h1v1H0zm1 1h1v1H1zM0 8h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1z"></svg:path>`,
})
export class VaadinMarginLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginRightIcon],svg[vaadin-margin-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2V1h-1V0H0v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1V8h1V7h-1V6h1V5h-1V4h1V3h-1V2zm-2 13H1V1h11zm3 0h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1z"></svg:path>`,
})
export class VaadinMarginRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginTopIcon],svg[vaadin-margin-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2v1h-1V2h-1v1h-1V2h-1v1h-1V2H9v1H8V2H7v1H6V2H5v1H4V2H3v1H2V2H1v1H0v13h16V2zm0 13H1V4h14zm0-15h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zM9 0h1v1H9zM8 1h1v1H8zM7 0h1v1H7zM6 1h1v1H6zM5 0h1v1H5zM4 1h1v1H4zM3 0h1v1H3zM2 1h1v1H2zM1 0h1v1H1zM0 1h1v1H0z"></svg:path>`,
})
export class VaadinMarginTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMedalIcon],svg[vaadin-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.2c-.3 0-.5-.1-.8-.2L8 11.5l-1.2.5c-.2.1-.5.2-.8.2c-.2 0-.3 0-.5-.1L5 16l3-2l3 2l-.6-3.9c-.1.1-.3.1-.4.1m2.9-6.3c-.1-.2-.1-.5 0-.7l.6-1.2c.2-.4 0-.9-.5-1.1l-1.3-.5c-.2-.1-.4-.3-.5-.5L10.7.6c-.1-.4-.4-.6-.7-.6c-.1 0-.3 0-.4.1L8.3.7H8c-.1 0-.2 0-.3-.1L6.4.1C6.3 0 6.1 0 6 0c-.3 0-.6.2-.8.5l-.5 1.4c0 .2-.2.4-.4.5l-1.4.5c-.4.1-.6.6-.4 1.1l.6 1.3c.1.2.1.5 0 .7l-.6 1.2c-.2.4 0 .9.5 1.1l1.3.5c.2.1.4.3.5.5l.5 1.3c.1.4.4.6.7.6c.1 0 .2 0 .3-.1l1.3-.6c.1 0 .2-.1.3-.1s.2 0 .3.1l1.3.6c.1.1.2.1.3.1c.3 0 .6-.2.8-.5l.5-1.3c.1-.2.3-.4.5-.5l1.3-.5c.4-.2.7-.7.5-1.1zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"></svg:path><svg:path fill="currentColor" d="M11 5.6a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class VaadinMedalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMegafoneIcon],svg[vaadin-megafone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5.4L15 5V1c0-.6-.4-1-1-1s-1 .4-1 1v.5C11 2.4 8 4 5 4H2.5C1.1 4 0 5.2 0 6.5c0 .9.5 1.7 1.2 2.1l1.1 5.9c0 .3.3.5.7.5h.2l3.6-.7c.4-.1.6-.4.5-.7c-.3-.6-.8-1.5-1.2-1.8c-.2-.1-.5-.9-.7-1.8H6v-.9c2.7.3 6 1.6 7 2.4v.5c0 .6.4 1 1 1s1-.4 1-1V8l.4-.3c.4-.3.6-.7.6-1.1v-.2c0-.4-.2-.7-.5-1M2 5h3v1H2zm3.6 7.6c.1 0 .3.3.5.7l-2.8.7l-1-5h1.9c.2 1.3.6 3.2 1.4 3.6m7.4-2.3c-1.6-.8-4.4-2-7-2.3V5c2.6-.3 5.4-1.4 7-2.3z"></svg:path>`,
})
export class VaadinMegafoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMehOIcon],svg[vaadin-meh-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-7 4h8v1H4z"></svg:path>`,
})
export class VaadinMehOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMenuIcon],svg[vaadin-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v3H0zm0 5h16v3H0zm0 5h16v3H0z"></svg:path>`,
})
export class VaadinMenuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMicrophoneIcon],svg[vaadin-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10c-1.7 0-3-1.3-3-3V3c0-1.6 1.3-3 3-3c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3"></svg:path><svg:path fill="currentColor" d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-.4C5.8 11 4 9.4 4 7.5V5c-.6 0-1 .4-1 1v1.5c0 2.2 1.8 4.1 4 4.4V14c-3 0-2.5 2-2.5 2h7s.5-2-2.5-2v-2.1c2.2-.4 4-2.2 4-4.4V6c0-.6-.4-1-1-1"></svg:path>`,
})
export class VaadinMicrophoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMinusIcon],svg[vaadin-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h12v2H2z"></svg:path>`,
})
export class VaadinMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMinusCircleIcon],svg[vaadin-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m5 9H3V7h10z"></svg:path>`,
})
export class VaadinMinusCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMinusCircleOIcon],svg[vaadin-minus-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M3 7h10v2H3z"></svg:path>`,
})
export class VaadinMinusCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMinusSquareOIcon],svg[vaadin-minus-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h8v2H4z"></svg:path><svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path>`,
})
export class VaadinMinusSquareOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMobileIcon],svg[vaadin-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v14h8V1zm5 13H7v-1h2zm2-2H5V3h6z"></svg:path>`,
})
export class VaadinMobileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMobileBrowserIcon],svg[vaadin-mobile-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H3v5H0v11h7v-3h9zM6 1h9v1H6zM4 1h1v1H4zm0 14H3v-1h1zm2-2H1V6h5zm9-1H7V5H4V3h11z"></svg:path>`,
})
export class VaadinMobileBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMobileRetroIcon],svg[vaadin-mobile-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0h-1v2H4v14h7zM6 14H5v-1h1zm0-2H5v-1h1zm0-2H5V9h1zm2 4H7v-1h1zm0-2H7v-1h1zm0-2H7V9h1zm2 4H9v-1h1zm0-2H9v-1h1zm0-2H9V9h1zm0-2H5V4h5z"></svg:path>`,
})
export class VaadinMobileRetroIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinModalIcon],svg[vaadin-modal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm15 13H1V4h14zm0-11h-1V2h1z"></svg:path>`,
})
export class VaadinModalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinModalListIcon],svg[vaadin-modal-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h2v1H3zm3 0h7v1H6zM3 8h2v1H3zm3 0h7v1H6zm-3 2h2v1H3zm3 0h7v1H6z"></svg:path><svg:path fill="currentColor" d="M0 1v14h16V1zm15 13H1V4h14zm0-11h-1V2h1z"></svg:path>`,
})
export class VaadinModalListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMoneyIcon],svg[vaadin-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v8H1V4zm1-1H0v10h16z"></svg:path><svg:path fill="currentColor" d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1V6h-1V5zM5 8c0-1.7 1.3-3 3-3H3v1H2v4h1v1h5c-1.7 0-3-1.3-3-3"></svg:path>`,
})
export class VaadinMoneyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMoneyDepositIcon],svg[vaadin-money-deposit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 16l-2-3h1v-2h2v2h1zm7-15v8H1V1zm1-1H0v10h16z"></svg:path><svg:path fill="currentColor" d="M8 2a3 3 0 1 1 0 6h5V7h1V3h-1V2zM5 5a3 3 0 0 1 3-3H3v1H2v4h1v1h5a3 3 0 0 1-3-3"></svg:path>`,
})
export class VaadinMoneyDepositIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMoneyExchangeIcon],svg[vaadin-money-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 14l-3 2v-1H8.25l2-2H13v-1zM0 2l3-2v1h4.75l-2 2H3v1zm9.74-2L0 9.74L6.26 16L16 6.26zM1.39 9.74l8.35-8.35l4.87 4.87l-8.35 8.35z"></svg:path><svg:path fill="currentColor" d="m4.17 9.74l-.7.7l2.09 2.09l.7-.7l.74.69l2.74-2.78a2.461 2.461 0 0 1-3.48-3.48L3.48 9z"></svg:path><svg:path fill="currentColor" d="m12.52 5.57l-2.09-2.09l-.7.7l-.73-.7l-2.74 2.78a2.461 2.461 0 0 1 3.48 3.48L12.52 7l-.7-.7z"></svg:path>`,
})
export class VaadinMoneyExchangeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMoneyWithdrawIcon],svg[vaadin-money-withdraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 0l2 3H9v2H7V3H6zm7 7v8H1V7zm1-1H0v10h16z"></svg:path><svg:path fill="currentColor" d="M8 8a3 3 0 1 1 0 6h5v-1h1V9h-1V8zm-3 3a3 3 0 0 1 3-3H3v1H2v4h1v1h5a3 3 0 0 1-3-3"></svg:path>`,
})
export class VaadinMoneyWithdrawIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMoonIcon],svg[vaadin-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 15c-3.9 0-7-3.1-7-7c0-2.4 1.2-4.6 3.2-5.9C4.1 2.7 4 3.4 4 4c0 4.9 4 8.9 8.9 9c-1.3 1.3-3 2-4.9 2"></svg:path>`,
})
export class VaadinMoonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMoonOIcon],svg[vaadin-moon-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1c0-1.4.3-2.7.9-3.8c-3.4.9-6 4.1-6 7.9C0 12.4 3.6 16 8.1 16c3.1 0 5.8-1.8 7.2-4.4q-.9.3-2.1.3M8.1 15C4.2 15 1 11.8 1 7.9c0-2.5 1.3-4.7 3.3-6c-.2.6-.2 1.2-.2 1.9c0 5 4.1 9.1 9.1 9.2c-1.4 1.2-3.2 2-5.1 2"></svg:path>`,
})
export class VaadinMoonOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMorningIcon],svg[vaadin-morning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 10l-1.58-1.18L13.2 7l-2-.23L11 4.8l-1.82.78L8 4L6.82 5.58L5 4.8l-.23 2L2.8 7l.78 1.82L2 10H0v1h16v-1zM4 10a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 9.993z"></svg:path>`,
})
export class VaadinMorningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMovieIcon],svg[vaadin-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V4H0v9h12v-3l4 2V5zm-3 4H2V6h7z"></svg:path><svg:path fill="currentColor" d="M5 8.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinMovieIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMusicIcon],svg[vaadin-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3v9.4c-.4-.2-.9-.4-1.5-.4c-1.4 0-2.5.9-2.5 2s1.1 2 2.5 2S5 15.1 5 14V6.7l7-2.3v5.1c-.4-.3-.9-.5-1.5-.5C9.1 9 8 9.9 8 11s1.1 2 2.5 2s2.5-.9 2.5-2V0z"></svg:path>`,
})
export class VaadinMusicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinMuteIcon],svg[vaadin-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.2 0L11 4.2V3c0-1.7-1.3-3-3-3S5 1.3 5 3v4c0 .9.4 1.7 1 2.2l-.8.8C4.5 9.4 4 8.5 4 7.5V5c-.6 0-1 .4-1 1v1.5c0 1.3.6 2.4 1.5 3.2L0 15.3v.7h.7L16 .6V0zm-2.7 5.1l-.5.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-.4c-.3 0-.6-.1-.9-.1l-.9.7c.3.1.6.2 1 .3V14c-3 0-2.5 2-2.5 2h7s.5-2-2.5-2v-2.1c2.2-.4 4-2.2 4-4.4V6c0-.4-.2-.7-.5-.9"></svg:path><svg:path fill="currentColor" d="M11 7v-.4L7.7 10H8c1.7 0 3-1.4 3-3"></svg:path>`,
})
export class VaadinMuteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinNativeButtonIcon],svg[vaadin-native-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12H1c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1"></svg:path>`,
})
export class VaadinNativeButtonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinNewspaperIcon],svg[vaadin-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h11v4H2zm0-2h11v1H2zm6 11h3v1H8zm0-2h5v1H8zm0-2h5v1H8zm-6 4h5v1H2zm0-2h5v1H2zm0-2h5v1H2z"></svg:path><svg:path fill="currentColor" d="M15 2V0H0v14.5A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2zM1.5 15a.5.5 0 0 1-.5-.5V1h13v12.5c0 1.5 1 1.5 1 1.5z"></svg:path>`,
})
export class VaadinNewspaperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinNotebookIcon],svg[vaadin-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0 0 .96H2v1h-.52a.48.48 0 0 0 0 .96H2v1h-.52a.48.48 0 0 0 0 .96H2v2h12V0zm1.5 14a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M12 6H6V3h6z"></svg:path>`,
})
export class VaadinNotebookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinNurseIcon],svg[vaadin-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.2 12a4.08 4.08 0 0 0-3.931-2.37L8 13.53l-3.28-3.9a4.16 4.16 0 0 0-3.909 2.345a9.1 9.1 0 0 0-.808 2.988L2 15v1h12v-1h2a9.2 9.2 0 0 0-.824-3.057z"></svg:path><svg:path fill="currentColor" d="M6.57 8.73a.82.82 0 0 1-.685.729L8 12l2.12-2.52a.82.82 0 0 1-.69-.727c0-.613.8-.413 1.43-1.453C10.86 7.27 13.74 0 8 0S5.14 7.27 5.14 7.27c.63 1.05 1.44.85 1.43 1.46"></svg:path>`,
})
export class VaadinNurseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOfficeIcon],svg[vaadin-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1zm-8-4H4V9h2zm0-3H4V6h2zm0-3H4V3h2zm3 6H7V9h2zm0-3H7V6h2zm0-3H7V3h2zm4 6h-2V9h2zm0-3h-2V6h2z"></svg:path>`,
})
export class VaadinOfficeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOpenBookIcon],svg[vaadin-open-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4.7V4a6.8 6.8 0 0 0-4.484-1.999a2.84 2.84 0 0 0-2.513.995a3.02 3.02 0 0 0-2.515-.995A6.8 6.8 0 0 0 1 4v.7L0 5v10l6.7-1.4l.3.4h2l.3-.4L16 15V5zm-9.52 6.61a8.2 8.2 0 0 0-3.526.902L2 4.42A5.22 5.22 0 0 1 5.369 3a4.55 4.55 0 0 1 2.159.701l-.019 7.869a6.6 6.6 0 0 0-2.039-.259zm8.52.88a8.1 8.1 0 0 0-3.468-.88l-.161-.002c-.66 0-1.297.096-1.899.274l.047-7.902a4.5 4.5 0 0 1 2.096-.679a5.22 5.22 0 0 1 3.386 1.422l-.003 7.768z"></svg:path>`,
})
export class VaadinOpenBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOptionIcon],svg[vaadin-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11a1 1 0 0 0 2 0v-1H5a1 1 0 0 0-1 1"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm11 9a2 2 0 1 1-2 2v-1H7v1a2 2 0 1 1-2-2h1V7H5a2 2 0 1 1 2-2v1h2V5a2 2 0 1 1 2 2h-1v2z"></svg:path><svg:path fill="currentColor" d="M12 5a1 1 0 0 0-2 0v1h1a1 1 0 0 0 1-1M5 4a1 1 0 0 0 0 2h1V5a1 1 0 0 0-1-1m2 3h2v2H7zm3 4a1 1 0 1 0 1-1h-1z"></svg:path>`,
})
export class VaadinOptionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOptionAIcon],svg[vaadin-option-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 10H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5M11 3.5A1.5 1.5 0 1 1 12.5 5H11zm-6 9A1.5 1.5 0 1 1 3.5 11H5zM5 5H3.5A1.5 1.5 0 1 1 5 3.5zm5 5H6V6h4zm2.5 4a1.5 1.5 0 0 1-1.5-1.5V11h1.5a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class VaadinOptionAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOptionsIcon],svg[vaadin-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 5 3.5"></svg:path><svg:path fill="currentColor" d="M3.5 0C1.6 0 0 1.6 0 3.5S1.6 7 3.5 7S7 5.4 7 3.5S5.4 0 3.5 0m0 6C2.1 6 1 4.9 1 3.5S2.1 1 3.5 1S6 2.1 6 3.5S4.9 6 3.5 6m0 2C1.6 8 0 9.6 0 11.5S1.6 15 3.5 15S7 13.4 7 11.5S5.4 8 3.5 8m0 6C2.1 14 1 12.9 1 11.5S2.1 9 3.5 9S6 10.1 6 11.5S4.9 14 3.5 14M8 2h8v3H8zm0 8h8v3H8z"></svg:path>`,
})
export class VaadinOptionsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOrientationIcon],svg[vaadin-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2L16 5h-1c0-2.2-2-3.9-4-3.9V0L9 1.5L11 3z"></svg:path><svg:path fill="currentColor" d="M9 9h6v6H8V0H0v16h16V8H9zM7 8H6v1h1v6H1V1h6z"></svg:path><svg:path fill="currentColor" d="M2 8h1v1H2zm2 0h1v1H4z"></svg:path>`,
})
export class VaadinOrientationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOutIcon],svg[vaadin-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 8c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5m0-1C2.7 7 2 7.7 2 8.5v2c0 .8.7 1.5 1.5 1.5S5 11.3 5 10.5v-2C5 7.7 4.3 7 3.5 7M8 7v3.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V7H6v3.5c0 .8.7 1.5 1.5 1.5S9 11.3 9 10.5V7zm5 0h-3v1h1v4h1V8h1z"></svg:path><svg:path fill="currentColor" d="M15 6V5h-2.4L8.9 2c.1-.2.1-.3.1-.5C9 .7 8.3 0 7.5 0S6 .7 6 1.5c0 .2 0 .3.1.5L2.4 5H0v9h1v1h15V6zM6.7 2.8c.3.1.5.2.8.2s.5-.1.8-.2L11 5H4zM14 13H1V6h13z"></svg:path>`,
})
export class VaadinOutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinOutboxIcon],svg[vaadin-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v6h4V5h2L8 0L4 5z"></svg:path><svg:path fill="currentColor" d="M13 2h-2l.9 1h.4l2.6 8H11v2H5v-2H1.1l2.6-8h.4L5 2H3l-3 9v5h16v-5z"></svg:path>`,
})
export class VaadinOutboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPackageIcon],svg[vaadin-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 2v10l8 4l8-4V2zm0 1l2.1.5l-5.9 1.9l-2.3-.8zm0 13.9l-7-3.5V3.3l3 1v3.4L5 8V4.7l3 1zm.5-10.1l-2.7-.9L12 2l2.4.6z"></svg:path>`,
})
export class VaadinPackageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingIcon],svg[vaadin-padding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v-1h1v-1H1v-1h1v-1H1V9h1V8H1V7h1V6H1V5h1V4H1V3h1V2H1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M3 2h1v1H3zm1 1h1v1H4zm2 0h1v1H6zM5 2h1v1H5zm2 0h1v1H7zm2 0h1v1H9zM8 3h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm-1-1h1v1h-1zm2 0h1v1h-1zm-1 3h1v1h-1zm1-1h1v1h-1zm-1 3h1v1h-1zm1-1h1v1h-1zm-1 3h1v1h-1zm1-1h1v1h-1zm-1 3h1v1h-1zm1-1h1v1h-1zm-1 3h1v1h-1zm1-1h1v1h-1zM2 3h1v1H2zm1 1h1v1H3zM2 5h1v1H2zm1 1h1v1H3zM2 7h1v1H2zm1 1h1v1H3zM2 9h1v1H2zm1 1h1v1H3zm-1 1h1v1H2zm0 2h1v1H2zm1-1h1v1H3zm1-1h1v1H4zm0 2h1v1H4zm1-1h1v1H5zm1 1h1v1H6zm1-1h1v1H7zm2 0h1v1H9zm-1 1h1v1H8zm3-1h1v1h-1zm-1 1h1v1h-1z"></svg:path>`,
})
export class VaadinPaddingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingBottomIcon],svg[vaadin-padding-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16V0H0v16zM1 13h1v-1H1V1h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1z"></svg:path><svg:path fill="currentColor" d="M12 13h1v1h-1zm1-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm1 1h1v1h-1zm-2 0h1v1H8zm-2 0h1v1H6zm1-1h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm1 1h1v1H4zm-2 0h1v1H2z"></svg:path>`,
})
export class VaadinPaddingBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingLeftIcon],svg[vaadin-padding-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 16h16V0H0zM3 1v1h1V1h11v14H3v-1H2v1H1v-1h1v-1H1v-1h1v-1H1v-1h1V9H1V8h1V7H1V6h1V5H1V4h1V3H1V2h1V1z"></svg:path><svg:path fill="currentColor" d="M2 12h1v1H2zm1 1h1v1H3zm0-2h1v1H3zm0-2h1v1H3zm-1 1h1v1H2zm0-2h1v1H2zm0-2h1v1H2zm1 1h1v1H3zm0-2h1v1H3zm0-2h1v1H3zM2 4h1v1H2zm0-2h1v1H2z"></svg:path>`,
})
export class VaadinPaddingLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingRightIcon],svg[vaadin-padding-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H0v16h16zm-3 15v-1h-1v1H1V1h12v1h1V1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1z"></svg:path><svg:path fill="currentColor" d="M13 3h1v1h-1zm-1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1z"></svg:path>`,
})
export class VaadinPaddingRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingTopIcon],svg[vaadin-padding-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm15 3h-1v1h1v11H1V3h1V2H1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M3 2h1v1H3zM2 3h1v1H2zm2 0h1v1H4zm2 0h1v1H6zM5 2h1v1H5zm2 0h1v1H7zm2 0h1v1H9zM8 3h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm-1-1h1v1h-1zm2 0h1v1h-1z"></svg:path>`,
})
export class VaadinPaddingTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaintRollIcon],svg[vaadin-paint-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6.9V2h-2V0H1v1H0v3h1v1h13V3h1v3.1l-8 1V9H6v.9s.5 0 .5.9s-.5.6-.5 1.5v2.8s0 .9 1.5.9s1.5-.9 1.5-.9v-2.8c0-.9-.5-.7-.5-1.5s.5-.9.5-.9V9H8V7.9z"></svg:path>`,
})
export class VaadinPaintRollIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaintbrushIcon],svg[vaadin-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.6 11.6l-1.2-1.2c-.8-.2-2-.1-2.7 1c-.8 1.1-.3 2.8-1.7 4.6c0 0 3.5 0 4.8-1.3c1.2-1.2 1.2-2.2 1-3zm.2-3.5c-.2.3-.5.7-.7 1c0 .2-.1.3-.2.4L6.4 11c.1-.1.3-.2.4-.3c.3-.2.7-.4 1-.7c.4 0 .6-.2.8-.4L6.4 7.4c-.2.2-.4.4-.6.7m10-7.9c-.3-.3-.7-.3-1-.1c0 0-3 2.5-5.9 5.1c-.4.4-.7.7-1.1 1c-.2.2-.4.4-.6.5l2.1 2.1c.2-.2.4-.4.5-.7c.3-.4.6-.7.9-1.1c2.5-3 5.1-5.9 5.1-5.9c.3-.2.3-.6 0-.9"></svg:path>`,
})
export class VaadinPaintbrushIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaleteIcon],svg[vaadin-palete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 0C1.87 0-.86 7.38.24 9.92c.82 1.89 2.62.08 3.34 1c1.88 2.46-2.11 3.81.09 4.68C6.26 16.66 16 16 16 7.07C16 4.38 14.66 0 8.25 0M4.47 9A1.5 1.5 0 1 1 6 7.5A1.5 1.5 0 0 1 4.5 9h-.032zM6 3.5A1.5 1.5 0 1 1 7.5 5h-.032A1.5 1.5 0 0 1 6 3.5M8.47 14A1.5 1.5 0 1 1 10 12.5A1.5 1.5 0 0 1 8.5 14h-.032zm4-3A1.5 1.5 0 1 1 14 9.5a1.5 1.5 0 0 1-1.5 1.5h-.032zm0-5A1.5 1.5 0 1 1 14 4.5A1.5 1.5 0 0 1 12.5 6h-.032z"></svg:path>`,
})
export class VaadinPaleteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPanelIcon],svg[vaadin-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm13 15H1V3h12zm2 0h-1v-1h1zm0-2h-1V5h1zm0-9h-1V3h1z"></svg:path>`,
})
export class VaadinPanelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaperclipIcon],svg[vaadin-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.7 15.3c-.7 0-1.4-.3-1.9-.8c-.9-.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-.2.2-.5.2-.7 0s-.2-.5 0-.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-.8.8-.6 1.7 0 2.2c.6.6 1.5.8 2.2 0l8.9-8.9c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-7.4 7.4c-.2.2-.5.2-.7 0s-.2-.5 0-.7l7.4-7.4c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-8.9 8.9c-.6.4-1.3.7-1.9.7"></svg:path>`,
})
export class VaadinPaperclipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaperplaneIcon],svg[vaadin-paperplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l4.9 1.4H5v-.1L12.1 4L11 5.2l-6.2 6.6L5 15l2.9-3.2L10 16l6-16z"></svg:path>`,
})
export class VaadinPaperplaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPaperplaneOIcon],svg[vaadin-paperplane-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0L0 8l4.7 1.6L5 15l2.5-2.8L10 16zM7.5 10.4l4.3-5.9l-6.2 4.3l-3-1L14.2 2L9.7 13.8z"></svg:path>`,
})
export class VaadinPaperplaneOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinParagraphIcon],svg[vaadin-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 0C3 0 1 2 1 4.5S3 9 5.5 9H8v7h2V2h1v14h2V2h2V0z"></svg:path>`,
})
export class VaadinParagraphIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPasswordIcon],svg[vaadin-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1zm-1 6H1V5h14z"></svg:path><svg:path fill="currentColor" d="M6 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinPasswordIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPasteIcon],svg[vaadin-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-3V0H0v14h6v2h10V7zM3 1h4v1H3zm12 14H7V5h5v3h3zm-2-8V5l2 2z"></svg:path>`,
})
export class VaadinPasteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPauseIcon],svg[vaadin-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h7v14H0zm9 0h7v14H9z"></svg:path>`,
})
export class VaadinPauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPencilIcon],svg[vaadin-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11.9L0 16l4.1-1l9.2-9.2l-3.1-3.1zm.5 3.1l-.4-.5l.4-2l2 2zm9.4-10.6l-8.1 8l-.6-.6l8.1-8zM15.3.7C14.2-.4 12.7.2 12.7.2l-1.5 1.5l3.1 3.1l1.5-1.5c0-.1.6-1.5-.5-2.6m-1.9.9l-.5-.5C13.5.5 14 1 14 1z"></svg:path>`,
})
export class VaadinPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPhoneIcon],svg[vaadin-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5c-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7c.4.4 3.9 4 7 3.9c1.8 0 2.7-.2 4.9-2.6c1-1.1-2.5-3.3-3.6-3.4"></svg:path>`,
})
export class VaadinPhoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPhoneLandlineIcon],svg[vaadin-phone-landline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.88 3.86l-.61-1.31a1.21 1.21 0 0 0-.792-.658c-1.938-.528-4.161-.851-6.453-.891a27.5 27.5 0 0 0-6.687.934c-.165.048-.453.29-.605.609L.12 3.861a1.2 1.2 0 0 0-.12.52v.87l-.001.041c0 .392.318.71.71.71l.033-.001H3.26a.76.76 0 0 0 .742-.76L4 5.188v-.85a.65.65 0 0 1 .298-.546a6.9 6.9 0 0 1 3.724-.791a6.97 6.97 0 0 1 3.717.788c.143.099.262.3.262.529v.872a.76.76 0 0 0 .739.81h2.521l.031.001a.71.71 0 0 0 .71-.71l-.001-.043V4.38a1.2 1.2 0 0 0-.123-.527z"></svg:path><svg:path fill="currentColor" d="M12 8.3a4.73 4.73 0 0 1-1.001-2.92L11 5.296V5h-1v1H6V5H5v.33l.001.08a4.74 4.74 0 0 1-1.009 2.93L1 12v3h14v-3zM8 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path fill="currentColor" d="M10 10a2 2 0 1 1-3.999.001A2 2 0 0 1 10 10"></svg:path>`,
})
export class VaadinPhoneLandlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPictureIcon],svg[vaadin-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14H0V2h16zM1 13h14V3H1z"></svg:path><svg:path fill="currentColor" d="M2 10v2h12v-1s.2-1.7-2-2c-1.9-.3-2.2.6-3.8.6C7.1 9.6 7.3 8 5 8c-1.7 0-3 2-3 2m11-4a2 2 0 1 1-3.999.001A2 2 0 0 1 13 6"></svg:path>`,
})
export class VaadinPictureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPieBarChartIcon],svg[vaadin-pie-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h3v5H5zm-4 3h3v2H1zm12-2h3v4h-3zM9 9h3v7H9zM5 0a5 5 0 1 0 .001 10.001A5 5 0 0 0 5 0m0 9a4 4 0 0 1 0-8v4h4a4 4 0 0 1-4 4"></svg:path>`,
})
export class VaadinPieBarChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPieChartIcon],svg[vaadin-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1c3.2.2 5.7 2.8 6 6H9zm-.5-1H8v8h8v-.5C16 3.4 12.6 0 8.5 0"></svg:path><svg:path fill="currentColor" d="M7 9V1c-3.9.3-7 3.5-7 7.5C0 12.6 3.4 16 7.5 16c4 0 7.2-3.1 7.5-7z"></svg:path>`,
})
export class VaadinPieChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPiggyBankIcon],svg[vaadin-piggy-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.93 5.75a1.25 1.25 0 0 0-.3-.51a.83.83 0 0 0-.394-.238c.074.117.141.252.191.396q.085.221.103.467a1.8 1.8 0 0 1 0 .424a1 1 0 0 0-.142-.292a1.2 1.2 0 0 0-.48-.383a.94.94 0 0 0-1.195.382q-.075.123-.12.266c-1.182-1.968-3.309-3.271-5.741-3.271q-.186 0-.369.01a8.2 8.2 0 0 0-2.231.313C5.19 2.88 4.62 2 2 2l.8 2.51a5.2 5.2 0 0 0-1.247 1.465L0 6s-.17 4 1 4h.54a5.3 5.3 0 0 0 1.445 1.589L3 13.999h1.08c1.31 0 1.92 0 1.92-.75v-.39a8.3 8.3 0 0 0 3.051-.008L9 13.249c0 .75.62.75 1.94.75H12v-2.39a4.8 4.8 0 0 0 1.903-2.717c.057-.027.114-.024.172-.024s.115-.003.172-.01c.251-.046.48-.144.679-.283a1.65 1.65 0 0 0 .591-.765q.042-.14.063-.292l.001-.01c.221-.262.372-.59.419-.951a1.8 1.8 0 0 0-.072-.822zm-12.42 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.88 5a.5.5 0 0 1-.599-.247a.39.39 0 0 1 .296-.503a8 8 0 0 1 2.009-.22l.101-.001q1.01.002 1.949.232c.126.024.262.182.262.372a.4.4 0 0 1-.019.119a.48.48 0 0 1-.346.247H9.38a7.2 7.2 0 0 0-1.706-.2h-.089c-.605 0-1.193.073-1.756.211zm8.7 2.93a1.2 1.2 0 0 1-.453.199L14 8.14v-.45c.165.125.374.2.6.2h.021zm.08-.68a.44.44 0 0 1-.459-.248a.6.6 0 0 1 .001-.566a.33.33 0 0 1 .43-.096a.48.48 0 0 1 .308.448v.001a1.5 1.5 0 0 1-.001.418a1.3 1.3 0 0 1-.282.022z"></svg:path>`,
})
export class VaadinPiggyBankIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPiggyBankCoinIcon],svg[vaadin-piggy-bank-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.93 7.75a1.25 1.25 0 0 0-.3-.51a.83.83 0 0 0-.394-.238c.074.117.141.252.191.396q.085.221.103.467a1.8 1.8 0 0 1 0 .424a1 1 0 0 0-.142-.292a1.2 1.2 0 0 0-.48-.383a.94.94 0 0 0-1.195.382q-.075.123-.12.266c-1.182-1.968-3.309-3.271-5.741-3.271q-.186 0-.369.01a8.2 8.2 0 0 0-2.231.313C5.19 4.88 4.62 4 2 4l.8 2.51a5.2 5.2 0 0 0-1.247 1.465L0 8s-.17 4 1 4h.54a5.3 5.3 0 0 0 1.445 1.589L3 16h1.08C5.39 16 6 16 6 15.25v-.39a8.3 8.3 0 0 0 3.051-.008L9 15.25c0 .75.62.75 1.94.75H12v-2.39a4.8 4.8 0 0 0 1.903-2.717c.057-.027.114-.024.172-.024s.115-.003.172-.01c.251-.046.48-.144.679-.283a1.65 1.65 0 0 0 .591-.765q.042-.14.063-.292l.001-.01c.221-.262.372-.59.419-.951a1.8 1.8 0 0 0-.072-.822zm-12.42 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.88 7a.5.5 0 0 1-.599-.247a.39.39 0 0 1 .296-.503a8 8 0 0 1 2.009-.22l.101-.001q1.01.002 1.949.232c.126.024.262.182.262.372a.4.4 0 0 1-.019.119a.48.48 0 0 1-.346.247H9.38a7.2 7.2 0 0 0-1.706-.2h-.089c-.605 0-1.193.073-1.756.211zm8.7 2.93a1.2 1.2 0 0 1-.453.199L14 10.13v-.44c.165.125.374.2.6.2h.021zm.08-.68a.44.44 0 0 1-.459-.248a.6.6 0 0 1 .001-.566a.33.33 0 0 1 .43-.096a.48.48 0 0 1 .308.448v.001a1.5 1.5 0 0 1-.001.418a1.3 1.3 0 0 1-.282.022zM8 3H7v-.17h.25V1.74H7l.55-.55h.2v1.64H8z"></svg:path><svg:path fill="currentColor" d="M7.5.75a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 7.5.75m0-.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class VaadinPiggyBankCoinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPillIcon],svg[vaadin-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.8 1.4l-.2-.2C13.9.4 12.8 0 11.8 0S9.7.4 8.9 1.2L1.2 8.9c-1.6 1.6-1.6 4.1 0 5.7l.2.2c.7.8 1.8 1.2 2.8 1.2s2.1-.4 2.9-1.2L14.9 7c1.5-1.5 1.5-4.1-.1-5.6m-.7 5l-3.9 3.9l-3.5-3.6l-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c.5-.6 1.3-.9 2.1-.9s1.6.3 2.2.9l.2.2c.5.5.8 1.3.8 2.1s-.3 1.6-.9 2.2"></svg:path>`,
})
export class VaadinPillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPillsIcon],svg[vaadin-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 8l6.3-6.3c.4-.4 1-.7 1.7-.7s1.3.3 1.8.7c1 1 1 2.6 0 3.5L10.5 8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9c-.7-.7-1.6-1-2.5-1S9.7.3 9 1L2.7 7.4c-.3.2-.5.5-.7.9Q2.75 8 3.5 8"></svg:path><svg:path fill="currentColor" d="M7.3 5.6L4.9 8h4.7zM12.5 9h-9C1.6 9 0 10.6 0 12.5S1.6 16 3.5 16h9c1.9 0 3.5-1.6 3.5-3.5S14.4 9 12.5 9m0 6H8v-4H3.5c-1.1 0-2 .6-2.5 1.2C1.2 11 2.2 10 3.5 10h9c1.4 0 2.5 1.1 2.5 2.5S13.9 15 12.5 15"></svg:path>`,
})
export class VaadinPillsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPinIcon],svg[vaadin-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6.5V1h1V0H4v1h1v5.5S3 8 3 10c0 .5 1.9.7 4 .7v2.2c0 .7.2 1.4.5 2.1l.5 1l.5-1c.3-.6.5-1.3.5-2.1v-2.2c2.1 0 4-.3 4-.7c0-2-2-3.5-2-3.5m-4 .1s-.5.3-1.6 1.4c-1 1-1.5 1.9-1.5 1.9s.1-1 .8-1.9C5.6 6.9 6 6.6 6 6.6V1h1z"></svg:path>`,
})
export class VaadinPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPinPostIcon],svg[vaadin-pin-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4V3H9c0-1.69 1-2 1-2V0H5v1s1 .31 1 2H0v12h2v1h14V4zm-1 10H1V4h4v1h2v2h1V5h2V4h4z"></svg:path>`,
})
export class VaadinPinPostIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlayIcon],svg[vaadin-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v14l12-7z"></svg:path>`,
})
export class VaadinPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlayCircleIcon],svg[vaadin-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M6 12V4l6 4z"></svg:path>`,
})
export class VaadinPlayCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlayCircleOIcon],svg[vaadin-play-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M6 4v8l6-4z"></svg:path>`,
})
export class VaadinPlayCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlugIcon],svg[vaadin-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.7 3.1c-.4-.4-1-.4-1.4 0l-2.8 2.8L9 4.5l2.8-2.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0L7.6 3.1L6.2 1.7L4.8 3.1l.7.7l-1.4 1.4c-1.4 1.4-1.5 3.5-.5 5.1C1.9 11.8 1 14.1 1 16h2c0-1.3.4-3.2 2.1-4.4c1.5.8 3.4.5 4.6-.7l1.4-1.4l.7.7l1.4-1.4l-1.4-1.4l2.8-2.8c.5-.5.5-1.1.1-1.5"></svg:path>`,
})
export class VaadinPlugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusIcon],svg[vaadin-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></svg:path>`,
})
export class VaadinPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusCircleIcon],svg[vaadin-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m5 9H9v4H7V9H3V7h4V3h2v4h4z"></svg:path>`,
})
export class VaadinPlusCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusCircleOIcon],svg[vaadin-plus-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M13 7H9V3H7v4H3v2h4v4h2V9h4z"></svg:path>`,
})
export class VaadinPlusCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusMinusIcon],svg[vaadin-plus-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7h6v2h-6zM4 5H2v2H0v2h2v2h2V9h2V7H4zm2-3l3 12h1L7 2z"></svg:path>`,
})
export class VaadinPlusMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusSquareOIcon],svg[vaadin-plus-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7H9V4H7v3H4v2h3v3h2V9h3z"></svg:path><svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path>`,
})
export class VaadinPlusSquareOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPointerIcon],svg[vaadin-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 5H12c0-.2-.2-.6-.4-.8s-.6-.4-1.1-.4c-.2 0-.4 0-.6.1c-.1-.2-.2-.3-.3-.5c-.2-.2-.5-.4-1.1-.4c-.2 0-.4 0-.5.1V1.4C8 .8 7.6 0 6.6 0c-.4 0-.8.2-1.1.4C5 1 5 1.8 5 1.8v4.3c-.6.1-1.1.3-1.4.6C3 7.4 3 8.3 3 9.5v.7c0 1.4.7 2.1 1.4 2.8l.3.4C6 14.6 7.1 15 9.8 15c2.9 0 4.2-1.6 4.2-5.1V7.4c0-.7-.2-2.1-1.4-2.4m.4 2.4V10c0 3.4-1.3 4.1-3.2 4.1c-2.4 0-3.3-.3-4.3-1.3l-.4-.4c-.7-.8-1.1-1.2-1.1-2.2v-.7c0-1 0-1.7.3-2.1c.1-.1.4-.2.7-.2v.5l-.3 1.5c0 .1 0 .1.1.2s.2 0 .2 0l1-1.2V1.8c0-.1 0-.5.2-.7c.1 0 .2-.1.4-.1c.3 0 .4.3.4.4v4.3c0 .3.2.6.5.6S8 6 8 5.8V4.5c0-.1.1-.5.5-.5c.3 0 .5.1.5.4v1.3c0 .3.2.6.5.6s.5-.3.5-.5v-.7c0-.1.1-.3.5-.3c.2 0 .3.1.3.1c.2.1.2.4.2.4v.8c0 .3.2.5.4.5c.3 0 .5-.1.5-.4c0-.1.1-.2.2-.3h.2c.6.2.7 1.2.7 1.5q0-.15 0 0"></svg:path>`,
})
export class VaadinPointerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPowerOffIcon],svg[vaadin-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2.3v3.3c1.2.7 2 2 2 3.4c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5.8-2.8 2-3.4V2.3C3.1 3.2 1 5.8 1 9c0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7"></svg:path><svg:path fill="currentColor" d="M7 1h2v7H7z"></svg:path>`,
})
export class VaadinPowerOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPresentationIcon],svg[vaadin-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H9V0H7v1H0v11h5l-2 4h2.2l2-4h1.5l2 4H13l-2-4h5zm-1 10H1V2h14z"></svg:path><svg:path fill="currentColor" d="M6 4v5l4-2.5z"></svg:path>`,
})
export class VaadinPresentationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPrintIcon],svg[vaadin-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10v4h2v2h12v-2h2v-4zm13 5H3v-3h10zm-1-9V2L9.3 0H4v6H0v3h16V6zM9 1l1.3 1H9zm2 6H5V1h3v2h3zm4 1h-1V7h1z"></svg:path>`,
})
export class VaadinPrintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinProgressbarIcon],svg[vaadin-progressbar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5v6h16V5zm15 5H1V6h14z"></svg:path><svg:path fill="currentColor" d="M2 7h7v2H2z"></svg:path>`,
})
export class VaadinProgressbarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPuzzlePieceIcon],svg[vaadin-puzzle-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.9.9c-1.1-1-2.5-1.3-3.1-.4c-.7 1.1.5 1.7-.3 2.5c-.5.6-2-.8-2-.8l-.8-.8l-1.4 1.4c-.6.7-2.1 1.5-2.6 1.1c-.7-.6.1-1.8-.5-2.6c-.7-1-2.1-.8-3 .3c-1 1.1-1.4 2.4-.5 3c1.1.7 1.9-.3 2.7.5c.4.4-.2 1.7-.5 2.1L.6 9.5L7.1 16l1.7-1.7c.7-.7 1.5-2 1.1-2.4c-.6-.7-1.7.1-2.5-.4c-1-.7-.8-2 .3-3s2.5-1.3 3.1-.4c.7 1.1-.4 1.8.4 2.6c.4.4 1.6-.2 2-.6L15.3 8l-1.1-1.1c-.6-.6-1.9-2-1.4-2.5c.6-.7 1.7.2 2.5-.4c.9-.8.6-2.1-.4-3.1"></svg:path>`,
})
export class VaadinPuzzlePieceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinPyramidChartIcon],svg[vaadin-pyramid-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.29 5L8 1L5.71 5zm-8 6L0 15h16l-2.29-4zm10.85-1l-2.28-4H5.14l-2.28 4z"></svg:path>`,
})
export class VaadinPyramidChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinQrcodeIcon],svg[vaadin-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0H0v6h6zM5 5H1V1h4z"></svg:path><svg:path fill="currentColor" d="M2 2h2v2H2zM0 16h6v-6H0zm1-5h4v4H1z"></svg:path><svg:path fill="currentColor" d="M2 12h2v2H2zm8-12v6h6V0zm5 5h-4V1h4z"></svg:path><svg:path fill="currentColor" d="M12 2h2v2h-2zM2 7H0v2h3V8H2zm5 2h2v2H7zM3 7h2v1H3zm6 5H7v1h1v1h1v-1zM6 7v1H5v1h2V7zm2-3h1v2H8zm1 4v1h2V7H8v1zM7 6h1v1H7zm2 8h2v2H9zm-2 0h1v2H7zm2-3h1v1H9zm0-8V1H8V0H7v4h1V3zm3 11h1v2h-1zm0-2h2v1h-2zm-1 1h1v1h-1zm-1-1h1v1h-1zm4-2v1h1v1h1v-2h-1zm1 3h-1v3h2v-2h-1zm-5-3v1h3V9h-2v1zm2-3v1h2v1h2V7h-2z"></svg:path>`,
})
export class VaadinQrcodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinQuestionIcon],svg[vaadin-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H6c0-3 1.6-4 2.7-4.6q.6-.3.9-.6c.5-.5.3-1.2.2-1.4c-.3-.7-1-1.4-2.3-1.4C5.4 3 5 4.9 5 5.3l-3-.4C2.2 3.2 3.7 0 7.5 0c2.3 0 4.3 1.3 5.1 3.2c.7 1.7.4 3.5-.8 4.7c-.5.5-1.1.8-1.6 1.1c-.9.5-1.2 1-1.2 2m.5 3a2 2 0 1 1-3.999.001A2 2 0 0 1 9.5 14"></svg:path>`,
})
export class VaadinQuestionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinQuestionCircleIcon],svg[vaadin-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m.9 13h-2v-2h2zM11 8.1c-.4.4-.8.6-1.2.7c-.6.4-.8.2-.8 1.2H7c0-2 1.2-2.6 2-3c.3-.1.5-.2.7-.4c.1-.1.3-.3.1-.7c-.2-.5-.8-1-1.7-1c-1.4 0-1.6 1.2-1.7 1.5l-2-.3C4.5 5 5.4 2.9 8 2.9c1.6 0 3 .9 3.6 2.2c.4 1.1.2 2.2-.6 3"></svg:path>`,
})
export class VaadinQuestionCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinQuestionCircleOIcon],svg[vaadin-question-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10H7c0-2 1.2-2.6 2-3c.3-.1.5-.2.7-.4c.1-.1.3-.3.1-.7c-.2-.5-.8-1-1.7-1c-1.4 0-1.6 1.2-1.7 1.5l-2-.3C4.5 5 5.4 2.9 8 2.9c1.6 0 3 .9 3.6 2.2c.4 1.1.2 2.2-.6 3c-.4.4-.8.6-1.2.7c-.6.4-.8.2-.8 1.2"></svg:path><svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M6.9 11h2v2h-2z"></svg:path>`,
})
export class VaadinQuestionCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinQuoteLeftIcon],svg[vaadin-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v7H0V6.9c0-4.8 4.5-5.4 4.5-5.4l.6 1.4s-2 .3-2.4 1.9C2.3 6 3.1 7 3.1 7zm9 0v7H9V6.9c0-4.8 4.5-5.4 4.5-5.4l.6 1.4s-2 .3-2.4 1.9c-.4 1.2.4 2.2.4 2.2z"></svg:path>`,
})
export class VaadinQuoteLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinQuoteRightIcon],svg[vaadin-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9V2h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-.6-1.4s2-.3 2.4-1.9c.4-1.2-.4-2.2-.4-2.2zM0 9V2h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-.6-1.4s2-.3 2.4-1.9C4.7 10 3.9 9 3.9 9z"></svg:path>`,
})
export class VaadinQuoteRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRandomIcon],svg[vaadin-random-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7c-.3.7-.6 1.5-1 2.3C8.4 13 9.4 14 11 14h2v2l3-3l-3-3zM5.4 6.6c.3-.7.6-1.5 1-2.2C5.6 3 4.5 2 3 2H0v2h3c1 0 1.7 1.2 2.4 2.6"></svg:path><svg:path fill="currentColor" d="m16 3l-3-3v2h-2C8.3 2 7.1 5 6 7.7C5.2 9.8 4.3 12 3 12H0v2h3c2.6 0 3.8-2.8 4.9-5.6C8.8 6.2 9.7 4 11 4h2v2z"></svg:path>`,
})
export class VaadinRandomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRasterIcon],svg[vaadin-raster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h1v1H7zM5 7h1v1H5zM3 7h1v1H3zM1 7h1v1H1zm5-1h1v1H6zM4 6h1v1H4zM2 6h1v1H2zM0 6h1v1H0zm7-1h1v1H7zM5 5h1v1H5zM3 5h1v1H3zM1 5h1v1H1zm5-1h1v1H6zM4 4h1v1H4zM2 4h1v1H2zM0 4h1v1H0zm7-1h1v1H7zM5 3h1v1H5zM3 3h1v1H3zM1 3h1v1H1zm5-1h1v1H6zM4 2h1v1H4zM2 2h1v1H2zM0 2h1v1H0zm7-1h1v1H7zM5 1h1v1H5zM3 1h1v1H3zM1 1h1v1H1zm5-1h1v1H6zM4 0h1v1H4zM2 0h1v1H2zM0 0h1v1H0zm15 7h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 7h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM8 6h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 5h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM8 4h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 3h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM8 2h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 1h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM8 0h1v1H8zM7 15h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm-2 0h1v1H1zm5-1h1v1H6zm-2 0h1v1H4zm-2 0h1v1H2zm-2 0h1v1H0zm7-1h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm-2 0h1v1H1zm5-1h1v1H6zm-2 0h1v1H4zm-2 0h1v1H2zm-2 0h1v1H0zm7-1h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm-2 0h1v1H1zm5-1h1v1H6zm-2 0h1v1H4zm-2 0h1v1H2zm-2 0h1v1H0zm7-1h1v1H7zM5 9h1v1H5zM3 9h1v1H3zM1 9h1v1H1zm5-1h1v1H6zM4 8h1v1H4zM2 8h1v1H2zM0 8h1v1H0zm15 7h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 9h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM8 8h1v1H8z"></svg:path>`,
})
export class VaadinRasterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRasterLowerLeftIcon],svg[vaadin-raster-lower-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 7h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm3-1h1v1h-1zm-2 0h1v1h-1zm3-1h1v1h-1zm-2 0h1v1h-1zm1-1h1v1h-1zm1-1h1v1h-1zM7 15h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm-2 0h1v1H1zm5-1h1v1H6zm-2 0h1v1H4zm-2 0h1v1H2zm5-1h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm3-1h1v1H6zm-2 0h1v1H4zm3-1h1v1H7zm-2 0h1v1H5zm1-1h1v1H6zm1-1h1v1H7zm8 6h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 9h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM8 8h1v1H8z"></svg:path>`,
})
export class VaadinRasterLowerLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRecordsIcon],svg[vaadin-records-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h4v2H4z"></svg:path><svg:path fill="currentColor" d="M16 2h-1V0H5v2H3v1.25L2.4 4H1v1.75L0 7v9h12l4-5zM2 5h8v2H2zm9 10H1V8h10zm1-8h-1V4H4V3h8zm2-2.5l-1 1.25V2H6V1h8z"></svg:path>`,
})
export class VaadinRecordsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRecycleIcon],svg[vaadin-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 3.1l1.4 2.2l-1.6 1.1l1.3.3l2.8.6l.6-2.7l.4-1.4l-1.8 1.1l-2-3.3H6.9L4.3 5.3l1.7 1zm8 8.9l-2.7-4.3l-1.7 1l2 3.3H11v-2l-3 3l3 3v-2h3.7zM2.4 12l1.4-2.3l1.7 1.1l-.9-4.2l-2.8.7l-1.3.3l1.6 1L0 12l1.3 2H7v-2z"></svg:path>`,
})
export class VaadinRecycleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRefreshIcon],svg[vaadin-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.6 5.6C3.5 3.5 5.6 2 8 2c3 0 5.4 2.2 5.9 5h2c-.5-3.9-3.8-7-7.9-7c-3 0-5.6 1.6-6.9 4.1L0 3v4h4zM16 9h-4.1l1.5 1.4c-.9 2.1-3 3.6-5.5 3.6C5 14 2.5 11.8 2 9H0c.5 3.9 3.9 7 7.9 7c3 0 5.6-1.7 7-4.1L16 13z"></svg:path>`,
})
export class VaadinRefreshIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinReplyIcon],svg[vaadin-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0-5-4.9-5-4.9-5H6V0L0 6l6 6V9h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8"></svg:path>`,
})
export class VaadinReplyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinReplyAllIcon],svg[vaadin-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0-5-4.9-5-4.9-5H9V0L3 6l6 6V9h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8"></svg:path><svg:path fill="currentColor" d="m0 6l6 6v-1.5L1.5 6L6 1.5V0z"></svg:path>`,
})
export class VaadinReplyAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinResizeHIcon],svg[vaadin-resize-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h16v2H0zm7-1h2V3h2L8 0L5 3h2zm2 4H7v3H5l3 3l3-3H9z"></svg:path>`,
})
export class VaadinResizeHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinResizeVIcon],svg[vaadin-resize-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h2v16H7zM3 5L0 8l3 3V9h3V7H3zm13 3l-3-3v2h-3v2h3v2z"></svg:path>`,
})
export class VaadinResizeVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRetweetIcon],svg[vaadin-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h12v5h2l-3 3l-3-3h2V3H4v2H2zm12 13H2V9H0l3-3l3 3H4v3h8v-2h2z"></svg:path>`,
})
export class VaadinRetweetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRhombusIcon],svg[vaadin-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 8l8 8l8-8zM2 8l6-6l6 6l-6 6z"></svg:path>`,
})
export class VaadinRhombusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRoadIcon],svg[vaadin-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v4h7L12 1H9v3H7V1H4L0 15h7v-4zM7 6h2v3H7z"></svg:path>`,
})
export class VaadinRoadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRoadBranchIcon],svg[vaadin-road-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H0v3h3.2L7 10.6c1.6 1.5 3.6 2.4 5.8 2.4H16v-3h-3.2c-1.4 0-2.7-.5-3.7-1.5L7.5 7H16z"></svg:path>`,
})
export class VaadinRoadBranchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRoadBranchesIcon],svg[vaadin-road-branches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4V1H0v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5H16v-3h-1.5c-1 0-1.9-.5-2.7-1.4L10.5 10H16V7H8L5.6 4z"></svg:path>`,
})
export class VaadinRoadBranchesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
