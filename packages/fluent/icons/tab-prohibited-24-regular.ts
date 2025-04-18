import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabProhibited24RegularIcon],svg[fluent-tab-prohibited-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.272a6.5 6.5 0 0 1-.709-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v5.563a6.5 6.5 0 0 1 1.5.709V5.75A2.75 2.75 0 0 0 18.25 3zM17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-3.309-3.252a4 4 0 0 1 5.557-5.557zm1.06 1.06l5.558-5.556a4 4 0 0 1-5.557 5.557"></svg:path>`,
})
export class FluentTabProhibited24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
