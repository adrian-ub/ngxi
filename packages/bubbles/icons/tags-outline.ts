import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTagsOutlineIcon],svg[bubbles-tags-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.135 2.634v6.258a3 3 0 0 0 .879 2.121l11.63 11.63a.75.75 0 0 0 1.266-.383l1.225-6.126l6.126-1.225a.75.75 0 0 0 .383-1.266l-11.63-11.63a3 3 0 0 0-2.121-.879H2.635a1.5 1.5 0 0 0-1.5 1.5"></svg:path><svg:path d="M4.885 6.384a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path></svg:g>`,
})
export class BubblesTagsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
