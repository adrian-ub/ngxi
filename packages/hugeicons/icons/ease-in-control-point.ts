import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseInControlPointIcon],svg[hugeicons-ease-in-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 3S13 19 2 19m9 0h2m3 0h2m0 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseInControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
