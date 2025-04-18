import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismiss32LightIcon],svg[fluent-dismiss-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.854 4.854a.5.5 0 0 0-.708-.708L16 15.293L4.854 4.146a.5.5 0 1 0-.708.708L15.293 16L4.146 27.146a.5.5 0 0 0 .708.708L16 16.707l11.146 11.147a.5.5 0 0 0 .708-.708L16.707 16z"></svg:path>`,
})
export class FluentDismiss32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
