import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBcdtIcon],svg[token-branded-bcdt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBcdt0)" d="M5.369 6.77v7.485l3.79 2.207v4.377c0 .123.193.199.302.142l2.54-1.407l2.5 1.402a.164.164 0 0 0 .246-.142v-4.372l3.885-2.207V6.77L12 3zM8.12 8.064l-2.094-1.17L12 3.43l5.921 3.41l-2.07 1.19s-2.562-1.44-3.85-2.18zm-2.279 5.968V7.329L7.737 8.39v4.453s2.738 1.43 4.026 2.146v4.201l-2.131 1.175v-4.15l-3.79-2.188zm12.316-6.788v6.783l-3.832 2.189v4.149l-2.113-1.17v-4.202c1.284-.72 4.05-2.145 4.05-2.145V8.324zM8.21 12.597V8.665l3.552 1.975v3.899zm7.579-3.984v3.979l-3.553 1.947V10.64zM12 10.247L8.542 8.305l3.435-1.966l3.434 1.947z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBcdt0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#07B5F3"></svg:stop><svg:stop offset="1" stop-color="#44E6DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBcdtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
