import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDonutSolidIcon],svg[streamline-donut-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 7a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M9 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3.059-.22a.625.625 0 0 0-1.118-.56l-.5 1a.625.625 0 0 0 1.118.56zm-9.5 1.778a.625.625 0 0 1 .883 0l1 1a.625.625 0 1 1-.884.884l-1-1a.625.625 0 0 1 0-.884Zm5.883-6.5a.625.625 0 1 0-.884.884l1 1a.625.625 0 1 0 .884-.884zM3.5 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDonutSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
