import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBrush4LineIcon],svg[ri-brush-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.997v6.272H7V4.997H5v9h14v-9zm11 11H4v2h16zm-17-2v-10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5z"></svg:path>`,
})
export class RiBrush4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
