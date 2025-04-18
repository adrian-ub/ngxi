import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLocationEnterIcon],svg[mdi-location-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12l-4-4v3H2v2h8v3m12-4a10 10 0 0 1-19.54 3h2.13a8 8 0 1 0 0-6H2.46A10 10 0 0 1 22 12"></svg:path>`,
})
export class MdiLocationEnterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
