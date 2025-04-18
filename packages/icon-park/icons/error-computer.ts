import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkErrorComputerIcon],svg[icon-park-error-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V23"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M34 7L42 15"></svg:path><svg:path d="M42 7L34 15"></svg:path><svg:path d="M14 42L34 42"></svg:path></svg:g>`,
})
export class IconParkErrorComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
