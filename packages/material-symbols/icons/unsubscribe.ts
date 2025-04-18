import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnsubscribeIcon],svg[material-symbols-unsubscribe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13l8-5V6l-8 5l-8-5v2zm7 10q-2.075 0-3.537-1.463T14 18t1.463-3.537T19 13t3.538 1.463T24 18t-1.463 3.538T19 23m-3-4.5h6v-1h-6zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v5.7q-.7-.35-1.45-.525T19 11q-2.925 0-4.962 2.037T12 18q0 .5.075 1t.225 1z"></svg:path>`,
})
export class MaterialSymbolsUnsubscribeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
