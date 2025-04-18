import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyFillIcon],svg[ph-currency-cny-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 16M88 72h80a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m104 88a8 8 0 0 1-8 8h-24a24 24 0 0 1-24-24v-24h-16a48.05 48.05 0 0 1-48 48a8 8 0 0 1 0-16a32 32 0 0 0 32-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16h-24v24a8 8 0 0 0 8 8h16v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCurrencyCnyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
