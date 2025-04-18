import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFigmaLineIcon],svg[ri-figma-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3A4 4 0 0 1 5 12a4 4 0 0 1 1.354-3A4 4 0 0 1 5 6m6 4H9a2 2 0 1 0 0 4h2zm2 2a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-4a2 2 0 1 0 0-4h-2v4zM9 4a2 2 0 1 0 0 4h2V4zm2 12H9a2 2 0 1 0 2 2z"></svg:path>`,
})
export class RiFigmaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
