import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockDuotoneIcon],svg[ph-code-block-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 32v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h104a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m58.34 101.66l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 64l26.35 26.34a8 8 0 0 1-11.32 11.32m40 0a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32l-32-32a8 8 0 0 0-11.32 11.32L124.69 64L98.34 90.34a8 8 0 0 0 0 11.32M200 40h-24a8 8 0 0 0 0 16h24v144H56v-64a8 8 0 0 0-16 0v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhCodeBlockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
