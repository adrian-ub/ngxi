import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneScissorsIcon],svg[icon-park-twotone-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTScissors0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#555" rx="3"></svg:rect><svg:path d="M19 19c2 3 2 7 0 10m17-15L21 24l15 10"></svg:path><svg:circle cx="16" cy="16" r="4"></svg:circle><svg:circle cx="16" cy="32" r="4"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTScissors0)"></svg:path>`,
})
export class IconParkTwotoneScissorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
