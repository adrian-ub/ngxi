import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitCornerUpRightIcon],svg[uit-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.852 7.647l-5.5-5.5a.5.5 0 0 0-.707.707L18.29 7.5H8.889A4.394 4.394 0 0 0 4.5 11.889V21.5a.5.5 0 1 0 1 0v-9.611A3.393 3.393 0 0 1 8.889 8.5h9.402l-4.646 4.646a.5.5 0 1 0 .707.708l5.5-5.5a.5.5 0 0 0 0-.707"></svg:path>`,
})
export class UitCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
