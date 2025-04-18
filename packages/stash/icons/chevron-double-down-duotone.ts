import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownDuotoneIcon],svg[stash-chevron-double-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.707 5.879a1 1 0 0 1 0 1.414L12 12L7.293 7.293a1 1 0 1 1 1.414-1.414L12 9.172l3.293-3.293a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M16.707 12.293a1 1 0 0 1 0 1.414L12 18.414l-4.707-4.707a1 1 0 1 1 1.414-1.414L12 15.586l3.293-3.293a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
