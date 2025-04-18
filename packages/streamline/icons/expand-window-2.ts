import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineExpandWindow2Icon],svg[streamline-expand-window-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8v4.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H6m4 0h3.5V4m0-3.5L7 7"></svg:path>`,
})
export class StreamlineExpandWindow2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
