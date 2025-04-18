import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRightArrow1Icon],svg[subway-right-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 261.5L298.7 90.8v128H0v85.4h298.7v128z"></svg:path>`,
})
export class SubwayRightArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
