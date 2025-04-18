import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParagraphLightIcon],svg[ph-paragraph-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H96a62 62 0 0 0 0 124h42v42a6 6 0 0 0 12 0V54h28v154a6 6 0 0 0 12 0V54h18a6 6 0 0 0 0-12m-70 112H96a50 50 0 0 1 0-100h42Z"></svg:path>`,
})
export class PhParagraphLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
