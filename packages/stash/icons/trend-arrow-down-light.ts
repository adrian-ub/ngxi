import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTrendArrowDownLightIcon],svg[stash-trend-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.854 18.354a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L6 16.793V6a.5.5 0 0 1 1 0v10.793l1.646-1.647a.5.5 0 0 1 .708.708zM13 17.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM12 14a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zm0-3.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm0-3a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class StashTrendArrowDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
