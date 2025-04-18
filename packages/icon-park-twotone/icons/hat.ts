import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHatIcon],svg[icon-park-twotone-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHat0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 16a8 8 0 0 1 8-8h14a8 8 0 0 1 8 8v16H9z"></svg:path><svg:rect width="40" height="8" x="4" y="32" fill="#555" rx="2"></svg:rect><svg:path d="M9 22h8m14 0h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHat0)"></svg:path>`,
})
export class IconParkTwotoneHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
