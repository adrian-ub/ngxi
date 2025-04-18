import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkReelIcon],svg[icon-park-reel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 10L14 20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 17L14 29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 26L15 38"></svg:path><svg:rect width="30" height="6" x="9" y="4" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:rect width="30" height="6" x="9" y="38" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10V38"></svg:path><svg:path d="M34 10V38"></svg:path></svg:g>`,
})
export class IconParkReelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
