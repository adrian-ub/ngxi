import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidClockTowerIcon],svg[icon-park-solid-clock-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSClockTower0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 44h40M27 32h12v12H27zm11-22v6m-10-6v6m0-6l5-6l5 6z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M25 20H11a2 2 0 0 0-2 2v22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M15 29h4m-4 7h4"></svg:path><svg:rect width="16" height="16" x="25" y="16" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="1"></svg:rect><svg:circle cx="33" cy="24" r="3" fill="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M33 32v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSClockTower0)"></svg:path>`,
})
export class IconParkSolidClockTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
