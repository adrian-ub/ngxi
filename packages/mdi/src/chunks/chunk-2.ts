import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBlurOffIcon],svg[mdi-blur-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M6 17a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m4 3.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m-7-11a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M6 13a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m15 .5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M10 17a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M2.5 5.27l3.78 3.78L6 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47a1.5 1.5 0 0 0 1.5 1.5c.74 0 1.36-.54 1.47-1.25l2.81 2.81A.9.9 0 0 0 14 17a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23L3.77 4zM14 20.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M18 7a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m0 4a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m0 4a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m-8-8a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m11 3.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5m-11-7a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5m4 0a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5m-.2 8h.2a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 14 8.5a1.5 1.5 0 0 0-1.5 1.5v.2c.11.67.63 1.19 1.3 1.3M14 7a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1"></svg:path>`,
})
export class MdiBlurOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBlurRadialIcon],svg[mdi-blur-radial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 3.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m5 7.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m0 4a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m-3-6a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5M14 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-4-1.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5m-3 6a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m3 3a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m-3-7a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m3 3.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0-4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiBlurRadialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoltIcon],svg[mdi-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17.7V21h-4v-.7zM17 3H7v3h10zm-2 4l-1 .7V7h-4v3.3L9 11v1l6-3.9zm0 4l-1 .7v-2l-4 2.7v2L9 15v1l6-3.9zm0 4l-1 .7v-2l-4 2.7v2L9 19v1l6-3.9z"></svg:path>`,
})
export class MdiBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBombIcon],svg[mdi-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6a3.25 3.25 0 0 1 3.25-3.25A3.25 3.25 0 0 1 17.75 6c0 .42.33.75.75.75s.75-.33.75-.75v-.75h1.5V6a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 16.25 6a1.75 1.75 0 0 0-1.75-1.75A1.75 1.75 0 0 0 12.75 6H14v1.29c2.89.86 5 3.54 5 6.71a7 7 0 0 1-7 7a7 7 0 0 1-7-7c0-3.17 2.11-5.85 5-6.71V6zM22 6h2v1h-2zm-3-2V2h1v2zm1.91.38l1.42-1.42l.71.71l-1.42 1.42z"></svg:path>`,
})
export class MdiBombIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBombOffIcon],svg[mdi-bomb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2.75c-1.8 0-3.25 1.45-3.25 3.25H10v1.29c-.69.21-1.33.52-1.92.91l9.71 9.71A6.9 6.9 0 0 0 19 14c0-3.17-2.11-5.85-5-6.71V6h-1.25a1.75 1.75 0 0 1 1.75-1.75A1.75 1.75 0 0 1 16.25 6a2.25 2.25 0 0 0 2.25 2.25c1.24 0 2.24-1.01 2.24-2.25v-.75h-1.49V6c0 .42-.34.75-.75.75c-.42 0-.75-.33-.75-.75c0-1.8-1.46-3.25-3.25-3.25M3.41 6.36L2 7.77l3.55 3.55C5.2 12.14 5 13.04 5 14c0 3.86 3.13 7 7 7c.92 0 1.83-.19 2.68-.55L18.23 24l1.41-1.41z"></svg:path>`,
})
export class MdiBombOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoneIcon],svg[mdi-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14a3 3 0 0 1-3 3a3 3 0 0 1-3-3c0-.77.29-1.47.76-2c-.47-.53-.76-1.23-.76-2a3 3 0 0 1 3-3a3 3 0 0 1 3 3c1.33.08 2.67.17 4 .17s2.67-.09 4-.17a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 .77-.29 1.47-.76 2c.47.53.76 1.23.76 2a3 3 0 0 1-3 3a3 3 0 0 1-3-3c-1.33-.08-2.67-.17-4-.17s-2.67.09-4 .17"></svg:path>`,
})
export class MdiBoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoneOffIcon],svg[mdi-bone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l4 4H5c-1.7 0-3 1.3-3 3c0 .8.3 1.5.8 2c-.5.5-.8 1.2-.8 2c0 1.7 1.3 3 3 3s3-1.3 3-3c1.3-.1 2.6-.2 3.9-.2l8.9 8.9zM20 16.8l-6.7-6.7c.9 0 1.8-.1 2.7-.1c0-1.7 1.3-3 3-3s3 1.3 3 3c0 .8-.3 1.5-.8 2c.5.5.8 1.2.8 2c0 1.3-.8 2.4-2 2.8"></svg:path>`,
})
export class MdiBoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookIcon],svg[mdi-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6v7L9.5 7.5L7 9V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></svg:path>`,
})
export class MdiBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookAccountIcon],svg[mdi-book-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-6v7L9.5 7.5L7 9V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-4 10a2 2 0 1 1-2 2a2 2 0 0 1 2-2m4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2Z"></svg:path>`,
})
export class MdiBookAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookAccountOutlineIcon],svg[mdi-book-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v5l-2.5-2.3L8 9V4H6v16h12m-5-9a2 2 0 1 1-2 2a2 2 0 0 1 2-2m4 8H9v-1c0-1.33 2.67-2 4-2s4 .67 4 2z"></svg:path>`,
})
export class MdiBookAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookAlertIcon],svg[mdi-book-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v16c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1v7l2.5-1.5L10 9V2h6a2 2 0 0 1 2 2m2 13h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiBookAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookAlertOutlineIcon],svg[mdi-book-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 18H4V4h2v8l2.5-2.25L11 12V4h5zm4-5h2v2h-2zm2-8v6h-2V7z"></svg:path>`,
})
export class MdiBookAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookAlphabetIcon],svg[mdi-book-alphabet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.81 2C4.83 2.09 4 3 4 4v16c0 1.05.95 2 2 2h12c1.05 0 2-.95 2-2V4a2 2 0 0 0-2-2h-6v7L9.5 7.5L7 9V2zM12 13h1a1 1 0 0 1 1 1v4h-1v-2h-1v2h-1v-4a1 1 0 0 1 1-1m0 1v1h1v-1zm3 1h3v1l-2 3h2v1h-3v-1l2-3h-2z"></svg:path>`,
})
export class MdiBookAlphabetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowDownIcon],svg[mdi-book-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m7 1v-4h-2v4h-2l3 3l3-3z"></svg:path>`,
})
export class MdiBookArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowDownOutlineIcon],svg[mdi-book-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM20 20v-4h-2v4h-2l3 3l3-3z"></svg:path>`,
})
export class MdiBookArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowLeftIcon],svg[mdi-book-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m5-1v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiBookArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowLeftOutlineIcon],svg[mdi-book-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM18 18v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiBookArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowRightIcon],svg[mdi-book-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m10 0l-3-3v2h-4v2h4v2z"></svg:path>`,
})
export class MdiBookArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowRightOutlineIcon],svg[mdi-book-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM23 19l-3-3v2h-4v2h4v2z"></svg:path>`,
})
export class MdiBookArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowUpIcon],svg[mdi-book-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m6-4l-3 3h2v4h2v-4h2z"></svg:path>`,
})
export class MdiBookArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowUpOutlineIcon],svg[mdi-book-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM19 15l-3 3h2v4h2v-4h2z"></svg:path>`,
})
export class MdiBookArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookCancelIcon],svg[mdi-book-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.5c0 1.29.39 2.5 1.04 3.5H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v8.18c-.5-.11-1-.18-1.5-.18a6.5 6.5 0 0 0-6.5 6.5m11 0c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiBookCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookCancelOutlineIcon],svg[mdi-book-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.18 20c.18.72.47 1.39.86 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.18c-.5-.11-1-.18-1.5-.18c-.17 0-.33 0-.5.03V4h-5v8l-2.5-2.25L8 12V4H6v16zM23 18.5c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiBookCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookCheckIcon],svg[mdi-book-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.75 22.16l-2.75-3L15.16 18l1.59 1.59L20.34 16l1.16 1.41zM6 22a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.34A6.005 6.005 0 0 0 12.8 22z"></svg:path>`,
})
export class MdiBookCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookCheckOutlineIcon],svg[mdi-book-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.75 22.16l-2.75-3L15.16 18l1.59 1.59L20.34 16l1.16 1.41zM18 2c1.1 0 2 .9 2 2v9.34c-.63-.22-1.3-.34-2-.34V4h-5v8l-2.5-2.25L8 12V4H6v16h6.08c.12.72.37 1.39.72 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"></svg:path>`,
})
export class MdiBookCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookClockIcon],svg[mdi-book-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 17.25l2.86 1.69l-.75 1.22L15 18v-5h1.5zM23 17c0 3.87-3.13 7-7 7c-1.91 0-3.63-.76-4.89-2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v7.26c1.81 1.27 3 3.36 3 5.74m-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiBookClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookClockOutlineIcon],svg[mdi-book-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11.26V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h5.11c1.26 1.24 2.98 2 4.89 2c3.87 0 7-3.13 7-7c0-2.38-1.19-4.47-3-5.74M18 4v6.29c-.63-.18-1.3-.29-2-.29c-1.07 0-2.09.25-3 .68V4zM6 4h2v8l2.5-2.25l1.6 1.44A7 7 0 0 0 9 17c0 1.08.25 2.09.68 3H6zm10 18c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 18v-5h1.5z"></svg:path>`,
})
export class MdiBookClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookCogIcon],svg[mdi-book-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c0 1.08.25 2.09.68 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v8.08c-.33-.05-.66-.08-1-.08c-3.87 0-7 3.13-7 7m11.8 1.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiBookCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookCogOutlineIcon],svg[mdi-book-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-5v8l-2.5-2.25L8 12V4H6v16h6.08c.1.71.31 1.38.61 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.08c-.33-.05-.66-.08-1-.08s-.67.03-1 .08zm5.8 16.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiBookCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookCrossIcon],svg[mdi-book-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.81 2H7v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v16c0 1.05-.95 2-2 2H6c-1.05 0-2-.95-2-2V4c0-1 .83-1.91 1.81-2M13 10v3h-3v2h3v5h2v-5h3v-2h-3v-3z"></svg:path>`,
})
export class MdiBookCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookEditIcon],svg[mdi-book-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.39 10.74L11 19.13V22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v6.3c-.22.12-.43.26-.61.44M13 19.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiBookEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookEditOutlineIcon],svg[mdi-book-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20h5v2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.3c-.22.12-.43.26-.61.44L18 12.13V4h-5v8l-2.5-2.25L8 12V4H6zm16.85-6.53l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05z"></svg:path>`,
})
export class MdiBookEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookEducationIcon],svg[mdi-book-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.82 17L13 19.28V22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v8.54l-1.5-.82zM24 17l-5.5-3l-5.5 3l5.5 3zm-9 2.09v2L18.5 23l3.5-1.91v-2L18.5 21z"></svg:path>`,
})
export class MdiBookEducationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookEducationOutlineIcon],svg[mdi-book-education-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20h7v2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.54l-1.5-.82l-.5.28V4h-5v8l-2.5-2.25L8 12V4H6zm18-3l-5.5-3l-5.5 3l5.5 3zm-9 2.09v2L18.5 23l3.5-1.91v-2L18.5 21z"></svg:path>`,
})
export class MdiBookEducationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookHeartIcon],svg[mdi-book-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 23.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM6 22a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.08L19 13a6.005 6.005 0 0 0-5.2 9z"></svg:path>`,
})
export class MdiBookHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookHeartOutlineIcon],svg[mdi-book-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 23.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM18 2c1.1 0 2 .9 2 2v9.08L19 13l-1 .08V4h-5v8l-2.5-2.25L8 12V4H6v16h7.08c.12.72.37 1.39.72 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"></svg:path>`,
})
export class MdiBookHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookInformationVariantIcon],svg[mdi-book-information-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-6v7L9.5 7.5L7 9V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4a2 2 0 0 0-2-2m-.32 16.41c-.11.09-1.21.84-1.63 1.09c-.42.29-2.05 1.22-1.79-.58c.63-3.64 1.85-5.8.39-4.86c-.38.23-.6.37-.74.44c-.13.11-.12.1-.23-.09s-.15-.18-.01-.28c0 0 2.23-1.79 3.05-1.85c.78-.07.59.89.52 1.33c-.46 1.85-1.3 4.54-1.17 4.93c.11.39.93-.23 1.37-.54c0 0 .06-.07.17.05c.11.17.22.25.07.36m-.71-7.35c-.57 0-1.03-.46-1.03-1.03S16.4 9 16.97 9S18 9.46 18 10.03s-.46 1.03-1.03 1.03"></svg:path>`,
})
export class MdiBookInformationVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookLockIcon],svg[mdi-book-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 14.5v.24c-.7.6-1.2 1.5-1.2 2.46v3.5c0 .46.1.9.27 1.3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v6.11c-.32-.07-.66-.11-1-.11c-2.6 0-4.8 2.06-4.8 4.5m8.8 2.8v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiBookLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookLockOpenIcon],svg[mdi-book-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 13.5v1.24c-.7.6-1.2 1.5-1.2 2.46v3.5c0 .46.1.9.27 1.3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v5.11c-.32-.07-.66-.11-1-.11c-2.6 0-4.8 2.06-4.8 4.5m7.6 2.5h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiBookLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookLockOpenOutlineIcon],svg[mdi-book-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.7c0 .46.1.9.27 1.3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5.11c-.32-.07-.66-.11-1-.11s-.68.04-1 .11V4h-5v8l-2.5-2.25L8 12V4H6v16h7zm8.8-4.7h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiBookLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookLockOutlineIcon],svg[mdi-book-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.7c0 .46.1.9.27 1.3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.11c-.32-.07-.66-.11-1-.11s-.68.04-1 .11V4h-5v8l-2.5-2.25L8 12V4H6v16h7zm10-3.4v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiBookLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMarkerIcon],svg[mdi-book-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.5c0 2.28 1.7 4.91 2.91 6.5H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v6.22c-.5-.14-1-.22-1.5-.22c-3 0-5.5 2.5-5.5 5.5m9 0c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiBookMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMarkerOutlineIcon],svg[mdi-book-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.55 20c.45.76.95 1.44 1.36 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.22c-.5-.14-1-.22-1.5-.22c-.17 0-.33 0-.5.03V4h-5v8l-2.5-2.25L8 12V4H6v16zM22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiBookMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMinusIcon],svg[mdi-book-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m2-1v2h8v-2z"></svg:path>`,
})
export class MdiBookMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMinusMultipleIcon],svg[mdi-book-minus-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2h-5v5l-2-1.5L10 7V2H9c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4.09A6 6 0 0 1 20 13.08c.34.06.68.15 1 .26V4a2 2 0 0 0-2-2m4 16v2h-8v-2z"></svg:path>`,
})
export class MdiBookMinusMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMinusMultipleOutlineIcon],svg[mdi-book-minus-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2H9c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4.09c.11-.71.35-1.39.72-2H9V4h2v6l2.5-2.25L16 10V4h3v9c.68 0 1.36.11 2 .34V4a2 2 0 0 0-2-2m4 16v2h-8v-2z"></svg:path>`,
})
export class MdiBookMinusMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMinusOutlineIcon],svg[mdi-book-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM15 18v2h8v-2z"></svg:path>`,
})
export class MdiBookMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultipleIcon],svg[mdi-book-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1v5l2-1.5L14 7V2h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2m-2 2v2H5a2 2 0 0 1-2-2V6h2v14z"></svg:path>`,
})
export class MdiBookMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultipleMinusIcon],svg[mdi-book-multiple-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5v5l-2-1.5L10 7V2H9zM3 6v14a2 2 0 0 0 2 2h12v-2H5V6H3zm16 6v2h-6v-2h6z" fill="currentColor"></svg:path>`,
})
export class MdiBookMultipleMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultipleOutlineIcon],svg[mdi-book-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-3v6l-2.5-2.25L11 10V4H9v12h10M3 20a2 2 0 0 0 2 2h12v-2H5V6H3Z"></svg:path>`,
})
export class MdiBookMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultiplePlusIcon],svg[mdi-book-multiple-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5v5l-2-1.5L10 7V2H9zM3 6v14a2 2 0 0 0 2 2h12v-2H5V6H3zm12 4h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2z" fill="currentColor"></svg:path>`,
})
export class MdiBookMultiplePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultipleRemoveIcon],svg[mdi-book-multiple-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5v5l-2-1.5L10 7V2H9zM3 6v14a2 2 0 0 0 2 2h12v-2H5V6H3zm11.586 4.172L16 11.586l1.414-1.414l1.414 1.414L17.414 13l1.414 1.414l-1.414 1.414L16 14.414l-1.414 1.414l-1.414-1.414L14.586 13l-1.414-1.414l1.414-1.414z" fill="currentColor"></svg:path>`,
})
export class MdiBookMultipleRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultipleVariantIcon],svg[mdi-book-multiple-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z" fill="currentColor"></svg:path>`,
})
export class MdiBookMultipleVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMusicIcon],svg[mdi-book-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.5c0 .53.09 1.03.26 1.5H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v7h-3.5v5.11c-2 .46-3.5 2.25-3.5 4.39m7-7.5h-1.5v5.21a2.5 2.5 0 1 0-1 4.79a2.5 2.5 0 0 0 2.5-2.5V15h2v-2z"></svg:path>`,
})
export class MdiBookMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookMusicOutlineIcon],svg[mdi-book-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.5c0 .53.09 1.03.26 1.5H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7h-2V4h-5v8l-2.5-2.25L8 12V4H6v16h7.04c-.01.17-.04.33-.04.5m7-7.5h-1.5v5.21a2.5 2.5 0 1 0-1 4.79a2.5 2.5 0 0 0 2.5-2.5V15h2v-2z"></svg:path>`,
})
export class MdiBookMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOffIcon],svg[mdi-book-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.68 2.12L12 8.8V2h6c.24 0 .46.05.68.12M9.5 7.5L7 9V2H6a2 2 0 0 0-2 2v12.8l7.88-7.87zm12.11-5.77L1.89 21.46l1.27 1.27l1.38-1.38c.36.4.88.65 1.46.65h12c1.11 0 2-.89 2-2V5.89L22.89 3z"></svg:path>`,
})
export class MdiBookOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOffOutlineIcon],svg[mdi-book-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 14.8l-2 2V4a2 2 0 0 1 2-2h12c.24 0 .47.04.68.12L16.8 4H13v3.8L10.79 10l-.29-.25L8 12V4H6zM22.89 3L20 5.89V20c0 1.11-.89 2-2 2H6c-.58 0-1.1-.25-1.46-.65l-1.38 1.38l-1.27-1.27L21.61 1.73zM18 7.89l-12 12V20h12z"></svg:path>`,
})
export class MdiBookOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenIcon],svg[mdi-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h7v1.5h-7m0-4h7V11h-7m0 3.5h7V16h-7m8-12H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 15h-9V6h9"></svg:path>`,
})
export class MdiBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenBlankVariantIcon],svg[mdi-book-open-blank-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20c1.7 0 4.15.65 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.17 0-2.39.15-3.5.5c-.75.25-1.4.55-2 1v14.6c0 .25.25.5.5.5c.1 0 .15 0 .25-.05C3.15 20.3 4.85 20 6.5 20m5.5-.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5"></svg:path>`,
})
export class MdiBookOpenBlankVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenBlankVariantOutlineIcon],svg[mdi-book-open-blank-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.5c-1.35-.85-3.8-1.5-5.5-1.5c-1.65 0-3.35.3-4.75 1.05c-.1.05-.15.05-.25.05c-.25 0-.5-.25-.5-.5V6c.6-.45 1.25-.75 2-1c1.11-.35 2.33-.5 3.5-.5c1.95 0 4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5c1.17 0 2.39.15 3.5.5c.75.25 1.4.55 2 1v14.6c0 .25-.25.5-.5.5c-.1 0-.15 0-.25-.05c-1.4-.75-3.1-1.05-4.75-1.05c-1.7 0-4.15.65-5.5 1.5m-1-14c-1.36-.6-3.16-1-4.5-1c-1.2 0-2.4.15-3.5.5v11.5c1.1-.35 2.3-.5 3.5-.5c1.34 0 3.14.4 4.5 1zM13 19c1.36-.6 3.16-1 4.5-1c1.2 0 2.4.15 3.5.5V7c-1.1-.35-2.3-.5-3.5-.5c-1.34 0-3.14.4-4.5 1z"></svg:path>`,
})
export class MdiBookOpenBlankVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenOutlineIcon],svg[mdi-book-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M3 19V6h8v13zm18 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"></svg:path>`,
})
export class MdiBookOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenPageVariantIcon],svg[mdi-book-open-page-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 2l-5 4.5v11l5-4.5zM6.5 5C4.55 5 2.45 5.4 1 6.5v14.66c0 .25.25.5.5.5c.1 0 .15-.07.25-.07c1.35-.65 3.3-1.09 4.75-1.09c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.31 4.75 1.06c.1.05.15.03.25.03c.25 0 .5-.25.5-.5V6.5c-.6-.45-1.25-.75-2-1V19c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6.5C10.55 5.4 8.45 5 6.5 5"></svg:path>`,
})
export class MdiBookOpenPageVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenPageVariantOutlineIcon],svg[mdi-book-open-page-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 1l-5 5v11l5-4.5zm2 4v13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1M10 18.41C8.75 18.09 7.5 18 6.5 18c-1.06 0-2.32.19-3.5.5V7.13c.91-.4 2.14-.63 3.5-.63s2.59.23 3.5.63z"></svg:path>`,
})
export class MdiBookOpenPageVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenVariantIcon],svg[mdi-book-open-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.5c-1.35-.85-3.8-1.5-5.5-1.5c-1.65 0-3.35.3-4.75 1.05c-.1.05-.15.05-.25.05c-.25 0-.5-.25-.5-.5V6c.6-.45 1.25-.75 2-1c1.11-.35 2.33-.5 3.5-.5c1.95 0 4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5c1.17 0 2.39.15 3.5.5c.75.25 1.4.55 2 1v14.6c0 .25-.25.5-.5.5c-.1 0-.15 0-.25-.05c-1.4-.75-3.1-1.05-4.75-1.05c-1.7 0-4.15.65-5.5 1.5M12 8v11.5c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5V7c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5m1 3.5c1.11-.68 2.6-1 4.5-1c.91 0 1.76.09 2.5.28V9.23c-.87-.15-1.71-.23-2.5-.23q-2.655 0-4.5.84zm4.5.17c-1.71 0-3.21.26-4.5.79v1.69c1.11-.65 2.6-.99 4.5-.99c1.04 0 1.88.08 2.5.24v-1.5c-.87-.16-1.71-.23-2.5-.23m2.5 2.9c-.87-.16-1.71-.24-2.5-.24c-1.83 0-3.33.27-4.5.8v1.69c1.11-.66 2.6-.99 4.5-.99c1.04 0 1.88.08 2.5.24z"></svg:path>`,
})
export class MdiBookOpenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOpenVariantOutlineIcon],svg[mdi-book-open-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.5c-1.35-.85-3.8-1.5-5.5-1.5c-1.65 0-3.35.3-4.75 1.05c-.1.05-.15.05-.25.05c-.25 0-.5-.25-.5-.5V6c.6-.45 1.25-.75 2-1c1.11-.35 2.33-.5 3.5-.5c1.95 0 4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5c1.17 0 2.39.15 3.5.5c.75.25 1.4.55 2 1v14.6c0 .25-.25.5-.5.5c-.1 0-.15 0-.25-.05c-1.4-.75-3.1-1.05-4.75-1.05c-1.7 0-4.15.65-5.5 1.5m-1-14c-1.36-.6-3.16-1-4.5-1c-1.2 0-2.4.15-3.5.5v11.5c1.1-.35 2.3-.5 3.5-.5c1.34 0 3.14.4 4.5 1zM13 19c1.36-.6 3.16-1 4.5-1c1.2 0 2.4.15 3.5.5V7c-1.1-.35-2.3-.5-3.5-.5c-1.34 0-3.14.4-4.5 1zm1-2.65c.96-.35 2.12-.52 3.5-.52c1.04 0 1.88.08 2.5.24v-1.5a13.9 13.9 0 0 0-6 .19zm0-2.66c.96-.35 2.12-.53 3.5-.53c1.04 0 1.88.08 2.5.24v-1.5c-.87-.16-1.71-.23-2.5-.23c-1.28 0-2.45.15-3.5.45zM14 11c.96-.33 2.12-.5 3.5-.5c.91 0 1.76.09 2.5.28V9.23c-.87-.15-1.71-.23-2.5-.23c-1.32 0-2.5.15-3.5.46z"></svg:path>`,
})
export class MdiBookOpenVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookOutlineIcon],svg[mdi-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v8l-2.5-2.25L8 12V4H6v16h12z"></svg:path>`,
})
export class MdiBookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookPlayIcon],svg[mdi-book-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m4-3v6l5-3z"></svg:path>`,
})
export class MdiBookPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookPlayOutlineIcon],svg[mdi-book-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM17 16v6l5-3z"></svg:path>`,
})
export class MdiBookPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookPlusIcon],svg[mdi-book-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiBookPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookPlusMultipleIcon],svg[mdi-book-plus-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2h-5v5l-2-1.5L10 7V2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.09A6 6 0 0 1 21 13.34V4a2 2 0 0 0-2-2m1 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiBookPlusMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookPlusMultipleOutlineIcon],svg[mdi-book-plus-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.09a5.5 5.5 0 0 1 .72-2H9V4h2v6l2.5-2.25L16 10V4h3v9a6 6 0 0 1 2 .34V4a2 2 0 0 0-2-2m1 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiBookPlusMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookPlusOutlineIcon],svg[mdi-book-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiBookPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookRefreshIcon],svg[mdi-book-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.5c0 1.29.39 2.5 1.04 3.5H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v8.18c-.5-.11-1-.18-1.5-.18a6.5 6.5 0 0 0-6.5 6.5m10 0v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiBookRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookRefreshOutlineIcon],svg[mdi-book-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.18 20c.18.72.47 1.39.86 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.18c-.5-.11-1-.18-1.5-.18c-.17 0-.33 0-.5.03V4h-5v8l-2.5-2.25L8 12V4H6v16zM22 18.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiBookRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookRemoveIcon],svg[mdi-book-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 1.1.3 2.12.81 3H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m9.54-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiBookRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookRemoveMultipleIcon],svg[mdi-book-remove-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2h-5v5l-2-1.5L10 7V2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.09A6 6 0 0 1 21 13.34V4a2 2 0 0 0-2-2m3.54 14.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.13-2.12l1.42-1.42L19 17.59l2.12-2.13Z"></svg:path>`,
})
export class MdiBookRemoveMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookRemoveMultipleOutlineIcon],svg[mdi-book-remove-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.09a5.5 5.5 0 0 1 .72-2H9V4h2v6l2.5-2.25L16 10V4h3v9a6 6 0 0 1 2 .34V4a2 2 0 0 0-2-2m3.54 14.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.13-2.12l1.42-1.42L19 17.59l2.12-2.13Z"></svg:path>`,
})
export class MdiBookRemoveMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookRemoveOutlineIcon],svg[mdi-book-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zm9.45-3.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiBookRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookSearchIcon],svg[mdi-book-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v7.81A6.48 6.48 0 0 0 15.5 10A6.5 6.5 0 0 0 9 16.5c0 2.31 1.21 4.35 3.03 5.5z"></svg:path>`,
})
export class MdiBookSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookSearchOutlineIcon],svg[mdi-book-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M13 4v8l-2.5-2.25L8 12V4H6v16h4c.54.81 1.23 1.5 2.03 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.81c-.58-.55-1.25-1-2-1.31V4z"></svg:path>`,
})
export class MdiBookSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookSettingsIcon],svg[mdi-book-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v16c0 1.11-.89 2-2 2H6c-1.11 0-2-.89-2-2V2c0-1.105.89-2 2-2h1v7l2.5-1.5L12 7V0h6a2 2 0 0 1 2 2M7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"></svg:path>`,
})
export class MdiBookSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookSettingsOutlineIcon],svg[mdi-book-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 0H6C4.89 0 4 .895 4 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V2c0-1.105-.89-2-2-2m0 18H6V2h2v8l2.5-2.25L13 10V2h5zM7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiBookSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookSyncIcon],svg[mdi-book-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.5c0 1.75.69 3.33 1.82 4.5H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v7.03c-.16-.03-.33-.03-.5-.03a6.5 6.5 0 0 0-6.5 6.5m6 2.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5zm0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class MdiBookSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookSyncOutlineIcon],svg[mdi-book-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 20c.31.75.76 1.42 1.32 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.03c-.16-.03-.33-.03-.5-.03c-.5 0-1 .07-1.5.18V4h-5v8l-2.5-2.25L8 12V4H6v16zm5.5 0a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5zm0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class MdiBookSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookVariantIcon],svg[mdi-book-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h5v8l-2.5-1.5L6 12M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiBookVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookVariantMultipleIcon],svg[mdi-book-variant-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6m16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 10l-2.5-1.5L15 12V4h5v8Z"></svg:path>`,
})
export class MdiBookVariantMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkIcon],svg[mdi-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7a2 2 0 0 0-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkBoxIcon],svg[mdi-bookmark-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 11l-2.5-1.5L13 14V6h5z"></svg:path>`,
})
export class MdiBookmarkBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkBoxMultipleIcon],svg[mdi-bookmark-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10l-2.5-1.5L15 12V4h5z"></svg:path>`,
})
export class MdiBookmarkBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkBoxMultipleOutlineIcon],svg[mdi-bookmark-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h14v2H4c-1.1 0-2-.9-2-2V6h2zM22 4v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2m-2 0H8v12h12zm-2 2h-5v7l2.5-1.5L18 13z"></svg:path>`,
})
export class MdiBookmarkBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkBoxOutlineIcon],svg[mdi-bookmark-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m14 16V5H5v14zM17 7h-5v8l2.5-1.5L17 15z"></svg:path>`,
})
export class MdiBookmarkBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkCheckIcon],svg[mdi-bookmark-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v16l-7-3l-7 3V5a2 2 0 0 1 2-2zm-6 11l6.25-6.24l-1.41-1.42L11 11.18L8.41 8.59L7 10z"></svg:path>`,
})
export class MdiBookmarkCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkCheckOutlineIcon],svg[mdi-bookmark-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.47 9.65l-1.41 1.42L11 14l5.19-5.18l-1.41-1.42L11 11.18M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7 18V5h10Z"></svg:path>`,
})
export class MdiBookmarkCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMinusIcon],svg[mdi-bookmark-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7a2 2 0 0 0-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2m-2 8H9V9h6z"></svg:path>`,
})
export class MdiBookmarkMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMinusOutlineIcon],svg[mdi-bookmark-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V9h6v2zm10-6v16l-7-3l-7 3V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2m-2 0H7v13l5-2.18L17 18z"></svg:path>`,
})
export class MdiBookmarkMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMultipleIcon],svg[mdi-bookmark-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5a2 2 0 0 1 2 2v16l-7-3l-7 3V7a2 2 0 0 1 2-2zM9 1h10a2 2 0 0 1 2 2v16l-2-.87V3H7a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiBookmarkMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMultipleOutlineIcon],svg[mdi-bookmark-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h10a2 2 0 0 1 2 2v16l-2-.87V3H7a2 2 0 0 1 2-2m6 19V7H5v13l5-2.18zm0-15a2 2 0 0 1 2 2v16l-7-3l-7 3V7a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiBookmarkMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMusicIcon],svg[mdi-bookmark-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v16l-7-3l-7 3V5a2 2 0 0 1 2-2zm-6 8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V8h3V6h-4v5.27c-.29-.17-.64-.27-1-.27"></svg:path>`,
})
export class MdiBookmarkMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMusicOutlineIcon],svg[mdi-bookmark-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c-1.1 0-2 .9-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2zm0 2h10v13l-5-2.18L7 18zm5 1v5.3c-.3-.2-.6-.3-1-.3a2 2 0 1 0 0 4c1.11 0 2-.89 2-2V8h2V6z"></svg:path>`,
})
export class MdiBookmarkMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkOffIcon],svg[mdi-bookmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20.72L18.73 22l-1.95-1.95L12 18l-7 3V8.27l-3-3L3.28 4zm-1-3.56V5a2 2 0 0 0-2-2H7c-.59 0-1.11.27-1.5.68z"></svg:path>`,
})
export class MdiBookmarkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkOffOutlineIcon],svg[mdi-bookmark-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 4L2 5.27l3 3V21l7-3l4.78 2.05L18.73 22L20 20.72zM7 18v-7.73l6 5.98l-1-.43zM7 5.16L5.5 3.67C5.88 3.26 6.41 3 7 3h10a2 2 0 0 1 2 2v12.16l-2-2V5H7z"></svg:path>`,
})
export class MdiBookmarkOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkOutlineIcon],svg[mdi-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 18l-5-2.18L7 18V5h10m0-2H7a2 2 0 0 0-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkPlusIcon],svg[mdi-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v16l-7-3l-7 3V5a2 2 0 0 1 2-2zm-6 4v2H9v2h2v2h2v-2h2V9h-2V7z"></svg:path>`,
})
export class MdiBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkPlusOutlineIcon],svg[mdi-bookmark-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18V5H7v13l5-2.18zm0-15a2 2 0 0 1 2 2v16l-7-3l-7 3V5a2 2 0 0 1 2-2zm-6 4h2v2h2v2h-2v2h-2v-2H9V9h2z"></svg:path>`,
})
export class MdiBookmarkPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkRemoveIcon],svg[mdi-bookmark-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v16l-7-3l-7 3V5a2 2 0 0 1 2-2zM8.17 8.58L10.59 11l-2.42 2.41l1.42 1.42L12 12.41l2.41 2.42l1.42-1.42L13.41 11l2.42-2.42l-1.42-1.41L12 9.58L9.59 7.17z"></svg:path>`,
})
export class MdiBookmarkRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkRemoveOutlineIcon],svg[mdi-bookmark-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c-1.1 0-2 .9-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2zm0 2h10v13l-5-2.18L7 18zm2.88 2.47L8.47 8.88L10.59 11l-2.12 2.12l1.41 1.42L12 12.42l2.12 2.11l1.42-1.41L13.42 11l2.11-2.12l-1.41-1.41L12 9.59z"></svg:path>`,
})
export class MdiBookmarkRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBookshelfIcon],svg[mdi-bookshelf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v15h3V3zm3 2l4 13l3-1l-4-13zM5 5v13h3V5zM3 19v2h18v-2z"></svg:path>`,
})
export class MdiBookshelfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateIcon],svg[mdi-boom-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9H8.22A2.97 2.97 0 0 0 4 8.8c-.64.56-1 1.36-1 2.2v9a1 1 0 0 0-1 1v1h8v-1a1 1 0 0 0-1-1v-7h11a2 2 0 0 0 2-2a2 2 0 0 0-2-2M6 12.5A1.5 1.5 0 0 1 4.5 11A1.5 1.5 0 0 1 6 9.5A1.5 1.5 0 0 1 7.5 11A1.5 1.5 0 0 1 6 12.5m4.5-.5L9 10h1.5l1.5 2zm4 0L13 10h1.5l1.5 2zm4 0L17 10h1.5l1.5 2z"></svg:path>`,
})
export class MdiBoomGateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateAlertIcon],svg[mdi-boom-gate-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 3c-.6-1-1.8-1.3-2.7-.7L6.9 8.2C6.6 8.1 6.3 8 6 8c-1.7 0-3 1.3-3 3v9c-.6 0-1 .4-1 1v1h8v-1c0-.6-.4-1-1-1v-8.4l10.1-5.8c1-.6 1.3-1.8.8-2.8M6 12.5c-.8 0-1.5-.7-1.5-1.5S5.2 9.5 6 9.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m4.4-2.9l-2.3-1l1.3-.8l2.3 1zm3.5-2l-2.3-1l1.3-.8l2.3 1zm3.4-2l-2.3-1l1.3-.8l2.3 1zM20 18h-2v2h2zm0-8h-2v6h2z"></svg:path>`,
})
export class MdiBoomGateAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateAlertOutlineIcon],svg[mdi-boom-gate-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 3c-.6-1-1.8-1.3-2.7-.7L6.9 8.2C6.6 8.1 6.3 8 6 8c-1.7 0-3 1.3-3 3v9c-.6 0-1 .4-1 1v1h8v-1c0-.6-.4-1-1-1v-8.4l10.1-5.8c1-.6 1.3-1.8.8-2.8M7.5 20h-3v-6.4c.9.5 2.1.5 3 0zM6 12.5c-.8 0-1.5-.7-1.5-1.5S5.2 9.5 6 9.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m4.4-2.9l-2.3-1l1.3-.8l2.3 1zm3.5-2l-2.3-1l1.3-.8l2.3 1zm3.4-2l-2.3-1l1.3-.8l2.3 1zM20 16h-2v-6h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiBoomGateAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateArrowDownIcon],svg[mdi-boom-gate-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.86 3a1.995 1.995 0 0 0-2.74-.73L6.92 8.16C6.62 8.06 6.31 8 6 8a3 3 0 0 0-3 3v9a1 1 0 0 0-1 1v1h8v-1a1 1 0 0 0-1-1v-8.42l10.12-5.85c.96-.55 1.29-1.77.74-2.73M6 12.5A1.5 1.5 0 0 1 4.5 11A1.5 1.5 0 0 1 6 9.5A1.5 1.5 0 0 1 7.5 11A1.5 1.5 0 0 1 6 12.5m4.4-2.88l-2.3-1l1.3-.75l2.3 1zm3.46-2l-2.3-1l1.3-.75l2.3 1zm3.47-2l-2.3-1l1.3-.75l2.29 1zM17 20l-5-5h3v-4h4v4h3z"></svg:path>`,
})
export class MdiBoomGateArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateArrowDownOutlineIcon],svg[mdi-boom-gate-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.86 3c.55.96.22 2.18-.74 2.73L9 11.58V20a1 1 0 0 1 1 1v1H2v-1a1 1 0 0 1 1-1v-9a3 3 0 0 1 3-3c.31 0 .62.06.92.16l10.2-5.89c.97-.56 2.19-.23 2.74.73M7.5 20v-6.4c-.93.54-2.07.54-3 0V20zM6 12.5A1.5 1.5 0 0 0 7.5 11A1.5 1.5 0 0 0 6 9.5A1.5 1.5 0 0 0 4.5 11A1.5 1.5 0 0 0 6 12.5m4.4-2.88l1.3-.75l-2.3-1l-1.3.75zm3.46-2l1.3-.75l-2.3-1l-1.3.75zm3.47-2l1.29-.75l-2.29-1l-1.3.75zM16 11.16h2v5.01l3-.01L17 20l-4-3.84l3 .01z"></svg:path>`,
})
export class MdiBoomGateArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateArrowUpIcon],svg[mdi-boom-gate-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.86 3a1.995 1.995 0 0 0-2.74-.73L6.92 8.16C6.62 8.06 6.31 8 6 8a3 3 0 0 0-3 3v9a1 1 0 0 0-1 1v1h8v-1a1 1 0 0 0-1-1v-8.42l10.12-5.85c.96-.55 1.29-1.77.74-2.73M6 12.5A1.5 1.5 0 0 1 4.5 11A1.5 1.5 0 0 1 6 9.5A1.5 1.5 0 0 1 7.5 11A1.5 1.5 0 0 1 6 12.5m4.4-2.88l-2.3-1l1.3-.75l2.3 1zm3.46-2l-2.3-1l1.3-.75l2.3 1zm3.47-2l-2.3-1l1.3-.75l2.29 1zM17 11l5 5h-3v4h-4v-4h-3z"></svg:path>`,
})
export class MdiBoomGateArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateArrowUpOutlineIcon],svg[mdi-boom-gate-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.86 3c.55.96.22 2.18-.74 2.73L9 11.58V20a1 1 0 0 1 1 1v1H2v-1a1 1 0 0 1 1-1v-9a3 3 0 0 1 3-3c.31 0 .62.06.92.16l10.2-5.89c.97-.56 2.19-.23 2.74.73M7.5 20v-6.4c-.93.54-2.07.54-3 0V20zM6 12.5A1.5 1.5 0 0 0 7.5 11A1.5 1.5 0 0 0 6 9.5A1.5 1.5 0 0 0 4.5 11A1.5 1.5 0 0 0 6 12.5m4.4-2.88l1.3-.75l-2.3-1l-1.3.75zm3.46-2l1.3-.75l-2.3-1l-1.3.75zm3.47-2l1.29-.75l-2.29-1l-1.3.75zM16 20v-5h-3l4-3.84L21 15h-3v5z"></svg:path>`,
})
export class MdiBoomGateArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateOutlineIcon],svg[mdi-boom-gate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9H8.22A2.97 2.97 0 0 0 4 8.8c-.64.56-1 1.36-1 2.2v9a1 1 0 0 0-1 1v1h8v-1a1 1 0 0 0-1-1v-7h11a2 2 0 0 0 2-2a2 2 0 0 0-2-2M7.5 20h-3v-6.4c.93.54 2.07.54 3 0zM6 12.5A1.5 1.5 0 0 1 4.5 11A1.5 1.5 0 0 1 6 9.5A1.5 1.5 0 0 1 7.5 11A1.5 1.5 0 0 1 6 12.5m4.5-.5L9 10h1.5l1.5 2zm4 0L13 10h1.5l1.5 2zm4 0L17 10h1.5l1.5 2z"></svg:path>`,
})
export class MdiBoomGateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateUpIcon],svg[mdi-boom-gate-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 3c-.6-1-1.8-1.3-2.7-.7L6.9 8.2C6.6 8.1 6.3 8 6 8c-1.7 0-3 1.3-3 3v9c-.6 0-1 .4-1 1v1h8v-1c0-.6-.4-1-1-1v-8.4l10.1-5.8c1-.6 1.3-1.8.8-2.8M6 12.5c-.8 0-1.5-.7-1.5-1.5S5.2 9.5 6 9.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m4.4-2.9l-2.3-1l1.3-.8l2.3 1zm3.5-2l-2.3-1l1.3-.8l2.3 1zm3.4-2l-2.3-1l1.3-.8l2.3 1z"></svg:path>`,
})
export class MdiBoomGateUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomGateUpOutlineIcon],svg[mdi-boom-gate-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 3c-.6-1-1.8-1.3-2.7-.7L6.9 8.2C6.6 8.1 6.3 8 6 8c-1.7 0-3 1.3-3 3v9c-.6 0-1 .4-1 1v1h8v-1c0-.6-.4-1-1-1v-8.4l10.1-5.8c1-.6 1.3-1.8.8-2.8M7.5 20h-3v-6.4c.9.5 2.1.5 3 0zM6 12.5c-.8 0-1.5-.7-1.5-1.5S5.2 9.5 6 9.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m4.4-2.9l-2.3-1l1.3-.8l2.3 1zm3.5-2l-2.3-1l1.3-.8l2.3 1zm3.4-2l-2.3-1l1.3-.8l2.3 1z"></svg:path>`,
})
export class MdiBoomGateUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomboxIcon],svg[mdi-boombox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5L5 7v1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2V7l-2-2zm0 2h10v1H7zm4 2h2a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5m-3.5 1.5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m9 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m-9 1.5A1.5 1.5 0 0 0 6 13.5A1.5 1.5 0 0 0 7.5 15A1.5 1.5 0 0 0 9 13.5A1.5 1.5 0 0 0 7.5 12m9 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiBoomboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoomerangIcon],svg[mdi-boomerang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H4c-1.1 0-2 .9-2 2s.9 2 2 2h4zm8 0c2.2 0 4 1.8 4 4v6l-4 2c0-4.4-3.6-8-8-8l2-4zm0 18v-4l4-2v6c0 1.1-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class MdiBoomerangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBootstrapIcon],svg[mdi-bootstrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59c0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26c0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91"></svg:path>`,
})
export class MdiBootstrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderAllIcon],svg[mdi-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-6V5h6m0 14h-6v-6h6m-8-2H5V5h6m0 14H5v-6h6m-8 8h18V3H3z"></svg:path>`,
})
export class MdiBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderAllVariantIcon],svg[mdi-border-all-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM5 5v14h14V5z"></svg:path>`,
})
export class MdiBorderAllVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderBottomIcon],svg[mdi-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15H3v2h2m-2 4h18v-2H3m2-8H3v2h2m14-4h2V7h-2m0-2h2V3h-2M5 7H3v2h2m14 8h2v-2h-2m0-2h2v-2h-2m-2-8h-2v2h2m-4-2h-2v2h2m4 6h-2v2h2m-4-6h-2v2h2M5 3H3v2h2m8 6h-2v2h2M9 3H7v2h2m4 10h-2v2h2m-4-6H7v2h2z"></svg:path>`,
})
export class MdiBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderBottomVariantIcon],svg[mdi-border-bottom-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15H3v2h2m-2 4h18v-2H3m2-8H3v2h2m14-4h2V7h-2m0-2h2V3h-2M5 7H3v2h2m14 8h2v-2h-2m0-2h2v-2h-2m-2-8h-2v2h2m-4-2h-2v2h2M5 3H3v2h2m4-2H7v2h2"></svg:path>`,
})
export class MdiBorderBottomVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderColorIcon],svg[mdi-border-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.71 4.04c.39-.39.39-1.04 0-1.41L18.37.29C18-.1 17.35-.1 16.96.29L15 2.25L18.75 6m-1 1L14 3.25l-10 10V17h3.75z"></svg:path>`,
})
export class MdiBorderColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderHorizontalIcon],svg[mdi-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h2v-2h-2m-4 2h2v-2h-2m-4-2h2v-2h-2m8-6h2V7h-2m0-2h2V3h-2M3 13h18v-2H3m8 10h2v-2h-2m8-2h2v-2h-2M13 3h-2v2h2m0 2h-2v2h2m4-6h-2v2h2M9 3H7v2h2M5 3H3v2h2m2 16h2v-2H7m-4-2h2v-2H3m2-8H3v2h2M3 21h2v-2H3z"></svg:path>`,
})
export class MdiBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderInsideIcon],svg[mdi-border-inside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h2v-2h-2m0 6h2v-2h-2M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8m2 10h2v-2h-2m4-14h2V3h-2m0 6h2V7h-2m-2-4h-2v2h2M5 3H3v2h2m4-2H7v2h2M3 17h2v-2H3m2-8H3v2h2m2 12h2v-2H7m-4 2h2v-2H3z"></svg:path>`,
})
export class MdiBorderInsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderLeftIcon],svg[mdi-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h2V3h-2m0 10h2v-2h-2m4 10h2v-2h-2m0-6h2v-2h-2m0-6h2V3h-2m0 14h2v-2h-2m-4 6h2v-2h-2m4-10h2V7h-2M3 21h2V3H3m4 10h2v-2H7m0-6h2V3H7m0 18h2v-2H7m4-6h2v-2h-2m0-2h2V7h-2m0-2h2V3h-2m0 14h2v-2h-2m0 6h2v-2h-2z"></svg:path>`,
})
export class MdiBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderLeftVariantIcon],svg[mdi-border-left-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h2V3h-2m4 18h2v-2h-2m0-6h2v-2h-2m0-6h2V3h-2m0 14h2v-2h-2m-4 6h2v-2h-2m4-10h2V7h-2M3 21h2V3H3m4 2h2V3H7m0 18h2v-2H7m4-14h2V3h-2m0 18h2v-2h-2z"></svg:path>`,
})
export class MdiBorderLeftVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderNoneIcon],svg[mdi-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h2V3h-2m0 10h2v-2h-2m0 10h2v-2h-2M11 5h2V3h-2m8 2h2V3h-2m-8 6h2V7h-2m8 2h2V7h-2m0 14h2v-2h-2m0-6h2v-2h-2m0 6h2v-2h-2m-8-2h2v-2h-2M3 5h2V3H3m0 6h2V7H3m0 6h2v-2H3m0 6h2v-2H3m0 6h2v-2H3m8 2h2v-2h-2m0-2h2v-2h-2m-4 6h2v-2H7m0-6h2v-2H7m0-6h2V3H7z"></svg:path>`,
})
export class MdiBorderNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderNoneVariantIcon],svg[mdi-border-none-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h2V3h-2m0 18h2v-2h-2M11 5h2V3h-2m8 2h2V3h-2m0 6h2V7h-2m0 14h2v-2h-2m0-6h2v-2h-2m0 6h2v-2h-2M3 5h2V3H3m0 6h2V7H3m0 6h2v-2H3m0 6h2v-2H3m0 6h2v-2H3m8 2h2v-2h-2m-4 2h2v-2H7M7 5h2V3H7z"></svg:path>`,
})
export class MdiBorderNoneVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderOutsideIcon],svg[mdi-border-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H7v2h2m4 2h-2v2h2m6 2H5V5h14M3 21h18V3H3m14 8h-2v2h2m-4-2h-2v2h2m0-6h-2v2h2z"></svg:path>`,
})
export class MdiBorderOutsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderRadiusIcon],svg[mdi-border-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16c0 2.8 2.2 5 5 5h2v-2H8c-1.7 0-3-1.3-3-3v-2H3zm18-8c0-2.8-2.2-5-5-5h-2v2h2c1.7 0 3 1.3 3 3v2h2zm-5 13c2.8 0 5-2.2 5-5v-2h-2v2c0 1.7-1.3 3-3 3h-2v2zM8 3C5.2 3 3 5.2 3 8v2h2V8c0-1.7 1.3-3 3-3h2V3z"></svg:path>`,
})
export class MdiBorderRadiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderRightIcon],svg[mdi-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2V7h-2m0-2h2V3h-2m0 10h2v-2h-2m4-6h2V3h-2m0 18h2v-2h-2m4 2h2V3h-2m-4 10h2v-2h-2m-4 6h2v-2h-2M3 9h2V7H3m0 10h2v-2H3m0-2h2v-2H3m8 10h2v-2h-2m-8 2h2v-2H3m4-6h2v-2H7m0-6h2V3H7M3 5h2V3H3m4 18h2v-2H7z"></svg:path>`,
})
export class MdiBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderRightVariantIcon],svg[mdi-border-right-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h2V3h-2m4 2h2V3h-2m0 18h2v-2h-2m4 2h2V3h-2M3 9h2V7H3m0 10h2v-2H3m0-2h2v-2H3m8 10h2v-2h-2m-8 2h2v-2H3M7 5h2V3H7M3 5h2V3H3m4 18h2v-2H7z"></svg:path>`,
})
export class MdiBorderRightVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderStyleIcon],svg[mdi-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2m4 2h2v-2h-2M7 21h2v-2H7m4 2h2v-2h-2m8-2h2v-2h-2m0-2h2v-2h-2M3 3v18h2V5h16V3m-2 6h2V7h-2"></svg:path>`,
})
export class MdiBorderStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderTopIcon],svg[mdi-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h2v-2h-2m4 10h2v-2h-2M11 9h2V7h-2m4 14h2v-2h-2m4-2h2v-2h-2M3 5h18V3H3m16 10h2v-2h-2m0-2h2V7h-2m-8 10h2v-2h-2M3 9h2V7H3m0 6h2v-2H3m0 10h2v-2H3m0-2h2v-2H3m8 6h2v-2h-2m0-6h2v-2h-2m-4 2h2v-2H7m0 10h2v-2H7z"></svg:path>`,
})
export class MdiBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderTopVariantIcon],svg[mdi-border-top-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h2v-2h-2m-4 2h2v-2h-2m4-2h2v-2h-2M3 5h18V3H3m16 10h2v-2h-2m0-2h2V7h-2M3 9h2V7H3m0 6h2v-2H3m0 10h2v-2H3m0-2h2v-2H3m8 6h2v-2h-2m-4 2h2v-2H7z"></svg:path>`,
})
export class MdiBorderTopVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBorderVerticalIcon],svg[mdi-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h2v-2h-2m0 10h2v-2h-2m0-14h2V3h-2m4 6h2V7h-2m0-2h2V3h-2m0 10h2v-2h-2m0 10h2v-2h-2m-8 2h2V3h-2m8 14h2v-2h-2M7 5h2V3H7M3 17h2v-2H3m0 6h2v-2H3m0-6h2v-2H3m4 2h2v-2H7m0 10h2v-2H7M3 5h2V3H3m0 6h2V7H3z"></svg:path>`,
})
export class MdiBorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleSodaIcon],svg[mdi-bottle-soda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-9a2 2 0 0 1 .6-1.42C11.1 7.89 11 4 11 4h-1V2h4v2h-1s-.1 3.89 1.4 5.58A2 2 0 0 1 15 11"></svg:path>`,
})
export class MdiBottleSodaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleSodaClassicIcon],svg[mdi-bottle-soda-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13.77a3 3 0 0 0 0 4.46V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.77a3 3 0 0 0 0-4.46V9a12.3 12.3 0 0 0 1.91-5H10V2h4v2h-.91A12.3 12.3 0 0 0 15 9Z"></svg:path>`,
})
export class MdiBottleSodaClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleSodaClassicOutlineIcon],svg[mdi-bottle-soda-classic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v2h.91C10.65 5.79 9 7.5 8 9v4.77a3.007 3.007 0 0 1 0 4.46V20a2 2 0 0 0 2 2h4c1.11 0 2-.89 2-2v-1.77a3.007 3.007 0 0 1 0-4.46V9c-1-1.5-2.65-3.21-2.91-5H14V2m-2 4.5c.24.5 1.54 2 1.9 2.41L14 9v4c-.65.87-1 1.92-1 3s.35 2.13 1 3v1h-4v-1c.65-.87 1-1.92 1-3s-.35-2.13-1-3V9l.1-.09C10.46 8.5 11.76 7 12 6.5"></svg:path>`,
})
export class MdiBottleSodaClassicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleSodaOutlineIcon],svg[mdi-bottle-soda-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 9.58C12.9 7.89 13 4 13 4h1V2h-4v2h1s.1 3.89-1.4 5.58A2 2 0 0 0 9 11v9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-.6-1.42M13 20h-2v-9l.1-.09A6.3 6.3 0 0 0 12 9.5a6.3 6.3 0 0 0 .9 1.41l.1.09Z"></svg:path>`,
})
export class MdiBottleSodaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicIcon],svg[mdi-bottle-tonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2l-1-2h4zm6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5"></svg:path>`,
})
export class MdiBottleTonicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicOutlineIcon],svg[mdi-bottle-tonic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2l-1-2h4zm6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5m-2 0c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v7h10z"></svg:path>`,
})
export class MdiBottleTonicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicPlusIcon],svg[mdi-bottle-tonic-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2l-1-2h4zm1 4V6h1V5H9v1h1v2c-2.76 0-5 2.24-5 5v9h14v-9c0-2.76-2.24-5-5-5m2 9h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class MdiBottleTonicPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicPlusOutlineIcon],svg[mdi-bottle-tonic-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2l-1-2h4zm6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5m-2 0c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v7h10zm-2 3h-2v2h-2v-2H9v-2h2v-2h2v2h2z"></svg:path>`,
})
export class MdiBottleTonicPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicSkullIcon],svg[mdi-bottle-tonic-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5m-6-9l1-2h-4l1 2zm-1 7c-2.21 0-4 1.79-4 4c0 1 .39 1.9 1 2.59V19h1.25v-1.5h1.13V19h1.25v-1.5h1.12V19H15v-1.41A3.9 3.9 0 0 0 16 15c0-2.21-1.79-4-4-4m-1.5 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m.75 1.25L12 15l.75 1.25zM13.5 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiBottleTonicSkullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicSkullOutlineIcon],svg[mdi-bottle-tonic-skull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2l-1-2h4zm1 4V6h1V5H9v1h1v2c-2.76 0-5 2.24-5 5v9h14v-9c0-2.76-2.24-5-5-5m3 12H7v-7c0-1.65 1.35-3 3-3h4c1.65 0 3 1.35 3 3zm-5-9c-2.21 0-4 1.79-4 4c0 1 .39 1.9 1 2.59V19h1.25v-1.5h1.13V19h1.25v-1.5h1.12V19H15v-1.41A3.9 3.9 0 0 0 16 15c0-2.21-1.79-4-4-4m-1.5 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m.75 1.25L12 15l.75 1.25zM13.5 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiBottleTonicSkullOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleWineIcon],svg[mdi-bottle-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22a1 1 0 0 1-1-1V11c0-2 1-3.75 2-4V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V7c1 .25 2 2 2 4v10a1 1 0 0 1-1 1z"></svg:path>`,
})
export class MdiBottleWineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBottleWineOutlineIcon],svg[mdi-bottle-wine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2c-.28 0-.5.22-.5.5V7c-.07 0-.15 0-.22.03c-.96.24-1.57.97-2.02 1.86C8.3 9.76 8 10.84 8 12c.05 3 0 6.03 0 9c0 .55.45 1 1 1h6c.55 0 1-.45 1-1c.04-3 0-6 0-9c0-1.16-.26-2.24-.72-3.12c-.45-.88-1.06-1.61-2.02-1.84C13.18 7 13.05 7 13 7V2.5c0-.28-.22-.5-.5-.5M12 8.85c.32 0 .63.05.78.15c.07.03.42.26.72.81c.28.56.5 1.36.5 2.19v8h-4v-8c0-.83.22-1.63.5-2.19c.3-.55.65-.78.72-.81c.14-.1.46-.15.78-.15"></svg:path>`,
})
export class MdiBottleWineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBowArrowIcon],svg[mdi-bow-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.03 6.03L20 7l2-5l-5 2l.97.97l-1.82 1.82C10.87 2.16 3.3 3.94 2.97 4L2 4.26l.5 1.94l.79-.2l6.83 6.82L6.94 16H5l-3 3l2 1l1 2l3-3v-1.94l3.18-3.18L18 20.71l-.19.79l1.93.5l.26-.97c.06-.33 1.84-7.9-2.79-13.18zM4.5 5.78c2.05-.28 6.78-.5 10.23 2.43l-3.91 3.91zM18.22 19.5l-6.34-6.32l3.91-3.91c2.93 3.45 2.71 8.18 2.43 10.23"></svg:path>`,
})
export class MdiBowArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBowTieIcon],svg[mdi-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 14l6 3V7l-6 3zm-6 0l-6 3V7l6 3zm1-4h4v4h-4z"></svg:path>`,
})
export class MdiBowTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBowlIcon],svg[mdi-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15c0 3.9-3.1 7-7 7H9c-3.9 0-7-3.1-7-7v-3h20z"></svg:path>`,
})
export class MdiBowlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBowlMixIcon],svg[mdi-bowl-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.2 11l4.1-6.5l1.7 1l-3.4 5.5zm-.6 1H2v3c0 3.9 3.1 7 7 7h6c3.9 0 7-3.1 7-7v-3z"></svg:path>`,
})
export class MdiBowlMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBowlMixOutlineIcon],svg[mdi-bowl-mix-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 12H2v3c0 3.9 3.1 7 7 7h6c3.9 0 7-3.1 7-7v-3zm4.4 3c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5v-1h16zm-3.8-4l4.1-6.6L22 5.5L18.6 11z"></svg:path>`,
})
export class MdiBowlMixOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBowlOutlineIcon],svg[mdi-bowl-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v3c0 3.9 3.1 7 7 7h6c3.9 0 7-3.1 7-7v-3zm2 2h16v1c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5z"></svg:path>`,
})
export class MdiBowlOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBowlingIcon],svg[mdi-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m.5 9a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5M12 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M5.93 8.5c-.55.95-.22 2.17.73 2.72c.96.56 2.18.23 2.74-.72c.55-.97.22-2.19-.74-2.74c-.95-.55-2.16-.23-2.73.74"></svg:path>`,
})
export class MdiBowlingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxIcon],svg[mdi-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.39 14.04a2.57 2.57 0 0 0-2.57-2.57a2.565 2.565 0 1 0 2.57 2.57m1.71 0a4.274 4.274 0 0 1-8.05 2A4.274 4.274 0 0 1 1 14.11V7c0-.44.39-.82.86-.82s.84.38.85.82v3.62c.72-.54 1.61-.86 2.57-.86c1.63 0 3.05.92 3.77 2.27a4.27 4.27 0 0 1 3.77-2.27c2.36 0 4.28 1.92 4.28 4.28m-9.26 0c0-1.42-1.15-2.57-2.56-2.57a2.57 2.57 0 0 0-2.57 2.57a2.565 2.565 0 0 0 5.13 0m15 2.92c.11.16.16.34.16.51c0 .26-.12.53-.34.68a.9.9 0 0 1-.51.17c-.25 0-.5-.11-.65-.32l-1.91-2.53L17.7 18c-.17.21-.42.32-.67.32c-.18 0-.36-.06-.53-.17c-.21-.15-.33-.43-.33-.69c0-.17.06-.35.16-.5l2.17-2.92l-2.17-2.93a.83.83 0 0 1-.16-.5c0-.26.12-.51.33-.68c.39-.28.91-.21 1.2.16l1.89 2.52l1.91-2.52c.26-.37.79-.44 1.16-.16c.23.17.34.43.34.7c0 .17-.05.34-.16.48l-2.18 2.93z"></svg:path>`,
})
export class MdiBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxCutterIcon],svg[mdi-box-cutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.22 11.91c-.33.33-.51.74-.56 1.17l5.51 2.36l8.49-8.48c.78-.79.78-2.05 0-2.83l-1.42-1.42c-.78-.78-2.04-.78-2.83 0zM5 16v5.75l5.81-5.22l-5-2zM17.12 4.83c.38-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42s-1.04.39-1.42 0c-.39-.39-.39-1.02 0-1.42"></svg:path>`,
})
export class MdiBoxCutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxCutterOffIcon],svg[mdi-box-cutter-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-7.98-7.98l-.69.69l-5.51-2.36c.05-.43.23-.84.56-1.17l1.4-1.41L1.11 3l1.28-1.27l19.72 19.73zm-5.43-10.52l-4.25-4.25l5.25-5.25c.79-.78 2.05-.78 2.83 0l1.42 1.42c.78.78.78 2.04 0 2.83zm1.71-5.96c.38.39 1.03.39 1.42 0s.39-1.02 0-1.42c-.39-.39-1.04-.39-1.42 0c-.39.4-.39 1.03 0 1.42M5 16v5.75l5.81-5.22l-5-2z"></svg:path>`,
})
export class MdiBoxCutterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxDownloadIcon],svg[mdi-box-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.996 3h14.012l1.728 2.993l-.006.004c.172.294.27.637.27 1.003v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-.362.096-.702.264-.994l-.003-.002L4.996 3zm.577 1l-.577 1H19.008l-.578-1H5.573zM7 12l5 5l5-5h-3v-2h-4v2H7z" fill="currentColor"></svg:path>`,
})
export class MdiBoxDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxShadowIcon],svg[mdi-box-shadow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h15v15H3zm16 16h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm-3 12h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7z"></svg:path>`,
})
export class MdiBoxShadowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxUploadIcon],svg[mdi-box-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.996 3h14.012l1.728 2.993l-.006.004c.172.294.27.637.27 1.003v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-.362.096-.702.264-.994l-.003-.002L4.996 3zm.577 1l-.577 1H19.008l-.578-1H5.573zM7 15h3v2h4v-2h3l-5-5l-5 5z" fill="currentColor"></svg:path>`,
})
export class MdiBoxUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxingGloveIcon],svg[mdi-boxing-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16V6h3v10zM12 4H7S2 4 2 8v6c0 1.77 1 2.76 2.07 3.31A3.996 3.996 0 0 1 8 14h3v2H8a2 2 0 0 0-2 2a2 2 0 0 0 2 2h5c4 0 4-4 4-4V6s-1-2-5-2"></svg:path>`,
})
export class MdiBoxingGloveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBoxingGlovesIcon],svg[mdi-boxing-gloves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 16V6h3v10h-3zM12 4H7S2 4 2 8v6c0 1.772.979 2.757 2.07 3.306A4 4 0 0 1 8 14h3v2H8a2 2 0 1 0 0 4h5c4 0 4-4 4-4V6s-1-2-5-2z" fill="currentColor"></svg:path>`,
})
export class MdiBoxingGlovesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrailleIcon],svg[mdi-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.52.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H8c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L7 18zm12.5-6A1.5 1.5 0 0 0 18 3.5A1.5 1.5 0 0 0 19.5 5A1.5 1.5 0 0 0 21 3.5A1.5 1.5 0 0 0 19.5 2m0 5A1.5 1.5 0 0 0 18 8.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 21 8.5A1.5 1.5 0 0 0 19.5 7m-5 0A1.5 1.5 0 0 0 13 8.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 16 8.5A1.5 1.5 0 0 0 14.5 7m5 5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiBrailleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrainIcon],svg[mdi-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45c-.19.47-.58.84-1.06 1l-.79.25a1.69 1.69 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1c-.5.15-1 .23-1.5.23c-.88 0-1.76-.27-2.5-.79c-.53.16-1.07.23-1.62.22c-.79.01-1.57-.15-2.3-.45a4.1 4.1 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11c-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7c1.6-1.5 4.05-1.66 5.83-.37c.42-.11.86-.17 1.3-.17c1.36-.03 2.65.57 3.5 1.64c2.04.53 3.5 2.35 3.58 4.47c.05 1.11-.25 2.2-.86 3.13c.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29c.25.09.51.14.77.21c5.13-.07 4.53-3.2 4.53-3.25a2.59 2.59 0 0 0-2.69-2.49a1 1 0 0 1-1-1a1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3c.05-.29.08-.59.08-.89c-.06-1.24-.62-2.32-2.87-2.53c-1.25-2.96-4.4-1.32-4.4-.4c-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.97.97 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4q-.225-.39-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25zm-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92"></svg:path>`,
})
export class MdiBrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBreadSliceIcon],svg[mdi-bread-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 3.36 10 7.5c0 1.69-.74 3.25-2 4.5v8H4v-8c-1.26-1.25-2-2.81-2-4.5C2 5.36 6.5 2 12 2M8 18h4v-4H8z"></svg:path>`,
})
export class MdiBreadSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBreadSliceOutlineIcon],svg[mdi-bread-slice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 3.36 10 7.5c0 1.69-.74 3.25-2 4.5v8H4v-8c-1.26-1.25-2-2.81-2-4.5C2 5.36 6.5 2 12 2m6 11.14c1.24-.97 2-2.25 2-3.64C20 6.46 16.42 4 12 4S4 6.46 4 9.5c0 1.39.76 2.67 2 3.64V20h12zM8 18v-4h4v4z"></svg:path>`,
})
export class MdiBreadSliceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBridgeIcon],svg[mdi-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14v-3.09c-.72-.33-1.39-.73-2-1.2V14zm-2 4H3v-2H1v-2h2V7h2v1.43C6.8 10 9.27 11 12 11s5.2-1 7-2.57V7h2v7h2v2h-2v2h-2v-2H5zm12-7.09V14h2V9.71c-.61.47-1.28.87-2 1.2M16 14v-2.68c-.64.23-1.31.4-2 .52V14zm-3 0v-2.04L12 12l-1-.04V14zm-3 0v-2.16c-.69-.12-1.36-.29-2-.52V14z"></svg:path>`,
})
export class MdiBridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseIcon],svg[mdi-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"></svg:path>`,
})
export class MdiBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseAccountIcon],svg[mdi-briefcase-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-4V4a2 2 0 0 0-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10 4h4v2h-4zm2 5a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 12 14a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 12 9m5 10H7v-1.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5z"></svg:path>`,
})
export class MdiBriefcaseAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseAccountOutlineIcon],svg[mdi-briefcase-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2zM4 8v11h16V8zm10-2V4h-4v2zm-2 3a2.25 2.25 0 0 1 2.25 2.25c0 1.25-1.01 2.25-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25C9.75 10 10.76 9 12 9m4.5 9h-9v-1.12c0-1.25 2-2.25 4.5-2.25s4.5 1 4.5 2.25z"></svg:path>`,
})
export class MdiBriefcaseAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseArrowLeftRightIcon],svg[mdi-briefcase-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53A5.97 5.97 0 0 0 18 12a6.005 6.005 0 0 0-5.2 9H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zm5 12.5V17h-4v-2h4v-1.5l3 2.5zm-2 .5h4v2h-4v1.5L14 20l3-2.5z"></svg:path>`,
})
export class MdiBriefcaseArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseArrowLeftRightOutlineIcon],svg[mdi-briefcase-arrow-left-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.7 5.7 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2m4 4V4h-4v2zm5 12.5V17h-4v-2h4v-1.5l3 2.5zm-2 .5h4v2h-4v1.5L14 20l3-2.5z"></svg:path>`,
})
export class MdiBriefcaseArrowLeftRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseArrowUpDownIcon],svg[mdi-briefcase-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53A5.97 5.97 0 0 0 18 12a6.005 6.005 0 0 0-5.2 9H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zm3.5 13H19v-4h2v4h1.5L20 22zm-.5-2v4h-2v-4h-1.5l2.5-3l2.5 3z"></svg:path>`,
})
export class MdiBriefcaseArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseArrowUpDownOutlineIcon],svg[mdi-briefcase-arrow-up-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.7 5.7 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2m4 4V4h-4v2zm3.5 13H19v-4h2v4h1.5L20 22zm-.5-2v4h-2v-4h-1.5l2.5-3l2.5 3z"></svg:path>`,
})
export class MdiBriefcaseArrowUpDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseCheckIcon],svg[mdi-briefcase-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2m4 4V4h-4v2zm-3.5 11.5l6.59-6.59l-1.41-1.41l-5.18 5.17l-2.09-2.08L7 14z"></svg:path>`,
})
export class MdiBriefcaseCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseCheckOutlineIcon],svg[mdi-briefcase-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2zM4 8v11h16V8zm10-2V4h-4v2zm-3.54 11.5l6.59-6.59l-1.41-1.41l-5.18 5.17l-2.09-2.08L6.96 14z"></svg:path>`,
})
export class MdiBriefcaseCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseClockIcon],svg[mdi-briefcase-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.11V7a2 2 0 0 0-2-2h-4V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7.26A7 7 0 1 0 21 11.11M9 3h4v2H9m10 15a5 5 0 0 1-6 0a5 5 0 1 1 6 0m-4-7h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69z"></svg:path>`,
})
export class MdiBriefcaseClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseClockOutlineIcon],svg[mdi-briefcase-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.11V7a2 2 0 0 0-.58-1.41A1.87 1.87 0 0 0 19 5h-4V3a1.9 1.9 0 0 0-.58-1.42A1.9 1.9 0 0 0 13 1H9a1.9 1.9 0 0 0-1.42.58A1.9 1.9 0 0 0 7 3v2H3a1.87 1.87 0 0 0-1.42.59A2 2 0 0 0 1 7v11a2 2 0 0 0 .58 1.41A1.87 1.87 0 0 0 3 20h7.26A7 7 0 1 0 21 11.11M9 3h4v2H9M3 18V7h16v2.68A6.84 6.84 0 0 0 16 9a7 7 0 0 0-7 7a7 7 0 0 0 .29 2M19 20a5 5 0 0 1-6 0a4.94 4.94 0 0 1-2-4a5 5 0 0 1 5-5a4.94 4.94 0 0 1 3 1a5 5 0 0 1 0 8m-4-7h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69z"></svg:path>`,
})
export class MdiBriefcaseClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseDownloadIcon],svg[mdi-briefcase-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zm-2 13l5-5h-3v-4h-4v4H7z"></svg:path>`,
})
export class MdiBriefcaseDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseDownloadOutlineIcon],svg[mdi-briefcase-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18l-5-5h3V9h4v4h3zM10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zM4 8v11h16V8z"></svg:path>`,
})
export class MdiBriefcaseDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseEditIcon],svg[mdi-briefcase-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2L10.85 19v2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2zm0 4V4h-4v2zm7.04 6.13c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77l-1.28-1.28a.53.53 0 0 0-.38-.17m-1.97 1.75L13 19.94V22h2.06l6.06-6.07z"></svg:path>`,
})
export class MdiBriefcaseEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseEditOutlineIcon],svg[mdi-briefcase-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.04 12.13c.14 0 .27.06.38.17l1.28 1.28c.22.21.22.56 0 .77l-1 1l-2.05-2.05l1-1c.11-.11.25-.17.39-.17m-1.97 1.75l2.05 2.05L15.06 22H13v-2.06zM10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2l-2 2V8H4v11h7v2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2m4 4V4h-4v2z"></svg:path>`,
})
export class MdiBriefcaseEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseEyeIcon],svg[mdi-briefcase-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-7.9 1.7l-.3-.7l.3-.7c1.3-3.2 4.4-5.3 7.9-5.3c1.9 0 3.6.6 5 1.6V8c0-1.1-.9-2-2-2h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h5.8c-.3-.4-.5-.8-.7-1.3M10 4h4v2h-4zm7 11c-2.7 0-5.1 1.7-6 4c.9 2.3 3.3 4 6 4s5.1-1.7 6-4c-.9-2.3-3.3-4-6-4m0 6.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class MdiBriefcaseEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseEyeOutlineIcon],svg[mdi-briefcase-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0-3c-2.7 0-5.1 1.7-6 4c.9 2.3 3.3 4 6 4s5.1-1.7 6-4c-.9-2.3-3.3-4-6-4m0 6.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5m-7.9-1.8l-.3-.7H4V8h16v5.6c.7.3 1.4.6 2 1.1V8c0-.5-.2-1-.6-1.4S20.6 6 20 6h-4V4c0-.6-.2-1-.6-1.4S14.6 2 14 2h-4c-.6 0-1 .2-1.4.6S8 3.4 8 4v2H4c-.6 0-1 .2-1.4.6S2 7.5 2 8v11c0 .5.2 1 .6 1.4s.8.6 1.4.6h5.8c-.3-.4-.5-.8-.7-1.3M10 4h4v2h-4z"></svg:path>`,
})
export class MdiBriefcaseEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseMinusIcon],svg[mdi-briefcase-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zM10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53A5.97 5.97 0 0 0 18 12a6 6 0 0 0-6 6c0 1.09.29 2.12.8 3H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"></svg:path>`,
})
export class MdiBriefcaseMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseMinusOutlineIcon],svg[mdi-briefcase-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.7 5.7 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2m4 4V4h-4v2zm0 11h8v2h-8z"></svg:path>`,
})
export class MdiBriefcaseMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseOffIcon],svg[mdi-briefcase-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L19.11 21H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h.11l-3-3l1.28-1.27zM22 18.8L8 4.8V4c0-1.11.89-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2zM14 4h-4v2h4z"></svg:path>`,
})
export class MdiBriefcaseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseOffOutlineIcon],svg[mdi-briefcase-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v8.8l2 2V8c0-.55-.2-1-.58-1.41C21.05 6.2 20.58 6 20 6h-4V4c0-.58-.2-1.05-.58-1.42C15.05 2.2 14.58 2 14 2h-4c-.58 0-1.05.2-1.42.58C8.2 2.95 8 3.42 8 4v.8L11.2 8zM10 4h4v2h-4zM2.39 1.73L1.11 3l3 3H4c-.58 0-1.05.2-1.42.59C2.2 7 2 7.45 2 8v11c0 .55.2 1 .58 1.41c.37.39.84.59 1.42.59h15.11l1.73 1.73l1.27-1.27zM4 19V8h2.11l11 11z"></svg:path>`,
})
export class MdiBriefcaseOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseOutlineIcon],svg[mdi-briefcase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2zM4 8v11h16V8zm10-2V4h-4v2z"></svg:path>`,
})
export class MdiBriefcaseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcasePlusIcon],svg[mdi-briefcase-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53A5.97 5.97 0 0 0 18 12a6 6 0 0 0-6 6c0 1.09.29 2.12.8 3H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"></svg:path>`,
})
export class MdiBriefcasePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcasePlusOutlineIcon],svg[mdi-briefcase-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.7 5.7 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2m4 4V4h-4v2zm0 11h3v-3h2v3h3v2h-3v3h-2v-3h-3z"></svg:path>`,
})
export class MdiBriefcasePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseRemoveIcon],svg[mdi-briefcase-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18zM10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53A5.97 5.97 0 0 0 18 12a6 6 0 0 0-6 6c0 1.09.29 2.12.8 3H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"></svg:path>`,
})
export class MdiBriefcaseRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseRemoveOutlineIcon],svg[mdi-briefcase-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.7 5.7 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2m4 4V4h-4v2zm.46 9.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18z"></svg:path>`,
})
export class MdiBriefcaseRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseSearchIcon],svg[mdi-briefcase-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L22 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.03A6.49 6.49 0 0 0 16.5 10a6.5 6.5 0 0 0-6.5 6.5c0 1.75.69 3.33 1.81 4.5H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"></svg:path>`,
})
export class MdiBriefcaseSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseSearchOutlineIcon],svg[mdi-briefcase-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.03c-.5-.8-1.2-1.49-2-2.03V8H4v11h6.5c.31.75.76 1.42 1.31 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zm6.31 12.9l3.08 3.1L22 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4m-3.81.1a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5"></svg:path>`,
})
export class MdiBriefcaseSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseUploadIcon],svg[mdi-briefcase-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zm-2 3l-5 5h3v4h4v-4h3z"></svg:path>`,
})
export class MdiBriefcaseUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseUploadOutlineIcon],svg[mdi-briefcase-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9l5 5h-3v4h-4v-4H7zm-2-7h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zM4 8v11h16V8z"></svg:path>`,
})
export class MdiBriefcaseUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseVariantIcon],svg[mdi-briefcase-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16v-1H3v4c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1zm10-9h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-6 0h-4V5h4z"></svg:path>`,
})
export class MdiBriefcaseVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseVariantOffIcon],svg[mdi-briefcase-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.8L8.1 4.9L10 3h4l2 2v2h4c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-2.8l-7-7H14V5h-4zM2.39 1.73L1.11 3l4 4H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h.11L14 15.89V16h-4v-1H3v4c0 1.11.89 2 2 2h14.1l1.74 1.73l1.27-1.27zM21 17.8V15h-2.8z"></svg:path>`,
})
export class MdiBriefcaseVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseVariantOffOutlineIcon],svg[mdi-briefcase-variant-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.8L8.1 4.9L10 3h4l2 2v2h4c1.1 0 2 .9 2 2v5c0 .73-.41 1.37-1 1.72v2.08L17.2 14H20V9h-7.8l-2-2H14V5h-4zm12.11 14.66l-1.27 1.27L19.1 21H5c-1.11 0-2-.89-2-2v-3.27c-.6-.35-1-.98-1-1.73V9c0-1.1.9-2 2-2h1.11l-4-4l1.28-1.27zM11 15h2v-.11L11.11 13H11zm-2-1v-3h.11l-2-2H4v5zm8.11 5L15 16.89V17H9v-1H5v3z"></svg:path>`,
})
export class MdiBriefcaseVariantOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseVariantOutlineIcon],svg[mdi-briefcase-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2M10 5h4v2h-4zM4 9h16v5h-5v-3H9v3H4zm9 6h-2v-2h2zm6 4H5v-3h4v1h6v-1h4z"></svg:path>`,
})
export class MdiBriefcaseVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightnessIcon],svg[mdi-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 4h4.686L12 .686L15.314 4H20v4.686L23.314 12L20 15.314V20h-4.686L12 23.314L8.686 20H4v-4.686L.686 12L4 8.686V4zm8 2v12a6 6 0 0 0 0-12z" fill="currentColor"></svg:path>`,
})
export class MdiBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness1Icon],svg[mdi-brightness-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiBrightness1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness2Icon],svg[mdi-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c-1.82 0-3.53.5-5 1.35C8 5.08 10 8.3 10 12s-2 6.92-5 8.65C6.47 21.5 8.18 22 10 22a10 10 0 0 0 10-10A10 10 0 0 0 10 2"></svg:path>`,
})
export class MdiBrightness2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness3Icon],svg[mdi-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c-1.05 0-2.05.16-3 .46c4.06 1.27 7 5.04 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46a10 10 0 0 0 10-10A10 10 0 0 0 9 2"></svg:path>`,
})
export class MdiBrightness3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness4Icon],svg[mdi-brightness-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12z"></svg:path>`,
})
export class MdiBrightness4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness5Icon],svg[mdi-brightness-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-2.69L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20z"></svg:path>`,
})
export class MdiBrightness5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness6Icon],svg[mdi-brightness-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18V6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-2.69L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20z"></svg:path>`,
})
export class MdiBrightness6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightness7Icon],svg[mdi-brightness-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12z"></svg:path>`,
})
export class MdiBrightness7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightnessAutoIcon],svg[mdi-brightness-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9zM20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12zm-9.15 3.96h2.3L12 9z"></svg:path>`,
})
export class MdiBrightnessAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrightnessPercentIcon],svg[mdi-brightness-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.04 8.71V4h-4.7L12 .69L8.71 4H4v4.71L.69 12L4 15.34v4.7h4.71L12 23.35l3.34-3.31h4.7v-4.7L23.35 12zM8.83 7.05c.98 0 1.77.79 1.77 1.78a1.77 1.77 0 0 1-1.77 1.77c-.99 0-1.78-.79-1.78-1.77c0-.99.79-1.78 1.78-1.78M15.22 17c-.98 0-1.77-.8-1.77-1.78a1.77 1.77 0 0 1 1.77-1.77c.98 0 1.78.79 1.78 1.77A1.78 1.78 0 0 1 15.22 17m-6.72.03L7 15.53L15.53 7l1.5 1.5z"></svg:path>`,
})
export class MdiBrightnessPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBroadcastIcon],svg[mdi-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 2c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.2 1.2 4.1 3 5.2l1-1.7c-1.2-.7-2-2-2-3.4c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.4l1 1.7c1.8-1 3-3 3-5.2M12 2C6.5 2 2 6.5 2 12c0 3.7 2 6.9 5 8.6l1-1.7c-2.4-1.4-4-4-4-6.9c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.6 5.5-4 6.9l1 1.7c3-1.7 5-4.9 5-8.6c0-5.5-4.5-10-10-10"></svg:path>`,
})
export class MdiBroadcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBroadcastOffIcon],svg[mdi-broadcast-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.6 14.2c.3-.7.4-1.4.4-2.2c0-3.3-2.7-6-6-6c-.8 0-1.6.2-2.2.4L11.4 8h.6c2.2 0 4 1.8 4 4c0 .2 0 .4-.1.6zM12 4c4.4 0 8 3.6 8 8c0 1.4-.4 2.6-1 3.7l1.5 1.5c.9-1.5 1.5-3.3 1.5-5.2c0-5.5-4.5-10-10-10c-1.9 0-3.7.5-5.2 1.5L8.3 5c1.1-.7 2.3-1 3.7-1M3.3 2.5L2 3.8l2.1 2.1C2.8 7.6 2 9.7 2 12c0 3.7 2 6.9 5 8.6l1-1.7c-2.4-1.4-4-4-4-6.9c0-1.8.6-3.4 1.5-4.7L7 8.8c-.6.9-1 2-1 3.2c0 2.2 1.2 4.1 3 5.2l1-1.7c-1.2-.7-2-2-2-3.4c0-.6.2-1.2.4-1.8l1.6 1.6v.2c0 1.1.9 2 2 2h.2l7.5 7.5l1.3-1.3L4.3 3.5z"></svg:path>`,
})
export class MdiBroadcastOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBroomIcon],svg[mdi-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.36 2.72l1.42 1.42l-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32zM5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09l7.44 7.44l-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58"></svg:path>`,
})
export class MdiBroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrushIcon],svg[mdi-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 4.63l-1.34-1.34c-.37-.39-1.02-.39-1.41 0L9 12.25L11.75 15l8.96-8.96c.39-.39.39-1.04 0-1.41M7 14a3 3 0 0 0-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.5 2 4 2a4 4 0 0 0 4-4a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrushOffIcon],svg[mdi-brush-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-8.4-8.4l-.6.7L9 12.2l.7-.7L1.1 3l1.3-1.3l19.7 19.7zM7 14c-1.7 0-3 1.3-3 3c0 1.3-1.2 2-2 2c.9 1.2 2.5 2 4 2c2.2 0 4-1.8 4-4c0-1.7-1.3-3-3-3m13.7-8c.4-.4.4-1 0-1.4l-1.3-1.3c-.4-.4-1-.4-1.4 0L12.2 9l2.8 2.8z"></svg:path>`,
})
export class MdiBrushOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrushOutlineIcon],svg[mdi-brush-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16c.55 0 1 .45 1 1c0 1.1-.9 2-2 2c-.17 0-.33 0-.5-.05c.31-.55.5-1.21.5-1.95c0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25L11.75 15l8.96-8.96c.39-.39.39-1.04 0-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29M7 14c-1.66 0-3 1.34-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.5 2 4 2c2.21 0 4-1.79 4-4c0-1.66-1.34-3-3-3"></svg:path>`,
})
export class MdiBrushOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBrushVariantIcon],svg[mdi-brush-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3C5.79 3 4 4.79 4 7v7c0 1.1.9 2 2 2h3v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4h3c1.1 0 2-.9 2-2V3zm0 2h4v2h2V5h1v4h2V5h1v5H6V7c0-1.1.9-2 2-2m-2 9v-2h12v2z"></svg:path>`,
})
export class MdiBrushVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBucketIcon],svg[mdi-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v3h-1l-2.5 14h-11L4 7H3z"></svg:path>`,
})
export class MdiBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBucketOutlineIcon],svg[mdi-bucket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v3h-1l-2.5 14h-11L4 7H3zm14.97 3H6.03l2.12 12h7.7z"></svg:path>`,
})
export class MdiBucketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBufferIcon],svg[mdi-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12.6 2.86c2.67 1.24 5.4 2.53 8.06 3.77c.15.07.34.12.34.32s-.19.24-.34.31C18 8.5 15.3 9.77 12.62 11a1.3 1.3 0 0 1-1.24 0C8.69 9.76 6 8.5 3.32 7.25C3.18 7.19 3 7.14 3 6.94c0-.18.18-.23.31-.29C6 5.39 8.74 4.1 11.44 2.85c.29-.13.86-.12 1.16.01M12 21.15c-.2 0-.34-.08-.62-.18c-2.69-1.24-5.38-2.5-8.05-3.75c-.14-.07-.33-.11-.33-.32c0-.2.19-.24.34-.31c.44-.21.89-.42 1.33-.63c.45-.2.89-.2 1.33.01c1.79.83 3.57 1.66 5.35 2.49c.44.21.88.2 1.32 0c1.78-.84 3.56-1.67 5.33-2.5c.44-.2.87-.21 1.29-.01c.48.21.95.44 1.42.66c.07.03.14.07.2.12c.13.1.13.27 0 .35c-.08.06-.17.11-.26.15c-2.65 1.27-5.32 2.49-7.99 3.72c-.2.1-.47.2-.66.2m0-4.98c-.1 0-.45-.1-.64-.17c-2.68-1.26-5.36-2.5-8.02-3.76c-.14-.06-.34-.11-.34-.31c0-.21.2-.25.35-.32c.45-.22.9-.43 1.35-.64c.43-.19.86-.19 1.3.03c1.78.82 3.58 1.66 5.38 2.5c.41.19.83.19 1.25 0c1.8-.85 3.6-1.69 5.41-2.53c.41-.19.83-.19 1.25 0c.47.22.95.44 1.42.66c.06.03.13.06.19.11c.14.11.14.26-.01.38c-.05.04-.12.07-.18.1c-2.71 1.28-5.4 2.53-8.1 3.78c-.19.09-.53.17-.61.17z" fill="currentColor"></svg:path>`,
})
export class MdiBufferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBuffetIcon],svg[mdi-buffet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m6 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M3 22l1-3H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1l1 3h-2l-1-3H6l-1 3zm10-9v4h7v-4zm-9 0v4h7v-4z"></svg:path>`,
})
export class MdiBuffetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugIcon],svg[mdi-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a6 6 0 0 0-1.82-1.96L17 4.41L15.59 3l-2.17 2.17a6 6 0 0 0-2.83 0L8.41 3L7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20z"></svg:path>`,
})
export class MdiBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugCheckIcon],svg[mdi-bug-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-2.54 1.61-4.8 4-5.65V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm-6 8H9v-2h4zm0-4H9V9h4zm4.75 11.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z"></svg:path>`,
})
export class MdiBugCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugCheckOutlineIcon],svg[mdi-bug-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-.57.09-1.14.25-1.69c-.66.45-1.45.69-2.25.69c-2.21 0-4-1.79-4-4v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4c0 .19 0 .39-.05.58c.59-.54 1.29-.96 2.05-1.23V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm2.34 9l-3.59 3.59L16.16 18L15 19.16l2.75 3l4.75-4.75zM13 9v2H9V9zm0 4v2H9v-2z"></svg:path>`,
})
export class MdiBugCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugOutlineIcon],svg[mdi-bug-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-2.81c-.45-.8-1.07-1.5-1.82-2L17 4.41L15.59 3l-2.17 2.17a6 6 0 0 0-2.83 0L8.41 3L7 4.41L8.62 6c-.75.5-1.36 1.21-1.81 2H4v2h2.09c-.06.33-.09.66-.09 1v1H4v2h2v1c0 .34.03.67.09 1H4v2h2.81A5.99 5.99 0 0 0 15 20.18c.91-.52 1.67-1.28 2.19-2.18H20v-2h-2.09c.06-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.03-.67-.09-1H20zm-4 7a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4zm-2-5v2h-4v-2zm-4 4h4v2h-4z"></svg:path>`,
})
export class MdiBugOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugPauseIcon],svg[mdi-bug-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-2.54 1.61-4.8 4-5.65V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm-6 8H9v-2h4zm0-4H9V9h4zm7 5h2v6h-2m-4-6h2v6h-2z"></svg:path>`,
})
export class MdiBugPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugPauseOutlineIcon],svg[mdi-bug-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-.57.09-1.14.25-1.69c-.66.45-1.45.69-2.25.69c-2.21 0-4-1.79-4-4v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4c0 .19 0 .39-.05.58c.59-.54 1.29-.96 2.05-1.23V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm-6 2v2H9V9zm0 4v2H9v-2zm7 3h2v6h-2m-4-6h2v6h-2z"></svg:path>`,
})
export class MdiBugPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugPlayIcon],svg[mdi-bug-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-2.54 1.61-4.8 4-5.65V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm-6 8H9v-2h4zm0-4H9V9h4zm4 5v6l5-3z"></svg:path>`,
})
export class MdiBugPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugPlayOutlineIcon],svg[mdi-bug-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-.57.09-1.14.25-1.69c-.66.45-1.45.69-2.25.69c-2.21 0-4-1.79-4-4v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4c0 .19 0 .39-.05.58c.59-.54 1.29-.96 2.05-1.23V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm-6 2v2H9V9zm0 4v2H9v-2zm4 3v6l5-3z"></svg:path>`,
})
export class MdiBugPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugStopIcon],svg[mdi-bug-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-2.54 1.61-4.8 4-5.65V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm-6 8H9v-2h4zm0-4H9V9h4zm3 5h6v6h-6z"></svg:path>`,
})
export class MdiBugStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugStopOutlineIcon],svg[mdi-bug-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-2.81c-.45-.8-1.07-1.5-1.82-2L16 3.41L14.59 2l-2.17 2.17a6 6 0 0 0-2.83 0L7.41 2L6 3.41L7.62 5c-.75.5-1.36 1.21-1.81 2H3v2h2.09c-.06.33-.09.66-.09 1v1H3v2h2v1c0 .34.03.67.09 1H3v2h2.81A6 6 0 0 0 13 19.65V19c0-.57.09-1.14.25-1.69c-.66.45-1.45.69-2.25.69c-2.21 0-4-1.79-4-4v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4c0 .19 0 .39-.05.58c.59-.54 1.29-.96 2.05-1.23V13h2v-2h-2v-1c0-.34-.03-.67-.09-1H19zm-6 2v2H9V9zm0 4v2H9v-2zm3 3h6v6h-6z"></svg:path>`,
})
export class MdiBugStopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBugleIcon],svg[mdi-bugle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6c0 5-9 5-9 5H5c-1 0-2-1-2-1H2v4h1s1-1 2-1h1.3c-.8.5-1.3 1.2-1.3 2c0 1.8 2.3 3 5.5 3s5.5-1.2 5.5-3c0-.6-.3-1.2-.8-1.7c2.6.5 5.8 1.7 5.8 4.7h1V6zM10.5 16.7c-2.3 0-4.1-.8-4.1-1.7s1.8-1.7 4.1-1.7s4.1.8 4.1 1.7s-1.8 1.7-4.1 1.7"></svg:path>`,
})
export class MdiBugleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBulkheadLightIcon],svg[mdi-bulkhead-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.09V2c0-.55-.45-1-1-1s-1 .45-1 1v.09a5.96 5.96 0 0 0-4.97 5.88V16c0 3 2.16 5.44 4.97 5.91V22c0 .55.45 1 1 1s1-.45 1-1v-.09A5.97 5.97 0 0 0 17.97 16V7.97C18 5 15.81 2.56 13 2.09M16 8h-1V5.4c.6.69 1 1.6 1 2.6m-2 11.44c-.59.35-1.27.56-2 .56s-1.41-.21-2-.56V16h4zM10 15V9h4v6zm-1 0h-.97V9H9zm1-10.44c.59-.35 1.27-.56 2-.56s1.41.21 2 .56V8h-4zM15 9h1v6h-1zM9 5.4V8h-.97v-.03c0-.97.37-1.88.97-2.57M8.03 16H9v2.6c-.6-.69-.97-1.6-.97-2.57zM15 18.6V16h1c0 1-.4 1.91-1 2.6"></svg:path>`,
})
export class MdiBulkheadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBulldozerIcon],svg[mdi-bulldozer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a1 1 0 0 0-1 1v5c-.46 0-.86.31-.97.76v3.21h.26C2.65 13.37 3.3 13 4 13h9c.7 0 1.35.37 1.71.97h1.32L16 11a1 1 0 0 0-1-1h-2V8a1 1 0 0 0-1-1a1 1 0 0 0-1 1v2H9V5a1 1 0 0 0-1-1zm1 2h2v5H5zm12 5v8h5v-1l-3-1l-1-6zM4 15a2 2 0 0 0-2 2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiBulldozerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBulletIcon],svg[mdi-bullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4v-1h4zm-1-12V7h-2v3l-1 1.5V20h4v-8.5zm-1-8s-1 1-1 3v1h2V5s0-2-1-3"></svg:path>`,
})
export class MdiBulletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBulletinBoardIcon],svg[mdi-bulletin-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.04 2.5L9.53 5h5zM4 7v13h16V7zm8-7l5 5h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3zM7 18v-4h5v4zm7-1v-7h4v7zm-8-5V9h5v3z"></svg:path>`,
})
export class MdiBulletinBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBullhornIcon],svg[mdi-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4"></svg:path>`,
})
export class MdiBullhornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBullhornOutlineIcon],svg[mdi-bullhorn-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm3 7.6L13 14H4v-4h9l2-1.6zm6.5-3.6c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4"></svg:path>`,
})
export class MdiBullhornOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBullhornVariantIcon],svg[mdi-bullhorn-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v2L4 8V6H2v12h2v-2l2 .5v2C6 20.4 7.6 22 9.5 22s3.5-1.6 3.5-3.5v-.2l7 1.7v2h2V2zm-9 16.5c0 .8-.7 1.5-1.5 1.5S8 19.3 8 18.5V17l3 .8z"></svg:path>`,
})
export class MdiBullhornVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBullhornVariantOutlineIcon],svg[mdi-bullhorn-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v2L4 8V6H2v12h2v-2l2 .5v2C6 20.4 7.6 22 9.5 22s3.5-1.6 3.5-3.5v-.2l7 1.7v2h2V2zm-9 16.5c0 .8-.7 1.5-1.5 1.5S8 19.3 8 18.5V17l3 .8zm9-.5L4 14v-4l16-4z"></svg:path>`,
})
export class MdiBullhornVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBullseyeIcon],svg[mdi-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiBullseyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBullseyeArrowIcon],svg[mdi-bullseye-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-1.16-.21-2.31-.61-3.39l-1.6 1.6c.14.59.21 1.19.21 1.79a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.6 0 1.2.07 1.79.21L15.4 2.6C14.31 2.21 13.16 2 12 2m7 0l-4 4v1.5l-2.55 2.55C12.3 10 12.15 10 12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.15 0-.3-.05-.45L16.5 9H18l4-4h-3zm-7 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4z"></svg:path>`,
})
export class MdiBullseyeArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBulmaIcon],svg[mdi-bulma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.38 2l-5 5l-1.25 8.75L11.38 22l7.5-5l-5-5l3.75-3.75z"></svg:path>`,
})
export class MdiBulmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBunkBedIcon],svg[mdi-bunk-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v21h2v-2h18v2h2V7c0-2.21-1.79-4-4-4h-9v5H3V2m3.5 0A2.5 2.5 0 0 0 4 4.5A2.5 2.5 0 0 0 6.5 7A2.5 2.5 0 0 0 9 4.5A2.5 2.5 0 0 0 6.5 2M3 11h18v2.56c-.59-.35-1.27-.56-2-.56h-9v5H3m3.5-6A2.5 2.5 0 0 0 4 14.5A2.5 2.5 0 0 0 6.5 17A2.5 2.5 0 0 0 9 14.5A2.5 2.5 0 0 0 6.5 12"></svg:path>`,
})
export class MdiBunkBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBunkBedOutlineIcon],svg[mdi-bunk-bed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h2v7h7V3h9c2.2 0 4 1.8 4 4v16h-2v-2H3v2H1zm11 3v4h9V7c0-1.1-.9-2-2-2zm-9 6v8h7v-6h9c.7 0 1.4.2 2 .6V11zm3.5 2C7.9 13 9 14.1 9 15.5S7.9 18 6.5 18S4 16.9 4 15.5S5.1 13 6.5 13m0 1.6c-.5 0-.9.4-.9.9s.4.9.9.9s.9-.4.9-.9s-.4-.9-.9-.9m5.5.4v4h9v-2c0-1.1-.9-2-2-2zM6.5 3C7.9 3 9 4.1 9 5.5S7.9 8 6.5 8S4 6.9 4 5.5S5.1 3 6.5 3m0 1.6c-.5 0-.9.4-.9.9s.4.9.9.9s.9-.4.9-.9s-.4-.9-.9-.9"></svg:path>`,
})
export class MdiBunkBedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusIcon],svg[mdi-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11H6V6h12m-1.5 11a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-9 0A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 14A1.5 1.5 0 0 1 9 15.5A1.5 1.5 0 0 1 7.5 17M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4z"></svg:path>`,
})
export class MdiBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusAlertIcon],svg[mdi-bus-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a7 7 0 0 1 7 7c0 3.53-2.61 6.45-6 6.93V18c0 .84-.35 1.58-1.04 2.2V22c0 .27-.09.5-.28.71c-.18.2-.42.29-.68.29h-1a.98.98 0 0 1-.73-.29a.96.96 0 0 1-.31-.71v-1H5.04v1c0 .27-.1.5-.31.71c-.2.2-.44.29-.73.29H3c-.26 0-.5-.09-.68-.29c-.19-.21-.28-.44-.28-.71v-1.8C1.35 19.58 1 18.84 1 18V8c0-1.58.7-2.65 2.07-3.2C4.44 4.26 6.42 4 9 4l1.23.03A7.01 7.01 0 0 1 16 1m0 2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m-1 7h2v2h-2zm0-6h2v5h-2zM3 13h8.09A7 7 0 0 1 9 8H3zm1.5 3c-.81 0-1.5.67-1.5 1.5A1.5 1.5 0 0 0 4.5 19c.85 0 1.5-.67 1.5-1.5A1.5 1.5 0 0 0 4.5 16m9 0c-.85 0-1.5.67-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5c.81 0 1.5-.67 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiBusAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusArticulatedEndIcon],svg[mdi-bus-articulated-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 6L20 7.5L21.5 9L20 10.5l1.5 1.5l-1.5 1.5l1.5 1.5h-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3h-4V8c0-1.11.89-2 2-2zm-3 1.5H15V10h3.5zm-5 0h-4V10h4zM8 7.5H4V10h4zm1.5 6A1.5 1.5 0 0 0 8 15a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 11 15a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiBusArticulatedEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusArticulatedFrontIcon],svg[mdi-bus-articulated-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l1.5 1.5L1 9l1.5 1.5L1 12l1.5 1.5L1 15h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2V8c0-1.11-.89-2-2-2zm3 1.5h2.5V10H4zm4 0h4V10H8zm5.5 0h4V10h-4zm5.5 0h2.5V13L19 11zm-13 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiBusArticulatedFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusClockIcon],svg[mdi-bus-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4v4.25l2.86 1.69l-.75 1.22L15 9V4zm-.5 9c1.36 0 2.54-.5 3.5-1.47c1-.97 1.5-2.14 1.5-3.53c0-1.36-.5-2.54-1.5-3.5c-.96-1-2.14-1.5-3.5-1.5c-1.39 0-2.56.5-3.53 1.5C11.5 5.46 11 6.64 11 8c0 1.39.5 2.56 1.47 3.53S14.61 13 16 13m-2.5 6c.44 0 .8-.16 1.08-.46s.42-.65.42-1.04c0-.42-.14-.77-.42-1.07S13.94 16 13.5 16s-.8.13-1.08.43s-.42.65-.42 1.07c0 .39.14.74.42 1.04s.64.46 1.08.46M3 13h8.11C9.7 11.64 9 10 9 8H3zm1.5 6c.44 0 .8-.16 1.08-.46S6 17.89 6 17.5c0-.42-.14-.77-.42-1.07S4.94 16 4.5 16s-.8.13-1.08.43S3 17.08 3 17.5c0 .39.14.74.42 1.04s.64.46 1.08.46M16 1c1.92 0 3.58.67 4.95 2.05C22.33 4.42 23 6.08 23 8c0 1.77-.56 3.29-1.72 4.59c-1.15 1.29-2.58 2.07-4.28 2.32V18c0 .84-.33 1.58-1 2.2V22c0 .27-.11.5-.3.71c-.2.2-.42.29-.7.29h-1c-.27 0-.5-.09-.71-.29A.98.98 0 0 1 13 22v-1H5v1c0 .27-.09.5-.29.71c-.21.2-.44.29-.71.29H3c-.28 0-.5-.09-.7-.29c-.19-.21-.3-.44-.3-.71v-1.8c-.67-.62-1-1.36-1-2.2V8c0-1.58.67-2.65 2.05-3.2C4.42 4.26 6.41 4 9 4h.61c.28 0 .48.03.61.03C11.63 2 13.55 1 16 1"></svg:path>`,
})
export class MdiBusClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusDoubleDeckerIcon],svg[mdi-bus-double-decker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2V9.5h4V6c0-1.11-.89-2-2-2zm-.5 1.5h4V8h-4zm5.5 0h4V8H8zm5.5 0h4V8h-4zm5.5 0h2.5V8H19zm-5.5 4h4V12h-4zm-11 0h4V12h-4zm5.5 0h4V12H8zm-2 6A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiBusDoubleDeckerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusElectricIcon],svg[mdi-bus-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H6V4h12m-1.5 10c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-9 0c-.8 0-1.5-.7-1.5-1.5S6.7 11 7.5 11s1.5.7 1.5 1.5S8.3 14 7.5 14M4 13c0 .9.4 1.7 1 2.2V17c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h8v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1.8c.6-.5 1-1.3 1-2.2V4c0-3.5-3.6-4-8-4S4 .5 4 4zm3 8h4v-2l6 3h-4v2z"></svg:path>`,
})
export class MdiBusElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusMarkerIcon],svg[mdi-bus-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.42 0-8 .5-8 4v10a3 3 0 0 0 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h6a8 8 0 0 1-1-3.5a5.55 5.55 0 0 1 2.38-4.5H6V6h12v4a4 4 0 0 1 .5 0a5.3 5.3 0 0 1 1.5.22V6c0-3.5-3.58-4-8-4M7.5 14A1.5 1.5 0 1 1 6 15.5A1.5 1.5 0 0 1 7.5 14m11-2a3.54 3.54 0 0 0-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5a3.54 3.54 0 0 0-3.5-3.5m0 4.8a1.2 1.2 0 1 1 0-2.4a1.29 1.29 0 0 1 1.2 1.2a1.15 1.15 0 0 1-1.2 1.2"></svg:path>`,
})
export class MdiBusMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusMultipleIcon],svg[mdi-bus-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5c-4.42 0-8 .5-8 4v10c0 .85.37 1.66 1 2.22V23c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.63-.56 1-1.37 1-2.22V9c0-3.5-3.58-4-8-4M5.5 20c-.83 0-1.5-.67-1.5-1.5S4.67 17 5.5 17s1.5.67 1.5 1.5S6.33 20 5.5 20m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-6H4V9h12zm6-9v10c0 .85-.37 1.66-1 2.22V19c0 .55-.45 1-1 1h-.12c.07-.32.12-.65.12-1V9c0-6-7-6-10-6c-.91 0-2.2 0-3.54.17C7.55 1.32 10.5 1 14 1c4.42 0 8 .5 8 4"></svg:path>`,
})
export class MdiBusMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusSchoolIcon],svg[mdi-bus-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c-1.11 0-2 .89-2 2v7h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2V8c0-1.11-.89-2-2-2zm10.5 1.5h4V10h-4zm-11 0h4V10h-4zm5.5 0h4V10H8zm-2 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiBusSchoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusSideIcon],svg[mdi-bus-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c-1.11 0-2 .89-2 2v7h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2V8c0-1.11-.89-2-2-2zm-.5 1.5h4V10h-4zm5.5 0h4V10H8zm5.5 0h4V10h-4zm5.5 0h2.5V13L19 11zm-13 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiBusSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusSignIcon],svg[mdi-bus-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h7.07A7.97 7.97 0 0 0 10 15c0 1.46.39 2.82 1.07 4H6v1c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29H4c-.26 0-.5-.1-.71-.29C3.11 20.5 3 20.27 3 20v-1.78c-.61-.55-1-1.34-1-2.22V6c0-3.5 3.58-4 8-4s8 .5 8 4v1c-.69 0-1.36.09-2 .25V6H4zm1.5 6a1.499 1.499 0 0 0 1.06-2.56a1.499 1.499 0 1 0-2.12 2.12c.28.28.66.44 1.06.44m9.5 3v1h6v-1c0-.55-.45-1-1-1h-1v-5h2l2-2l-2-2h-8l2 2l-2 2h4v5h-1c-.55 0-1 .45-1 1"></svg:path>`,
})
export class MdiBusSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusStopIcon],svg[mdi-bus-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7v9c0 .71-.38 1.36-1 1.72v1.53c0 .41-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75V18h-7v1.25c0 .41-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75v-1.53c-.61-.36-1-1.01-1-1.72V7c0-3 3-3 6.5-3S22 4 22 7m-9 8c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m7 0c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m0-8h-9v4h9zM7 9.5C6.97 8.12 5.83 7 4.45 7.05A2.5 2.5 0 0 0 2 9.6A2.51 2.51 0 0 0 4 12v8h1v-8c1.18-.24 2-1.29 2-2.5"></svg:path>`,
})
export class MdiBusStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusStopCoveredIcon],svg[mdi-bus-stop-covered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H7V2H6a1.78 1.78 0 0 0-1.41 1H2v2h1.73C2 10.58 2 22 2 22h5V5h13m2 3.5a2.5 2.5 0 1 0-3 2.5v11h1V11a2.5 2.5 0 0 0 2-2.5m-7 3V16h-1v6h-1.5v-5h-1v5H10v-6H9v-4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5m-3-5A1.5 1.5 0 1 0 13.5 8A1.5 1.5 0 0 0 12 6.5"></svg:path>`,
})
export class MdiBusStopCoveredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusStopUncoveredIcon],svg[mdi-bus-stop-uncovered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22v-3H4v3H2v-8a1 1 0 0 1 1-1a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v4m12-11v11h-1V11a2.5 2.5 0 1 1 1 0m-5 .55V16h-1v6h-1.5v-5h-1v5H10v-6H9v-4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5m-3-4.95A1.5 1.5 0 1 0 13.5 8A1.5 1.5 0 0 0 12 6.5Z"></svg:path>`,
})
export class MdiBusStopUncoveredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiBusWrenchIcon],svg[mdi-bus-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20c0 .27.11.5.29.71c.21.19.45.29.71.29h1c.27 0 .5-.1.71-.29c.19-.21.29-.44.29-.71v-1h4a5.002 5.002 0 0 1 8-6m-4-2H6V6h12v5zm-9.56 5.56a1.499 1.499 0 1 1 2.12-2.12a1.499 1.499 0 1 1-2.12 2.12m9.06.36l-2.21-2.21c-.18.39-.29.83-.29 1.29c0 1.66 1.34 3 3 3c.46 0 .9-.1 1.29-.29l4 4l1.42-1.42l-4-4c.19-.39.29-.83.29-1.29c0-1.66-1.34-3-3-3c-.46 0-.9.11-1.29.29l2.2 2.21l-1.41 1.41Z"></svg:path>`,
})
export class MdiBusWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiButterflyIcon],svg[mdi-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21h-2V6L9.03 3.97L10 3l2 2l2-2l1 1l-2 2zM7 6a5.002 5.002 0 0 0-3 9v2c0 2.21 1.79 4 4 4c.72 0 1.39-.19 1.97-.5l.03-.04V7c-.84-.63-1.87-1-3-1m-.5 6.5L5 11l1.5-1.5L8 11zM22 11c0-2.76-2.24-5-5-5c-1.12 0-2.15.37-3 1v13.46c.59.35 1.27.54 2 .54c2.21 0 4-1.79 4-4v-2c1.21-.91 2-2.36 2-4m-4.5 1.5L16 11l1.5-1.5L19 11z"></svg:path>`,
})
export class MdiButterflyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiButterflyOutlineIcon],svg[mdi-butterfly-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21h-2V6L9.03 3.97L10 3l2 2l2-2l1 1l-2 2zm1-12V7a5.002 5.002 0 0 1 6 8v2c0 2.21-1.79 4-4 4c-.73 0-1.41-.19-2-.54v-2c.59.35 1.27.54 2 .54c1.1 0 2-.9 2-2v-3.17c1.17-.41 2-1.52 2-2.83c0-1.65-1.33-3-3-3c-1.12 0-2.16.37-3 1m-4 0c-.84-.63-1.87-1-3-1c-1.67 0-3 1.35-3 3c0 1.31.84 2.42 2 2.83V17c0 1.1.9 2 2 2c.73 0 1.41-.19 2-.54v2c-.59.35-1.27.54-2 .54c-2.21 0-4-1.79-4-4v-2a5.002 5.002 0 0 1 6-8zm-1 2L7.5 9.5L6 11l1.5 1.5zm9 0l-1.5-1.5L15 11l1.5 1.5z"></svg:path>`,
})
export class MdiButterflyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiButtonCursorIcon],svg[mdi-button-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.1 15.3c-.1.1-.3.2-.4.3l-2.4.4l1.7 3.6c.2.4 0 .8-.4 1l-2.8 1.3c-.1.1-.2.1-.3.1c-.3 0-.6-.2-.7-.4L11.2 18l-1.9 1.5c-.1.1-.3.2-.5.2c-.4 0-.8-.3-.8-.8V7.5c0-.5.3-.8.8-.8c.2 0 .4.1.5.2l8.7 7.4c.3.2.4.7.1 1M6 12H4V4h16v8h-1.6l2.2 1.9c.8-.3 1.3-1 1.3-1.9V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2z"></svg:path>`,
})
export class MdiButtonCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiButtonPointerIcon],svg[mdi-button-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20.5c0 .8-.7 1.5-1.5 1.5H13c-.4 0-.7-.1-1-.4l-4-4.2l.7-.8c.2-.2.5-.3.8-.3h.2L12 18V9c0-.6.4-1 1-1s1 .4 1 1v4.5l1.2.1l3.9 2.2c.5.2.9.8.9 1.3zM20 2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h4v-2H4V4h16v8h-2v2h2c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiButtonPointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCabinAFrameIcon],svg[mdi-cabin-a-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 21h16zM9 19H7.08L9 14.67zm4 0h-2v-5h2zm-2.81-7L12 7.92L13.81 12zM15 14.67L16.92 19H15z"></svg:path>`,
})
export class MdiCabinAFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCableDataIcon],svg[mdi-cable-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 3.5a3.52 3.52 0 0 0 0 4.97l8.49 8.48c.58.59.58 1.55 0 2.12c-.59.59-1.54.59-2.13 0l-4.24-4.24l1.06-1.06l-3.53-3.54l-.36.36l-1.41-1.42a1.02 1.02 0 0 0-1.43 0l-1.4 1.42c-.39.41-.39 1.02 0 1.41l1.4 1.41l-.34.36L6.7 17.3l1.06-1.06L12 20.5a3.53 3.53 0 0 0 4.95 0c1.37-1.38 1.37-3.6 0-4.96L8.46 7.05c-.58-.59-.58-1.55 0-2.12c.59-.59 1.54-.59 2.13 0l4.24 4.24l-1.06 1.06l3.53 3.54l.36-.36l1.41 1.42c.39.39 1.03.39 1.43 0l1.4-1.42c.39-.41.39-1.02 0-1.41l-1.4-1.41l.34-.36L17.3 6.7l-1.06 1.06L12 3.5a3.53 3.53 0 0 0-4.95 0m-4.24 7.79l1.41-1.41l1.42 1.41l-1.42 1.42m14.14 0l1.42-1.42l1.41 1.42l-1.41 1.41Z"></svg:path>`,
})
export class MdiCableDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCachedIcon],svg[mdi-cached-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 8l-4 4h3a6 6 0 0 1-6 6c-1 0-1.97-.25-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20a8 8 0 0 0 8-8h3M6 12a6 6 0 0 1 6-6c1 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4a8 8 0 0 0-8 8H1l4 4l4-4"></svg:path>`,
})
export class MdiCachedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCactusIcon],svg[mdi-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16v5h-4v-3H9a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1a1 1 0 0 1 1 1v3c0 .56.45 1 1 1h1V6a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8h1a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3z"></svg:path>`,
})
export class MdiCactusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCakeIcon],svg[mdi-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5.5c.5.25 1.5 1.9 1.5 3S12.33 5 11.5 5S10 4.85 10 3.75S11 2 11.5.5m7 8.5C21 9 23 11 23 13.5c0 1.56-.79 2.93-2 3.74V23H3v-5.76c-1.21-.81-2-2.18-2-3.74C1 11 3 9 5.5 9H10V6h3v3zM12 16a2.5 2.5 0 0 0 2.5-2.5H16a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 13.5A2.5 2.5 0 0 0 5.5 16A2.5 2.5 0 0 0 8 13.5h1.5A2.5 2.5 0 0 0 12 16"></svg:path>`,
})
export class MdiCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCakeLayeredIcon],svg[mdi-cake-layered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21v-4a2 2 0 0 0-2-2h-1v-3a2 2 0 0 0-2-2h-3V8h-2v2H8c-1.11 0-2 .89-2 2v3H5c-1.11 0-2 .89-2 2v4H1v2h22v-2M12 7a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 1l-1.72 2.97c-.18.3-.28.65-.28 1.03a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiCakeLayeredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCakeVariantIcon],svg[mdi-cake-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03a2 2 0 0 0 2 2m4.6 10l-1.07-1.08L14.45 16c-1.3 1.29-3.58 1.3-4.89 0L8.5 14.92L7.4 16a3.47 3.47 0 0 1-4.4.39V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4.61a3.47 3.47 0 0 1-4.4-.39M18 9h-5V7h-2v2H6a3 3 0 0 0-3 3v1.54c0 1.08.88 1.96 1.96 1.96c.54 0 1.04-.2 1.38-.57L8.5 12.8l2.11 2.13c.74.74 2.03.74 2.77 0l2.12-2.13l2.15 2.13c.35.37.85.57 1.38.57c1.08 0 1.97-.88 1.97-1.96V12a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiCakeVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCakeVariantOutlineIcon],svg[mdi-cake-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03c0 1.1.9 2 2 2m6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3m1 11H5v-3c.9 0 1.76-.37 2.4-1l1.1-1.08L9.56 16c1.31 1.3 3.59 1.29 4.89 0l1.08-1.08L16.6 16c.64.63 1.5 1 2.4 1zm0-4.5c-.5 0-1-.2-1.35-.57L15.5 12.8l-2.12 2.13c-.74.74-2.03.74-2.77 0L8.5 12.8l-2.16 2.13c-.34.36-.84.57-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z"></svg:path>`,
})
export class MdiCakeVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalculatorIcon],svg[mdi-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4zm0 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class MdiCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalculatorOffIcon],svg[mdi-calculator-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M1.5 4.768L2.777 3.5L21 21.723L19.732 23l-1.458-1.458c-.346.286-.79.458-1.274.458H7a2 2 0 0 1-2-2V8.268l-3.5-3.5zM7 2h10a2 2 0 0 1 2 2v13.177l-2-2V14h-1.177L13 11.177V10h-1.177l-2-2H17V4H7v1.177L5.125 3.302A2 2 0 0 1 7 2zm0 10h1.732L7 10.268V12zm8-2v2h2v-2h-2zm-8 4v2h2v-2H7zm4 2h1.732L11 14.268V16zm-4 2v2h2v-2H7zm4 0v2h2v-2h-2zm4 2h1.732L15 18.268V20z" fill="currentColor"></svg:path>`,
})
export class MdiCalculatorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalculatorVariantIcon],svg[mdi-calculator-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 4.1L14.1 6l1.4 1.4L16.9 6L18 7.1l-1.4 1.4L18 9.9L16.9 11l-1.4-1.4l-1.4 1.4L13 9.9l1.4-1.4zm-6.8.6h5v1.5h-5zm5.3 8.3h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.2h-5v-1.5h5zm0-2.4h-5v-1.5h5z"></svg:path>`,
})
export class MdiCalculatorVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalculatorVariantOutlineIcon],svg[mdi-calculator-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM6.2 7.7h5v1.5h-5zm6.8 8.1h5v1.5h-5zm0-2.6h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.1-7.1l1.4-1.4l1.4 1.4l1.1-1l-1.4-1.4L18 7.1L16.9 6l-1.4 1.4L14.1 6L13 7.1l1.4 1.4L13 9.9z"></svg:path>`,
})
export class MdiCalculatorVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarIcon],svg[mdi-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"></svg:path>`,
})
export class MdiCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarAccountIcon],svg[mdi-calendar-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c2 0 3 2.42 1.59 3.84c-1.42 1.42-3.84.41-3.84-1.59C9.75 10 10.75 9 12 9m4.5 9h-9v-1.12c0-1.25 2-2.25 4.5-2.25s4.5 1 4.5 2.25M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2h-1V1z"></svg:path>`,
})
export class MdiCalendarAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarAccountOutlineIcon],svg[mdi-calendar-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zm0-12H5V5h14m-7 5c2 0 3 2.42 1.59 3.84c-1.42 1.42-3.84.41-3.84-1.59C9.75 11 10.75 10 12 10m4.5 7.88V18h-9v-.12c0-1.25 2-2.25 4.5-2.25s4.5 1 4.5 2.25"></svg:path>`,
})
export class MdiCalendarAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarAlertIcon],svg[mdi-calendar-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2h-1V1h-2v2H8V1zM5 8h14v11H5zm6 1v5h2V9zm0 7v2h2v-2z"></svg:path>`,
})
export class MdiCalendarAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarAlertOutlineIcon],svg[mdi-calendar-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16h2v2h-2zm0-6h2v4h-2zm8-7h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10z"></svg:path>`,
})
export class MdiCalendarAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarArrowLeftIcon],svg[mdi-calendar-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14zm-7-9v2h4v3h-4v2l-4-3.5z"></svg:path>`,
})
export class MdiCalendarArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarArrowRightIcon],svg[mdi-calendar-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14zm-7-2v-2H8v-3h4v-2l4 3.5z"></svg:path>`,
})
export class MdiCalendarArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarBadgeIcon],svg[mdi-calendar-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 16c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5m-5.29 5H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v9.21c-.5-.13-1-.21-1.5-.21c-.17 0-.33 0-.5.03V8H5v11h9.03c-.03.17-.03.33-.03.5c0 .5.08 1 .21 1.5"></svg:path>`,
})
export class MdiCalendarBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarBadgeOutlineIcon],svg[mdi-calendar-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 16c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5M14 19.5c0-.17 0-.33.03-.5H5V9h14v5.03c.17-.03.33-.03.5-.03c.5 0 1 .08 1.5.21V5a2 2 0 0 0-2-2h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.21c-.13-.5-.21-1-.21-1.5M5 5h14v2H5z"></svg:path>`,
})
export class MdiCalendarBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarBlankIcon],svg[mdi-calendar-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1"></svg:path>`,
})
export class MdiCalendarBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarBlankMultipleIcon],svg[mdi-calendar-blank-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V8H7v9zm0-14c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2zM3 21h14v2H3a2 2 0 0 1-2-2V9h2z"></svg:path>`,
})
export class MdiCalendarBlankMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarBlankOutlineIcon],svg[mdi-calendar-blank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zm0-12H5V5h14z"></svg:path>`,
})
export class MdiCalendarBlankOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarCheckIcon],svg[mdi-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.47 8.06L15.47 10l-4.88 4.88l-2.12-2.12l-1.06 1.06L10.59 17z"></svg:path>`,
})
export class MdiCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarCheckOutlineIcon],svg[mdi-calendar-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zM5 7V5h14v2zm5.56 10.46l5.94-5.93l-1.07-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06z"></svg:path>`,
})
export class MdiCalendarCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarClockIcon],svg[mdi-calendar-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69zm4-5H5v11h4.67c-.43-.91-.67-1.93-.67-3a7 7 0 0 1 7-7c1.07 0 2.09.24 3 .67zM5 21a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-1.91 0-3.64-.76-4.9-2zm11-9.85A4.85 4.85 0 0 0 11.15 16c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0 0 20.85 16c0-2.68-2.17-4.85-4.85-4.85"></svg:path>`,
})
export class MdiCalendarClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarClockOutlineIcon],svg[mdi-calendar-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6.1c1.26 1.24 2.99 2 4.9 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.64-2-4.9V5a2 2 0 0 0-2-2h-1V1h-2v2H8V1M5 5h14v2H5m0 2h14v.67c-.91-.43-1.93-.67-3-.67c-3.87 0-7 3.13-7 7c0 1.07.24 2.09.67 3H5m11-7.85c2.68 0 4.85 2.17 4.85 4.85s-2.17 4.85-4.85 4.85s-4.85-2.17-4.85-4.85s2.17-4.85 4.85-4.85M15 13v3.69l3.19 1.84l.75-1.3l-2.44-1.41V13Z"></svg:path>`,
})
export class MdiCalendarClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarCollapseHorizontalIcon],svg[mdi-calendar-collapse-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1m-7 13l-3-3v2H6v2h2v2zm7-1h-2v-2l-3 3l3 3v-2h2z"></svg:path>`,
})
export class MdiCalendarCollapseHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarCollapseHorizontalOutlineIcon],svg[mdi-calendar-collapse-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10zm11-8l-3 3l3 3v-2h2v-2h-2zm-8 2H6v2h2v2l3-3l-3-3z"></svg:path>`,
})
export class MdiCalendarCollapseHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarCursorIcon],svg[mdi-calendar-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.86 17.74c-.09.11-.21.17-.33.2l-1.87.36l1.29 2.84c.16.29.02.65-.28.79l-2.14 1.01c-.09.06-.17.06-.26.06c-.22 0-.43-.12-.53-.34l-1.29-2.83l-1.49 1.21a.593.593 0 0 1-.96-.47V11.6c0-.33.26-.6.59-.6c.15 0 .29.05.41.13l6.77 5.76c.27.23.3.61.09.85M12 15v-5H7v5zm7-12h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H5V8h14v3.06l2 1.7V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiCalendarCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarCursorOutlineIcon],svg[mdi-calendar-cursor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h14v2.1l2 1.7V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H5zm14-4v2H5V5zM7 16v-5h5v5zm15.9 1.7c-.1.1-.2.2-.3.2l-1.9.4l1.3 2.8c.2.3 0 .6-.3.8l-2.1 1c-.2.1-.2.1-.3.1c-.2 0-.4-.1-.5-.3l-1.3-2.8L16 21c-.1.1-.2.1-.4.1c-.3 0-.6-.3-.6-.6v-9c0-.3.3-.6.6-.6c.1 0 .3.1.4.1l6.8 5.8c.2.3.3.7.1.9"></svg:path>`,
})
export class MdiCalendarCursorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarEditIcon],svg[mdi-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5v-2H5V8h14v1h2V5a2 2 0 0 0-2-2m2.7 10.35l-1 1l-2.05-2l1-1c.2-.21.54-.22.77 0l1.28 1.28c.19.2.19.52 0 .72M12 18.94l6.07-6.06l2.05 2L14.06 21H12z"></svg:path>`,
})
export class MdiCalendarEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarEditOutlineIcon],svg[mdi-calendar-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 13.35l-1 1l-2.05-2l1-1c.2-.21.54-.22.77 0l1.28 1.28c.19.2.19.52 0 .72M12 18.94V21h2.06l6.06-6.12l-2.05-2zM5 19h5v2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v4H5zM5 5v2h14V5z"></svg:path>`,
})
export class MdiCalendarEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarEndIcon],svg[mdi-calendar-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v8h-2v-4l-4 4v-3h-5v-2h5v-3l4 4v-4zM5 19h4v2H5c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h1V.998h2V3h8V.998h2V3h1c1.11 0 2 .89 2 2v7h-2V8H5z"></svg:path>`,
})
export class MdiCalendarEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarEndOutlineIcon],svg[mdi-calendar-end-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h14v3h2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5zm14-4v2H5V5zm-3 12h-5v2h5v3l4-4l-4-4zm4-3v8h2v-8z"></svg:path>`,
})
export class MdiCalendarEndOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarExpandHorizontalIcon],svg[mdi-calendar-expand-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1m0 13l-3-3v2H9v-2l-3 3l3 3v-2h6v2z"></svg:path>`,
})
export class MdiCalendarExpandHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarExpandHorizontalOutlineIcon],svg[mdi-calendar-expand-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13H9v-2l-3 3l3 3v-2h6v2l3-3l-3-3zm4-10h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10z"></svg:path>`,
})
export class MdiCalendarExpandHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarExportIcon],svg[mdi-calendar-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l4-4h-3v-6h-2v6H8zm7-19h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h3l-2-2H5V8h14v11h-1l-2 2h3c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCalendarExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarExportOutlineIcon],svg[mdi-calendar-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3l-2-2H5V9h14v10h-1l-2 2h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 7V5h14v2zm8 11v-6h-2v6H8l4 4l4-4z"></svg:path>`,
})
export class MdiCalendarExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarFilterIcon],svg[mdi-calendar-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v6h-2V8H5v11h10v2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1zm11 20l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18z"></svg:path>`,
})
export class MdiCalendarFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarFilterOutlineIcon],svg[mdi-calendar-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H4.75c-.44.07-.85.27-1.17.58c-.31.32-.51.73-.58 1.17v14.5c.07.44.27.85.58 1.17c.32.31.73.51 1.17.58H15v-2H5V9h14v2h2V5c0-1.11-.89-2-2-2m0 4H5V5h14zm-2 14l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18z"></svg:path>`,
})
export class MdiCalendarFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarHeartIcon],svg[mdi-calendar-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V8H5v11zM16 1h2v2h1a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8zm-4 16.17l-.58-.53C9.36 14.77 8 13.54 8 12.03c0-1.23.97-2.2 2.2-2.2c.7 0 1.36.32 1.8.83c.44-.51 1.1-.83 1.8-.83c1.23 0 2.2.97 2.2 2.2c0 1.51-1.36 2.74-3.42 4.61z"></svg:path>`,
})
export class MdiCalendarHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarHeartOutlineIcon],svg[mdi-calendar-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.2c0 1.51-1.36 2.74-3.42 4.61l-.58.53l-.58-.53C9.36 14.94 8 13.71 8 12.2c0-1.23.97-2.2 2.2-2.2c.7 0 1.36.32 1.8.83c.44-.51 1.1-.83 1.8-.83c1.23 0 2.2.97 2.2 2.2M21 5v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 5v2h14V5zm14 14V9H5v10z"></svg:path>`,
})
export class MdiCalendarHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarImportIcon],svg[mdi-calendar-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12l-4 4h3v6h2v-6h3m3-13h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h4v-2H5V8h14v11h-4v2h4c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCalendarImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarImportOutlineIcon],svg[mdi-calendar-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V9h14v10h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 7V5h14v2zm7 5l-4 4h3v6h2v-6h3z"></svg:path>`,
})
export class MdiCalendarImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarLockIcon],svg[mdi-calendar-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1c1.1 0 2 .9 2 2v7c-.6-.4-1.3-.8-2-.9V8H5v11h7zm10-2.7v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V17c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h3z"></svg:path>`,
})
export class MdiCalendarLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarLockOpenIcon],svg[mdi-calendar-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1c1.1 0 2 .9 2 2v6c-.6-.4-1.3-.8-2-.9V8H5v11h7zm10-2.7c0-.7-.6-1.3-1.2-1.3h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2z"></svg:path>`,
})
export class MdiCalendarLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarLockOpenOutlineIcon],svg[mdi-calendar-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V9h14v1.1c.7.2 1.4.5 2 .9V5c0-1.1-.9-2-2-2m0 4H5V5h14zm3 14.8c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h4.3c.6 0 1.2.6 1.2 1.3z"></svg:path>`,
})
export class MdiCalendarLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarLockOutlineIcon],svg[mdi-calendar-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V9h14v2c.7.2 1.4.5 2 .9V5c0-1.1-.9-2-2-2m0 4H5V5h14zm1.8 10v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"></svg:path>`,
})
export class MdiCalendarLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMinusIcon],svg[mdi-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V8H5v11zM16 1h2v2h1a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8zm0 11.5v2H8v-2z"></svg:path>`,
})
export class MdiCalendarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMinusOutlineIcon],svg[mdi-calendar-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 2v2H5V5zM5 19V9h14v10zm3-6h8v2H8z"></svg:path>`,
})
export class MdiCalendarMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMonthIcon],svg[mdi-calendar-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm0 16V8H5v11zM9 14v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z"></svg:path>`,
})
export class MdiCalendarMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMonthOutlineIcon],svg[mdi-calendar-month-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h2v2H7zm14-6v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 7h14V5H5zm14 12V9H5v10zm-4-6v-2h2v2zm-4 0v-2h2v2zm-4 2h2v2H7zm8 2v-2h2v2zm-4 0v-2h2v2z"></svg:path>`,
})
export class MdiCalendarMonthOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMultipleIcon],svg[mdi-calendar-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zM3 21h14v2H3a2 2 0 0 1-2-2V9h2zm16-6h-4v-4h4z"></svg:path>`,
})
export class MdiCalendarMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMultipleCheckIcon],svg[mdi-calendar-multiple-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm-3.47 8.06l-4.44 4.44l-2.68-2.68l1.06-1.06l1.62 1.62L16.47 10zM3 21h14v2H3a2 2 0 0 1-2-2V9h2z"></svg:path>`,
})
export class MdiCalendarMultipleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMultiselectIcon],svg[mdi-calendar-multiselect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V8H5v11zM16 1h2v2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8zm-9 9h2v2H7zm8 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiCalendarMultiselectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarMultiselectOutlineIcon],svg[mdi-calendar-multiselect-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h2v2H7zm12-8h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10zm6-4h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MdiCalendarMultiselectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarOutlineIcon],svg[mdi-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h5v5h-5zm7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10z"></svg:path>`,
})
export class MdiCalendarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarPlusIcon],svg[mdi-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V8H5v11zM16 1h2v2h1a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8zm-5 8.5h2v3h3v2h-3v3h-2v-3H8v-2h3z"></svg:path>`,
})
export class MdiCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarPlusOutlineIcon],svg[mdi-calendar-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h3v2h-3v3h-2v-3H8v-2h3v-3h2zm8-8v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 5v2h14V5zm14 14V9H5v10z"></svg:path>`,
})
export class MdiCalendarPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarQuestionIcon],svg[mdi-calendar-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1h-2v2H8V1zM5 8h14v11H5zm7.19 1c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91c-.2.26-.31.68-.31 1.18h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82c-.53-.45-1.26-.68-2.19-.68M11 16v2h2v-2z"></svg:path>`,
})
export class MdiCalendarQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarQuestionOutlineIcon],svg[mdi-calendar-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.95 10c-.74 0-1.34.18-1.8.5c-.44.39-.65.9-.65 1.6v.02h1.65c.01-.26.09-.47.24-.62a.88.88 0 0 1 .56-.19c.26 0 .48.09.64.25c.15.17.22.4.22.66c0 .28-.06.53-.2.73c-.11.21-.3.38-.52.55c-.43.28-.73.55-.89.79c-.17.21-.26.6-.26 1.04h1.7c0-.27.03-.49.11-.65c.08-.18.22-.32.43-.47c.39-.21.7-.47.95-.82c.24-.36.37-.72.37-1.17c0-.67-.23-1.22-.69-1.61c-.45-.41-1.07-.61-1.86-.61m-1.01 6.22V18h1.7v-1.78zM19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 2v2H5V5zM5 19V9h14v10z"></svg:path>`,
})
export class MdiCalendarQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarRangeIcon],svg[mdi-calendar-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14z"></svg:path>`,
})
export class MdiCalendarRangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarRangeOutlineIcon],svg[mdi-calendar-range-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h2v2H7zm14-6v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 7h14V5H5zm14 12V9H5v10zm-4-6h2v-2h-2zm-4 0h2v-2h-2z"></svg:path>`,
})
export class MdiCalendarRangeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarRefreshIcon],svg[mdi-calendar-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9c-.6-.5-1.1-1.2-1.5-2H5V8h14v2.6c.7.1 1.4.3 2 .7V5c0-1.1-.9-2-2-2m-1 9.5c1.1 0 2.1.4 2.8 1.2l1.2-1.2v4h-4l1.8-1.8c-.5-.4-1.1-.7-1.8-.7c-1.4 0-2.5 1.1-2.5 2.5S16.6 19 18 19c.8 0 1.5-.4 2-1h1.7c-.6 1.5-2 2.5-3.7 2.5c-2.2 0-4-1.8-4-4s1.8-4 4-4"></svg:path>`,
})
export class MdiCalendarRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarRefreshOutlineIcon],svg[mdi-calendar-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9c-.6-.5-1.1-1.2-1.5-2H5V9h14v1.6c.7.1 1.4.3 2 .7V5c0-1.1-.9-2-2-2m0 4H5V5h14m-1 7.5c1.1 0 2.1.4 2.8 1.2l1.2-1.2v4h-4l1.8-1.8c-.5-.4-1.1-.7-1.8-.7c-1.4 0-2.5 1.1-2.5 2.5S16.6 19 18 19c.8 0 1.5-.4 2-1h1.7c-.6 1.5-2 2.5-3.7 2.5c-2.2 0-4-1.8-4-4s1.8-4 4-4"></svg:path>`,
})
export class MdiCalendarRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarRemoveIcon],svg[mdi-calendar-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9.31 17l2.44-2.44L14.19 17l1.06-1.06l-2.44-2.44l2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06l2.44 2.44l-2.44 2.44z"></svg:path>`,
})
export class MdiCalendarRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarRemoveOutlineIcon],svg[mdi-calendar-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zM5 7V5h14v2zm3.23 9.41l1.06 1.06l2.44-2.44l2.44 2.44l1.06-1.06l-2.44-2.44l2.44-2.44l-1.06-1.06l-2.44 2.44l-2.44-2.44l-1.06 1.06l2.44 2.44z"></svg:path>`,
})
export class MdiCalendarRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarSearchIcon],svg[mdi-calendar-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M19 8H5v11h4.5c.31.75.76 1.42 1.31 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v8.03c-.5-.81-1.2-1.49-2-2.03z"></svg:path>`,
})
export class MdiCalendarSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarSearchOutlineIcon],svg[mdi-calendar-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 18.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.9 0 1.7-.2 2.4-.7l3.1 3.1l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5M5 19V9h14v2c.8.5 1.5 1.2 2 2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5.8c-.6-.6-1-1.2-1.3-2zM19 5v2H5V5z"></svg:path>`,
})
export class MdiCalendarSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarSelectIcon],svg[mdi-calendar-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 12h6v6h-6v-6zM5 4h1V2h2v2h8V2h2v2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 5v11h14V9H5zm8 5v2h2v-2h-2z" fill="currentColor"></svg:path>`,
})
export class MdiCalendarSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarStarIcon],svg[mdi-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2h-1V1m-7.12 11H7.27l2.92 2.11l-1.11 3.45L12 15.43l2.92 2.13l-1.12-3.44L16.72 12h-3.6L12 8.56z"></svg:path>`,
})
export class MdiCalendarStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarStarFourPointsIcon],svg[mdi-calendar-star-four-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.74 12.25L12 9.5l1.25 2.75L16 13.5l-2.75 1.26L12 17.5l-1.26-2.74L8 13.5zM16 3V1h2v2h1c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-.53.21-1.04.59-1.41C3.96 3.21 4.47 3 5 3h1V1h2v2zM5 8v11h14V8z"></svg:path>`,
})
export class MdiCalendarStarFourPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarStarOutlineIcon],svg[mdi-calendar-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V9h14zm0-12H5V5h14zm-8 6H7.8l2.6 2l-1 3l2.6-1.8l2.6 1.8l-1-3l2.6-2H13l-1-3z"></svg:path>`,
})
export class MdiCalendarStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarStartIcon],svg[mdi-calendar-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14h2v3h5v-3l4 4l-4 4v-3H4v3H2zm17 5V8H5v4H3V5c0-1.11.89-2 2-2h1V.998h2V3h8V.998h2V3h1a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2h-6.17l2-2z"></svg:path>`,
})
export class MdiCalendarStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarStartOutlineIcon],svg[mdi-calendar-start-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 18l-4-4v3H4v-3H2v8h2v-3h5v3zm6-15h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v7h2V9h14v10h-4.2l-2 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 7V5h14v2z"></svg:path>`,
})
export class MdiCalendarStartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarSyncIcon],svg[mdi-calendar-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11v1.5c3.19 0 5.09 3.55 3.33 6.21l-1.09-1.09C21.06 15.96 19.85 14 18 14v1.5l-2.25-2.25zm0 11v-1.5c-3.19 0-5.09-3.55-3.33-6.21l1.09 1.09C14.94 17.04 16.15 19 18 19v-1.5l2.25 2.25zm1-19h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a5.9 5.9 0 0 1-1.5-2H5V8h14v2.59c.71.11 1.39.35 2 .72V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCalendarSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarSyncOutlineIcon],svg[mdi-calendar-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11v1.5c3.19 0 5.09 3.55 3.33 6.21l-1.09-1.09C21.06 15.96 19.85 14 18 14v1.5l-2.25-2.25zm0 11v-1.5c-3.19 0-5.09-3.55-3.33-6.21l1.09 1.09C14.94 17.04 16.15 19 18 19v-1.5l2.25 2.25zm1-19h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a5.9 5.9 0 0 1-1.5-2H5V9h14v1.59c.71.11 1.39.35 2 .72V5a2 2 0 0 0-2-2m0 4H5V5h14"></svg:path>`,
})
export class MdiCalendarSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarTextIcon],svg[mdi-calendar-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14H7v2h7m5 3H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2 7H7v2h10z"></svg:path>`,
})
export class MdiCalendarTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarTextOutlineIcon],svg[mdi-calendar-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zM5 7V5h14v2zm2 4h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class MdiCalendarTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarTodayIcon],svg[mdi-calendar-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10h5v5H7m12 4H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCalendarTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarTodayOutlineIcon],svg[mdi-calendar-today-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16H5V9h14zm0-12H5V5h14M7 11h5v5H7"></svg:path>`,
})
export class MdiCalendarTodayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekIcon],svg[mdi-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1zM5 8v11h14V8zm2 2h10v2H7z"></svg:path>`,
})
export class MdiCalendarWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekBeginIcon],svg[mdi-calendar-week-begin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-9 9H7v7h2z"></svg:path>`,
})
export class MdiCalendarWeekBeginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekBeginOutlineIcon],svg[mdi-calendar-week-begin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3c1.11 0 2 .89 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm0 16V9H5v10zm0-12V5H5v2zM7 11h2v6H7z"></svg:path>`,
})
export class MdiCalendarWeekBeginOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekEndIcon],svg[mdi-calendar-week-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h14v11H5M6 1v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2h-1V1h-2v2H8V1m7 16h2v-7h-2v7Z"></svg:path>`,
})
export class MdiCalendarWeekEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekEndOutlineIcon],svg[mdi-calendar-week-end-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h1V2h2v2h8V2h2v2h1c1.11 0 2 .89 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 16h14V10H5v10M5 8h14V6H5v2m12 4v6h-2v-6h2"></svg:path>`,
})
export class MdiCalendarWeekEndOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekOutlineIcon],svg[mdi-calendar-week-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h1V1h2v2h8V1h2v2h1c1.11 0 2 .89 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 16h14V9H5zM5 7h14V5H5zm12 4v2H7v-2z"></svg:path>`,
})
export class MdiCalendarWeekOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekendIcon],svg[mdi-calendar-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V8H5v11zM16 1h2v2h1a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8zM7 17v-7h2v7zm8-7h2v7h-2z"></svg:path>`,
})
export class MdiCalendarWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekendOutlineIcon],svg[mdi-calendar-weekend-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2zm0 16V9H5v10zm0-12V5H5v2zM7 11h2v6H7zm8 0h2v6h-2z"></svg:path>`,
})
export class MdiCalendarWeekendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCallMadeIcon],svg[mdi-call-made-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v2h6.59L4 18.59L5.41 20L17 8.41V15h2V5"></svg:path>`,
})
export class MdiCallMadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCallMergeIcon],svg[mdi-call-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20.41L18.41 19L15 15.59L13.59 17M7.5 8H11v5.59L5.59 19L7 20.41l6-6V8h3.5L12 3.5"></svg:path>`,
})
export class MdiCallMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCallMissedIcon],svg[mdi-call-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.59 7L12 14.59L6.41 9H11V7H3v8h2v-4.59l7 7l9-9"></svg:path>`,
})
export class MdiCallMissedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCallReceivedIcon],svg[mdi-call-received-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.41L18.59 4L7 15.59V9H5v10h10v-2H8.41"></svg:path>`,
})
export class MdiCallReceivedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCallSplitIcon],svg[mdi-call-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 4l2.29 2.29l-2.88 2.88l1.42 1.42l2.88-2.88L20 10V4M10 4H4v6l2.29-2.29l4.71 4.7V20h2v-8.41l-5.29-5.3"></svg:path>`,
})
export class MdiCallSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCamcorderIcon],svg[mdi-camcorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V7c0-2.76-2.24-5-5-5M5 20c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2-10c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m15-1v5c0 1.1-.9 2-2 2h-7v-2h7V9h-7V7h7c1.1 0 2 .9 2 2"></svg:path>`,
})
export class MdiCamcorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCamcorderOffIcon],svg[mdi-camcorder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L9.4 8.8l-7-7L1.1 3l1.6 1.6C2.2 5.3 2 6.1 2 7v13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6.1l1 1V16h1.1l6.7 6.7zM5 20c-.5 0-1-.5-1-1s.5-1 1-1s1 .5 1 1s-.5 1-1 1m2-10c-1.7 0-3-1.3-3-3c0-.3.1-.6.2-.9L8 9.9c-.4 0-.7.1-1 .1m.2-6L5.5 2.3Q6.25 2 7 2c2.8 0 5 2.2 5 5v1.8l-2-2C9.9 5.3 8.7 4.1 7.2 4M20 9h-7V7h7c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2h-.8l-2-2H20z"></svg:path>`,
})
export class MdiCamcorderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraIcon],svg[mdi-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraAccountIcon],svg[mdi-camera-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m12 12v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCameraAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraBurstIcon],svg[mdi-camera-burst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M11 17l2.5-3.15L15.29 16l2.5-3.22L21 17z"></svg:path>`,
})
export class MdiCameraBurstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraControlIcon],svg[mdi-camera-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12c0-.81.3-1.5.89-2.11C10.5 9.3 11.19 9 12 9s1.5.3 2.11.89c.59.61.89 1.3.89 2.11s-.3 1.5-.89 2.11c-.61.59-1.3.89-2.11.89s-1.5-.3-2.11-.89C9.3 13.5 9 12.81 9 12M5.53 8.44l1.78 1.78L5.53 12l1.78 1.78l-1.78 1.78L2 12zm2.91 10.03l1.78-1.78L12 18.47l1.78-1.78l1.78 1.78L12 22zm10.03-2.91l-1.78-1.78L18.47 12l-1.78-1.78l1.78-1.78L22 12zM15.56 5.53l-1.78 1.78L12 5.53l-1.78 1.78l-1.78-1.78L12 2z"></svg:path>`,
})
export class MdiCameraControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraDocumentIcon],svg[mdi-camera-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v15H3v-2h16V7h-4.28c-.34.6-.98 1-1.72 1a2 2 0 0 1-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2c.74 0 1.38.41 1.72 1H19c1.11 0 2 .89 2 2M6 15h7l-2-4H8z"></svg:path>`,
})
export class MdiCameraDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraDocumentOffIcon],svg[mdi-camera-document-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-.73-.73H3v-2h15.11l-5.22-5.22l.11.22H6l2-4h1.11l-1-1H8c-1.1 0-2-.9-2-2v-.11L1.11 3l1.28-1.27l19.72 19.73zM13 8c.74 0 1.38-.4 1.72-1H19v8.8l2 2V7c0-1.11-.89-2-2-2h-4.28c-.34-.59-.98-1-1.72-1c0-1.1-.9-2-2-2H8c-.76 0-1.41.43-1.75 1.05L12.5 9.3c.31-.35.5-.8.5-1.3"></svg:path>`,
})
export class MdiCameraDocumentOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraEnhanceIcon],svg[mdi-camera-enhance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3m-3 15a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25"></svg:path>`,
})
export class MdiCameraEnhanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraEnhanceOutlineIcon],svg[mdi-camera-enhance-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10l-.94 2.06L9 13l2.06.94L12 16l.94-2.06L15 13l-2.06-.94zm8-5h-3.17L15 3H9L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 14H4V7h4.05l.59-.65L9.88 5h4.24l1.24 1.35l.59.65H20zM12 8a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MdiCameraEnhanceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraFlipIcon],svg[mdi-camera-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3l-2-2H9L7 5H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2M5 12h2.1A4.997 4.997 0 0 1 13 8.1c.76.15 1.43.49 2 .9l-1.44 1.45c-.45-.28-.98-.45-1.56-.45c-1.26 0-2.4.8-2.82 2H11l-3 3zm11.91 2c-.55 2.71-3.19 4.45-5.91 3.9a5.4 5.4 0 0 1-2-.9l1.44-1.45c.46.28.99.45 1.56.45c1.27 0 2.41-.8 2.83-2H13l3-3l3 3z"></svg:path>`,
})
export class MdiCameraFlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraFlipOutlineIcon],svg[mdi-camera-flip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2m0 14H4V7h4.05l1.83-2h4.24L16 7h4zM5 12h2.1A4.997 4.997 0 0 1 13 8.1c.76.15 1.43.49 2 .9l-1.44 1.45c-.45-.28-.98-.45-1.56-.45c-1.26 0-2.4.8-2.82 2H11l-3 3zm11.91 2c-.55 2.71-3.19 4.45-5.91 3.9a5.4 5.4 0 0 1-2-.9l1.44-1.45c.46.28.99.45 1.56.45c1.27 0 2.41-.8 2.83-2H13l3-3l3 3z"></svg:path>`,
})
export class MdiCameraFlipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraFocusIcon],svg[mdi-camera-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 2a2 2 0 0 1 2-2h4v2H2v4H0V2zm24 20a2 2 0 0 1-2 2h-4v-2h4v-4h2v4zM2 24a2 2 0 0 1-2-2v-4h2v4h4v2H2zM22 0a2 2 0 0 1 2 2v4h-2V2h-4V0h4zm-5 9h6v6h-6V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 17h6v6H9v-6zm1.5 1.5v3h3v-3h-3z" fill="currentColor"></svg:path>`,
})
export class MdiCameraFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraFrontIcon],svg[mdi-camera-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5M17 0H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-5 8a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m2 12v2h5v-2m-9 0H5v2h5v2l3-3l-3-3z"></svg:path>`,
})
export class MdiCameraFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraFrontVariantIcon],svg[mdi-camera-front-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h12a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m6 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m-1-5v2h2V1zM6 4v12.5c0-1.38 2.69-2.5 6-2.5s6 1.12 6 2.5V4zm7 14H9v2h4v2l3-3l-3-3z"></svg:path>`,
})
export class MdiCameraFrontVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraGoproIcon],svg[mdi-camera-gopro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-2.5 7.5a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m0-1.5A1.5 1.5 0 0 1 16 9.5A1.5 1.5 0 0 1 17.5 8A1.5 1.5 0 0 1 19 9.5a1.5 1.5 0 0 1-1.5 1.5M12 15V5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2zm-2-3H4V7h6z"></svg:path>`,
})
export class MdiCameraGoproIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraImageIcon],svg[mdi-camera-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m9.09 4.45l-2.04 2.73l1.55 2.07l-.87.66l-2.46-3.27L6 16h12z"></svg:path>`,
})
export class MdiCameraImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraIrisIcon],svg[mdi-camera-iris-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.73 15l-3.9 6.76a9.98 9.98 0 0 0 8.49-2.01l-3.66-6.35M2.46 15c.92 2.92 3.15 5.26 5.99 6.34L12.12 15m-3.58-3l-3.9-6.75A9.86 9.86 0 0 0 2 12c0 .68.07 1.35.2 2h7.49m12.11-4h-7.49l.29.5l4.76 8.25A9.93 9.93 0 0 0 22 12c0-.69-.07-1.36-.2-2m-.26-1c-.92-2.93-3.15-5.26-5.99-6.34L11.88 9M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.84-6.32 2.25l3.66 6.35z"></svg:path>`,
})
export class MdiCameraIrisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraLockIcon],svg[mdi-camera-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h3l2-2h6l2 2h3c1.11 0 2 .89 2 2v6c-.84-.63-1.87-1-3-1c-.79 0-1.54.18-2.21.5C16.18 9.22 14.27 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c.42 0 .84-.05 1.23-.15c-.15.35-.23.74-.23 1.15v2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 5c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m11 9.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V17c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h3z"></svg:path>`,
})
export class MdiCameraLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraLockOpenIcon],svg[mdi-camera-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12c-.4.6-.6 1.3-.7 2c-.6.6-1.4 1-2.3 1c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3m-2 6.2c0-.5.1-1 .4-1.4c-.5.1-.9.2-1.4.2c-2.8 0-5-2.2-5-5s2.2-5 5-5c2.3 0 4.1 1.5 4.8 3.6c.7-.3 1.4-.6 2.2-.6c1.1 0 2.2.4 3 1V6c0-1.1-.9-2-2-2h-3l-2-2H9L7 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9zm8.8-1.2h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiCameraLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraLockOpenOutlineIcon],svg[mdi-camera-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.2L9 2h6l1.8 2H20c1.1 0 2 .9 2 2v5c-.6-.4-1.3-.8-2-.9V6h-4l-1.8-2H9.9L8 6H4v12h9zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c.5 0 .9-.1 1.4-.2c.2-.4.5-.8.8-1v-1.2c0-.2 0-.4.1-.5c-.6.6-1.4 1-2.3 1c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3v.1c.4-.6 1.1-1.1 1.8-1.5C16.1 8.5 14.3 7 12 7m9.8 10h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiCameraLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraLockOutlineIcon],svg[mdi-camera-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V17c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h3zM20 4c1.1 0 2 .9 2 2v6c-.58-.44-1.26-.75-2-.9V6h-4.05l-1.83-2H9.88L8.05 6H4v12h9v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.17L9 2h6l1.83 2zm-8 3a5.01 5.01 0 0 1 4.97 4.43c-1.68.75-2.87 2.4-2.97 4.33c-.33.3-.6.67-.77 1.09c-.39.1-.81.15-1.23.15c-2.76 0-5-2.24-5-5s2.24-5 5-5m0 8c1.65 0 3-1.35 3-3s-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3"></svg:path>`,
})
export class MdiCameraLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraMarkerIcon],svg[mdi-camera-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 16.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2m0-4.8c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5M9 2L7 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10.5c-.6-.9-1.1-1.9-1.4-3.1c-.3.1-.7.1-1.1.1c-2.8 0-5-2.2-5-5s2.2-5 5-5c2.1 0 4 1.3 4.7 3.3q.9-.3 1.8-.3c1.3 0 2.5.5 3.5 1.3V6c0-1.1-.9-2-2-2h-3l-2-2zm2.9 7C10.3 9 9 10.4 9 12c0 1.7 1.3 3 3 3c.4 0 .7-.1 1-.2c.2-1.4.9-2.6 1.9-3.5c-.3-1.3-1.5-2.3-3-2.3q.15 0 0 0"></svg:path>`,
})
export class MdiCameraMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraMarkerOutlineIcon],svg[mdi-camera-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 16.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2m0-4.8c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5M9 2L7.2 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10.5c-.4-.6-.8-1.3-1-2H4V6h4.1l1.8-2h4.2l1.8 2H20v4.2c.7.2 1.4.6 2 1.1V6c0-1.1-.9-2-2-2h-3.2L15 2zm3 5c-2.8 0-5 2.2-5 5s2.2 5 5 5c.4 0 .8 0 1.2-.1c-.1-.5-.2-.9-.2-1.4v-.7c-.3.1-.7.2-1 .2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.4 0 2.6 1 2.9 2.3c.5-.4 1.1-.8 1.8-1C16 8.3 14.1 7 12 7"></svg:path>`,
})
export class MdiCameraMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraMeteringCenterIcon],svg[mdi-camera-metering-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6zm8 4.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m0-3c2.14 0 3.93 1.5 4.39 3.5h-1.56A2.99 2.99 0 0 0 12 9c-1.31 0-2.42.83-2.83 2H7.61C8.07 9 9.86 7.5 12 7.5m0 9c-2.14 0-3.93-1.5-4.39-3.5h1.56c.41 1.17 1.52 2 2.83 2s2.42-.83 2.83-2h1.56c-.46 2-2.25 3.5-4.39 3.5"></svg:path>`,
})
export class MdiCameraMeteringCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraMeteringMatrixIcon],svg[mdi-camera-metering-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6zm1.5 1.5H11v1.67c-.85.3-1.53.98-1.83 1.83H5.5zm13 0V11h-3.67c-.3-.85-.98-1.53-1.83-1.83V7.5zm0 9H13v-1.67c.85-.3 1.53-.98 1.83-1.83h3.67zm-13 0V13h3.67c.3.85.98 1.53 1.83 1.83v1.67zm6.5-6a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCameraMeteringMatrixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraMeteringPartialIcon],svg[mdi-camera-metering-partial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6zm8 1.5c2.14 0 3.93 1.5 4.39 3.5h-1.56A2.99 2.99 0 0 0 12 9c-1.31 0-2.42.83-2.83 2H7.61C8.07 9 9.86 7.5 12 7.5m0 9c-2.14 0-3.93-1.5-4.39-3.5h1.56c.41 1.17 1.52 2 2.83 2s2.42-.83 2.83-2h1.56c-.46 2-2.25 3.5-4.39 3.5"></svg:path>`,
})
export class MdiCameraMeteringPartialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraMeteringSpotIcon],svg[mdi-camera-metering-spot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6zm8 4.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCameraMeteringSpotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraOffIcon],svg[mdi-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.2 4.47L2.5 3.2L20 20.72L18.73 22l-2-2H4a2 2 0 0 1-2-2V6c0-.22.04-.43.1-.63zM7 4l2-2h6l2 2h3a2 2 0 0 1 2 2v12c0 .6-.26 1.13-.68 1.5l-4.99-5c.43-.73.67-1.59.67-2.5a5 5 0 0 0-5-5c-.91 0-1.77.24-2.5.67L5.82 4zm0 8a5 5 0 0 0 5 5c.5 0 1.03-.08 1.5-.23L11.72 15A3.064 3.064 0 0 1 9 12.28L7.23 10.5c-.15.47-.23 1-.23 1.5m5-3a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9"></svg:path>`,
})
export class MdiCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraOffOutlineIcon],svg[mdi-camera-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12c0 .54-.1 1.05-.26 1.54L15 11.78A3.06 3.06 0 0 0 12.22 9l-1.76-1.74c.49-.16 1-.26 1.54-.26c2.76 0 5 2.24 5 5M9.88 4h4.24l1.83 2H20v10.8l1.88 1.88c.08-.21.12-.44.12-.68V6c0-1.11-.89-2-2-2h-3.17L15 2H9L7.18 4L8.6 5.4zm12.23 17.46l-1.27 1.27L18.11 20H4a2 2 0 0 1-2-2V6c0-.58.25-1.1.65-1.46L1.11 3l1.28-1.27zM9 12c0 1.66 1.34 3 3 3c.33 0 .65-.07.94-.17l-3.77-3.77c-.1.3-.17.61-.17.94m7.11 6l-1.66-1.66c-.73.41-1.56.66-2.45.66c-2.76 0-5-2.24-5-5c0-.89.25-1.72.66-2.45L4.11 6H4v12z"></svg:path>`,
})
export class MdiCameraOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraOutlineIcon],svg[mdi-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MdiCameraOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraPartyModeIcon],svg[mdi-camera-party-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c-1.63 0-3.06-.79-4-2h4a3 3 0 0 0 3-3c0-.35-.07-.69-.18-1h2.08c.06.32.1.66.1 1a5 5 0 0 1-5 5m0-10c1.63 0 3.06.79 4 2h-4a3 3 0 0 0-3 3c0 .35.07.68.18 1H7.1c-.07-.32-.1-.66-.1-1a5 5 0 0 1 5-5m8-3h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCameraPartyModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraPlusIcon],svg[mdi-camera-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V1h2v3h3v2H5v3H3V6H0V4m6 6V7h3V4h7l1.8 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10m10 9c4.45 0 6.69-5.38 3.54-8.54C13.39 7.31 8 9.55 8 14c0 2.76 2.24 5 5 5m-3.2-5c0 2.85 3.45 4.28 5.46 2.26c2.02-2.01.59-5.46-2.26-5.46A3.21 3.21 0 0 0 9.8 14"></svg:path>`,
})
export class MdiCameraPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraPlusOutlineIcon],svg[mdi-camera-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-3.2L16 4h-6v2h5.1L17 8h4v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 14c0 4.45 5.39 6.69 8.54 3.54S17.45 9 13 9c-2.76 0-5 2.24-5 5m5-3a3.09 3.09 0 0 1 3 3a3.09 3.09 0 0 1-3 3a3.09 3.09 0 0 1-3-3a3.09 3.09 0 0 1 3-3M5 6h3V4H5V1H3v3H0v2h3v3h2"></svg:path>`,
})
export class MdiCameraPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraRearIcon],svg[mdi-camera-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2c1.09 0 2 .9 2 2a2 2 0 0 1-2 2m5-6H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-3 20v2h5v-2m-9 0H5v2h5v2l3-3l-3-3z"></svg:path>`,
})
export class MdiCameraRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraRearVariantIcon],svg[mdi-camera-rear-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h12a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m6 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m1 16H9v2h4v2l3-3l-3-3z"></svg:path>`,
})
export class MdiCameraRearVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraRetakeIcon],svg[mdi-camera-retake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3l-2-2H9L7 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-8 13c-1.08 0-2.14-.35-3-1l1.44-1.44c.47.29 1.01.44 1.56.44a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.26 0-2.4.8-2.82 2H11l-3 3l-3-3h2.1A4.997 4.997 0 0 1 13 8.1a5 5 0 0 1-1 9.9"></svg:path>`,
})
export class MdiCameraRetakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraRetakeOutlineIcon],svg[mdi-camera-retake-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3.17L15 3H9L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 14H4V7h4.05l1.83-2h4.24L16 7h4zm-8-1c-1.08 0-2.14-.35-3-1l1.44-1.44c.47.29 1.01.44 1.56.44a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.26 0-2.4.8-2.82 2H11l-3 3l-3-3h2.1A4.997 4.997 0 0 1 13 8.1a5 5 0 0 1-1 9.9"></svg:path>`,
})
export class MdiCameraRetakeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraSwitchIcon],svg[mdi-camera-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15.5V13H9v2.5L5.5 12L9 8.5V11h6V8.5l3.5 3.5M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCameraSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraSwitchOutlineIcon],svg[mdi-camera-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-3.2L15 2H9L7.2 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.9 4h4.2l1.8 2H20v12H4V6h4.1m6.9 5H9V8.5L5.5 12L9 15.5V13h6v2.5l3.5-3.5L15 8.5z"></svg:path>`,
})
export class MdiCameraSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraTimerIcon],svg[mdi-camera-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.94 6.35c-.39-.39-.39-1.03 0-1.42a.996.996 0 0 1 1.41 0l6.72 5.38l.35.28c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0l-.28-.35zM12 20a8 8 0 0 0 8-8c0-2.21-.9-4.21-2.34-5.66l1.41-1.41A9.97 9.97 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12h2a8 8 0 0 0 8 8m0-19a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiCameraTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraWirelessIcon],svg[mdi-camera-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.8a3.2 3.2 0 0 1 3.2 3.2a3.2 3.2 0 0 1-3.2 3.2A3.2 3.2 0 0 1 8.8 14a3.2 3.2 0 0 1 3.2-3.2m4-7.47V2a6 6 0 0 1 6 6h-1.33c0-2.58-2.09-4.67-4.67-4.67M16 6V4.67c1.84 0 3.33 1.49 3.33 3.33H18c0-1.11-.89-2-2-2m1 3h5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.17L9 4h6v3c1.11 0 2 .89 2 2m-5 10a5 5 0 0 0 5-5a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5"></svg:path>`,
})
export class MdiCameraWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCameraWirelessOutlineIcon],svg[mdi-camera-wireless-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9v11H4V8h4.05l1.83-2H15V4H9L7.17 6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9zm.67-1H22c0-3.32-2.69-6-6-6v1.33c2.58 0 4.66 2.08 4.67 4.67M18 8h1.33A3.33 3.33 0 0 0 16 4.67V6c1.11 0 2 .89 2 2M7 14a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5a5 5 0 0 0-5 5m8 0a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3"></svg:path>`,
})
export class MdiCameraWirelessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCampfireIcon],svg[mdi-campfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 18.5l6 1.6l-.4 1.9l-9.4-2.5L2.7 22l-.5-1.9l6-1.6l-6.1-1.6l.5-1.9l9.4 2.5l9.4-2.5l.5 1.9zm.17-10.58c-.16-.22-.36-.42-.57-.59c-.45-.43-1-.74-1.44-1.2C13 5.08 12.79 3.34 13.44 2c-.65.17-1.26.54-1.77.95C9.84 4.46 9.11 7.1 10 9.38c0 .07.04.15.04.24c0 .16-.11.3-.25.38a.51.51 0 0 1-.57-.23c-.8-1.03-.93-2.51-.38-3.7c-1.19.99-1.84 2.65-1.73 4.22c.02.36.07.71.19 1.07c.11.44.29.87.52 1.25c.75 1.25 2.08 2.15 3.5 2.33c1.52.2 3.14-.09 4.31-1.15c1.3-1.2 1.77-3.12 1.08-4.79l-.1-.17q-.21-.495-.57-.9zm-2.24 4.55c-.2.18-.52.36-.78.44c-.79.28-1.59-.12-2.05-.6c.84-.2 1.34-.84 1.5-1.48c.11-.58-.11-1.05-.21-1.61c-.08-.53-.07-.99.13-1.49c.13.27.27.55.44.77c.55.72 1.41 1.04 1.59 2c.02.13.05.22.05.33c0 .6-.24 1.24-.68 1.64"></svg:path>`,
})
export class MdiCampfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCancelIcon],svg[mdi-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7"></svg:path>`,
})
export class MdiCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandelabraIcon],svg[mdi-candelabra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 11c0 .55-.45 1-1 1H19v2c0 1.11-.89 2-2 2h-4v4h1a2 2 0 0 1 2 2H8c0-1.1.9-2 2-2h1v-4H7a2 2 0 0 1-2-2v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1H5V4l2 1v5h.5c.55 0 1 .45 1 1s-.45 1-1 1H7v2h4v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.5V2l2 1v7h.5c.55 0 1 .45 1 1s-.45 1-1 1H13v2h4v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.5V4l2 1v5h.5c.55 0 1 .45 1 1"></svg:path>`,
})
export class MdiCandelabraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandelabraFireIcon],svg[mdi-candelabra-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c.83 0 1.5-.67 1.5-1.5S18.83 3 18 3s-1.5 1.67-1.5 2.5S17.17 7 18 7m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M12 6c.83 0 1.5-.67 1.5-1.5S12.83 2 12 2s-1.5 1.67-1.5 2.5S11.17 6 12 6m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M6 7c.83 0 1.5-.67 1.5-1.5S6.83 3 6 3S4.5 4.67 4.5 5.5S5.17 7 6 7m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M20.5 11c0 .55-.45 1-1 1H19v2c0 1.11-.89 2-2 2h-4v4h1a2 2 0 0 1 2 2H8c0-1.1.9-2 2-2h1v-4H7a2 2 0 0 1-2-2v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1V9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c.55 0 1 .45 1 1s-.45 1-1 1H7v2h4v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1V8c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c.55 0 1 .45 1 1s-.45 1-1 1H13v2h4v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1V9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c.55 0 1 .45 1 1"></svg:path>`,
})
export class MdiCandelabraFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandleIcon],svg[mdi-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2c-1.66 0-3 3.34-3 5a3 3 0 0 0 3 3a3 3 0 0 0 3-3c0-1.66-1.34-5-3-5m0 4.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M10 11a1 1 0 0 0-1 1v8H7a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-3v-8a1 1 0 0 0-1-1z"></svg:path>`,
})
export class MdiCandleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandyIcon],svg[mdi-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.54 8.46c1.96 1.96 1.96 5.12 0 7.08s-5.12 1.96-7.07 0s-1.97-5.12 0-7.08s5.11-1.96 7.07 0m3.93-3.91s-.97.12-2.04.81a5.24 5.24 0 0 0-1.5-2.94a4.03 4.03 0 0 0-1.1 3.92c1.39.36 2.47 1.44 2.83 2.83c1.12.3 2.68.15 3.92-1.1a5.25 5.25 0 0 0-2.9-1.49c.39-.58.7-1.25.79-2.03M4.53 19.45s.97-.12 2.04-.81c.15 1.04.65 2.09 1.5 2.94c1.25-1.24 1.4-2.8 1.1-3.92a3.94 3.94 0 0 1-2.83-2.83c-1.12-.3-2.68-.15-3.92 1.1c.84.84 1.87 1.34 2.9 1.49c-.39.58-.7 1.26-.79 2.03"></svg:path>`,
})
export class MdiCandyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandyOffIcon],svg[mdi-candy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-6.4-6.4c-1.9 1.1-4.4.8-6-.8s-1.9-4.1-.8-6L1.1 3l1.3-1.3l19.7 19.7zM15.5 8.5c-1.4-1.4-3.3-1.8-5.1-1.2l6.3 6.3c.6-1.8.2-3.8-1.2-5.1m2.2.7c1.1.3 2.7.1 3.9-1.1c-.8-.8-1.9-1.3-2.9-1.5c.4-.6.7-1.3.8-2c0 0-1 .1-2 .8c-.1-1-.6-2.1-1.5-2.9c-1.2 1.2-1.4 2.8-1.1 3.9c1.3.3 2.4 1.4 2.8 2.8M6.3 14.8c-1.1-.3-2.7-.1-3.9 1.1c.8.8 1.9 1.3 2.9 1.5c-.4.6-.7 1.3-.8 2c0 0 1-.1 2-.8c.1 1 .6 2.1 1.5 2.9c1.2-1.2 1.4-2.8 1.1-3.9c-1.3-.3-2.4-1.4-2.8-2.8"></svg:path>`,
})
export class MdiCandyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandyOffOutlineIcon],svg[mdi-candy-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l6.6 6.6c-1.1 1.9-.8 4.4.8 6s4.1 1.9 6 .8l6.4 6.4zM9.9 14.1c-.8-.8-1.1-2-.7-3.1l3.8 3.8c-1.1.4-2.3.2-3.1-.7m4.9-7.8c-.3-1.1-.2-2.7 1.1-3.9c.9.9 1.4 1.9 1.5 2.9c1.1-.7 2-.8 2-.8c-.1.8-.4 1.5-.8 2c1 .2 2.1.7 2.9 1.5c-1.2 1.2-2.8 1.4-3.9 1.1c-.3-1.3-1.4-2.4-2.8-2.8M12.2 9l-1.8-1.8c1.7-.6 3.7-.2 5.1 1.2s1.8 3.3 1.2 5.1L15 11.8c-.1-.7-.3-1.4-.9-1.9s-1.2-.8-1.9-.9m-3 8.7c.3 1.1.2 2.7-1.1 3.9c-.9-.9-1.4-1.9-1.5-2.9c-1.1.7-2 .8-2 .8c.1-.8.4-1.5.8-2c-1-.2-2.1-.7-2.9-1.5c1.2-1.2 2.8-1.4 3.9-1.1c.3 1.3 1.4 2.4 2.8 2.8"></svg:path>`,
})
export class MdiCandyOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandyOutlineIcon],svg[mdi-candy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.88 9.88c1.17-1.17 3.07-1.17 4.24 0s1.17 3.07 0 4.24a3 3 0 0 1-4.24 0a3 3 0 0 1 0-4.24M8.46 8.46c-1.96 1.96-1.96 5.12 0 7.08s5.12 1.96 7.08 0s1.96-5.12 0-7.08s-5.12-1.96-7.08 0m11.01-3.91s-.97.12-2.04.82c-.15-1.05-.65-2.1-1.5-2.95c-1.25 1.25-1.4 2.8-1.1 3.92c1.39.36 2.47 1.44 2.83 2.83c1.12.3 2.68.15 3.92-1.1a5.25 5.25 0 0 0-2.9-1.49c.39-.58.7-1.25.79-2.03M4.53 19.45s.97-.12 2.04-.81c.15 1.04.65 2.09 1.5 2.94c1.25-1.24 1.4-2.8 1.1-3.92a3.96 3.96 0 0 1-2.83-2.83c-1.12-.3-2.67-.15-3.92 1.1c.84.84 1.87 1.34 2.9 1.49c-.39.58-.7 1.26-.79 2.03"></svg:path>`,
})
export class MdiCandyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCandycaneIcon],svg[mdi-candycane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8c0-.63.1-1.23.27-1.8L10 9.93zm2-8c.74 0 1.44.13 2.09.38L11.97 6c-.83 0-1.53.5-1.82 1.25L7.24 4.34A6 6 0 0 1 12 2m5.76 4.31L14 10.07V8c0-.38-.1-.73-.28-1.03l2.11-3.59a6 6 0 0 1 1.93 2.93m.24 6.78l-4 4V12.9l4-4zM18 20a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09l4-4z"></svg:path>`,
})
export class MdiCandycaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCannabisIcon],svg[mdi-cannabis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 22v-4.65c-.5.78-1.5 1.74-3.47 2.46c0 0 .5-1.71 1.91-2.86c-1.3.28-3.26.24-5.94-.95c0 0 2.47-1.41 5.28-1.03C7.69 14 5.7 12.08 4.17 8.11c0 0 4.5 1.23 6.74 5.03C8.88 8.24 12 2 12 2c2.43 5.47 1.91 9.1 1.12 11.1c2.25-3.77 6.71-4.99 6.71-4.99c-1.53 3.97-3.52 5.89-5.11 6.86C17.53 14.59 20 16 20 16c-2.68 1.19-4.64 1.23-5.94.95c1.41 1.15 1.91 2.86 1.91 2.86c-1.97-.72-2.97-1.68-3.47-2.46V22z"></svg:path>`,
})
export class MdiCannabisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCannabisOffIcon],svg[mdi-cannabis-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.62 13.42l-2.12-2.1c2.34-2.38 5.33-3.21 5.33-3.21c-.96 2.49-2.1 4.16-3.21 5.31M12 2s-1.14 2.3-1.59 5.21l3.31 3.29c.2-2.05-.11-4.87-1.72-8.5m8.84 20.73l1.27-1.27L2.39 1.73L1.11 3l7.51 7.5C6.5 8.75 4.17 8.11 4.17 8.11C5.7 12.08 7.69 14 9.28 14.97C6.47 14.59 4 16 4 16c2.68 1.19 4.64 1.23 5.94.95c-1.41 1.15-1.91 2.86-1.91 2.86c1.97-.72 2.97-1.68 3.47-2.46V22h1v-4.65c.5.78 1.5 1.74 3.47 2.46c0 0-.5-1.71-1.91-2.86c.33.05.71.12 1.14.14z"></svg:path>`,
})
export class MdiCannabisOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCapsLockIcon],svg[mdi-caps-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.96 13.71L12 8.29l2.03 5.43M11.14 6L6.43 18h1.93l.96-2.57h5.36l.96 2.57h1.93L12.86 6zM20 2H4c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 18H4V4h16z"></svg:path>`,
})
export class MdiCapsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarIcon],svg[mdi-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"></svg:path>`,
})
export class MdiCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCar2PlusIcon],svg[mdi-car-2-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16c0-2.4 1.1-4.5 2.7-6H3l1.5-4.5h11l.8 2.5c.6 0 1.2.1 1.7.3L16.9 5c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L1 11v8c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-1h4.3c-.2-.6-.3-1.3-.3-2m-3.5-1c-.8 0-1.5-.7-1.5-1.5S3.7 12 4.5 12s1.5.7 1.5 1.5S5.3 15 4.5 15M16 20v-2h-3v-1h1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-3v2h3v1h-1c-1.1 0-2 .9-2 2v3m12-3h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></svg:path>`,
})
export class MdiCar2PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCar3PlusIcon],svg[mdi-car-3-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.9 5c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L1 11v8c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-1h4.3c-.2-.6-.3-1.3-.3-2c0-2.4 1.1-4.5 2.7-6H3l1.5-4.5h11l.8 2.5c.6 0 1.2.1 1.7.3zM4.5 12c.8 0 1.5.7 1.5 1.5S5.3 15 4.5 15S3 14.3 3 13.5S3.7 12 4.5 12M23 17h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm-8.5-1c.8 0 1.5-1.2 1.5-2c0-1.1-.9-2-2-2h-3v2h3v1h-2v2h2v1h-3v2h3c1.1 0 2-.9 2-2c0-.8-.7-2-1.5-2"></svg:path>`,
})
export class MdiCar3PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarArrowLeftIcon],svg[mdi-car-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0-3.31 2.69-6 6-6c1.09 0 2.12.3 3 .81V12l-2.08-6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6.09c-.05-.33-.09-.66-.09-1M6.5 6.5h11L19 11H5zm0 9.5c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16M18 15v2h4v2h-4v2l-3-3z"></svg:path>`,
})
export class MdiCarArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarArrowRightIcon],svg[mdi-car-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0-3.31 2.69-6 6-6c1.09 0 2.12.3 3 .81V12l-2.08-6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6.09c-.05-.33-.09-.66-.09-1M6.5 6.5h11L19 11H5zm0 9.5c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16M19 21v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiCarArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBackIcon],svg[mdi-car-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 11l1-4h10l1 4m.92-5c-.21-.6-.78-1-1.42-1h-11c-.64 0-1.21.4-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8zM7 16H5v-2h2zm12 0h-2v-2h2zm-5 0h-4v-2h4z"></svg:path>`,
})
export class MdiCarBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBatteryIcon],svg[mdi-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3v3H1v14h22V6h-3V3h-6v3h-4V3zM3 8h18v10H3zm12 2v2h-2v2h2v2h2v-2h2v-2h-2v-2zM5 12v2h6v-2z"></svg:path>`,
})
export class MdiCarBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeAbsIcon],svg[mdi-car-brake-abs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 12c0 3.31-1.34 6.31-3.5 8.5l-1.08-1.08c1.9-1.92 3.08-4.52 3.08-7.42c0-2.89-1.18-5.5-3.08-7.42L20.5 3.5C22.66 5.69 24 8.69 24 12m-4-2.4V8h-3.2c-.88 0-1.6.72-1.6 1.6v1.6a1.6 1.6 0 0 0 1.6 1.6h1.6v1.6h-3.2V16h3.2c.88 0 1.6-.72 1.6-1.6v-1.6a1.6 1.6 0 0 0-1.6-1.6h-1.6V9.6zM8.42 6c1.05-.63 2.27-1 3.58-1s2.53.37 3.58 1h3.11C17.05 4.16 14.66 3 12 3S6.95 4.16 5.31 6zm4.78 6c.64 0 1.2.56 1.2 1.2v1.2a1.6 1.6 0 0 1-1.6 1.6H9.6V8h3.2a1.6 1.6 0 0 1 1.6 1.6v1.2c0 .64-.56 1.2-1.2 1.2m-.4.8h-1.6v1.6h1.6zm0-3.2h-1.6v1.6h1.6zM4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12s1.34 6.31 3.5 8.5l1.08-1.08C2.68 17.5 1.5 14.9 1.5 12c0-2.89 1.18-5.5 3.08-7.42M7.2 16v-3.2H5.6V16H4V9.6A1.6 1.6 0 0 1 5.6 8h1.6c.88 0 1.6.72 1.6 1.6V16zm0-4.8V9.6H5.6v1.6zm8.38 6.8c-1.05.63-2.27 1-3.58 1a6.93 6.93 0 0 1-3.58-1H5.31c1.64 1.84 4.03 3 6.69 3s5.05-1.16 6.69-3z"></svg:path>`,
})
export class MdiCarBrakeAbsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeAlertIcon],svg[mdi-car-brake-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-4a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m8.5 1.5c2.16-2.19 3.5-5.19 3.5-8.5s-1.34-6.31-3.5-8.5l-1.08 1.08C21.32 6.5 22.5 9.11 22.5 12c0 2.9-1.18 5.5-3.08 7.42zM4.58 19.42C2.68 17.5 1.5 14.9 1.5 12c0-2.89 1.18-5.5 3.08-7.42L3.5 3.5C1.34 5.69 0 8.69 0 12s1.34 6.31 3.5 8.5z"></svg:path>`,
})
export class MdiCarBrakeAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeFluidLevelIcon],svg[mdi-car-brake-fluid-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 12c0 2.9 1.18 5.5 3.08 7.42L3.5 20.5C1.34 18.31 0 15.31 0 12s1.34-6.31 3.5-8.5l1.08 1.08C2.68 6.5 1.5 9.11 1.5 12M21 12a9 9 0 1 1-18.001-.001A9 9 0 0 1 21 12M5 12c0 .44.05.86.12 1.28c.18-.19.34-.28.66-.28c.52 0 .61.21 1 .71S7.85 15 8.89 15c1.03 0 1.72-.79 2.11-1.29c.26-.34.39-.53.61-.63c.1-.05.22-.08.39-.08c.5 0 .61.21 1 .71S14.08 15 15.11 15c1.04 0 1.72-.79 2.11-1.29s.48-.71 1-.71c.32 0 .48.09.66.28c.07-.42.12-.84.12-1.28c0-3.86-3.14-7-7-7s-7 3.14-7 7m15.5-8.5l-1.08 1.08C21.32 6.5 22.5 9.11 22.5 12c0 2.9-1.18 5.5-3.08 7.42l1.08 1.08c2.16-2.19 3.5-5.19 3.5-8.5s-1.34-6.31-3.5-8.5"></svg:path>`,
})
export class MdiCarBrakeFluidLevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeHoldIcon],svg[mdi-car-brake-hold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7m8.5 1.5c2.2-2.2 3.5-5.2 3.5-8.5s-1.3-6.3-3.5-8.5l-1.1 1.1c1.9 1.9 3.1 4.5 3.1 7.4s-1.2 5.5-3.1 7.4zM4.6 19.4c-1.9-1.9-3.1-4.5-3.1-7.4s1.2-5.5 3.1-7.4L3.5 3.5C1.3 5.7 0 8.7 0 12s1.3 6.3 3.5 8.5zM9 7v10h2v-4h2v4h2V7h-2v4h-2V7z"></svg:path>`,
})
export class MdiCarBrakeHoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeLowPressureIcon],svg[mdi-car-brake-low-pressure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m-3 0L7 9v2H3v2h4v2zm4 0l3 3v-2h4v-2h-4V9zm6.5-8.5l-1.08 1.08C21.32 6.5 22.5 9.11 22.5 12c0 2.9-1.18 5.5-3.08 7.42l1.08 1.08c2.16-2.19 3.5-5.19 3.5-8.5s-1.34-6.31-3.5-8.5M5.69 9C6.81 6.64 9.22 5 12 5s5.19 1.64 6.32 4h2.18c-1.26-3.5-4.58-6-8.5-6S4.76 5.5 3.5 9zM4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12s1.34 6.31 3.5 8.5l1.08-1.08C2.68 17.5 1.5 14.9 1.5 12c0-2.89 1.18-5.5 3.08-7.42M18.32 15c-1.13 2.36-3.53 4-6.32 4s-5.19-1.64-6.31-4H3.5c1.26 3.5 4.58 6 8.5 6s7.24-2.5 8.5-6z"></svg:path>`,
})
export class MdiCarBrakeLowPressureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeParkingIcon],svg[mdi-car-brake-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7m8.5 1.5c2.2-2.2 3.5-5.2 3.5-8.5s-1.3-6.3-3.5-8.5l-1.1 1.1c1.9 1.9 3.1 4.5 3.1 7.4s-1.2 5.5-3.1 7.4zM4.6 19.4c-1.9-1.9-3.1-4.5-3.1-7.4s1.2-5.5 3.1-7.4L3.5 3.5C1.3 5.7 0 8.7 0 12s1.3 6.3 3.5 8.5zM9.5 7v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2 2h2v2h-2z"></svg:path>`,
})
export class MdiCarBrakeParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeRetarderIcon],svg[mdi-car-brake-retarder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7m8.5 1.5c2.2-2.2 3.5-5.2 3.5-8.5s-1.3-6.3-3.5-8.5l-1.1 1.1c1.9 1.9 3.1 4.5 3.1 7.4s-1.2 5.5-3.1 7.4zM4.6 19.4c-1.9-1.9-3.1-4.5-3.1-7.4s1.2-5.5 3.1-7.4L3.5 3.5C1.3 5.7 0 8.7 0 12s1.3 6.3 3.5 8.5zm10.7-8.9c.66 0 1.2.67 1.2 1.5c0 .81-.55 1.5-1.2 1.5c-.37 0-.64-.21-.8-.39l-.03-.03l-.03-.03L13.38 12l1.09-1.08l.03-.03l.03-.03c.21-.23.47-.36.77-.36m-6.6 0c.37 0 .64.21.8.38v.04l.06.03L10.62 12l-1.09 1.08l-.03.03l-.03.04c-.21.22-.47.35-.77.35c-.65 0-1.2-.69-1.2-1.5s.55-1.5 1.2-1.5M15.3 9c-.72 0-1.4.31-1.88.85L12 11.25l-1.39-1.37C10.1 9.31 9.42 9 8.7 9C7.21 9 6 10.35 6 12s1.21 3 2.7 3c.72 0 1.4-.31 1.89-.85l1.41-1.4l1.39 1.37c.51.56 1.19.88 1.91.88c1.49 0 2.7-1.35 2.7-3c0-1.67-1.21-3-2.7-3"></svg:path>`,
})
export class MdiCarBrakeRetarderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeTemperatureIcon],svg[mdi-car-brake-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h3V8h-3V7c0-.6-.4-1-1-1s-1 .4-1 1v10.3c-.6.3-1 1-1 1.7c0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V14h3v-2h-3zm12 2c0 3.31-1.34 6.31-3.5 8.5l-1.08-1.08c1.9-1.92 3.08-4.52 3.08-7.42c0-2.89-1.18-5.5-3.08-7.42L20.5 3.5C22.66 5.69 24 8.69 24 12M1.5 12c0 2.9 1.18 5.5 3.08 7.42L3.5 20.5C1.34 18.31 0 15.31 0 12s1.34-6.31 3.5-8.5l1.08 1.08C2.68 6.5 1.5 9.11 1.5 12M21 12c0 3.53-2.04 6.58-5 8.05v-2.31A7.01 7.01 0 0 0 19 12c0-3.86-3.14-7-7-7s-7 3.14-7 7a7.01 7.01 0 0 0 3 5.74v2.31C5.04 18.58 3 15.53 3 12a9 9 0 0 1 18 0"></svg:path>`,
})
export class MdiCarBrakeTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarBrakeWornLiningsIcon],svg[mdi-car-brake-worn-linings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c3.86 0 7 3.14 7 7s-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7m0-2a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3M4.58 4.58L3.5 3.5A12.3 12.3 0 0 0 .861 7.55L2.3 8a10.7 10.7 0 0 1 2.28-3.42M1.71 14.1Q1.5 13.08 1.5 12t.21-2.1L.275 9.46C.098 10.28 0 11.13 0 12s.098 1.72.275 2.54zm21.43-6.55c-.61-1.52-1.51-2.9-2.64-4.05l-1.08 1.08c.97.98 1.74 2.13 2.28 3.42zM.861 16.45C1.47 18 2.37 19.35 3.5 20.5l1.08-1.08A10.7 10.7 0 0 1 2.3 16zm18.559 2.97l1.08 1.08c1.13-1.15 2.03-2.5 2.64-4.05L21.7 16a10.7 10.7 0 0 1-2.28 3.42m2.87-9.52q.21 1.02.21 2.1t-.21 2.1l1.44.44c.17-.82.27-1.67.27-2.54s-.1-1.72-.27-2.54z"></svg:path>`,
})
export class MdiCarBrakeWornLiningsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarChildSeatIcon],svg[mdi-car-child-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4.5C17 5.9 15.9 7 14.5 7S12 5.9 12 4.5S13.1 2 14.5 2S17 3.1 17 4.5M15 8h-.8c-2.1 0-4.1-1.2-5.1-3.1c-.1-.1-.2-.2-.2-.3l-1.8.8c.5 1.4 2.1 3.2 4.4 4.1l-1.8 5l-3.9-1.1L3 18.9l2 .5l1.8-3.6l4.5 1.2c1 .2 2-.3 2.4-1.2L16 9.4c.2-.7-.3-1.4-1-1.4m3.9-1l-3.4 9.4c-.6 1.6-2.1 2.6-3.7 2.6c-.3 0-.7 0-1-.1l-2.9-.8l-.9 1.8l2 .5l1.4.4c.5.1 1 .2 1.5.2c2.5 0 4.7-1.5 5.6-3.9L21 7z"></svg:path>`,
})
export class MdiCarChildSeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarClockIcon],svg[mdi-car-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8c0-3.87-3.13-7-7-7c-3.53 0-6.43 2.61-6.92 6H4.5c-.66 0-1.22.42-1.42 1L1 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-7.68c2.36-1.13 4-3.53 4-6.32m-18.5.5h4.53c.12 1.76.89 3.34 2.08 4.5H3zm0 9.5c-.83 0-1.5-.67-1.5-1.5S3.67 15 4.5 15s1.5.67 1.5 1.5S5.33 18 4.5 18m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m.5-5c-1.39 0-2.56-.5-3.53-1.47S11 9.39 11 8c0-1.36.5-2.54 1.47-3.5c.97-1 2.14-1.5 3.53-1.5c1.36 0 2.54.5 3.5 1.5c1 .96 1.5 2.14 1.5 3.5c0 1.39-.5 2.56-1.5 3.53c-.96.97-2.14 1.47-3.5 1.47m.5-4.75l2.86 1.69l-.75 1.22L15 9V4h1.5z"></svg:path>`,
})
export class MdiCarClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarClutchIcon],svg[mdi-car-clutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 18.84l4 1.86V23l-6-3v-6H5v-4h3V4l6-3v2.3l-4 1.86zM19 10h-4V5.41L12 6.8v10.4l3 1.4V14h4z"></svg:path>`,
})
export class MdiCarClutchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarCogIcon],svg[mdi-car-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h5.3a7 7 0 0 1-.3-2a7 7 0 0 1 3.41-6H5l1.5-4.5h11l1.18 3.53a7 7 0 0 1 1.79.43L18.92 6c-.2-.58-.76-1-1.42-1zM17 12a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 12zM6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13M18 15.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiCarCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarConnectedIcon],svg[mdi-car-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14h14l-1.5-4.5h-11zm12.5 5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5m-11 0A1.5 1.5 0 0 0 8 17.5A1.5 1.5 0 0 0 6.5 16A1.5 1.5 0 0 0 5 17.5A1.5 1.5 0 0 0 6.5 19M18.92 9L21 15v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8l2.08-6c.2-.58.77-1 1.42-1h11c.65 0 1.22.42 1.42 1M12 0c2.12 0 4.15.86 5.65 2.35l-1.42 1.42A6.02 6.02 0 0 0 12 2c-1.58 0-3.11.65-4.23 1.77L6.36 2.35A8 8 0 0 1 12 0m0 4c1.06 0 2.07.44 2.82 1.18L13.4 6.6c-.37-.37-.87-.6-1.4-.6c-.5 0-1.03.23-1.4.6L9.18 5.18C9.93 4.44 10.94 4 12 4"></svg:path>`,
})
export class MdiCarConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarConvertableIcon],svg[mdi-car-convertable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 6l-1 .75L17.5 10h-4V8.5H12V10H3c-1.11 0-2 .89-2 2v3h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-3c0-1.11-.89-2-2-2h-2l-3-4zM6 13.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm12 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3z" fill="currentColor"></svg:path>`,
})
export class MdiCarConvertableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarConvertibleIcon],svg[mdi-car-convertible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6l-1 .75L17.5 10h-4V8.5H12V10H3c-1.11 0-2 .89-2 2v3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2zM6 13.5A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarConvertibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarCoolantLevelIcon],svg[mdi-car-coolant-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7V5h2V3h-8v2h2v2H1v14h22V7zm2 7.42c-.29-.29-.5-.42-1-.42c-.67 0-.79.21-1.29.71S17.33 16 16 16s-2.21-.79-2.71-1.29S12.67 14 12 14c-.22 0-.37.03-.5.08c-.28.1-.45.29-.79.63c-.5.5-1.38 1.29-2.71 1.29s-2.21-.79-2.71-1.29S4.67 14 4 14c-.5 0-.71.13-1 .42V9h18z"></svg:path>`,
})
export class MdiCarCoolantLevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarCruiseControlIcon],svg[mdi-car-cruise-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15c0 2.6-1.2 4.9-3.1 6.3l-.5-.5l-2.1-2.1l1.4-1.4l1.2 1.2c.5-.7.9-1.6 1-2.5H18v-2h1.9c-.2-.9-.5-1.7-1-2.5l-1.2 1.2l-1.4-1.4l1.2-1.2c-.7-.5-1.6-.9-2.5-1V11h-2V9.1c-.9.2-1.7.5-2.5 1l3 3c.2 0 .3-.1.5-.1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-.2 0-.3.1-.5l-3-3c-.5.7-.9 1.6-1 2.5H10v2H8.1c.2.9.5 1.7 1 2.5l1.2-1.2l1.4 1.4l-2.6 2.6C7.2 19.9 6 17.6 6 15a8 8 0 0 1 8-8a8 8 0 0 1 8 8M6.7 5.3L3.4 2L2 3.4l3.3 3.3L4 8h4V4z"></svg:path>`,
})
export class MdiCarCruiseControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarDefrostFrontIcon],svg[mdi-car-defrost-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 23c-.3 0-.5-.1-.7-.3c-.4-.4-.3-1 .1-1.4c.5-.4 1.7-1.8 1.7-2.9c0-.6-.4-1.2-.8-1.9c-.5-.8-1.2-1.8-1.2-3c0-2.3 1.3-3.2 1.5-3.3c.5-.3 1.1-.1 1.4.3c.3.5.1 1.1-.3 1.4c0 0-.5.4-.5 1.6c0 .6.4 1.2.8 1.9c.5.8 1.2 1.8 1.2 3c0 2.2-2.1 4.2-2.3 4.4c-.4.1-.7.2-.9.2m-3.3-.3c.2-.2 2.3-2.2 2.3-4.4c0-1.2-.6-2.2-1.2-3c-.4-.7-.8-1.3-.8-1.9c0-1.2.5-1.6.5-1.6c.5-.3.6-.9.3-1.4s-.9-.6-1.4-.3c-.2.1-1.5 1-1.5 3.3c0 1.2.6 2.2 1.2 3c.4.7.8 1.3.8 1.9c0 1.1-1.2 2.5-1.7 2.9c-.4.4-.4 1-.1 1.4c.2.2.5.3.7.3c.4.1.7 0 .9-.2m-4 0c.2-.2 2.3-2.2 2.3-4.4c0-1.2-.6-2.2-1.2-3c-.4-.6-.8-1.2-.8-1.9c0-1.2.5-1.6.5-1.6c.5-.3.6-.9.3-1.4c-.2-.4-.9-.5-1.3-.3c-.2.1-1.5 1-1.5 3.3c0 1.2.6 2.2 1.2 3c.4.7.8 1.3.8 1.9c0 1.1-1.2 2.5-1.7 2.9c-.4.4-.4 1-.1 1.4c.3.3.5.4.8.4c.2 0 .5-.1.7-.3M12 3C9.4 3 1 3.3 1 7c0 2.4 1.2 8.4 1.8 11H5v-2h-.6C3.8 13.1 3 8.8 3 7c0-1 4.4-2 9-2s9 1 9 2c0 1.8-.8 6.1-1.4 9H19v2h2.2c.6-2.6 1.8-8.6 1.8-11c0-3.7-8.4-4-11-4"></svg:path>`,
})
export class MdiCarDefrostFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarDefrostRearIcon],svg[mdi-car-defrost-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18.3c0 2.2-2.1 4.2-2.3 4.4s-.5.3-.7.3c-.3 0-.5-.1-.8-.4c-.3-.4-.3-1 .1-1.4c.5-.4 1.7-1.8 1.7-2.9c0-.6-.4-1.2-.8-1.9c-.6-.8-1.2-1.8-1.2-3c0-2.3 1.3-3.2 1.5-3.3c.4-.2 1.1-.1 1.3.3c.3.5.2 1.1-.3 1.4c0 0-.5.4-.5 1.6c0 .7.4 1.3.8 1.9c.6.8 1.2 1.8 1.2 3m2-4.9c0-1.2.5-1.6.5-1.6c.5-.3.6-.9.3-1.4s-.9-.6-1.4-.3c-.2.1-1.5 1-1.5 3.3c0 1.2.6 2.2 1.2 3c.4.7.8 1.3.8 1.9c0 1.1-1.2 2.5-1.7 2.9c-.4.4-.4 1-.1 1.4c.2.2.5.3.7.3c.4.1.7 0 .9-.2s2.3-2.2 2.3-4.4c0-1.2-.6-2.2-1.2-3c-.4-.7-.8-1.3-.8-1.9M20 3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h1v-2H4V5h16v11h-1v2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.8 10.5c0-1.2.5-1.6.5-1.6c.4-.3.6-.9.3-1.4c-.3-.4-.9-.6-1.4-.3c-.2.1-1.5 1-1.5 3.3c0 1.2.7 2.2 1.2 3c.4.7.8 1.3.8 1.9c0 1.1-1.2 2.5-1.7 2.9c-.4.4-.5 1-.1 1.4c.2.2.4.3.7.3c.2 0 .5-.1.9-.2c.2-.2 2.3-2.2 2.3-4.4c0-1.2-.7-2.2-1.2-3c-.4-.7-.8-1.3-.8-1.9"></svg:path>`,
})
export class MdiCarDefrostRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarDoorIcon],svg[mdi-car-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14h-3v2h3zm3 7H3V11l8-8h10a1 1 0 0 1 1 1zM11.83 5l-6 6H20V5z"></svg:path>`,
})
export class MdiCarDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarDoorLockIcon],svg[mdi-car-door-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 17v-1.5C7.8 14.1 6.4 13 5 13s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM21 3H11l-8 8v.44c.61-.27 1.29-.44 2-.44c2.6 0 4.8 2.06 4.8 4.5v.25c.73.61 1.2 1.53 1.2 2.55V21h11V4c0-.55-.45-1-1-1m-2 13h-3v-2h3zm1-5H5.83l6-6H20z"></svg:path>`,
})
export class MdiCarDoorLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarDoorLockOpenIcon],svg[mdi-car-door-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21H11v-5c0-.74-.4-1.39-1-1.74V14c0-1.13-.37-2.16-1-3h11V5h-8.17L7.28 9.55C6.6 9.2 5.82 9 5 9l6-6h10c.27 0 .5.11.71.29c.19.21.29.45.29.71zm-3-7h-3v2h3zM7.8 16H3.5v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5C7.8 12.1 6.4 11 5 11s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiCarDoorLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarElectricIcon],svg[mdi-car-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 2c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.21.42-1.42 1L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12m11 0c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 7l1.5-4.5h11L19 7zm2 13h4v-2l6 3h-4v2z"></svg:path>`,
})
export class MdiCarElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarElectricOutlineIcon],svg[mdi-car-electric-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 2c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.21.42-1.42 1L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8zM6.85 3h10.29l1.08 3.11H5.77zM19 13H5V8h14zM7.5 9c.83 0 1.5.67 1.5 1.5S8.33 12 7.5 12S6 11.33 6 10.5S6.67 9 7.5 9m9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5M7 20h4v-2l6 3h-4v2z"></svg:path>`,
})
export class MdiCarElectricOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarEmergencyIcon],svg[mdi-car-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0v3h2V0zM7.88 1.46L6.46 2.87L8.59 5L10 3.58zm8.24 0L14 3.58L15.41 5l2.13-2.12zM12 5a2 2 0 0 0-2 2v1H6.5c-.66 0-1.22.42-1.42 1L3 15v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8l-2.08-6c-.2-.58-.76-1-1.42-1H14V7a2 2 0 0 0-2-2M6.5 9.5h11L19 14H5zm0 6.5A1.5 1.5 0 0 1 8 17.5A1.5 1.5 0 0 1 6.5 19A1.5 1.5 0 0 1 5 17.5A1.5 1.5 0 0 1 6.5 16m11 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarEspIcon],svg[mdi-car-esp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.31 6C6.95 4.16 9.34 3 12 3s5.05 1.16 6.69 3h-3.11A6.93 6.93 0 0 0 12 5c-1.31 0-2.53.37-3.58 1zm9.09 3.6V8h-3.2a1.6 1.6 0 0 0-1.6 1.6v1.6c0 .88.72 1.6 1.6 1.6h1.6v1.6H9.6V16h3.2a1.6 1.6 0 0 0 1.6-1.6v-1.6c0-.88-.72-1.6-1.6-1.6h-1.6V9.6zm4-1.6h-3.2v8h1.6v-3.2h1.6a1.6 1.6 0 0 0 1.6-1.6V9.6c0-.88-.72-1.6-1.6-1.6m0 3.2h-1.6V9.6h1.6zM8.8 9.6V8H4v8h4.8v-1.6H5.6v-1.6h3.2v-1.6H5.6V9.6zm6.78 8.4c-1.05.63-2.27 1-3.58 1a6.93 6.93 0 0 1-3.58-1H5.31c1.64 1.84 4.03 3 6.69 3s5.05-1.16 6.69-3zM20.5 3.5l-1.08 1.08C21.32 6.5 22.5 9.11 22.5 12c0 2.9-1.18 5.5-3.08 7.42l1.08 1.08c2.16-2.19 3.5-5.19 3.5-8.5s-1.34-6.31-3.5-8.5M4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12s1.34 6.31 3.5 8.5l1.08-1.08C2.68 17.5 1.5 14.9 1.5 12c0-2.89 1.18-5.5 3.08-7.42"></svg:path>`,
})
export class MdiCarEspIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarEstateIcon],svg[mdi-car-estate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h13l3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V8c0-1.11.89-2 2-2m-.5 1.5V10h8V7.5zm9.5 0V10h5.14l-1.89-2.5zm-6 6A1.5 1.5 0 0 0 4.5 15A1.5 1.5 0 0 0 6 16.5A1.5 1.5 0 0 0 7.5 15A1.5 1.5 0 0 0 6 13.5m12 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiCarEstateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarHatchbackIcon],svg[mdi-car-hatchback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6H6l-5 6v3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2zM6.5 7.5h4V10h-6zm5.5 0h3.5l1.96 2.5H12zm-6 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarHatchbackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarInfoIcon],svg[mdi-car-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15h-2v-2h2m1 7v2h-4v-2h1v-2h-1v-2h3v4m-.08-15a1.5 1.5 0 0 0-1.42-1h-11a1.5 1.5 0 0 0-1.42 1L3 11v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h5a7 7 0 0 1 7-7a6.84 6.84 0 0 1 3 .68V11M6.5 15A1.5 1.5 0 1 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10l1.5-4.5h11L19 10Z"></svg:path>`,
})
export class MdiCarInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarKeyIcon],svg[mdi-car-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 0C7.3 0 6 1.3 6 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H14v2h2V4h2V2h-6.2C11.4.8 10.3 0 9 0m0 2c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M6.5 8c-.7 0-1.2.4-1.4 1L3 15v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8l-2.1-6c-.2-.6-.8-1-1.4-1zm0 1.5h11L19 14H5zm0 6.5c.8 0 1.5.7 1.5 1.5S7.3 19 6.5 19S5 18.3 5 17.5S5.7 16 6.5 16m11 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></svg:path>`,
})
export class MdiCarKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarLiftedPickupIcon],svg[mdi-car-lifted-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 14l.79.1l-.02.23l.47.17l.15-.16c.5.26.93.66 1.21 1.16l-.17.17l.2.45l.23-.02c.09.29.14.59.14.9l-.1.78l-.24-.01l-.19.47l.19.15c-.27.51-.66.93-1.16 1.21l-.17-.18l-.46.2l.02.24c-.28.09-.58.14-.89.14l-.79-.1l.01-.25l-.46-.18l-.16.19c-.5-.27-.93-.66-1.21-1.16l.18-.18l-.2-.46l-.24.02c-.08-.28-.13-.57-.13-.88l.11-.8l.23.01l.19-.46l-.18-.15c.27-.51.65-.92 1.15-1.21l.17.17l.46-.2l-.02-.22c.28-.09.58-.14.89-.14m0 1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5M6 14l.79.1l-.02.23l.47.17l.15-.16c.5.26.93.66 1.21 1.16l-.17.17l.2.45l.23-.02c.09.29.14.59.14.9l-.1.78l-.25-.01l-.18.47l.19.15c-.27.51-.66.93-1.16 1.21l-.17-.18l-.46.2l.02.24c-.28.09-.58.14-.89.14l-.79-.1l.01-.25l-.46-.18l-.16.19c-.5-.27-.93-.66-1.21-1.16l.18-.18l-.2-.46l-.24.02C3.05 17.6 3 17.31 3 17l.11-.8l.23.01l.19-.46l-.18-.15c.27-.51.65-.92 1.15-1.21l.17.17l.46-.2l-.02-.22c.28-.09.58-.14.89-.14m0 1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5M16 6l3 4h2c1.11 0 2 .89 2 2v3h-2c0-1.66-1.34-3-3-3s-3 1.34-3 3H9c0-1.66-1.34-3-3-3s-3 1.34-3 3H1v-5h9.5V6zm-4 1.5V10h5.46L15.5 7.5z"></svg:path>`,
})
export class MdiCarLiftedPickupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarLightAlertIcon],svg[mdi-car-light-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7v6h-2V7zm-2 10h2v-2h-2zM1 9v2h4c.1-.7.1-1.4.2-2zm4 4H1v2h4.2c-.1-.6-.1-1.3-.2-2m.9-6.6c.1-.6.4-1 .6-1.4H1v2h4.7c.1-.2.1-.4.2-.6M1 17v2h5.6c-.4-.6-.7-1.2-.9-2zm9-12.2c-4 0-4 14.4 0 14.4s9-2.7 9-7.2s-5-7.2-9-7.2m.1 12.4C9.7 16.8 9 15 9 12s.7-4.8 1.1-5.2C13 6.9 17 8.7 17 12s-4 5.1-6.9 5.2"></svg:path>`,
})
export class MdiCarLightAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarLightDimmedIcon],svg[mdi-car-light-dimmed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.8c-4 0-4 14.4 0 14.4s9-2.7 9-7.2s-5-7.2-9-7.2m.1 12.4C12.7 16.8 12 15 12 12s.7-4.8 1.1-5.2C16 6.9 20 8.7 20 12s-4.1 5.1-6.9 5.2M8 10.5c0 .5-.1 1-.1 1.5v.6L2.4 14l-.5-1.9zM2 7l7.4-1.9c-.2.3-.4.7-.5 1.2c-.1.3-.2.7-.3 1.1L2.5 8.9zm6.2 8.5c.1.7.3 1.4.5 1.9L2.4 19l-.5-1.9z"></svg:path>`,
})
export class MdiCarLightDimmedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarLightFogIcon],svg[mdi-car-light-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.8c-4 0-4 14.4 0 14.4s9-2.7 9-7.2s-5-7.2-9-7.2m.1 12.4C12.7 16.8 12 15 12 12s.7-4.8 1.1-5.2C16 6.9 20 8.7 20 12s-4 5.1-6.9 5.2M6 8v3h2v2H6v3h2.4c.2.7.4 1.4.6 2H6v3H4v-3H2v-2h2v-3H2v-2h2V8H2V6h2V3h2v3h3c0 .1-.1.2-.1.4c-.2.5-.4 1-.5 1.6z"></svg:path>`,
})
export class MdiCarLightFogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarLightHighIcon],svg[mdi-car-light-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.8c-4 0-4 14.4 0 14.4s9-2.7 9-7.2s-5-7.2-9-7.2m.1 12.4C12.7 16.8 12 15 12 12s.7-4.8 1.1-5.2C16 6.9 20 8.7 20 12s-4 5.1-6.9 5.2M2 5h7.5c-.2.4-.5.8-.6 1.4c-.1.2-.1.4-.2.6H2zm6 6H2V9h6.2c-.1.6-.1 1.3-.2 2m.7 6c.2.8.5 1.4.9 2H2.1v-2zm-.5-2H2v-2h6c.1.7.1 1.4.2 2"></svg:path>`,
})
export class MdiCarLightHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarLimousineIcon],svg[mdi-car-limousine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l1.5 1.5L1 9l1.5 1.5L1 12l1.5 1.5L1 15h14a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2l-3-4zm3.62 1.5h5.88V10H4.12l-1-1zm7.38 0h3.5l1.96 2.5H12zm6 6a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarLimousineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarMultipleIcon],svg[mdi-car-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 11l1.5-4.5h9L20 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-9 0A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 9.5 13a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 9.5 16M19.92 6c-.21-.6-.78-1-1.42-1h-9c-.64 0-1.21.4-1.42 1L6 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8zm-5-3c-.21-.6-.78-1-1.42-1h-9c-.64 0-1.21.4-1.42 1L1 9v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4.09A1.49 1.49 0 0 1 3.1 11c.22-.6.77-1 1.4-1h.07l.7-2H3l1.5-4.5h10.59z"></svg:path>`,
})
export class MdiCarMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarOffIcon],svg[mdi-car-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 19.85L6.41 5.76l-4-4L1.11 3l3.46 3.46L3 11v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10.11l4.73 4.73l1.27-1.27zM6.5 15A1.5 1.5 0 0 1 5 13.5A1.5 1.5 0 0 1 6.5 12A1.5 1.5 0 0 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10l.78-2.33L8.11 10zm12.5-4.5L19 10h-5.8l2.92 2.92c.38-.75 1.25-1.06 2-.71c.75.36 1.06 1.26.71 2c-.15.29-.4.56-.71.71L21 17.8V11l-2.08-6c-.21-.6-.78-1-1.42-1H7.2l1.5 1.5z"></svg:path>`,
})
export class MdiCarOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarOutlineIcon],svg[mdi-car-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></svg:path>`,
})
export class MdiCarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarParkingLightsIcon],svg[mdi-car-parking-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.3 9.2C8.1 9.6 9 10.5 9 12s-.9 2.4-1.7 2.8c-.4-1.4-.4-4.2 0-5.6M6.5 7c-2 0-2 10 0 10s4.5-1.9 4.5-5s-2.5-5-4.5-5m10.2 2.2c.3 1.4.3 4.2 0 5.6c-.8-.4-1.7-1.3-1.7-2.8s.9-2.4 1.7-2.8m.8-2.2c-2 0-4.5 1.9-4.5 5s2.5 5 4.5 5s2-10 0-10M4.9 6.2L2.5 4.6L1.4 6.3L4 8c.2-.7.5-1.4.9-1.8M20 8l2.6-1.7l-1.1-1.7l-2.4 1.6c.3.4.7 1 .9 1.8M4 16l-2.6 1.7l1.1 1.7l2.4-1.6c-.3-.4-.7-1-.9-1.8m16.5-5v2H24v-2zm-1.4 6.8l2.4 1.6l1.1-1.7L20 16c-.2.7-.5 1.4-.9 1.8M3.5 12v-1H0v2h3.5z"></svg:path>`,
})
export class MdiCarParkingLightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarPickupIcon],svg[mdi-car-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6h-5.5v4H1v5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2zm-4 1.5h3.5l1.96 2.5H12zm-6 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarPickupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSearchIcon],svg[mdi-car-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.61 16.11c0-2.08.98-3.92 2.49-5.11H5l1.5-4.5h11l1.22 3.66c.84.37 1.58.91 2.19 1.58L18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h4.29c-.43-.87-.68-1.85-.68-2.89M6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m14.21 4.7l-.01.01zm-4.6-9.09c2.5 0 4.5 2 4.5 4.5c0 .89-.25 1.71-.69 2.39L23 21.61L21.61 23l-3.11-3.07c-.7.43-1.5.68-2.39.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 1 0 2.5 2.5c0-1.39-1.11-2.5-2.5-2.5"></svg:path>`,
})
export class MdiCarSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSearchOutlineIcon],svg[mdi-car-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.29 19H6v1c0 .5-.4 1-1 1H4c-.5 0-1-.5-1-1v-8l2.1-6c.2-.6.7-1 1.4-1h11c.6 0 1.2.4 1.4 1l2.01 5.74a6.54 6.54 0 0 0-2.73-1.79L17.1 7H6.8l-1 3h8.11c-1.12.4-2.1 1.1-2.83 2H5v5h4.68c.1.71.32 1.38.61 2M6 14.5c0 .8.7 1.5 1.5 1.5S9 15.3 9 14.5S8.3 13 7.5 13S6 13.7 6 14.5m10.11-2.89c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c.89 0 1.69-.25 2.39-.68L21.61 23L23 21.61l-3.08-3.11c.44-.68.69-1.5.69-2.39c0-2.5-2-4.5-4.5-4.5m0 2c1.39 0 2.5 1.12 2.5 2.5s-1.11 2.5-2.5 2.5s-2.5-1.11-2.5-2.5s1.12-2.5 2.5-2.5"></svg:path>`,
})
export class MdiCarSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSeatIcon],svg[mdi-car-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1s-1 1-1 3s3 4 3 7s-3 5-3 5m5-1c-1 0-4 2.5-4 2.5c-.3.2-.2.5 0 .8c0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5Z"></svg:path>`,
})
export class MdiCarSeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSeatCoolerIcon],svg[mdi-car-seat-cooler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 10.2l-1.4.4l-1.2-.7V8.2l1.2-.7l1.4.4l.3-1.1l-1.1-.3l.3-1.1l-1.1-.3l-.4 1.4l-1.2.7l-1.5-.9V5l1-1l-.8-.8l-.8.8l-.8-.8l-.8.8l1 1v1.3l-1.5.9l-1.2-.7l-.3-1.4l-1.1.3l.3 1.1l-1.1.2l.3 1.1l1.4-.4l1.2.7v1.7l-1.2.7l-1.4-.4l-.3 1.3l1.1.3l-.3 1l1.1.3l.4-1.4l1.2-.7l1.5.9v1.3l-1 1l.8.8l.8-.8l.8.8l.8-.8l-1-1v-1.3l1.5-.9l1.2.7l.4 1.4l1.1-.3l-.4-1.1l1.1-.3zm-6.8-2l1.5-.9l1.5.9v1.7l-1.5.9l-1.5-.9zM5 18S2 10 2 6s2-4 2-4h1s1 0 1 1s-1 1-1 3s3 4 3 7s-3 5-3 5m10-1c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2H9c-2 0-3-1.8-3-1.8c-.2-.2-.3-.6 0-.8c0 0 3-2.5 4-2.5h5Z"></svg:path>`,
})
export class MdiCarSeatCoolerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSeatHeaterIcon],svg[mdi-car-seat-heater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18S2 10 2 6s2-4 2-4h1s1 0 1 1s-1 1-1 3s3 4 3 7s-3 5-3 5m10-1c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2H9c-2 0-3-1.8-3-1.8c-.2-.2-.3-.6 0-.8c0 0 3-2.5 4-2.5h5M13.7 3.4l-1.4 3.4l1.4 3.4l-2 4.8l-1.7-1.4l1.4-3.4L10 6.8L12 2zm4.2 0l-1.4 3.4l1.4 3.4l-2 4.8l-1.7-1.4l1.4-3.4l-1.4-3.4l2-4.8zm4.1 0l-1.4 3.4l1.4 3.4l-2 4.8l-1.7-1.4l1.4-3.4l-1.4-3.4l2-4.8z"></svg:path>`,
})
export class MdiCarSeatHeaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSelectIcon],svg[mdi-car-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 13l1.5-4.5h11L19 13m-1.5 5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-11 0c-.8 0-1.5-.7-1.5-1.5S5.7 15 6.5 15s1.5.7 1.5 1.5S7.3 18 6.5 18M18.9 8c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 14v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8M8 1l4 4.5L16 1Z"></svg:path>`,
})
export class MdiCarSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSettingsIcon],svg[mdi-car-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h2v2h-2m-4-2h2v2h-2m-4-2h2v2H7M5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8Z"></svg:path>`,
})
export class MdiCarSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarShiftPatternIcon],svg[mdi-car-shift-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5H4V2h4zM4 22h4v-3H4zM14 2h-4v3h4zm-4 20h4v-3h-4zm6-20v3h4V2zm1 9h-4V7h-2v4H7V7H5v10h2v-4h4v4h2v-4h6V7h-2z"></svg:path>`,
})
export class MdiCarShiftPatternIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSideIcon],svg[mdi-car-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6l3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1v-3c0-1.11.89-2 2-2l3-4zm-5.5 1.5H6.75L4.86 10h5.64zm1.5 0V10h5.14l-1.89-2.5zm-6 6A1.5 1.5 0 0 0 4.5 15A1.5 1.5 0 0 0 6 16.5A1.5 1.5 0 0 0 7.5 15A1.5 1.5 0 0 0 6 13.5m12 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiCarSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSpeedLimiterIcon],svg[mdi-car-speed-limiter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15c0 2.6-1.2 4.9-3.1 6.3l-.5-.5l-2.1-2.1l1.4-1.4l1.2 1.2c.5-.7.9-1.6 1-2.5H14v-2h1.9c-.2-.9-.5-1.7-1-2.5l-1.2 1.2l-1.4-1.4l1.2-1.2c-.7-.5-1.6-.9-2.5-1V11H9V9.1c-.9.2-1.7.5-2.5 1l3 3c.2 0 .3-.1.5-.1a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2c0-.2 0-.3.1-.5l-3-3c-.5.7-.9 1.6-1 2.5H6v2H4.1c.2.9.5 1.7 1 2.5l1.2-1.2l1.4 1.4l-2.6 2.6C3.2 19.9 2 17.6 2 15c0-4.42 3.58-8 8-8s8 3.58 8 8m5-10c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.3.84 2.4 2 2.82V11h2V7.82C22.16 7.4 23 6.3 23 5m-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiCarSpeedLimiterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarSportsIcon],svg[mdi-car-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.5H7L4 11H3c-1.11 0-2 .89-2 2v3h2.17c.43 1.2 1.56 2 2.83 2s2.4-.8 2.82-2h6.35c.43 1.2 1.56 2 2.83 2s2.4-.8 2.82-2H23v-1c0-1.11-1.03-1.47-2-2zM5.25 12l2.25-2h4l4 2zM6 13.5A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarSportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarTireAlertIcon],svg[mdi-car-tire-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h2v2h-2zm0-8h2v6h-2zm6-.24c1.86 1.43 3 3.85 3 6.24a8 8 0 0 1-4.14 7H8.14A8 8 0 0 1 4 11c0-2.39 1.09-4.83 3-6.24V2H5v1.86C3.15 5.68 2 8.2 2 11s1.15 5.32 3 7.14V22h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-3.86c1.85-1.82 3-4.34 3-7.14s-1.15-5.32-3-7.14V2h-2z"></svg:path>`,
})
export class MdiCarTireAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarTractionControlIcon],svg[mdi-car-traction-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 11h1c.3 0 .5-.2.5-.5V9h8v1.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V6l-1.4-4.3c-.1-.4-.5-.7-.9-.7h-7.3c-.4 0-.8.3-.9.7L9 6v4.5c0 .3.2.5.5.5m1.8-9h7.3l.9 3h-9.1zm.7 21h-2c0-.8-1.9-1.5-3.4-2.1C4.5 20.1 2 19.2 2 17c0-2.3 2.3-2.9 4.2-3.5C7.9 13.1 9 12.7 9 12h2c0 2.3-2.3 2.9-4.2 3.5c-1.7.4-2.8.8-2.8 1.5c0 .8 1.9 1.5 3.4 2.1c2.1.8 4.6 1.7 4.6 3.9m10 0h-2c0-.8-1.9-1.5-3.4-2.1c-2.1-.8-4.6-1.7-4.6-3.9c0-2.3 2.3-2.9 4.2-3.5c1.6-.5 2.8-.8 2.8-1.5h2c0 2.3-2.3 2.9-4.2 3.5c-1.6.4-2.8.8-2.8 1.5c0 .8 1.9 1.5 3.4 2.1c2.1.8 4.6 1.7 4.6 3.9"></svg:path>`,
})
export class MdiCarTractionControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarTurbochargerIcon],svg[mdi-car-turbocharger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v2h-3.68c.43-.91.68-1.92.68-3c0-3.86-3.14-7-7-7H2V3h10a9 9 0 0 1 9 9c0 .34-.03.67-.06 1zm-10 6c-3.86 0-7-3.14-7-7c0-1.07.25-2.09.69-3H2v2h1.06c-.03.33-.06.66-.06 1a9 9 0 0 0 9 9h10v-2zm4.86-6.8c-.93.74-2.14.27-2.86-.15V12c2.79-1.69 1.39-4.11 1.39-4.11s-1.06-1.85-.78 0c.17 1.18-.85 1.99-1.57 2.41l-.04-.02C12.93 7 10.13 7 10.13 7S8 7 9.74 7.69c1.11.44 1.3 1.73 1.31 2.56l-.05.03c-2.86-1.58-4.26.84-4.26.84s-1.07 1.85.4.68c.93-.73 2.14-.26 2.86.15V12c-2.79 1.7-1.39 4.12-1.39 4.12s1.06 1.85.79-.01c-.18-1.17.85-1.98 1.57-2.41l.03.03C11.07 17 13.87 17 13.87 17s2.13 0 .39-.69c-1.11-.44-1.3-1.73-1.31-2.56l.05-.02c2.86 1.58 4.26-.85 4.26-.85s1.07-1.84-.4-.68"></svg:path>`,
})
export class MdiCarTurbochargerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarWashIcon],svg[mdi-car-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 13l1.5-4.5h11L19 13m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 16.5A1.5 1.5 0 0 1 6.5 15A1.5 1.5 0 0 1 8 16.5A1.5 1.5 0 0 1 6.5 18M18.92 8c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 14v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8M7 5a1.5 1.5 0 0 0 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5A1.5 1.5 0 0 0 7 5m5 0a1.5 1.5 0 0 0 1.5-1.5c0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7A1.5 1.5 0 0 0 12 5m5 0a1.5 1.5 0 0 0 1.5-1.5c0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7A1.5 1.5 0 0 0 17 5"></svg:path>`,
})
export class MdiCarWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarWindshieldIcon],svg[mdi-car-windshield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.63 15.5l-2.42-9.65a1 1 0 0 0-1.07-.75c-1.34.14-5 .4-7.14.4s-5.8-.26-7.14-.4a1 1 0 0 0-1.07.75L1.37 15.5a1.5 1.5 0 0 0 1.18 1.86A61.5 61.5 0 0 0 12 18a61.5 61.5 0 0 0 9.45-.64a1.5 1.5 0 0 0 1.18-1.86"></svg:path>`,
})
export class MdiCarWindshieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarWindshieldOutlineIcon],svg[mdi-car-windshield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.63 15.5l-2.42-9.65a1 1 0 0 0-1.07-.75c-1.34.14-5 .4-7.14.4s-5.8-.26-7.14-.4a1 1 0 0 0-1.07.75L1.37 15.5a1.5 1.5 0 0 0 1.18 1.86A61.5 61.5 0 0 0 12 18a61.5 61.5 0 0 0 9.45-.64a1.5 1.5 0 0 0 1.18-1.86M12 16a63 63 0 0 1-8.56-.5L5.5 7.18c1.5.14 4.66.32 6.5.32s5-.18 6.5-.32l2.06 8.32A63 63 0 0 1 12 16"></svg:path>`,
})
export class MdiCarWindshieldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarWirelessIcon],svg[mdi-car-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-1.1 0-2 .9-2 2v1H6.5c-.66 0-1.22.42-1.42 1L3 15v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-6c-.2-.58-.76-1-1.42-1H14V7a2 2 0 0 0-2-2M6.5 9.5h11L19 14H5zm0 6.5c.83 0 1.5.67 1.5 1.5S7.33 19 6.5 19S5 18.33 5 17.5S5.67 16 6.5 16m11 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5M16.2 3.4C15 2.3 13.5 1.7 12 1.7s-3 .6-4.2 1.7L7 2.6C8.4 1.2 10.2.5 12 .5s3.6.7 5 2.1zm-.9.8l-.8.8c-.7-.7-1.6-1-2.5-1s-1.8.3-2.5 1l-.8-.8c.9-.9 2.1-1.4 3.3-1.4s2.4.5 3.3 1.4"></svg:path>`,
})
export class MdiCarWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarWrenchIcon],svg[mdi-car-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.96 16.45c.01-.15.04-.3.04-.45v.5zM11 16c0 .71.15 1.39.42 2H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-6c.2-.58.76-1 1.42-1h11c.66 0 1.22.42 1.42 1L21 11v5c0-2.76-2.24-5-5-5s-5 2.24-5 5m-3-2.5c0-.83-.67-1.5-1.5-1.5S5 12.67 5 13.5S5.67 15 6.5 15S8 14.33 8 13.5M19 10l-1.5-4.5h-11L5 10zm3.87 11.19l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35a2.91 2.91 0 0 0 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64"></svg:path>`,
})
export class MdiCarWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCarabinerIcon],svg[mdi-carabiner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17.5c0 .83-.67 1.5-1.5 1.5S5 18.33 5 17.5S5.67 16 6.5 16s1.5.67 1.5 1.5M18 5.59C17.79 3.54 16.18 2 14.24 2H8.88C6.95 2 5.36 3.5 5.15 5.53L5 6.59C4.92 7.34 5.5 8 6.24 8c.63 0 1.15-.47 1.23-1.09l.14-1.09c.07-.75.62-1.32 1.27-1.32h5.36c.65 0 1.2.57 1.26 1.32l1 11.06c.09.86-.5 1.62-1.25 1.62l-5.21-.68a3.46 3.46 0 0 1-1.24 2.36l6.13.82h.32c1.02 0 2.01-.44 2.71-1.22A4.22 4.22 0 0 0 19 16.65zm-6.34 2.35c-.58-.37-1.35-.19-1.72.4L6.39 14h.11c.88 0 1.68.34 2.3.88l3.26-5.22c.37-.58.19-1.35-.4-1.72"></svg:path>`,
})
export class MdiCarabinerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCaravanIcon],svg[mdi-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h8v-2h-2V9a2 2 0 0 0-2-2zm0 2h5v3H5zm8 0h4v3h-4zm-3 7a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiCaravanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardIcon],svg[mdi-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardAccountDetailsIcon],svg[mdi-card-account-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20c1.05 0 2 .95 2 2v14c0 1.05-.95 2-2 2H2c-1.05 0-2-.95-2-2V5c0-1.05.95-2 2-2m12 3v1h8V6zm0 2v1h8V8zm0 2v1h7v-1zm-6 3.91C6 13.91 2 15 2 17v1h12v-1c0-2-4-3.09-6-3.09M8 6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiCardAccountDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardAccountDetailsOutlineIcon],svg[mdi-card-account-details-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2c-1.09.04-1.96.91-2 2v14c.04 1.09.91 1.96 2 2h20c1.09-.04 1.96-.91 2-2V5a2.074 2.074 0 0 0-2-2m0 16H2V5h20zm-8-2v-1.25c0-1.66-3.34-2.5-5-2.5s-5 .84-5 2.5V17zM9 7a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9 12a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 9 7m5 0v1h6V7zm0 2v1h6V9zm0 2v1h4v-1z"></svg:path>`,
})
export class MdiCardAccountDetailsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardAccountDetailsStarIcon],svg[mdi-card-account-details-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 22.09l2.45 1.49l-.65-2.81l2.2-1.88l-2.89-.25L20 16l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81zM14.08 21H2c-1.05 0-2-.95-2-2V5c0-1.05.95-2 2-2h20c1.05 0 2 .95 2 2v10.53A5.97 5.97 0 0 0 20 14c-3.31 0-6 2.69-6 6c0 .34.03.68.08 1M8 13.91C6 13.91 2 15 2 17v1h12v-1c0-2-4-3.09-6-3.09M8 6C6.35 6 5 7.35 5 9s1.35 3 3 3s3-1.35 3-3s-1.35-3-3-3m13 4h-7v1h7zm1-2h-8v1h8zm0-2h-8v1h8z"></svg:path>`,
})
export class MdiCardAccountDetailsStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardAccountDetailsStarOutlineIcon],svg[mdi-card-account-details-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 22.09l2.45 1.49l-.65-2.81l2.2-1.88l-2.89-.25L20 16l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81zM14.08 21H2a2.074 2.074 0 0 1-2-2V5c.04-1.09.91-1.96 2-2h20c1.09.04 1.96.91 2 2v10.53c-.58-.53-1.25-.92-2-1.19V5H2v14h12.08c-.05.33-.08.66-.08 1s.03.68.08 1M14 17H4v-1.25c0-1.66 3.34-2.5 5-2.5s5 .84 5 2.5zm0-6h4v1h-4zM9 7C7.63 7 6.5 8.13 6.5 9.5S7.63 12 9 12s2.5-1.13 2.5-2.5S10.37 7 9 7m5 2h6v1h-6zm0-2h6v1h-6z"></svg:path>`,
})
export class MdiCardAccountDetailsStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardAccountMailIcon],svg[mdi-card-account-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8V7l-3 2l-3-2v1l3 2m4-7H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1m8-5h-8V6h8"></svg:path>`,
})
export class MdiCardAccountMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardAccountMailOutlineIcon],svg[mdi-card-account-mail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H2V5h20zM21 6h-7v5h7zm-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7zM9 12a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m0-4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 8.59c0-2.5-3.97-3.59-6-3.59s-6 1.09-6 3.59V18h12zM5.5 16c.72-.5 2.2-1 3.5-1s2.77.5 3.5 1z"></svg:path>`,
})
export class MdiCardAccountMailOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCardAccountPhoneIcon],svg[mdi-card-account-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.65l1.5 2l-2 2c-1.3-1-2.27-2.39-2.72-4c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3 2.72-4l2 2l-1.5 2h-1.65c-.22.63-.35 1.3-.35 2s.13 1.37.35 2"></svg:path>`,
})
export class MdiCardAccountPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
