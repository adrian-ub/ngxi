import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSkiingNordicIcon],svg[icon-park-twotone-skiing-nordic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSkiingNordic0"><svg:g fill="none" stroke="#fff" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#555" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24h-6l-6-5l-3 10l6 6l2 9M17 34l-2 5l-6 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 44h34l5-7M34 24v20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSkiingNordic0)"></svg:path>`,
})
export class IconParkTwotoneSkiingNordicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
