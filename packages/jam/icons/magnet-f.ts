import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMagnetFIcon],svg[jam-magnet-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12c0-3.866-2.239-7-5-7s-5 3.134-5 7H0C0 5.373 4.477 0 10 0s10 5.373 10 12zM0 14h5v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm15 0h5v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class JamMagnetFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
