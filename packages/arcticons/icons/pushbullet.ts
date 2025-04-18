import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPushbulletIcon],svg[arcticons-pushbullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.409h5.495a1 1 0 0 1 1 1v29.273a1 1 0 0 1-1 1H6.5a2 2 0 0 1-2-2V10.408a2 2 0 0 1 2-2m12.636-.09h11.743c16.828.033 16.828 31.337 0 31.274H19.136a1 1 0 0 1-1-1V9.317a1 1 0 0 1 1-1"></svg:path>`,
})
export class ArcticonsPushbulletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
