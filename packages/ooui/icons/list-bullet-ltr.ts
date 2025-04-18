import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiListBulletLtrIcon],svg[ooui-list-bullet-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h12v2H7zm0-6h12v2H7zm0-6h12v2H7z"></svg:path><svg:circle cx="3" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="3" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="3" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class OouiListBulletLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
