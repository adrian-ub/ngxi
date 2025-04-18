import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpDuotoneIcon],svg[ph-arrow-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 144H56l72-72Z" opacity=".2"></svg:path><svg:path d="M133.66 66.34a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 152h64v72a8 8 0 0 0 16 0v-72h64a8 8 0 0 0 5.66-13.66ZM75.31 136L128 83.31L180.69 136ZM224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhArrowLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
