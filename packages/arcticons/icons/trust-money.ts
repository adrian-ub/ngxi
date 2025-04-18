import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrustMoneyIcon],svg[arcticons-trust-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.737 22.415L19.08 32.79c-.566 1.037-.252 1.729.786 1.729h.518m.942-9.337h3.804"></svg:path><svg:ellipse cx="22.242" cy="27.737" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="11.052" ry="10.985"></svg:ellipse><svg:ellipse cx="22.242" cy="22.111" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.713" ry="16.611"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.347 15.002h5.124V42.5H9.893v-9.197"></svg:path>`,
})
export class ArcticonsTrustMoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
