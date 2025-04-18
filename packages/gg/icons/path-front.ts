import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathFrontIcon],svg[gg-path-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4h4v10H9v-4H5zm6 6v6h6v-6z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
