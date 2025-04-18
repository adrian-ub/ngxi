import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsBicycleIcon],svg[akar-icons-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="15" r="4"></svg:circle><svg:circle cx="18" cy="15" r="4"></svg:circle><svg:path d="m6 15l2-7h7.5M6 5h3m9 10L15 5h4m0 0h.5A1.5 1.5 0 0 1 21 6.5v0A1.5 1.5 0 0 1 19.5 8H19"></svg:path></svg:g>`,
})
export class AkarIconsBicycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
