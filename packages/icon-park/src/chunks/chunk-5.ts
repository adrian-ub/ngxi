import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUnlockIcon],svg[icon-park-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="22" x="7" y="22.048" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 30V36"></svg:path></svg:g>`,
})
export class IconParkUnlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUnlockOneIcon],svg[icon-park-unlock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="30" r="14" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M31 12V11C31 7.13401 27.866 4 24 4V4C20.134 4 17 7.13401 17 11V17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 26L24 34"></svg:path></svg:g>`,
})
export class IconParkUnlockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUnorderedListIcon],svg[icon-park-unordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 18V27"></svg:path><svg:path d="M11 27H5"></svg:path><svg:path d="M11 12H5"></svg:path><svg:path d="M5 4.99994C5 4.99994 8 1.99992 10 4.99996C12 8 5 12 5 12"></svg:path><svg:path d="M5.00065 34.5001C5.00065 34.5001 7.00065 31.5001 10.0006 33.5C13.0006 35.5 10.0007 38 10.0007 38C10.0007 38 13.0006 40.5001 10.0006 42.5001C7.00064 44.5001 5.00064 41.5001 5.00064 41.5001"></svg:path><svg:path d="M10 38H8"></svg:path><svg:path d="M8 18L5 20"></svg:path><svg:path d="M20 24H42"></svg:path><svg:path d="M20 38H42"></svg:path><svg:path d="M20 10H42"></svg:path></svg:g>`,
})
export class IconParkUnorderedListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpIcon],svg[icon-park-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 30L25 18L37 30"></svg:path>`,
})
export class IconParkUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpAndDownIcon],svg[icon-park-up-and-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 36V44H44V12H36V20H28V28H20V36H12Z"></svg:path><svg:path d="M18 13L27 4"></svg:path><svg:path d="M21 4H27V10"></svg:path><svg:path d="M10 27H4V21"></svg:path><svg:path d="M13 18L4 27"></svg:path></svg:g>`,
})
export class IconParkUpAndDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpCIcon],svg[icon-park-up-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 27L24 18L15 27"></svg:path></svg:g>`,
})
export class IconParkUpCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpOneIcon],svg[icon-park-up-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M12 29L24 17L36 29H12Z"></svg:path>`,
})
export class IconParkUpOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpSmallIcon],svg[icon-park-up-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0083 12.1006V36.0001"></svg:path><svg:path d="M12 24L24 12L36 24"></svg:path></svg:g>`,
})
export class IconParkUpSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpSquareIcon],svg[icon-park-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M14 29L24 19L34 29"></svg:path></svg:g>`,
})
export class IconParkUpSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpTwoIcon],svg[icon-park-up-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 24L24 6L43 24H31V42H17V24H5Z"></svg:path>`,
})
export class IconParkUpTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpdateRotationIcon],svg[icon-park-update-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" d="M33.5424 27C32.2681 31.0571 28.4778 34 24.0002 34C19.5226 34 15.7323 31.0571 14.458 27V33"></svg:path><svg:path stroke="#fff" d="M33.5424 15V21C32.2681 16.9429 28.4778 14 24.0002 14C19.5226 14 15.7323 16.9429 14.458 21"></svg:path></svg:g>`,
})
export class IconParkUpdateRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadIcon],svg[icon-park-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipUpload0" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="#fff" d="M48 0H0V48H48V0Z"></svg:path></svg:mask><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" mask="url(#ipUpload0)"><svg:path d="M6 24.0083V42H42V24"></svg:path><svg:path d="M33 15L24 6L15 15"></svg:path><svg:path d="M23.9917 32V6"></svg:path></svg:g>`,
})
export class IconParkUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadComputerIcon],svg[icon-park-upload-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V24"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M14 42L34 42"></svg:path><svg:path d="M37 18L37 6"></svg:path><svg:path d="M32 11L37 6L42 11"></svg:path></svg:g>`,
})
export class IconParkUploadComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadLaptopIcon],svg[icon-park-upload-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M25 9H11C9.34315 9 8 10.3431 8 12V33H40V24"></svg:path><svg:path fill="#2F88FF" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:path stroke-linecap="round" d="M37 19L37 7"></svg:path><svg:path stroke-linecap="round" d="M32 12L37 7L42 12"></svg:path></svg:g>`,
})
export class IconParkUploadLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadLogsIcon],svg[icon-park-upload-logs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M24 43.9998H10C8.89543 43.9998 8 43.1043 8 41.9998V5.99976C8 4.89519 8.89543 3.99976 10 3.99976H38C39.1046 3.99976 40 4.89519 40 5.99976V23.9998"></svg:path><svg:path stroke-linejoin="round" d="M35.5 43.9998V30.9998"></svg:path><svg:path stroke-linejoin="round" d="M31 34.4998L32.5 32.9998L35.5 29.9998L38.5 32.9998L40 34.4998"></svg:path><svg:path d="M16 15.9998H32"></svg:path><svg:path d="M16 23.9998H24"></svg:path></svg:g>`,
})
export class IconParkUploadLogsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadOneIcon],svg[icon-park-upload-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.6777 20.271C7.27476 21.3181 4 25.2766 4 30C4 35.5228 8.47715 40 14 40C14.9474 40 15.864 39.8683 16.7325 39.6221"></svg:path><svg:path d="M36.0547 20.271C40.4577 21.3181 43.7324 25.2766 43.7324 30C43.7324 35.5228 39.2553 40 33.7324 40C32.785 40 31.8684 39.8683 30.9999 39.6221"></svg:path><svg:path d="M36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20"></svg:path><svg:path d="M17.0654 27.8812L23.9999 20.9238L31.1318 28.0002"></svg:path><svg:path d="M24 38.0001V24.4619"></svg:path></svg:g>`,
})
export class IconParkUploadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadPictureIcon],svg[icon-park-upload-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 24C44 22.8954 43.1046 22 42 22C40.8954 22 40 22.8954 40 24H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 24V39H44V24H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 18L37 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 11L37 6L42 11"></svg:path></svg:g>`,
})
export class IconParkUploadPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadThreeIcon],svg[icon-park-upload-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 28L24 20L16 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 36V20.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 14H32"></svg:path></svg:g>`,
})
export class IconParkUploadThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadTwoIcon],svg[icon-park-upload-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0079 41L23.9995 23"></svg:path><svg:path d="M40.5178 34.3161C43.8044 32.005 45.2136 27.8302 44.0001 24C42.7866 20.1698 39.0705 18.0714 35.0527 18.0745H32.7317C31.2144 12.1613 26.2082 7.79572 20.1435 7.0972C14.0787 6.39868 8.21121 9.5118 5.38931 14.9253C2.56741 20.3388 3.37545 26.9317 7.42115 31.5035"></svg:path><svg:path d="M30.3638 27.6359L23.9998 21.272L17.6358 27.6359"></svg:path></svg:g>`,
})
export class IconParkUploadTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadWebIcon],svg[icon-park-upload-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V23.0588"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 41L39 29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 34L39 29L44 34"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkUploadWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUpsideDownFaceIcon],svg[icon-park-upside-down-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 30L17 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 30L31 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 17C17 17 19 13 24 13C29 13 31 17 31 17"></svg:path></svg:g>`,
})
export class IconParkUpsideDownFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbIcon],svg[icon-park-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 22C14.2091 22 16 20.2091 16 18C16 15.7909 14.2091 14 12 14C9.79086 14 8 15.7909 8 18C8 20.2091 9.79086 22 12 22Z"></svg:path><svg:path fill="#2F88FF" d="M36 28C38.2091 28 40 26.2091 40 24C40 21.7909 38.2091 20 36 20C33.7909 20 32 21.7909 32 24C32 26.2091 33.7909 28 36 28Z"></svg:path><svg:path stroke-linecap="round" d="M19 9L24 4L29 9"></svg:path><svg:path stroke-linecap="round" d="M25 39L12 28.2632V22"></svg:path><svg:path stroke-linecap="round" d="M36 28V32.7895L24 41"></svg:path><svg:path stroke-linecap="round" d="M24 4V43"></svg:path><svg:path stroke-linecap="round" d="M21 44H27"></svg:path></svg:g>`,
})
export class IconParkUsbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbMemoryStickIcon],svg[icon-park-usb-memory-stick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 22C8 20.8954 8.89543 20 10 20H38C39.1046 20 40 20.8954 40 22V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V22Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M15 4H33V20H15V4Z"></svg:path><svg:path stroke="#fff" d="M21 10V12"></svg:path><svg:path stroke="#fff" d="M27 10V12"></svg:path></svg:g>`,
})
export class IconParkUsbMemoryStickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbMicroOneIcon],svg[icon-park-usb-micro-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 18C4 16.3431 5.34315 15 7 15H41C42.6569 15 44 16.3431 44 18V30C44 31.6569 42.6569 33 41 33H7C5.34315 33 4 31.6569 4 30V18Z"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M11 15H37V23H11V15Z"></svg:path><svg:path stroke="#fff" d="M21 23V21"></svg:path><svg:path stroke="#fff" d="M27 23V21"></svg:path><svg:path stroke="#fff" d="M32 23V21"></svg:path><svg:path stroke="#fff" d="M16 23V21"></svg:path><svg:path stroke="#000" d="M8 15L40 15"></svg:path></svg:g>`,
})
export class IconParkUsbMicroOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbMicroTwoIcon],svg[icon-park-usb-micro-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 18C4 16.3431 5.34315 15 7 15H41C42.6569 15 44 16.3431 44 18V24.1396C44 24.7019 43.842 25.2528 43.544 25.7296L39.8813 31.59C39.333 32.4671 38.3716 33 37.3373 33H10.6627C9.62837 33 8.66696 32.4671 8.11875 31.59L4.456 25.7296C4.15801 25.2528 4 24.7019 4 24.1396V18Z"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M11 15H37V23H11V15Z"></svg:path><svg:path stroke="#fff" d="M21 23V21"></svg:path><svg:path stroke="#fff" d="M27 23V21"></svg:path><svg:path stroke="#fff" d="M32 23V21"></svg:path><svg:path stroke="#fff" d="M16 23V21"></svg:path><svg:path stroke="#000" d="M8 15L40 15"></svg:path></svg:g>`,
})
export class IconParkUsbMicroTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbOneIcon],svg[icon-park-usb-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M42 21H6V42H42V21Z"></svg:path><svg:path stroke-linecap="round" d="M14 21V6H34V21"></svg:path><svg:path stroke-linecap="round" d="M20 12V14"></svg:path><svg:path stroke-linecap="round" d="M28 12V14"></svg:path></svg:g>`,
})
export class IconParkUsbOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbTypeCIcon],svg[icon-park-usb-type-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15 15H33C48 15 48 33 33 33H15C-1.23978e-05 33 -2.86102e-06 15 15 15Z"></svg:path><svg:path stroke="#fff" d="M21 27V21"></svg:path><svg:path stroke="#fff" d="M27 27V21"></svg:path><svg:path stroke="#fff" d="M33 27V21"></svg:path><svg:path stroke="#fff" d="M15 27V21"></svg:path><svg:path stroke="#fff" d="M36 24L12 24"></svg:path></svg:g>`,
})
export class IconParkUsbTypeCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUserIcon],svg[icon-park-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"></svg:path></svg:g>`,
})
export class IconParkUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUserBusinessIcon],svg[icon-park-user-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"></svg:path><svg:path fill="#2F88FF" d="M24 44L28 39L24 26L20 39L24 44Z"></svg:path></svg:g>`,
})
export class IconParkUserBusinessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUserPositioningIcon],svg[icon-park-user-positioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="16" r="6" fill="#2F88FF"></svg:circle><svg:path d="M36 36C36 29.3726 30.6274 24 24 24C17.3726 24 12 29.3726 12 36"></svg:path><svg:path d="M36 4H44V12"></svg:path><svg:path d="M12 4H4V12"></svg:path><svg:path d="M36 44H44V36"></svg:path><svg:path d="M12 44H4V36"></svg:path></svg:g>`,
})
export class IconParkUserPositioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUserToUserTransmissionIcon],svg[icon-park-user-to-user-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 18C17.866 18 21 14.866 21 11C21 7.13401 17.866 4 14 4C10.134 4 7 7.13401 7 11C7 14.866 10.134 18 14 18Z"></svg:path><svg:path fill="#2F88FF" d="M34 18C37.866 18 41 14.866 41 11C41 7.13401 37.866 4 34 4C30.134 4 27 7.13401 27 11C27 14.866 30.134 18 34 18Z"></svg:path><svg:path stroke-linecap="round" d="M4 44C4 43.1111 4 40.1111 4 35C4 29.4772 7.77023 25 12.4211 25C14.6667 25 16.3509 25 17.4737 25C21.5587 25 24.0001 29.0269 24.0001 29.0269"></svg:path><svg:path stroke-linecap="round" d="M44 44C44 43.1111 44 40.1111 44 35C44 29.4772 40.1849 25 35.4788 25C33.2064 25 31.5022 25 30.366 25C26.4048 25 23.9922 29.0269 24 29.0269"></svg:path><svg:path stroke-linecap="round" d="M11 40H38"></svg:path><svg:path stroke-linecap="round" d="M34.2954 36.2583L35.535 37.5055L38.0141 39.9998L35.535 42.5613L34.2954 43.8421"></svg:path><svg:path stroke-linecap="round" d="M14.3293 36.2321L13.0701 37.4857L10.5517 39.9928L13.0701 42.5415L14.3293 43.8159"></svg:path></svg:g>`,
})
export class IconParkUserToUserTransmissionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUterusIcon],svg[icon-park-uterus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M32.0002 18C31.0772 24 29.0002 29.5 24.5002 29.5C20.0002 29.5 18.5002 24.5 17.0002 18C15.5002 11.5 17.0002 6 24.5002 6C32.0002 6 32.9233 12 32.0002 18Z"></svg:path><svg:path stroke-linecap="round" d="M32.5 12.5C34.25 10.8682 36.0328 10.3296 38.8405 10.5043C43.052 10.7664 44 13.648 44 17.9564M44 17.9564C44 22.2648 42.3485 26.1825 39.0589 25.2961C35.7692 24.4097 36.2292 20.9096 37.7678 19.2686C39.3064 17.6276 41.9973 16.9589 44 17.9564Z"></svg:path><svg:path stroke-linecap="round" d="M16.5 12C14.7309 10.456 12.6403 10.3301 10.0869 10.5048C6.25675 10.7668 3.99999 13.6924 3.99999 18.0008M3.99999 18.0008C3.99999 22.3092 6.89652 26.1829 9.88829 25.2965C12.8801 24.4101 12.4618 20.9101 11.0625 19.2691C9.66321 17.6281 5.82131 17.0033 3.99999 18.0008Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 27V43"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 27V43"></svg:path></svg:g>`,
})
export class IconParkUterusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVacationIcon],svg[icon-park-vacation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11 14.999L5 15.999C6.62916 8.48478 11.3642 6.00624 16 5.99904C18.9968 5.99438 21.9521 7.0251 24 7.99963C26.0479 7.0251 29 5.99988 32 5.99962C36.6113 5.99922 41.3708 8.48478 43 15.999L37 14.999C37.5588 17.0992 38.7882 20.7915 37 23.999C34.0196 21.3261 27.1294 17.2902 24 14.9991C20.8706 17.2902 13.9804 21.3261 11 23.999C9.21176 20.7915 10.4412 17.0992 11 14.999Z"></svg:path><svg:path d="M24 15C23.2454 18.8889 22.1889 28.5333 24 36"></svg:path><svg:path fill="#2F88FF" d="M12 41.9992H36C31.2134 37.4146 29 36.0048 24 36C19 35.9952 13.892 39.3817 12 41.9992Z"></svg:path></svg:g>`,
})
export class IconParkVacationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVacuumCleanerIcon],svg[icon-park-vacuum-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M26 22.5C26 22.5 26 13 26 10C26 7 28 4 32 4C36 4 38 7 38 10C38 13 38 34 38 34"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M32.75 34H43.25L44 40H32L32.75 34Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 40H25.8864C25.9491 40 26 39.9491 26 39.8864V23.2546C26 15.9343 20.0657 10 12.7454 10V10C9.57228 10 7 12.5723 7 15.7454V29"></svg:path><svg:circle cx="10" cy="34" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10V29"></svg:path></svg:g>`,
})
export class IconParkVacuumCleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVegetableBasketIcon],svg[icon-park-vegetable-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 14H7.37783C5.58056 14 4.18661 15.5695 4.39881 17.3542L7.11944 40.2361C7.23907 41.2423 8.09222 42 9.10545 42H39.4734C40.5033 42 41.3648 41.2179 41.4641 40.1927L43.6816 17.2891C43.8522 15.5262 42.4666 14 40.6955 14H38"></svg:path><svg:path d="M5 22L43 22"></svg:path><svg:path d="M15 29H33"></svg:path><svg:path d="M17 36H31"></svg:path><svg:path fill="#2F88FF" d="M24 6C19.5817 6 16 12.9247 16 21.4667C16 21.6452 16.0016 21.823 16.0047 22H31.9953C31.9984 21.823 32 21.6452 32 21.4667C32 12.9247 28.4183 6 24 6Z"></svg:path></svg:g>`,
})
export class IconParkVegetableBasketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVegetablesIcon],svg[icon-park-vegetables-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 7.90249C33.5 7.5 35.3291 7.61106 36.4393 7.90249C38.9414 8.56028 40.7649 9.68991 41.8557 11.2615C43.1186 13.0795 43.3371 15.3991 42.508 18.1559C40.8094 23.7957 33.908 27.296 33.5 27.5"></svg:path><svg:path d="M27.2471 41.2702C27.7619 41.368 28.2851 41.4194 28.809 41.4214C30.2786 41.4214 31.5442 41.0058 32.5663 40.187C33.6786 39.3023 34.5 38 34.8325 36.2784C35.165 34.5569 34.6799 32.943 34.1525 31.3686C33.7799 30.2501 33.5347 28.5637 33.5 27.5"></svg:path><svg:path d="M13 26.5001C13 26.5001 7.19013 23.7937 5.49291 18.156C4.66304 15.3999 4.88161 13.0817 6.14446 11.2616C7.23662 9.69072 9.05804 8.56109 11.5601 7.9026C12.671 7.61117 13.7341 7.46338 14.7221 7.46338"></svg:path><svg:path d="M13.5 27C14 28 13.5675 29.7963 13.0402 31.3721C12.5128 32.9479 11.9688 34.5743 12.3595 36.2812C12.7501 37.9882 13.5127 39.3045 14.6236 40.1898C15.6485 41.0079 16.53 41.5 18.0003 41.5C18.5235 41.4979 20.0003 41 20.0003 41"></svg:path><svg:path d="M23.5 4C28.7466 4 33 6.64313 33 14.375C33 22.1076 23.5 32 23.5 32C23.5 32 14 22.1069 14 14.375C14 6.64241 18.2528 4 23.5 4Z"></svg:path><svg:path fill="#2F88FF" d="M23.9991 42.229C21.9892 42.2292 20.2806 41.5671 19.1309 40.5596C17.8028 39.3925 17.127 37.7334 17.127 35.6268C17.127 33.8706 18.0762 32.4059 18.9942 30.9876C19.6457 29.9801 20.5484 27.9977 20.5484 27.9977C20.5484 27.9977 21.0229 26.3606 20.9447 25.2978C20.8 23.3332 18.8929 21.8541 18.5834 20.8404C18.208 19.5796 18.2996 18.8122 18.8679 18.4278C19.0427 18.3077 19.713 18.2675 19.713 18.2675C19.713 18.2675 19.5867 16.4218 19.6658 15.8133C19.7609 15.0833 20.142 14.0415 21.0376 13.9648C21.6576 13.9116 22.1478 14.0043 22.4656 14.6718C22.5683 14.8876 22.6391 15.1492 22.7383 15.5107C23.0395 16.6424 23.521 17.9663 23.9949 19.0425C24.4695 17.9691 24.9518 16.6452 25.255 15.5114C25.3542 15.1499 25.4257 14.8883 25.5284 14.6718C25.8462 14.0043 26.3371 13.9125 26.9571 13.9661C27.7133 14.0316 28.2331 15.0847 28.3282 15.8133C28.4073 16.4218 28.392 17.2322 28.281 18.2675H28.3282C28.5433 18.2675 28.954 18.3063 29.1296 18.4271C29.6986 18.8115 29.7318 19.946 29.4134 20.8397C29 21.9999 27.2039 23.1328 27 24.9999C26.8714 26.1771 27.0948 26.8691 27.4511 27.9984C27.8469 29.2528 28.3511 29.9808 29.0047 30.9869C29.9227 32.4052 30.8719 33.872 30.8719 35.6268C30.8719 37.7327 30.1975 39.3925 28.868 40.5582C27.7155 41.5657 26.0094 42.2289 23.9991 42.229Z"></svg:path></svg:g>`,
})
export class IconParkVegetablesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticalSpacingBetweenItemsIcon],svg[icon-park-vertical-spacing-between-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 6V12H40V6"></svg:path><svg:path d="M14 24H34"></svg:path><svg:path stroke-linejoin="round" d="M8 42V36H40V42"></svg:path></svg:g>`,
})
export class IconParkVerticalSpacingBetweenItemsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticalTidyUpIcon],svg[icon-park-vertical-tidy-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="6" x="8" y="7"></svg:rect><svg:rect width="32" height="6" x="8" y="21"></svg:rect><svg:rect width="32" height="6" x="8" y="35"></svg:rect></svg:g>`,
})
export class IconParkVerticalTidyUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticalTimelineIcon],svg[icon-park-vertical-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M3.99999 5H44"></svg:path><svg:path stroke-linecap="round" d="M3.99999 43H44"></svg:path><svg:path stroke-linecap="round" d="M7.99999 36V43"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M12 28H3.99999V36H12V28Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M28 20H20V28H28V20Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M44 12H36V20H44V12Z"></svg:path><svg:path stroke-linecap="round" d="M40 20V43"></svg:path><svg:path stroke-linecap="round" d="M7.99999 12V13"></svg:path><svg:path stroke-linecap="round" d="M7.99999 20V21"></svg:path><svg:path stroke-linecap="round" d="M23 12V13"></svg:path><svg:path stroke-linecap="round" d="M24 28V43"></svg:path></svg:g>`,
})
export class IconParkVerticalTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticallyCenteredIcon],svg[icon-park-vertically-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7H42"></svg:path><svg:rect width="16" height="16" x="16" y="16" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:path d="M6 41H42"></svg:path></svg:g>`,
})
export class IconParkVerticallyCenteredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVestIcon],svg[icon-park-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 4H31L24 24V44H40V19L36 13V4Z"></svg:path><svg:path d="M12 4H17L24 24V44H8V19L12 13V4Z"></svg:path></svg:g>`,
})
export class IconParkVestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVialIcon],svg[icon-park-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M30 33C30 26.5556 30 16.8889 30 4H18C18 16.8749 18 26.531 18 32.9684"></svg:path><svg:path stroke-linecap="round" d="M30 14H25"></svg:path><svg:path stroke-linecap="round" d="M30 20H25"></svg:path><svg:path fill="#2F88FF" d="M18 33C18 34.0441 18 35.6103 18 37.6985C18 41.1787 20.6863 44 24 44C27.3137 44 30 41.1787 30 37.6985C30 35.6386 30 34.0937 30 33.0638L18 33Z"></svg:path></svg:g>`,
})
export class IconParkVialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkViciaFabaIcon],svg[icon-park-vicia-faba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M3.99989 31.0001C4.00014 24.5001 8.0004 22.0374 11.0001 21.0187C13.9997 20.0001 16.0003 20.0001 18.9999 17.0001C21.9995 14.0001 22.0004 8.00008 28 6.00008C33.9995 4.00007 41.091 7.00011 42.9997 14.0001C44.9084 21.0001 39.5006 30.0001 37.0006 33.0001C34.5006 36.0001 29.4987 41.0001 20.9996 42.0001C12.5006 43.0001 3.99963 37.5001 3.99989 31.0001Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 21.0435C19 30 29 21.0435 22 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11.0005 21.0187C14.0002 20.0001 16.0008 20.0001 19.0004 17.0001C22 14.0001 22.0009 8.00007 28.0004 6.00007"></svg:path></svg:g>`,
})
export class IconParkViciaFabaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVideoIcon],svg[icon-park-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 8V40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 8V40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 18H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 30H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 18H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 16V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 8H15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 40H15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 8H39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 40H39"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 30H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 28V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 28V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 16V20"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M21 19L29 24L21 29V19Z"></svg:path></svg:g>`,
})
export class IconParkVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVideoConferenceIcon],svg[icon-park-video-conference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H34C35.1046 8 36 8.89543 36 10V19L44 13V36L36 30V38C36 39.1046 35.1046 40 34 40H6C4.89543 40 4 39.1046 4 38V10Z"></svg:path><svg:path stroke="#fff" d="M10 16V20"></svg:path><svg:path stroke="#fff" d="M15 14V22"></svg:path><svg:path stroke="#fff" d="M20 16V20"></svg:path></svg:g>`,
})
export class IconParkVideoConferenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVideoFileIcon],svg[icon-park-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M14 21H27.4928V24.5L34 22V33L27.4928 30.5V34H14V21Z"></svg:path></svg:g>`,
})
export class IconParkVideoFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVideoOneIcon],svg[icon-park-video-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H34C35.1046 8 36 8.89543 36 10V19L44 13V36L36 30V38C36 39.1046 35.1046 40 34 40H6C4.89543 40 4 39.1046 4 38V10Z"></svg:path><svg:circle cx="17" cy="21" r="5" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkVideoOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVideoTwoIcon],svg[icon-park-video-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#2F88FF" d="M20.5 28V21.9378L25.75 24.9689L31 28L25.75 31.0311L20.5 34.0622V28Z"></svg:path><svg:path d="M6 15H42"></svg:path><svg:path d="M33 6L27 15"></svg:path><svg:path d="M21 6L15 15"></svg:path></svg:g>`,
})
export class IconParkVideoTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVideocameraIcon],svg[icon-park-videocamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="32" height="26" x="4" y="11" rx="2"></svg:rect><svg:circle cx="20" cy="24" r="6" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 29L44 33V15L36 19"></svg:path></svg:g>`,
})
export class IconParkVideocameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVideocameraOneIcon],svg[icon-park-videocamera-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="31" height="20" x="4" y="21" rx="2"></svg:rect><svg:rect width="9" height="8" x="20" y="27" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:circle cx="27" cy="13" r="5" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13" cy="13" r="5" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 35L44 39V23L35 27"></svg:path></svg:g>`,
})
export class IconParkVideocameraOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVienchartsIcon],svg[icon-park-viencharts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="17" r="12"></svg:circle><svg:circle cx="16" cy="31" r="12"></svg:circle><svg:circle cx="32" cy="31" r="12"></svg:circle></svg:g>`,
})
export class IconParkVienchartsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkViewGridCardIcon],svg[icon-park-view-grid-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="8" height="8" x="13" y="13" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="27" y="13" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="13" y="27" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="27" y="27" fill="#43CCF8" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkViewGridCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkViewGridDetailIcon],svg[icon-park-view-grid-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="8" height="8" x="13" y="13" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M27 13L35 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 20L35 20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 28L35 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 35H35"></svg:path></svg:g>`,
})
export class IconParkViewGridDetailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkViewGridListIcon],svg[icon-park-view-grid-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="8" height="8" x="13" y="13" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="13" y="27" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M27 28L35 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 35H35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 13L35 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 20L35 20"></svg:path></svg:g>`,
})
export class IconParkViewGridListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkViewListIcon],svg[icon-park-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 14H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 24H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 34H33"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M15 16C16.1046 16 17 15.1046 17 14C17 12.8954 16.1046 12 15 12C13.8954 12 13 12.8954 13 14C13 15.1046 13.8954 16 15 16Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M15 36C16.1046 36 17 35.1046 17 34C17 32.8954 16.1046 32 15 32C13.8954 32 13 32.8954 13 34C13 35.1046 13.8954 36 15 36Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkViewListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkViewfinderIcon],svg[icon-park-viewfinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 33V18H19L21 15H27L29 18H35V33H13Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-miterlimit="10" d="M24 28C25.6569 28 27 26.6569 27 25C27 23.3431 25.6569 22 24 22C22.3431 22 21 23.3431 21 25C21 26.6569 22.3431 28 24 28Z"></svg:path></svg:g>`,
})
export class IconParkViewfinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVigoIcon],svg[icon-park-vigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="3.833"><svg:path fill="#2F88FF" stroke="#000" d="M24 44.125C33.5269 44.125 41.25 36.5094 41.25 27.1152C41.25 24.8089 40.9348 22.6141 40.2603 20.5237C39.8709 19.3169 39.5558 18.7406 39.093 17.6297C38.6302 16.5188 38.0145 15.5808 37.3134 14.6373C36.6123 13.6939 35.2464 11.8389 34.3008 11.4664C34.3008 12.9285 31.4285 18.0347 30.3258 18.2913C29.2231 18.5479 31.1407 12.9224 28.6979 9.07446C26.255 5.22647 22.3053 2.70049 22.3053 4.42961C22.3053 6.15873 21.2123 9.0621 20.1113 10.5015C19.0104 11.9408 17.2251 13.1774 15.9817 13.7582C14.7383 14.339 15.1885 10.8503 14.2551 11.4664C13.3144 12.0874 11.9773 13.8173 11.2742 14.903C8.81281 18.7041 6.75 22.418 6.75 27.1152C6.75 36.5094 14.4731 44.125 24 44.125Z"></svg:path><svg:path fill="#000" stroke="#fff" d="M19.2959 23.7326V32.4698C19.2959 33.5069 20.1366 34.3477 21.1737 34.3477C21.5217 34.3477 21.8627 34.251 22.1589 34.0685L30.5444 28.9005C30.9859 28.6285 31.1232 28.05 30.8511 27.6086C30.7742 27.4838 30.6692 27.3788 30.5444 27.3019L22.1589 22.134C21.2761 21.5898 20.1192 21.8645 19.5751 22.7474C19.3926 23.0436 19.2959 23.3846 19.2959 23.7326Z"></svg:path></svg:g>`,
})
export class IconParkVigoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVipIcon],svg[icon-park-vip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 4H4L15 44H23L12 4Z"></svg:path><svg:path stroke-linecap="round" d="M23 44L44 4"></svg:path></svg:g>`,
})
export class IconParkVipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVipOneIcon],svg[icon-park-vip-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4.50326 16.3661L12.5158 7.67177C12.909 7.2452 13.4807 7 14.0821 7H33.9179C34.5193 7 35.091 7.2452 35.4842 7.67177L43.4967 16.3661C44.1809 17.1084 44.1659 18.2125 43.4618 18.9383L24.7499 40.1499C24.3518 40.6012 23.6482 40.6012 23.2501 40.1499L4.5382 18.9383C3.83415 18.2125 3.81915 17.1084 4.50326 16.3661Z"></svg:path><svg:path stroke="#fff" d="M16 20L24 29L32 20"></svg:path></svg:g>`,
})
export class IconParkVipOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVirgoIcon],svg[icon-park-virgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 17C34 17 41.0879 16.8877 41.9586 23.6392C42.417 27.1934 39.2376 32.6747 24 43.0005"></svg:path><svg:path fill="#000" d="M16 11C16 12.1046 16.8954 13 18 13C19.1046 13 20 12.1046 20 11H16ZM4 11C4 12.1046 4.89543 13 6 13C7.10457 13 8 12.1046 8 11H4ZM8 11C8 8.79086 9.79086 7 12 7V3C7.58172 3 4 6.58172 4 11H8ZM12 7C14.2091 7 16 8.79086 16 11H20C20 6.58172 16.4183 3 12 3V7Z"></svg:path><svg:path fill="#000" d="M28 11C28 12.1046 28.8954 13 30 13C31.1046 13 32 12.1046 32 11H28ZM16 11C16 12.1046 16.8954 13 18 13C19.1046 13 20 12.1046 20 11H16ZM20 11C20 8.79086 21.7909 7 24 7V3C19.5817 3 16 6.58172 16 11H20ZM24 7C26.2091 7 28 8.79086 28 11H32C32 6.58172 28.4183 3 24 3V7Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 11V29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 11V29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M30 11V29C30 34 32.5 39 42 39"></svg:path></svg:g>`,
})
export class IconParkVirgoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVirtualRealityGlassesIcon],svg[icon-park-virtual-reality-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5 16H43C43.5523 16 44 16.4477 44 17V39C44 39.5523 43.5523 40 43 40H30L24.0083 34.0013L18 40H5C4.44772 40 4 39.5523 4 39V17C4 16.4477 4.44772 16 5 16Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 32C16.2091 32 18 30.2091 18 28C18 25.7909 16.2091 24 14 24C11.7909 24 10 25.7909 10 28C10 30.2091 11.7909 32 14 32Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 32C36.2091 32 38 30.2091 38 28C38 25.7909 36.2091 24 34 24C31.7909 24 30 25.7909 30 28C30 30.2091 31.7909 32 34 32Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M6 10H42H6Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 10H42"></svg:path></svg:g>`,
})
export class IconParkVirtualRealityGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVoiceIcon],svg[icon-park-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="27" x="17" y="4" fill="#2F88FF" rx="7"></svg:rect><svg:path stroke-linecap="round" d="M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23"></svg:path><svg:path stroke-linecap="round" d="M24 38V44"></svg:path></svg:g>`,
})
export class IconParkVoiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVoiceInputIcon],svg[icon-park-voice-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 30C4 36.6274 9.37258 42 16 42C22.6274 42 26 38 27 35L28.5385 30L35 9L44 42"></svg:path><svg:path d="M40.7274 30H28.5386"></svg:path><svg:path fill="#2F88FF" d="M22 15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15V30C10 33.3137 12.6863 36 16 36C19.3137 36 22 33.3137 22 30V15Z"></svg:path></svg:g>`,
})
export class IconParkVoiceInputIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVoiceMessageIcon],svg[icon-park-voice-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#fff" d="M17 25.8994C18.1046 25.8994 19 25.004 19 23.8994C19 22.7948 18.1046 21.8994 17 21.8994C15.8954 21.8994 15 22.7948 15 23.8994C15 25.004 15.8954 25.8994 17 25.8994Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21.9497 28.8492C23.2165 27.5825 24 25.8325 24 23.8995C24 21.9665 23.2165 20.2165 21.9497 18.9497"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26.8994 33.799C29.4329 31.2655 30.9999 27.7655 30.9999 23.8995C30.9999 20.0335 29.4329 16.5335 26.8994 14"></svg:path></svg:g>`,
})
export class IconParkVoiceMessageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVoiceOffIcon],svg[icon-park-voice-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 24V11C31 7.13401 27.866 4 24 4C20.134 4 17 7.13401 17 11V24C17 27.866 20.134 31 24 31C27.866 31 31 27.866 31 24Z"></svg:path><svg:path stroke-linecap="round" d="M9 23C9 31.2843 15.7157 38 24 38C25.7532 38 27.4361 37.6992 29 37.1465M39 23C39 25.1333 38.5547 27.1626 37.7519 29"></svg:path><svg:path stroke-linecap="round" d="M24 38V44"></svg:path><svg:path stroke-linecap="round" d="M42 42L6 6"></svg:path></svg:g>`,
})
export class IconParkVoiceOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVoiceOneIcon],svg[icon-park-voice-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 22V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 22V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 14V34"></svg:path></svg:g>`,
})
export class IconParkVoiceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVoicemailIcon],svg[icon-park-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11 31C14.866 31 18 27.866 18 24C18 20.134 14.866 17 11 17C7.13401 17 4 20.134 4 24C4 27.866 7.13401 31 11 31Z"></svg:path><svg:path fill="#2F88FF" d="M37 31C40.866 31 44 27.866 44 24C44 20.134 40.866 17 37 17C33.134 17 30 20.134 30 24C30 27.866 33.134 31 37 31Z"></svg:path><svg:path stroke-linecap="round" d="M12 31H36"></svg:path></svg:g>`,
})
export class IconParkVoicemailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVolkswagenIcon],svg[icon-park-volkswagen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M7 14L16 37L22 26H26L32 37L41 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 6L22 19H26L32 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24C44 18.0265 41.3812 12.6647 37.2291 9C33.7035 5.88818 29.0722 4 24 4C18.9278 4 14.2965 5.88818 10.7709 9C6.61877 12.6647 4 18.0265 4 24"></svg:path></svg:g>`,
})
export class IconParkVolkswagenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVolleyballIcon],svg[icon-park-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M31.81 42.4054C41.9782 38.0865 46.7173 26.3494 42.4081 16.192C38.0989 6.0345 26.351 1.27569 16.1928 5.59461C6.03464 9.91353 1.2755 21.6506 5.59472 31.808C9.91394 41.9655 21.6518 46.7243 31.81 42.4054Z"></svg:path><svg:path stroke-linecap="round" d="M15.9996 6C14.5059 13.0103 17.9367 20.1966 23.9996 24"></svg:path><svg:path stroke-linecap="round" d="M12 40C18.97 37.74 23.74 31.32 24 24"></svg:path><svg:path stroke-linecap="round" d="M44 25.0001C38.55 20.3276 29.5 20.4033 24 24.0001"></svg:path><svg:path d="M17 16C17 16 28.56 7.50998 41 14"></svg:path><svg:path d="M20 33C20 33 7.59 28.02 7 14"></svg:path><svg:path d="M33.9998 22C33.9998 22 35.5597 36.5 23.7197 44.03"></svg:path></svg:g>`,
})
export class IconParkVolleyballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVolumeDownIcon],svg[icon-park-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" d="M32 24H44"></svg:path></svg:g>`,
})
export class IconParkVolumeDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVolumeMuteIcon],svg[icon-park-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipVolumeMute0" width="13" height="13" x="30" y="18" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:rect width="13" height="13" x="30" y="18" fill="#fff"></svg:rect></svg:mask><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:g stroke-linecap="round" mask="url(#ipVolumeMute0)"><svg:path d="M40.7348 20.2858L32.2495 28.7711"></svg:path><svg:path d="M32.2496 20.2858L40.7349 28.7711"></svg:path></svg:g><svg:path fill="#2F88FF" d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"></svg:path></svg:g>`,
})
export class IconParkVolumeMuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVolumeNoticeIcon],svg[icon-park-volume-notice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33"></svg:path><svg:path stroke-linecap="round" d="M34.2359 41.1857C40.0836 37.6953 44 31.305 44 24C44 16.8085 40.2043 10.5035 34.507 6.97906"></svg:path></svg:g>`,
})
export class IconParkVolumeNoticeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVolumeSmallIcon],svg[icon-park-volume-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33"></svg:path></svg:g>`,
})
export class IconParkVolumeSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVolumeUpIcon],svg[icon-park-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" d="M32 24H44"></svg:path><svg:path stroke-linecap="round" d="M38 18V30"></svg:path></svg:g>`,
})
export class IconParkVolumeUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkVrGlassesIcon],svg[icon-park-vr-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path fill="#2F88FF" stroke="#000" d="M2 12H46V36H30L24 30L18 36H2V12Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M13 28C15.2091 28 17 26.2091 17 24C17 21.7909 15.2091 20 13 20C10.7909 20 9 21.7909 9 24C9 26.2091 10.7909 28 13 28Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24C31 26.2091 32.7909 28 35 28Z"></svg:path></svg:g>`,
})
export class IconParkVrGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaistlineIcon],svg[icon-park-waistline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 31C16.0556 32.5092 26.2 34.6222 35 31"></svg:path><svg:circle cx="24" cy="25.412" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 5C11.8558 8.27796 14.971 15.2575 15 22C15.0089 24.0646 14.6814 26.107 13.9995 28.0141C12.1815 33.0986 9.4545 36.0423 9 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 5C36.1442 8.27796 33.029 15.2575 33 22C32.9911 24.0646 33.3186 26.107 34.0005 28.0141C35.8185 33.0986 38.5455 36.0423 39 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 18C8 18 9 20 9 22C9 23.6102 8 26 8 26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 18C40 18 39 20 39 22C39 23.6102 40 26 40 26"></svg:path></svg:g>`,
})
export class IconParkWaistlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWalletIcon],svg[icon-park-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17.982 11.9689L31.7846 4L36.397 11.9889L17.982 11.9689Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 16.5V40.5"></svg:path></svg:g>`,
})
export class IconParkWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWalletOneIcon],svg[icon-park-wallet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="26" x="5" y="13" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="18" height="11" x="25" y="20" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 18L43 33"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 13C32 8 28.5 7 27 7C23.6667 7 16.1 7 12.5 7C8.9 7 8 9.86567 8 11.2985V13"></svg:path><svg:circle cx="33.5" cy="25.5" r="1.5" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkWalletOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWalletThreeIcon],svg[icon-park-wallet-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M39 16V9C39 7.34315 37.6569 6 36 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34314 42 9 42H36C37.6569 42 39 40.6569 39 39V32"></svg:path><svg:rect width="20" height="16" x="22" y="16" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 30 24)"></svg:circle></svg:g>`,
})
export class IconParkWalletThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWalletTwoIcon],svg[icon-park-wallet-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 8H44V16C44 16 34 18 34 24C34 30 44 32 44 32V40H4V8Z"></svg:path><svg:path stroke-linecap="round" d="M44 24H42"></svg:path></svg:g>`,
})
export class IconParkWalletTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWarehousingIcon],svg[icon-park-warehousing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24L18 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 18L18 24L24 30"></svg:path><svg:circle cx="38" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M40.706 13C39.9214 11.8109 39.0133 10.7105 38 9.71713C34.3925 6.18064 29.4509 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C29.4509 44 34.3925 41.8194 38 38.2829C39.0133 37.2895 39.9214 36.1891 40.706 35"></svg:path></svg:g>`,
})
export class IconParkWarehousingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWashingMachineIcon],svg[icon-park-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8.778" y="4" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8.77783 15.5H40.7778"></svg:path><svg:circle cx="28.778" cy="10" r="2" fill="#000"></svg:circle><svg:circle cx="34.778" cy="10" r="2" fill="#000"></svg:circle><svg:circle cx="24.778" cy="30" r="7" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkWashingMachineIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWashingMachineOneIcon],svg[icon-park-washing-machine-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M8 12C8 13.1046 8.89543 14 10 14H38C39.1046 14 40 13.1046 40 12V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V12Z"></svg:path><svg:circle cx="14" cy="9" r="2" fill="#fff"></svg:circle><svg:circle cx="20" cy="9" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="29" r="7" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkWashingMachineOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWatchIcon],svg[icon-park-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34.9562 31L30.9998 44H16.9998L13.0435 31"></svg:path><svg:path stroke="#000" d="M13.0435 17L16.9998 4H30.9998L34.9562 17"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M37 24C37 26.5773 36.25 28.9794 34.9564 31C32.6462 34.6083 28.6024 37 24 37C19.3976 37 15.3538 34.6083 13.0436 31C11.75 28.9794 11 26.5773 11 24C11 21.4227 11.75 19.0206 13.0436 17C15.3538 13.3917 19.3976 11 24 11C28.6024 11 32.6462 13.3917 34.9564 17C36.25 19.0206 37 21.4227 37 24Z"></svg:path><svg:path stroke="#fff" d="M24 17V24L28 28"></svg:path></svg:g>`,
})
export class IconParkWatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWatchOneIcon],svg[icon-park-watch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M19 14V6C19 4.89543 19.8954 4 21 4H27C28.1046 4 29 4.89543 29 6V14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M29 34V42C29 43.1046 28.1046 44 27 44H21C19.8954 44 19 43.1046 19 42V34"></svg:path><svg:circle cx="24" cy="24" r="11" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 25L25 25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M25 21V25"></svg:path></svg:g>`,
})
export class IconParkWatchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterIcon],svg[icon-park-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 29C11.7614 29 14 26.7614 14 24C14 26.7614 16.2386 29 19 29C21.7614 29 24 26.7614 24 24C24 26.7614 26.2386 29 29 29C31.7614 29 34 26.7614 34 24C34 26.7614 36.2386 29 39 29C41.7614 29 44 26.7614 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 26.7614 6.23858 29 9 29Z"></svg:path><svg:path d="M28 13C28 15.2091 26.2091 17 24 17C21.7909 17 20 15.2091 20 13C20 10.7909 24 4 24 4C24 4 28 10.7909 28 13Z"></svg:path></svg:g>`,
})
export class IconParkWaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterLevelIcon],svg[icon-park-water-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44C32.2843 44 39 37.2843 39 29C39 15 24 4 24 4C24 4 9 15 9 29C9 37.2843 15.7157 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M9 29.0001C9 37.2844 15.7157 44.0001 24 44.0001C32.2843 44.0001 39 37.2844 39 29.0001C39 29.0001 30 32.0001 24 29.0001C18 26.0001 9 29.0001 9 29.0001Z"></svg:path></svg:g>`,
})
export class IconParkWaterLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterNoIcon],svg[icon-park-water-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9 29C11.7614 29 14 26.7614 14 24C14 26.7614 16.2386 29 19 29C21.7614 29 24 26.7614 24 24C24 26.7614 26.2386 29 29 29C31.7614 29 34 26.7614 34 24C34 26.7614 36.2386 29 39 29C41.7614 29 44 26.7614 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 26.7614 6.23858 29 9 29Z"></svg:path><svg:path d="M19 5L29 15"></svg:path><svg:path d="M29 5L19 15"></svg:path></svg:g>`,
})
export class IconParkWaterNoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterRateIcon],svg[icon-park-water-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C32.8366 44 40 37.4876 40 29.4545C40 21.5758 34.6667 13.0909 24 4C13.3333 13.0909 8 21.5758 8 29.4545C8 37.4878 15.1634 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.8572 19L24 24.3684L29.1429 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 26.158H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 31.5264H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 26.158V36.0001"></svg:path></svg:g>`,
})
export class IconParkWaterRateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterRateTwoIcon],svg[icon-park-water-rate-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C32.8366 44 40 36.8363 40 28C40 15 24 4 24 4C24 4 8 15 8 28C8 36.8366 15.1634 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 20L20 28H28L24 36"></svg:path></svg:g>`,
})
export class IconParkWaterRateTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterfallsHIcon],svg[icon-park-waterfalls-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 6H6V17H20V6Z"></svg:path><svg:path d="M42 31H28V42H42V31Z"></svg:path><svg:path d="M42 6H28V23H42V6Z"></svg:path><svg:path d="M20 25H6V42H20V25Z"></svg:path></svg:g>`,
})
export class IconParkWaterfallsHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterfallsVIcon],svg[icon-park-waterfalls-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 20L23 6L6 6L6 20L23 20Z"></svg:path><svg:path d="M42 42V28L25 28L25 42H42Z"></svg:path><svg:path d="M31 6V20H42V6H31Z"></svg:path><svg:path d="M6 28L6 42H17V28H6Z"></svg:path></svg:g>`,
})
export class IconParkWaterfallsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWatermelonIcon],svg[icon-park-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23 34C34.0457 34 43 25.0457 43 14H3C3 25.0457 11.9543 34 23 34Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 23V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16.6358 20.3638L14.5145 22.4851"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29.3643 20.3642L31.4856 22.4855"></svg:path></svg:g>`,
})
export class IconParkWatermelonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWatermelonOneIcon],svg[icon-park-watermelon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4L41 33.92C41 33.92 36.0457 38 24 38C11.9543 38 7 33.92 7 33.92L24 4Z"></svg:path><svg:circle cx="24" cy="17" r="2" fill="#fff"></svg:circle><svg:circle cx="27" cy="23" r="2" fill="#fff"></svg:circle><svg:circle cx="21" cy="23" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M41 39.9199C41 39.9199 36.0457 43.9999 24 43.9999C11.9543 43.9999 7 39.9199 7 39.9199"></svg:path></svg:g>`,
})
export class IconParkWatermelonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterpoloIcon],svg[icon-park-waterpolo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M4 34L6.5 35.3514C8.1 36.2162 9.9 36.2162 11.5 35.3514C13.1 34.4865 14.9 34.4865 16.5 35.3514C18.1 36.2162 19.9 36.2162 21.5 35.3514C23.1 34.4865 24.9 34.4865 26.5 35.3514C28.1 36.2162 29.9 36.2162 31.5 35.3514C33.1 34.4865 34.9 34.4865 36.5 35.3514C38.1 36.2162 39.9 36.2162 41.5 35.3514L44 34"></svg:path><svg:path d="M4 40L6.5 41.3514C8.1 42.2162 9.9 42.2162 11.5 41.3514C13.1 40.4865 14.9 40.4865 16.5 41.3514C18.1 42.2162 19.9 42.2162 21.5 41.3514C23.1 40.4865 24.9 40.4865 26.5 41.3514C28.1 42.2162 29.9 42.2162 31.5 41.3514C33.1 40.4865 34.9 40.4865 36.5 41.3514C38.1 42.2162 39.9 42.2162 41.5 41.3514L44 40"></svg:path><svg:path d="M43.5877 28C44.3774 24.171 44.0475 20.0621 42.398 16.1932C38.0894 6.02588 26.343 1.27715 16.1861 5.596C7.28884 9.37498 2.5503 18.8325 4.38973 27.94"></svg:path><svg:path d="M16 6C14.47 13.17 17.7899 20.11 23.9999 24"></svg:path><svg:path d="M23.3896 28C23.7396 26.71 23.9496 25.37 23.9996 24"></svg:path><svg:path d="M44 26.0002C38.55 21.0902 30.47 20.5602 24 24.0002"></svg:path><svg:path d="M18 16C18 16 28.56 7.50998 41 14"></svg:path><svg:path d="M13 28C10.01 24.73 7.26 20.29 7 14"></svg:path><svg:path d="M34.3097 22.0898C34.3097 22.0898 34.5297 24.5898 33.9297 28.0398"></svg:path></svg:g>`,
})
export class IconParkWaterpoloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterpoloOneIcon],svg[icon-park-waterpolo-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M4 35L6.5 36.3514C8.1 37.2162 9.9 37.2162 11.5 36.3514C13.1 35.4865 14.9 35.4865 16.5 36.3514C18.1 37.2162 19.9 37.2162 21.5 36.3514C23.1 35.4865 24.9 35.4865 26.5 36.3514C28.1 37.2162 29.9 37.2162 31.5 36.3514C33.1 35.4865 34.9 35.4865 36.5 36.3514C38.1 37.2162 39.9 37.2162 41.5 36.3514L44 35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M4 41L6.5 42.3514C8.1 43.2162 9.9 43.2162 11.5 42.3514C13.1 41.4865 14.9 41.4865 16.5 42.3514C18.1 43.2162 19.9 43.2162 21.5 42.3514C23.1 41.4865 24.9 41.4865 26.5 42.3514C28.1 43.2162 29.9 43.2162 31.5 42.3514C33.1 41.4865 34.9 41.4865 36.5 42.3514C38.1 43.2162 39.9 43.2162 41.5 42.3514L44 41"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-miterlimit="2" stroke-width="4" d="M25 18C27.7614 18 30 15.7614 30 13C30 10.2386 27.7614 8 25 8C22.2386 8 20 10.2386 20 13C20 15.7614 22.2386 18 25 18Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M25 29L24 25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M4 11L11 22L24 24.93H42"></svg:path><svg:path fill="#000" d="M11 10C12.6569 10 14 8.65685 14 7C14 5.34315 12.6569 4 11 4C9.34315 4 8 5.34315 8 7C8 8.65685 9.34315 10 11 10Z"></svg:path></svg:g>`,
})
export class IconParkWaterpoloOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWavesIcon],svg[icon-park-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 23.3548H11L17.8889 4L28.8889 44L37 23.3548H46"></svg:path>`,
})
export class IconParkWavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWavesLeftIcon],svg[icon-park-waves-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24 17V31"></svg:path><svg:path d="M33 11V37"></svg:path><svg:path d="M6 17V31"></svg:path><svg:path d="M42 18V30"></svg:path><svg:path d="M15 4V44"></svg:path></svg:g>`,
})
export class IconParkWavesLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWavesRightIcon],svg[icon-park-waves-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24 11V37"></svg:path><svg:path d="M33 4V44"></svg:path><svg:path d="M6 11V37"></svg:path><svg:path d="M42 15V33"></svg:path><svg:path d="M15 18V30"></svg:path></svg:g>`,
})
export class IconParkWavesRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWearyFaceIcon],svg[icon-park-weary-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 29C29 29 31 33 31 33H17C17 33 19 29 24 29Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 18L15 20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 18L33 20"></svg:path></svg:g>`,
})
export class IconParkWearyFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWebPageIcon],svg[icon-park-web-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="32" x="4" y="8" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkWebPageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWebcamIcon],svg[icon-park-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7.82507 29.7656C11.4617 34.7565 17.352 38.0001 24 38.0001C30.648 38.0001 36.5383 34.7565 40.1749 29.7656C43.7911 33.5078 46 38.5077 46 44.0001H2C2 38.5077 4.20894 33.5078 7.82507 29.7656Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 30C31.1797 30 37 24.1797 37 17C37 9.8203 31.1797 4 24 4C16.8203 4 11 9.8203 11 17C11 24.1797 16.8203 30 24 30Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z"></svg:path></svg:g>`,
})
export class IconParkWebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWechatIcon],svg[icon-park-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516"></svg:path><svg:path fill="#fff" d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z"></svg:path><svg:path fill="#fff" d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M42.0024 35.9728L43 42L38.7618 39.9293" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.0024 35.9728L43 42L38.7618 39.9293"></svg:path><svg:path fill="#fff" d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z"></svg:path><svg:path fill="#fff" d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z"></svg:path></svg:g>`,
})
export class IconParkWechatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeiboIcon],svg[icon-park-weibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4.159" d="M12.5618 16.4109C9.21763 19.6608 2.16324 29.146 7.36253 35.9317C12.5618 42.7174 27.2821 40.0998 33.359 35.3193C39.4358 30.5388 38.836 27.5848 37.5184 26.2833C36.2009 24.9818 32.3556 26.297 31.2793 24.526C30.203 22.7551 33.1957 18.3311 30.6452 16.9312C28.0948 15.5313 23.6907 20.5811 21.7015 19.269C19.7122 17.9568 23.8906 13.6729 21.7015 12.4384C19.5123 11.204 15.906 13.161 12.5618 16.4109Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4.159" d="M43.3787 16.5159C43.1435 13.3848 41.799 10.5632 39.7372 8.44277C37.7247 6.37311 35.0287 4.9715 32.0137 4.60229"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4.159" d="M37.2919 16.9313C37.1627 15.2916 36.4247 13.8139 35.2928 12.7034C34.188 11.6195 32.7079 10.8855 31.0527 10.6921"></svg:path><svg:path fill="#fff" d="M25 30C25 32.2091 22.3137 34 19 34C15.6863 34 13 32.2091 13 30C13 27.7909 15.6863 26 19 26C22.3137 26 25 27.7909 25 30Z"></svg:path></svg:g>`,
})
export class IconParkWeiboIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeightIcon],svg[icon-park-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M12 19.0537C15.3249 15.0537 19.3249 13.0537 24 13.0537C28.6751 13.0537 32.6751 15.0537 36 19.0537"></svg:path><svg:path fill="#fff" d="M24 31C25.6569 31 27 29.6569 27 28C27 26.3431 25.6569 25 24 25C22.3431 25 21 26.3431 21 28C21 29.6569 22.3431 31 24 31Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M19 21L24.0083 28"></svg:path></svg:g>`,
})
export class IconParkWeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeightliftingIcon],svg[icon-park-weightlifting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M24 27C26.7614 27 29 24.7614 29 22C29 19.2386 26.7614 17 24 17C21.2386 17 19 19.2386 19 22C19 24.7614 21.2386 27 24 27Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 9H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 4V14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 4V14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 9V26.1L24 34L37 26V9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 34V44"></svg:path></svg:g>`,
})
export class IconParkWeightliftingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinCardsOffersIcon],svg[icon-park-weixin-cards-offers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 12L42 16V40L6 36V12Z"></svg:path><svg:path d="M38 15.5554V8L6.00049 11.9999"></svg:path></svg:g>`,
})
export class IconParkWeixinCardsOffersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinFavoritesIcon],svg[icon-park-weixin-favorites-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 14L24 6L42 14M6 14L24 22M6 14V34L24 42M42 14L24 22M42 14V34L24 42M24 22V42"></svg:path>`,
})
export class IconParkWeixinFavoritesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinGamesIcon],svg[icon-park-weixin-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24L24 6L42 24L24 42L6 24Z"></svg:path><svg:path d="M24 29V42"></svg:path><svg:path d="M19 24H6"></svg:path><svg:path d="M24 19V6"></svg:path><svg:path d="M29 24H42"></svg:path><svg:path d="M29 24C29 26.7614 26.7614 29 24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24Z"></svg:path></svg:g>`,
})
export class IconParkWeixinGamesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinMarketIcon],svg[icon-park-weixin-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M38 14H10C8.89543 14 8 14.8954 8 16V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V16C40 14.8954 39.1046 14 38 14Z"></svg:path><svg:path d="M17 18V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11V18"></svg:path></svg:g>`,
})
export class IconParkWeixinMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinMiniAppIcon],svg[icon-park-weixin-mini-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" d="M29 24C29.9889 24 30.9556 23.7068 31.7779 23.1574C32.6001 22.6079 33.241 21.827 33.6194 20.9134C33.9978 19.9998 34.0969 18.9945 33.9039 18.0246C33.711 17.0546 33.2348 16.1637 32.5355 15.4645C31.8363 14.7652 30.9454 14.289 29.9755 14.0961C29.0055 13.9031 28.0002 14.0022 27.0866 14.3806C26.173 14.759 25.3921 15.3999 24.8427 16.2222C24.2932 17.0444 24 18.0111 24 19V29C24 29.9889 23.7068 30.9556 23.1574 31.7779C22.6079 32.6001 21.8271 33.241 20.9134 33.6194C19.9998 33.9978 18.9945 34.0969 18.0246 33.9039C17.0546 33.711 16.1637 33.2348 15.4645 32.5355C14.7652 31.8363 14.289 30.9454 14.0961 29.9755C13.9031 29.0055 14.0022 28.0002 14.3806 27.0866C14.759 26.173 15.3999 25.3921 16.2222 24.8427C17.0444 24.2932 18.0111 24 19 24"></svg:path></svg:g>`,
})
export class IconParkWeixinMiniAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinPeopleNearbyIcon],svg[icon-park-weixin-people-nearby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="15" cy="10" r="4"></svg:circle><svg:circle cx="33" cy="10" r="4"></svg:circle><svg:path d="M10 20H20L18 42H12L10 20Z"></svg:path><svg:path d="M28 20H38L36 42H30L28 20Z"></svg:path></svg:g>`,
})
export class IconParkWeixinPeopleNearbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinScanIcon],svg[icon-park-weixin-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 30H12L14 35H26L28.0883 41.2649C28.6328 42.8983 30.1613 44 31.883 44H38C40.2091 44 42 42.2091 42 40V30L43 23L39.3536 23.7293C38.5388 23.8922 37.9097 24.542 37.7731 25.3616L37 30Z"></svg:path><svg:path d="M11 18H36L34 13H22L19.9117 6.73509C19.3672 5.10172 17.8387 4 16.117 4H10C7.79086 4 6 5.79086 6 8V18L5 25L8.64639 24.2707C9.46118 24.1078 10.0903 23.458 10.2269 22.6384L11 18Z"></svg:path></svg:g>`,
})
export class IconParkWeixinScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinSearchIcon],svg[icon-park-weixin-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 16L12.5 17.5"></svg:path><svg:path d="M8 42L14 24"></svg:path><svg:path d="M38 42L21 24"></svg:path><svg:path d="M42 16L22.5 17.5"></svg:path><svg:path d="M20 6L18 13"></svg:path></svg:g>`,
})
export class IconParkWeixinSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinShakeIcon],svg[icon-park-weixin-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 19L29 6L6 29L19 42L42 19Z"></svg:path><svg:path stroke="#fff" d="M16 29L19 32"></svg:path><svg:path stroke="#000" d="M30 42L42 30"></svg:path><svg:path stroke="#000" d="M6 18L18 6"></svg:path></svg:g>`,
})
export class IconParkWeixinShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinTopStoriesIcon],svg[icon-park-weixin-top-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0002 4L31.2002 11.5292L41.3207 14L38.4002 24L41.3207 34L31.2002 36.4708L24.0002 44L16.8002 36.4708L6.67969 34L9.6002 24L6.67969 14L16.8002 11.5292L24.0002 4Z"></svg:path><svg:path fill="#2F88FF" d="M30.9772 11.915L31.3718 19.7439L37.9544 24L31.3718 28.2561L30.9772 36.0849L23.9999 32.5122L17.0227 36.0849L16.6281 28.2561L10.0454 24L16.6281 19.7439L17.0227 11.915L23.9999 15.4877L30.9772 11.915Z"></svg:path></svg:g>`,
})
export class IconParkWeixinTopStoriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWhaleIcon],svg[icon-park-whale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16.0691 13C6.25336 13.3494 4.67583 21.0064 5.11403 24.7913C3.36116 27.9356 3.89597 28.7217 5.2104 30.0319C11.7835 36.1459 24.0534 35.7092 29.75 33.5256C35.7096 31.08 38.7486 26.4747 39.0407 24C44.2991 20.5063 44.4063 14.6013 43.676 13C42.896 14.3101 40.6474 15.2721 39.0407 16C37.2879 16.3494 34.7659 15.038 34.0355 13.8734C33.5343 16.5 34.0355 18.5 35.3501 19.5507C37.6376 21.2976 36.4754 23.0633 36.0372 23.5C34.1405 25.3902 30.5308 24.4905 28.7771 21.7343C24.0533 14.3101 18.9905 13 16.0691 13Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 28C7.83333 28.5321 13.4 29.5542 17 27"></svg:path><svg:circle cx="12" cy="20" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkWhaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWheelchairIcon],svg[icon-park-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29.6219 35.0001C28.2898 40.1757 23.5915 44 18 44C11.3726 44 6 38.6275 6 32.0001C6 27.1571 8.86894 22.9841 13 21.0881"></svg:path><svg:path d="M18 12L20 30L35 29L38 40H41"></svg:path><svg:path fill="#2F88FF" d="M22 8C22 10.2091 20.2091 12 18 12C15.7909 12 14 10.2091 14 8C14 5.79086 15.7909 4 18 4C20.2091 4 22 5.79086 22 8Z"></svg:path><svg:path d="M25 20H33"></svg:path></svg:g>`,
})
export class IconParkWheelchairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWhirlwindIcon],svg[icon-park-whirlwind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path><svg:path d="M23.5 44C16.5964 44 11 38.4036 11 31.5C11 24.5964 16.5964 19 23.5 19"></svg:path><svg:path d="M44 23.5C44 30.4036 38.4036 36 31.5 36C24.5964 36 19 30.4036 19 23.5"></svg:path><svg:path d="M23.5 29C30.4036 29 36 23.4036 36 16.5C36 9.59644 30.4036 4 23.5 4"></svg:path><svg:path d="M29 23.5C29 16.5964 23.4036 11 16.5 11C9.59644 11 4 16.5964 4 23.5"></svg:path></svg:g>`,
})
export class IconParkWhirlwindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWhistlingIcon],svg[icon-park-whistling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M27 11L4 11V19H15C14.35 20.55 14 22.21 14 24C14 31.21 19.79 37 27 37C34.2 37 40 31.21 40 24C40 16.79 34.21 11 27 11Z"></svg:path><svg:path d="M27 11V17"></svg:path><svg:path d="M40 24H44"></svg:path></svg:g>`,
})
export class IconParkWhistlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWholeSiteAcceleratorIcon],svg[icon-park-whole-site-accelerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="22" cy="40" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="26" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="36" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="12" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 24L16 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 11L15 21"></svg:path><svg:path d="M32.9998 27L24.9987 37"></svg:path></svg:g>`,
})
export class IconParkWholeSiteAcceleratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWifiIcon],svg[icon-park-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 18.9653C4.5888 18.4073 5.19522 17.8786 5.8174 17.3792C17.0371 8.37423 33.3821 8.90292 44 18.9653"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 25.799C30.268 18.067 17.732 18.067 10 25.799"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 32.3137C27.5817 27.8954 20.4183 27.8954 16 32.3137"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWindIcon],svg[icon-park-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 17H10C7.79086 17 6 18.7909 6 21V21C6 23.2091 7.79086 25 10 25H12"></svg:path><svg:path d="M22 33H19C16.7909 33 15 34.7909 15 37V37C15 39.2091 16.7909 41 19 41H22"></svg:path><svg:path d="M27 7H24C21.7909 7 20 8.79086 20 11V11C20 13.2091 21.7909 15 24 15H27"></svg:path><svg:path d="M24 15H40"></svg:path><svg:path d="M12 25H42"></svg:path><svg:path d="M22 33H34"></svg:path></svg:g>`,
})
export class IconParkWindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWindTurbineIcon],svg[icon-park-wind-turbine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 23C40 28 45 37 45 37C45 37 33 37 24 29C15 37 3 37 3 37C3 37 8 27 19 23C19 10 24 4 24 4C24 4 29 10 29 23Z"></svg:path><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkWindTurbineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWindmillIcon],svg[icon-park-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24 23.9917L23.9707 13.9958L23.9415 4L12 14V24L24 23.9917Z"></svg:path><svg:path d="M24.0083 24L34.0042 23.9707L44 23.9415L34 12L24 12L24.0083 24Z"></svg:path><svg:path d="M24 24.0083L24.0293 34.0042L24.0585 44L36 34V24L24 24.0083Z"></svg:path><svg:path d="M23.9917 24L13.9958 24.0293L4 24.0585L14 36L24 36L23.9917 24Z"></svg:path></svg:g>`,
})
export class IconParkWindmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWindmillOneIcon],svg[icon-park-windmill-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34.5175 13.8463L34 11L27.1305 7.56525C25.1598 6.5799 22.8402 6.5799 20.8695 7.56525L17.3813 9.30938M35.6917 20.3046L37 27.5L39.0909 39M36 44H8L8.956 38.742M10.6364 29.5L13.5718 13.3554"></svg:path><svg:path stroke-linejoin="round" d="M39.2929 8.70711C39.6834 8.31658 40.3166 8.31658 40.7071 8.70711L43.2929 11.2929C43.6834 11.6834 43.6834 12.3166 43.2929 12.7071L34.7071 21.2929C34.3166 21.6834 33.6834 21.6834 33.2929 21.2929L30.7071 18.7071C30.3166 18.3166 30.3166 17.6834 30.7071 17.2929L39.2929 8.70711Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 21L31 17"></svg:path><svg:path stroke-linejoin="round" d="M39.2929 39.2929C39.6834 39.6834 39.6834 40.3166 39.2929 40.7071L36.7071 43.2929C36.3166 43.6834 35.6834 43.6834 35.2929 43.2929L26.7071 34.7071C26.3166 34.3166 26.3166 33.6834 26.7071 33.2929L29.2929 30.7071C29.6834 30.3166 30.3166 30.3166 30.7071 30.7071L39.2929 39.2929Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 27L31 31"></svg:path><svg:path stroke-linejoin="round" d="M8.70711 39.2929C8.31658 39.6834 7.68342 39.6834 7.29289 39.2929L4.70711 36.7071C4.31658 36.3166 4.31658 35.6834 4.70711 35.2929L13.2929 26.7071C13.6834 26.3166 14.3166 26.3166 14.7071 26.7071L17.2929 29.2929C17.6834 29.6834 17.6834 30.3166 17.2929 30.7071L8.70711 39.2929Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 27L17 31"></svg:path><svg:path stroke-linejoin="round" d="M8.70711 8.70711C8.31658 8.31658 8.31658 7.68342 8.70711 7.29289L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L21.2929 13.2929C21.6834 13.6834 21.6834 14.3166 21.2929 14.7071L18.7071 17.2929C18.3166 17.6834 17.6834 17.6834 17.2929 17.2929L8.70711 8.70711Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 21L17 17"></svg:path><svg:circle cx="24" cy="24" r="4"></svg:circle></svg:g>`,
})
export class IconParkWindmillOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWindmillTwoIcon],svg[icon-park-windmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4V24Z"></svg:path><svg:path d="M24 24C24 29.5228 28.4772 34 34 34C39.5228 34 44 29.5228 44 24H24Z"></svg:path><svg:path d="M24 24C24 18.4772 19.5228 14 14 14C8.47715 14 4 18.4772 4 24H24Z"></svg:path><svg:path d="M24 24C18.4772 24 14 28.4772 14 34C14 39.5228 18.4772 44 24 44V24Z"></svg:path></svg:g>`,
})
export class IconParkWindmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWindowsIcon],svg[icon-park-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="3.833"><svg:path d="M6.75 11.0625L19.6875 9.33752V21.4125H6.75V11.0625Z"></svg:path><svg:path d="M24.8623 8.84464L41.2498 6.75V21.4125H24.8623V8.84464Z"></svg:path><svg:path d="M24.8623 27.45L41.2498 27.8333V41.25L24.8623 38.5666V27.45Z"></svg:path><svg:path d="M6.75 26.5875L19.6875 26.899V37.8L6.75 35.6198V26.5875Z"></svg:path></svg:g>`,
})
export class IconParkWindowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWingsuitFlyingIcon],svg[icon-park-wingsuit-flying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 20C15.29 20 8 27.28 8 36H15V44H33V36H40C40.01 27.29 32.71 20 24 20Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 36V23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 36L33 23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 44V20"></svg:path></svg:g>`,
})
export class IconParkWingsuitFlyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWinkingFaceIcon],svg[icon-park-winking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 20H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V22"></svg:path></svg:g>`,
})
export class IconParkWinkingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWinkingFaceWithOpenEyesIcon],svg[icon-park-winking-face-with-open-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 16L29 20L33 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path><svg:circle cx="17" cy="20" r="4" fill="#43CCF8" stroke="#fff" stroke-linecap="round"></svg:circle></svg:g>`,
})
export class IconParkWinkingFaceWithOpenEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWomanIcon],svg[icon-park-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M32.4853 24.4853C34.6569 22.3137 36 19.3137 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 19.3137 13.3431 22.3137 15.5147 24.4853"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 44L7 39L18 31L24 37L30 31L41 39L42 44"></svg:path><svg:path d="M12.9934 21.0071C13.0061 16.8965 13.6749 13.8941 15 11.9999C16.9877 9.15871 18.387 9.36755 19.4054 9.81009C20.4238 10.2526 21.0226 13.1442 22.7236 13.9777C24.4246 14.8112 28.7777 14.9141 30.2687 15.9167C31.7597 16.9194 35.1696 18.7844 34.3195 21.9684"></svg:path></svg:g>`,
})
export class IconParkWomanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWomenIcon],svg[icon-park-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M19.2252 6.36909C16.0422 6.36909 11.1616 8.207 12.8592 19.5832C12.8848 19.7545 12.9184 19.9407 12.9543 20.1395C13.2635 21.8513 13.7419 24.4998 10.7 26.6839C12.7689 28.3816 15.7155 30.0792 19.2965 30.8143C19.1521 31.6597 18.9342 32.6118 18.7655 33.2284C18.4735 34.2956 17.8639 35.0527 16.774 35.3755C15.8142 35.6598 14.8085 35.8899 13.7777 36.1257C13.513 36.1862 13.2465 36.2472 12.9789 36.3095C11.6928 36.6089 10.3834 36.9394 9.22177 37.4079C8.05819 37.8772 6.97581 38.5107 6.19417 39.4553C5.3976 40.4179 4.9723 41.6322 5.0014 43.1495C5.01046 43.6217 5.41498 44 5.91088 44H42.0891C42.5849 44 42.9894 43.6218 42.9986 43.1496C43.028 41.6323 42.6028 40.418 41.8062 39.4553C41.0246 38.5107 39.9422 37.8772 38.7786 37.4079C37.6169 36.9394 36.3073 36.6089 35.0212 36.3095C34.7537 36.2472 34.4874 36.1863 34.2227 36.1257C33.1917 35.8899 32.1859 35.6599 31.226 35.3755C30.1361 35.0527 29.5264 34.2956 29.2345 33.2284C29.0338 32.4948 28.7626 31.2865 28.6288 30.3477C31.367 29.5236 34.2768 28.0434 37.3 25.6777L37.2857 25.664C35.8673 24.3063 33.2071 21.7596 33.0181 15.7163C33.0181 7.39375 27.7124 0.0786526 19.2252 6.36909Z"></svg:path>`,
})
export class IconParkWomenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWomenCoatIcon],svg[icon-park-women-coat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 10C16 9 19 4 19 4H29C29 4 32 9.2 36 10L42 31H34V44H14V31H6L12 10Z"></svg:path><svg:path d="M19 4L24 18L29 4"></svg:path><svg:path d="M24 18L24 44"></svg:path></svg:g>`,
})
export class IconParkWomenCoatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWoolenHatIcon],svg[icon-park-woolen-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="40" height="10" x="4" y="34" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 26V34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 26V34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 26V34"></svg:path><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:path d="M8 34C8 25.75 9 12 24 12C39 12 40 25.75 40 34"></svg:path></svg:g>`,
})
export class IconParkWoolenHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWordIcon],svg[icon-park-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 16L18 32L24 19L30 32L34 16"></svg:path></svg:g>`,
})
export class IconParkWordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWorkbenchIcon],svg[icon-park-workbench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 33H4V7H44V33H36H12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 22V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 33V39"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 14V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 41H36"></svg:path></svg:g>`,
})
export class IconParkWorkbenchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWorkerIcon],svg[icon-park-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 8C19.5817 8 16 11.5817 16 16H32C32 11.5817 28.4183 8 24 8Z"></svg:path><svg:path stroke="#000" d="M12 16H36"></svg:path><svg:path stroke="#000" d="M24 4V8"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 27C14.6112 27 7 34.1634 7 43H41C41 34.1634 33.3888 27 24 27Z"></svg:path><svg:path stroke="#fff" d="M18 34V38"></svg:path><svg:path stroke="#fff" d="M30 34V38"></svg:path></svg:g>`,
})
export class IconParkWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWorldIcon],svg[icon-park-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M4 20.8404C7.01485 19.4168 9.24466 19.2185 10.6894 20.2454C12.8566 21.7859 13.1283 28.064 18.0575 25.0635C22.9867 22.063 15.9467 20.8404 17.475 16.4939C19.0033 12.1474 24.0083 15.5237 24.5059 10.7627C24.8375 7.58862 21.0408 6.37413 13.1156 7.11921"></svg:path><svg:path stroke-linecap="round" d="M36.0001 8C30.2857 12.9886 28.2899 16.0011 30.0127 17.0373C32.5968 18.5917 33.6933 16.4033 36.8467 17.0373C40.0001 17.6714 39.3173 21.9457 37.6587 21.9457C36.0001 21.9457 27.41 20.8518 27.8427 25.865C28.2753 30.8781 33.4422 31.6203 33.4422 34.4211C33.4422 36.2883 32.299 39.146 30.0127 42.9942"></svg:path><svg:path stroke-linecap="round" d="M6.10449 32.9264C7.01598 32.5288 7.70115 32.2374 8.15999 32.052C12.0071 30.4978 14.8617 30.1314 16.7236 30.953C20.0161 32.4059 18.7503 35.3401 19.7816 36.4211C20.8128 37.5021 23.388 37.1876 23.388 39.244C23.388 40.615 22.9275 42.1637 22.0065 43.8901"></svg:path></svg:g>`,
})
export class IconParkWorldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWorriedFaceIcon],svg[icon-park-worried-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 27 24 27C19 27 17 31 17 31"></svg:path></svg:g>`,
})
export class IconParkWorriedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWriteIcon],svg[icon-park-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z"></svg:path><svg:path stroke-linecap="round" d="M27.9521 12.3872L36.4374 20.8725"></svg:path></svg:g>`,
})
export class IconParkWriteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWritingFluentlyIcon],svg[icon-park-writing-fluently-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 24V19L39 4L44 9L29 24H24Z" clip-rule="evenodd"></svg:path><svg:path d="M16 24H9C6.23858 24 4 26.2386 4 29C4 31.7614 6.23858 34 9 34H39C41.7614 34 44 36.2386 44 39C44 41.7614 41.7614 44 39 44H18"></svg:path></svg:g>`,
})
export class IconParkWritingFluentlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkWrongUserIcon],svg[icon-park-wrong-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"></svg:path><svg:path d="M20 36L28 44"></svg:path><svg:path d="M28 36L20 44"></svg:path></svg:g>`,
})
export class IconParkWrongUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkXiaoduIcon],svg[icon-park-xiaodu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4.14317 21.0805C4.4982 17.2939 4.67571 15.4006 6.65595 13.3751C8.63619 11.3496 10.8152 11.0955 15.1734 10.5873C18.0037 10.2573 21.1305 10 24 10C26.8695 10 29.9963 10.2573 32.8266 10.5873C37.1848 11.0955 39.3638 11.3496 41.3441 13.3751C43.3243 15.4006 43.5018 17.2939 43.8568 21.0805C43.9464 22.0361 44 23.0181 44 24C44 24.9819 43.9464 25.9639 43.8568 26.9195C43.5018 30.7061 43.3243 32.5994 41.3441 34.6249C39.3638 36.6504 37.1848 36.9045 32.8266 37.4127C29.9963 37.7427 26.8695 38 24 38C21.1305 38 18.0037 37.7427 15.1734 37.4127C10.8152 36.9045 8.63619 36.6504 6.65595 34.6249C4.67571 32.5994 4.4982 30.7061 4.14317 26.9195C4.05357 25.9639 4 24.9819 4 24C4 23.0181 4.05357 22.0361 4.14317 21.0805Z"></svg:path><svg:path stroke="#fff" d="M16 19V29"></svg:path><svg:path stroke="#fff" d="M33 19L28 24L33 29"></svg:path></svg:g>`,
})
export class IconParkXiaoduIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkXiaoduHomeIcon],svg[icon-park-xiaodu-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 20L24 6L44 20V42H4V20Z"></svg:path><svg:path stroke="#fff" d="M12.6865 26.6863C14.1723 25.2006 15.9361 24.022 17.8773 23.2179C19.8185 22.4139 21.8991 22 24.0002 22C26.1014 22 28.182 22.4139 30.1232 23.2179C32.0644 24.022 33.8282 25.2006 35.314 26.6863"></svg:path><svg:path stroke="#fff" d="M18.3428 32.3431C19.0856 31.6003 19.9676 31.011 20.9382 30.609C21.9088 30.2069 22.9491 30 23.9996 30C25.0502 30 26.0905 30.2069 27.0611 30.609C28.0317 31.011 28.9136 31.6003 29.6565 32.3431"></svg:path></svg:g>`,
})
export class IconParkXiaoduHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkXiguaIcon],svg[icon-park-xigua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="3.667"><svg:path fill="#2F88FF" stroke="#000" d="M24.0003 42.3334C34.1255 42.3334 42.3337 34.1253 42.3337 24.0001C42.3337 13.8749 34.1255 5.66675 24.0003 5.66675C13.8751 5.66675 5.66699 13.8749 5.66699 24.0001C5.66699 26.4858 6.80727 27.6871 8.61419 28.7448C10.4211 29.8025 13.8204 29.6269 16.1327 31.7014C18.445 33.776 18.6011 37.1507 19.0799 38.7905C19.5588 40.4303 21.5146 42.3334 24.0003 42.3334Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M19.5264 18.5412C18.988 19.8493 18.7188 21.3866 18.7188 23.153C18.7188 24.8329 18.8971 26.496 19.2539 28.1424L19.2539 28.1424C19.6113 29.7916 21.2381 30.8389 22.8873 30.4815C22.9472 30.4685 23.0067 30.4537 23.0657 30.4372C24.8653 29.9322 26.4325 29.2711 27.7673 28.454C29.0152 27.6899 30.1779 26.7253 31.2556 25.56L31.2556 25.56C32.4013 24.3211 32.3258 22.3879 31.0868 21.2421C31.0514 21.2094 31.0152 21.1775 30.9783 21.1465C29.7116 20.0817 28.3858 19.1254 27.0008 18.2774C25.5547 17.3921 24.1384 16.8579 22.7519 16.6749L22.7518 16.6749C21.3779 16.4935 20.0539 17.2596 19.5264 18.5412Z"></svg:path></svg:g>`,
})
export class IconParkXiguaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkXingfuliIcon],svg[icon-park-xingfuli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 17L20 13V32L26 35V19L32 17Z"></svg:path></svg:g>`,
})
export class IconParkXingfuliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkXingtuIcon],svg[icon-park-xingtu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.5557 38.9998L8.17749 11.0171C8.14563 10.9011 8.16069 10.7772 8.2194 10.6722C8.27812 10.5672 8.37579 10.4895 8.49131 10.4559C8.5536 10.4332 8.62071 10.427 8.68612 10.4378C8.75154 10.4486 8.81305 10.4762 8.86468 10.5178L42.4732 38.1889C42.5582 38.2669 42.6117 38.3734 42.6235 38.4882C42.6353 38.6031 42.6047 38.7182 42.5373 38.8119C42.5082 38.8693 42.4635 38.9173 42.4084 38.9505C42.3534 38.9837 42.2901 39.0008 42.2258 38.9998H15.5557Z"></svg:path><svg:path d="M44.9797 9.58096C45.0117 9.46526 44.9969 9.34163 44.9387 9.23668C44.8804 9.13173 44.7833 9.05384 44.6682 9.01975C44.6052 8.99968 44.5382 8.99482 44.473 9.00557C44.4077 9.01632 44.3458 9.04237 44.2925 9.0816L26.1758 21.5725L39.1706 32.2516L44.9797 9.58096Z"></svg:path><svg:path d="M2.18783 38.189C2.09543 38.2603 2.03199 38.3628 2.00925 38.4773C1.98652 38.5918 2.00601 38.7107 2.06413 38.812C2.10605 38.8717 2.16208 38.9201 2.22722 38.9528C2.29237 38.9856 2.36461 39.0018 2.43751 38.9998H13.0593L11.2474 31.9423L2.18783 38.189Z"></svg:path>`,
})
export class IconParkXingtuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkYepIcon],svg[icon-park-yep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 42C27.2639 44.7064 21 44.5 16 42C11 39.5 7 34 7 29.5C7 26.8769 11.3562 24.9696 13.1956 24.2812C13.6561 24.1089 13.9462 23.641 13.8732 23.1548L11.5864 7.90928C11.2777 5.85104 12.8717 4 14.953 4C16.6877 4 18.1449 5.3043 18.3365 7.02835L20 22L20.8301 6.22926C20.9253 4.41897 22.421 3 24.2338 3C26.2502 3 27.8259 4.74108 27.6252 6.74756L26.5866 17.1341C26.7087 15.9225 27.7286 15 28.9466 15C31.1852 15 33 16.8148 33 19.0534L33 21.5C33 19.567 34.567 18 36.5 18C38.433 18 40 19.567 40 21.5V32.1489C40 32.7149 39.9472 33.2807 39.7471 33.8102C39.1514 35.387 37.2872 38.9788 32 42Z"></svg:path>`,
})
export class IconParkYepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkYoutobeIcon],svg[icon-park-youtobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 32.7679V15.2321C44 13.9073 43.1298 12.7428 41.8448 12.4204C38.3687 11.5484 31.1843 10 24 10C16.8157 10 9.63134 11.5484 6.15517 12.4204C4.87016 12.7428 4 13.9073 4 15.2321V32.7679C4 34.0927 4.87016 35.2572 6.15517 35.5796C9.63133 36.4516 16.8157 38 24 38C31.1843 38 38.3687 36.4516 41.8448 35.5796C43.1298 35.2572 44 34.0927 44 32.7679Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M22.5735 29.8986C21.9107 30.3625 21 29.8884 21 29.0793V18.9207C21 18.1116 21.9107 17.6375 22.5735 18.1014L29.8297 23.1808C30.3984 23.5789 30.3984 24.4211 29.8297 24.8192L22.5735 29.8986Z"></svg:path></svg:g>`,
})
export class IconParkYoutobeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkYoutubeIcon],svg[icon-park-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M11.0637 10.4144C16.6069 10.1381 20.9183 10 23.998 10C27.0781 10 31.3911 10.1382 36.937 10.4145V10.4145C39.9391 10.5641 42.3672 12.9119 42.6176 15.9072C42.8712 18.9412 42.998 21.6134 42.998 23.9238C42.998 26.2626 42.8681 28.972 42.6082 32.0522H42.6082C42.3586 35.0103 39.9833 37.3412 37.021 37.5349C32.2796 37.845 27.9386 38 23.998 38C20.058 38 15.7186 37.845 10.9798 37.5351V37.5351C8.01852 37.3414 5.6437 35.0119 5.39288 32.055C5.12966 28.9518 4.99805 26.2414 4.99805 23.9238C4.99805 21.6341 5.12651 18.961 5.38345 15.9044L5.38346 15.9044C5.63514 12.9103 8.06274 10.564 11.0637 10.4144Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-width="3.429" d="M21 19.6092V28.406C21 28.8794 21.3838 29.2631 21.8571 29.2631C22.0252 29.2631 22.1896 29.2137 22.3298 29.1211L28.9274 24.7605C29.3223 24.4995 29.4308 23.9677 29.1698 23.5728C29.1074 23.4784 29.0269 23.3973 28.933 23.3341L22.3354 18.8979C21.9426 18.6337 21.41 18.7381 21.1458 19.1309C21.0508 19.2723 21 19.4388 21 19.6092Z"></svg:path></svg:g>`,
})
export class IconParkYoutubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkZeroKeyIcon],svg[icon-park-zero-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke="#000" rx="3"></svg:rect><svg:rect width="10" height="20" x="19" y="14" stroke="#fff" rx="5"></svg:rect></svg:g>`,
})
export class IconParkZeroKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkZijinyunyingIcon],svg[icon-park-zijinyunying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M34 6H14L3 24L14 42H34L45 24L34 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M15 29L24 15L33 29H15Z"></svg:path></svg:g>`,
})
export class IconParkZijinyunyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkZipIcon],svg[icon-park-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M4.62861 12.7486L24 5L43.3714 12.7486C43.751 12.9004 44 13.2681 44 13.677V42C44 42.5523 43.5523 43 43 43H5C4.44772 43 4 42.5523 4 42V13.677C4 13.2681 4.24895 12.9004 4.62861 12.7486Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 22V32"></svg:path><svg:path stroke="#fff" d="M33 27C34.6569 27 36 25.8807 36 24.5C36 23.1193 34.6569 22 33 22C32.1 22 31.2 22 30.3 22C30.1343 22 30 22.1343 30 22.3C30 23.0333 30 23.7667 30 24.5C30 25.8807 31.3431 27 33 27Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 22V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 22H18.0046L12 31.9993H18.0046"></svg:path></svg:g>`,
})
export class IconParkZipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkZoomIcon],svg[icon-park-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20 43C15.2742 41.2327 11.3325 35.1851 9.35971 31.6428C8.50794 30.1134 8.95664 28.2347 10.3236 27.1411C11.8473 25.9222 14.0438 26.0438 15.4236 27.4236L17 29V20.5C17 19.1193 18.1193 18 19.5 18C20.8807 18 22 19.1193 22 20.5V16.5C22 15.1193 23.1193 14 24.5 14C25.8807 14 27 15.1193 27 16.5V24.5C27 23.1193 28.1193 22 29.5 22C30.8807 22 32 23.1193 32 24.5V27.5C32 26.1193 33.1193 25 34.5 25C35.8807 25 37 26.1193 37 27.5V35.368C37 36.4383 36.7354 37.496 36.1185 38.3707C35.0949 39.8219 33.255 42.0336 31 43C27.5 44.5 24.3701 44.6343 20 43Z"></svg:path><svg:path d="M13 8L35 8"></svg:path><svg:path d="M17.0003 12L13 8L17 4"></svg:path><svg:path d="M31 4L35 8L31 12"></svg:path></svg:g>`,
})
export class IconParkZoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkZoomInIcon],svg[icon-park-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 15L21 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15.0156 21.0156L27 21"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33.2216 33.2217L41.7069 41.707"></svg:path></svg:g>`,
})
export class IconParkZoomInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkZoomInternalIcon],svg[icon-park-zoom-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 4H4V44H44V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 4V16H4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 24V36H24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 36L24 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 6V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 4H27"></svg:path></svg:g>`,
})
export class IconParkZoomInternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkZoomOutIcon],svg[icon-park-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 21L27 21"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33.2216 33.2217L41.7069 41.707"></svg:path></svg:g>`,
})
export class IconParkZoomOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
