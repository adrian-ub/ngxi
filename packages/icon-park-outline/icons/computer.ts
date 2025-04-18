import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineComputerIcon],svg[icon-park-outline-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 32h10v9H19z"></svg:path><svg:rect width="38" height="24" x="5" y="8" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 27h4M14 41h20"></svg:path></svg:g>`,
})
export class IconParkOutlineComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
