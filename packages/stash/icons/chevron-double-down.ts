import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownIcon],svg[stash-chevron-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.53 6.409a.75.75 0 0 1 0 1.06L12 12L7.47 7.47a.75.75 0 0 1 1.06-1.061L12 9.879l3.47-3.47a.75.75 0 0 1 1.06 0"></svg:path><svg:path d="M16.53 12.22a.75.75 0 0 1 0 1.06L12 17.81l-4.53-4.53a.75.75 0 1 1 1.06-1.06L12 15.69l3.47-3.47a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
