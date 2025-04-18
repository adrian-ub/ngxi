import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRankingListIcon],svg[icon-park-solid-ranking-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRankingList0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 8H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 17v14m8-7v7m-16-9v9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRankingList0)"></svg:path>`,
})
export class IconParkSolidRankingListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
