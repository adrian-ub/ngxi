import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsDropletIcon],svg[humbleicons-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14v.5M12 4c-1.262 1.683-3.055 3.896-4.708 5.896c-2.288 2.767-1.796 6.907 1.115 9.009v0a6.14 6.14 0 0 0 7.186 0v0c2.91-2.102 3.403-6.242 1.116-9.009C15.055 7.896 13.262 5.683 12 4"></svg:path>`,
})
export class HumbleiconsDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
