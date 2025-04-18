import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTooth24pxIcon],svg[healthicons-tooth-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.003 3.417A5 5 0 0 0 3 8c0 4.49 1.467 8.668 4.21 12.267A1.5 1.5 0 0 0 10 19.5v-.02c.022-.928.534-2.48 2-2.48c1.467 0 1.978 1.552 2 2.48v.02a1.5 1.5 0 0 0 2.79.767C19.532 16.668 21 12.49 21 8a5 5 0 0 0-7.757-4.172l1.964 1.965a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class HealthiconsTooth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
