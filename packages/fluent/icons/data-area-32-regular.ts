import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataArea32RegularIcon],svg[fluent-data-area-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a1 1 0 1 0-2 0v20.5A4.5 4.5 0 0 0 7.5 29H28a1 1 0 1 0 0-2h-2V9a1 1 0 0 0-1.6-.8l-7.506 5.63l-5.447-2.724a1 1 0 0 0-.84-.025L5 13.484zm0 11.66l5.968-2.558l5.585 2.792A1 1 0 0 0 17.6 15.8L24 11v16H7.5A2.5 2.5 0 0 1 5 24.5z"></svg:path>`,
})
export class FluentDataArea32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
