import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNavigator01Icon],svg[hugeicons-navigator-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 3v18M20 3v18M9.661 16.865C10.671 14.955 11.176 14 12 14s1.33.955 2.339 2.865l.688 1.301c.775 1.467 1.163 2.2.881 2.553a.8.8 0 0 1-.292.229c-.432.206-1.225-.21-2.812-1.042c-.352-.184-.528-.277-.72-.293a1 1 0 0 0-.168 0c-.192.016-.368.109-.72.293c-1.587.832-2.38 1.248-2.812 1.042a.8.8 0 0 1-.292-.229c-.282-.353.106-1.086.881-2.553zM12 3v2m0 4v2" color="currentColor"></svg:path>`,
})
export class HugeiconsNavigator01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
