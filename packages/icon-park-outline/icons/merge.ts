import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMergeIcon],svg[icon-park-outline-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="22" x="4" y="24" rx="2" transform="rotate(-45 4 24)"></svg:rect><svg:rect width="20" height="20" x="16" y="24" rx="2" transform="rotate(-45 16 24)"></svg:rect></svg:g>`,
})
export class IconParkOutlineMergeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
