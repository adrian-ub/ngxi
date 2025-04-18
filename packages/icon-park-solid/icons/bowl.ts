import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBowlIcon],svg[icon-park-solid-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M32 44s0-3.864.002-3.872a18 18 0 0 0 4.726-3.4A17.94 17.94 0 0 0 42 24H6c0 4.97 2.015 9.47 5.272 12.728a18.1 18.1 0 0 0 4.741 3.407L16 44z"></svg:path><svg:path d="M24 18.008V8m12 10.008V12m-24 6.008V12m28-4a4 4 0 0 0-4 4m-8-8a4 4 0 0 0-4 4m-8 0a4 4 0 0 0-4 4"></svg:path></svg:g>`,
})
export class IconParkSolidBowlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
