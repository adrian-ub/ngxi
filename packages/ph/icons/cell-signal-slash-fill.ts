import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashFillIcon],svg[ph-cell-signal-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 221.92a8 8 0 0 1-11.3-.54l-5.51-6.06a16.1 16.1 0 0 1-4.57.68H32a16 16 0 0 1-15.06-10.59a16.4 16.4 0 0 1 4.07-17l79.13-79.12l-57.88-63.67a8.22 8.22 0 0 1 .14-11.38a8 8 0 0 1 11.48.37l160 176a8 8 0 0 1-.5 11.31M201 172.66a4 4 0 0 0 7-2.69V40a16 16 0 0 0-27.32-11.32l-55.21 55.2a4 4 0 0 0-.13 5.52Z"></svg:path>`,
})
export class PhCellSignalSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
