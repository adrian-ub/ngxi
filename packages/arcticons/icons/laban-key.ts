import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLabanKeyIcon],svg[arcticons-laban-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.416 39.87v4.618c16.52.367 30.7-8.077 30.7-22.514c0-8.077-6.372-18.474-17.958-18.474c-13.893 0-20.273 9.169-20.273 18.474c0 13.848 16.475 16.17 19.115 6.35h-8.689V15.047H33.27c0 26.555-15.636 24.824-20.853 24.824z"></svg:path>`,
})
export class ArcticonsLabanKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
