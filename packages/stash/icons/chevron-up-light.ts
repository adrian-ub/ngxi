import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronUpLightIcon],svg[stash-chevron-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.646 14.354a.5.5 0 0 1 0-.708L12 9.293l4.354 4.353a.5.5 0 0 1-.708.708L12 10.707l-3.646 3.647a.5.5 0 0 1-.708 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
