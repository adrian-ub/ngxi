import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableBottomRow20FilledIcon],svg[fluent-table-bottom-row-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A2.5 2.5 0 0 1 17 5.5V12h-1V5.5a1.5 1.5 0 0 0-1.355-1.493L14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5V12H3V5.5A2.5 2.5 0 0 1 5.5 3zM17 14.5a2.496 2.496 0 0 1-2.5 2.5H13v-4h4zm-13 2c.418.314.937.5 1.5.5H7v-4H3v1.5c0 .818.393 1.544 1 2M8 13h4v4H8z"></svg:path>`,
})
export class FluentTableBottomRow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
