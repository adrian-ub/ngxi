import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasDotGridIcon],svg[pajamas-dot-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 2.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m11.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-1.25 7a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m1.25 4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M2.25 9.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m7-1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M8 15a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 8 15M9.25 2.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M2.25 15a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class PajamasDotGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
