import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBaseline20FilledIcon],svg[fluent-text-baseline-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.698 3.475a.75.75 0 0 0-1.395 0l-3.75 9.5a.75.75 0 0 0 1.395.55L8.142 10.5h3.717l1.194 3.025a.75.75 0 0 0 1.395-.55zM11.266 9H8.734l1.267-3.207zM2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTextBaseline20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
