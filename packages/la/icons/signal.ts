import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSignalIcon],svg[la-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v24h6V4zm-8 7v17h6V11zm-8 7v10h6V18z"></svg:path>`,
})
export class LaSignalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
