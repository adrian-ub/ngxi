import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBackIcon],svg[ls-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M489 65v563L0 347z"></svg:path>`,
})
export class LsBackIcon {
  readonly viewBox = input("0 0 489 628")
  readonly width = input("0.78em")
  readonly height = input("1em")
}
