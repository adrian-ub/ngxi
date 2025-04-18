import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHDuotoneIcon],svg[ph-text-h-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v144H56V56Z" opacity=".2"></svg:path><svg:path d="M208 56v144a8 8 0 0 1-16 0v-64H64v64a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v64h128V56a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhTextHDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
