import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMagnetIcon],svg[icon-park-outline-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 10v16c0 9.941 8.059 18 18 18s18-8.059 18-18V10m-28 0v16c0 5.523 4.477 10 10 10s10-4.477 10-10V10M14 4H6v6h8zm20 0h8v6h-8z"></svg:path>`,
})
export class IconParkOutlineMagnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
