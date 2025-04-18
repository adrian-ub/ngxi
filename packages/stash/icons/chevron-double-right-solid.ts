import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightSolidIcon],svg[stash-chevron-double-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.348 7.116a1.25 1.25 0 0 1 1.768 0L12 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L8.464 12L5.348 8.884a1.25 1.25 0 0 1 0-1.768"></svg:path><svg:path d="M12.366 7.116a1.25 1.25 0 0 1 1.768 0L19.018 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L15.482 12l-3.116-3.116a1.25 1.25 0 0 1 0-1.768"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
