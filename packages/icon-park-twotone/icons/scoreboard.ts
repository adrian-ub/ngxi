import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneScoreboardIcon],svg[icon-park-twotone-scoreboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTScoreboard0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="12" fill="#555" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M14 6v6m20-6v6M10.227 24L15 19.017V33m9-21v28"></svg:path><svg:ellipse cx="34" cy="26" rx="3" ry="7"></svg:ellipse><svg:path stroke-linecap="round" d="M21 12h6m-6 28h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTScoreboard0)"></svg:path>`,
})
export class IconParkTwotoneScoreboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
