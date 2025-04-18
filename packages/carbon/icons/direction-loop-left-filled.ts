import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionLoopLeftFilledIcon],svg[carbon-direction-loop-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 18h2v8h-2ZM4 15l7 7l1.414-1.414L7.828 16H21a5 5 0 1 0-5-5v1h2v-1a3 3 0 1 1 3 3H7.828l4.586-4.586L11 8Z"></svg:path><svg:path fill="currentColor" d="M2 4v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m14 14h2v8h-2ZM4 15l7-7l1.414 1.414L7.828 14H21a3 3 0 1 0-3-3v1h-2v-1a5 5 0 1 1 5 5H7.828l4.586 4.586L11 22Z"></svg:path>`,
})
export class CarbonDirectionLoopLeftFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
