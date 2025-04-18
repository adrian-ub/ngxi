import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDivisionCircleSolidIcon],svg[streamline-division-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.25 7a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 .25 7m3.794-.62a.625.625 0 1 0 0 1.25h5.977a.625.625 0 0 0 0-1.25zM7 5.012a.875.875 0 1 1 0-1.75a.875.875 0 1 1 0 1.75m0 5.74A.875.875 0 1 1 7 9a.875.875 0 0 1 0 1.75Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDivisionCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
