import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDoubleBedIcon],svg[icon-park-twotone-double-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDoubleBed0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v11H8zM6 35v4m36-4v4"></svg:path><svg:path fill="#555" d="M20 18h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3m14 0h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3"></svg:path><svg:path d="M4 26a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDoubleBed0)"></svg:path>`,
})
export class IconParkTwotoneDoubleBedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
