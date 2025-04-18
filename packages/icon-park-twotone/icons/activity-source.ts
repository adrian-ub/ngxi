import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneActivitySourceIcon],svg[icon-park-twotone-activity-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTActivitySource0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M42 5H6v8h36zm0 15H6v8h36zm0 15H6v8h36z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTActivitySource0)"></svg:path>`,
})
export class IconParkTwotoneActivitySourceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
