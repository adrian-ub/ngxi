import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloud28RegularIcon],svg[fluent-cloud-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6.5a5.5 5.5 0 0 0-5.496 5.28a.75.75 0 0 1-.75.72H7.5a4 4 0 0 0 0 8h13a4 4 0 0 0 0-8h-.255a.75.75 0 0 1-.75-.72A5.5 5.5 0 0 0 14 6.5m-6.931 4.517a7.001 7.001 0 0 1 13.862 0A5.5 5.5 0 0 1 20.5 22h-13a5.5 5.5 0 0 1-.431-10.983"></svg:path>`,
})
export class FluentCloud28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
