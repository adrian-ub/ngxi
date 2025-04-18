import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLaptopComputerIcon],svg[icon-park-twotone-laptop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLaptopComputer0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="38" height="24" x="5" y="8" fill="#555" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 40h40M22 14h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLaptopComputer0)"></svg:path>`,
})
export class IconParkTwotoneLaptopComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
