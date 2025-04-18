import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineToiletManSolidIcon],svg[streamline-toilet-man-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.03 2.03a2.03 2.03 0 1 1-4.06 0a2.03 2.03 0 0 1 4.06 0m.483 3.873a3.55 3.55 0 0 1 1.04 2.512V9.44a.5.5 0 0 1-.5.5H9.032l-.453 3.623a.5.5 0 0 1-.496.438H5.918a.5.5 0 0 1-.496-.438L4.97 9.939H3.946a.5.5 0 0 1-.5-.5V8.415a3.554 3.554 0 0 1 6.067-2.512" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineToiletManSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
