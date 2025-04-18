import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFridgeIcon],svg[bx-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 2l.001 5H10V7H8v2H6V4zM6 20v-9h2v3h2v-3h8.001l.001 9z"></svg:path>`,
})
export class BxFridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
