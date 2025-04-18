import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabs20RegularIcon],svg[fluent-tabs-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 0 1 6-6h3c.892 0 1.693.39 2.243 1.007A4 4 0 0 0 13 3H8a5 5 0 0 0-5 5v5q0 .121.007.243A3 3 0 0 1 2 11zm13-2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zm-8 9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2zM4 8.5A4.5 4.5 0 0 1 8.5 4H13c.892 0 1.693.39 2.243 1.007A4 4 0 0 0 15 5H8.5A3.5 3.5 0 0 0 5 8.5V15q0 .121.007.243A3 3 0 0 1 4 13z"></svg:path>`,
})
export class FluentTabs20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
