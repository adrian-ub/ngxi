import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeafSparkIcon],svg[material-symbols-leaf-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22q-1.4 0-2.638-.45T9.1 20.3l-1.4 1.4q-.3.3-.7.3t-.7-.3Q6 21.4 6 21t.3-.7l1.4-1.4q-.8-1.025-1.25-2.262T6 14q0-3.45 2.388-5.725T14 6h8v8q0 1.55-.588 3t-1.762 2.65q-1.2 1.175-2.65 1.763T14 22ZM5.5 10q0-1.875 1.313-3.188T10 5.5q-1.875 0-3.188-1.313T5.5 1q0 1.875-1.313 3.188T1 5.5q1.875 0 3.188 1.313T5.5 10Zm8.8 2.3l-4.475 4.475q-.3.3-.287.7t.287.7q.3.3.7.313t.7-.288l4.475-4.5q.3-.3.3-.7t-.3-.7q-.3-.3-.7-.3t-.7.3Z"></svg:path>`,
})
export class MaterialSymbolsLeafSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
