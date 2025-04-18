import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCubeFiveIcon],svg[icon-park-outline-cube-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m30 27l-6 17m-6-17l6 17m-6-17h12m11 7l-11-7m11-13L30 27m11-13l-17 3m6 10l-6-10m0-13v13M7 14l17 3m-6 10l6-10m-6 10L7 14m11 13L7 34m34.32-20L24 4L6.68 14v20L24 44l17.32-10z"></svg:path>`,
})
export class IconParkOutlineCubeFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
