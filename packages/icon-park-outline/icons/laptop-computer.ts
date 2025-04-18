import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLaptopComputerIcon],svg[icon-park-outline-laptop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="38" height="24" x="5" y="8" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 40h40M22 14h4"></svg:path></svg:g>`,
})
export class IconParkOutlineLaptopComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
