import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVaroBankIcon],svg[arcticons-varo-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.711 19.23l-3.16 9.54l-3.161-9.54"></svg:path><svg:rect width="4.771" height="6.321" x="30.839" y="22.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.385" ry="2.385"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.726 24.835a2.385 2.385 0 0 1 2.385-2.385h0m-2.385 0v6.32m-2.436-2.385a2.385 2.385 0 0 1-2.386 2.386h0a2.385 2.385 0 0 1-2.385-2.386v-1.55a2.385 2.385 0 0 1 2.385-2.385h0a2.385 2.385 0 0 1 2.386 2.385m0 3.935v-6.32"></svg:path>`,
})
export class ArcticonsVaroBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
