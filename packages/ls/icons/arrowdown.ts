import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsArrowdownIcon],svg[ls-arrowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M466 0H251c-26 0-45 20-45 46v250H36c-16 0-27 7-34 22c-1 5-2 9-2 12c0 10 3 19 10 26l324 323c12 15 36 14 50 0l323-323c22-20 7-60-26-60H510V46c0-26-18-46-44-46"></svg:path>`,
})
export class LsArrowdownIcon {
  readonly viewBox = input("0 0 718 690")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
