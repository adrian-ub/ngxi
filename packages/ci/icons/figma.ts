import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFigmaIcon],svg[ci-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15h3m-3 0a3 3 0 1 0 3 3v-3m-3 0a3 3 0 1 1 0-6m3 6v-3M9 9h3M9 9a3 3 0 0 1 0-6h3m0 6v3m0-3V3m0 6h3m-3 3a3 3 0 1 0 3-3m-3 3a3 3 0 0 1 3-3m-3-6h3a3 3 0 1 1 0 6"></svg:path>`,
})
export class CiFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
