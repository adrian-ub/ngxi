import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLaptopComputerIcon],svg[icon-park-laptop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="38" height="24" x="5" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 40L44 40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 14L26 14"></svg:path></svg:g>`,
})
export class IconParkLaptopComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
