import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSupertuxkartIcon],svg[arcticons-supertuxkart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.947 19.96a4.54 4.54 0 0 1 2.1 2.092l10.702-2.81a15.53 15.53 0 0 0-9.99-9.99Zm-5.987 2.093a4.54 4.54 0 0 1 2.092-2.1L19.241 9.252a15.53 15.53 0 0 0-9.99 9.989Zm8.08 3.894a4.54 4.54 0 0 1-2.092 2.1l2.811 10.702a15.53 15.53 0 0 0 9.99-9.99Zm-5.988 2.1a4.54 4.54 0 0 1-2.092-2.1L9.251 28.759a15.53 15.53 0 0 0 9.989 9.99Z"></svg:path><svg:circle cx="24" cy="24" r="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSupertuxkartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
