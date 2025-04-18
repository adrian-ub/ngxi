import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeVerticalSpacingIcon],svg[icon-park-distribute-vertical-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M5 8H43"></svg:path><svg:path d="M5 40H43"></svg:path><svg:rect width="20" height="8" x="14" y="20" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkDistributeVerticalSpacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
