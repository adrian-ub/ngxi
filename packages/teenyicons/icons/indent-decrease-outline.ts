import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentDecreaseOutlineIcon],svg[teenyicons-indent-decrease-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 7.5l-.354-.354a.5.5 0 0 0 0 .708zM3 4h12V3H3zm4 4h8V7H7zm-4 4h12v-1H3zm-.146-2.854l-2-2l-.708.708l2 2zm-2-1.292l2-2l-.708-.708l-2 2z"></svg:path>`,
})
export class TeenyiconsIndentDecreaseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
