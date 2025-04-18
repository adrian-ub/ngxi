import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDownToBottomIcon],svg[carbon-down-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18L6 8l1.4-1.4l8.6 8.6l8.6-8.6L26 8zM4 22h24v2H4z"></svg:path>`,
})
export class CarbonDownToBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
