import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberNineLightIcon],svg[ph-number-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42a54 54 0 1 0 19.94 104.17l-33.17 58.88a6 6 0 1 0 10.46 5.89l49.54-88A54 54 0 0 0 128 42m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhNumberNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
