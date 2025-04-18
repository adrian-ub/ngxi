import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCropSelectionSolidIcon],svg[streamline-crop-selection-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a1 1 0 0 0-2 0v1.5H1a1 1 0 0 0 0 2h1.5V9A2.5 2.5 0 0 0 5 11.5h4.5V13a1 1 0 1 0 2 0v-1.5H13a1 1 0 1 0 0-2H5a.5.5 0 0 1-.5-.5zM6 3.5a1 1 0 0 1 1-1h2A2.5 2.5 0 0 1 11.5 5v2a1 1 0 1 1-2 0V5a.5.5 0 0 0-.5-.5H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCropSelectionSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
