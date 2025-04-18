import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftSolidIcon],svg[stash-chevron-double-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.652 16.884a1.25 1.25 0 0 1-1.768 0L12 12l4.884-4.884a1.25 1.25 0 1 1 1.768 1.768L15.536 12l3.116 3.116a1.25 1.25 0 0 1 0 1.768"></svg:path><svg:path d="M11.634 16.884a1.25 1.25 0 0 1-1.768 0L4.982 12l4.884-4.884a1.25 1.25 0 0 1 1.768 1.768L8.518 12l3.116 3.116a1.25 1.25 0 0 1 0 1.768"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
