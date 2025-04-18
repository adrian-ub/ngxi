import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbonAdd20FilledIcon],svg[fluent-ribbon-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15zm-6 2c0-1.277.435-2.453 1.166-3.387a6 6 0 1 0 4.036 8.879A5.5 5.5 0 0 1 9 5.5M9 15a6.97 6.97 0 0 0 4-1.255V17.5a.5.5 0 0 1-.79.407L9 16l-3.21 1.907A.5.5 0 0 1 5 17.5v-3.755A6.97 6.97 0 0 0 9 15"></svg:path>`,
})
export class FluentRibbonAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
