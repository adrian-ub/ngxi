import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftIcon],svg[stash-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.591 16.53a.75.75 0 0 1-1.06 0L12 12l4.53-4.53a.75.75 0 0 1 1.06 1.06L14.121 12l3.47 3.47a.75.75 0 0 1 0 1.06"></svg:path><svg:path d="M11.78 16.53a.75.75 0 0 1-1.06 0L6.19 12l4.53-4.53a.75.75 0 1 1 1.06 1.06L8.31 12l3.47 3.47a.75.75 0 0 1 0 1.06"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
