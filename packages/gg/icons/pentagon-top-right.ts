import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonTopRightIcon],svg[gg-pentagon-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.33 15.16L5 14.392l5-8.66l5.33.768l3.33 4.232l-5 8.66zm3.075.674l-1.998-2.54l-3.198-.46l2.846-4.93l3.198.461l1.998 2.54z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
