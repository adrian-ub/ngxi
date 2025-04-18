import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPower20RegularIcon],svg[fluent-power-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0zM13.743 4a.5.5 0 1 0-.499.867a6.5 6.5 0 1 1-6.494.004a.5.5 0 1 0-.5-.866A7.5 7.5 0 1 0 13.743 4"></svg:path>`,
})
export class FluentPower20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
