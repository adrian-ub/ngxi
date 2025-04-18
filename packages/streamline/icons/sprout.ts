import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSproutIcon],svg[streamline-sprout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.889 5.393c-.844.734-2.17.61-2.862-.27a2.003 2.003 0 0 1 .411-2.845C10.292 1.603 13 2 13 2s-.248 2.718-1.111 3.393m-8.916 1.68a1.755 1.755 0 0 0 2.507-.236c.605-.77.43-1.932-.36-2.492C4.371 3.754 2 4.102 2 4.102s.217 2.38.973 2.971M.5 12s2-2 6.5-2s6.5 2 6.5 2"></svg:path><svg:path d="m9.119 5.236l-.133.124c-1 1-1.89 3.304-1.986 4.64c0-1.583-.305-2.286-1.42-3.18l-.049-.047"></svg:path></svg:g>`,
})
export class StreamlineSproutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
