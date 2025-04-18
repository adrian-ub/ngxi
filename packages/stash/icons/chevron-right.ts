import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronRightIcon],svg[stash-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.47 7.47a.75.75 0 0 1 1.06 0L15.06 12l-4.53 4.53a.75.75 0 1 1-1.06-1.06L12.94 12L9.47 8.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
