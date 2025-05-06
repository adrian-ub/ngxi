import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkACaneIcon],svg[icon-park-a-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.5576 44.7684C19.5576 44.7684 32.468 20.4873 33.6417 18.28C34.8154 16.0726 37.4535 8.98102 30.3899 5.22524C23.3263 1.46947 19.1571 7.18063 17.7486 9.82948"></svg:path>`,
})
export class IconParkACaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAdIcon],svg[icon-park-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38L35 35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 10L13 13"></svg:path><svg:path fill="#2F88FF" d="M21.1429 28L18 17L14.8571 28H21.1429Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 31L14.8571 28M22 31L21.1429 28M21.1429 28L18 17L14.8571 28M21.1429 28H14.8571"></svg:path><svg:path fill="#2F88FF" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 24C35 29 31.4183 31 27 31V17C31.4183 17 35 19 35 24Z"></svg:path></svg:g>`,
})
export class IconParkAdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAcceptEmailIcon],svg[icon-park-accept-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M44 34L30 34"></svg:path><svg:path d="M35 29L30 34L35 39"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkAcceptEmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkActivitySourceIcon],svg[icon-park-activity-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 5H6V13H42V5Z"></svg:path><svg:path d="M42 20H6V28H42V20Z"></svg:path><svg:path d="M42 35H6V43H42V35Z"></svg:path></svg:g>`,
})
export class IconParkActivitySourceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddIcon],svg[icon-park-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M24 16V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 24L32 24"></svg:path></svg:g>`,
})
export class IconParkAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddComputerIcon],svg[icon-park-add-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V23"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M30 12H42"></svg:path><svg:path d="M36 6V18"></svg:path><svg:path d="M14 42L34 42"></svg:path></svg:g>`,
})
export class IconParkAddComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddFourIcon],svg[icon-park-add-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:path d="M32 24L16 24"></svg:path><svg:path d="M24 32L24 16"></svg:path></svg:g>`,
})
export class IconParkAddFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddItemIcon],svg[icon-park-add-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 30V24"></svg:path><svg:path fill="#2F88FF" d="M6 30H24H42V42H6V30Z"></svg:path><svg:line x1="6" x2="6" y1="12.5" y2="11.5"></svg:line><svg:line x1="6" x2="6" y1="18" y2="17"></svg:line><svg:line x1="6" x2="6" y1="7" y2="6"></svg:line><svg:line x1="42" x2="42" y1="12.5" y2="11.5"></svg:line><svg:line x1="42" x2="42" y1="18" y2="17"></svg:line><svg:line x1="42" x2="42" y1="7" y2="6"></svg:line><svg:line x1="42" x2="41" y1="18" y2="18"></svg:line><svg:line x1="7" x2="6" y1="18" y2="18"></svg:line><svg:line x1="7" x2="6" y1="6" y2="6"></svg:line><svg:line x1="14" x2="13" y1="6" y2="6"></svg:line><svg:line x1="21" x2="20" y1="6" y2="6"></svg:line><svg:line x1="21" x2="20" y1="18" y2="18"></svg:line><svg:line x1="28" x2="27" y1="6" y2="6"></svg:line><svg:line x1="14" x2="13" y1="18" y2="18"></svg:line><svg:line x1="28" x2="27" y1="18" y2="18"></svg:line><svg:line x1="35" x2="34" y1="6" y2="6"></svg:line><svg:line x1="35" x2="34" y1="18" y2="18"></svg:line><svg:line x1="42" x2="41" y1="6" y2="6"></svg:line></svg:g>`,
})
export class IconParkAddItemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddModeIcon],svg[icon-park-add-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z"></svg:path><svg:path stroke="#fff" d="M17 23.9967H31"></svg:path><svg:path stroke="#fff" d="M24.0039 17V31"></svg:path></svg:g>`,
})
export class IconParkAddModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddMusicIcon],svg[icon-park-add-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24"></svg:path><svg:path fill="#2F88FF" d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"></svg:path><svg:path stroke-linecap="round" d="M37.0508 32L37.0508 42"></svg:path><svg:path stroke-linecap="round" d="M42 36.9497L32 36.9497"></svg:path></svg:g>`,
})
export class IconParkAddMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddOneIcon],svg[icon-park-add-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 16V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 24L32 24"></svg:path></svg:g>`,
})
export class IconParkAddOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddPicIcon],svg[icon-park-add-pic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path d="M38 21V40C38 41.1046 37.1046 42 36 42H8C6.89543 42 6 41.1046 6 40V12C6 10.8954 6.89543 10 8 10H26.3636"></svg:path><svg:path fill="#2F88FF" d="M12.0005 31.0308L18.0005 23L21.0005 26L24.5005 20.5L32.0005 31.0308H12.0005Z"></svg:path><svg:path d="M34.0005 10H42.0005"></svg:path><svg:path d="M37.9946 5.79541V13.7954"></svg:path></svg:g>`,
})
export class IconParkAddPicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddPictureIcon],svg[icon-park-add-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 24C44 22.8954 43.1046 22 42 22C40.8954 22 40 22.8954 40 24H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 24V39H44V24H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 12L42 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 6V18"></svg:path></svg:g>`,
})
export class IconParkAddPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddPrintIcon],svg[icon-park-add-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M12 19H6V6H42V19H36"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M12 12H36V44L30 39.5556L24 44L18 39.5556L12 44V12Z"></svg:path><svg:path stroke="#fff" d="M20 26H28"></svg:path><svg:path stroke="#fff" d="M24 22L24 30"></svg:path></svg:g>`,
})
export class IconParkAddPrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddSubsetIcon],svg[icon-park-add-subset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 28V35H18"></svg:path><svg:path fill="#2F88FF" d="M18 28H42V42H18V35V28Z"></svg:path><svg:line x1="6" x2="6" y1="13.5" y2="12.5"></svg:line><svg:line x1="6" x2="6" y1="20" y2="19"></svg:line><svg:line x1="6" x2="6" y1="7" y2="6"></svg:line><svg:line x1="32" x2="32" y1="13.5" y2="12.5"></svg:line><svg:line x1="32" x2="32" y1="20" y2="19"></svg:line><svg:line x1="32" x2="32" y1="7" y2="6"></svg:line><svg:line x1="32" x2="31" y1="20" y2="20"></svg:line><svg:line x1="7" x2="6" y1="20" y2="20"></svg:line><svg:line x1="7" x2="6" y1="6" y2="6"></svg:line><svg:line x1="13" x2="12" y1="6" y2="6"></svg:line><svg:line x1="19.5" x2="18.5" y1="6" y2="6"></svg:line><svg:line x1="19.5" x2="18.5" y1="20" y2="20"></svg:line><svg:line x1="26" x2="25" y1="6" y2="6"></svg:line><svg:line x1="13" x2="12" y1="20" y2="20"></svg:line><svg:line x1="26" x2="25" y1="20" y2="20"></svg:line><svg:line x1="32" x2="31" y1="6" y2="6"></svg:line></svg:g>`,
})
export class IconParkAddSubsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddSubtractIcon],svg[icon-park-add-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M27 31H35"></svg:path><svg:path stroke="#fff" d="M17 13V21"></svg:path><svg:path stroke="#fff" d="M21 17H13"></svg:path><svg:path stroke="#fff" d="M34 14L14 34"></svg:path></svg:g>`,
})
export class IconParkAddSubtractIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddTextIcon],svg[icon-park-add-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M4 8H32"></svg:path><svg:path d="M28 21H44"></svg:path><svg:path d="M18 42L18 8"></svg:path><svg:path d="M36 42L36 21"></svg:path></svg:g>`,
})
export class IconParkAddTextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddTextTwoIcon],svg[icon-park-add-text-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 16H16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 34V16"></svg:path></svg:g>`,
})
export class IconParkAddTextTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddThreeIcon],svg[icon-park-add-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 32L24 16"></svg:path><svg:path d="M42 27L42 21"></svg:path><svg:path d="M6 27L6 21"></svg:path><svg:path d="M14 6H8C6.89543 6 6 6.89543 6 8V14"></svg:path><svg:path d="M34 6H40C41.1046 6 42 6.89543 42 8V14"></svg:path><svg:path d="M34 42H40C41.1046 42 42 41.1046 42 40V34"></svg:path><svg:path d="M14 42H8C6.89543 42 6 41.1046 6 40V34"></svg:path><svg:path d="M27 6H21"></svg:path><svg:path d="M32 24L16 24"></svg:path><svg:path d="M27 42H21"></svg:path></svg:g>`,
})
export class IconParkAddThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddTwoIcon],svg[icon-park-add-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M33 7.26261C30.3212 5.81915 27.2563 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C26.858 43 29.5685 42.369 32 41.2387"></svg:path><svg:path stroke-linejoin="round" d="M31 30L43 30"></svg:path><svg:path stroke-linejoin="round" d="M15 22L22 29L41 11"></svg:path><svg:path stroke-linejoin="round" d="M37 24V36"></svg:path></svg:g>`,
})
export class IconParkAddTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddUserIcon],svg[icon-park-add-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"></svg:path><svg:path d="M19 39H29"></svg:path><svg:path d="M24 34V44"></svg:path></svg:g>`,
})
export class IconParkAddUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddWebIcon],svg[icon-park-add-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24.9412"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 35H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 29V41"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkAddWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAddressBookIcon],svg[icon-park-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 36V44H40V4H8V12"></svg:path><svg:path d="M6 30H10"></svg:path><svg:path d="M6 24H10"></svg:path><svg:path d="M6 18H10"></svg:path><svg:circle cx="24" cy="17" r="4" fill="#2F88FF"></svg:circle><svg:path d="M32 35C32 30.5817 28.4183 27 24 27C19.5817 27 16 30.5817 16 35"></svg:path></svg:g>`,
})
export class IconParkAddressBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAdjacentItemIcon],svg[icon-park-adjacent-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M14 29H42V41H14V35V29Z"></svg:path><svg:path fill="#2F88FF" d="M14 7H42V19H14V13V7Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 13V19H42V7H14V13ZM14 13H6V35H14M14 35V41H42V29H14V35Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 13H6V35H14"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 29H42V41H14V35V29Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 7H42V19H14V13V7Z"></svg:path></svg:g>`,
})
export class IconParkAdjacentItemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAdjustmentIcon],svg[icon-park-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.34315 6.34315 5 8 5H40C41.6569 5 43 6.34315 43 8V40C43 41.6569 41.6569 43 40 43H8C6.34315 43 5 41.6569 5 40V8Z"></svg:path><svg:path stroke="#fff" d="M36 12L12 36"></svg:path><svg:path stroke="#fff" d="M12 16H20"></svg:path><svg:path stroke="#fff" d="M27 33H35"></svg:path><svg:path stroke="#fff" d="M16 12V20"></svg:path></svg:g>`,
})
export class IconParkAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAdobeIllustrateIcon],svg[icon-park-adobe-illustrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 15L14 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 33V25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 20V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 15L26 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 27H24"></svg:path></svg:g>`,
})
export class IconParkAdobeIllustrateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAdobeIndesignIcon],svg[icon-park-adobe-indesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 15L16 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 17L32 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 33C25.5 33 24 31.4 24 29C24 26.6 25.5 25 28 25C30.5 25 32 25 32 25V33H28Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkAdobeIndesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAdobeLightroomIcon],svg[icon-park-adobe-lightroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 15V33H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 33V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 26C30.25 22 32.6286 22 34 22"></svg:path></svg:g>`,
})
export class IconParkAdobeLightroomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAdobePhotoshopIcon],svg[icon-park-adobe-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 15V33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 25C19 25 23 24.2 23 20C23 15.8 19 15 16 15H14V25H16Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 21.0246C33 21.0246 28 20.5266 28 24.0123C28 27.4979 34 26.5021 34 29.9877C34 33.4734 28 32.9754 28 32.9754"></svg:path></svg:g>`,
})
export class IconParkAdobePhotoshopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAfferentIcon],svg[icon-park-afferent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M42 13.875V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V34.6875"></svg:path><svg:path d="M42 24L24 24"></svg:path><svg:path stroke-linejoin="round" d="M30 30L24 24L30 18"></svg:path></svg:g>`,
})
export class IconParkAfferentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAfferentFourIcon],svg[icon-park-afferent-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 5L10 5C8.89543 5 8 5.89543 8 7L8 41C8 42.1046 8.89543 43 10 43L38 43C39.1046 43 40 42.1046 40 41L40 24.75"></svg:path><svg:path d="M33 24H21V12"></svg:path><svg:path d="M21.0001 23.9998L39 6"></svg:path></svg:g>`,
})
export class IconParkAfferentFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAfferentThreeIcon],svg[icon-park-afferent-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29"></svg:path><svg:path d="M18 17L22 29L34 25"></svg:path><svg:path d="M22 29C27 14 30 11 40 7"></svg:path></svg:g>`,
})
export class IconParkAfferentThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAfferentTwoIcon],svg[icon-park-afferent-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M42 26.25V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H21.75"></svg:path><svg:path d="M42 34L24 34"></svg:path><svg:path stroke-linejoin="round" d="M30 40L24 34L30 28"></svg:path></svg:g>`,
})
export class IconParkAfferentTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAfroPickIcon],svg[icon-park-afro-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 4.37207L4.02944 21.3426L26.6569 43.9701L43.6274 26.9995"></svg:path><svg:path d="M26.6572 10.0288L9.68666 26.9994"></svg:path><svg:path d="M32.3135 15.6855L15.3429 32.6561"></svg:path><svg:path d="M37.9707 21.3428L21.0001 38.3133"></svg:path><svg:path fill="#2F88FF" d="M16.0504 41.8487L20.2931 37.606L10.3936 27.7065L6.15091 31.9492L8.27223 34.0705L9.68645 38.3131L13.9291 39.7274L16.0504 41.8487Z"></svg:path></svg:g>`,
})
export class IconParkAfroPickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAgreementIcon],svg[icon-park-agreement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 4H25V20L20.5 16L16 20V4Z"></svg:path><svg:path d="M16 28H26"></svg:path><svg:path d="M16 34H32"></svg:path></svg:g>`,
})
export class IconParkAgreementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAimingIcon],svg[icon-park-aiming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 37V44V37Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 37V44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M36 24H44H36Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 24H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 24H11H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24H11"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 11V4V11Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 11V4"></svg:path></svg:g>`,
})
export class IconParkAimingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAirBikeIcon],svg[icon-park-air-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 30H34.1905C36.4603 30 41 31.344 41 36.72V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 30L40 19L34 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M29 8L39 4"></svg:path><svg:circle cx="20" cy="30" r="8" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 30H28"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 22L14 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10 13L18 13"></svg:path><svg:path stroke="#000" d="M20 38C24.4183 38 28 34.4183 28 30C28 25.5817 24.4183 22 20 22"></svg:path></svg:g>`,
})
export class IconParkAirBikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAirConditioningIcon],svg[icon-park-air-conditioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="20" x="4" y="8" rx="2"></svg:rect><svg:rect width="24" height="8" x="12" y="20" fill="#2F88FF"></svg:rect><svg:path d="M32 14H36"></svg:path><svg:path d="M24 34V40"></svg:path><svg:path d="M16 36V38"></svg:path><svg:path d="M32 36V38"></svg:path></svg:g>`,
})
export class IconParkAirConditioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAirplaneIcon],svg[icon-park-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.5 10.5372C20.5 6.5143 22.8333 4.50286 24 4C25.1667 4.50286 27.5 6.5143 27.5 10.5372V18.0801L43 31V35L27 27V36L32 44L24 41L16 44L21 36V27L5 35V31L20.5 18.0801V10.5372Z"></svg:path>`,
})
export class IconParkAirplaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAirplaneWindowIcon],svg[icon-park-airplane-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 18C10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V30C38 37.732 31.732 44 24 44C16.268 44 10 37.732 10 30V18Z"></svg:path><svg:path stroke="#fff" d="M10 17L38 17"></svg:path><svg:path stroke="#fff" d="M22 11L26 11"></svg:path><svg:path stroke="#fff" d="M10 26C10 26 15.4 25.4 17 27C18.6 28.6 18 30.3687 18 30.3687C21 30.3687 24 30.527 24 34C24 36.5 20 38 17.5 36.3687C17.5 38.5 17 40 14 40"></svg:path><svg:path stroke="#fff" d="M38 23C38 23 34.5 21 33 22C31.5 23 32 25 32 25C30.5 24 28 25 28 27.5C28 30 30.5 31 33 30C34 33 36.5 33 38 32"></svg:path><svg:path stroke="#000" d="M25 44V44C32.1797 44 38 38.1797 38 31V18C38 10.268 31.732 4 24 4V4"></svg:path><svg:path stroke="#000" d="M23 44V44C15.8203 44 10 38.1797 10 31V18C10 10.268 16.268 4 24 4V4"></svg:path></svg:g>`,
})
export class IconParkAirplaneWindowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAirplaneWindowOneIcon],svg[icon-park-airplane-window-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M30.3489 32L36.8554 7.7176C37.2842 6.1172 38.9292 5.16746 40.5296 5.59628V5.59628C42.13 6.02511 43.0798 7.67012 42.6509 9.27052L36.5606 32"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" d="M36 32L36 38L13 38C11.3431 38 10 36.6569 10 35C10 33.3431 11.3431 32 13 32L36 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21 44H29"></svg:path><svg:rect width="10" height="20" x="6" y="4" fill="#2F88FF" stroke="#000" rx="5"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 14L16 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 9L6 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 9V19"></svg:path></svg:g>`,
})
export class IconParkAirplaneWindowOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAirplayIcon],svg[icon-park-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M12 35.0137H9H4V8.01273C4 6.90868 4.89543 6.01367 6 6.01367H42C43.1046 6.01367 44 6.90868 44 8.01273V35.0137H36"></svg:path><svg:path fill="#2F88FF" d="M24 32L14 42H34L24 32Z"></svg:path></svg:g>`,
})
export class IconParkAirplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAirpodsIcon],svg[icon-park-airpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M36 4C31.0294 4 27 8.02944 27 13V44H33V21.4879C33.9383 21.8195 34.9481 22 36 22C39.4829 22 42.5038 20.0216 44 17.1272V8.8728C42.5038 5.97844 39.4829 4 36 4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M12 4C16.9706 4 21 8.02944 21 13V44H15V21.4879C14.0617 21.8195 13.0519 22 12 22C8.51707 22 5.49623 20.0216 4 17.1272V8.8728C5.49623 5.97844 8.51707 4 12 4Z"></svg:path><svg:path stroke="#fff" d="M15 13H14"></svg:path><svg:path stroke="#fff" d="M33 13H34"></svg:path></svg:g>`,
})
export class IconParkAirpodsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlarmIcon],svg[icon-park-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 25C14 19.4772 18.4772 15 24 15C29.5228 15 34 19.4772 34 25V41H14V25Z"></svg:path><svg:path stroke-linecap="round" d="M24 5V8"></svg:path><svg:path stroke-linecap="round" d="M35.8918 9.32823L33.9634 11.6264"></svg:path><svg:path stroke-linecap="round" d="M42.2187 20.2873L39.2642 20.8083"></svg:path><svg:path stroke-linecap="round" d="M5.78116 20.2874L8.73558 20.8083"></svg:path><svg:path stroke-linecap="round" d="M12.1086 9.32802L14.037 11.6262"></svg:path><svg:path stroke-linecap="round" d="M6 41H43"></svg:path></svg:g>`,
})
export class IconParkAlarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlarmClockIcon],svg[icon-park-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23.9998 44.3332C34.1251 44.3332 42.3332 36.1251 42.3332 25.9999C42.3332 15.8747 34.1251 7.66656 23.9998 7.66656C13.8746 7.66656 5.6665 15.8747 5.6665 25.9999C5.6665 36.1251 13.8746 44.3332 23.9998 44.3332Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.7594 15.3536L23.7582 26.3624L31.5305 34.1347"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 9.00001L11 4.00001"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 9.00001L37 4.00001"></svg:path></svg:g>`,
})
export class IconParkAlarmClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignBottomIcon],svg[icon-park-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="28" x="17" y="6" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M42 42H6"></svg:path></svg:g>`,
})
export class IconParkAlignBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignBottomTwoIcon],svg[icon-park-align-bottom-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="6" height="24" x="7" y="16"></svg:rect><svg:rect width="6" height="32" x="21" y="8"></svg:rect><svg:rect width="6" height="18" x="35" y="22"></svg:rect></svg:g>`,
})
export class IconParkAlignBottomTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignHorizontalCenterTwoIcon],svg[icon-park-align-horizontal-center-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="6" height="24" x="7" y="12"></svg:rect><svg:rect width="6" height="32" x="21" y="8"></svg:rect><svg:rect width="6" height="18" x="35" y="15"></svg:rect></svg:g>`,
})
export class IconParkAlignHorizontalCenterTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignHorizontallyIcon],svg[icon-park-align-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="14" x="7" y="17" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 6V42"></svg:path></svg:g>`,
})
export class IconParkAlignHorizontallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignLeftIcon],svg[icon-park-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="14" x="14.5" y="17" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M6.5 6V42"></svg:path></svg:g>`,
})
export class IconParkAlignLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignLeftOneIcon],svg[icon-park-align-left-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 6H32V12H16V6Z"></svg:path><svg:path d="M6 42L6 6"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 21H36V27H16V21Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 36H42V42H16V36Z"></svg:path></svg:g>`,
})
export class IconParkAlignLeftOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignLeftTwoIcon],svg[icon-park-align-left-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="6" x="8" y="7"></svg:rect><svg:rect width="32" height="6" x="8" y="21"></svg:rect><svg:rect width="18" height="6" x="8" y="35"></svg:rect></svg:g>`,
})
export class IconParkAlignLeftTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignRightIcon],svg[icon-park-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="14" x="6" y="17" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M42 6V42"></svg:path></svg:g>`,
})
export class IconParkAlignRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignRightOneIcon],svg[icon-park-align-right-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M42 42V6"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 6H32V12H16V6Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M12 21H32V27H12V21Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M6 36H32V42H6V36Z"></svg:path></svg:g>`,
})
export class IconParkAlignRightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignRightTwoIcon],svg[icon-park-align-right-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="6" x="16" y="7"></svg:rect><svg:rect width="32" height="6" x="8" y="21"></svg:rect><svg:rect width="18" height="6" x="22" y="35"></svg:rect></svg:g>`,
})
export class IconParkAlignRightTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextBothIcon],svg[icon-park-align-text-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 19H6"></svg:path><svg:path d="M42 9H6"></svg:path><svg:path d="M42 29H6"></svg:path><svg:path d="M42 39H6"></svg:path></svg:g>`,
})
export class IconParkAlignTextBothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextBothOneIcon],svg[icon-park-align-text-both-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M34 24H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 15H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 33H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextBothOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextBottomIcon],svg[icon-park-align-text-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 36.3056H42"></svg:path><svg:path d="M6 42H42"></svg:path><svg:path d="M30 23L24 29L18 23V23"></svg:path><svg:path d="M24 6V29"></svg:path></svg:g>`,
})
export class IconParkAlignTextBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextBottomOneIcon],svg[icon-park-align-text-bottom-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M34 27H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 34H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextBottomOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextCenterIcon],svg[icon-park-align-text-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 19H12"></svg:path><svg:path d="M42 9H6"></svg:path><svg:path d="M42 29H6"></svg:path><svg:path d="M36 39H12"></svg:path></svg:g>`,
})
export class IconParkAlignTextCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextCenterOneIcon],svg[icon-park-align-text-center-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M30 24H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 15H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 33H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextCenterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextLeftIcon],svg[icon-park-align-text-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 9H6"></svg:path><svg:path d="M34 19H6"></svg:path><svg:path d="M42 29H6"></svg:path><svg:path d="M34 39H6"></svg:path></svg:g>`,
})
export class IconParkAlignTextLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextLeftOneIcon],svg[icon-park-align-text-left-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 24H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 15H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 33H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextLeftOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextMiddleIcon],svg[icon-park-align-text-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 36L24 30L30 36"></svg:path><svg:path d="M23.9999 30.9998V43.9998"></svg:path><svg:path d="M18 12L24 18L30 12"></svg:path><svg:path d="M23.9999 17.0002V4.00022"></svg:path><svg:path d="M6 24.0004H42"></svg:path></svg:g>`,
})
export class IconParkAlignTextMiddleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextMiddleOneIcon],svg[icon-park-align-text-middle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M34 20H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 27H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextMiddleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextRightIcon],svg[icon-park-align-text-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 9H6"></svg:path><svg:path d="M42 19H14"></svg:path><svg:path d="M42 29H6"></svg:path><svg:path d="M42 39H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextRightOneIcon],svg[icon-park-align-text-right-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M34 24H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 15H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 33H16"></svg:path></svg:g>`,
})
export class IconParkAlignTextRightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextTopIcon],svg[icon-park-align-text-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 36.3056H42"></svg:path><svg:path d="M6 42H42"></svg:path><svg:path d="M30 12L24 6L18 12V12"></svg:path><svg:path d="M24 6V29"></svg:path></svg:g>`,
})
export class IconParkAlignTextTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextTopOneIcon],svg[icon-park-align-text-top-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M26 20H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 13H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextTopOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTopIcon],svg[icon-park-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="28" x="17" y="14.5" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M42 6.5H6"></svg:path></svg:g>`,
})
export class IconParkAlignTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTopTwoIcon],svg[icon-park-align-top-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="6" height="24" x="7" y="8"></svg:rect><svg:rect width="6" height="32" x="21" y="8"></svg:rect><svg:rect width="6" height="18" x="35" y="8"></svg:rect></svg:g>`,
})
export class IconParkAlignTopTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignVerticalCenterTwoIcon],svg[icon-park-align-vertical-center-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="6" x="12" y="7"></svg:rect><svg:rect width="32" height="6" x="8" y="21"></svg:rect><svg:rect width="18" height="6" x="15" y="35"></svg:rect></svg:g>`,
})
export class IconParkAlignVerticalCenterTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignVerticallyIcon],svg[icon-park-align-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="34" x="17" y="7" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M42 24H6"></svg:path></svg:g>`,
})
export class IconParkAlignVerticallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentBottomCenterIcon],svg[icon-park-alignment-bottom-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M18 32V36"></svg:path><svg:path stroke="#fff" d="M24 24V36"></svg:path><svg:path stroke="#fff" d="M30 28V36"></svg:path></svg:g>`,
})
export class IconParkAlignmentBottomCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentBottomLeftIcon],svg[icon-park-alignment-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 32V36"></svg:path><svg:path stroke="#fff" d="M18 24V36"></svg:path><svg:path stroke="#fff" d="M24 28V36"></svg:path></svg:g>`,
})
export class IconParkAlignmentBottomLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentBottomRightIcon],svg[icon-park-alignment-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 32V36"></svg:path><svg:path stroke="#fff" d="M30 24V36"></svg:path><svg:path stroke="#fff" d="M36 28V36"></svg:path></svg:g>`,
})
export class IconParkAlignmentBottomRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentHorizontalBottomIcon],svg[icon-park-alignment-horizontal-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M22 36H26"></svg:path><svg:path stroke="#fff" d="M18 30H30"></svg:path><svg:path stroke="#fff" d="M20 24H28"></svg:path></svg:g>`,
})
export class IconParkAlignmentHorizontalBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentHorizontalCenterIcon],svg[icon-park-alignment-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M22 30H26"></svg:path><svg:path stroke="#fff" d="M18 24H30"></svg:path><svg:path stroke="#fff" d="M20 18H28"></svg:path></svg:g>`,
})
export class IconParkAlignmentHorizontalCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentHorizontalTopIcon],svg[icon-park-alignment-horizontal-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M22 24H26"></svg:path><svg:path stroke="#fff" d="M18 18H30"></svg:path><svg:path stroke="#fff" d="M20 12H28"></svg:path></svg:g>`,
})
export class IconParkAlignmentHorizontalTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentLeftBottomIcon],svg[icon-park-alignment-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 36H16"></svg:path><svg:path stroke="#fff" d="M12 30H24"></svg:path><svg:path stroke="#fff" d="M12 24H20"></svg:path></svg:g>`,
})
export class IconParkAlignmentLeftBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentLeftCenterIcon],svg[icon-park-alignment-left-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 30H16"></svg:path><svg:path stroke="#fff" d="M12 24H24"></svg:path><svg:path stroke="#fff" d="M12 18H20"></svg:path></svg:g>`,
})
export class IconParkAlignmentLeftCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentLeftTopIcon],svg[icon-park-alignment-left-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 24H16"></svg:path><svg:path stroke="#fff" d="M12 18H24"></svg:path><svg:path stroke="#fff" d="M12 12H20"></svg:path></svg:g>`,
})
export class IconParkAlignmentLeftTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentRightBottomIcon],svg[icon-park-alignment-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M32 36H36"></svg:path><svg:path stroke="#fff" d="M24 30H36"></svg:path><svg:path stroke="#fff" d="M28 24H36"></svg:path></svg:g>`,
})
export class IconParkAlignmentRightBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentRightCenterIcon],svg[icon-park-alignment-right-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M32 30H36"></svg:path><svg:path stroke="#fff" d="M24 24H36"></svg:path><svg:path stroke="#fff" d="M28 18H36"></svg:path></svg:g>`,
})
export class IconParkAlignmentRightCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentRightTopIcon],svg[icon-park-alignment-right-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M32 24H36"></svg:path><svg:path stroke="#fff" d="M24 18H36"></svg:path><svg:path stroke="#fff" d="M28 12H36"></svg:path></svg:g>`,
})
export class IconParkAlignmentRightTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentTopCenterIcon],svg[icon-park-alignment-top-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M18 12V16"></svg:path><svg:path stroke="#fff" d="M24 12V24"></svg:path><svg:path stroke="#fff" d="M30 12V20"></svg:path></svg:g>`,
})
export class IconParkAlignmentTopCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentTopLeftIcon],svg[icon-park-alignment-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 12V16"></svg:path><svg:path stroke="#fff" d="M18 12V24"></svg:path><svg:path stroke="#fff" d="M24 12V20"></svg:path></svg:g>`,
})
export class IconParkAlignmentTopLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentTopRightIcon],svg[icon-park-alignment-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 12V16"></svg:path><svg:path stroke="#fff" d="M30 12V24"></svg:path><svg:path stroke="#fff" d="M36 12V20"></svg:path></svg:g>`,
})
export class IconParkAlignmentTopRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentVerticalCenterIcon],svg[icon-park-alignment-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M18 22V26"></svg:path><svg:path stroke="#fff" d="M24 18V30"></svg:path><svg:path stroke="#fff" d="M30 20V28"></svg:path></svg:g>`,
})
export class IconParkAlignmentVerticalCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentVerticalLeftIcon],svg[icon-park-alignment-vertical-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 22V26"></svg:path><svg:path stroke="#fff" d="M18 18V30"></svg:path><svg:path stroke="#fff" d="M24 20V28"></svg:path></svg:g>`,
})
export class IconParkAlignmentVerticalLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentVerticalRightIcon],svg[icon-park-alignment-vertical-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 22V26"></svg:path><svg:path stroke="#fff" d="M30 18V30"></svg:path><svg:path stroke="#fff" d="M36 20V28"></svg:path></svg:g>`,
})
export class IconParkAlignmentVerticalRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlipayIcon],svg[icon-park-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24 4.36364C13.1551 4.36364 4.36364 13.1551 4.36364 24C4.36364 34.8449 13.1551 43.6364 24 43.6364C30.7379 43.6364 36.6832 40.2427 40.2199 35.0715C38.7865 34.647 36.4967 33.9121 33.537 32.6689C32.3002 32.1494 30.4531 31.3299 27.9958 30.2104C25.0556 33.1735 20.769 36 16.1742 36C12.9855 35.9844 7.63636 34.3728 7.63636 29.3458C7.63636 24.3188 12.5923 23.1225 15.8076 23.1225C17.7535 23.1225 21.1973 24.1964 26.1389 26.3443L26.2149 26.3741C27.5413 24.7514 28.4513 22.867 28.9459 20.7208L29.0455 20.2571L20.3944 20.2571C19.0841 20.257 17.6773 20.2569 16.1742 20.2568V17.9371L22.032 17.9367V15.0371L13.8306 15.0375V13.2977L22.032 13.2971L22.033 9.81818H26.72L26.7196 13.2971L36.0941 13.2977V15.0375L26.7196 15.0371V17.9367L34.2059 17.9371C34.0959 18.661 33.9722 19.3186 33.8347 19.91L33.7506 20.2568C33.4061 21.5023 32.6313 23.3162 31.4262 25.6986C31.1062 26.3312 30.6437 27.0626 30.0599 27.838C31.904 28.5215 33.771 29.1844 35.6605 29.8275C38.1068 30.6601 40.2216 31.3339 42.005 31.8487C43.0543 29.445 43.6364 26.7905 43.6364 24C43.6364 13.1551 34.8449 4.36364 24 4.36364ZM10.3154 28.5436C10.3154 31.7418 17.0047 33.0159 22.4246 29.6497C23.0347 29.2707 23.6048 28.8664 24.1348 28.4369L24.1166 28.4286L23.69 28.1665C20.308 26.1089 17.6806 24.9932 15.8076 24.8194C14.0892 24.66 10.3154 25.3455 10.3154 28.5436ZM29.0455 20.2568L29.0455 20.2571L31.2536 20.2574L29.0455 20.2568Z"></svg:path>`,
})
export class IconParkAlipayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAllApplicationIcon],svg[icon-park-all-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"></svg:path><svg:path d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"></svg:path><svg:path d="M40 6H30C28.8954 6 28 6.89543 28 8V18C28 19.1046 28.8954 20 30 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z"></svg:path><svg:path d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"></svg:path></svg:g>`,
})
export class IconParkAllApplicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlphabeticalSortingIcon],svg[icon-park-alphabetical-sorting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 4V43.5"></svg:path><svg:path d="M7 28H23L7 44H23"></svg:path><svg:path d="M7 20L15.2759 4L23 20"></svg:path><svg:path d="M44 36L36 44L28 36"></svg:path></svg:g>`,
})
export class IconParkAlphabeticalSortingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAlphabeticalSortingTwoIcon],svg[icon-park-alphabetical-sorting-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 4V43.5"></svg:path><svg:path d="M7 4H23L7 20H23"></svg:path><svg:path d="M7 44L15.2759 28L23 44"></svg:path><svg:path d="M44 36L36 44L28 36"></svg:path></svg:g>`,
})
export class IconParkAlphabeticalSortingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAmbulanceIcon],svg[icon-park-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M10 35H6C4.89543 35 4 34.1046 4 33V11C4 9.89543 4.89543 9 6 9H31C32.1046 9 33 9.89543 33 11V17.8987C33 19.1602 33.7892 20.287 34.9748 20.7181L42.0252 23.2819C43.2108 23.713 44 24.8398 44 26.1013V33C44 34.1046 43.1046 35 42 35H38"></svg:path><svg:path stroke-linejoin="round" d="M18 35H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 19L20 19"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 15V23"></svg:path><svg:circle cx="14" cy="35" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="35" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkAmbulanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnalysisIcon],svg[icon-park-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 5H3.99998V17H44V5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.99998 41.0301L16.1756 28.7293L22.7549 35.0301L30.7982 27L35.2786 31.368"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 16.1719V42.1719"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M3.99998 16.1719V30.1719"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13.0155 43H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 11H38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M9.99998 10.9966H11"></svg:path></svg:g>`,
})
export class IconParkAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorIcon],svg[icon-park-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:line x1="14" x2="34" y1="8" y2="8" stroke-linecap="round"></svg:line><svg:line x1="14" x2="34" y1="8" y2="8" stroke-linecap="round"></svg:line><svg:line x1="14" x2="34" y1="40" y2="40" stroke-linecap="round"></svg:line><svg:rect width="8" height="8" x="36" y="4" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="4" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="36" y="36" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="36" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:line x1="40" x2="40" y1="14" y2="34" stroke-linecap="round"></svg:line><svg:line x1="8" x2="8" y1="14" y2="34" stroke-linecap="round"></svg:line></svg:g>`,
})
export class IconParkAnchorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorOneIcon],svg[icon-park-anchor-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M40 35C40 25.7953 32.8366 10 24 10C15.1634 10 8 25.7953 8 35"></svg:path><svg:rect width="8" height="8" x="4" y="35" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="4" y="6" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="35" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="6" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M12 10H36"></svg:path></svg:g>`,
})
export class IconParkAnchorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorRoundIcon],svg[icon-park-anchor-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38C42 28.0589 33.9411 18 24 18C14.0589 18 6 28.0589 6 38"></svg:path><svg:path d="M20 14L10 14"></svg:path><svg:path d="M38 14H28"></svg:path><svg:circle cx="7" cy="14" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="41" cy="14" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="14" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkAnchorRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorSqureIcon],svg[icon-park-anchor-squre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38C42 28.0589 33.9411 18 24 18C14.0589 18 6 28.0589 6 38"></svg:path><svg:path d="M20 14L10 14"></svg:path><svg:path d="M38 14H28"></svg:path><svg:circle cx="24" cy="14" r="4" fill="#2F88FF"></svg:circle><svg:rect width="8" height="8" x="20" y="10" fill="#2F88FF"></svg:rect><svg:rect width="6" height="6" x="38" y="11" fill="#2F88FF"></svg:rect><svg:rect width="6" height="6" x="4" y="11" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkAnchorSqureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorTwoIcon],svg[icon-park-anchor-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 24H4C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24H38"></svg:path><svg:path d="M24 44V14"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkAnchorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAndroidIcon],svg[icon-park-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M43.9011 36H4.09863C5.10208 25.8934 13.6292 18 23.9999 18C34.3706 18 42.8977 25.8934 43.9011 36Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 20L10 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 20L37 13"></svg:path><svg:circle cx="15" cy="29" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="29" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkAndroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAngryFaceIcon],svg[icon-park-angry-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 19L29 21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 19L19 21"></svg:path></svg:g>`,
})
export class IconParkAngryFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnguishedFaceIcon],svg[icon-park-anguished-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:rect width="12" height="8" x="18" y="28" fill="#43CCF8" stroke="#fff" stroke-linecap="round" rx="4"></svg:rect></svg:g>`,
})
export class IconParkAnguishedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAnnouncementIcon],svg[icon-park-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="26" x="4" y="15" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" d="M24 7L16 15H32L24 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 24H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 32H20"></svg:path></svg:g>`,
})
export class IconParkAnnouncementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAntiCorrosionIcon],svg[icon-park-anti-corrosion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 41.996C37.3333 42.0989 44 41.0074 44 38.7215C44 35.2928 28.4142 18.0027 24 18.0027C19.5858 18.0027 4 35.6511 4 38.7215C4 40.7685 10.6667 41.86 24 41.996Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M21.0601 29.6614L17.4404 34.0003"></svg:path><svg:path fill="#000" d="M24.5 11.0002C25.8807 11.0002 27 9.88096 27 8.50024C27 7.11953 25.8807 6.00024 24.5 6.00024C23.1193 6.00024 22 7.11953 22 8.50024C22 9.88096 23.1193 11.0002 24.5 11.0002Z"></svg:path><svg:path fill="#000" d="M34 16.0002C35.1046 16.0002 36 15.1048 36 14.0002C36 12.8957 35.1046 12.0002 34 12.0002C32.8954 12.0002 32 12.8957 32 14.0002C32 15.1048 32.8954 16.0002 34 16.0002Z"></svg:path><svg:path fill="#000" d="M12 21.0002C13.1046 21.0002 14 20.1048 14 19.0002C14 17.8957 13.1046 17.0002 12 17.0002C10.8954 17.0002 10 17.8957 10 19.0002C10 20.1048 10.8954 21.0002 12 21.0002Z"></svg:path><svg:path fill="#000" d="M17.5 15.0002C18.3284 15.0002 19 14.3287 19 13.5002C19 12.6718 18.3284 12.0002 17.5 12.0002C16.6716 12.0002 16 12.6718 16 13.5002C16 14.3287 16.6716 15.0002 17.5 15.0002Z"></svg:path></svg:g>`,
})
export class IconParkAntiCorrosionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAperturePriorityIcon],svg[icon-park-aperture-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M15 12L18 6H30L33 12H15Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" d="M17 34L24 20L31 34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" d="M19 30.0383H29"></svg:path></svg:g>`,
})
export class IconParkAperturePriorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkApiIcon],svg[icon-park-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z"></svg:path><svg:path d="M42 6L37 11"></svg:path><svg:path fill="#2F88FF" d="M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z"></svg:path><svg:path d="M23 32L27 28"></svg:path><svg:path d="M6 42L11 37"></svg:path><svg:path d="M16 25L20 21"></svg:path></svg:g>`,
})
export class IconParkApiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkApiAppIcon],svg[icon-park-api-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M18 23.9372V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V12.0057"></svg:path><svg:path d="M30 24.0034V37.9999C30 41.3136 27.3137 43.9999 24 43.9999C20.6863 43.9999 18 41.3136 18 37.9999V35.9699"></svg:path><svg:path d="M24 30H9.98415C6.67919 30 4 27.3137 4 24C4 20.6863 6.67919 18 9.98415 18H11.9886"></svg:path><svg:path d="M24 18H37.9888C41.3087 18 44 20.6863 44 24C44 27.3137 41.3087 30 37.9888 30H36.0663"></svg:path></svg:g>`,
})
export class IconParkApiAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAppStoreIcon],svg[icon-park-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 13L21.5 24L19.875 26.75L19.0625 28.125"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15 35L15.8125 33.625"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 29L23 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 29H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 13L22.5 18.5L23.375 19.875"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 35L29.5 29.5L27.75 26.75L26.875 25.375"></svg:path></svg:g>`,
})
export class IconParkAppStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAppSwitchIcon],svg[icon-park-app-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M34 4H14V44H34V4Z"></svg:path><svg:path d="M44 8H34V40H44V8Z"></svg:path><svg:path d="M14 8H4V40H14V8Z"></svg:path></svg:g>`,
})
export class IconParkAppSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAppleIcon],svg[icon-park-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M23.9111 11.3176C23.9931 9.08606 24.6201 7.12594 25.7772 5.4874C26.9402 3.84056 28.8628 2.6707 31.4945 2.00781C31.512 2.08885 31.5302 2.16994 31.5491 2.25072V2.67472C31.5491 3.63616 31.3159 4.73862 30.8556 5.95127C30.3732 7.12541 29.6193 8.23048 28.618 9.22782C27.6815 10.1066 26.8151 10.6884 26.0494 10.9514C25.7966 11.0269 25.45 11.1012 25.0314 11.1681C24.6591 11.2261 24.2856 11.276 23.9111 11.3176Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24.3502 14.629C21.3775 14.629 19.3136 11.9999 16.3813 11.9999C13.4491 11.9999 7.4082 14.6951 7.4082 23.9999C7.4082 33.3047 12.7726 39.2999 13.3726 39.9999C13.9725 40.7 15.3601 42.4994 17.5098 42.4994C19.6596 42.4994 22.0131 40.7902 24.3502 40.7902C26.6872 40.7902 29.6288 42.4994 31.5492 42.4994C33.4696 42.4994 34.2595 41.7165 35.5665 40.3662C36.8734 39.0159 39.3663 34.8952 40.2369 32.422C38.8029 31.5684 35.0021 29.2511 35.0021 23.9999C35.0021 20.4992 36.2814 17.5909 38.8401 15.2752C37.1615 13.0917 35.2147 11.9999 32.9996 11.9999C29.6769 11.9999 27.3229 14.629 24.3502 14.629Z"></svg:path></svg:g>`,
})
export class IconParkAppleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAppleOneIcon],svg[icon-park-apple-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 41.0202C26.4311 41.0202 27.4311 42.3302 28.7342 42.6214C30.0373 42.9127 31.1312 42.9935 32.2515 42.4999C34.47 41.5223 35.8224 40.3578 37.4634 38.6186C40.5046 35.3953 42 30.9635 42 25.0286C42 19.0936 40.3996 16.0265 37.9334 14.0202C35.4672 12.014 34.037 11.6296 31.0549 12.014C28.0727 12.3983 26.4489 15.6025 24.0083 15.6025C21.5678 15.6025 18.5933 12.4431 16.0055 12.014C13.4177 11.5848 12 12.014 9.75967 14.0202C7.51934 16.0265 6 19.1506 6 25.0286C6 30.9066 7.55155 35.265 10.5927 38.4882C12.2337 40.2275 13.53 41.5223 15.7485 42.4999C16.8688 42.9935 18.0267 42.9127 19.2844 42.6214C20.5422 42.3302 21.5422 41.0202 24 41.0202Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24.0088 15.6025C24.7936 7.86751 28.1278 4 34.0114 4C34.5509 5.62786 34.6902 7.20336 34.4295 8.7265C34.3056 9.45008 33.9212 10.4819 33.2764 11.8219"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.2289 26C13.9523 27.3457 13.9523 28.7313 14.2289 30.1566C14.5054 31.5819 15.0944 32.6818 15.9957 33.4563"></svg:path></svg:g>`,
})
export class IconParkAppleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAppletClosedIcon],svg[icon-park-applet-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 42L33 33M6 6L15 15L6 6Z"></svg:path><svg:path d="M6 42L15 33M42 6L33 15L42 6Z"></svg:path><svg:path fill="#2F88FF" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path></svg:g>`,
})
export class IconParkAppletClosedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkApplicationIcon],svg[icon-park-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M40.0391 22V42H8.03906V22"></svg:path><svg:path fill="#2F88FF" d="M5.84231 13.7766C4.31276 17.7377 7.26307 22 11.5092 22C14.8229 22 17.5276 19.3137 17.5276 16C17.5276 19.3137 20.2139 22 23.5276 22H24.546C27.8597 22 30.546 19.3137 30.546 16C30.546 19.3137 33.2518 22 36.5655 22C40.8139 22 43.767 17.7352 42.2362 13.7723L39.2337 6H8.84523L5.84231 13.7766Z"></svg:path></svg:g>`,
})
export class IconParkApplicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkApplicationEffectIcon],svg[icon-park-application-effect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40.8331C26.123 42.7333 28.9266 43.8887 32 43.8887C38.6274 43.8887 44 38.5161 44 31.8887C44 26.5878 40.5629 22.0897 35.7957 20.5015"></svg:path><svg:path d="M27.1711 27.4992C27.7058 28.8588 27.9995 30.3397 27.9995 31.8891C27.9995 38.5165 22.6269 43.8891 15.9995 43.8891C9.37209 43.8891 3.99951 38.5165 3.99951 31.8891C3.99951 26.5741 7.45492 22.0662 12.2418 20.4893"></svg:path><svg:path d="M24 27.8892C30.6274 27.8892 36 22.5166 36 15.8892C36 9.26174 30.6274 3.88916 24 3.88916C17.3726 3.88916 12 9.26174 12 15.8892C12 22.5166 17.3726 27.8892 24 27.8892Z"></svg:path></svg:g>`,
})
export class IconParkApplicationEffectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkApplicationMenuIcon],svg[icon-park-application-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"></svg:path><svg:path d="M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z"></svg:path><svg:path d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z"></svg:path><svg:path d="M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z"></svg:path><svg:path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path d="M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z"></svg:path><svg:path d="M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z"></svg:path><svg:path d="M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z"></svg:path><svg:path d="M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z"></svg:path>`,
})
export class IconParkApplicationMenuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkApplicationOneIcon],svg[icon-park-application-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M41 13.9997L24 4L7 13.9997V33.9998L24 44L41 33.9998V13.9997Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 18.9976L23.9932 24.0002L31.9951 18.9976"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V33"></svg:path></svg:g>`,
})
export class IconParkApplicationOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkApplicationTwoIcon],svg[icon-park-application-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:circle cx="34.5" cy="13.5" r="6.5"></svg:circle><svg:circle cx="34.5" cy="34.5" r="6.5"></svg:circle><svg:circle cx="13.5" cy="13.5" r="6.5"></svg:circle><svg:circle cx="13.5" cy="34.5" r="6.5"></svg:circle></svg:g>`,
})
export class IconParkApplicationTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAppointmentIcon],svg[icon-park-appointment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:circle cx="34" cy="34" r="9" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 31V35H37"></svg:path></svg:g>`,
})
export class IconParkAppointmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAquariusIcon],svg[icon-park-aquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 20L14 8L20 17L28 8L35 19L44 9.04348"></svg:path><svg:path d="M4 40L14 28L20 37L28 28L35 39L44 29.0435"></svg:path></svg:g>`,
})
export class IconParkAquariusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArcDeTriompheIcon],svg[icon-park-arc-de-triomphe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 16V44H18V29C18 25.6863 20.6863 23 24 23C27.3137 23 30 25.6863 30 29V44H40V16H8Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M5 10H43V13C43 14.6569 41.6569 16 40 16H8C6.34315 16 5 14.6569 5 13V10Z"></svg:path><svg:path stroke-linecap="round" d="M5 4L43 4"></svg:path><svg:path stroke-linecap="round" d="M8 4V9"></svg:path><svg:path stroke-linecap="round" d="M40 4V9"></svg:path><svg:path stroke-linecap="round" d="M8 28L18 28"></svg:path><svg:path stroke-linecap="round" d="M30 28L40 28"></svg:path></svg:g>`,
})
export class IconParkArcDeTriompheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArchersBowIcon],svg[icon-park-archers-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.8505 43.9205L39.2762 43.6056C36.9266 43.1357 35.856 39.9987 36.6027 37.7219C38.5571 31.7629 37.1246 24.1116 36.3326 20.8093C36.0869 19.7845 35.2752 19.0154 34.2529 18.7598L31.9902 18.1941C30.9153 17.9254 30.0761 17.0862 29.8074 16.0113L29.2417 13.7486C28.9861 12.7262 28.217 11.9146 27.1922 11.6688C23.8899 10.8769 16.2385 9.4444 10.2795 11.3988C8.00278 12.1455 4.86576 11.0749 4.39585 8.72533L4.08097 7.15096"></svg:path><svg:path d="M6 11L38 43"></svg:path><svg:path d="M12 36L43 5"></svg:path></svg:g>`,
})
export class IconParkArchersBowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArcheryIcon],svg[icon-park-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M13 42C22.9411 42 31 33.9411 31 24C31 14.0589 22.9411 6 13 6"></svg:path><svg:circle cx="9" cy="24" r="3" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 24L42 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20L42 24L38 28"></svg:path></svg:g>`,
})
export class IconParkArcheryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAreaMapIcon],svg[icon-park-area-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M18 24L12 33L4 28.5V42H44V15L37 23L31 18L24 26L18 24Z"></svg:path><svg:path d="M4 28.5V17L11 23L16.5 15L22.5 18L31 9L36.5 13.5L44 6V15.5"></svg:path></svg:g>`,
})
export class IconParkAreaMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArenaIcon],svg[icon-park-arena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M44 26L24 36L4 26L24 16L44 26Z"></svg:path><svg:path d="M24 7L44 17L24 27L4 17L24 7Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M44 26V34L24 44L4 34V26L24 36L44 26Z"></svg:path><svg:path stroke-linecap="round" d="M44 14V17V26"></svg:path><svg:path stroke-linecap="round" d="M4 26V17V14"></svg:path><svg:path stroke-linecap="round" d="M24 36V24"></svg:path><svg:path stroke-linecap="round" d="M24 16V4"></svg:path></svg:g>`,
})
export class IconParkArenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAriesIcon],svg[icon-park-aries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5.50934 19.0293C3.08128 15.2358 2.82341 7.06076 10.5522 6.02314C15.8552 5.45972 23.1035 15.1207 24 42C24.8965 15.1207 32.1448 5.45972 37.4478 6.02314C45.1766 7.06076 44.9187 15.2358 42.4907 19.0293"></svg:path>`,
})
export class IconParkAriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArithmeticIcon],svg[icon-park-arithmetic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 32.5H42"></svg:path><svg:path d="M28 41.5H42"></svg:path><svg:path d="M6 13H22"></svg:path><svg:path d="M14 5L14 21"></svg:path><svg:path d="M42 5L6 41"></svg:path></svg:g>`,
})
export class IconParkArithmeticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArithmeticButtonsIcon],svg[icon-park-arithmetic-buttons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M10 14H18"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M10 14H18"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M11 37L17 31"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M14 18V10"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M17 37L11 31"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M30 14H38"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M30 31H38"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M30 37H38"></svg:path><svg:path stroke="#fff" d="M24 4V44"></svg:path><svg:path stroke="#fff" d="M4 24H44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M30 4H18"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M30 44H18"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 28V20"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M44 28V20"></svg:path></svg:g>`,
})
export class IconParkArithmeticButtonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArithmeticOneIcon],svg[icon-park-arithmetic-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 31.5H42"></svg:path><svg:path d="M28 39.5H42"></svg:path><svg:path d="M7.34281 40.6568L18.6565 29.3431"></svg:path><svg:path d="M7.3428 29.3433L18.6565 40.657"></svg:path><svg:path d="M28 12.5H42"></svg:path><svg:path d="M6 12.5H20"></svg:path><svg:path d="M13 5.5V19.5"></svg:path></svg:g>`,
})
export class IconParkArithmeticOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowCircleDownIcon],svg[icon-park-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 15V33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 24L24 33L15 24"></svg:path></svg:g>`,
})
export class IconParkArrowCircleDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowCircleLeftIcon],svg[icon-park-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32.4917 24.5H14.4917"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.4917 15.5L14.4917 24.5L23.4917 33.5"></svg:path></svg:g>`,
})
export class IconParkArrowCircleLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowCircleRightIcon],svg[icon-park-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.4917 24.5H32.4917"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.4917 15.5L32.4917 24.5L23.4917 33.5"></svg:path></svg:g>`,
})
export class IconParkArrowCircleRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowCircleUpIcon],svg[icon-park-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 33.5V15.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 24.5L24 15.5L15 24.5"></svg:path></svg:g>`,
})
export class IconParkArrowCircleUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowDownIcon],svg[icon-park-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42V6"></svg:path><svg:path d="M36 30L24 42L12 30"></svg:path></svg:g>`,
})
export class IconParkArrowDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowKeysIcon],svg[icon-park-arrow-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M14 4H34V24H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M4 24H24V44H4V24Z"></svg:path><svg:path fill="#2F88FF" d="M24 24H44V44H24V24Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 24H4V44H24V24ZM24 24V44V24ZM24 24H44V44H24V24ZM14 4H34V24H14V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 10V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 14L24 10L28 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 34H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 38L10 34L14 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 34H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 30L38 34L34 38"></svg:path></svg:g>`,
})
export class IconParkArrowKeysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowLeftIcon],svg[icon-park-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5.79889 24H41.7989"></svg:path><svg:path d="M17.7988 36L5.79883 24L17.7988 12"></svg:path></svg:g>`,
})
export class IconParkArrowLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowLeftDownIcon],svg[icon-park-arrow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29 37H11V19"></svg:path><svg:path d="M11 36.9998L36.4559 11.5439"></svg:path></svg:g>`,
})
export class IconParkArrowLeftDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowLeftUpIcon],svg[icon-park-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 11L36.4559 36.4558"></svg:path><svg:path d="M29 11H11V29"></svg:path></svg:g>`,
})
export class IconParkArrowLeftUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowRightIcon],svg[icon-park-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41.9999 24H5.99994"></svg:path><svg:path d="M30 12L42 24L30 36"></svg:path></svg:g>`,
})
export class IconParkArrowRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowRightDownIcon],svg[icon-park-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 19V37H19"></svg:path><svg:path d="M11.5439 11.5439L36.9997 36.9997"></svg:path></svg:g>`,
})
export class IconParkArrowRightDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowRightUpIcon],svg[icon-park-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 11H37V29"></svg:path><svg:path d="M11.5439 36.4559L36.9997 11"></svg:path></svg:g>`,
})
export class IconParkArrowRightUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowUpIcon],svg[icon-park-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 6V42"></svg:path><svg:path d="M12 18L24 6L36 18"></svg:path></svg:g>`,
})
export class IconParkArrowUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAssemblyLineIcon],svg[icon-park-assembly-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="16" cy="10" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 38H13.0004C9.00037 38 6.00037 35.0833 6 31C5.99963 26.9167 9.00037 24 13.0004 24H20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.0003 24H34.9997C38.9997 24 41.9996 21.0833 42 17C42.0004 12.9167 38.9997 10 34.9997 10H20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 10L12 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 38H42"></svg:path><svg:circle cx="32" cy="38" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkAssemblyLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAssociationIcon],svg[icon-park-association-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 34H44"></svg:path><svg:path d="M42 39L21 5"></svg:path><svg:path d="M6 39L27 5"></svg:path></svg:g>`,
})
export class IconParkAssociationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAsteriskIcon],svg[icon-park-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" d="M15 24H33"></svg:path><svg:path stroke="#fff" d="M19.5 16.2056L28.5 31.794"></svg:path><svg:path stroke="#fff" d="M28.5 16.2056L19.5 31.794"></svg:path></svg:g>`,
})
export class IconParkAsteriskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAsteriskKeyIcon],svg[icon-park-asterisk-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 16V32"></svg:path><svg:path stroke="#fff" d="M17.447 19.4114L30.5535 28.5886"></svg:path><svg:path stroke="#fff" d="M30.5532 19.4114L17.4468 28.5886"></svg:path></svg:g>`,
})
export class IconParkAsteriskKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAstonishedFaceIcon],svg[icon-park-astonished-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:rect width="8" height="12" x="20" y="24" fill="#43CCF8" stroke="#fff" stroke-linecap="round" rx="4"></svg:rect></svg:g>`,
})
export class IconParkAstonishedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAtSignIcon],svg[icon-park-at-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V44C28.9886 44 33.5507 42.1735 37.0539 39.1529"></svg:path><svg:path fill="#2F88FF" d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"></svg:path><svg:path stroke-linecap="round" d="M32 24C32 27.3137 34.6863 30 38 30V30C41.3137 30 44 27.3137 44 24"></svg:path><svg:path stroke-linecap="round" d="M32 25V16"></svg:path></svg:g>`,
})
export class IconParkAtSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAttentionIcon],svg[icon-park-attention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 12V28"></svg:path></svg:g>`,
})
export class IconParkAttentionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAudioFileIcon],svg[icon-park-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44V4H31L40 14.5V44H8Z"></svg:path><svg:path stroke="#fff" d="M32 14L26 16.9688V31.5"></svg:path><svg:circle cx="20.5" cy="31.5" r="5.5" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkAudioFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAuditIcon],svg[icon-park-audit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 36L8.00461 28.0426C8.00551 27.4906 8.45313 27.0432 9.00519 27.0426C12.3391 27.0426 15.6731 27.0426 19.0071 27.0426C19.9286 27.0426 19.9237 26.2252 19.9237 24.2792C19.9237 22.3332 15.0221 20.6941 15.0221 13.8528C15.0221 7.01151 20.0999 5 24.32 5C28.5401 5 33.1366 7.01151 33.1366 13.8528C33.1366 20.6941 28.2607 21.7818 28.2607 24.2792C28.2607 26.7765 28.2607 27.0426 29.0413 27.0426C32.3609 27.0426 35.6806 27.0426 39.0003 27.0426C39.5525 27.0426 40.0003 27.4904 40.0003 28.0426V36H8Z"></svg:path><svg:path stroke-linecap="round" d="M8 42H40"></svg:path></svg:g>`,
})
export class IconParkAuditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoFocusIcon],svg[icon-park-auto-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle r="3" fill="#fff" transform="matrix(-1 0 0 1 24 24)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 8V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 24L6 40"></svg:path></svg:g>`,
})
export class IconParkAutoFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoHeightOneIcon],svg[icon-park-auto-height-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M7 42L7 6"></svg:path><svg:path stroke-linejoin="round" d="M18 13.9907L23.9954 8L30 14"></svg:path><svg:path stroke-linejoin="round" d="M30 34.0093L24.0046 40L18 34"></svg:path><svg:path stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path d="M41 42L41 6"></svg:path></svg:g>`,
})
export class IconParkAutoHeightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoLineHeightIcon],svg[icon-park-auto-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7H42"></svg:path><svg:path d="M6 41H42"></svg:path><svg:path stroke-linejoin="round" d="M24 13L14 35"></svg:path><svg:path stroke-linejoin="round" d="M18 28L30 28"></svg:path><svg:path stroke-linejoin="round" d="M24 13L34 35"></svg:path></svg:g>`,
})
export class IconParkAutoLineHeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoLineWidthIcon],svg[icon-park-auto-line-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M5 40L5 8"></svg:path><svg:path stroke-linejoin="round" d="M24 13L14 35"></svg:path><svg:path stroke-linejoin="round" d="M18 28L30 28"></svg:path><svg:path stroke-linejoin="round" d="M24 13L34 35"></svg:path><svg:path d="M43 40L43 8"></svg:path></svg:g>`,
})
export class IconParkAutoLineWidthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoWidthIcon],svg[icon-park-auto-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.9876 32L4 24.0062L12 16"></svg:path><svg:path d="M36.0124 16L44 23.9939L36 32"></svg:path><svg:path d="M4 24L44 24"></svg:path></svg:g>`,
})
export class IconParkAutoWidthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoWidthOneIcon],svg[icon-park-auto-width-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7H42"></svg:path><svg:path d="M8 24H40"></svg:path><svg:path stroke-linejoin="round" d="M13.9907 30L8 24.0046L14 18"></svg:path><svg:path stroke-linejoin="round" d="M34.0093 18L40 23.9954L34 30"></svg:path><svg:path d="M6 41H42"></svg:path></svg:g>`,
})
export class IconParkAutoWidthOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAvatarIcon],svg[icon-park-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5.00372 42.2311C5.00372 42.6557 5.35807 42.9999 5.79521 42.9999L42.2023 43C42.6394 43 42.9938 42.6558 42.9938 42.2313V41.3131C43.012 41.0364 43.049 39.6555 42.1388 38.1289C41.5648 37.1663 40.7318 36.3347 39.6628 35.6573C38.3696 34.8378 36.7245 34.244 34.7347 33.8865C34.72 33.8846 33.2446 33.689 31.7331 33.303C29.101 32.6307 28.8709 32.0357 28.8694 32.0299C28.8539 31.9711 28.8315 31.9146 28.8028 31.8615C28.7813 31.7505 28.7281 31.3328 28.8298 30.2136C29.088 27.371 30.6128 25.691 31.838 24.3412C32.2244 23.9155 32.5893 23.5134 32.8704 23.1191C34.0827 21.4181 34.1952 19.4839 34.2003 19.364C34.2003 19.1211 34.1724 18.9214 34.1127 18.7363C33.9937 18.3659 33.7698 18.1351 33.6063 17.9666L33.6052 17.9654C33.564 17.923 33.5251 17.8828 33.4933 17.8459C33.4812 17.8318 33.449 17.7945 33.4783 17.603C33.5859 16.8981 33.6505 16.3079 33.6815 15.7456C33.7367 14.7438 33.7798 13.2456 33.5214 11.7875C33.4895 11.5385 33.4347 11.2755 33.3494 10.9622C33.0764 9.95814 32.6378 9.09971 32.0284 8.39124C31.9236 8.27722 29.3756 5.5928 21.9788 5.04201C20.956 4.96586 19.9449 5.00688 18.9496 5.05775C18.7097 5.06961 18.3812 5.08589 18.0738 5.16554C17.3101 5.36337 17.1063 5.84743 17.0528 6.11834C16.9641 6.56708 17.12 6.91615 17.2231 7.14718L17.2231 7.1472L17.2231 7.14723C17.2381 7.18072 17.2566 7.22213 17.2243 7.32997C17.0526 7.59588 16.7825 7.83561 16.5071 8.06273C16.4275 8.13038 14.5727 9.72968 14.4707 11.8189C14.1957 13.4078 14.2165 15.8834 14.5417 17.5944C14.5606 17.6889 14.5885 17.8288 14.5432 17.9233L14.5432 17.9233C14.1935 18.2367 13.7971 18.5919 13.7981 19.4024C13.8023 19.4839 13.9148 21.4181 15.1272 23.1191C15.408 23.5131 15.7726 23.9149 16.1587 24.3403L16.1596 24.3412L16.1596 24.3413C17.3848 25.6911 18.9095 27.371 19.1678 30.2135C19.2694 31.3327 19.2162 31.7505 19.1947 31.8614C19.166 31.9145 19.1436 31.971 19.1282 32.0298C19.1266 32.0356 18.8974 32.6287 16.2772 33.2996C14.7656 33.6867 13.2775 33.8845 13.2331 33.8909C11.2994 34.2173 9.66438 34.7963 8.37351 35.6115C7.30813 36.2844 6.47354 37.1175 5.89289 38.0877C4.96517 39.6379 4.99025 41.0497 5.00372 41.3074V42.2311Z"></svg:path>`,
})
export class IconParkAvatarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAverageIcon],svg[icon-park-average-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 4V44H44"></svg:path><svg:path d="M10 38C10 38 15.3125 4 27 4C38.6875 4 44 38 44 38"></svg:path><svg:path stroke-dasharray="2 6" d="M10 24L44 24"></svg:path></svg:g>`,
})
export class IconParkAverageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAviationIcon],svg[icon-park-aviation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M32.5 30H36L44 22H11C10.3509 22 9.71929 22.2105 9.2 22.6L4 26.5L10.2767 29.6767C10.6967 29.8893 11.1607 30 11.6314 30H13"></svg:path><svg:path fill="#2F88FF" d="M27 31C27 32.6569 23.4183 34 19 34L19 28C23.4183 28 27 29.3431 27 31Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M31 18L22 22H37L40 12H37L31 18Z"></svg:path></svg:g>`,
})
export class IconParkAviationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAvocadoIcon],svg[icon-park-avocado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33 19C31 14 33 4 24 4C15 4 17 14 15 18C13 22 10 25 10 31C10 40 17.5 44 24 44C30.5 44 38 40 38 31C38 26 35 24 33 19Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M30 30C30 33.3137 27.3137 36 24 36C20.6863 36 18 33.3137 18 30C18 26.6863 20.6863 22.5 24 22.5C27.3137 22.5 30 26.6863 30 30Z"></svg:path></svg:g>`,
})
export class IconParkAvocadoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkAvocadoOneIcon],svg[icon-park-avocado-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M7 32C10 37 15 40 20 41C25 42 30.8085 41.1437 35 38C41 33.5 43 26 43 21C43 16 41 10.5 40 9C39 7.5 37 7 37 7"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M21.0002 12.9999C16.6452 14.6045 12 12.9999 8.00015 15.9999C3.30352 19.5225 1.99983 24.9999 5.00015 29.9999C7.35207 33.9193 10.9997 35.9999 16.9997 35.9999C22.9997 35.9999 26.7643 34.2353 30.9997 29.9999C36.9997 23.9999 38.9997 14.4999 38.9997 10.9999C38.9997 7.49987 36.5 5.49986 32.9997 5.99986C29.4994 6.49986 26.5726 10.9466 21.0002 12.9999Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M21.9452 20.1174C20.7223 20.5976 19.4178 20.1174 18.2945 21.0152C16.9755 22.0693 16.6094 23.7083 17.452 25.2045C18.1125 26.3774 19.1368 27 20.8218 27C22.5068 27 23.564 26.472 24.7534 25.2045C26.4383 23.4091 27 20.5663 27 19.519C27 18.4716 26.298 17.8731 25.315 18.0228C24.3321 18.1724 23.5101 19.503 21.9452 20.1174Z"></svg:path></svg:g>`,
})
export class IconParkAvocadoOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyIcon],svg[icon-park-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-width="4" d="M24 43.6C32.432 43.6 39.5606 36.9192 41.8935 29.2497C42.4179 27.5255 46 27.5255 46 23.8C46 20.0745 42.3839 19.8601 41.7987 18.048C39.3724 10.5346 32.3209 4 24 4C15.6745 4 8.61973 10.5407 6.19725 18.0606C5.61467 19.8691 2 20.0091 2 23.8C2 27.5909 5.59225 27.5909 6.1349 29.3421C8.4967 36.9639 15.6018 43.6 24 43.6Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M41.7987 18.048C39.3724 10.5346 32.3209 4 24 4"></svg:path><svg:path fill="#fff" stroke="#fff" d="M19.1002 21.5998C19.1002 22.4261 18.876 23.1516 18.5398 23.6559C18.2013 24.1637 17.7885 24.3998 17.4002 24.3998C17.0119 24.3998 16.5991 24.1637 16.2606 23.6559C15.9244 23.1516 15.7002 22.4261 15.7002 21.5998C15.7002 20.7735 15.9244 20.048 16.2606 19.5437C16.5991 19.0359 17.0119 18.7998 17.4002 18.7998C17.7885 18.7998 18.2013 19.0359 18.5398 19.5437C18.876 20.048 19.1002 20.7735 19.1002 21.5998Z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M32.2999 21.5998C32.2999 22.4261 32.0757 23.1516 31.7395 23.6559C31.401 24.1637 30.9882 24.3998 30.5999 24.3998C30.2116 24.3998 29.7988 24.1637 29.4603 23.6559C29.1241 23.1516 28.8999 22.4261 28.8999 21.5998C28.8999 20.7735 29.1241 20.048 29.4603 19.5437C29.7988 19.0359 30.2116 18.7998 30.5999 18.7998C30.9882 18.7998 31.401 19.0359 31.7395 19.5437C32.0757 20.048 32.2999 20.7735 32.2999 21.5998Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M18.498 31.7505C20.4289 33.0501 22.266 33.6999 24.0094 33.6999C25.7509 33.6999 27.4776 33.0515 29.1894 31.7547" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M18.498 31.7505C20.4289 33.0501 22.266 33.6999 24.0094 33.6999C25.7509 33.6999 27.4776 33.0515 29.1894 31.7547"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M31.7283 6.2002C31.9964 8.13368 31.4067 9.54651 29.9593 10.4387C28.5119 11.3309 26.1602 11.749 22.9043 11.693"></svg:path></svg:g>`,
})
export class IconParkBabyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyAppIcon],svg[icon-park-baby-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V12C5 10.8954 5.89543 10 7 10H16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40L44 40"></svg:path><svg:circle cx="30" cy="17" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 8C29.8333 7 28.8 4.8 26 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 8C30.0833 7 30.6 4.8 32 4"></svg:path><svg:circle cx="33" cy="16" r="2" fill="#fff"></svg:circle><svg:circle cx="27" cy="16" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkBabyAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyBottleIcon],svg[icon-park-baby-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 20H12V44H36V20Z"></svg:path><svg:path d="M26 36H36"></svg:path><svg:path d="M26 28H36"></svg:path><svg:path d="M8 20H40"></svg:path><svg:path d="M12 14H20.4V7.6C20.4 6.39815 21.6 4 24 4C26.4 4 27.6 6.39815 27.6 7.6V14H36"></svg:path></svg:g>`,
})
export class IconParkBabyBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyCarSeatIcon],svg[icon-park-baby-car-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M36 33L42 4C42 4 31.5 6 31.5 10C31.5 12.5 35.5 14 34 15.5C32.5 17 27 18.5 27 22.5C27 25 28.6406 26.8594 27 28.5C25.5 30 24 29.2143 21.5 28.5C18.7 27.7 13 27 11 27.5C9 28 6.99997 29 7 32C7.00001 33.6492 8 35.5 10.5 36C13 36.5 16 34 20 34C24 34 29 37 32 37C35 37 36 33 36 33Z"></svg:path><svg:path d="M11 36L8 44H41L35 36"></svg:path></svg:g>`,
})
export class IconParkBabyCarSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyFeetIcon],svg[icon-park-baby-feet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M15.0001 20.6121C13.5764 26.7616 21.4929 28.327 19.6238 32.6597C17.7546 36.9923 13.5688 36.1258 14.0361 40.4584C14.5035 44.791 20.0419 44.8519 25.0837 42.2415C35.1675 37.0205 37.2708 25.6166 32.7075 20.6122C27.1002 14.4626 16.4237 14.4626 15.0001 20.6121Z"></svg:path><svg:ellipse cx="34.535" cy="13.535" fill="#000" rx="2" ry="3" transform="rotate(40 34.535 13.535)"></svg:ellipse><svg:ellipse cx="29.381" cy="10.603" fill="#000" rx="2" ry="3" transform="rotate(25 29.38 10.603)"></svg:ellipse><svg:ellipse cx="23.381" cy="9.603" fill="#000" rx="2" ry="3" transform="rotate(6 23.38 9.603)"></svg:ellipse><svg:ellipse cx="14" cy="8" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3" ry="4" transform="rotate(-20 14 8)"></svg:ellipse><svg:ellipse cx="38.535" cy="17.536" fill="#000" rx="2" ry="3" transform="rotate(50 38.535 17.536)"></svg:ellipse></svg:g>`,
})
export class IconParkBabyFeetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyMealIcon],svg[icon-park-baby-meal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 6H10C7.23858 6 5 8.23858 5 11V37C5 39.7614 7.23858 42 10 42H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 6V23.5238L5 28"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 24L31 28"></svg:path><svg:path stroke-linecap="round" d="M37 18V42"></svg:path><svg:path fill="#2F88FF" d="M31 13.3333C31 7.11111 35 4 37 4C39 4 43 7.11111 43 13.3333C43 19.5556 31 19.5556 31 13.3333Z"></svg:path></svg:g>`,
})
export class IconParkBabyMealIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyMobileIcon],svg[icon-park-baby-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L24 8L44 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 18V4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 30V16"></svg:path><svg:circle cx="10" cy="36" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 30V16"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M32 36L38 30L44 36L38 42L32 36Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 23V18H19V23"></svg:path></svg:g>`,
})
export class IconParkBabyMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyOneIcon],svg[icon-park-baby-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:circle cx="24" cy="8" r="5" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path d="M5 28C5 28 22 7.75 43 28"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M19 28V24.2105C19 24.2105 19 19 24 19C29 19 29 24.2105 29 24.2105V28V32C29 32 29 37 24 37C19 37 19 32 19 32V28Z"></svg:path><svg:path stroke-linejoin="round" d="M29 32L37 37L31 44"></svg:path><svg:path stroke-linejoin="round" d="M19 32L11 37L17 44"></svg:path></svg:g>`,
})
export class IconParkBabyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyPantsIcon],svg[icon-park-baby-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M34 4H14C12 5 9 9 9 19C9 31.5 14 44 17 44C19 44 19 41.5 19 41.5V24C19 19 27 19.5 27 24V35C27 43 34 46 36 44C38 42 34 40 34 37C34 32 38 28 38 15C38 10 35.6667 6 34 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10 12H37"></svg:path><svg:path stroke="#000" d="M10.8032 8C10.0707 9.69577 9.46541 11.9812 9.17871 15"></svg:path><svg:path stroke="#000" d="M37.9995 15C37.9995 12.7719 37.5362 10.7424 36.875 9"></svg:path></svg:g>`,
})
export class IconParkBabyPantsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabySlingIcon],svg[icon-park-baby-sling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="10" r="5" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M24 21C14 21 11 6 11 6L6 8L9 24.5C10.1667 25.1667 14.5 27.5 17 31C19.5 34.5 19 38 24.5 38C30 38 30.5 33.5 32 31C33.5 28.5 37.6667 25 39 24.5L42 8L37 6C37 6 34 21 24 21Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 29C34 29 41 33 41 42H36C36 36 31 33 31 33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 29C15 29 8 33 8 42H13C13 36 18 33 18 33"></svg:path></svg:g>`,
})
export class IconParkBabySlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyTasteIcon],svg[icon-park-baby-taste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.9411 44 42 35.9411 42 26C42 16.0589 33.9411 8 24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C23.75 7 22 4 18 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C24.0833 7 24.6 4.8 26 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 33C31 33 29 37 24 37C19 37 17 33 17 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 33C31 33 32.5 29 30 29C27.5 29 27 36 27 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 21H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 19V23"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 24V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24V28"></svg:path></svg:g>`,
})
export class IconParkBabyTasteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBachelorCapIcon],svg[icon-park-bachelor-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 13L24 8L44 13L24 18L4 13Z"></svg:path><svg:path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16"></svg:path><svg:path d="M7 14V36"></svg:path><svg:rect width="6" height="6" x="4" y="34" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkBachelorCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBachelorCapOneIcon],svg[icon-park-bachelor-cap-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" d="M5 16L24 6L43 16L24 26L5 16Z"></svg:path><svg:path d="M11 20V34.464C11 35.9282 12.0551 37.1872 13.4711 37.5594C15.6758 38.139 19.0564 39.2194 22.3562 41.0292C23.3775 41.5893 24.6225 41.5893 25.6438 41.0292C28.9436 39.2194 32.3242 38.139 34.5289 37.5594C35.9449 37.1872 37 35.9282 37 34.464V20"></svg:path><svg:path stroke-linecap="round" d="M43 16L43 32"></svg:path></svg:g>`,
})
export class IconParkBachelorCapOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBachelorCapTwoIcon],svg[icon-park-bachelor-cap-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 21V36.0388C11 36.6463 11.2744 37.2188 11.7852 37.5478C13.4863 38.6433 17.8594 41 24 41C30.1406 41 34.5137 38.6433 36.2148 37.5478C36.7256 37.2188 37 36.6463 37 36.0388V21"></svg:path><svg:path stroke-linecap="round" d="M43 24L43 32"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M5 17L24 7L43 17L24 27L5 17Z"></svg:path></svg:g>`,
})
export class IconParkBachelorCapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBackIcon],svg[icon-park-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBackOneIcon],svg[icon-park-back-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33"></svg:path><svg:path d="M18 28L10 33L4 25"></svg:path></svg:g>`,
})
export class IconParkBackOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBackgroundColorIcon],svg[icon-park-background-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" fill-rule="evenodd" d="M37 37C39.2091 37 41 35.2091 41 33C41 31.5272 39.6667 29.5272 37 27C34.3333 29.5272 33 31.5272 33 33C33 35.2091 34.7909 37 37 37Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M20.8535 5.50439L24.389 9.03993"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M23.6818 8.33281L8.12549 23.8892L19.4392 35.2029L34.9955 19.6465L23.6818 8.33281Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M12 20.0732L28.961 25.6496"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M4 43H44"></svg:path></svg:g>`,
})
export class IconParkBackgroundColorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBackpackIcon],svg[icon-park-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M19 9.55556V4H13V14"></svg:path><svg:path stroke="#000" d="M29 9.55556V4H35V14"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M11 20C11 14.4772 15.4772 10 21 10H27C32.5228 10 37 14.4772 37 20V40C37 42.2091 35.2091 44 33 44H15C12.7909 44 11 42.2091 11 40V20Z"></svg:path><svg:path stroke="#000" d="M11 29H5V39H11"></svg:path><svg:path stroke="#000" d="M37 29H43V39H37"></svg:path><svg:path stroke="#fff" d="M28 23V27"></svg:path><svg:path stroke="#fff" d="M17 23H27.5H31"></svg:path></svg:g>`,
})
export class IconParkBackpackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBadIcon],svg[icon-park-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9.9478 28.8071C13.8691 37.6813 21.9325 41.1902 28 44.0001C30.6324 45.2192 31.3283 40.2832 30.2772 37.3091C29.3933 34.8081 27.6256 32.0048 27.6256 32.0048H34.7316C36.665 32.0048 38.2322 30.4376 38.2322 28.5042C38.2322 26.5709 36.665 25.0036 34.7316 25.0036H36.4994C38.4327 25.0036 40 23.4364 40 21.5031C40 19.5697 38.4327 18.0025 36.4994 18.0025H32.9639C34.8972 18.0025 36.4644 16.4352 36.4644 14.5019C36.4644 12.5685 34.8972 11.0013 32.9639 11.0013H30.3122C32.2455 11.0013 33.8128 9.43401 33.8128 7.50068C33.8128 5.56735 32.2481 4.00008 30.3148 4.00008H19.6706C16.577 4.00008 12.5995 5.80317 9.9478 10.8044C7.40591 15.5985 7.29614 22.8061 9.9478 28.8071Z"></svg:path>`,
})
export class IconParkBadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBadOneIcon],svg[icon-park-bad-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35.9115 6.45609L41.2811 25.4561C41.6418 26.7325 40.6828 28 39.3564 28H27.8747C27.1714 28 26.651 28.6542 26.8091 29.3395L27.3086 31.5039C27.7668 33.4893 27.9139 35.5337 27.7446 37.5642L27.6527 38.6673C27.5541 39.8507 27.0393 40.9607 26.1996 41.8004C25.4315 42.5685 24.3898 43 23.3035 43H23.0644C22.4074 43 21.8021 42.6438 21.4831 42.0696L18.825 37.2851C17.6329 35.1392 15.8559 33.376 13.7009 32.2005L7.0423 28.5685C6.39977 28.2181 6 27.5446 6 26.8127V7C6 5.89543 6.89543 5 8 5H33.9869C34.882 5 35.6681 5.59473 35.9115 6.45609Z"></svg:path>`,
})
export class IconParkBadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBadTwoIcon],svg[icon-park-bad-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4.18051 26.8339C4.08334 27.9999 5.00352 29 6.1736 29H10C11.1046 29 12 28.1046 12 27V7C12 5.89543 11.1046 5 10 5H7.84027C6.80009 5 5.93356 5.79733 5.84717 6.83391L4.18051 26.8339Z"></svg:path><svg:path d="M18 26.6255C18 27.4612 18.5194 28.2092 19.2753 28.5655C20.9238 29.3426 23.7329 30.9062 25 33.0195C26.6331 35.7431 26.9411 40.664 26.9912 41.7912C26.9982 41.949 26.9937 42.107 27.0154 42.2634C27.2861 44.2155 31.0543 41.9351 32.5 39.5239C33.2846 38.2153 33.3852 36.496 33.3027 35.1537C33.2144 33.7175 32.7933 32.3301 32.3802 30.9517L31.5 28.0155H42.3569C43.6832 28.0155 44.6421 26.7482 44.2816 25.4719L38.9113 6.45642C38.668 5.5949 37.8818 5 36.9866 5H20C18.8954 5 18 5.89543 18 7V26.6255Z"></svg:path></svg:g>`,
})
export class IconParkBadTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBadgeIcon],svg[icon-park-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 22V40H8V10H26"></svg:path><svg:path fill="#2F88FF" d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z"></svg:path></svg:g>`,
})
export class IconParkBadgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBadgeTwoIcon],svg[icon-park-badge-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 43.9999L24 39.9999L32 43.9999V24.9443C29.877 26.8445 27.0734 27.9999 24 27.9999C20.9266 27.9999 18.123 26.8445 16 24.9443V43.9999Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M36 16C36 19.554 34.455 22.7471 32 24.9444C29.877 26.8446 27.0734 28 24 28C20.9266 28 18.123 26.8446 16 24.9444C13.545 22.7471 12 19.554 12 16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16Z"></svg:path><svg:path stroke="#fff" d="M24 21V11L22 12M24 21H26M24 21H22"></svg:path></svg:g>`,
})
export class IconParkBadgeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBadmintonIcon],svg[icon-park-badminton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M19.5 44C21.99 44 24 41.99 24 39.5V19H20L15 39.5C15 41.99 17.01 44 19.5 44Z"></svg:path><svg:path d="M20.0004 19H16.0004L6.68045 37.9C5.57045 40.51 7.16045 43.64 9.98045 43.97C10.1504 43.99 10.3204 44 10.5004 44C12.9904 44 15.0004 41.99 15.0004 39.5"></svg:path><svg:path d="M28.5 44C26.01 44 24 41.99 24 39.5V19H28L33 39.5C33 41.99 30.99 44 28.5 44Z"></svg:path><svg:path d="M28 19H32L41.32 37.9C42.43 40.51 40.84 43.64 38.02 43.97C37.85 43.99 37.68 44 37.5 44C35.01 44 33 41.99 33 39.5"></svg:path><svg:path fill="#2F88FF" d="M16.06 13C16.02 12.67 16 12.34 16 12C16 7.58 19.58 4 24 4C28.42 4 32 7.58 32 12C32 12.34 31.98 12.67 31.94 13H16.06Z"></svg:path></svg:g>`,
})
export class IconParkBadmintonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBaggageDelayIcon],svg[icon-park-baggage-delay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 26V14C36 12.8954 35.1046 12 34 12H10C8.89543 12 8 12.8954 8 14V38C8 39.1046 8.89543 40 10 40H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 12V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V6C28 4.89543 27.1046 4 26 4H18C16.8954 4 16 4.89543 16 6V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M35 44C39.9706 44 44 39.9706 44 35C44 30.0294 39.9706 26 35 26C30.0294 26 26 30.0294 26 35C26 39.9706 30.0294 44 35 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 32V36H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 40V44"></svg:path></svg:g>`,
})
export class IconParkBaggageDelayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBalanceIcon],svg[icon-park-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M35 25C27.89 22.42 20.11 22.42 13 25L12 14C19 11 29 11 36 14L35 25Z"></svg:path><svg:path stroke="#fff" d="M24 23L21 18"></svg:path><svg:path stroke="#000" d="M42 39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39Z"></svg:path><svg:path stroke="#000" d="M29 23.4552C25.6869 22.9348 22.3131 22.9348 19 23.4552"></svg:path></svg:g>`,
})
export class IconParkBalanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBalanceOneIcon],svg[icon-park-balance-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M35 25C27.89 22.42 20.11 22.42 13 25L12 14C19 11 29 11 36 14L35 25Z"></svg:path><svg:path stroke="#fff" d="M24 23L21 18"></svg:path><svg:path stroke="#000" d="M42 39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39L6 9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39Z"></svg:path><svg:path stroke="#000" d="M29 23.4552C25.6869 22.9349 22.3131 22.9349 19 23.4552"></svg:path></svg:g>`,
})
export class IconParkBalanceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBalanceTwoIcon],svg[icon-park-balance-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 22L10 12L4 22"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M10 28C13.3137 28 16 25.3137 16 22H4C4 25.3137 6.68629 28 10 28Z" clip-rule="evenodd"></svg:path><svg:path d="M44 22L38 12L32 22"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 28C41.3137 28 44 25.3137 44 22H32C32 25.3137 34.6863 28 38 28Z" clip-rule="evenodd"></svg:path><svg:path d="M24 6V42"></svg:path><svg:path d="M10 12H24H38"></svg:path><svg:path d="M10 12H24H38"></svg:path><svg:path d="M38 42H24H10"></svg:path></svg:g>`,
})
export class IconParkBalanceTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBananaIcon],svg[icon-park-banana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.9993 32C13.1998 31.0668 9.96483 28.8274 8.52376 26.5745C8.32636 26.2659 8.25521 25.8975 8.27911 25.5319L8.52427 21.7819C8.57721 20.9722 9.53405 20.5412 10.1952 21.0115C12.3289 22.5293 16.2279 25 18.9993 25C25.9993 25 31.9993 22.5 34.9993 17"></svg:path><svg:path fill="#2F88FF" d="M25.9994 43C35.9993 40.9999 45.2422 30.5149 42.867 19.9413L41.9993 16L41.9993 7.99998L35.9993 6.99997C35.9993 19.9413 32.9995 30 19.9994 32C14.0231 32.9194 8.29412 31.6136 3.87018 29.0781L4.99939 36C6.99933 41 15.9995 45 25.9994 43Z"></svg:path></svg:g>`,
})
export class IconParkBananaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBankIcon],svg[icon-park-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 17V44H38V17"></svg:path><svg:path d="M5 22L10 17L24 4L38 17L43 22"></svg:path><svg:path d="M19 19L24 25L29 19"></svg:path><svg:path d="M18 31H30"></svg:path><svg:path d="M18 25H30"></svg:path><svg:path d="M24 25V37"></svg:path></svg:g>`,
})
export class IconParkBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBankCardIcon],svg[icon-park-bank-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="square" d="M4 16H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 32H36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 10V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 10V26"></svg:path></svg:g>`,
})
export class IconParkBankCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBankCardOneIcon],svg[icon-park-bank-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M14 13V9C14 7.89543 14.8954 7 16 7H42C43.1046 7 44 7.89543 44 9V27C44 28.1046 43.1046 29 42 29H40"></svg:path><svg:rect width="30" height="22" x="4" y="19" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 28L34 28"></svg:path><svg:path stroke="#000" d="M34 23L34 35"></svg:path><svg:path stroke="#000" d="M4 23L4 35"></svg:path><svg:path stroke="#fff" d="M11 34L19 34"></svg:path><svg:path stroke="#fff" d="M25 34L27 34"></svg:path></svg:g>`,
})
export class IconParkBankCardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBankCardTwoIcon],svg[icon-park-bank-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M44 18V8H4V18"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 18H4V40H44V18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 29H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 29H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 29H30"></svg:path></svg:g>`,
})
export class IconParkBankCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBankTransferIcon],svg[icon-park-bank-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="10" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M4 20H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 17V23"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 17V23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 29L37 29"></svg:path></svg:g>`,
})
export class IconParkBankTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBaokemengIcon],svg[icon-park-baokemeng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M44 24H30C30 20.69 27.31 18 24 18C20.69 18 18 20.69 18 24H4C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24Z"></svg:path><svg:path stroke-linecap="round" d="M18 24H4C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24H30"></svg:path><svg:path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkBaokemengIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBarCodeIcon],svg[icon-park-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 20H44"></svg:path><svg:path d="M6 6V14"></svg:path><svg:path d="M6 25.9956V37.9992"></svg:path><svg:path d="M20.4 6V14"></svg:path><svg:path d="M20.4 26V42"></svg:path><svg:path d="M34.8 6V14"></svg:path><svg:path d="M42 6V14"></svg:path><svg:path d="M34.8 26V34"></svg:path><svg:path d="M13.2 6V14"></svg:path><svg:path d="M13.2 26V34"></svg:path><svg:path d="M27.6 6V14"></svg:path><svg:path d="M27.6 26V34"></svg:path><svg:path d="M42 26V38"></svg:path></svg:g>`,
})
export class IconParkBarCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBarbecueIcon],svg[icon-park-barbecue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="8" height="8" x="12" y="4" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="12" y="22" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:line x1="16" x2="16" y1="31" y2="44"></svg:line><svg:rect width="8" height="8" x="28" y="4" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="28" y="22" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:line x1="32" x2="32" y1="31" y2="44"></svg:line><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M13 17H19"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M29 17H35"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M13 36H19"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M29 36H35"></svg:path><svg:line x1="16" x2="16" y1="14" y2="20"></svg:line><svg:line x1="32" x2="32" y1="14" y2="20"></svg:line></svg:g>`,
})
export class IconParkBarbecueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBarberBrushIcon],svg[icon-park-barber-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M29.7961 24H16.2039C16.2039 24 12.2176 31.7083 18.7524 34.8333C22.9346 37.3333 16.2039 44 16.2039 44H29.7962C29.7962 44 23.0654 36.7083 27.2476 34.8333C33.7824 31.7083 29.7961 24 29.7961 24Z"></svg:path><svg:path d="M37 10L30 24H16L9 10C9 10 12 4 23 4C34 4 37 10 37 10Z"></svg:path><svg:path d="M25 24L27 12"></svg:path><svg:path d="M21 24L19 12"></svg:path></svg:g>`,
})
export class IconParkBarberBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBarberClippersIcon],svg[icon-park-barber-clippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 8L38 8V17L33 24V36C33 36 33 44 24 44C15 44 15 36 15 36L15 24L10 17V8Z"></svg:path><svg:path d="M15 4V10"></svg:path><svg:path d="M21 4V10"></svg:path><svg:path d="M27 4V10"></svg:path><svg:rect width="6" height="10" x="21" y="28" fill="#2F88FF" rx="3"></svg:rect><svg:path d="M10 17H38"></svg:path><svg:path d="M33 4V10"></svg:path></svg:g>`,
})
export class IconParkBarberClippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBaseballIcon],svg[icon-park-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M8.5459 11.2727C12.7883 14.9091 14.9095 19.1515 14.9095 24C14.9095 28.8485 12.7883 33.0909 8.5459 36.7272"></svg:path><svg:path d="M39.4545 36.7272C35.212 33.0909 33.0908 28.8485 33.0908 24C33.0908 19.1515 35.212 14.9091 39.4545 11.2727"></svg:path></svg:g>`,
})
export class IconParkBaseballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBaseballBatIcon],svg[icon-park-baseball-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:circle cx="40" cy="40" r="3"></svg:circle><svg:path stroke-linejoin="round" d="M16.502 9.43095C16.502 9.43095 26.4998 22 37.4998 37.5C21.4998 26 9.43102 16.5021 9.43102 16.5021C9.43102 16.5021 3.11056 10.8894 6.99983 7.00032C10.8891 3.11124 16.502 9.43095 16.502 9.43095Z"></svg:path></svg:g>`,
})
export class IconParkBaseballBatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBaseballCapIcon],svg[icon-park-baseball-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 30C12 21.1634 19.1634 14 28 14V14C36.8366 14 44 21.1634 44 30V36H12V30Z"></svg:path><svg:path d="M21.9997 36C20.9997 32.5 20.9997 14 27.9997 14C34.9997 14 34.4997 32 33.9997 36"></svg:path><svg:rect width="30" height="6" x="4" y="36" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:circle cx="28" cy="10" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkBaseballCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBasketballIcon],svg[icon-park-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M8.5459 11.2727C12.7883 14.9091 14.9095 19.1515 14.9095 24C14.9095 28.8485 12.7883 33.0909 8.5459 36.7272"></svg:path><svg:path d="M39.4545 36.7272C35.212 33.0909 33.0908 28.8485 33.0908 24C33.0908 19.1515 35.212 14.9091 39.4545 11.2727"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkBasketballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBasketballClothesIcon],svg[icon-park-basketball-clothes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4H15C13.8954 4 12.9976 4.89414 12.9681 5.99832C12.8995 8.57035 12.6829 12.9512 12 15C11.2389 17.2832 8.16103 20.1456 6.73361 21.3831C6.27454 21.7811 6 22.3537 6 22.9613V42C6 43.1046 6.89543 44 8 44H40C41.1046 44 42 43.1046 42 42V22.9613C42 22.3537 41.7255 21.7811 41.2664 21.3831C39.839 20.1456 36.7611 17.2832 36 15C35.3171 12.9512 35.1005 8.57035 35.0319 5.99832C35.0024 4.89414 34.1046 4 33 4H30Z"></svg:path><svg:rect width="6" height="12" x="27" y="24" stroke="#fff"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M15 24H21V36H15"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 30H15"></svg:path></svg:g>`,
})
export class IconParkBasketballClothesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBasketballOneIcon],svg[icon-park-basketball-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M12 4H4V36H12V4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M12 24H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M18 24L20 28.5C22 33.5 21.9 38.9 20 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M40.9997 24L38.9997 28.5C36.9996 33.5 37.0896 38.9 38.9996 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M21.2197 32H37.7797"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M21.6895 40H37.3195"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M29.5 40V24"></svg:path></svg:g>`,
})
export class IconParkBasketballOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBasketballStandIcon],svg[icon-park-basketball-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="5" rx="2"></svg:rect><svg:path d="M31 22V15H17V22"></svg:path><svg:path d="M18 39H30"></svg:path><svg:path d="M17 33H31"></svg:path><svg:path d="M32 27L30 39L31 43"></svg:path><svg:path d="M16 27L18 39L17 43"></svg:path><svg:path d="M24 27L24 43"></svg:path><svg:path d="M34 27L14 27"></svg:path></svg:g>`,
})
export class IconParkBasketballStandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatIcon],svg[icon-park-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21.6188 8.98551L22.095 11.4493H25.905L26.3812 8.98551C26.8574 10.628 27.8097 14.2087 27.8097 15.3913C29.5558 15.2271 32.9526 14.0116 32.5716 10.4638C32.5716 9.97101 32.1905 8.78841 30.6667 8C34.9524 8.98551 43.619 13.7159 44 24.7536C41.1429 22.9469 35.2381 21.6 34.4762 30.6667C32.7303 27.7101 28.6671 23.3739 26.3812 29.6812C25.5875 32.4734 23.9998 38.8464 23.9998 42C23.9998 38.8464 22.4125 32.4734 21.6188 29.6812C19.3329 23.3739 15.2697 27.7101 13.5238 30.6667C12.7619 21.6 6.85714 22.9469 4 24.7536C4.38095 13.7159 13.0476 8.98551 17.3333 8C15.8095 8.78841 15.4284 9.97101 15.4284 10.4638C15.0474 14.0116 18.4442 15.2271 20.1903 15.3913C20.1903 14.2087 21.1426 10.628 21.6188 8.98551Z"></svg:path>`,
})
export class IconParkBatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryChargeIcon],svg[icon-park-battery-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14H31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.002 14L17 24.0012H27.004L22 34"></svg:path><svg:path fill="#000" d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"></svg:path></svg:g>`,
})
export class IconParkBatteryChargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryEmptyIcon],svg[icon-park-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"></svg:path><svg:path fill="#000" d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"></svg:path></svg:g>`,
})
export class IconParkBatteryEmptyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryFailureIcon],svg[icon-park-battery-failure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="20" x="14" y="44" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2" transform="rotate(-90 14 44)"></svg:rect><svg:path fill="#000" d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30V27C26.2091 27 28 24.9853 28 22.5C28 20.0147 26.2091 18 24 18C21.7909 18 20 20.0147 20 22.5"></svg:path><svg:path fill="#fff" stroke="#fff" d="M26 35.5C26 36.6046 25.1046 37.5 24 37.5C22.8954 37.5 22 36.6046 22 35.5C22 34.3954 22.8954 33.5 24 33.5C25.1046 33.5 26 34.3954 26 35.5Z"></svg:path></svg:g>`,
})
export class IconParkBatteryFailureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryFullIcon],svg[icon-park-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"></svg:path><svg:path fill="#000" d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 21V27"></svg:path></svg:g>`,
})
export class IconParkBatteryFullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryStorageIcon],svg[icon-park-battery-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="20" x="14" y="44" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2" transform="rotate(-90 14 44)"></svg:rect><svg:path fill="#000" d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 18L20 28L28 26L23 36"></svg:path></svg:g>`,
})
export class IconParkBatteryStorageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryTipsIcon],svg[icon-park-battery-tips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="20" x="14" y="44" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2" transform="rotate(-90 14 44)"></svg:rect><svg:path fill="#000" d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28L24 18"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 24 34)"></svg:circle></svg:g>`,
})
export class IconParkBatteryTipsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryWorkingIcon],svg[icon-park-battery-working-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"></svg:path><svg:path fill="#000" d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 21V27"></svg:path></svg:g>`,
})
export class IconParkBatteryWorkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryWorkingOneIcon],svg[icon-park-battery-working-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="20" x="4" y="14" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path fill="#000" d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 24V27"></svg:path></svg:g>`,
})
export class IconParkBatteryWorkingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBeachUmbrellaIcon],svg[icon-park-beach-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M14.3409 21.4119L24.0002 24.0001L33.6594 26.5883L43.3187 29.1765C45.6567 20.4506 41.8476 11.5259 34.5459 7.00012C32.9196 5.99211 31.12 5.20232 29.1765 4.68156C26.9383 4.08183 24.6869 3.88656 22.5001 4.05095C14.2628 4.67018 6.94074 10.3926 4.68164 18.8237L14.3409 21.4119Z"></svg:path><svg:path stroke="#fff" d="M29.1762 4.6814C29.1762 4.6814 23.5355 8.34634 20.3095 12.6583C17.0836 16.9703 16.2725 21.9294 16.2725 21.9294"></svg:path><svg:path stroke="#fff" d="M29.1768 4.6814C29.1768 4.6814 32.2293 10.6757 32.8671 16.023C33.5048 21.3702 31.7278 26.0705 31.7278 26.0705"></svg:path><svg:path stroke="#000" d="M4.68164 18.8237L14.3409 21.4119L24.0002 24.0001L33.6594 26.5883L43.3187 29.1765"></svg:path><svg:path stroke="#000" d="M4 44H44"></svg:path><svg:path stroke="#000" d="M24 24L18.5 43.9999"></svg:path><svg:path stroke="#000" d="M22.5 4.05095C24.6868 3.88656 26.9382 4.08183 29.1764 4.68156C31.1199 5.20232 32.9195 5.99211 34.5458 7.00012"></svg:path></svg:g>`,
})
export class IconParkBeachUmbrellaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBearIcon],svg[icon-park-bear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5 13.0606C5 15.5392 6.29171 17.5214 8 19C6.92442 21.1464 6 23.4737 6 26C6 35.2215 14.1238 43 24 43C33.8762 43 42 35.2215 42 26C42 23.4737 41.0756 21.1464 40 19C41.7083 17.5214 43 15.4786 43 13C43 8.54825 39.3208 5 35 5C31.7266 5 29.167 7.06019 28 10C26.7347 9.73491 25.351 9.60606 24 9.60606C22.649 9.60606 21.2653 9.73491 20 10C18.833 7.06019 16.2734 5 13 5C8.67918 5 5 8.60886 5 13.0606Z"></svg:path><svg:circle cx="20" cy="19" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="19" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="26" r="3" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 26V34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M28 33C25.7238 35.2762 22.2762 35.2762 20 33"></svg:path></svg:g>`,
})
export class IconParkBearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBeautyIcon],svg[icon-park-beauty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 44C42 44 42 29.6492 42 22C42 12.0589 33.9411 4 24 4C14.0589 4 6 12.0589 6 22C6 28.6625 6 44 6 44"></svg:path><svg:path fill="#2F88FF" d="M24 43C29.5228 43 34 34.0457 34 23H14C14 34.0457 18.4772 43 24 43Z"></svg:path></svg:g>`,
})
export class IconParkBeautyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBeautyInstrumentIcon],svg[icon-park-beauty-instrument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M17 34L31 34"></svg:path><svg:path stroke="#000" d="M16 27L32 27"></svg:path><svg:rect width="30" height="16" x="9" y="4" fill="#2F88FF" stroke="#000" rx="4"></svg:rect><svg:path stroke="#000" d="M13.9999 20L18.9999 44H28.9999L33.9999 20"></svg:path><svg:path stroke="#fff" d="M17 12L30 12"></svg:path></svg:g>`,
})
export class IconParkBeautyInstrumentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBedsideIcon],svg[icon-park-bedside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="12" x="4" y="18" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="40" height="12" x="4" y="30" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M22 24H26"></svg:path><svg:path stroke="#fff" d="M22 36H26"></svg:path><svg:path stroke="#000" d="M8 42V46"></svg:path><svg:path stroke="#000" d="M40 42V46"></svg:path><svg:path stroke="#000" d="M24 18V10"></svg:path><svg:path stroke="#000" d="M32 10H16"></svg:path></svg:g>`,
})
export class IconParkBedsideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBedsideTwoIcon],svg[icon-park-bedside-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 18H44V42H4V18Z"></svg:path><svg:path stroke="#fff" d="M22 24H26"></svg:path><svg:path stroke="#fff" d="M4 30H44"></svg:path><svg:path stroke="#fff" d="M22 36H26"></svg:path><svg:path stroke="#000" d="M8 42V46"></svg:path><svg:path stroke="#000" d="M40 42V46"></svg:path><svg:path stroke="#000" d="M24 18V10"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M32 10C32 5.58172 28.4183 2 24 2C19.5817 2 16 5.58172 16 10H32Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M44 26V34"></svg:path><svg:path stroke="#000" d="M4 26V34"></svg:path></svg:g>`,
})
export class IconParkBedsideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBeeIcon],svg[icon-park-bee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M30 28.6957C30 35 27.3137 44 24 44C20.6863 44 18 35 18 28.6957C18 24.9977 20.6863 22 24 22C27.3137 22 30 24.9977 30 28.6957Z"></svg:path><svg:path d="M11.4783 17C13.9884 17 20 19.2386 20 22C20 24.7614 13.9884 27 11.4783 27C8.96817 27 6 24.7614 6 22C6 19.2386 8.96817 17 11.4783 17Z"></svg:path><svg:path d="M36.5217 17C34.0116 17 28 19.2386 28 22C28 24.7614 34.0116 27 36.5217 27C39.0318 27 42 24.7614 42 22C42 19.2386 39.0318 17 36.5217 17Z"></svg:path><svg:rect width="10" height="13" x="19" y="9" fill="#2F88FF" rx="5"></svg:rect><svg:path stroke-linecap="round" d="M28 10C28 6.68629 30.6863 4 34 4"></svg:path><svg:path stroke-linecap="round" d="M21 10C21 6.68629 17.866 4 14 4"></svg:path></svg:g>`,
})
export class IconParkBeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBeerIcon],svg[icon-park-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M25.5 19H33C34.1046 19 35 19.8954 35 21V44H13V21C13 19.8954 13.8954 19 15 19H17.5"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M17 8H14.5C11.4624 8 9 10.4624 9 13.5C9 16.5376 11.4624 19 14.5 19H19V29.5C19 30.8807 20.1193 32 21.5 32C22.8807 32 24 30.8807 24 29.5V19H33.5C36.5376 19 39 16.5376 39 13.5C39 10.4624 36.5376 8 33.5 8H29C29 8 28 4 23 4C18 4 17 8 17 8Z"></svg:path><svg:path d="M35 21H40C41.1046 21 42 21.8954 42 23V28C42 30.2091 40.2091 32 38 32H35"></svg:path></svg:g>`,
})
export class IconParkBeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBeerMugIcon],svg[icon-park-beer-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 37.2414C16 39.1724 16.8571 44 28 44C39.1429 44 40 39.1724 40 37.2414C40 35.3103 40 16 40 16H28H16C16 16 16 35.3103 16 37.2414Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M25 23V37"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 23V37"></svg:path><svg:path stroke="#000" d="M15.9983 16C15.9983 16 13.9992 11.5 16.9988 9C19.9983 6.5 22.9991 8 22.9991 8C22.9991 8 23.9983 4 27.9991 4C32 4 32.9985 8 32.9985 8C32.9985 8 36.5 6.5 39 9C41.5 11.5 39.9985 16 39.9985 16"></svg:path><svg:path stroke="#000" d="M16 19H6C6 19 7 29 7.9991 32C8.99821 35 16 34 16 34"></svg:path></svg:g>`,
})
export class IconParkBeerMugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBehanceIcon],svg[icon-park-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 24C17 24 20 21.2 20 17C20 12.8 17 10 12 10C7 10 4 10 4 10V24H12Z" clip-rule="evenodd"></svg:path><svg:path d="M13.0312 40C18.5368 40 22 37 22 32C22 27 18.5368 24 13.0312 24H4V40H13.0312Z" clip-rule="evenodd"></svg:path><svg:path d="M29 31H44C44 27 42 22 36 22C31 22 28 26 28 31C28 36 31 40 36 40C41 40 43 37 43 37"></svg:path><svg:path d="M42 15H30"></svg:path></svg:g>`,
})
export class IconParkBehanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBellRingIcon],svg[icon-park-bell-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="20" cy="20" r="16" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" d="M44 18V20H42V18H44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 20H44V18H42V20ZM42 20C42 29.1371 36.4299 36.9732 28.5 40.2978"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 35L10 44H30L26 35"></svg:path><svg:circle cx="20" cy="20" r="4" fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 20C10 14.4772 14.4772 10 20 10"></svg:path></svg:g>`,
})
export class IconParkBellRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBeltIcon],svg[icon-park-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.5651 30.3641L4.20117 36.728L11.2722 43.7991L17.6362 37.4351"></svg:path><svg:path d="M21.8789 19.0503L36.7281 4.20105L43.7992 11.2721L28.95 26.1214"></svg:path><svg:path d="M9.85855 29.6569C9.0775 28.8758 9.0775 27.6095 9.85855 26.8285L18.3438 18.3432C19.1249 17.5621 20.3912 17.5621 21.1723 18.3432L29.6575 26.8285C30.4386 27.6095 30.4386 28.8758 29.6575 29.6569L21.1723 38.1422C20.3912 38.9232 19.1249 38.9232 18.3438 38.1422L9.85855 29.6569Z"></svg:path><svg:path d="M25.4148 22.5857L18.3438 29.6567"></svg:path><svg:path d="M31.7785 9.15061L38.8496 16.2217"></svg:path><svg:path d="M26.8283 14.1008L33.8994 21.1719"></svg:path><svg:path d="M15.5154 21.1716L26.8291 32.4854"></svg:path></svg:g>`,
})
export class IconParkBeltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBenzIcon],svg[icon-park-benz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M6.67969 34L24.0002 24M24.0002 4V24V4ZM41.3207 34L24.0002 24L41.3207 34Z"></svg:path><svg:path stroke="#000" d="M17.9998 4.9156C19.8939 4.32071 21.9094 4 23.9998 4C26.0902 4 28.1057 4.32071 29.9998 4.9156M4.62988 29C5.08644 30.7739 5.78024 32.4525 6.67544 34C7.52003 35.46 8.54389 36.8034 9.71693 38M43.3697 29C42.9131 30.7739 42.2193 32.4525 41.3242 34C40.4796 35.46 39.4557 36.8034 38.2827 38"></svg:path></svg:g>`,
})
export class IconParkBenzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBezierCurveIcon],svg[icon-park-bezier-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="8" x="4" y="30" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="30" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="20" y="10" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M20 14H4"></svg:path><svg:path stroke-linecap="round" d="M44 14H28"></svg:path><svg:path stroke-linecap="round" d="M8 30.0001C8 22.5447 13.0991 16.2803 20 14.5042"></svg:path><svg:path stroke-linecap="round" d="M28 14.5042C34.9009 16.2803 40 22.5447 40 30.0001"></svg:path></svg:g>`,
})
export class IconParkBezierCurveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBibIcon],svg[icon-park-bib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M31 14.0001C31 22.0002 17 22.0002 17 14.0001C17 9.00016 22 8.00008 20 5.0001C18 2.0001 8 7.00005 8 16.0001V32C8 40.5 16.5 44 23.5 44C30.5 44.0001 40 41.0001 40 32V16.0002C40 7.00016 29 2.00012 27 5.0001C25 8.00008 31 9.00016 31 14.0001Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M19 32L24 27L29 32L24 37L19 32Z"></svg:path></svg:g>`,
})
export class IconParkBibIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBigClockIcon],svg[icon-park-big-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 4C12.9543 4 4 12.8648 4 23.8V44H44V23.8C44 12.8648 35.0457 4 24 4Z"></svg:path><svg:circle cx="24" cy="24" r="12" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M24 18V24L28 28"></svg:path></svg:g>`,
})
export class IconParkBigClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBigXIcon],svg[icon-park-big-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 6H44L15 42H4L33 6Z"></svg:path><svg:path d="M15 6H4L33 42H44L15 6Z"></svg:path></svg:g>`,
})
export class IconParkBigXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBikeIcon],svg[icon-park-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10.5 42C15.1944 42 19 38.1944 19 33.5C19 28.8056 15.1944 25 10.5 25C5.80558 25 2 28.8056 2 33.5C2 38.1944 5.80558 42 10.5 42Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 42C41.9706 42 46 37.9706 46 33C46 28.0294 41.9706 24 37 24C32.0294 24 28 28.0294 28 33C28 37.9706 32.0294 42 37 42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18.9966 6H27.9971L36.9999 33"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M11.0574 33L31.6819 16.7632L11.0574 33Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11.0574 33L31.6819 16.7632"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31.6819 15H40.1539L42.0001 10"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 15.9736H15"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 16L18.2727 26.4211"></svg:path></svg:g>`,
})
export class IconParkBikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBillIcon],svg[icon-park-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V44L31 39L24 44L17 39L10 44V6Z"></svg:path><svg:path stroke="#fff" d="M18 22L30 22"></svg:path><svg:path stroke="#fff" d="M18 30L30 30"></svg:path><svg:path stroke="#fff" d="M18 14L30 14"></svg:path></svg:g>`,
})
export class IconParkBillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBirdIcon],svg[icon-park-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 14.0003L4 20.0689C4 20.0689 5.84913 27.035 11 32.0006C20.8896 41.5344 35.3341 35.304 41 31.0006C46.3568 26.6309 43.7169 25.6695 42 26.0006L37 27.0006C46.0654 12.6997 43.5754 11.173 41 12.0006L32 16.0006C26.2311 19.1785 23.5 17.5006 22 16.0006L19 13.0002C14.5 9 10.0302 12.8417 9 14.0003Z"></svg:path><svg:circle cx="14" cy="20" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkBirdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBirthdayCakeIcon],svg[icon-park-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M8 40H40V24H8V40Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 40H8M40 40H4H8M40 40H44M40 40V24H8V40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 34L36 32L32 34L28 32L24 34L20 32L16 34L12 32L8 34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 24V15"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 24V15"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 24V15"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 10V8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 10V8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 10V8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 24V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 24V40"></svg:path></svg:g>`,
})
export class IconParkBirthdayCakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBitcoinIcon],svg[icon-park-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" d="M20 16H25H27C29.2091 16 31 17.7909 31 20C31 22.2091 29.2091 24 27 24H20V16Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 16V24H27C29.2091 24 31 22.2091 31 20V20C31 17.7909 29.2091 16 27 16H25M20 16H16M20 16V12M20 16H25M25 16V12"></svg:path><svg:path fill="#2F88FF" d="M20 24H29C31.2091 24 33 25.7909 33 28C33 30.2091 31.2091 32 29 32H25H20V24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 32V24H29C31.2091 24 33 25.7909 33 28V28C33 30.2091 31.2091 32 29 32H25M20 32V36M20 32H16H25M20 32H25M25 32V36"></svg:path></svg:g>`,
})
export class IconParkBitcoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlackEightIcon],svg[icon-park-black-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 35C27.3137 35 30 32.3137 30 29C30 25.6863 27.3137 23 24 23C20.6863 23 18 25.6863 18 29C18 32.3137 20.6863 35 24 35Z"></svg:path></svg:g>`,
})
export class IconParkBlackEightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlackboardIcon],svg[icon-park-blackboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="24" x="8" y="7" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M4 7H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 41L24 31L33 41"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 13H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 19H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 25H22"></svg:path></svg:g>`,
})
export class IconParkBlackboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBladeIcon],svg[icon-park-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 14V17H6C4.89543 17 4 17.8954 4 19V29C4 30.1046 4.89543 31 6 31H8V34C8 35.1046 8.89543 36 10 36H37C38.1046 36 39 35.1046 39 34V31H42C43.1046 31 44 30.1046 44 29V19C44 17.8954 43.1046 17 42 17H39V14C39 12.8954 38.1046 12 37 12H10C8.89543 12 8 12.8954 8 14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 24H36"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 29V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 29V19"></svg:path></svg:g>`,
})
export class IconParkBladeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlessIcon],svg[icon-park-bless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 24.713V5.9354C21 4.86651 20.1335 4 19.0646 4C18.152 4 17.3634 4.63752 17.1722 5.52987L13.0582 24.7286C13.0196 24.9087 12.9563 25.0826 12.8701 25.2453L5.55423 39.0642C4.84906 40.3962 5.81466 42 7.32181 42H15.4056C16.3384 42 17.1474 41.3551 17.3553 40.4456L20.4803 26.7739L20.9193 25.2754C20.9728 25.0927 21 24.9034 21 24.713Z"></svg:path><svg:path d="M13 25L20 28"></svg:path><svg:path d="M27 24.713V5.9354C27 4.86651 27.8665 4 28.9354 4C29.848 4 30.6366 4.63752 30.8278 5.52987L34.9418 24.7286C34.9804 24.9087 35.0437 25.0826 35.1299 25.2453L42.4458 39.0642C43.1509 40.3962 42.1853 42 40.6782 42H32.5944C31.6616 42 30.8526 41.3551 30.6447 40.4456L27.5197 26.7739L27.0807 25.2754C27.0272 25.0927 27 24.9034 27 24.713Z"></svg:path><svg:path d="M35 25L28 28"></svg:path></svg:g>`,
})
export class IconParkBlessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockIcon],svg[icon-park-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 11L33 8H12L28 24L12 40H33L36 37"></svg:path><svg:path d="M6 5L6 43"></svg:path><svg:path d="M42 5V43"></svg:path></svg:g>`,
})
export class IconParkBlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockEightIcon],svg[icon-park-block-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6H18V18H6V6Z"></svg:path><svg:path d="M18 6H30V18H18V6Z"></svg:path><svg:path d="M18 18H30V30H18V18Z"></svg:path><svg:path d="M18 30H30V42H18V30Z"></svg:path><svg:path d="M30 6H42V18H30V6Z"></svg:path></svg:g>`,
})
export class IconParkBlockEightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockFiveIcon],svg[icon-park-block-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 30H18V42H6V30Z"></svg:path><svg:path d="M18 18H30V30H18V18Z"></svg:path><svg:path d="M30 6H42V18H30V6Z"></svg:path></svg:g>`,
})
export class IconParkBlockFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockFourIcon],svg[icon-park-block-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 12H18V24H6V12Z"></svg:path><svg:path d="M18 12H30V24H18V12Z"></svg:path><svg:path d="M30 12H42V24H30V12Z"></svg:path><svg:path d="M18 24H30V36H18V24Z"></svg:path></svg:g>`,
})
export class IconParkBlockFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockNineIcon],svg[icon-park-block-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 14H30V26H18V14Z"></svg:path><svg:path d="M18 26H30V38H18V26Z"></svg:path><svg:path d="M30 14H42V26H30V14Z"></svg:path><svg:path d="M6 26H18V38H6V26Z"></svg:path></svg:g>`,
})
export class IconParkBlockNineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockOneIcon],svg[icon-park-block-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 30H18V42H6V30Z"></svg:path><svg:path d="M30 6H42V18H30V6Z"></svg:path><svg:path d="M30 18H42V30H30V18Z"></svg:path><svg:path d="M18 18H30V30H18V18Z"></svg:path><svg:path d="M6 18H18V30H6V18Z"></svg:path></svg:g>`,
})
export class IconParkBlockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockSevenIcon],svg[icon-park-block-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 18H30V30H18V18Z"></svg:path><svg:path d="M30 18H42V30H30V18Z"></svg:path><svg:path d="M6 18H18V30H6V18Z"></svg:path><svg:path d="M18 30H30V42H18V30Z"></svg:path><svg:path d="M18 6H30V18H18V6Z"></svg:path></svg:g>`,
})
export class IconParkBlockSevenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockSixIcon],svg[icon-park-block-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 18H30V30H18V18Z"></svg:path><svg:path d="M6 18H18V30H6V18Z"></svg:path><svg:path d="M30 18H42V30H30V18Z"></svg:path></svg:g>`,
})
export class IconParkBlockSixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockTenIcon],svg[icon-park-block-ten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 6H36V18H24V6Z"></svg:path><svg:path d="M24 6H36V18H24V6Z"></svg:path><svg:path d="M12 6H24V18H12V6Z"></svg:path><svg:path d="M12 30H24V42H12V30Z"></svg:path><svg:path d="M12 18H24V30H12V18Z"></svg:path></svg:g>`,
})
export class IconParkBlockTenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockThreeIcon],svg[icon-park-block-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24H18V36H6V24Z"></svg:path><svg:path d="M30 24H42V36H30V24Z"></svg:path><svg:path d="M6 12H18V24H6V12Z"></svg:path><svg:path d="M18 12H30V24H18V12Z"></svg:path><svg:path d="M30 12H42V24H30V12Z"></svg:path></svg:g>`,
})
export class IconParkBlockThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockTwoIcon],svg[icon-park-block-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 6H30V18H18V6Z"></svg:path><svg:path d="M30 6H42V18H30V6Z"></svg:path><svg:path d="M6 6H18V18H6V6Z"></svg:path><svg:path d="M6 18H18V30H6V18Z"></svg:path><svg:path d="M6 30H18V42H6V30Z"></svg:path></svg:g>`,
})
export class IconParkBlockTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockchainIcon],svg[icon-park-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 30V15L27.5 7.96875M20.5 7.96875L8 15V30M11 34.6875L24 42L32 37.5L37 34.6875"></svg:path><svg:path fill="#2F88FF" d="M21 18.75L18 20.5V24V27.5L21 29.25L24 31L27 29.25L30 27.5V24V20.5L27 18.75L24 17L21 18.75Z"></svg:path><svg:path d="M24 17V10"></svg:path><svg:path d="M30 27L37 31"></svg:path><svg:path d="M18 27L11 31"></svg:path><svg:circle cx="24" cy="7" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="8" cy="33" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="40" cy="33" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkBlockchainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlocksAndArrowsIcon],svg[icon-park-blocks-and-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20 6H6V20H20V6Z"></svg:path><svg:path fill="#2F88FF" d="M20 28H6V42H20V28Z"></svg:path><svg:path fill="#2F88FF" d="M42 6H28V20H42V6Z"></svg:path><svg:path d="M28 28L42 42M28 28H42H28ZM28 28V42V28Z"></svg:path></svg:g>`,
})
export class IconParkBlocksAndArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBloomIcon],svg[icon-park-bloom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 32L18 42"></svg:path><svg:path d="M42 32L30 42"></svg:path><svg:path d="M24 32V44"></svg:path><svg:path fill="#2F88FF" d="M17 11L24 4L31 11L38 10C38 10 39 14.2386 39 17C39 27 30.5 32 24 32C17.5 32 9 27 9 17C9 14.2386 10 10 10 10L17 11Z"></svg:path></svg:g>`,
})
export class IconParkBloomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBlossomIcon],svg[icon-park-blossom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23.2663 6.00775C31 6.45947 31.2208 14.3708 30.285 17.623C39.6432 14.6492 43.2305 18.8621 43.8544 21.3403C44.9773 27.2874 39.3312 29.0839 36.3678 29.2387C42.357 36.6725 39.4872 40.3894 37.3036 41.3186C30.5657 43.1771 26.6977 38.3761 25.6059 35.7433C22.6112 42.062 17.4954 42.4027 15.3119 41.7832C8.94827 39.9248 11.7245 33.2654 13.9081 30.1679C4.92427 28.6812 3.61412 24.2829 4.08203 22.2696C5.57934 14.8358 13.4402 16.0745 17.1835 17.623C15.6862 7.95912 20.6148 5.85288 23.2663 6.00775Z"></svg:path><svg:path stroke="#fff" d="M25 26L21 31"></svg:path><svg:path stroke="#fff" d="M19 25L25 26"></svg:path><svg:path stroke="#fff" d="M24 19L25 26"></svg:path><svg:path stroke="#fff" d="M31 24L25 26"></svg:path><svg:path stroke="#fff" d="M25 26L30 30"></svg:path></svg:g>`,
})
export class IconParkBlossomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBluetoothIcon],svg[icon-park-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 13L34 34L23 44V4L34 14L12 35"></svg:path>`,
})
export class IconParkBluetoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoilerIcon],svg[icon-park-boiler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="8" x="5" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M8 14V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V14"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M31 29.0667C31 32.8958 27.866 36 24 36C20.134 36 17 32.8958 17 29.0667C17 25.2375 19.6923 23.7333 20.7692 20C25.0769 21.8666 25.0769 27.4667 25.0769 27.4667C25.0769 27.4667 26.1538 24.2667 29.3846 23.4667C29.6538 26.4 31 27.4316 31 29.0667Z"></svg:path></svg:g>`,
})
export class IconParkBoilerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoltOneIcon],svg[icon-park-bolt-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 12.2802C12 12.1254 12.1254 12 12.2802 12H35.7198C35.8746 12 36 12.1254 36 12.2802V24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24V12.2802Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 12V4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 27H26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 36V41C24 42.6569 25.3431 44 27 44H38"></svg:path></svg:g>`,
})
export class IconParkBoltOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoneIcon],svg[icon-park-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M43.5229 17.3147C43.5228 13.072 39.9873 13.072 37.5125 10.5972C35.0376 8.1223 35.0375 4.58669 30.795 4.58674C27.9665 4.58672 25.4916 7.7687 25.4917 9.89005C25.4917 12.0114 26.1988 13.4256 27.613 14.8398L14.8851 27.5677C13.4709 26.1536 12.0566 25.4464 9.93531 25.4464C7.81402 25.4464 4.63195 27.9212 4.632 30.7497C4.2784 35.3458 8.52116 35.3459 10.6424 37.4672C12.7637 39.5885 12.7637 43.8311 17.3599 43.4776C20.1883 43.4776 22.6633 40.2957 22.6632 38.1743C22.6632 36.0529 21.9562 34.6388 20.5419 33.2246L33.2698 20.4966C34.684 21.9109 36.0983 22.618 38.2196 22.618C40.3409 22.618 43.5229 20.143 43.5229 17.3147Z"></svg:path>`,
})
export class IconParkBoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBookIcon],svg[icon-park-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z"></svg:path><svg:path stroke-linecap="round" d="M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBookOneIcon],svg[icon-park-book-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z"></svg:path><svg:path stroke-linecap="round" d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7"></svg:path><svg:path stroke-linecap="round" d="M14 37H34"></svg:path></svg:g>`,
})
export class IconParkBookOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBookOpenIcon],svg[icon-park-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"></svg:path><svg:path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"></svg:path></svg:g>`,
})
export class IconParkBookOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBookmarkIcon],svg[icon-park-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z"></svg:path><svg:path fill="#43CCF8" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" d="M21 22V4H33V22L27 15.7273L21 22Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 4H38"></svg:path></svg:g>`,
})
export class IconParkBookmarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBookmarkOneIcon],svg[icon-park-bookmark-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M34 10V4H8V38L14 35"></svg:path><svg:path fill="#2F88FF" d="M14 44V10H40V44L27 37.7273L14 44Z"></svg:path></svg:g>`,
})
export class IconParkBookmarkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBookmarkThreeIcon],svg[icon-park-bookmark-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 9C7 7.34315 8.34315 6 10 6H41V42H10C8.34315 42 7 40.6569 7 39V9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M7 34L41 34"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 30V38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M41 30V38"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M15 6H25V26L20 22L15 26V6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 6L29 6"></svg:path></svg:g>`,
})
export class IconParkBookmarkThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBookshelfIcon],svg[icon-park-bookshelf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 6H39C39 6 43 8 43 13C43 18 39 20 39 20H5C5 20 9 18 9 13C9 8 5 6 5 6Z"></svg:path><svg:path d="M43 28H9C9 28 5 30 5 35C5 40 9 42 9 42H43C43 42 39 40 39 35C39 30 43 28 43 28Z"></svg:path></svg:g>`,
})
export class IconParkBookshelfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoosterCarSeatIcon],svg[icon-park-booster-car-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M32 15H16C16 18.47 10.2205 22.9032 6.68333 25.2915C5.12368 26.3445 4 27 4 27C4 27 5 30 7.5 35C9.39377 38.7875 11.5745 40.8536 12.5207 41.6329C12.8255 41.8839 13.2107 42 13.6055 42H35.2984C35.7526 42 36.1923 41.8455 36.5149 41.5258C37.3745 40.6737 39.1873 38.6255 41 35C43.5 30 44 27 44 27C44 27 42.7219 26.361 41 25.2915C37.4456 23.0838 32 19.0419 32 15Z"></svg:path><svg:path stroke="#000" d="M32 15L34 6L42 6.00001"></svg:path><svg:path stroke="#000" d="M16 15L14 6L6 6.00001"></svg:path><svg:path stroke="#fff" d="M4 27C4 27 6 31 12 31C18 31 31 31 36 31C41 31 44 27 44 27"></svg:path><svg:path stroke="#000" d="M7.5 35.0001C5 30.0001 4 27.0001 4 27.0001C4 27.0001 5.12368 26.3446 6.68333 25.2915"></svg:path><svg:path stroke="#000" d="M41 35.0001C43.5 30.0001 44 27.0001 44 27.0001C44 27.0001 42.7219 26.361 41 25.2915"></svg:path></svg:g>`,
})
export class IconParkBoosterCarSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoothIcon],svg[icon-park-booth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 5H44V13L42.6015 13.8391C40.3847 15.1692 37.6153 15.1692 35.3985 13.8391L34 13L32.6015 13.8391C30.3847 15.1692 27.6153 15.1692 25.3985 13.8391L24 13L22.6015 13.8391C20.3847 15.1692 17.6153 15.1692 15.3985 13.8391L14 13L12.6015 13.8391C10.3847 15.1692 7.61531 15.1692 5.39853 13.8391L4 13V5Z"></svg:path><svg:rect width="36" height="18" x="6" y="25"></svg:rect><svg:path d="M9 16V25"></svg:path><svg:path d="M39 16V25"></svg:path></svg:g>`,
})
export class IconParkBoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBootsIcon],svg[icon-park-boots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 4H35L31 36L32.2361 36.618C33.93 37.465 35 39.1963 35 41.0902V44H10V42L23 36L19 4Z"></svg:path><svg:path d="M20 12H34"></svg:path></svg:g>`,
})
export class IconParkBootsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBottleIcon],svg[icon-park-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M36 18H12V44H36V18Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19.8943 11H28.1057C29.8329 11 31.365 12.1086 31.9051 13.7492L33.3045 18H14.6953L16.0949 13.7491C16.635 12.1086 18.1671 11 19.8943 11Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21 11V7C21 5.34315 22.3431 4 24 4C25.6569 4 27 5.34315 27 7V11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.5 26V36"></svg:path></svg:g>`,
})
export class IconParkBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBottleOneIcon],svg[icon-park-bottle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15 30C15 28.0527 15.6316 26.1579 16.8 24.6L20.4 19.8C20.7895 19.2807 21 18.6491 21 18V4H27V18C27 18.6491 27.2105 19.2807 27.6 19.8L31.2 24.6C32.3684 26.1579 33 28.0527 33 30V42C33 43.1046 32.1046 44 31 44H17C15.8954 44 15 43.1046 15 42V30Z"></svg:path><svg:path stroke="#fff" d="M21 10L27 10"></svg:path><svg:path stroke="#000" d="M21 12V8"></svg:path><svg:path stroke="#000" d="M27 12V8"></svg:path></svg:g>`,
})
export class IconParkBottleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBottleThreeIcon],svg[icon-park-bottle-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.1875 10H26.8125L33 21.1806V44H15V21.1806L21.1875 10Z"></svg:path><svg:rect width="8" height="6" x="20" y="4" fill="#2F88FF"></svg:rect><svg:rect width="6" height="12" x="21" y="23" fill="#2F88FF" rx="3"></svg:rect></svg:g>`,
})
export class IconParkBottleThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBottleTwoIcon],svg[icon-park-bottle-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M15 21.5597C15 18.1105 16.8097 14.9142 19.7674 13.1395C19.9117 13.053 20 12.897 20 12.7288V4H28V12.7288C28 12.897 28.0883 13.053 28.2326 13.1395C31.1903 14.9142 33 18.1105 33 21.5597V42C33 43.1046 32.1046 44 31 44H17C15.8954 44 15 43.1046 15 42V21.5597Z"></svg:path><svg:path stroke="#fff" d="M20 10L28 10"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M33 23H24V38H33"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M33 40V21"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M20 12V8"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M28 12V8"></svg:path></svg:g>`,
})
export class IconParkBottleTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBottomBarIcon],svg[icon-park-bottom-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 32H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 29V35"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 29V35"></svg:path></svg:g>`,
})
export class IconParkBottomBarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBottomBarOneIcon],svg[icon-park-bottom-bar-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13.7773 20H17.7773C17.7773 20 24.7773 27.28 24.7773 34C24.7773 40.72 18.7773 44 18.7773 44H12.7773C12.7773 44 6.77734 40.72 6.77734 34C6.77734 27.28 13.7773 20 13.7773 20Z"></svg:path><svg:path d="M15.7773 4C17.8607 4 20.7773 5.52 20.7773 10C20.7773 14.48 17.444 20 17.444 20H14.1107C14.1107 20 10.7773 14.48 10.7773 10C10.7773 5.52 13.694 4 15.7773 4Z"></svg:path><svg:path d="M31.7773 20H35.7773C35.7773 20 42.7773 27.28 42.7773 34C42.7773 40.72 36.7773 44 36.7773 44H30.7773C30.7773 44 24.7773 40.72 24.7773 34C24.7773 27.28 31.7773 20 31.7773 20Z"></svg:path><svg:path d="M33.7773 4C35.8607 4 38.7773 5.52 38.7773 10C38.7773 14.48 35.444 20 35.444 20H32.1107C32.1107 20 28.7773 14.48 28.7773 10C28.7773 5.52 31.694 4 33.7773 4Z"></svg:path></svg:g>`,
})
export class IconParkBottomBarOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBowIcon],svg[icon-park-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6.54363 14.2624C11.403 15.2288 16.603 18.7538 20 23C20 33.6307 12.6443 36.2369 7.22885 36.8338C5.75104 36.9966 4.77796 35.4327 5.37604 34.0715C6.82523 30.7732 8 27.2992 8 25C8 22.6087 6.09391 19.5821 4.81396 16.4265C4.3249 15.2208 5.26748 14.0087 6.54363 14.2624Z"></svg:path><svg:path d="M41.4564 14.2624C36.597 15.2288 31.397 18.7538 28 23C28 33.6307 35.3557 36.2369 40.7711 36.8338C42.249 36.9966 43.222 35.4327 42.624 34.0715C41.1748 30.7732 40 27.2992 40 25C40 22.6087 41.9061 19.5821 43.186 16.4265C43.6751 15.2208 42.7325 14.0087 41.4564 14.2624Z"></svg:path><svg:rect width="8" height="8" x="20" y="21" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkBowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBowlIcon],svg[icon-park-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M32 44C32 44 32 40.1355 32.0015 40.1282C32.6987 39.7817 33.3702 39.3913 34.0124 38.9606C34.9896 38.3053 35.899 37.5569 36.7279 36.7279C39.9853 33.4706 42 28.9706 42 24H6C6 28.9706 8.01472 33.4706 11.2721 36.7279C12.1086 37.5645 13.0271 38.319 14.0145 38.9786C14.653 39.4051 15.3204 39.792 16.0131 40.1355L16 44H32Z"></svg:path><svg:path d="M24 18.0083V8"></svg:path><svg:path d="M36 18.0083V12"></svg:path><svg:path d="M12 18.0083V12"></svg:path><svg:path d="M40 8C37.7909 8 36 9.79086 36 12"></svg:path><svg:path d="M28 4C25.7909 4 24 5.79086 24 8"></svg:path><svg:path d="M16 8C13.7909 8 12 9.79086 12 12"></svg:path></svg:g>`,
})
export class IconParkBowlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBowlOneIcon],svg[icon-park-bowl-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 39C33.3888 39 41 31.9411 41 22H7C7 31.9411 14.6112 39 24 39Z"></svg:path><svg:path stroke-linejoin="round" d="M18 38L16 44H32L30 38"></svg:path><svg:path d="M12 10L12 14"></svg:path><svg:path d="M36 10L36 14"></svg:path><svg:path d="M24 5L24 14"></svg:path></svg:g>`,
})
export class IconParkBowlOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBowlingIcon],svg[icon-park-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M24.7773 44C35.8273 44 44.7773 35.05 44.7773 24C44.7773 12.95 35.8273 4 24.7773 4C13.7273 4 4.77734 12.95 4.77734 24C4.77734 35.05 13.7273 44 24.7773 44Z"></svg:path><svg:path fill="#000" d="M24.7773 26C26.4373 26 27.7773 24.66 27.7773 23C27.7773 21.34 26.4373 20 24.7773 20C23.1173 20 21.7773 21.34 21.7773 23C21.7773 24.66 23.1173 26 24.7773 26Z"></svg:path><svg:path fill="#000" d="M31.7773 18C33.4373 18 34.7773 16.66 34.7773 15C34.7773 13.34 33.4373 12 31.7773 12C30.1173 12 28.7773 13.34 28.7773 15C28.7773 16.66 30.1173 18 31.7773 18Z"></svg:path><svg:path fill="#000" d="M17.7773 18C19.4373 18 20.7773 16.66 20.7773 15C20.7773 13.34 19.4373 12 17.7773 12C16.1173 12 14.7773 13.34 14.7773 15C14.7773 16.66 16.1173 18 17.7773 18Z"></svg:path></svg:g>`,
})
export class IconParkBowlingIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoxIcon],svg[icon-park-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="30" x="6" y="12" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M17.9497 24.0083L29.9497 24.0083"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 13L13 5H35L42 13"></svg:path></svg:g>`,
})
export class IconParkBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoxingIcon],svg[icon-park-boxing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M38 36V42C38 43.1 37.11 44 36 44H17C15.9 44 15 43.11 15 42V36"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-miterlimit="2" d="M11 15V10C11 6.68629 13.6863 4 17 4H28H38C41.3137 4 44 6.68629 44 10V30C44 33.3137 41.3198 36 38.006 36C30.9668 36 19.6598 36 15 36C8 36 4 28 4 23C4 18 4 15 4 15H11Z"></svg:path><svg:line x1="11" x2="11" y1="14" y2="22"></svg:line></svg:g>`,
})
export class IconParkBoxingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoxingOneIcon],svg[icon-park-boxing-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M13 26H15C17.76 26 20 23.76 20 21C20 18.24 17.76 16 15 16H11C8.24 16 6 18.24 6 21V30C6 33.3137 8.68629 36 12 36H36C39.3137 36 42 33.3137 42 30V26C42 23.7909 40.2091 22 38 22H24"></svg:path><svg:path d="M34 44H14C12.89 44 12 43.1 12 42V36H36V42C36 43.1 35.1 44 34 44Z"></svg:path><svg:path d="M6 20C5 20 4 18 4 16V12C4 7.58 7.58 4 12 4H36C40.42 4 44 7.58 44 12V16C44 19.31 41.31 22 38 22H19.9"></svg:path></svg:g>`,
})
export class IconParkBoxingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoyIcon],svg[icon-park-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M30 36H18L10 16H38L30 36Z"></svg:path><svg:path d="M27 36V44"></svg:path><svg:path d="M21 36V44"></svg:path></svg:g>`,
})
export class IconParkBoyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoyOneIcon],svg[icon-park-boy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7"></svg:circle><svg:path d="M27 44H21L8 24H40L27 44Z"></svg:path></svg:g>`,
})
export class IconParkBoyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoyStrollerIcon],svg[icon-park-boy-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M40 24H12L14.5 34H36L40 24Z"></svg:path><svg:path d="M12 24L8 15H3.5"></svg:path><svg:circle cx="20" cy="41" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="31" cy="41" r="3" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M23 8L32 24H40L44 13C41.6667 10 37 4 34 4C30 4 25.6667 6.66667 23 8Z"></svg:path><svg:path d="M29 5L33 12"></svg:path></svg:g>`,
})
export class IconParkBoyStrollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBoyTwoIcon],svg[icon-park-boy-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="#2F88FF"></svg:circle><svg:path d="M31 44V35L36 32L32 19C32 19 28 16 24 16C20 16 16 19 16 19L12 31L17 35V44"></svg:path></svg:g>`,
})
export class IconParkBoyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBrainIcon],svg[icon-park-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4.667" d="M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" stroke-width="4" d="M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083"></svg:path></svg:g>`,
})
export class IconParkBrainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBrakePadsIcon],svg[icon-park-brake-pads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"></svg:path><svg:path fill="#2F88FF" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path fill="#2F88FF" d="M24 4C26.6264 4 29.2272 4.51732 31.6537 5.52241C34.0802 6.5275 36.285 8.00069 38.1421 9.85787C39.9993 11.715 41.4725 13.9198 42.4776 16.3463C43.4827 18.7728 44 21.3736 44 24H36.0064C36.0064 22.4233 35.6959 20.862 35.0925 19.4053C34.4891 17.9487 33.6047 16.6251 32.4898 15.5102C31.3749 14.3953 30.0513 13.5109 28.5947 12.9075C27.138 12.3041 25.5767 11.9936 24 11.9936V4Z"></svg:path></svg:g>`,
})
export class IconParkBrakePadsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBranchIcon],svg[icon-park-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z"></svg:path><svg:path fill="#2F88FF" d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"></svg:path><svg:path fill="#2F88FF" d="M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z"></svg:path><svg:path stroke-linecap="round" d="M9 12V36V24.0083H36"></svg:path></svg:g>`,
})
export class IconParkBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBranchOneIcon],svg[icon-park-branch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 33V15"></svg:path><svg:rect width="28" height="6" x="10" y="9" fill="#2F88FF"></svg:rect><svg:path d="M8 32L14 25H33.9743L40 32"></svg:path><svg:rect width="8" height="8" x="4" y="33" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="20" y="33" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="33" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkBranchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBranchTwoIcon],svg[icon-park-branch-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M36 12C38.2091 12 40 10.2091 40 8C40 5.79086 38.2091 4 36 4C33.7909 4 32 5.79086 32 8C32 10.2091 33.7909 12 36 12Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M14 12C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4C11.7909 4 10 5.79086 10 8C10 10.2091 11.7909 12 14 12Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M14 44C16.2091 44 18 42.2091 18 40C18 37.7909 16.2091 36 14 36C11.7909 36 10 37.7909 10 40C10 42.2091 11.7909 44 14 44Z" clip-rule="evenodd"></svg:path><svg:path d="M14 12L14 36L14 33C14 25 36 24 36 16V12"></svg:path></svg:g>`,
})
export class IconParkBranchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBrdigeThreeIcon],svg[icon-park-brdige-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 12V38"></svg:path><svg:path d="M8 38C8 38 16 27 24 27C32 27 40 38 40 38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 27H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 19H44"></svg:path><svg:path stroke-linecap="round" d="M24 15L24 27"></svg:path><svg:path stroke-linecap="round" d="M16 19L16 27"></svg:path><svg:path stroke-linecap="round" d="M32 19L32 27"></svg:path></svg:g>`,
})
export class IconParkBrdigeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBreadIcon],svg[icon-park-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 32.0833C4 30.8812 4.266 29.6884 4.97123 28.7148C7.04541 25.8514 12.6701 20 24 20C35.3299 20 40.9546 25.8514 43.0288 28.7148C43.734 29.6884 44 30.8812 44 32.0833C44 36.4556 40.4556 40 36.0833 40H11.9167C7.54441 40 4 36.4556 4 32.0833Z"></svg:path><svg:path stroke="#000" d="M12 9L12 13"></svg:path><svg:path stroke="#fff" d="M14 22L14 26"></svg:path><svg:path stroke="#000" d="M36 9L36 13"></svg:path><svg:path stroke="#fff" d="M34 22L34 26"></svg:path><svg:path stroke="#000" d="M24 7L24 13"></svg:path><svg:path stroke="#fff" d="M24 20L24 28"></svg:path><svg:path stroke="#000" d="M40 25.4434C36.9058 22.7787 31.8075 20 24 20C16.1925 20 11.0942 22.7787 8 25.4434"></svg:path></svg:g>`,
})
export class IconParkBreadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBreadMachineIcon],svg[icon-park-bread-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 27C7 22.5817 10.5817 19 15 19H33C37.4183 19 41 22.5817 41 27V35C41 37.2091 39.2091 39 37 39H11C8.79086 39 7 37.2091 7 35V27Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34.0002 19V12C39 12 39 5 34.0002 5C29.0004 5 19.0004 5 14.0002 5C9.00006 5 8.99979 12 14.0002 12V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22 11L20 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 11L26 13"></svg:path><svg:circle cx="24" cy="29" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15 39V43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 39V43"></svg:path></svg:g>`,
})
export class IconParkBreadMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBreadOneIcon],svg[icon-park-bread-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M9 26C9 26 17 14 22 7.99998C25.1307 4.24312 31 2.75 36 5C41 7.25 43 12 41 16C39 20 31 35 31 35"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M31 33.1882C31 36.3399 29.2441 39.1574 26.4861 41.0262C24.3203 42.4938 21.5366 41.867 18.5 41.867C15.2985 41.867 12.3782 42.3954 10.1667 40.7821C7.60938 38.9166 6 36.2056 6 33.1882C6 26.8125 11.5964 23 18.5 23C25.4036 23 31 27.5614 31 33.1882Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M23 33.2173C23 34.2126 22.3679 35.1023 21.375 35.6925C20.5953 36.1559 19.5932 35.958 18.5 35.958C17.3475 35.958 16.2961 36.1248 15.5 35.6154C14.5794 35.0263 14 34.1702 14 33.2173C14 31.2039 16.0147 30 18.5 30C20.9853 30 23 31.4404 23 33.2173Z"></svg:path><svg:path stroke="#000" d="M14.9998 18.0001C14.9998 18.0001 18.5 17.0001 23 18.0001"></svg:path><svg:path stroke="#000" d="M19.9997 10.9999C19.9997 10.9999 23.5 9.49985 26.9998 10.9999"></svg:path></svg:g>`,
})
export class IconParkBreadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBreastPumpIcon],svg[icon-park-breast-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M35 25C35 21 29 19 29 19V14H17V19C17 19 11 21 11 25V44H35V25Z"></svg:path><svg:path d="M20 4L13 10"></svg:path><svg:path d="M23 14L17 7"></svg:path><svg:path d="M26 8H35V15L41 20"></svg:path></svg:g>`,
})
export class IconParkBreastPumpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBridgeOneIcon],svg[icon-park-bridge-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 19V33H12C12 26.3726 17.3726 21 24 21C30.6274 21 36 26.3726 36 33H44V19C44 19 31.9652 15 24 15C16.0348 15 4 19 4 19Z"></svg:path>`,
})
export class IconParkBridgeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBridgeTwoIcon],svg[icon-park-bridge-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8 13C8 13 14 23 24 23C34 23 40 13 40 13"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 10V38"></svg:path><svg:path stroke-linecap="round" d="M4 30.5C4 30.5 16.1877 29.9026 24 30C31.8196 30.0975 44 31 44 31"></svg:path><svg:path stroke-linecap="round" d="M16 21V30"></svg:path><svg:path stroke-linecap="round" d="M24 23L24 30"></svg:path><svg:path stroke-linecap="round" d="M32 21L32 30"></svg:path><svg:path stroke-linecap="round" d="M8 13L4 18"></svg:path><svg:path stroke-linecap="round" d="M44 18L40 13"></svg:path></svg:g>`,
})
export class IconParkBridgeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBriefcaseIcon],svg[icon-park-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16C32 9.92487 28.4183 4 24 4C19.5817 4 16 9.92487 16 16"></svg:path><svg:path fill="#2F88FF" d="M9 16H39L40 28H27V25H21V28H8L9 16Z"></svg:path><svg:path d="M8 28L6 42H42L40 28"></svg:path><svg:path d="M21 25H27V31H21V25Z"></svg:path></svg:g>`,
})
export class IconParkBriefcaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBrightnessIcon],svg[icon-park-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M38.9603 9.00977L36.5 11.4842"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M11.0674 36.7451L9.02051 38.8037"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 41.3533L24 44.3533"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M43.9998 23.3535L39.9998 23.3535"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M37.5324 36.3361L39.9998 38.8035"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M4.00019 24.3535L8.00019 24.3535"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M10.0444 9.00974L12.0972 11.0625"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 3.35371L24 7.35371"></svg:path></svg:g>`,
})
export class IconParkBrightnessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBringForwardIcon],svg[icon-park-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="8" x="6" y="34" fill="#2F88FF"></svg:rect><svg:rect width="36" height="8" x="6" y="20" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M30 12L24 6L18 12V12"></svg:path><svg:path stroke-linecap="round" d="M24 28V34"></svg:path><svg:path stroke-linecap="round" d="M24 6V20"></svg:path></svg:g>`,
})
export class IconParkBringForwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBringToFrontIcon],svg[icon-park-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.96906 6H6V10.0336"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.99705 30H6V26.012"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26.0023 6H30V10.0152"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.0283 6H20.0083"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 16C6 18.6536 6 19.9869 6 20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 16C30 18.6765 30 19.3456 30 18.0074"></svg:path><svg:path stroke-linecap="round" d="M15.9922 30H17.9996"></svg:path></svg:g>`,
})
export class IconParkBringToFrontIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBringToFrontOneIcon],svg[icon-park-bring-to-front-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 21V34H27"></svg:path><svg:path d="M21 14H34V27"></svg:path><svg:path fill="#2F88FF" d="M5 21V5H21V21H5Z"></svg:path><svg:path fill="#2F88FF" d="M27 43V27H43V43H27Z"></svg:path></svg:g>`,
})
export class IconParkBringToFrontOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBroadcastIcon],svg[icon-park-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 28.6292C26.5104 28.6292 28.5455 26.6004 28.5455 24.0979C28.5455 21.5954 26.5104 19.5667 24 19.5667C21.4897 19.5667 19.4546 21.5954 19.4546 24.0979C19.4546 26.6004 21.4897 28.6292 24 28.6292Z"></svg:path><svg:path stroke-linecap="round" d="M16 15C10.6667 19.9706 10.6667 28.0294 16 33"></svg:path><svg:path stroke-linecap="round" d="M32 33C37.3333 28.0294 37.3333 19.9706 32 15"></svg:path><svg:path stroke-linecap="round" d="M9.85786 10C2.04738 17.7861 2.04738 30.4098 9.85786 38.1959"></svg:path><svg:path stroke-linecap="round" d="M38.1421 38.1959C45.9526 30.4098 45.9526 17.7861 38.1421 10"></svg:path></svg:g>`,
})
export class IconParkBroadcastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBroadcastOneIcon],svg[icon-park-broadcast-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:path fill="#2F88FF" stroke-width="4" d="M24 15C26.7614 15 29 12.7614 29 10C29 7.23858 26.7614 5 24 5C21.2386 5 19 7.23858 19 10C19 12.7614 21.2386 15 24 15Z"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M24 15V23"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M30 23V33"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M18 23V33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 33V23L41 23.0128V33"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M41 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M7 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M18 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M30 41V42"></svg:path></svg:g>`,
})
export class IconParkBroadcastOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBroadcastRadioIcon],svg[icon-park-broadcast-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="12" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M31 31C33.7614 31 36 28.7614 36 26C36 23.2386 33.7614 21 31 21C28.2386 21 26 23.2386 26 26C26 28.7614 28.2386 31 31 31Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 22H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 30H18"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 40V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M40 40V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 12L36 4"></svg:path></svg:g>`,
})
export class IconParkBroadcastRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBrowserIcon],svg[icon-park-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 18V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V18"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M6 8C6 6.89543 6.89543 6 8 6H40C41.1046 6 42 6.89543 42 8V18H6V8Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 14C25.1046 14 26 13.1046 26 12C26 10.8954 25.1046 10 24 10C22.8954 10 22 10.8954 22 12C22 13.1046 22.8954 14 24 14Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBrowserChromeIcon],svg[icon-park-browser-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path>`,
})
export class IconParkBrowserChromeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBrowserSafariIcon],svg[icon-park-browser-safari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#000" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M15 33L19.5 19.5L33 15L28.5 28.5L15 33Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkBrowserSafariIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBubbleChartIcon],svg[icon-park-bubble-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="34" cy="14" r="9"></svg:circle><svg:circle cx="12" cy="25" r="7"></svg:circle><svg:circle cx="29" cy="37" r="5"></svg:circle></svg:g>`,
})
export class IconParkBubbleChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBugIcon],svg[icon-park-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 42C36 42 38 31.5324 38 28C38 24.8379 38 20.1712 38 14H10C10 17.4423 10 22.109 10 28C10 31.4506 12 42 24 42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 8L10 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 8L38 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 27H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 27H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 44L13 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M41 44L35 38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 42V14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14.9204 39.0407C17.0024 40.783 19.9244 41.9998 23.9999 41.9998C28.1112 41.9998 31.0487 40.7712 33.1341 39.0137"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M32 12.3333C32 7.73096 28.4183 4 24 4C19.5817 4 16 7.73096 16 12.3333V14H32V12.3333Z"></svg:path></svg:g>`,
})
export class IconParkBugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingFourIcon],svg[icon-park-building-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M17 14L44 24V44H17L17 14Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M17 14L4 24L4 44H17"></svg:path><svg:path stroke="#fff" d="M35 44V32L26 29L26 44"></svg:path><svg:path stroke="#000" d="M44 44H17"></svg:path></svg:g>`,
})
export class IconParkBuildingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingOneIcon],svg[icon-park-building-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M11 14L25 4V44H11V14Z" clip-rule="evenodd"></svg:path><svg:path d="M25 13L39 23V44"></svg:path><svg:path d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkBuildingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingThreeIcon],svg[icon-park-building-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 8L44 21V44H4L4 21L24 8Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M20 44V23L12 28L12 44"></svg:path><svg:path stroke="#fff" d="M28 44V23L36 28L36 44"></svg:path><svg:path stroke="#000" d="M41 44H8"></svg:path></svg:g>`,
})
export class IconParkBuildingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingTwoIcon],svg[icon-park-building-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 13L11 20L11 44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M21 4L31 11V24L38 29V44H21V4Z" clip-rule="evenodd"></svg:path><svg:path d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkBuildingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBulletMapIcon],svg[icon-park-bullet-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 6V42H42"></svg:path><svg:path d="M16 40V9C16 7.89543 17.0534 7 18.3529 7H33.6471C34.9466 7 36 7.89543 36 9V40"></svg:path><svg:path d="M17 32.1084H34"></svg:path><svg:path d="M22 19H30"></svg:path><svg:path d="M26 14V32.1082"></svg:path></svg:g>`,
})
export class IconParkBulletMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBusIcon],svg[icon-park-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M6.01245 34.005V8.03613C6.01245 6.93156 6.90788 6.03613 8.01245 6.03613H40.0001C41.1046 6.03613 42.0001 6.93156 42.0001 8.03613V34.005C42.0001 35.6618 40.6569 37.005 39.0001 37.005H37.0049V37.9999C37.0049 40.2091 35.2141 41.9999 33.0049 41.9999H33.0045C30.7954 41.9999 29.0045 40.2091 29.0045 37.9999V37.005H19.008V38.0016C19.008 40.2098 17.2178 41.9999 15.0096 41.9999C12.8014 41.9999 11.0113 40.2098 11.0113 38.0016V37.005H9.01245C7.3556 37.005 6.01245 35.6618 6.01245 34.005Z"></svg:path><svg:path stroke-linecap="round" d="M42 23H6"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M34 13H14V23H34V13Z"></svg:path><svg:path stroke-linecap="round" d="M14 30H16"></svg:path><svg:path stroke-linecap="round" d="M32 30H34"></svg:path></svg:g>`,
})
export class IconParkBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBusOneIcon],svg[icon-park-bus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="34" x="8" y="5" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 39L14 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 39L34 43"></svg:path><svg:circle cx="34" cy="33" r="2" fill="#fff"></svg:circle><svg:circle cx="14" cy="33" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 23H40"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 21L8 25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 21L40 25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 13H30"></svg:path></svg:g>`,
})
export class IconParkBusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBusTwoIcon],svg[icon-park-bus-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M4 6C4 4.89543 4.89543 4 6 4H42C43.1046 4 44 4.89543 44 6V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V6Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M16 40H8V44H16V40Z"></svg:path><svg:path stroke="#000" d="M40 40H32V44H40V40Z"></svg:path><svg:path stroke="#fff" d="M21 16H27"></svg:path><svg:path stroke="#fff" d="M10 34H12"></svg:path><svg:path stroke="#fff" d="M19 34H29"></svg:path><svg:path stroke="#fff" d="M4 25H44"></svg:path><svg:path stroke="#fff" d="M4 10H44"></svg:path><svg:path stroke="#fff" d="M36 34H38"></svg:path><svg:path stroke="#000" d="M4 6V14"></svg:path><svg:path stroke="#000" d="M44 6V14"></svg:path><svg:path stroke="#000" d="M4 21V29"></svg:path><svg:path stroke="#000" d="M44 21V29"></svg:path></svg:g>`,
})
export class IconParkBusTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkButterflyIcon],svg[icon-park-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M5.0002 12.0003C8.66389 7.70613 19.0814 18.8191 24.0002 25C28.9191 18.8191 39.3366 7.70599 43.0002 12.0001C43.6787 12.6507 44.4427 14.877 42.0002 18C41.3217 18.9759 40.186 21.7059 41.0002 26C41.0002 27.1386 39.8852 28.9519 35.0002 27C37.3749 28.6266 41.8498 33.0962 39.0002 37C36.2864 40.4158 29.9649 44.4569 26.0002 35L24.0002 31L22.0002 35C18.0356 44.4569 11.7141 40.4158 9.00024 37C6.15071 33.0962 10.6255 28.6268 13.0001 27.0003C8.1152 28.9521 7.00011 27.1389 7.00011 26.0003C7.81438 21.7061 6.67867 18.9762 6.00012 18.0003C3.55766 14.8773 4.32174 12.6509 5.0002 12.0003Z"></svg:path><svg:path d="M24.0322 23C23.534 17.8642 28.9135 7 33 7"></svg:path><svg:path d="M23.9678 23C24.466 17.8642 19.0865 7 15 7"></svg:path></svg:g>`,
})
export class IconParkButterflyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBuyIcon],svg[icon-park-buy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M6 15H42L40 42H8L6 15Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 19V6H32V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 34H32"></svg:path></svg:g>`,
})
export class IconParkBuyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBydesignIcon],svg[icon-park-bydesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8.00002 7.28206L19.5556 4L19.5555 16.7179L8 20L8.00002 7.28206Z"></svg:path><svg:path d="M8.00002 25.6752L19.5556 22.3932L19.5555 35.1111L8 38.3932L8.00002 25.6752Z"></svg:path><svg:path d="M24.8887 21.0759L36.4443 18.2222L36.4442 41.1462L24.8887 43.9999L24.8887 21.0759Z"></svg:path></svg:g>`,
})
export class IconParkBydesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkByeIcon],svg[icon-park-bye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M34.9998 26.6138L15.146 7.31381C13.9866 6.18672 12.133 6.21294 11.0059 7.37237C10.965 7.41445 10.9254 7.45775 10.8871 7.50222C9.74412 8.82893 9.82256 10.8138 11.0666 12.0462L21.0908 21.9762"></svg:path><svg:path stroke-linejoin="round" d="M21.0909 21.9761L10.1773 11.1547C8.88352 9.87182 6.8201 9.80162 5.44214 10.9936C4.17554 12.0892 4.03694 14.0041 5.13256 15.2707C5.17411 15.3188 5.21715 15.3655 5.26164 15.4108L16.2553 26.6137"></svg:path><svg:path d="M16.2551 26.6137L9.99976 20.5C8.73742 19.2102 6.67293 19.1744 5.36657 20.4195C4.0742 21.6514 4.02513 23.6977 5.25697 24.99C5.26264 24.996 5.26833 25.0019 5.27405 25.0078C14.5036 34.5442 19.2938 39.0485 21.0908 40.5534C23.9998 42.9896 29.7348 44 32.7302 42C35.7257 40 38.4331 37.1544 39.7181 34.3287C40.4831 32.6464 41.9689 27.4595 44.1756 18.7678C44.6248 16.9986 43.5547 15.2001 41.7854 14.7509C41.7625 14.7451 41.7395 14.7395 41.7164 14.7342C39.8832 14.3104 38.0429 15.4115 37.5496 17.2273L34.9998 26.6137"></svg:path><svg:path d="M31.7156 12.6658C31.0037 11.6024 30.19 10.613 29.2884 9.71137C28.3868 8.80978 27.3973 7.99606 26.334 7.28417C25.8048 6.92996 25.2574 6.60096 24.6934 6.29889C24.1327 5.99858 23.5557 5.72488 22.9639 5.47949"></svg:path><svg:path d="M5.19397 33.7761C5.84923 34.8753 6.61005 35.906 7.46322 36.8536C8.31639 37.8011 9.26192 38.6655 10.2866 39.4321C10.7964 39.8135 11.3259 40.1707 11.8733 40.5019C12.4175 40.8311 12.9795 41.1346 13.5576 41.4106"></svg:path></svg:g>`,
})
export class IconParkByeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBytedanceIcon],svg[icon-park-bytedance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 7L10 9V37L5 39V7Z"></svg:path><svg:path d="M16 23L21 25V37L16 39V23Z"></svg:path><svg:path d="M27 21L32 19V35L27 33V21Z"></svg:path><svg:path d="M38 9L43 11V37L38 39V9Z"></svg:path></svg:g>`,
})
export class IconParkBytedanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBytedanceAppletsIcon],svg[icon-park-bytedance-applets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24 4V23L8 36"></svg:path><svg:path d="M24 23L40 36"></svg:path><svg:path d="M31 20L40 14"></svg:path><svg:path d="M17 20L8 14"></svg:path><svg:path d="M24 31V43"></svg:path></svg:g>`,
})
export class IconParkBytedanceAppletsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkBytedanceMiniAppIcon],svg[icon-park-bytedance-mini-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" d="M26.1215 21.8789L21.8789 26.1215"></svg:path><svg:path stroke="#fff" d="M32.4851 26.8285L33.8993 25.4143C35.4614 23.8522 35.4614 21.3195 33.8993 19.7574L28.2425 14.1005C26.6804 12.5384 24.1477 12.5384 22.5856 14.1005L21.1714 15.5148"></svg:path><svg:path stroke="#fff" d="M26.8282 32.4853L25.414 33.8995C23.8519 35.4616 21.3193 35.4616 19.7572 33.8995L14.1003 28.2427C12.5382 26.6806 12.5382 24.1479 14.1003 22.5858L15.5145 21.1716"></svg:path></svg:g>`,
})
export class IconParkBytedanceMiniAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCableCarIcon],svg[icon-park-cable-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="bevel" d="M13.2797 42C12.4996 42 11.7907 41.5464 11.4637 40.8381L6.38682 29.8381C6.14138 29.3063 6.14138 28.6937 6.38682 28.1619L11.4637 17.1619C11.7907 16.4536 12.4996 16 13.2797 16L34.7203 16C35.5004 16 36.2093 16.4536 36.5363 17.1619L41.6132 28.1619C41.8586 28.6937 41.8586 29.3063 41.6132 29.8381L36.5363 40.8381C36.2093 41.5464 35.5004 42 34.7203 42L13.2797 42Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M9 23L18 23L18 33L8 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M39 23L25 23L25 32L40 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37.9993 4C37.9993 4 28.5 7.5 20.5641 8.39392C12.6282 9.28784 7.99988 9 7.99988 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M26 8V16L17 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.6154 19L6.38682 28.1619C6.14138 28.6937 6.14138 29.3063 6.38682 29.8381L9 35.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" d="M37.3848 19L41.6133 28.1619C41.8588 28.6937 41.8588 29.3063 41.6133 29.8381L39.0002 35.5"></svg:path></svg:g>`,
})
export class IconParkCableCarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCactusIcon],svg[icon-park-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 43L40 43"></svg:path><svg:path stroke-linecap="round" d="M6 16C6 21.5 6.5 30 16 30"></svg:path><svg:path stroke-linecap="round" d="M42 14C42 19 42 34 32 34"></svg:path><svg:path fill="#2F88FF" d="M24 5C19.5817 5 16 8.58172 16 13V43H32V13C32 8.58172 28.4183 5 24 5Z"></svg:path></svg:g>`,
})
export class IconParkCactusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeIcon],svg[icon-park-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 12V17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 27V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V27"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M4 21.9691C4 19.2247 6.22474 17 8.96909 17H39.0309C41.7753 17 44 19.2247 44 21.9691V22.2481C44 24.1115 42.8655 25.7871 41.1355 26.4791C40.3093 26.8096 39.3797 26.7613 38.5923 26.3468L38.25 26.1667C37.2589 25.645 36.0744 25.645 35.0833 26.1667C34.0922 26.6883 32.9078 26.6883 31.9167 26.1667C30.9256 25.645 29.7411 25.645 28.75 26.1667C27.7589 26.6883 26.5744 26.6883 25.5833 26.1667C24.5922 25.645 23.4078 25.645 22.4167 26.1667C21.4256 26.6883 20.2411 26.6883 19.25 26.1667C18.2589 25.645 17.0744 25.645 16.0833 26.1667C15.0922 26.6883 13.9078 26.6883 12.9167 26.1667C11.9256 25.645 10.7411 25.645 9.75 26.1667L9.40772 26.3468C8.62028 26.7613 7.69073 26.8096 6.86453 26.4791C5.13445 25.7871 4 24.1115 4 22.2481V21.9691Z"></svg:path><svg:path d="M27 8C26.2 4 24.0001 4 24.0001 4C24.0001 4 21.8008 4 21.0008 8C20.0008 13 28 13 27 8Z"></svg:path></svg:g>`,
})
export class IconParkCakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeFiveIcon],svg[icon-park-cake-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 27H39L34.3125 44H13.6875L9 27Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M39 27H9C9 21.5 14.5 19 14.5 19C14.5 17 16.5 11 24 11C31.5 11 33.5 17 33.5 19C33.5 19 39 21.5 39 27Z"></svg:path><svg:path stroke-linecap="round" d="M6 27H42"></svg:path><svg:path d="M28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12"></svg:path><svg:path stroke-linecap="round" d="M24 8L28 4"></svg:path><svg:line x1="20" x2="20" y1="27" y2="44"></svg:line><svg:line x1="28" x2="28" y1="27" y2="44"></svg:line></svg:g>`,
})
export class IconParkCakeFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeFourIcon],svg[icon-park-cake-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M6 25L11.1711 40.6283C11.4421 41.4471 12.2074 42 13.0699 42H34.9301C35.7926 42 36.5579 41.4471 36.8289 40.6283L42 25"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M11.4071 25.1228H6.31652C6.14171 25.1228 5.99963 24.9803 6.00362 24.8055C6.16392 17.7822 11.6341 11.8858 19 10H29C36.0773 12.036 41.8233 17.9578 41.996 24.8057C42.0004 24.9804 41.8583 25.1228 41.6835 25.1228H36.5929C34.2767 25.1228 32.0393 25.9636 30.2964 27.4891C26.6917 30.6441 21.3083 30.6441 17.7036 27.4891C15.9607 25.9636 13.7233 25.1228 11.4071 25.1228Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.1 10C19.0344 9.67689 19 9.34247 19 9C19 6.23858 21.2386 4 24 4C26.7614 4 29 6.23858 29 9C29 9.34247 28.9656 9.67689 28.9 10"></svg:path></svg:g>`,
})
export class IconParkCakeFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeOneIcon],svg[icon-park-cake-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 14L9 21.9H39L34 15"></svg:path><svg:circle cx="31" cy="13" r="4" fill="#fff"></svg:circle><svg:path stroke-linecap="round" d="M33 9L35 4"></svg:path><svg:path d="M9.5 26.9568C8.89836 27.2575 8.33775 27.5769 7.82243 27.913C5.41836 29.481 4 31.4118 4 33.4999C4 38.7466 12.9543 42.9999 24 42.9999C35.0457 42.9999 44 38.7466 44 33.4999C44 31.3609 42.5116 29.3869 40 27.799"></svg:path><svg:rect width="30" height="12" x="9" y="22" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path d="M9 22H40"></svg:path></svg:g>`,
})
export class IconParkCakeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeThreeIcon],svg[icon-park-cake-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 34V16C39 14.8954 38.1046 14 37 14H34.3125H26.3438H11C9.89543 14 9 14.8954 9 16V34C9 35.1046 9.89543 36 11 36H37C38.1046 36 39 35.1046 39 34Z"></svg:path><svg:path stroke="#000" d="M6 36H42"></svg:path><svg:path stroke="#000" d="M6 42H42"></svg:path><svg:path stroke="#fff" d="M9 21H15V26H21V21H27V29H33V21H39"></svg:path><svg:path stroke="#000" d="M9 23V19"></svg:path><svg:path stroke="#000" d="M39 23V19"></svg:path><svg:path stroke="#000" d="M33 14V8"></svg:path><svg:path stroke="#000" d="M24 14L24 4"></svg:path><svg:path stroke="#000" d="M15 14L15 8"></svg:path></svg:g>`,
})
export class IconParkCakeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeTwoIcon],svg[icon-park-cake-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 17.9L31.0577 8L9 17.9V30H40V17.9Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 18H26.386C26.4489 18 26.5 18.0511 26.5 18.114V21.625C26.5 23.2128 27.7872 24.5 29.375 24.5V24.5C30.9628 24.5 32.25 23.2128 32.25 21.625V18.114C32.25 18.0511 32.3011 18 32.364 18H40"></svg:path><svg:path d="M9.5 23.9568C8.89836 24.2575 8.33775 24.5769 7.82243 24.913C5.41836 26.481 4 28.4118 4 30.4999C4 35.7466 12.9543 39.9999 24 39.9999C35.0457 39.9999 44 35.7466 44 30.4999C44 28.3609 42.5116 26.3869 40 24.799"></svg:path></svg:g>`,
})
export class IconParkCakeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCalculatorIcon],svg[icon-park-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M40 4H8.0002C6.89565 4 6.00022 4.89541 6.0002 5.99996L5.99955 42C5.99953 43.1045 6.89497 44 7.99955 44H40C41.1046 44 42 43.1046 42 42V6C42 4.89543 41.1046 4 40 4Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M35 10H13V19H35V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 28L19 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 28L12 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 35H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 29H36"></svg:path></svg:g>`,
})
export class IconParkCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCalculatorOneIcon],svg[icon-park-calculator-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="20" height="9" x="14" y="11" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:circle cx="17" cy="26" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="32" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="38" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="26" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="32" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="38" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="26" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="32" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="38" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkCalculatorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarIcon],svg[icon-park-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z"></svg:path><svg:path stroke="#000" d="M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 4V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 4V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 34H34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 34H20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 26H34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 26H20"></svg:path></svg:g>`,
})
export class IconParkCalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarDotIcon],svg[icon-park-calendar-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 14H44"></svg:path><svg:line x1="44" x2="44" y1="11" y2="23" stroke="#000"></svg:line><svg:path stroke="#fff" d="M12 22H16"></svg:path><svg:path stroke="#fff" d="M22 22H26"></svg:path><svg:path stroke="#fff" d="M32 22H36"></svg:path><svg:path stroke="#fff" d="M12 29H16"></svg:path><svg:path stroke="#fff" d="M22 29H26"></svg:path><svg:path stroke="#fff" d="M32 29H36"></svg:path><svg:path stroke="#fff" d="M12 36H16"></svg:path><svg:path stroke="#fff" d="M22 36H26"></svg:path><svg:path stroke="#fff" d="M32 36H36"></svg:path><svg:line x1="4" x2="4" y1="11" y2="23" stroke="#000"></svg:line></svg:g>`,
})
export class IconParkCalendarDotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarThirtyIcon],svg[icon-park-calendar-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 14H44"></svg:path><svg:line x1="4" x2="4" y1="11" y2="23" stroke="#000"></svg:line><svg:line x1="44" x2="44" y1="11" y2="23" stroke="#000"></svg:line><svg:path stroke="#fff" d="M28 22V36H36V22H28Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M12 22H20V36H12"></svg:path><svg:path stroke="#fff" d="M20 29H14"></svg:path></svg:g>`,
})
export class IconParkCalendarThirtyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarThirtyTwoIcon],svg[icon-park-calendar-thirty-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="8" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M28 20V34H36V20H28Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 4V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 4V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 20H20V34H12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 27H14"></svg:path></svg:g>`,
})
export class IconParkCalendarThirtyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarThreeIcon],svg[icon-park-calendar-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 20H44"></svg:path><svg:path stroke="#fff" d="M4 32H44"></svg:path><svg:path stroke="#000" d="M17 4V12"></svg:path><svg:path stroke="#000" d="M31 4V12"></svg:path><svg:path stroke="#fff" d="M17 20V44"></svg:path><svg:path stroke="#fff" d="M31 20V44"></svg:path><svg:path stroke="#000" d="M44 13V39"></svg:path><svg:path stroke="#000" d="M4 13L4 39"></svg:path><svg:path stroke="#000" d="M14 44H34"></svg:path></svg:g>`,
})
export class IconParkCalendarThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraIcon],svg[icon-park-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15 12L18 6H30L33 12H15Z"></svg:path><svg:rect width="40" height="30" x="4" y="12" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z"></svg:path></svg:g>`,
})
export class IconParkCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraFiveIcon],svg[icon-park-camera-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="21" r="16" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="24" cy="21" r="7" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 43L32 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 37V43"></svg:path></svg:g>`,
})
export class IconParkCameraFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraFourIcon],svg[icon-park-camera-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8 10V24C8 32.8366 15.1634 40 24 40V40C32.8366 40 40 32.8366 40 24V10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 10H44"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkCameraFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraOneIcon],svg[icon-park-camera-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="19" r="14"></svg:circle><svg:circle cx="24" cy="19" r="6" fill="#2F88FF"></svg:circle><svg:path d="M17 31L11 43H37L31 31"></svg:path></svg:g>`,
})
export class IconParkCameraOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraThreeIcon],svg[icon-park-camera-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="26" x="6" y="14" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M10 14L12.1667 8H19.8333L22 14H10Z"></svg:path><svg:circle cx="29" cy="27" r="7" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path d="M36 10V14"></svg:path></svg:g>`,
})
export class IconParkCameraThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraTwoIcon],svg[icon-park-camera-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="24" height="32" x="12" y="4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 36V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 44L32 44"></svg:path><svg:circle cx="24" cy="17" r="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="24" cy="29" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkCameraTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCampIcon],svg[icon-park-camp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 35H40L24 6.5L8 35H4"></svg:path><svg:path fill="#2F88FF" d="M24 31C21.2386 31 19 34.5817 19 39V41H29V39C29 34.5817 26.7614 31 24 31Z"></svg:path><svg:path d="M4 41L44 41"></svg:path><svg:path d="M15 23C15 23 20 19 24 19C28 19 33 23 33 23"></svg:path><svg:path d="M40 6L38 9L40 12"></svg:path><svg:path d="M40 6L42 9L40 12"></svg:path><svg:path d="M7 17L6 19L7 21"></svg:path><svg:path d="M7 17L8 19L7 21"></svg:path></svg:g>`,
})
export class IconParkCampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCancerIcon],svg[icon-park-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="37" cy="17" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 13C6 13 12 5 22 5C32 5 38 11 38 11"></svg:path><svg:circle cx="11" cy="31" r="6" fill="#2F88FF" transform="rotate(-180 11 31)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 35C42 35 36 43 26 43C16 43 10 37 10 37"></svg:path></svg:g>`,
})
export class IconParkCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCandyIcon],svg[icon-park-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="10" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M24 28C21.7909 28 20 26.2091 20 24"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M16.6875 16.8125L3.90824 14.9668L14.8418 4.03324L16.6875 16.8125Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M31.3125 31.3125L44.0918 33.1582L33.1582 44.0918L31.3125 31.3125Z"></svg:path></svg:g>`,
})
export class IconParkCandyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCannedFruitIcon],svg[icon-park-canned-fruit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M15 24C15 24 14.5 27 16 33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.5666 12C38.7278 14.8106 40 18.6419 40 21.9375C40 25.8154 38.6546 33.3501 37.6851 38.2768C37.1408 41.0424 34.7033 43 31.8847 43H16.0422C13.257 43 10.8392 41.0861 10.2804 38.3575C9.31371 33.6374 8 26.4016 8 21.9375C8 18.2592 9.44361 14.6318 10.8271 12"></svg:path><svg:path fill="#2F88FF" d="M11.5868 6.45675C11.7711 6.17196 12.0872 6 12.4264 6H35.5736C35.9128 6 36.2289 6.17196 36.4132 6.45675L39.0014 10.4567C39.432 11.1221 38.9544 12 38.1619 12H9.83814C9.04564 12 8.56805 11.1221 8.99857 10.4567L11.5868 6.45675Z"></svg:path></svg:g>`,
})
export class IconParkCannedFruitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCapricornusIcon],svg[icon-park-capricornus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 11C18 7.68629 15.3137 5 12 5C8.68629 5 6 7.68629 6 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 11V29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 11C30 7.68629 27.3137 5 24 5C20.6863 5 18 7.68629 18 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 11V31V35.75C30 35.75 30 43 22 43"></svg:path><svg:circle cx="36" cy="30" r="6" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkCapricornusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCarIcon],svg[icon-park-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" fill-rule="evenodd" d="M13.5 32C14.8807 32 16 30.8807 16 29.5C16 28.1193 14.8807 27 13.5 27C12.1193 27 11 28.1193 11 29.5C11 30.8807 12.1193 32 13.5 32Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M34.5 32C35.8807 32 37 30.8807 37 29.5C37 28.1193 35.8807 27 34.5 27C33.1193 27 32 28.1193 32 29.5C32 30.8807 33.1193 32 34.5 32Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M7 37C5.34315 37 4 35.6569 4 34L4 24.7097C4 22.4363 5.28486 20.3581 7.3186 19.3422L8.00053 19.0015L10.3105 9.09194C10.7326 7.28117 12.3467 6 14.206 6L33.8943 6C35.7675 6 37.3899 7.29998 37.7981 9.12816L40.0031 19.0015L40.6834 19.3416C42.716 20.358 44 22.4355 44 24.7081V34C44 35.6569 42.6569 37 41 37H39.0031V38C39.0031 40.2091 37.2107 42 35.0016 42C32.7924 42 31 40.2091 31 38V37H17V38.0003C17 40.2093 15.2093 42 13.0003 42C10.7913 42 9.00053 40.2093 9.00053 38.0003V37H7Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M14 22H34L32.348 14.5661C32.1447 13.6511 31.3331 13 30.3957 13L17.6043 13C16.6669 13 15.8553 13.6511 15.652 14.5661L14 22Z"></svg:path></svg:g>`,
})
export class IconParkCarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCarBatteryIcon],svg[icon-park-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M43 12H3V42H43V12Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M11 6H3V12H11V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M43 6H35V12H43V6Z"></svg:path><svg:path stroke="#fff" d="M9 21H15"></svg:path><svg:path stroke="#fff" d="M31 21H37"></svg:path><svg:path stroke="#fff" d="M12 18V24"></svg:path></svg:g>`,
})
export class IconParkCarBatteryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCardTwoIcon],svg[icon-park-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 12V4L8 14V42L20 36"></svg:path><svg:path fill="#2F88FF" d="M20 16L40 6V34L20 44V16Z"></svg:path></svg:g>`,
})
export class IconParkCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCardioelectricIcon],svg[icon-park-cardioelectric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5.55469 23.194C5.3698 22.8031 5.19795 22.4068 5.04108 22.0056C4.39264 20.3473 4 18.6042 4 16.8C4 10.8353 8.88417 6 14.9091 6C18.7036 6 22.0456 7.91792 24 10.828C25.9544 7.91792 29.2964 6 33.0909 6C39.1158 6 44 10.8353 44 16.8C44 24.5647 36.7273 31.2 33.0909 34.8C30.6667 37.2 27.6364 39.6 24 42C20.3636 39.6 17.3333 37.2 14.9091 34.8C14.543 34.4376 14.1401 34.0444 13.7114 33.6224"></svg:path><svg:path d="M8 29.9734L19.1138 19.0396L25.5781 25.7059L35.2619 15.8188"></svg:path></svg:g>`,
})
export class IconParkCardioelectricIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCarouselIcon],svg[icon-park-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 11C4 9.89543 4.89543 9 6 9H42C43.1046 9 44 9.89543 44 11V35C44 36.1046 43.1046 37 42 37H6C4.89543 37 4 36.1046 4 35V11Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M28 17H20V29H28V17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M44 17H36V29H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 17H12V29H4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 13V33"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 13V33"></svg:path></svg:g>`,
})
export class IconParkCarouselIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCarouselVideoIcon],svg[icon-park-carousel-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="34" x="11" y="7" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="7" height="26" x="4" y="11" stroke="#000"></svg:rect><svg:rect width="7" height="26" x="37" y="11" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M22 20L28 24L22 28V20Z"></svg:path></svg:g>`,
})
export class IconParkCarouselVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCarrotIcon],svg[icon-park-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M15.6244 20.6823C14.2892 15.2475 18.4035 10 24 10V10C29.5965 10 33.7108 15.2475 32.3756 20.6824L27.2786 41.4294C26.9078 42.9388 25.5543 44 24 44V44C22.4457 44 21.0922 42.9388 20.7214 41.4294L15.6244 20.6823Z"></svg:path><svg:path stroke-linecap="round" d="M24 4L24 9.5"></svg:path><svg:path stroke-linecap="round" d="M30.1016 5.5918L27.3744 8.84185"></svg:path><svg:path stroke-linecap="round" d="M18 5.5918L20.7271 8.84185"></svg:path><svg:path stroke-linecap="round" d="M16 19H22"></svg:path><svg:path stroke-linecap="round" d="M25 26H31"></svg:path><svg:path stroke-linecap="round" d="M19 34H23"></svg:path></svg:g>`,
})
export class IconParkCarrotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCastScreenIcon],svg[icon-park-cast-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 39C21 30.1634 13.8366 23 5 23"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 39C13 34.5817 9.41828 31 5 31"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5.5 41C6.88071 41 8 39.8807 8 38.5C8 37.1193 6.88071 36 5.5 36C4.11929 36 3 37.1193 3 38.5C3 39.8807 4.11929 41 5.5 41Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 16.0566V8H44V40H28.7712"></svg:path></svg:g>`,
})
export class IconParkCastScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCastleIcon],svg[icon-park-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 11L11 4L18 11H4Z"></svg:path><svg:path d="M30 11L37 4L44 11H30Z"></svg:path><svg:path fill="#2F88FF" d="M44 44V26H40V17H34V26H28V21L24 17L20 21V26H14V17H8V26H4V44H18V40C18 36.6863 20.6863 34 24 34C27.3137 34 30 36.6863 30 40V44H44Z"></svg:path><svg:rect width="8" height="6" x="7" y="11"></svg:rect><svg:rect width="8" height="6" x="33" y="11"></svg:rect></svg:g>`,
})
export class IconParkCastleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCatIcon],svg[icon-park-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M42 26C42 34.8366 33.9411 42 24 42C14.0589 42 6 34.8366 6 26M15 12.1405C17.6476 10.7792 20.7214 10 24 10C27.2786 10 30.3524 10.7792 33 12.1405"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 26V8.48814C6 6.757 8.05005 5.84346 9.33729 7.00098L15 12.093"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 26V8.48814C42 6.757 39.9499 5.84346 38.6627 7.00098L33 12.093"></svg:path><svg:circle cx="30" cy="22" r="2" fill="#000"></svg:circle><svg:circle cx="18" cy="22" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 30L4 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 35L7 41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 30L44 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 35L41 41"></svg:path></svg:g>`,
})
export class IconParkCatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCategoryManagementIcon],svg[icon-park-category-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="14" x="6" y="28" stroke="#000" stroke-width="4" rx="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20"></svg:path><svg:circle cx="34" cy="14" r="8" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="34" cy="14" r="3" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkCategoryManagementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCattleIcon],svg[icon-park-cattle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M11.4651 19.9231C10.6818 12.4814 16.5167 6 23.9995 6C31.4823 6 37.3173 12.4814 36.5339 19.9231L35.0464 34.055C34.4513 39.7083 29.6841 44 23.9995 44C18.315 44 13.5478 39.7083 12.9527 34.0549L11.4651 19.9231Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13.9995 31C17.4916 27.8746 25.4281 23.8297 33.9995 31"></svg:path><svg:circle cx="19" cy="18" r="2" fill="#fff"></svg:circle><svg:circle cx="21" cy="34" r="2" fill="#fff"></svg:circle><svg:circle cx="29" cy="18" r="2" fill="#fff"></svg:circle><svg:circle cx="27" cy="34" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 7.91262C35.1667 5.91262 40.3923 2.30498 43 4.91262C45.6077 7.5203 43 9.9126 41 10.4126C38.5 11.0376 36.8 12.7128 36 13.9128"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.0962 7.91262C12.9295 5.91262 7.70391 2.30498 5.09619 4.91262C2.48848 7.5203 5.09619 9.9126 7.09619 10.4126C9.59619 11.0376 11.2962 12.7128 12.0962 13.9128"></svg:path><svg:path stroke="#000" stroke-width="4" d="M12 25L13 34.5"></svg:path><svg:path stroke="#000" stroke-width="4" d="M36 25L35 34.5"></svg:path></svg:g>`,
})
export class IconParkCattleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCattleZodiacIcon],svg[icon-park-cattle-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M38 31L44 37"></svg:path><svg:path stroke-linejoin="round" d="M5 44V18C5 13 7 8 16 6L30 4"></svg:path><svg:path stroke-linejoin="round" d="M19 20C20.5 21.5 22.5 25 28 25C31.1667 25 38 26.5 38 33V44"></svg:path><svg:path stroke-linejoin="round" d="M16 6C22 6 25 9 25 16"></svg:path><svg:path d="M30 44C30 39.5817 26.4183 36 22 36C17.5817 36 14 39.5817 14 44"></svg:path></svg:g>`,
})
export class IconParkCattleZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCautionIcon],svg[icon-park-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M24 5L2 43H46L24 5Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 35V36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 19.0005L24.0083 29"></svg:path></svg:g>`,
})
export class IconParkCautionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCcIcon],svg[icon-park-cc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.2782 12.14C21.181 12.4802 22.9856 12.9636 24.6924 13.5899C21.8825 13.6074 19.0791 14.7782 17.0541 17.103L16.8557 17.338C14.0164 20.8063 13.8258 25.7793 16.2839 29.4497L16.2224 29.3375C18.7497 33.9805 23.0519 38.0543 27.499 39.3643C31.0799 40.4191 34.4305 40.6989 37.5178 40.1993L37.5447 40.1811C33.8191 43.092 29.3272 44.553 24.831 44.5656H24.7149L24.2838 44.56C18.9676 44.4356 13.6883 42.2862 9.70805 38.1144L9.37863 37.7609C5.80885 33.8395 4.01583 28.845 4 23.8458V23.7129L4.00633 23.2584C4.09466 19.6851 5.09141 16.1308 6.99642 12.986L6.9277 13.0052C11.431 11.7594 15.5469 11.4727 19.2782 12.14ZM29.8165 32.6328C31.3625 31.897 33.2256 32.2537 34.4485 33.4761L39.4604 38.4855L39.1209 38.8174C39.0934 38.8437 39.0659 38.8699 39.0383 38.8959C35.6475 39.8087 31.8914 39.663 27.7688 38.4486C24.7892 37.5709 22.2332 35.4184 19.9509 32.7704L19.9015 32.7431C22.9258 34.3813 26.604 34.377 29.6249 32.7305L29.8165 32.6328ZM24.7544 2.99994L25.1975 3.00471C30.3656 3.11518 35.5015 5.14197 39.4455 9.08599L34.4485 14.083L34.2924 14.2313C33.0178 15.3811 31.1429 15.6554 29.6249 14.8281L29.3639 14.6908C29.3141 14.6655 29.2642 14.6407 29.2142 14.6163C26.2909 12.9805 23.0341 11.8419 19.4463 11.2003C15.8761 10.5619 11.9853 10.7621 7.77611 11.797C8.35234 10.9768 8.99698 10.1901 9.70805 9.44472L10.0345 9.10999C14.0951 5.03678 19.4211 2.99994 24.7495 2.99994H24.7544Z"></svg:path><svg:path d="M41.549 17.3253L33.6594 21.8806L33.4435 22.0288C33.4435 22.0288 32.7681 22.4814 32.8427 23.4385C32.9079 24.2756 33.5043 24.6288 33.5043 24.6288L41.7348 29.3768C41.7348 29.3768 42.3796 29.7247 43.1811 29.2913C44.0774 28.8066 44.0162 27.8599 44.0162 27.8599V18.7503C44.0162 18.7503 44.0171 18.7404 44.0171 18.7227V18.698C44.0152 18.5127 43.9623 17.8792 43.3674 17.4409C43.02 17.185 42.6771 17.1049 42.3841 17.1049C41.8974 17.1054 41.549 17.3253 41.549 17.3253Z"></svg:path></svg:g>`,
})
export class IconParkCcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCdIcon],svg[icon-park-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="18"></svg:circle><svg:path stroke-linecap="round" d="M13 24C13 17.9249 17.9249 13 24 13"></svg:path><svg:circle cx="24" cy="24" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkCdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCeMarkingIcon],svg[icon-park-ce-marking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 42C12.0589 42 4 33.9411 4 24C4 14.0589 12.0589 6 22 6"></svg:path><svg:path d="M44 42C34.0589 42 26 33.9411 26 24C26 14.0589 34.0589 6 44 6"></svg:path><svg:path d="M26 24H37"></svg:path></svg:g>`,
})
export class IconParkCeMarkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCellIcon],svg[icon-park-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4.421"><svg:path stroke="#000" stroke-linecap="round" d="M28.4165 21.8466C28.2998 24.4327 28.9576 26.2456 30.3899 27.2851C32.5385 28.8445 37.8372 29.0273 42.0342 21.8466C46.2313 14.6658 42.1598 10.7653 40.6133 10.1148C39.5823 9.68111 38.546 9.51854 37.5044 9.62707"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31.0138 28.0061C29.7932 29.4196 29.6591 31.1176 30.6115 33.1C32.0401 36.0735 35.6988 35.5388 37.5277 38.0157C38.747 39.6671 39.2088 41.3285 38.9132 43"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M8.50434 23.6397C10.7641 26.6609 16.1663 27.0551 22.5 24.6306C25.0645 23.649 27.7817 22.2052 30.5049 20.2867C32.5577 18.8404 34.0451 17.3644 35.0919 15.92C38.8633 10.716 36.9159 5.92222 35.0919 4.40635C33.1156 2.76399 29.322 2.08888 22.5 5.03345C21.2777 5.56103 19.9582 6.20481 18.5345 6.98005C15.7374 8.50312 13.4336 10.2232 11.6622 11.9999C7.4997 16.1749 6.27733 20.6622 8.50434 23.6397Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16.2451 8.83911C16.6842 11.7889 17.9165 14.368 19.9419 16.5764C21.9673 18.7848 24.3883 20.195 28 21.4999"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9.98149 24.9998C4.15571 30.6503 2.58552 34.9286 5.27092 37.8346C9.29902 42.1936 13.0878 36.6267 18.1666 36.6267C21.5524 36.6267 24.1636 38.751 26 42.9998"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M35.0919 15.9199C34.0451 17.3643 32.5577 18.8403 30.5049 20.2866C27.7817 22.2052 25.0645 23.6489 22.5 24.6306"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M22.4999 5.03345C21.2776 5.56103 19.9581 6.20481 18.5344 6.98004C15.7374 8.50312 13.4335 10.2232 11.6621 11.9999"></svg:path></svg:g>`,
})
export class IconParkCellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCenterAlignmentIcon],svg[icon-park-center-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14L42 14"></svg:path><svg:path d="M12 24L36 24"></svg:path><svg:path d="M20 34H28"></svg:path></svg:g>`,
})
export class IconParkCenterAlignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCertificateIcon],svg[icon-park-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 36H6C4.89543 36 4 35.1046 4 34V8C4 6.89543 4.89543 6 6 6H42C43.1046 6 44 6.89543 44 8V34C44 35.1046 43.1046 36 42 36H34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 14H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 21H18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 28H16"></svg:path><svg:path fill="#2F88FF" d="M30 33C33.3137 33 36 30.3137 36 27C36 23.6863 33.3137 21 30 21C26.6863 21 24 23.6863 24 27C24 30.3137 26.6863 33 30 33Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M30 40L34 42V31.4722C34 31.4722 32.8594 33 30 33C27.1406 33 26 31.5 26 31.5V42L30 40Z"></svg:path></svg:g>`,
})
export class IconParkCertificateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChafingDishIcon],svg[icon-park-chafing-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6"></svg:path><svg:path fill="#2F88FF" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C24 6 20 8 20 15C20 22 28 26 28 33C28 40 24 42 24 42Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 20H44V28H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 20H4V28H6"></svg:path></svg:g>`,
})
export class IconParkChafingDishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChafingDishOneIcon],svg[icon-park-chafing-dish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 18H42V24C42 27.3137 39.3137 30 36 30H12C8.68629 30 6 27.3137 6 24V18Z"></svg:path><svg:path d="M40 42H8"></svg:path><svg:path d="M13 42L16 30"></svg:path><svg:path d="M35 42L32 30"></svg:path><svg:path d="M30 18L27 4H21L18 18"></svg:path><svg:path d="M36 11H40"></svg:path><svg:path d="M8 11H12"></svg:path></svg:g>`,
})
export class IconParkChafingDishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChairIcon],svg[icon-park-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 23L12 44"></svg:path><svg:path d="M28 23L36 44"></svg:path><svg:path d="M16 34L32 34"></svg:path><svg:path fill="#2F88FF" d="M29.4545 23H18.5455C15.8182 23 14 21.3333 14 18.8333V12H18V6C18 4.89543 18.8954 4 20 4H28C29.1046 4 30 4.89543 30 6V12H34V18.8333C34 21.3333 32.1818 23 29.4545 23Z"></svg:path><svg:path d="M30 12H38"></svg:path><svg:path d="M18 12H10"></svg:path></svg:g>`,
})
export class IconParkChairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChairOneIcon],svg[icon-park-chair-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M29.4545 23H18.5455C15.8182 23 14 21.3333 14 18.8333V12H18V6C18 4.89543 18.8954 4 20 4H28C29.1046 4 30 4.89543 30 6V12H34V18.8333C34 21.3333 32.1818 23 29.4545 23Z"></svg:path><svg:path d="M20 23L12 44"></svg:path><svg:path d="M28 23L36 44"></svg:path><svg:path d="M30 12H38"></svg:path><svg:path d="M18 12H10"></svg:path><svg:path d="M17 31L31 31"></svg:path><svg:path d="M15 38L33 38"></svg:path></svg:g>`,
})
export class IconParkChairOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChangeIcon],svg[icon-park-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 31H38V5"></svg:path><svg:path d="M30 21H10V43"></svg:path><svg:path d="M44 11L38 5L32 11"></svg:path><svg:path d="M16 37L10 43L4 37"></svg:path></svg:g>`,
})
export class IconParkChangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChangeDateSortIcon],svg[icon-park-change-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 5V30.0036H42V5"></svg:path><svg:path fill="#2F88FF" d="M15.0001 23H19.0016L32.8514 8.85714L28.9943 5L15 19.143L15.0001 23Z"></svg:path><svg:path stroke-linecap="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linecap="round" d="M24 30V43"></svg:path></svg:g>`,
})
export class IconParkChangeDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChargingTreasureIcon],svg[icon-park-charging-treasure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M9.97506 8.55657C10.1946 7.08729 11.4565 6 12.9421 6H35.9778C37.4979 6 38.7778 7.13694 38.9569 8.64644L42.102 35.1464C42.3138 36.9309 40.9199 38.5 39.1229 38.5H8.98167C7.14822 38.5 5.74362 36.8699 6.01462 35.0566L9.97506 8.55657Z"></svg:path><svg:rect width="36" height="12" x="6" y="30" fill="#2F88FF" stroke="#000" stroke-width="4" rx="6"></svg:rect><svg:rect width="4" height="4" x="19" y="34" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 36H35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 12H26"></svg:path></svg:g>`,
})
export class IconParkChargingTreasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartGraphIcon],svg[icon-park-chart-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="9" x="17" y="6" fill="#2F88FF"></svg:rect><svg:rect width="14" height="9" x="6" y="33" fill="#2F88FF"></svg:rect><svg:rect width="14" height="9" x="28" y="33" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 16V24"></svg:path><svg:path stroke-linecap="round" d="M13 33V24H35V33"></svg:path></svg:g>`,
})
export class IconParkChartGraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartHistogramIcon],svg[icon-park-chart-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6V42H42"></svg:path><svg:path d="M14 30V34"></svg:path><svg:path d="M22 22V34"></svg:path><svg:path d="M30 6V34"></svg:path><svg:path d="M38 14V34"></svg:path></svg:g>`,
})
export class IconParkChartHistogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartHistogramOneIcon],svg[icon-park-chart-histogram-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6V42H42"></svg:path><svg:path d="M18 34H14"></svg:path><svg:path d="M26 26H14"></svg:path><svg:path d="M42 18H14"></svg:path><svg:path d="M34 10L14 10"></svg:path></svg:g>`,
})
export class IconParkChartHistogramOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartHistogramTwoIcon],svg[icon-park-chart-histogram-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 42H44H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42H44"></svg:path><svg:rect width="6" height="14" x="8" y="28" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="6" height="24" x="21" y="18" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="6" height="36" x="34" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect></svg:g>`,
})
export class IconParkChartHistogramTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartLineIcon],svg[icon-park-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6V42H42"></svg:path><svg:path d="M14 34L22 18L32 27L42 6"></svg:path></svg:g>`,
})
export class IconParkChartLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartLineAreaIcon],svg[icon-park-chart-line-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 6V42H42"></svg:path><svg:path fill="#2F88FF" d="M14 34L22 18L32 27L42 6V34H14Z"></svg:path></svg:g>`,
})
export class IconParkChartLineAreaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartPieIcon],svg[icon-park-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4V24H44Z"></svg:path><svg:path d="M43.0844 18H30V4.91553C36.2202 6.86917 41.1308 11.7798 43.0844 18Z"></svg:path></svg:g>`,
})
export class IconParkChartPieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartPieOneIcon],svg[icon-park-chart-pie-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M5 24C5 34.4934 13.5066 43 24 43V26C24 24.8954 24.8954 24 26 24H43C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24Z"></svg:path><svg:rect width="12" height="12" x="30" y="30"></svg:rect></svg:g>`,
})
export class IconParkChartPieOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartProportionIcon],svg[icon-park-chart-proportion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M16.3446 5.51758C13.9 6.53124 11.7001 8.01574 9.85786 9.85797C6.23858 13.4773 4 18.4773 4 24.0001C4 35.0458 12.9543 44.0001 24 44.0001V44.0001C29.5228 44.0001 34.5228 41.7615 38.1421 38.1422C39.9844 36.3 41.4689 34.1001 42.4825 31.6555"></svg:path><svg:path fill="#2F88FF" d="M24 24H44C44 12.9543 35.0457 4 24 4L24 24Z"></svg:path></svg:g>`,
})
export class IconParkChartProportionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartRingIcon],svg[icon-park-chart-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M43.7756 20.9938C42.4735 12.3555 35.6463 5.5277 27.0084 4.22461M20.9757 4.22702C11.3651 5.68478 4 13.9822 4 23.9998C4 34.0212 11.3705 42.321 20.9863 43.7743C21.9692 43.9228 22.9756 43.9998 24 43.9998C25.0209 43.9998 26.024 43.9233 27.0038 43.7758C35.6458 42.4741 42.4762 35.6427 43.7764 27.0003"></svg:path><svg:path fill="#2F88FF" d="M24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16Z"></svg:path></svg:g>`,
})
export class IconParkChartRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartScatterIcon],svg[icon-park-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 6V42H42"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M37 16C39.7614 16 42 13.7614 42 11C42 8.23858 39.7614 6 37 6C34.2386 6 32 8.23858 32 11C32 13.7614 34.2386 16 37 16Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M15 36C16.6569 36 18 34.6569 18 33C18 31.3431 16.6569 30 15 30C13.3431 30 12 31.3431 12 33C12 34.6569 13.3431 36 15 36Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M33 32C34.6569 32 36 30.6569 36 29C36 27.3431 34.6569 26 33 26C31.3431 26 30 27.3431 30 29C30 30.6569 31.3431 32 33 32Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkChartScatterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChartStockIcon],svg[icon-park-chart-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="16" x="6" y="16" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M10 6V16"></svg:path><svg:path stroke-linecap="round" d="M10 32V42"></svg:path><svg:rect width="8" height="16" x="34" y="16" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M38 6V16"></svg:path><svg:path stroke-linecap="round" d="M38 32V42"></svg:path><svg:rect width="8" height="16" x="20" y="14" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 4V14"></svg:path><svg:path stroke-linecap="round" d="M24 30V40"></svg:path></svg:g>`,
})
export class IconParkChartStockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckIcon],svg[icon-park-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 11L16.875 37L5 25.1818"></svg:path>`,
})
export class IconParkCheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckCorrectIcon],svg[icon-park-check-correct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H30"></svg:path><svg:path d="M16 20L26 28L41 7"></svg:path></svg:g>`,
})
export class IconParkCheckCorrectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckInIcon],svg[icon-park-check-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.9999 21.0001L22.1302 6.98819C22.5987 5.91738 23.8816 5.47476 24.9107 6.0289L35.9996 12"></svg:path><svg:path d="M26 31L26 12L42 12L42 41L26 41L26 37"></svg:path><svg:path d="M4 44C13 44 13.7691 38.6834 16.3302 38.3125C19.3527 37.8748 22.4317 37.6497 25.1033 37C28.497 36.1747 31.2335 35.1121 32.3623 34.6448C32.7291 34.4929 33.0343 34.2285 33.2178 33.8764C33.7811 32.795 34.7903 30.4101 32.9209 30.1094C30.493 29.7188 22.9806 32.5833 19.1276 32.0625C15.2746 31.5417 16.6293 28.9375 17.8433 28.1563C21.1401 26.0345 25 27 25 27V18C25 18 10.3335 21.75 5 28.1563"></svg:path><svg:path d="M32 21L42 21"></svg:path></svg:g>`,
})
export class IconParkCheckInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckOneIcon],svg[icon-park-check-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 24L22 30L34 18"></svg:path></svg:g>`,
})
export class IconParkCheckOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckSmallIcon],svg[icon-park-check-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 24L20 34L40 14"></svg:path>`,
})
export class IconParkCheckSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckboxIcon],svg[icon-park-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 16H16V32H32V16Z"></svg:path></svg:g>`,
})
export class IconParkCheckboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckerboardIcon],svg[icon-park-checkerboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4H7C5.34315 4 4 5.34315 4 7V17V31V41C4 42.6569 5.34315 44 7 44H17H31H41C42.6569 44 44 42.6569 44 41V31V17V7C44 5.34315 42.6569 4 41 4H31H17Z"></svg:path><svg:line x1="23" x2="44" y1="17" y2="17"></svg:line><svg:line x1="4" x2="13" y1="17" y2="17"></svg:line><svg:line x1="35" x2="44" y1="31" y2="31"></svg:line><svg:line x1="6" x2="25" y1="31" y2="31"></svg:line><svg:line x1="17" x2="17" y1="21" y2="44"></svg:line><svg:path d="M31 4L31 27"></svg:path><svg:path d="M31 35L31 44"></svg:path><svg:path d="M17 4L17 13"></svg:path><svg:path fill="#2F88FF" d="M35 31C35 33.2091 33.2091 35 31 35C28.7909 35 27 33.2091 27 31C27 28.7909 28.7909 27 31 27C33.2091 27 35 28.7909 35 31Z"></svg:path><svg:path fill="#2F88FF" d="M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17Z"></svg:path></svg:g>`,
})
export class IconParkCheckerboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChecklistIcon],svg[icon-park-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 10L42 18"></svg:path><svg:path d="M42 10L34 18"></svg:path><svg:path d="M44 30L37 38L33 34"></svg:path><svg:path fill="#2F88FF" d="M26 10H4V18H26V10Z"></svg:path><svg:path fill="#2F88FF" d="M26 30H4V38H26V30Z"></svg:path></svg:g>`,
})
export class IconParkChecklistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCheeseIcon],svg[icon-park-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 20C43 17.8285 24.8921 8.11198 20.134 5.59629C19.4394 5.22904 18.603 5.31194 17.9852 5.79737L5 16"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 17.6522C5 16.3232 6.2688 15.3543 7.55521 15.688C13.9619 17.3498 30.8602 21.3331 40.1615 19.7589C41.5557 19.523 43 20.5369 43 21.951V38.1025C43 39.1662 42.1674 40.0438 41.1051 40.0997L7.10512 41.8892C5.96083 41.9494 5 41.0378 5 39.892V17.6522Z"></svg:path><svg:circle cx="12" cy="25" r="2" fill="#fff"></svg:circle><svg:circle cx="25" cy="27" r="2" fill="#fff"></svg:circle><svg:circle cx="34" cy="32" r="2" fill="#fff"></svg:circle><svg:circle cx="18" cy="32" r="2" fill="#fff" stroke="#fff" stroke-width="2"></svg:circle></svg:g>`,
})
export class IconParkCheeseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChefHatIcon],svg[icon-park-chef-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="8" x="12" y="34" fill="#2F88FF"></svg:rect><svg:path d="M29 34V20"></svg:path><svg:path d="M22 34V26"></svg:path><svg:path d="M12 25V34H36V25C36 25 41 22 41 17C41 12 37 10 32 10C32 8 29 4 24 4C19 4 16 8 16 10C12 10 7 12 7 17C7 22 12 25 12 25Z"></svg:path></svg:g>`,
})
export class IconParkChefHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChefHatOneIcon],svg[icon-park-chef-hat-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M13 24.1246C9.01253 23.3584 6 19.851 6 15.64C6 10.8683 9.86826 7 14.64 7C15.4066 7 16.1498 7.09983 16.8574 7.2872C18.4398 5.28493 20.8898 4 23.64 4C26.4704 4 28.9829 5.36098 30.5588 7.46422C31.4372 7.16331 32.3795 7 33.36 7C38.1317 7 42 10.8683 42 15.64C42 19.851 38.9875 23.3584 35 24.1246V40C35 41.1046 34.1046 42 33 42H15C13.8954 42 13 41.1046 13 40V24.1246Z"></svg:path><svg:path stroke="#fff" d="M13 31L35 31"></svg:path><svg:path stroke="#fff" d="M20 25V31"></svg:path><svg:path stroke="#000" d="M35 28V34"></svg:path><svg:path stroke="#000" d="M13 28V34"></svg:path></svg:g>`,
})
export class IconParkChefHatOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCherryIcon],svg[icon-park-cherry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:circle cx="14" cy="34" r="8" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:circle cx="35" cy="37" r="7" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path d="M37 10C34.3488 10.8116 28.6279 13.0145 25.2791 16.2609C20.2558 21.1304 19 24.5 18 27"></svg:path><svg:path d="M36.9997 9.99995C35.8831 11.3184 33.7149 14.5959 33.0435 18.3891C32.0364 24.0789 32.9998 27.5 33.9997 29.9999"></svg:path><svg:path d="M30 4L44 16"></svg:path></svg:g>`,
})
export class IconParkCherryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChessIcon],svg[icon-park-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M34 4H14V14H34V4Z"></svg:path><svg:path d="M27 14L33 37H15L21 14"></svg:path><svg:path d="M40 44H8V40L14 37H34L40 40V44Z"></svg:path><svg:path d="M12 23.02H36"></svg:path><svg:path d="M20.5 4V8"></svg:path><svg:path d="M27.5 4V8"></svg:path></svg:g>`,
})
export class IconParkChessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChessOneIcon],svg[icon-park-chess-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M40 44H8V40L14 37H34L40 40V44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M14 19H34"></svg:path><svg:path fill="#2F88FF" d="M27.74 19L33 37H15L20.26 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M27.74 19L33 37H15L20.26 19"></svg:path><svg:path stroke="#000" stroke-width="4" d="M24 4C19.5817 4 16 7.58172 16 12C16 15.012 17.6646 17.6353 20.124 19H27.876C30.3354 17.6353 32 15.012 32 12C32 7.58172 28.4183 4 24 4Z"></svg:path></svg:g>`,
})
export class IconParkChessOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChestIcon],svg[icon-park-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M16.9968 3.5C16.9968 5.76563 16.9968 7.48184 16.9968 8.64861C16.9968 10.3988 16.0333 11.0735 12.4023 12.0065C8.77133 12.9394 7.69632 13.4893 6.84816 15.0995C6.28272 16.1729 6 17.8303 6 20.0715V37.5"></svg:path><svg:path stroke-linejoin="round" d="M34.9416 21.5085C35.1792 24.3854 34.6917 26.8978 33.4792 29.046C32.2667 31.1941 30.126 32.5026 27.0572 32.9716"></svg:path><svg:path stroke-linejoin="round" d="M13.0587 21.5085C12.82 24.3854 13.3096 26.8978 14.5277 29.046C15.7457 31.1941 17.9038 32.5026 21.0022 32.9716"></svg:path><svg:path d="M13 43.5121C14.3333 41.957 15 40.2662 15 38.4396C15 36.613 15 33.8253 15 30.0764"></svg:path><svg:path d="M35 43.5121C33.6667 41.957 33 40.2662 33 38.4396C33 36.613 33 33.8253 33 30.0764"></svg:path><svg:path d="M31.0003 3.5C31.0003 5.76563 31.0003 7.48184 31.0003 8.64861C31.0003 10.3988 31.9638 11.0735 35.5948 12.0065C39.2257 12.9394 40.3008 13.4893 41.1489 15.0995C41.7144 16.1729 41.9971 17.8303 41.9971 20.0715V37.5"></svg:path></svg:g>`,
})
export class IconParkChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChickenIcon],svg[icon-park-chicken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M35.9786 15.4998C35.4536 15.0194 34.8809 14.5921 34.2688 14.2248L32.8034 13.3456C31.4442 12.53 29.9497 11.965 28.3909 11.6774L27.8672 11.5808C25.0469 11.0603 22.3297 10.0961 19.8159 8.7262C19.586 7.71021 18.7942 6.86455 17.7106 6.61834C16.2072 6.27672 14.7114 7.21858 14.3698 8.72205C14.0282 10.2255 14.97 11.7212 16.4735 12.0629C16.5995 12.0915 16.7255 12.1111 16.8507 12.1221C18.5056 13.7407 19.9052 15.6035 21 17.6467"></svg:path><svg:path d="M11.3067 25.0192C11.0447 25.3012 8 28.6506 8 32C8 35.5 9.55844 37 11 38C12.4416 39 14.7208 40 16.6104 40C18.5 40 28.5 41 33 40C37.5 39 38 38 40 36C41.0815 34.9185 41.882 33.3983 42.3892 32.2301C42.8802 31.0991 43.2654 29.9245 43.5649 28.7284C43.9246 27.2922 44.2883 25.2299 44 23.5C43.5 20.5 42 18.5 37 16C32.3958 13.6979 28.3532 14.7876 27.7421 14.9745C27.6868 14.9914 27.6352 15.0095 27.5806 15.0287C26.7806 15.3116 20.3163 17.6254 17.5714 19.5C14.7687 21.414 11.6092 24.7019 11.3428 24.981C11.3293 24.9951 11.3201 25.0048 11.3067 25.0192Z"></svg:path><svg:path fill="#2F88FF" d="M6.10263 20.0094C5.97741 19.9983 5.85146 19.9787 5.72546 19.9501C4.222 19.6085 3.28014 18.1127 3.62176 16.6093C3.96338 15.1058 5.45912 14.1639 6.96259 14.5055C8.04613 14.7518 8.83798 15.5974 9.0679 16.6134C11.5816 17.9833 14.2989 18.9475 17.1192 19.468L17.6428 19.5646C19.2016 19.8522 20.6961 20.4172 22.0553 21.2328L23.5207 22.112C24.5005 22.6999 25.3793 23.4416 26.1234 24.3087L26.5288 24.7812C27.7526 26.2073 28.3101 28.0877 28.0613 29.9504L28.0331 30.1621C27.8636 31.4312 27.2894 32.6118 26.3957 33.5287L25.9345 34.0018C24.4094 35.5665 22.2148 36.2854 20.0595 35.9261C18.3925 35.6483 16.8493 34.8707 15.6342 33.6962L14.8952 32.9819C14.301 32.4076 13.7859 31.7568 13.3634 31.0466L11.1909 27.3947L10.5574 26.1247C9.42238 23.8489 7.91571 21.7826 6.10263 20.0094Z"></svg:path></svg:g>`,
})
export class IconParkChickenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChickenLegIcon],svg[icon-park-chicken-leg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.3748 33.8744C37.6175 29.6318 34.7891 15.4897 28.4251 9.12572C25.5966 6.29723 17.465 0.286877 8.62606 9.12565C-0.212837 17.9644 5.7977 26.0963 8.62606 28.9246C14.9901 35.2887 29.1322 38.1171 33.3748 33.8744Z"></svg:path><svg:path stroke="#000" stroke-width="4" d="M41 41C40.2533 40.2533 36.0222 36.0222 33.9999 33.9999"></svg:path><svg:circle cx="42.193" cy="40.071" r="2.5" fill="#000" transform="rotate(135 42.193 40.071)"></svg:circle><svg:circle cx="40.072" cy="42.192" r="2.5" fill="#000" transform="rotate(135 40.072 42.192)"></svg:circle><svg:circle cx="17" cy="18" r="2" fill="#fff"></svg:circle><svg:circle cx="12" cy="21" r="2" fill="#fff"></svg:circle><svg:circle cx="17" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkChickenLegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChickenZodiacIcon],svg[icon-park-chicken-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 31C30 26.5 31.4 17.6 41 14"></svg:path><svg:path d="M11 4L15 10"></svg:path><svg:path d="M38 31C38 33.8889 34.24 38.5556 28 40L26 44"></svg:path><svg:path d="M21 10.2738C15.1845 9.2518 3.86133 10.5366 5.09285 23.8519C5.09286 28.2319 7.37935 37.1968 16 40L18 44"></svg:path><svg:path d="M19 18C19.6957 21.8333 22.5 31 31 31H38C37.3043 28.6667 37.1565 23.4 43 21"></svg:path></svg:g>`,
})
export class IconParkChickenZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChildWithPacifierIcon],svg[icon-park-child-with-pacifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42C33.3888 42 41 34.3888 41 25C41 15.6112 33.3888 8 24 8C14.6112 8 7 15.6112 7 25C7 34.3888 14.6112 42 24 42Z"></svg:path><svg:path stroke-linecap="round" d="M33 21L31 22L29 21"></svg:path><svg:path stroke-linecap="round" d="M19 21L17 22L15 21"></svg:path><svg:path stroke-linecap="round" d="M24 38V44"></svg:path><svg:path stroke-linecap="round" d="M24 8C23.75 7 22 4 18 4"></svg:path><svg:path stroke-linecap="round" d="M24 8C24.0833 7 24.6 4.8 26 4"></svg:path><svg:path stroke-linecap="round" d="M31.9752 40C31.9752 34 31.9752 31 23.9998 31C15.9998 31 16.0244 34 16.0244 40"></svg:path><svg:path stroke-linecap="round" d="M5 23V27"></svg:path><svg:path stroke-linecap="round" d="M43 23V27"></svg:path></svg:g>`,
})
export class IconParkChildWithPacifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChildrenCapIcon],svg[icon-park-children-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 32C6 17 11 8 14 8C17 8 20 14 20 14H28C28 14 31 8 34 8C37 8 42 17 42 32"></svg:path><svg:rect width="40" height="8" x="4" y="32" fill="#2F88FF" rx="2"></svg:rect></svg:g>`,
})
export class IconParkChildrenCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChildrenPyramidIcon],svg[icon-park-children-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="18" height="8" x="15" y="17" fill="#2F88FF"></svg:rect><svg:path fill="#2F88FF" d="M10 25H38V33H10V25Z"></svg:path><svg:path fill="#2F88FF" d="M5 33H43V41H5V33Z"></svg:path><svg:path d="M24 17V7"></svg:path><svg:path d="M29 7L19 7"></svg:path></svg:g>`,
})
export class IconParkChildrenPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChiliIcon],svg[icon-park-chili-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M21.1678 16.594C22.8156 10.9872 29.4907 8.66639 34.2614 12.0416C38.3867 14.9602 39.0791 20.8076 35.7495 24.609L32.6192 28.183C27.4 34.1417 20.8092 38.741 13.4156 41.5837L9.85755 42.9517C9.12779 43.2322 8.30608 43.1295 7.66783 42.678C6.39521 41.7776 6.34327 39.9076 7.56396 38.938L10.3431 36.7305C14.5084 33.422 17.5492 28.9067 19.0491 23.8031L21.1678 16.594Z"></svg:path><svg:path d="M29.8417 10.6835C30.6939 8.09689 33.4817 6.69083 36.0683 7.54302C38.6549 8.3952 40.061 11.1829 39.2088 13.7696C38.8983 14.7121 38.3308 15.4978 37.6097 16.0747"></svg:path><svg:path stroke-linecap="round" d="M42 4L38 8"></svg:path></svg:g>`,
})
export class IconParkChiliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChimneyIcon],svg[icon-park-chimney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 14H35"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M16 14H24H32L36 44H12L16 14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 24H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 34L35 34"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M32 14L36 44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M16 14L12 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 8L24.8284 7.17157C25.5786 6.42143 26.596 6 27.6569 6H28.3431C29.404 6 30.4214 5.57857 31.1716 4.82843L32 4"></svg:path></svg:g>`,
})
export class IconParkChimneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChineseIcon],svg[icon-park-chinese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:rect width="20" height="10" x="14" y="18" fill="#43CCF8" stroke="#fff" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" d="M24 14V35"></svg:path></svg:g>`,
})
export class IconParkChineseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChineseOneIcon],svg[icon-park-chinese-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M21 19.9389C20.6008 18.7746 19.403 16.737 17.0076 17.0281C14.6122 17.3193 12.8152 20.5211 13.0152 24.5962C13.2152 28.6714 15.4106 31 17.4068 31C19.8023 31 21 28.2056 21 28.2056"></svg:path><svg:path stroke="#fff" d="M26 31L26 19"></svg:path><svg:path stroke="#fff" d="M26 31L26 24.5C26 22.0147 28.0147 20 30.5 20V20C32.9853 20 35 22.0147 35 24.5L35 31"></svg:path></svg:g>`,
})
export class IconParkChineseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChinesePavilionIcon],svg[icon-park-chinese-pavilion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M15 12H33C33 12 36.3632 15.0112 39 16C40.8645 16.6992 44 17 44 17C44 17 42.1839 17.6487 41 18C39.4563 18.458 37 19 37 19H24H11C11 19 8.54366 18.458 7 18C5.81607 17.6487 4 17 4 17C4 17 7.1355 16.6992 9 16C11.6368 15.0112 15 12 15 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 12L24 4L30 12H18Z"></svg:path><svg:path stroke-linecap="round" d="M11 19L11 38"></svg:path><svg:path stroke-linecap="round" d="M37 19V38"></svg:path><svg:rect width="36" height="6" x="6" y="38" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkChinesePavilionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChipIcon],svg[icon-park-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="24" height="36" x="12" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 12H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 20H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 28H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 36H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 12H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 20H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 28H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 36H36"></svg:path></svg:g>`,
})
export class IconParkChipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChoppingBoardIcon],svg[icon-park-chopping-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M14 8C16.5033 8 35.7176 8 42.0112 8C43.1158 8 44 8.89543 44 10V38C44 39.1046 43.117 40 42.0125 40C35.8575 40 17.3255 40 14 40C10 40 4 38 4 24C4 10 11 8 14 8Z"></svg:path><svg:path stroke="#fff" d="M12 20V28"></svg:path></svg:g>`,
})
export class IconParkChoppingBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChopsticksForkIcon],svg[icon-park-chopsticks-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4V44"></svg:path><svg:path d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"></svg:path><svg:path d="M37 4L40 44"></svg:path><svg:path d="M31 4L28 44"></svg:path></svg:g>`,
})
export class IconParkChopsticksForkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChristmasTreeIcon],svg[icon-park-christmas-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20 14L16 12L24 4L32 12L28 14L36 22L30 24L39 34H9L17 24L12 22L20 14Z"></svg:path><svg:path d="M31 44H17"></svg:path><svg:path d="M21 34L20 44"></svg:path><svg:path d="M27 34L28 44"></svg:path></svg:g>`,
})
export class IconParkChristmasTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChristmasTreeOneIcon],svg[icon-park-christmas-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36V44"></svg:path><svg:path fill="#2F88FF" d="M14 15L24 4L34 15L31 18L39 26L34 27.1579L42 36H6L14 27.1579L9 26L17 18L14 15Z"></svg:path></svg:g>`,
})
export class IconParkChristmasTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChurchOneIcon],svg[icon-park-church-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M24 4V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 8L28 8"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M15 28H9C7.89543 28 7 28.8954 7 30V44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M33 28H39C40.1046 28 41 28.8954 41 30V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 44L44 44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15 23L24 15L33 23V44H15V23Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 34V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 44L28 44"></svg:path></svg:g>`,
})
export class IconParkChurchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkChurchTwoIcon],svg[icon-park-church-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M13 24L24 14L35 24V44H13V24Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M7 8L10 4L13 8V44H7V8Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M35 8L38 4L41 8V44H35V8Z"></svg:path><svg:path stroke="#fff" d="M24 25V35"></svg:path><svg:path stroke="#fff" d="M20 29L28 29"></svg:path></svg:g>`,
})
export class IconParkChurchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleDoubleDownIcon],svg[icon-park-circle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 17L24 24L17 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 26L24 33L17 26"></svg:path></svg:g>`,
})
export class IconParkCircleDoubleDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleDoubleLeftIcon],svg[icon-park-circle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 31L15 24L22 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31L24 24L31 17"></svg:path></svg:g>`,
})
export class IconParkCircleDoubleLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleDoubleRightIcon],svg[icon-park-circle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 31L24 24L17 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 31L33 24L26 17"></svg:path></svg:g>`,
})
export class IconParkCircleDoubleRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleDoubleUpIcon],svg[icon-park-circle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 22L24 15L17 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31L24 24L17 31"></svg:path></svg:g>`,
})
export class IconParkCircleDoubleUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleFiveLineIcon],svg[icon-park-circle-five-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"></svg:path><svg:path fill="#2F88FF" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path fill="#2F88FF" d="M40 44C42.2091 44 44 42.2091 44 40C44 37.7909 42.2091 36 40 36C37.7909 36 36 37.7909 36 40C36 42.2091 37.7909 44 40 44Z"></svg:path><svg:path fill="#2F88FF" d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"></svg:path><svg:path fill="#2F88FF" d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"></svg:path><svg:path stroke-linecap="round" d="M20 40H28"></svg:path><svg:path stroke-linecap="round" d="M20 8H28"></svg:path><svg:path stroke-linecap="round" d="M8 20V28"></svg:path><svg:path stroke-linecap="round" d="M40 20V28"></svg:path></svg:g>`,
})
export class IconParkCircleFiveLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleFourIcon],svg[icon-park-circle-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill-rule="evenodd" d="M24 10C25.6569 10 27 8.65685 27 7C27 5.34315 25.6569 4 24 4C22.3431 4 21 5.34315 21 7C21 8.65685 22.3431 10 24 10Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M24 44C25.6569 44 27 42.6569 27 41C27 39.3431 25.6569 38 24 38C22.3431 38 21 39.3431 21 41C21 42.6569 22.3431 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7 27C8.65685 27 10 25.6569 10 24C10 22.3431 8.65685 21 7 21C5.34315 21 4 22.3431 4 24C4 25.6569 5.34315 27 7 27Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M41 27C42.6569 27 44 25.6569 44 24C44 22.3431 42.6569 21 41 21C39.3431 21 38 22.3431 38 24C38 25.6569 39.3431 27 41 27Z" clip-rule="evenodd"></svg:path><svg:path d="M24.1969 15.7438C27.2874 15.7438 30.0141 14.1861 31.6346 11.813C33.5162 12.9388 35.1205 14.4804 36.3205 16.3109C33.7298 17.891 32.0002 20.7436 32.0002 24.0001C32.0002 27.3429 33.8226 30.26 36.528 31.8121C35.4049 33.6294 33.8903 35.1793 32.102 36.3441C30.5754 33.5472 27.6077 31.6499 24.1969 31.6499C20.7969 31.6499 17.8373 33.5352 16.3064 36.3175C14.4779 35.1178 12.9379 33.5146 11.813 31.6345C14.1861 30.014 15.7438 27.2873 15.7438 24.1969C15.7438 21.1166 14.1964 18.3977 11.8365 16.7753C13.0547 14.7537 14.7538 13.0547 16.7753 11.8365C18.3977 14.1964 21.1166 15.7438 24.1969 15.7438Z"></svg:path></svg:g>`,
})
export class IconParkCircleFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleFourLineIcon],svg[icon-park-circle-four-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M40 44C42.2091 44 44 42.2091 44 40C44 37.7909 42.2091 36 40 36C37.7909 36 36 37.7909 36 40C36 42.2091 37.7909 44 40 44Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 8H28"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M32 16L16 32L32 16Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 16L16 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 20V28"></svg:path></svg:g>`,
})
export class IconParkCircleFourLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleHouseIcon],svg[icon-park-circle-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 23H4C4 23 14.5 17 19 12C23.5 7 24.5 4 24.5 4C24.5 4 25.5 7 30 12C34.5 17 44 23 44 23Z"></svg:path><svg:rect width="32" height="13" x="8" y="31" fill="#2F88FF"></svg:rect><svg:rect width="22" height="8" x="13" y="23" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkCircleHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleLeftDownIcon],svg[icon-park-circle-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 31L31 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 31H17V19"></svg:path></svg:g>`,
})
export class IconParkCircleLeftDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleLeftUpIcon],svg[icon-park-circle-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31L17 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 17H17V29"></svg:path></svg:g>`,
})
export class IconParkCircleLeftUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleRightDownIcon],svg[icon-park-circle-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31L17 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 31H31V19"></svg:path></svg:g>`,
})
export class IconParkCircleRightDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleRightUpIcon],svg[icon-park-circle-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 17L17 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 17H31V29"></svg:path></svg:g>`,
})
export class IconParkCircleRightUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleThreeIcon],svg[icon-park-circle-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32.9037 13.9272C31.2464 17.1588 27.8814 19.3702 24 19.3702C20.1185 19.3702 16.7536 17.1588 15.0963 13.9272C11.3982 16.6591 9 21.0495 9 26.0001C9 26.8178 9.06543 27.6202 9.19135 28.4024C9.45807 28.3811 9.72775 28.3702 9.99996 28.3702C15.5228 28.3702 20 32.8474 20 38.3702C20 39.0665 19.9288 39.7461 19.7934 40.4022C21.128 40.7914 22.5397 41.0001 24 41.0001C25.4603 41.0001 26.8719 40.7914 28.2066 40.4022C28.0711 39.7461 28 39.0665 28 38.3702C28 32.8474 32.4771 28.3702 38 28.3702C38.2722 28.3702 38.5419 28.3811 38.8087 28.4024C38.9346 27.6202 39 26.8178 39 26.0001C39 21.0495 36.6017 16.6591 32.9037 13.9272Z"></svg:path><svg:path fill-rule="evenodd" d="M24 13C26.2091 13 28 11.2091 28 9C28 6.79086 26.2091 5 24 5C21.7909 5 20 6.79086 20 9C20 11.2091 21.7909 13 24 13Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 43C11.2091 43 13 41.2091 13 39C13 36.7909 11.2091 35 9 35C6.79086 35 5 36.7909 5 39C5 41.2091 6.79086 43 9 43Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M39 43C41.2091 43 43 41.2091 43 39C43 36.7909 41.2091 35 39 35C36.7909 35 35 36.7909 35 39C35 41.2091 36.7909 43 39 43Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkCircleThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleTwoLineIcon],svg[icon-park-circle-two-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"></svg:path><svg:path fill="#2F88FF" d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"></svg:path><svg:path stroke-linecap="round" d="M40 20V40H20"></svg:path><svg:path stroke-linecap="round" d="M8 28V8H28"></svg:path></svg:g>`,
})
export class IconParkCircleTwoLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCirclesAndTrianglesIcon],svg[icon-park-circles-and-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"></svg:path></svg:g>`,
})
export class IconParkCirclesAndTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCirclesSevenIcon],svg[icon-park-circles-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"></svg:path><svg:path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path d="M34.3925 18.0002C35.4971 19.9134 37.9434 20.5689 39.8566 19.4643C41.7698 18.3597 42.4253 15.9134 41.3207 14.0002C40.2161 12.087 37.7698 11.4315 35.8566 12.5361C33.9434 13.6407 33.2879 16.087 34.3925 18.0002Z"></svg:path><svg:path d="M34.3925 30.0002C33.2879 31.9134 33.9434 34.3597 35.8566 35.4643C37.7698 36.5689 40.2161 35.9134 41.3207 34.0002C42.4253 32.087 41.7698 29.6407 39.8566 28.5361C37.9434 27.4315 35.4971 28.087 34.3925 30.0002Z"></svg:path><svg:path d="M24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36Z"></svg:path><svg:path d="M13.6078 30.0002C12.5032 28.087 10.0569 27.4315 8.14373 28.5361C6.23056 29.6407 5.57506 32.087 6.67963 34.0002C7.7842 35.9134 10.2305 36.5689 12.1437 35.4643C14.0569 34.3597 14.7124 31.9134 13.6078 30.0002Z"></svg:path><svg:path d="M13.6078 18.0002C14.7124 16.087 14.0569 13.6407 12.1437 12.5361C10.2305 11.4315 7.7842 12.087 6.67963 14.0002C5.57506 15.9134 6.23056 18.3597 8.14373 19.4643C10.0569 20.5689 12.5032 19.9134 13.6078 18.0002Z"></svg:path></svg:g>`,
})
export class IconParkCirclesSevenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircularConnectionIcon],svg[icon-park-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M13.5 39.3706C16.3908 41.6439 20.0371 42.9999 24 42.9999C27.9629 42.9999 31.6092 41.6439 34.5 39.3706"></svg:path><svg:path d="M19 9.74707C12.0513 11.8822 7 18.3511 7 25.9999C7 27.9247 7.31989 29.7748 7.9094 31.4999"></svg:path><svg:path d="M29 9.74707C35.9487 11.8822 41 18.3511 41 25.9999C41 27.9247 40.6801 29.7748 40.0906 31.4999"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M43 36C43 37.3416 42.4716 38.5597 41.6117 39.4577C40.7015 40.4082 39.4199 41 38 41C35.2386 41 33 38.7614 33 36C33 33.9899 34.1861 32.2569 35.8967 31.4626C36.536 31.1657 37.2487 31 38 31C40.7614 31 43 33.2386 43 36Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M15 36C15 37.3416 14.4716 38.5597 13.6117 39.4577C12.7015 40.4082 11.4199 41 10 41C7.23858 41 5 38.7614 5 36C5 33.9899 6.18614 32.2569 7.89667 31.4626C8.53604 31.1657 9.24867 31 10 31C12.7614 31 15 33.2386 15 36Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M29 9C29 10.3416 28.4716 11.5597 27.6117 12.4577C26.7015 13.4082 25.4199 14 24 14C21.2386 14 19 11.7614 19 9C19 6.98991 20.1861 5.25686 21.8967 4.4626C22.536 4.16572 23.2487 4 24 4C26.7614 4 29 6.23858 29 9Z"></svg:path></svg:g>`,
})
export class IconParkCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCircusIcon],svg[icon-park-circus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M9 26C9 26 8.92429 26.7867 8 31C7.02053 35.4648 4 44 4 44H44C44 44 40.9795 35.4648 40 31C39.0757 26.7867 39 26 39 26"></svg:path><svg:path stroke-linejoin="round" d="M20 28C21 37 16 44 16 44"></svg:path><svg:path stroke-linejoin="round" d="M28 28C27 37 32 44 32 44"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M6 18C6 18 13.5923 17.9452 17 17C19.8659 16.2051 24 14 24 14C24 14 27.8229 16.1944 30.5 17C34.0722 18.075 42 18 42 18L41 25C41 25 37 27 36 27C35 27 33 25 32 25C31 25 28.5 28 28 28C27.5 28 25 25 24 25C23 25 21 28.5 20 28.5C19 28.5 17 25 16 25C15.802 25 15.5257 25.0784 15.2098 25.2041C13.0681 26.0564 10.7214 26.4885 8.58115 25.6325L7 25L6 18Z"></svg:path><svg:path d="M24 5V15"></svg:path><svg:path stroke-linejoin="round" d="M36 10.9998V4.99984C36 4.99984 34.5 7.99984 30 4.99984C25.5 1.99984 24 4.99984 24 4.99984V10.9998C24 10.9998 25.5 7.99984 30 10.9998C34.5 13.9998 36 10.9998 36 10.9998Z"></svg:path></svg:g>`,
})
export class IconParkCircusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCityIcon],svg[icon-park-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42H44"></svg:path><svg:rect width="8" height="16" x="8" y="26" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M12 34H13"></svg:path><svg:rect width="24" height="38" x="16" y="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="4" height="4" x="22" y="10" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="10" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="22" y="17" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="17" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="24" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="31" fill="#fff"></svg:rect></svg:g>`,
})
export class IconParkCityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCityGateIcon],svg[icon-park-city-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M15 11H32C32 11 37.0476 13.9664 39 15C40.0914 15.5778 44 16 44 16C44 16 42.1839 16.6487 41 17C39.4563 17.458 37 18 37 18H24H11C11 18 8.54366 17.458 7 17C5.81607 16.6487 4 16 4 16C4 16 7.90857 15.5778 9 15C10.9524 13.9664 15 11 15 11Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 11L24 4L30 11H17Z"></svg:path><svg:path d="M35 18V24"></svg:path><svg:path d="M12 18V24"></svg:path><svg:path stroke-linejoin="round" d="M4 44L6 24H42L44 44H4Z"></svg:path><svg:path d="M20 38C20 35.7909 21.7909 34 24 34V34C26.2091 34 28 35.7909 28 38V44H20V38Z"></svg:path></svg:g>`,
})
export class IconParkCityGateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCityOneIcon],svg[icon-park-city-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M4 42H44"></svg:path><svg:rect width="12" height="20" x="8" y="22" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:rect width="20" height="38" x="20" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M28 32.0083H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 32.0083H16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 23.0083H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 14.0083H32"></svg:path></svg:g>`,
})
export class IconParkCityOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClapIcon],svg[icon-park-clap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17.1182 26.0132L9.25293 12.3902C8.80961 11.6224 7.82778 11.3593 7.05994 11.8026C6.38243 12.1938 6.08553 13.0164 6.35702 13.7501L11.8773 28.6684C11.9585 28.8878 12.0005 29.1197 12.0016 29.3535L12.0586 42.0265C12.0636 43.1276 12.9575 44.0175 14.0586 44.0175L19.0159 44.0175C20.2925 44.0175 21.2424 42.8377 20.9698 41.5906L18 28L17.1182 26.0132Z"></svg:path><svg:path d="M12 29L18 28"></svg:path><svg:path d="M30.5636 25.7289L38.2548 12.4074C38.7036 11.6301 39.6975 11.3637 40.4748 11.8125C41.1469 12.2006 41.4508 13.0097 41.2005 13.7443L36.0954 28.7215C36.0325 28.9062 35.9969 29.099 35.9898 29.294L35.5236 42.0923C35.4844 43.1678 34.6012 44.0195 33.5249 44.0195L28.5607 44.0195C27.2598 44.0195 26.3051 42.7971 26.6203 41.5349L30.0005 28L30.3348 26.3351C30.3776 26.122 30.4549 25.9172 30.5636 25.7289Z"></svg:path><svg:path d="M30 28L36 29"></svg:path><svg:path d="M15 7L18.5 11"></svg:path><svg:path d="M23 4L24 10"></svg:path><svg:path d="M33 6L30 10"></svg:path></svg:g>`,
})
export class IconParkClapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClassroomIcon],svg[icon-park-classroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="13" r="9" fill="#2F88FF"></svg:circle><svg:path d="M5 44C5 35.5625 11.175 27.6875 16.4 26C16.4 26 21.15 31.0625 24 34.4375L31.6 26C35.875 26.5625 43 35.5625 43 44"></svg:path><svg:path stroke-linecap="round" d="M2 44L46 44"></svg:path></svg:g>`,
})
export class IconParkClassroomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClearIcon],svg[icon-park-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M20 5.91406H28V13.9141H43V21.9141H5V13.9141H20V5.91406Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M8 40H40V22H8V40Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 39.8976V33.9141"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 39.8977V33.8977"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 39.8976V33.9141"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 40H36"></svg:path></svg:g>`,
})
export class IconParkClearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClearFormatIcon],svg[icon-park-clear-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-width="4.302" d="M44.7818 24.1702L31.918 7.09935L14.1348 20.5L27.5 37L30.8556 34.6643L44.7818 24.1702Z"></svg:path><svg:path stroke-linejoin="round" stroke-width="4.302" d="M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248"></svg:path><svg:path stroke-linecap="round" stroke-width="4.5" d="M13.2056 40.072L44.5653 40.072"></svg:path></svg:g>`,
})
export class IconParkClearFormatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClickIcon],svg[icon-park-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4V12"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z" clip-rule="evenodd"></svg:path><svg:path d="M38.1421 9.85789L32.4853 15.5147"></svg:path><svg:path d="M9.85787 38.1421L15.5147 32.4853"></svg:path><svg:path d="M4 24H12"></svg:path><svg:path d="M9.85795 9.85787L15.5148 15.5147"></svg:path></svg:g>`,
})
export class IconParkClickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClickTapIcon],svg[icon-park-click-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M15 26V15C15 13.3431 16.3431 12 18 12C19.6569 12 21 13.3431 21 15V26"></svg:path><svg:path stroke-linejoin="round" d="M39 25V31.5C39 37.8513 33.8513 43 27.5 43H26.5C20.1487 43 15 37.8513 15 31.5V25"></svg:path><svg:path stroke-linejoin="round" d="M21 29V27.1058V24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24V27.1818V29"></svg:path><svg:path stroke-linejoin="round" d="M27 29V27.1058V24C27 22.3431 28.3431 21 30 21C31.6569 21 33 22.3431 33 24V27.1818V29"></svg:path><svg:path stroke-linejoin="round" d="M33 29V27.1058V24C33 22.3431 34.3431 21 36 21C37.6569 21 39 22.3431 39 24V27.1818V29"></svg:path><svg:path d="M28 15C28 13.9489 27.8378 12.9357 27.5371 11.9839C27.2008 10.9195 26.6913 9.93208 26.0415 9.0547C24.2198 6.59472 21.2961 5 18 5C14.7039 5 11.7802 6.59472 9.95847 9.0547C9.30873 9.93208 8.79916 10.9195 8.46286 11.9839C8.16217 12.9357 8 13.9489 8 15"></svg:path></svg:g>`,
})
export class IconParkClickTapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClickTapTwoIcon],svg[icon-park-click-tap-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 44V15C11 12.7909 12.7909 11 15 11C17.2091 11 19 12.7909 19 15V35L42 40V44"></svg:path><svg:path d="M11 25.2501V25.2501C6.90264 23.65 4 19.664 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15C26 19.664 23.0974 23.65 19 25.2501"></svg:path></svg:g>`,
})
export class IconParkClickTapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClickToFoldIcon],svg[icon-park-click-to-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M27 9V21H39"></svg:path><svg:path d="M21 39V27H9"></svg:path><svg:path d="M27 21L42 6"></svg:path><svg:path d="M21 27L6 42"></svg:path></svg:g>`,
})
export class IconParkClickToFoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClipboardIcon],svg[icon-park-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31"></svg:path><svg:rect width="14" height="6" x="17" y="4" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkClipboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClockTowerIcon],svg[icon-park-clock-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 44H44"></svg:path><svg:rect width="12" height="12" x="27" y="32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 10V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 10V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 10L33 4L38 10H28Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M25 20H11C9.89543 20 9 20.8954 9 22V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M15 29L19 29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M15 36L19 36"></svg:path><svg:rect width="16" height="16" x="25" y="16" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="1"></svg:rect><svg:circle cx="33" cy="24" r="3" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M33 32V42"></svg:path></svg:g>`,
})
export class IconParkClockTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseIcon],svg[icon-park-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 8L40 40"></svg:path><svg:path d="M8 40L40 8"></svg:path></svg:g>`,
})
export class IconParkCloseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseOneIcon],svg[icon-park-close-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29.6567 18.3432L18.343 29.6569"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.3433 18.3432L29.657 29.6569"></svg:path></svg:g>`,
})
export class IconParkCloseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseRemindIcon],svg[icon-park-close-remind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 38C42 38 36 33 36 19C36 12.3726 30.6274 7 24 7C21.46 7 19.1042 7.78918 17.1647 9.13571M30 38H6C6 38 11.5692 33.359 11.9765 20.5"></svg:path><svg:path stroke="#000" stroke-width="4" d="M18 38L30 38C30 41.3137 27.3137 44 24 44C20.6863 44 18 41.3137 18 38Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M24 2C21.7909 2 20 3.79086 20 6H28C28 3.79086 26.2091 2 24 2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 6.5L41 44.5"></svg:path></svg:g>`,
})
export class IconParkCloseRemindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseSmallIcon],svg[icon-park-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 14L34 34"></svg:path><svg:path d="M14 34L34 14"></svg:path></svg:g>`,
})
export class IconParkCloseSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseWifiIcon],svg[icon-park-close-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 40L8 8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257"></svg:path></svg:g>`,
})
export class IconParkCloseWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesBriefsIcon],svg[icon-park-clothes-briefs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.1579 37C22.1579 37 21.2572 28.9255 18 25C14.956 21.3315 6 19 6 19L6 14H42L42 19C42 19 33.044 21.3315 30 25C26.7428 28.9254 25.8421 37 25.8421 37H22.1579Z"></svg:path>`,
})
export class IconParkClothesBriefsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesCardiganIcon],svg[icon-park-clothes-cardigan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 17V37M11 37V44H37V37M11 37H4V17C4 14 6 10.5 9 8C12 5.5 16 4 16 4H32C32 4 36 5.5 39 8C42 10.5 44 14 44 17V37H37M11 37V17"></svg:path><svg:path d="M24 17V44"></svg:path><svg:path d="M24 17L16 4"></svg:path><svg:path d="M32 4L24 17"></svg:path></svg:g>`,
})
export class IconParkClothesCardiganIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesCrewNeckIcon],svg[icon-park-clothes-crew-neck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 17V37M11 37V44H37V37M11 37H4V17C4 14 6 10.5 9 8C12 5.5 18 4 18 4H30C30 4 36 5.5 39 8C42 10.5 44 14 44 17V37H37M11 37V17"></svg:path><svg:path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"></svg:path></svg:g>`,
})
export class IconParkClothesCrewNeckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesDiapersIcon],svg[icon-park-clothes-diapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 11H42L42 19C42 19 42 27 38 31C34 35 27.8421 37 27.8421 37H20.1579C20.1579 37 14 35 10 31C6 27 6 19 6 19L6 11Z"></svg:path><svg:path d="M20.1579 37C20.1579 37 20.2572 29.9255 17 26C13.956 22.3315 6 19 6 19"></svg:path><svg:path d="M27.8421 37C27.8421 37 27.7428 29.9254 31 26C34.044 22.3315 42 19 42 19"></svg:path></svg:g>`,
})
export class IconParkClothesDiapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesGlovesIcon],svg[icon-park-clothes-gloves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M27 4H15C11.2288 4 9.34315 4 8.17157 5.17157C7 6.34315 7 8.22876 7 12V44H35V37C35 37 42 37 42 31V23C42 17 35 17 35 17V12C35 8.22876 35 6.34315 33.8284 5.17157C32.6569 4 30.7712 4 27 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 27V17M35 17V12C35 8.22876 35 6.34315 33.8284 5.17157C32.6569 4 30.7712 4 27 4H15C11.2288 4 9.34315 4 8.17157 5.17157C7 6.34315 7 8.22876 7 12V44H35V37C35 37 42 37 42 31C42 29 42 26 42 23C42 17 35 17 35 17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 22V4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 22V4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 22V4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 4H30"></svg:path></svg:g>`,
})
export class IconParkClothesGlovesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesGlovesTwoIcon],svg[icon-park-clothes-gloves-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 22V15M34 15V15C34 10.3088 34 7.96327 32.7601 6.34743C32.4409 5.93144 32.0686 5.55908 31.6526 5.23988C30.0367 4 27.6912 4 23 4H22C16.3431 4 13.5147 4 11.7574 5.75736C10 7.51472 10 10.3431 10 16V38H34V32C34 32 41 32 41 26C41 24 41 24 41 21C41 15 34 15 34 15Z"></svg:path><svg:path fill="#2F88FF" d="M9 38H35C36.6569 38 38 39.3431 38 41C38 42.6569 36.6569 44 35 44H9C7.34315 44 6 42.6569 6 41C6 39.3431 7.34315 38 9 38Z"></svg:path></svg:g>`,
})
export class IconParkClothesGlovesTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesHoodieIcon],svg[icon-park-clothes-hoodie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 22V37M11 37V44H37V37M11 37H4V22C4 19 6 15.5 9 13C12 10.5 16 10 16 10L24 18M11 37V22M37 37H44V22C44 19 42 15.5 39 13C36 10.5 32 10 32 10L24 18M24 18V27"></svg:path><svg:path fill="#2F88FF" d="M9 13C12 10.5 16 10 16 10L24 18L32 10C32 10 36 10.5 39 13L41 8.5L39 4H9L7 8.5L9 13Z"></svg:path></svg:g>`,
})
export class IconParkClothesHoodieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesPantsIcon],svg[icon-park-clothes-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 44H42L38 4H10L6 44H15L24 19L33 44Z"></svg:path><svg:path d="M24 4V9.5"></svg:path><svg:path d="M17.0004 4C17.0004 4 17.0004 10 15.0004 12C13.0004 14 8.90039 15 8.90039 15"></svg:path><svg:path d="M31 4C31 4 31 10 33 12C35 14 39.1 15 39.1 15"></svg:path></svg:g>`,
})
export class IconParkClothesPantsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesPantsShortIcon],svg[icon-park-clothes-pants-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 36L8.00001 12H40L42 36H26.8421L24 25L21.1579 36H6Z"></svg:path><svg:path stroke="#fff" d="M24 12L27 19"></svg:path><svg:path stroke="#fff" d="M24 12L20 19.5"></svg:path><svg:path stroke="#000" d="M18 12H30"></svg:path></svg:g>`,
})
export class IconParkClothesPantsShortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesPantsSweatIcon],svg[icon-park-clothes-pants-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 19L33 38H42L38 4H10L6 38H15L24 19Z"></svg:path><svg:path fill="#2F88FF" d="M34 38L35 44H41V38H34Z"></svg:path><svg:path fill="#2F88FF" d="M13 44H7V38H14L13 44Z"></svg:path><svg:path d="M24 4L28 11.5"></svg:path><svg:path d="M24 4L20 11.5"></svg:path></svg:g>`,
})
export class IconParkClothesPantsSweatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesShortSleeveIcon],svg[icon-park-clothes-short-sleeve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4H4V12H10V44H38V12H44V4Z"></svg:path><svg:path d="M10 32H38"></svg:path><svg:path d="M10 24H38"></svg:path><svg:path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"></svg:path></svg:g>`,
})
export class IconParkClothesShortSleeveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesSkatesIcon],svg[icon-park-clothes-skates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V40C4 41.8856 4 42.8284 4.58579 43.4142C5.17157 44 6.11438 44 8 44H12L16 40L20 44H40C41.8856 44 42.8284 44 43.4142 43.4142C44 42.8284 44 41.8856 44 40V32.4747C44 27.4829 44 24.987 42.5202 23.2917C41.0404 21.5964 38.5674 21.2592 33.6214 20.5847L32.3786 20.4153C27.4326 19.7408 24.9596 19.4036 23.4798 17.7083C22 16.013 22 13.5171 22 8.52531V8C22 6.11438 22 5.17157 21.4142 4.58579C20.8284 4 19.8856 4 18 4Z"></svg:path><svg:path d="M44 34H4"></svg:path><svg:path d="M4 11.5H22"></svg:path><svg:circle cx="15" cy="23" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkClothesSkatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesSuitIcon],svg[icon-park-clothes-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 21V37M11 37V44H37V37M11 37H4V10L18 4H30L44 10V37H37M11 37V21"></svg:path><svg:path d="M30 4L24 18M24 18L18 4M24 18V37V44"></svg:path><svg:path d="M30 4L24 18"></svg:path><svg:path d="M24 18L18 4"></svg:path><svg:path d="M18 4L14 12L18 17.5L16 23L24 37"></svg:path><svg:path d="M30 4L35 12L30 17.5L32 23L24 37"></svg:path></svg:g>`,
})
export class IconParkClothesSuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesSweaterIcon],svg[icon-park-clothes-sweater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 19V37M11 37V44H37V37M11 37H4V12L9 7L16 4H32L39 7L44 12V37H37M11 37V19"></svg:path><svg:path d="M24 21V44"></svg:path><svg:path d="M9 7L24 21"></svg:path><svg:path d="M16 4L24 21"></svg:path><svg:path d="M32 4L24 21"></svg:path><svg:path d="M39 7L24 21"></svg:path></svg:g>`,
})
export class IconParkClothesSweaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesTurtleneckIcon],svg[icon-park-clothes-turtleneck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 23V37M11 37V44H37V37M11 37H4V23C4 20 6 16.5 9 14C12 11.5 18 10 18 10H30C30 10 36 11.5 39 14C42 16.5 44 20 44 23V37H37M11 37V23"></svg:path><svg:path fill="#2F88FF" d="M30 10H18V4H30V10Z"></svg:path></svg:g>`,
})
export class IconParkClothesTurtleneckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesWindbreakerIcon],svg[icon-park-clothes-windbreaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 25V37M11 37V44H37V37M11 37H4V18L10.125 13L17 18L24 10L31 18L37.875 13L44 18V37H37M11 37V25"></svg:path><svg:path fill="#2F88FF" d="M17 18L24 10L31 18L42 10L39.5 4H9L6 10L17 18Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 10H24M29 10H24M24 10L17 18L6 10L9 4H39.5L42 10L31 18L24 10Z"></svg:path></svg:g>`,
})
export class IconParkClothesWindbreakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloudStorageIcon],svg[icon-park-cloud-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 29H4V42H44V29Z"></svg:path><svg:path fill="#fff" d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.006 16.0259C16.8635 16.0259 15 17.5124 15 19.5128C15 21.9998 17.0947 22.9998 19.6973 22.9998C20.1437 22.9998 20.5567 22.9998 20.9768 22.9998"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29.007 16.0259C31.1039 16.0259 33 16.9994 33 19.5128C33 21.9998 30.8902 22.9998 28.2877 22.9998C27.8412 22.9998 27.4013 22.9998 26.9871 22.9998"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29.0069 16.0261C29.0069 13.0423 27.0231 11 23.9998 11C20.9766 11 19.0059 12.9927 19.0059 16.0261"></svg:path><svg:path stroke="#000" stroke-width="4" d="M20 23H28"></svg:path></svg:g>`,
})
export class IconParkCloudStorageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloudyIcon],svg[icon-park-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path fill="#2F88FF" d="M26 42C29.3137 42 32 39.3137 32 36C32 32.6863 29.3137 30 26 30C22.6863 30 20 32.6863 20 36C20 39.3137 22.6863 42 26 42Z"></svg:path><svg:path stroke-linecap="round" d="M22.2426 15.7574C21.1569 14.6716 19.6569 14 18 14C14.6863 14 12 16.6863 12 20C12 21.6569 12.6716 23.1569 13.7574 24.2426"></svg:path></svg:g>`,
})
export class IconParkCloudyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCloudyNightIcon],svg[icon-park-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path fill="#2F88FF" d="M27.2158 30.1233C25.5748 30.5511 24.3637 32.0432 24.3637 33.8182C24.3637 35.9269 26.0731 37.6364 28.1818 37.6364C29.9568 37.6364 31.4489 36.4252 31.8767 34.7842C31.9576 35.1768 32 35.5835 32 36C32 39.3137 29.3137 42 26 42C22.6863 42 20 39.3137 20 36C20 32.6863 22.6863 30 26 30C26.4166 30 26.8232 30.0424 27.2158 30.1233Z"></svg:path><svg:path stroke-linecap="round" d="M22.2426 15.7574C21.1569 14.6716 19.6569 14 18 14C14.6863 14 12 16.6863 12 20C12 21.6569 12.6716 23.1569 13.7574 24.2426"></svg:path></svg:g>`,
})
export class IconParkCloudyNightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkClueIcon],svg[icon-park-clue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 16C39.7614 16 42 13.7614 42 11C42 8.23858 39.7614 6 37 6C34.2386 6 32 8.23858 32 11C32 13.7614 34.2386 16 37 16Z"></svg:path><svg:path fill="#2F88FF" d="M11 42C13.7614 42 16 39.7614 16 37C16 34.2386 13.7614 32 11 32C8.23858 32 6 34.2386 6 37C6 39.7614 8.23858 42 11 42Z"></svg:path><svg:path stroke-linecap="round" d="M37 16V35.5042C37 39.0917 34.0917 42 30.5042 42V42C26.9166 42 24.0083 39.0917 24.0083 35.5042V12.5042C24.0083 8.91201 21.0963 6 17.5042 6V6C13.912 6 11 8.91201 11 12.5042L11 32"></svg:path></svg:g>`,
})
export class IconParkClueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCoatHangerIcon],svg[icon-park-coat-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 13C19 10.2386 21.2386 8 24 8C26.7614 8 29 10.2386 29 13C29 15.7614 26.7614 18 24 18V22"></svg:path><svg:path fill="#2F88FF" d="M44 36H4C4 31 10 22 24 22C38 22 44 31 44 36Z"></svg:path></svg:g>`,
})
export class IconParkCoatHangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCocktailIcon],svg[icon-park-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M35.8 13H32L21 32L9.8 13H6"></svg:path><svg:path d="M25.7509 25.5961C31.3517 28.7466 38.446 26.7602 41.5964 21.1594C44.7469 15.5586 42.7605 8.46427 37.1597 5.31383C31.5589 2.16338 24.4646 4.14978 21.3142 9.75057"></svg:path><svg:path stroke-linejoin="round" d="M26 44H16"></svg:path><svg:path stroke-linejoin="round" d="M21 44L21 32"></svg:path><svg:path stroke-linejoin="round" d="M12 16C12 16 14 14 17 14C20 14 22 17 25 17C28 17 30 16 30 16"></svg:path></svg:g>`,
})
export class IconParkCocktailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCoconutTreeIcon],svg[icon-park-coconut-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M22 14.0001C22 14.0001 19.2998 19.2934 18 26.0001C16.7001 32.7068 17 42.0001 17 42.0001"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M33.953 23.2722C34.2986 23.5017 34.8456 23.6634 35.3814 23.7751C36.3128 23.9692 37.1735 23.329 37.1492 22.3779C37.1041 20.6042 36.4122 17.7028 32.8908 15.3644C29.5662 13.1566 26.2646 13.1264 24.1832 13.4437C22.996 13.6247 22.5233 14.9219 23.2046 15.9109C23.8127 16.7937 24.5211 17.6853 25 17.8556C26 18.2111 27.2034 17.2737 28.0797 17.8556C28.956 18.4375 28.6953 19.7807 29.5716 20.3626C30.4479 20.9445 31.5848 20.1832 32.4611 20.7651C33.3373 21.3471 33.0767 22.6903 33.953 23.2722Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20.0002 16.9999C20.858 16.714 21.3888 15.7739 21.686 15.0214C21.9317 14.3995 21.7122 13.713 21.1366 13.3727C19.8409 12.6068 17.0755 11.5589 12.7616 12.8117C8.49748 14.05 7.37106 16.8675 7.08518 18.5267C6.95141 19.3031 7.48001 20.0054 8.263 20.0924C8.8239 20.1548 9.43921 20.1271 9.8069 19.815C10.6138 19.1302 10.8323 18.2326 11.7338 17.991C12.6353 17.7495 13.413 18.8488 14.3146 18.6072C15.2161 18.3657 15.3399 17.0248 16.2414 16.7832C17.143 16.5416 18.5002 17.4999 20.0002 16.9999Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M27 6.00012C24.4995 7.00013 21.9993 12.0001 22.0001 14.0001L35.0009 8.00014C33.6202 5.60868 29.5005 5.00012 27 6.00012Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20 5.00012C24 6.42174 23.3809 11.6087 22.0002 14.0001L10.0005 5.92177C11.0005 4.00013 16 3.5785 20 5.00012Z"></svg:path><svg:path d="M26 35C34.2843 35 39 36.7909 39 39C39 41.2091 32.2843 43 24 43C15.7157 43 9 41.2091 9 39C9 38.4608 9.40006 37.9465 10.1253 37.4771"></svg:path></svg:g>`,
})
export class IconParkCoconutTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeIcon],svg[icon-park-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 13L4 25.4322L16 37"></svg:path><svg:path stroke-linejoin="round" d="M32 13L44 25.4322L32 37"></svg:path><svg:path d="M28 4L21 44"></svg:path></svg:g>`,
})
export class IconParkCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeBracketsIcon],svg[icon-park-code-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44"></svg:path><svg:path d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44"></svg:path></svg:g>`,
})
export class IconParkCodeBracketsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeComputerIcon],svg[icon-park-code-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V21"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M32 6L28 10L32 14"></svg:path><svg:path d="M38 6L42 10L38 14"></svg:path><svg:path d="M14 42L34 42"></svg:path></svg:g>`,
})
export class IconParkCodeComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeDownloadIcon],svg[icon-park-code-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 12L4 24.4322L16 36"></svg:path><svg:path stroke-linejoin="round" d="M32 12L44 24.4322L32 36"></svg:path><svg:path d="M24 17V31"></svg:path><svg:path stroke-linejoin="round" d="M18 25L24 31L30 25"></svg:path></svg:g>`,
})
export class IconParkCodeDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeLaptopIcon],svg[icon-park-code-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M22 9H11C9.34315 9 8 10.3431 8 12V33H40V22"></svg:path><svg:path fill="#2F88FF" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:path stroke-linecap="round" d="M33 7L29 11L33 15"></svg:path><svg:path stroke-linecap="round" d="M39 7L43 11L39 15"></svg:path></svg:g>`,
})
export class IconParkCodeLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeOneIcon],svg[icon-park-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 7L23 21L9 35"></svg:path><svg:path d="M17 41L39 41"></svg:path></svg:g>`,
})
export class IconParkCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCoffeeMachineIcon],svg[icon-park-coffee-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 42L37 42C38.6569 42 40 40.6569 40 39L40 9C40 7.34315 38.6569 6 37 6L17 6"></svg:path><svg:path fill="#2F88FF" d="M22 36C27.5228 36 32 31.5228 32 26H12C12 31.5228 16.4772 36 22 36Z"></svg:path><svg:path stroke-linecap="round" d="M16 18V20"></svg:path><svg:path stroke-linecap="round" d="M22 18V20"></svg:path><svg:path stroke-linecap="round" d="M28 18V20"></svg:path></svg:g>`,
})
export class IconParkCoffeeMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkColaIcon],svg[icon-park-cola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 37L33.2091 43.3997C33.0502 43.7643 32.6902 44 32.2925 44H15.7075C15.3098 44 14.9498 43.7643 14.7909 43.3997L12 37"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 11L14.7909 4.60027C14.9498 4.2357 15.3098 4 15.7075 4H32.2925C32.6902 4 33.0502 4.2357 33.2091 4.60027L36 11"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M12 12C12 10.8954 12.8954 10 14 10H34C35.1046 10 36 10.8954 36 12V36C36 37.1046 35.1046 38 34 38H14C12.8954 38 12 37.1046 12 36V12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M13 22.5L19.3961 21.4901C21.4051 21.1729 23.2457 20.1798 24.6138 18.6748V18.6748C26.4382 16.668 29.0754 15.5985 31.7823 15.7676L35.5 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12.5 32.5L18.053 32.2476C21.4281 32.0942 24.4704 30.167 26.0512 27.1811V27.1811C27.2938 24.834 29.4584 23.1111 32.0245 22.4268L35.5 21.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 12V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 16V36"></svg:path></svg:g>`,
})
export class IconParkColaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCollapseTextInputIcon],svg[icon-park-collapse-text-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 20H28V4"></svg:path><svg:path d="M4 28H20V44"></svg:path></svg:g>`,
})
export class IconParkCollapseTextInputIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCollectComputerIcon],svg[icon-park-collect-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V22"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M14 42L34 42"></svg:path><svg:path fill="#2F88FF" d="M33.3 6C31.4775 6 30 7.43473 30 9.20455C30 12.4091 33.9 15.3223 36 16C38.1 15.3223 42 12.4091 42 9.20455C42 7.43473 40.5225 6 38.7 6C37.5839 6 36.5972 6.53804 36 7.3616C35.4028 6.53804 34.4161 6 33.3 6Z"></svg:path></svg:g>`,
})
export class IconParkCollectComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCollectLaptopIcon],svg[icon-park-collect-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M21 9H11C9.34315 9 8 10.3431 8 12V33H40V23"></svg:path><svg:path fill="#2F88FF" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M32.3 7C30.4775 7 29 8.43473 29 10.2046C29 13.4091 32.9 16.3223 35 17C37.1 16.3223 41 13.4091 41 10.2046C41 8.43473 39.5225 7 37.7 7C36.5839 7 35.5972 7.53804 35 8.3616C34.4028 7.53804 33.4161 7 32.3 7Z"></svg:path></svg:g>`,
})
export class IconParkCollectLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCollectPictureIcon],svg[icon-park-collect-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 21C44 19.8954 43.1046 19 42 19C40.8954 19 40 19.8954 40 21H44ZM23 8C24.1046 8 25 7.10457 25 6C25 4.89543 24.1046 4 23 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 21V39H44V21H40ZM9 8H23V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.3 6C31.4775 6 30 7.43473 30 9.20455C30 12.4091 33.9 15.3223 36 16C38.1 15.3223 42 12.4091 42 9.20455C42 7.43473 40.5225 6 38.7 6C37.5839 6 36.5972 6.53804 36 7.3616C35.4028 6.53804 34.4161 6 33.3 6Z"></svg:path></svg:g>`,
})
export class IconParkCollectPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
