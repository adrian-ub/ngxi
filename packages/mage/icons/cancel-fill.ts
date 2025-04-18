import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCancelFillIcon],svg[mage-cancel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.18 10.18 0 0 0 12 1.75m6.69 15.89L6.37 5.31a8.75 8.75 0 0 1 12.32 12.33"></svg:path>`,
})
export class MageCancelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
