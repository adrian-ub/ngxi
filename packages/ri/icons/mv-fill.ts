import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMvFillIcon],svg[ri-mv-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zm10 8.178A3 3 0 1 0 14 15V7.999h3V6h-5z"></svg:path>`,
})
export class RiMvFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
