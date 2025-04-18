import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParallelogramFillIcon],svg[ph-parallelogram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.58 62.57l-64.8 144a16 16 0 0 1-14.59 9.43H24a16 16 0 0 1-14.58-22.57l64.8-144A16 16 0 0 1 88.81 40H232a16 16 0 0 1 14.59 22.57Z"></svg:path>`,
})
export class PhParallelogramFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
