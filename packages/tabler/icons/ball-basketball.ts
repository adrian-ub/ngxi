import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallBasketballIcon],svg[tabler-ball-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m2.65-6.35l12.7 12.7m-12.7 0l12.7-12.7"></svg:path><svg:path d="M12 3a9 9 0 0 0 9 9M3 12a9 9 0 0 1 9 9"></svg:path></svg:g>`,
})
export class TablerBallBasketballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
