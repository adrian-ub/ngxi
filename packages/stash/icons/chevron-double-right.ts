import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightIcon],svg[stash-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.41 7.47a.75.75 0 0 1 1.06 0L12 12l-4.53 4.53a.75.75 0 0 1-1.06-1.06L9.878 12l-3.47-3.47a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M12.22 7.47a.75.75 0 0 1 1.06 0L17.81 12l-4.53 4.53a.75.75 0 1 1-1.06-1.06L15.69 12l-3.47-3.47a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
