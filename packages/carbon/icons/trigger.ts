import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTriggerIcon],svg[carbon-trigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 19l1.4 1.4L9 14.8l5.6 5.6L16 19l-7-7zm26.6-7.4L23 17.2l-5.6-5.6L16 13l7 7l7-7zM9 22a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class CarbonTriggerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
