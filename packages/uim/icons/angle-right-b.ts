import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAngleRightBIcon],svg[uim-angle-right-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"></svg:path>`,
})
export class UimAngleRightBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
