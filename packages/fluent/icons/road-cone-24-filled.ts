import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone24FilledIcon],svg[fluent-road-cone-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.194 2a1.25 1.25 0 0 0-1.215.955C9.288 5.797 8.444 8.905 7.594 12h5.156a.75.75 0 0 1 0 1.5H7.181l-.55 2h7.119a.75.75 0 0 1 0 1.5H6.222c-.325 1.198-.639 2.37-.932 3.5H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-2.54L14.023 2.928A1.25 1.25 0 0 0 12.816 2z"></svg:path>`,
})
export class FluentRoadCone24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
