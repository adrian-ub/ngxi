import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPeanutIcon],svg[mdi-peanut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.77a2 2 0 0 1-.14-2.65a5 5 0 0 0-2.82-8A5.7 5.7 0 0 0 12 2a5 5 0 0 0-5 5a5 5 0 0 0 1.11 3.12a2 2 0 0 1-.11 2.6a5.5 5.5 0 0 0 2.81 9.15A5.4 5.4 0 0 0 12 22a5.5 5.5 0 0 0 4-9.23M13 5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-2 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-3a1 1 0 1 1 1 1a1 1 0 0 1-1-1m2 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiPeanutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
