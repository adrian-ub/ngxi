import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftSolidIcon],svg[stash-chevron-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.884 16.884a1.25 1.25 0 0 1-1.768 0L8.232 12l4.884-4.884a1.25 1.25 0 0 1 1.768 1.768L11.768 12l3.116 3.116a1.25 1.25 0 0 1 0 1.768" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
