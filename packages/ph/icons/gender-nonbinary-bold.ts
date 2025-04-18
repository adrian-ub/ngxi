import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryBoldIcon],svg[ph-gender-nonbinary-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 93V69.2l21.83 13.09a12 12 0 1 0 12.34-20.58L151.32 48l22.85-13.71a12 12 0 0 0-12.34-20.58L128 34L94.17 13.71a12 12 0 0 0-12.34 20.58L104.68 48L81.83 61.71a12 12 0 1 0 12.34 20.58L116 69.2V93a76 76 0 1 0 24 0m-12 127a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhGenderNonbinaryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
