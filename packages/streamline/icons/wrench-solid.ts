import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWrenchSolidIcon],svg[streamline-wrench-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.477.086a4.3 4.3 0 0 0-4.884 5.68L.461 10.898a1.5 1.5 0 0 0 .022 2.143l.56.538a1.5 1.5 0 0 0 2.094-.016L8.34 8.417a4.31 4.31 0 0 0 5.56-4.913a1.26 1.26 0 0 0-.579-.844a.5.5 0 0 0-.615.073l-2 2l-.006.006a.5.5 0 0 1-.72 0l-.027-.025l-.746-.668a.5.5 0 0 1 .008-.688l1.998-1.998a.5.5 0 0 0 .107-.55a1.26 1.26 0 0 0-.843-.724" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWrenchSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
