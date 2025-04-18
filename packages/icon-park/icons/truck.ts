import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTruckIcon],svg[icon-park-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 39C14.2091 39 16 37.2091 16 35C16 32.7909 14.2091 31 12 31C9.79086 31 8 32.7909 8 35C8 37.2091 9.79086 39 12 39Z"></svg:path><svg:path d="M35 39C37.2091 39 39 37.2091 39 35C39 32.7909 37.2091 31 35 31C32.7909 31 31 32.7909 31 35C31 37.2091 32.7909 39 35 39Z"></svg:path><svg:path stroke-linecap="round" d="M8 35H2V11H31V35H16"></svg:path><svg:path stroke-linecap="round" d="M31 35V18H39.5714L46 26.5V35H39.8112"></svg:path></svg:g>`,
})
export class IconParkTruckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
