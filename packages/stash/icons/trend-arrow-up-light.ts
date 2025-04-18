import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTrendArrowUpLightIcon],svg[stash-trend-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.854 5.646a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L6 7.207V18a.5.5 0 0 0 1 0V7.207l1.646 1.647a.5.5 0 1 0 .708-.708zM13 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM12 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class StashTrendArrowUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
