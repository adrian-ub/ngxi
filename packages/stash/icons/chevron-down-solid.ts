import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownSolidIcon],svg[stash-chevron-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.884 9.116a1.25 1.25 0 0 1 0 1.768L12 15.768l-4.884-4.884a1.25 1.25 0 0 1 1.768-1.768L12 12.232l3.116-3.116a1.25 1.25 0 0 1 1.768 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
