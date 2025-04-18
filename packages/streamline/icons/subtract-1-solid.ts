import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSubtract1SolidIcon],svg[streamline-subtract-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSubtract1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
