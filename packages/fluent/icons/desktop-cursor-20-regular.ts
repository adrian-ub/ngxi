import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopCursor20RegularIcon],svg[fluent-desktop-cursor-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3v2H5.5a.5.5 0 0 0 0 1H11l.001-1H8v-2h3.002l.001-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8.843l.872.864A2 2 0 0 0 18 13V4a2 2 0 0 0-2-2zm8.857 8.146a.5.5 0 0 0-.852.354l-.005 8a.5.5 0 0 0 .9.301l1.995-2.647l3.496.776a.5.5 0 0 0 .46-.843z"></svg:path>`,
})
export class FluentDesktopCursor20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
