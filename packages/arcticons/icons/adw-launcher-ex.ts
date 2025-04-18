import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdwLauncherExIcon],svg[arcticons-adw-launcher-ex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 27.506L24 8.006l-19.5 19.5m22.775 12.021L24 36.252l-3.275 3.275"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.195 29.119c2.88 6.41 9.321 10.875 16.805 10.875S37.925 35.53 40.805 29.12m-8.646-12.955v-4.563h4.92v9.483"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.24 35.69c3.824-1.042 6.938-3.456 8.564-6.571m-25.608 0c1.626 3.115 4.74 5.529 8.563 6.571"></svg:path>`,
})
export class ArcticonsAdwLauncherExIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
