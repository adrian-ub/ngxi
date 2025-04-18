import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrending24FilledIcon],svg[fluent-arrow-trending-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.003 5.5H21a1 1 0 0 1 .993.883L22 6.5v7a1 1 0 0 1-1.994.117L20 13.5l-.001-4.586l-7.292 7.293a1 1 0 0 1-1.32.084l-.094-.083l-2.296-2.292l-5.288 5.29a1 1 0 0 1-1.497-1.32l.083-.095l5.994-5.996a1 1 0 0 1 1.32-.084l.094.083l2.296 2.292L18.584 7.5h-4.581a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 .883-.993zH21z"></svg:path>`,
})
export class FluentArrowTrending24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
