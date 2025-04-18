import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSixBoldIcon],svg[ph-number-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a59 59 0 0 0-7.81.53l26.27-46.64a12 12 0 0 0-20.92-11.78L76 130.13A60 60 0 1 0 128 100m0 96a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhNumberSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
