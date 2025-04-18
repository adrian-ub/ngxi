import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisCornerDownRightIcon],svg[uis-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 15.7L14.8 11c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.9 2.9h-7c-1.7 0-3-1.3-3-3V3c0-.6-.4-1-1-1s-1 .4-1 1v9.4c0 2.8 2.2 5 5 5h7l-2.9 2.9c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
