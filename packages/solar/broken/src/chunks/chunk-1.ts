import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHikingBrokenIcon],svg[solar-hiking-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22"></svg:path><svg:path fill="currentColor" d="m10.375 11.246l.747.074zm-.162 1.622l.747.074zm3.79-1.533l-.48.577zm.081.068l.48-.576zm3.832 0l-.48-.576zm1.564-.327a.75.75 0 0 0-.96-1.152zm-5.252 8.988l.747-.067zm-.575 2.002a.75.75 0 1 0 1.495-.133zm1.661-9.791l-.257.704zm1.372 0l.257.704zm-4.592-2.033l-.18.728zm.148.056l-.242.71zm1.24.627l.428-.615zm-1.665 5.21l.398-.636zm1.664 1.236l-.584.47zm.398.65l-.683.307zm-3.674-3.462l-.716.224zm.269.548l-.615.43zm.011-4.423l.683.311zm.824-.581l-.065-.747zm-1.68 1.068l-.162 1.622l1.492.15l.163-1.623zm3.894.74l.081.069l.96-1.153l-.08-.068zm4.873.069l1.084-.904l-.96-1.152l-1.084.903zm-4.915 8.15l.172 1.936l1.495-.133l-.173-1.936zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743zm3.832-1.153c-.649.54-.833.68-1.007.743l.514 1.41c.48-.176.898-.538 1.453-1zm-2.379 2.153a2.75 2.75 0 0 0 1.886 0l-.514-1.41a1.25 1.25 0 0 1-.858 0zm-3.143-2.01h.002q.002 0 0 0zl-.01-.003l-.026-.007a.6.6 0 0 1-.126-.053a.76.76 0 0 1-.305-.3a.75.75 0 0 1 .391-1.063a.7.7 0 0 0-.217.127a.753.753 0 0 0-.124 1.016a.76.76 0 0 0 .375.275l.128.046l.485-1.42l-.081-.028l.008.003a1 1 0 0 1 .082.043a.7.7 0 0 1 .148.118a.75.75 0 0 1-.229 1.204l-.043.018l.033-.013c.014-.007.058-.026.11-.06a.75.75 0 0 0 .34-.649a.75.75 0 0 0-.442-.664c-.04-.018-.074-.028-.082-.031l-.029-.008l-.018-.005l-.008-.002zm2.57-.21a8 8 0 0 0-.574-.45l-.857 1.23c.148.104.238.179.47.372zM12 11.007a5.3 5.3 0 0 1 1.053.533l.857-1.231a6.8 6.8 0 0 0-1.425-.722zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.997-.869-1.85-1.402zm3.555 3.226c-.089-1.002-.14-1.68-.412-2.285l-1.367.616c.143.32.187.695.285 1.802zm-2.078-2.155q.18.224.299.486l1.367-.616a3.8 3.8 0 0 0-.498-.81zm-3.43-5.05c-.08.802-.156 1.42.022 1.991l1.432-.448c-.066-.208-.055-.458.039-1.393zm2.748 2.707c-.797-.497-1.001-.642-1.126-.821l-1.23.858c.342.49.878.809 1.56 1.235zm-2.726-.716q.127.405.37.754l1.23-.86a1.3 1.3 0 0 1-.168-.342zm1.633-3.463c.014-.146.022-.217.031-.27c.007-.039.012-.048.015-.055l-1.365-.623c-.13.286-.15.557-.174.8zm1.152-1.806q-.3-.077-.524-.122a1.8 1.8 0 0 0-.506-.036l.13 1.494c-.02.002-.005-.003.093.015c.1.02.232.052.447.105zm-1.106 1.481c-.007.016-.007.01.013-.013a.5.5 0 0 1 .175-.124c.028-.011.034-.01.018-.008l-.13-1.494a1.8 1.8 0 0 0-.846.33c-.22.155-.459.388-.595.686z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V8m0 14v-3M8 10l-1.672.557A1.94 1.94 0 0 0 5 12.4a.97.97 0 0 0 .537.868L8 14.5"></svg:path></svg:g>`,
})
export class SolarHikingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticBrokenIcon],svg[solar-hiking-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"></svg:path><svg:path fill="currentColor" d="m10.21 11.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 10.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 14V7m0 14v-3"></svg:path></svg:g>`,
})
export class SolarHikingMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundBrokenIcon],svg[solar-hiking-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"></svg:path><svg:path fill="currentColor" d="m10.21 12.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 11.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V8m0 14v-3M9 10l-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15"></svg:path></svg:g>`,
})
export class SolarHikingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2BrokenIcon],svg[solar-history-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10c1.821 0 3.53-.487 5-1.338M12 2c5.523 0 10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path><svg:path stroke-dasharray=".5 3.5" d="M17 20.662A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path></svg:g>`,
})
export class SolarHistory2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3BrokenIcon],svg[solar-history-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray=".5 3.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4"></svg:path><svg:path d="M22 12c0-1.821-.487-3.53-1.338-5M12 2c1.821 0 3.53.487 5 1.338"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path></svg:g>`,
})
export class SolarHistory3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryBrokenIcon],svg[solar-history-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l2.5 2.5"></svg:path><svg:path fill="currentColor" d="m5.604 5.604l-.53-.53zM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747zm2.542.762a.75.75 0 1 0 .007-1.5zM5.075 4.321a.75.75 0 0 0-1.5.008zM3.75 12a.75.75 0 0 0-1.5 0zm13.125 8.445a.75.75 0 1 0-.75-1.298zm2.272-4.32a.75.75 0 1 0 1.298.75zM5.14 5.07a.75.75 0 1 0 1.056 1.066zm13.722.067c-3.82-3.82-9.993-3.859-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.065zM5.074 5.074L3.808 6.34l1.06 1.06l1.267-1.265zm-.74 2.547l2.546.012l.007-1.5l-2.545-.012zm.754-.754L5.075 4.32l-1.5.008l.013 2.545zM12 3.75A8.25 8.25 0 0 1 20.25 12h1.5A9.75 9.75 0 0 0 12 2.25zm0 16.5A8.25 8.25 0 0 1 3.75 12h-1.5A9.75 9.75 0 0 0 12 21.75zm4.125-1.103A8.2 8.2 0 0 1 12 20.25v1.5c1.775 0 3.44-.475 4.875-1.305zM20.25 12a8.2 8.2 0 0 1-1.103 4.125l1.298.75A9.7 9.7 0 0 0 21.75 12zM6.196 6.137A8.22 8.22 0 0 1 12 3.75v-1.5a9.72 9.72 0 0 0-6.86 2.821z"></svg:path></svg:g>`,
})
export class SolarHistoryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2BrokenIcon],svg[solar-home-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15v3m10-5.796v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path>`,
})
export class SolarHome2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleBrokenIcon],svg[solar-home-add-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 13h-3m0 0H9m3 0v-3m0 3v3m9.636-3.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path>`,
})
export class SolarHomeAddAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddBrokenIcon],svg[solar-home-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 14h-3m0 0H9m3 0v-3m0 3v3m10-4.796v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path>`,
})
export class SolarHomeAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2BrokenIcon],svg[solar-home-angle-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15v3m9.636-5.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path>`,
})
export class SolarHomeAngle2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleBrokenIcon],svg[solar-home-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 18H9m12.636-5.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path>`,
})
export class SolarHomeAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeBrokenIcon],svg[solar-home-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m0-11l4.063-3.25M22 11l-8.126-6.5a3 3 0 0 0-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5m16 0v4m0 8.5v-4.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44M9 22v-5"></svg:path><svg:path d="M14 9.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class SolarHomeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleBrokenIcon],svg[solar-home-smile-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path></svg:g>`,
})
export class SolarHomeSmileAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileBrokenIcon],svg[solar-home-smile-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path></svg:g>`,
})
export class SolarHomeSmileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleBrokenIcon],svg[solar-home-wifi-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path><svg:path d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiBrokenIcon],svg[solar-home-wifi-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path><svg:path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path></svg:g>`,
})
export class SolarHomeWifiBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalBrokenIcon],svg[solar-hospital-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9V5m2 2h-4"></svg:path><svg:path fill="currentColor" d="M20.25 8.5a.75.75 0 0 0 1.5 0zm-.139-3.163l-.416.624zm.552.552l-.624.417zM21.75 12.5a.75.75 0 0 0-1.5 0zM17.5 5.75c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417c-.461-.047-1.032-.046-1.719-.046zm4.25 2.75c0-.687 0-1.258-.046-1.719c-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627c.037.367.038.85.038 1.567zm-2.055-2.54q.206.14.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759zm.555 6.54V22h1.5v-9.5zM3.889 5.337l.417.624zm-.552.552l.624.417zM3.75 17a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM6.5 4.25c-.687 0-1.258 0-1.719.046c-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM3.75 8.5c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.787a2.8 2.8 0 0 0-.759.76l1.248.833a1.3 1.3 0 0 1 .345-.345zM2.25 17v5h1.5v-5zm0-8.5V13h1.5V8.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h.5m3.5 0h-1.5"></svg:path></svg:g>`,
})
export class SolarHospitalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassBrokenIcon],svg[solar-hourglass-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.23-.703-.131-1.468-1.013-2.519M12 12l2.958 2.929M12 12l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311C4.838 4.184 5.199 4.95 6.08 6M12 12L9.042 9.071"></svg:path>`,
})
export class SolarHourglassBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineBrokenIcon],svg[solar-hourglass-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.23-.703-.131-1.468-1.013-2.519M12 12l2.958 2.929M12 12l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311C4.838 4.184 5.199 4.95 6.08 6M12 12L9.042 9.071M10 5.5h4m-4 13h4"></svg:path>`,
})
export class SolarHourglassLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportBrokenIcon],svg[solar-import-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"></svg:path></svg:g>`,
})
export class SolarImportBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveBrokenIcon],svg[solar-inbox-archive-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 15h2.301c.809 0 1.213 0 1.576.148q.049.02.098.043c.354.167.628.464 1.175 1.059l.035.038c.513.557.769.835 1.096 1q.092.046.188.082c.343.13.72.13 1.477.13c.715 0 1.073 0 1.4-.117q.091-.033.18-.075c.314-.148.567-.401 1.073-.907l.23-.23c.577-.577.866-.866 1.234-1.019S16.84 15 17.657 15H20"></svg:path><svg:path d="M5 15v-1.5A1.5 1.5 0 0 1 6.5 12h8.25m2.75 0a1.5 1.5 0 0 1 1.5 1.5V15"></svg:path><svg:path d="M5 14v-3.5A1.5 1.5 0 0 1 6.5 9H10m9 5v-3.5A1.5 1.5 0 0 0 17.5 9H14"></svg:path><svg:path d="M5 11V7.5A1.5 1.5 0 0 1 6.5 6M19 11V7.5A1.5 1.5 0 0 0 17.5 6H9.25"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInboxArchiveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxBrokenIcon],svg[solar-inbox-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInboxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInBrokenIcon],svg[solar-inbox-in-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 2v8m0 0l3-3m-3 3L9 7"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127m10 0c1.625.16 2.72.521 3.535 1.338c.974.973 1.3 2.342 1.41 4.535"></svg:path></svg:g>`,
})
export class SolarInboxInBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineBrokenIcon],svg[solar-inbox-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInboxLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutBrokenIcon],svg[solar-inbox-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 10V2m0 0l3 3m-3-3L9 5"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127m10 0c1.625.16 2.72.521 3.535 1.338c.974.973 1.3 2.342 1.41 4.535"></svg:path></svg:g>`,
})
export class SolarInboxOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadBrokenIcon],svg[solar-inbox-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path stroke-linecap="round" d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12q.001-1.079-.005-2M14 2.005Q13.079 2 12 2C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path></svg:g>`,
})
export class SolarInboxUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoBrokenIcon],svg[solar-incognito-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 11h12m8 0h-4M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91c.76-.593 1.79-.632 3.754-.635m10 7l-.614-2.455c-.546-2.183-.818-3.274-1.632-3.91c-.76-.593-1.79-.632-3.754-.635"></svg:path><svg:path d="M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="m10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33"></svg:path></svg:g>`,
})
export class SolarIncognitoBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallBrokenIcon],svg[solar-incoming-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarIncomingCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedBrokenIcon],svg[solar-incoming-call-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityBrokenIcon],svg[solar-infinity-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8a5 5 0 0 0-6 8m10 0a5 5 0 0 0 6-8M7 17c2.761 0 3.5-2 5-5s2.239-5 5-5"></svg:path>`,
})
export class SolarInfinityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleBrokenIcon],svg[solar-info-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarInfoCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareBrokenIcon],svg[solar-info-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInfoSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneBrokenIcon],svg[solar-iphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5 9H9"></svg:path><svg:path d="m16.748 2.378l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"></svg:path></svg:g>`,
})
export class SolarIphoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2BrokenIcon],svg[solar-jar-of-pills-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 2 5.034 2 5.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C15.199 5 14.966 5 14.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C4 4.199 4 3.966 4 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 18h8m0 4H6.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 2 17.552V17m16-4.5v-1.592A4 4 0 0 0 16.517 7.8L14.16 5.891c-.545-.441-.818-.662-1.142-.776C12.694 5 12.344 5 11.643 5h-3.24c-.695 0-1.042 0-1.363.113c-.322.112-.593.33-1.136.764L3.501 7.799A4 4 0 0 0 2 10.922V13m8-1v4m-2-2h4"></svg:path><svg:path d="M14.773 16.773s.992.21 2.118 1.336s1.336 2.118 1.336 2.118m1.037-4.49c.954.953.985 2.469.069 3.385l-2.211 2.21c-.916.917-2.432.886-3.386-.068s-.985-2.47-.069-3.386l2.211-2.21c.916-.917 2.432-.886 3.386.068Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 10h3.75m11.25 0H10"></svg:path></svg:g>`,
})
export class SolarJarOfPills2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsBrokenIcon],svg[solar-jar-of-pills-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M4.5 18h15m-15-8h3.75m11.25 0H12m8 .908A4 4 0 0 0 18.517 7.8L16.16 5.891c-.545-.441-.818-.662-1.142-.776C14.694 5 14.344 5 13.643 5h-3.24c-.695 0-1.042 0-1.363.113c-.322.112-.593.33-1.136.764L5.501 7.799A4 4 0 0 0 4 10.922V12.5M20 15v2.565a4 4 0 0 1-.912 2.543l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 4 17.552V16.5m8-4.5v4m-2-2h4"></svg:path></svg:g>`,
})
export class SolarJarOfPillsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyBrokenIcon],svg[solar-key-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.067 5c.592.958.933 2.086.933 3.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.735.732-.147.732.147 1.317c0 0 .735 1.025 0 2.05c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294c.819 0 1.601.155 2.319.437"></svg:path><svg:path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.205-2.195a2.2 2.2 0 0 1 2.205-2.196a2.2 2.2 0 0 1 2.204 2.196Z"></svg:path></svg:g>`,
})
export class SolarKeyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2BrokenIcon],svg[solar-key-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21.064 12.5A7 7 0 1 0 18 15.326"></svg:path><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"></svg:path></svg:g>`,
})
export class SolarKeyMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticBrokenIcon],svg[solar-key-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.977 5.023l.53-.53zm0 9.767l.53.53zM7.146 12.668l-.53-.53zM3.433 16.38l.53.53zm4.187 4.187l-.53-.53zm3.712-3.713l-.53-.53zm-8.323.736l-.745.083zm.232 2.089l-.745.083zm1.08 1.08l-.083.745zm2.089.232l.082-.745zm-2.886-.723l.53-.53zm.208.208l-.53.53zm3.672-8.845l-.726.187zm4.965 4.965l-.187.726zm-4.73.467a.75.75 0 1 0-1.055 1.066zm12.373-8.857a.75.75 0 1 0 1.442-.412zm1.38 4.02a.75.75 0 0 0-1.43-.453zm-8.276-1.342a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0zm0-1.768a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0zm3.563-3.563a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0zM6.615 12.138L2.903 15.85l1.06 1.06l3.714-3.71zm1.535 8.959l1.24-1.24l-1.06-1.061l-1.24 1.24zm1.24-1.24l2.472-2.472l-1.06-1.061l-2.472 2.472zm-7.126-2.184l.232 2.089l1.49-.166l-.232-2.088zm1.974 3.831l2.089.232l.165-1.49l-2.088-.232zm-1.244-.706l.208.208l1.06-1.06l-.208-.209zm1.41-.784a.24.24 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.24.24 0 0 1-.067-.142zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64zM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597zm5.228-4.405A6.15 6.15 0 0 1 9.74 5.553l-1.06-1.06a7.65 7.65 0 0 0-2.002 7.325zm10.316 2.815a6.15 6.15 0 0 1-5.892 1.61l-.373 1.452a7.65 7.65 0 0 0 7.325-2.001zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455zM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32zm1.711 5.594l-1.749-1.73l-1.054 1.066l1.749 1.73zm9.06-13.24a6.1 6.1 0 0 1 1.565 2.653l1.442-.412a7.6 7.6 0 0 0-1.947-3.301zm1.515 6.22a6.1 6.1 0 0 1-1.515 2.487l1.06 1.06a7.6 7.6 0 0 0 1.885-3.093z"></svg:path>`,
})
export class SolarKeyMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2BrokenIcon],svg[solar-key-minimalistic-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.314 3.686l.53-.53zm0 8.14l.53.53zm-9.86-1.769l-.53-.53zM7.362 13.15l.53.53zm3.489 3.489l-.53-.53zm3.093-3.094l-.53-.53zm-6.935.614l-.746.082zm.193 1.74l-.745.083zm.9.9l-.083.745zm1.74.193l.083-.745zm-2.404-.602l.53-.53zm.173.173l-.53.53zm3.06-7.37l-.726.186zm4.137 4.137l-.186.726zm-3.854.3a.75.75 0 0 0-1.055 1.067zm4.566-5.148a.917.917 0 0 1 0-1.297l-1.061-1.06a2.417 2.417 0 0 0 0 3.417zm1.296 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.418zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0zm1.909-1.909a5.006 5.006 0 0 1 0 7.079l1.06 1.06a6.506 6.506 0 0 0 0-9.2zm1.06-1.06a6.506 6.506 0 0 0-9.2 0l1.061 1.06a5.006 5.006 0 0 1 7.079 0zm-10.92 6.37L6.831 12.62l1.06 1.06l3.094-3.093zm1.456 7.643l1.034-1.034l-1.061-1.06l-1.034 1.033zm1.034-1.034l2.06-2.06l-1.061-1.06l-2.06 2.06zm-6.152-1.894l.194 1.741l1.49-.166l-.193-1.74zm1.756 3.303l1.74.194l.166-1.491l-1.74-.193zm-1.112-.624l.174.174l1.06-1.061l-.173-.174zm1.278-.866a.07.07 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.07.07 0 0 1-.02-.044zm3.863.126a.48.48 0 0 1-.395.139l-.165 1.49a1.98 1.98 0 0 0 1.621-.568zM6.831 12.62a1.98 1.98 0 0 0-.569 1.622l1.491-.166a.48.48 0 0 1 .139-.395zm4.566-3.614a5 5 0 0 1 1.308-4.79l-1.06-1.06a6.5 6.5 0 0 0-1.701 6.223zm8.387 2.289a5 5 0 0 1-4.79 1.308l-.373 1.453a6.5 6.5 0 0 0 6.224-1.7zm-5.31 2.78a.1.1 0 0 1 .044-.022a.2.2 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412zm-3.489-3.488c.438-.437.547-1.054.412-1.58l-1.453.372q.014.061.003.103a.1.1 0 0 1-.023.045zm1.426 4.485l-1.458-1.442l-1.055 1.067l1.458 1.441z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 11.99c0 4.719 0 7.078 1.466 8.544S7.29 22 12.01 22s7.078 0 8.544-1.466c1.115-1.115 1.382-2.747 1.446-5.541M9.007 2c-2.794.064-4.426.33-5.541 1.446c-.977.977-1.303 2.35-1.412 4.554"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3BrokenIcon],svg[solar-key-minimalistic-square-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M11 12h4.5m0 0H17a1 1 0 0 1 1 1v1m-2.5-2v1.5"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareBrokenIcon],svg[solar-key-minimalistic-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.651 7.349l.53-.53zm0 6.511l.53.53zm-7.887-1.414l-.53-.53zM6.289 14.92l.53.53zm2.79 2.791l-.53-.53zm2.476-2.475l-.53-.53zm-5.549.49l-.745.084zm.155 1.393l-.746.083zm.72.72l-.083.746zm1.392.155l.083-.745zm-1.924-.482l.53-.53zm.14.139l-.531.53zm2.447-5.897l-.726.187zm3.31 3.31l-.187.726zm-2.978.134a.75.75 0 1 0-1.055 1.066zm3.653-4.119a.583.583 0 0 1 0-.825l-1.06-1.06a2.083 2.083 0 0 0 0 2.946zm.825 0a.583.583 0 0 1-.825 0l-1.06 1.06a2.083 2.083 0 0 0 2.945 0zm0-.825a.583.583 0 0 1 0 .825l1.06 1.06a2.083 2.083 0 0 0 0-2.945zm1.06-1.06a2.083 2.083 0 0 0-2.946 0l1.06 1.06a.583.583 0 0 1 .826 0zm1.315-1.315a3.854 3.854 0 0 1 0 5.45l1.06 1.062a5.354 5.354 0 0 0 0-7.573zm1.06-1.06a5.354 5.354 0 0 0-7.572 0l1.061 1.06a3.854 3.854 0 0 1 5.451 0zm-8.948 5.096L5.76 14.39l1.06 1.06l2.475-2.474zm1.377 6.326l.827-.827l-1.06-1.06l-.828.827zm.827-.827l1.648-1.648l-1.06-1.06l-1.649 1.648zM5.261 15.81l.154 1.392l1.491-.166l-.155-1.392zm1.537 2.775l1.392.154l.166-1.49l-1.392-.155zm-.979-.543l.139.139l1.06-1.06l-.138-.14zm1.144-.948q.032.003.056.026l-1.061 1.06c.226.227.522.37.84.405zm-1.548.108c.036.318.178.614.404.84l1.06-1.06a.1.1 0 0 1 .027.055zm3.134-.021a.24.24 0 0 1-.193.067L8.19 18.74a1.74 1.74 0 0 0 1.42-.498zM5.76 14.39a1.74 1.74 0 0 0-.498 1.42l1.49-.166a.24.24 0 0 1 .068-.193zm3.904-2.822a3.85 3.85 0 0 1 1.007-3.69l-1.06-1.06a5.35 5.35 0 0 0-1.4 5.123zm6.458 1.762a3.85 3.85 0 0 1-3.688 1.007l-.374 1.453a5.35 5.35 0 0 0 5.123-1.4zm-4.036 2.436a.1.1 0 0 1-.036.023l.01.001l.373-1.453a1.47 1.47 0 0 0-1.408.369zm-2.791-2.79a1.47 1.47 0 0 0 .369-1.408l-1.453.373l.001.01l.006-.014l.016-.022zm1.14 3.375l-1.166-1.153l-1.055 1.066l1.166 1.153z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2BrokenIcon],svg[solar-key-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17.26 11.44c2.618 0 4.74-2.113 4.74-4.72S19.878 2 17.26 2c-2.617 0-4.739 2.113-4.739 4.72c0 1.208.551 2.086.551 2.086l-5.731 5.708c-.257.256-.617.922 0 1.537l.661.658c.257.22.904.527 1.433 0l.771-.768c.772.768 1.654.329 1.984-.11c.552-.768-.11-1.537-.11-1.537l.22-.22c1.059 1.054 1.985.44 2.315 0c.551-.768 0-1.536 0-1.536c-.22-.44-.661-.44-.11-.988l.661-.659c.53.44 1.617.55 2.095.55Z"></svg:path><svg:path stroke-linecap="round" d="M2 11.99c0 4.719 0 7.078 1.466 8.544S7.29 22 12.01 22s7.078 0 8.544-1.466c1.115-1.115 1.382-2.747 1.446-5.541M9.007 2c-2.794.064-4.426.33-5.541 1.446c-.977.977-1.303 2.35-1.412 4.554"></svg:path></svg:g>`,
})
export class SolarKeySquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareBrokenIcon],svg[solar-key-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.208 13.552A3.784 3.784 0 0 0 18 9.776A3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088c.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0c.441-.615 0-1.23 0-1.23c-.176-.351-.529-.351-.088-.79l.53-.527c.422.351 1.292.44 1.674.44Z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarKeySquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardBrokenIcon],svg[solar-keyboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 5c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h4M7 16h10"></svg:path></svg:g>`,
})
export class SolarKeyboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterBrokenIcon],svg[solar-kick-scooter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75zm5.238-5.176v.75a.75.75 0 0 0 .74-.875zm-1.744-5.83a.75.75 0 1 0 1.48-.25zM14.381 3.25a.75.75 0 1 0 0 1.5zm3.782 1.59l-.622.419zm-.806-.675l.303-.686zm2.67 6.21a.75.75 0 0 0-1.48.25zM10 18.397a.75.75 0 0 0 0-1.5zm3-1.5a.75.75 0 1 0 0 1.5zm8.25.75c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.131-1.38 3.131-3.103zm-1.631 1.603c-.91 0-1.63-.726-1.63-1.603h-1.5c0 1.722 1.41 3.103 3.13 3.103zm-1.63-1.603c0-.877.72-1.603 1.63-1.603v-1.5c-1.72 0-3.13 1.381-3.13 3.103zm1.63-1.603c.91 0 1.631.726 1.631 1.603h1.5c0-1.722-1.41-3.103-3.131-3.103zm-4.488 1.603c0-2.436 2-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926zm.478-14.397H14.38v1.5h1.228zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.7 2.7 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39c.058.232.11.534.186.992zM15.609 4.75c.47 0 .78 0 1.022.019c.232.017.345.048.422.082l.607-1.372a2.7 2.7 0 0 0-.917-.206c-.31-.023-.687-.023-1.134-.023zm3.176-.329a2.65 2.65 0 0 0-1.125-.942l-.607 1.372c.2.088.368.23.488.408zM6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.38 3.13-3.103zM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103zm-1.63-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.381-3.131 3.103zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103zm15.978-3.698l-.333-1.97l-1.479.249l.332 1.97zM10 16.897H6.762v1.5H10zm4.381 0H13v1.5h1.381z"></svg:path>`,
})
export class SolarKickScooterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleBrokenIcon],svg[solar-ladle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 5.684a3.684 3.684 0 0 1 7.368 0M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0V9.158"></svg:path><svg:path d="M16 12c-3.054 0-6.5 1.12-6.5 2.5S12.946 17 16 17s6-1.12 6-2.5c0-.72-.8-1.369-2-1.825"></svg:path></svg:g>`,
})
export class SolarLadleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampBrokenIcon],svg[solar-lamp-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 22h6m-3 0v-7m0-13c2.423 0 3.635 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.241 4.783.49 5.903a3 3 0 0 1-.247.319C18.47 15 16.824 15 13.529 15h-3.058c-3.295 0-4.942 0-5.837-1.01q-.135-.15-.247-.318c-.751-1.12-.337-2.714.49-5.903l.085-.324c.608-2.346.913-3.519 1.699-4.294a4 4 0 0 1 .757-.585q.271-.163.582-.268M17.5 15v2"></svg:path>`,
})
export class SolarLampBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2BrokenIcon],svg[solar-laptop-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4H14M3.5 15v-5c0-2.828 0-4.243.879-5.121C5.257 4 6.672 4 9.5 4h.5m2 16H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3"></svg:path>`,
})
export class SolarLaptop2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3BrokenIcon],svg[solar-laptop-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 2c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414S5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586S20.5 12.886 20.5 11V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2H14m-2 20H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3"></svg:path>`,
})
export class SolarLaptop3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopBrokenIcon],svg[solar-laptop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.647 15.536V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H12m7.647 11.536l1.744 1.8l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092l1.744-1.8m15.294 0h-2.611m-12.683 0V8c0-1.886 0-2.828.586-3.414S6.467 4 8.353 4m-4 11.536H13M9.5 18.5h5"></svg:path><svg:path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path></svg:g>`,
})
export class SolarLaptopBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticBrokenIcon],svg[solar-laptop-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 10v4c0 1.886 0 2.828.586 3.414S5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586S21 15.886 21 14V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9c-2.828 0-4.243 0-5.121.879c-.49.49-.707 1.146-.803 2.121M22 21h-6M2 21h10m3-6H9"></svg:path>`,
})
export class SolarLaptopMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersBrokenIcon],svg[solar-layers-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4.979 6.315C2.993 7.109 2 7.506 2 8s.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4c-.954 0-1.764.237-3 .712"></svg:path><svg:path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10"></svg:path><svg:path stroke-linecap="round" d="M19.021 17.685C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20c.954 0 1.764-.237 3-.712"></svg:path></svg:g>`,
})
export class SolarLayersBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticBrokenIcon],svg[solar-layers-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m0 4s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20c.954 0 1.764-.237 3-.712m4.021-1.603C21.007 16.891 22 16 22 16M4.979 6.315C2.993 7.109 2 7.506 2 8s.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4c-.954 0-1.764.237-3 .712"></svg:path>`,
})
export class SolarLayersMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafBrokenIcon],svg[solar-leaf-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 9l4-4m-4 9.5l3-3M18.5 8l-1.625 1.625M12 19.5l1.875-1.875M19.5 12l-3.75 3.75M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-1.586.323-3.266.917-4.857M12 22V2m0 0c-.5 0-.999.109-1.463.326c-1.601.748-2.97 2.036-4.037 3.6"></svg:path>`,
})
export class SolarLeafBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterBrokenIcon],svg[solar-letter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="m18 8l-2.159 1.8c-1.836 1.53-2.755 2.295-3.841 2.295c-.65 0-1.239-.274-2-.82M6 8l.9.75l.9.75"></svg:path></svg:g>`,
})
export class SolarLetterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedBrokenIcon],svg[solar-letter-opened-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102m12 0c1.3.127 2.175.416 2.828 1.07c.654.653.943 1.528 1.07 2.828M10 6h4m-3 3h2"></svg:path><svg:path d="M14 2.002c1.707.014 2.647.11 3.268.73c.732.732.732 1.91.732 4.267v2.064c0 .46 0 .69-.094.892c-.095.202-.272.35-.626.644l-.72.6M10 2.002c-1.707.014-2.647.11-3.268.73C6 3.464 6 4.642 6 6.999v2.064c0 .46 0 .69.094.892c.095.202.272.35.626.644l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295c.65 0 1.239-.273 2-.82"></svg:path></svg:g>`,
})
export class SolarLetterOpenedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadBrokenIcon],svg[solar-letter-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.946.018-1.273 0-2m-9-6h-3C6.229 4 4.343 4 3.172 5.172C2.518 5.825 2.229 6.7 2.102 8"></svg:path><svg:path stroke-linecap="round" d="m6 8l1.664 1.387m8.177.412c-1.836 1.53-2.755 2.296-3.841 2.296c-.65 0-1.239-.274-2-.82"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarLetterUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryBrokenIcon],svg[solar-library-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke-linecap="round" d="M15 18H9m12.194-1.207c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path></svg:g>`,
})
export class SolarLibraryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltBrokenIcon],svg[solar-lightbulb-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.48 7.48 0 0 0 19.5 9.5a7.5 7.5 0 0 0-.427-2.5M14.5 19.5c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 0c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.5 7.5 0 0 1 15.744 3"></svg:path><svg:path stroke-linejoin="round" d="m12.786 8.5l-2.143 3h3l-2.143 3"></svg:path></svg:g>`,
})
export class SolarLightbulbBoltBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBrokenIcon],svg[solar-lightbulb-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0"></svg:path><svg:path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.48 7.48 0 0 0 19.5 9.5a7.5 7.5 0 0 0-.427-2.5M14.5 19.5c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 0c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.5 7.5 0 0 1 15.744 3"></svg:path></svg:g>`,
})
export class SolarLightbulbBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticBrokenIcon],svg[solar-lightbulb-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19.5h4M10.667 22h2.666M15 2.602A7.7 7.7 0 0 0 12 2C8.134 2 5 4.807 5 8.218v.084c.009 1.996.87 3.917 2.41 5.379l1.105 1.039c.31.291.485.698.485 1.123C9 16.482 9.518 17 10.157 17h3.686c.639 0 1.157-.518 1.157-1.157c0-.425.176-.832.485-1.123l1.104-1.04c1.542-1.461 2.402-3.382 2.41-5.378L19 8.218c0-.78-.164-1.528-.462-2.218"></svg:path>`,
})
export class SolarLightbulbMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningBrokenIcon],svg[solar-lightning-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17.94 17.636c-.078.769-.251 1.286-.643 1.672C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v1.182M12 20v2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l-1.5 2h3L12 16"></svg:path><svg:path stroke-linecap="round" d="M11 5h2"></svg:path><svg:path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8"></svg:path></svg:g>`,
})
export class SolarLightningBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeBrokenIcon],svg[solar-like-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zM3.971 21.471l-.748.064zM3 10.234l.747-.064a.75.75 0 0 0-1.497.064zm17.236 1.823l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.589-1.662zm-.863.313a.52.52 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zM4.719 21.406L3.747 10.17l-1.494.129l.971 11.236zm-.969.107V10.234h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zM14.735 5.343a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237zm9.105-12.105a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z"></svg:path>`,
})
export class SolarLikeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenIcon],svg[solar-link-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305s1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062"></svg:path><svg:path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305s-1.37-4.1.303-5.78l2.424-2.433"></svg:path></svg:g>`,
})
export class SolarLinkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenBrokenIcon],svg[solar-link-broken-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 8l6 2M6 4l2 3m3-.437l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517M18.135 12l2.908-2.848c.59-.578.902-1.338.95-2.152M15 15.587L10.965 20c-1.392 1.524-3.876 1.277-5.548-.552c-1.67-1.828-1.897-4.546-.504-6.07L6.173 12"></svg:path>`,
})
export class SolarLinkBrokenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticBrokenIcon],svg[solar-link-broken-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0M16.974 15l2.202-2.059c1.168-1.092 1.775-2.51 1.821-3.941M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89m.941-7L7.5 5.205m-3.998.882L9.05 8.795"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleBrokenIcon],svg[solar-link-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 12a6 6 0 1 1-6-6"></svg:path><svg:path d="M10 12a6 6 0 0 1 6-6m0 12a6 6 0 0 0 5-9.318"></svg:path></svg:g>`,
})
export class SolarLinkCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2BrokenIcon],svg[solar-link-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72m4.325 4.325l4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 0 1 8.65 0m-.72 9.37l.72-.72A6.1 6.1 0 0 0 20.998 9"></svg:path>`,
})
export class SolarLinkMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticBrokenIcon],svg[solar-link-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 12h6m-6 6H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 6 6m-7 6h1a5.97 5.97 0 0 0 3.318-1"></svg:path>`,
})
export class SolarLinkMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleBrokenIcon],svg[solar-link-round-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m12.792 15.8l1.43-1.432a6.076 6.076 0 0 0 0-8.59a6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"></svg:path><svg:path d="M21.222 15.358A6.076 6.076 0 0 0 17.268 5m1.093 13.221a6.067 6.067 0 0 1-8.583 0a6.076 6.076 0 0 1 0-8.589l1.43-1.431"></svg:path></svg:g>`,
})
export class SolarLinkRoundAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundBrokenIcon],svg[solar-link-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M16 21a6 6 0 0 0 4.472-10M12 21a6 6 0 0 1 0-12h2"></svg:path>`,
})
export class SolarLinkRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareBrokenIcon],svg[solar-link-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6s4.243 0 5.121.879C14 7.757 14 9.172 14 12"></svg:path><svg:path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18s4.243 0 5.121-.879c.3-.3.498-.662.628-1.121M22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6"></svg:path></svg:g>`,
})
export class SolarLinkSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownBrokenIcon],svg[solar-list-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"></svg:path><svg:path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticBrokenIcon],svg[solar-list-arrow-down-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 16H3m9-5H3"></svg:path><svg:path stroke-linejoin="round" d="m15 14.5l2.5 2.5m0 0l2.5-2.5M17.5 17V9"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpBrokenIcon],svg[solar-list-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 14H3m8 4H3"></svg:path><svg:path stroke-linejoin="round" d="M20 16.5L17.5 14m0 0L15 16.5m2.5-2.5v6"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticBrokenIcon],svg[solar-list-arrow-up-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 11H3m9 5H3"></svg:path><svg:path stroke-linejoin="round" d="M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8"></svg:path><svg:path d="M20 6H9.5M3 6h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowUpMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListBrokenIcon],svg[solar-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m11 5H4m5 5H4"></svg:path>`,
})
export class SolarListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckBrokenIcon],svg[solar-list-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 16l2.1 2.5l3.9-5"></svg:path><svg:path d="M10 14H3m7 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticBrokenIcon],svg[solar-list-check-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 11H3m7 5H3"></svg:path><svg:path stroke-linejoin="round" d="m14 13.5l2.1 2.5l3.9-5"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListCheckMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossBrokenIcon],svg[solar-list-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 18.5l5-5m0 5l-5-5"></svg:path><svg:path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticBrokenIcon],svg[solar-list-cross-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 6h10.5M20 6h-2.25M11 16H3"></svg:path><svg:path stroke-linejoin="round" d="m15 16l5-5m0 5l-5-5"></svg:path><svg:path d="M11 11H7m-4 0h1.2"></svg:path></svg:g>`,
})
export class SolarListCrossMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownBrokenIcon],svg[solar-list-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 14H3m7 4H3"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticBrokenIcon],svg[solar-list-down-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 16H3"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path><svg:path d="M20 11H3m0-5h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartBrokenIcon],svg[solar-list-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.52 18.34l-.444.605zm.98-4.51l-.526.534a.75.75 0 0 0 1.052 0zm.98 4.51l-.445-.603zm-.98.48v.75zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363c-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322c.552.636 1.232 1.19 1.77 1.587zm-2.215-2.7c0-.757.343-1.118.664-1.233c.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902c-1.035.373-1.655 1.392-1.655 2.643zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587c.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338c-.45.517-1.03.997-1.527 1.363zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643c-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56c.321.115.664.476.664 1.232zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4 4 0 0 1-.438-.302zm1.96-1.208a4 4 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 14H3m7 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartMinimalisticBrokenIcon],svg[solar-list-heart-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 16H3m6-5H3"></svg:path><svg:path fill="currentColor" d="m16.49 16.308l.445-.604zm1.01-6.202l-.536.525a.75.75 0 0 0 1.072 0zm1.01 6.202l.445.604zm-1.01.502v-.75zm-.565-1.105c-.644-.475-1.467-1.148-2.123-1.897c-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081c.758.865 1.679 1.613 2.362 2.116zm-3.185-3.99c0-1.108.495-1.691 1.003-1.882c.518-.193 1.342-.09 2.211.798l1.072-1.05c-1.156-1.18-2.581-1.611-3.808-1.153c-1.235.462-1.978 1.717-1.978 3.287zm5.205 5.197c.683-.503 1.604-1.25 2.362-2.116c.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093c-.655.749-1.48 1.422-2.123 1.896zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287c-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798c.51.19 1.004.774 1.004 1.882zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a5 5 0 0 1-.464-.32zm2.02-1.207a5 5 0 0 1-.464.32c-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 6H9.5M3 6h2.25"></svg:path></svg:g>`,
})
export class SolarListHeartMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpBrokenIcon],svg[solar-list-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 18l3.5-3l3.5 3"></svg:path><svg:path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpMinimalisticBrokenIcon],svg[solar-list-up-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 11H3m8 5H3"></svg:path><svg:path stroke-linejoin="round" d="m14 18l3.5-3l3.5 3"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListUpMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockBrokenIcon],svg[solar-lock-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 10V8q0-.511.083-1M18 10V8A6 6 0 0 0 7.5 4.031M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1"></svg:path>`,
})
export class SolarLockBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeBrokenIcon],svg[solar-lock-keyhole-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="16" r="2"></svg:circle><svg:path stroke-linecap="round" d="M6 10V8q0-.511.083-1M18 10V8A6 6 0 0 0 7.5 4.031M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1"></svg:path></svg:g>`,
})
export class SolarLockKeyholeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticBrokenIcon],svg[solar-lock-keyhole-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 14v4m-6-8V8q0-.511.083-1M18 10V8A6 6 0 0 0 7.5 4.031"></svg:path><svg:path d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1"></svg:path></svg:g>`,
})
export class SolarLockKeyholeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticUnlockedBrokenIcon],svg[solar-lock-keyhole-minimalistic-unlocked-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 14v4m-1 4H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8q0-.511.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"></svg:path>`,
})
export class SolarLockKeyholeMinimalisticUnlockedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeUnlockedBrokenIcon],svg[solar-lock-keyhole-unlocked-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="16" r="2"></svg:circle><svg:path stroke-linecap="round" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8q0-.511.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"></svg:path></svg:g>`,
})
export class SolarLockKeyholeUnlockedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordBrokenIcon],svg[solar-lock-password-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 10V8q0-.511.083-1M18 10V8A6 6 0 0 0 7.5 4.031M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1"></svg:path></svg:g>`,
})
export class SolarLockPasswordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordUnlockedBrokenIcon],svg[solar-lock-password-unlocked-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8q0-.511.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"></svg:path></svg:g>`,
})
export class SolarLockPasswordUnlockedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockUnlockedBrokenIcon],svg[solar-lock-unlocked-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8q0-.511.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"></svg:path>`,
})
export class SolarLockUnlockedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin2BrokenIcon],svg[solar-login-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"></svg:path><svg:path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121c-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121c.641.642 1.568.815 3.121.862"></svg:path></svg:g>`,
})
export class SolarLogin2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin3BrokenIcon],svg[solar-login-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 16c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862M8 8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121c-.768.769-1.946.865-4.121.877M3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5"></svg:path><svg:path stroke-linejoin="round" d="M6 12h9m0 0l-2.5 2.5M15 12l-2.5-2.5"></svg:path></svg:g>`,
})
export class SolarLogin3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLoginBrokenIcon],svg[solar-login-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 12a8 8 0 0 0-8-8m0 16a7.99 7.99 0 0 0 6.245-3"></svg:path><svg:path stroke-linejoin="round" d="M4 12h10m0 0l-3-3m3 3l-3 3"></svg:path></svg:g>`,
})
export class SolarLoginBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout2BrokenIcon],svg[solar-logout-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 12H2m0 0l3.5-3M2 12l3.5 3"></svg:path><svg:path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121c-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121c.641.642 1.568.815 3.121.862"></svg:path></svg:g>`,
})
export class SolarLogout2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout3BrokenIcon],svg[solar-logout-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 12H6m0 0l2 2m-2-2l2-2"></svg:path><svg:path d="M12 21.983c-1.553-.047-2.48-.22-3.121-.862c-.769-.768-.865-1.946-.877-4.121M16 21.998c2.175-.012 3.353-.108 4.121-.877C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879c-.769.768-.865 1.946-.877 4.121M3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5"></svg:path></svg:g>`,
})
export class SolarLogout3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogoutBrokenIcon],svg[solar-logout-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3"></svg:path><svg:path d="M4 12a8 8 0 0 1 8-8m0 16a7.99 7.99 0 0 1-6.245-3"></svg:path></svg:g>`,
})
export class SolarLogoutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick2BrokenIcon],svg[solar-magic-stick-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.923 8c.015.206.048.368.112.52c.136.32.397.559.919 1.037l.475.435c1.837 1.683 2.756 2.524 2.54 3.47c-.215.944-1.422 1.366-3.835 2.212l-.624.218c-.686.24-1.028.36-1.291.601c-.264.24-.417.575-.724 1.243l-.28.609c-1.079 2.351-1.619 3.527-2.565 3.646c-.947.118-1.673-.899-3.125-2.934l-.376-.526c-.413-.578-.62-.867-.917-1.038c-.298-.17-.654-.203-1.365-.268l-.648-.06c-2.505-.228-3.757-.343-4.126-1.214c-.37-.872.388-1.923 1.903-4.026l.392-.544c.43-.597.646-.896.725-1.242s.012-.7-.12-1.409l-.122-.645c-.468-2.493-.702-3.74.016-4.397s1.913-.29 4.302.445l.618.19c.678.21 1.018.314 1.365.27c.346-.043.661-.23 1.29-.602l.574-.34c2.215-1.311 3.322-1.967 4.136-1.502c.492.282.68.861.741 1.842"></svg:path><svg:path fill="currentColor" d="M17.53 16.47a.75.75 0 1 0-1.06 1.06zm2.94 5.06a.75.75 0 1 0 1.06-1.06zm-4-4l4 4l1.06-1.06l-4-4z"></svg:path></svg:g>`,
})
export class SolarMagicStick2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick3BrokenIcon],svg[solar-magic-stick-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-width="1.5" d="M13 8.922L7.922 3.845a2.883 2.883 0 1 0-4.077 4.077l12.233 12.234a2.884 2.884 0 0 0 4.078-4.078L17.078 13M6 10l4-4"></svg:path><svg:path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274zm3.867 6.823a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273zM5.133 15.307a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z"></svg:path></svg:g>`,
})
export class SolarMagicStick3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStickBrokenIcon],svg[solar-magic-stick-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.713 8c.024.158.06.29.12.413c.148.311.42.538.963.992l.495.413c1.911 1.598 2.867 2.397 2.688 3.342c-.18.946-1.374 1.412-3.765 2.344l-.618.241c-.68.265-1.02.398-1.274.647c-.255.249-.395.586-.677 1.261l-.257.614c-.992 2.375-1.488 3.563-2.434 3.717c-.946.155-1.715-.826-3.254-2.788l-.398-.507c-.438-.558-.656-.836-.962-.994c-.306-.157-.665-.176-1.382-.213l-.654-.033c-2.524-.13-3.786-.195-4.192-1.045c-.405-.85.314-1.922 1.753-4.067l.373-.555c.408-.61.613-.914.679-1.26c.065-.347-.016-.696-.177-1.393l-.147-.635C4.024 6.039 3.74 4.81 4.436 4.13c.695-.68 1.91-.362 4.338.275l.628.164c.69.181 1.035.271 1.382.215c.346-.057.655-.254 1.272-.648l.563-.36c2.173-1.387 3.26-2.08 4.095-1.65c.518.266.727.857.825 1.873"></svg:path><svg:path fill="currentColor" d="M19.53 18.47a.75.75 0 1 0-1.06 1.06zm.94 3.06a.75.75 0 1 0 1.06-1.06zm-2-2l2 2l1.06-1.06l-2-2z"></svg:path></svg:g>`,
})
export class SolarMagicStickBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetBrokenIcon],svg[solar-magnet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h2.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H17m0-5h-4a10 10 0 0 0-4 .832M17 2v5m0 0h-4a5 5 0 0 0-4 8m8 2h2.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H17m0-5h-4m4 0v5m0 0h-4C7.477 22 3 17.523 3 12c0-2.252.744-4.33 2-6.001"></svg:path>`,
})
export class SolarMagnetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetWaveBrokenIcon],svg[solar-magnet-wave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.444 3H16.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5H11c-1.488 0-2.891.36-4.127 1m7.571-1v4.5m0 0h-3.5A4.5 4.5 0 0 0 7.59 15m6.854 1.5H16.5A1.5 1.5 0 0 1 18 18v1.5a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5h-3.5m3.5 0V21m0 0H11A9 9 0 0 1 3.516 7"></svg:path><svg:path d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6m-2-9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarMagnetWaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBrokenIcon],svg[solar-magnifer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 18.5L22 22M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMagniferBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBugBrokenIcon],svg[solar-magnifer-bug-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5l1 .5m-7-.5l-1 .5m7-5.5l1-.5m-7 .5l-1-.5m11 10L22 22"></svg:path><svg:path d="M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path></svg:g>`,
})
export class SolarMagniferBugBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomInBrokenIcon],svg[solar-magnifer-zoom-in-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 18.5L22 22M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMagniferZoomInBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomOutBrokenIcon],svg[solar-magnifer-zoom-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 18.5L22 22M9 11.5h5M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMagniferZoomOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMailboxBrokenIcon],svg[solar-mailbox-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 22v-2m4 2v-2"></svg:path><svg:path fill="currentColor" d="M11 20v.75h.75V20zm-9.75-8a.75.75 0 0 0 1.5 0zm1.5 4a.75.75 0 0 0-1.5 0zM14 19.25a.75.75 0 0 0 0 1.5zm7.25-8a.75.75 0 0 0 1.5 0zm-3.75-6a.75.75 0 0 0 0 1.5zM22.75 15a.75.75 0 0 0-1.5 0zM7 5.25a.75.75 0 0 0 0 1.5zm2 14a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm-4-1.5H4.233v1.5H11zm-6.767 0c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355zM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5zM10.25 17v3h1.5v-3zm0-5.75V17h1.5v-5.75zm-7.5.75v-.75h-1.5V12zm0 5.395V16h-1.5v1.395zm17.043 1.855H14v1.5h5.793zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5zM21.25 15v2.425h1.5V15zM7 6.75h11v-1.5H7zm2 14h6v-1.5H9z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 16h3m8-6.116V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 0 1 1.755.156l.08.03c.554.214 1.16.254 1.737.115a.44.44 0 0 1 .542.427v2.221a.51.51 0 0 1-.393.499l-.066.016a3.2 3.2 0 0 1-1.9-.125a3.2 3.2 0 0 0-1.755-.156z"></svg:path></svg:g>`,
})
export class SolarMailboxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowDownBrokenIcon],svg[solar-map-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.597 14l-3.125 7.007c-.59 1.324-2.354 1.324-2.944 0L3.164 4.497c-.667-1.495.814-3.047 2.202-2.306l5.904 3.152c.459.245 1 .245 1.458 0l5.904-3.152c1.388-.74 2.87.81 2.202 2.306L18.716 9.25"></svg:path>`,
})
export class SolarMapArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowLeftBrokenIcon],svg[solar-map-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 7.403l-7.007 3.125c-1.324.59-1.324 2.354 0 2.944l16.51 7.363c1.495.667 3.047-.814 2.306-2.202l-3.152-5.904c-.245-.459-.245-1 0-1.458l3.152-5.904c.74-1.388-.81-2.87-2.306-2.202L14.75 5.284"></svg:path>`,
})
export class SolarMapArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowRightBrokenIcon],svg[solar-map-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14 16.597l7.007-3.125c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202l4.752-2.119"></svg:path>`,
})
export class SolarMapArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowSquareBrokenIcon],svg[solar-map-arrow-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path><svg:path d="m14.52 14.5l-1.097 2.862c-.319.83-1.483.857-1.731.04l-1.057-3.477a.84.84 0 0 0-.56-.56l-3.477-1.057c-.817-.248-.79-1.412.04-1.73l9.166-3.513a.863.863 0 0 1 1.13 1.131l-.966 2.524"></svg:path></svg:g>`,
})
export class SolarMapArrowSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowUpBrokenIcon],svg[solar-map-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7.403 10l3.125-7.007c.59-1.324 2.354-1.324 2.944 0l7.363 16.51c.667 1.495-.814 3.047-2.202 2.306l-5.904-3.152c-.459-.245-1-.245-1.458 0l-5.904 3.152c-1.388.74-2.87-.81-2.202-2.306l2.119-4.752"></svg:path>`,
})
export class SolarMapArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapBrokenIcon],svg[solar-map-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 7.162c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888l-1.165-.388c-1.367-.456-2.05-.684-2.739-.591c-.688.092-1.288.491-2.487 1.29l-1.382.922c-.936.624-1.404.936-1.93 1.06a3 3 0 0 1-.587.08c-.54.018-1.073-.16-2.14-.516c-1.398-.466-2.097-.699-2.629-.462a1.5 1.5 0 0 0-.497.358C3 6.5 3 7.236 3 8.71v4.065M21 11v4.29c0 1.474 0 2.211-.393 2.64a1.5 1.5 0 0 1-.497.36c-.532.236-1.231.003-2.629-.463c-1.067-.356-1.6-.534-2.14-.515a3 3 0 0 0-.588.078c-.525.125-.993.437-1.929 1.06l-1.382.922c-1.2.8-1.799 1.2-2.487 1.291c-.688.093-1.372-.135-2.739-.591l-1.165-.388c-.99-.33-1.485-.495-1.768-.888c-.268-.372-.282-.86-.283-1.796M15 3.5V7m0 10v-6m-6 9.5V17M9 7v6"></svg:path>`,
})
export class SolarMapBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointAddBrokenIcon],svg[solar-map-point-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 10h5M12 12.5v-5m-7 7.716c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path>`,
})
export class SolarMapPointAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointBrokenIcon],svg[solar-map-point-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12.5 7.041A3 3 0 1 0 14.959 9.5"></svg:path><svg:path d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path></svg:g>`,
})
export class SolarMapPointBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointFavouriteBrokenIcon],svg[solar-map-point-favourite-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path><svg:path fill="currentColor" d="m11.043 11.522l-.454.597zM12 7.716l-.528.533a.75.75 0 0 0 1.056 0zm1.41 4.403a.75.75 0 0 0-.907-1.195zM12 12v-.75zm1.909-2.437a.75.75 0 1 0 1.22.874zm-2.412 1.361c-.418-.317-.88-.714-1.23-1.133c-.366-.44-.517-.792-.517-1.034h-1.5c0 .779.432 1.475.866 1.995c.453.542 1.013 1.017 1.473 1.367zM9.75 8.757c0-.622.277-.886.5-.967c.237-.087.693-.066 1.222.459l1.056-1.065c-.821-.815-1.865-1.14-2.79-.804c-.94.341-1.488 1.267-1.488 2.377zm6 0c0-1.11-.548-2.036-1.488-2.377c-.925-.336-1.969-.011-2.79.804l1.056 1.065c.529-.525.985-.546 1.222-.46c.223.082.5.346.5.968zm-5.16 3.362c.364.277.783.631 1.41.631v-1.5c-.02 0-.03.002-.084-.028a4 4 0 0 1-.42-.298zm1.913-1.195a4 4 0 0 1-.419.298c-.053.03-.065.028-.084.028v1.5c.627 0 1.046-.354 1.41-.631zm2.626-.487c.329-.46.621-1.04.621-1.68h-1.5c0 .19-.094.46-.341.806z"></svg:path></svg:g>`,
})
export class SolarMapPointFavouriteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointHospitalBrokenIcon],svg[solar-map-point-hospital-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:path stroke-linecap="round" d="M10.5 10h3M12 11.5v-3m-7 6.716c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path></svg:g>`,
})
export class SolarMapPointHospitalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRemoveBrokenIcon],svg[solar-map-point-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 10h6M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path>`,
})
export class SolarMapPointRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRotateBrokenIcon],svg[solar-map-point-rotate-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path fill="currentColor" d="m12 20.688l.494.564a.75.75 0 0 0 0-1.129zm9.426-6.276a.75.75 0 1 0-.931 1.176zm-17.92 1.176a.75.75 0 1 0-.932-1.176zm6.994 3.787l.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm3.924-2.183a.75.75 0 0 0 .152 1.493zm-3.88.078c-2.343-.139-4.371-.605-5.788-1.248c-.71-.322-1.232-.672-1.565-1.017c-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922c.509.526 1.21.972 2.024 1.341c1.63.74 3.851 1.233 6.32 1.38zm9.95-4.307c.574.454.756.855.756 1.162h1.5c0-.95-.567-1.738-1.324-2.338zM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373l-1.5-1.312l-.988 1.128l1.5 1.313zm-2.744-.748v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm1.244 1.921l1.5-1.312l-.988-1.129l-1.5 1.313zM21.25 16.75c0 .457-.425 1.112-1.719 1.76c-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459c1.379-.69 2.547-1.723 2.547-3.101z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.75 11.912C6.264 10.672 6 9.351 6 8.107C6 4.734 8.686 2 12 2s6 2.734 6 6.107c0 3.347-1.915 7.252-4.903 8.649a2.59 2.59 0 0 1-2.194 0c-.954-.446-1.8-1.148-2.507-2.006"></svg:path></svg:g>`,
})
export class SolarMapPointRotateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSchoolBrokenIcon],svg[solar-map-point-school-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.224 6.636a2.28 2.28 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.28 2.28 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016z"></svg:path><svg:path stroke-linecap="round" d="M14.5 9v2.7a.92.92 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.92.92 0 0 1-.59-.879V9"></svg:path><svg:path stroke-linecap="round" d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path></svg:g>`,
})
export class SolarMapPointSchoolBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSearchBrokenIcon],svg[solar-map-point-search-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.125 12.118L15.5 13.5m-1.375-1.382a3 3 0 1 0-4.25-4.236a3 3 0 0 0 4.25 4.236Z"></svg:path><svg:path d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path></svg:g>`,
})
export class SolarMapPointSearchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointWaveBrokenIcon],svg[solar-map-point-wave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.875 12.573C5.308 11.25 5 9.84 5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0c-1.113-.476-2.099-1.225-2.925-2.14"></svg:path><svg:path d="M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M20.96 15.5c.666.602 1.04 1.282 1.04 2c0 .925-.62 1.785-1.684 2.5M3.04 15.5c-.666.602-1.04 1.282-1.04 2C2 19.985 6.477 22 12 22c1.653 0 3.212-.18 4.586-.5"></svg:path></svg:g>`,
})
export class SolarMapPointWaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskHapplyBrokenIcon],svg[solar-mask-happly-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 7v-.281c0-2.19 0-3.285-.707-3.884c-.707-.6-1.788-.42-3.95-.059l-1.055.176c-1.64.273-2.46.41-3.288.41s-1.648-.137-3.288-.41l-1.054-.176c-2.162-.36-3.243-.54-3.95.059S3 4.529 3 6.719V12c0 5.49 4.239 8.155 6.899 9.286c.721.307 1.082.46 2.101.46c1.02 0 1.38-.153 2.101-.46C16.761 20.155 21 17.49 21 12v-1"></svg:path><svg:path d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1m3 0c.291-.583 1.077-1 2-1s1.709.417 2 1m-9 5s1.05 1 3.5 1s3.5-1 3.5-1"></svg:path></svg:g>`,
})
export class SolarMaskHapplyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskSadBrokenIcon],svg[solar-mask-sad-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 11v1c0 5.49-4.239 8.155-6.899 9.286c-.721.307-1.082.46-2.101.46c-1.02 0-1.38-.153-2.101-.46C7.239 20.155 3 17.49 3 12V6.719c0-2.19 0-3.285.707-3.884c.708-.6 1.789-.42 3.95-.059l1.055.176c1.64.273 2.46.41 3.288.41s1.648-.137 3.288-.41l1.054-.176c2.163-.36 3.244-.54 3.95.059C21 3.434 21 4.529 21 6.719V7"></svg:path><svg:path d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1m3 0c.291-.583 1.077-1 2-1s1.709.417 2 1m-9 6s1.05-1 3.5-1s3.5 1 3.5 1"></svg:path></svg:g>`,
})
export class SolarMaskSadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMasksBrokenIcon],svg[solar-masks-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 17.221c1.058-.456 2.114-1.154 2.932-2.221M7.387 8.108l.7-2.729c.44-1.719.66-2.578 1.236-3.01c.193-.145.41-.252.638-.317c.684-.194 1.46.17 3.015.897c1.15.54 1.726.809 2.326 1q.314.099.632.176c.611.149 1.239.216 2.493.351c1.694.182 2.54.273 3.04.798c.167.177.303.383.4.609c.292.675.072 1.534-.369 3.253L21.021 11"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.467 13c-.417-1.629-.618-2.46-.335-3.117c.098-.226.234-.432.401-.609c.5-.525 1.346-.616 3.04-.798c1.255-.135 1.882-.202 2.493-.35a10 10 0 0 0 .632-.178c.6-.19 1.175-.46 2.326-.999c1.554-.727 2.331-1.091 3.015-.897c.229.065.445.172.638.317c.575.432.796 1.291 1.236 3.01l.845 3.298c.994 3.876-1.284 6.658-3.026 8.145c-.531.454-.797.68-1.825.968s-1.367.23-2.044.116C7.755 21.548 4.67 20.43 3.514 17"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.259 13.296c.06-.62.521-1.175 1.19-1.355s1.346.072 1.708.578M19.18 8.936c-.06-.62-.521-1.175-1.19-1.354c-.67-.18-1.346.071-1.708.577m-5.227 3.583c.06-.619.52-1.175 1.19-1.354s1.346.072 1.708.578"></svg:path><svg:path fill="currentColor" d="M11.096 7.042a.75.75 0 0 1-1.22-.872zm.904-.29c-.38-.1-.73.048-.904.29l-1.22-.872c.55-.77 1.553-1.123 2.512-.866zm.478.313A.9.9 0 0 0 12 6.753l.388-1.45c.524.141.966.445 1.276.843z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.2 16.231s-1.024-.76-2.812-.282c-1.787.48-2.294 1.65-2.294 1.65"></svg:path></svg:g>`,
})
export class SolarMasksBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeBrokenIcon],svg[solar-maximize-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 2h-5.857M22 2v5.857M22 2l-3.5 3.5M15 9l.875-.875M9 15l-7 7m0 0h5.857M2 22v-5.857"></svg:path>`,
})
export class SolarMaximizeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare2BrokenIcon],svg[solar-maximize-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 7h-3m3 0v3m0-3l-3.5 3.5M7 17h3m-3 0v-3m0 3l3.5-3.5M7 7h3M7 7v3m0-3l3.5 3.5M17 17h-3m3 0v-3m0 3l-3.5-3.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMaximizeSquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare3BrokenIcon],svg[solar-maximize-square-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.178 21.894 17.055 21.993 13 22M2 11c.008-4.055.107-6.178 1.464-7.536c.974-.973 2.343-1.3 4.536-1.409"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l5-5m0 0h-3.75M17 7v3.75"></svg:path><svg:path d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"></svg:path></svg:g>`,
})
export class SolarMaximizeSquare3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareBrokenIcon],svg[solar-maximize-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m12 12l5-5m0 0h-3.75M17 7v3.75M12 12l-5 5m0 0h3.75M7 17v-3.75"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMaximizeSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareMinimalisticBrokenIcon],svg[solar-maximize-square-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 7h-3m3 0v3m0-3l-3.5 3.5M7 17h3m-3 0v-3m0 3l3.5-3.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMaximizeSquareMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonBrokenIcon],svg[solar-medal-ribbon-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m7.351 15l-.637 2.323c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065L16.649 15"></svg:path><svg:path d="M5.5 6.397A7 7 0 1 0 9.397 2.5"></svg:path></svg:g>`,
})
export class SolarMedalRibbonBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonStarBrokenIcon],svg[solar-medal-ribbon-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="m7.351 15l-.637 2.323c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065L16.649 15"></svg:path><svg:path stroke-linecap="round" d="M5.5 6.397A7 7 0 1 0 9.397 2.5"></svg:path></svg:g>`,
})
export class SolarMedalRibbonStarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonsStarBrokenIcon],svg[solar-medal-ribbons-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354zM12 16.068l-3.771 3.905c-.54.56-.81.839-1.04.935c-.52.22-1.099.032-1.373-.448c-.12-.21-.158-.59-.232-1.35c-.043-.43-.064-.644-.128-.824a1.43 1.43 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132c-.734-.078-1.101-.117-1.305-.241c-.463-.284-.646-.883-.433-1.422c.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935c.52.22 1.099.032 1.373-.448c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076L18.544 12"></svg:path><svg:path stroke-linecap="round" d="M5.5 6.397A7 7 0 1 0 9.397 2.5"></svg:path></svg:g>`,
})
export class SolarMedalRibbonsStarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarBrokenIcon],svg[solar-medal-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 8V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v2"></svg:path><svg:path stroke-linecap="round" d="M19.794 11.031a3 3 0 0 0-1.564-2.634l-4.794-2.614a3 3 0 0 0-2.872 0L5.77 8.397a3 3 0 0 0-1.564 2.634v4.938a3 3 0 0 0 1.564 2.634l4.794 2.614a3 3 0 0 0 2.872 0l4.794-2.614a3 3 0 0 0 1.564-2.634V15"></svg:path><svg:path d="M11.146 11.523c.38-.682.57-1.023.854-1.023s.474.341.854 1.023l.098.176c.108.194.162.29.246.355c.085.063.19.087.4.135l.19.043c.738.167 1.107.25 1.195.533c.088.282-.164.576-.667 1.164l-.13.152c-.143.168-.215.251-.247.355s-.021.214 0 .438l.02.203c.076.784.114 1.177-.115 1.351c-.23.175-.576.016-1.267-.302l-.178-.083c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.083c-.691.318-1.037.477-1.267.302c-.23-.174-.191-.567-.115-1.351l.02-.203c.021-.224.032-.335 0-.438c-.032-.104-.104-.187-.247-.355l-.13-.152c-.503-.588-.755-.882-.667-1.164c.088-.283.457-.366 1.195-.533l.19-.043c.21-.048.315-.072.4-.135c.084-.064.138-.161.246-.355z"></svg:path></svg:g>`,
})
export class SolarMedalStarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarCircleBrokenIcon],svg[solar-medal-star-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 8V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v2m4.146 4.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M19.429 16.975a8 8 0 1 0-4.454 4.454"></svg:path></svg:g>`,
})
export class SolarMedalStarCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarSquareBrokenIcon],svg[solar-medal-star-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6m4.146 5.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M15.578 20.211c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575a3 3 0 0 1-.403.517"></svg:path></svg:g>`,
})
export class SolarMedalStarSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedicalKitBrokenIcon],svg[solar-medical-kit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path><svg:path d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></svg:path><svg:path stroke-linecap="round" d="M13.5 14h-3m1.5-1.5v3"></svg:path><svg:circle cx="12" cy="14" r="4"></svg:circle></svg:g>`,
})
export class SolarMedicalKitBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationBrokenIcon],svg[solar-meditation-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3 17l2.589-1.308A.75.75 0 0 0 6 15.02c0-2.94 2.138-5.454 5.007-5.937a6 6 0 0 1 2.993.26M21 17l-2.589-1.308A.75.75 0 0 1 18 15.02a6 6 0 0 0-.814-3.02M9.5 16l-1.042 1.389l-.063.084a2 2 0 0 1-1.034.686l-.102.026l-1.485.371A2.34 2.34 0 0 0 4 20.83c0 .646.524 1.17 1.171 1.17h1.556c.6 0 .9 0 1.19-.034a5 5 0 0 0 1.929-.643c.253-.147.493-.327.972-.687L11 20.5m0 0l2-1.5m-2 1.5l2.54.952c.61.229.914.343 1.229.417q.245.057.493.09c.321.041.647.041 1.298.041h2.269A1.17 1.17 0 0 0 20 20.829a2.34 2.34 0 0 0-1.774-2.273l-1.485-.37l-.102-.027a2 2 0 0 1-1.034-.686l-.063-.084L14.5 16"></svg:path></svg:g>`,
})
export class SolarMeditationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationRoundBrokenIcon],svg[solar-meditation-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m21 17l-1.158-.39a2.7 2.7 0 0 1-.642-.317l-.101-.069A2.5 2.5 0 0 1 18 14.15q-.001-.546-.112-1.06M3 17l1.158-.39q.342-.115.642-.317l.101-.069A2.5 2.5 0 0 0 6 14.15c0-2.437 1.744-4.517 4.123-4.918l.89-.15C11.5 9 12.5 9 12.987 9.082l.891.15c.393.067.77.179 1.123.33M9.5 16l-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 0 1-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 0 0 5.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3l.727.969c.343.458.515.687.738.856q.1.076.21.14c.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0 1 18.315 22h-.937c-.563 0-.844 0-1.123-.016a10 10 0 0 1-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5"></svg:path></svg:g>`,
})
export class SolarMeditationRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenBrokenIcon],svg[solar-men-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 7.07A8 8 0 1 1 3.07 10"></svg:path><svg:path fill="currentColor" d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78l6.5-6.5l-1.06-1.06l-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z"></svg:path></svg:g>`,
})
export class SolarMenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionCircleBrokenIcon],svg[solar-mention-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 18a6 6 0 1 1 5.64-3.946a1.54 1.54 0 0 1-.413.599l-.08.074a1.637 1.637 0 0 1-2.747-1.203V12m0 0a2.4 2.4 0 1 1-4.8 0a2.4 2.4 0 0 1 4.8 0Z"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarMentionCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionSquareBrokenIcon],svg[solar-mention-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 18a6 6 0 1 1 5.64-3.946a1.54 1.54 0 0 1-.413.599l-.08.074a1.636 1.636 0 0 1-2.747-1.203V12m0 0a2.4 2.4 0 1 1-4.8 0a2.4 2.4 0 0 1 4.8 0Z"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMentionSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsBrokenIcon],svg[solar-menu-dots-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 14a2 2 0 1 0-2-2"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M21 12a2 2 0 1 1-2-2"></svg:path></svg:g>`,
})
export class SolarMenuDotsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsCircleBrokenIcon],svg[solar-menu-dots-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarMenuDotsCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsSquareBrokenIcon],svg[solar-menu-dots-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMenuDotsSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone2BrokenIcon],svg[solar-microphone-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 8H17m-3.5 3H17M7 8h2m-2 3h2m3 8v3"></svg:path><svg:path fill="currentColor" d="M20.75 10a.75.75 0 0 0-1.5 0zm-16 0a.75.75 0 0 0-1.5 0zm10.762 7.344a.75.75 0 1 0 .728 1.312zM19.25 10v1h1.5v-1zm-14.5 1v-1h-1.5v1zM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75zM19.25 11a7.25 7.25 0 0 1-3.738 6.344l.728 1.312A8.75 8.75 0 0 0 20.75 11z"></svg:path></svg:g>`,
})
export class SolarMicrophone2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone3BrokenIcon],svg[solar-microphone-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 8h2m-3 3h4"></svg:path><svg:path fill="currentColor" d="M20.75 10a.75.75 0 0 0-1.5 0zm-16 0a.75.75 0 0 0-1.5 0zm10.762 7.344a.75.75 0 1 0 .728 1.312zM19.25 10v1h1.5v-1zm-14.5 1v-1h-1.5v1zM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75zM19.25 11a7.25 7.25 0 0 1-3.738 6.344l.728 1.312A8.75 8.75 0 0 0 20.75 11z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 19v3"></svg:path></svg:g>`,
})
export class SolarMicrophone3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneBrokenIcon],svg[solar-microphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 8h4m-4 3h4m-5 8v3"></svg:path><svg:path fill="currentColor" d="M20.75 10a.75.75 0 0 0-1.5 0zm-16 0a.75.75 0 0 0-1.5 0zm10.762 7.344a.75.75 0 1 0 .728 1.312zM19.25 10v1h1.5v-1zm-14.5 1v-1h-1.5v1zM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75zM19.25 11a7.25 7.25 0 0 1-3.738 6.344l.728 1.312A8.75 8.75 0 0 0 20.75 11z"></svg:path></svg:g>`,
})
export class SolarMicrophoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneLargeBrokenIcon],svg[solar-microphone-large-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M18 8v5a6 6 0 0 1-12 0V8a6 6 0 0 1 10.472-4"></svg:path><svg:path d="M10 6.5s.473-.5 2-.5s2 .5 2 .5m-4 3s.473-.5 2-.5s2 .5 2 .5m7 1.5v2a9 9 0 0 1-5 8.064M3 11v2a9 9 0 0 0 9 9"></svg:path></svg:g>`,
})
export class SolarMicrophoneLargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBrokenIcon],svg[solar-minimalistic-magnifer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 20l2 2M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMinimalisticMagniferBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBugBrokenIcon],svg[solar-minimalistic-magnifer-bug-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5l1 .5m-7-.5l-1 .5m7-5.5l1-.5m-7 .5l-1-.5M20 20l2 2"></svg:path><svg:path d="M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path></svg:g>`,
})
export class SolarMinimalisticMagniferBugBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomInBrokenIcon],svg[solar-minimalistic-magnifer-zoom-in-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomInBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomOutBrokenIcon],svg[solar-minimalistic-magnifer-zoom-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 11.5h5m6 8.5l2 2M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeBrokenIcon],svg[solar-minimize-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 22l.875-.875M9 15H3.143M9 15v5.857M9 15l-3.5 3.5M22 2l-7 7m0 0h5.857M15 9V3.143"></svg:path>`,
})
export class SolarMinimizeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare2BrokenIcon],svg[solar-minimize-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10.5 13.5h-3m3 0v3m0-3L7 17m6.5-6.5h3m-3 0v-3m0 3L17 7m-6.5 3.5h-3m3 0v-3m0 3L7 7m6.5 6.5h3m-3 0v3m0-3L17 17"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMinimizeSquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare3BrokenIcon],svg[solar-minimize-square-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 7l-5 5m0 0h3.75M12 12V8.25"></svg:path><svg:path d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"></svg:path><svg:path stroke-linecap="round" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.178 21.894 17.055 21.993 13 22M2 11c.008-4.055.107-6.178 1.464-7.536c.974-.973 2.343-1.3 4.536-1.409"></svg:path></svg:g>`,
})
export class SolarMinimizeSquare3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareBrokenIcon],svg[solar-minimize-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m20 4l-6 6m0 0h3.75M14 10V6.25M4 20l6-6m0 0H6.25M10 14v3.75"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMinimizeSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareMinimalisticBrokenIcon],svg[solar-minimize-square-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10.5 13.5h-3m3 0v3m0-3L7 17m6.5-6.5h3m-3 0v-3m0 3L17 7"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarMinimizeSquareMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusCircleBrokenIcon],svg[solar-minus-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 12H9M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarMinusCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusSquareBrokenIcon],svg[solar-minus-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 12H9m13 0c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarMinusSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorBrokenIcon],svg[solar-mirror-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12.168C21 7.105 16.97 3 12 3s-9 4.105-9 9.168A9.25 9.25 0 0 0 4.35 17m1.286 5h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22Z"></svg:path>`,
})
export class SolarMirrorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorLeftBrokenIcon],svg[solar-mirror-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 12c0 4.243 0 6.364 1.318 7.682S7.758 21 12 21m0-18C7.757 3 5.636 3 4.318 4.318C3.502 5.134 3.192 6.257 3.073 8"></svg:path><svg:path stroke-dasharray="2.5 3" d="M11 21h4c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3h-4"></svg:path><svg:path d="M12 22V2"></svg:path></svg:g>`,
})
export class SolarMirrorLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightBrokenIcon],svg[solar-mirror-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 21c4.243 0 6.364 0 7.682-1.318S21 16.242 21 12m-9-9c4.243 0 6.364 0 7.682 1.318c.816.816 1.127 1.939 1.245 3.682"></svg:path><svg:path stroke-dasharray="2.5 3" d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"></svg:path><svg:path d="M12 22V2"></svg:path></svg:g>`,
})
export class SolarMirrorRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagBrokenIcon],svg[solar-money-bag-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.172 20.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14c0-1.17 0-2.158-.035-3m-1.137-3.828C19.657 6 17.771 6 14 6h-4C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14c0 1.17 0 2.158.035 3M12 2c1.886 0 2.828 0 3.414.586S16 4.114 16 6M8.586 2.586C8 3.172 8 4.114 8 6"></svg:path><svg:path d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></svg:path></svg:g>`,
})
export class SolarMoneyBagBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorBrokenIcon],svg[solar-monitor-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 2.252c-.774.169-1.359.45-1.828.92C2 4.343 2 6.229 2 10v1c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11v-1c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2H9m7 20H8m4-5v5m10-9h-6M2 13h10"></svg:path>`,
})
export class SolarMonitorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraBrokenIcon],svg[solar-monitor-camera-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5s0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5Zm7-1.25l1.615-.673c.627-.261.94-.392 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166c-.222.148-.535.018-1.162-.243L19 6.25z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-12v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1m7.5-8c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554c-.505.616-.73 1.398-.829 2.538M22 13h-6M2 13h10"></svg:path></svg:g>`,
})
export class SolarMonitorCameraBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneBrokenIcon],svg[solar-monitor-smartphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828c.47-.47 1.054-.751 1.828-.92M22 8.5c0-2.335 0-3.502-.472-4.386a4 4 0 0 0-1.642-1.642C19.002 2 17.835 2 15.5 2H9"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M14 15c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 20h-2"></svg:path><svg:path fill="currentColor" d="M11 22v.75a.75.75 0 0 0 .75-.75zm-3-.75a.75.75 0 0 0 0 1.5zM11.75 17a.75.75 0 0 0-1.5 0zM11 21.25H8v1.5h3zm.75.75v-5h-1.5v5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 13H2"></svg:path></svg:g>`,
})
export class SolarMonitorSmartphoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonBrokenIcon],svg[solar-moon-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zm-4.767 17.08a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM12 21.25a9.2 9.2 0 0 1-4.624-1.237l-.752 1.298A10.7 10.7 0 0 0 12 22.75zm-8.013-4.625A9.2 9.2 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375z"></svg:path>`,
})
export class SolarMoonBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogBrokenIcon],svg[solar-moon-fog-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8M5 19h14M2 16h20"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM20.481 15.7a.75.75 0 0 0 1.374.6zm-18.336.6a.75.75 0 0 0 1.374-.6zm1.842-8.924a.75.75 0 0 0-1.298-.752zm2.637-4.687a.75.75 0 1 0 .752 1.298zM15.5 14.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm11.5 3.5a9.2 9.2 0 0 1-.77 3.7l1.375.6c.576-1.318.895-2.773.895-4.3zM3.52 15.7a9.2 9.2 0 0 1-.77-3.7h-1.5c0 1.527.319 2.982.895 4.3zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM2.75 12c0-1.686.45-3.265 1.237-4.624l-1.298-.752A10.7 10.7 0 0 0 1.25 12zm4.626-8.013A9.2 9.2 0 0 1 12 2.75v-1.5c-1.957 0-3.794.524-5.376 1.439z"></svg:path><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path></svg:g>`,
})
export class SolarMoonFogBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepBrokenIcon],svg[solar-moon-sleep-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 8h3l-3 3h3M18 2h4l-4 4h4"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zm-4.767 17.08a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM12 21.25a9.2 9.2 0 0 1-4.624-1.237l-.752 1.298A10.7 10.7 0 0 0 12 22.75zm-8.013-4.625A9.2 9.2 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375z"></svg:path></svg:g>`,
})
export class SolarMoonSleepBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsBrokenIcon],svg[solar-moon-stars-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zm-4.767 17.08a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM12 21.25a9.2 9.2 0 0 1-4.624-1.237l-.752 1.298A10.7 10.7 0 0 0 12 22.75zm-8.013-4.625A9.2 9.2 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375z"></svg:path></svg:g>`,
})
export class SolarMoonStarsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseBrokenIcon],svg[solar-mouse-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2"></svg:path><svg:path d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path stroke-linecap="round" d="M12 2v5"></svg:path></svg:g>`,
})
export class SolarMouseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleBrokenIcon],svg[solar-mouse-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16 14a4 4 0 0 1-8 0v-4a4 4 0 1 1 8 0m-7.5 0H16m-4 0V6"></svg:path><svg:path d="M12 8.892V3.85c0-1.114-.905-2.037-1.987-1.817C5.442 2.962 2 7.034 2 11.917A10.1 10.1 0 0 0 3.362 17M16.364 2.842A10.09 10.09 0 0 1 22 11.917C22 17.486 17.523 22 12 22a9.9 9.9 0 0 1-5-1.349"></svg:path></svg:g>`,
})
export class SolarMouseCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticBrokenIcon],svg[solar-mouse-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2m-7-6v3"></svg:path>`,
})
export class SolarMouseMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderBrokenIcon],svg[solar-move-to-folder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.57.633.718 1.52.757 3.006"></svg:path><svg:path stroke-linejoin="round" d="M2 15h11m0 0l-4.125-3M13 15l-4.125 3"></svg:path></svg:g>`,
})
export class SolarMoveToFolderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftBrokenIcon],svg[solar-multiple-forward-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18 10.13c-1.613-1.153-3.455-1.56-5-1.56V6.227c0-.958 0-1.437-.295-1.57c-.295-.132-.653.186-1.37.823L7.363 9.01C5.795 10.405 5.011 11.102 5.011 12s.784 1.596 2.352 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571c0-2.431-.377-4.378-1-5.925"></svg:path><svg:path d="M8.461 4.5L3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5"></svg:path></svg:g>`,
})
export class SolarMultipleForwardLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightBrokenIcon],svg[solar-multiple-forward-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M6 10.13c1.613-1.153 3.454-1.56 5-1.56V6.227c0-.958 0-1.437.295-1.57c.295-.132.653.186 1.37.823l3.971 3.53c1.569 1.395 2.353 2.092 2.353 2.99s-.784 1.596-2.353 2.99l-3.972 3.53c-.716.637-1.074.956-1.37.823C11 19.21 11 18.732 11 17.773v-2.344c-3.6 0-7.5 1.714-9 4.571c0-2.431.377-4.378 1-5.925"></svg:path><svg:path d="m15.539 4.5l5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333"></svg:path></svg:g>`,
})
export class SolarMultipleForwardRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2BrokenIcon],svg[solar-music-library-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v-6.5c0 1.657 1.895 3 3 3"></svg:path><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke-linecap="round" d="M21.194 16.793c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path></svg:g>`,
})
export class SolarMusicLibrary2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryBrokenIcon],svg[solar-music-library-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12.56 12.7l-.352.661zm.883.47l.353-.662zm.996-1.868l.353-.662zm-.882-.471l.353-.662zm-1.555.776l.749.045zm1.414-.85l-.312.683zM15 12.17l.75-.024zm-.5-.835l.373-.65zm-.915 1.91l.312-.683zm1.414-.85l-.748-.045zm-2.496.273l-.374.65zM12 11.832l-.75.024zm-.75 4.668a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm2.25.75V12h-1.5v4.5zm-.542-3.139l.882.47l.706-1.323l-.882-.47zm2.584-2.721l-.882-.47l-.706 1.323l.882.47zm-2.042 1.125v-.113l-1.497-.09c-.003.058-.003.131-.003.203zm1.16-1.596a5 5 0 0 0-.181-.093l-.625 1.364l.018.009l.082.044zm-1.16 1.483a.25.25 0 0 1 .354-.212l.625-1.364a1.75 1.75 0 0 0-2.476 1.485zm3 .584v-.091l-1.5.048v.043zm-1.664-.273l.032.017l.007.004l.747-1.3l-.08-.044zm1.663.182a1.75 1.75 0 0 0-.877-1.462l-.747 1.3a.25.25 0 0 1 .125.21zm-2.659 1.687c.064.034.128.068.181.093l.625-1.364l-.018-.009l-.082-.044zm1.16-1.596v.113l1.497.09c.003-.058.003-.131.003-.203zm-.979 1.689a1.75 1.75 0 0 0 2.476-1.485l-1.498-.091a.25.25 0 0 1-.353.212zm-.357-1.887l-.032-.017l-.007-.004l-.747 1.3l.08.044zm-1.664-.273v.091l1.5-.048v-.043zm1.625.252a.25.25 0 0 1-.125-.209l-1.5.048c.02.606.352 1.16.878 1.462z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.194 16.793c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path></svg:g>`,
})
export class SolarMusicLibraryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2BrokenIcon],svg[solar-music-note-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 12V2"></svg:path><svg:circle cx="9" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class SolarMusicNote2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3BrokenIcon],svg[solar-music-note-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 12V6m4.117 4.059l-2.634-1.317c-.365-.182-.547-.274-.698-.389a2 2 0 0 1-.75-1.213C12 6.954 12 6.75 12 6.342c0-.971 0-1.457.12-1.787a2 2 0 0 1 2.112-1.305c.348.04.783.258 1.651.692l2.634 1.317c.365.182.547.273.698.389a2 2 0 0 1 .75 1.212c.035.187.035.39.035.799c0 .97 0 1.456-.12 1.786a2 2 0 0 1-2.112 1.306c-.348-.04-.783-.258-1.651-.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4BrokenIcon],svg[solar-music-note-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.114 20.376a.75.75 0 1 0-1.298-.751zM11.464 16l-.648.375zM12 17l-.667.344A.75.75 0 0 0 12.75 17zm.75-9a.75.75 0 0 0-1.5 0zM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75zM4.75 18A3.25 3.25 0 0 1 8 14.75v-1.5A4.75 4.75 0 0 0 3.25 18zm6.066 1.625A3.25 3.25 0 0 1 8 21.25v1.5c1.76 0 3.294-.957 4.114-2.375zM8 14.75a3.25 3.25 0 0 1 2.816 1.625l1.298-.75A4.75 4.75 0 0 0 8 13.25zm2.816 1.625c.08.14.208.378.32.59l.14.268l.042.081l.012.022l.002.006l.001.001L12 17l.667-.344l-.002-.002l-.015-.03l-.043-.083l-.144-.275a20 20 0 0 0-.349-.641zM12.75 17V8h-1.5v9z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.117 3.942l-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 0 0-.75 1.212c-.035.187-.035.39-.035.8c0 .97 0 1.456.12 1.786a2 2 0 0 0 2.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 0 0 .75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 0 0-2.112-1.305c-.348.04-.783.258-1.651.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteBrokenIcon],svg[solar-music-note-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM9 19V8"></svg:path><svg:path fill="currentColor" d="M20.25 11.5a.75.75 0 0 0 1.5 0zm1.5 0V6h-1.5v5.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.735 3.755l-4 1.333c-1.32.44-1.98.66-2.357 1.184S9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398c-.831-.599-2.032-.198-4.435.603Z"></svg:path></svg:g>`,
})
export class SolarMusicNoteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2BrokenIcon],svg[solar-music-note-slider-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03M12 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 0v-5"></svg:path><svg:path stroke-linecap="round" d="m14.058 7.971l-1.316.658a2.3 2.3 0 0 0-.35.195a1 1 0 0 0-.374.606c-.018.093-.018.195-.018.4c0 .485 0 .728.06.893a1 1 0 0 0 1.056.652c.174-.02.391-.129.826-.346l1.316-.658c.183-.091.274-.137.35-.194a1 1 0 0 0 .374-.607C16 9.477 16 9.375 16 9.171c0-.486 0-.728-.06-.893a1 1 0 0 0-1.056-.653c-.174.02-.391.129-.826.346Z"></svg:path><svg:path stroke-linecap="round" d="M18.998 17c-.012 2.175-.108 3.353-.877 4.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v5"></svg:path></svg:g>`,
})
export class SolarMusicNoteSlider2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderBrokenIcon],svg[solar-music-note-slider-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18.998 17c-.012 2.175-.108 3.353-.877 4.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v5"></svg:path><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03"></svg:path><svg:path stroke-linecap="round" d="M13 14V8"></svg:path><svg:circle cx="11" cy="14" r="2"></svg:circle><svg:path stroke-linecap="round" d="M15 10a2 2 0 0 1-2-2"></svg:path><svg:path d="M5 19.5c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03"></svg:path></svg:g>`,
})
export class SolarMusicNoteSliderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesBrokenIcon],svg[solar-music-notes-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm10-2a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m22 8l-10 4"></svg:path><svg:path fill="currentColor" d="m14.456 5.158l.29.692zm2-.837l-.29-.692zm4.652-.98l-.416.624zM21.25 12a.75.75 0 0 0 1.5 0zm-8.5 7V8.847h-1.5V19zm1.995-13.15l2-.837l-.579-1.384l-2 .837zm8.005 2.16c0-1.333.002-2.42-.12-3.24c-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024c.101.686.103 1.638.103 3.022zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072c.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228c-.805.205-1.806.626-3.037 1.141zM12.75 8.848c0-.662.001-1.098.037-1.434c.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258c-.047.436-.046.967-.046 1.596zm1.416-4.382c-.58.243-1.07.447-1.454.659c-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386c.296-.163.698-.333 1.308-.588zM22.75 12V8.01h-1.5V12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 11V2"></svg:path><svg:circle cx="4.5" cy="10.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 5c-1.243 0-3-.929-3-3"></svg:path></svg:g>`,
})
export class SolarMusicNotesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedBrokenIcon],svg[solar-muted-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M1.959 8.577a3.2 3.2 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.923.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528M22 10l-4 4m0-4l4 4"></svg:path>`,
})
export class SolarMutedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkBrokenIcon],svg[solar-notebook-bookmark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.854V21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5 9l4 1m-4 3l4 1m10-1l-4 1m4-8.5v4.01c0 .276 0 .414-.095.47s-.224-.007-.484-.13l-1.242-.59c-.088-.042-.132-.062-.179-.062s-.091.02-.179.062l-1.242.59c-.26.123-.39.185-.484.13C15 9.923 15 9.785 15 9.51V6.95"></svg:path><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.72v.001zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.748zM7 3.487l.191-.725zm3.282 1.388l-.35.663zm3.346 15.194l.352.662zM17 18.633l-.191-.725zm2.985-.41l.047.748zm-9.613 1.846l-.352.662zM7 18.633l.191-.725zm-2.985-.41l-.047.748zm18.735-7.685a.75.75 0 0 0-1.5 0zM21.25 7a.75.75 0 0 0 1.5 0zm-20 3.57a.75.75 0 0 0 1.5 0zM2.75 14a.75.75 0 0 0-1.5 0zM20.056 2.268c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.823c.966.06 2.06.175 2.873.39l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.39c.962.254 2.146.809 3.123 1.325l.7-1.326c-.995-.526-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.373l-.382-1.45c-1.17.309-2.526.962-3.534 1.5zm3.211-1.373c.803-.211 1.882-.327 2.841-.387l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.05c-1.008-.538-2.363-1.191-3.534-1.5l-.382 1.45c.992.262 2.22.845 3.21 1.373zm-3.534-1.5c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.387zm14.059-1.764c0 .685-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.827l.094-1.497c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.263a2.72 2.72 0 0 1-2.55 0l-.705 1.324a4.22 4.22 0 0 0 3.96 0zm.023-15.253a2.77 2.77 0 0 1-2.665.058l-.701 1.326a4.27 4.27 0 0 0 4.118-.086zM2.75 4.998c0-.697.552-1.213 1.186-1.175l.092-1.497C2.47 2.231 1.25 3.5 1.25 4.998zm20 11.146v-5.606h-1.5v5.606zm0-9.144V4.933h-1.5V7zm-20 3.57V4.999h-1.5v5.573zm0 5.574V14h-1.5v2.144z"></svg:path></svg:g>`,
})
export class SolarNotebookBookmarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBrokenIcon],svg[solar-notebook-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 2v4m0 16V10m-6 2h2m-2 4h2M2 8h2m7.5-1.5h5m-5 3.5h5"></svg:path>`,
})
export class SolarNotebookBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticBrokenIcon],svg[solar-notebook-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm18.735-7.684a.75.75 0 0 0-1.5 0zM21.25 7a.75.75 0 0 0 1.5 0zm-20 3.57a.75.75 0 0 0 1.5 0zM2.75 14a.75.75 0 0 0-1.5 0zM20.056 2.268c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998zm20 11.146v-5.605h-1.5v5.605zm0-9.144V4.933h-1.5V7zm-20 3.57V4.999h-1.5v5.573zm0 5.574V14h-1.5v2.144z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 5.5v15"></svg:path></svg:g>`,
})
export class SolarNotebookMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareBrokenIcon],svg[solar-notebook-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.557 7.022l-.037-.75zM14.7 7.27l-.2-.723zm-2.178 1l-.376-.65zM7.487 7.06l-.055.748zM9 7.27l-.178.728zm2.465 1.022l-.349.664zm1.042 8.43l.35.663zM15 15.684l-.178-.728zm1.49-.208l.056.748zm-4.997 1.245l-.35.664zM9 15.685l.178-.728zm-1.49-.208l-.056.748zm-.76-1.566V8.496h-1.5v5.415zm12 0V8.45h-1.5v5.46zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.194 1.693-.223zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.752 2.002-.926zm-7.068 1.26c.5.037 1.007.098 1.39.191l.356-1.457c-.505-.123-1.11-.19-1.636-.23zM8.822 8c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.323-1.713-.862-2.635-1.087zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102zm2.321-.972c.377-.092.875-.152 1.368-.19l-.112-1.495c-.52.039-1.114.106-1.612.228zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818zm6.908 2.148a.34.34 0 0 1-.316 0l-.699 1.327a1.84 1.84 0 0 0 1.714 0zm-.012-8.438a.35.35 0 0 1-.333.008l-.697 1.328a1.85 1.85 0 0 0 1.782-.037zm-5.396.875c0-.426.333-.713.682-.687l.11-1.496c-1.294-.095-2.292.962-2.292 2.183z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 8.585V17"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarNotebookSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesBrokenIcon],svg[solar-notes-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m11.777 10l4.83 1.294M11 12.898l2.898.776m6.414-1.027c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.161.69.057 1.456-.231 2.643"></svg:path><svg:path stroke-linejoin="round" d="M3.272 16.647c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.161c.976.227 2.104-.075 4.36-.679c2.254-.604 3.382-.906 4.113-1.591a4 4 0 0 0 1.068-1.678M8.516 6.445q-.527.137-1.165.31c-2.255.604-3.383.906-4.114 1.59a4 4 0 0 0-1.161 2.012c-.161.69-.057 1.456.231 2.643"></svg:path></svg:g>`,
})
export class SolarNotesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticBrokenIcon],svg[solar-notes-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.312 12.647c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.161.69.057 1.456-.231 2.643"></svg:path><svg:path stroke-linejoin="round" d="M3.272 16.647c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.161c.976.227 2.104-.075 4.36-.679c2.254-.604 3.382-.906 4.113-1.591a4 4 0 0 0 1.068-1.678M8.516 6.445q-.527.137-1.165.31c-2.255.604-3.383.906-4.114 1.59a4 4 0 0 0-1.161 2.012c-.161.69-.057 1.456.231 2.643"></svg:path></svg:g>`,
})
export class SolarNotesMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveBrokenIcon],svg[solar-notification-lines-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path>`,
})
export class SolarNotificationLinesRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveBrokenIcon],svg[solar-notification-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m22 2l-5 5m0-5l5 5M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path>`,
})
export class SolarNotificationRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadBrokenIcon],svg[solar-notification-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarNotificationUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesBrokenIcon],svg[solar-notification-unread-lines-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M7 14h9m-9 3.5h6M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path></svg:g>`,
})
export class SolarNotificationUnreadLinesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanBrokenIcon],svg[solar-object-scan-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m0-4V9m8-7C6.229 2 4.343 2 3.172 3.172C2.518 3.825 2.229 4.7 2.102 6M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10M4 11.5s2.4-2 8-2s8 2 8 2"></svg:path><svg:path fill="currentColor" d="M5.25 10a.75.75 0 0 0 1.5 0zm12.164-3.914l-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zm4.75 3.25c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM10 4.75c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM6.75 9.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 18.5c1.886 0 2.828 0 3.414-.586S18 16.386 18 14.5V14m-8 4.5c-1.886 0-2.828 0-3.414-.586S6 16.386 6 14.5V14"></svg:path></svg:g>`,
})
export class SolarObjectScanBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallBrokenIcon],svg[solar-outgoing-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarOutgoingCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedBrokenIcon],svg[solar-outgoing-call-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsBrokenIcon],svg[solar-oven-mitts-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.133 17.025a.75.75 0 1 0 1.05-1.07zm3.364 1.192a.75.75 0 1 0-1.039 1.082zm-2.314-2.262l-5.639-5.536l-1.05 1.07l5.639 5.536zm3.634 3.53l-1.32-1.268l-1.039 1.082l1.32 1.268z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.019 16.537C2.673 15.22 2 14.563 2 13.745c0-.536.29-1.004.87-1.634c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47l.032-3.342C4.032 3.817 5.441 2.027 7.213 2c1.455-.022 2.702 1.152 3.121 2.78m9.744 8.616a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455m0 0l-.962.941M17.416 16l-.728.711l-3.39 3.315C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974L6.517 18.98"></svg:path></svg:g>`,
})
export class SolarOvenMittsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticBrokenIcon],svg[solar-oven-mitts-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.019 16.537C2.673 15.22 2 14.563 2 13.745c0-.536.29-1.004.87-1.634c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47l.032-3.342C4.032 3.817 5.441 2.027 7.213 2c1.455-.022 2.702 1.152 3.121 2.78m9.744 8.616a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455m0 0l-.962.941M17.416 16l-.728.711l-3.39 3.315C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974L6.517 18.98m4.283-1.396l-4.283-4.187"></svg:path>`,
})
export class SolarOvenMittsMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerBrokenIcon],svg[solar-paint-roller-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.75 6.799l-.375.65zm-.549-.549l-.65.375zm11.598 0l.65.375zm-.549.549l.375.65zm0-4.598l.375-.65zm.549.549l.65-.375zM6.75 2.201l-.375-.65zm-.549.549l-.65-.375zm7.506 18.957l-.53-.53zm0-7.414l-.53.53zm-3.414 0l-.53-.53zm0 7.414l.53-.53zm5.225-9.976a.75.75 0 1 0-.223-1.484zm3.854-2.095a.75.75 0 1 0 .223 1.483zm2.489-3.869l.698-.274zM20.733 4.64l-.275.698zm.205 5.405l-.351-.663zm.948-1.1l.707.25zm-9.401 2.973l-.569-.49zM12.005 14v.75h.737l.013-.738zM5.5 3.75a.75.75 0 0 0 0 1.5zm4.5-1a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm1.5 5h-7v1.5h7zm-7 0c-.481 0-.792 0-1.027-.022c-.225-.02-.307-.055-.348-.078l-.75 1.299c.307.177.633.243.962.273c.32.029.71.028 1.163.028zM5.25 4.5c0 .454 0 .844.028 1.163c.03.329.096.655.273.962l1.3-.75c-.024-.04-.059-.123-.079-.348A13 13 0 0 1 6.75 4.5zm1.875 1.65a.75.75 0 0 1-.275-.275l-1.299.75c.198.342.482.626.824.824zM17.25 4.5c0 .481 0 .792-.022 1.027c-.02.225-.055.307-.079.348l1.3.75c.177-.307.243-.633.273-.962c.029-.32.028-.71.028-1.163zM15.5 7.75c.454 0 .844 0 1.163-.028c.329-.03.655-.096.962-.273l-.75-1.3c-.04.024-.123.059-.348.079a13 13 0 0 1-1.027.022zm1.65-1.875a.75.75 0 0 1-.275.275l.75 1.299a2.25 2.25 0 0 0 .824-.824zM15.5 2.75c.481 0 .792 0 1.027.022c.225.02.307.055.348.078l.75-1.299c-.307-.177-.633-.243-.962-.273c-.32-.029-.71-.028-1.163-.028zm3.25 1.75c0-.454 0-.844-.028-1.163c-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.058.123.079.348c.021.235.022.546.022 1.027zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.25 2.25 0 0 0-.824-.824zM8.5 1.25c-.454 0-.844 0-1.163.028c-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.059.348-.079c.235-.021.546-.022 1.027-.022zM6.75 4.5c0-.481 0-.792.022-1.027c.02-.225.055-.307.078-.348l-1.299-.75c-.177.307-.243.633-.273.962c-.029.32-.028.71-.028 1.163zm-.375-2.949a2.25 2.25 0 0 0-.824.824l1.3.75a.75.75 0 0 1 .274-.275zM10.75 20v-4h-1.5v4zm2.5-4v4h1.5v-4zm0 4c0 .493-.002.787-.03.997a.7.7 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04c.045-.334.043-.747.043-1.197zM12 22.75c.45 0 .863.002 1.197-.043c.356-.048.731-.16 1.04-.47l-1.06-1.06l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03zm0-8c.493 0 .787.002.997.03a.7.7 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47c-.334-.045-.747-.043-1.197-.043zM14.75 16c0-.45.002-.863-.043-1.197c-.048-.356-.16-.731-.47-1.04l-1.06 1.06l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997zm-4 0c0-.493.002-.787.03-.997a.7.7 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04c-.045.334-.043.747-.043 1.197zM12 13.25c-.45 0-.863-.002-1.197.043c-.356.048-.731.16-1.04.47l1.06 1.06l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03zM9.25 20c0 .45-.002.863.043 1.197c.048.356.16.731.47 1.04l1.06-1.06l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997zM12 21.25c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47c.334.045.747.043 1.197.043zm7.045-17.5H18v1.5h1.045zm3.705 3.705c0-.435 0-.797-.019-1.094a2.8 2.8 0 0 0-.172-.868l-1.396.55c.03.073.056.186.071.416c.016.236.016.541.016.996zM19.045 5.25c.455 0 .76 0 .996.016c.23.015.343.042.417.07l.55-1.395a2.8 2.8 0 0 0-.87-.172c-.296-.02-.658-.019-1.093-.019zm3.514.243a2.75 2.75 0 0 0-1.552-1.552l-.55 1.396c.324.127.58.382.706.705zm-2.965 5.626c.71-.106 1.252-.177 1.696-.413l-.703-1.325c-.162.086-.387.13-1.215.255zm1.656-3.664c0 .837-.01 1.067-.071 1.239l1.414.5c.168-.475.157-1.022.157-1.739zm.04 3.251a2.75 2.75 0 0 0 1.303-1.513l-1.414-.5a1.25 1.25 0 0 1-.592.688zm-5.995-.459c-.793.12-1.457.218-1.98.365c-.543.152-1.024.38-1.399.816l1.137.979c.11-.127.277-.242.668-.351c.41-.116.965-.2 1.797-.325zm-2.54 3.765c.017-1.065.116-1.395.298-1.605l-1.137-.98c-.58.675-.644 1.552-.661 2.56zM12 14.75h.005v-1.5H12zm-6-11h-.5v1.5H6zm2.5-1H10v-1.5H8.5zm5.5 0h1.5v-1.5H14z"></svg:path>`,
})
export class SolarPaintRollerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteBrokenIcon],svg[solar-palette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 8V6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18v-6m5 7H5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></svg:path><svg:path fill="currentColor" d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-.273 2.635l-.668-.34zm-1.092 1.092l-.34-.668zm1.092-6.362l-.668.34zm-1.092-1.092l-.34.668zM13 22.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18c0 .712 0 1.202-.032 1.58c-.03.371-.085.57-.159.715l1.337.68c.199-.39.28-.809.317-1.272c.038-.454.037-1.015.037-1.703zM18 22.75c.688 0 1.249 0 1.703-.037c.463-.037.882-.118 1.273-.317l-.681-1.337c-.145.074-.344.13-.714.16c-.38.03-.869.031-1.581.031zm3.06-2.456a1.75 1.75 0 0 1-.765.765l.68 1.337a3.25 3.25 0 0 0 1.42-1.42zM22.75 18c0-.688 0-1.249-.037-1.703c-.037-.463-.118-.882-.317-1.273l-1.337.682c.074.144.13.343.16.713c.03.38.031.869.031 1.581zM18 14.75c.712 0 1.202 0 1.58.032c.371.03.57.085.715.159l.68-1.337c-.39-.199-.809-.28-1.272-.317c-.454-.038-1.015-.037-1.703-.037zm4.396.274a3.25 3.25 0 0 0-1.42-1.42l-.681 1.337c.329.167.596.435.764.765zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"></svg:path></svg:g>`,
})
export class SolarPaletteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundBrokenIcon],svg[solar-palette-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m10 8.243l3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"></svg:path><svg:path fill="currentColor" d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-9 4.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path></svg:g>`,
})
export class SolarPaletteRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2BrokenIcon],svg[solar-pallete-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 3.341A9.93 9.93 0 0 1 12 2c5.523 0 10 4.489 10 10.026c0 8.152-8.161 2.393-9.738 4.9c-.395.628.032 1.41.555 1.935a1.68 1.68 0 0 1 0 2.372c-.523.525-1.235.838-1.97.753C5.867 21.413 2 17.172 2 12.026A10 10 0 0 1 3.345 7"></svg:path><svg:circle cx="17.5" cy="11.5" r="1.5"></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"></svg:circle><svg:path d="M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM16 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path></svg:g>`,
})
export class SolarPallete2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaBrokenIcon],svg[solar-panorama-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 5.86c0-.795-.79-1.526-2.117-2.107c-1.175-.515-2.383.467-2.383 1.749v3.217M22 5.86c0 1.196-1.789 2.248-4.5 2.86M22 5.86V9M2 5.86c0-.794.79-1.525 2.117-2.106C5.292 3.238 6.5 4.22 6.5 5.502v3.217M2 5.86v12.717C2 20.467 6.477 22 12 22s10-1.533 10-3.424V13M2 5.86c0 1.195 1.789 2.247 4.5 2.86m0 0c1.578.356 3.468.563 5.5.563s3.922-.207 5.5-.564"></svg:path><svg:path d="M19.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="m21 20l-2.496-2.149a2.405 2.405 0 0 0-2.889-.166l-.23.155a1.6 1.6 0 0 1-1.986-.164l-3.32-3.177a1.84 1.84 0 0 0-2.433-.078L6.29 15.557L2.5 19.104"></svg:path></svg:g>`,
})
export class SolarPanoramaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinBrokenIcon],svg[solar-paper-bin-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 2.052c1.368.09 2.223.332 2.79.99c.897 1.043.657 2.644.176 5.848l-1.2 8c-.365 2.438-.548 3.656-1.392 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.393-4.383l-1.2-8c-.48-3.204-.72-4.805.177-5.848C4.108 2 5.728 2 8.967 2H14m7 4H3m16 13H5"></svg:path><svg:path stroke-linejoin="round" d="m8 6l-4.5 5l7.5 8m3-13L4 16M20 6L7 19m6 0l7.5-8L16 6m-6 0l10 10M4 6l13 13"></svg:path></svg:g>`,
})
export class SolarPaperBinBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2BrokenIcon],svg[solar-paperclip-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.482 13.014c1.044-1 1.566-1.5 1.88-2.02a4.4 4.4 0 0 0 0-4.562c-.314-.52-.836-1.02-1.88-2.02s-1.567-1.5-2.11-1.8a4.95 4.95 0 0 0-4.765 0c-.543.3-1.065.8-2.11 1.8m-1.39 13.005l7.38-7.066c.448-.429.672-.643.789-.876c.21-.417.21-.903 0-1.32c-.117-.233-.341-.447-.79-.876c-.447-.43-.671-.644-.915-.756c-.435-.2-.942-.2-1.378 0c-.243.112-.467.327-.915.756l-7.326 7.015c-1.099 1.052-1.648 1.578-1.84 2.19c-.15.475-.15.982 0 1.457c.192.612.741 1.138 1.84 2.19S6.6 21.71 7.239 21.893a2.76 2.76 0 0 0 1.522 0c.639-.184 1.188-.71 2.287-1.762l3.717-3.558M3.508 10.146L6.503 7.28"></svg:path>`,
})
export class SolarPaperclip2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipBrokenIcon],svg[solar-paperclip-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.01 13.1c2.653-2.54 2.653-6.656 0-9.196s-6.953-2.539-9.606 0M7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l3.974-3.804M3 10.034L6.202 6.97"></svg:path>`,
})
export class SolarPaperclipBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2BrokenIcon],svg[solar-paperclip-rounded-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.565 16.13a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0m8.085 15.364a4.17 4.17 0 0 1-5.88 0a4.125 4.125 0 0 1 0-5.853l2.94-2.926M4.131 8.082a7.22 7.22 0 0 0 0 10.243"></svg:path>`,
})
export class SolarPaperclipRounded2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedBrokenIcon],svg[solar-paperclip-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.885 15.95c1.424-1.437 2.136-2.156 2.525-2.926a5.5 5.5 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925c-1.424-1.437-2.136-2.156-2.899-2.548a5.37 5.37 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548m7.04 14.512c-.356.358-.534.538-.703.668a3.22 3.22 0 0 1-3.951 0c-.17-.13-.347-.31-.702-.668s-.533-.538-.663-.708a3.3 3.3 0 0 1 0-3.988c.13-.17.308-.35.663-.708l2.83-2.856m-8.243-2.49c-.8.808-1.2 1.211-1.473 1.608a5.5 5.5 0 0 0 0 6.242c.274.396.673.8 1.473 1.607"></svg:path>`,
})
export class SolarPaperclipRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingBrokenIcon],svg[solar-paragraph-spacing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21h9m7 0h-3M4 3h16m-8 2.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SolarParagraphSpacingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportBrokenIcon],svg[solar-passport-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 13a3 3 0 1 1 3 3"></svg:path><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19h4"></svg:path></svg:g>`,
})
export class SolarPassportBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticBrokenIcon],svg[solar-passport-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17a3 3 0 1 0-3-3"></svg:path><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"></svg:path></svg:g>`,
})
export class SolarPassportMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordBrokenIcon],svg[solar-password-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 10v4m-1.732-3l3.464 2m0-2l-3.465 2m-3.535-3v4M5 11l3.464 2m0-2L5 13m12.268-3v4m-1.732-3L19 13m0-2l-3.465 2M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path>`,
})
export class SolarPasswordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticBrokenIcon],svg[solar-password-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputBrokenIcon],svg[solar-password-minimalistic-input-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 2v20m7-10c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticInputBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseBrokenIcon],svg[solar-pause-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 18c0 1.886 0 2.828.586 3.414S4.114 22 6 22s2.828 0 3.414-.586S10 19.886 10 18V6c0-1.886 0-2.828-.586-3.414S7.886 2 6 2s-2.828 0-3.414.586S2 4.114 2 6v8m20-8c0-1.886 0-2.828-.586-3.414S19.886 2 18 2s-2.828 0-3.414.586S14 4.114 14 6v12c0 1.886 0 2.828.586 3.414S16.114 22 18 22s2.828 0 3.414-.586S22 19.886 22 18v-8"></svg:path>`,
})
export class SolarPauseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleBrokenIcon],svg[solar-pause-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPauseCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawBrokenIcon],svg[solar-paw-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17.971 18.7c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535l.879-1.789c1.585-3.228 2.378-4.842 3.52-5.227a2.85 2.85 0 0 1 1.819 0c1.14.385 1.934 1.999 3.52 5.227"></svg:path><svg:path d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48Zm11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48Zm-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73Zm19.596 0c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73Z"></svg:path></svg:g>`,
})
export class SolarPawBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2BrokenIcon],svg[solar-pen-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 22h4m12 0h-8m1.888-18.337l.742-.742a3.146 3.146 0 1 1 4.449 4.45l-.742.74m-4.449-4.448s.093 1.576 1.483 2.966s2.966 1.483 2.966 1.483m-4.449-4.45L7.071 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626m14.08-8.13L14.93 11.52m-3.41 3.41c-.462.462-.692.692-.947.891q-.451.352-.969.599c-.291.139-.601.242-1.22.448l-2.626.876m0 0l-.641.213a.848.848 0 0 1-1.073-1.073l.213-.641m1.501 1.5l-1.5-1.5"></svg:path>`,
})
export class SolarPen2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenBrokenIcon],svg[solar-pen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.36 4.079l.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561L12 6.439m7.921 3.2l-5.26 5.262L11.56 18l-.16.161c-.578.577-.867.866-1.185 1.114a6.6 6.6 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0l-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876l-1.876-1.876m0 0l1.094-3.281c.258-.775.387-1.162.56-1.526q.309-.647.749-1.211c.248-.318.537-.607 1.114-1.184L8.5 9.939"></svg:path>`,
})
export class SolarPenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundBrokenIcon],svg[solar-pen-new-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></svg:path><svg:path fill="currentColor" d="M22.75 12a.75.75 0 0 0-1.5 0zM12 2.75a.75.75 0 0 0 0-1.5zM7.376 20.013a.75.75 0 1 0-.752 1.298zm-4.687-2.638a.75.75 0 1 0 1.298-.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 1.25C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75zM6.624 21.311A10.7 10.7 0 0 0 12 22.75v-1.5a9.2 9.2 0 0 1-4.624-1.237zM1.25 12a10.7 10.7 0 0 0 1.439 5.375l1.298-.75A9.2 9.2 0 0 1 2.75 12z"></svg:path></svg:g>`,
})
export class SolarPenNewRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareBrokenIcon],svg[solar-pen-new-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path><svg:path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></svg:path></svg:g>`,
})
export class SolarPenNewSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyBrokenIcon],svg[solar-people-nearby-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path fill="currentColor" d="m6.048 10.849l.237-.712zm2.175.725l-.237.712zm.794 1.682l-.7-.27zM7.77 16.498l.7.269zm10.182-5.649l-.237-.712zm-2.175.725l.237.712zm-.794 1.682l.7-.27zm1.247 3.242l-.7.269zm-5.806 1.26l.651.372zM12 15l.651-.372a.75.75 0 0 0-1.302 0zm5.147-7.103l-.158-.733zm-1.898.407l.157.733zm-6.498 0l.157-.734zm-1.898-.407l-.157.733zm6.723 9.86l-.651.372zm1.462-9.409l-.152-.734zm-6.076 0l-.152.735zm6.322 3.419l.394.638zm-.466.986l.743-.102zm-6.102-.986l-.394.638zm.466.986l.743.102zm1.163-3.43a.75.75 0 0 0 .158-1.493zm3.152-1.493a.75.75 0 0 0 .158 1.492zm-7.686 3.73l2.175.726l.474-1.423l-2.175-.726zm2.506 1.427L7.07 16.228l1.4.539l1.247-3.242zm9.398-2.85l-2.175.726l.474 1.423l2.175-.726zm-3.432 3.388l1.247 3.242l1.4-.539l-1.247-3.241zm-3.208 4.605l1.576-2.758l-1.302-.744l-1.576 2.757zM16.99 7.164l-1.897.406l.314 1.467l1.898-.407zm-8.08.406l-1.9-.406l-.314 1.466l1.898.407zm2.44 7.802l1.576 2.758l1.302-.745l-1.576-2.757zm3.743-7.802l-.206.044l.304 1.469l.216-.046zM8.594 9.037l.216.046l.304-1.47l-.206-.043zm.551 10.213c.798 0 1.535-.428 1.93-1.12l-1.302-.745a.72.72 0 0 1-.628.365zm6.385-2.483a.723.723 0 0 1-.675.983v1.5a2.223 2.223 0 0 0 2.075-3.022zm.01-5.904c-.222.074-.458.147-.65.265l.788 1.277c-.01.005-.002-.001.056-.023c.061-.023.143-.05.28-.096zm.143 2.124a8 8 0 0 1-.104-.277c-.02-.059-.02-.069-.018-.059l-1.486.204c.03.223.124.452.208.67zm-.793-1.859a1.75 1.75 0 0 0-.815 1.727l1.486-.204a.25.25 0 0 1 .117-.246zm3.36-1.733a.78.78 0 0 1-.535.742l.474 1.423a2.28 2.28 0 0 0 1.561-2.165zM7.07 16.228a2.223 2.223 0 0 0 2.075 3.022v-1.5a.723.723 0 0 1-.675-.983zm.916-3.942c.137.045.219.073.28.096c.058.022.065.028.056.023l.788-1.277c-.192-.118-.428-.191-.65-.265zm1.73 1.24c.085-.22.178-.448.209-.671l-1.486-.204c.001-.01.001 0-.018.059a8 8 0 0 1-.104.277zm-1.394-1.121a.25.25 0 0 1 .117.246l1.486.204a1.75 1.75 0 0 0-.815-1.727zM4.25 9.395c0 .983.629 1.855 1.56 2.165l.475-1.423a.78.78 0 0 1-.535-.742zm1.5 0c0-.498.46-.87.946-.765l.315-1.466A2.282 2.282 0 0 0 4.25 9.395zm7.175 8.735a2.22 2.22 0 0 0 1.93 1.12v-1.5c-.26 0-.5-.14-.628-.365zm6.825-8.735a2.282 2.282 0 0 0-2.76-2.231l.314 1.466a.782.782 0 0 1 .946.765zM10.503 7.83q-.7-.074-1.39-.216L8.81 9.083q.762.158 1.535.24zm4.384-.216q-.69.142-1.39.216l.158 1.492a16 16 0 0 0 1.535-.24z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.454 15c1.583.796 2.546 1.848 2.546 3c0 .748-.406 1.454-1.124 2.075M4.546 15C2.963 15.796 2 16.848 2 18c0 2.485 4.477 4.5 10 4.5c1.821 0 3.53-.22 5-.602"></svg:path></svg:g>`,
})
export class SolarPeopleNearbyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeBrokenIcon],svg[solar-perfume-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2s2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"></svg:path><svg:path d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4"></svg:path><svg:path stroke-linecap="round" d="M2.161 16A7 7 0 0 1 2 14.495C2 10.355 5.582 7 10 7s8 3.356 8 7.495c0 1.915-.766 3.662-2.027 4.987c-.45.473-.676.709-1.62 1.114C13.41 21 12.76 21 11.459 21H8.542c-1.302 0-1.952 0-2.896-.404a7 7 0 0 1-.646-.31"></svg:path><svg:path stroke-linecap="round" d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98c2.49.28 3.995-1.396 6.14-1.685"></svg:path><svg:path d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6"></svg:path><svg:path d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482s-1.717-2.026-1.165-2.982s1.97-1.173 3.165-.482Z"></svg:path></svg:g>`,
})
export class SolarPerfumeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneBrokenIcon],svg[solar-phone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path>`,
})
export class SolarPhoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingBrokenIcon],svg[solar-phone-calling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303m-7.778-4.949s.99.282 2.475 1.767s1.768 2.475 1.768 2.475"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarPhoneCallingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedBrokenIcon],svg[solar-phone-calling-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 2s2.2.2 5 3s3 5 3 5m-7.793-4.464s.99.282 2.475 1.767s1.768 2.475 1.768 2.475M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path>`,
})
export class SolarPhoneCallingRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedBrokenIcon],svg[solar-phone-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path>`,
})
export class SolarPhoneRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2BrokenIcon],svg[solar-pie-chart-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z"></svg:path><svg:path stroke-linecap="round" d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 2.723 8.865"></svg:path></svg:g>`,
})
export class SolarPieChart2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3BrokenIcon],svg[solar-pie-chart-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 3.34 7M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5"></svg:path>`,
})
export class SolarPieChart3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartBrokenIcon],svg[solar-pie-chart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 15.552A9.215 9.215 0 0 1 11.21 22a9.21 9.21 0 0 1-8.78-12m6.018-6A9.2 9.2 0 0 0 5 5.987"></svg:path><svg:path d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"></svg:path></svg:g>`,
})
export class SolarPieChartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillBrokenIcon],svg[solar-pill-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.6 6a6.796 6.796 0 0 1 11.002-2.01l6.407 6.408A6.77 6.77 0 0 1 21.894 14M2.107 10a6.77 6.77 0 0 0 1.884 3.602l6.407 6.407A6.796 6.796 0 0 0 21.4 18"></svg:path><svg:path d="M16.806 7.194s-.541 2.806-3.674 5.939s-5.938 3.673-5.938 3.673"></svg:path></svg:g>`,
})
export class SolarPillBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2BrokenIcon],svg[solar-pills-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M12 17c0 1.28.488 2.56 1.464 3.535A4.98 4.98 0 0 0 17 22m-5-5a5 5 0 1 1 10 0m-10 0h10m0 0c0 1.28-.488 2.56-1.465 3.535"></svg:path>`,
})
export class SolarPills2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3BrokenIcon],svg[solar-pills-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 9.472A4.5 4.5 0 0 0 9.682 6.29A4.48 4.48 0 0 0 7 5m4 4.472a4.5 4.5 0 0 1-9 0m9 0H2m0 0A4.5 4.5 0 0 1 3.318 6.29m11.439.831A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Zm2.624 13.784l3.524-3.524a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524A3.738 3.738 0 0 0 14 21.927"></svg:path><svg:path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"></svg:path></svg:g>`,
})
export class SolarPills3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsBrokenIcon],svg[solar-pills-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m11.628-2.806a5.4 5.4 0 0 0-1.376-2.32l-5.126-5.126a5.437 5.437 0 1 0-7.689 7.69l5.127 5.125A5.437 5.437 0 0 0 21.425 15M14.5 6.5L13 5"></svg:path><svg:path fill="currentColor" d="M6.888 10.868a.75.75 0 1 0-.316-1.466zm-1.075 9.907a.75.75 0 1 0-.626 1.363zm-3.95-1.962a.75.75 0 1 0 1.363-.626zM2.75 16a5.25 5.25 0 0 1 4.138-5.132l-.316-1.466A6.75 6.75 0 0 0 1.25 16zm10.389 1.08A5.25 5.25 0 0 1 8 21.25v1.5a6.75 6.75 0 0 0 6.607-5.364zM8 21.25c-.782 0-1.522-.17-2.187-.476l-.626 1.364c.857.393 1.81.612 2.813.612zm-4.774-3.063A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.003.219 1.956.612 2.813z"></svg:path></svg:g>`,
})
export class SolarPillsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinBrokenIcon],svg[solar-pin-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.99 4.95l.53-.53zM8.737 19.43l-.53.53zm-4.116-4.12l.53-.53zm12.945-.315l-.264-.702zm-1.917.72l.264.703zM8.332 8.383l-.704-.258zm.695-1.896l.704.258zm-3.182 4.188l.2.723zm1.457-.539l-.438-.609zm.374-.345l.57.487zm6.575 6.59l.491.568zm-.87 1.821l-.723-.199zm.536-1.454l-.61-.438zM2.719 12.755l-.75.005zm.212-.803l-.65-.374zm8.374 9.391l.001-.75zm.788-.208l-.371-.652zm9.872-8.83l.733.158zM11.697 2.036l.162.732zm10.658 8.594a.75.75 0 1 0-1.305.74zm-4.349-2.6a.75.75 0 0 0 1.061-1.06zM9.269 18.9l-4.117-4.12l-1.06 1.06l4.116 4.12zm8.034-4.607l-1.917.72l.528 1.405l1.917-.72zM9.036 8.64l.695-1.896l-1.408-.516l-.695 1.896zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.876-1.218c-.173.125-.398.198-1.218.424zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637zm.112 2.62q.281-.203.507-.467l-1.142-.973a1.4 1.4 0 0 1-.241.222zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531zM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.218-.875c-.318.443-.455.983-.65 1.693zm-.344-2.586q-.256.22-.452.495l1.218.875q.095-.132.216-.236zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444c-.286-.359-.315-.514-.315-.583l-1.5.009c.003.582.292 1.07.641 1.508c.35.44.861.95 1.481 1.57zm.494-4.828c-.845.234-1.542.424-2.063.634c-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35s1.022-.337 1.903-.58zm-2.177 2.8a.84.84 0 0 1 .111-.424l-1.3-.748a2.34 2.34 0 0 0-.311 1.182zm4.739 7.21c.624.624 1.137 1.139 1.579 1.49c.44.352.931.642 1.517.643l.002-1.5c-.069 0-.224-.029-.585-.316c-.36-.286-.802-.727-1.452-1.378zm4.45-1.958c-.245.888-.412 1.49-.583 1.917c-.172.428-.293.53-.353.564l.743 1.303c.51-.29.792-.786 1.002-1.309c.21-.524.402-1.225.637-2.077zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.84.84 0 0 1-.416.11zm6.527-6.397c1.361-.511 2.463-.923 3.246-1.358c.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88c-.663.369-1.638.737-3.046 1.266zM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414c-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.172.443c.612.455 1.357 1.197 2.428 2.27zM9.731 6.744c.522-1.423.885-2.41 1.25-3.08c.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642c-.431.792-.837 1.906-1.341 3.282zm11.32 4.626c.2.355.224.58.181.776l1.466.317c.142-.657-.018-1.26-.343-1.833zm-5.592-5.89l2.547 2.55l1.061-1.06l-2.547-2.55z"></svg:path><svg:path fill="currentColor" d="M1.47 21.47a.75.75 0 0 0 1.06 1.06zm5.714-3.598a.75.75 0 0 0-1.061-1.06zM2.53 22.53l4.653-4.658l-1.061-1.06l-4.654 4.658z"></svg:path>`,
})
export class SolarPinBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleBrokenIcon],svg[solar-pin-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14.495 7.975l.53-.53zm1.54 1.543l-.53.53zm-5.166 5.696l-.53.53zm-2.058-2.06l.53-.53zm6.473-.157l-.264-.702zm-.96.36l.265.702zm-3.658-3.666l-.704-.258zm.347-.948l.704.258zm-1.59 2.094l.199.723zm.728-.27l-.438-.608zm.187-.172l.57.487zm3.288 3.295l.49.567zm-.436.91l-.723-.198zm.269-.727l-.61-.437zm-5.6-1.995l-.75.004zm.106-.402l-.65-.374zm4.188 4.696v-.75zm.394-.105l-.372-.651zm-.198-9.549l.161.732zm-5.38 9.452a.75.75 0 0 0 1.062 1.06zm3.388-1.269a.75.75 0 1 0-1.061-1.06zm3.607-6.196l1.541 1.543l1.061-1.06l-1.54-1.543zm-2.564 6.18l-2.06-2.062l-1.06 1.06l2.058 2.06zm3.62-2.39l-.959.36l.528 1.404l.958-.36zM11.37 9.95l.348-.95l-1.409-.516l-.347.948zm-1.748 1.61c.328-.09.678-.175.967-.383L9.713 9.96c-.02.014-.052.034-.49.155zm.34-2.126c-.156.426-.18.458-.195.476l1.142.973c.23-.271.344-.613.461-.933zm.627 1.743q.177-.128.32-.294L9.767 9.91a.3.3 0 0 1-.054.05zm3.472 1.48c-.318.119-.658.235-.927.467l.982 1.134c.018-.015.05-.038.473-.198zm-.148 2.143c.12-.436.141-.47.155-.489l-1.219-.874c-.207.289-.292.638-.382.966zm-.779-1.676a1.8 1.8 0 0 0-.285.313l1.219.874a.3.3 0 0 1 .049-.053zm-3.793-.499c-.33-.33-.53-.533-.656-.69c-.127-.16-.076-.154-.076-.061l-1.5.01c.003.419.212.746.403.985c.19.24.465.512.768.816zm-.118-2.51c-.413.114-.786.215-1.071.33c-.284.113-.627.294-.837.658l1.3.748c-.047.081-.093.062.096-.014c.187-.075.461-.152.91-.276zm-.614 1.759q0-.012.006-.023l-1.3-.748a1.55 1.55 0 0 0-.206.78zm1.73 3.872c.305.305.579.581.82.774c.24.191.57.402.992.403l.003-1.5c.094 0 .1.05-.06-.077c-.159-.126-.362-.328-.694-.66zm2.128-1.343c-.124.452-.202.729-.277.918c-.077.19-.097.143-.015.096l.743 1.303c.367-.21.55-.555.664-.84c.115-.287.217-.663.331-1.08zm-.316 2.52c.27 0 .534-.07.767-.203l-.743-1.303a.04.04 0 0 1-.021.006zm3.354-6.874c.54.54.884.888 1.09 1.165c.097.131.135.21.149.252l.006.026v.003l1.466.317c.128-.596-.121-1.093-.416-1.491c-.287-.388-.728-.826-1.234-1.332zm.042 3.651c.67-.251 1.252-.468 1.674-.702c.433-.24.866-.59.995-1.186l-1.466-.317l-.001.003l-.017.02a1 1 0 0 1-.24.168c-.3.168-.757.341-1.472.61zm-.522-6.254c-.509-.51-.95-.954-1.34-1.243c-.399-.297-.899-.548-1.498-.416l.323 1.464h.008l.02.006a1 1 0 0 1 .254.15c.278.207.628.554 1.172 1.1zm-3.308 1.556c.266-.723.437-1.185.603-1.49a1 1 0 0 1 .183-.257l.005-.003h.002l-.323-1.465c-.599.132-.947.57-1.185 1.008c-.231.426-.445 1.014-.693 1.691zm-3.686 8.03l2.326-2.33l-1.061-1.06l-2.327 2.329z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPinCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListBrokenIcon],svg[solar-pin-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.632 8.224c1.53 1.53 2.295 2.295 2.294 3.124a2 2 0 0 1-.162.788c-.328.762-1.333 1.162-3.344 1.963l-.145.057c-.57.227-.855.34-1.085.523a2 2 0 0 0-.444.492c-.158.247-.242.542-.41 1.132c-.259.915-.389 1.373-.666 1.576a1 1 0 0 1-.714.186c-.341-.042-.678-.379-1.35-1.051l-3.13-3.13c-.673-.674-1.01-1.01-1.052-1.35a1 1 0 0 1 .186-.715c.203-.277.66-.407 1.576-.667c.59-.167.885-.251 1.132-.409q.284-.181.492-.444c.182-.23.296-.515.523-1.085l.057-.145c.8-2.01 1.2-3.016 1.963-3.344a2 2 0 0 1 .788-.162c.362 0 .712.145 1.118.437M3.347 18.142l2.694-2.694M22 8h-5m5 4.5h-4m4 4.5h-1m-8 0h4"></svg:path>`,
})
export class SolarPinListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2BrokenIcon],svg[solar-pip-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 11v1c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06c-.383.528-.613 1.146-.75 1.939"></svg:path><svg:path d="M11 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C12.602 11 13.068 11 14 11h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 12.602 18 13.068 18 14s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 17 15.932 17 15 17h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C11 15.398 11 14.932 11 14Z"></svg:path></svg:g>`,
})
export class SolarPip2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipBrokenIcon],svg[solar-pip-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2m20 0c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path></svg:g>`,
})
export class SolarPipBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteBrokenIcon],svg[solar-pipette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.531 19.291l-.53-.53zm.802-12.446l.53-.53zm-1.092-1.092l-.53.53zm2.184-2.183l.53-.53zm1.091 1.091l-.53.53a.75.75 0 0 0 1.06 0zm1.456-1.455l-.53-.53zm4.367 7.278l-.53-.53a.75.75 0 0 0 0 1.06zm1.091 1.091l-.53.53zm-17.978 7.79l.53.53zm.629-.63l-.53-.53zm1.555 2.813l.53.53zm.628-.629l-.53-.53zM3.78 16.747l-.746.082zm-.053-.476l.745-.082zm3.527 3.95l-.083.746zm.476.053l.082-.745zm-2.214.404L6 21.25zm1.392-.488l.022-.75zM3.88 14.426l-.663-.351zm-.203.58l-.737-.14zm-.355 3.48L2.75 18zm.488-1.393l.75-.022zm5.764 3.027l.351.662zm-.58.203l.14.737zm4.183-7.385A.75.75 0 0 0 12.117 14zm-1.207 4.915a.75.75 0 1 0 1.06-1.061zm-.793-2.915A.75.75 0 0 0 10.117 16zm-2.558-6.44a.75.75 0 0 0 1.06 1.06zM6.71 12.53a.75.75 0 1 0-1.062-1.06zm14.415-7.327a.75.75 0 1 0 1.444-.406zm.98 3.338a.75.75 0 0 0-1.3-.748zm-10.24-2.227l-1.092-1.091l-1.061 1.06l1.092 1.092zm6.913 6.914l-1.091-1.091l-1.061 1.06l1.092 1.092zM11.894 4.1l1.092 1.092l1.06-1.06l-1.091-1.093zm2.153 1.092l1.455-1.456l-1.06-1.06l-1.456 1.455zm6.217 3.306l-1.456 1.455l1.06 1.061l1.457-1.456zm-9.461-1.123l5.822 5.822l1.06-1.06l-5.822-5.823zm-7.82 12.52l.628-.629l-1.06-1.06l-.63.628zm2.183 2.183l.629-.629l-1.061-1.06l-.629.628zm-.642-5.414l-.053-.476l-1.49.166l.052.476zm2.646 4.303l.476.053l.165-1.491l-.475-.053zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027zM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.8 2.8 0 0 0-1.9.666zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488zm-1.254-2.113a2.8 2.8 0 0 0-.277.792l1.473.279q.037-.194.13-.369zM15.502 3.736a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0zM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885zM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123zM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96zM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058zm1.577-1.563a1.3 1.3 0 0 1-.369.13l.28 1.473a2.8 2.8 0 0 0 .791-.277zm9.585-8.443l1.092 1.092l1.06-1.061l-1.091-1.092zm-7.746 8.807l3.968-3.968l-1.06-1.061L10 18.761zm3.968-3.968l2.656-2.656l-1.061-1.06l-2.655 2.655zm0-1.061l-1.853-1.854L12.117 14l1.853 1.854zm-2 2l-1.853-1.854L10.117 16l1.853 1.854zM9.68 9.558l2.183-2.183l-1.06-1.06l-2.184 2.183zM5.24 14l1.468-1.469l-1.06-1.06l-1.47 1.468zM20.263 3.736c.424.424.71.93.86 1.467l1.444-.406a4.85 4.85 0 0 0-1.244-2.121zm.54 4.057a3.4 3.4 0 0 1-.54.705l1.06 1.06c.31-.31.571-.652.78-1.017z"></svg:path>`,
})
export class SolarPipetteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticBrokenIcon],svg[solar-plaaylist-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 16H3m7-5H3"></svg:path><svg:path d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"></svg:path><svg:path stroke-linecap="round" d="M20 6H9.5M3 6h2.25"></svg:path></svg:g>`,
})
export class SolarPlaaylistMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2BrokenIcon],svg[solar-plain-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.628 9.094c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884L10.24 4.927M5.575 6.482c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362l1.566-4.696M6 18l3.75-3.75M21 3l-8.5 8.5"></svg:path>`,
})
export class SolarPlain2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain3BrokenIcon],svg[solar-plain-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.636 15.67c-1.21 3.63-1.816 5.446-2.703 5.962c-.844.49-1.887.49-2.73 0c-.888-.516-1.493-2.331-2.703-5.962c-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454c-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364M20.026 11.5l.326-.98c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L12.423 4m5.367 2.21l-4.211 4.165"></svg:path>`,
})
export class SolarPlain3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainBrokenIcon],svg[solar-plain-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.636 15.67c-1.21 3.63-1.816 5.446-2.703 5.962c-.844.49-1.887.49-2.73 0c-.888-.516-1.493-2.331-2.703-5.962c-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454c-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364M20.026 11.5l.326-.98c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L12.423 4"></svg:path></svg:g>`,
})
export class SolarPlainBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2BrokenIcon],svg[solar-planet-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray="3.5 2.5" d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69"></svg:path><svg:path d="M8 5.07A8 8 0 1 1 5.07 8"></svg:path></svg:g>`,
})
export class SolarPlanet2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3BrokenIcon],svg[solar-planet-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 8.008S5.937 11 10.437 11M21 8.008s-1.917-.138-4.5.748c-.797.273-1.303.695-2.5 1.244M3 14.008s.768-.05 2 .107m2.903.64C9.401 15.228 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPlanet3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4BrokenIcon],svg[solar-planet-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 20.93A8 8 0 1 0 3.07 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496c2.009-.59 3.5-.499 3.5-.499m-14 5s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18a10.85 10.85 0 0 0 5.181-1.333"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarPlanet4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetBrokenIcon],svg[solar-planet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 5.07A8 8 0 1 1 5.07 8"></svg:path><svg:path stroke-linejoin="round" d="M13.83 14.926c-5.428 2.893-10.648 3.927-11.66 2.31c-.532-.852.211-2.27 1.83-3.846m13.849-7.2c2.011-.37 3.49-.21 3.98.573c.798 1.275-1.26 3.817-4.829 6.253"></svg:path></svg:g>`,
})
export class SolarPlanetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateBrokenIcon],svg[solar-plate-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4m6 0c3.114.01 4.765.108 5.828 1.17c.654.654.943 1.529 1.07 2.83M12 5V3m-4 7.5h8M8 14h5.5"></svg:path>`,
})
export class SolarPlateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayBrokenIcon],svg[solar-play-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484"></svg:path>`,
})
export class SolarPlayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleBrokenIcon],svg[solar-play-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.888 9.935C14.963 10.812 15.5 11.25 15.5 12s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66c-.237.167-.506.339-.784.508c-1.073.652-1.609.978-2.09.617c-.48-.36-.524-1.116-.612-2.628c-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628c.481-.361 1.018-.035 2.09.617c.278.169.547.341.784.508c.27.19.565.418.862.66Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPlayCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamBrokenIcon],svg[solar-play-stream-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 12a9.97 9.97 0 0 1-2.922 7.064M2 12a9.97 9.97 0 0 1 2.936-7.078M19.141 5a10 10 0 0 1 2.027 3M5 19.142A10 10 0 0 1 2.832 16m13.453-7.956C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982C6 10.427 6.673 9.018 7.762 8"></svg:path><svg:path d="M13.656 10.451C14.552 11.11 15 11.438 15 12s-.448.891-1.344 1.549a13 13 0 0 1-.718.495a12 12 0 0 1-.653.38c-.894.49-1.34.735-1.741.464s-.437-.838-.51-1.971c-.02-.321-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.272.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495Z"></svg:path></svg:g>`,
})
export class SolarPlayStreamBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedBrokenIcon],svg[solar-playback-speed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-dasharray="4 3" stroke-linecap="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path></svg:g>`,
})
export class SolarPlaybackSpeedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2BrokenIcon],svg[solar-playlist-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429s1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10"></svg:path><svg:path stroke-linecap="round" d="m18.675 7.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372a1 1 0 0 0 .223-.356C21 9.147 21 8.957 21 8.578c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM9 13H3m5 4H3M3 5h7.412M15 5h-1.588M13 9H6.824M3 9h1.324"></svg:path></svg:g>`,
})
export class SolarPlaylist2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistBrokenIcon],svg[solar-playlist-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 14H3m8 4H3"></svg:path><svg:path d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.121c-1.654.955-2.48 1.433-3.138 1.194a1.5 1.5 0 0 1-.451-.261c-.536-.45-.536-1.404-.536-3.314s0-2.865.536-3.314a1.5 1.5 0 0 1 .451-.26c.657-.24 1.484.238 3.138 1.192Z"></svg:path><svg:path stroke-linecap="round" d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarPlaylistBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2BrokenIcon],svg[solar-playlist-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 14H3m5 4H3m14-1.5V8"></svg:path><svg:circle cx="14.5" cy="16.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M21 12a4 4 0 0 1-4-4M3 6h7.412M15 6h-1.588M13 10H6.824M3 10h1.324"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3BrokenIcon],svg[solar-playlist-minimalistic-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M8 14H3m9-5H3"></svg:path><svg:path d="M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429s1.12-2.572 2.5-2.572S16 16.008 16 17.43Zm0 0V11"></svg:path><svg:path stroke-linecap="round" d="m18.675 8.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356c-.061.166-.061.355-.061.734c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.373a1 1 0 0 0 .223-.356C21 10.149 21 9.958 21 9.58c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM20 4H9.5M3 4h2.25"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleBrokenIcon],svg[solar-plug-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15.108v5.042c0 1.114-.905 2.038-1.987 1.817C5.442 21.038 2 16.966 2 12.083A10.1 10.1 0 0 1 3.362 7m13.002 14.158A10.09 10.09 0 0 0 22 12.083C22 6.514 17.523 2 12 2a9.9 9.9 0 0 0-5 1.349"></svg:path><svg:path d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M13.5 11V9m-3 2V9"></svg:path></svg:g>`,
})
export class SolarPlugCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusBrokenIcon],svg[solar-plus-minus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m3.464 20.535l17.071-17.07"></svg:path><svg:path stroke-linecap="round" d="M18 17h-5m-2.5-9H8m0 0H5.5M8 8V5.5M8 8v2.5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarPlusMinusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastBrokenIcon],svg[solar-podcast-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 10h2m-2 3h2m-6-3h1m-1 3h1"></svg:path><svg:path fill="currentColor" d="M16.951 8.25a.75.75 0 1 0 1.415-.5zM6.75 14.154V10h-1.5v4.154zm-1.5 0c0 .605-.49 1.096-1.096 1.096v1.5a2.596 2.596 0 0 0 2.596-2.596zm12 0a2.596 2.596 0 0 0 2.596 2.596v-1.5c-.605 0-1.096-.49-1.096-1.096zM12 3.25A6.75 6.75 0 0 0 5.25 10h1.5c0-2.9 2.35-5.25 5.25-5.25zm0 1.5c2.285 0 4.23 1.46 4.951 3.5l1.415-.5A6.75 6.75 0 0 0 12 3.25z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16v3"></svg:path></svg:g>`,
})
export class SolarPodcastBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapBrokenIcon],svg[solar-point-on-map-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 13.162c0-1.043 0-3.565-.283-3.958s-.778-.558-1.768-.888L18 8m3 8.829c0 1.29 0 1.936-.34 2.351c-.115.14-.255.26-.413.35c-.465.267-1.102.16-2.375-.051c-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996c-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838V17m0-4.092c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.515-.287 1.197-.11 2.454.304"></svg:path><svg:path stroke-linecap="round" d="M17.25 11.251c.486-1.157.75-2.39.75-3.55C18 4.551 15.314 2 12 2S6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.76 2.76 0 0 0 2.194 0c.954-.416 1.8-1.071 2.507-1.872"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle></svg:g>`,
})
export class SolarPointOnMapBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveBrokenIcon],svg[solar-point-on-map-perspective-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16s0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879c-.3.3-.498.662-.628 1.121M21 21l-3.764-2.091M3 11l11 6.111"></svg:path><svg:path d="m3.5 21l6.358-3.74L12 16m5-3V8m-.5-5.959A3 3 0 1 1 14.041 4.5"></svg:path></svg:g>`,
})
export class SolarPointOnMapPerspectiveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalBrokenIcon],svg[solar-posts-carousel-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2m13 .126c.387.084.68.225.914.46c.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414S14.385 19 12.5 19h-1c-1.886 0-2.829 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.617 5.054 9.443 5.005 11 5"></svg:path>`,
})
export class SolarPostsCarouselHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalBrokenIcon],svg[solar-posts-carousel-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.874 9c-.084-.387-.225-.68-.46-.914C17.828 7.5 16.886 7.5 15 7.5H9c-1.886 0-2.828 0-3.414.586S5 9.614 5 11.5v1c0 1.886 0 2.828.586 3.414S7.114 16.5 9 16.5h6c1.886 0 2.828 0 3.414-.586c.532-.531.581-1.357.585-2.914M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2m14 20v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5"></svg:path>`,
})
export class SolarPostsCarouselVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerBrokenIcon],svg[solar-power-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v4M8.5 3.706A9 9 0 0 0 3 12c0 2.305.867 4.408 2.292 6M15.5 3.706A9.003 9.003 0 0 1 9 20.488"></svg:path>`,
})
export class SolarPowerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphBrokenIcon],svg[solar-presentation-graph-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5s.374.167.707.5l.586.586c.333.333.5.5.707.5s.374-.167.707-.5L15 8.5M12 21v-4m-2 5l2-1m2 1l-2-1"></svg:path><svg:path d="M4 2v8.5c0 3.064 0 4.596 1.004 5.548s2.62.952 5.853.952h2.286c3.232 0 4.849 0 5.853-.952S20 13.564 20 10.5V10m0-8v4"></svg:path></svg:g>`,
})
export class SolarPresentationGraphBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2BrokenIcon],svg[solar-printer-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879c.3.3.498.662.628 1.121M9 10H6m13 5H5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 15v1c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862M6 15v1c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarPrinter2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterBrokenIcon],svg[solar-printer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 10H6m13 4H5"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5H9m4 2.5H9m13-7c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879c.3.3.498.662.628 1.121"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 15v1c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862M6 15v1c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862"></svg:path></svg:g>`,
})
export class SolarPrinterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticBrokenIcon],svg[solar-printer-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879c.3.3.498.662.628 1.121"></svg:path><svg:path d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 12v4c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862M6 12v4c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862"></svg:path><svg:path d="M12 11c3.412 0 5.873.713 7.5 1.443m-15 0a15.8 15.8 0 0 1 3.5-1.08"></svg:path></svg:g>`,
})
export class SolarPrinterMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingBrokenIcon],svg[solar-programming-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarProgrammingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorBrokenIcon],svg[solar-projector-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 6.017c1.553.047 2.48.22 3.121.862c.49.49.707 1.146.803 2.121M10 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h2m4 0h2c2.828 0 4.243 0 5.121-.879c.769-.768.865-1.946.877-4.121"></svg:path><svg:path fill="currentColor" d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"></svg:path><svg:circle cx="14" cy="9" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 9a2 2 0 1 0 2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9.5V11"></svg:path></svg:g>`,
})
export class SolarProjectorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2BrokenIcon],svg[solar-pulse-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 15h3c.634 0 .95 0 1.234.121c.283.122.501.351.938.81l1.142 1.199c.384.403.576.605.81.59c.234-.017.397-.242.724-.693l3.63-5.01c.34-.47.51-.704.75-.715c.24-.01.431.207.813.643l1.777 2.03c.441.505.662.757.957.891c.296.134.63.134 1.3.134H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarPulse2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseBrokenIcon],svg[solar-pulse-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5 15h1.394c.786 0 1.18 0 1.511.177c.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933c.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071c.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243c.342.19.752.19 1.573.19H19"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarPulseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeBrokenIcon],svg[solar-qr-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 16.9c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66c.48-.295 1.136-.295 2.445-.295h1.1c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66C9.065 22 8.409 22 7.1 22c-1.964 0-2.946 0-3.667-.442a3 3 0 0 1-.99-.99M22 7.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66c-.48.295-1.136.295-2.445.295h-1.1c-1.886 0-2.828 0-3.414-.586S13.5 8.386 13.5 6.5V5.4c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66C14.935 2 15.591 2 16.9 2c1.964 0 2.946 0 3.668.442a3 3 0 0 1 .99.99"></svg:path><svg:path fill="currentColor" d="M16.5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C16.977 5 17.235 5 17.75 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165c-.129-.182-.129-.44-.129-.955M12.75 22a.75.75 0 0 0 1.5 0zm1.639-8.163l.417.624zm-.552.552l-.623-.417zM19 12.75h-2v1.5h2zM12.75 19v3h1.5v-3zM17 12.75c-.687 0-1.258 0-1.719.046c-.474.048-.913.153-1.309.418l.834 1.247c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM14.25 17c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.835-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.786c-.3.2-.558.458-.758.758l1.247.834a1.3 1.3 0 0 1 .345-.345zm8.778.286a.75.75 0 0 0-1.5 0zm-1.985 8.348l.287.693zm1.083-1.083l-.693-.287zM17 22.75h2v-1.5h-2zM22.75 17v-3.5h-1.5V17zM19 22.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zM21.25 19c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zm-.198 3.54a2.75 2.75 0 0 0 1.489-1.488l-1.386-.574a1.25 1.25 0 0 1-.677.677z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 7.1c0-1.964 0-2.946.442-3.667a3 3 0 0 1 .99-.99C4.155 2 5.137 2 7.1 2c1.31 0 1.964 0 2.445.295a2 2 0 0 1 .66.66c.295.48.295 1.136.295 2.445v1.1c0 1.886 0 2.828-.586 3.414S8.386 10.5 6.5 10.5H5.4c-1.31 0-1.964 0-2.445-.295a2 2 0 0 1-.66-.66C2 9.065 2 8.409 2 7.1Z"></svg:path><svg:path fill="currentColor" d="M5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C5.477 5 5.735 5 6.25 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 7.023 5 6.765 5 6.25m0 11.5c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166c.182-.129.44-.129.955-.129s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166C7.023 19 6.765 19 6.25 19s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 18.523 5 18.265 5 17.75m11 0c0-.702 0-1.053.169-1.306a1 1 0 0 1 .275-.275C16.697 16 17.048 16 17.75 16s1.053 0 1.306.169a1 1 0 0 1 .275.275c.169.253.169.604.169 1.306s0 1.053-.169 1.306a1 1 0 0 1-.275.275c-.253.169-.604.169-1.306.169s-1.053 0-1.306-.169a1 1 0 0 1-.275-.275C16 18.803 16 18.452 16 17.75"></svg:path></svg:g>`,
})
export class SolarQrCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleBrokenIcon],svg[solar-question-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarQuestionCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareBrokenIcon],svg[solar-question-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarQuestionSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenBrokenIcon],svg[solar-quit-full-screen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22M2 10c1.17 0 2.158 0 3-.035M10 2c0 3.771 0 5.657-1.172 6.828M14 22c0-3.771 0-5.657 1.172-6.828M22 14c-1.17 0-2.158 0-3 .035M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2"></svg:path>`,
})
export class SolarQuitFullScreenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleBrokenIcon],svg[solar-quit-full-screen-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareBrokenIcon],svg[solar-quit-full-screen-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipBrokenIcon],svg[solar-quit-pip-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5v3m0-3h3m-3 0l4 4"></svg:path><svg:path stroke-linecap="round" d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2m20 0c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path></svg:g>`,
})
export class SolarQuitPipBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2BrokenIcon],svg[solar-radar-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.412 21.659q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.97 9.97 0 0 0-7.501.95M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898a10 10 0 0 0 2.661 9.734m2.367-10.96A6 6 0 1 0 17.811 10.5m-7.708-4.195A6 6 0 0 1 12 6c1.093 0 2.117.292 3 .802"></svg:path>`,
})
export class SolarRadar2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarBrokenIcon],svg[solar-radar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.412 21.659q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.97 9.97 0 0 0-7.501.95M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898a10 10 0 0 0 2.661 9.734"></svg:path>`,
})
export class SolarRadarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurBrokenIcon],svg[solar-radial-blur-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm-4.5 4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M18.25 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m12.5 4.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-12.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRadialBlurBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioBrokenIcon],svg[solar-radio-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 9h5a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4h1"></svg:path><svg:path d="M9 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M15 11.5V13m-2 4h5M6.5 6L15 2m7 12c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path></svg:g>`,
})
export class SolarRadioBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticBrokenIcon],svg[solar-radio-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:circle cx="8" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" d="M13.5 11H19m-5.5 3h.5m5 0h-2.5m-.5 3h-2.5m5.5 0h-.5M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingBrokenIcon],svg[solar-ranking-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16 22v-9c0-1.414 0-2.121-.44-2.56C15.122 10 14.415 10 13 10h-2c-1.414 0-2.121 0-2.56.44C8 10.878 8 11.585 8 13m0 9v-5m0 5c0-1.414 0-2.121-.44-2.56C7.122 19 6.415 19 5 19s-2.121 0-2.56.44C2 19.878 2 20.585 2 22m20 0v-3c0-1.414 0-2.121-.44-2.56C21.122 16 20.415 16 19 16s-2.121 0-2.56.44C16 16.878 16 17.585 16 19v3"></svg:path><svg:path d="M11.146 3.023C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path></svg:g>`,
})
export class SolarRankingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareBrokenIcon],svg[solar-recive-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7 12h7m0 0l-3 3m3-3l-3-3"></svg:path><svg:path d="M17 16V8m5 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarReciveSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareBrokenIcon],svg[solar-recive-twice-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11"></svg:path><svg:path d="M17 6v12m5-6c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarReciveTwiceSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordBrokenIcon],svg[solar-record-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarRecordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleBrokenIcon],svg[solar-record-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path><svg:path d="M16 12a4 4 0 1 1-2-3.465"></svg:path></svg:g>`,
})
export class SolarRecordCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticBrokenIcon],svg[solar-record-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 11.5A3.5 3.5 0 1 1 17.5 8"></svg:path><svg:path d="M10 11.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M6.5 15h11"></svg:path></svg:g>`,
})
export class SolarRecordMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareBrokenIcon],svg[solar-record-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-8 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 14.5h8m6-2.5c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarRecordSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2BrokenIcon],svg[solar-reel-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22h10"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path fill="currentColor" d="M19.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarReel2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelBrokenIcon],svg[solar-reel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22h10"></svg:path><svg:path d="M13.5 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-6-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarReelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshBrokenIcon],svg[solar-refresh-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.68 11.333h-.75zm0 1.667l-.528.532a.75.75 0 0 0 1.056 0zm2.208-1.134A.75.75 0 1 0 4.83 10.8zM2.528 10.8a.75.75 0 0 0-1.056 1.065zm16.088-3.408a.75.75 0 1 0 1.277-.786zm-1.723-3.785a.75.75 0 1 0-.786 1.277zm-4.43.151a.75.75 0 0 0 .074-1.498zM12.08 2.25c-5.047 0-9.15 4.061-9.15 9.083h1.5c0-4.182 3.42-7.583 7.65-7.583zm-9.15 9.083V13h1.5v-1.667zm1.28 2.2l1.679-1.667L4.83 10.8l-1.68 1.667zm0-1.065L2.528 10.8l-1.057 1.065l1.68 1.666zm15.684-5.86a9.16 9.16 0 0 0-3-3l-.786 1.277a7.66 7.66 0 0 1 2.509 2.508zM12.537 2.26a9 9 0 0 0-.458-.011v1.5q.193 0 .384.01zM11.883 21v.75zm8.43-8.333h.75zm0-1.667l.528-.533a.75.75 0 0 0-1.055 0zM18.1 12.133a.75.75 0 1 0 1.055 1.067zm3.373 1.067a.75.75 0 1 0 1.054-1.067zM5.318 16.606a.75.75 0 1 0-1.277.788zm6.215 3.636a.75.75 0 0 0-.066 1.499zm-4.42.188a.75.75 0 0 0 .774-1.285zm4.77 1.32c5.062 0 9.18-4.058 9.18-9.083h-1.5c0 4.18-3.43 7.583-7.68 7.583zm9.18-9.083V11h-1.5v1.667zm-1.277-2.2L18.1 12.133l1.055 1.067l1.686-1.667zm0 1.066l1.687 1.667l1.054-1.067l-1.686-1.666zm-8.32 10.208q.208.009.417.009v-1.5q-.176 0-.35-.008zm-7.425-4.347a9.2 9.2 0 0 0 3.072 3.036l.774-1.285a7.7 7.7 0 0 1-2.57-2.539z"></svg:path>`,
})
export class SolarRefreshBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleBrokenIcon],svg[solar-refresh-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRefreshCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareBrokenIcon],svg[solar-refresh-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarRefreshSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2BrokenIcon],svg[solar-remote-controller-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteController2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerBrokenIcon],svg[solar-remote-controller-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 5.5h6"></svg:path><svg:circle cx="9" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="9" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticBrokenIcon],svg[solar-remote-controller-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:circle cx="12" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderBrokenIcon],svg[solar-remove-folder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 14h-4m12-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path>`,
})
export class SolarRemoveFolderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderBrokenIcon],svg[solar-reorder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 10h-8m-6 0h2m-2 8h8m6 0h-2m2-4H5m14-8H5"></svg:path>`,
})
export class SolarReorderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatBrokenIcon],svg[solar-repeat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43A7.74 7.74 0 0 0 9 19.75v-1.5a6.24 6.24 0 0 1-5.13-2.68zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.74 7.74 0 0 0 15 4.25v1.5c2.123 0 4 1.058 5.13 2.68z"></svg:path>`,
})
export class SolarRepeatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneBrokenIcon],svg[solar-repeat-one-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 11.5L12 10v4"></svg:path><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43A7.74 7.74 0 0 0 9 19.75v-1.5a6.24 6.24 0 0 1-5.13-2.68zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.74 7.74 0 0 0 15 4.25v1.5c2.123 0 4 1.058 5.13 2.68z"></svg:path></svg:g>`,
})
export class SolarRepeatOneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticBrokenIcon],svg[solar-repeat-one-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 12H8"></svg:path><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43A7.74 7.74 0 0 0 9 19.75v-1.5a6.24 6.24 0 0 1-5.13-2.68zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.74 7.74 0 0 0 15 4.25v1.5c2.123 0 4 1.058 5.13 2.68z"></svg:path></svg:g>`,
})
export class SolarRepeatOneMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2BrokenIcon],svg[solar-reply-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12l5 5m-5-5l5-5m-5 5H11m3.5 0c1.667 0 5-1 5-5"></svg:path>`,
})
export class SolarReply2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyBrokenIcon],svg[solar-reply-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12l5-5m-5 5l5 5m-5-5H11m3.5 0c1.667 0 5 1 5 5"></svg:path>`,
})
export class SolarReplyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartBrokenIcon],svg[solar-restart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarRestartBroken0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.729 10.929A8.003 8.003 0 0 1 8.5 20.197M18.363 8.05l-.707-.707A8 8 0 0 0 5.754 18m12.61-9.95h-4.243m4.243 0V3.809"></svg:path></svg:g><svg:defs><svg:clippath id="solarRestartBroken0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarRestartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleBrokenIcon],svg[solar-restart-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRestartCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareBrokenIcon],svg[solar-restart-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarRestartSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteBrokenIcon],svg[solar-revote-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.682 19.662l.534.526zm0-15.597l-.534.526zm-14.83.526a.75.75 0 0 0-1.068-1.053zM8.4 2.777l-.534-.526a.75.75 0 0 0 0 1.052zM9.616 5.08a.75.75 0 1 0 1.069-1.052zm1.069-3.554A.75.75 0 1 0 9.616.474zM21.75 12a.75.75 0 0 0-1.5 0zm-1.56-3.957a.75.75 0 0 0 1.498-.086zM12 20.25c-2.143 0-3.673-.002-4.836-.16c-1.14-.156-1.815-.45-2.312-.954l-1.068 1.052c.82.834 1.866 1.209 3.177 1.388c1.288.175 2.94.174 5.039.174zm-9.75-8.387c0 2.133-.002 3.807.171 5.111c.176 1.325.543 2.382 1.363 3.214l1.068-1.052c-.498-.506-.79-1.196-.944-2.358c-.156-1.184-.158-2.74-.158-4.915zM12 21.75c2.1 0 3.751.002 5.04-.174c1.31-.18 2.355-.554 3.176-1.388l-1.068-1.052c-.497.504-1.171.798-2.312.954c-1.163.158-2.693.16-4.836.16zm0-18.273c2.143 0 3.673.001 4.836.16c1.14.156 1.815.45 2.312.954l1.068-1.053c-.82-.833-1.866-1.208-3.177-1.387c-1.288-.176-2.94-.174-5.039-.174zm-8.25 8.386c0-2.174.002-3.73.158-4.914c.154-1.163.446-1.852.944-2.358L3.784 3.538c-.82.832-1.187 1.89-1.363 3.214c-.173 1.305-.171 2.979-.171 5.111zM12 1.977c-1.415 0-2.62 0-3.638.051l.076 1.498c.972-.049 2.134-.05 3.562-.05zM7.866 3.303l1.75 1.777l1.069-1.052l-1.75-1.777zm1.068 0l1.75-1.777L9.617.474L7.866 2.25zM20.25 12c0 2.127-.005 3.653-.163 4.814c-.155 1.14-.446 1.82-.94 2.322l1.07 1.052c.81-.823 1.178-1.866 1.356-3.171c.175-1.285.177-2.929.177-5.017zm1.438-4.043c-.11-1.913-.422-3.353-1.472-4.419l-1.068 1.053c.64.65.936 1.6 1.043 3.452z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarRevoteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackBrokenIcon],svg[solar-rewind-10-seconds-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-3.999M8 2.832A10 10 0 0 0 5 4.86A9.97 9.97 0 0 0 2 12q.002 1.03.2 2"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardBrokenIcon],svg[solar-rewind-10-seconds-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12q.002 1.03.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-8-4"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackBrokenIcon],svg[solar-rewind-15-seconds-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-3.999M8 2.832A10 10 0 0 0 5 4.86A9.97 9.97 0 0 0 2 12q.002 1.03.2 2"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardBrokenIcon],svg[solar-rewind-15-seconds-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12q.002 1.03.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-8-4"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackBrokenIcon],svg[solar-rewind-5-seconds-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-3.999M8 2.832A10 10 0 0 0 5 4.86A9.97 9.97 0 0 0 2 12q.002 1.03.2 2"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardBrokenIcon],svg[solar-rewind-5-seconds-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12q.002 1.03.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-8-4"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackBrokenIcon],svg[solar-rewind-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m13 15.232l6.097 4.46c1.302.897 2.903-.27 2.903-2.118V15m-9-6.232l6.097-4.46C20.399 3.411 22 4.578 22 6.426V11M6.63 7.708l3.71-2.438c1.193-.785 2.66.237 2.66 1.853v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706l.928-.61"></svg:path>`,
})
export class SolarRewindBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleBrokenIcon],svg[solar-rewind-back-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m11 8.071l-3.222 2.302a2 2 0 0 0 0 3.254L11 15.93m5.5-.872V8.943a1 1 0 0 0-1.581-.814l-4.28 3.057a1 1 0 0 0 0 1.628l4.28 3.057a1 1 0 0 0 1.581-.814Z"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRewindBackCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardBrokenIcon],svg[solar-rewind-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11 15.232l-6.097 4.46C3.601 20.589 2 19.422 2 17.574V15m9-6.232l-6.097-4.46C3.601 3.411 2 4.578 2 6.426V11m15.37-3.292L13.66 5.27C12.467 4.485 11 5.507 11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706l-.928-.61"></svg:path>`,
})
export class SolarRewindForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleBrokenIcon],svg[solar-rewind-forward-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m13 8.071l3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRewindForwardCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2BrokenIcon],svg[solar-rocket-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.078 13.417a.75.75 0 0 0-1.06-1.06zm-2.222 1.16l-.53-.531zM2.32 13.04l-.53-.53zm.683.377a.75.75 0 0 0-1.06-1.06zm8.604 5.57a.75.75 0 1 0-1.06-1.061zm-2.222 1.159l.53.53zm1.538 1.536l.53.53zm.684.377a.75.75 0 1 0-1.06-1.061zm-.973-4.873a.75.75 0 0 0-1.06-1.06zM7.47 18.228a.75.75 0 0 0 1.06 1.06zm.387-3.814a.75.75 0 1 0-1.06-1.061zM4.68 15.47a.75.75 0 1 0 1.061 1.06zm2.781 2.112a.75.75 0 0 0-1.048-1.073zm-2.758.6a.75.75 0 1 0 1.049 1.072zm.316-5.826l-1.692 1.69l1.06 1.061l1.692-1.69zm-2.17 1.215l.154-.154l-1.06-1.06l-.153.153zm0 .475a.335.335 0 0 1 0-.475l-1.06-1.061a1.835 1.835 0 0 0 0 2.597zm.478 0a.34.34 0 0 1-.477 0l-1.06 1.061c.717.717 1.88.717 2.597 0zm7.22 3.88l-1.692 1.69l1.06 1.06l1.692-1.689zm.906 4.287l.154-.154l-1.06-1.061l-.154.153zm-2.598 0a1.84 1.84 0 0 0 2.598 0l-1.06-1.062a.34.34 0 0 1-.478 0zm0-2.598a1.835 1.835 0 0 0 0 2.598l1.06-1.062a.335.335 0 0 1 0-.474zm.718-3.49L7.47 18.228l1.06 1.06l2.103-2.102zm-2.776-2.772L4.68 15.47l1.061 1.06l2.117-2.116zm-.384 3.156l-1.71 1.672l1.049 1.073l1.71-1.672zm3.33-3.452l.53-.532zm0-4.656l-.53-.531zm5.837 5.82l.53.53zm-4.67 0l-.53.53zm9.64-4.956l-.53-.53zm-4.595-7.77a.75.75 0 0 0 .573 1.386zM9.797 13.107a.75.75 0 0 0 1.06 1.063zm2.81-.683a.75.75 0 1 0-1.059-1.062zm1.08 3.362l.258.704zm-5.5-5.535l-.696-.28zm6.268-5.488a.75.75 0 1 0-1.06-1.063zm5.565 3.971l-4.97 4.955l1.06 1.063l4.969-4.955zm-8.58 4.955l-1.167-1.164l-1.06 1.063l1.168 1.164zM18.215 2.75h.483v-1.5h-.483zm3.035 2.542v.482h1.5v-.482zM18.698 2.75c.8 0 1.324.002 1.712.054c.367.049.498.13.577.21l1.06-1.063c-.405-.403-.905-.563-1.438-.634c-.51-.069-1.154-.067-1.91-.067zm4.052 2.542c0-.755.002-1.396-.067-1.906c-.072-.532-.232-1.032-.637-1.435l-1.059 1.062c.079.079.16.208.21.573c.052.387.053.909.053 1.706zm-12.477 7.233c-.566-.563-.935-.934-1.173-1.244c-.224-.293-.258-.442-.258-.552h-1.5c0 .571.241 1.038.567 1.464c.313.409.77.861 1.304 1.395zm.108 2.226c.535.534.989.989 1.399 1.3c.427.326.894.565 1.465.565v-1.5c-.113 0-.263-.035-.557-.258c-.311-.237-.683-.605-1.248-1.169zm10.698-4.954c.672-.67 1.166-1.144 1.425-1.768l-1.385-.575c-.118.283-.34.523-1.099 1.28zm.171-4.023c0 1.07-.013 1.396-.131 1.68l1.385.575c.26-.624.246-1.307.246-2.255zM18.215 1.25c-.951 0-1.635-.013-2.26.245l.573 1.386c.285-.118.614-.131 1.687-.131zm-7.359 12.92l1.751-1.746l-1.059-1.062l-1.75 1.745zm4.194-.48c-.436.434-.76.756-1.037.995c-.278.24-.456.35-.586.397l.518 1.408c.383-.141.723-.388 1.049-.67c.327-.282.694-.648 1.115-1.069zm-1.623 1.392a.5.5 0 0 1-.182.034v1.5q.365-.001.7-.126zM9.213 7.87c-.411.41-.77.768-1.05 1.087c-.279.318-.524.648-.672 1.015l1.392.56c.053-.133.168-.312.408-.586s.557-.59.982-1.014zM7.491 9.972c-.096.24-.149.49-.149.757h1.5a.5.5 0 0 1 .041-.198zm2.782-1.04l4.182-4.17l-1.06-1.062l-4.182 4.17z"></svg:path><svg:path fill="currentColor" d="m8.037 10.102l.53-.53V9.57zm3.634-3.398a.75.75 0 1 0 .812-1.262zm-.13-.975l.407-.631zM9.359 4.608l.11-.742zM5.19 7.12l.53.531zm2.65-2.318l.287.693zm-2.105 3.51l-.277.698zm-.181.736a.75.75 0 1 0 .571-1.387zm-.141-.863l.276-.697zm2.245 2.597a.75.75 0 0 0 1.06-1.06zm.502-1.618a.75.75 0 0 0-1.06 1.062zm4.324-3.722l-.535-.344l-.812 1.261l.535.345zm-.535-.344c-.527-.34-.958-.617-1.33-.817c-.38-.205-.745-.355-1.15-.415l-.22 1.484c.169.025.36.09.66.251c.308.167.682.407 1.228.758zM5.72 7.651c.479-.477.99-.987 1.45-1.406c.229-.21.436-.388.613-.524c.188-.145.299-.208.342-.226L7.55 4.109a3.2 3.2 0 0 0-.683.424c-.223.172-.464.38-.708.604c-.489.445-1.025.98-1.498 1.452zm3.746-3.785a3.6 3.6 0 0 0-1.916.243l.575 1.386c.365-.152.753-.2 1.122-.145zm-4.33 5.016l.321.128l.553-1.395l-.322-.127zm.321.128l.096.038l.571-1.387l-.114-.046zm-.795-2.421a1.4 1.4 0 0 0 .474 2.293l.552-1.394a.1.1 0 0 1 .033.163zm2.845 4.043l.15.15l1.06-1.06l-.15-.15zm-.408-.406l.409.407L8.567 9.57l-.408-.407zm6.826 5.799l-.53.53l.035.034zm4.62-4.54a.75.75 0 0 0-1.26.816zm-.285.942l-.63.407zm1.124 2.177l.742-.11zm-2.52 4.154l-.53-.53zm2.325-2.639l-.692-.289zm-2.656 2.242a.75.75 0 1 0-1.393.555zm-2.658-1.382a.75.75 0 1 0 .989-1.128zm2.918 1.85l.53.531zm-2.577-3.573a.75.75 0 0 0-1.06 1.06zm3.07-2.955l.344.533l1.26-.815l-.346-.533zm-.951 5.926l-.072.071l1.06 1.063l.071-.072zm1.295-5.393c.353.545.594.918.76 1.225c.162.298.227.489.252.656l1.484-.22c-.06-.407-.21-.77-.417-1.15c-.2-.371-.48-.8-.82-1.326zm-.236 6.455a48 48 0 0 0 1.456-1.493c.224-.244.434-.484.606-.706c.163-.21.328-.45.425-.682l-1.384-.578a2 2 0 0 1-.227.34a10 10 0 0 1-.525.612c-.42.457-.931.968-1.41 1.445zm1.248-4.574c.055.366.007.752-.145 1.115l1.384.578c.254-.608.34-1.27.245-1.914zm-3.778 1.136l-.445-.39l-.989 1.128l.445.39zm1.4 2.447a.16.16 0 0 1 .144-.045a.18.18 0 0 1 .125.108l-1.393.555c.356.895 1.515 1.11 2.183.444zm-1.81-2.803l-.238-.24l-1.06 1.061l.238.24zm.596-6.081a.75.75 0 0 0 1.059-1.062zm2.335-1.062a.75.75 0 0 0 1.059 1.062zm1.059-2.328a2.404 2.404 0 0 0-3.394 0l1.059 1.062a.904.904 0 0 1 1.276 0zm-3.394 0a2.393 2.393 0 0 0 0 3.39l1.059-1.062a.893.893 0 0 1 0-1.266zm3.394 3.39a2.39 2.39 0 0 0 0-3.39l-1.06 1.062a.893.893 0 0 1 0 1.266z"></svg:path>`,
})
export class SolarRocket2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketBrokenIcon],svg[solar-rocket-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.58 15.008l.53-.531zm0-5.477L7.05 9zm6.867 6.846l.53.531zm-5.494 0l-.53.531zm2.747 1.936v.75zm8.594-7.765l-.53-.531zm-5.355-9.02a.75.75 0 0 0 .572 1.386zM7.737 15.16a.75.75 0 1 0 1.06 1.062zm3.12-.991a.75.75 0 1 0-1.06-1.063zm1.362 4.049l.26.704zm-6.47-6.512l-.695-.28zm7.28-6.55a.75.75 0 1 0-1.058-1.063zm6.735 4.86l-5.847 5.829l1.06 1.062l5.846-5.83zm-10.281 5.83l-1.374-1.37L7.05 15.54l1.374 1.37zM17.547 2.75h.569v-1.5h-.57zm3.703 3.123v.567h1.5v-.567zM18.116 2.75c.936 0 1.564.002 2.031.064c.446.06.633.163.755.284l1.059-1.062c-.447-.446-1.003-.626-1.614-.708c-.59-.08-1.337-.078-2.231-.078zm4.634 3.123c0-.892.002-1.636-.078-2.225c-.082-.611-.264-1.166-.711-1.612L20.9 3.098c.122.121.225.307.285.75c.063.466.064 1.09.064 2.025zM8.11 14.477c-.663-.66-1.105-1.104-1.391-1.478c-.273-.356-.331-.56-.331-.73h-1.5c0 .632.265 1.152.64 1.642c.361.472.89.997 1.522 1.628zm.314 2.431c.632.63 1.159 1.158 1.632 1.518c.492.374 1.013.637 1.644.637v-1.5c-.173 0-.378-.059-.735-.33c-.375-.286-.82-.727-1.482-1.387zm12.4-5.83c.798-.795 1.354-1.332 1.647-2.036l-1.385-.575c-.151.364-.436.667-1.322 1.55zm.426-4.638c0 1.249-.013 1.663-.164 2.027l1.385.575c.292-.704.28-1.476.28-2.602zm-3.703-5.19c-1.13 0-1.903-.013-2.608.278l.572 1.386c.366-.15.784-.164 2.036-.164zm-8.75 14.973l2.06-2.053l-1.06-1.063l-2.06 2.054zm5.12-.377c-.511.51-.896.893-1.226 1.178c-.332.287-.556.426-.731.491l.518 1.408c.428-.158.814-.436 1.193-.764s.808-.755 1.305-1.25zm-1.957 1.669a.7.7 0 0 1-.26.048v1.5q.404-.001.778-.14zM7.05 9c-.485.484-.904.901-1.23 1.272c-.324.37-.6.745-.766 1.156l1.392.56c.07-.177.216-.4.502-.727c.285-.325.663-.702 1.161-1.2zm-1.996 2.428a2.2 2.2 0 0 0-.166.841h1.5c0-.09.016-.179.058-.282zm3.055-1.366l4.92-4.906l-1.058-1.062L7.05 9z"></svg:path><svg:path fill="currentColor" d="m5.573 11.532l.53-.53V11zm4.347-4.11a.75.75 0 1 0 .811-1.261zm-.224-1.035l.406-.63zm-2.57-1.319l.11-.742zm-4.9 2.956l.529.53zm3.113-2.727l.288.692zm-2.476 4.13l-.276.697zm-.162.742a.75.75 0 0 0 .571-1.387zm-.217-.893l.277-.697zm2.735 2.962a.75.75 0 0 0 1.06-1.06zm.403-1.716a.75.75 0 1 0-1.059 1.062zm5.11-4.361l-.63-.405l-.812 1.261l.63.405zm-.63-.405c-.621-.4-1.123-.723-1.554-.956c-.442-.238-.855-.406-1.312-.474L7.017 5.81c.22.033.46.117.819.31c.368.2.814.485 1.454.897zM2.755 8.555a57 57 0 0 1 1.71-1.659c.27-.247.518-.46.73-.623c.223-.172.365-.256.432-.284l-.575-1.385c-.257.107-.527.291-.773.481c-.258.2-.54.442-.826.703c-.572.522-1.2 1.149-1.757 1.705zm4.481-4.229a4.13 4.13 0 0 0-2.184.278l.575 1.385a2.63 2.63 0 0 1 1.39-.179zM2.208 9.974l.379.15l.552-1.395l-.378-.15zm.379.15l.114.045l.571-1.387l-.133-.053zm-.891-2.631a1.514 1.514 0 0 0 .512 2.48l.553-1.394l-.007-.003l-.003-.008V8.56l.004-.005zm3.347 4.569l.176.176l1.06-1.06L6.105 11zm-.48-.478l.48.479L6.104 11l-.48-.48zM12.5 18.5l-.53.53l.035.034zm5.323-5.268a.75.75 0 0 0-1.259.815zm-.223 1.035l-.63.408zm1.322 2.562l.742-.11zm-2.964 4.887l-.53-.531zm2.735-3.105l-.692-.29zm-3.248 2.686a.75.75 0 1 0-1.393.555zm-2.917-1.774a.75.75 0 1 0 .989-1.128zm3.346 2.276l.53.532zm-3.125-4.11a.75.75 0 0 0-1.061 1.06zm3.815-3.642l.406.628l1.26-.816l-.407-.627zm-1.135 7.138l-.085.083l1.06 1.063l.084-.084zm1.541-6.51c.414.638.7 1.082.9 1.45c.194.357.278.596.31.814l1.484-.22c-.068-.457-.237-.87-.476-1.31c-.233-.43-.557-.93-.958-1.55zm-.482 7.572c.557-.556 1.186-1.183 1.71-1.753c.261-.285.505-.565.704-.822c.19-.246.376-.515.483-.772l-1.384-.578a2.3 2.3 0 0 1-.284.43a12 12 0 0 1-.625.728c-.497.541-1.1 1.143-1.663 1.705zm1.693-5.308c.067.456.007.934-.18 1.383l1.384.578c.29-.693.388-1.448.28-2.181zm-4.664 1.456l-.523-.459l-.989 1.128l.523.459zm1.828 2.873a.1.1 0 0 1 .028-.016l.022-.001l.024.012q.018.016.026.034l-1.393.555c.384.964 1.632 1.196 2.352.479zM13.03 17.97l-.281-.281l-1.061 1.06l.281.282zm.887-7.341a.75.75 0 1 0 1.06-1.063zm2.747-1.063a.75.75 0 0 0 1.059 1.063zm1.059-2.738a2.696 2.696 0 0 0-3.806 0l1.06 1.062a1.196 1.196 0 0 1 1.687 0zm-3.806 0a2.68 2.68 0 0 0 0 3.8l1.06-1.062a1.18 1.18 0 0 1 0-1.676zm3.806 3.8a2.68 2.68 0 0 0 0-3.8l-1.06 1.062a1.18 1.18 0 0 1 0 1.676z"></svg:path>`,
})
export class SolarRocketBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinBrokenIcon],svg[solar-rolling-pin-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.013 13.157c1.454-1.454 2.18-2.181 2.18-3.085c0-.605-.326-1.131-.978-1.85m-9.993 9.993l-1.963 2.748a4 4 0 0 1-.156.213a2.18 2.18 0 0 1-3.169.262a6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188A2.18 2.18 0 0 1 2.085 19m6.137-.785a38 38 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234m2.437 2.437c.719.652 1.245.979 1.85.979c.904 0 1.63-.727 3.085-2.181l.843-.844m-8.215-.391c-.652-.719-.979-1.245-.979-1.85c0-.904.727-1.63 2.182-3.085l3.855-3.855c1.454-1.455 2.181-2.182 3.085-2.182c.605 0 1.131.327 1.85.98m-9.993 9.992l-1.374.982m13.804-8.538l2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169a6 6 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262a6 6 0 0 0-.155.213l-1.963 2.748m2.437 2.437a38 38 0 0 0-1.203-1.234c-.48-.48-.88-.881-1.234-1.203"></svg:path>`,
})
export class SolarRollingPinBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownBrokenIcon],svg[solar-round-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowLeftBrokenIcon],svg[solar-round-alt-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13.5 9l-3 3l3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowRightBrokenIcon],svg[solar-round-alt-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.5 9l3 3l-3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowUpBrokenIcon],svg[solar-round-alt-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 13.5l-3-3l-3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowDownBrokenIcon],svg[solar-round-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftBrokenIcon],svg[solar-round-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M16 12H8m0 0l3-3m-3 3l3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftDownBrokenIcon],svg[solar-round-arrow-left-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l-6 6m0 0v-4.5M9 15h4.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundArrowLeftDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftUpBrokenIcon],svg[solar-round-arrow-left-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path><svg:path stroke-linejoin="round" d="M15 15L9 9m0 0h4.5M9 9v4.5"></svg:path></svg:g>`,
})
export class SolarRoundArrowLeftUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightBrokenIcon],svg[solar-round-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightDownBrokenIcon],svg[solar-round-arrow-right-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 9l6 6m0 0v-4.5m0 4.5h-4.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundArrowRightDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightUpBrokenIcon],svg[solar-round-arrow-right-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 15l6-6m0 0h-4.5M15 9v4.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundArrowRightUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowUpBrokenIcon],svg[solar-round-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 16V8m0 0l3 3m-3-3l-3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowDownBrokenIcon],svg[solar-round-double-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 8.5l3 3l3-3m-6 4l3 3l3-3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundDoubleAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowLeftBrokenIcon],svg[solar-round-double-alt-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15.5 9l-3 3l3 3m-4-6l-3 3l3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundDoubleAltArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowRightBrokenIcon],svg[solar-round-double-alt-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8.5 9l3 3l-3 3m4-6l3 3l-3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundDoubleAltArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowUpBrokenIcon],svg[solar-round-double-alt-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 15.5l3-3l3 3m-6-4l3-3l3 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundDoubleAltArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundGraphBrokenIcon],svg[solar-round-graph-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 2c5.523 0 10 4.477 10 10c0 1.821-.487 3.53-1.338 5M5 4.859A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10c1.821 0 3.53-.487 5-1.338"></svg:path><svg:path d="M5 12c0 1.487.464 2.866 1.255 4M12 5a7 7 0 1 1-3 13.326"></svg:path><svg:path d="M12 16a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class SolarRoundGraphBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundSortHorizontalBrokenIcon],svg[solar-round-sort-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M16 9.5H8m0 0L10.75 7M8 9.5l2.75 2.5M8 14.5h8m0 0L13.25 12M16 14.5L13.25 17"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundSortHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundSortVerticalBrokenIcon],svg[solar-round-sort-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9.5 8v8m0 0L7 13.25M9.5 16l2.5-2.75M14.5 16V8m0 0L12 10.75M14.5 8l2.5 2.75"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundSortVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferDiagonalBrokenIcon],svg[solar-round-transfer-diagonal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m6.5 4l7.378 8V7.5m3.5 12.378l-7.5-7.879v4.5"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundTransferDiagonalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferHorizontalBrokenIcon],svg[solar-round-transfer-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 10H7l3.438-3M7 14h10l-3.437 3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundTransferHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferVerticalBrokenIcon],svg[solar-round-transfer-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 7v10l-3-3.437M14 17V7l3 3.438"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundTransferVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferBrokenIcon],svg[solar-rounded-magnifer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.812 20.975c-.063.095-.176.208-.403.434c-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561c-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16c.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619ZM6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarRoundedMagniferBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferBugBrokenIcon],svg[solar-rounded-magnifer-bug-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 15a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0H8m6.072 1H15.5m-9 0H8m6 2.5l1 .5m-7-.5L7 14m7-5.5l1-.5m-7 .5L7 8m14.812 12.975c-.063.095-.176.208-.403.434c-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561c-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16c.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619Z"></svg:path><svg:path d="M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path></svg:g>`,
})
export class SolarRoundedMagniferBugBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferZoomInBrokenIcon],svg[solar-rounded-magnifer-zoom-in-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 11h2m0 0h2m-2 0v2m0-2V9m10.812 11.975c-.063.095-.176.208-.403.434c-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561c-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16c.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619ZM6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarRoundedMagniferZoomInBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferZoomOutBrokenIcon],svg[solar-rounded-magnifer-zoom-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 11h4m8.812 9.975c-.063.095-.176.208-.403.434c-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561c-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16c.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619ZM6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarRoundedMagniferZoomOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRouteBrokenIcon],svg[solar-route-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-width="1.5" clip-path="url(#solarRouteBroken0)"><svg:path d="M19.071 4.929c3.333 3.333 5 5 5 7.07c0 2.072-1.667 3.739-5 7.072s-5 5-7.071 5s-3.738-1.667-7.071-5s-5-5-5-7.071s1.667-3.738 5-7.071c3.333-3.334 5-5 7.071-5c1.377 0 2.575.737 4.204 2.21"></svg:path><svg:path stroke-linejoin="round" d="M16 11.5L13.333 9M16 11.5L13.333 14M16 11.5h-5.333C9.777 11.5 8 12 8 14"></svg:path></svg:g><svg:defs><svg:clippath id="solarRouteBroken0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarRouteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRouting2BrokenIcon],svg[solar-routing-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 5.257C2 3.458 3.567 2 5.5 2S9 3.458 9 5.257C9 7.042 7.883 9.125 6.14 9.87a1.64 1.64 0 0 1-1.28 0C3.117 9.125 2 7.042 2 5.257Zm13 12C15 15.458 16.567 14 18.5 14s3.5 1.458 3.5 3.257c0 1.785-1.117 3.868-2.86 4.613a1.64 1.64 0 0 1-1.28 0c-1.743-.745-2.86-2.828-2.86-4.613Z"></svg:path><svg:path fill="currentColor" d="M12 4.25a.75.75 0 0 0 0 1.5zM12 19l.53.53a.75.75 0 0 0 0-1.06zm5.206-10.313l.402.633zM6.794 15.313l.403.632zm4.236 1.657a.75.75 0 0 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zm.861-6.337a.75.75 0 1 0-.805-1.266zm2.338-3.266a.75.75 0 1 0 .805 1.266zm2.963-6.117H12v1.5h4.132zM12 18.25H7.868v1.5H12zm.53.22l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zm-3.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07zm-6.106 6.617L6.392 14.68l.805 1.265l3.634-2.312zm6.777-4.312l-3.634 2.312l.805 1.266l3.634-2.313z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 17.5h.009M5.49 5.5h.01"></svg:path></svg:g>`,
})
export class SolarRouting2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRouting3BrokenIcon],svg[solar-routing-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="5" cy="5" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:circle cx="19" cy="19" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M11 4.25a.75.75 0 0 0 0 1.5zM13 19l.53.53a.75.75 0 0 0 0-1.06zm4.206-10.313l.402.633zM6.794 15.313l.403.632zm5.236 1.657a.75.75 0 0 0-1.06 1.06zm-1.06 3a.75.75 0 0 0 1.06 1.06zm-.567-6.064a.75.75 0 0 0-.806-1.266zm2.797-3.559a.75.75 0 0 0 .806 1.266zm2.932-6.097H11v1.5h5.132zM13 18.25H7.868v1.5H13zm.53.22l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zm-4.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07zm-6.535 6.89l-3.205 2.04l.805 1.265l3.206-2.04zm7.206-4.585L13.2 10.347l.806 1.266l3.602-2.293z"></svg:path></svg:g>`,
})
export class SolarRouting3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoutingBrokenIcon],svg[solar-routing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20 19l.53.53a.75.75 0 0 0 0-1.06zM8 4.25a.75.75 0 0 0 0 1.5zm10.53 12.22a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zm-3.72-2.22a.75.75 0 0 0 0 1.5zM10 19.75a.75.75 0 0 0 0-1.5zm1-14a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-7.5 8.5h9v-1.5h-9zm13.03 5.72l-2-2l-1.06 1.06l2 2zm-1.06 0l-2 2l1.06 1.06l2-2zm1.28-9.97a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25zm12.5 0h-6.25v1.5H20zm-10 0H7.5v1.5H10zm1-14H8v1.5h3zm5.5 0H15v1.5h1.5z"></svg:path><svg:circle cx="6" cy="5" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarRoutingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRubleBrokenIcon],svg[solar-ruble-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 14h3m-2-2V8.2c0-.186 0-.279.012-.356a1 1 0 0 1 .832-.832C10.92 7 11.014 7 11.2 7h2.3a2.5 2.5 0 0 1 0 5zm0 0v5m0-5H9"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRubleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRugbyBrokenIcon],svg[solar-rugby-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.38 5.38c-2.128 2.13-2.993 5.194-3.27 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844a27 27 0 0 1-.023 4.612M13.457 2.11l8.433 8.433M13.457 2.11c-1.489.143-3.026.443-4.457.992m12.89 7.44c-.277 2.884-1.142 5.949-3.27 8.077m-8.077 3.271c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844a27 27 0 0 1 .023-4.612m8.433 8.433L2.11 13.457m8.433 8.433c1.489-.143 3.026-.443 4.457-.992m.31-12.208l-6.62 6.62m0-2.837l2.837 2.837m-.945-4.728l2.836 2.836m-.945-4.728l2.837 2.837"></svg:path>`,
})
export class SolarRugbyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerAngularBrokenIcon],svg[solar-ruler-angular-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 9h-1c-.943 0-1.414 0-1.707.293S9 10.057 9 11v7.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h12.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C22 3.393 22 4.096 22 5.5s0 2.107-.337 2.611a2 2 0 0 1-.552.552C20.607 9 19.904 9 18.5 9H16m-4-7v2m6-2v2M9 2v3m6-3v3M2 12h2m-2 6h2m-2-3h3M2 9h3"></svg:path>`,
})
export class SolarRulerAngularBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerBrokenIcon],svg[solar-ruler-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19 12.232l.955-.955C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.848 0-1.53.682-2.893 2.045l-8.678 8.678C2.682 14.087 2 14.768 2 15.616s.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045L16.232 15M8.464 8.464L9.88 9.88m2.827-5.658l1.414 1.414m-9.899 7.071l1.414 1.414m.707-3.535l2.122 2.121m2.121-6.364l2.121 2.121"></svg:path>`,
})
export class SolarRulerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerCrossPenBrokenIcon],svg[solar-ruler-cross-pen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M13.254 19.424a.75.75 0 0 0-1.061 1.061zM15.616 22v-.75zM4.046 5.492l.53.53zm-.531 6.315a.75.75 0 1 0 1.06-1.06zm7.762-7.762l.53.53a.75.75 0 0 0 0-1.06zm-5.785 0l-.53-.53zm14.463 8.678l.53-.53a.75.75 0 0 0-1.06 0zM22 15.616h.75zM8.336 5.926a.75.75 0 0 0 1.06 1.06zm8.678 8.677a.75.75 0 0 0 1.06 1.061zm1.473 6.431a.75.75 0 0 0-1.053-1.068zm1.44-3.561a.75.75 0 1 0 1.068 1.054zM4.961 3.515L3.515 4.961l1.06 1.061l1.447-1.446zm7.232 16.97c.667.667 1.219 1.221 1.715 1.6c.514.392 1.054.665 1.708.665v-1.5c-.194 0-.418-.068-.798-.358c-.397-.303-.868-.77-1.564-1.468zM3.515 4.961c-.667.667-1.221 1.22-1.6 1.716c-.392.513-.665 1.054-.665 1.707h1.5c0-.193.068-.417.358-.797c.303-.398.77-.868 1.468-1.565zm1.06 5.785C3.88 10.05 3.412 9.58 3.109 9.183c-.29-.38-.358-.604-.358-.798h-1.5c0 .654.273 1.194.665 1.708c.379.496.933 1.048 1.6 1.715zm7.232-7.231c-.667-.667-1.219-1.221-1.715-1.6c-.514-.392-1.054-.665-1.708-.665v1.5c.194 0 .418.068.798.358c.397.303.868.77 1.564 1.468zm-5.785 1.06c.697-.696 1.167-1.164 1.565-1.467c.38-.29.604-.358.797-.358v-1.5c-.653 0-1.194.273-1.707.665c-.497.379-1.049.933-1.716 1.6zm13.402 8.679c.697.696 1.165 1.167 1.468 1.564c.29.38.358.604.358.798h1.5c0-.654-.273-1.194-.665-1.708c-.379-.496-.933-1.048-1.6-1.715zm-8.677-9.739l-2.411 2.41l1.06 1.061l2.411-2.41zm8.677 8.678l-2.41 2.41l1.06 1.061l2.411-2.41zm-1.99 7.773c-.51.502-.87.831-1.175 1.038c-.287.195-.475.246-.643.246v1.5c.557 0 1.034-.199 1.485-.504c.432-.293.881-.714 1.386-1.212zm3.56-1.439c.51-.516.94-.972 1.24-1.41c.312-.454.516-.937.516-1.501h-1.5c0 .17-.052.36-.253.654c-.214.311-.553.68-1.07 1.203z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.36 4.079l.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561L12 6.439m7.921 3.2l-5.26 5.262L11.56 18l-.16.161c-.578.577-.867.866-1.185 1.114a6.6 6.6 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0l-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876l-1.876-1.876m0 0l1.094-3.281c.258-.775.387-1.162.56-1.526q.309-.647.749-1.211c.248-.318.537-.607 1.114-1.184L8.5 9.939"></svg:path></svg:g>`,
})
export class SolarRulerCrossPenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerPenBrokenIcon],svg[solar-ruler-pen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 7V6c0-1.886 0-2.828-.586-3.414S19.886 2 18 2h-2c-1.886 0-2.828 0-3.414.586S12 4.114 12 6v12c0 1.886 0 2.828.586 3.414S14.114 22 16 22h2c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-7m-10 1h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3M2 6V5a3 3 0 0 1 6 0v1M2 6s1.125 1 3 1s3-1 3-1M2 6v4.546M8 6v9.194c0 .622 0 .934-.038 1.239a5 5 0 0 1-.25 1.057c-.102.29-.241.569-.52 1.126l-1.18 2.36m0 0l-.288.577a.809.809 0 0 1-1.448 0l-.288-.577m2.024 0H3.988m0 0l-1.18-2.36c-.279-.557-.418-.836-.52-1.126a5 5 0 0 1-.25-1.057C2 16.128 2 15.816 2 15.193v-.87"></svg:path>`,
})
export class SolarRulerPenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRunning2BrokenIcon],svg[solar-running-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="18.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 17l-1 1.2c-.738.886-1.107 1.328-1.61 1.564S5.31 20 4.157 20H3"></svg:path><svg:path fill="currentColor" d="M13.65 22a.75.75 0 0 0 1.5 0zm-1.085-5.754l.453-.598zm1.184 1.015l.587-.466zm.557 1.12l.727-.186zm-.802-6.826a.75.75 0 0 0-1.009-1.11zm-2.652 1.61l.703.26zm.07 1.555l-.677.323zm2.728 5.219v2.06h1.5v-2.06zm-1.538-3.095c.663.502.887.679 1.05.884l1.174-.934c-.308-.387-.717-.69-1.319-1.146zm3.038 3.095c0-.755.006-1.264-.117-1.744l-1.453.373c.065.254.07.538.07 1.37zm-1.988-2.211c.197.247.339.534.417.84l1.454-.373a3.75 3.75 0 0 0-.697-1.4zm-.667-7.283c-.42.381-.945.836-1.354 1.224c-.21.198-.41.398-.573.586c-.149.172-.327.4-.42.649l1.407.521c-.007.021.014-.035.146-.187c.116-.134.276-.295.471-.48c.4-.38.865-.778 1.332-1.203zm.523 5.203c-.488-.37-.818-.62-1.056-.832c-.233-.208-.32-.33-.363-.418l-1.354.645c.167.35.423.63.72.894c.292.26.679.552 1.147.907zm-2.87-2.744a2.75 2.75 0 0 0 .097 2.139l1.354-.645a1.25 1.25 0 0 1-.044-.973zM5.806 9.472a.75.75 0 1 0-.74-1.304zM3.63 8.984a.75.75 0 1 0 .742 1.304zm9.778-1.627l-.286.693zm-2.96-.715l-.055-.748zM21 12.75a.75.75 0 1 0 0-1.5zm-5.232-3.213l-.67.335zm-7.03-3.264a.75.75 0 0 0 .524 1.406zM5.065 8.168l-1.436.816l.742 1.304l1.435-.816zm8.627-1.505c-1.344-.553-2.08-.857-3.3-.769l.11 1.496c.823-.06 1.255.099 2.62.66zm6.063 6.086H21v-1.5h-1.245zm-4.658-2.878a5.21 5.21 0 0 0 4.658 2.878v-1.5A3.71 3.71 0 0 1 16.439 9.2zm1.342-.67a5.33 5.33 0 0 0-2.747-2.538l-.57 1.387c.86.354 1.564 1 1.975 1.821zM9.262 7.677a4.4 4.4 0 0 1 1.24-.288l-.11-1.496a5.9 5.9 0 0 0-1.654.378z"></svg:path></svg:g>`,
})
export class SolarRunning2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRunningBrokenIcon],svg[solar-running-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="18.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 17l-1 1.2c-.738.886-1.107 1.328-1.61 1.564S5.31 20 4.157 20H3"></svg:path><svg:path fill="currentColor" d="M5.806 9.472a.75.75 0 1 0-.74-1.304zM3.63 8.984a.75.75 0 0 0 .742 1.304zm12.121 1.141l-.624.416zm.063.094l.624-.417zM10.97 6.653l.077-.746zm-.23-.017l-.033.75zm-.584.037l-.103-.743zM21 12.75a.75.75 0 0 0 0-1.5zM8.738 6.272a.75.75 0 0 0 .524 1.406zM5.065 8.168l-1.436.816l.742 1.304l1.435-.816zm10.061 2.373l.063.093l1.248-.832l-.063-.093zm-4.08-4.634a5 5 0 0 0-.273-.02l-.066 1.498q.073.003.184.014zm8.095 6.843H21v-1.5h-1.86zm-8.368-6.863a4 4 0 0 0-.72.043l.204 1.486c.178-.024.322-.037.45-.03zm4.416 4.748a4.75 4.75 0 0 0 3.952 2.115v-1.5a3.25 3.25 0 0 1-2.704-1.448zm1.185-.926c-1.177-1.766-2.945-3.554-5.328-3.802L10.891 7.4c1.703.177 3.134 1.49 4.235 3.142zM9.262 7.678a4.6 4.6 0 0 1 .995-.262l-.205-1.486c-.441.061-.87.177-1.314.342z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14 8.5l-2.22 2.776c-.837 1.045-1.255 1.568-1.322 2.137a2 2 0 0 0 .118.945c.204.536.737.94 1.805 1.749c.813.616 1.219.923 1.495 1.326q.236.347.37.744c.154.462.154.972.154 1.992V22"></svg:path></svg:g>`,
})
export class SolarRunningBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRunningRoundBrokenIcon],svg[solar-running-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="18.5" cy="4.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M14.4 22v-.959a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064l1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.96 2.96 0 0 0-2.271.05l-.522.23M5.44 8.61L4 9.636M9 17l-.26.311A7.47 7.47 0 0 1 3 20m13-8a8.25 8.25 0 0 0 4 0"></svg:path></svg:g>`,
})
export class SolarRunningRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSadCircleBrokenIcon],svg[solar-sad-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSadCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSadSquareBrokenIcon],svg[solar-sad-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSadSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSafe2BrokenIcon],svg[solar-safe-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M13.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 12V8m0 4l3.5 1.5M12 12l-3.5 1.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.5 7v3m0 4v3M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 5C8.7 5 7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025S19 15.3 19 12s0-4.95-1.025-5.975c-.682-.681-1.64-.91-3.175-.986"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8.535A4 4 0 1 1 8.126 11"></svg:path></svg:g>`,
})
export class SolarSafe2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSafeCircleBrokenIcon],svg[solar-safe-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 8v1m0 7v-4"></svg:path><svg:path d="M12 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"></svg:path><svg:path stroke-linecap="round" d="m16 10l1-1m-6 6l1-1m0-4l-1-1m6 6l-1-1M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSafeCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSafeSquareBrokenIcon],svg[solar-safe-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6 7v1m0 9v-5"></svg:path><svg:path d="M11 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"></svg:path><svg:path stroke-linecap="round" d="M12.5 9.401a3 3 0 1 1-1.099 1.099m5.099-1L18 8m-8 8l1.5-1.5m0-5L10 8m8 8l-1.5-1.5"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSafeSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSaleBrokenIcon],svg[solar-sale-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.03 13.078a2.5 2.5 0 0 1 0-2.157c.14-.294.38-.576.86-1.14c.192-.225.288-.337.368-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583c.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197c.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861c.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064c.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524M4.894 17.581a2.5 2.5 0 0 0 1.525 1.524c.308.11.677.139 1.416.197c.294.024.44.036.582.064a2.5 2.5 0 0 1 .908.376c.12.08.232.175.456.367c.564.48.846.72 1.14.861a2.5 2.5 0 0 0 2.157 0c.295-.14.577-.38 1.14-.861a5 5 0 0 1 .457-.367a2.5 2.5 0 0 1 .908-.376c.141-.028.288-.04.582-.064c.739-.058 1.108-.088 1.416-.197a2.5 2.5 0 0 0 1.525-1.524c.109-.308.138-.678.197-1.416c.023-.294.035-.441.063-.583c.064-.324.192-.633.376-.907c.08-.12.176-.232.367-.457c.48-.564.721-.846.862-1.14a2.5 2.5 0 0 0 0-2.157M9 15l6-6"></svg:path><svg:path fill="currentColor" d="M15.5 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarSaleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSaleSquareBrokenIcon],svg[solar-sale-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 15l6-6"></svg:path><svg:path fill="currentColor" d="M15.5 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSaleSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSatelliteBrokenIcon],svg[solar-satellite-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.47 10.918s-1.848-.615-4.31-3.078c-2.463-2.463-3.079-4.31-3.079-4.31"></svg:path><svg:path stroke-linecap="round" d="M20.47 10.918a5.224 5.224 0 0 1-7.388-7.388m7.388 7.388A5.224 5.224 0 0 0 18 2.145m2.47 8.773L17.646 16M13.082 3.53A5.2 5.2 0 0 1 15 2.31m-1.918 1.22L6.836 7m9.324.84L11 13M2 9.687l3-1.666M14.313 22l2.187-4M5 19l4-4"></svg:path></svg:g>`,
})
export class SolarSatelliteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScaleBrokenIcon],svg[solar-scale-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 4.714 0 7.07 1.465 8.535c1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.464-7.536M11 2c-4.055.007-6.178.107-7.535 1.464C2.648 4.28 2.287 5.374 2.127 7"></svg:path><svg:path stroke-linejoin="round" d="m13 11l9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8"></svg:path></svg:g>`,
})
export class SolarScaleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScanner2BrokenIcon],svg[solar-scanner-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 13s1.8-2 6-2s6 2 6 2m-8 9c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10m0 4v1m-8 7c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M2 10V9m8-7C6.229 2 4.343 2 3.172 3.172C2.518 3.825 2.229 4.7 2.102 6"></svg:path>`,
})
export class SolarScanner2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScannerBrokenIcon],svg[solar-scanner-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828c.653.654 1.528.943 2.828 1.07M22 15c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22m0-20h1m7 7c0-3.771 0-4.657-1.172-5.828c-.653-.654-1.528-.943-2.828-1.07M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9m0 3h6m14 0H12"></svg:path>`,
})
export class SolarScannerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScissorsBrokenIcon],svg[solar-scissors-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.401 20.5L6 2m16 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path fill="currentColor" d="M5 21.25a.75.75 0 0 1 0 1.5zM8.75 19v.75h-1.5V19zm-.498 1.868a.75.75 0 0 1-1.307-.736zm9.094-19.236a.75.75 0 0 1 1.308.736zM2.75 19A2.25 2.25 0 0 0 5 21.25v1.5A3.75 3.75 0 0 1 1.25 19zm4.5 0A2.25 2.25 0 0 0 5 16.75v-1.5A3.75 3.75 0 0 1 8.75 19zM5 16.75A2.25 2.25 0 0 0 2.75 19h-1.5A3.75 3.75 0 0 1 5 15.25zm1.945 3.382l10.401-18.5l1.308.736l-10.402 18.5z"></svg:path></svg:g>`,
})
export class SolarScissorsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScissorsSquareBrokenIcon],svg[solar-scissors-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.5 17.1L8 6m10 10.2c0 .994-.84 1.8-1.875 1.8s-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8S18 15.206 18 16.2Zm-8.5.9L16 6M6 16.2c0 .994.84 1.8 1.875 1.8s1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8S6 15.206 6 16.2Z"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarScissorsSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScooterBrokenIcon],svg[solar-scooter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 16v-1.5c0-1.886 0-2.828-.586-3.414S8.886 10.5 7 10.5h-.6c-.371 0-.557 0-.714.012a4 4 0 0 0-1.254.307M11 16h5m-5 0H3.1c-.093 0-.14 0-.178-.003a1 1 0 0 1-.919-.918C2 15.039 2 14.993 2 14.9c0-.371 0-.557.012-.714a4 4 0 0 1 .219-1.027M9.5 16a3 3 0 1 1-6 0M12 5h.528c1.203 0 1.804 0 2.287.299c.484.298.753.836 1.29 1.912L19 13m-.857-2l.681-.502c.263-.194.395-.29.486-.417a1 1 0 0 0 .143-.282c.047-.149.047-.312.047-.638c0-.618 0-.926-.132-1.157a1 1 0 0 0-.372-.372c-.23-.132-.54-.132-1.157-.132H16.5"></svg:path><svg:path d="M18 18.83A3 3 0 1 0 16.17 17"></svg:path></svg:g>`,
})
export class SolarScooterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScreenShareBrokenIcon],svg[solar-screen-share-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879C8 20.243 8 18.828 8 16V8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14m5-9.5c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v.5"></svg:path><svg:path stroke-linejoin="round" d="M14.5 16V8m0 0l2.5 2.5M14.5 8L12 10.5"></svg:path></svg:g>`,
})
export class SolarScreenShareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScreencast2BrokenIcon],svg[solar-screencast-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 18.415a3 3 0 0 0 .828-.587C22 16.657 22 14.771 22 11v-1M4 18.415a3 3 0 0 1-.828-.587C2 16.657 2 14.771 2 11s0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172c.47.47.751 1.054.92 1.828"></svg:path><svg:path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427q.08-.003.159 0c.574.03 1.04.496 1.971 1.427c2.026 2.026 3.039 3.039 2.755 3.913a1.5 1.5 0 0 1-.09.218C16.297 21 14.865 21 12 21s-4.298 0-4.715-.819a1.5 1.5 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z"></svg:path></svg:g>`,
})
export class SolarScreencast2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScreencastBrokenIcon],svg[solar-screencast-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 20c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12v-1M2 8.5c0-.464 0-.697.02-.892a4 4 0 0 1 3.588-3.589C5.803 4 6.036 4 6.5 4H14c3.771 0 5.657 0 6.828 1.172c.47.47.751 1.054.92 1.828"></svg:path><svg:path d="M11 20a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 20a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarScreencastBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSdCardBrokenIcon],svg[solar-sd-card-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535M7 6v3m3-3v3m3-3v3"></svg:path>`,
})
export class SolarSdCardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSendSquareBrokenIcon],svg[solar-send-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 12h-7m0 0l3 3m-3-3l3-3"></svg:path><svg:path d="M7 16V8m15 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSendSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSendTwiceSquareBrokenIcon],svg[solar-send-twice-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 15.5h-7m0 0l3-2.5m-3 2.5l3 2.5m4-9.5h-7m0 0L13 6m-3 2.5l3 2.5"></svg:path><svg:path d="M7 6v12m15-6c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSendTwiceSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServer2BrokenIcon],svg[solar-server-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17s0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1M11 2h7c1.886 0 2.828 0 3.414.586S22 4.114 22 6s0 2.828-.586 3.414S19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6s0-2.828.586-3.414S4.114 2 6 2h1m6.5 4H18M6 7V5m3 2V5m4.5 12H18M6 18v-2m3 2v-2"></svg:path>`,
})
export class SolarServer2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerBrokenIcon],svg[solar-server-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17s0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1M11 2h7c1.886 0 2.828 0 3.414.586S22 4.114 22 6s0 2.828-.586 3.414S19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6s0-2.828.586-3.414S4.114 2 6 2h1m4 4h7M6 6h2m3 11h7M6 17h2"></svg:path>`,
})
export class SolarServerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerMinimalisticBrokenIcon],svg[solar-server-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 21H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 19.398 2 18.932 2 18s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 15 4.068 15 5 15h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 4.068 9 5 9h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 3h9c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h1"></svg:path><svg:circle cx="5" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="5" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="5" cy="18" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarServerMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerPathBrokenIcon],svg[solar-server-path-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 19h-8M2 19h8m2-2v-3"></svg:path><svg:circle cx="12" cy="19" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 14H5a3 3 0 1 1 0-6h14a3 3 0 1 1 0 6h-1M12 2h7a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6h3m5 3h6m-6 6h6"></svg:path><svg:circle cx="6" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="11" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarServerPathBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerSquareBrokenIcon],svg[solar-server-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 3c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3"></svg:path><svg:path fill="currentColor" d="M14 12.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-16 1.5h12v-1.5H2zm16 0h4v-1.5h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 16.5H18m-4.5-9H18m-12 10v-2m0-7v-2m3 11v-2m0-7v-2"></svg:path></svg:g>`,
})
export class SolarServerSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerSquareCloudBrokenIcon],svg[solar-server-square-cloud-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10 3.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1 19.5a.75.75 0 0 0 0-1.5zm-9.828-1.922l.53-.53zM20.828 4.172l-.53.53zM21.25 13a.75.75 0 0 0 1.5 0zM14 12.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zM2.75 13v-1h-1.5v1zm0-1v-1h-1.5v1zM13 20.25h-3v1.5h3zM21.25 11v1h1.5v-1zm-20 2c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM10 20.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zm4-16.5c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239c-1.15-.155-2.625-.153-4.489-.153zM22.75 11c0-1.864.002-3.338-.153-4.489c-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01c.138 1.028.14 2.382.14 4.289zM10 2.25c-1.864 0-3.338-.002-4.489.153c-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811c1.028-.138 2.382-.14 4.289-.14zM2.75 11c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11zm18.5 1v1h1.5v-1zM2 12.75h12v-1.5H2zm16 0h4v-1.5h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 7.5H18m-12 10v-2m0-7v-2m3 11v-2m0-7v-2m10.333 10.385a1.9 1.9 0 0 1 1.321-.004m-3.863.972a1.4 1.4 0 0 0-.291-.03c-.828 0-1.5.712-1.5 1.589S15.672 21 16.5 21H20c1.105 0 2-.948 2-2.118c0-.927-.562-1.714-1.346-2.001m-3.863.972a2.2 2.2 0 0 1-.124-.735c0-1.17.895-2.118 2-2.118c1.029 0 1.876.823 1.987 1.88m-3.863.973c.197.041.38.123.542.238"></svg:path></svg:g>`,
})
export class SolarServerSquareCloudBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerSquareUpdateBrokenIcon],svg[solar-server-square-update-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10 3.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1 19.5a.75.75 0 0 0 0-1.5zm-9.828-1.922l.53-.53zM20.828 4.172l-.53.53zM21.25 13a.75.75 0 0 0 1.5 0zM14 12.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zM2.75 13v-1h-1.5v1zm0-1v-1h-1.5v1zM13 20.25h-3v1.5h3zM21.25 11v1h1.5v-1zm-20 2c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM10 20.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zm4-16.5c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239c-1.15-.155-2.625-.153-4.489-.153zM22.75 11c0-1.864.002-3.338-.153-4.489c-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01c.138 1.028.14 2.382.14 4.289zM10 2.25c-1.864 0-3.338-.002-4.489.153c-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811c1.028-.138 2.382-.14 4.289-.14zM2.75 11c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11zm18.5 1v1h1.5v-1zM2 12.75h12v-1.5H2zm16 0h4v-1.5h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 7.5H18m-12 10v-2m0-7v-2m3 11v-2m0-7v-2"></svg:path><svg:path fill="currentColor" d="M15.584 17.5h-.75zm0 .5l-.488.57c.281.24.695.24.976 0zm1.072.07a.75.75 0 0 0-.975-1.14zm-1.168-1.14a.75.75 0 0 0-.976 1.14zm4.901-.295a.75.75 0 1 0 1.222-.87zm-1.884-2.385c-1.914 0-3.67 1.35-3.67 3.25h1.5c0-.861.857-1.75 2.17-1.75zm-3.67 3.25v.5h1.5v-.5zm1.237 1.07l.584-.5l-.975-1.14l-.585.5zm0-1.14l-.584-.5l-.976 1.14l.584.5zm5.539-1.665c-.666-.935-1.829-1.515-3.106-1.515v1.5c.836 0 1.524.38 1.884.885zM18.495 21v.75zm2.92-2.5h.75zm0-.5l.489-.57a.75.75 0 0 0-.976 0zm-1.071-.07a.75.75 0 0 0 .975 1.14zm1.168 1.14a.75.75 0 0 0 .976-1.14zm-4.901.295a.75.75 0 1 0-1.222.87zm1.884 2.385c1.914 0 3.67-1.35 3.67-3.25h-1.5c0 .861-.857 1.75-2.17 1.75zm3.67-3.25V18h-1.5v.5zm-1.237-1.07l-.584.5l.975 1.14l.585-.5zm0 1.14l.584.5l.976-1.14l-.584-.5zm-5.539 1.665c.666.935 1.829 1.515 3.106 1.515v-1.5c-.836 0-1.524-.38-1.884-.885z"></svg:path></svg:g>`,
})
export class SolarServerSquareUpdateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSettingsBrokenIcon],svg[solar-settings-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453c.208-.36.369-.639.489-.873m-.81-2.766a1.62 1.62 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362c.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873"></svg:path></svg:g>`,
})
export class SolarSettingsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSettingsMinimalisticBrokenIcon],svg[solar-settings-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7.843 20.198C9.872 21.399 10.886 22 12 22s2.128-.6 4.157-1.802l.686-.407c2.029-1.2 3.043-1.802 3.6-2.791c.557-.99.557-2.19.557-4.594M20.815 8a3.6 3.6 0 0 0-.372-1c-.557-.99-1.571-1.59-3.6-2.792l-.686-.406C14.128 2.601 13.114 2 12 2s-2.128.6-4.157 1.802l-.686.406C5.128 5.41 4.114 6.011 3.557 7C3 7.99 3 9.19 3 11.594v.812c0 2.403 0 3.605.557 4.594c.226.402.528.74.943 1.08"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class SolarSettingsMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShareBrokenIcon],svg[solar-share-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 12a2.5 2.5 0 1 0 2.5-2.5m7.5-3L9 10m5 7.5L9 14m7.5 7a2.5 2.5 0 1 0-2.5-2.5m4.665-11.75a2.5 2.5 0 1 1-.915-3.415"></svg:path>`,
})
export class SolarShareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShareCircleBrokenIcon],svg[solar-share-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 3a3 3 0 1 0 3 3m-9.5 9a3 3 0 1 1-3 3m16 3a3 3 0 1 1 3-3M20 13a7.98 7.98 0 0 0-2.708-6M4 13a7.98 7.98 0 0 1 2.708-6M10 20.748A8 8 0 0 0 12 21a8 8 0 0 0 2-.252"></svg:path>`,
})
export class SolarShareCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldBrokenIcon],svg[solar-shield-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m3 11l9-3l9 3m-9-9v19.5"></svg:path><svg:path stroke-linecap="round" d="M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994m3-2.629c1.163-1.476 2-3.408 2-5.913v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11"></svg:path></svg:g>`,
})
export class SolarShieldBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldCheckBrokenIcon],svg[solar-shield-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9.5 12.4l1.429 1.6l3.571-4"></svg:path><svg:path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldCrossBrokenIcon],svg[solar-shield-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 9.5l-5 5m0-5l5 5M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path>`,
})
export class SolarShieldCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldKeyholeBrokenIcon],svg[solar-shield-keyhole-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.5 16h1a1 1 0 0 0 1-1v-1.401A2.999 2.999 0 0 0 12 8a3 3 0 0 0-1.5 5.599V15a1 1 0 0 0 1 1Z"></svg:path><svg:path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldKeyholeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldKeyholeMinimalisticBrokenIcon],svg[solar-shield-keyhole-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 13.5v3m1.5-3.402a3 3 0 1 1-3-5.195a3 3 0 0 1 3 5.195Z"></svg:path><svg:path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldKeyholeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldMinimalisticBrokenIcon],svg[solar-shield-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path>`,
})
export class SolarShieldMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldMinusBrokenIcon],svg[solar-shield-minus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 12H9m-6-1.583c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path>`,
})
export class SolarShieldMinusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldNetworkBrokenIcon],svg[solar-shield-network-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 1-9.999 0A5 5 0 0 1 17 12Z"></svg:path><svg:path d="M13.848 13.913c.1-.606.152-1.256.152-1.913s-.052-1.307-.152-1.913a8 8 0 0 0-.434-1.623c-.185-.464-.406-.832-.649-1.083C12.523 7.129 12.263 7 12 7s-.523.13-.765.38c-.243.252-.463.62-.65 1.084a8 8 0 0 0-.433 1.623c-.1.606-.152 1.256-.152 1.913s.052 1.307.152 1.913s.248 1.158.434 1.623c.185.464.406.832.649 1.083c.242.252.502.381.765.381s.523-.13.765-.38c.243-.252.463-.62.65-1.085a8 8 0 0 0 .433-1.622Z"></svg:path><svg:path stroke-linecap="round" d="M7 12h10M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldNetworkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldPlusBrokenIcon],svg[solar-shield-plus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 12h-3m0 0H9m3 0V9m0 3v3m-9-4.583c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path>`,
})
export class SolarShieldPlusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldStarBrokenIcon],svg[solar-shield-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10.861 8.363C11.368 7.454 11.621 7 12 7s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71c.117.377-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.403l-.239-.11c-.261-.12-.392-.181-.531-.181s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.176-.889-1.553c.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473z"></svg:path><svg:path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldStarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldUpBrokenIcon],svg[solar-shield-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M16 11.55L12.6 9a1 1 0 0 0-1.2 0L8 11.55m6 2.5l-2-1.5l-2 1.5"></svg:path><svg:path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldUserBrokenIcon],svg[solar-shield-user-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="9" r="2"></svg:circle><svg:path d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z"></svg:path><svg:path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldUserBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldWarningBrokenIcon],svg[solar-shield-warning-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 8v4"></svg:path><svg:circle cx="12" cy="15" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></svg:path></svg:g>`,
})
export class SolarShieldWarningBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShockAbsorberBrokenIcon],svg[solar-shock-absorber-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM6 4c0-.943 0-1.414.293-1.707S7.057 2 8 2h8c.943 0 1.414 0 1.707.293S18 3.057 18 4s0 1.414-.293 1.707S16.943 6 16 6H8c-.943 0-1.414 0-1.707-.293S6 4.943 6 4Z"></svg:path><svg:path d="M8.5 16.5A1.5 1.5 0 0 1 10 15h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.5-1.5Zm5.5-1v-10m-4 10V6"></svg:path><svg:path stroke-linecap="round" d="m8 8l8 2m-8 1.5l8 2m4-2h2m-18 0H2m17.071 2.8l.707.7m-14.85-.7l-.706.7m14.85-6.3l.706-.7m-14.85.7L4.223 8"></svg:path></svg:g>`,
})
export class SolarShockAbsorberBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShop2BrokenIcon],svg[solar-shop-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3m6.5.5H9m-6 0h2.5M19 22v-7M5 22v-7"></svg:path><svg:path stroke-linejoin="round" d="M12 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2H16"></svg:path></svg:g>`,
})
export class SolarShop2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopBrokenIcon],svg[solar-shop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172M20.5 11v3c0 1.17 0 2.158-.035 3"></svg:path><svg:path d="M9.5 2h5m-5 0l-.652 6.517a3.167 3.167 0 1 0 6.304 0L14.5 2m-5 0H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548M9.5 2l-.725 7.245a3.06 3.06 0 1 1-6.043-.904L2.8 8m11.7-6h2.082c.908 0 1.362 0 1.752.107a3 3 0 0 1 1.888 1.548c.181.36.27.806.448 1.696l.598 2.99a3.06 3.06 0 1 1-6.043.904zm-5 19.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"></svg:path></svg:g>`,
})
export class SolarShopBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticBrokenIcon],svg[solar-shop-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 22H11m-8 0h4m12 0v-7M5 22v-7"></svg:path><svg:path stroke-linejoin="round" d="M12 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2H16"></svg:path></svg:g>`,
})
export class SolarShopMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleBrokenIcon],svg[solar-shuffle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5zm3.603 1.5a.75.75 0 0 0 0-1.5zm5.145-3.663l-.643-.386zm2.504-4.174l.643.386zM22 7l.53.53a.75.75 0 0 0 0-1.06zm-2.53 1.47a.75.75 0 0 0 1.06 1.06zm1.06-4a.75.75 0 1 0-1.06 1.06zm-5.31 2.92l-.369-.653zm-6.5 8.338a.75.75 0 1 0 1.024 1.096zM2 17.75h3.603v-1.5H2zm9.39-3.277l2.505-4.174l-1.286-.772l-2.504 4.174zm7.007-6.723H22v-1.5h-3.603zm3.073-1.28l-2 2l1.06 1.06l2-2zm1.06 0l-2-2l-1.06 1.06l2 2zm-8.635 3.829c.434-.724.734-1.22 1.006-1.589c.263-.355.468-.543.689-.668l-.739-1.305c-.467.264-.82.627-1.155 1.08c-.326.44-.668 1.011-1.087 1.71zm4.502-4.049c-.815 0-1.48 0-2.025.052c-.562.055-1.054.17-1.521.435l.739 1.305c.22-.125.487-.204.927-.247c.456-.044 1.036-.045 1.88-.045zm-8.292 7.451c-.677 1.128-1.02 1.686-1.385 2.027l1.024 1.096c.557-.52 1.02-1.306 1.647-2.351zM2 6.25a.75.75 0 0 0 0 1.5zM22 17l.53.53a.75.75 0 0 0 0-1.06zm-1.47-2.53a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zm-3.345-1.525l.144-.736zm-1.682-2.33a.75.75 0 1 0-1.286.77zm.025 1.391l.558-.501zm-6.593-8.95l.143-.737zm1.682 2.33a.75.75 0 0 0 1.286-.772zm-.025-1.393l-.558.502zM2 7.75h4.668v-1.5H2zm15.332 10H22v-1.5h-4.668zm5.198-1.28l-2-2l-1.06 1.06l2 2zm-1.06 0l-2 2l1.06 1.06l2-2zm-4.138-.22c-.645 0-.867-.003-1.063-.041l-.287 1.472c.372.072.765.069 1.35.069zm-4.175-.864c.3.502.5.84.754 1.122l1.115-1.003c-.134-.149-.25-.337-.583-.89zm3.112.823a2.25 2.25 0 0 1-1.243-.704l-1.115 1.003a3.75 3.75 0 0 0 2.071 1.173zM6.668 7.75c.645 0 .867.003 1.063.041l.287-1.472c-.372-.072-.765-.069-1.35-.069zm4.175.864c-.3-.502-.5-.84-.754-1.122L8.974 8.495c.134.149.25.337.583.89zm-3.112-.823c.48.094.916.34 1.243.704l1.115-1.003a3.75 3.75 0 0 0-2.071-1.173z"></svg:path>`,
})
export class SolarShuffleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeBrokenIcon],svg[solar-sidebar-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7M15 3v10m0 4v4"></svg:path><svg:path stroke-linejoin="round" d="m6 14l-1 1l1 1m4.5 0l1 1l-1 1M9 14l-1.5 4"></svg:path></svg:g>`,
})
export class SolarSidebarCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticBrokenIcon],svg[solar-sidebar-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 3v10m0 4v4M2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path>`,
})
export class SolarSidebarMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarBrokenIcon],svg[solar-siderbar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.5 10h6m-5 4h4M15 3v10m0 4v4M2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path>`,
})
export class SolarSiderbarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2BrokenIcon],svg[solar-signpost-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.337 18.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098a2 2 0 0 0 .383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.245.367-.312.84-.33 1.611m17.658-5.389a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.706c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.851-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.439-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099h10.796c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.245.367.312.84.33 1.611M14 22h-4M9 7h6m-6 9h6"></svg:path></svg:g>`,
})
export class SolarSignpost2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostBrokenIcon],svg[solar-signpost-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.337 18.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098a2 2 0 0 0 .383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.245.367-.312.84-.33 1.611m17.658-5.389a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.706c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.851-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.439-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099h10.796c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.245.367.312.84.33 1.611M14 22h-4"></svg:path></svg:g>`,
})
export class SolarSignpostBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardBrokenIcon],svg[solar-sim-card-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 12h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552C9.393 19 10.096 19 11.5 19h.5m0-7h.5c1.405 0 2.107 0 2.611.337c.218.146.406.334.552.552c.337.504.337 1.207.337 2.611M12 12v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337c.218-.146.406-.334.552-.552C16 17.607 16 16.904 16 15.5M12 19v-3.5m0 0h4"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path></svg:g>`,
})
export class SolarSimCardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticBrokenIcon],svg[solar-sim-card-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path><svg:path d="M14.5 13h-5c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 0 0-1.572-1.572C15.197 13 14.965 13 14.5 13Z"></svg:path></svg:g>`,
})
export class SolarSimCardMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsBrokenIcon],svg[solar-sim-cards-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828S13.771 22 10 22s-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M18 17.899c1.3-.128 2.175-.417 2.828-1.07C22 15.656 22 13.77 22 10a3.86 3.86 0 0 0-1.136-2.731L20.597 7M6.102 6c.127-1.3.416-2.175 1.07-2.828C8.343 2 10.229 2 14 2a3.86 3.86 0 0 1 2.731 1.136l.269.268"></svg:path><svg:path d="M10 14H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707S8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293S13 15.057 13 16v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293S13 17.943 13 17v-.5M10 19v-2.5m0 0h3"></svg:path></svg:g>`,
})
export class SolarSimCardsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenBrokenIcon],svg[solar-siren-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185c-.188.37-.311.778-.392 1.27M4 22v-6"></svg:path><svg:path stroke-linecap="round" d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h12m8 0h-4M12 2v3m9 0l-1.5 1.5M3 5l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3"></svg:path></svg:g>`,
})
export class SolarSirenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedBrokenIcon],svg[solar-siren-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 22v-6a8 8 0 0 0-14.93-4M4 22v-6"></svg:path><svg:path stroke-linecap="round" d="M14.29 11.5a4 4 0 0 1 2.21 2.21M12 2v3m9 1l-1.5 1.5M3 6l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3M2 22h12m8 0h-4"></svg:path></svg:g>`,
})
export class SolarSirenRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardBrokenIcon],svg[solar-skateboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 7l.813 1.219A4 4 0 0 0 6.14 10H12m10-3l-.812 1.219A4 4 0 0 1 17.859 10H16"></svg:path><svg:circle cx="7" cy="15" r="2"></svg:circle><svg:circle cx="17" cy="15" r="2"></svg:circle></svg:g>`,
})
export class SolarSkateboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingBrokenIcon],svg[solar-skateboarding-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 17l1.204 1.338A2 2 0 0 0 5.691 19H10m11-2l-1.204 1.338a2 2 0 0 1-1.487.662H14"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.517c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118l.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5m5.5-4a8.25 8.25 0 0 0 4 0"></svg:path></svg:g>`,
})
export class SolarSkateboardingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundBrokenIcon],svg[solar-skateboarding-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m3 17l.608.676A4 4 0 0 0 6.581 19H10m11-2l-.608.676A4 4 0 0 1 17.419 19H14"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-2.133a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736a4.27 4.27 0 0 0-3.943.304L8.5 8m2.5 6l-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3"></svg:path></svg:g>`,
})
export class SolarSkateboardingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextBrokenIcon],svg[solar-skip-next-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 11v7.967c0 2.31 2.134 3.769 3.87 2.648l10.79-6.968c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033V7m20-2v7m0 4v3"></svg:path>`,
})
export class SolarSkipNextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousBrokenIcon],svg[solar-skip-previous-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 11v7.967c0 2.31-2.134 3.769-3.87 2.648L7.34 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968C19.865 1.264 22 2.724 22 5.033V7M2 5v7m0 7v-3"></svg:path>`,
})
export class SolarSkipPreviousBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtBrokenIcon],svg[solar-skirt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.08 17.953l-.717-.217zm19.84 0l.717-.217zM2.734 19.829l.385-.643zm18.53 0l-.385-.643zm-10.7-13.736a.75.75 0 1 0-1.488-.186zM7.148 21.407a.75.75 0 0 0 1.489.186zm7.776-15.5a.75.75 0 0 0-1.489.186zm.441 15.686a.75.75 0 0 0 1.488-.186zm4.572-12.81a.75.75 0 0 0-1.436.434zm-16.85 8.434a.75.75 0 1 0-1.436-.434zm-.23-4.434a.75.75 0 1 0 1.437.434zM7.893 2.75h8.216v-1.5H7.892zM17.412 4v1h1.5V4zm.25.75H5.838v1.5h11.824zM6.588 5.5V4h-1.5v1.5zm9.52-2.75c.505 0 .81.002 1.03.03a.8.8 0 0 1 .198.048l.002.002l1.047-1.074c-.314-.306-.693-.416-1.052-.463c-.34-.045-.761-.043-1.225-.043zM18.912 4c0-.45.002-.864-.044-1.2c-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003l.005.01a.7.7 0 0 1 .037.162c.029.21.03.502.03.995zM7.892 1.25c-.464 0-.885-.002-1.225.043c-.359.047-.738.157-1.052.463L6.662 2.83l.002-.002l.018-.008a.8.8 0 0 1 .18-.04c.22-.028.525-.03 1.03-.03zM6.588 4c0-.493.001-.786.03-.995a.7.7 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044c-.046.336-.044.75-.044 1.2zm-4.24 16.472c1.533.92 4.649 2.278 9.652 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064zM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017zM9.077 5.907l-1.93 15.5l1.489.186l1.93-15.5zm4.357.186l1.93 15.5l1.488-.186l-1.93-15.5zm9.203 11.643l-2.7-8.953l-1.437.434l2.701 8.952zM1.65 16.783l-.287.953l1.436.433l.287-.952zm3.47-11.5l-2.263 7.5l1.436.434l2.263-7.5zM17.412 5a.25.25 0 0 1 .25-.25v1.5c.69 0 1.25-.56 1.25-1.25z"></svg:path>`,
})
export class SolarSkirtBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleBrokenIcon],svg[solar-slash-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSlashCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareBrokenIcon],svg[solar-slash-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSlashSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerBrokenIcon],svg[solar-sledgehammer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.66 8.286l.368-.368c.342-.343.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.178-.275-.35-.617-.692s-.514-.514-.692-.616a1.56 1.56 0 0 0-1.562 0c-.178.102-.35.274-.692.616l-.368.368m-4.419 10.31l-5.523 5.524c-.343.343-.514.514-.692.617a1.56 1.56 0 0 1-1.562 0c-.179-.103-.35-.274-.692-.617c-.343-.342-.514-.514-.617-.692a1.56 1.56 0 0 1 0-1.562c.103-.178.274-.35.617-.692l5.523-5.523M18 17.75c-.898.827-1.542 1.24-2.286 1.24c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.878 10.233 5.01 9.365 5.01 8.286s.868-1.946 2.604-3.682S10.217 2 11.295 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419C21.131 10.758 22 11.626 22 12.705c0 .747-.416 1.392-1.248 2.295"></svg:path>`,
})
export class SolarSledgehammerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingBrokenIcon],svg[solar-sleeping-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 6v12m20-2v2m-10-2v-4.643c0-.798 0-1.197.112-1.518a2 2 0 0 1 1.227-1.227c.321-.112.72-.112 1.518-.112c1.995 0 2.992 0 3.794.28a5 5 0 0 1 3.068 3.069M2 16h20"></svg:path><svg:path d="M9.5 11A2.5 2.5 0 1 0 7 13.5"></svg:path></svg:g>`,
})
export class SolarSleepingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleBrokenIcon],svg[solar-sleeping-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5"></svg:path></svg:g>`,
})
export class SolarSleepingCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareBrokenIcon],svg[solar-sleeping-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m10 10c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path></svg:g>`,
})
export class SolarSleepingSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalBrokenIcon],svg[solar-slider-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.5 6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C4.5 3.9 4.5 4.6 4.5 6m15 12c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.6 22 16.9 22 15.5 22h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C4.5 20.1 4.5 19.4 4.5 18"></svg:path><svg:path stroke-linecap="round" d="M8 6c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h8c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6h-4"></svg:path></svg:g>`,
})
export class SolarSliderHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalBrokenIcon],svg[solar-slider-minimalistic-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.5 3h15m-15 18h15M8 6c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h8c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6h-4"></svg:path>`,
})
export class SolarSliderMinimalisticHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalBrokenIcon],svg[solar-slider-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4"></svg:path><svg:path d="M18 19.5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.6 22 16.9 22 15.5v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 4.5 19.4 4.5 18 4.5m-12 15c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 4.5 4.6 4.5 6 4.5"></svg:path></svg:g>`,
})
export class SolarSliderVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticBrokenIcon],svg[solar-slider-vertical-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4m3-7.5v15M3 4.5v15"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleBrokenIcon],svg[solar-smart-home-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093c-1.069.92-2.591 1.004-5.451 1.011m7.665-14.124c-.54-1.127-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183c-.286.598-.368 1.25-.324 2.125M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeBrokenIcon],svg[solar-smart-home-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.772 22 14 22m7.48-14.177c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.04 6.874 2.52 7.823c-.317.58-.44 1.233-.488 2.177M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2BrokenIcon],svg[solar-smart-speaker-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.833 3.634a.75.75 0 0 0-1.496.111zm.05 10.806l.748-.042v-.013zm-13.729-.089l-.747-.066v.007l-.001.008zm1.455-7.93a.75.75 0 0 0-1.494-.132zm5.407 16.329a.75.75 0 0 0 0-1.5zM7.03 21.413l-.387.643zm-1.667-1.858l-.679.319zm13.253.033l.676.325zm-1.665 1.834l.384.644zm-4.504-14.39a.75.75 0 0 0 .402 1.445zm-6.556-.215l-.726.187zM15.83 21.06a.75.75 0 0 0 .341 1.461zM8.98 8.998a.75.75 0 0 0 .042-1.5zm3.037 12.252c-1.351 0-2.313 0-3.06-.07c-.738-.069-1.189-.199-1.54-.41l-.773 1.286c.625.376 1.33.54 2.174.617c.833.078 1.876.077 3.199.077zm-7.61-6.95c-.094 1.37-.169 2.446-.154 3.31c.015.87.12 1.6.432 2.264l1.358-.638c-.183-.389-.277-.877-.29-1.653c-.014-.783.054-1.783.15-3.18zm3.01 6.47a3.55 3.55 0 0 1-1.374-1.534l-1.358.638a5.04 5.04 0 0 0 1.96 2.182zm10.718-6.287c.078 1.383.133 2.372.111 3.147c-.022.767-.12 1.25-.305 1.634l1.352.649c.315-.655.427-1.377.452-2.24c.025-.854-.036-1.919-.113-3.275zm-.194 4.78a3.54 3.54 0 0 1-1.373 1.514l.768 1.289a5.04 5.04 0 0 0 1.957-2.153zm-.619-15.64c.031.12.023.311-.14.6c-.164.29-.46.627-.902.98c-.882.706-2.228 1.383-3.832 1.83l.402 1.444c1.753-.487 3.294-1.244 4.367-2.102c.535-.428.983-.905 1.27-1.414c.29-.512.444-1.107.288-1.713zM6.618 6.629c-.03-.12-.022-.311.14-.6c.165-.29.461-.628.903-.98c.881-.706 2.228-1.383 3.832-1.83l-.402-1.445c-1.753.488-3.294 1.244-4.367 2.103c-.535.428-.983.905-1.271 1.414c-.29.512-.444 1.107-.287 1.713zm4.875-3.41c1.604-.446 3.094-.557 4.192-.405c.55.077.965.214 1.241.377c.271.16.366.315.396.432l1.453-.375c-.157-.609-.581-1.051-1.088-1.35c-.5-.295-1.123-.476-1.795-.57c-1.348-.186-3.049-.04-4.801.446zm-5.59 11.198l.707-7.996l-1.494-.132l-.708 7.996zM17.336 3.745l.797 10.75l1.496-.11l-.797-10.75zM16.17 22.522a4 4 0 0 0 1.164-.456l-.768-1.288a2.6 2.6 0 0 1-.738.283zM9.02 7.5c-.776-.022-1.39-.149-1.81-.337c-.423-.19-.558-.393-.594-.533l-1.452.375c.192.744.777 1.233 1.434 1.527c.66.295 1.486.442 2.38.467z"></svg:path><svg:path fill="currentColor" d="M4.715 13.838c.75.753 2.66 1.912 7.285 1.912v-1.5c-4.394 0-5.854-1.1-6.222-1.47zM12 15.75c4.747 0 6.634-1.222 7.34-1.97l-1.09-1.03c-.322.341-1.742 1.5-6.25 1.5z"></svg:path>`,
})
export class SolarSmartSpeaker2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerBrokenIcon],svg[solar-smart-speaker-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 14.05c.653.57 2.487 2.034 7 2.377M21 14c-.602.554-2.361 2.076-6.99 2.427"></svg:path><svg:path d="M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5"></svg:path><svg:path stroke-linecap="round" d="M8 4.412c-.32.275-.5.673-.5 1c0 1.153 1.739 2 4.5 2s4.5-.847 4.5-2c0-.327-.18-.636-.5-.912"></svg:path><svg:path stroke-linecap="round" d="M21 12a47 47 0 0 1-.288 5.22l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689l.016-.137a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067q.084.724.148 1.452"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticBrokenIcon],svg[solar-smart-speaker-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 12a47 47 0 0 1-.288 5.22l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689l.016-.137a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067q.084.724.148 1.452"></svg:path><svg:path d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2BrokenIcon],svg[solar-smart-vacuum-cleaner-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 9a3 3 0 1 0-3 3m0 6v-2M2 22l2.5-2.5M22 22l-2.5-2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleaner2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerBrokenIcon],svg[solar-smart-vacuum-cleaner-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 9a3 3 0 1 0-3 3"></svg:path><svg:path d="M16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleanerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2BrokenIcon],svg[solar-smartphone-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5-5H9"></svg:path><svg:circle cx="12" cy="17" r="2"></svg:circle></svg:g>`,
})
export class SolarSmartphone2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneBrokenIcon],svg[solar-smartphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5 9H9"></svg:path>`,
})
export class SolarSmartphoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2BrokenIcon],svg[solar-smartphone-rotate-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.444 19.122l.53.53zm-8.14 0l.53-.53zm8.818-8.818l-.53.53zm0 8.14l-.53-.53zM22 14.374h.75zM5.556 4.878l.53.53zm8.14 0l.53-.53zM9.626 2v.75zM4.878 5.556l-.53-.53zm0 8.14l-.53.53zM2 9.626h-.75zm7.478-3.54a.75.75 0 0 0-1.06-1.06zM5.026 8.418a.75.75 0 1 0 1.06 1.061zm13.27 0a.75.75 0 1 0-1.06 1.061zm-3.774-1.652a.75.75 0 0 0 1.06-1.06zm-9.114-.679l.678-.678l-1.06-1.06l-.679.678zm13.184 11.828l-.678.678l1.06 1.06l.678-.678zm-7.757.678l-5.427-5.427l-1.06 1.061l5.426 5.426zm7.079 0c-.975.974-1.653 1.65-2.232 2.092c-.562.429-.942.566-1.308.566v1.5c.826 0 1.522-.343 2.217-.873c.678-.517 1.439-1.28 2.383-2.224zm-8.14 1.06c.944.945 1.705 1.707 2.383 2.225c.695.53 1.391.873 2.217.873v-1.5c-.366 0-.745-.137-1.308-.566c-.579-.442-1.257-1.118-2.231-2.092zm8.818-8.817c.974.974 1.65 1.652 2.092 2.231c.429.563.566.942.566 1.308h1.5c0-.826-.343-1.522-.873-2.217c-.517-.678-1.28-1.439-2.224-2.383zm1.06 8.14c.945-.945 1.707-1.706 2.225-2.384c.53-.695.873-1.391.873-2.217h-1.5c0 .366-.137.746-.566 1.308c-.442.579-1.118 1.257-2.092 2.232zM6.086 5.407c.975-.974 1.653-1.65 2.232-2.092c.562-.429.942-.566 1.308-.566v-1.5c-.826 0-1.522.343-2.217.873c-.679.518-1.439 1.28-2.383 2.224zm8.14-1.06c-.944-.945-1.705-1.707-2.383-2.225c-.695-.53-1.391-.873-2.217-.873v1.5c.366 0 .745.137 1.308.566c.579.442 1.257 1.118 2.231 2.092zm-9.879.678c-.944.944-1.706 1.704-2.224 2.383c-.53.695-.873 1.391-.873 2.217h1.5c0-.366.137-.746.566-1.308c.442-.579 1.118-1.257 2.092-2.232zm1.061 8.14c-.974-.975-1.65-1.653-2.092-2.232c-.429-.562-.566-.942-.566-1.308h-1.5c0 .826.343 1.522.873 2.217c.518.678 1.28 1.439 2.224 2.383zm3.01-8.14L5.025 8.417l1.06 1.061l3.392-3.391zm7.8 10.218a.69.69 0 0 1 0 .974l1.06 1.06a2.19 2.19 0 0 0 0-3.095zm0 .974a.69.69 0 0 1-.974 0l-1.061 1.06c.855.856 2.24.856 3.096 0zm-.974 0a.69.69 0 0 1 0-.974l-1.061-1.06a2.19 2.19 0 0 0 0 3.095zm0-.974a.69.69 0 0 1 .974 0l1.06-1.06a2.19 2.19 0 0 0-3.095 0zm1.991-5.766l1.357 1.357l1.06-1.061l-1.356-1.357zm-4.07-4.07l1.357 1.357l1.06-1.06l-1.356-1.358z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6M3.5 17.014L2 16c0 3.015 2.162 5.517 5 6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotate2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleBrokenIcon],svg[solar-smartphone-rotate-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 5H9"></svg:path><svg:path fill="currentColor" d="M21.426 14.412a.75.75 0 1 0-.931 1.176zm-17.92 1.176a.75.75 0 1 0-.932-1.176zm8.494 5.1l.494.564a.75.75 0 0 0 0-1.129zm-1.5-1.313l.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm3.924-2.183a.75.75 0 0 0 .152 1.493zm6.07-4.23c.574.455.756.856.756 1.163h1.5c0-.95-.567-1.738-1.324-2.338zM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373l-1.5-1.312l-.988 1.128l1.5 1.313zm-1.5 2.441l1.5-1.312l-.988-1.129l-1.5 1.313zM21.25 16.75c0 .457-.425 1.112-1.719 1.76c-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459c1.379-.69 2.547-1.723 2.547-3.101zm-11.5 2.625v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248c-.71-.322-1.232-.672-1.565-1.017c-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922c.509.526 1.21.972 2.024 1.341c1.63.74 3.851 1.233 6.32 1.38z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 8c0-2.828 0-4.243-.879-5.121C16.743 2 15.328 2 12.5 2h-1c-2.828 0-4.243 0-5.121.879C5.5 3.757 5.5 5.172 5.5 8v8q0 .532.002 1m12.996 0q.003-.468.002-1v-4"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationBrokenIcon],svg[solar-smartphone-rotate-orientation-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 14v2c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h1c2.828 0 4.243 0 5.121-.879C15 20.243 15 18.828 15 16V8c0-2.828 0-4.243-.879-5.121C13.243 2 11.828 2 9 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2m15.5.007c1.86.027 2.914.165 3.621.872C22 11.758 22 13.172 22 16s0 4.243-.879 5.122c-.707.707-1.761.845-3.621.872M11 5H6m13 13v-4"></svg:path><svg:path d="M10 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateOrientationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateBrokenIcon],svg[solar-smartphone-update-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarSmartphoneUpdateBroken0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 10c0-3.771 0-5.657-1.172-6.828C17.765 2.109 16.114 2.01 13 2m7 12c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.772 4 14v-2.999"></svg:path><svg:path fill="currentColor" d="M2.73 4h-.75zm0 .8l-.554.506a.75.75 0 0 0 1.108 0zm1.284-.294a.75.75 0 1 0-1.108-1.012zm-1.46-1.012a.75.75 0 0 0-1.108 1.012zM10.27 3.2l.554-.506a.75.75 0 0 0-1.108 0zm-1.284.294a.75.75 0 0 0 1.108 1.012zm1.46 1.012a.75.75 0 0 0 1.108-1.012zm-5.87 1.8A.75.75 0 0 0 3.461 7.31zM8.54 1.83A.75.75 0 0 0 9.71.892zM6.38-.75c-2.494 0-4.4 2.193-4.4 4.75h1.5c0-1.86 1.36-3.25 2.9-3.25zM1.981 4v.8h1.5V4zm1.303 1.306l.73-.8l-1.108-1.012l-.73.8zm0-1.012l-.73-.8l-1.108 1.012l.73.8zM6.62 8.75c2.494 0 4.4-2.193 4.4-4.75h-1.5c0 1.86-1.36 3.25-2.9 3.25zM11.02 4v-.8h-1.5V4zM9.717 2.694l-.73.8l1.108 1.012l.73-.8zm0 1.012l.73.8l1.108-1.012l-.73-.8zM3.46 7.309c.79.879 1.908 1.441 3.158 1.441v-1.5c-.785 0-1.509-.35-2.043-.944zM9.71.892C8.914-.1 7.726-.75 6.381-.75v1.5c.843 0 1.617.404 2.159 1.08z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 19H9"></svg:path></svg:g><svg:defs><svg:clippath id="solarSmartphoneUpdateBroken0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarSmartphoneUpdateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationBrokenIcon],svg[solar-smartphone-vibration-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M19 10V8c0-2.828 0-4.243-.879-5.121C17.243 2 15.828 2 13 2h-2c-2.828 0-4.243 0-5.121.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16v-2m-4.5 5h-5"></svg:path><svg:path stroke-linejoin="round" d="m22 6l-.776 1.553a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894L22 18M2 6l.776 1.553a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894L2 18"></svg:path></svg:g>`,
})
export class SolarSmartphoneVibrationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleBrokenIcon],svg[solar-smile-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSmileCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareBrokenIcon],svg[solar-smile-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSmileSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeBrokenIcon],svg[solar-snowflake-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v16m0 4v-4m0 0l3 3m-3-3l-3 3m6-18l-3 3l-3-3M3.34 7l3.464 2m0 0l10.392 6M6.804 9L5.706 4.902M6.804 9l-4.098 1.098M17.196 15l3.464 2m-3.464-2l4.098-1.098M17.196 15l1.098 4.099M20.66 7l-3.464 2m0 0L6.804 15m10.392-6l1.098-4.098M17.196 9l4.098 1.098M6.804 15L3.34 17m3.464-2l-4.098-1.098M6.804 15l-1.098 4.1"></svg:path>`,
})
export class SolarSnowflakeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketBrokenIcon],svg[solar-socket-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.584 9.413a6 6 0 1 1 0 5.174M12 18v-1.5m0-9V6"></svg:path><svg:circle cx="14" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="12" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarSocketBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2BrokenIcon],svg[solar-sofa-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 18H5.556A3.556 3.556 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444A3.556 3.556 0 0 1 18.444 18H12"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10"></svg:path><svg:path fill="currentColor" d="M12.75 11a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zm0 4v3h1.5v-3zm0-6v2h1.5V5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 19v-1M4 19v-1"></svg:path></svg:g>`,
})
export class SolarSofa2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BrokenIcon],svg[solar-sofa-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 18h9a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4h3m-2.5-4l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4q1.083-.002 2 .006M19.5 14l.075-.299c1.086-4.347 1.63-6.52.559-8.023a4 4 0 0 0-.215-.275c-.462-.54-1.078-.873-1.919-1.078M20 20v-2M4 20v-2"></svg:path>`,
})
export class SolarSofa3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaBrokenIcon],svg[solar-sofa-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 18H5.556A3.556 3.556 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444A3.556 3.556 0 0 1 18.444 18H12"></svg:path><svg:path d="M15 5c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143C20 8.606 20 9.07 20 10M4 10c0-.93 0-1.394.077-1.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2m9 14v-1M4 19v-1"></svg:path></svg:g>`,
})
export class SolarSofaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortBrokenIcon],svg[solar-sort-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 7H9M2 7h3m14 5h-3M5 12h7m4 5H8"></svg:path>`,
})
export class SolarSortBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetBrokenIcon],svg[solar-sort-by-alphabet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 7H3m7 5H3m5 5H3"></svg:path><svg:path fill="currentColor" d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944l.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694l4.5-10l-1.368-.616l-4.5 10zm9-.616l-1.636-3.636l-1.368.615l1.636 3.637zm-1.636-3.636l-2.864-6.364l-1.368.616l2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"></svg:path></svg:g>`,
})
export class SolarSortByAlphabetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeBrokenIcon],svg[solar-sort-by-time-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 7H2m6 5H2m8 5H2"></svg:path><svg:circle cx="17" cy="12" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 10v1.846L18 13"></svg:path></svg:g>`,
})
export class SolarSortByTimeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopBrokenIcon],svg[solar-sort-from-bottom-to-top-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 8h9m-7 5h7m-5 5h5"></svg:path><svg:path stroke-linejoin="round" d="M17 20V4l3 4"></svg:path></svg:g>`,
})
export class SolarSortFromBottomToTopBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomBrokenIcon],svg[solar-sort-from-top-to-bottom-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 16h9m-7-5h7M8 6h5"></svg:path><svg:path stroke-linejoin="round" d="M17 4v16l3-4"></svg:path></svg:g>`,
})
export class SolarSortFromTopToBottomBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalBrokenIcon],svg[solar-sort-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 8l4.125-4M6 8l4.125 4M6 8h7m5 0h-2m2 8l-4.125-4M18 16l-4.125 4M18 16h-7m-5 0h2"></svg:path>`,
})
export class SolarSortHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalBrokenIcon],svg[solar-sort-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18v-2m0-10l4 4.125M16 6l-4 4.125M16 6v7m-8 5l4-4.125M8 18l-4-4.125M8 18v-7m0-5v2"></svg:path>`,
})
export class SolarSortVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveBrokenIcon],svg[solar-soundwave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4v16m4-13v2m0 8v-4m-8 4v-2m0-8v4m12 0v2M4 11v2"></svg:path>`,
})
export class SolarSoundwaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleBrokenIcon],svg[solar-soundwave-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v10m5-7v4M7 9v6M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarSoundwaveCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareBrokenIcon],svg[solar-soundwave-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v10m5-7v4M7 9v6m15-3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarSoundwaveSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerBrokenIcon],svg[solar-speaker-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 12v2c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"></svg:path><svg:path d="M14 7.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarSpeakerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticBrokenIcon],svg[solar-speaker-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 12v2c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"></svg:path><svg:path d="M16 14a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M10 6h4"></svg:path></svg:g>`,
})
export class SolarSpeakerMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsBrokenIcon],svg[solar-special-effects-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6 8v-.75a.75.75 0 0 0-.75.75zm4 .75a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0-1.5zm8.6-4.3a.75.75 0 1 0-1.2-.9zm-7.2 7.1a.75.75 0 1 0 1.2.9zm1.2-8a.75.75 0 1 0-1.2.9zm4.8 8.9a.75.75 0 1 0 1.2-.9zM5.25 16a.75.75 0 0 0 1.5 0zM6 8.75h4v-1.5H6zm0 4h4v-1.5H6zm11.4-5.2l-3 4l1.2.9l3-4zm-3 4l-3 4l1.2.9l3-4zm-3-3.1l3 4l1.2-.9l-3-4zm3 4l3 4l1.2-.9l-3-4zM5.25 8v4h1.5V8zm0 4v4h1.5v-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSpecialEffectsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowBrokenIcon],svg[solar-spedometer-low-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346c-.32 1.459-.481 2.188.1 2.77c.58.58 1.31.42 2.768.098c.975-.214 1.9-.525 2.346-.971Z"></svg:path><svg:path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542"></svg:path></svg:g>`,
})
export class SolarSpedometerLowBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxBrokenIcon],svg[solar-spedometer-max-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.446.757 1.371.971 2.346c.321 1.459.482 2.188-.099 2.77c-.58.58-1.31.42-2.769.098c-.975-.214-1.9-.525-2.346-.971Z"></svg:path><svg:path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542"></svg:path></svg:g>`,
})
export class SolarSpedometerMaxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleBrokenIcon],svg[solar-spedometer-middle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542M19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346c.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z"></svg:path></svg:g>`,
})
export class SolarSpedometerMiddleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2BrokenIcon],svg[solar-square-academic-cap-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.092 6.637L9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258"></svg:path><svg:path stroke-linejoin="round" d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42c.33-.501.919-.753 2.094-1.257L6 8"></svg:path><svg:path d="M12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5m14 0v5.125c0 1.008-.503 1.952-1.385 2.44a24 24 0 0 1-1.87.935"></svg:path></svg:g>`,
})
export class SolarSquareAcademicCap2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapBrokenIcon],svg[solar-square-academic-cap-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.783 3.5a5.17 5.17 0 0 1 4.434 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0l-6.691-3.137c-1.456-.682-1.456-3.044 0-3.726L6 5.273M2 8.5V14m10 7c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5m14 0v5.125c0 1.008-.503 1.952-1.385 2.44a24 24 0 0 1-1.87.935"></svg:path>`,
})
export class SolarSquareAcademicCapBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownBrokenIcon],svg[solar-square-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftBrokenIcon],svg[solar-square-alt-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13.5 9l-3 3l3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightBrokenIcon],svg[solar-square-alt-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.5 9l3 3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpBrokenIcon],svg[solar-square-alt-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 13.5l-3-3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownBrokenIcon],svg[solar-square-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftBrokenIcon],svg[solar-square-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M16 12H8m0 0l3-3m-3 3l3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownBrokenIcon],svg[solar-square-arrow-left-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l-6 6m0 0v-4.5M9 15h4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpBrokenIcon],svg[solar-square-arrow-left-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 15L9 9m0 0h4.5M9 9v4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightBrokenIcon],svg[solar-square-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownBrokenIcon],svg[solar-square-arrow-right-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 9l6 6m0 0v-4.5m0 4.5h-4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpBrokenIcon],svg[solar-square-arrow-right-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 15l6-6m0 0h-4.5M15 9v4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpBrokenIcon],svg[solar-square-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 16V8m0 0l3 3m-3-3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownBrokenIcon],svg[solar-square-bottom-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m11 13l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.178 21.894 17.055 21.993 13 22M2 11c.008-4.055.107-6.178 1.464-7.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareBottomDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpBrokenIcon],svg[solar-square-bottom-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.178 21.894 17.055 21.993 13 22M2 11c.008-4.055.107-6.178 1.464-7.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path></svg:g>`,
})
export class SolarSquareBottomUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownBrokenIcon],svg[solar-square-double-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 8.5l3 3l3-3m-6 4l3 3l3-3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareDoubleAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
