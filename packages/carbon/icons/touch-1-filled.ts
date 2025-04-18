import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTouch1FilledIcon],svg[carbon-touch-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a6.007 6.007 0 0 0-6 6h2a4 4 0 0 1 8 0h2a6.007 6.007 0 0 0-6-6"></svg:path><svg:path fill="currentColor" d="M21 30h-4.44a4 4 0 0 1-2.708-1.057l-9.2-8.466a2.002 2.002 0 0 1 .118-3.055a2.074 2.074 0 0 1 2.658.173L11 20.857V8a2 2 0 0 1 4 0v7a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v7a6 6 0 0 1-6 6"></svg:path>`,
})
export class CarbonTouch1FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
