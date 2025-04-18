import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTaurusIcon],svg[openmoji-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v47.83H12z"></svg:path><svg:g fill="none" stroke="#000"><svg:circle cx="36.01" cy="39.47" r="8.651" stroke-miterlimit="10" stroke-width="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M51.42 24.1a5.42 5.42 0 0 0-5.854 2.113c-2.709 5.178-9.561 4.558-9.561 4.558s-6.852.59-9.561-4.588a5.42 5.42 0 0 0-5.855-2.112"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12h48v48H12z"></svg:path></svg:g>`,
})
export class OpenmojiTaurusIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
