import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUnreadBoldIcon],svg[solar-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12m-4.546-5.097a.75.75 0 0 1 .143 1.052l-6.858 9a.75.75 0 0 1-1.161.038l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.538 2.907l6.3-8.269a.75.75 0 0 1 1.052-.142" clip-rule="evenodd"></svg:path>`,
})
export class SolarUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
