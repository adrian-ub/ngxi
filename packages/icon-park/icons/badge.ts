import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBadgeIcon],svg[icon-park-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 22V40H8V10H26"></svg:path><svg:path fill="#2F88FF" d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z"></svg:path></svg:g>`,
})
export class IconParkBadgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
