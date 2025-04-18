import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderCloseOutlineIcon],svg[lsicon-order-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 14.5H3.5v-13h9V7M5 4.5h6m-6 2h4m.5 4l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m4-1a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path>`,
})
export class LsiconOrderCloseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
