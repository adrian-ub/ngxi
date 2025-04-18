import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleDuotoneIcon],svg[ph-tag-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-45.62 68.44a8 8 0 0 1-6.66 3.56H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h147.72a8 8 0 0 1 6.66 3.56Z" opacity=".2"></svg:path><svg:path d="M246.66 123.56L201 55.13A15.94 15.94 0 0 0 187.72 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h147.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H40V64h147.72l42.66 64Z"></svg:path></svg:g>`,
})
export class PhTagSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
