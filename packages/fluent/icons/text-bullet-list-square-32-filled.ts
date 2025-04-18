import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListSquare32FilledIcon],svg[fluent-text-bullet-list-square-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zm9 3a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 5.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-1.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M14 10.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1m1 4.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 6.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1"></svg:path>`,
})
export class FluentTextBulletListSquare32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
