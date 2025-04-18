import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFilter2SolidIcon],svg[streamline-filter-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.5 0a.5.5 0 0 0-.407.79L5 7.66v5.84a.5.5 0 0 0 .777.416l3-2A.5.5 0 0 0 9 11.5V7.66L13.907.79A.5.5 0 0 0 13.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFilter2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
