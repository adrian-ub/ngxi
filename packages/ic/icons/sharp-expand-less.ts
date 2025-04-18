import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpExpandLessIcon],svg[ic-sharp-expand-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14z"></svg:path>`,
})
export class IcSharpExpandLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
