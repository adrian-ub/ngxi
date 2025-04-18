import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricTower01Icon],svg[hugeicons-electric-tower-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 6l.4 2.214c.066.434.026.875-.119 1.296L5 22M15 6l-.4 2.214c-.066.434-.026.875.119 1.296L19 22"></svg:path><svg:path d="m3 11l.324-1.08c.087-.29.13-.435.229-.557c.098-.121.244-.21.535-.386L8.474 6.32c.26-.158.391-.237.542-.278C9.166 6 9.328 6 9.65 6h4.7c.322 0 .483 0 .634.04c.15.042.281.12.542.279l4.386 2.658c.291.176.437.265.535.386c.098.122.142.267.23.558L21 11M3 22h18M4 9h15.5"></svg:path><svg:path d="m9.5 10l6.5 4.5L5 22"></svg:path><svg:path d="M14.5 10L8 14.5L19 22M9 6l1.4-2.24C11.133 2.587 11.5 2 12 2s.867.587 1.6 1.76L15 6"></svg:path></svg:g>`,
})
export class HugeiconsElectricTower01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
