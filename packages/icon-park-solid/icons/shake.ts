import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShakeIcon],svg[icon-park-solid-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShake0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="m4 10l4 4.667l-4 4.666L8 24l-4 4.667l4 4.666L4 38m40-28l-4 4.667l4 4.666L40 24l4 4.667l-4 4.666L44 38"></svg:path><svg:path fill="#fff" stroke="#fff" d="M34 6H14v36h20z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M22 35h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShake0)"></svg:path>`,
})
export class IconParkSolidShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
