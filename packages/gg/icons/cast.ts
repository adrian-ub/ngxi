import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCastIcon],svg[gg-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 6H4v2H2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5v-2h5zM2 13a7 7 0 0 1 7 7H7a5 5 0 0 0-5-5zm0 4a3 3 0 0 1 3 3H2z"></svg:path><svg:path d="M2 9c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9z"></svg:path></svg:g>`,
})
export class GgCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
