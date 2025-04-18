import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownLightIcon],svg[stash-chevron-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.354 9.646a.5.5 0 0 1 0 .708L12 14.707l-4.354-4.353a.5.5 0 0 1 .708-.708L12 13.293l3.646-3.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
