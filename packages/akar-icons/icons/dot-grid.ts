import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDotGridIcon],svg[akar-icons-dot-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="4" cy="4" r="1" transform="rotate(90 4 4)"></svg:circle><svg:circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"></svg:circle><svg:circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"></svg:circle><svg:circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"></svg:circle><svg:circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"></svg:circle><svg:circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"></svg:circle><svg:circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"></svg:circle><svg:circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"></svg:circle><svg:circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"></svg:circle></svg:g>`,
})
export class AkarIconsDotGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
