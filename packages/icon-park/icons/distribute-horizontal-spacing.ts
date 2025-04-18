import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeHorizontalSpacingIcon],svg[icon-park-distribute-horizontal-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M8 43L8 5"></svg:path><svg:path d="M40 43L40 5"></svg:path><svg:rect width="8" height="20" x="20" y="14" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkDistributeHorizontalSpacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
