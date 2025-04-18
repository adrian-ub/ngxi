import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTennisIcon],svg[whh-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q139 0 257-68.5T443.5 257T512 0q139 0 257 68.5T955.5 255t68.5 257q-139 0-257 68.5T580.5 767T512 1024M4 448q22-174 146-298T448 4q-1 120-60.5 222T226 387.5T4 448m1016 128q-22 174-146 298t-298 146q1-120 60.5-222T798 636.5t222-60.5"></svg:path>`,
})
export class WhhTennisIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
