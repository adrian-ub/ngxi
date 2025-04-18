import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadDigitalColonIcon],svg[fad-digital-colon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M76.846 80a4 4 0 0 1 4.002 4.002V107.6a4 4 0 0 1-4.002 4.003H53.001A4 4 0 0 1 49 107.599V84.002A4 4 0 0 1 53.001 80zm0 64a4 4 0 0 1 4.002 4.002V171.6a4 4 0 0 1-4.002 4.003H53.001A4 4 0 0 1 49 171.599v-23.597A4 4 0 0 1 53.001 144z"></svg:path>`,
})
export class FadDigitalColonIcon {
  readonly viewBox = input("0 0 128 256")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
