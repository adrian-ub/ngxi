import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDisabledComputerIcon],svg[icon-park-disabled-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 5.99805H9C7.34315 5.99805 6 7.34119 6 8.99805V30.998C6 32.6549 7.34315 33.998 9 33.998H39C40.6569 33.998 42 32.6549 42 30.998V23.998"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 34V42"></svg:path><svg:circle cx="36" cy="12" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 8L40 16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 41.998L34 41.998"></svg:path></svg:g>`,
})
export class IconParkDisabledComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
