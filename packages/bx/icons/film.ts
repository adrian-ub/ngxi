import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFilmIcon],svg[bx-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M9 11V5h6v6zm6 2v6H9v-6zM5 5h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm14.002 2H17v-2h2.002zm-.001-4H17v-2h2.001zm0-4H17V9h2.001zM17 7V5h2v2z"></svg:path>`,
})
export class BxFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
