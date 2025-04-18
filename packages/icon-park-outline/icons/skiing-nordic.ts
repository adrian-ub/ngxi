import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSkiingNordicIcon],svg[icon-park-outline-skiing-nordic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24h-6l-6-5l-3 10l6 6l2 9M17 34l-2 5l-6 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 44h34l5-7M34 24v20"></svg:path></svg:g>`,
})
export class IconParkOutlineSkiingNordicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
