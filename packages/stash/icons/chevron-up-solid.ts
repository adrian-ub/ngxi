import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronUpSolidIcon],svg[stash-chevron-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.116 14.884a1.25 1.25 0 0 1 0-1.768L12 8.232l4.884 4.884a1.25 1.25 0 0 1-1.768 1.768L12 11.768l-3.116 3.116a1.25 1.25 0 0 1-1.768 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
