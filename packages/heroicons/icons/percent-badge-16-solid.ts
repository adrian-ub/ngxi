import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsPercentBadge16SolidIcon],svg[heroicons-percent-badge-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.396 6.093a2 2 0 0 0 0 3.814a2 2 0 0 0 2.697 2.697a2 2 0 0 0 3.814 0a2.001 2.001 0 0 0 2.698-2.697a2 2 0 0 0-.001-3.814a2.001 2.001 0 0 0-2.697-2.698a2 2 0 0 0-3.814.001a2 2 0 0 0-2.697 2.697M6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.47-1.53a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 1 1-1.06-1.06zM11 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsPercentBadge16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
