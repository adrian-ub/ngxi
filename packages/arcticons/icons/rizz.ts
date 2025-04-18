import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRizzIcon],svg[arcticons-rizz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 29.501V18.5h3.602a3.69 3.69 0 0 1 3.687 3.695h0a3.69 3.69 0 0 1-3.686 3.695H9.5m3.6 0l3.602 3.61m2.465-11.001V29.5m2.377-11h7.289l-7.289 11h7.289m2.377-11h7.29l-7.29 11h7.29"></svg:path>`,
})
export class ArcticonsRizzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
