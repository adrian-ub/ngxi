import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftDuotoneIcon],svg[stash-chevron-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.707 16.707a1 1 0 0 1-1.414 0L8.586 12l4.707-4.707a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293a1 1 0 0 1 0 1.414" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
