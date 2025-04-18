import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignRight48RegularIcon],svg[fluent-align-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.5 5.25a1.25 1.25 0 1 0-2.5 0v37.5a1.25 1.25 0 1 0 2.5 0zM32.25 26a4.25 4.25 0 0 1 4.25 4.25v5.5A4.25 4.25 0 0 1 32.25 40h-15A4.25 4.25 0 0 1 13 35.75v-5.5A4.25 4.25 0 0 1 17.25 26zM34 30.25a1.75 1.75 0 0 0-1.75-1.75h-15a1.75 1.75 0 0 0-1.75 1.75v5.5c0 .967.784 1.75 1.75 1.75h15A1.75 1.75 0 0 0 34 35.75zm2.5-18v5.5A4.25 4.25 0 0 1 32.25 22H10a4.25 4.25 0 0 1-4.25-4.25v-5.5A4.25 4.25 0 0 1 10 8h22.25a4.25 4.25 0 0 1 4.25 4.25m-2.5 5.5v-5.5a1.75 1.75 0 0 0-1.75-1.75H10a1.75 1.75 0 0 0-1.75 1.75v5.5c0 .966.784 1.75 1.75 1.75h22.25A1.75 1.75 0 0 0 34 17.75"></svg:path>`,
})
export class FluentAlignRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
