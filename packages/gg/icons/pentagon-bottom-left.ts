import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonBottomLeftIcon],svg[gg-pentagon-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.33 9.232L10 5l-5 8.66l3.33 4.232l5.33.768l5-8.66zm2.121 2.326l-3.198-.46l-1.998-2.54l-2.846 4.93l1.998 2.539l3.198.46z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
