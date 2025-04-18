import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCherryIcon],svg[icon-park-solid-cherry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:circle cx="14" cy="34" r="8" fill="currentColor" stroke-linejoin="round"></svg:circle><svg:circle cx="35" cy="37" r="7" fill="currentColor" stroke-linejoin="round"></svg:circle><svg:path d="M37 10c-2.651.812-8.372 3.015-11.72 6.26C20.255 21.13 19 24.5 18 27m19-17c-1.117 1.318-3.285 4.596-3.956 8.39C32.036 24.078 33 27.5 34 30M30 4l14 12"></svg:path></svg:g>`,
})
export class IconParkSolidCherryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
