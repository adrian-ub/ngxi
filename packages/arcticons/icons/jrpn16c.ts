import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrpn16cIcon],svg[arcticons-jrpn16c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="16.926" r="12.426"></svg:circle><svg:circle cx="29.085" cy="23.131" r="2.201"></svg:circle><svg:path d="m15.392 36.484l1.977-1.087v8.007m17.549-2.765a2.66 2.66 0 0 1-2.67 2.669h0c-1.482 0-2.668-1.186-2.668-2.57v-2.67c0-1.482 1.186-2.668 2.669-2.57h0a2.55 2.55 0 0 1 2.57 2.57h0"></svg:path><svg:circle cx="23.772" cy="40.831" r="2.669"></svg:circle><svg:path d="M26.145 36.482c-.396-.593-1.088-.989-2.175-.989h-.198c-1.483 0-2.669 1.186-2.669 2.57v2.768"></svg:path></svg:g>`,
})
export class ArcticonsJrpn16cIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
