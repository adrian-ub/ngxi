import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumIcon],svg[ph-cell-signal-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 112v88a8 8 0 0 1-16 0v-88a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCellSignalMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
