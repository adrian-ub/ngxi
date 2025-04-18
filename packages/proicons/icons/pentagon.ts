import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPentagonIcon],svg[proicons-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.13 3.655a3.18 3.18 0 0 1 3.74 0l6.069 4.409a3.18 3.18 0 0 1 1.155 3.557l-2.318 7.134a3.18 3.18 0 0 1-3.025 2.198H8.249a3.18 3.18 0 0 1-3.025-2.198L2.906 11.62A3.18 3.18 0 0 1 4.06 8.063z"></svg:path>`,
})
export class ProiconsPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
