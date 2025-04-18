import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDroneOneIcon],svg[icon-park-twotone-drone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDroneOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29 18v-2a5 5 0 0 0-5-5v0a5 5 0 0 0-5 5v2"></svg:path><svg:path fill="#555" stroke-linecap="round" d="M17 18h14l-2.154 7h-9.692z"></svg:path><svg:path fill="#555" d="M5 22h7v7H5zm31 0h7v7h-7z"></svg:path><svg:path stroke-linecap="round" d="M16 8H4m26 25l4 7m-16-7l-4 7M44 8H32"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDroneOne0)"></svg:path>`,
})
export class IconParkTwotoneDroneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
