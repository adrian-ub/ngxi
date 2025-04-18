import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsSpadeIcon],svg[humbleicons-spade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.5V19m0-16c-5 3-8 6-8 9a4 4 0 0 0 8 0a4 4 0 0 0 8 0c0-3-3-6-8-9"></svg:path>`,
})
export class HumbleiconsSpadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
