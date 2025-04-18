import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone24RegularIcon],svg[fluent-road-cone-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.184 2a1.25 1.25 0 0 0-1.208.928L5.29 20.5H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-2.54L14.023 2.928A1.25 1.25 0 0 0 12.816 2zM6.843 20.5l.933-3.5h5.974a.75.75 0 0 0 0-1.5H8.176l.534-2h4.04a.75.75 0 0 0 0-1.5H9.11l2.266-8.5h1.248l4.533 17z"></svg:path>`,
})
export class FluentRoadCone24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
