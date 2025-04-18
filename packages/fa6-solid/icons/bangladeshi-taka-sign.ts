import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBangladeshiTakaSignIcon],svg[fa6-solid-bangladeshi-taka-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 32.3C18.4 30.1 2.4 42.5.2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8L64 160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v160c0 53 43 96 96 96h32c106 0 192-86 192-192v-32c0-53-43-96-96-96h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128h-32c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-31.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z"></svg:path>`,
})
export class Fa6SolidBangladeshiTakaSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
