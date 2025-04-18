import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiDirectionDownIcon],svg[wi-direction-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.77 16.47c0 .22.08.4.25.55l2.4 2.45c.16.16.35.23.58.23c.24 0 .43-.08.59-.23l2.4-2.45c.16-.14.24-.33.24-.55s-.08-.41-.23-.57s-.34-.23-.56-.23s-.42.08-.57.23l-1.06 1.05v-6.59c0-.22-.08-.41-.24-.56c-.15-.14-.34-.22-.57-.22s-.42.07-.58.22s-.24.34-.24.56v6.59l-1.06-1.05a.74.74 0 0 0-.55-.23c-.22 0-.42.08-.57.23s-.23.35-.23.57"></svg:path>`,
})
export class WiDirectionDownIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
