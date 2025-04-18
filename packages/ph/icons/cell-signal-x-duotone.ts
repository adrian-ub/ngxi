import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXDuotoneIcon],svg[ph-cell-signal-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v120l-45.66 45.66a8 8 0 0 1-5.65 2.34H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40" opacity=".2"></svg:path><svg:path d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.35 18.35a8 8 0 0 1-11.31-11.32L172.68 176l-18.34-18.35a8 8 0 0 1 11.31-11.31L184 164.68l18.34-18.34a8 8 0 0 1 11.32 11.31L195.31 176ZM120 200H32L192 40v72a8 8 0 0 0 16 0V40a16 16 0 0 0-27.31-11.32l-160 160A16 16 0 0 0 32 216h88a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhCellSignalXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
