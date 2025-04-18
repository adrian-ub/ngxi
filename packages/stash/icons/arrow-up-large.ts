import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpLargeIcon],svg[stash-arrow-up-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.483 1.457a.75.75 0 0 1 1.034 0l7 6.667a.75.75 0 1 1-1.034 1.086L12.75 3.75V22a.75.75 0 0 1-1.5 0V3.75L5.517 9.21a.75.75 0 1 1-1.034-1.086z"></svg:path>`,
})
export class StashArrowUpLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
