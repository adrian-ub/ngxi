import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareOffIcon],svg[mdi-square-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L19.11 21H3V4.89L1.11 3l1.28-1.27l19.72 19.73zM21 3H6.2L21 17.8z"></svg:path>`,
})
export class MdiSquareOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
