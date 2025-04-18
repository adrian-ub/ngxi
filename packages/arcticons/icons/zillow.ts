import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZillowIcon],svg[arcticons-zillow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.747 18.788v4.468c8.015-3.826 16.914-7.41 25.216-7.963l2.654 3.981c-6.073 2.782-10.729 8.22-13.532 11.223c9.27-2.962 16.88-3.684 20.168-4.587v-7.216L23.905 5.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.747 27.237V42.5h34.506V31.219a112 112 0 0 0-26.757 5.98l-2.474-3.782c5.518-5.741 9.191-8.737 12.571-11.895a94.3 94.3 0 0 0-17.846 5.715"></svg:path>`,
})
export class ArcticonsZillowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
