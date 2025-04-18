import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightControlPointDuplicateOutlineIcon],svg[material-symbols-light-control-point-duplicate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15.308h1V12.5h2.808v-1H15.5V8.692h-1V11.5h-2.808v1H14.5zM6 19.423q-2.263-.95-3.632-2.96T1 12t1.368-4.462T6 4.576V5.7q-1.85.875-2.925 2.575T2 12t1.075 3.725T6 18.3zm9.001.577q-1.664 0-3.12-.626T9.34 17.66t-1.714-2.54T7 12t.626-3.12T9.34 6.34t2.54-1.714T15 4t3.12.626t2.54 1.714t1.713 2.54T23 12t-.626 3.12t-1.714 2.542t-2.54 1.713T15 20m0-1q2.925 0 4.963-2.037T22 12t-2.037-4.962T15 5t-4.962 2.038T8 12t2.038 4.963T15 19"></svg:path>`,
})
export class MaterialSymbolsLightControlPointDuplicateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
