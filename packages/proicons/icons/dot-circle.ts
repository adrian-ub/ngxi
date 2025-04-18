import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDotCircleIcon],svg[proicons-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:circle cx="12" cy="12" r="2.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsDotCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
