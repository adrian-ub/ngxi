import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusBoldIcon],svg[ph-folder-simple-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176.89A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20m-4 128H44V68h48l28.8 21.6A12 12 0 0 0 128 92h84Zm-108-64h48a12 12 0 0 1 0 24h-48a12 12 0 0 1 0-24"></svg:path>`,
})
export class PhFolderSimpleMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
