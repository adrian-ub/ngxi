import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsChatIcon],svg[grommet-icons-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 1H5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12l6 5V5a4 4 0 0 0-4-4Zm0 6H6m13 4h-9"></svg:path>`,
})
export class GrommetIconsChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
