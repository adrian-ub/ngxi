import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLockerIcon],svg[hugeicons-locker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11c0-4.243 0-6.364 1.172-7.682S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.318S22 6.758 22 11s0 6.364-1.172 7.682S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.318S2 15.242 2 11m4 9v2m12-2v2M12 7v13m-3-7v1m6-1v1M2 7h20" color="currentColor"></svg:path>`,
})
export class HugeiconsLockerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
