import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPlugIcon],svg[icon-park-solid-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPlug0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 14h36v10q-6 12-18 12T6 24z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m33 34l-1 10H16l-1-10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M22 24h4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 4v8m16-8v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPlug0)"></svg:path>`,
})
export class IconParkSolidPlugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
