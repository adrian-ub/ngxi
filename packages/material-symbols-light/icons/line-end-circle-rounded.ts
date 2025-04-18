import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndCircleRoundedIcon],svg[material-symbols-light-line-end-circle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16.423q-1.73 0-2.97-1.127T11.614 12.5H3.576q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h8.037q.176-1.67 1.416-2.796Q14.27 7.577 16 7.577q1.843 0 3.133 1.29t1.29 3.135t-1.29 3.132T16 16.423"></svg:path>`,
})
export class MaterialSymbolsLightLineEndCircleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
