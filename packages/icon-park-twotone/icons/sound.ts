import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSoundIcon],svg[icon-park-twotone-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSound0"><svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="24" cy="15" r="5" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="14" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="14" cy="38" r="2" fill="#fff"></svg:circle><svg:circle cx="34" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="34" cy="38" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="32" r="6" fill="#555" stroke="#fff" stroke-width="4"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSound0)"></svg:path>`,
})
export class IconParkTwotoneSoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
