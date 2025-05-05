import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileIconFilledIcon],svg[tdesign-file-icon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 18v-4h.5v4z"></svg:path><svg:path fill="currentColor" d="M15.414 1H3v22h18v-3h-2v-6h-.5v6h-2v-8h2.75c.966 0 1.75.784 1.75 1.75V6.586zM14.5 7.5V3L19 7.5zM7 12v8H5v-8zm2.5 2v4H11v2H9.25a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75H11v2zm3.75-2h1c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 20h-1a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75"></svg:path>`,
})
export class TdesignFileIconFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
