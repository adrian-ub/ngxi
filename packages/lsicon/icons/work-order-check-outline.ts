import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderCheckOutlineIcon],svg[lsicon-work-order-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 14.5h-3v-13h9V7M5 4.5h6m-6 2h4m4.5 8l-2-2m1-1.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class LsiconWorkOrderCheckOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
