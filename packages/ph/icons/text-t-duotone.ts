import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextTDuotoneIcon],svg[ph-text-t-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v128a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V56Z" opacity=".2"></svg:path><svg:path d="M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhTextTDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
