import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBeerIcon],svg[bx-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-2V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v15c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-1h2c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2m-4 13c0 .551-.448 1-1 1H5c-.552 0-1-.449-1-1V5h12zm4-3h-2V8h2z"></svg:path><svg:path fill="currentColor" d="M6 7h2v10H6zm6 0h2v10h-2z"></svg:path>`,
})
export class BxBeerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
