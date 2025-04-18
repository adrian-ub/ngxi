import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAbnormalOutlineIcon],svg[lsicon-work-order-abnormal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 14.5H3.5v-13h9V7M5 6.5h4m-4-2h6m-.5 7v-2m3 2a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-3 1.25h.005v.005H10.5zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"></svg:path>`,
})
export class LsiconWorkOrderAbnormalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
