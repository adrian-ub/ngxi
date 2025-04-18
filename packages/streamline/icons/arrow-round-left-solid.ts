import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundLeftSolidIcon],svg[streamline-arrow-round-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.351 1.002a.75.75 0 0 0-1.28-.53l-2.4 2.4a.75.75 0 0 0 0 1.06l2.4 2.399a.75.75 0 0 0 1.28-.53V4.4H7a3.798 3.798 0 1 1-3.798 3.8a1 1 0 1 0-2 0A5.798 5.798 0 1 0 7 2.401H5.351z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowRoundLeftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
