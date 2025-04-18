import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidComputerIcon],svg[icon-park-solid-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSComputer0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 32h10v9H19z"></svg:path><svg:rect width="38" height="24" x="5" y="8" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22 27h4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 41h20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSComputer0)"></svg:path>`,
})
export class IconParkSolidComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
