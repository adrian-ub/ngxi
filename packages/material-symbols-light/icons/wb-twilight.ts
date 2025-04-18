import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWbTwilightIcon],svg[material-symbols-light-wb-twilight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.966 9.792l-.708-.719l1.727-1.715l.707.708zM2.5 19.5v-1h19v1zm9-12.27V4.847h1v2.385zM6.034 9.78L4.32 8.055l.708-.708l1.727 1.727zM6.116 15q.346-2.175 2.008-3.588T12 10t3.876 1.413T17.884 15z"></svg:path>`,
})
export class MaterialSymbolsLightWbTwilightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
