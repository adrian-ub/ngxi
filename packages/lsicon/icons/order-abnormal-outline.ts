import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderAbnormalOutlineIcon],svg[lsicon-order-abnormal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 2.5H4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-1.5M8 5.5V10m1.875-6.5l.422-1.35a.5.5 0 0 0-.477-.65H6.18a.5.5 0 0 0-.477.65l.422 1.35zM8 11.75h.005v.005H8zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"></svg:path>`,
})
export class LsiconOrderAbnormalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
