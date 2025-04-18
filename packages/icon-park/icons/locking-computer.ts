import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLockingComputerIcon],svg[icon-park-locking-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V27"></svg:path><svg:path stroke-linecap="round" d="M24 34V42"></svg:path><svg:rect width="12" height="8" x="30" y="12" fill="#2F88FF" rx="3"></svg:rect><svg:path fill="#2F88FF" d="M36 6C37.6569 6 39 7.34315 39 9L39 12L33 12L33 9C33 7.34315 34.3431 6 36 6Z"></svg:path><svg:path stroke-linecap="round" d="M14 42L34 42"></svg:path></svg:g>`,
})
export class IconParkLockingComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
