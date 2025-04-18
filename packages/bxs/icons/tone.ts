import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsToneIcon],svg[bxs-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m-1 9H4.069a8 8 0 0 1 .52-2H11zm0 4H4.589a8 8 0 0 1-.52-2H11zm0-10.931V7H5.765A8 8 0 0 1 11 4.069M5.765 17H11v2.931A8 8 0 0 1 5.765 17"></svg:path>`,
})
export class BxsToneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
