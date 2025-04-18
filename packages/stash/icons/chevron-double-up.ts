import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpIcon],svg[stash-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.47 17.591a.75.75 0 0 1 0-1.06L12 12l4.53 4.53a.75.75 0 0 1-1.06 1.061L12 14.121l-3.47 3.47a.75.75 0 0 1-1.06 0"></svg:path><svg:path d="M7.47 11.78a.75.75 0 0 1 0-1.06L12 6.19l4.53 4.53a.75.75 0 1 1-1.06 1.06L12 8.31l-3.47 3.47a.75.75 0 0 1-1.06 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
