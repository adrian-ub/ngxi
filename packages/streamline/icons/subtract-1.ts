import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSubtract1Icon],svg[streamline-subtract-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h13"></svg:path>`,
})
export class StreamlineSubtract1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
