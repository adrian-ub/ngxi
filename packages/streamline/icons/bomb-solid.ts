import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBombSolidIcon],svg[streamline-bomb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.543 2.41a6.5 6.5 0 1 1-1.276-.794A3.75 3.75 0 0 1 12.35 0h.899a.75.75 0 0 1 0 1.5h-.9a2.25 2.25 0 0 0-1.807.91ZM6.5 5.125A2.375 2.375 0 0 0 4.125 7.5a.625.625 0 1 1-1.25 0A3.625 3.625 0 0 1 6.5 3.875a.625.625 0 1 1 0 1.25" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBombSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
