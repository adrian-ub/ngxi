import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartCircleRoundedIcon],svg[material-symbols-light-line-start-circle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.423q-1.843 0-3.133-1.29t-1.29-3.135t1.29-3.132T8 7.576q1.73 0 2.97 1.127t1.416 2.796h8.037q.213 0 .356.144t.144.357t-.144.356t-.356.143h-8.036q-.178 1.67-1.417 2.796Q9.73 16.423 8 16.423"></svg:path>`,
})
export class MaterialSymbolsLightLineStartCircleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
