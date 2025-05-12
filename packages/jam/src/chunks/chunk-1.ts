import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamItalicIcon],svg[jam-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.273 8l1.95-6H3a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2H6.326l-1.95 6H6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamItalicIcon {
  readonly viewBox = input("-7.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamJoystickIcon],svg[jam-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m1 7h2a3 3 0 0 1 3 3v4H0v-4a3 3 0 0 1 3-3h6V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874zm-9 5h12v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zm2.5-6h2a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class JamJoystickIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamJoystickFIcon],svg[jam-joystick-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.915 13H9V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874V13h2a3 3 0 0 1 3 3v4H0v-4a3 3 0 0 1 3-3h.085A1.5 1.5 0 0 1 4.5 12h2a1.5 1.5 0 0 1 1.415 1"></svg:path>`,
})
export class JamJoystickFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamKeyIcon],svg[jam-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.612 16.337l3.746-3.747l1.027.183a5 5 0 1 0-4.039-4.039l.184 1.028l-6.994 6.994l.177 2.651l2.651.177l1.833-1.833l-.707-.707a1 1 0 0 1 1.415-1.414zm.707-13.435a7 7 0 1 1 3.715 11.84L6.137 21.64l-4.43-.295a1 1 0 0 1-.932-.932l-.295-4.43l6.898-6.898a6.99 6.99 0 0 1 1.94-6.183zm4.242 5.656A2 2 0 1 1 16.39 5.73a2 2 0 0 1-2.829 2.828"></svg:path>`,
})
export class JamKeyIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamKeyFIcon],svg[jam-key-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.026 17.609l-2.121-2.122a1 1 0 1 0-1.415 1.415l2.122 2.12l-2.475 2.476l-4.43-.296a1 1 0 0 1-.932-.93L.48 15.84l6.898-6.898a7 7 0 1 1 5.657 5.657l-3.01 3.009zm3.535-9.193a2 2 0 1 0 2.829-2.828a2 2 0 0 0-2.829 2.828"></svg:path>`,
})
export class JamKeyFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamKeyboardIcon],svg[jam-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 4h2v2H3zm0-3h2v2H3zm0 6h2v2H3zm3 0h8v2H6zm0-3h2v2H6zm0-3h2v2H6zm3 3h2v2H9zm0-3h2v2H9zm6 6h2v2h-2zm-3-3h2v2h-2zm0-3h2v2h-2zm3 0h2v5h-2z"></svg:path>`,
})
export class JamKeyboardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamKeyboardFIcon],svg[jam-keyboard-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 6v2h2V6zm0-3v2h2V3zm0 6v2h2V9zm3 0v2h8V9zm0-3v2h2V6zm0-3v2h2V3zm3 3v2h2V6zm0-3v2h2V3zm6 6v2h2V9zm-3-3v2h2V6zm0-3v2h2V3zm3 0v5h2V3z"></svg:path>`,
})
export class JamKeyboardFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLanguageIcon],svg[jam-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.525 14h4.385l-1.993-4.954zm5.19 2h-6.156l-1.658 3.435a1 1 0 0 1-1.802-.87l5.017-10.388a2 2 0 0 1 3.656.123l4.156 10.327a1 1 0 0 1-1.856.746zM1 0h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0 5a1 1 0 1 1 0-2h7.003a2 2 0 0 1 1.736 2.992c-.945 1.654-1.993 2.844-3.165 3.554c-1.472.893-3.32 1.372-5.537 1.453a1 1 0 1 1-.074-1.998c1.898-.07 3.419-.464 4.574-1.165C6.384 7.323 7.213 6.382 8.003 5z"></svg:path>`,
})
export class JamLanguageIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLayersIcon],svg[jam-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.071 7.762l6.417 2.575a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 12.19a1 1 0 0 1 .01-1.852l6.53-2.62c.374-.15 1.556.29 2.693.294c1.215.004 2.387-.417 2.806-.249zM4.064 11.28l6.201 2.567l6.202-2.567l-6.202-2.489zM10.638.786l8.85 3.551a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 6.19a1 1 0 0 1 .01-1.852L9.892.786a1 1 0 0 1 .746 0M4.064 5.28l6.201 2.567l6.202-2.567l-6.202-2.489z"></svg:path>`,
})
export class JamLayersIcon {
  readonly viewBox = input("-1.5 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLayersFIcon],svg[jam-layers-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.638.786l8.85 3.551a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 6.19a1 1 0 0 1 .01-1.852L9.892.786a1 1 0 0 1 .746 0m5.759 8.31l3.091 1.241a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 12.19a1 1 0 0 1 .01-1.852l3.091-1.24l5.176 2.142a2.5 2.5 0 0 0 1.912 0l5.176-2.142z"></svg:path>`,
})
export class JamLayersFIcon {
  readonly viewBox = input("-1.5 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLayoutIcon],svg[jam-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4V8H2V6h14v2H9zM3 0h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamLayoutIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLayoutFIcon],svg[jam-layout-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20V8h9v9a3 3 0 0 1-3 3zm-2 0H3a3 3 0 0 1-3-3V8h7zM18 6H0V3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z"></svg:path>`,
})
export class JamLayoutFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLeafIcon],svg[jam-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.237 15.747a8.56 8.56 0 0 0-1.17 4.324a1 1 0 1 1-2 0c0-2.123.637-4.163 1.785-5.879a7 7 0 0 1 .062-7.738Q4.078 3.249 16.084.801q-.402 10.277-2.563 13.482a7 7 0 0 1-10.284 1.464m1.206-1.6a5 5 0 0 0 7.42-.984c1.004-1.488 1.737-4.815 2.084-9.85C8.004 4.7 4.484 6.222 3.572 7.573a5 5 0 0 0-.357 4.972q.645-.636 1.4-1.16l.508-.352a1 1 0 0 1 1.139 1.644l-.507.352a8.6 8.6 0 0 0-1.312 1.119z"></svg:path>`,
})
export class JamLeafIcon {
  readonly viewBox = input("-3.5 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLeafFIcon],svg[jam-leaf-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.32 13.211a7 7 0 0 1 .594-6.757Q4.078 3.249 16.084.801q-.402 10.277-2.563 13.482a7 7 0 0 1-9.467 2.05a7.6 7.6 0 0 1 2.27-2.482l.507-.352a2 2 0 1 0-2.278-3.288l-.507.352A11.6 11.6 0 0 0 1.32 13.21zm.746 6.86a1 1 0 1 1-2 0c0-3.466 1.7-6.712 4.55-8.686l.507-.352a1 1 0 0 1 1.139 1.644l-.507.352a8.57 8.57 0 0 0-3.689 7.042"></svg:path>`,
})
export class JamLeafFIcon {
  readonly viewBox = input("-3.5 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLifebuoyIcon],svg[jam-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m3.446-12.032a4 4 0 0 0-1.414-1.414l3.625-3.625l1.414 1.414zm-5.478 5.478l-3.625 3.625l-1.414-1.414l3.625-3.625a4 4 0 0 0 1.414 1.414m0-6.892a4 4 0 0 0-1.414 1.414L2.929 4.343L4.343 2.93zm4.736 6.394a4 4 0 1 1 .244-.244q.29-.316.498-.672l2.874 2.874a8 8 0 0 1-1.414 1.414l-2.874-2.874q.356-.21.672-.498M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamLifebuoyIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLifebuoyFIcon],svg[jam-lifebuoy-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.268 16.41a10.05 10.05 0 0 1 0-12.721l4.318 4.318a4.03 4.03 0 0 0 0 4.085zm1.42 1.421l4.32-4.318a4.03 4.03 0 0 0 4.084 0l4.318 4.318a10.05 10.05 0 0 1-12.721 0zM16.41 2.268l-4.318 4.318a4.03 4.03 0 0 0-4.085 0L3.69 2.268a10.05 10.05 0 0 1 12.72 0m1.421 1.42a10.05 10.05 0 0 1 0 12.722l-4.318-4.318a4.03 4.03 0 0 0 0-4.085L17.83 3.69z"></svg:path>`,
})
export class JamLifebuoyFIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLightbulbIcon],svg[jam-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14v-2.298l.856-.597a5 5 0 1 0-5.712 0l.856.597V14h1V6a1 1 0 1 1 2 0v8zm0 2H5v2h4zM0 7a7 7 0 1 1 11 5.745V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.255A6.99 6.99 0 0 1 0 7"></svg:path>`,
})
export class JamLightbulbIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLightbulbFIcon],svg[jam-lightbulb-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14.565H8v-8a1 1 0 1 0-2 0v8H3V13.31a7 7 0 1 1 8 0zm0 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z"></svg:path>`,
})
export class JamLightbulbFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLineIcon],svg[jam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.914 9.003a6.7 6.7 0 0 1-.764 2.2c-.179.324-1.056 1.558-1.325 1.884c-1.478 1.788-3.953 3.851-8.092 5.857a.545.545 0 0 1-.78-.552l.21-1.885a.545.545 0 0 0-.483-.604C3.781 15.388 0 12.04 0 7.986C0 3.576 4.476 0 9.997 0c5.366 0 9.744 3.377 9.987 7.615c.007.123.026.516.01.78c-.011.16-.034.365-.08.608m-15.414.6V6.24a.512.512 0 1 0-1.023 0v3.877c0 .284.23.514.512.514h2.045a.512.512 0 0 0 0-1.027H4.5zm3.154 1.028a.4.4 0 0 0 .4-.401V6.128a.4.4 0 0 0-.4-.402h-.223a.4.4 0 0 0-.4.402v4.102a.4.4 0 0 0 .4.4zm4.133-4.391v2.369s-2.042-2.676-2.074-2.71a.5.5 0 0 0-.4-.172a.527.527 0 0 0-.492.534v3.856a.512.512 0 1 0 1.023 0V7.763s2.073 2.698 2.104 2.727c.09.086.211.14.346.14c.284.003.516-.249.516-.534V6.24a.512.512 0 1 0-1.023 0m4.858 0a.51.51 0 0 0-.512-.514h-2.045a.51.51 0 0 0-.511.514v3.877c0 .284.229.514.511.514h2.045a.512.512 0 0 0 0-1.027H14.6v-.912h1.534a.512.512 0 0 0 0-1.027H14.6v-.912h1.534c.283 0 .512-.23.512-.513z"></svg:path>`,
})
export class JamLineIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLinkIcon],svg[jam-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.19 9.345a.97.97 0 0 1 1.37 0a.966.966 0 0 1 0 1.367l-2.055 2.052a1.93 1.93 0 0 0 0 2.735a1.94 1.94 0 0 0 2.74 0l4.794-4.787a.966.966 0 0 0 0-1.367a.966.966 0 0 1 0-1.368a.97.97 0 0 1 1.37 0a2.9 2.9 0 0 1 0 4.103l-4.795 4.787a3.88 3.88 0 0 1-5.48 0a3.864 3.864 0 0 1 0-5.47L3.19 9.344zm11.62-.69a.97.97 0 0 1-1.37 0a.966.966 0 0 1 0-1.367l2.055-2.052a1.93 1.93 0 0 0 0-2.735a1.94 1.94 0 0 0-2.74 0L7.962 7.288a.966.966 0 0 0 0 1.367a.966.966 0 0 1 0 1.368a.97.97 0 0 1-1.37 0a2.9 2.9 0 0 1 0-4.103l4.795-4.787a3.88 3.88 0 0 1 5.48 0a3.864 3.864 0 0 1 0 5.47L14.81 8.656z"></svg:path>`,
})
export class JamLinkIcon {
  readonly viewBox = input("-3 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLinkedinIcon],svg[jam-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91c-1.182 0-1.886.796-2.195 1.565c-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126c2.815 0 4.926 1.84 4.926 5.792M2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254z"></svg:path>`,
})
export class JamLinkedinIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLinkedinCircleIcon],svg[jam-linkedin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamLinkedinCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLinkedinSquareIcon],svg[jam-linkedin-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamLinkedinSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLogInIcon],svg[jam-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.641 9.828H1a1 1 0 1 1 0-2h5.641l-1.12-1.12a1 1 0 0 1 1.413-1.415L9.763 8.12a.997.997 0 0 1 0 1.415l-2.829 2.828A1 1 0 0 1 5.52 10.95zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamLogInIcon {
  readonly viewBox = input("-5 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLogOutIcon],svg[jam-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamLogOutIcon {
  readonly viewBox = input("-5 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLtrIcon],svg[jam-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v9a1 1 0 0 1-2 0V6H6a3 3 0 1 1 0-6h7a1 1 0 0 1 0 2h-1v9a1 1 0 0 1-2 0V2zM1.657 9L.284 10.36a.955.955 0 0 0 0 1.358a.977.977 0 0 0 1.373 0L3.716 9.68a.955.955 0 0 0 0-1.36l-2.06-2.038a.977.977 0 0 0-1.372 0a.955.955 0 0 0 0 1.359zM7 2H6a1 1 0 1 0 0 2h1z"></svg:path>`,
})
export class JamLtrIcon {
  readonly viewBox = input("0 0 14 12")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLuggageIcon],svg[jam-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6v8h-2V6H7v8H5V6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M7.17 4h5.66a3.004 3.004 0 0 0-5.66 0M5.1 4a5.002 5.002 0 0 1 9.8 0h.1a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5z"></svg:path>`,
})
export class JamLuggageIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamLuggageFIcon],svg[jam-luggage-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v12H7V4zm2 0a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5zM5 4v12a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5m.1 0a5.002 5.002 0 0 1 9.8 0h-2.07a3.001 3.001 0 0 0-5.66 0z"></svg:path>`,
})
export class JamLuggageFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMagicIcon],svg[jam-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.243 7.172l3.535-3.536l-.707-.707l-3.535 3.535zm-1.415 1.414l-.707-.707L2.93 17.07l.707.707l9.192-9.192zm4.95-7.778l2.121 2.12a1 1 0 0 1 0 1.415L4.343 19.9a1 1 0 0 1-1.414 0L.808 17.78a1 1 0 0 1 0-1.415L16.364.808a1 1 0 0 1 1.414 0M8.586.1l1.393.704L11.414.1l-.68 1.46l.68 1.368l-1.384-.664l-1.444.664l.689-1.42zm9.9 7.07l1.393.705l1.435-.704l-.68 1.46l.68 1.368l-1.384-.664l-1.445.664l.69-1.42l-.69-1.408z"></svg:path>`,
})
export class JamMagicIcon {
  readonly viewBox = input("-1 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMagicFIcon],svg[jam-magic-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.092 8.02l-2.829-2.828L16.506.95a1 1 0 0 1 1.414 0l1.415 1.414a1 1 0 0 1 0 1.414l-4.243 4.243zm-1.414 1.415l-9.9 9.9a1 1 0 0 1-1.414 0L.95 17.92a1 1 0 0 1 0-1.414l9.9-9.9zM8.728.243l1.393.704l1.435-.704l-.679 1.46l.68 1.368l-1.384-.664l-1.445.664l.689-1.42zm9.9 7.07l1.393.705l1.435-.704l-.68 1.46l.68 1.368l-1.384-.664l-1.445.664l.69-1.42l-.69-1.408z"></svg:path>`,
})
export class JamMagicFIcon {
  readonly viewBox = input("-1 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMagnetIcon],svg[jam-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12c0-2.878-1.516-5-3-5s-3 2.122-3 5v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6C0 5.373 4.477 0 10 0s10 5.373 10 12v6a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm2 0h3c0-5.595-3.67-10-8-10S2 6.405 2 12h3c0-3.866 2.239-7 5-7s5 3.134 5 7M2 18h3v-4H2zm13 0h3v-4h-3z"></svg:path>`,
})
export class JamMagnetIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMagnetFIcon],svg[jam-magnet-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12c0-3.866-2.239-7-5-7s-5 3.134-5 7H0C0 5.373 4.477 0 10 0s10 5.373 10 12zM0 14h5v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm15 0h5v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class JamMagnetFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMaleIcon],svg[jam-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.364 14.636a5 5 0 1 0 7.071-7.071a5 5 0 0 0-7.071 7.071m7.728-9.142l2.553-2.553h-1.517a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1v4a1 1 0 1 1-2 0V4.286l-2.622 2.622A7.002 7.002 0 0 1 2.95 16.05a7 7 0 0 1 9.142-10.556"></svg:path>`,
})
export class JamMaleIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMapIcon],svg[jam-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 17.613l3.419-1.14A5 5 0 0 1 6 16.317V2.387L2 3.721zm-.662 2.328A1 1 0 0 1 0 19V3a1 1 0 0 1 .706-.956L5.419.473a5 5 0 0 1 3.162 0l3.47 1.157a3 3 0 0 0 1.898 0L18.662.059A1 1 0 0 1 20 1v16a1 1 0 0 1-.706.956l-4.713 1.571a5 5 0 0 1-3.162 0l-3.47-1.157a3 3 0 0 0-1.898 0zM18 16.28V2.387l-3.419 1.14a5 5 0 0 1-.581.156v13.93l4-1.334zm-6 1.334V3.683a5 5 0 0 1-.581-.156L8 2.387v13.93a5 5 0 0 1 .581.156L12 17.613z"></svg:path>`,
})
export class JamMapIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMapFIcon],svg[jam-map-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.641v18a5 5 0 0 1-1.581-.256L8 19.245V1.175a5 5 0 0 1 .581.156l3.47 1.157A3 3 0 0 0 13 2.64zm2-.504l3.662-1.22A1 1 0 0 1 20 1.858v16a1 1 0 0 1-.706.956L15 20.245zm-9-.962v18.07L1.338 20.8A1 1 0 0 1 0 19.858v-16a1 1 0 0 1 .706-.956L5.419 1.33A5 5 0 0 1 6 1.175"></svg:path>`,
})
export class JamMapFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMapMarkerIcon],svg[jam-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7A5 5 0 1 0 2 7c0 1.726 1.66 5.031 5 9.653c3.34-4.622 5-7.927 5-9.653M7 20Q0 10.865 0 7a7 7 0 1 1 14 0q0 3.865-7 13m0-9a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamMapMarkerIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMapMarkerFIcon],svg[jam-map-marker-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.565q-7-9.135-7-13a7 7 0 1 1 14 0q0 3.865-7 13m0-9a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class JamMapMarkerFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMaskIcon],svg[jam-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1.02Q12.64 0 14.5 0a5.5 5.5 0 0 1 0 11q-1.86 0-4.5-1.057Q7.36 11 5.5 11a5.5 5.5 0 0 1 0-11Q7.36 0 10 1.02m.721 1.866L10 3.164l-.721-.278C7.731 2.288 6.463 2 5.5 2a3.5 3.5 0 0 0 0 7c.953 0 2.215-.296 3.757-.913L10 7.789l.743.298C12.285 8.704 13.547 9 14.5 9a3.5 3.5 0 0 0 0-7c-.963 0-2.231.288-3.779.886M6 7c-1.105 0-2-.672-2-1.5S4.895 4 6 4s2 .672 2 1.5S7.105 7 6 7m8 0c-1.105 0-2-.672-2-1.5S12.895 4 14 4s2 .672 2 1.5S15.105 7 14 7"></svg:path>`,
})
export class JamMaskIcon {
  readonly viewBox = input("-2 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMaskFIcon],svg[jam-mask-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1.878q2.64-1.02 4.5-1.02a5.5 5.5 0 0 1 0 11q-1.86 0-4.5-1.057q-2.64 1.057-4.5 1.057a5.5 5.5 0 0 1 0-11q1.86 0 4.5 1.02m-4 5.98c1.105 0 2-.672 2-1.5c0-.829-.895-1.5-2-1.5s-2 .671-2 1.5c0 .828.895 1.5 2 1.5m8 0c1.105 0 2-.672 2-1.5c0-.829-.895-1.5-2-1.5s-2 .671-2 1.5c0 .828.895 1.5 2 1.5"></svg:path>`,
})
export class JamMaskFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMedalIcon],svg[jam-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 14.517l-.612-1.258a1 1 0 0 0-.43-.447l-2-1.06a1 1 0 0 1-.485-1.181l.71-2.273a1 1 0 0 0 0-.596l-.71-2.273a1 1 0 0 1 .486-1.182l1.999-1.06a1 1 0 0 0 .43-.446L4.393.674A1 1 0 0 1 5.615.165l2.062.703a1 1 0 0 0 .646 0l2.062-.703a1 1 0 0 1 1.222.51l1.005 2.066a1 1 0 0 0 .43.447l2 1.06a1 1 0 0 1 .485 1.181l-.71 2.273a1 1 0 0 0 0 .596l.71 2.273a1 1 0 0 1-.486 1.182l-1.999 1.06a1 1 0 0 0-.43.446L12 14.517v6.879l-4-1.358l-4 1.358zm2 1.187v2.9l2-.679l2 .68v-2.901l-1.677-.572a1 1 0 0 0-.646 0zm4.813-3.32a3 3 0 0 1 1.293-1.339l1.264-.67l-.462-1.48a3 3 0 0 1 0-1.79l.462-1.48l-1.264-.67a3 3 0 0 1-1.293-1.34l-.619-1.272l-1.226.418a3 3 0 0 1-1.936 0l-1.226-.418l-.619 1.273a3 3 0 0 1-1.293 1.339l-1.264.67l.462 1.48a3 3 0 0 1 0 1.79l-.462 1.48l1.264.67a3 3 0 0 1 1.293 1.34l.619 1.272l1.226-.418a3 3 0 0 1 1.936 0l1.226.418zM8 5a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamMedalIcon {
  readonly viewBox = input("-4 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMedalFIcon],svg[jam-medal-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.502c.307.2.699.26 1.067.133l2.536-.864a1.23 1.23 0 0 1 .794 0l2.536.864c.368.126.76.067 1.067-.133v3.894l-4-1.358l-4 1.358zm3.677-2.37l-2.062.703a1 1 0 0 1-1.222-.51L3.388 13.26a1 1 0 0 0-.43-.447l-2-1.06a1 1 0 0 1-.485-1.181l.71-2.273a1 1 0 0 0 0-.596L.473 5.43a1 1 0 0 1 .486-1.182l1.999-1.06a1 1 0 0 0 .43-.446L4.393.674A1 1 0 0 1 5.615.165l2.062.703a1 1 0 0 0 .646 0l2.062-.703a1 1 0 0 1 1.222.51l1.005 2.066a1 1 0 0 0 .43.447l2 1.06a1 1 0 0 1 .485 1.181l-.71 2.273a1 1 0 0 0 0 .596l.71 2.273a1 1 0 0 1-.486 1.182l-1.999 1.06a1 1 0 0 0-.43.446l-1.005 2.067a1 1 0 0 1-1.222.509l-2.062-.703a1 1 0 0 0-.646 0M8 5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamMedalFIcon {
  readonly viewBox = input("-4 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMedicalIcon],svg[jam-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6 6 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6 6 0 0 1-5 5.917M17 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamMedicalIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMediumIcon],svg[jam-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.372 3.264a.78.78 0 0 0-.252-.658L.252.339V0H6.05l4.482 9.905L14.472 0H20v.339L18.403 1.88a.47.47 0 0 0-.177.452v11.334a.47.47 0 0 0 .177.452l1.56 1.542V16H12.12v-.339l1.615-1.58c.159-.16.159-.207.159-.451V4.468L9.402 15.962h-.606L3.566 4.468v7.704c-.043.324.064.65.29.884l2.101 2.568v.338H0v-.338l2.1-2.568a1.03 1.03 0 0 0 .272-.884z"></svg:path>`,
})
export class JamMediumIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMediumCircleIcon],svg[jam-medium-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M6.186 7.632a.4.4 0 0 0-.126-.33L5.126 6.17V6h2.9l2.24 4.952L12.236 6H15v.17l-.798.77a.24.24 0 0 0-.089.226v5.668a.24.24 0 0 0 .089.225l.78.772V14H11.06v-.17l.807-.79c.08-.08.08-.103.08-.225V8.234L9.7 13.981h-.303L6.783 8.234v3.852a.53.53 0 0 0 .145.442l1.05 1.284v.17H5v-.17l1.05-1.284a.52.52 0 0 0 .136-.442z"></svg:path></svg:g>`,
})
export class JamMediumCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMediumSquareIcon],svg[jam-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.186 7.632a.4.4 0 0 0-.126-.33L5.126 6.17V6h2.9l2.24 4.952L12.236 6H15v.17l-.798.77a.24.24 0 0 0-.089.226v5.668a.24.24 0 0 0 .089.225l.78.772V14H11.06v-.17l.807-.79c.08-.08.08-.103.08-.225V8.234L9.7 13.981h-.303L6.783 8.234v3.852a.53.53 0 0 0 .145.442l1.05 1.284v.17H5v-.17l1.05-1.284a.52.52 0 0 0 .136-.442z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamMediumSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMenuIcon],svg[jam-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamMenuIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMergeIcon],svg[jam-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M7 5.83a3.001 3.001 0 1 1 2.033-.013v2.028q0 .111-.008.221a1 1 0 0 0 .462.637l3.086 1.846a3 3 0 0 1 1.46 2.575v1.059a3.001 3.001 0 1 1-2-.024v-1.035a1 1 0 0 0-.487-.858L8.46 10.42a3 3 0 0 1-.444-.324a3 3 0 0 1-.443.324l-3.086 1.846a1 1 0 0 0-.487.858v1.047a3.001 3.001 0 1 1-2 0v-1.047a3 3 0 0 1 1.46-2.575l3.086-1.846a1 1 0 0 0 .462-.637A3 3 0 0 1 7 7.845V5.829zM3 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamMergeIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMergeFIcon],svg[jam-merge-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.033 5.817v2.028q0 .111-.008.221a1 1 0 0 0 .462.637l3.086 1.846a3 3 0 0 1 1.46 2.575v1.059a3.001 3.001 0 1 1-2-.024v-1.035a1 1 0 0 0-.487-.858L8.46 10.42a3 3 0 0 1-.444-.324a3 3 0 0 1-.443.324l-3.086 1.846a1 1 0 0 0-.487.858v1.047a3.001 3.001 0 1 1-2 0v-1.047a3 3 0 0 1 1.46-2.575l3.086-1.846a1 1 0 0 0 .462-.637A3 3 0 0 1 7 7.845V5.829a3.001 3.001 0 1 1 2.033-.012"></svg:path>`,
})
export class JamMergeFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageIcon],svg[jam-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.378 12H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1a1 1 0 0 1 1 1v3.013zM3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.006V14a2 2 0 0 1-2-2V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamMessageIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageAltIcon],svg[jam-message-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.978 14.969l.002-.033zm.001-.167l.001.003v-.003zm.04 1.9c2.678-2.462 3.007-2.656 3.793-2.734C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957c.783.495.958 1.117.941 1.778l-.009.15c.022.33.032.92.033 1.814zm3.99-.743q-.277.027-4.32 3.774a1 1 0 0 1-1.68-.742q.03-3.543-.024-4.04c-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005C0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955z"></svg:path>`,
})
export class JamMessageAltIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageAltFIcon],svg[jam-message-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.01 15.959q-.279.027-4.321 3.774a1 1 0 0 1-1.68-.742q.03-3.543-.024-4.04c-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005C0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955"></svg:path>`,
})
export class JamMessageAltFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageAltWritingIcon],svg[jam-message-alt-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.01 15.959q-.279.027-4.321 3.774a1 1 0 0 1-1.68-.742q.03-3.543-.024-4.04c-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005C0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955m-3.99.744c2.677-2.463 3.006-2.657 3.792-2.735C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957c.783.495.958 1.117.941 1.778l-.009.15c.022.33.032.92.033 1.814zM12 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamMessageAltWritingIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageAltWritingFIcon],svg[jam-message-alt-writing-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.01 15.959q-.279.027-4.321 3.774a1 1 0 0 1-1.68-.742q.03-3.543-.024-4.04c-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005C0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955M12 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamMessageAltWritingFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageFIcon],svg[jam-message-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 .565h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.57v-4.006a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3z"></svg:path>`,
})
export class JamMessageFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageWritingIcon],svg[jam-message-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.006V14a2 2 0 0 1-2-2V3a3 3 0 0 1 3-3m6.378 12H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1a1 1 0 0 1 1 1v3.013zM13 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4M7 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamMessageWritingIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessageWritingFIcon],svg[jam-message-writing-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 .858h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.864v-4.006a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3m10 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamMessageWritingFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessagesIcon],svg[jam-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003zm.844-3.093a.54.54 0 0 0 .26-.069l2.355-1.638A1 1 0 0 1 7.686 13H12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 .54.429.982 1 1c.41.016.707.083.844.226c.128.134.135.36.156.79c.003.063.003.177 0 .37a.5.5 0 0 0 .5.5m11.5-4.87a7 7 0 0 0 0 .37zc.02-.43.028-.656.156-.79c.137-.143.434-.21.844-.226c.571-.018 1-.46 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743z"></svg:path>`,
})
export class JamMessagesIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessagesAltIcon],svg[jam-messages-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.403 14.026l.64-.11q.186-.032.443-.098C10.6 13.288 12 11.708 12 10c0-2.135-2.176-4-5-4s-5 1.865-5 4c0 1.218.702 2.378 1.931 3.15l.036.02L5 13.74v2.763zm.982 1.86l-3.667 3.78A1 1 0 0 1 3 18.97v-4.05l-.132-.076C1.129 13.752 0 11.989 0 10c0-3.314 3.134-6 7-6s7 2.686 7 6c0 2.726-2.121 5.028-5.026 5.758a8 8 0 0 1-.589.128M6.936 3C8.146 1.207 10.41 0 13 0c3.866 0 7 2.686 7 6c0 1.989-1.13 3.752-2.868 4.844L17 10.92v4.05a1 1 0 0 1-1.718.696l-1.735-1.788l1.043-1.798l.41.423V9.74l1.033-.57l.036-.02C17.299 8.378 18 7.218 18 6c0-2.135-2.176-4-5-4c-1.28 0-2.426.383-3.297 1z"></svg:path>`,
})
export class JamMessagesAltIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessagesAltFIcon],svg[jam-messages-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.46 2.332C8.74.913 10.746 0 13 0c3.866 0 7 2.686 7 6c0 1.989-1.13 3.752-2.868 4.844L17 10.92v4.05a1 1 0 0 1-1.718.696l-1.14-1.174c1.069-1.264 1.698-2.816 1.698-4.493c0-4.067-3.698-7.395-8.38-7.667"></svg:path><svg:path d="m8.385 15.886l-3.667 3.78A1 1 0 0 1 3 18.97v-4.05l-.132-.076C1.129 13.752 0 11.989 0 10c0-3.314 3.134-6 7-6s7 2.686 7 6c0 2.726-2.121 5.028-5.026 5.758a8 8 0 0 1-.589.128"></svg:path></svg:g>`,
})
export class JamMessagesAltFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessagesFIcon],svg[jam-messages-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003zM16 10.017a7 7 0 0 0 0 .369zq.007-.16.004-4.019a3 3 0 0 0-3-2.997H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743z"></svg:path>`,
})
export class JamMessagesFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMessengerIcon],svg[jam-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.683 16.418C1.436 14.722 0 12.14 0 9.248C0 4.14 4.477 0 10 0s10 4.14 10 9.248s-4.477 9.248-10 9.248a10.8 10.8 0 0 1-2.96-.412l-3.357 1.891zm5.25-9.703l-5.394 5.66l4.908-2.67l2.565 2.67l5.362-5.66l-4.853 2.622l-2.589-2.622z"></svg:path>`,
})
export class JamMessengerIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicIcon],svg[jam-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.465 14H8a1 1 0 0 1 0-2h2v-2H8a1 1 0 1 1 0-2h2V6H8a1 1 0 1 1 0-2h1.465A4 4 0 0 0 6 2c-1.48 0-2.773.804-3.465 2H4a1 1 0 1 1 0 2H2v2h2a1 1 0 1 1 0 2H2v2h2a1 1 0 0 1 0 2H2.535A4 4 0 0 0 6 16c1.48 0 2.773-.804 3.465-2m-1.492 3.668a2 2 0 1 1-3.945 0A6 6 0 0 1 0 12V6a6 6 0 1 1 12 0v6a6 6 0 0 1-4.027 5.668"></svg:path>`,
})
export class JamMicIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicAltIcon],svg[jam-mic-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3m0-2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V5a5 5 0 0 1 5-5M0 11.03a1 1 0 1 1 2 0A6.97 6.97 0 0 0 8.97 18h.06A6.97 6.97 0 0 0 16 11.03a1 1 0 1 1 2 0A8.97 8.97 0 0 1 9.03 20h-.06A8.97 8.97 0 0 1 0 11.03"></svg:path>`,
})
export class JamMicAltIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicCircleIcon],svg[jam-mic-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-14.395a3 3 0 0 1 3 3v4a3 3 0 1 1-6 0v-4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-6 5a1 1 0 0 1 2 0v.022a4 4 0 1 0 8 0v-.022a1 1 0 0 1 2 0v.022a6 6 0 1 1-12 0z"></svg:path>`,
})
export class JamMicCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicCircleFIcon],svg[jam-mic-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-16.395a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0v-4a3 3 0 0 0-3-3m-6 7v.022a6 6 0 1 0 12 0v-.022a1 1 0 0 0-2 0v.022a4 4 0 1 1-8 0v-.022a1 1 0 0 0-2 0m6-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamMicCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicFIcon],svg[jam-mic-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12H8a1 1 0 0 0 0 2h3.659a6.02 6.02 0 0 1-3.686 3.668a2 2 0 1 1-3.945 0A6.02 6.02 0 0 1 .34 14H4a1 1 0 0 0 0-2H0v-2h4a1 1 0 1 0 0-2H0V6h4a1 1 0 1 0 0-2H.341A6.002 6.002 0 0 1 11.66 4H8a1 1 0 1 0 0 2h4v2H8a1 1 0 1 0 0 2h4z"></svg:path>`,
})
export class JamMicFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicSquareIcon],svg[jam-mic-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 1.605a3 3 0 0 1 3 3v4a3 3 0 1 1-6 0v-4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-6 5a1 1 0 0 1 2 0v.022a4 4 0 1 0 8 0v-.022a1 1 0 0 1 2 0v.022a6 6 0 1 1-12 0z"></svg:path>`,
})
export class JamMicSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicSquareFIcon],svg[jam-mic-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m6 3.605a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0v-4a3 3 0 0 0-3-3m-6 7v.022a6 6 0 1 0 12 0v-.022a1 1 0 0 0-2 0v.022a4 4 0 1 1-8 0v-.022a1 1 0 0 0-2 0m6-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamMicSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicrochipIcon],svg[jam-microchip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm2 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m1 2v2h2V9zM6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M1 5h2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M1 13h2a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M6 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m8-16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M10 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamMicrochipIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMicrochipFIcon],svg[jam-microchip-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.858v2a1 1 0 0 1-2 0v-2H7v2a1 1 0 0 1-2 0v-2q0-.085.014-.166a3 3 0 0 1-1.848-1.848a1 1 0 0 1-.166.014H1a1 1 0 0 1 0-2h2v-2H1a1 1 0 0 1 0-2h2v-2H1a1 1 0 1 1 0-2h2q.085 0 .166.014c.3-.864.984-1.548 1.848-1.848A1 1 0 0 1 5 3.858v-2a1 1 0 1 1 2 0v2h2v-2a1 1 0 1 1 2 0v2h2v-2a1 1 0 0 1 2 0v2q0 .084-.014.166c.864.3 1.548.984 1.848 1.848A1 1 0 0 1 17 5.858h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2q-.085 0-.166-.014a3 3 0 0 1-1.848 1.848q.014.081.014.166v2a1 1 0 0 1-2 0v-2zm-3-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamMicrochipFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMinusIcon],svg[jam-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamMinusIcon {
  readonly viewBox = input("-5 -11 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMinusCircleIcon],svg[jam-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10M5 9h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamMinusCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMinusCircleFIcon],svg[jam-minus-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10M5 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamMinusCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMinusRectangleIcon],svg[jam-minus-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1 9h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamMinusRectangleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMinusRectangleFIcon],svg[jam-minus-rectangle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamMinusRectangleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoonIcon],svg[jam-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10c0 4.43 3.478 8 7.742 8c.658 0 1.302-.085 1.922-.248c-2.996-2.2-4.896-5.786-4.896-9.752c0-2.09.527-4.095 1.489-5.853C4.699 2.863 2 6.097 2 10m6.768-2c0 4.632 3.068 8.528 7.232 9.665A9.56 9.56 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335A10.09 10.09 0 0 0 8.768 8"></svg:path>`,
})
export class JamMoonIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoonFIcon],svg[jam-moon-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.253.335A10.09 10.09 0 0 0 8.768 8c0 4.632 3.068 8.528 7.232 9.665A9.56 9.56 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335"></svg:path>`,
})
export class JamMoonFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoreHorizontalIcon],svg[jam-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-7 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamMoreHorizontalIcon {
  readonly viewBox = input("-2 -9 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoreHorizontalFIcon],svg[jam-more-horizontal-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 1 1 0-6a3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-7 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class JamMoreHorizontalFIcon {
  readonly viewBox = input("-2 -9 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoreVerticalIcon],svg[jam-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-5a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamMoreVerticalIcon {
  readonly viewBox = input("-9 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoreVerticalFIcon],svg[jam-more-vertical-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class JamMoreVerticalFIcon {
  readonly viewBox = input("-9 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMountainIcon],svg[jam-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.846 9.334l-3.985-6.762a1 1 0 0 0-1.723 0L7.11 6.015c.202 1.979.943 2.783 2.387 2.783c2.005 0 3.816.176 5.35.536zm1.555 2.637c-1.547-.767-3.977-1.173-6.905-1.173c-1.819 0-3.11-.832-3.813-2.364l-3.57 6.058A1 1 0 0 0 2.975 16h14.05a1 1 0 0 0 .861-1.508l-1.485-2.52zM12.584 1.556l7.025 11.92A3 3 0 0 1 17.025 18H2.975A3 3 0 0 1 .39 13.477l7.025-11.92a3 3 0 0 1 5.17 0z"></svg:path>`,
})
export class JamMountainIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMountainFIcon],svg[jam-mountain-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.797 10.402c-2.038-.98-5.317-1.604-8.3-1.604c-1.828 0-2.951-3.163-3.264-5.235l1.182-2.007a3 3 0 0 1 5.17 0zm1.673 2.839l.14.236A3 3 0 0 1 17.024 18H2.975A3 3 0 0 1 .39 13.477l4.517-7.664c.417 2.76 2.144 4.985 4.59 4.985c2.747 0 6.71.536 9.973 2.443"></svg:path>`,
})
export class JamMountainFIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoveIcon],svg[jam-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.799 9.957l-1.121-1.121a1 1 0 1 1 1.414-1.415l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l1.121-1.121h-6.485v6.485l1.121-1.121a1 1 0 0 1 1.414 1.414l-2.828 2.829a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 1.414-1.414l1.122 1.121v-6.485H3.828l1.122 1.121a1 1 0 0 1-1.414 1.414L.707 11.664a1 1 0 0 1 0-1.414l2.829-2.83A1 1 0 0 1 4.95 8.836l-1.122 1.12h6.486V3.473l-1.122 1.12a1 1 0 0 1-1.414-1.414L10.607.35a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 1 1-1.414 1.414l-1.121-1.121v6.485z"></svg:path>`,
})
export class JamMoveIcon {
  readonly viewBox = input("-0.5 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMoveAltIcon],svg[jam-move-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.586 2H11a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.414L9.414 8L14 12.586V11a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586L8 9.414L3.414 14H5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1.586L6.586 8L2 3.414V5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3.414L8 6.586z"></svg:path>`,
})
export class JamMoveAltIcon {
  readonly viewBox = input("-4 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMovieIcon],svg[jam-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15v3h8v-7H6zm-2-2v-2H2V9h2V7H2v6zm0 2H2v1a2 2 0 0 0 2 2zm14-2V7h-2v2h2v2h-2v2zm0 2h-2v3a2 2 0 0 0 2-2zm-4-8V2H6v7h8zm4-2V4a2 2 0 0 0-2-2v3zM4 5V2a2 2 0 0 0-2 2v1zm0-5h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamMovieIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMugIcon],svg[jam-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.874 1H16a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-1v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h7a4 4 0 0 1 3.874 3M15 12h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1z"></svg:path>`,
})
export class JamMugIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMugFIcon],svg[jam-mug-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.874 3H16a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-1v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h7a4 4 0 0 1 3.874 3M15 12h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1z"></svg:path>`,
})
export class JamMugFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMusicIcon],svg[jam-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.954 12.304V1a1 1 0 0 1 1-1h.028a1 1 0 0 1 1 1v14.065c.197 1.969-1.42 3.99-3.874 4.693c-2.69.772-5.368-.333-5.98-2.468s1.073-4.491 3.764-5.263c1.47-.421 2.935-.283 4.062.277m-2.4 5.521c1.698-.487 2.645-1.81 2.37-2.77c-.276-.961-1.78-1.582-3.478-1.095s-2.645 1.81-2.37 2.771c.276.96 1.78 1.581 3.478 1.094"></svg:path>`,
})
export class JamMusicIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMusicFIcon],svg[jam-music-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.954 12.87V1.564a1 1 0 0 1 1-1h.028a1 1 0 0 1 1 1V15.63c.197 1.969-1.42 3.99-3.874 4.693c-2.69.772-5.368-.333-5.98-2.468s1.073-4.491 3.764-5.263c1.47-.421 2.935-.283 4.062.277z"></svg:path>`,
})
export class JamMusicFIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMyspaceIcon],svg[jam-myspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:ellipse cx="2.835" cy="4.885" rx="2.576" ry="2.55"></svg:ellipse><svg:path d="M2.8 8.102C1.24 8.121 0 9.41 0 10.954v.718c0 .166.136.3.304.3h5.063a.303.303 0 0 0 .304-.3v-.763c0-1.562-1.289-2.826-2.87-2.807z"></svg:path><svg:ellipse cx="9.361" cy="4.303" rx="2.788" ry="2.76"></svg:ellipse><svg:path d="M9.323 7.784c-1.688.02-3.03 1.415-3.03 3.086v.802a.3.3 0 0 0 .303.3h5.529a.303.303 0 0 0 .304-.3v-.85c0-1.69-1.394-3.058-3.106-3.038m7.163-1.434c1.763 0 3.193-1.416 3.193-3.162S18.249.027 16.486.027s-3.193 1.415-3.193 3.161s1.43 3.162 3.193 3.162m0 .825c-1.94 0-3.514 1.558-3.514 3.48v1.017c0 .166.136.3.304.3h6.42a.303.303 0 0 0 .304-.3v-1.018c0-1.921-1.573-3.479-3.514-3.479"></svg:path></svg:g>`,
})
export class JamMyspaceIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMyspaceCircleIcon],svg[jam-myspace-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:ellipse cx="6.418" cy="9.443" rx="1.288" ry="1.275"></svg:ellipse><svg:path d="M6.4 11.051c-.78.01-1.4.654-1.4 1.426v.359c0 .083.068.15.152.15h2.531a.15.15 0 0 0 .152-.15v-.382A1.41 1.41 0 0 0 6.4 11.051"></svg:path><svg:ellipse cx="9.68" cy="9.151" rx="1.394" ry="1.38"></svg:ellipse><svg:path d="M9.661 10.892a1.54 1.54 0 0 0-1.515 1.543v.4c0 .084.068.151.152.151h2.764a.15.15 0 0 0 .153-.15v-.425c0-.845-.698-1.53-1.554-1.519m3.582-.717c.882 0 1.597-.708 1.597-1.581s-.715-1.58-1.597-1.58s-1.597.707-1.597 1.58s.715 1.58 1.597 1.58zm0 .413c-.97 0-1.757.779-1.757 1.74v.508c0 .083.068.15.152.15h3.21a.15.15 0 0 0 .152-.15v-.509c0-.96-.787-1.74-1.757-1.74z"></svg:path></svg:g>`,
})
export class JamMyspaceCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamMyspaceSquareIcon],svg[jam-myspace-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:ellipse cx="6.418" cy="9.443" rx="1.288" ry="1.275"></svg:ellipse><svg:path d="M6.4 11.051c-.78.01-1.4.654-1.4 1.426v.359c0 .083.068.15.152.15h2.531a.15.15 0 0 0 .152-.15v-.382A1.41 1.41 0 0 0 6.4 11.051"></svg:path><svg:ellipse cx="9.68" cy="9.151" rx="1.394" ry="1.38"></svg:ellipse><svg:path d="M9.661 10.892a1.54 1.54 0 0 0-1.515 1.543v.4c0 .084.068.151.152.151h2.764a.15.15 0 0 0 .153-.15v-.425c0-.845-.698-1.53-1.554-1.519m3.582-.717c.882 0 1.597-.708 1.597-1.581s-.715-1.58-1.597-1.58s-1.597.707-1.597 1.58s.715 1.58 1.597 1.58zm0 .413c-.97 0-1.757.779-1.757 1.74v.508c0 .083.068.15.152.15h3.21a.15.15 0 0 0 .152-.15v-.509c0-.96-.787-1.74-1.757-1.74z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamMyspaceSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNapsterIcon],svg[jam-napster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.07 13.98a5.9 5.9 0 0 1-2.002 1.243a5.25 5.25 0 0 1-2.002-1.243h4.005"></svg:path><svg:path d="M3.99 2.87C5.49 1.15 7.636.078 10.067.078s4.577 1.071 6.08 2.792a8.5 8.5 0 0 1 2.002-.306v2.811a3.92 3.92 0 0 1 1.716 3.232a3.89 3.89 0 0 1-1.716 3.213l-.072.076c-.429 4.13-3.861 7.304-8.01 7.304c-4.22 0-7.652-3.232-8.081-7.38A3.91 3.91 0 0 1 .27 8.606c0-1.358.715-2.563 1.717-3.213v-2.83c.715.02 1.359.134 2.002.306zm2.36 2.983a6.66 6.66 0 0 0-2.79-1.472v6.578c0 3.671 2.933 6.616 6.508 6.616s6.437-2.945 6.437-6.636V4.381a7.1 7.1 0 0 0-2.717 1.472a6.4 6.4 0 0 0-3.72-1.204c-1.359 0-2.646.44-3.718 1.204m0-1.912c1.144-.593 2.36-.937 3.718-.937c1.36 0 2.575.344 3.72.937c.214-.172.5-.325.786-.478c-1.144-1.128-2.79-1.817-4.506-1.817s-3.361.689-4.506 1.836c.215.115.573.287.788.46z"></svg:path><svg:path d="M12.07 10.959c1.074-.134 2.933-.115 2.933-.115c-.071.344 0 1.32-1.072 1.931c-.143.096-.573.248-1.001.268c-1.002.038-2.432.057-2.432.057c.286-1.166.643-2.046 1.573-2.141m-4.005 0c.858.095 1.287.975 1.573 2.141c0 0-1.43-.02-2.431-.057c-.43-.02-.858-.173-1.002-.268c-1.073-.612-1-1.587-1.073-1.931c0 0 1.86-.02 2.933.115m3.862 5.258c-.5.344-1.144.536-1.86.536a3.7 3.7 0 0 1-1.93-.536s.07-.21.142-.383c.143-.21.286-.267.286-.267a5.4 5.4 0 0 0 1.502.21c.5 0 1.001-.077 1.502-.21c0 0 .143.076.286.306c.072.191.072.344.072.344"></svg:path></svg:g>`,
})
export class JamNapsterIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNapsterCircleIcon],svg[jam-napster-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M11.035 11.99a2.9 2.9 0 0 1-1 .621a2.6 2.6 0 0 1-1.002-.621z"></svg:path><svg:path d="M6.995 6.435a4 4 0 0 1 3.04-1.396c1.215 0 2.288.536 3.039 1.396a4.2 4.2 0 0 1 1.001-.153v1.406c.5.334.858.936.858 1.615c0 .68-.358 1.272-.858 1.607l-.036.038c-.214 2.065-1.93 3.652-4.005 3.652c-2.11 0-3.826-1.616-4.04-3.69a1.93 1.93 0 0 1 0-3.213V6.282c.357.01.679.067 1 .153zm1.18 1.492A3.3 3.3 0 0 0 6.78 7.19v3.29c0 1.835 1.466 3.307 3.254 3.307s3.219-1.472 3.219-3.317V7.19a3.54 3.54 0 0 0-1.36.737a3.2 3.2 0 0 0-1.859-.603c-.68 0-1.323.22-1.86.603zm0-.956a4 4 0 0 1 1.86-.47c.679 0 1.286.173 1.859.47a2.6 2.6 0 0 1 .393-.24a3.24 3.24 0 0 0-2.253-.908c-.858 0-1.68.344-2.253.918c.108.057.286.143.394.23"></svg:path><svg:path d="M11.035 10.48c.537-.068 1.467-.058 1.467-.058c-.036.172 0 .66-.537.966a1.2 1.2 0 0 1-.5.133c-.5.02-1.216.03-1.216.03c.143-.584.321-1.024.786-1.072m-2.002.001c.43.047.644.487.787 1.07c0 0-.716-.01-1.216-.029a1.2 1.2 0 0 1-.5-.134c-.537-.306-.501-.793-.537-.965c0 0 .93-.01 1.466.057m1.931 2.63c-.25.172-.572.267-.93.267a1.84 1.84 0 0 1-.965-.267s.035-.106.071-.192a.36.36 0 0 1 .143-.134a2.7 2.7 0 0 0 1.502 0s.072.039.143.153a.6.6 0 0 1 .036.173"></svg:path></svg:g>`,
})
export class JamNapsterCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNapsterSquareIcon],svg[jam-napster-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.035 11.99a2.9 2.9 0 0 1-1 .621a2.6 2.6 0 0 1-1.002-.621z"></svg:path><svg:path d="M6.995 6.435a4 4 0 0 1 3.04-1.396c1.215 0 2.288.536 3.039 1.396a4.2 4.2 0 0 1 1.001-.153v1.406c.5.334.858.936.858 1.615c0 .68-.358 1.272-.858 1.607l-.036.038c-.214 2.065-1.93 3.652-4.005 3.652c-2.11 0-3.826-1.616-4.04-3.69a1.93 1.93 0 0 1 0-3.213V6.282c.357.01.679.067 1 .153zm1.18 1.492A3.3 3.3 0 0 0 6.78 7.19v3.29c0 1.835 1.466 3.307 3.254 3.307s3.219-1.472 3.219-3.317V7.19a3.54 3.54 0 0 0-1.36.737a3.2 3.2 0 0 0-1.859-.603c-.68 0-1.323.22-1.86.603zm0-.956a4 4 0 0 1 1.86-.47c.679 0 1.286.173 1.859.47a2.6 2.6 0 0 1 .393-.24a3.24 3.24 0 0 0-2.253-.908c-.858 0-1.68.344-2.253.918c.108.057.286.143.394.23"></svg:path><svg:path d="M11.035 10.48c.537-.068 1.467-.058 1.467-.058c-.036.172 0 .66-.537.966a1.2 1.2 0 0 1-.5.133c-.5.02-1.216.03-1.216.03c.143-.584.321-1.024.786-1.072m-2.002.001c.43.047.644.487.787 1.07c0 0-.716-.01-1.216-.029a1.2 1.2 0 0 1-.5-.134c-.537-.306-.501-.793-.537-.965c0 0 .93-.01 1.466.057m1.931 2.63c-.25.172-.572.267-.93.267a1.84 1.84 0 0 1-.965-.267s.035-.106.071-.192a.36.36 0 0 1 .143-.134a2.7 2.7 0 0 0 1.502 0s.072.039.143.153a.6.6 0 0 1 .036.173"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamNapsterSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNewsletterIcon],svg[jam-newsletter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v10h16V2zm3 6h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2m10-5h2v2h-2z"></svg:path>`,
})
export class JamNewsletterIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNewsletterFIcon],svg[jam-newsletter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 .565h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m3 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2zm10-5v2h2v-2z"></svg:path>`,
})
export class JamNewsletterFIcon {
  readonly viewBox = input("-2 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNewspaperIcon],svg[jam-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 13h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m6-12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-6 6h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-3h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m.5-6h2A1.5 1.5 0 0 1 9 4.5v2A1.5 1.5 0 0 1 7.5 8h-2A1.5 1.5 0 0 1 4 6.5v-2A1.5 1.5 0 0 1 5.5 3"></svg:path>`,
})
export class JamNewspaperIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNewspaperFIcon],svg[jam-newspaper-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamNewspaperFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamNpmIcon],svg[jam-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M0 0h20v6.857H10V8H5.556V6.857H0zm1.111 5.714h2.222V2.286h1.111v3.428h1.112V1.143H1.11zm5.556-4.571v5.714h2.222V5.714h2.222V1.143zm5.555 0v4.571h2.222V2.286h1.112v3.428h1.11V2.286h1.112v3.428h1.11V1.143z"></svg:path><svg:path d="M10 4.7H9V2.2h1z"></svg:path></svg:g>`,
})
export class JamNpmIcon {
  readonly viewBox = input("-2 -8 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOdnoklassnikiIcon],svg[jam-odnoklassniki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.974 14.011c-1.531-.16-2.912-.54-4.094-1.471c-.147-.116-.299-.228-.432-.357c-.518-.5-.57-1.074-.16-1.664c.35-.506.938-.641 1.549-.35c.118.055.23.126.339.201c2.203 1.524 5.23 1.566 7.441.069c.22-.17.454-.308.725-.378c.528-.136 1.02.059 1.303.524c.324.53.32 1.05-.079 1.461c-.611.633-1.347 1.09-2.164 1.409c-.773.302-1.62.454-2.457.554c.126.139.186.207.265.287c1.137 1.15 2.28 2.297 3.414 3.451c.386.394.467.881.254 1.339c-.233.5-.753.829-1.264.794c-.323-.023-.575-.185-.8-.412c-.858-.87-1.732-1.724-2.573-2.61c-.245-.258-.363-.209-.579.015c-.863.895-1.74 1.776-2.624 2.653c-.396.393-.868.464-1.328.24c-.488-.24-.8-.741-.775-1.246c.016-.342.183-.602.416-.836q1.688-1.7 3.371-3.4c.074-.076.144-.156.252-.273"></svg:path><svg:path d="M5.907 10.069C3.175 10.059.935 7.779.95 5.023C.966 2.237 3.208-.007 5.967 0c2.764.007 4.983 2.285 4.97 5.1c-.015 2.75-2.27 4.978-5.03 4.969m2.483-5.04a2.444 2.444 0 0 0-2.443-2.458A2.447 2.447 0 0 0 3.498 5.06A2.443 2.443 0 0 0 5.96 7.5a2.44 2.44 0 0 0 2.43-2.47z"></svg:path></svg:g>`,
})
export class JamOdnoklassnikiIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOdnoklassnikiCircleIcon],svg[jam-odnoklassniki-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.53 11.996c-.77-.081-1.463-.272-2.057-.74c-.074-.058-.15-.114-.217-.18c-.26-.25-.287-.539-.08-.835c.175-.254.47-.322.778-.177a1 1 0 0 1 .17.102c1.107.766 2.628.787 3.74.034a1 1 0 0 1 .363-.19a.57.57 0 0 1 .655.264c.163.267.16.527-.04.734a3 3 0 0 1-1.087.708c-.388.152-.814.228-1.235.279c.064.07.094.104.134.144q.858.865 1.715 1.734c.194.198.235.443.128.673c-.117.25-.379.416-.635.398a.62.62 0 0 1-.402-.207c-.431-.437-.87-.866-1.293-1.311c-.123-.13-.183-.105-.291.007q-.652.674-1.319 1.334c-.199.197-.436.233-.667.12a.68.68 0 0 1-.39-.626a.63.63 0 0 1 .21-.42l1.694-1.709c.037-.038.072-.078.126-.136"></svg:path><svg:path d="M9.988 10a2.503 2.503 0 0 1-2.481-2.506A2.506 2.506 0 0 1 10.018 5a2.503 2.503 0 0 1 2.489 2.532C12.5 8.898 11.37 10.005 9.988 10m1.244-2.502a1.22 1.22 0 0 0-1.224-1.221a1.22 1.22 0 0 0-1.226 1.235a1.22 1.22 0 0 0 1.233 1.212a1.216 1.216 0 0 0 1.217-1.226"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamOdnoklassnikiCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOdnoklassnikiSquareIcon],svg[jam-odnoklassniki-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.53 11.996c-.77-.081-1.463-.272-2.057-.74c-.074-.058-.15-.114-.217-.18c-.26-.25-.287-.539-.08-.835c.175-.254.47-.322.778-.177a1 1 0 0 1 .17.102c1.107.766 2.628.787 3.74.034a1 1 0 0 1 .363-.19a.57.57 0 0 1 .655.264c.163.267.16.527-.04.734a3 3 0 0 1-1.087.708c-.388.152-.814.228-1.235.279c.064.07.094.104.134.144q.858.865 1.715 1.734c.194.198.235.443.128.673c-.117.25-.379.416-.635.398a.62.62 0 0 1-.402-.207c-.431-.437-.87-.866-1.293-1.311c-.123-.13-.183-.105-.291.007q-.652.674-1.319 1.334c-.199.197-.436.233-.667.12a.68.68 0 0 1-.39-.626a.63.63 0 0 1 .21-.42l1.694-1.709c.037-.038.072-.078.126-.136"></svg:path><svg:path d="M9.988 10a2.503 2.503 0 0 1-2.481-2.506A2.506 2.506 0 0 1 10.018 5a2.503 2.503 0 0 1 2.489 2.532C12.5 8.898 11.37 10.005 9.988 10m1.244-2.502a1.22 1.22 0 0 0-1.224-1.221a1.22 1.22 0 0 0-1.226 1.235a1.22 1.22 0 0 0 1.233 1.212a1.216 1.216 0 0 0 1.217-1.226"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamOdnoklassnikiSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOperaIcon],svg[jam-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.918 1.57C13.423.56 11.572 0 9.485 0c-1.91 0-3.62.466-5.043 1.32C1.702 2.944.014 5.987.014 9.886c0 5.274 3.787 10.078 9.469 10.078s9.468-4.803 9.468-10.078c0-3.707-1.526-6.64-4.033-8.316m-5.434.293c3.048 0 3.785 4.182 3.785 7.982c0 3.52-.462 8.23-3.748 8.23s-3.829-4.756-3.829-8.276c0-3.8.744-7.936 3.792-7.936"></svg:path>`,
})
export class JamOperaIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOperaCircleIcon],svg[jam-opera-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M12.713 5.787c-.749-.506-1.676-.786-2.721-.786c-.956 0-1.813.233-2.526.66C6.093 6.476 5.248 8 5.248 9.953C5.248 12.594 7.145 15 9.991 15s4.742-2.406 4.742-5.048c0-1.857-.764-3.326-2.02-4.166zm-2.721.147c1.526 0 1.896 2.095 1.896 3.997c0 1.764-.232 4.123-1.878 4.123S8.092 11.672 8.092 9.91c0-1.903.373-3.975 1.9-3.975z"></svg:path></svg:g>`,
})
export class JamOperaCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOperaSquareIcon],svg[jam-opera-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.713 5.787c-.749-.506-1.676-.786-2.721-.786c-.956 0-1.813.233-2.526.66C6.093 6.476 5.248 8 5.248 9.953C5.248 12.594 7.145 15 9.991 15s4.742-2.406 4.742-5.048c0-1.857-.764-3.326-2.02-4.166zm-2.721.147c1.526 0 1.896 2.095 1.896 3.997c0 1.764-.232 4.123-1.878 4.123S8.092 11.672 8.092 9.91c0-1.903.373-3.975 1.9-3.975z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamOperaSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOrderedListIcon],svg[jam-ordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0 8h9a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2M.438.845h.72L1.111 3H.65L.7 1.28H.224zM.523 5.59l-.45-.053q.017-.367.234-.582a.76.76 0 0 1 .556-.214q.209 0 .37.089a.67.67 0 0 1 .26.258a.7.7 0 0 1 .097.342a1 1 0 0 1-.115.435q-.113.228-.407.535l-.158.17h.647V7H.014l.015-.231l.666-.68q.238-.24.313-.382a.5.5 0 0 0 .074-.245a.23.23 0 0 0-.067-.17a.24.24 0 0 0-.179-.067a.23.23 0 0 0-.182.081q-.05.056-.131.284m.982 4.398q.12.159.121.373a.7.7 0 0 1-.23.528a.8.8 0 0 1-.579.215a.76.76 0 0 1-.545-.203c-.142-.136-.22-.32-.183-.603l.456.042q.024.151.1.22a.28.28 0 0 0 .194.068q.124 0 .203-.078a.25.25 0 0 0 .08-.19a.26.26 0 0 0-.109-.209c-.075-.06-.187-.09-.386-.143l.046-.401a.6.6 0 0 0 .203-.042a.2.2 0 0 0 .092-.077a.2.2 0 0 0 .032-.1a.14.14 0 0 0-.045-.109a.18.18 0 0 0-.127-.044a.2.2 0 0 0-.13.044a.22.22 0 0 0-.08.113l-.048.035l-.444-.056a.7.7 0 0 1 .185-.413a.7.7 0 0 1 .53-.217q.284 0 .479.182a.58.58 0 0 1 .195.436a.5.5 0 0 1-.087.29c-.056.085-.136.153-.246.12a.63.63 0 0 1 .323.219"></svg:path>`,
})
export class JamOrderedListIcon {
  readonly viewBox = input("-5 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamOrientatonIcon],svg[jam-orientaton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10.941v7h12v-7zm0-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2m9.012-2h-2V2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18v-2h.012V2h-7z"></svg:path>`,
})
export class JamOrientatonIcon {
  readonly viewBox = input("0 0 21 20")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockIcon],svg[jam-padlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v6h10v-6zm10-2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0zm-2 0V5a3 3 0 1 0-6 0v5zm-3 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamPadlockIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockAltIcon],svg[jam-padlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8M2 9.528V4a4 4 0 1 1 8 0v5.528a6 6 0 1 1-8 0M4 8.34A6 6 0 0 1 6 8c.701 0 1.374.12 2 .341V4a2 2 0 1 0-4 0v4.341zM6 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamPadlockAltIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockAltFIcon],svg[jam-padlock-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.528V4a4 4 0 1 1 8 0v5.528a6 6 0 1 1-8 0M4 8.34A6 6 0 0 1 6 8c.701 0 1.374.12 2 .341V4a2 2 0 1 0-4 0v4.341zM6 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamPadlockAltFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockAltOpenIcon],svg[jam-padlock-alt-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8M2 9.528V4a4 4 0 1 1 8 0v1a1 1 0 1 1-2 0V4a2 2 0 1 0-4 0v4.341a6 6 0 1 1-2 1.186zM6 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamPadlockAltOpenIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockAltOpenFIcon],svg[jam-padlock-alt-open-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.528V4a4 4 0 1 1 8 0v1a1 1 0 1 1-2 0V4a2 2 0 1 0-4 0v4.341a6 6 0 1 1-2 1.186zM6 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamPadlockAltOpenFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockFIcon],svg[jam-padlock-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0zm-5 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3-7V5a3 3 0 1 0-6 0v5z"></svg:path>`,
})
export class JamPadlockFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockOpenIcon],svg[jam-padlock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v6h10v-6zm8-7a3 3 0 1 0-6 0v5h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0a1 1 0 0 1-2 0M7 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamPadlockOpenIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPadlockOpenFIcon],svg[jam-padlock-open-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h-2a3 3 0 1 0-6 0v5h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0M7 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamPadlockOpenFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPageBreakIcon],svg[jam-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6h2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m10 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M6 6h2a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2M0 1a1 1 0 1 1 2 0v2.014h10V1a1 1 0 0 1 2 0v2.014a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm0 12.014V11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.014a1 1 0 0 1-2 0V11H2v2.014a1 1 0 0 1-2 0"></svg:path>`,
})
export class JamPageBreakIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPaperPlaneIcon],svg[jam-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.907 4.44l-7.655 7.655q.341.489.575 1.048l1.91 4.599l5.17-13.303zm-9.002 6.308l7.656-7.656l-13.303 5.17l4.599 1.911a5.5 5.5 0 0 1 1.048.575m11.618-7.862l-6.027 15.506c-.38.98-1.477 1.483-2.449 1.124a1.83 1.83 0 0 1-1.057-1.017L8.08 13.9a3.66 3.66 0 0 0-1.98-1.98l-4.6-1.91C.546 9.613.11 8.51.528 7.544a1.95 1.95 0 0 1 1.08-1.04L17.114.475a1.852 1.852 0 0 1 2.41 2.41z"></svg:path>`,
})
export class JamPaperPlaneIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPaperPlaneFIcon],svg[jam-paper-plane-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.671 13.44L19.926 1.384c.116.408.096.847-.061 1.25l-6.25 16.08c-.395 1.016-1.532 1.538-2.54 1.165a1.9 1.9 0 0 1-1.097-1.054l-1.981-4.77q-.136-.325-.326-.617zm-1.41-1.288a4 4 0 0 0-.317-.148l-4.77-1.981C.185 9.61-.268 8.465.165 7.465a2.02 2.02 0 0 1 1.121-1.079l16.08-6.25c.46-.179.94-.175 1.365-.025L6.26 12.152z"></svg:path>`,
})
export class JamPaperPlaneFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamParagraphIcon],svg[jam-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v11a1 1 0 0 1-2 0V2H8v11a1 1 0 0 1-2 0V8H4a4 4 0 1 1 0-8h9a1 1 0 0 1 0 2zM6 6V2H4a2 2 0 1 0 0 4z"></svg:path>`,
})
export class JamParagraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPatreonIcon],svg[jam-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.808.01c-3.95 0-7.164 3.196-7.164 7.125c0 3.916 3.214 7.103 7.164 7.103c3.938 0 7.142-3.187 7.142-7.103c0-3.93-3.204-7.125-7.142-7.125M.05 18.99V.01h3.502v18.98z"></svg:path>`,
})
export class JamPatreonIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPatreonCircleIcon],svg[jam-patreon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M11.464 5.206c-1.976 0-3.583 1.598-3.583 3.563c0 1.958 1.607 3.551 3.583 3.551c1.969 0 3.57-1.593 3.57-3.551a3.57 3.57 0 0 0-3.57-3.563m-6.38 9.49v-9.49h1.752v9.49z"></svg:path></svg:g>`,
})
export class JamPatreonCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPatreonSquareIcon],svg[jam-patreon-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.464 5.206c-1.976 0-3.583 1.598-3.583 3.563c0 1.958 1.607 3.551 3.583 3.551c1.969 0 3.57-1.593 3.57-3.551a3.57 3.57 0 0 0-3.57-3.563m-6.38 9.49v-9.49h1.752v9.49z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamPatreonSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPauseIcon],svg[jam-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v14h2V2zm10-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v14h2V2z"></svg:path>`,
})
export class JamPauseIcon {
  readonly viewBox = input("-4 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPaypalIcon],svg[jam-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m4.328 16.127l-.011.07a.9.9 0 0 1-.887.744H.9a.892.892 0 0 1-.88-1.04L2.57.745A.89.89 0 0 1 3.45 0h6.92a4.14 4.14 0 0 1 4.142 4.141q0 .409-.05.804a3.63 3.63 0 0 1 1.53 2.962a5.72 5.72 0 0 1-5.72 5.722h-.583a1.34 1.34 0 0 0-1.32 1.117l-.314 1.87l.314-1.87a1.34 1.34 0 0 1 1.32-1.117h.582a5.72 5.72 0 0 0 5.722-5.722a3.63 3.63 0 0 0-1.53-2.962a6.52 6.52 0 0 1-6.47 5.716H6.06a.97.97 0 0 0-.93.701l-1.155 6.862c-.08.48.289.916.775.916h2.214a.786.786 0 0 0 .775-.655l.315-1.87l-.315 1.87a.786.786 0 0 1-.775.655H4.751a.78.78 0 0 1-.6-.278a.78.78 0 0 1-.175-.638z"></svg:path><svg:path d="M15.45 5.995c.365.567.578 1.242.578 1.967a5.72 5.72 0 0 1-5.722 5.722h-.581c-.654 0-1.212.472-1.32 1.117l-.63 3.739a.786.786 0 0 1-.774.655H4.973l1.15-6.833c.118-.41.495-.7.93-.7h1.932a6.52 6.52 0 0 0 6.464-5.667zm-10.477 13.2h-.187a.786.786 0 0 1-.775-.916l.057-.338h.355a.9.9 0 0 0 .886-.743l.012-.07z"></svg:path></svg:g>`,
})
export class JamPaypalIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPaypalCircleIcon],svg[jam-paypal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m8.252 13.405l-.006.036a.47.47 0 0 1-.462.388h-1.32a.465.465 0 0 1-.457-.542l1.329-7.9A.465.465 0 0 1 7.794 5H11.4c1.192 0 2.158.966 2.158 2.158q0 .213-.026.42c.483.342.798.906.798 1.543a2.98 2.98 0 0 1-2.982 2.982h-.303a.7.7 0 0 0-.688.582l-.164.974l.164-.974a.7.7 0 0 1 .688-.582h.303a2.98 2.98 0 0 0 2.982-2.982c0-.637-.315-1.2-.798-1.544a3.4 3.4 0 0 1-3.372 2.98H9.155a.505.505 0 0 0-.485.364l-.602 3.576a.41.41 0 0 0 .404.478h1.154c.2 0 .37-.145.404-.342l.164-.974l-.164.974a.41.41 0 0 1-.404.342H8.472a.408.408 0 0 1-.404-.478z"></svg:path><svg:path d="M13.967 8c.19.295.301.647.301 1.025a2.98 2.98 0 0 1-2.981 2.982h-.304a.7.7 0 0 0-.688.582l-.327 1.949a.41.41 0 0 1-.404.341H8.507l.6-3.56a.505.505 0 0 1 .484-.366h1.007A3.4 3.4 0 0 0 13.967 8m-5.46 6.88H8.41a.41.41 0 0 1-.404-.478l.03-.176h.185a.47.47 0 0 0 .461-.388l.007-.036l-.182 1.077z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamPaypalCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPaypalSquareIcon],svg[jam-paypal-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m8.252 13.405l-.006.036a.47.47 0 0 1-.462.388h-1.32a.465.465 0 0 1-.457-.542l1.329-7.9A.465.465 0 0 1 7.794 5H11.4c1.192 0 2.158.966 2.158 2.158q0 .213-.026.42c.483.342.798.906.798 1.543a2.98 2.98 0 0 1-2.982 2.982h-.303a.7.7 0 0 0-.688.582l-.164.974l.164-.974a.7.7 0 0 1 .688-.582h.303a2.98 2.98 0 0 0 2.982-2.982c0-.637-.315-1.2-.798-1.544a3.4 3.4 0 0 1-3.372 2.98H9.155a.505.505 0 0 0-.485.364l-.602 3.576a.41.41 0 0 0 .404.478h1.154c.2 0 .37-.145.404-.342l.164-.974l-.164.974a.41.41 0 0 1-.404.342H8.472a.408.408 0 0 1-.404-.478z"></svg:path><svg:path d="M13.967 8c.19.295.301.647.301 1.025a2.98 2.98 0 0 1-2.981 2.982h-.304a.7.7 0 0 0-.688.582l-.327 1.949a.41.41 0 0 1-.404.341H8.507l.6-3.56a.505.505 0 0 1 .484-.366h1.007A3.4 3.4 0 0 0 13.967 8m-5.46 6.88H8.41a.41.41 0 0 1-.404-.478l.03-.176h.185a.47.47 0 0 0 .461-.388l.007-.036l-.182 1.077z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamPaypalSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPenIcon],svg[jam-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.648 12.276l-1.65 1.1l-.415 1.68l1.665-.42l1.104-1.656zM7.1 10.899l.627.627l.091-.032c.937-.334 1.88-1.019 2.824-2.089c1.139-1.29 3.061-3.587 5.757-6.879a.211.211 0 0 0-.297-.297c-3.286 2.693-5.583 4.616-6.881 5.758c-1.076.946-1.76 1.888-2.088 2.819zm-.615 5.486L.843 17.814l1.4-5.671l3.004-2.004Q5.926 8.225 7.9 6.486Q9.88 4.743 14.836.682a2.21 2.21 0 0 1 3.111 3.112q-4.065 4.963-5.804 6.934q-1.734 1.965-3.652 2.65z"></svg:path>`,
})
export class JamPenIcon {
  readonly viewBox = input("-2.5 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPenFIcon],svg[jam-pen-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.406 12.732L5.367 9.693q.815-1.435 2.375-2.838q2.012-1.812 7.1-6.126a1.795 1.795 0 0 1 2.53 2.53q-4.32 5.097-6.125 7.1q-1.402 1.555-2.841 2.373M3.99 11.146l2.965 2.964l-1.366 1.906l-5.276 1.795l1.771-5.3z"></svg:path>`,
})
export class JamPenFIcon {
  readonly viewBox = input("-3 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPencilIcon],svg[jam-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.238 5.472L3.2 14.51l-.591 2.016l1.975-.571l9.068-9.068zM13.78 3.93l1.414 1.414l1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255l12.26-12.26a2.5 2.5 0 0 1 3.535 0z"></svg:path>`,
})
export class JamPencilIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPencilFIcon],svg[jam-pencil-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.318 6.11l-3.536-3.535l1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829zm-1.414 1.415l-9.9 9.9l-4.596 1.06l1.06-4.596l9.9-9.9z"></svg:path>`,
})
export class JamPencilFIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPeriscopeIcon],svg[jam-periscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.986 0C3.58 0 .01 3.516.01 7.852c0 5.155 6.485 12.12 7.976 12.12s7.975-6.77 7.975-12.12C15.96 3.516 12.39 0 7.986 0M7.95 13.73c-3.136 0-5.677-2.503-5.677-5.59S4.814 2.551 7.95 2.551s5.676 2.503 5.676 5.59s-2.541 5.589-5.676 5.589"></svg:path><svg:path d="M7.95 3.631q-.211 0-.418.02c.338.384.543.885.543 1.433c0 1.211-.997 2.193-2.227 2.193A2.23 2.23 0 0 1 3.87 6.09c-.32.615-.5 1.311-.5 2.05c0 2.49 2.05 4.509 4.58 4.509c2.529 0 4.58-2.019 4.58-4.51S10.479 3.63 7.95 3.63z"></svg:path></svg:g>`,
})
export class JamPeriscopeIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPeriscopeCircleIcon],svg[jam-periscope-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.993 5C7.79 5 6.005 6.758 6.005 8.926c0 2.577 3.243 6.06 3.988 6.06s3.987-3.385 3.987-6.06C13.98 6.758 12.195 5 9.993 5m-.018 6.865c-1.568 0-2.839-1.251-2.839-2.795c0-1.543 1.271-2.794 2.839-2.794c1.567 0 2.838 1.25 2.838 2.794s-1.27 2.795-2.838 2.795"></svg:path><svg:path d="M9.975 6.816q-.105 0-.21.01c.17.192.272.442.272.716c0 .606-.498 1.096-1.113 1.096c-.43 0-.804-.24-.989-.593c-.16.308-.25.656-.25 1.025c0 1.245 1.025 2.255 2.29 2.255c1.264 0 2.29-1.01 2.29-2.255s-1.025-2.254-2.29-2.254"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamPeriscopeCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPeriscopeSquareIcon],svg[jam-periscope-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.993 5C7.79 5 6.005 6.758 6.005 8.926c0 2.577 3.243 6.06 3.988 6.06s3.987-3.385 3.987-6.06C13.98 6.758 12.195 5 9.993 5m-.018 6.865c-1.568 0-2.839-1.251-2.839-2.795c0-1.543 1.271-2.794 2.839-2.794c1.567 0 2.838 1.25 2.838 2.794s-1.27 2.795-2.838 2.795"></svg:path><svg:path d="M9.975 6.816q-.105 0-.21.01c.17.192.272.442.272.716c0 .606-.498 1.096-1.113 1.096c-.43 0-.804-.24-.989-.593c-.16.308-.25.656-.25 1.025c0 1.245 1.025 2.255 2.29 2.255c1.264 0 2.29-1.01 2.29-2.255s-1.025-2.254-2.29-2.254"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamPeriscopeSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPhoneIcon],svg[jam-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm3 15a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamPhoneIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPhoneFIcon],svg[jam-phone-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 .565h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3m3 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamPhoneFIcon {
  readonly viewBox = input("-6 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPictureIcon],svg[jam-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8.503V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.504l4.39-7.322a3 3 0 0 1 4.69-.582zm0 2.823l-3.828-3.814a1 1 0 0 0-1.563.195L8.836 14H17a1 1 0 0 0 1-1zM3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m3 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamPictureIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPictureEditIcon],svg[jam-picture-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13V9a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0V3a1 1 0 1 1-2 0a3 3 0 0 1 3-3a1 1 0 1 1 0 2h4a1 1 0 1 1 0-2h3a1 1 0 0 1 0 2h4a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3a1 1 0 0 1 2 0m16-4.497V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.504l4.39-7.322a3 3 0 0 1 4.69-.582zm0 2.823l-3.828-3.814a1 1 0 0 0-1.563.195L8.836 14H17a1 1 0 0 0 1-1zM6 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamPictureEditIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPictureFIcon],svg[jam-picture-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 10.536l-4.416-4.44a3 3 0 0 0-4.69.582L5.072 16H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-.011 2.724A3 3 0 0 1 17 16H7.64l4.969-8.293a1 1 0 0 1 1.563-.195zM6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class JamPictureFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPicturesIcon],svg[jam-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v10h12V8zm2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm2 0h8a2 2 0 0 1 2 2v4h2V2H6zm0 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1-7a3 3 0 1 1 6 0h-2a1 1 0 0 0-2 0zm1.864 13.518l-1.728-1.007l2.725-4.673a3 3 0 0 1 4.8-.52l1.088 1.184l-1.473 1.354l-1.087-1.184a1 1 0 0 0-1.6.174zm6.512-12.97a2.99 2.99 0 0 1 3.285.77l1.088 1.184l-1.473 1.354l-1.087-1.184A1 1 0 0 0 16 8.457V8c0-.571-.24-1.087-.624-1.451z"></svg:path>`,
})
export class JamPicturesIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPicturesFIcon],svg[jam-pictures-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 14.606l-1.339-1.287a3 3 0 0 0-4.8.52L5.94 20H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0 2.752V18a2 2 0 0 1-2 2H8.512l3.077-5.154a1 1 0 0 1 1.6-.174zM6 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6M4 5V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.76l-1.339-1.441a3 3 0 0 0-1.887-.953C16.408 5.557 15.64 5 14.75 5h-1.92a3.001 3.001 0 0 0-5.66 0zm13 9V8.512a1 1 0 0 1 .189.16L20 11.661V12a2 2 0 0 1-2 2z"></svg:path>`,
})
export class JamPicturesFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPieChartIcon],svg[jam-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10M9 1h2v10H9zm0 8h10v2H9z"></svg:path>`,
})
export class JamPieChartIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPieChartAltIcon],svg[jam-pie-chart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 11c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10C0 4.815 3.947.551 9 .05v2.012A8.001 8.001 0 0 0 10 18a8 8 0 0 0 7.938-7h2.013zm0-2h-2.012A8.004 8.004 0 0 0 11 2.062V.049A10 10 0 0 1 19.95 9"></svg:path>`,
})
export class JamPieChartAltIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPieChartFIcon],svg[jam-pie-chart-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 11c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10C0 4.815 3.947.551 9 .05V11zm0-2H11V.05A10 10 0 0 1 19.95 9"></svg:path>`,
})
export class JamPieChartFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPinIcon],svg[jam-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.626 11.346l-.184-1.036l4.49-4.491l-2.851-2.852l-4.492 4.49l-1.035-.184a5.05 5.05 0 0 0-2.734.269l6.538 6.537a5.05 5.05 0 0 0 .268-2.733m-4.25 1.604L2.67 18.654a1.008 1.008 0 0 1-1.426-1.426l5.705-5.704L2.67 7.245a7.05 7.05 0 0 1 6.236-1.958l3.747-3.747a2.017 2.017 0 0 1 2.853 0l2.852 2.853a2.017 2.017 0 0 1 0 2.852l-3.747 3.747a7.05 7.05 0 0 1-1.958 6.236z"></svg:path>`,
})
export class JamPinIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPinAltIcon],svg[jam-pin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.9A5.002 5.002 0 0 1 5 0a5 5 0 0 1 1 9.9V19a1 1 0 0 1-2 0zM5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class JamPinAltIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPinAltFIcon],svg[jam-pin-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.465a5.002 5.002 0 0 1 1-9.9a5 5 0 0 1 1 9.9v9.1a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamPinAltFIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPinFIcon],svg[jam-pin-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.374 12.268l-5.656 5.657A1 1 0 1 1 .303 16.51l5.657-5.656L1.718 6.61A6.99 6.99 0 0 1 7.9 4.67L11.617.954a2 2 0 0 1 2.828 0l2.829 2.828a2 2 0 0 1 0 2.829l-3.716 3.716a6.99 6.99 0 0 1-1.941 6.183z"></svg:path>`,
})
export class JamPinFIcon {
  readonly viewBox = input("-3 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPinterestIcon],svg[jam-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705c-.563-4.12.829-7.215 1.475-10.5c-1.102-1.91.133-5.755 2.457-4.808c2.86 1.166-2.477 7.102 1.106 7.844c3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897C.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44c.59 4.416-1.823 9.2-6.142 8.855c-1.171-.093-1.663-.69-2.58-1.265"></svg:path>`,
})
export class JamPinterestIcon {
  readonly viewBox = input("-4.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPinterestCircleIcon],svg[jam-pinterest-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.355 11.614C9.1 12.99 8.79 14.31 7.866 15c-.284-2.08.419-3.644.745-5.303c-.556-.964.067-2.906 1.24-2.427c1.445.588-1.25 3.586.56 3.96c1.888.392 2.66-3.374 1.488-4.6c-1.692-1.768-4.927-.04-4.529 2.492c.097.62.718.807.248 1.661c-1.083-.247-1.406-1.127-1.365-2.3c.067-1.92 1.675-3.263 3.289-3.45c2.04-.235 3.954.772 4.219 2.748c.297 2.23-.921 4.646-3.103 4.472c-.59-.047-.84-.35-1.303-.64z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamPinterestCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPinterestSquareIcon],svg[jam-pinterest-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.355 11.614C9.1 12.99 8.79 14.31 7.866 15c-.284-2.08.419-3.644.745-5.303c-.556-.964.067-2.906 1.24-2.427c1.445.588-1.25 3.586.56 3.96c1.888.392 2.66-3.374 1.488-4.6c-1.692-1.768-4.927-.04-4.529 2.492c.097.62.718.807.248 1.661c-1.083-.247-1.406-1.127-1.365-2.3c.067-1.92 1.675-3.263 3.289-3.45c2.04-.235 3.954.772 4.219 2.748c.297 2.23-.921 4.646-3.103 4.472c-.59-.047-.84-.35-1.303-.64z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamPinterestSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPizzaSliceIcon],svg[jam-pizza-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.258 6.884L9.97 16.977l5.618-9.83c-1.33-.105-2.712-.453-4.242-.992c-.395-.14-.598-.171-.78-.148c-.154.02-1.723.569-2.643.802q-1.743.44-3.665.075m-1.41-2.49c1.702.67 3.224.82 4.584.476c.738-.187 2.478-.796 2.883-.847c.529-.067 1.03.01 1.696.245c1.774.626 3.296.956 4.703.909l.887-1.552A18.6 18.6 0 0 0 9.966 2a18.6 18.6 0 0 0-7.569 1.596l.451.797zM.542 2.268A20.5 20.5 0 0 1 9.966 0c3.362 0 6.606.8 9.496 2.306a1 1 0 0 1 .406 1.383l-9.034 15.807a1 1 0 0 1-1.738-.004L.13 3.65a1 1 0 0 1 .412-1.38zM8 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamPizzaSliceIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlaneIcon],svg[jam-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.725 9.094l-5.509 5.51l-1.87-.777l-.167.169l2.38 1.587l1.588 2.38l.168-.168l-.776-1.87l5.509-5.508l4.328 6.252l.21-.208l-2.887-7.696l4.4-4.398a.935.935 0 0 0-1.323-1.323l-4.4 4.399l-7.694-2.886l-.21.209zm5.39 10.483l-4.33-6.253l-3.04 3.04l.777 1.87l-2.666 2.665l-2.645-3.967l-3.968-2.646l2.666-2.666l1.869.776l3.04-3.04l-6.253-4.328l2.646-2.645l7.695 2.885l3.547-3.547a2.806 2.806 0 1 1 3.968 3.968l-3.547 3.547l2.886 7.696l-2.646 2.645z"></svg:path>`,
})
export class JamPlaneIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlaneFIcon],svg[jam-plane-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.685 13.285l-3.44 3.06l.528 2.423l-2.488 2.488l-2.507-3.921l-3.921-2.507l2.488-2.488L5.9 13l2.927-3.573l-6.171-4.114l2.828-2.829L13.2 5.057l3.793-3.793c1.171-1.172 2.985-1.258 4.05-.193s.978 2.878-.193 4.05l-3.793 3.793l2.571 7.713l-2.828 2.829z"></svg:path>`,
})
export class JamPlaneFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlayIcon],svg[jam-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.03 1.03 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523c.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.9 2.9 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088c-.246.386-.58.712-.975.952"></svg:path>`,
})
export class JamPlayIcon {
  readonly viewBox = input("-4 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlayCircleIcon],svg[jam-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m4.126-6.254l-4.055 2.898c-.905.646-2.13.389-2.737-.576A2.2 2.2 0 0 1 7 12.898V7.102C7 5.942 7.883 5 8.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2 2 0 0 1-.54.575M8.972 7.102v5.796L13.027 10z"></svg:path>`,
})
export class JamPlayCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlayCircleFIcon],svg[jam-play-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m4.126-8.254c.213-.153.397-.348.54-.575c.606-.965.365-2.27-.54-2.917L10.07 5.356A1.9 1.9 0 0 0 8.972 5C7.883 5 7 5.941 7 7.102v5.796c0 .417.116.824.334 1.17c.607.965 1.832 1.222 2.737.576zm-5.2-4.616l4.055 2.898l-4.056 2.897z"></svg:path>`,
})
export class JamPlayCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlaySquareIcon],svg[jam-play-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.126 9.746l-4.055 2.898c-.905.646-2.13.389-2.737-.576A2.2 2.2 0 0 1 7 12.898V7.102C7 5.942 7.883 5 8.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2 2 0 0 1-.54.575M8.972 7.102v5.796L13.027 10z"></svg:path>`,
})
export class JamPlaySquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlaySquareFIcon],svg[jam-play-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m10.126 11.746c.213-.153.397-.348.54-.575c.606-.965.365-2.27-.54-2.917L10.07 5.356A1.9 1.9 0 0 0 8.972 5C7.883 5 7 5.941 7 7.102v5.796c0 .417.116.824.334 1.17c.607.965 1.832 1.222 2.737.576zm-5.2-4.616l4.055 2.898l-4.056 2.897V7.13z"></svg:path>`,
})
export class JamPlaySquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlugIcon],svg[jam-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9v3.5A3.5 3.5 0 0 0 5.5 16h1a3.5 3.5 0 0 0 3.5-3.5V9zm6-2V1a1 1 0 1 1 2 0v6a2 2 0 0 1 2 2v3.5a5.5 5.5 0 0 1-4.155 5.334A1.5 1.5 0 0 1 6.5 20h-1a1.5 1.5 0 0 1-1.345-2.166A5.5 5.5 0 0 1 0 12.5V9a2 2 0 0 1 2-2V1a1 1 0 1 1 2 0v6z"></svg:path>`,
})
export class JamPlugIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlugFIcon],svg[jam-plug-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.565h8a2 2 0 0 1 2 2v3.5a5.5 5.5 0 0 1-4.155 5.334A1.5 1.5 0 0 1 6.5 20.565h-1a1.5 1.5 0 0 1-1.345-2.166A5.5 5.5 0 0 1 0 13.065v-3.5a2 2 0 0 1 2-2m2-1H2v-5a1 1 0 1 1 2 0zm6 0H8v-5a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamPlugFIcon {
  readonly viewBox = input("-6 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlusIcon],svg[jam-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class JamPlusIcon {
  readonly viewBox = input("-4.5 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlusCircleIcon],svg[jam-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamPlusCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlusCircleFIcon],svg[jam-plus-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h4a1 1 0 0 0 0-2h-4V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0zm-1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamPlusCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlusRectangleIcon],svg[jam-plus-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m7 11v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamPlusRectangleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPlusRectangleFIcon],svg[jam-plus-rectangle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h4a1 1 0 0 0 0-2h-4V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamPlusRectangleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPocketWatchIcon],svg[jam-pocket-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13h2a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0zM7 5.732V5a1 1 0 1 1 2 0v.732a2 2 0 1 0-2 0m-2.041.866a4 4 0 1 1 6.082 0A8.002 8.002 0 0 1 8 22A8 8 0 0 1 4.959 6.598M8 20A6 6 0 1 0 8 8a6 6 0 0 0 0 12"></svg:path>`,
})
export class JamPocketWatchIcon {
  readonly viewBox = input("-4 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPocketWatchFIcon],svg[jam-pocket-watch-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v-3a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zM5 5.732V5a1 1 0 1 1 2 0v.732a2 2 0 1 0-2 0M6 20A6 6 0 1 1 6 8a6 6 0 0 1 0 12M2.959 6.598a4 4 0 1 1 6.082 0A8 8 0 0 0 6 6a8 8 0 0 0-3.041.598"></svg:path>`,
})
export class JamPocketWatchFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPodcastIcon],svg[jam-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19.8c-4.564-.927-8-4.962-8-9.8C0 4.477 4.477 0 10 0s10 4.477 10 10c0 4.838-3.436 8.873-8 9.8v-2.052a8 8 0 1 0-4 0zm0-4.141a6 6 0 1 1 4 0v-2.194a4 4 0 1 0-4 0zm3-3.927V20H9v-8.268a2 2 0 1 1 2 0"></svg:path>`,
})
export class JamPodcastIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPowerIcon],svg[jam-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.1a.97.97 0 0 1-.617-.898c0-.536.448-.972 1-.972q.175.001.332.055q.001-.005.004-.003C15.834 3.658 18 6.708 18 10.252C18 15.082 13.97 19 9 19s-9-3.917-9-8.749C0 6.732 2.137 3.7 5.218 2.31a1 1 0 0 1 .392-.076c.552 0 1 .435 1 .971a.97.97 0 0 1-.61.896c-2.365 1.092-4 3.436-4 6.15c0 3.758 3.134 6.805 7 6.805s7-3.047 7-6.805c0-2.714-1.635-5.058-4-6.15zM9 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamPowerIcon {
  readonly viewBox = input("-3 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPrinterIcon],svg[jam-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1V9h12zM4 4V0h12v4h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1v4H4v-4H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 14h8v-7H6zM6 4h8V2H6z"></svg:path>`,
})
export class JamPrinterIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamPrinterFIcon],svg[jam-printer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1V9H4v7H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1v2h12zM6 20v-9h8v9zM6 4V0h8v4z"></svg:path>`,
})
export class JamPrinterFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamQrCodeIcon],svg[jam-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18h3a2 2 0 0 0 2-2v-3a1 1 0 0 1 2 0v3a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-3a1 1 0 0 1 2 0v3a2 2 0 0 0 2 2h3a1 1 0 0 1 0 2h6a1 1 0 0 1 0-2M2 7a1 1 0 1 1-2 0V4a4 4 0 0 1 4-4h3a1 1 0 1 1 0 2H4a2 2 0 0 0-2 2zm16 0V4a2 2 0 0 0-2-2h-3a1 1 0 0 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 0 1-2 0"></svg:path>`,
})
export class JamQrCodeIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamQuoraIcon],svg[jam-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.495 15.682s-.097 1.434-1.39 1.434c-1 0-1.682-.768-2.32-1.765c1.814-1.597 2.966-3.982 2.966-6.646C16.751 3.897 13.001 0 8.377 0S.003 3.897.003 8.705s3.749 8.705 8.374 8.705c.84 0 1.65-.129 2.414-.368c.967 1.55 2.195 2.943 4.117 2.943c3.912 0 4.074-4.303 4.074-4.303zm-9.118.293c-2.696 0-4.882-3.255-4.882-7.27s2.186-7.27 4.882-7.27s4.882 3.255 4.882 7.27c0 1.597-.346 3.073-.932 4.272c-.662-.953-1.456-1.764-2.592-2.022c-2.015-.459-3.75.456-4.3.912l.517 1.076s.523-.303 1.82 0c.817.19 1.452 1.334 2.18 2.646a3.46 3.46 0 0 1-1.575.386"></svg:path>`,
})
export class JamQuoraIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamQuoraCircleIcon],svg[jam-quora-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.5 17a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 1 0-19a9.5 9.5 0 0 1 0 19"></svg:path><svg:path d="M14.07 12.847s-.049.718-.696.718c-.5 0-.841-.385-1.16-.884a4.42 4.42 0 0 0 1.483-3.325C13.697 6.95 11.821 5 9.507 5s-4.19 1.95-4.19 4.356s1.876 4.356 4.19 4.356c.42 0 .826-.065 1.208-.184c.484.775 1.098 1.472 2.06 1.472c1.958 0 2.039-2.153 2.039-2.153zm-4.563.147c-1.35 0-2.443-1.629-2.443-3.638s1.094-3.638 2.443-3.638c1.35 0 2.443 1.629 2.443 3.638c0 .799-.173 1.537-.466 2.138c-.331-.477-.729-.883-1.297-1.013c-1.009-.229-1.877.229-2.152.457l.259.539s.261-.152.91 0c.41.095.727.667 1.09 1.323a1.7 1.7 0 0 1-.787.194"></svg:path></svg:g>`,
})
export class JamQuoraCircleIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamQuoraSquareIcon],svg[jam-quora-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.07 12.847s-.049.718-.696.718c-.5 0-.841-.385-1.16-.884a4.42 4.42 0 0 0 1.483-3.325C13.697 6.95 11.821 5 9.507 5s-4.19 1.95-4.19 4.356s1.876 4.356 4.19 4.356c.42 0 .826-.065 1.208-.184c.484.775 1.098 1.472 2.06 1.472c1.958 0 2.039-2.153 2.039-2.153zm-4.563.147c-1.35 0-2.443-1.629-2.443-3.638s1.094-3.638 2.443-3.638c1.35 0 2.443 1.629 2.443 3.638c0 .799-.173 1.537-.466 2.138c-.331-.477-.729-.883-1.297-1.013c-1.009-.229-1.877.229-2.152.457l.259.539s.261-.152.91 0c.41.095.727.667 1.09 1.323a1.7 1.7 0 0 1-.787.194"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamQuoraSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamQuoteIcon],svg[jam-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0a1 1 0 1 1 0 2c-.893 0-1.695.39-2.245 1.01A3 3 0 1 1 0 6V5a5 5 0 0 1 5-5m8 0a1 1 0 0 1 0 2c-.893 0-1.695.39-2.245 1.01A3 3 0 1 1 8 6V5a5 5 0 0 1 5-5M3 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class JamQuoteIcon {
  readonly viewBox = input("0 0 14 9")
  readonly width = input("1.56em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRainbowIcon],svg[jam-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10h-2a8 8 0 1 0-16 0zm4 0a6 6 0 1 1 12 0h-2a4 4 0 1 0-8 0zm4 0a2 2 0 1 1 4 0z"></svg:path>`,
})
export class JamRainbowIcon {
  readonly viewBox = input("-2 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRecIcon],svg[jam-rec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 2A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></svg:path>`,
})
export class JamRecIcon {
  readonly viewBox = input("-4 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRectangleIcon],svg[jam-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0-2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamRectangleIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRectangleFIcon],svg[jam-rectangle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 .565h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamRectangleFIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRedditIcon],svg[jam-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.986 8.029a2.51 2.51 0 0 0-4.285-1.771c-1.404-.906-3.197-1.483-5.166-1.573a2.73 2.73 0 0 1 1.028-2.139a2.74 2.74 0 0 1 2.315-.539l.112.025l-.004.084a2.095 2.095 0 1 0 .328-1.121L14.113.95a3.81 3.81 0 0 0-3.228.752a3.81 3.81 0 0 0-1.433 2.983c-1.97.09-3.762.667-5.165 1.572a2.51 2.51 0 1 0-2.94 3.994q-.092.465-.093.952c0 3.606 3.912 6.53 8.74 6.53c4.826 0 8.739-2.924 8.739-6.53q0-.486-.093-.952a2.51 2.51 0 0 0 1.346-2.222m-3.905-6.925a1.013 1.013 0 0 1 0 2.025a1.013 1.013 0 0 1 0-2.025M1.083 8.03c0-.787.64-1.427 1.427-1.427c.337 0 .646.118.89.314c-.763.655-1.354 1.425-1.721 2.27a1.42 1.42 0 0 1-.596-1.157m14.442 6.923c-1.465 1.095-3.43 1.698-5.532 1.698s-4.067-.603-5.531-1.698c-1.37-1.023-2.125-2.355-2.125-3.75c0-1.394.754-2.725 2.125-3.75C5.926 6.359 7.89 5.757 9.993 5.757s4.067.602 5.532 1.697c1.37 1.024 2.125 2.355 2.125 3.75c0 1.394-.755 2.726-2.125 3.75zm2.782-5.767c-.367-.845-.958-1.614-1.721-2.269c.244-.196.554-.314.89-.314c.787 0 1.427.64 1.427 1.427c0 .476-.235.898-.596 1.156"></svg:path><svg:circle cx="6.801" cy="9.678" r="1.143"></svg:circle><svg:circle cx="13.185" cy="9.678" r="1.143"></svg:circle><svg:path d="M12.701 12.455a4.36 4.36 0 0 1-2.94 1.138a4.33 4.33 0 0 1-3.195-1.39a.541.541 0 1 0-.793.738a5.47 5.47 0 0 0 3.988 1.735a5.44 5.44 0 0 0 3.67-1.421a.541.541 0 1 0-.73-.8"></svg:path></svg:g>`,
})
export class JamRedditIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRedoIcon],svg[jam-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.347 7.24l.847-1.266a.984.984 0 0 1 1.375-.259c.456.31.58.93.277 1.383L19.65 10.38a.984.984 0 0 1-1.375.259L14.97 8.393a1 1 0 0 1-.277-1.382a.984.984 0 0 1 1.375-.26l1.344.915C16.428 4.386 13.42 2 9.863 2c-4.357 0-7.89 3.582-7.89 8s3.533 8 7.89 8c.545 0 .987.448.987 1s-.442 1-.987 1C4.416 20 0 15.523 0 10S4.416 0 9.863 0c4.504 0 8.302 3.06 9.484 7.24"></svg:path>`,
})
export class JamRedoIcon {
  readonly viewBox = input("-1 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRefreshIcon],svg[jam-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.83 4.194l.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194M2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792a1 1 0 1 1 1.906.608a9.38 9.38 0 0 1-5.38 5.831a9.386 9.386 0 0 1-11.265-3.328"></svg:path>`,
})
export class JamRefreshIcon {
  readonly viewBox = input("-1.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRefreshReverseIcon],svg[jam-refresh-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.38 9.38 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a1 1 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z"></svg:path>`,
})
export class JamRefreshReverseIcon {
  readonly viewBox = input("-1.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRepeatIcon],svg[jam-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.774 15l1.176 1.176a1 1 0 0 1-1.414 1.414l-2.829-2.828a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L11.883 13H14a4 4 0 1 0 0-8a1 1 0 0 1 0-2a6 6 0 1 1 0 12zM8.273 3L7.176 1.904A1 1 0 0 1 8.591.489l2.828 2.829a1 1 0 0 1 0 1.414L8.591 7.56a1 1 0 0 1-1.415-1.414L8.323 5H6a4 4 0 1 0 0 8a1 1 0 0 1 0 2A6 6 0 1 1 6 3z"></svg:path>`,
})
export class JamRepeatIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRocketIcon],svg[jam-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.808 12.971l.076-1.064l.927-.529A11.6 11.6 0 0 0 13.243 9.5c2.64-2.641 3.446-5.746 2.475-6.718c-.972-.97-4.077-.166-6.718 2.475c-.76.76-1.397 1.59-1.878 2.432l-.53.927l-1.063.076a3.97 3.97 0 0 0-2.355.988a11 11 0 0 1 3.351 2.295c.98.98 1.752 2.117 2.295 3.351a3.97 3.97 0 0 0 .988-2.355M6.835 15.8a7 7 0 0 1-.663.771q-1.758 1.758-5.304 1.06q-.695-3.545 1.06-5.303q.372-.37.772-.663a9 9 0 0 0-2.598-.81a6 6 0 0 1 1.473-2.416a5.98 5.98 0 0 1 3.81-1.741a13.6 13.6 0 0 1 2.2-2.855c3.32-3.32 7.594-4.427 9.547-2.475c1.952 1.953.844 6.227-2.475 9.546a13.6 13.6 0 0 1-2.855 2.2a5.98 5.98 0 0 1-1.741 3.81a5.96 5.96 0 0 1-2.416 1.474a9 9 0 0 0-.81-2.598M5.11 13.39a2.6 2.6 0 0 0-.54-.415c-.432.15-.94.48-1.405.944c-.219.22-.487.959-.49 1.905c.946-.003 1.688-.274 1.905-.49c.465-.466.795-.973.944-1.405a2.6 2.6 0 0 0-.414-.54zm7.778-7.78a1 1 0 1 1 1.414-1.413A1 1 0 0 1 12.89 5.61z"></svg:path>`,
})
export class JamRocketIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRocketFIcon],svg[jam-rocket-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.21 16.067a7 7 0 0 1-.664.772q-1.758 1.757-5.303 1.06q-.697-3.545 1.06-5.303q.372-.37.772-.663a9 9 0 0 0-2.599-.81A6 6 0 0 1 1.95 8.707a5.98 5.98 0 0 1 3.81-1.742a13.6 13.6 0 0 1 2.2-2.854c3.32-3.32 7.593-4.428 9.546-2.475s.845 6.227-2.475 9.546a13.6 13.6 0 0 1-2.854 2.2a5.98 5.98 0 0 1-1.742 3.81a5.96 5.96 0 0 1-2.416 1.474a9 9 0 0 0-.81-2.599zM13.262 5.88a1 1 0 1 0 1.415-1.415a1 1 0 0 0-1.415 1.415m-7.778 7.778q-.164-.165-.53-.503c-.432.15-.944.574-1.414 1.033c-.371.363-.497.973-.5 1.92c.946-.004 1.62-.22 1.914-.506c.471-.459.89-.917 1.04-1.35c-.112-.194-.346-.43-.51-.594"></svg:path>`,
})
export class JamRocketFIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRssFeedIcon],svg[jam-rss-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.996 15.97a1.996 1.996 0 1 1 0-3.992a1.996 1.996 0 0 1 0 3.992M1.12 7.977a.998.998 0 0 1-.247-1.98a8.103 8.103 0 0 1 9.108 8.04v.935a.998.998 0 1 1-1.996 0v-.934a6.108 6.108 0 0 0-6.865-6.06zM0 1.065A1 1 0 0 1 .93.002C8.717-.517 15.448 5.374 15.967 13.16q.063.94 0 1.88a.998.998 0 1 1-1.992-.133q.054-.808 0-1.614C13.53 6.607 7.75 1.548 1.065 1.994A1 1 0 0 1 0 1.064z"></svg:path>`,
})
export class JamRssFeedIcon {
  readonly viewBox = input("-4 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRtlIcon],svg[jam-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.007 2v9a1 1 0 0 1-2.002 0V6H3.004A3 3 0 0 1 0 3c0-1.657 1.345-3 3.004-3h7.008a1 1 0 1 1 0 2h-1v9a1 1 0 0 1-2.003 0V2zm6.284 6.877l1.416 1.414a1 1 0 0 1 0 1.414c-.391.39-1.025.39-1.416 0l-2.124-2.121a1 1 0 0 1 0-1.415l2.124-2.12a1 1 0 0 1 1.416 0a1 1 0 0 1 0 1.413L12.29 8.877ZM4.005 2H3.004a1 1 0 1 0 0 2h1V2Z"></svg:path>`,
})
export class JamRtlIcon {
  readonly viewBox = input("0 0 14 12")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRubberIcon],svg[jam-rubber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z"></svg:path>`,
})
export class JamRubberIcon {
  readonly viewBox = input("-1.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRulerIcon],svg[jam-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.95 7.879l-.707-.707a1 1 0 0 1 1.414-1.415l.707.707l1.414-1.414l-2.828-2.828L2.222 14.95l2.828 2.828l1.414-1.414L5.05 14.95a1 1 0 0 1 1.414-1.414L7.88 14.95l1.414-1.414l-.707-.708A1 1 0 0 1 10 11.414l.707.707l1.414-1.414l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.415 1.414zM.808 13.536L13.536.808a2 2 0 0 1 2.828 0l2.828 2.828a2 2 0 0 1 0 2.828L6.464 19.192a2 2 0 0 1-2.828 0L.808 16.364a2 2 0 0 1 0-2.828"></svg:path>`,
})
export class JamRulerIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamRulerFIcon],svg[jam-ruler-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.757 9.243l-1.414 1.414l-2.828-2.829A1 1 0 1 0 11.1 9.243l2.828 2.828l-1.414 1.414l-2.122-2.121a1 1 0 1 0-1.414 1.414l2.122 2.121l-1.415 1.415l-2.828-2.829A1 1 0 0 0 5.444 14.9l2.828 2.829l-1.414 1.414a2 2 0 0 1-2.829 0l-2.828-2.828a2 2 0 0 1 0-2.829L13.929.757a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-1.414 1.414l-2.122-2.12a1 1 0 1 0-1.414 1.413z"></svg:path>`,
})
export class JamRulerFIcon {
  readonly viewBox = input("-1.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSaveIcon],svg[jam-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h11.22a2 2 0 0 1 1.345.52l2.78 2.527A2 2 0 0 1 18 4.527V16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v14h14V4.527L13.22 2zm4 8h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m0 2v4h6v-4zm7-9a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M5 3h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 3h3V5H6z"></svg:path>`,
})
export class JamSaveIcon {
  readonly viewBox = input("-3 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSaveFIcon],svg[jam-save-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18.565v-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7H2a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h11.22a2 2 0 0 1 1.345.52l2.78 2.527A2 2 0 0 1 18 5.092v11.473a2 2 0 0 1-2 2zm-1-15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m-8 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm1 9h6v4H6zm0-5v-3h3v3z"></svg:path>`,
})
export class JamSaveFIcon {
  readonly viewBox = input("-3 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamScissorsIcon],svg[jam-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.107 10.554L7.363 12.63a3.99 3.99 0 0 1-.192 4.89a4.004 4.004 0 0 1-5.635.492a3.99 3.99 0 0 1-.493-5.628a4.005 4.005 0 0 1 4.788-1.038L7.801 9L2.413 2.587a1 1 0 0 1 .123-1.407a1 1 0 0 1 1.409.123l5.162 6.144l5.161-6.144a1 1 0 0 1 1.41-.123a1 1 0 0 1 .123 1.407L10.412 9l1.97 2.345a4.005 4.005 0 0 1 4.788 1.038a3.99 3.99 0 0 1-.493 5.628a4.004 4.004 0 0 1-5.635-.492a3.99 3.99 0 0 1-.192-4.89zm-6.285 5.927a2 2 0 0 0 2.571-3.06a2 2 0 0 0-2.818.246c-.71.845-.6 2.105.247 2.814m12.57 0a1.996 1.996 0 0 0 .246-2.814a2 2 0 0 0-2.817-.246a1.996 1.996 0 0 0-.247 2.814c.71.845 1.972.955 2.818.246"></svg:path>`,
})
export class JamScissorsIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamScreenIcon],svg[jam-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamScreenIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamScreenFIcon],svg[jam-screen-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 .565h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3m4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamScreenFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamScrewdriverIcon],svg[jam-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.343 18.071a1 1 0 0 1 0 1.414L3.93 20.9a1 1 0 0 1-1.414 0L1.1 19.485a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 0L9.586 11a2 2 0 0 1 0-2.828l7.07-7.071a2 2 0 0 1 2.83 0l1.413 1.414a2 2 0 0 1 0 2.828l-7.07 7.071a2 2 0 0 1-2.829 0zM12.414 11l7.071-7.071l-1.414-1.414L11 9.585z"></svg:path>`,
})
export class JamScrewdriverIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamScrewdriverFIcon],svg[jam-screwdriver-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.778 7.464l-4.95 4.95a2 2 0 0 1-2.828 0l-5.657 5.657a1 1 0 0 1 0 1.414L3.93 20.9a1 1 0 0 1-1.414 0L1.1 19.485a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 0L9.586 11a2 2 0 0 1 0-2.828l4.95-4.95zm1.414-1.414L15.95 1.808l.707-.707a2 2 0 0 1 2.828 0L20.9 2.515a2 2 0 0 1 0 2.828z"></svg:path>`,
})
export class JamScrewdriverFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSearchIcon],svg[jam-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></svg:path>`,
})
export class JamSearchIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSearchFolderIcon],svg[jam-search-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16a1 1 0 0 1 0-2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.415l-.471-1.334A1 1 0 0 0 8 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1a1 1 0 0 1 0 2a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3m-5.01-.096a5.002 5.002 0 0 1-6.293-7.707a5 5 0 0 1 7.707 6.293l2.9 2.9a1 1 0 0 1-1.415 1.413l-2.9-2.899zm-.636-2.05A3 3 0 1 0 7.11 9.61a3 3 0 0 0 4.243 4.243z"></svg:path>`,
})
export class JamSearchFolderIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSearchMinusIcon],svg[jam-search-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414zM5 7h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamSearchMinusIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSearchPlusIcon],svg[jam-search-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414zM9 7h2a1 1 0 0 1 0 2H9v2a1 1 0 0 1-2 0V9H5a1 1 0 1 1 0-2h2V5a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamSearchPlusIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSelectAllIcon],svg[jam-select-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.01 14a1 1 0 0 1 .988 1h12.004a1 1 0 0 1 1-1V4a1 1 0 0 1-1-1H4.01a1 1 0 0 1-1 1zm.988 3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.01V4a1 1 0 0 1-.998-1V1a1 1 0 0 1 .999-1H3.01a1 1 0 0 1 1 1h11.992a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.998a1 1 0 0 1-1-1z"></svg:path>`,
})
export class JamSelectAllIcon {
  readonly viewBox = input("0 0 20 18")
  readonly width = input("1.12em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetBackwardIcon],svg[jam-set-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.18 8.477a.976.976 0 0 0 .324 1.363l9.922 6.032c.16.097.346.149.535.149c.56 0 1.013-.443 1.013-.99V2.97a.97.97 0 0 0-.153-.523a1.027 1.027 0 0 0-1.395-.317L6.504 8.16c-.131.08-.243.189-.325.317zM6 6.136L15.355.449c1.425-.867 3.3-.44 4.186.951c.3.471.459 1.014.459 1.569V15.03c0 1.641-1.36 2.97-3.04 2.97a3.1 3.1 0 0 1-1.605-.448L6 11.865V16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM2 2v14h2V2z"></svg:path>`,
})
export class JamSetBackwardIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetBackwardCircleIcon],svg[jam-set-backward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-2.486-6.164V14a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v2.164l3.93-2.808A1.9 1.9 0 0 1 12.542 5c1.09 0 1.972.941 1.972 2.102v5.796c0 .417-.116.824-.334 1.17c-.606.965-1.832 1.222-2.736.576zm5.028-4.734L8.487 10l4.055 2.898z"></svg:path>`,
})
export class JamSetBackwardCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetBackwardCircleFIcon],svg[jam-set-backward-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.514 8.164V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-2.164l3.93 2.808c.904.646 2.13.389 2.736-.576c.218-.346.334-.753.334-1.17V7.102c0-1.16-.883-2.102-1.972-2.102c-.391 0-.773.124-1.098.356zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m2.561-12.898v5.796L8.506 10z"></svg:path>`,
})
export class JamSetBackwardCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetBackwardSquareIcon],svg[jam-set-backward-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.514 9.836V14a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v2.164l3.93-2.808A1.9 1.9 0 0 1 12.542 5c1.09 0 1.972.941 1.972 2.102v5.796c0 .417-.116.824-.334 1.17c-.606.965-1.832 1.222-2.736.576zm5.028-4.734L8.487 10l4.055 2.898z"></svg:path>`,
})
export class JamSetBackwardSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetBackwardSquareFIcon],svg[jam-set-backward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.514 8.164V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-2.164l3.93 2.808c.904.646 2.13.389 2.736-.576c.218-.346.334-.753.334-1.17V7.102c0-1.16-.883-2.102-1.972-2.102c-.391 0-.773.124-1.098.356zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m8.548 7.12v5.796l-4.055-2.898z"></svg:path>`,
})
export class JamSetBackwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetForwardIcon],svg[jam-set-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.03 1.03 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523c.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.18 2.341l-9.355 5.687c-1.425.867-3.3.44-4.186-.951A2.9 2.9 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448L14 6.135V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM16 2v14h2V2z"></svg:path>`,
})
export class JamSetForwardIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetForwardCircleIcon],svg[jam-set-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2.514-6.164l-3.929 2.808c-.905.646-2.13.389-2.736-.576a2.2 2.2 0 0 1-.335-1.17V7.102C5.514 5.942 6.397 5 7.487 5c.39 0 .773.124 1.098.356l3.93 2.808V6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-2.164zM7.487 7.102v5.796L11.542 10z"></svg:path>`,
})
export class JamSetForwardCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetForwardCircleFIcon],svg[jam-set-forward-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.514 11.836V14a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0v2.164L8.585 5.356A1.9 1.9 0 0 0 7.487 5c-1.09 0-1.973.941-1.973 2.102v5.796c0 .417.117.824.335 1.17c.606.965 1.831 1.222 2.736.576l3.93-2.808zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10M7.355 7.08l4.055 2.898l-4.055 2.898z"></svg:path>`,
})
export class JamSetForwardCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetForwardSquareIcon],svg[jam-set-forward-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8.514 9.836l-3.929 2.808c-.905.646-2.13.389-2.736-.576a2.2 2.2 0 0 1-.335-1.17V7.102C5.514 5.942 6.397 5 7.487 5c.39 0 .773.124 1.098.356l3.93 2.808V6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-2.164zM7.487 7.102v5.796L11.542 10z"></svg:path>`,
})
export class JamSetForwardSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetForwardSquareFIcon],svg[jam-set-forward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.514 11.836V14a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0v2.164L8.585 5.356A1.9 1.9 0 0 0 7.487 5c-1.09 0-1.973.941-1.973 2.102v5.796c0 .417.117.824.335 1.17c.606.965 1.831 1.222 2.736.576l3.93-2.808zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m3.496 7.136l4.056 2.898l-4.056 2.898z"></svg:path>`,
})
export class JamSetForwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetSquareIcon],svg[jam-set-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.413.646l15.97 15.938A2 2 0 0 1 17.972 20H2a2 2 0 0 1-2-2V2.061A2 2 0 0 1 3.413.646M2 2.06V18h15.97zm2 7.353a1 1 0 0 1 1.707-.707l5.586 5.586A1 1 0 0 1 10.586 16H5a1 1 0 0 1-1-1zM6 14h2l-2-2zm7 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-8 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamSetSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSetSquareFIcon],svg[jam-set-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20v-1a1 1 0 0 0-2 0v1h-2v-1a1 1 0 0 0-2 0v1H6v-1a1 1 0 0 0-2 0v1H2a2 2 0 0 1-2-2V2.061A2 2 0 0 1 3.413.646l15.97 15.938A2 2 0 0 1 17.972 20zM4 9.414V15a1 1 0 0 0 1 1h5.586a1 1 0 0 0 .707-1.707L5.707 8.707A1 1 0 0 0 4 9.414"></svg:path>`,
})
export class JamSetSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSettingsAltIcon],svg[jam-settings-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12V1a1 1 0 1 1 2 0v11h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2zm7-10V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V4h-1a1 1 0 0 1 0-2zM4 5h1a1 1 0 1 1 0 2H4v8a1 1 0 0 1-2 0V7H1a1 1 0 1 1 0-2h1V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamSettingsAltIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShareIcon],svg[jam-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.414v5.642a1 1 0 1 1-2 0V3.414L4.879 4.536A1 1 0 0 1 3.464 3.12L6.293.293a.997.997 0 0 1 1.414 0l2.829 2.828A1 1 0 1 1 9.12 4.536zM3 6a1 1 0 1 1 0 2H2v4h10V8h-1a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></svg:path>`,
})
export class JamShareIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShareAltIcon],svg[jam-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7.928 9.24a4 4 0 0 1-.026 1.644l5.04 2.537a4 4 0 1 1-.867 1.803l-5.09-2.562a4 4 0 1 1 .083-5.228l5.036-2.522a4 4 0 1 1 .929 1.772zM4 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamShareAltIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShareAltFIcon],svg[jam-share-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.928 9.24a4 4 0 0 1-.026 1.644l5.04 2.537a4 4 0 1 1-.867 1.803l-5.09-2.562a4 4 0 1 1 .083-5.228l5.036-2.522a4 4 0 1 1 .929 1.772z"></svg:path>`,
})
export class JamShareAltFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldIcon],svg[jam-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.386V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342l2.92-2.555A9.02 9.02 0 0 0 14 8V4.386l-6-2.25zM.649 2.756L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936z"></svg:path>`,
})
export class JamShieldIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldCheckIcon],svg[jam-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.386V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342l2.92-2.555A9.02 9.02 0 0 0 14 8V4.386l-6-2.25zM.649 2.756L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936zm6.29 7.512l3.536-3.536a1 1 0 0 1 1.414 1.414L7.646 12.39a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414z"></svg:path>`,
})
export class JamShieldCheckIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldCheckFIcon],svg[jam-shield-check-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.649 3.322L8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936m6.29 7.51L5.525 9.42a1 1 0 1 0-1.414 1.414l2.121 2.121a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414l-3.536 3.536z"></svg:path>`,
})
export class JamShieldCheckFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldCloseIcon],svg[jam-shield-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.386V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342l2.92-2.555A9.02 9.02 0 0 0 14 8V4.386l-6-2.25zM.649 2.756L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936zM9.414 9l1.414 1.414a1 1 0 1 1-1.414 1.414L8 10.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L6.586 9L5.172 7.586a1 1 0 1 1 1.414-1.414L8 7.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class JamShieldCloseIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldCloseFIcon],svg[jam-shield-close-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.414 9.565l1.414-1.414a1 1 0 1 0-1.414-1.414L8 8.15L6.586 6.737A1 1 0 1 0 5.172 8.15l1.414 1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414L8 10.98l1.414 1.414a1 1 0 1 0 1.414-1.414zM.65 3.322L8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936z"></svg:path>`,
})
export class JamShieldCloseFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldFIcon],svg[jam-shield-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.649 3.322L8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936"></svg:path>`,
})
export class JamShieldFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldHalfIcon],svg[jam-shield-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 2.136l-6 2.25V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342zm-7.351.62L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936z"></svg:path>`,
})
export class JamShieldHalfIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldMinusIcon],svg[jam-shield-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.386V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342l2.92-2.555A9.02 9.02 0 0 0 14 8V4.386l-6-2.25zM.649 2.756L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936zM5 8h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamShieldMinusIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldMinusFIcon],svg[jam-shield-minus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.649 3.322L8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936M5 8.565a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamShieldMinusFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldPlusIcon],svg[jam-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.386V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342l2.92-2.555A9.02 9.02 0 0 0 14 8V4.386l-6-2.25zM.649 2.756L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936zM9 8h2a1 1 0 0 1 0 2H9v2a1 1 0 0 1-2 0v-2H5a1 1 0 1 1 0-2h2V6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamShieldPlusIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShieldPlusFIcon],svg[jam-shield-plus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.565v-2a1 1 0 1 0-2 0v2H5a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zM.649 3.322L8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936"></svg:path>`,
})
export class JamShieldPlusFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShopifyIcon],svg[jam-shopify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.338 2.395l.032.027l1.18 1.171l1.6.12c.073.006.16.061.174.161l2.172 14.693l-6.148 1.33L0 17.771S1.456 6.509 1.511 6.11c.073-.524.091-.541.648-.716l1.796-.557C4.339 3.208 5.565 0 8.13 0c.335 0 .723.18 1.037.594L9.26.591c1.101 0 1.727.939 2.082 1.96l.595-.184c.08-.024.278-.056.4.028zM9.261 7.11s-.513-.297-1.55-.297c-2.692 0-4.026 1.798-4.026 3.656c0 2.208 2.203 2.268 2.203 3.611c0 .325-.23.77-.795.77c-.864 0-1.888-.88-1.888-.88l-.521 1.724s.996 1.212 2.944 1.212c1.623 0 2.827-1.222 2.827-3.12c0-2.413-2.685-2.807-2.685-3.837c0-.19.06-.938 1.254-.938a3.5 3.5 0 0 1 1.478.354zm1.455-4.366c-.243-.743-.621-1.389-1.189-1.46c.141.405.23.916.23 1.55l-.001.208zM8.823 1.41c-.626.268-1.342.98-1.723 2.454l1.983-.614v-.111c0-.766-.102-1.334-.26-1.73zM8.061.688c-1.844 0-2.879 2.42-3.315 3.905l1.567-.486C6.686 2.161 7.567 1.187 8.39.8a.6.6 0 0 0-.33-.11z"></svg:path>`,
})
export class JamShopifyIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShopifyCircleIcon],svg[jam-shopify-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="m13.264 6.833l-.805-.06l-.592-.589l.592.59s.77.056.805.06c.037.002.08.03.088.08l1.091 7.385l-3.09.668L5.65 13.9s.732-5.66.76-5.86c.036-.264.045-.273.325-.36l.902-.28c.194-.82.81-2.432 2.1-2.432c.168 0 .363.09.52.299l.047-.002c.554 0 .868.472 1.047.985l.299-.092a.3.3 0 0 1 .135-.01zm-2.96 1.708s-.257-.15-.779-.15c-1.353 0-2.023.904-2.023 1.838c0 1.11 1.107 1.14 1.107 1.815a.383.383 0 0 1-.4.386c-.434 0-.948-.441-.948-.441l-.262.866s.5.609 1.48.609c.815 0 1.42-.614 1.42-1.568c0-1.213-1.35-1.411-1.35-1.929c0-.095.031-.471.631-.471c.41 0 .743.178.743.178zm.732-2.195c-.123-.373-.313-.698-.598-.733c.071.203.115.46.115.779v.104zm-.952-.67c-.314.135-.674.492-.866 1.233l.997-.308v-.056c0-.385-.052-.67-.13-.87zm-.383-.363c-.926 0-1.447 1.216-1.666 1.962l.788-.244c.187-.978.63-1.468 1.043-1.662a.3.3 0 0 0-.165-.056"></svg:path></svg:g>`,
})
export class JamShopifyCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShopifySquareIcon],svg[jam-shopify-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13.264 6.833l-.805-.06l-.592-.589l.592.59s.77.056.805.06c.037.002.08.03.088.08l1.091 7.385l-3.09.668L5.65 13.9s.732-5.66.76-5.86c.036-.264.045-.273.325-.36l.902-.28c.194-.82.81-2.432 2.1-2.432c.168 0 .363.09.52.299l.047-.002c.554 0 .868.472 1.047.985l.299-.092a.3.3 0 0 1 .135-.01zm-2.96 1.708s-.257-.15-.779-.15c-1.353 0-2.023.904-2.023 1.838c0 1.11 1.107 1.14 1.107 1.815a.383.383 0 0 1-.4.386c-.434 0-.948-.441-.948-.441l-.262.866s.5.609 1.48.609c.815 0 1.42-.614 1.42-1.568c0-1.213-1.35-1.411-1.35-1.929c0-.095.031-.471.631-.471c.41 0 .743.178.743.178zm.732-2.195c-.123-.373-.313-.698-.598-.733c.071.203.115.46.115.779v.104zm-.952-.67c-.314.135-.674.492-.866 1.233l.997-.308v-.056c0-.385-.052-.67-.13-.87zm-.383-.363c-.926 0-1.447 1.216-1.666 1.962l.788-.244c.187-.978.63-1.468 1.043-1.662a.3.3 0 0 0-.165-.056"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamShopifySquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShoppingBagIcon],svg[jam-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 0 0-1-1zm2-2V5a5 5 0 1 1 10 0v3h2a3 3 0 0 1 3 3v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-3a3 3 0 0 1 3-3zm2 0h6V5a3 3 0 0 0-6 0z"></svg:path>`,
})
export class JamShoppingBagIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShoppingBagAltIcon],svg[jam-shopping-bag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8zm0-2V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3h2v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6zm2 0h6V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"></svg:path>`,
})
export class JamShoppingBagAltIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShoppingBagAltFIcon],svg[jam-shopping-bag-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3h2v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6zm2 0h6V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"></svg:path>`,
})
export class JamShoppingBagAltFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShoppingBagFIcon],svg[jam-shopping-bag-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V5a5 5 0 1 1 10 0v3h2a3 3 0 0 1 3 3v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-3a3 3 0 0 1 3-3zm2 0h6V5a3 3 0 0 0-6 0z"></svg:path>`,
})
export class JamShoppingBagFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShoppingCartIcon],svg[jam-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4m7 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4M.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.92 1.92 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923z"></svg:path>`,
})
export class JamShoppingCartIcon {
  readonly viewBox = input("-3 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamShuffleIcon],svg[jam-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.548 4.837L16.875 7.51a1 1 0 0 1-1.415-1.414L16.556 5H15.1a5.22 5.22 0 0 0-5.089 4.058A5.264 5.264 0 0 0 15.105 13h1.502l-1.147-1.147a1 1 0 0 1 1.415-1.414l2.828 2.828a1 1 0 0 1 .282.562a1.01 1.01 0 0 1-.437 1.008l-2.673 2.673a1 1 0 0 1-1.415-1.414L16.556 15h-1.451a7.26 7.26 0 0 1-6.114-3.34A7.22 7.22 0 0 1 2.901 15H1a1 1 0 0 1 0-2h1.901a5.22 5.22 0 0 0 5.06-3.936A5.26 5.26 0 0 0 2.836 5H1a1 1 0 1 1 0-2h1.836a7.26 7.26 0 0 1 6.143 3.387A7.22 7.22 0 0 1 15.1 3h1.508L15.46 1.853A1 1 0 1 1 16.875.439l2.828 2.828a1 1 0 0 1 .282.562a1.01 1.01 0 0 1-.437 1.008"></svg:path>`,
})
export class JamShuffleIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSignalIcon],svg[jam-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m4-4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1m4-4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m4-2a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamSignalIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSitemapIcon],svg[jam-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14v4h4v-4zm12-3H6a1 1 0 0 0-1 1h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1a3 3 0 0 1 3-3h3V8H8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v1h3a3 3 0 0 1 3 3h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1a1 1 0 0 0-1-1M8 2v4h4V2zm6 12v4h4v-4z"></svg:path>`,
})
export class JamSitemapIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSitemapFIcon],svg[jam-sitemap-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 12.858h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m6-12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m6 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path><svg:path d="M9 9.858v-2h2v4H6a1 1 0 0 0-1 1v.935H3v-.935a3 3 0 0 1 3-3z"></svg:path><svg:path d="M10 11.858v-2h4a3 3 0 0 1 3 3v1.02h-2v-1.02a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class JamSitemapFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSkullIcon],svg[jam-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h2a1 1 0 0 0 1-1v-2.07l1.065-.563A5.5 5.5 0 0 0 18 9.5v-2A5.5 5.5 0 0 0 12.5 2h-5A5.5 5.5 0 0 0 2 7.5v2a5.5 5.5 0 0 0 2.935 4.867L6 14.93V17a1 1 0 0 0 1 1h2v-2a1 1 0 0 1 2 0zm5-1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.865A7.5 7.5 0 0 1 0 9.5v-2A7.5 7.5 0 0 1 7.5 0h5A7.5 7.5 0 0 1 20 7.5v2a7.5 7.5 0 0 1-4 6.635zM6 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4m8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamSkullIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSkullFIcon],svg[jam-skull-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17.858a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.865a7.5 7.5 0 0 1-4-6.635v-2a7.5 7.5 0 0 1 7.5-7.5h5a7.5 7.5 0 0 1 7.5 7.5v2a7.5 7.5 0 0 1-4 6.635zm-10-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4 4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamSkullFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSkypeIcon],svg[jam-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.126 11.425A9.26 9.26 0 0 0 8.534.834A5.596 5.596 0 0 0 .833 8.535a9.26 9.26 0 0 0 10.591 10.592c.854.525 1.86.831 2.939.831a5.596 5.596 0 0 0 4.763-8.534zm-4.75 2.766q-.59.846-1.72 1.321q-1.129.476-2.672.476q-1.85 0-3.058-.651a3.96 3.96 0 0 1-1.393-1.252q-.537-.784-.539-1.532c0-.294.112-.55.33-.759c.221-.21.505-.315.84-.315q.414 0 .704.247q.285.245.481.716q.236.548.508.912q.27.36.762.597q.487.236 1.297.236q1.11-.001 1.796-.476c.46-.318.68-.706.68-1.174c0-.374-.118-.67-.363-.902q-.368-.351-.96-.537a17 17 0 0 0-1.596-.4q-1.343-.293-2.252-.685q-.911-.393-1.45-1.074q-.54-.687-.539-1.7q0-.965.568-1.716q.57-.751 1.64-1.152t2.51-.4q1.152 0 1.994.265q.84.267 1.4.707q.558.443.818.93q.26.49.26.957q-.002.436-.33.782c-.22.23-.499.347-.825.346q-.443.002-.685-.211c-.156-.14-.32-.36-.497-.67q-.336-.645-.804-1.005c-.304-.235-.805-.358-1.502-.356q-.966 0-1.55.39c-.392.261-.58.565-.58.92c0 .224.065.412.194.573q.195.244.547.421q.353.18.713.28q.364.104 1.204.3q1.051.228 1.909.504q.855.276 1.46.674q.607.398.947 1.011q.342.614.342 1.495q0 1.062-.59 1.907z"></svg:path>`,
})
export class JamSkypeIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSkypeCircleIcon],svg[jam-skype-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M14.583 10.724a4.64 4.64 0 0 0-5.307-5.307a2.804 2.804 0 0 0-3.858 3.859a4.64 4.64 0 0 0 5.307 5.307a2.804 2.804 0 0 0 3.859-3.859zm-2.38 1.386q-.296.424-.862.662q-.565.24-1.339.239q-.926 0-1.532-.327a2 2 0 0 1-.698-.627q-.27-.393-.27-.768a.5.5 0 0 1 .166-.38a.6.6 0 0 1 .42-.158a.53.53 0 0 1 .353.124a.94.94 0 0 1 .241.359q.119.274.255.457q.135.18.381.299q.245.118.65.118q.556 0 .9-.238c.23-.16.341-.354.341-.589a.6.6 0 0 0-.182-.452a1.2 1.2 0 0 0-.48-.269a9 9 0 0 0-.8-.2a6.3 6.3 0 0 1-1.129-.343a1.8 1.8 0 0 1-.727-.538q-.27-.345-.27-.852q0-.483.285-.86q.285-.375.822-.577q.535-.2 1.257-.2q.577 0 .999.132q.42.134.702.355q.28.221.41.466t.13.479a.56.56 0 0 1-.166.392a.55.55 0 0 1-.413.173q-.222.001-.343-.106q-.116-.104-.25-.335a1.5 1.5 0 0 0-.402-.504c-.152-.118-.403-.18-.752-.178q-.485 0-.777.195c-.197.131-.29.283-.29.462q0 .166.096.286a.8.8 0 0 0 .275.211q.176.09.357.141q.182.051.603.15q.527.114.956.253q.429.138.732.337q.304.2.475.507t.17.749q0 .531-.294.955"></svg:path></svg:g>`,
})
export class JamSkypeCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSkypeSquareIcon],svg[jam-skype-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.583 10.724a4.64 4.64 0 0 0-5.307-5.307a2.804 2.804 0 0 0-3.858 3.859a4.64 4.64 0 0 0 5.307 5.307a2.804 2.804 0 0 0 3.859-3.859zm-2.38 1.386q-.296.424-.862.662q-.565.24-1.339.239q-.926 0-1.532-.327a2 2 0 0 1-.698-.627q-.27-.393-.27-.768a.5.5 0 0 1 .166-.38a.6.6 0 0 1 .42-.158a.53.53 0 0 1 .353.124a.94.94 0 0 1 .241.359q.119.274.255.457q.135.18.381.299q.245.118.65.118q.556 0 .9-.238c.23-.16.341-.354.341-.589a.6.6 0 0 0-.182-.452a1.2 1.2 0 0 0-.48-.269a9 9 0 0 0-.8-.2a6.3 6.3 0 0 1-1.129-.343a1.8 1.8 0 0 1-.727-.538q-.27-.345-.27-.852q0-.483.285-.86q.285-.375.822-.577q.535-.2 1.257-.2q.577 0 .999.132q.42.134.702.355q.28.221.41.466t.13.479a.56.56 0 0 1-.166.392a.55.55 0 0 1-.413.173q-.222.001-.343-.106q-.116-.104-.25-.335a1.5 1.5 0 0 0-.402-.504c-.152-.118-.403-.18-.752-.178q-.485 0-.777.195c-.197.131-.29.283-.29.462q0 .166.096.286a.8.8 0 0 0 .275.211q.176.09.357.141q.182.051.603.15q.527.114.956.253q.429.138.732.337q.304.2.475.507t.17.749q0 .531-.294.955"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamSkypeSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSlackIcon],svg[jam-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.874 10.725a1.777 1.777 0 0 0-2.24-1.143l-1.792.583l-1.217-3.75l1.792-.583a1.782 1.782 0 0 0-1.1-3.39l-1.79.585l-.583-1.795a1.776 1.776 0 0 0-2.24-1.144a1.78 1.78 0 0 0-1.141 2.245l.582 1.795l-3.742 1.219C6.05 4.255 5.82 3.552 5.82 3.552a1.777 1.777 0 0 0-2.24-1.144a1.78 1.78 0 0 0-1.142 2.244l.583 1.796l-1.85.602A1.78 1.78 0 0 0 .07 9.218c.272.945 1.274 1.521 2.2 1.22l1.85-.603l1.216 3.75l-1.849.603a1.784 1.784 0 0 0-1.103 2.167c.272.945 1.274 1.523 2.2 1.22c.008-.002.736-.238 1.851-.602l.601 1.852A1.78 1.78 0 0 0 9.2 19.93c.943-.272 1.52-1.276 1.217-2.205l-.6-1.852l3.743-1.219l.601 1.853a1.78 1.78 0 0 0 2.163 1.105c.944-.273 1.52-1.277 1.218-2.205l-.601-1.853l1.791-.584a1.783 1.783 0 0 0 1.142-2.245m-11.156 1.76l-1.216-3.75l3.742-1.218l1.217 3.75z"></svg:path>`,
})
export class JamSlackIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSlackCircleIcon],svg[jam-slack-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.956 10.362a.89.89 0 0 0-1.122-.571l-.898.291c-.198-.612-.41-1.263-.61-1.875l.898-.291a.89.89 0 1 0-.55-1.695l-.898.292l-.292-.897a.89.89 0 1 0-1.693.55l.292.898l-1.875.61l-.292-.898a.89.89 0 0 0-1.694.55l.292.898l-.926.301a.89.89 0 0 0-.553 1.084c.136.472.638.76 1.103.61l.926-.302l.61 1.875l-.927.302a.89.89 0 0 0-.553 1.083c.137.473.639.762 1.103.61c.004 0 .368-.119.927-.3l.301.925a.89.89 0 0 0 1.084.553c.472-.136.761-.638.61-1.103c-.001-.003-.12-.367-.3-.926c.612-.199 1.263-.41 1.874-.61l.301.927a.89.89 0 0 0 1.084.553c.473-.137.761-.639.61-1.103l-.301-.926l.897-.292a.89.89 0 0 0 .572-1.123m-5.588.88l-.61-1.875c.613-.198 1.264-.41 1.875-.609l.61 1.875z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamSlackCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSlackSquareIcon],svg[jam-slack-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.956 10.362a.89.89 0 0 0-1.122-.571l-.898.291c-.198-.612-.41-1.263-.61-1.875l.898-.291a.89.89 0 1 0-.55-1.695l-.898.292l-.292-.897a.89.89 0 1 0-1.693.55l.292.898l-1.875.61l-.292-.898a.89.89 0 0 0-1.694.55l.292.898l-.926.301a.89.89 0 0 0-.553 1.084c.136.472.638.76 1.103.61l.926-.302l.61 1.875l-.927.302a.89.89 0 0 0-.553 1.083c.137.473.639.762 1.103.61c.004 0 .368-.119.927-.3l.301.925a.89.89 0 0 0 1.084.553c.472-.136.761-.638.61-1.103c-.001-.003-.12-.367-.3-.926c.612-.199 1.263-.41 1.874-.61l.301.927a.89.89 0 0 0 1.084.553c.473-.137.761-.639.61-1.103l-.301-.926l.897-.292a.89.89 0 0 0 .572-1.123m-5.588.88l-.61-1.875c.613-.198 1.264-.41 1.875-.609l.61 1.875z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamSlackSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSmileyIcon],svg[jam-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3.92-4.606a1 1 0 1 1 1.84-.788a2.264 2.264 0 0 0 4.16 0a1 1 0 1 1 1.84.788a4.264 4.264 0 0 1-7.84 0M7 6a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamSmileyIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSmileyFIcon],svg[jam-smiley-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20.858c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-3.92-6.606a4.264 4.264 0 0 0 7.84 0a1 1 0 1 0-1.84-.788a2.264 2.264 0 0 1-4.16 0a1 1 0 1 0-1.84.788M7 6.858a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamSmileyFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSnapchatIcon],svg[jam-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.899 7.75q.499-.112.501-.164l.1-.045a1 1 0 0 1 .406-.082c.152 0 .304.028.435.082c.391.139.636.424.642.744c.003.131-.037.334-.242.545c-.173.176-.433.332-.798.476a5 5 0 0 1-.292.099c-.37.117-.93.295-1.076.637c-.075.174-.043.403.105.703c.048.116 1.253 2.855 3.927 3.295a.465.465 0 0 1 .391.485a.6.6 0 0 1-.05.206c-.096.223-.317.411-.676.578c-.44.203-1.097.373-1.956.508c-.043.083-.09.295-.119.428a7 7 0 0 1-.115.465c-.071.244-.259.384-.536.384c-.116 0-.266-.02-.46-.057a5.3 5.3 0 0 0-1.049-.11q-.367 0-.75.063c-.49.081-.912.379-1.402.724c-.715.503-1.525 1.075-2.763 1.075a2 2 0 0 1-.144-.004l-.101.004c-1.237 0-2.047-.572-2.762-1.077c-.49-.345-.912-.642-1.402-.723a4.6 4.6 0 0 0-.75-.064c-.438 0-.791.069-1.048.119c-.177.033-.328.063-.46.063c-.35 0-.484-.212-.537-.39a6 6 0 0 1-.115-.468c-.031-.142-.076-.348-.12-.43c-.858-.134-1.516-.305-1.956-.51c-.36-.165-.581-.354-.677-.58a.6.6 0 0 1-.05-.203a.467.467 0 0 1 .392-.487a4.5 4.5 0 0 0 1.706-.664a5.6 5.6 0 0 0 1.215-1.073a6.6 6.6 0 0 0 1.018-1.58q.205-.417.095-.68c-.146-.342-.708-.52-1.078-.637c-.106-.034-.207-.065-.292-.099q-.487-.192-.745-.426C2 8.597 2 8.319 2.026 8.179c.041-.214.191-.405.424-.542a1.2 1.2 0 0 1 .598-.167a.8.8 0 0 1 .339.07q.108.051.212.09q.003.047.414.123q.14.026.265.026a.8.8 0 0 0 .328-.062l-.028-.446c-.085-1.352-.191-3.036.257-4.035A5.5 5.5 0 0 1 6.053 1.49c.423-.4.913-.724 1.459-.964A5.8 5.8 0 0 1 9.798.042l.394-.003c.445 0 1.333.062 2.284.482a5.1 5.1 0 0 1 1.464.965a5.4 5.4 0 0 1 1.223 1.751c.448 1 .342 2.684.255 4.038l-.003.057q-.014.2-.024.387a.8.8 0 0 0 .276.06q.11-.006.232-.03z"></svg:path>`,
})
export class JamSnapchatIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSnapchatCircleIcon],svg[jam-snapchat-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M14.804 12.292c-1.337-.22-1.94-1.59-1.964-1.647q-.11-.223-.052-.352c.073-.171.353-.26.538-.318l.146-.05a1.1 1.1 0 0 0 .399-.238a.38.38 0 0 0 .121-.273c-.003-.16-.126-.302-.321-.371A.6.6 0 0 0 13.453 9a.5.5 0 0 0-.202.042a1.1 1.1 0 0 1-.417.118a.4.4 0 0 1-.138-.03l.012-.193l.002-.029c.043-.676.096-1.518-.128-2.018a2.7 2.7 0 0 0-.612-.876a2.6 2.6 0 0 0-.732-.483a2.9 2.9 0 0 0-1.142-.24l-.197.001a2.9 2.9 0 0 0-1.143.241a2.6 2.6 0 0 0-.73.482a2.7 2.7 0 0 0-.609.874c-.223.5-.17 1.341-.128 2.018l.014.223a.4.4 0 0 1-.164.03q-.19 0-.445-.119a.4.4 0 0 0-.17-.035a.6.6 0 0 0-.3.084a.41.41 0 0 0-.211.27c-.013.07-.013.21.142.351q.13.117.373.213q.065.025.146.05c.185.058.466.147.539.318q.055.132-.048.34c-.022.052-.181.41-.508.79a2.8 2.8 0 0 1-.608.537a2.2 2.2 0 0 1-.853.331a.233.233 0 0 0-.196.244q.003.053.025.102q.07.168.339.29q.332.154.978.255c.022.04.044.144.06.215q.023.112.057.234c.026.089.094.195.268.195c.067 0 .142-.015.23-.032c.13-.025.305-.06.525-.06q.184 0 .375.033c.245.04.456.189.7.361c.358.253.763.539 1.382.539l.05-.002l.072.002c.619 0 1.024-.286 1.382-.538c.245-.172.456-.321.7-.362a2.3 2.3 0 0 1 .9.024q.144.028.23.028c.139 0 .233-.07.268-.192q.034-.118.058-.232c.014-.067.038-.173.06-.214q.645-.102.977-.254c.18-.084.29-.178.339-.29a.3.3 0 0 0 .025-.102a.233.233 0 0 0-.196-.243z"></svg:path></svg:g>`,
})
export class JamSnapchatCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSnapchatSquareIcon],svg[jam-snapchat-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.804 12.292c-1.337-.22-1.94-1.59-1.964-1.647q-.11-.223-.052-.352c.073-.171.353-.26.538-.318l.146-.05a1.1 1.1 0 0 0 .399-.238a.38.38 0 0 0 .121-.273c-.003-.16-.126-.302-.321-.371A.6.6 0 0 0 13.453 9a.5.5 0 0 0-.202.042a1.1 1.1 0 0 1-.417.118a.4.4 0 0 1-.138-.03l.012-.193l.002-.029c.043-.676.096-1.518-.128-2.018a2.7 2.7 0 0 0-.612-.876a2.6 2.6 0 0 0-.732-.483a2.9 2.9 0 0 0-1.142-.24l-.197.001a2.9 2.9 0 0 0-1.143.241a2.6 2.6 0 0 0-.73.482a2.7 2.7 0 0 0-.609.874c-.223.5-.17 1.341-.128 2.018l.014.223a.4.4 0 0 1-.164.03q-.19 0-.445-.119a.4.4 0 0 0-.17-.035a.6.6 0 0 0-.3.084a.41.41 0 0 0-.211.27c-.013.07-.013.21.142.351q.13.117.373.213q.065.025.146.05c.185.058.466.147.539.318q.055.132-.048.34c-.022.052-.181.41-.508.79a2.8 2.8 0 0 1-.608.537a2.2 2.2 0 0 1-.853.331a.233.233 0 0 0-.196.244q.003.053.025.102q.07.168.339.29q.332.154.978.255c.022.04.044.144.06.215q.023.112.057.234c.026.089.094.195.268.195c.067 0 .142-.015.23-.032c.13-.025.305-.06.525-.06q.184 0 .375.033c.245.04.456.189.7.361c.358.253.763.539 1.382.539l.05-.002l.072.002c.619 0 1.024-.286 1.382-.538c.245-.172.456-.321.7-.362a2.3 2.3 0 0 1 .9.024q.144.028.23.028c.139 0 .233-.07.268-.192q.034-.118.058-.232c.014-.067.038-.173.06-.214q.645-.102.977-.254c.18-.084.29-.178.339-.29a.3.3 0 0 0 .025-.102a.233.233 0 0 0-.196-.243z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamSnapchatSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSnowboardIcon],svg[jam-snowboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.51 1.527a4.416 4.416 0 0 1-.305 6.522A77 77 0 0 0 8.061 18.193a4.416 4.416 0 0 1-6.522.305a4.39 4.39 0 0 1 .317-6.499A74 74 0 0 0 12.01 1.844a4.39 4.39 0 0 1 6.499-.317zm-1.415 1.414a2.39 2.39 0 0 0-3.54.173a76 76 0 0 1-10.43 10.43a2.392 2.392 0 0 0-.005 3.691a2.416 2.416 0 0 0 3.401-.318A79 79 0 0 1 16.93 6.51a2.416 2.416 0 0 0 .166-3.568zM11.438 8.57a1 1 0 1 1 1.415-1.414a1 1 0 0 1-1.415 1.414m-4.95 4.95a1 1 0 1 1 1.415-1.415a1 1 0 0 1-1.414 1.415z"></svg:path>`,
})
export class JamSnowboardIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSnowboardFIcon],svg[jam-snowboard-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.504 1.47a3.61 3.61 0 0 1-.263 5.34q-4.646 3.811-6.101 5.266t-5.266 6.101a3.61 3.61 0 0 1-5.34.263a3.48 3.48 0 0 1 .291-5.183A72.4 72.4 0 0 0 13.321 1.761a3.48 3.48 0 0 1 5.183-.291m-7.071 7.07a1 1 0 1 0 1.414-1.413a1 1 0 0 0-1.414 1.414zM7.19 12.785a1 1 0 1 0 1.414-1.415a1 1 0 0 0-1.414 1.415"></svg:path>`,
})
export class JamSnowboardFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSnowflakeIcon],svg[jam-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.126V1a1 1 0 1 1 2 0v5.126c.367.094.714.24 1.032.428l2.21-2.21a1 1 0 1 1 1.415 1.413l-2.21 2.211c.187.318.333.665.427 1.032H19a1 1 0 0 1 0 2h-5.126a4 4 0 0 1-.428 1.032l2.21 2.21a1 1 0 1 1-1.413 1.415l-2.211-2.21a4 4 0 0 1-1.032.427V19a1 1 0 0 1-2 0v-5.126a4 4 0 0 1-1.032-.428l-2.21 2.21a1 1 0 0 1-1.415-1.413l2.21-2.211A4 4 0 0 1 6.127 11H1a1 1 0 0 1 0-2h5.126a4 4 0 0 1 .428-1.032l-2.21-2.21a1 1 0 0 1 1.413-1.415l2.211 2.21A4 4 0 0 1 9 6.127zM10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-1 5.318l-.393.393a.985.985 0 0 1-1.393-1.393L9 14.532zm2-2.786l1.786 1.786a.985.985 0 0 1-1.393 1.393L11 17.318zm0-11.85l.393-.393a.985.985 0 0 1 1.393 1.393L11 5.468zM9 5.468L7.214 3.682a.985.985 0 0 1 1.393-1.393L9 2.682zM17.318 11l.393.393a.985.985 0 0 1-1.393 1.393L14.532 11zm-2.786-2l1.786-1.786a.985.985 0 0 1 1.393 1.393L17.318 9zM2.682 9l-.393-.393a.985.985 0 0 1 1.393-1.393L5.468 9zm2.786 2l-1.786 1.786a.985.985 0 0 1-1.393-1.393L2.682 11z"></svg:path>`,
})
export class JamSnowflakeIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSoundcloudIcon],svg[jam-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.982 6.362c-.08-1.218-1.032-2.196-2.194-2.255a2.2 2.2 0 0 0-1.222.292C16.518 1.974 14.632.023 12.311.023c-.615 0-1.198.137-1.725.382a.33.33 0 0 0-.186.303v7.925c0 .183.142.332.316.332h6.957c1.333 0 2.402-1.183 2.31-2.603zM9.785.536a.326.326 0 0 0-.318.334v7.752c0 .184.142.334.318.334c.175 0 .318-.15.318-.334V.87a.326.326 0 0 0-.318-.334m-1.052.824a.326.326 0 0 0-.318.334v6.928c0 .184.143.334.318.334s.318-.15.318-.334V1.694a.326.326 0 0 0-.318-.334m-1.052.376a.326.326 0 0 0-.318.334v6.552c0 .184.143.334.318.334s.318-.15.318-.334V2.07a.326.326 0 0 0-.318-.334M6.63 1.235a.326.326 0 0 0-.319.334v7.053c0 .184.143.334.318.334s.318-.15.318-.334V1.57a.326.326 0 0 0-.318-.334zm-1.053.334a.326.326 0 0 0-.318.334v6.72c0 .183.143.333.318.333s.318-.15.318-.334v-6.72a.326.326 0 0 0-.318-.333m-1.052.668a.326.326 0 0 0-.317.334v6.051c0 .184.142.334.317.334s.318-.15.318-.334V2.571a.326.326 0 0 0-.318-.334M3.474 3.53a.326.326 0 0 0-.318.334v4.758c0 .184.142.334.318.334c.175 0 .317-.15.317-.334V3.864a.326.326 0 0 0-.317-.333zm-1.052.543a.326.326 0 0 0-.318.334v4.215c0 .184.142.334.318.334c.175 0 .318-.15.318-.334V4.407a.326.326 0 0 0-.318-.334m-1.052.125a.326.326 0 0 0-.318.333v3.967c0 .184.142.333.318.333c.175 0 .318-.15.318-.333V4.53a.326.326 0 0 0-.318-.333zM.318 5.07A.326.326 0 0 0 0 5.402v2.285c0 .185.142.334.318.334c.175 0 .318-.15.318-.334V5.403a.326.326 0 0 0-.318-.334z"></svg:path>`,
})
export class JamSoundcloudIcon {
  readonly viewBox = input("-2 -7.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSpeakerIcon],svg[jam-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm4 15a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamSpeakerIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSpeakerFIcon],svg[jam-speaker-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m4 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8M7 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamSpeakerFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSpellCheckIcon],svg[jam-spell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.54 6.002H2.457L1.95 7.39c-.17.466-.734.722-1.26.57c-.522-.15-.81-.651-.64-1.118L2.097 1.23C2.437.296 3.565-.215 4.615.087c.61.176 1.088.6 1.285 1.142L7.948 6.84c.17.467-.118.967-.643 1.119c-.525.15-1.089-.105-1.259-.571zm-.73-2l-.812-2.226l-.811 2.226zm2.536 7.583l4.948-4.952a.999.999 0 1 1 1.413 1.415l-5.654 5.659a1 1 0 0 1-1.414 0l-2.827-2.83a1.001 1.001 0 0 1 1.414-1.414z"></svg:path>`,
})
export class JamSpellCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSpotifyIcon],svg[jam-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.992 0C4.474 0 0 4.474 0 9.992s4.474 9.992 9.992 9.992s9.992-4.474 9.992-9.992S15.51 0 9.992 0m4.348 15.683c-.127.329-.355.512-.59.512a.52.52 0 0 1-.344-.141c-1.796-1.588-3.87-1.843-5.294-1.778c-1.578.073-2.735.544-2.747.549c-.363.15-.74-.174-.839-.724c-.1-.55.114-1.119.477-1.27c.052-.022 1.297-.534 3.029-.62a9 9 0 0 1 2.917.32a8.1 8.1 0 0 1 3.146 1.737c.326.289.436.922.245 1.415m1.27-3.063c-.15.329-.42.512-.699.512a.68.68 0 0 1-.407-.141c-2.127-1.588-4.584-1.843-6.271-1.778c-1.87.073-3.24.544-3.253.549c-.431.15-.876-.174-.995-.724c-.118-.55.135-1.119.566-1.27c.061-.022 1.536-.534 3.587-.62c1.208-.051 2.37.057 3.456.32a10.2 10.2 0 0 1 3.726 1.737c.386.288.516.922.29 1.415m.782-2.996a.96.96 0 0 1-.5-.142C10.835 6.404 4.276 8.234 4.21 8.252c-.528.153-1.075-.17-1.22-.721s.165-1.12.693-1.272c.076-.022 1.885-.534 4.4-.62a18.6 18.6 0 0 1 4.24.32c1.686.333 3.223.917 4.57 1.738c.474.288.633.921.357 1.414a.99.99 0 0 1-.858.513"></svg:path>`,
})
export class JamSpotifyIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSquareIcon],svg[jam-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSquareFIcon],svg[jam-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 .565h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamSquareFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSquarespaceIcon],svg[jam-squarespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.305 7.16L9.3 1.134a3.837 3.837 0 0 1 5.447 0a.987.987 0 0 1-.027 1.365a.96.96 0 0 1-1.363 0l-.09-.105a1.92 1.92 0 0 0-2.606.11l-6.128 6.16c-.403.374-1.013.374-1.388-.004a.97.97 0 0 1 .161-1.5zm13.456.131a.96.96 0 0 0-1.493.163L9.3 13.456a1.92 1.92 0 0 1-2.724 0l-.027-.005a.96.96 0 0 0-1.362 0a.97.97 0 0 0 .154 1.496a3.84 3.84 0 0 0 5.32-.123l6.101-6.164a.97.97 0 0 0 0-1.369zm-9.37 3.976a.97.97 0 0 0-.161 1.5c.375.377.984.377 1.388.004l6.128-6.161a1.92 1.92 0 0 1 2.723 0a1.94 1.94 0 0 1 0 2.738l-5.81 5.87a1.92 1.92 0 0 0 2.723 0l4.45-4.5a3.89 3.89 0 0 0 0-5.477a3.84 3.84 0 0 0-5.448 0L7.39 11.267zm-.816-.55l6.1-6.164a.97.97 0 0 0 0-1.369a.96.96 0 0 0-1.492.163L5.213 9.35a1.92 1.92 0 0 1-2.723 0a1.94 1.94 0 0 1 0-2.739L8.301.742a1.92 1.92 0 0 0-2.724 0l-4.449 4.5a3.887 3.887 0 0 0 0 5.475a3.836 3.836 0 0 0 5.447 0"></svg:path>`,
})
export class JamSquarespaceIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSquarespaceCircleIcon],svg[jam-squarespace-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M5.987 9.513L9.591 5.89a2.307 2.307 0 0 1 3.275 0a.593.593 0 0 1-.017.82a.577.577 0 0 1-.819 0l-.054-.063a1.153 1.153 0 0 0-1.567.066l-3.684 3.704a.6.6 0 0 1-.835-.002a.584.584 0 0 1 .097-.902m8.09.079a.577.577 0 0 0-.897.098l-3.59 3.608a1.154 1.154 0 0 1-1.637 0l-.016-.003a.577.577 0 0 0-.819 0a.584.584 0 0 0 .092.9c.91.834 2.32.81 3.2-.074l3.667-3.706a.585.585 0 0 0 0-.823m-5.634 2.39a.583.583 0 0 0-.097.902a.6.6 0 0 0 .835.003l3.685-3.705a1.154 1.154 0 0 1 1.637 0a1.17 1.17 0 0 1 0 1.647l-3.493 3.529a1.154 1.154 0 0 0 1.637 0l2.675-2.706a2.34 2.34 0 0 0 0-3.293a2.31 2.31 0 0 0-3.275 0zm-.49-.33l3.668-3.706a.584.584 0 0 0 0-.823a.576.576 0 0 0-.897.098l-3.59 3.608a1.153 1.153 0 0 1-1.637 0a1.17 1.17 0 0 1 0-1.647l3.494-3.528a1.153 1.153 0 0 0-1.638 0L4.678 8.359a2.337 2.337 0 0 0 0 3.293c.905.91 2.371.91 3.275 0"></svg:path></svg:g>`,
})
export class JamSquarespaceCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSquarespaceSquareIcon],svg[jam-squarespace-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.987 9.513L9.591 5.89a2.307 2.307 0 0 1 3.275 0a.593.593 0 0 1-.017.82a.577.577 0 0 1-.819 0l-.054-.063a1.153 1.153 0 0 0-1.567.066l-3.684 3.704a.6.6 0 0 1-.835-.002a.584.584 0 0 1 .097-.902m8.09.079a.577.577 0 0 0-.897.098l-3.59 3.608a1.154 1.154 0 0 1-1.637 0l-.016-.003a.577.577 0 0 0-.819 0a.584.584 0 0 0 .092.9c.91.834 2.32.81 3.2-.074l3.667-3.706a.585.585 0 0 0 0-.823m-5.634 2.39a.583.583 0 0 0-.097.902a.6.6 0 0 0 .835.003l3.685-3.705a1.154 1.154 0 0 1 1.637 0a1.17 1.17 0 0 1 0 1.647l-3.493 3.529a1.154 1.154 0 0 0 1.637 0l2.675-2.706a2.34 2.34 0 0 0 0-3.293a2.31 2.31 0 0 0-3.275 0zm-.49-.33l3.668-3.706a.584.584 0 0 0 0-.823a.576.576 0 0 0-.897.098l-3.59 3.608a1.153 1.153 0 0 1-1.637 0a1.17 1.17 0 0 1 0-1.647l3.494-3.528a1.153 1.153 0 0 0-1.638 0L4.678 8.359a2.337 2.337 0 0 0 0 3.293c.905.91 2.371.91 3.275 0"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamSquarespaceSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStackoverflowIcon],svg[jam-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.492 18.136v-5.272h1.665v7.022H.13v-7.022h1.665v5.272z"></svg:path><svg:path d="m3.632 12.364l8.173 1.795l.346-1.727l-8.173-1.796zm1.082-4.091l7.567 3.704l.692-1.59l-7.568-3.728zm2.097-3.91l6.421 5.614l1.06-1.34L7.87 3.022l-1.06 1.34zM10.962.206L9.622 1.25l4.973 7.045l1.34-1.045zM3.46 16.364h8.346v-1.75H3.46z"></svg:path></svg:g>`,
})
export class JamStackoverflowIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStackoverflowCircleIcon],svg[jam-stackoverflow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M12.746 14.068v-2.636h.832v3.511H6.065v-3.511h.832v2.636z"></svg:path><svg:path d="m7.816 11.182l4.087.898l.173-.864l-4.087-.898zm.54-2.046l3.785 1.853l.345-.796L8.703 8.33zm1.05-1.954l3.21 2.807l.53-.67l-3.21-2.808zm2.075-2.08l-.67.523l2.486 3.523l.67-.523zm-3.751 8.08h4.173v-.875H7.73z"></svg:path></svg:g>`,
})
export class JamStackoverflowCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStackoverflowSquareIcon],svg[jam-stackoverflow-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.746 14.068v-2.636h.832v3.511H6.065v-3.511h.832v2.636z"></svg:path><svg:path d="m7.816 11.182l4.087.898l.173-.864l-4.087-.898zm.54-2.046l3.785 1.853l.345-.796L8.703 8.33zm1.05-1.954l3.21 2.807l.53-.67l-3.21-2.808zm2.075-2.08l-.67.523l2.486 3.523l.67-.523zm-3.751 8.08h4.173v-.875H7.73z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamStackoverflowSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStampIcon],svg[jam-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18v-2H2v2zM7 14V9a5 5 0 1 1 6 0v5h5a2 2 0 0 1 2 2v4H0v-4a2 2 0 0 1 2-2zm4 0V8.001l.799-.6a3 3 0 1 0-3.598 0l.799.6V14z"></svg:path>`,
})
export class JamStampIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStampFIcon],svg[jam-stamp-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7.465a4 4 0 1 1 4 0V14H8zM2 15h16a2 2 0 0 1 2 2v2H0v-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamStampFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStarIcon],svg[jam-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 13.554l3.517 1.85l-.672-3.917l2.846-2.774l-3.932-.571L10 4.579L8.241 8.142l-3.932.571l2.846 2.774l-.672 3.916zm0 2.26L3.827 19.06l1.179-6.875L.01 7.317l6.902-1.003L10 .06l3.087 6.254l6.902 1.003l-4.995 4.868l1.18 6.875z"></svg:path>`,
})
export class JamStarIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStarFIcon],svg[jam-star-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 16.379l-6.173 3.245l1.179-6.874L.01 7.882l6.902-1.003L10 .624l3.087 6.255l6.902 1.003l-4.995 4.868l1.18 6.874z"></svg:path>`,
})
export class JamStarFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStarFullIcon],svg[jam-star-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 16.207l-6.173 3.246l1.179-6.874L.01 7.71l6.902-1.003L10 .453l3.087 6.254l6.902 1.003l-4.995 4.869l1.18 6.874z"></svg:path>`,
})
export class JamStarFullIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStarHalfIcon],svg[jam-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15.814L3.827 19.06l1.179-6.875L.01 7.317l6.902-1.003L10 .06l3.087 6.254l6.902 1.003l-4.995 4.868l1.18 6.875zm0-2.26l3.517 1.85l-.672-3.917l2.846-2.774l-3.932-.571L10 4.579L8.241 8.142l-3.932.571l2.846 2.774l-.672 3.916zM10 .06l3.087 6.254l6.902 1.003l-4.995 4.868l1.18 6.875L10 15.814z"></svg:path>`,
})
export class JamStarHalfIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStarHalfFIcon],svg[jam-star-half-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.989 0L10 .024V15.76l-.011-.006L3.815 19l1.179-6.874L0 7.257l6.902-1.003z"></svg:path>`,
})
export class JamStarHalfFIcon {
  readonly viewBox = input("0 0 10 19")
  readonly width = input("0.53em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStationIcon],svg[jam-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.922 15.152A6 6 0 0 1 4 10a6 6 0 0 1 3.022-5.21a.2.2 0 0 1 .101-.03a1 1 0 0 1 1.325.946a1 1 0 0 1-.577.907A4 4 0 0 0 6 10c0 1.48.804 2.773 2 3.465v.001a1 1 0 0 1-.989 1.735l-.032-.016l-.011-.007zm6.245-.055a1 1 0 1 1-1.091-1.668a.1.1 0 0 1 .023-.023A4 4 0 0 0 14 10c0-1.48-.804-2.773-2-3.465v-.002a1 1 0 0 1 1.088-1.678A6 6 0 0 1 16 10a6 6 0 0 1-2.833 5.097M10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m2.759 7.608a1 1 0 0 1-.412-1.958a8.004 8.004 0 0 0-.053-15.316a.1.1 0 0 1-.03-.016A1 1 0 1 1 12.941.44C17.03 1.696 20 5.5 20 10c0 4.547-3.034 8.384-7.188 9.6a.2.2 0 0 1-.053.008m-5.613-.021C3.014 18.359 0 14.53 0 10C0 5.479 3 1.658 7.12.421a1 1 0 0 1 .1-.03L7.228.39a1 1 0 0 1 .224-.025a1 1 0 0 1 .27 1.965a8.004 8.004 0 0 0 .013 15.347a1 1 0 1 1-.589 1.91"></svg:path>`,
})
export class JamStationIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStopIcon],svg[jam-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamStopIcon {
  readonly viewBox = input("-4 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStopSignIcon],svg[jam-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.094 16.32A8 8 0 0 0 16.32 5.094zM3.68 14.906L14.906 3.68A8 8 0 0 0 3.68 14.906M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamStopSignIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStoreIcon],svg[jam-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM3.01 8v9.965H5V13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4.965h6.013V8H15c-.768 0-1.47-.289-2-.764A3 3 0 0 1 11 8H9c-.768 0-1.47-.289-2-.764A3 3 0 0 1 5 8zm-2-.754A3 3 0 0 1 0 5V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2c0 .882-.38 1.676-.987 2.225v10.74a2 2 0 0 1-2 2h-7.64A2 2 0 0 1 9 20H7a2 2 0 0 1-.373-.035H3.011a2 2 0 0 1-2-2V7.245zM9 17.966V13H7v4.965h2zM12 2H8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm2 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 9h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamStoreIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStrikethroughIcon],svg[jam-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.657 4.935H1.15a3 3 0 0 1-.15-.94v-.497A3.5 3.5 0 0 1 4.498 0H6a3 3 0 0 1 3 3a1 1 0 1 1-2 0a1 1 0 0 0-1-1H4.498C3.67 2 3 2.67 3 3.498v.497a1 1 0 0 0 .657.94m5.186 2.1c.102.301.157.624.157.96v.528a3.53 3.53 0 0 1-3.528 3.528H4a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v.05a1 1 0 0 0 1 1h1.472C6.316 10.05 7 9.367 7 8.523v-.528a1 1 0 0 0-.72-.96zM.5 5.51h9a.5.5 0 0 1 0 1h-9a.5.5 0 1 1 0-1"></svg:path>`,
})
export class JamStrikethroughIcon {
  readonly viewBox = input("-7 -5.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStumbleuponIcon],svg[jam-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.817 8.219v2.208c0 .743-.6 1.376-1.335 1.363a1.32 1.32 0 0 1-1.29-1.328V8.333a.377.377 0 0 0-.507-.357l-1.158.433a.37.37 0 0 1-.269-.003l-.69-.275a.377.377 0 0 0-.514.354v1.908c0 2.473 1.94 4.536 4.381 4.573c2.486.039 4.52-1.997 4.52-4.504V8.218a.343.343 0 0 0-.34-.344h-2.458a.343.343 0 0 0-.34.345"></svg:path><svg:path d="M11.054 4.334V5.39c0 .157.094.297.238.355l.99.395a.37.37 0 0 0 .27.003l1.394-.522a.38.38 0 0 0 .246-.357v-.896c0-2.34-1.837-4.294-4.15-4.33C7.69.001 5.764 1.928 5.764 4.303v6.124c0 .743-.6 1.376-1.335 1.363a1.32 1.32 0 0 1-1.29-1.328V8.219a.343.343 0 0 0-.34-.345H.34a.343.343 0 0 0-.34.345v2.174c0 2.473 1.94 4.536 4.381 4.573c2.486.039 4.52-1.997 4.52-4.504v-6.16c0-.618.513-1.118 1.13-1.088c.579.03 1.023.534 1.023 1.12"></svg:path></svg:g>`,
})
export class JamStumbleuponIcon {
  readonly viewBox = input("-2 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStumbleuponCircleIcon],svg[jam-stumbleupon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.388 10.155v1.135c0 .382-.301.707-.669.7a.67.67 0 0 1-.646-.682v-1.094a.19.19 0 0 0-.255-.183l-.58.222a.18.18 0 0 1-.134-.001l-.346-.142a.19.19 0 0 0-.258.182v.98c0 1.271.972 2.331 2.196 2.35c1.245.02 2.265-1.026 2.265-2.314v-1.153a.174.174 0 0 0-.17-.177h-1.232a.174.174 0 0 0-.171.177"></svg:path><svg:path d="M10.54 8.208v.542c0 .08.047.153.119.183l.496.203a.18.18 0 0 0 .135.001l.699-.268a.2.2 0 0 0 .123-.184v-.46c0-1.203-.92-2.206-2.08-2.225c-1.179-.018-2.144.972-2.144 2.192v3.147c0 .382-.301.707-.669.7a.67.67 0 0 1-.646-.682v-1.153a.174.174 0 0 0-.17-.177H5.17a.174.174 0 0 0-.171.177v1.118c0 1.27.972 2.33 2.196 2.35c1.245.02 2.265-1.027 2.265-2.315V8.192a.55.55 0 0 1 .566-.56c.29.016.512.275.512.576z"></svg:path></svg:g>`,
})
export class JamStumbleuponCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamStumbleuponSquareIcon],svg[jam-stumbleupon-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.388 10.155v1.135c0 .382-.301.707-.669.7a.67.67 0 0 1-.646-.682v-1.094a.19.19 0 0 0-.255-.183l-.58.222a.18.18 0 0 1-.134-.001l-.346-.142a.19.19 0 0 0-.258.182v.98c0 1.271.972 2.331 2.196 2.35c1.245.02 2.265-1.026 2.265-2.314v-1.153a.174.174 0 0 0-.17-.177h-1.232a.174.174 0 0 0-.171.177"></svg:path><svg:path d="M10.54 8.208v.542c0 .08.047.153.119.183l.496.203a.18.18 0 0 0 .135.001l.699-.268a.2.2 0 0 0 .123-.184v-.46c0-1.203-.92-2.206-2.08-2.225c-1.179-.018-2.144.972-2.144 2.192v3.147c0 .382-.301.707-.669.7a.67.67 0 0 1-.646-.682v-1.153a.174.174 0 0 0-.17-.177H5.17a.174.174 0 0 0-.171.177v1.118c0 1.27.972 2.33 2.196 2.35c1.245.02 2.265-1.027 2.265-2.315V8.192a.55.55 0 0 1 .566-.56c.29.016.512.275.512.576z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamStumbleuponSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSubscriptIcon],svg[jam-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.954 4.5l2.831 2.806a.986.986 0 0 1 0 1.403a1.007 1.007 0 0 1-1.415 0L4.54 5.903L1.707 8.71a1.007 1.007 0 0 1-1.415 0a.986.986 0 0 1 0-1.403L3.123 4.5L.294 1.694a.986.986 0 0 1 0-1.403a1.007 1.007 0 0 1 1.415 0L4.54 3.097L7.37.29a1.007 1.007 0 0 1 1.416 0a.986.986 0 0 1 0 1.403L5.955 4.5ZM14 12.352V14H9.078v-1.014l.101-.246l1.801-1.913c.433-.435.8-.77.93-1.011q.186-.346.184-.587a.42.42 0 0 0-.128-.327a.48.48 0 0 0-.355-.127a.45.45 0 0 0-.357.158c-.106.117-.167.288-.175.525l-.012.338h-1.84l.017-.366c.034-.735.274-1.33.723-1.77c.45-.44 1.03-.66 1.719-.66q.642 0 1.149.275q.51.28.814.8q.3.516.301 1.063c0 .416-.231.849-.46 1.307c-.223.45-.538.876-1.072 1.555l-.118.123l-.255.229z"></svg:path>`,
})
export class JamSubscriptIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSubtractionIcon],svg[jam-subtraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0a7 7 0 1 1-3 13.326A7 7 0 1 1 10 .673A7 7 0 0 1 13 0M7 2a5 5 0 1 0 1.002 9.9A6.97 6.97 0 0 1 6 7c0-1.907.763-3.637 2-4.9A5 5 0 0 0 7 2m6 0a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path>`,
})
export class JamSubtractionIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSunIcon],svg[jam-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2m.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M5.757 14.243a1 1 0 0 1 0 1.414L4.343 17.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 2.929l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343A1 1 0 0 1 4.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414"></svg:path>`,
})
export class JamSunIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSunFIcon],svg[jam-sun-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15.565a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m-9-7h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2m.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M5.757 14.808a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M4.343 3.494l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.908a1 1 0 0 1 1.414-1.414zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414"></svg:path>`,
})
export class JamSunFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSuperscriptIcon],svg[jam-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.708 5.29L4.54 8.098L7.37 5.29a1.007 1.007 0 0 1 1.416 0a.986.986 0 0 1 0 1.403L5.955 9.5l2.83 2.806a.986.986 0 0 1 0 1.403a1.007 1.007 0 0 1-1.415 0l-2.83-2.806l-2.832 2.806a1.007 1.007 0 0 1-1.415 0a.986.986 0 0 1 0-1.403L3.123 9.5L.294 6.694a.986.986 0 0 1 0-1.403a1.007 1.007 0 0 1 1.415 0ZM11.686 0q.642 0 1.149.275q.51.28.814.8c.2.343.301.7.301 1.063c0 .416-.231.849-.46 1.307c-.223.45-.538.876-1.072 1.555l-.118.123l-.255.229H14V7H9.078V5.986l.101-.246l1.801-1.913c.433-.435.8-.77.93-1.011q.186-.346.184-.587a.42.42 0 0 0-.128-.327a.48.48 0 0 0-.355-.127a.45.45 0 0 0-.357.158c-.106.117-.167.288-.175.525l-.012.338h-1.84l.017-.366c.034-.735.274-1.33.723-1.77c.45-.44 1.03-.66 1.719-.66"></svg:path>`,
})
export class JamSuperscriptIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSwitchLeftIcon],svg[jam-switch-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a5 5 0 1 0 0 10h6a5 5 0 0 0 0-10zm0-2h6a7 7 0 0 1 0 14H7A7 7 0 0 1 7 0m0 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamSwitchLeftIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSwitchLeftFIcon],svg[jam-switch-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h8a6 6 0 1 1 0 12H6A6 6 0 1 1 6 0m1 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamSwitchLeftFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSwitchRightIcon],svg[jam-switch-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a5 5 0 1 0 0 10h6a5 5 0 0 0 0-10zm0-2h6a7 7 0 0 1 0 14H7A7 7 0 0 1 7 0m6 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamSwitchRightIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSwitchRightFIcon],svg[jam-switch-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h7a6 6 0 1 1 0 12H6A6 6 0 1 1 6 0m6 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamSwitchRightFIcon {
  readonly viewBox = input("-2.5 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSwordIcon],svg[jam-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.778 10.728l1.414 1.414l8.436-8.435l-.236-1.179l-1.178-.236zM3.95 16.385a1 1 0 0 1-1.414 1.414L1.12 16.385a1 1 0 0 1 1.415-1.414l2.828-2.829l-1.414-1.414a1 1 0 0 1 1.414-1.414L14.556.12l3.536.707l.707 3.536l-9.192 9.192a1 1 0 1 1-1.415 1.415l-1.414-1.415l-2.828 2.829z"></svg:path>`,
})
export class JamSwordIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamSwordFIcon],svg[jam-sword-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.646 14.096a1 1 0 1 1-1.414 1.414l-1.414-1.414l-2.828 2.829a1 1 0 0 1-1.415 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.415l2.829-2.828l-1.414-1.414a1 1 0 0 1 1.414-1.414zm.708-.707L6.11 9.146L14.596.661l3.536.707l.707 3.536z"></svg:path>`,
})
export class JamSwordFIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTabIcon],svg[jam-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v1h-7V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 0h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamTabIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableIcon],svg[jam-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v8h10V4zm0-4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamTableIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableCellIcon],svg[jam-table-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h4V2H2zm0 2v4h4V8zm10-2V2H8v4zm0 2H8v4h4zM2 0h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamTableCellIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableCellMergeIcon],svg[jam-table-cell-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v2h2zm2 0v2h2V2h2v2h2V2zm6 4H6v6h6zm-8 6v-2H2v2zM2 8h2V6H2zm0-8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamTableCellMergeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableColAfterIcon],svg[jam-table-col-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V2H6v10h6v-1a1 1 0 0 1 2 0v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM4 10H2v2h2zm6-6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0V8H8a1 1 0 1 1 0-2h1V5a1 1 0 0 1 1-1M4 6H2v2h2zm0-4H2v2h2z"></svg:path>`,
})
export class JamTableColAfterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableColBeforeIcon],svg[jam-table-col-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12V2H2v1a1 1 0 1 1-2 0V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a1 1 0 0 1 2 0v1zm2 0h2v-2h-2zm2-4V6h-2v2zm0-4V2h-2v2zM3 6V5a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H5v1a1 1 0 1 1-2 0V8H2a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamTableColBeforeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableDeleteIcon],svg[jam-table-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 4v8h10V4zm5 5.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L5.586 8L4.172 6.586a1 1 0 1 1 1.414-1.414L7 6.586l1.414-1.414a1 1 0 1 1 1.414 1.414L8.414 8l1.414 1.414a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class JamTableDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableLeftHeaderIcon],svg[jam-table-left-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v10h8V2zM2 0h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamTableLeftHeaderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableRightHeaderIcon],svg[jam-table-right-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H2v10h8zm2-2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></svg:path>`,
})
export class JamTableRightHeaderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableRowAboveIcon],svg[jam-table-row-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V2h-1a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v6zm0 2h-2v2h2zm-4 2v-2H6v2zm-4 0v-2H2v2zm2-9V2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H8v1a1 1 0 1 1-2 0V5H5a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamTableRowAboveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableRowAfterIcon],svg[jam-table-row-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v6h1a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a1 1 0 0 1 0-2h1V6zm0-2h2V2H2zm4-2v2h2V2zm4 0v2h2V2zm-2 9v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1V8a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2z"></svg:path>`,
})
export class JamTableRowAfterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTableTopHeaderIcon],svg[jam-table-top-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v8h10V4zM0 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class JamTableTopHeaderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTabletIcon],svg[jam-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm5 15a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamTabletIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTabletFIcon],svg[jam-tablet-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m5 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamTabletFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTagIcon],svg[jam-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.014.872l3.448 3.447a2 2 0 0 1 .463 2.103l-1.763 4.812a1 1 0 0 1-.232.363l-8.323 8.323a2 2 0 0 1-2.829 0l-6.364-6.364a2 2 0 0 1 0-2.828l8.333-8.333a1 1 0 0 1 .364-.232L14.913.408a2 2 0 0 1 2.101.464m-6.009 3.094l-8.177 8.176l6.364 6.364l8.168-8.167l1.687-4.605L15.6 2.286zm2.784 3.58a1.5 1.5 0 1 1 2.12-2.121a1.5 1.5 0 0 1-2.12 2.12z"></svg:path>`,
})
export class JamTagIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTagFIcon],svg[jam-tag-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.014.73l3.448 3.447a2 2 0 0 1 .463 2.103l-1.763 4.812a1 1 0 0 1-.232.363l-8.323 8.323a2 2 0 0 1-2.829 0l-6.364-6.364a2 2 0 0 1 0-2.828l8.333-8.333a1 1 0 0 1 .364-.232L14.913.266a2 2 0 0 1 2.101.464M13.79 7.404a1.5 1.5 0 1 0 2.12-2.122a1.5 1.5 0 0 0-2.12 2.122"></svg:path>`,
})
export class JamTagFIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTagsIcon],svg[jam-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.586 15.071L13 13.657l1.414 1.414l6.165-6.165l1.09-3.552l-2.484-2.483l-1.079.336l-1.598-1.598L18.591.96a2 2 0 0 1 2.008.496l2.483 2.483a2 2 0 0 1 .498 2L22.345 9.97l-7.93 7.93l-2.83-2.828zM14.236.75l2.482 2.483a2 2 0 0 1 .498 2l-1.235 4.028l-7.93 7.931l-7.78-7.778L8.17 1.516L12.227.254a2 2 0 0 1 2.008.496zM3.1 9.414l4.95 4.95l6.164-6.165l1.09-3.552l-2.484-2.483l-3.585 1.115zm7.424-2.475a1.5 1.5 0 1 1 2.121-2.121a1.5 1.5 0 0 1-2.12 2.121zm6.886 1.022l.782-2.878q.674.228.917.518a1.5 1.5 0 0 1-.185 2.113q-.435.366-1.514.247"></svg:path>`,
})
export class JamTagsIcon {
  readonly viewBox = input("0 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTagsFIcon],svg[jam-tags-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.963 1.478l2.483 2.483a2 2 0 0 1 .498 2L15.71 9.99l-7.93 7.93L0 10.142l7.899-7.899l4.056-1.26a2 2 0 0 1 2.008.495m-3.71 6.19a1.5 1.5 0 1 0 2.121-2.122a1.5 1.5 0 0 0-2.121 2.121zm7.222 1.047q.813.032 1.178-.273a1.5 1.5 0 0 0 .185-2.113q-.164-.196-.527-.364a2 2 0 0 0-.538-1.848L16.05 2.395l2.269-.706a2 2 0 0 1 2.008.496l2.483 2.483a2 2 0 0 1 .498 2l-1.235 4.028l-7.93 7.931l-2.795-2.794l5.688-5.688z"></svg:path>`,
})
export class JamTagsFIcon {
  readonly viewBox = input("0 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTargetIcon],svg[jam-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-1a7 7 0 1 1 0-14a7 7 0 0 1 0 14m0-2a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-1a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamTargetIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTaskListIcon],svg[jam-task-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm6 7h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-2 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2m0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2m-4.172 5.243L7.95 8.12a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.415 0L3.707 10.95a1 1 0 0 1 1.414-1.414z"></svg:path>`,
})
export class JamTaskListIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTaskListFIcon],svg[jam-task-list-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6m6 9a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zm-2 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm0-8a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2zm-4.172 5.243l-.707-.707a1 1 0 1 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.415 0l2.828-2.828A1 1 0 0 0 7.95 8.12l-2.122 2.122z"></svg:path>`,
})
export class JamTaskListFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTelegramIcon],svg[jam-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m4.442 6c-.381.007-.966.207-3.779 1.362a485 485 0 0 0-5.907 2.512q-.72.283-.753.553c-.044.346.46.453 1.094.657c.517.166 1.213.36 1.575.368q.492.01 1.098-.4q4.139-2.76 4.273-2.789c.063-.014.15-.032.21.02c.059.052.053.15.046.177c-.05.211-2.641 2.538-2.79 2.691l-.072.072c-.55.543-1.105.898-.147 1.521c.866.563 1.37.922 2.26 1.5c.57.368 1.017.805 1.605.752c.271-.025.55-.276.693-1.026c.335-1.77.995-5.608 1.147-7.19a1.7 1.7 0 0 0-.017-.393a.42.42 0 0 0-.144-.27c-.121-.098-.309-.118-.392-.117"></svg:path>`,
})
export class JamTelegramIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTemperatureIcon],svg[jam-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15a5 5 0 1 1-8-4V3a3 3 0 1 1 6 0v8c1.214.912 2 2.364 2 4m-3.201-2.401l-.799-.6V3a1 1 0 1 0-2 0v8.999l-.799.6a3 3 0 1 0 3.598 0M5 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamTemperatureIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTemplateIcon],svg[jam-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h5a1 1 0 0 0 1-1V6H6zm-2 0V6H2v5a1 1 0 0 0 1 1zm8-9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1h10zM3 0h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamTemplateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTerminalIcon],svg[jam-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.243 7.071l-4.95-4.95A1 1 0 1 1 1.707.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414zM6.929 12h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamTerminalIcon {
  readonly viewBox = input("-4 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTextIcon],svg[jam-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1v2a1 1 0 0 1-2 0V2H7v8h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V2H2v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1"></svg:path>`,
})
export class JamTextIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamThunderIcon],svg[jam-thunder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.997 6.968H6.708V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5.923a1 1 0 0 0 .966 1l1.937.061v7.404a.549.549 0 0 0 1.053.216l3.96-9.242a1 1 0 0 0-.92-1.394zM8.708 3v1.968h.289a3 3 0 0 1 2.757 4.181l-3.96 9.243a2.549 2.549 0 0 1-4.891-1.004v-5.466A3 3 0 0 1 0 8.923V3a3 3 0 0 1 3-3h2.708a3 3 0 0 1 3 3"></svg:path>`,
})
export class JamThunderIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamThunderFIcon],svg[jam-thunder-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.708 4.968h1.789a1.5 1.5 0 0 1 1.378 2.09l-3.96 9.243a1.049 1.049 0 0 1-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 0 1 0 7.423V1.5A1.5 1.5 0 0 1 1.5 0h2.708a1.5 1.5 0 0 1 1.5 1.5z"></svg:path>`,
})
export class JamThunderFIcon {
  readonly viewBox = input("-7.5 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTicketIcon],svg[jam-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9H8a1 1 0 1 1 0-2h2V2.001a5 5 0 0 1-8 0V7h2a1 1 0 1 1 0 2H2v8.999a5 5 0 0 1 8 0zM0 20V0h3.17a3.001 3.001 0 0 0 5.66 0H12v20H8.83a3.001 3.001 0 0 0-5.66 0z"></svg:path>`,
})
export class JamTicketIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTicketFIcon],svg[jam-ticket-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9v11H8.83a3.001 3.001 0 0 0-5.66 0H0V9h4a1 1 0 1 0 0-2H0V0h3.17a3.001 3.001 0 0 0 5.66 0H12v7H8a1 1 0 1 0 0 2z"></svg:path>`,
})
export class JamTicketFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamToolsIcon],svg[jam-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 8.654l2.813 2.822l6.332-6.35l-2.814-2.823l-6.332 6.35zm4.441 8.128l2.11-2.117a.993.993 0 0 1 1.408 0a1 1 0 0 1 0 1.411l-2.11 2.117a1 1 0 0 1 0 1.411L6.44 21.015a.993.993 0 0 1-1.407 0l-1.407-1.41a1 1 0 0 1 0-1.412l1.407-1.411a.993.993 0 0 1 1.407 0zm9.146-6.35l6.331-6.35l-1.407-1.412l-6.331 6.35c-.777-.78-.912-1.907-.302-2.52L19.406.956c.61-.612 1.735-.477 2.512.303l1.407 1.41c.778.78.913 1.909.302 2.52l-5.528 5.545c-.61.612-1.735.477-2.512-.303zm-.924 3.866L9.738 9.36l-.704.706l4.925 4.939zm1.407 1.412l-.704.705l1.759 1.764c.194.195.51.195.703 0a.5.5 0 0 0 0-.705zM2.06 5.77a1.5 1.5 0 0 1 .291-1.704l1.407-1.41a1.49 1.49 0 0 1 1.699-.293L6.924.892a1.986 1.986 0 0 1 2.814 0l2.814 2.823a2 2 0 0 1 0 2.822l-1.407 1.411l8.09 8.114a2.5 2.5 0 0 1 0 3.528a2.48 2.48 0 0 1-3.517 0l-8.09-8.114l-1.408 1.411c-.777.78-2.037.78-2.814 0L.592 10.065a2 2 0 0 1 0-2.823l1.467-1.47z"></svg:path>`,
})
export class JamToolsIcon {
  readonly viewBox = input("0 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamToolsFIcon],svg[jam-tools-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.131 5.668a1.5 1.5 0 0 1 .294-1.708l1.414-1.414a1.5 1.5 0 0 1 1.707-.293L7.021.778a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-1.415 1.414l-.05-.05l-3.535 3.536l.05.05l-1.414 1.414a2 2 0 0 1-2.829 0L.657 9.971a2 2 0 0 1 0-2.829zm6.96 7.08l3.536-3.535l3.586 3.586l-3.535 3.536l-3.586-3.586zm5 5l3.536-3.535l1.768 1.768a2.5 2.5 0 0 1-3.535 3.536l-1.768-1.768zm2.83-15.556l4.242 4.243l-3.839 3.839c-.613.613-1.744.478-2.525-.303l-1.414-1.415c-.781-.78-.917-1.911-.303-2.525zM18.334.778l.303-.303c.613-.614 1.744-.478 2.525.303l1.414 1.414c.781.781.917 1.912.303 2.526l-.303.303L18.335.778zM5.607 16.335l2.12-2.122a1 1 0 1 1 1.415 1.414L7.021 17.75a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.415 0l-1.414-1.414a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.415 0z"></svg:path>`,
})
export class JamToolsFIcon {
  readonly viewBox = input("0 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTorchIcon],svg[jam-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10v1l1.25.43l.602 8.433a.148.148 0 0 0 .296 0l.602-8.433L6 11v-1zM.535 8A4 4 0 0 1 0 6q0-2.21 4-6q4 3.79 4 6c0 .729-.195 1.412-.535 2H8v3a2 2 0 0 1-1.35 1.892l-.508 7.113a2.148 2.148 0 0 1-4.284 0l-.509-7.113A2 2 0 0 1 0 11V8zm2.13-3.495C2.196 5.205 2 5.719 2 6a2 2 0 1 0 4 0c0-.281-.197-.795-.664-1.495Q4.836 3.754 4 2.842a14 14 0 0 0-1.336 1.663z"></svg:path>`,
})
export class JamTorchIcon {
  readonly viewBox = input("-8 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTorchFIcon],svg[jam-torch-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h8v1a2 2 0 0 1-1.35 1.892l-.508 7.113a2.148 2.148 0 0 1-4.284 0l-.509-7.113A2 2 0 0 1 0 11zm7.465-2H8H0h.535A4 4 0 0 1 0 6q0-2.21 4-6q4 3.79 4 6c0 .729-.195 1.412-.535 2"></svg:path>`,
})
export class JamTorchFIcon {
  readonly viewBox = input("-8 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTotemIcon],svg[jam-totem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zm6 .268A2 2 0 0 1 15 20H5a2 2 0 0 1 1-1.732V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3zM9 9h2v2H9zm1-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2M1.286 6h17.433a1 1 0 0 1 .97 1.243l-1.31 5.242A2 2 0 0 1 16.439 14H3.588a2 2 0 0 1-1.939-1.507L.317 7.246A1 1 0 0 1 1.286 6m1.286 2l1.017 4h12.85l1-4H2.571z"></svg:path>`,
})
export class JamTotemIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrainIcon],svg[jam-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h8a2 2 0 0 0 2-2v-2H2v2a2 2 0 0 0 2 2m8.813 1.917A2 2 0 0 1 11.131 20H4.87a2 2 0 0 1-1.682-3.083A4 4 0 0 1 0 13V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9a4 4 0 0 1-3.187 3.917M14 9V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5zm-2-6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M4 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-7.131 4h6.262l-.666-1h-4.93z"></svg:path>`,
})
export class JamTrainIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrainFIcon],svg[jam-train-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v5.038l12-.023V4a2 2 0 0 0-2-2zm7.667 15L11 16H5l-.667 1H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4zM4 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-11a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M4.314 17.029l7.371-.001l.279.417A1 1 0 0 1 11.13 19H4.87a1 1 0 0 1-.833-1.555z"></svg:path>`,
})
export class JamTrainFIcon {
  readonly viewBox = input("-4 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTransgenderIcon],svg[jam-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14A5 5 0 1 0 7 4a5 5 0 0 0 0 10m6.013-8.586A7.002 7.002 0 0 1 7.998 15.93L8 16v1h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-1q0-.036.002-.07A7.002 7.002 0 0 1 7 2a6.98 6.98 0 0 1 4.745 1.853l1.85-1.85H12.01a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.417z"></svg:path>`,
})
export class JamTransgenderIcon {
  readonly viewBox = input("-3 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrashIcon],svg[jam-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm10 2H2v1h14zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamTrashIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrashAltIcon],svg[jam-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.833 5l-.728 13.11A2 2 0 0 1 12.108 20H3.892a2 2 0 0 1-1.997-1.89L1.167 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zM12.83 5H3.17l.722 13h8.216zM2 2v1h12V2zm4 5a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamTrashAltIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrashAltFIcon],svg[jam-trash-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.778 6l-.673 12.11A2 2 0 0 1 12.108 20H3.892a2 2 0 0 1-1.997-1.89L1.222 6zM1 0h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m5 8a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamTrashAltFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrashFIcon],svg[jam-trash-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm3.8 6l-.613 9.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.205 8zM7 9a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamTrashFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTreeIcon],svg[jam-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.728 5.547l-.632-.446l-.167-.755a3.002 3.002 0 0 0-5.858 0l-.167.755l-.632.446A3 3 0 1 0 6.2 10.75l.801-.35l.8.35a3 3 0 0 0 2.927-5.204zM8 12.9V19a1 1 0 0 1-2 0v-6.1a5 5 0 0 1-3.882-8.987a5.002 5.002 0 0 1 9.764 0A5 5 0 0 1 8 12.9"></svg:path>`,
})
export class JamTreeIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTreeAltIcon],svg[jam-tree-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.348 12h7.304l-2.57-4.774L9.54 7.12L7 2.887L4.461 7.12l1.46.104zm7.958-3.003l1.9 3.529a1 1 0 0 1-.88 1.474H8v5a1 1 0 0 1-2 0v-5H1.674a1 1 0 0 1-.88-1.474l1.9-3.529l-.72-.387a1 1 0 0 1-.065-1.124L6.143.429a1 1 0 0 1 1.714 0l4.234 7.057a1 1 0 0 1-.064 1.123z"></svg:path>`,
})
export class JamTreeAltIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTreeAltFIcon],svg[jam-tree-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14.858H1.674a1 1 0 0 1-.88-1.474l1.9-3.529a1 1 0 0 1-.785-1.512l4.234-7.056a1 1 0 0 1 1.714 0l4.234 7.056a1 1 0 0 1-.785 1.512l1.9 3.529a1 1 0 0 1-.88 1.474H8v6H6z"></svg:path>`,
})
export class JamTreeAltFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTreeFIcon],svg[jam-tree-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13.758v6.1a1 1 0 0 1-2 0v-6.1A5 5 0 0 1 2.118 4.77a5.002 5.002 0 0 1 9.764 0A5 5 0 0 1 8 13.758"></svg:path>`,
})
export class JamTreeFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrelloIcon],svg[jam-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.562 0H2.438A2.435 2.435 0 0 0 0 2.432v15.087a2.435 2.435 0 0 0 2.438 2.432h15.124A2.435 2.435 0 0 0 20 17.519V2.432A2.435 2.435 0 0 0 17.562 0M8.7 15.55a1.13 1.13 0 0 1-1.132 1.13H3.732A1.13 1.13 0 0 1 2.6 15.55V3.893c0-.624.507-1.13 1.132-1.13h3.836A1.13 1.13 0 0 1 8.7 3.893zm8.7-5.015a1.13 1.13 0 0 1-1.132 1.13h-3.836a1.13 1.13 0 0 1-1.132-1.13V3.893c0-.624.507-1.13 1.132-1.13h3.836a1.13 1.13 0 0 1 1.132 1.13z"></svg:path>`,
})
export class JamTrelloIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTriangleIcon],svg[jam-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.528 2.358a1 1 0 0 0-1.377.32l-6.095 9.794A1 1 0 0 0 3.905 14h12.19a1 1 0 0 0 .85-1.528l-6.096-9.794a1 1 0 0 0-.32-.32zm2.019-.737l6.095 9.794A3 3 0 0 1 16.095 16H3.905a3 3 0 0 1-2.547-4.585L7.453 1.62a3 3 0 0 1 5.094 0z"></svg:path>`,
})
export class JamTriangleIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTriangleDangerIcon],svg[jam-triangle-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.8 1.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.2 3.2 0 0 1-1.743.516H3.298C1.477 18 0 16.47 0 14.581c0-.639.173-1.264.498-1.807L7.2 1.613C8.162.01 10.196-.481 11.743.517c.428.276.79.651 1.057 1.096m-2.22.839a1.077 1.077 0 0 0-1.514.365L2.365 13.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H16.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L10.933 2.817a1.1 1.1 0 0 0-.352-.365zM10 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamTriangleDangerIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTriangleDangerFIcon],svg[jam-triangle-danger-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.8 1.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.2 3.2 0 0 1-1.743.516H3.298C1.477 18 0 16.47 0 14.581c0-.639.173-1.264.498-1.807L7.2 1.613C8.162.01 10.196-.481 11.743.517c.428.276.79.651 1.057 1.096M10 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamTriangleDangerFIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTriangleFIcon],svg[jam-triangle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.547 1.621l6.095 9.794A3 3 0 0 1 16.095 16H3.905a3 3 0 0 1-2.547-4.585L7.453 1.62a3 3 0 0 1 5.094 0z"></svg:path>`,
})
export class JamTriangleFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrophyIcon],svg[jam-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h6v-1H2zm.294-3Q1.394 12.263 1 9Q.457 4.5 1 0h8q.466 4.993 0 9a32.7 32.7 0 0 1-1.287 6H8a2 2 0 0 1 2 2v3H0v-3a2 2 0 0 1 2-2zm.692-6.24q.417 3.455 1.423 6.24H5.61a31 31 0 0 0 1.402-6.231Q7.369 5.713 7.147 2h-4.33a35.5 35.5 0 0 0 .168 6.76z"></svg:path>`,
})
export class JamTrophyIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTrophyFIcon],svg[jam-trophy-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.294 15Q1.394 12.263 1 9Q.457 4.5 1 0h8q.466 4.993 0 9a32.7 32.7 0 0 1-1.287 6H8a2 2 0 0 1 2 2v3H0v-3a2 2 0 0 1 2-2zM3 16v2h4v-2z"></svg:path>`,
})
export class JamTrophyFIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTubeIcon],svg[jam-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7a1 1 0 1 1 0 2v2a1 1 0 0 1 0 2v4a1 1 0 0 0 2 0V2H2zM0 0h6v17a3 3 0 0 1-6 0z"></svg:path>`,
})
export class JamTubeIcon {
  readonly viewBox = input("-9 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTumblrIcon],svg[jam-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.888 15.905s-.614.683-1.781.683c-1.168 0-1.69-.683-1.69-1.692V9.18h3.775V5.715H7.417V0H4.575C4.13 2.564 2.38 4.7.005 5.748v3.431h2.773v6.584c0 .914.891 4.237 5.438 4.237c2.672 0 3.778-1.662 3.778-1.662z"></svg:path>`,
})
export class JamTumblrIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTumblrCircleIcon],svg[jam-tumblr-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.441 12.953s-.307.34-.89.34c-.584 0-.845-.34-.845-.845V9.59h1.887V7.857h-1.887V5H9.285C9.062 6.282 8.187 7.35 7 7.874V9.59h1.386v3.291c0 .457.446 2.119 2.72 2.119c1.335 0 1.888-.83 1.888-.83z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamTumblrCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTumblrSquareIcon],svg[jam-tumblr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.441 12.953s-.307.34-.89.34c-.584 0-.845-.34-.845-.845V9.59h1.887V7.857h-1.887V5H9.285C9.062 6.282 8.187 7.35 7 7.874V9.59h1.386v3.291c0 .457.446 2.119 2.72 2.119c1.335 0 1.888-.83 1.888-.83z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamTumblrSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTwitchIcon],svg[jam-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.25 0L0 3.75V17.5h5V20h2.5l2.5-2.5h3.75l5-5.325V0zM17.5 11.25L14 15H9.568l-2.693 1.959V15H2.5V1.25h15z"></svg:path><svg:path d="M8.75 5H10v5H8.75zm3.75 0h1.25v5H12.5z"></svg:path></svg:g>`,
})
export class JamTwitchIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTwitterIcon],svg[jam-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1.907a8.3 8.3 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.4 8.4 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04q0 .476.106.92A11.7 11.7 0 0 1 1.393.754a3.96 3.96 0 0 0-.554 2.03a4.02 4.02 0 0 0 1.824 3.363A4.15 4.15 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.2 4.2 0 0 1-1.08.141q-.397 0-.773-.075a4.1 4.1 0 0 0 3.832 2.807a8.3 8.3 0 0 1-5.095 1.727q-.498-.001-.979-.056a11.73 11.73 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.1 8.1 0 0 0 20 1.907"></svg:path>`,
})
export class JamTwitterIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTwitterCircleIcon],svg[jam-twitter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.2 4.2 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02q0 .237.053.46a5.85 5.85 0 0 1-4.228-2.11a2 2 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.1 2.1 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.1 2.1 0 0 1-.927.034a2.05 2.05 0 0 0 1.916 1.403a4.16 4.16 0 0 1-2.548.864q-.248 0-.489-.028A5.86 5.86 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.1 4.1 0 0 0 15 6.947"></svg:path></svg:g>`,
})
export class JamTwitterCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamTwitterSquareIcon],svg[jam-twitter-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.2 4.2 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02q0 .237.053.46a5.85 5.85 0 0 1-4.228-2.11a2 2 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.1 2.1 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.1 2.1 0 0 1-.927.034a2.05 2.05 0 0 0 1.916 1.403a4.16 4.16 0 0 1-2.548.864q-.248 0-.489-.028A5.86 5.86 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.1 4.1 0 0 0 15 6.947"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamTwitterSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUmbrellaIcon],svg[jam-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a8 8 0 0 0-7.748 6h15.496C16.86 5.55 13.728 3 10 3m-1 8H0c0-5.186 3.947-9.45 9.001-9.95L9 1a1 1 0 1 1 1.999.05C16.053 1.55 20 5.813 20 11h-9v6a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-6 0z"></svg:path>`,
})
export class JamUmbrellaIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUmbrellaClosedIcon],svg[jam-umbrella-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13.418L0 15L6.234 1.642a1 1 0 1 1 1.533 0L14 15l-6-1.582V17a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-6 0zM7 4.73l-3.383 7.249L7 11.086l3.383.892L7 4.729z"></svg:path>`,
})
export class JamUmbrellaClosedIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUmbrellaClosedFIcon],svg[jam-umbrella-closed-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 13.983l-6 1.582L6.234 2.207a1 1 0 1 1 1.533 0L14 15.565l-6-1.582v3.582a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-6 0z"></svg:path>`,
})
export class JamUmbrellaClosedFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUmbrellaFIcon],svg[jam-umbrella-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H0c0-5.186 3.947-9.45 9.001-9.95L9 1a1 1 0 1 1 1.999.05C16.053 1.55 20 5.813 20 11h-9v6a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-6 0z"></svg:path>`,
})
export class JamUmbrellaFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnderlineIcon],svg[jam-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 10h7a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1M7 2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a4 4 0 1 1-8 0V2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a2 2 0 1 0 4 0z"></svg:path>`,
})
export class JamUnderlineIcon {
  readonly viewBox = input("-7 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUndoIcon],svg[jam-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.308 7.612l1.352-.923a.98.98 0 0 1 1.372.27a1.01 1.01 0 0 1-.266 1.388l-3.277 2.237a.98.98 0 0 1-1.372-.27L.907 6.998a1.007 1.007 0 0 1 .266-1.389a.98.98 0 0 1 1.372.27l.839 1.259C4.6 3.01 8.38 0 12.855 0c5.458 0 9.882 4.477 9.882 10s-4.424 10-9.882 10a.994.994 0 0 1-.988-1c0-.552.443-1 .988-1c4.366 0 7.906-3.582 7.906-8s-3.54-8-7.906-8C9.311 2 6.312 4.36 5.308 7.612"></svg:path>`,
})
export class JamUndoIcon {
  readonly viewBox = input("-0.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnindentIcon],svg[jam-unindent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m6-4h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2m-6.44.143l2.057-1.234a1 1 0 0 1 1.515.857v2.468a1 1 0 0 1-1.515.857L.561 5.857a1 1 0 0 1 0-1.714z"></svg:path>`,
})
export class JamUnindentIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnionIcon],svg[jam-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.858 2.48L10 2.888l-.858-.408a5 5 0 1 0 0 9.04l.858-.408l.858.408a5 5 0 1 0 0-9.04M13 0a7 7 0 1 1-3 13.326A7 7 0 1 1 10 .673A7 7 0 0 1 13 0"></svg:path>`,
})
export class JamUnionIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUniverseIcon],svg[jam-universe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.694 17.306c-1.91-1.912.258-7.18 4.845-11.767S15.394-1.217 17.306.694c1.91 1.912-.258 7.18-4.845 11.767S2.606 19.217.694 17.306M2.08 15.92c.815.816 5.102-.95 8.997-4.845s5.66-8.182 4.845-8.997c-.815-.816-5.102.95-8.997 4.845s-5.66 8.182-4.845 8.997m3.46-3.46C.952 7.874-1.217 2.606.694.694c1.912-1.91 7.18.258 11.767 4.845s6.756 9.855 4.845 11.767c-1.912 1.91-7.18-.258-11.767-4.845zm1.385-1.385c3.895 3.895 8.182 5.66 8.997 4.845c.816-.815-.95-5.102-4.845-8.997S2.895 1.263 2.08 2.078c-.816.815.95 5.102 4.845 8.997M9 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamUniverseIcon {
  readonly viewBox = input("-3 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnlinkIcon],svg[jam-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.456 10.218a1.93 1.93 0 0 0-1.902.492L2.5 12.762A1.935 1.935 0 0 0 5.238 15.5l2.052-2.053a1.93 1.93 0 0 0 .492-1.902a.968.968 0 0 1-1.326-1.326Zm4.446-4.446a.968.968 0 0 1 1.326 1.326a1.93 1.93 0 0 0 1.902-.492l1.37-1.368A1.935 1.935 0 1 0 12.762 2.5l-1.368 1.37a1.93 1.93 0 0 0-.492 1.902m5.965-4.639a3.87 3.87 0 0 1 0 5.473l-1.368 1.368A3.87 3.87 0 0 1 10.026 2.5l1.368-1.368a3.87 3.87 0 0 1 5.473 0ZM8.658 9.342a3.87 3.87 0 0 1 0 5.472l-2.052 2.053a3.87 3.87 0 0 1-5.473-5.473l2.053-2.052a3.87 3.87 0 0 1 5.472 0"></svg:path>`,
})
export class JamUnlinkIcon {
  readonly viewBox = input("0 0 18 18")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnorderedListIcon],svg[jam-unordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0 8h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2M1 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamUnorderedListIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnsplashIcon],svg[jam-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10.35c0 1.736-1.375 3.086-3 3.086s-3-1.35-3-3.086s1.375-3.086 3-3.086c1.688.065 3 1.415 3 3.086m7-4.757v9.578c0 1.479-1.188 2.765-2.688 2.765H2.688C1.188 17.936 0 16.714 0 15.17V5.53c0-1.48 1.188-2.766 2.688-2.766H5l.5-1.478C5.75.579 6.563 0 7.313 0h5.375c.75 0 1.562.579 1.812 1.286l.5 1.543h2.313c1.5 0 2.687 1.221 2.687 2.764m-5.375 4.821c0-2.635-2.063-4.821-4.688-4.821c-2.562 0-4.687 2.186-4.687 4.821c0 2.636 2.063 4.822 4.688 4.822a4.79 4.79 0 0 0 4.687-4.822"></svg:path>`,
})
export class JamUnsplashIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnsplashCircleIcon],svg[jam-unsplash-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M11.596 10.72c0 .867-.687 1.542-1.5 1.542s-1.5-.675-1.5-1.543s.688-1.543 1.5-1.543c.844.032 1.5.707 1.5 1.543zm3.5-2.38v4.79c0 .74-.593 1.382-1.343 1.382H6.44c-.75 0-1.344-.61-1.344-1.382V8.308c0-.739.594-1.382 1.344-1.382h1.156l.25-.739c.125-.354.532-.643.907-.643h2.687c.375 0 .781.29.906.643l.25.771h1.157c.75 0 1.343.611 1.343 1.383zm-2.687 2.411c0-1.318-1.031-2.41-2.344-2.41c-1.281 0-2.344 1.092-2.344 2.41s1.032 2.411 2.344 2.411a2.395 2.395 0 0 0 2.344-2.41z"></svg:path></svg:g>`,
})
export class JamUnsplashCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUnsplashSquareIcon],svg[jam-unsplash-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.596 10.72c0 .867-.687 1.542-1.5 1.542s-1.5-.675-1.5-1.543s.688-1.543 1.5-1.543c.844.032 1.5.707 1.5 1.543zm3.5-2.38v4.79c0 .74-.593 1.382-1.343 1.382H6.44c-.75 0-1.344-.61-1.344-1.382V8.308c0-.739.594-1.382 1.344-1.382h1.156l.25-.739c.125-.354.532-.643.907-.643h2.687c.375 0 .781.29.906.643l.25.771h1.157c.75 0 1.343.611 1.343 1.383zm-2.687 2.411c0-1.318-1.031-2.41-2.344-2.41c-1.281 0-2.344 1.092-2.344 2.41s1.032 2.411 2.344 2.411a2.395 2.395 0 0 0 2.344-2.41z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamUnsplashSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUploadIcon],svg[jam-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.414v5.642a1 1 0 1 1-2 0V3.414L4.879 4.536A1 1 0 0 1 3.464 3.12L6.293.293a1 1 0 0 1 1.414 0l2.829 2.828A1 1 0 1 1 9.12 4.536zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamUploadIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUserIcon],svg[jam-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.58 3.58 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.66 3.66 0 0 0-2.356-3.419a1 1 0 1 1 .712-1.868A5.66 5.66 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.58 5.58 0 0 1 3.534-5.19M7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class JamUserIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUserCircleIcon],svg[jam-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2M5.91 16.876a8 8 0 0 1-1.58-1.232a5.6 5.6 0 0 1 2.204-1.574a1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.65 3.65 0 0 0-1.41-.964a1 1 0 1 1 .712-1.868a5.65 5.65 0 0 1 2.284 1.607a8 8 0 0 1-1.586 1.225"></svg:path>`,
})
export class JamUserCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUserMinusIcon],svg[jam-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.58 3.58 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.66 3.66 0 0 0-2.356-3.419a1 1 0 1 1 .712-1.868A5.66 5.66 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.58 5.58 0 0 1 3.534-5.19M7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2m6 3h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamUserMinusIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUserPlusIcon],svg[jam-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.58 3.58 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.66 3.66 0 0 0-2.356-3.419a1 1 0 1 1 .712-1.868A5.66 5.66 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.58 5.58 0 0 1 3.534-5.19M7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2m10 3h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V7h-2a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0z"></svg:path>`,
})
export class JamUserPlusIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUserRemoveIcon],svg[jam-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.58 3.58 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.66 3.66 0 0 0-2.356-3.419a1 1 0 1 1 .712-1.868A5.66 5.66 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.58 5.58 0 0 1 3.534-5.19M7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2m10.414 4l1.414 1.414a1 1 0 0 1-1.414 1.414L16 7.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L14.586 6l-1.414-1.414a1 1 0 0 1 1.414-1.414L16 4.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class JamUserRemoveIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUserSquareIcon],svg[jam-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1.229 16H4a2 2 0 0 1-.813-.172a5.58 5.58 0 0 1 3.347-3.758a1 1 0 1 1 .733 1.86A3.58 3.58 0 0 0 5.229 18m9.512 0a3.66 3.66 0 0 0-2.097-2.066a1 1 0 1 1 .712-1.868a5.66 5.66 0 0 1 3.437 3.77A2 2 0 0 1 16 18zM10 4a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class JamUserSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamUsersIcon],svg[jam-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.534 11.07a1 1 0 1 1 .733 1.86A3.58 3.58 0 0 0 2 16.26V18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.66 3.66 0 0 0-2.356-3.419a1 1 0 1 1 .712-1.868A5.66 5.66 0 0 1 14 16.353V18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.58 5.58 0 0 1 3.534-5.19M7 1a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2m9 17a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1v-1.838a3.39 3.39 0 0 0-2.316-3.213a1 1 0 1 1 .632-1.898A5.39 5.39 0 0 1 20 15.162V17a3 3 0 0 1-3 3zM13 2a1 1 0 0 1 0-2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4a1 1 0 0 1 0-2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class JamUsersIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamViadeoIcon],svg[jam-viadeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.71 10.006q-.02-.048-.046-.096c-.183.095-.355.191-.533.273q-.263.12-.534.215c-.185.064-.374.114-.56.168q0 .024.003.038q.011.036.026.073a5.7 5.7 0 0 1 .382 2.04a5.6 5.6 0 0 1-.24 1.722c-.258.843-.675 1.598-1.29 2.233c-.897.927-2 1.426-3.281 1.542c-.118.011-.238.01-.366.014c.005-.029.004-.035.007-.037l.2-.15a10.6 10.6 0 0 0 3.138-3.777a9.34 9.34 0 0 0 .966-3.98c.015-.683-.045-1.36-.163-2.032a12.6 12.6 0 0 0-.615-2.234a1 1 0 0 0-.052-.11l-.026-.179c0-.02 0-.058-.002-.066A11 11 0 0 0 10.37 3.8a8.6 8.6 0 0 0-1.038-2.34A6.1 6.1 0 0 0 8.183.113C8.14.077 8.095.043 8.042 0c-.002.028-.008.045-.003.056q.049.089.101.176a34 34 0 0 1 2.072 4.216c.163.4.311.804.466 1.206l.046.084l.025.178c.008.212.02.43.024.618a27 27 0 0 1-.12 3.3a23 23 0 0 1-.202 1.513a16 16 0 0 1-.425 1.867a11 11 0 0 1-.874 2.179a6.8 6.8 0 0 1-1.24 1.67c-.463.45-.99.804-1.588 1.052a.32.32 0 0 1-.195.02a5.1 5.1 0 0 1-2.202-1.007a5.15 5.15 0 0 1-1.344-1.62a5.6 5.6 0 0 1-.658-2.145a6 6 0 0 1 .02-1.338a5.4 5.4 0 0 1 .426-1.572a5.7 5.7 0 0 1 1.427-1.927a5 5 0 0 1 1.582-.975a5 5 0 0 1 1.178-.283a5.5 5.5 0 0 1 1.074-.015q.687.052 1.332.301c.037.015.076.024.131.04c.038-.298.097-.582.185-.858a7 7 0 0 1 .33-.805c-.067-.053-.14-.065-.208-.087a7 7 0 0 0-1.788-.323a7.7 7.7 0 0 0-1.938.134a6.3 6.3 0 0 0-2.145.85a7.2 7.2 0 0 0-1.657 1.454C.806 9.213.236 10.666.148 12.309a8 8 0 0 0 .051 1.416c.084.664.252 1.304.518 1.918a7.55 7.55 0 0 0 1.85 2.575q.883.81 2.003 1.238a7 7 0 0 0 2.158.44a8 8 0 0 0 2.046-.147a6.3 6.3 0 0 0 2.498-1.112a7.3 7.3 0 0 0 1.516-1.537a7.07 7.07 0 0 0 1.41-3.899a8 8 0 0 0-.091-1.755a7 7 0 0 0-.396-1.44z"></svg:path><svg:path d="M17.07 2.23a6.6 6.6 0 0 0-.653-1.595c-.041-.072-.087-.14-.14-.225l-.104.188c-.2.38-.45.722-.76 1.021c-.468.452-1.008.78-1.645.936q-.082.02-.166.045a6 6 0 0 0-1.348.559a2.5 2.5 0 0 0-.747.65a2.5 2.5 0 0 0-.541 1.684c.022.512.169.99.416 1.439c.012.021.03.04.055.074c2.014-.494 3.528-1.647 4.574-3.47c-.004.062-.002.092-.009.12q-.053.236-.161.453a4 4 0 0 1-.604.867c-.41.46-.875.859-1.363 1.23c-.592.452-1.212.86-1.855 1.233c-.047.027-.103.045-.139.105q.129.118.257.23c.33.275.689.5 1.1.635c.387.127.78.162 1.183.092a2.63 2.63 0 0 0 1.287-.624c.362-.312.647-.688.887-1.098c.14-.238.269-.481.358-.743a6.6 6.6 0 0 0 .118-3.807z"></svg:path></svg:g>`,
})
export class JamViadeoIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamViberIcon],svg[jam-viber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.29 8.607c.024-2.892-2.439-5.543-5.49-5.91a4 4 0 0 1-.197-.03a3 3 0 0 0-.465-.05c-.626 0-.793.44-.837.701q-.064.384.121.637c.207.281.572.331.865.371c.085.012.166.023.234.038c2.742.613 3.665 1.576 4.116 4.295c.011.066.016.148.022.235c.02.325.06 1.001.787 1.001q.091 0 .194-.015c.676-.103.655-.721.645-1.018c-.003-.084-.006-.163.002-.216l.002-.04z"></svg:path><svg:path d="M10.96 1.636q.124.008.222.021c4.503.693 6.574 2.826 7.147 7.364c.01.077.012.171.013.27c.006.355.018 1.093.81 1.108h.024q.374 0 .588-.223c.246-.257.23-.64.215-.948q-.005-.115-.006-.21c.058-4.64-3.96-8.849-8.596-9.005q-.03 0-.056.003l-.055.003q-.072-.001-.164-.008C11.03.006 10.947 0 10.862 0c-.738 0-.878.525-.896.838c-.041.723.658.774.994.798m7.152 13.25a14 14 0 0 1-.287-.224c-.492-.396-1.015-.76-1.52-1.113l-.315-.22c-.648-.455-1.23-.676-1.78-.676c-.742 0-1.388.41-1.922 1.217c-.236.358-.523.532-.876.532a1.7 1.7 0 0 1-.706-.177c-2.09-.948-3.584-2.402-4.438-4.321c-.413-.928-.279-1.534.447-2.028c.413-.28 1.18-.801 1.127-1.8c-.062-1.133-2.563-4.544-3.617-4.931a2.05 2.05 0 0 0-1.396-.004C1.618 1.548.75 2.264.315 3.209c-.42.914-.4 1.987.054 3.103c1.315 3.227 3.163 6.041 5.494 8.363c2.281 2.273 5.085 4.134 8.333 5.533c.293.126.6.195.825.245c.076.017.142.032.19.045a.3.3 0 0 0 .081.011h.026c1.528 0 3.363-1.396 3.926-2.987c.494-1.394-.408-2.083-1.132-2.636m-6.476-9.563c-.261.006-.806.02-.997.574q-.135.39.032.669c.162.27.473.354.755.4c1.025.164 1.552.73 1.657 1.783c.049.49.38.833.803.833a1 1 0 0 0 .096-.006c.51-.06.757-.435.735-1.114c.008-.708-.362-1.512-.993-2.152c-.632-.642-1.394-1.004-2.088-.987"></svg:path></svg:g>`,
})
export class JamViberIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamViberCircleIcon],svg[jam-viber-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.644 9.404c.012-1.492-1.219-2.86-2.744-3.049l-.1-.015a1.4 1.4 0 0 0-.232-.026c-.313 0-.396.226-.418.361a.43.43 0 0 0 .06.329c.104.145.286.17.432.192q.066.008.117.02c1.371.315 1.833.812 2.058 2.215q.008.053.01.122c.01.167.031.516.395.516q.045 0 .096-.008c.339-.053.328-.372.323-.525a1 1 0 0 1 0-.111l.002-.02z"></svg:path><svg:path d="M10.48 5.807c.04.003.08.006.111.011c2.25.358 3.286 1.458 3.573 3.8q.006.061.006.14c.003.183.009.563.405.571h.012a.38.38 0 0 0 .294-.115c.123-.133.115-.33.108-.49q-.004-.058-.003-.107c.028-2.395-1.98-4.567-4.298-4.647l-.028.001l-.027.002q-.036 0-.082-.004l-.12-.006c-.369 0-.439.27-.448.432c-.02.373.329.4.497.412m3.575 6.837l-.143-.115c-.246-.204-.508-.392-.76-.574l-.158-.114c-.324-.234-.615-.349-.89-.349c-.37 0-.693.212-.96.629q-.175.275-.438.274a.85.85 0 0 1-.353-.091c-1.045-.49-1.792-1.24-2.219-2.23c-.206-.48-.14-.792.224-1.047c.206-.144.59-.413.563-.928c-.03-.585-1.281-2.345-1.808-2.545a1 1 0 0 0-.698-.002c-.605.21-1.04.58-1.257 1.067c-.21.472-.2 1.025.028 1.601c.657 1.666 1.58 3.118 2.746 4.316c1.14 1.173 2.542 2.133 4.166 2.855c.146.065.3.1.412.126l.095.024a.2.2 0 0 0 .04.006h.013c.764 0 1.681-.72 1.963-1.542c.247-.72-.204-1.075-.566-1.36zM10.818 7.71c-.13.003-.403.01-.499.296q-.066.202.016.345c.081.14.237.183.378.206c.512.085.776.378.828.92c.025.254.19.43.402.43l.048-.002q.383-.049.367-.575c.004-.366-.181-.78-.496-1.11c-.316-.332-.697-.519-1.044-.51"></svg:path></svg:g>`,
})
export class JamViberCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamViberSquareIcon],svg[jam-viber-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.644 9.404c.012-1.492-1.219-2.86-2.744-3.049l-.1-.015a1.4 1.4 0 0 0-.232-.026c-.313 0-.396.226-.418.361a.43.43 0 0 0 .06.329c.104.145.286.17.432.192q.066.008.117.02c1.371.315 1.833.812 2.058 2.215q.008.053.01.122c.01.167.031.516.395.516q.045 0 .096-.008c.339-.053.328-.372.323-.525a1 1 0 0 1 0-.111l.002-.02z"></svg:path><svg:path d="M10.48 5.807c.04.003.08.006.111.011c2.25.358 3.286 1.458 3.573 3.8q.006.061.006.14c.003.183.009.563.405.571h.012a.38.38 0 0 0 .294-.115c.123-.133.115-.33.108-.49q-.004-.058-.003-.107c.028-2.395-1.98-4.567-4.298-4.647l-.028.001l-.027.002q-.036 0-.082-.004l-.12-.006c-.369 0-.439.27-.448.432c-.02.373.329.4.497.412m3.575 6.837l-.143-.115c-.246-.204-.508-.392-.76-.574l-.158-.114c-.324-.234-.615-.349-.89-.349c-.37 0-.693.212-.96.629q-.175.275-.438.274a.85.85 0 0 1-.353-.091c-1.045-.49-1.792-1.24-2.219-2.23c-.206-.48-.14-.792.224-1.047c.206-.144.59-.413.563-.928c-.03-.585-1.281-2.345-1.808-2.545a1 1 0 0 0-.698-.002c-.605.21-1.04.58-1.257 1.067c-.21.472-.2 1.025.028 1.601c.657 1.666 1.58 3.118 2.746 4.316c1.14 1.173 2.542 2.133 4.166 2.855c.146.065.3.1.412.126l.095.024a.2.2 0 0 0 .04.006h.013c.764 0 1.681-.72 1.963-1.542c.247-.72-.204-1.075-.566-1.36zM10.818 7.71c-.13.003-.403.01-.499.296q-.066.202.016.345c.081.14.237.183.378.206c.512.085.776.378.828.92c.025.254.19.43.402.43l.048-.002q.383-.049.367-.575c.004-.366-.181-.78-.496-1.11c-.316-.332-.697-.519-1.044-.51"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamViberSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVideoCameraIcon],svg[jam-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm9.98 1.605L16 1.585A2 2 0 0 1 17.414 1H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.586A2 2 0 0 1 16 10.414l-2.02-2.019A4 4 0 0 1 10 12H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6a4 4 0 0 1 3.98 3.605M17.415 9H18V3h-.586l-3 3zM5 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamVideoCameraIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVideoCameraFIcon],svg[jam-video-camera-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.98 3.605L16 1.585A2 2 0 0 1 17.414 1H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.586A2 2 0 0 1 16 10.414l-2.02-2.019A4 4 0 0 1 10 12H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6a4 4 0 0 1 3.98 3.605M5 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamVideoCameraFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVideoCameraVintageIcon],svg[jam-video-camera-vintage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm9.698.473l1.888-1.887A2 2 0 0 1 17 9h.586a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H17a2 2 0 0 1-1.414-.586l-1.888-1.887A4 4 0 0 1 10 19H4a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 3.698 2.473M17 17h.586v-6H17l-3 3zM9.259 2.379a4.5 4.5 0 1 1-.386 5.785a5 5 0 1 1 .386-5.785M5 16a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7.5 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class JamVideoCameraVintageIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVideoCameraVintageFIcon],svg[jam-video-camera-vintage-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.671 9c-.3-.243-.57-.525-.799-.837A5 5 0 0 1 8 9zm2.972.998c.456.401.82.905 1.055 1.475l1.888-1.887A2 2 0 0 1 17 9h.586a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H17a2 2 0 0 1-1.414-.586l-1.888-1.887A4 4 0 0 1 10 19H4a4 4 0 0 1-4-4v-2a4 4 0 0 1 2.46-3.693a5 5 0 1 1 6.799-6.929a4.5 4.5 0 1 1 3.385 7.62zM5 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7.5 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class JamVideoCameraVintageFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVimeoIcon],svg[jam-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.129.849C18.646.323 17.946.042 17.05.016c-2.53-.083-4.319 1.277-5.317 4.04a.41.41 0 0 0 .083.42a.4.4 0 0 0 .405.118q.433-.12.847-.12c.369 0 .86.068 1.103.394c.188.25.213.626.076 1.116c-.115.413-.711 1.52-1.449 2.69c-.898 1.427-1.394 2.067-1.537 2.067c-.474 0-2.187-7.673-2.234-7.842C8.535 1.141 8.289.26 6.69.26C5.474.258 2.758 2.504.528 4.461l-.342.299a.54.54 0 0 0-.074.736l.415.54a.526.526 0 0 0 .727.109l.023-.017C2 5.611 2.68 5.121 3.195 5.094c.559-.027 1.044.855 1.622 2.955c1.102 4.078 2.775 8.94 4.493 8.94c1.794 0 3.935-1.538 6.703-5.176c2.505-3.294 3.846-5.905 3.933-7.806c.064-1.435-.21-2.498-.817-3.158"></svg:path>`,
})
export class JamVimeoIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVimeoCircleIcon],svg[jam-vimeo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.586 6.216c-.242-.264-.593-.404-1.042-.417c-1.267-.042-2.164.64-2.664 2.024a.21.21 0 0 0 .042.21a.2.2 0 0 0 .203.06q.216-.06.424-.06c.185 0 .43.034.553.197q.141.19.038.56c-.058.207-.357.761-.726 1.348c-.45.715-.7 1.035-.77 1.035c-.238 0-1.097-3.845-1.12-3.93c-.247-.88-.37-1.323-1.17-1.323c-.611 0-1.972 1.126-3.09 2.107l-.17.15a.27.27 0 0 0-.038.368l.208.271a.264.264 0 0 0 .365.055l.011-.009c.362-.26.703-.505.961-.518c.28-.014.523.428.813 1.48c.552 2.044 1.39 4.48 2.251 4.48c.9 0 1.973-.77 3.36-2.594c1.255-1.65 1.927-2.959 1.97-3.911c.033-.72-.105-1.252-.409-1.583"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamVimeoCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVimeoSquareIcon],svg[jam-vimeo-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.586 6.216c-.242-.264-.593-.404-1.042-.417c-1.267-.042-2.164.64-2.664 2.024a.21.21 0 0 0 .042.21a.2.2 0 0 0 .203.06q.216-.06.424-.06c.185 0 .43.034.553.197q.141.19.038.56c-.058.207-.357.761-.726 1.348c-.45.715-.7 1.035-.77 1.035c-.238 0-1.097-3.845-1.12-3.93c-.247-.88-.37-1.323-1.17-1.323c-.611 0-1.972 1.126-3.09 2.107l-.17.15a.27.27 0 0 0-.038.368l.208.271a.264.264 0 0 0 .365.055l.011-.009c.362-.26.703-.505.961-.518c.28-.014.523.428.813 1.48c.552 2.044 1.39 4.48 2.251 4.48c.9 0 1.973-.77 3.36-2.594c1.255-1.65 1.927-2.959 1.97-3.911c.033-.72-.105-1.252-.409-1.583"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamVimeoSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVineIcon],svg[jam-vine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.74 9.818a.56.56 0 0 0-.611-.484a6 6 0 0 1-.676.043c-1.454 0-3.53-.112-4.813-.988a4 4 0 0 1-.318-.25c-.963-.847-1.172-1.89-1.178-2.617c-.008-.96.215-1.67.661-2.105a1.65 1.65 0 0 1 1.079-.469c.053.003.536.044.89.575c.273.409.608 1.34.186 3.245a.42.42 0 0 0 .256.483c.666.252 1.504.355 2.153.395c.2.012.38-.126.422-.326q.293-1.381.242-2.545c-.05-1.136-.346-2.117-.879-2.914C15.424.765 14.258.07 13.038.005c-.876-.048-2.184.263-3.225 1.28c-.718.702-1.57 2.011-1.551 4.261c.015 1.89.79 3.604 2.18 4.827c.425.374.97.757 1.66 1.085a23.8 23.8 0 0 1-3.888 5.184c-2.19-1.778-3.485-5.106-4.206-7.73a37 37 0 0 1-1.091-5.92a.5.5 0 0 0-.53-.457l-.951.066l1.438-.098l-2.37.162a.506.506 0 0 0-.462.557a40 40 0 0 0 1.176 6.433c.594 2.178 1.346 4.078 2.234 5.649c1.168 2.063 2.584 3.575 4.21 4.495a1.41 1.41 0 0 0 1.613-.151c.052-.044 1.285-1.089 2.767-2.926a27 27 0 0 0 2.316-3.36q.316-.543.598-1.094c1.013.13 2.188.145 3.548-.013a.565.565 0 0 0 .486-.645z"></svg:path>`,
})
export class JamVineIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVineCircleIcon],svg[jam-vine-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.613 9.925a.28.28 0 0 0-.306-.242a3 3 0 0 1-.338.021c-.728 0-1.767-.056-2.409-.494a1.72 1.72 0 0 1-.749-1.435c-.003-.48.108-.835.332-1.054a.82.82 0 0 1 .54-.234a.6.6 0 0 1 .445.288c.136.204.304.67.093 1.624a.21.21 0 0 0 .128.241c.333.126.753.178 1.078.198c.1.006.19-.063.21-.163q.147-.691.122-1.274c-.026-.568-.174-1.06-.44-1.458c-.366-.548-.949-.895-1.56-.929c-.438-.024-1.092.132-1.613.641c-.36.351-.786 1.006-.777 2.132a3.2 3.2 0 0 0 1.091 2.416c.213.187.486.378.831.543a12 12 0 0 1-1.946 2.594c-1.095-.89-1.744-2.556-2.104-3.869a19 19 0 0 1-.546-2.962a.25.25 0 0 0-.265-.229l-.476.033l.72-.049l-1.187.081a.253.253 0 0 0-.231.28c.05.531.203 1.803.589 3.218c.297 1.09.673 2.041 1.118 2.827c.584 1.032 1.292 1.79 2.106 2.25a.71.71 0 0 0 .807-.076c.026-.022.644-.545 1.385-1.464a13.4 13.4 0 0 0 1.459-2.23a7.3 7.3 0 0 0 1.775-.006a.283.283 0 0 0 .243-.322z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamVineCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVineSquareIcon],svg[jam-vine-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.613 9.925a.28.28 0 0 0-.306-.242a3 3 0 0 1-.338.021c-.728 0-1.767-.056-2.409-.494a1.72 1.72 0 0 1-.749-1.435c-.003-.48.108-.835.332-1.054a.82.82 0 0 1 .54-.234a.6.6 0 0 1 .445.288c.136.204.304.67.093 1.624a.21.21 0 0 0 .128.241c.333.126.753.178 1.078.198c.1.006.19-.063.21-.163q.147-.691.122-1.274c-.026-.568-.174-1.06-.44-1.458c-.366-.548-.949-.895-1.56-.929c-.438-.024-1.092.132-1.613.641c-.36.351-.786 1.006-.777 2.132a3.2 3.2 0 0 0 1.091 2.416c.213.187.486.378.831.543a12 12 0 0 1-1.946 2.594c-1.095-.89-1.744-2.556-2.104-3.869a19 19 0 0 1-.546-2.962a.25.25 0 0 0-.265-.229l-.476.033l.72-.049l-1.187.081a.253.253 0 0 0-.231.28c.05.531.203 1.803.589 3.218c.297 1.09.673 2.041 1.118 2.827c.584 1.032 1.292 1.79 2.106 2.25a.71.71 0 0 0 .807-.076c.026-.022.644-.545 1.385-1.464a13.4 13.4 0 0 0 1.459-2.23a7.3 7.3 0 0 0 1.775-.006a.283.283 0 0 0 .243-.322z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamVineSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVoicemailIcon],svg[jam-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.743 9h4.514A5.5 5.5 0 1 1 19 10.978V11H6v-.022A5.5 5.5 0 1 1 9.743 9M5.5 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class JamVoicemailIcon {
  readonly viewBox = input("0 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeIcon],svg[jam-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-.6a2 2 0 0 0-1.444.617L6.239 6.5H2v5h4.239l3.717 3.883A2 2 0 0 0 11.4 16h.6zM5.385 4.5L8.51 1.234A4 4 0 0 1 11.401 0H13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1.6a4 4 0 0 1-2.889-1.234L5.385 13.5H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"></svg:path>`,
})
export class JamVolumeIcon {
  readonly viewBox = input("-5 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeCircleIcon],svg[jam-volume-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-2.664-4.759a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2H8.34l1.823-1.709a2 2 0 0 1 1.368-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.368-.542L8.34 13.241zm1.795-4.5H7.336v2.5H9.13l2.205 2.067V6.674z"></svg:path>`,
})
export class JamVolumeCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeCircleFIcon],svg[jam-volume-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m-2.664-6.759H8.34l1.823 1.71a2 2 0 0 0 1.368.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.368.541L8.34 6.742H7.336a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm1.795-4.5l2.205-2.067v6.634L9.13 11.241H7.336v-2.5z"></svg:path>`,
})
export class JamVolumeCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeDownIcon],svg[jam-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-.6a2 2 0 0 0-1.444.617L6.239 6.5H2v5h4.239l3.717 3.883A2 2 0 0 0 11.4 16h.6zM5.385 4.5L8.51 1.234A4 4 0 0 1 11.401 0H13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1.6a4 4 0 0 1-2.889-1.234L5.385 13.5H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM16 7a1 1 0 0 1 0-2a4 4 0 1 1 0 8a1 1 0 0 1 0-2a2 2 0 1 0 0-4"></svg:path>`,
})
export class JamVolumeDownIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeDownCircleIcon],svg[jam-volume-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3.962-4.77a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005l1.823-1.709a2 2 0 0 1 1.367-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.367-.542L7.043 13.23zm1.795-4.5H6.038v2.5h1.795l2.205 2.067V6.664zm5.87.26a1 1 0 1 1 0-2a3 3 0 0 1 0 6a1 1 0 1 1 0-2a1 1 0 0 0 0-2"></svg:path>`,
})
export class JamVolumeDownCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeDownCircleFIcon],svg[jam-volume-down-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m-3.962-6.77h1.005l1.823 1.71a2 2 0 0 0 1.367.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.367.541l-1.823 1.71H6.038a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm7.664-4.24a1 1 0 0 1 0 2a1 1 0 1 0 0 2a3 3 0 0 0 0-6a1 1 0 1 0 0 2m-5.869-.26l2.205-2.066v6.633L7.833 11.23H6.038v-2.5z"></svg:path>`,
})
export class JamVolumeDownCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeDownSquareIcon],svg[jam-volume-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.038 11.23a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005l1.823-1.709a2 2 0 0 1 1.367-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.367-.542L7.043 13.23zm1.795-4.5H6.038v2.5h1.795l2.205 2.067V6.664zm5.87.26a1 1 0 1 1 0-2a3 3 0 0 1 0 6a1 1 0 1 1 0-2a1 1 0 0 0 0-2"></svg:path>`,
})
export class JamVolumeDownSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeDownSquareFIcon],svg[jam-volume-down-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m2.038 13.23h1.005l1.823 1.71a2 2 0 0 0 1.367.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.367.541l-1.823 1.71H6.038a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm7.664-4.24a1 1 0 0 1 0 2a1 1 0 1 0 0 2a3 3 0 0 0 0-6a1 1 0 1 0 0 2m-5.869-.26l2.205-2.066v6.633L7.833 11.23H6.038v-2.5z"></svg:path>`,
})
export class JamVolumeDownSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeMuteIcon],svg[jam-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-.6a2 2 0 0 0-1.444.617L6.239 6.5H2v5h4.239l3.717 3.883A2 2 0 0 0 11.4 16h.6zM5.385 4.5L8.51 1.234A4 4 0 0 1 11.401 0H13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1.6a4 4 0 0 1-2.889-1.234L5.385 13.5H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM19.415 9l1.413 1.414a1 1 0 1 1-1.414 1.414L18 10.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L16.586 9l-1.414-1.414a1 1 0 0 1 1.414-1.414L18 7.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class JamVolumeMuteIcon {
  readonly viewBox = input("-1 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeMuteCircleIcon],svg[jam-volume-mute-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m5.658-7.943l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707l-.707-.707a1 1 0 1 1 1.414-1.415l.707.708l.707-.708a1 1 0 0 1 1.414 1.415zm-10.376 3.23a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005L8.11 5.078a2 2 0 0 1 1.368-.54h.204a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.204a2 2 0 0 1-1.368-.542l-1.823-1.709zm1.796-4.5H5.282v2.5h1.796l2.204 2.067V6.72z"></svg:path>`,
})
export class JamVolumeMuteCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeMuteCircleFIcon],svg[jam-volume-mute-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.658 10.057l.707-.707a1 1 0 1 0-1.414-1.415l-.707.708l-.707-.708a1 1 0 0 0-1.414 1.415l.707.707l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707l.707.707a1 1 0 0 0 1.414-1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m-4.718-6.713h1.005l1.823 1.71a2 2 0 0 0 1.368.54h.204a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.204a2 2 0 0 0-1.368.541l-1.823 1.71H5.282a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm1.796-4.5L9.282 6.72v6.634l-2.204-2.067H5.282v-2.5z"></svg:path>`,
})
export class JamVolumeMuteCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeMuteSquareIcon],svg[jam-volume-mute-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm11.658 8.057l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707l-.707-.707a1 1 0 1 1 1.414-1.415l.707.708l.707-.708a1 1 0 0 1 1.414 1.415zm-10.376 3.23a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005L8.11 5.078a2 2 0 0 1 1.368-.54h.204a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.204a2 2 0 0 1-1.368-.542l-1.823-1.709zm1.796-4.5H5.282v2.5h1.796l2.204 2.067V6.72z"></svg:path>`,
})
export class JamVolumeMuteSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeMuteSquareFIcon],svg[jam-volume-mute-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.658 10.057l.707-.707a1 1 0 1 0-1.414-1.415l-.707.708l-.707-.708a1 1 0 0 0-1.414 1.415l.707.707l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707l.707.707a1 1 0 0 0 1.414-1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1.282 13.287h1.005l1.823 1.71a2 2 0 0 0 1.368.54h.204a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.204a2 2 0 0 0-1.368.541l-1.823 1.71H5.282a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm1.796-4.5L9.282 6.72v6.634l-2.204-2.067H5.282v-2.5z"></svg:path>`,
})
export class JamVolumeMuteSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeSquareIcon],svg[jam-volume-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.336 11.241a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2H8.34l1.823-1.709a2 2 0 0 1 1.368-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.368-.542L8.34 13.241zm1.795-4.5H7.336v2.5H9.13l2.205 2.067V6.674z"></svg:path>`,
})
export class JamVolumeSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeSquareFIcon],svg[jam-volume-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m3.336 13.241H8.34l1.823 1.71a2 2 0 0 0 1.368.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.368.541L8.34 6.742H7.336a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm1.795-4.5l2.205-2.067v6.634L9.13 11.241H7.336v-2.5z"></svg:path>`,
})
export class JamVolumeSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeUpIcon],svg[jam-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-.6a2 2 0 0 0-1.444.617L6.239 6.5H2v5h4.239l3.717 3.883A2 2 0 0 0 11.4 16h.6zM5.385 4.5L8.51 1.234A4 4 0 0 1 11.401 0H13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1.6a4 4 0 0 1-2.889-1.234L5.385 13.5H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM16 7a1 1 0 0 1 0-2a4 4 0 1 1 0 8a1 1 0 0 1 0-2a2 2 0 1 0 0-4m0-4a1 1 0 0 1 0-2a8 8 0 1 1 0 16a1 1 0 0 1 0-2a6 6 0 1 0 0-12"></svg:path>`,
})
export class JamVolumeUpIcon {
  readonly viewBox = input("0 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeUpCircleIcon],svg[jam-volume-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-4.88-4.744a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005l1.824-1.71a2 2 0 0 1 1.367-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.367-.541l-1.824-1.71H5.121zm1.796-4.5H5.121v2.5h1.795l2.205 2.067V6.689zm6.081-.731a1 1 0 0 1 0-2a3.97 3.97 0 0 1 3.972 3.971v.04a3.97 3.97 0 0 1-3.972 3.972a1 1 0 1 1 0-2a1.97 1.97 0 0 0 1.972-1.972v-.04a1.97 1.97 0 0 0-1.972-1.971M13 9a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamVolumeUpCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeUpCircleFIcon],svg[jam-volume-up-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m-4.88-6.744h1.005l1.824 1.709a2 2 0 0 0 1.367.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.367.542L6.125 6.756H5.121a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm7.877-5.231a1.97 1.97 0 0 1 1.972 1.971v.04a1.97 1.97 0 0 1-1.972 1.972a1 1 0 0 0 0 2a3.97 3.97 0 0 0 3.972-3.972v-.04a3.97 3.97 0 0 0-3.972-3.971a1 1 0 0 0 0 2M13 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6.084-.244l2.205-2.067v6.634l-2.205-2.067H5.121v-2.5z"></svg:path>`,
})
export class JamVolumeUpCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeUpSquareIcon],svg[jam-volume-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8.997 6.025a1 1 0 0 1 0-2a3.97 3.97 0 0 1 3.972 3.971v.04a3.97 3.97 0 0 1-3.972 3.972a1 1 0 1 1 0-2a1.97 1.97 0 0 0 1.972-1.972v-.04a1.97 1.97 0 0 0-1.972-1.971M13 9a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-7.88 4.256a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005l1.824-1.71a2 2 0 0 1 1.367-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.367-.541l-1.824-1.71H5.121zm1.796-4.5H5.121v2.5h1.795l2.205 2.067V6.689z"></svg:path>`,
})
export class JamVolumeUpSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamVolumeUpSquareFIcon],svg[jam-volume-up-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1.12 13.256h1.005l1.824 1.709a2 2 0 0 0 1.367.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.367.542L6.125 6.756H5.121a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm7.877-5.231a1.97 1.97 0 0 1 1.972 1.971v.04a1.97 1.97 0 0 1-1.972 1.972a1 1 0 0 0 0 2a3.97 3.97 0 0 0 3.972-3.972v-.04a3.97 3.97 0 0 0-3.972-3.971a1 1 0 0 0 0 2M13 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6.084-.244l2.205-2.067v6.634l-2.205-2.067H5.121v-2.5z"></svg:path>`,
})
export class JamVolumeUpSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWatchIcon],svg[jam-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10h2a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0zM4 4.07V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1.07A8 8 0 0 1 16 11a8 8 0 0 1-4 6.93V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.07A8 8 0 0 1 0 11a8 8 0 0 1 4-6.93m2-.818A8 8 0 0 1 8 3c.69 0 1.36.088 2 .252V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 15.496V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.252a8.05 8.05 0 0 1-4 0M8 17A6 6 0 1 0 8 5a6 6 0 0 0 0 12"></svg:path>`,
})
export class JamWatchIcon {
  readonly viewBox = input("-4 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWatchFIcon],svg[jam-watch-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10V7a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zm3-5.93A7.96 7.96 0 0 0 6 3c-1.457 0-2.823.39-4 1.07V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3zm0 13.86V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1.07A7.96 7.96 0 0 0 6 19c1.457 0 2.823-.39 4-1.07M6 17A6 6 0 1 1 6 5a6 6 0 0 1 0 12"></svg:path>`,
})
export class JamWatchFIcon {
  readonly viewBox = input("-6 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWaterDropIcon],svg[jam-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13a5 5 0 0 0 10 0c0-1.726-1.66-5.031-5-9.653C3.66 7.969 2 11.274 2 13M7 0q7 9.135 7 13a7 7 0 0 1-14 0Q0 9.135 7 0"></svg:path>`,
})
export class JamWaterDropIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWaterDropFIcon],svg[jam-water-drop-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 .565q7 9.135 7 13a7 7 0 1 1-14 0q0-3.865 7-13"></svg:path>`,
})
export class JamWaterDropFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWhatsappIcon],svg[jam-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.516.012C4.206.262.017 4.652.033 9.929a9.8 9.8 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a10 10 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.78 7.78 0 0 1-5.52 2.27a7.8 7.8 0 0 1-3.474-.808l-.701-.347l-3.087.726l.65-3.131l-.346-.672A7.6 7.6 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.67 7.67 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z"></svg:path><svg:path d="m14.842 12.045l-1.931-.55a.72.72 0 0 0-.713.186l-.472.478a.71.71 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.69.69 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903c-.137 1.343.443 3.036 2.637 5.07c2.535 2.349 4.566 2.66 5.887 2.341c.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072"></svg:path></svg:g>`,
})
export class JamWhatsappIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWifiIcon],svg[jam-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13.992a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7.894 11.44a1 1 0 0 1-1.788-.894a4.355 4.355 0 0 1 7.788 0a1 1 0 1 1-1.788.894a2.353 2.353 0 0 0-4.212 0M4.8 8.595a1 1 0 0 1-1.6-1.2a8.503 8.503 0 0 1 13.6 0a.999.999 0 1 1-1.6 1.2a6.503 6.503 0 0 0-10.4 0m-3.057-2.93A1 1 0 0 1 .257 4.329c4.843-5.377 13.13-5.813 18.512-.973q.513.461.974.973a.999.999 0 1 1-1.486 1.338a11 11 0 0 0-.826-.826C12.871.74 5.847 1.108 1.743 5.666z"></svg:path>`,
})
export class JamWifiIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWikipediaIcon],svg[jam-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.857.021h-3.982v.687h.398c.311 0 .592.161.751.431a.88.88 0 0 1 .016.872l-4.283 7.93l-1.95-4.69l1.836-3.402A2.17 2.17 0 0 1 14.548.708h.217V.02h-4.112v.688h.398c.311 0 .592.161.75.431a.88.88 0 0 1 .017.872l-1.333 2.467l-1.188-2.856a.65.65 0 0 1 .059-.62A.64.64 0 0 1 9.9.708h.435V.02H5.467v.688h.194c.909 0 1.723.546 2.074 1.391L9.49 6.32L7.535 9.942l-3.46-8.32a.65.65 0 0 1 .059-.62a.64.64 0 0 1 .544-.294h.598V.02H0v.688h.439c.908 0 1.723.546 2.074 1.391l3.988 9.591a.446.446 0 0 0 .804.042l.52-.964l1.986-3.676l1.912 4.598a.446.446 0 0 0 .804.041l.52-.963l4.819-8.92A2.17 2.17 0 0 1 19.77.709h.217V.02z"></svg:path>`,
})
export class JamWikipediaIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWordpressIcon],svg[jam-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.99 0C4.474 0 0 4.473 0 9.99s4.473 9.991 9.99 9.991s9.991-4.473 9.991-9.99S15.508 0 9.991 0zM1.428 9.99c0-1.208.268-2.357.742-3.394l4.085 10.9c-2.857-1.351-4.827-4.205-4.827-7.505zm8.564 8.343a9 9 0 0 1-2.42-.339l2.57-7.273l2.63 7.024l.06.116a8.8 8.8 0 0 1-2.84.472M11.168 6.08c.515-.027.98-.08.98-.08c.461-.053.408-.712-.053-.687c0 0-1.388.106-2.284.106c-.84 0-2.256-.106-2.256-.106c-.462-.026-.515.66-.055.688c0 0 .438.052.898.079l1.335 3.56l-1.874 5.475l-3.117-9.034c.517-.026.98-.079.98-.079c.46-.054.407-.713-.054-.688c0 0-1.387.106-2.281.106l-.551-.01c1.53-2.264 4.162-3.76 7.153-3.76c2.23 0 4.259.83 5.784 2.19l-.112-.008c-.841 0-1.437.713-1.437 1.48c0 .688.406 1.268.84 1.956c.329.557.706 1.27.706 2.3c0 .714-.28 1.542-.65 2.698l-.856 2.779zm3.127 11.117l2.617-7.365c.49-1.19.65-2.14.65-2.987q-.001-.46-.056-.858a8.15 8.15 0 0 1 1.049 4.003c-.001 3.077-1.713 5.763-4.26 7.207"></svg:path>`,
})
export class JamWordpressIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWorldIcon],svg[jam-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.252 8A8 8 0 0 0 2 10c0 .69.088 1.36.252 2H5.1a20 20 0 0 1 0-4zm.818-2h2.346c.266-1.217.65-2.307 1.121-3.214A8.04 8.04 0 0 0 3.07 6m14.678 2H14.9a20 20 0 0 1 0 4h2.848a8.05 8.05 0 0 0 0-4m-.818-2a8.04 8.04 0 0 0-3.467-3.214c.472.907.855 1.997 1.121 3.214zM7.112 8A18 18 0 0 0 7 10c0 .685.038 1.355.112 2h5.776a17.8 17.8 0 0 0 0-4zm.358-2h5.06a10.8 10.8 0 0 0-.783-2.177C11.119 2.568 10.447 2 10 2s-1.119.568-1.747 1.823C7.938 4.455 7.673 5.19 7.47 6m-4.4 8a8.04 8.04 0 0 0 3.467 3.214c-.472-.907-.855-1.997-1.121-3.214zm13.86 0h-2.346c-.266 1.217-.65 2.307-1.121 3.214A8.04 8.04 0 0 0 16.93 14m-9.46 0c.203.81.468 1.545.783 2.177C8.881 17.432 9.553 18 10 18s1.119-.568 1.747-1.823c.315-.632.58-1.367.783-2.177zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamWorldIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWrenchIcon],svg[jam-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.464 6.748c.06.942.45 1.865 1.164 2.578a4 4 0 0 0 3.866 1.036l1.114-.298l9.162 9.161a1 1 0 0 0 1.414-1.414L10.022 8.65l.298-1.115A4 4 0 0 0 9.284 3.67a4 4 0 0 0-2.578-1.164L7.93 3.728A3 3 0 1 1 3.686 7.97zm-.9-3.727L5.1 6.556a1 1 0 0 0 1.415-1.414L2.979 1.606a6.002 6.002 0 0 1 9.273 6.445l8.346 8.346a3 3 0 0 1-4.243 4.243L8.01 12.294A6.002 6.002 0 0 1 1.565 3.02zm15.5 15.496l1.42-1.41l-1.42-1.414l-1.419 1.414l1.418 1.41z"></svg:path>`,
})
export class JamWrenchIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWrenchFIcon],svg[jam-wrench-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.477 13.84l-4.243 4.243L8.01 11.86a6.002 6.002 0 0 1-6.445-9.273L5.1 6.12a1 1 0 0 0 1.415-1.414L2.979 1.17a6.002 6.002 0 0 1 9.273 6.445zm1.414 1.415l.707.707a3 3 0 0 1-4.243 4.243l-.707-.708z"></svg:path>`,
})
export class JamWrenchFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWriteIcon],svg[jam-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.9.9 0 0 1-1.11-.623a.9.9 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635z"></svg:path>`,
})
export class JamWriteIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamWriteFIcon],svg[jam-write-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.93.93 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4z"></svg:path>`,
})
export class JamWriteFIcon {
  readonly viewBox = input("-0.5 -0.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYahooIcon],svg[jam-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.077 2.96c-.489.132-4.957 3.597-5.252 4.448c-.064.293.007 3.141.072 3.568c.294.066 2.42.009 2.81.074l-.047.88c-.382-.03-3.083-.023-4.624-.023c-.783 0-3.3.087-4.074.065l.146-.838c.424-.032 2.18.078 2.565-.332c.191-.204.131-2.91.066-3.368c-.162-.49-4.078-5.397-5.102-6.2H0V0h8.895v.085c.008 0 .022.001.03.003l-.03.208v.937H6.213c1.195 1.749 2.91 3.86 3.64 4.873l3.583-3.246h-2.13l-.3-1.232h7.801l-.058.087l.028.002l-.557.808l-.018.003l-.225.332h-1.439c-.186.04-.35.077-.461.1m2.545 7.726l-.688-.034l-.769-.094l.007 1.317l.606.052l.653.048l.191-1.29zm1.337-6.297c-.232-.008-2.345-.208-2.62-.262l.032 5.564l1.196.097z"></svg:path>`,
})
export class JamYahooIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYahooCircleIcon],svg[jam-yahoo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M13.055 8.483c-.245.066-2.484 1.802-2.631 2.228c-.033.148.003 1.574.036 1.788c.147.033 1.212.005 1.408.037l-.024.441c-.191-.015-1.545-.011-2.317-.011c-.392 0-1.654.043-2.041.032l.073-.42c.213-.015 1.093.04 1.285-.166c.096-.102.066-1.458.034-1.688c-.082-.245-2.044-2.703-2.557-3.106H5V7h4.457v.043l.015.001l-.015.105v.469H8.113c.599.876 1.457 1.933 1.824 2.441l1.795-1.626h-1.067l-.15-.618h3.908l-.03.044l.015.001l-.28.405l-.008.001l-.113.167h-.721c-.093.02-.175.039-.231.05m1.275 3.87l-.345-.016l-.385-.047l.004.66l.303.026l.327.024zM15 9.2a28 28 0 0 1-1.313-.131l.017 2.788l.599.048z"></svg:path></svg:g>`,
})
export class JamYahooCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYahooSquareIcon],svg[jam-yahoo-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.055 8.483c-.245.066-2.484 1.802-2.631 2.228c-.033.148.003 1.574.036 1.788c.147.033 1.212.005 1.408.037l-.024.441c-.191-.015-1.545-.011-2.317-.011c-.392 0-1.654.043-2.041.032l.073-.42c.213-.015 1.093.04 1.285-.166c.096-.102.066-1.458.034-1.688c-.082-.245-2.044-2.703-2.557-3.106H5V7h4.457v.043l.015.001l-.015.105v.469H8.113c.599.876 1.457 1.933 1.824 2.441l1.795-1.626h-1.067l-.15-.618h3.908l-.03.044l.015.001l-.28.405l-.008.001l-.113.167h-.721c-.093.02-.175.039-.231.05m1.275 3.87l-.345-.016l-.385-.047l.004.66l.303.026l.327.024zM15 9.2a28 28 0 0 1-1.313-.131l.017 2.788l.599.048z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamYahooSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYelpIcon],svg[jam-yelp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.893 14.08L3.13 17.444a.903.903 0 0 0 .367 1.413l2.701 1.063a.903.903 0 0 0 1.233-.816l.117-4.407c.023-.889-1.09-1.304-1.655-.617m-.459-3.345L1.336 9.264a.903.903 0 0 0-1.207.82l-.093 2.902a.903.903 0 0 0 1.183.886l4.19-1.372c.845-.276.861-1.465.025-1.765m4.696.472l4.198-1.157a.903.903 0 0 0 .514-1.366l-1.595-2.426a.903.903 0 0 0-1.477-.043L9.134 9.749c-.531.713.14 1.694.996 1.458M7.09 1.12A1.07 1.07 0 0 0 5.74.04L2.416.946a1.07 1.07 0 0 0-.592 1.65l3.813 6.606q.045.082.105.153c.565.663 1.625.418 1.886-.36c.047-.139.06-.287.048-.434l-.585-7.44zm7.266 13.106l-4.215-1.294c-.85-.26-1.548.701-1.038 1.429l2.5 3.564a.903.903 0 0 0 1.46.025l1.749-2.317a.903.903 0 0 0-.456-1.407"></svg:path>`,
})
export class JamYelpIcon {
  readonly viewBox = input("-4.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYelpCircleIcon],svg[jam-yelp-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.2 12.095l-1.382 1.682a.45.45 0 0 0 .183.707l1.351.531a.45.45 0 0 0 .616-.408l.059-2.203a.467.467 0 0 0-.828-.309zm-.23-1.672l-2.05-.736a.45.45 0 0 0-.603.41l-.046 1.451c-.01.313.294.54.591.443l2.095-.685a.467.467 0 0 0 .013-.883m2.348.236l2.099-.579a.45.45 0 0 0 .257-.683l-.797-1.213a.45.45 0 0 0-.74-.021L10.82 9.93a.467.467 0 0 0 .498.729m-1.52-5.043a.535.535 0 0 0-.676-.541l-1.661.453a.535.535 0 0 0-.296.826L9.07 9.656a.5.5 0 0 0 .053.077a.555.555 0 0 0 .943-.18a.6.6 0 0 0 .024-.217zm3.633 6.552l-2.107-.647a.467.467 0 0 0-.52.715l1.25 1.782c.177.25.546.257.73.012l.875-1.158a.45.45 0 0 0-.228-.704"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamYelpCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYelpSquareIcon],svg[jam-yelp-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.2 12.095l-1.382 1.682a.45.45 0 0 0 .183.707l1.351.531a.45.45 0 0 0 .616-.408l.059-2.203a.467.467 0 0 0-.828-.309zm-.23-1.672l-2.05-.736a.45.45 0 0 0-.603.41l-.046 1.451c-.01.313.294.54.591.443l2.095-.685a.467.467 0 0 0 .013-.883m2.348.236l2.099-.579a.45.45 0 0 0 .257-.683l-.797-1.213a.45.45 0 0 0-.74-.021L10.82 9.93a.467.467 0 0 0 .498.729m-1.52-5.043a.535.535 0 0 0-.676-.541l-1.661.453a.535.535 0 0 0-.296.826L9.07 9.656a.5.5 0 0 0 .053.077a.555.555 0 0 0 .943-.18a.6.6 0 0 0 .024-.217zm3.633 6.552l-2.107-.647a.467.467 0 0 0-.52.715l1.25 1.782c.177.25.546.257.73.012l.875-1.158a.45.45 0 0 0-.228-.704"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamYelpSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYoutubeIcon],svg[jam-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.22.22 0 0 1-.314-.196V4.35a.22.22 0 0 1 .318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"></svg:path>`,
})
export class JamYoutubeIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYoutubeCircleIcon],svg[jam-youtube-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M12.923 6.526H7.077C5.93 6.526 5 7.446 5 8.58v2.89c0 1.135.93 2.054 2.077 2.054h5.846c1.147 0 2.077-.92 2.077-2.054V8.58c0-1.135-.93-2.054-2.077-2.054m-1.404 3.64l-2.735 1.29a.11.11 0 0 1-.157-.099v-2.66a.11.11 0 0 1 .16-.097l2.734 1.37a.11.11 0 0 1-.002.196"></svg:path></svg:g>`,
})
export class JamYoutubeCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[jamYoutubeSquareIcon],svg[jam-youtube-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.923 6.526H7.077C5.93 6.526 5 7.446 5 8.58v2.89c0 1.135.93 2.054 2.077 2.054h5.846c1.147 0 2.077-.92 2.077-2.054V8.58c0-1.135-.93-2.054-2.077-2.054m-1.404 3.64l-2.735 1.29a.11.11 0 0 1-.157-.099v-2.66a.11.11 0 0 1 .16-.097l2.734 1.37a.11.11 0 0 1-.002.196"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamYoutubeSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
