import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonTopLeftIcon],svg[gg-pentagon-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.33 15.16L11 19.392l-5-8.66L9.33 6.5l5.33-.768l5 8.66zm2.121-2.326l-3.198.46l-1.998 2.54l-2.846-4.93l1.998-2.539l3.198-.46z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
