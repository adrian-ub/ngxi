import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarThinIcon],svg[ph-currency-circle-dollar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-72a24 24 0 0 1-24 24h-8v12a4 4 0 0 1-8 0v-12h-20a4 4 0 0 1 0-8h36a16 16 0 0 0 0-32h-24a24 24 0 0 1 0-48h8V72a4 4 0 0 1 8 0v12h20a4 4 0 0 1 0 8h-36a16 16 0 0 0 0 32h24a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhCurrencyCircleDollarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
