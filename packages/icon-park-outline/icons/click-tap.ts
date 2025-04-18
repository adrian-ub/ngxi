import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClickTapIcon],svg[icon-park-outline-click-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M15 26V15a3 3 0 1 1 6 0v11"></svg:path><svg:path stroke-linejoin="round" d="M39 25v6.5C39 37.851 33.851 43 27.5 43h-1C20.149 43 15 37.851 15 31.5V25"></svg:path><svg:path stroke-linejoin="round" d="M21 29v-5a3 3 0 1 1 6 0v5m0 0v-5a3 3 0 1 1 6 0v5m0 0v-5a3 3 0 1 1 6 0v5"></svg:path><svg:path d="M28 15a9.97 9.97 0 0 0-1.959-5.945A9.99 9.99 0 0 0 18 5a9.99 9.99 0 0 0-8.042 4.055A9.97 9.97 0 0 0 8 15"></svg:path></svg:g>`,
})
export class IconParkOutlineClickTapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
