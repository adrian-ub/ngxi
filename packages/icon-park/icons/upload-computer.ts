import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadComputerIcon],svg[icon-park-upload-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V24"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M14 42L34 42"></svg:path><svg:path d="M37 18L37 6"></svg:path><svg:path d="M32 11L37 6L42 11"></svg:path></svg:g>`,
})
export class IconParkUploadComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
