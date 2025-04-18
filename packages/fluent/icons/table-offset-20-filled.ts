import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableOffset20FilledIcon],svg[fluent-table-offset-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3H12v4H3V5.5A2.5 2.5 0 0 1 5.5 3M8 8h9v4H8zm-1 4V8H3v4zm-4 1h9v4H5.5A2.5 2.5 0 0 1 3 14.5zm10 0v4h1.5a2.5 2.5 0 0 0 2.5-2.5V13zm0-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13z"></svg:path>`,
})
export class FluentTableOffset20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
