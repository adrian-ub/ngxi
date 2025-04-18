import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnergyEllipseIcon],svg[hugeicons-energy-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m8.129 11.598l3.999-5.39c.313-.422.899-.16.899.402v4.172c0 .336.23.609.514.609h1.944c.442 0 .678.618.386 1.011l-3.999 5.39c-.313.422-.899.16-.899-.402v-4.172c0-.336-.23-.609-.514-.609H8.515c-.441 0-.677-.618-.385-1.011"></svg:path></svg:g>`,
})
export class HugeiconsEnergyEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
