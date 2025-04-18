import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftIcon],svg[stash-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.53 16.53a.75.75 0 0 1-1.06 0L8.94 12l4.53-4.53a.75.75 0 1 1 1.06 1.06L11.06 12l3.47 3.47a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
