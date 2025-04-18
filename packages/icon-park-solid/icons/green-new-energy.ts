import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGreenNewEnergyIcon],svg[icon-park-solid-green-new-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42.336 16C39.249 8.936 32.2 4 24 4S8.75 8.936 5.664 16"></svg:path><svg:path fill="currentColor" d="M24 14a19.94 19.94 0 0 0-6 14.283q0 .75.055 1.488A19.94 19.94 0 0 1 24 44a19.94 19.94 0 0 1 5.945-14.23q.055-.736.055-1.487A19.94 19.94 0 0 0 24 14"></svg:path><svg:path fill="currentColor" d="M4 24c0 11.046 8.954 20 20 20a19.94 19.94 0 0 0-5.945-14.23A19.94 19.94 0 0 0 4 24"></svg:path><svg:path fill="currentColor" d="M44 24c0 11.046-8.954 20-20 20a19.94 19.94 0 0 1 5.945-14.23A19.94 19.94 0 0 1 44 24"></svg:path></svg:g>`,
})
export class IconParkSolidGreenNewEnergyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
