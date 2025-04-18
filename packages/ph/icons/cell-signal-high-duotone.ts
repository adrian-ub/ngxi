import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighDuotoneIcon],svg[ph-cell-signal-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 60.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M152 80v120H32Zm40 120h-24V64l24-24Z"></svg:path></svg:g>`,
})
export class PhCellSignalHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
