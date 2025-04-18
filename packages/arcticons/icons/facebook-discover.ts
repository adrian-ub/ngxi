import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFacebookDiscoverIcon],svg[arcticons-facebook-discover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.286 30.919h-9.233V13.597h9.233a8.66 8.66 0 0 1 8.661 8.66h0a8.66 8.66 0 0 1-8.66 8.662"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.053 14.216c13.914 9.144 10.76 20.705 8.624 21.913c-2.475 1.401-8.198-2.918-8.624-5.21"></svg:path>`,
})
export class ArcticonsFacebookDiscoverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
