import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareHint48FilledIcon],svg[fluent-square-hint-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 6a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3zM42 21.5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0zm-22 19a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1-1.5-1.5m-11-19a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0zm5-14A1.5 1.5 0 0 0 12.5 6A6.5 6.5 0 0 0 6 12.5a1.5 1.5 0 0 0 3 0A3.5 3.5 0 0 1 12.5 9A1.5 1.5 0 0 0 14 7.5M12.5 42a1.5 1.5 0 0 0 0-3A3.5 3.5 0 0 1 9 35.5a1.5 1.5 0 0 0-3 0a6.5 6.5 0 0 0 6.5 6.5M34 7.5A1.5 1.5 0 0 1 35.5 6a6.5 6.5 0 0 1 6.5 6.5a1.5 1.5 0 0 1-3 0A3.5 3.5 0 0 0 35.5 9A1.5 1.5 0 0 1 34 7.5M35.5 42a1.5 1.5 0 0 1 0-3a3.5 3.5 0 0 0 3.5-3.5a1.5 1.5 0 0 1 3 0a6.5 6.5 0 0 1-6.5 6.5"></svg:path>`,
})
export class FluentSquareHint48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
