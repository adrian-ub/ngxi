import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftLightIcon],svg[stash-chevron-double-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.06 16.354a.5.5 0 0 1-.706 0L12 12l4.354-4.354a.5.5 0 1 1 .707.708L13.414 12l3.647 3.646a.5.5 0 0 1 0 .708"></svg:path><svg:path d="M11.854 16.354a.5.5 0 0 1-.707 0L6.792 12l4.353-4.354a.5.5 0 1 1 .708.708L8.207 12l3.647 3.646a.5.5 0 0 1 0 .708"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
