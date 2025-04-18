import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpDuotoneIcon],svg[ph-arrow-u-right-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80h-96l48-48Z" opacity=".2"></svg:path><svg:path d="m221.66 74.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 88h40v80a48 48 0 0 1-96 0V80a8 8 0 0 0-16 0v88a64 64 0 0 0 128 0V88h40a8 8 0 0 0 5.66-13.66M139.31 72L168 43.31L196.69 72Z"></svg:path></svg:g>`,
})
export class PhArrowURightUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
