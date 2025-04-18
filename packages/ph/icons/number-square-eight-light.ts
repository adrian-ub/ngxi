import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareEightLightIcon],svg[ph-number-square-eight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-63.43-84.46a30 30 0 1 0-37.14 0a34 34 0 1 0 37.14 0M110 100a18 18 0 1 1 18 18a18 18 0 0 1-18-18m18 74a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhNumberSquareEightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
