import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHdFilledIcon],svg[tdesign-hd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14v-4h2v4z"></svg:path><svg:path fill="currentColor" d="M23 3H1v18h22zM7 11h2V8h2v8H9v-3H7v3H5V8h2zm10-3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4V8z"></svg:path>`,
})
export class TdesignHdFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
