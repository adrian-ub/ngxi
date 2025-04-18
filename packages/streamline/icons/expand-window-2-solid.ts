import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineExpandWindow2SolidIcon],svg[streamline-expand-window-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2H2.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7a1 1 0 1 1 2 0v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 0 11.5v-9A2.5 2.5 0 0 1 2.5 0H7a1 1 0 0 1 0 2M9.538.309A.5.5 0 0 1 10 0h3.5a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-.854.354L12.104 3.31L7.707 7.707a1 1 0 0 1-1.414-1.414l4.396-4.397L9.646.854a.5.5 0 0 1-.108-.545" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineExpandWindow2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
