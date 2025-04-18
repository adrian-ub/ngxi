import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisCornerRightDownIcon],svg[uis-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 13.4c-.4-.4-1-.4-1.4 0l-2.9 2.9v-8c0-2.2-1.8-4-4-4H3c-.6 0-1 .4-1 1s.4 1 1 1h10.4c1.1 0 2 .9 2 2v8l-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.2.2.4.3.7.3s.5-.1.7-.3l4.6-4.6c.4-.4.4-1.1 0-1.4"></svg:path>`,
})
export class UisCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
