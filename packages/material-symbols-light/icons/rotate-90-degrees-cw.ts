import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRotate90DegreesCwIcon],svg[material-symbols-light-rotate-90-degrees-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.212 21q-1.664 0-3.119-.626T5.551 18.66t-1.713-2.542T3.212 13q0-3.327 2.336-5.663T11.212 5h1.304l-2.012-2.011l.708-.797L14.519 5.5l-3.307 3.308l-.708-.796L12.516 6h-1.304Q8.287 6 6.249 8.038T4.212 13t2.037 4.963T11.212 20q.875 0 1.725-.213t1.625-.637l.719.72q-.921.546-1.954.838T11.212 21m6-3.423L12.635 13l4.577-4.577L21.788 13z"></svg:path>`,
})
export class MaterialSymbolsLightRotate90DegreesCwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
