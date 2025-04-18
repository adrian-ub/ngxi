import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftDuotoneIcon],svg[stash-chevron-double-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.122 16.707a1 1 0 0 1-1.415 0L12 12l4.707-4.707a1 1 0 1 1 1.415 1.414L14.829 12l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M11.707 16.707a1 1 0 0 1-1.414 0L5.586 12l4.707-4.707a1 1 0 0 1 1.414 1.414L8.414 12l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
