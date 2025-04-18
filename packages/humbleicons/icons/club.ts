import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsClubIcon],svg[humbleicons-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.5V19m4-12a4 4 0 1 0-7.873 1.002A4 4 0 1 0 12 12a4 4 0 1 0 3.873-3.998Q16 7.52 16 7"></svg:path>`,
})
export class HumbleiconsClubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
