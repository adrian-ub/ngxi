import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiOpenInBrowserIcon],svg[zmdi-open-in-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21q18 0 30.5 12.5T384 64v256q0 18-12.5 30.5T341 363h-85v-43h85V107H43v213h85v43H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zM192 149l85 86h-64v128h-42V235h-64z"></svg:path>`,
})
export class ZmdiOpenInBrowserIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
