import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleFillIcon],svg[ph-currency-dollar-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m16 160h-8v8a8 8 0 0 1-16 0v-8h-8a32 32 0 0 1-32-32a8 8 0 0 1 16 0a16 16 0 0 0 16 16h32a16 16 0 0 0 0-32h-28a32 32 0 0 1 0-64h4v-8a8 8 0 0 1 16 0v8h4a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-24a16 16 0 0 0 0 32h28a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhCurrencyDollarSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
