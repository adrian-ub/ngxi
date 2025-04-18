import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconArrowUpLeft16Icon],svg[octicon-arrow-up-left-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.96 4.75A.75.75 0 0 1 4.71 4h6.01a.75.75 0 0 1 0 1.5h-4.2l5.26 5.26a.75.75 0 0 1-1.06 1.061l-5.26-5.26v4.2a.75.75 0 0 1-1.5 0Z"></svg:path>`,
})
export class OcticonArrowUpLeft16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
