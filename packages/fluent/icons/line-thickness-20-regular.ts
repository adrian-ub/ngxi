import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineThickness20RegularIcon],svg[fluent-line-thickness-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 10A1.5 1.5 0 0 1 3.5 13h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 14.5M3 8a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentLineThickness20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
