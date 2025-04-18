import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCrownSolidIcon],svg[streamline-crown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.41 1.713a.5.5 0 0 0-.82 0L3.432 6.225L.854 3.646A.5.5 0 0 0 0 4v6.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a.5.5 0 0 0-.854-.354l-2.578 2.579z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCrownSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
