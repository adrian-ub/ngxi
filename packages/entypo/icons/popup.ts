import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoPopupIcon],svg[entypo-popup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H7.979C6.88 2 6 2.88 6 3.98V12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10H8V4h8zM4 10H2v6c0 1.1.9 2 2 2h6v-2H4z"></svg:path>`,
})
export class EntypoPopupIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
