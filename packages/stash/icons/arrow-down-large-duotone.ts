import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownLargeDuotoneIcon],svg[stash-arrow-down-large-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v18.25l5.733-5.46a.75.75 0 1 1 1.034 1.086l-7 6.667a.75.75 0 0 1-1.034 0l-7-6.667a.75.75 0 1 1 1.034-1.086l5.733 5.46V2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashArrowDownLargeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
