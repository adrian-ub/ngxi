import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisCornerUpRightIcon],svg[uis-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.4 6.9l-4.6-4.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.9 2.9h-8c-2.2 0-4 1.8-4 4V21c0 .6.4 1 1 1s1-.4 1-1V10.6c0-1.1.9-2 2-2h8l-2.9 2.9c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
