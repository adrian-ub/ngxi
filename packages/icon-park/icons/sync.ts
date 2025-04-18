import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSyncIcon],svg[icon-park-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 7.979L19 8.00006V18.0001H4V32H20.9995"></svg:path><svg:path d="M20 42L31 41.9789V31.5789H44V18H30.3448"></svg:path></svg:g>`,
})
export class IconParkSyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
