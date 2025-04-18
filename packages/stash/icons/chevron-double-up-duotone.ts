import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpDuotoneIcon],svg[stash-chevron-double-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.293 18.121a1 1 0 0 1 0-1.414L12 12l4.707 4.707a1 1 0 0 1-1.414 1.414L12 14.828l-3.293 3.293a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M7.293 11.707a1 1 0 0 1 0-1.414L12 5.586l4.707 4.707a1 1 0 0 1-1.414 1.414L12 8.414l-3.293 3.293a1 1 0 0 1-1.414 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
