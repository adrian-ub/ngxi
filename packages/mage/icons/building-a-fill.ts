import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBuildingAFillIcon],svg[mage-building-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.2 20.035h-2.21V5.985a3.52 3.52 0 0 0-3.52-3.52H8.53A3.53 3.53 0 0 0 5 5.985v14.05H2.75a.75.75 0 1 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm-7.69 0h-3.12v-4.34a.64.64 0 0 1 .18-.45a.63.63 0 0 1 .45-.18h1.85a.63.63 0 0 1 .64.63zm1.21-8.67H9.17a.75.75 0 0 1 0-1.5h5.55a.75.75 0 0 1 0 1.5m0-3.7H9.17a.75.75 0 0 1 0-1.5h5.55a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class MageBuildingAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
