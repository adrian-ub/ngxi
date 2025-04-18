import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSharingIcon],svg[hugeicons-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.5-11H20c.942 0 1.414 0 1.706.293S22 6.057 22 7v2.5M16 11l5.5-5.5M6.5 5H4c-.943 0-1.414 0-1.707.293S2 6.057 2 7v2.5M8 11L2.5 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSharingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
