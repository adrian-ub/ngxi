import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetiqAdvancedAuthenticationIcon],svg[arcticons-netiq-advanced-authentication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 6.433H22.267A2.567 2.567 0 0 0 19.7 8.999v8.342m8.324 18.608h-5.757a2.567 2.567 0 0 1-2.567-2.567v-8.341"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 35.949L29.819 41.46a1.283 1.283 0 0 1-1.795-1.177V14.407a2.57 2.57 0 0 1 1.544-2.354L42.5 6.433Z"></svg:path><svg:circle cx="9.583" cy="21.191" r="4.083" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.123 25.273v-4.082h0h-11.462m8.783 2.354v-2.354"></svg:path>`,
})
export class ArcticonsNetiqAdvancedAuthenticationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
