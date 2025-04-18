import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStitchIcon],svg[arcticons-stitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.331 8.395l-17.05.039l-.072 17.04m-2.64 3.85L5.593 42.5l12.986-.01M39.95 22.55l.005 17.24l-17.367.003M29.065 5.5h13.272l.094 13.238"></svg:path>`,
})
export class ArcticonsStitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
