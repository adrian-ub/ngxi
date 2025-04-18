import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathCropIcon],svg[gg-path-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M6 6h8v8H6z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 9h10v10H9zm6 2h2v6h-6v-2h4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPathCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
