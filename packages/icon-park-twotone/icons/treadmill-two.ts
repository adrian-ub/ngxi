import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTreadmillTwoIcon],svg[icon-park-twotone-treadmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTreadmillTwo0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 39v5m32-5v5m-4-13l6-16l-4-6m-5 5L43 4"></svg:path><svg:rect width="40" height="8" x="4" y="31" fill="#555" rx="4"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTreadmillTwo0)"></svg:path>`,
})
export class IconParkTwotoneTreadmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
