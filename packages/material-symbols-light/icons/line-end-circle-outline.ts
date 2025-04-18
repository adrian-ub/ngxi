import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndCircleOutlineIcon],svg[material-symbols-light-line-end-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15.423q1.412 0 2.418-1.006T19.423 12t-1.005-2.418T16 8.578t-2.418 1.006T12.578 12t1.006 2.418T16 15.423m0 1q-1.73 0-2.97-1.127T11.614 12.5H3.076v-1h8.537q.176-1.67 1.416-2.796Q14.27 7.577 16 7.577q1.843 0 3.133 1.29t1.29 3.135t-1.29 3.132T16 16.423M16 12"></svg:path>`,
})
export class MaterialSymbolsLightLineEndCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
