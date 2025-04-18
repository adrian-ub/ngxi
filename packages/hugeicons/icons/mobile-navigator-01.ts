import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMobileNavigator01Icon],svg[hugeicons-mobile-navigator-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 9c0-3.3 0-4.95 1.172-5.975S8.229 2 12 2s5.657 0 6.828 1.025S20 5.7 20 9v6c0 3.3 0 4.95-1.172 5.975S15.771 22 12 22s-5.657 0-6.828-1.025S4 18.3 4 15z"></svg:path><svg:path d="M12.629 14.247a.906.906 0 0 1-1.258 0c-1.544-1.497-3.613-3.168-2.604-5.595A3.53 3.53 0 0 1 12 6.5c1.378 0 2.688.84 3.233 2.152c1.008 2.424-1.056 4.104-2.604 5.595M12 10h.009M11 19h2"></svg:path></svg:g>`,
})
export class HugeiconsMobileNavigator01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
