import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBbqGrillIcon],svg[hugeicons-bbq-grill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 15l-3 7m9-7l3 7m-6-7v7m3.556-16a1.347 1.347 0 0 0 0-2a1.347 1.347 0 0 1 0-2M12 6a1.347 1.347 0 0 0 0-2a1.347 1.347 0 0 1 0-2M8.444 6a1.347 1.347 0 0 0 0-2a1.347 1.347 0 0 1 0-2M7.5 19h9M12 15a7.015 7.015 0 0 0 6.948-6.003c.063-.435.094-.652-.056-.825S18.5 8 18.016 8H5.984c-.484 0-.726 0-.876.172c-.15.173-.119.39-.056.825A7.014 7.014 0 0 0 12 15m7-5h1M5 10H4" color="currentColor"></svg:path>`,
})
export class HugeiconsBbqGrillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
