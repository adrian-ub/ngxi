import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitReorderIcon],svg[formkit-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="3.5" cy="3.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="3.5" cy="8.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="3.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class FormkitReorderIcon {
  readonly viewBox = input("0 0 7 16")
  readonly width = input("0.44em")
  readonly height = input("1em")
}
