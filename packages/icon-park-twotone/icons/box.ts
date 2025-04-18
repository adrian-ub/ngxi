import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBoxIcon],svg[icon-park-twotone-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBox0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="30" x="6" y="12" fill="#555" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M17.95 24.008h12M6 13l7-8h22l7 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBox0)"></svg:path>`,
})
export class IconParkTwotoneBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
