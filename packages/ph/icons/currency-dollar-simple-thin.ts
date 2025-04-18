import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleThinIcon],svg[ph-currency-dollar-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 168a44.05 44.05 0 0 1-44 44h-20v20a4 4 0 0 1-8 0v-20h-20a44.05 44.05 0 0 1-44-44a4 4 0 0 1 8 0a36 36 0 0 0 36 36h48a36 36 0 0 0 0-72h-40a44 44 0 0 1 0-88h12V24a4 4 0 0 1 8 0v20h12a44.05 44.05 0 0 1 44 44a4 4 0 0 1-8 0a36 36 0 0 0-36-36h-32a36 36 0 0 0 0 72h40a44.05 44.05 0 0 1 44 44"></svg:path>`,
})
export class PhCurrencyDollarSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
