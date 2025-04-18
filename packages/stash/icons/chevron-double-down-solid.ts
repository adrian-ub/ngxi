import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownSolidIcon],svg[stash-chevron-double-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.884 5.348a1.25 1.25 0 0 1 0 1.768L12 12L7.116 7.116a1.25 1.25 0 0 1 1.768-1.768L12 8.464l3.116-3.116a1.25 1.25 0 0 1 1.768 0"></svg:path><svg:path d="M16.884 12.366a1.25 1.25 0 0 1 0 1.768L12 19.018l-4.884-4.884a1.25 1.25 0 0 1 1.768-1.768L12 15.482l3.116-3.116a1.25 1.25 0 0 1 1.768 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
