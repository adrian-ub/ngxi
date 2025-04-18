import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWrongLocationIcon],svg[material-symbols-light-wrong-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.73q.671 0 1.143-.471q.472-.472.472-1.143q0-.672-.472-1.144T12 8.5t-1.143.472t-.472 1.144t.472 1.143T12 11.73m0 9.288q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3q.252 0 .462.021t.48.033L14.9 5.012l-2.1 2.1l3.21 3.21l2.1-2.1l.929.934q.023.288.04.567t.017.573q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m4.01-13.2l-.708-.708l2.1-2.1l-2.1-2.1l.708-.707l2.1 2.1l2.1-2.1l.707.707l-2.1 2.1l2.1 2.1l-.707.708l-2.1-2.1z"></svg:path>`,
})
export class MaterialSymbolsLightWrongLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
