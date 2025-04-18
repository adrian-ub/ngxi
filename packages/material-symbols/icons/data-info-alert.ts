import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDataInfoAlertIcon],svg[material-symbols-data-info-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-2h12v2zm13-7q-2.075 0-3.537-1.463T11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13M3 12v-2h6.3q.175.55.4 1.05t.55.95zm0 4v-2h9.4q.575.35 1.225.588t1.375.337V16zm12.5-5h1V7h-1zm.5-5q.2 0 .35-.15t.15-.35t-.15-.35T16 5t-.35.15t-.15.35t.15.35T16 6"></svg:path>`,
})
export class MaterialSymbolsDataInfoAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
