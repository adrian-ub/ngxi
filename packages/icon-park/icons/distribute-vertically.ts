import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeVerticallyIcon],svg[icon-park-distribute-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="12" x="38" y="30" fill="#2F88FF" transform="rotate(180 38 30)"></svg:rect><svg:path stroke-linecap="round" d="M42 40H6"></svg:path><svg:path stroke-linecap="round" d="M42 8L6 8"></svg:path></svg:g>`,
})
export class IconParkDistributeVerticallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
