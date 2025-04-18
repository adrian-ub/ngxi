import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReadingList24RegularIcon],svg[fluent-reading-list-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h13a.75.75 0 0 1 .102 1.493L20 19.5H7a.75.75 0 0 1-.102-1.493zm10-3a.75.75 0 0 1 .102 1.493L17 16.5H4a.75.75 0 0 1-.102-1.493L4 15zm3-3a.75.75 0 0 1 .102 1.493L20 13.5H7a.75.75 0 0 1-.102-1.493L7 12zM6 5a2.75 2.75 0 0 1 2.55 1.717a.75.75 0 0 1-1.346.655l-.045-.091A1.25 1.25 0 1 0 6 9h11.5a.75.75 0 0 1 .102 1.493l-.102.007H6A2.75 2.75 0 0 1 6 5m14 1a.75.75 0 0 1 .102 1.493L20 7.5h-9a.75.75 0 0 1-.102-1.493L11 6z"></svg:path>`,
})
export class FluentReadingList24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
