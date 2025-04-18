import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMinimizeAltIcon],svg[gg-minimize-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.074 2l1.414 1.414l-5.85 5.85h2.544v2h-6v-6h2v2.627zm-8.892 10.264v6h-2v-2.422L3.414 21.61L2 20.196l5.932-5.932h-2.75v-2z"></svg:path>`,
})
export class GgMinimizeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
