import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderAbnormalFilledIcon],svg[lsicon-order-abnormal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.18 2a1 1 0 0 1 1-1h3.64a1 1 0 0 1 1 1H12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm4.64 0H6.18l.313 1h3.014zm-2.57 9.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M7.5 5.5V10h1V5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderAbnormalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
