import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderDoneOutlineIcon],svg[lsicon-order-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 2.5h-2v12h9v-12h-2m-5 6l2 2L11 7M5.5 1.5h5l-.625 2h-3.75z"></svg:path>`,
})
export class LsiconOrderDoneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
