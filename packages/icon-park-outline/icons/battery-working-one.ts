import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBatteryWorkingOneIcon],svg[icon-park-outline-battery-working-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="20" x="4" y="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path fill="currentColor" d="M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 21v6m6-6v6m6-6v6m6-3v3"></svg:path></svg:g>`,
})
export class IconParkOutlineBatteryWorkingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
