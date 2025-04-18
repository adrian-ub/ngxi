import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxAlignTopRight24FilledIcon],svg[fluent-textbox-align-top-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zm11 4a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentTextboxAlignTopRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
