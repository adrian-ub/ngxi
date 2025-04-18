import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpSolidIcon],svg[stash-chevron-double-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.116 18.652a1.25 1.25 0 0 1 0-1.768L12 12l4.884 4.884a1.25 1.25 0 1 1-1.768 1.768L12 15.535l-3.116 3.117a1.25 1.25 0 0 1-1.768 0"></svg:path><svg:path d="M7.116 11.634a1.25 1.25 0 0 1 0-1.768L12 4.982l4.884 4.884a1.25 1.25 0 1 1-1.768 1.768L12 8.518l-3.116 3.116a1.25 1.25 0 0 1-1.768 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
