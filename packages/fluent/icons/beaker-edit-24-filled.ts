import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeakerEdit24FilledIcon],svg[fluent-beaker-edit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3.5v6.238c0 .375-.094.744-.273 1.074L5.54 13h8.922l-1.188-2.188A2.25 2.25 0 0 1 13 9.738V3.5h1A.75.75 0 0 0 14 2H6a.75.75 0 0 0 0 1.5zm8.275 11H4.725l-1.582 2.915A1.75 1.75 0 0 0 4.68 20h6.734l.106-.423c.162-.648.497-1.24.97-1.712l2.988-2.989zm3.825-1.83l-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"></svg:path>`,
})
export class FluentBeakerEdit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
