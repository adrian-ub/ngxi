import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTestTubeSolidIcon],svg[streamline-test-tube-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.767-.001a.75.75 0 1 0 0 1.5H3.5v1.174H6a.625.625 0 1 1 0 1.25H3.5v1.952H6a.625.625 0 0 1 0 1.25H3.5v1.952H6a.625.625 0 1 1 0 1.25H3.5v.173a3.5 3.5 0 1 0 7 0V1.499h.732a.75.75 0 1 0 0-1.5H2.768Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTestTubeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
