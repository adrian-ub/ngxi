import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronRightLightIcon],svg[stash-chevron-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.646 7.646a.5.5 0 0 1 .708 0L14.707 12l-4.353 4.354a.5.5 0 0 1-.708-.708L13.293 12L9.646 8.354a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
