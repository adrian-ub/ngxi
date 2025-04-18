import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCommonFileSearchOutlineIcon],svg[bubbles-common-file-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V7.5"></svg:path><svg:path d="M10.514 15.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 0 0-10.5 0m12.736 7.5l-3.774-3.788"></svg:path></svg:g>`,
})
export class BubblesCommonFileSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
