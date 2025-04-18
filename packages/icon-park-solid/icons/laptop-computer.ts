import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLaptopComputerIcon],svg[icon-park-solid-laptop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLaptopComputer0"><svg:g fill="none" stroke-width="4"><svg:rect width="38" height="24" x="5" y="8" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M4 40h40"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22 14h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLaptopComputer0)"></svg:path>`,
})
export class IconParkSolidLaptopComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
