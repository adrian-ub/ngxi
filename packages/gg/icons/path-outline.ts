import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathOutlineIcon],svg[gg-path-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4h4v10H9v-4H5zm2 2h6v2H9v4H7zm4 10h6v-6h-2v4h-4zm2-6h-2v2h2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
