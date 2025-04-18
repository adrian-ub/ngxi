import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTestTubeIcon],svg[streamline-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h9M4 3.5h2m-2 3h2m-2 3h2m4-9v10a3 3 0 0 1-6 0V.5"></svg:path>`,
})
export class StreamlineTestTubeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
