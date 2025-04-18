import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUptodateIcon],svg[arcticons-uptodate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.755 12.31A14.11 14.11 0 0 0 9.747 24m6.22 11.699A14.11 14.11 0 0 0 37.964 24m-26.543 0h3.955l-5.438 5.438L4.5 24h3.955zm25.158 0h-3.955l5.438-5.438L43.5 24h-3.955zm-18.248.176l4.329 4.329l9.009-9.01"></svg:path>`,
})
export class ArcticonsUptodateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
