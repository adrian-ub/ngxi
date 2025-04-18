import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCompressLinesIcon],svg[uil-compress-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20h-4v-3.59l.79.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42l.79-.8V20H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M7 4h4v3.59l-.79-.8a1 1 0 1 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 1 0-1.42-1.42l-.79.8V4h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2"></svg:path>`,
})
export class UilCompressLinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
