import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTrendingDownIcon],svg[gg-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.851 8.106L.437 9.52l7.07 7.072l6.365-6.364l4.243 4.242l-1.743 1.743l6.692 1.793l-1.793-6.692l-1.742 1.742l-5.657-5.657l-6.364 6.364z"></svg:path>`,
})
export class GgTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
