import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGobletCrackingIcon],svg[icon-park-goblet-cracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M33 44H23H13"></svg:path><svg:path stroke="#000" d="M23 28V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H31C31 4 35 9.5 35 16Z"></svg:path><svg:path stroke="#fff" d="M23 4L21 10L25 11L23 17"></svg:path><svg:path stroke="#000" d="M15 4H31"></svg:path></svg:g>`,
})
export class IconParkGobletCrackingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
