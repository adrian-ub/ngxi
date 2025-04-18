import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideoIcon],svg[icon-park-solid-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVideo0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M36 8v32M12 8v32m26-22h6m-6 12h6M4 18h6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 16v4M9 8h6M9 40h6M33 8h6m-6 32h6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 30h6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 28v4m40-4v4m0-16v4"></svg:path><svg:path fill="#000" stroke="#000" d="m21 19l8 5l-8 5z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVideo0)"></svg:path>`,
})
export class IconParkSolidVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
