import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciListMinusIcon],svg[ci-list-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17h-9v-2h9v2Zm-11 0H2v-2h9v2Zm4-4H2v-2h13v2Zm0-4H2V7h13v2Z"></svg:path>`,
})
export class CiListMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
