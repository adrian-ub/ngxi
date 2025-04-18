import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneUnicastIcon],svg[icon-park-twotone-unicast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTUnicast0"><svg:g fill="none" stroke="#fff"><svg:path fill="#555" stroke-width="4" d="M24 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M24 15v8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 33V23l6 .003"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M41 41v1M7 41v1m11-1v1m12-1v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTUnicast0)"></svg:path>`,
})
export class IconParkTwotoneUnicastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
