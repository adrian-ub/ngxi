import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightDuotoneIcon],svg[stash-chevron-double-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.879 7.293a1 1 0 0 1 1.414 0L12 12l-4.707 4.707a1 1 0 0 1-1.414-1.414L9.17 12L5.88 8.707a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M12.293 7.293a1 1 0 0 1 1.414 0L18.414 12l-4.707 4.707a1 1 0 0 1-1.414-1.414L15.586 12l-3.293-3.293a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
