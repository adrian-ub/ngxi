import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPesetaSignIcon],svg[fa6-solid-peseta-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32c-17.7 0-32 14.3-32 32v96c-17.7 0-32 14.3-32 32s14.3 32 32 32v224c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h96c77.4 0 142-55 156.8-128h3.2c17.7 0 32-14.3 32-32s-14.3-32-32-32h-3.2C334 87 269.4 32 192 32zm218.5 128H96V96h96c41.8 0 77.4 26.7 90.5 64M96 224h186.5c-13.2 37.3-48.7 64-90.5 64H96z"></svg:path>`,
})
export class Fa6SolidPesetaSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
