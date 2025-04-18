import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFavoriteIcon],svg[fontisto-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2.089v21.912l6.546-6.26l6.545 6.26V2.089A2.11 2.11 0 0 0 10.982 0l-.077.001h.004h-8.726L2.11 0A2.11 2.11 0 0 0 .001 2.088z"></svg:path>`,
})
export class FontistoFavoriteIcon {
  readonly viewBox = input("0 0 13 24")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
