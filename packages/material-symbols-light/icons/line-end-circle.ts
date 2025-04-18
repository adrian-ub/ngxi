import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndCircleIcon],svg[material-symbols-light-line-end-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16.423q-1.73 0-2.97-1.127T11.614 12.5H3.076v-1h8.537q.176-1.67 1.416-2.796Q14.27 7.577 16 7.577q1.843 0 3.133 1.29t1.29 3.135t-1.29 3.132T16 16.423"></svg:path>`,
})
export class MaterialSymbolsLightLineEndCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
