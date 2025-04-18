import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixThinIcon],svg[ph-number-square-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-92a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.24 54A32 32 0 1 0 128 116m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhNumberSquareSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
