import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpLightIcon],svg[stash-chevron-double-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.646 17.06a.5.5 0 0 1 0-.706L12 12l4.354 4.354a.5.5 0 0 1-.708.707L12 13.414l-3.646 3.647a.5.5 0 0 1-.708 0"></svg:path><svg:path d="M7.646 11.854a.5.5 0 0 1 0-.708L12 6.793l4.354 4.353a.5.5 0 0 1-.708.708L12 8.207l-3.646 3.647a.5.5 0 0 1-.708 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
