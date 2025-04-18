import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilWindowIcon],svg[uil-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5a1 1 0 1 0 1 1a1 1 0 0 0-1-1M6 5a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6-4H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3m1 19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h18Zm0-11H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
