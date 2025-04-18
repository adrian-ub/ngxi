import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMyLocationIcon],svg[material-symbols-light-my-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21.45v-1.461q-3.125-.293-5.16-2.328q-2.036-2.036-2.328-5.161H2.55v-1h1.462q.292-3.125 2.328-5.16t5.16-2.328V2.55h1v1.462q3.125.292 5.16 2.328t2.329 5.16h1.461v1h-1.461q-.293 3.125-2.328 5.16q-2.036 2.036-5.161 2.329v1.461zM12 19q2.9 0 4.95-2.05T19 12t-2.05-4.95T12 5T7.05 7.05T5 12t2.05 4.95T12 19m0-4q-1.237 0-2.119-.881T9 12t.881-2.119T12 9t2.119.881T15 12t-.881 2.119T12 15"></svg:path>`,
})
export class MaterialSymbolsLightMyLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
