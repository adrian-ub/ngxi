import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRightExpandIcon],svg[icon-park-right-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="14" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M6 6V42"></svg:path></svg:g>`,
})
export class IconParkRightExpandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
