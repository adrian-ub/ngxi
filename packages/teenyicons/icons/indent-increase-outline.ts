import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentIncreaseOutlineIcon],svg[teenyicons-indent-increase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 7.5l.354.354a.5.5 0 0 0 0-.708zM3 4h12V3H3zm4 4h8V7H7zm-4 4h12v-1H3zM.854 9.854l2-2l-.708-.708l-2 2zm2-2.708l-2-2l-.708.708l2 2z"></svg:path>`,
})
export class TeenyiconsIndentIncreaseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
