import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScissorsIcon],svg[icon-park-solid-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSScissors0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" d="M19 19c2 3 2 7 0 10m17-15L21 24l15 10"></svg:path><svg:circle cx="16" cy="16" r="4" stroke="#000"></svg:circle><svg:circle cx="16" cy="32" r="4" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSScissors0)"></svg:path>`,
})
export class IconParkSolidScissorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
