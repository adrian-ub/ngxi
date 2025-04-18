import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParagraphDuotoneIcon],svg[ph-paragraph-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 48v112H96a56 56 0 0 1 0-112Z" opacity=".2"></svg:path><svg:path d="M208 40H96a64 64 0 0 0 0 128h40v40a8 8 0 0 0 16 0V56h24v152a8 8 0 0 0 16 0V56h16a8 8 0 0 0 0-16m-72 112H96a48 48 0 0 1 0-96h40Z"></svg:path></svg:g>`,
})
export class PhParagraphDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
