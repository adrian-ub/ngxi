import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWifiIcon],svg[la-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7c-5.016 0-9.543 2.082-12.813 5.406l1.407 1.406C7.5 10.852 11.535 9 16 9s8.5 1.852 11.406 4.813l1.407-1.407C25.543 9.082 21.015 7 16 7m0 5c-3.64 0-6.918 1.52-9.281 3.938l1.406 1.406C10.125 15.289 12.915 14 16 14s5.875 1.29 7.875 3.344l1.406-1.407C22.918 13.52 19.641 12 16 12m0 5c-2.262 0-4.293.957-5.75 2.469l1.406 1.406A6 6 0 0 1 16 19c1.71 0 3.25.727 4.344 1.875l1.406-1.406C20.297 17.957 18.262 17 16 17m0 5a2.98 2.98 0 0 0-2.219 1L16 25.219L18.219 23A2.98 2.98 0 0 0 16 22"></svg:path>`,
})
export class LaWifiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWikipediaWIcon],svg[la-wikipedia-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 9.215a.31.31 0 0 1-.313.308h-1.68l-7.616 16.215a.31.31 0 0 1-.278.18h-.004a.31.31 0 0 1-.28-.172l-3.614-7.168l-3.902 7.18a.313.313 0 0 1-.555-.016L4.055 9.523H2.313A.31.31 0 0 1 2 9.215V8.39a.31.31 0 0 1 .313-.309h6.21a.31.31 0 0 1 .313.309v.824a.31.31 0 0 1-.313.308H7.188l5.316 12.262l2.766-5.168l-3.508-7.09h-.844a.313.313 0 0 1-.313-.312v-.82c0-.172.141-.313.313-.313h4.598a.31.31 0 0 1 .308.313v.82a.307.307 0 0 1-.308.308h-.813l2.02 4.415l2.402-4.415h-1.473a.31.31 0 0 1-.312-.308v-.82a.31.31 0 0 1 .312-.313h4.465a.31.31 0 0 1 .309.313v.82a.307.307 0 0 1-.309.308h-.98l-3.504 6.372l2.855 5.875L26 9.523h-1.746a.31.31 0 0 1-.313-.308v-.82c0-.172.141-.313.313-.313h5.433a.31.31 0 0 1 .313.313z"></svg:path>`,
})
export class LaWikipediaWIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindIcon],svg[la-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3.227 0-6.043 2.258-6.797 5.344a5.04 5.04 0 0 0-2.785 2.672C2.922 10.758 0 13.555 0 17c0 3.309 2.691 6 6 6v-2c-2.207 0-4-1.793-4-4s1.793-4 4-4c.277 0 .566.035.883.105l.976.223l.22-.98a3 3 0 0 1 2.226-2.254l.66-.156l.098-.672C11.418 6.832 13.543 5 16 5a4.98 4.98 0 0 1 4.46 2.75l.395.781l.829-.289C22.152 8.082 22.582 8 23 8c2.207 0 4 1.793 4 4c0 .04-.008.074-.016.11l-.02.206l-.062.72l.664.284A3.99 3.99 0 0 1 30 17c0 2.207-1.793 4-4 4h-2.543q.393.434.691.938q.301.503.5 1.062H26c3.309 0 6-2.688 6-6a6 6 0 0 0-3.004-5.2A6.01 6.01 0 0 0 23 6c-.39 0-.777.043-1.172.125A6.97 6.97 0 0 0 16 3m-.5 9c-1.137 0-2.16.55-2.797 1.398l1.598 1.2A1.49 1.49 0 0 1 15.5 14c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5H9v2h6.5c1.922 0 3.5-1.578 3.5-3.5S17.422 12 15.5 12M8 21v2h3c.566 0 1 .434 1 1s-.434 1-1 1a.98.98 0 0 1-.863-.5l-1.73 1.012A3.02 3.02 0 0 0 11 27c1.645 0 3-1.355 3-3a3 3 0 0 0-.188-1H19c1.117 0 2 .883 2 2s-.883 2-2 2a2 2 0 0 1-1.887-1.336l-1.886.664A4 4 0 0 0 19 29c2.2 0 4-1.8 4-4s-1.8-4-4-4z"></svg:path>`,
})
export class LaWindIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowCloseIcon],svg[la-window-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4.688 3.313l-1.407 1.406L14.562 16l-4.343 4.344l1.406 1.406l4.344-4.344l4.312 4.313l1.407-1.407L17.375 16l4.25-4.25l-1.406-1.406l-4.25 4.25z"></svg:path>`,
})
export class LaWindowCloseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowCloseSolidIcon],svg[la-window-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4.688 3.313l-1.407 1.406L14.562 16l-4.343 4.344l1.406 1.406l4.344-4.344l4.312 4.313l1.407-1.407L17.375 16l4.25-4.25l-1.406-1.406l-4.25 4.25z"></svg:path>`,
})
export class LaWindowCloseSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowMaximizeIcon],svg[la-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 3v12h14V10zm2 2h10v2H11zm0 4h10v4H11z"></svg:path>`,
})
export class LaWindowMaximizeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowMaximizeSolidIcon],svg[la-window-maximize-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 3v12h14V10zm2 2h10v2H11zm0 4h10v4H11z"></svg:path>`,
})
export class LaWindowMaximizeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowMinimizeIcon],svg[la-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 13v2h14v-2z"></svg:path>`,
})
export class LaWindowMinimizeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowMinimizeSolidIcon],svg[la-window-minimize-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 13v2h14v-2z"></svg:path>`,
})
export class LaWindowMinimizeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowRestoreIcon],svg[la-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5 2v4H9v10h11v-4h3V9zm2 2h7v1h-7zm0 3h7v3h-7zm-3 1h1v1.031h-1zm0 3.031h1V19h6v2h-7z"></svg:path>`,
})
export class LaWindowRestoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowRestoreSolidIcon],svg[la-window-restore-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5 2v4H9v10h11v-4h3V9zm2 2h7v1h-7zm0 3h7v3h-7zm-3 1h1v1.031h-1zm0 3.031h1V19h6v2h-7z"></svg:path>`,
})
export class LaWindowRestoreSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWindowsIcon],svg[la-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 5L5 7.992v16.016L27 27zm-2 2.29V15H15V8.65zM13 8.921V15H7V9.738zM7 17h6v6.078l-6-.816zm8 0h10v7.71l-10-1.36z"></svg:path>`,
})
export class LaWindowsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWineBottleIcon],svg[la-wine-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c-1.094 0-2 .906-2 2v1.688a1 1 0 0 0 0 .593v3.157l-.781.53c-1.39.927-2.219 2.516-2.219 4.188v.531a1 1 0 0 0 0 .594v6.407a1 1 0 0 0 0 .593V29h12v-5.813a1 1 0 0 0 0-.406v-6.593a1 1 0 0 0 0-.407v-.625c0-1.672-.828-3.261-2.219-4.187L19 10.438v-3.25a1 1 0 0 0 0-.407V5c0-1.094-.906-2-2-2zm0 2h2v1h-2zm0 3h2v3.531l.438.313l1.218.812c.793.528 1.262 1.399 1.313 2.344H12.03c.051-.945.52-1.816 1.313-2.344l1.219-.812l.437-.313zm-3 9h8v5h-8zm0 7h8v3h-8z"></svg:path>`,
})
export class LaWineBottleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWineGlassIcon],svg[la-wine-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.3 5l-.3.6C7.4 6.9 7 8.7 7 11c0 4.6 3.5 8.4 8 8.9V26h-5v2h12v-2h-5v-6.1c4.5-.5 8-4.3 8-8.9c0-2.3-.4-4.1-1-5.4l-.2-.6zm1.3 2h12.8c.4 1.2.6 2.6.6 4c0 2.1-.9 3.9-2.3 5.2l-.1.1c-.1.1-.2.2-.3.2c-.1.1-.2.1-.2.2c-.1.1-.2.1-.3.2s-.2.1-.3.2c-.1 0-.2.1-.2.1c-.1.1-.2.1-.4.2c-.1 0-.2.1-.2.1c-.1.1-.3.1-.4.1s-.1.1-.2.1s-.3.1-.4.1s-.1 0-.2.1H16c-3.9 0-7-3.1-7-7V9.4z"></svg:path>`,
})
export class LaWineGlassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWineGlassAltIcon],svg[la-wine-glass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.188 5l-.157.781S7 10.488 7 13c0 4.617 3.516 8.43 8 8.938V26h-5v2h12v-2h-5v-4.063c4.484-.507 8-4.32 8-8.937c0-2.516-1.031-7.219-1.031-7.219L23.812 5zm1.656 2h12.312c.094.488.332 1.719.532 3H11v2h11.938c.03.348.062.723.062 1c0 3.879-3.121 7-7 7s-7-3.121-7-7c0-1.688.668-5.094.844-6"></svg:path>`,
})
export class LaWineGlassAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWixIcon],svg[la-wix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.05 9.95a5 5 0 0 0-.95.05l4 6l-4 5.9s1.8.3 2.6-.5c.5-.5.8-1 2.5-3.4c.3-.5.6 0 .6 0c1.5 2 1.9 2.8 2.6 3.4c.9.7 2.6.5 2.6.5L28 16l3.9-6s-1.7-.3-2.5.5c-.6.6-1.2 1.4-2.6 3.5c0 0-.3.5-.6 0c-1.4-2-2-2.9-2.6-3.5c-.4-.4-1.024-.526-1.55-.55M.42 9.99A3 3 0 0 0 0 10l3.2 12s1 0 1.5-.2c.7-.3 1-.6 1.4-2.2c.4-1.4 1.4-5.7 1.5-6c.2-.7.5-.7.7 0c.1.3 1.1 4.5 1.5 6c.4 1.6.7 1.9 1.4 2.2c.6.3 1.6.2 1.6.2L16 10c-1.1-.1-2.4.5-2.5 1.7l-1.7 6.4l-1.4-5.2c-.3-1.5-1-2.3-2.3-2.3s-1.9.7-2.3 2.3l-1.4 5.2l-1.7-6.4c-.263-1.138-1.29-1.663-2.28-1.71M19.6 10s-.8 0-1.3.2c-.6.3-.8.9-.8 2.4c0 0 .3-.3.8-.5c1.4-.5 1.3-1.5 1.3-2.1m-.1 2v.076c.024-.043.03-.076 0-.076m0 .076c-.056.101-.25.284-.6.424c-.3.2-.6.3-.9.4c-.7.3-.6.7-.6 1.7V22s.8.1 1.3-.2c.7-.3.8-.7.8-2.2z"></svg:path>`,
})
export class LaWixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWizardsOfTheCoastIcon],svg[la-wizards-of-the-coast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.9 6.1c-2.9 0-5.3.6-5.7.7c.4.1.7.2 1.1.6h.1c.3-.1 2.4-.7 5.5-.7c9 0 15.1 5.8 15.1 11.2v.5c0 .1 0 .1.1 0v-1C32 13.2 27.2 6.1 15.9 6.1m1.2 1.1C6.9 7.2.7 14 0 14.8c-.1 0-.1 0 0 .1C3 15.7 7.8 19 9.8 25h.1c2.8-3.5 7-6.4 11.8-6.4c4 0 6.5 2.1 6.5 4c0 .9-.3 1.7-1.1 2.3c.7-.5 1.4-1.4 1.4-2.4c0-1.1-.6-1.9-.6-1.9c.4.4.5.8.5.8c.3-2 1.3-3.1 1.3-3.1a4 4 0 0 0-.3-.9c.4.4.7 1.4.7 2.1c0 .5-.2 1.1-.6 1.5c.4-.2.8-.7.8-1.8c0-.8-.2-1.3-.2-1.3c.3-.3.6-.5.8-.6c0 .2.1.5.1.7c0 .1 0 .1.1 0v-.8c.3-.2.5-.2.5-.2c-.7-5.5-7.1-9.8-14.5-9.8m-2.1.4l-1 3.1c2.1-1.2 4.1-1.8 6.6-1.8C24 9 29 11 30.6 16c-.5-1.5-3-6.4-9.6-6.5c-2.7-.1-4.7.8-6.6 1.9l4.3-.5L14 12l1.3 1l-.2-.8c.4-.1 2-.4 3.3-.4l-1.1 4c.7 0 .9-.4 1-1.1l.2-.1v1.3c-1.1.2-1.9.3-2.5.5l.7-2.2l-3.1-1.8l.1.4l.5.2c.3.9 1 2.8 1 2.9c.1.2.2.3.6.2l.1.2c-.8.2-1.2.4-2 .7l-.1-.2c.2-.1.4-.2.3-.6c-1.2-3.1-1.1-2.9-1.1-3l.1-.2l1.7 3.4c-.2-.6.1.1-1.6-3.9l-2.1 4.4l.2-.7l-1.8-2.1l1.4 4.7l-.6.4c-5.6-5.1-5.3-4.9-5.7-4.9c-.3 0-.7.3-.7.3l-.2-.3c1.5-1.2 1.6-1.2 2.9-2.1l.2.4s-.3.2-.4.4c-.3.5.1.7 3.1 3.8l-.9-2.9l2-.5l1.3 1.5l.2-.6l-.2-1.2l.7-.2v.2l.2-.5L8 13.8l.6-.2l-.7-2.1l.9-.5l1.5 1.8l1.4-.7c-.1-.4-.1-.7-.2-1l.9.7l.2-.1l-3-2.1l1.2.6c.9-.3 1.3-.4 1.6-.5l.1.5c-.6.6.1.8.3 1l-.7-3.1l.6 1.4c.2-.1.4-.1.4-.1l.1.4s-.2.1-.3.1l.4 1zm-4.6 2.6l.5.4s-.2 0-.6.1l-.1-.4s.1 0 .2-.1m9.81 1.443c.84-.024 1.44.107 1.59.857v.6c0 .1-.1.9-.1 1.2v1c0 .1 0 .2.1.3s.3.1.3.1c.4 0 .4-.3.4-.3s.2-2.7.2-2.8c0-.2-.2-.2-.2-.2V12s1 .2 1.4.4l-.1.9s.5-.5.8-.5c.3-.1.7.4.7.4l-.6.6c-.6-.3-1 0-1 0c-.3 1.9-.4 2.1.2 2.3v.2c-.9-.3-.9-.3-1.8-.4c-.6-.1-.5 0-1-.1c-.2-.3-.1-.2-.2-.4c-.2 0-.4.2-.6.3s-.4.1-.5.1c0 0-.6.1-.9-.5c-.3-.5 0-1.3.3-1.6c.4-.4 1.2-.5 1.4-.9c.4-.5-.7-1.1-1.5-.3H19l.3-.8c.326-.026.631-.05.91-.057m6.69.158c.6.5.8.7 1.1 1c-1.3 3.7-1.5 3.999-1.2 4.199l-.1.2c-.3-.2-.4-.2-.9-.4l.1-.3s-.2.2-.5.2c-1 0-1.2-1.6-.5-2.6c.6-.9 1.5-.8 1.7-.2l.4-1.3c.1-.3-.1-.5-.2-.6zm-9.752.386c-.398 0-1.149.112-1.449 1.012l1.102.9l.6-1.9c-.026 0-.12-.011-.253-.011zM20.7 13.4s-.599.3-.699.5c-.2.2-.4.5-.4.8c0 .4.2.5.5.5s.5-.1.5-.3s.1-1.5.1-1.5zm5.4.4c-.5-.1-.8 1.2-.9 1.7c0 .3-.099.7.301.7c.3.1.5.1 1-1.7c.1-.3 0-.6-.4-.7zm-13.298.1l.6 3.5l-.6.3l-1.201-1.4l.7-1.3l.2.2l-.2-.4zM28 15.3c.7-.1 1.2.8 1.2.8l-.4.4l-.1-.1c0-.1.1-.2.1-.4c0-.5-.6-.6-.6-.2c0 .2.4 1 .4 1.4c0 .5-.3.8-.7.8s-1-.5-1-.5l.2-.7l.1.1c-.1.9.9 1 .7.3c-.1-.2-.9-1.7.1-1.9m-8.4 1c0 .1 0 .2.1.3c-.1-.1-.2-.2-.8 0c0 .1.1.3.1.5c.5-.1.2 0 .5-.1v.3c-.2-.1-.1 0-.5 0c0 .1.1.5.1.6c.085 0 .522-.008.712-.134a.5.5 0 0 0-.011.134c-.2 0-.702.1-1.102.2v-.2c-.1-.4-.199-.9-.199-1.3c0-.1 0-.1-.1-.2c.5-.1 1-.1 1.2-.1m2 .04c.156.01.325.06.5.16c.1 0 .1.2.1.3c-.3-.5-1-.4-1.1.3c-.1.9.7 1 1 .5c0 .1-.1.3-.1.3c-.5.3-1.4-.1-1.3-.9a.844.844 0 0 1 .9-.66m-3.9.16c-.1.1-.1.1 0 .2c.1.3.2 1 .3 1.3c.1.2.1.2.2.3c-.2.1-.3.1-.5.1v-.2c-.1-.2-.2-.6-.2-.7c-.2 0-.4.1-.6.2c0 .1.2.5.2.7c0 .1.1.1.1.2c-.2.1-.4.1-.5.2c.1-.1.1-.1 0-.2c-.1-.2-.4-1.2-.5-1.4c0-.1-.1-.2-.1-.2c.2-.1.3-.1.5-.2v.2c.1.2.1.4.2.5c.2-.1.5-.1.6-.2l-.1-.5c0-.1-.1-.2-.1-.2c.2-.1.4-.1.5-.1m5.46.066a.7.7 0 0 1 .24.034c.5.1.6.6.5 1s-.4.6-.9.5c-.4-.1-.7-.5-.5-1c.15-.375.412-.524.66-.534m.24.133c-.1 0-.5 0-.6.5c-.1.3 0 .701.3.701c.2.1.4 0 .6-.5c.1-.5-.1-.7-.3-.7zm1.3.301c.1 0 .3.1.4.1c0 0 0-.1-.1 1.3c.1.1.1.1.1.2c-.1 0-.4-.1-.4-.1l.1-.1V18c-.2-.1-.3-.1-.4-.1c-.1.1-.1.2-.2.3v.2c-.1 0-.2-.1-.3-.1l.1-.1c.2-.2.5-.7.7-1zm-9.1.2l.2.2c-.2-.1-.4 0-.6.1c.6 1.6.6 1.6.7 1.6c-.2.1-.3.1-.5.2c.1-.1.1-.1-.6-1.6c0 0-.4.2-.5.4l-.1-.3c.4-.2 1.3-.6 1.4-.6m9.3 0c-.1.1-.3.4-.3.5c.1 0 .2.1.3.1zm1.15.325c.15.025.3.126.35.276V18c0-.3-.3-.4-.4-.3s.1.2.1.4c.1.1.1.3.1.5c-.1.3-.6.3-.8 0l.1-.2c0 .3.3.5.4.2c.1-.1 0-.3-.1-.4s-.2-.3-.1-.5c.05-.15.2-.2.35-.175M27 18c.2.1.5.3.6.4l-.2.3c-.1-.2 0-.1-.2-.2c-.1.2-.3.5-.4.8c-.1.1-.1.2 0 .2l-.3-.2l.1-.1c.2-.3.3-.6.5-.9c-.1-.1-.1-.1-.3-.1zm-13.6.2l.2.2h-.3c-.1 0-.4.2-.6.4v.1c.1.1.2.3.3.5c.5-.3.4-.2.6-.4c0 .1 0 .1.1.3c-.2 0-.2 0-.6.3c.5.9.6.8.6.8c-.1.1-.3.2-.5.3c.1-.2-.1-.3-.9-1.6c-.1-.1-.2-.1-.2-.1c.4-.3.8-.5 1.3-.8m8.551.64c-2.522-.014-5.551.873-8.351 3.06v.1c.1.2.2.5.2 1c3.2-2.9 6.6-3.8 9.2-3.6c2.9.2 5 1.7 5 3.4c0 .5-.1.8-.2 1c.1-.2.2-.5.3-1c.2-1.9-2-3.6-5.1-3.9a10 10 0 0 0-1.049-.06m-10.533.71c.502-.07.932.325 1.082.55c-.1 0 .5.8-.3 1.5c-.6.4-1.2.2-1.5-.2c-.4-.5-.3-1.2.2-1.6c.175-.15.35-.226.518-.25m-.162.329A.4.4 0 0 0 11 20c-.1.1-.6.4 0 1.2c.2.3.7.6 1.1.3c.3-.2.4-.6 0-1.2c-.225-.224-.563-.45-.844-.421"></svg:path>`,
})
export class LaWizardsOfTheCoastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWolfPackBattalionIcon],svg[la-wolf-pack-battalion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 3c-.9 3.1-.2 6 0 6.6c.8-.3 2.5-1.9.3-3.7c1.3.4 2 1.5 2.1 2.5C10 9.8 8.1 11 7.1 11c-1.6.1-3.1 1.7-3.1 3l1.1-.5c-.3.9-.6 1.8-.4 2.9l1.3-.3c-.8 1.3-.5 3.3-.4 4.3l1.3-.7l.4 1.8l1.2-.3l.5 1.5l1.3-1.1l-1 .4l-.4-1.7l-.9.3l-.3-1.7l-1.4.4c-.2-1.3.1-2.5.7-3.7l-1.5-.4c.5-2.2 1.8-2.6 3.2-2.7c.5 1.6.3 2.9-.1 4.1c4.1 2.9 3.9 6 4.1 7.6c.2 1.5.2 4.5 1.3 4.9v-1.5l.3-.4l.3.6l.5-.8l.6 1.1l.4-1.2l.5.8l.3-.6l.3.4V29c1.1-.4 1.1-3.4 1.3-4.9c.2-1.6 0-4.7 4.1-7.6c-.4-1.2-.6-2.5-.1-4.1c1.4.2 2.7.5 3.2 2.7l-1.5.4c.6 1.2.9 2.4.7 3.7l-1.4-.4l-.5 1.8l-.9-.4l-.4 1.7l-1-.4l1.3 1.1l.4-1.4l1.2.3l.4-1.8l1.3.7c0-1 .4-2.9-.4-4.3l1.3.3c.2-1.1-.1-2-.4-2.9l1.2.5c0-1.3-1.5-2.9-3.1-3c-1-.1-2.9-1.3-2.7-2.6c.1-1 .8-2.2 2.1-2.5c-2.2 1.9-.5 3.4.3 3.7c.2-.6.9-3.5 0-6.6c-2 1.2-4.4 3.3-4.6 7.5l-2.8 1.8L16 17l5.2-2.8l.4.4l-.9.2l-2.2 2l-.8-.3l-1.4 2.5l-.2 6l1.1.8l-1.6.8l-1.6-.8l1.1-.8l-.2-6.1l-1.4-2.5l-.8.3l-2.2-2l-.9-.2l.4-.4l5 2.9l-.2-4.7l-2.8-1.8C11.8 6.3 9.5 4.2 7.4 3m.8 10.5c-.9.1-1.8.4-2.3 1.4c.7.2 1.2.3 2.2.7c0-.6.1-1.4.1-2.1m14.6 0c0 .7.1 1.5.1 2.1c1-.4 1.5-.5 2.2-.7c-.5-1-1.3-1.3-2.3-1.4M8.1 15.8c-1 .7-1.4 1.7-1.5 2.9c.6-.2 1.2-.5 1.9-.5c-.3-.7-.4-1.5-.4-2.4m14.8 0c0 .9-.1 1.7-.4 2.4c.7 0 1.3.3 1.9.5c-.1-1.2-.5-2.2-1.5-2.9M8.6 18.2c-.2.5-.3 1-.3 1.7l1.2-.3c-.3-.5-.6-.9-.9-1.4m.9 1.4c0 .6 0 1.1.1 1.6c.4-.1.8-.2 1.1-.4c-.4-.3-.8-.8-1.2-1.2m12.9-1.4c-.3.5-.6.9-.9 1.4l1.2.3c0-.7-.1-1.2-.3-1.7m-.9 1.4c-.4.4-.8.9-1.2 1.2c.3.2.7.3 1.1.4c.1-.5.1-1 .1-1.6M10.7 21c.1.3.1.7.2 1.1l.8-.5c-.4-.2-.7-.4-1-.6m9.6 0c-.3.2-.6.4-1 .6l.8.5c.1-.4.1-.8.2-1.1"></svg:path>`,
})
export class LaWolfPackBattalionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWonSignIcon],svg[la-won-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 6l1.813 6H4v2h2.406L7 16H4v2h3.594L10 26h2l2-8h4l2 8h2l2.406-8H28v-2h-3l.594-2H28v-2h-1.813L28 6h-2l-1.813 6H18.5L17 6h-2l-1.5 6H7.812L6 6zm12 4l.5 2h-1zm-7.594 4H13l-.5 2H9zM15 14h2l.5 2h-3zm4 0h4.594L23 16h-3.5zm-9.406 4H12l-1.094 4.375zM20 18h2.406l-1.312 4.375z"></svg:path>`,
})
export class LaWonSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWordpressIcon],svg[la-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 .563c6.313 0 11.438 5.125 11.438 11.437c0 6.313-5.125 11.438-11.438 11.438S4.562 22.313 4.562 16C4.563 9.687 9.688 4.562 16 4.562zm0 1.156a10.25 10.25 0 0 0-8.594 4.625c.242.008.461 0 .657 0c1.078 0 2.75-.125 2.75-.125c.554-.031.617.777.062.844c0 0-.566.093-1.188.124l3.75 11.126l2.25-6.75l-1.593-4.376c-.555-.03-1.094-.124-1.094-.124c-.555-.032-.492-.876.063-.844c0 0 1.707.125 2.718.125c1.078 0 2.75-.125 2.75-.125c.555-.031.617.777.063.844c0 0-.57.093-1.188.124l3.719 11.063l1.031-3.438c.52-1.335.782-2.46.782-3.343c0-1.274-.45-2.13-.844-2.813c-.52-.847-1-1.59-1-2.437c0-.946.707-1.813 1.718-1.813h.125A10.2 10.2 0 0 0 16 5.72zm9.031 5.343c.047.329.063.684.063 1.063c0 1.043-.196 2.219-.782 3.688l-3.125 9.093A10.28 10.28 0 0 0 26.282 16c0-1.79-.445-3.473-1.25-4.938zm-18.437.75A10.2 10.2 0 0 0 5.719 16c0 4.074 2.347 7.582 5.781 9.25zm9.593 5.094l-3.093 8.969c.922.27 1.894.406 2.906.406q1.8 0 3.406-.562c-.027-.043-.043-.106-.062-.157z"></svg:path>`,
})
export class LaWordpressIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWordpressSimpleIcon],svg[la-wordpress-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.828 3 3 8.828 3 16s5.828 13 13 13s13-5.828 13-13S23.172 3 16 3m0 2.168c2.825 0 5.382 1.079 7.307 2.838c-.042-.001-.083-.012-.135-.012c-1.062 0-1.754.93-1.754 1.928c0 .899.453 1.648 1.006 2.547c.41.715.889 1.646.889 2.978c0 .932-.348 2.004-.825 3.51l-1.07 3.607l-4.066-12.527a24 24 0 0 0 1.234-.098c.585-.065.52-.931-.065-.898c0 0-1.754.14-2.892.14c-1.061 0-2.85-.14-2.85-.14c-.585-.033-.65.866-.064.898c0 0 .552.065 1.137.098l1.824 5.508l-2.364 7.107L9.215 10.04a23 23 0 0 0 1.246-.098c.585-.065.51-.931-.065-.898c0 0-1.681.133-2.82.139A10.8 10.8 0 0 1 16 5.168m9.512 5.633A10.8 10.8 0 0 1 26.832 16a10.8 10.8 0 0 1-5.383 9.36l3.305-9.565c.617-1.538.822-2.774.822-3.879c0-.401-.02-.76-.062-1.105zm-19.309.584l5.063 14.355A10.8 10.8 0 0 1 5.168 16c0-1.655.377-3.215 1.035-4.615m9.98 5.558l3.338 9.131a.6.6 0 0 0 .075.139a10.9 10.9 0 0 1-3.596.619a11 11 0 0 1-3.066-.443l3.25-9.446zm-3.622 9.328"></svg:path>`,
})
export class LaWordpressSimpleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWpbeginnerIcon],svg[la-wpbeginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.4 4 4 8.5 4 14c0 1.7.5 3.3 1.4 4.8c-.9.8-1.4 2-1.4 3.2c0 2.8 2.7 5 6 5c2.5 0 4.6-1.2 5.5-3h1c.9 1.8 3 3 5.5 3c3.3 0 6-2.2 6-5c0-1.2-.5-2.4-1.4-3.2c.9-1.4 1.4-3 1.4-4.8c0-5.5-5.4-10-12-10m0 2c5.5 0 10 3.6 10 8c0 .31-.026.611-.07.91c-.006.044-.017.086-.024.13a7 7 0 0 1-.18.786l-.03.106a8 8 0 0 1-.264.697c-.425.95-1.074 1.82-1.932 2.57c1.476.492 2.463 1.567 2.494 2.744C25.962 23.525 24.18 24.9 22 24.9c-1.6 0-3.1-.8-3.7-1.9l-.6-1h-3.4l-.6 1.1c-.6 1.1-2.1 1.9-3.7 1.9c-2.2 0-4-1.4-4-3c0-.197.03-.38.08-.553l.008-.025c.14-.463.418-.83.635-1.117c.435-.472 1.045-.862 1.777-1.106a8 8 0 0 1-1.39-1.586L7.1 17.6a7.2 7.2 0 0 1-.81-1.721l-.005-.012a6 6 0 0 1-.193-.832q-.012-.062-.022-.125A6 6 0 0 1 6 14c0-4.4 4.5-8 10-8m-6 6v3h2v-3zm3 0v3h8v-3zm-2 4.2v1.4c2.5 2.4 6.3 3 9 1.7V18c-2.9 1.1-6.4.5-9-1.8"></svg:path>`,
})
export class LaWpbeginnerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWpexplorerIcon],svg[la-wpexplorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13S23.2 3 16 3m0 2c6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5m-4.8 5l-1.8 4.3l4.3 1.8l1.8-4.3zm4.8 2.6L14.6 16l3.3 1.4l.016-.035l.084.035l1.5-3.4zm4 2.1l-1.1 2.7l2.7 1.1l1.2-2.7zm-5.7 1.9l-.3.6l1.1.5l-2.5 5.3h.7l2.4-4.9l2.5 4.9h.7l-2.3-4.6l.8.3l.3-.7z"></svg:path>`,
})
export class LaWpexplorerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWpformsIcon],svg[la-wpforms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h.535l5.065 4.3l3.4-3l3.4 3L24.465 7H25v18H7zm3.705 0h3.82L12.6 8.7zm6.77 0h3.82L19.4 8.7zM9 13v2h3v-2zm5 0v2h9v-2zm-5 4v2h3v-2zm5 0v2h9v-2zm4 4v2h5v-2z"></svg:path>`,
})
export class LaWpformsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWpressrIcon],svg[la-wpressr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13S23.2 3 16 3m0 2c6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5m-5.4 6c-.2 0-.3.1-.4.3c-.6 1.4-1.3 2.9-1.9 4.3c-.4 1-.9 1.9-1.3 2.9v.5c.6.6 1.1 1.2 1.7 1.8c.1.1.2.2.4.2H16c.1 0 .3-.1.4-.3c.5-1.2 1-2.3 1.5-3.5c.1-.2.3-.3.5-.3h3.4c.3 0 .5-.1.6-.4c.8-1.7 1.5-3.4 2.4-5.1c.1-.3 0-.4-.3-.4H18c-.2 0-.3.1-.4.3c0 .2-.4.9-.8 1.9c0 .1.1.1.2.1h3.7c.5 0 .4.7-.2.7h-3.9c-.1 0-.1.1-.2.1c-.9 1.9-1.9 4.2-1.9 4.2c-.2.3-.8.3-.6-.3c.4-.9.8-1.9 1.2-2.8c.1-.2 0-.4-.3-.4h-2.3c-.1 0-.2 0-.3.2c-1.6 3.5-1.5 3.3-1.5 3.3c-.1.3-.7.1-.5-.3c.2-.6.5-1.3.8-1.9c.7-1.6 1.3-3.1 2-4.6c.2-.3 0-.5-.3-.5z"></svg:path>`,
})
export class LaWpressrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laWrenchIcon],svg[la-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4c-3.855 0-7 3.145-7 7c0 .715.215 1.363.414 2.016l-9.469 9.468a3.244 3.244 0 0 0 0 4.575a3.247 3.247 0 0 0 4.57 0l9.47-9.47c.648.2 1.3.411 2.015.411c3.855 0 7-3.145 7-7c0-1.027-.227-2-.625-2.875l-.594-1.32l-1.02 1.023L22.587 11H21V9.414l4.195-4.195l-1.32-.594A6.9 6.9 0 0 0 21 4m0 2c.172 0 .316.086.484.102L19 8.586V13h4.414l2.48-2.484c.02.168.106.312.106.484c0 2.773-2.227 5-5 5a5 5 0 0 1-1.969-.402l-.62-.266L8.1 25.641a1.226 1.226 0 0 1-1.742 0a1.23 1.23 0 0 1 0-1.746l10.31-10.305l-.266-.625A5 5 0 0 1 16 11c0-2.773 2.227-5 5-5"></svg:path>`,
})
export class LaWrenchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laXRayIcon],svg[la-x-ray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8 1v1h-3v2h3v1h-5v2h5v1h-4v2h4v2.563c-.523-.27-1.113-.563-1.5-.563a1.5 1.5 0 0 0 0 3c.379 0 1.672 1 2.5 1s2.121-1 2.5-1a1.5 1.5 0 0 0 0-3c-.387 0-.977.293-1.5.563V8zm3 1v2h2V9zm0 3v2h4v-2zm0 3v2h3v-2z"></svg:path>`,
})
export class LaXRayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laXboxIcon],svg[la-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c.094 0 .188.027.281.031c.254.008.5.008.75.032c.032.003.063-.004.094 0l.281.03a4 4 0 0 1 .188.032a10 10 0 0 1 2.281.656c.008.004.023-.004.031 0c.164.07.313.172.469.25c.207.102.426.196.625.313q.081.046.156.093a.9.9 0 0 1 .25.157c.004.004-.004.027 0 .031c-1.648-.95-5.375 2.063-5.375 2.063c-1.476-1.13-2.816-1.895-3.812-2.157c-.649-.164-1.14-.129-1.469 0c.16-.101.3-.222.469-.312c.011-.008.02-.024.031-.032c.254-.144.516-.257.781-.375c.02-.007.043-.023.063-.03c.187-.083.37-.153.562-.22c.172-.062.356-.105.531-.156c.258-.074.516-.164.782-.218c.082-.016.168-.016.25-.032q.322-.058.656-.093c.031-.004.063.003.094 0A10 10 0 0 1 16 6m6 2.594c.293 0 .637.062.938.25c.039.035.09.058.125.094q.08.068.156.156c.14.144.277.285.406.437c.027.035.066.059.094.094c.078.094.144.184.218.281c.122.16.231.332.344.5c.18.266.348.528.5.813c.145.261.29.535.407.812c.007.02.023.043.03.063l.095.219c.09.23.175.48.25.718c.097.313.183.614.25.938c.007.043.023.082.03.125c.118.613.157 1.258.157 1.906a9.98 9.98 0 0 1-2.281 6.375a9 9 0 0 1-.25.281c.476-2.515-.399-4.37-1.813-6.687c-1.476-2.348-3.812-4.656-3.812-4.656c2.082-1.958 3.808-2.59 4.156-2.72zm-12.125.062c.652.043 1.328.297 1.938.688l.062.031c1.3.781 2.344 1.938 2.344 1.938c-1.13 1.085-3.84 4.374-4.75 6.593c-1.344 3.39-.719 4.875-.719 4.875c.172-1.87 2.941-5.176 3.938-6.218c.519-.61 1.53-1.594 2.312-2.375c.563-.61 1.031-1.094 1.031-1.094l.875.875a68 68 0 0 1 2.844 3c.652.738 1.79 2.129 2.094 2.562c1.304 1.856 1.55 3.114 1.562 3.188c-.11.12-.226.226-.343.343c-.227.227-.442.454-.688.657s-.516.383-.781.562a9 9 0 0 1-.813.5c-.218.117-.43.242-.656.344l-.125.063c-.273.117-.559.218-.844.312c-.023.008-.039.023-.062.031a11 11 0 0 1-1.063.282c-.191.039-.398.035-.593.062A10 10 0 0 1 16.03 26c-.355 0-.718-.027-1.062-.063a10 10 0 0 1-1.906-.375c-.008-.003-.024.004-.032 0a10.1 10.1 0 0 1-2.594-1.28c-.007-.005-.023.003-.03 0a10 10 0 0 1-1.438-1.22A9.95 9.95 0 0 1 6.063 16c0-2.652 1.039-5.031 2.687-6.813c0 0 .43-.53 1.125-.53z"></svg:path>`,
})
export class LaXboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laXingIcon],svg[la-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.406 5c-.426 0-.879.168-1.156.406s-.406.489-.5.657l-4.313 7.656a1 1 0 0 0-.124-.313L13.342 10a2.1 2.1 0 0 0-.53-.656a1.84 1.84 0 0 0-1.126-.406H8.781c-.41 0-.914.171-1.219.656h-.03c-.294.484-.192 1.066 0 1.437l.03.031L9.22 13.97l-2.781 4.906l-.032.031c-.215.418-.246.992.032 1.438c.246.394.769.656 1.25.656h2.875c.44 0 .882-.172 1.156-.406s.406-.485.5-.657c0 0 .574-1.027 1-1.78q.034.114.094.218l4.124 7.563c.102.18.254.425.532.656c.277.23.715.406 1.156.406H22c.426 0 .945-.219 1.219-.656a1.5 1.5 0 0 0 .062-1.438l-.031-.031l-3.813-6.938l6.125-10.812l.032-.063c.199-.398.261-.937-.032-1.406c-.28-.457-.828-.656-1.25-.656zm.125 2h1.782l-5.875 10.438c-.114.203-.098.683.03.968h-.03l.03.063v.031l3.563 6.5H19.22c-.012-.016-.016 0-.032-.031l-3.812-7.032c.684-1.21 6.125-10.906 6.125-10.906c.023-.043.02-.011.031-.031zm-11.75 3.938h1.781c.008.007.004-.016.032.03l.031.032l1.688 2.938c-.512.902-2.844 5.03-2.844 5.03c-.02.036-.02.012-.031.032H8.655l2.594-4.531q.018-.06.031-.125c.024-.051.094-.172.094-.375a1 1 0 0 0-.094-.406a1 1 0 0 0-.062-.126z"></svg:path>`,
})
export class LaXingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laXingSquareIcon],svg[la-xing-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm12.639 2c-.22 0-.401.13-.551.38c-2.908 5.137-4.418 7.794-4.518 7.974l2.889 5.265c.141.25.32.381.56.381h2.04c.27 0 .39-.22.26-.44l-2.858-5.206v-.01l4.496-7.905c.12-.23-.02-.439-.26-.439H19.64zm-8.565 3c-.248 0-.387.198-.258.436l1.37 2.35l-2.143 3.769c-.119.218.02.445.258.445h2.023c.208 0 .395-.128.545-.396c1.398-2.45 2.123-3.73 2.182-3.829l-1.389-2.398c-.149-.248-.336-.377-.564-.377z"></svg:path>`,
})
export class LaXingSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYCombinatorIcon],svg[la-y-combinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4.5 4l3.5 6v5h2v-5l3.5-6h-2L16 15.281L13.5 11z"></svg:path>`,
})
export class LaYCombinatorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYahooIcon],svg[la-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.34 6.027s.785.172 1.441.172s1.426-.183 1.426-.183L16 15.66L21.82 6s.63.215 1.414.215c.782 0 1.426-.2 1.426-.2l-7.445 12.583l.2 9.375s-.786-.215-1.415-.215c-.625 0-1.441.242-1.441.242l.226-9.414z"></svg:path>`,
})
export class LaYahooIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYammerIcon],svg[la-yammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.361 6.041a1.2 1.2 0 0 0-.46.059C5.2 6.3 4.9 7 5 7.6l5.2 13c-.7 2.1-1.4 3.1-3 3.1h-.7c-.5 0-1 .3-1.1.7c-.1.6.2 1.2.8 1.4c.4.1.8.1 1.2.1c3 0 3.9-1.6 4.9-4.1L18 7.6c.1-.6-.2-1.2-.7-1.4c-.6-.2-1.4.1-1.6.7l-4 10.6h-.1L7.5 6.8a1.38 1.38 0 0 0-1.139-.759m18.453 2.023a1.2 1.2 0 0 0-.314.036c0 .1-.1.1-.1.1c-.7.4-5.9 4-5.3 4.4s4.1-1.2 6.5-2.5c.5-.4.6-1.2.1-1.6c-.226-.3-.562-.43-.886-.436M27.9 14.9c-.9 0-7.2.7-6.9 1.3s4.2.9 7 .9c.7-.1 1.1-.7 1-1.3c-.1-.5-.5-.8-.9-.9zm-8.347 4.54c-.158-.009-.279.01-.354.06c-.6.4 4.501 4 5.301 4.4c0 .1.1.1.1.1c.6.2 1.2-.2 1.4-.8c.1-.5-.1-1-.3-1.2c-2.1-1.137-5.043-2.504-6.147-2.56"></svg:path>`,
})
export class LaYammerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYandexIcon],svg[la-yandex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.663 4H16.17C12.738 4 10 6.72 10 12c0 3.168 1.237 5.504 3.749 6.656l-4.688 8.832c-.153.289 0 .512.245.512h2.175c.184 0 .307-.064.368-.223L16.25 19h1.25l-.008 8.777c0 .096.092.223.214.223h2.049c.184 0 .245-.096.245-.255V4.32c0-.224-.123-.32-.337-.32M17.5 17H16c-1.5 0-3.5-1.16-3.5-5c0-4.001 1.631-6 3.5-6h1.5z"></svg:path>`,
})
export class LaYandexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYandexInternationalIcon],svg[la-yandex-international-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 1l-5.6 16.2l-5-13.2H7l7 18.6V31h3v-9.9L24 1z"></svg:path>`,
})
export class LaYandexInternationalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYarnIcon],svg[la-yarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13S23.2 3 16 3m0 2c6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5m.209 4.045c-.45.076-.908 1.455-.908 1.455s-1.201-.2-2.201.8c-.2.2-.4.3-.7.4c-.1.1-.2.1-.4.7c-.4.9.6 2 .6 2c-2.1 1.5-2 3.5-1.9 4c-1.3 1.1-.8 2.5-.5 2.9c.2.3.4.2.5.2c0 .1-.5.7 0 .9c.5.3 1.3.4 1.7 0c.3-.3.4-.9.5-1.2c.1-.1.1.2.5.4c0 0-.7.3-.4 1c.1.2.4.4 1 .4c.2 0 2.6-.1 3.2-.3c.4-.1.5-.3.5-.3c2.6-.7 3.1-1.8 4.9-2.2c.6-.1.6-1.1-.5-1c-.8 0-1.5.4-2.1.8c-1 .6-1.7.7-1.7.6c-.1-.1.4-1.3-.1-2.6c-.5-1.4-1.4-1.8-1.3-1.9c.3-.5 1-1.3 1.3-2.7c.1-.9.1-2.4-.3-3.1c-.1-.2-.7.2-.7.2s-.6-1.3-.8-1.4a.23.23 0 0 0-.191-.055"></svg:path>`,
})
export class LaYarnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYelpIcon],svg[la-yelp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.344 4c-1.473.05-4.602.988-5.25 1.656c-.239.246-.352.574-.281.844c.117.238 5.062 8 5.062 8c.734 1.188 1.336 1 1.531.938c.196-.06.785-.239.719-1.626c-.07-1.62-.535-8.82-.594-9.156c-.082-.304-.344-.539-.687-.625a2 2 0 0 0-.5-.031m7.469 7.094a.73.73 0 0 0-.407.125c-.156.101-.277.254-2.468 3.25c0 0-.989 1.363-1 1.375c-.262.316-.254.765 0 1.156c.265.402.687.613 1.093.5c0 0 .004.023 0 .031c.203-.074.563-.187 1.219-.343c4.094-.993 4.246-1.02 4.406-1.125c.246-.168.364-.473.344-.813c0-.012.004-.02 0-.031c-.105-1.004-1.852-3.61-2.719-4.031a1 1 0 0 0-.468-.094m-13.75 4.031c-.297-.012-.567.148-.75.438c-.391.624-.543 2.57-.407 3.874c.051.434.106.817.219 1.032a.84.84 0 0 0 .719.468c.191.008.336-.03 3.937-1.187c0 0 1.586-.496 1.594-.5c.398-.102.66-.469.688-.938c.027-.48-.22-.91-.626-1.062c0 0-1.12-.469-1.124-.469c-3.872-1.597-4.055-1.652-4.25-1.656m11.03 4.406a1.07 1.07 0 0 0-.843.407c-.305.37-.336.878-.094 1.25l.625 1.03c2.137 3.473 2.313 3.692 2.469 3.813c.238.188.531.219.844.094c.91-.363 2.89-2.871 3.031-3.844c.047-.34-.047-.625-.281-.812c-.153-.114-.278-.16-3.875-1.344c0 0-1.574-.52-1.594-.531a.9.9 0 0 0-.281-.063zm-4.374 1.125a.97.97 0 0 0-.531.344s-.778.938-.782.938c-2.715 3.183-2.808 3.312-2.875 3.5a1 1 0 0 0-.062.375c.015.171.09.316.219.468c.628.746 3.664 1.852 4.624 1.688c.336-.063.551-.219.657-.5c.062-.184.082-.309.094-4.094v-1.688c.027-.41-.223-.8-.657-.968a1.24 1.24 0 0 0-.687-.063"></svg:path>`,
})
export class LaYelpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYenSignIcon],svg[la-yen-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.188 5l6.875 11H10v2h5v2h-5v2h5v5h2v-5h5v-2h-5v-2h5v-2h-4.063l6.875-11h-2.375L16 15.344L9.562 5z"></svg:path>`,
})
export class LaYenSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYinYangIcon],svg[la-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12h.25c.086.004.164 0 .25 0v-.031C22.883 27.703 28 22.445 28 16c0-5.875-4.258-10.758-9.844-11.781A6.4 6.4 0 0 0 16.5 4v.031C16.332 4.023 16.168 4 16 4m0 2c.348 0 .695.027 1.031.063c.125.015.254.007.375.03c.032.005.063.028.094.032A4.47 4.47 0 0 1 21 10.5c0 2.496-2.004 4.5-4.5 4.5c-3.578 0-6.5 2.922-6.5 6.5c0 1.07.258 2.078.719 2.969C7.887 22.707 6 19.589 6 16c0-5.535 4.465-10 10-10m6.719 2.625C24.727 10.453 26 13.063 26 16c0 5.43-4.3 9.805-9.688 9.969C13.906 25.867 12 23.934 12 21.5c0-2.496 2.004-4.5 4.5-4.5c3.578 0 6.5-2.922 6.5-6.5a6.5 6.5 0 0 0-.281-1.875M16.5 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 11a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaYinYangIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYoastIcon],svg[la-yoast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 4l-5 13.5L13 10h-3l4 9.5s.2.6.3 1.1v.7c0 .2-.1.5-.2.7c-.6 1.2-1.7 1.9-3 1.9v3c2.7 0 5.1-1.7 6-4.2L24 4zM9 7c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h.9v-1H9c-1.7 0-3-1.4-3-3V11c0-1.7 1.3-3 3-3h9.1l.4-1zm15 .1l-.3 1C25 8.4 26 9.6 26 11v13h-8.3c-.2.3-.4.7-.6 1H27V11c0-1.9-1.3-3.4-3-3.9"></svg:path>`,
})
export class LaYoastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYoutubeIcon],svg[la-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c-3.766 0-7.094.39-9.125.688c-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188c2.04.296 5.379.687 9.125.687s7.086-.39 9.125-.688c1.68-.242 3.035-1.511 3.344-3.187c.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6m0 2c3.633 0 6.879.371 8.844.656A1.97 1.97 0 0 1 26.5 10.25c.242 1.32.5 3.277.5 5.75c0 2.469-.258 4.43-.5 5.75a1.96 1.96 0 0 1-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.96 1.96 0 0 1 5.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.96 1.96 0 0 1 1.656-1.594C9.117 8.371 12.367 8 16 8m-3 2.281V21.72l1.5-.844l7-4L23 16l-1.5-.875l-7-4zm2 3.438L18.969 16L15 18.281z"></svg:path>`,
})
export class LaYoutubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laYoutubeSquareIcon],svg[la-youtube-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9 4.08s-4.39 0-5.47.29c-.6.17-1.08.64-1.24 1.25C9 13.71 9 16.01 9 16.01s0 2.3.29 3.4c.16.6.64 1.06 1.24 1.22c1.08.29 5.47.29 5.47.29s4.39 0 5.47-.29c.6-.17 1.08-.62 1.24-1.23c.29-1.09.29-3.39.29-3.39s0-2.29-.29-3.39c-.16-.61-.64-1.08-1.24-1.25c-1.08-.29-5.47-.29-5.47-.29m-2 2.076l5 2.856l-5 2.842z"></svg:path>`,
})
export class LaYoutubeSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laZhihuIcon],svg[la-zhihu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.629 8.988c-.366.042-.93.211-.93.211s-8.2.9-11.6 1c.1.5.401.9.801 1c.7.1 1.2 0 2.5 0c1.2-.1 2.2-.1 2.8-.1V16H18s.1 1.2 1.2 1.2h5v3.4c0 .7-.5 1.1-1.2 1.1s-1.2-.1-2-.1c.1.2.2.7.9 1.1c.5.2.8.3 1.3.3c1.5 0 2.3-.9 2.3-2.3v-3.5h6.1c.4 0 .4-1.2.3-1.1h-6.5v-4.9c.2 0 .6-.1 1.1-.1c2.1-.1 3.5-.4 4.4-.4c0 0 .6-1.4 0-1.7c-.05-.025-.15-.026-.271-.012M3.3 9s-1.202 0-1.602 1.1c-.1.4-.799 2-1.699 3.8c.3 0 1.2-.1 1.8-1.1c.1-.3.4-.5.5-.9h1.5c0 .5-.1 3.6-.1 3.9H1.1C.5 15.8.3 17 .3 17h3.2c-.2 2.4-1.4 4.1-3.5 5.8c1 .3 2 0 2.6-.4c0 0 1.2-.9 1.8-3.3L6.9 22s.4-1.4-.1-2c-.4-.5-1.2-1.4-1.7-1.8l-.7.6c.2-.7.4-1.1.4-1.8H8s0-1.2-.4-1.2H4.9c.1-1.3.1-2.8.1-3.9h2.4s.1-1.1-.4-1.1H2.6c.2-.7.4-1.1.7-1.8M9 11v11h1.2l.4 1.3l2.1-1.3H15V11zm20.287 1.178a.73.73 0 0 0-.486.222L27 14.8l1 .7c1.1-1.3 2.3-2.9 2.3-2.9s-.507-.45-1.013-.422m-19.088.021h3.5v8.602H12.5l-1.4.898l-.3-.898h-.6zm9.93.149c-.422-.028-.93.252-.93.252s2.002 2.8 2.102 2.9l1-.7S21 13 20.5 12.5a.56.56 0 0 0-.371-.152"></svg:path>`,
})
export class LaZhihuIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAddressCardSolidIcon],svg[la-address-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h26V6zm2 2h22v16h-3.406c-.078-.137-.043-.324-.157-.438C23.06 23.184 22.523 23 22 23s-1.059.184-1.438.563c-.113.113-.078.3-.156.437h-8.812c-.078-.137-.043-.324-.156-.438c-.38-.378-.915-.562-1.438-.562s-1.059.184-1.438.563c-.113.113-.078.3-.156.437H5zm7 2c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 7 21h2a3 3 0 0 1 6 0h2a5.04 5.04 0 0 0-2.219-4.156C15.523 16.117 16 15.114 16 14c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m7 1v2h6v-2zm0 4v2h6v-2z"></svg:path>`,
})
export class LaAddressCardSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
