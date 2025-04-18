import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsParrotsecurityIcon],svg[simple-icons-parrotsecurity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m6.267 2.784L13.03 5.54l8.05-.179l-8.05 3.333l-2.154 2.688l5.007 9.038l-1.536-1.605l1.645 3.456l-4.937-5.527l-6.268-6.28L2.77 12.11l.7-3.442l4.018-.261l.823-4.06Z"></svg:path>`,
})
export class SimpleIconsParrotsecurityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
