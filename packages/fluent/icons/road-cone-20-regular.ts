import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone20RegularIcon],svg[fluent-road-cone-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.384 2a1 1 0 0 0-.966.742L4.616 17H2.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-2.116L11.582 2.742A1 1 0 0 0 10.616 2zM5.651 17l.8-3H11.5a.5.5 0 0 0 0-1H6.717l.534-2H10.5a.5.5 0 0 0 0-1H7.517l1.867-7h1.232l3.733 14z"></svg:path>`,
})
export class FluentRoadCone20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
