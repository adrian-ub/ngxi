import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpDuotoneIcon],svg[ph-arrow-bend-right-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 80h-96l48-48Z" opacity=".2"></svg:path><svg:path d="m205.66 74.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 104 88h40v40a88.1 88.1 0 0 1-88 88a8 8 0 0 0 0 16a104.11 104.11 0 0 0 104-104V88h40a8 8 0 0 0 5.66-13.66M123.31 72L152 43.31L180.69 72Z"></svg:path></svg:g>`,
})
export class PhArrowBendRightUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
