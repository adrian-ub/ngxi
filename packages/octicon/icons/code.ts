import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCodeIcon],svg[octicon-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9.5 3L8 4.5L11.5 8L8 11.5L9.5 13L14 8L9.5 3zm-5 0L0 8l4.5 5L6 11.5L2.5 8L6 4.5L4.5 3z" fill="currentColor"></svg:path>`,
})
export class OcticonCodeIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
