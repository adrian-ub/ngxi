import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMyLocation20FilledIcon],svg[fluent-my-location-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m.75-10.25a.75.75 0 0 0-1.5 0v1.296A6 6 0 0 0 4.046 9.25H2.75a.75.75 0 0 0 0 1.5h1.296a6 6 0 0 0 5.204 5.204v1.296a.75.75 0 0 0 1.5 0v-1.296a6 6 0 0 0 5.204-5.204h1.296a.75.75 0 0 0 0-1.5h-1.296a6 6 0 0 0-5.204-5.204zM10 14.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9"></svg:path>`,
})
export class FluentMyLocation20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
