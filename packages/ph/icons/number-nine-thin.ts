import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberNineThinIcon],svg[ph-number-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 44a52 52 0 1 0 24.74 97.73L116.51 206a4 4 0 0 0 7 3.92L173 122a52 52 0 0 0-45-78m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhNumberNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
