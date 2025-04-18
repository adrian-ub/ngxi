import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMobileNavigator02Icon],svg[hugeicons-mobile-navigator-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 9c0-3.3 0-4.95 1.172-5.975S8.229 2 12 2s5.657 0 6.828 1.025S20 5.7 20 9v6c0 3.3 0 4.95-1.172 5.975S15.771 22 12 22s-5.657 0-6.828-1.025S4 18.3 4 15zm8 1h.009"></svg:path><svg:path d="M12 6.5c1.894 0 3.5 1.613 3.5 3.57c0 1.989-1.632 3.384-3.14 4.333a.72.72 0 0 1-.72 0c-1.505-.958-3.14-2.338-3.14-4.333c0-1.957 1.606-3.57 3.5-3.57M11 19h2"></svg:path></svg:g>`,
})
export class HugeiconsMobileNavigator02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
