import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMoneroIcon],svg[cib-monero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0C7.151 0 0 7.161 0 16.021c0 1.781.303 3.473.823 5.077h4.771V7.639l10.407 10.423L26.408 7.639v13.459h4.771c.516-1.604.823-3.296.823-5.077c0-8.855-7.151-16.021-16-16.021zm-2.385 20.412l-4.552-4.563v8.468H2.344C5.161 28.917 10.24 32 16 32s10.88-3.083 13.661-7.688h-6.724v-8.463l-4.511 4.557l-2.385 2.391l-2.416-2.391h-.011z"></svg:path>`,
})
export class CibMoneroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
