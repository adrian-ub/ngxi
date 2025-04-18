import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookmarkAddIcon],svg[proicons-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 12a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V6h2.493a.5.5 0 1 1 0 1H18v2.493a.5.5 0 0 1-1 0V7h-2.493a.5.5 0 1 1 0-1H17V3.507a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 13.5v6.613a.644.644 0 0 1-.983.54l-5.702-3.48a1.09 1.09 0 0 0-1.13 0l-5.702 3.48a.644.644 0 0 1-.983-.54V6.25a3 3 0 0 1 3-3h3.31"></svg:path></svg:g>`,
})
export class ProiconsBookmarkAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
