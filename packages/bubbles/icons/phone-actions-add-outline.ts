import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPhoneActionsAddOutlineIcon],svg[bubbles-phone-actions-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.818 11.471L1.9 12.554a3 3 0 0 0 4.243 0l1.591-1.591a1.5 1.5 0 0 0 0-2.122L4.64 5.747a1.5 1.5 0 0 0-2.263.153C-.864 10.3 1.1 14.934 5.083 18.918s8.62 5.946 13.022 2.705a1.5 1.5 0 0 0 .148-2.263l-3.094-3.094a1.5 1.5 0 0 0-2.121 0l-1.592 1.591a3 3 0 0 0 0 4.243l1.1 1.094M12.75 6a5.25 5.25 0 1 0 10.501 0A5.25 5.25 0 0 0 12.75 6M18 3.75v4.5M15.75 6h4.5"></svg:path>`,
})
export class BubblesPhoneActionsAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
