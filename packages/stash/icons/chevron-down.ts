import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownIcon],svg[stash-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.53 9.47a.75.75 0 0 1 0 1.06L12 15.06l-4.53-4.53a.75.75 0 1 1 1.06-1.06L12 12.94l3.47-3.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
