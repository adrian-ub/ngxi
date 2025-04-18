import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityHelperIcon],svg[material-symbols-humidity-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-3.325 0-5.663-2.3T2 14.1q0-1.575.613-3.012T4.35 8.55L10 3l5.65 5.55q1.125 1.1 1.738 2.538T18 14.1q0 3.3-2.337 5.6T10 22Zm8.5-12q0-1.875-1.313-3.188T14 5.5q1.875 0 3.188-1.313T18.5 1q0 1.875 1.313 3.188T23 5.5q-1.875 0-3.188 1.313T18.5 10Z"></svg:path>`,
})
export class MaterialSymbolsHumidityHelperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
