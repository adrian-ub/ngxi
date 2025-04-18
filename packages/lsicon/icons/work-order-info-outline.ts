import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderInfoOutlineIcon],svg[lsicon-work-order-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 6.5h4m-4-2h6m-6 7h2m2 2h2.5c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.55 0-1-.45-1-1s.45-1 1-1H13M11 8v1.167M11 13v2m-4-.5H3.5v-13h9v5"></svg:path>`,
})
export class LsiconWorkOrderInfoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
