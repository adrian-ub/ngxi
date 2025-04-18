import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisArrowDownRightIcon],svg[uis-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6c-.6 0-1 .4-1 1v7.6L7.7 6.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8.3 8.3H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
