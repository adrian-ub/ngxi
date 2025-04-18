import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMagnetIcon],svg[hugeicons-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.925 2.5H9.15s-.95 5.2-.95 7.6c0 3 1.9 5.4 3.8 5.4s3.8-2.4 3.8-5.4c0-2.4-.95-7.6-.95-7.6h5.225s1.425 4.638 1.425 9c0 5.5-3.8 10-9.5 10s-9.5-4.5-9.5-10c0-4.362 1.425-9 1.425-9m-.952 4.75h5.225m7.6 0h5.225" color="currentColor"></svg:path>`,
})
export class HugeiconsMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
