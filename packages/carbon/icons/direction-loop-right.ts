import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionLoopRightIcon],svg[carbon-direction-loop-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M9 4a7.01 7.01 0 0 1 7 7v3h-2v-3a5 5 0 1 0-5 5h17.172l-4.586-4.586L23 10l7 7l-7 7l-1.414-1.414L26.172 18H9A7 7 0 0 1 9 4"></svg:path>`,
})
export class CarbonDirectionLoopRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
