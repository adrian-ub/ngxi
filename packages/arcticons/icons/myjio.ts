import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyjioIcon],svg[arcticons-myjio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.663 16.337v11.495a3.83 3.83 0 0 1-3.831 3.831h0A3.83 3.83 0 0 1 12 27.831V26.56"></svg:path><svg:rect width="7.663" height="10.153" x="28.337" y="21.509" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.832" ry="3.832"></svg:rect><svg:circle cx="24.098" cy="18.071" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.098 21.509v10.154"></svg:path>`,
})
export class ArcticonsMyjioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
