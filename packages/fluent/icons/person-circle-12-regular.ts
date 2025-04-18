import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonCircle12RegularIcon],svg[fluent-person-circle-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.217 6.264A.75.75 0 0 1 4.775 6h2.45c.232 0 .427.118.558.264A.84.84 0 0 1 8 6.81v.16c0 .817-.817 1.53-2 1.53s-2-.713-2-1.53v-.16c0-.202.087-.4.217-.546M6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 6A5 5 0 1 0 6 1a5 5 0 0 0 0 10m0-1a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class FluentPersonCircle12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
