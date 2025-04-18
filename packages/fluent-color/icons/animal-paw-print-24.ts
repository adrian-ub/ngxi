import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAnimalPawPrint24Icon],svg[fluent-color-animal-paw-print-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAnimalPawPrint241)" d="M12 10a7 7 0 0 0-7 7c0 1.36.72 2.388 1.7 3.044c.963.645 2.198.956 3.378.956h3.844c1.18 0 2.415-.311 3.377-.956C18.28 19.388 19 18.361 19 17a7 7 0 0 0-7-7"></svg:path><svg:path fill="url(#fluentColorAnimalPawPrint240)" d="M6.25 5.25c0-1.422 1.028-2.75 2.5-2.75s2.5 1.328 2.5 2.75S10.222 8 8.75 8s-2.5-1.328-2.5-2.75M1 8.75C1 7.328 2.028 6 3.5 6S6 7.328 6 8.75S4.972 11.5 3.5 11.5S1 10.172 1 8.75m11.75-3.5c0-1.422 1.028-2.75 2.5-2.75s2.5 1.328 2.5 2.75S16.722 8 15.25 8s-2.5-1.328-2.5-2.75M18 8.75C18 7.328 19.028 6 20.5 6S23 7.328 23 8.75s-1.028 2.75-2.5 2.75S18 10.172 18 8.75"></svg:path><svg:defs><svg:radialgradient id="fluentColorAnimalPawPrint240" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11.5714 17.6 0 12.611 12.143)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorAnimalPawPrint241" x1="8.329" x2="13.266" y1="11.462" y2="21.495" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAnimalPawPrint24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
