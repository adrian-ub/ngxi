import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSunsetIcon],svg[icon-park-solid-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="m19 8l14 26H5z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29 26l5-6l9 14H32m-22 7h28"></svg:path><svg:circle cx="38" cy="10" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidSunsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
