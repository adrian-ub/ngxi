import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkComputerIcon],svg[icon-park-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="10" height="9" x="19" y="32" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:rect width="38" height="24" x="5" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 27H26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 41L34 41"></svg:path></svg:g>`,
})
export class IconParkComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
