import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTrendArrowDownDuotoneIcon],svg[stash-trend-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.97 18.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V6a.75.75 0 1 0-1.5 0v10.19l-1.22-1.22a.75.75 0 0 0-1.06 1.06z"></svg:path><svg:path fill="currentColor" d="M12.25 17c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0-.75.75m-1-3.5c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75m0-3.5c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75m0-3c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75" opacity=".5"></svg:path>`,
})
export class StashTrendArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
