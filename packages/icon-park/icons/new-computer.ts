import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNewComputerIcon],svg[icon-park-new-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="28" x="6" y="6" fill="#2F88FF" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M14 42L34 42"></svg:path><svg:path stroke-linecap="round" d="M24 34V42"></svg:path></svg:g>`,
})
export class IconParkNewComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
