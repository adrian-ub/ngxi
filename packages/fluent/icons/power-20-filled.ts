import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPower20FilledIcon],svg[fluent-power-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 2.5a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM13.743 4a.75.75 0 1 0-.748 1.3A6 6 0 1 1 7 5.305a.75.75 0 1 0-.75-1.3a7.5 7.5 0 1 0 7.493-.003"></svg:path>`,
})
export class FluentPower20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
