import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPinOutlineIcon],svg[lsicon-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 4v8M6 8H1m13.5-2.646v5l-1.008-.875L6.5 10.5v-5l6.99.729z"></svg:path>`,
})
export class LsiconPinOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
