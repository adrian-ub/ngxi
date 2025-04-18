import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGrabber24Icon],svg[octicon-grabber-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m7-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m7-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 18a1 1 0 1 1 0-2a1 1 0 0 1 0 2m6 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class OcticonGrabber24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
