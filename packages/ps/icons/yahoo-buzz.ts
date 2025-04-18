import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psYahooBuzzIcon],svg[ps-yahoo-buzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 462q-64 0-109-45T6 309V2h88v307q0 27 19.5 46.5T160 375t46.5-19.5T226 309q0-28-19.5-47T160 243h-44v-88h44q64 0 109 45t45 109q0 63-45 108t-109 45"></svg:path>`,
})
export class PsYahooBuzzIcon {
  readonly viewBox = input("0 0 320 488")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
