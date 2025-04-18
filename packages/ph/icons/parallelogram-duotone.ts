import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParallelogramDuotoneIcon],svg[ph-parallelogram-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m239.29 59.28l-64.8 144a8 8 0 0 1-7.3 4.72H24a8 8 0 0 1-7.3-11.28l64.8-144A8 8 0 0 1 88.81 48H232a8 8 0 0 1 7.29 11.28" opacity=".2"></svg:path><svg:path d="M245.43 47.31A15.94 15.94 0 0 0 232 40H88.81a16 16 0 0 0-14.59 9.43l-64.8 144A16 16 0 0 0 24 216h143.19a16 16 0 0 0 14.59-9.43l64.8-144a16 16 0 0 0-1.15-15.26M167.19 200H24L88.81 56H232Z"></svg:path></svg:g>`,
})
export class PhParallelogramDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
