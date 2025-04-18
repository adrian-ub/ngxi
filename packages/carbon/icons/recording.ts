import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRecordingIcon],svg[carbon-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path><svg:path fill="currentColor" d="M16 12a4 4 0 1 1-4 4a4 4 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></svg:path>`,
})
export class CarbonRecordingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
