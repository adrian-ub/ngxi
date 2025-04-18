import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClubq8Icon],svg[arcticons-clubq8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.85 34.5a2 2 0 0 0-2 2h0a2 2 0 0 0 2 2h1.3a2 2 0 0 0 2-2h0a2 2 0 0 0-2-2m0 0a2 2 0 0 0 2-2h0a2 2 0 0 0-2-2h-1.3a2 2 0 0 0-2 2h0a2 2 0 0 0 2 2m0 0h1.3m-5 4l-2.65-2.618m0-5.382a2.65 2.65 0 0 1 2.65 2.65v2.7a2.65 2.65 0 0 1-2.65 2.65h0a2.65 2.65 0 0 1-2.65-2.65v-2.7a2.65 2.65 0 0 1 2.65-2.65m11.863-10a2.854 2.854 0 0 1 2.854-2.855h0a2.854 2.854 0 0 1 2.855 2.854v1.855a2.854 2.854 0 0 1-2.855 2.855h0a2.854 2.854 0 0 1-2.854-2.855m0 2.855V13.791m-8.144 3.854v4.71a2.854 2.854 0 0 0 2.854 2.854h0a2.854 2.854 0 0 0 2.855-2.854v-4.71m0 4.71v2.854m-10-11.419v9.992c0 .788.639 1.427 1.427 1.427h.428m-4.29-3.829v.047a3.78 3.78 0 0 1-3.783 3.782h0a3.78 3.78 0 0 1-3.782-3.782v-3.854a3.78 3.78 0 0 1 3.782-3.782h0a3.78 3.78 0 0 1 3.783 3.782v.048"></svg:path>`,
})
export class ArcticonsClubq8Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
