import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeTakeawayCupIcon],svg[streamline-coffee-takeaway-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 3h-9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 0l-1-2.5h-7L2.5 3m9 4l-1 6.5h-7L2.5 7"></svg:path>`,
})
export class StreamlineCoffeeTakeawayCupIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
