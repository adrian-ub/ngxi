import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTvIcon],svg[gg-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m8 6.119l1.413-1.413l2.124 2.124L14.367 4l1.411 1.412l-2.464 2.464H18a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3.757zm10 3.757H6v7h12z" clip-rule="evenodd"></svg:path><svg:path d="M8 19.876h8v1H8z"></svg:path></svg:g>`,
})
export class GgTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
