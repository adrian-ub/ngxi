import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsDotsYIcon],svg[pepicons-dots-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="10" cy="15" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="5" r="2"></svg:circle></svg:g>`,
})
export class PepiconsDotsYIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
