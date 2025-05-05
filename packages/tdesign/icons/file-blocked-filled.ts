import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileBlockedFilledIcon],svg[tdesign-file-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h10.101A7 7 0 0 1 21 11.674V6.586zM14.5 7.5V3L19 7.5z"></svg:path><svg:path fill="currentColor" d="M18 14.5a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18 14.5m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"></svg:path>`,
})
export class TdesignFileBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
