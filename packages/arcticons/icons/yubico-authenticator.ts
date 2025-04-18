import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYubicoAuthenticatorIcon],svg[arcticons-yubico-authenticator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.728" cy="11.272" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.728" cy="11.272" r=".75" fill="currentColor"></svg:circle><svg:circle cx="42" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="42" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.728" cy="36.728" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.728" cy="36.728" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.272" cy="36.728" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.272" cy="36.728" r=".75" fill="currentColor"></svg:circle><svg:circle cx="6" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="6" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.272" cy="11.272" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.272" cy="11.272" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="6" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="6" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="24" r="15.07" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.29 32.5l8.943-17M24 27.349L17.767 15.5"></svg:path>`,
})
export class ArcticonsYubicoAuthenticatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
