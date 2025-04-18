import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShieldSparkIcon],svg[material-symbols-shield-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-5q0-2.1 1.45-3.55T17 12q-2.1 0-3.55-1.45T12 7q0 2.1-1.45 3.55T7 12q2.1 0 3.55 1.45T12 17Z"></svg:path>`,
})
export class MaterialSymbolsShieldSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
