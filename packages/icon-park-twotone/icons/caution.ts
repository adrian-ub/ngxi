import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCautionIcon],svg[icon-park-twotone-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCaution0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" stroke-linejoin="round" d="M24 5L2 43h44z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 35v1m0-17l.008 10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCaution0)"></svg:path>`,
})
export class IconParkTwotoneCautionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
