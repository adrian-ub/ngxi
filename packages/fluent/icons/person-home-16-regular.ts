import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonHome16RegularIcon],svg[fluent-person-home-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7a2.75 2.75 0 1 0 0-5.5A2.75 2.75 0 0 0 7 7m0-4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 7 2.5M3.5 9h5.297l1.167-1H3.5A1.5 1.5 0 0 0 2 9.5v.5c0 1.971 1.859 4 5 4v-1c-2.568 0-4-1.562-4-3v-.5a.5.5 0 0 1 .5-.5m4.849 1.701A1 1 0 0 0 8 11.46v3.04a.5.5 0 0 0 .5.5H10a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.04c0-.292-.128-.569-.349-.759l-2.825-2.422a.5.5 0 0 0-.651 0z"></svg:path>`,
})
export class FluentPersonHome16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
