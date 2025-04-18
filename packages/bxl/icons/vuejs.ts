import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlVuejsIcon],svg[bxl-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z"></svg:path><svg:path fill="currentColor" d="M18.461 3.332L12 14.235L5.539 3.332H1.992L12 20.672l10.008-17.34z"></svg:path>`,
})
export class BxlVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
