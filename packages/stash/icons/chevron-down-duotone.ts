import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownDuotoneIcon],svg[stash-chevron-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.707 9.293a1 1 0 0 1 0 1.414L12 15.414l-4.707-4.707a1 1 0 0 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
