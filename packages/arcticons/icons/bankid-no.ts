import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBankidNoIcon],svg[arcticons-bankid-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-27 10.6h5.1m-5.1 15.8h5.1m-5.1-5.3h5.1m4.8-5.2h5.2m-5.2 5.2h5.2m4.8-10.5h5.1m-5.1 5.3h5.1m-5.1 10.5h5.1"></svg:path>`,
})
export class ArcticonsBankidNoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
