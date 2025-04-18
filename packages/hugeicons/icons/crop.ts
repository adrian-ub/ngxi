import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCropIcon],svg[hugeicons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 2v2m18 16h-2m-3.5 0H10c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14V7.5M20 22V12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4H2" color="currentColor"></svg:path>`,
})
export class HugeiconsCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
