import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phControlDuotoneIcon],svg[ph-control-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 120H56l72-72Z" opacity=".2"></svg:path><svg:path d="m205.66 114.34l-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 128h144a8 8 0 0 0 5.66-13.66M75.31 112L128 59.31L180.69 112Z"></svg:path></svg:g>`,
})
export class PhControlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
