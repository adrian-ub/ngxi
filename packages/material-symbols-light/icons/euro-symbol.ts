import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEuroSymbolIcon],svg[material-symbols-light-euro-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.27 20.308q-2.605 0-4.79-1.493q-2.184-1.492-3.134-4.315H3.77v-1h3.32q-.07-.294-.098-.73q-.03-.437-.03-.77t.03-.74t.098-.76H3.77v-1h3.577q.854-2.611 3.02-4.21t4.903-1.598q1.418 0 2.6.408t2.362 1.239l-.789.788q-.99-.667-2.049-.993t-2.124-.326q-2.432 0-4.22 1.366T8.558 9.5h6.211v1H8.254q-.108.352-.142.76q-.035.407-.035.74t.054.779t.123.721h6.515v1H8.54q.857 2.344 2.731 3.518t4 1.174q1.065 0 2.177-.335t1.995-1.003l.789.808q-1.2.869-2.392 1.257q-1.191.389-2.57.389"></svg:path>`,
})
export class MaterialSymbolsLightEuroSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
