import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleDuotoneIcon],svg[ph-stack-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 104l-112 64l-112-64l112-64Z" opacity=".2"></svg:path><svg:path d="m12 111l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9m116-61.79L223.87 104L128 158.79L32.13 104ZM247 140a8 8 0 0 1-3 11l-112 64a8 8 0 0 1-7.94 0L12 151a8 8 0 1 1 8-13.95l108 61.74l108-61.74a8 8 0 0 1 11 2.95"></svg:path></svg:g>`,
})
export class PhStackSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
