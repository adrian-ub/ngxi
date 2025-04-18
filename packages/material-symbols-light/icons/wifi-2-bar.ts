import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifi2BarIcon],svg[material-symbols-light-wifi-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.423q-.646 0-1.092-.446t-.446-1.092t.446-1.093T12 17.346t1.092.446t.446 1.092t-.446 1.093t-1.092.446M6.35 15.35l-1.023-1.034q1.302-1.302 3.004-2.04t3.672-.737t3.669.74t3.001 2.048L17.65 15.35q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725"></svg:path>`,
})
export class MaterialSymbolsLightWifi2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
