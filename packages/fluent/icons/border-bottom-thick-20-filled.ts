import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderBottomThick20FilledIcon],svg[fluent-border-bottom-thick-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm-4.644.496a1 1 0 1 1 1.162 1.62l.004.005a1 1 0 0 0-.4.4l-.006-.003a1 1 0 1 1-1.62-1.162l-.004-.003c.225-.342.519-.636.861-.861zM6 15a1 1 0 0 1-.879-.522l-.006.004a1 1 0 1 0-1.62 1.162l-.003.003A3 3 0 0 0 6 17h8a3 3 0 0 0 2.508-1.353l-.004-.002a1 1 0 1 0-1.62-1.162l-.005-.005a1 1 0 0 1-.879.523zm9.645-11.505a1 1 0 1 0-1.162 1.62l-.005.005c.17.092.309.232.4.4l.007-.003a1 1 0 1 0 1.62-1.162l.003-.003a3 3 0 0 0-.86-.861zM4 12a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1m11-1a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0z"></svg:path>`,
})
export class FluentBorderBottomThick20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
