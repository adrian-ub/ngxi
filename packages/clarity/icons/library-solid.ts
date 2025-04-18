import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLibrarySolidIcon],svg[clarity-library-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3h-7.5A1.15 1.15 0 0 0 4 4v29h10V4a1.15 1.15 0 0 0-1.25-1" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="m33.77 31.09l-6.94-18.3a1 1 0 0 0-1.29-.58L22 13.59V9a1 1 0 0 0-1-1h-5v25h6V14.69L28.93 33Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLibrarySolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
