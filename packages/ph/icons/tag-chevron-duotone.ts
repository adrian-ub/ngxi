import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagChevronDuotoneIcon],svg[ph-tag-chevron-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-45.62 68.44a8 8 0 0 1-6.66 3.56H32l48-72l-48-72h155.72a8 8 0 0 1 6.66 3.56Z" opacity=".2"></svg:path><svg:path d="M246.66 123.56L201 55.12A16 16 0 0 0 187.72 48H32a8 8 0 0 0-6.66 12.44L70.39 128l-45 67.56A8 8 0 0 0 32 208h155.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H47l39.71-59.56a8 8 0 0 0 0-8.88L47 64h140.72l42.67 64Z"></svg:path></svg:g>`,
})
export class PhTagChevronDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
