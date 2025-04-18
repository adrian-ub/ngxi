import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMyLocation20RegularIcon],svg[fluent-my-location-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m.5-10.5a.5.5 0 0 0-1 0v1.52A6 6 0 0 0 4.02 9.5H2.5a.5.5 0 0 0 0 1h1.52a6 6 0 0 0 5.48 5.48v1.52a.5.5 0 0 0 1 0v-1.52a6 6 0 0 0 5.48-5.48h1.52a.5.5 0 0 0 0-1h-1.52a6 6 0 0 0-5.48-5.48zM10 15a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class FluentMyLocation20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
