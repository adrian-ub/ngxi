import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadDigitalDotIcon],svg[fad-digital-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M75.846 176a4 4 0 0 1 4.002 4.002V203.6a4 4 0 0 1-4.002 4.003H52.001A4 4 0 0 1 48 203.599v-23.597A4 4 0 0 1 52.001 176z"></svg:path>`,
})
export class FadDigitalDotIcon {
  readonly viewBox = input("0 0 128 256")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
