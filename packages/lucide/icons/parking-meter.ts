import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideParkingMeterIcon],svg[lucide-parking-meter-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 15h2m-1-3v3m0 4v3m3.282-3a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"></svg:path><svg:path d="M9 9a3 3 0 1 1 6 0"></svg:path></svg:g>`,
})
export class LucideParkingMeterIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
