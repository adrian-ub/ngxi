import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHighSpeedRailIcon],svg[icon-park-solid-high-speed-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHighSpeedRail0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 20v10a8 8 0 0 0 8 8h14a8 8 0 0 0 8-8V20m-5 18v4m-20-4v4m6 2h8"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M9 16.36C9 13 15 4 24 4s15 9 15 12.36V20H9z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M20.5 32a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 11h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHighSpeedRail0)"></svg:path>`,
})
export class IconParkSolidHighSpeedRailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
