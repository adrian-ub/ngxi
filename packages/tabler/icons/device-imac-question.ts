import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceImacQuestionIcon],svg[tabler-device-imac-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 17H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7.5M3 13h11.5M8 21h7m-5-4l-.5 4m4.5-4l.5 4m4.5 1v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path>`,
})
export class TablerDeviceImacQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
