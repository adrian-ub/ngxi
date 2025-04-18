import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftFillIcon],svg[ph-text-align-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48 152H64a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m32-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16M56 112a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m136-24H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextAlignLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
