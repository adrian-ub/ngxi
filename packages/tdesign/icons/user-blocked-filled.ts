import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserBlockedFilledIcon],svg[tdesign-user-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m1 16a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18 14.5m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M12.255 14A6.97 6.97 0 0 0 11 18c0 1.487.464 2.866 1.255 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
