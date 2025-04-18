import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideFillIcon],svg[ph-divide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 32a16 16 0 1 1-16 16a16 16 0 0 1 16-16m0 128a16 16 0 1 1 16-16a16 16 0 0 1-16 16m56-56H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDivideFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
