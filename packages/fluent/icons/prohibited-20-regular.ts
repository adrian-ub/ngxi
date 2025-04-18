import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited20RegularIcon],svg[fluent-prohibited-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-1 0a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 17 10M4.71 14.584l9.874-9.875a7 7 0 0 0-9.874 9.874"></svg:path>`,
})
export class FluentProhibited20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
