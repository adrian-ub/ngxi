import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUpToTopIcon],svg[carbon-up-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14L6 24l1.4 1.4l8.6-8.6l8.6 8.6L26 24zM4 8h24v2H4z"></svg:path>`,
})
export class CarbonUpToTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
