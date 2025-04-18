import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWbTwilightOutlineIcon],svg[material-symbols-light-wb-twilight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.966 9.792l-.708-.719l1.727-1.715l.707.708zM2.5 19.5v-1h19v1zm9-12.27V4.847h1v2.385zM6.034 9.78L4.32 8.055l.708-.708l1.727 1.727zM7.426 14h9.15q-.575-1.35-1.81-2.175Q13.532 11 12 11t-2.765.825Q8 12.65 7.425 14m-1.31 1q.347-2.175 2.009-3.588T12 10t3.876 1.413T17.884 15zM12 14"></svg:path>`,
})
export class MaterialSymbolsLightWbTwilightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
