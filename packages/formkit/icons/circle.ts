import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitCircleIcon],svg[formkit-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="16" fill="currentColor"></svg:circle>`,
})
export class FormkitCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
