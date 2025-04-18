import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSharikIcon],svg[tabler-brand-sharik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.281 16.606A8.97 8.97 0 0 1 5.644 5.629a9.03 9.03 0 0 1 11.011-1.346C15.071 8.975 14.24 11.243 12 13c-1.584 1.242-3.836 2.24-7.719 3.606M20.616 9.3c2.113 7.59-4.892 13.361-11.302 11.264c1.931-3.1 3.235-4.606 4.686-6.065c1.705-1.715 3.591-3.23 6.616-5.199"></svg:path>`,
})
export class TablerBrandSharikIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
