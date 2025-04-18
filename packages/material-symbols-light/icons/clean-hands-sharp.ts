import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCleanHandsSharpIcon],svg[material-symbols-light-clean-hands-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.385 21v-8.154h3V21zM14 21.808l-7.616-2.225v-6.737h2.38l7.352 2.712v1.596h-3l-2.597-.925l-.311.752l2.869.942H21V19.5zm.865-8.735l-5.73-2.112H5.903q.098-1.62 1.23-2.69t2.732-1.287V4h-1.5V3h5q.58 0 1.138.15t1.048.452l-.733.733q-.35-.162-.709-.248Q13.753 4 13.367 4h-2.5v2.985q1.705.215 2.852 1.481q1.148 1.267 1.148 2.996zM18.5 9.616q-.633 0-1.066-.434T17 8.116q0-.48.339-1.195Q17.677 6.206 18.5 5q.823 1.206 1.162 1.912T20 8.116q0 .632-.434 1.066q-.433.434-1.066.434"></svg:path>`,
})
export class MaterialSymbolsLightCleanHandsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
