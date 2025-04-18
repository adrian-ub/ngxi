import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScoreboardIcon],svg[icon-park-scoreboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="12" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M14 6V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M34 6V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10.2266 24L15.0006 19.0166V33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12V40"></svg:path><svg:ellipse cx="34" cy="26" stroke="#fff" rx="3" ry="7"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" d="M21 12H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21 40H27"></svg:path></svg:g>`,
})
export class IconParkScoreboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
