import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextContinuous20RegularIcon],svg[fluent-text-continuous-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 9a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m1.354-6.354a.5.5 0 1 0-.708.708L3.793 10l-1.147 1.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM7.5 8h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1m0 3a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTextContinuous20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
