import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaFigmaLogoOutlineIcon],svg[cuida-figma-logo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="figma-logo-outline"><svg:path fill="currentColor" fill-rule="evenodd" d="M9 4a2 2 0 1 0 0 4h2V4zm4 0v4h2a2 2 0 0 0 0-4zm4.646 5A3.999 3.999 0 0 0 15 2H9a4 4 0 0 0-2.646 7a4 4 0 0 0 0 6A4 4 0 1 0 13 18v-2.536A4 4 0 0 0 15 16a4 4 0 0 0 2.646-7M13 12a2 2 0 1 0 4.001 0A2 2 0 0 0 13 12m-4 4a2 2 0 1 0 2 2v-2zm2-2v-4H9a2 2 0 1 0 0 4z" class="Vector (Stroke)" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CuidaFigmaLogoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
