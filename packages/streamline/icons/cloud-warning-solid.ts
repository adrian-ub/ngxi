import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudWarningSolidIcon],svg[streamline-cloud-warning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.883.046a4.37 4.37 0 0 0-4.582 2.717a3.693 3.693 0 0 0 .635 7.356H5V7.14a2 2 0 1 1 4 0v2.98h1.776a3.23 3.23 0 0 0 .91-6.324A4.37 4.37 0 0 0 7.883.046M7 6.39a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 7 6.39m1 6.596a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudWarningSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
