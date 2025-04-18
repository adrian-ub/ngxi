import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronRightSolidIcon],svg[stash-chevron-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.116 7.116a1.25 1.25 0 0 1 1.768 0L15.768 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L12.232 12L9.116 8.884a1.25 1.25 0 0 1 0-1.768" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
