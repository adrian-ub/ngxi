import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRomoteIcon],svg[arcticons-romote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 17.21h-7.99a1.72 1.72 0 0 1-1.72-1.72h0V7.5a2 2 0 0 0-2-2h-9.58a2 2 0 0 0-2 2v7.99a1.72 1.72 0 0 1-1.72 1.72H7.5a2 2 0 0 0-2 2v9.58a2 2 0 0 0 2 2h7.99a1.72 1.72 0 0 1 1.72 1.72v7.99a2 2 0 0 0 2 2h9.58a2 2 0 0 0 2-2v-7.99a1.72 1.72 0 0 1 1.72-1.72h7.99a2 2 0 0 0 2-2v-9.58a2 2 0 0 0-2-2"></svg:path><svg:circle cx="24" cy="24" r="6.79" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.004 21.639L39.365 24l-2.361 2.361m-26.708 0L7.935 24l2.361-2.361m16.065 15.715L24 39.715l-2.361-2.361m0-26.708L24 8.285l2.361 2.361"></svg:path>`,
})
export class ArcticonsRomoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
