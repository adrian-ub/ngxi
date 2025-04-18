import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProgressBar2Icon],svg[streamline-business-progress-bar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M.5 11H4m3 0h6.5m-2-2l2 2l-2 2m-6-3.5V1m0 0L10 3.5L5.5 6z"></svg:path>`,
})
export class StreamlineBusinessProgressBar2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
