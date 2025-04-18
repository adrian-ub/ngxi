import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScoreboardIcon],svg[icon-park-outline-scoreboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="12" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M14 6v6m20-6v6M10.227 24L15 19.017V33m9-21v28"></svg:path><svg:ellipse cx="34" cy="26" rx="3" ry="7"></svg:ellipse><svg:path stroke-linecap="round" d="M21 12h6m-6 28h6"></svg:path></svg:g>`,
})
export class IconParkOutlineScoreboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
