import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellEdit28FilledIcon],svg[fluent-table-cell-edit-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 19A2.75 2.75 0 0 1 3 16.25v-4.5A2.75 2.75 0 0 1 5.75 9H9.5v10zM11 19h3.363a4 4 0 0 1 .128-.135L17 16.356V9h-6zM22.25 9c.862 0 1.63.396 2.135 1.017a3.27 3.27 0 0 0-1.991.945L18.5 14.856V9zm.85 2.67l-7.903 7.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l7.902-7.902A2.286 2.286 0 0 0 23.1 11.67"></svg:path>`,
})
export class FluentTableCellEdit28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
