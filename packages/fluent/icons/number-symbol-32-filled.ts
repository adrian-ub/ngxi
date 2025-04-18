import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberSymbol32FilledIcon],svg[fluent-number-symbol-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.975 3.5a1.25 1.25 0 0 0-2.45-.5L11.2 9.5H5.25a1.25 1.25 0 1 0 0 2.5h5.439L9.26 19H4.25a1.25 1.25 0 0 0 0 2.5h4.5l-1.225 6a1.25 1.25 0 1 0 2.45.5l1.327-6.5h6.948l-1.224 6a1.25 1.25 0 1 0 2.449.5l1.326-6.5h5.949a1.25 1.25 0 1 0 0-2.5h-5.438l1.428-7h5.01a1.25 1.25 0 1 0 0-2.5h-4.5l1.225-6a1.25 1.25 0 0 0-2.45-.5L20.7 9.5h-6.95zM18.76 19h-6.948l1.428-7h6.949z"></svg:path>`,
})
export class FluentNumberSymbol32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
