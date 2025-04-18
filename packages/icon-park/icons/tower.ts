import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTowerIcon],svg[icon-park-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="13" x="17" y="31" fill="#2F88FF"></svg:rect><svg:rect width="10" height="14" x="19" y="17" fill="#2F88FF"></svg:rect><svg:rect width="6" height="13" x="21" y="4" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
