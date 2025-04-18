import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWifiIcon],svg[tdesign-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.193 9.808c-5.077-5.077-13.308-5.077-18.385 0l-.707.707L.687 9.1l.707-.707c5.858-5.857 15.355-5.857 21.213 0l.707.707l-1.414 1.415zm-4.597 4.596a6.5 6.5 0 0 0-9.192 0l-.707.707l-1.414-1.414l.707-.707a8.5 8.5 0 0 1 12.02 0l.708.707l-1.415 1.414zm-6.01 3.182a2 2 0 0 1 2.829 0l.707.707L12 20.414l-2.12-2.121z"></svg:path>`,
})
export class TdesignWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
