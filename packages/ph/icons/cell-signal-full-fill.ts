import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullFillIcon],svg[ph-cell-signal-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40v160a16 16 0 0 1-16 16H32a16 16 0 0 1-11.3-27.32l160-160A16 16 0 0 1 208 40"></svg:path>`,
})
export class PhCellSignalFullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
