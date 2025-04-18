import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftLightIcon],svg[stash-chevron-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.354 16.354a.5.5 0 0 1-.708 0L9.293 12l4.353-4.354a.5.5 0 0 1 .708.708L10.707 12l3.647 3.646a.5.5 0 0 1 0 .708" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
