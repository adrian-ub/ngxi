import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLuggage20RegularIcon],svg[fluent-luggage-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2a.5.5 0 0 0 0 1H7v1h-.5A2.5 2.5 0 0 0 4 6.5v8a2.5 2.5 0 0 0 2 2.45v.55a.5.5 0 0 0 1 0V17h6v.5a.5.5 0 0 0 1 0v-.55a2.5 2.5 0 0 0 2-2.45v-8A2.5 2.5 0 0 0 13.5 4H13V3h.5a.5.5 0 0 0 0-1zM12 3v1H8V3zM6.5 5h7A1.5 1.5 0 0 1 15 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 14.5v-8A1.5 1.5 0 0 1 6.5 5m0 3.5A.5.5 0 0 1 7 8h6a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentLuggage20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
