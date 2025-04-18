import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTriangularFlagLineIcon],svg[ri-triangular-flag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.144V16h12.34zM4 2.932c0-.86 1.015-1.32 1.66-.75l15.99 14.067c.692.61.262 1.751-.66 1.751H6v4H4z"></svg:path>`,
})
export class RiTriangularFlagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
