import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeMaxOutlineIcon],svg[material-symbols-home-max-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h14q.825 0 1.413-.587T21 15V9q0-.825-.587-1.412T19 7H5q-.825 0-1.412.588T3 9v6q0 .825.588 1.413T5 17m2 3v-1H5q-1.65 0-2.825-1.175T1 15V9q0-1.65 1.175-2.825T5 5h14q1.65 0 2.825 1.175T23 9v6q0 1.65-1.175 2.825T19 19h-2v1zm5-8"></svg:path>`,
})
export class MaterialSymbolsHomeMaxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
