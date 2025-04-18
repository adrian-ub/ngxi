import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAngolaIcon],svg[game-icons-angola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.42 23.22L51.69 46.46l13.49 25.49l32.23-34.49zM211.4 74.2L66.68 82.44l42.72 84.76l-16.48 15.7l32.18 84l-42.68 63l-26.23 133.4l45.01-14.2l28.4 18l141-2.3l106.4 24l59.3-17.2l-41.3-50.3V317.1l63-.7l2.3-66.7l-55.5 1.5l-18.8-126l-71.9-10.5l-12 34.5l-56.3-3z"></svg:path>`,
})
export class GameIconsAngolaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
