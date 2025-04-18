import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxAlignBottomRight24RegularIcon],svg[fluent-textbox-align-bottom-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zM4.5 5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25zm12.25 5.75a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentTextboxAlignBottomRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
