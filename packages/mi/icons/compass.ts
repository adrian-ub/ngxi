import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miCompassIcon],svg[mi-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m1.414 11.414l2.122-4.95l-4.95 2.122l-2.122 4.95z"></svg:path>`,
})
export class MiCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
