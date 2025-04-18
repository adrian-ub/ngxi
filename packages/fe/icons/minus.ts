import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMinusIcon],svg[fe-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 11h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2"></svg:path>`,
})
export class FeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
