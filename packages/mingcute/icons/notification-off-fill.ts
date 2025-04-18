import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteNotificationOffFillIcon],svg[mingcute-notification-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M14.83 19a3.001 3.001 0 0 1-5.66 0zM12 2a7 7 0 0 1 7 7v3.528a1 1 0 0 0 .106.447l1.716 3.433A1.1 1.1 0 0 1 19.838 18h-.424l1.071 1.071a1 1 0 0 1-1.414 1.414L3.515 4.93a1 1 0 1 1 1.414-1.414l1.392 1.392A6.99 6.99 0 0 1 12.001 2M5.023 8.427L14.596 18H4.162a1.1 1.1 0 0 1-.984-1.592l1.717-3.433A1 1 0 0 0 5 12.528V9q0-.29.023-.573"></svg:path></svg:g>`,
})
export class MingcuteNotificationOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
