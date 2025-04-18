import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumBandageIcon],svg[circum-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.435 7.5H6.565a4.5 4.5 0 0 0 0 9h10.87a4.5 4.5 0 0 0 0-9m-9.93 8h-.94a3.5 3.5 0 0 1 0-7h.94Zm8 0h-7v-7h7Zm1.93 0h-.93v-7h.93a3.5 3.5 0 0 1 0 7"></svg:path><svg:circle cx="10.252" cy="10.501" r=".625" fill="currentColor"></svg:circle><svg:circle cx="10.252" cy="13.501" r=".625" fill="currentColor"></svg:circle><svg:circle cx="13.752" cy="10.5" r=".625" fill="currentColor"></svg:circle><svg:circle cx="13.752" cy="13.5" r=".625" fill="currentColor"></svg:circle>`,
})
export class CircumBandageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
