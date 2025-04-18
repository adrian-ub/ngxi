import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSearchDuotoneIcon],svg[stash-search-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.793 15.793a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.75 10.5a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0m7.75-6.25a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"></svg:path>`,
})
export class StashSearchDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
