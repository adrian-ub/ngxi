import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDotsNineFillIcon],svg[ph-dots-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
