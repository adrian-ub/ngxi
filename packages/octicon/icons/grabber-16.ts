import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGrabber16Icon],svg[octicon-grabber-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-4 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5-9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class OcticonGrabber16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
