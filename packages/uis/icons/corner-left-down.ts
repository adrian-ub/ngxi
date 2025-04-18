import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisCornerLeftDownIcon],svg[uis-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4.3h-9.4c-2.8 0-5 2.2-5 5v7l-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.2.2.4.3.7.3s.5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.9 2.9v-7c0-1.7 1.3-3 3-3H21c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
