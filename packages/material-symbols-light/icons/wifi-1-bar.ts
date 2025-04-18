import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifi1BarIcon],svg[material-symbols-light-wifi-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.423q-.646 0-1.092-.446t-.446-1.092t.446-1.093T12 17.346t1.092.446t.446 1.092t-.446 1.093t-1.092.446"></svg:path>`,
})
export class MaterialSymbolsLightWifi1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
