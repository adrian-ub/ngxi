import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHdIcon],svg[tdesign-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm4 3v3h2V8h2v8H9v-3H7v3H5V8zm6 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4zm2 2v4h2v-4z"></svg:path>`,
})
export class TdesignHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
