import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSlgIcon],svg[token-branded-slg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSlg0)" d="m3.53 17.225l2.647-4.923l5.876 2.583l5.77-2.583l2.647 4.923L12.053 21z"></svg:path><svg:path fill="url(#tokenBrandedSlg1)" fill-rule="evenodd" d="M11.99 15.234A960 960 0 0 0 6.176 12.3l5.812-2.89l5.834 2.89zm0-.916c-1.308-.662-3.94-1.996-3.987-2.012l3.986-1.98l4.008 1.985l-4.008 2.012zm-1.843-1.525l1.853.794l1.853-.8L12 12l-1.853.789z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedSlg2)" d="M11.999 11.47L7.764 9.607L11.999 3z"></svg:path><svg:path fill="url(#tokenBrandedSlg3)" d="m12 11.47l4.235-1.863L12 3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSlg0" x1="11.831" x2="11.831" y1="20.285" y2="13.715" gradientUnits="userSpaceOnUse"><svg:stop offset=".59" stop-color="#A9CFD8"></svg:stop><svg:stop offset="1" stop-color="#CFE6EE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSlg1" x1="12" x2="12" y1="9.41" y2="15.233" gradientUnits="userSpaceOnUse"><svg:stop offset=".57" stop-color="#D7FDFF"></svg:stop><svg:stop offset="1" stop-color="#DAFBFF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSlg2" x1="8.595" x2="11.623" y1="9.993" y2="4.419" gradientUnits="userSpaceOnUse"><svg:stop offset=".46" stop-color="#70B8C7"></svg:stop><svg:stop offset="1" stop-color="#D8F3FC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSlg3" x1="15.403" x2="12.375" y1="9.993" y2="4.419" gradientUnits="userSpaceOnUse"><svg:stop offset=".26" stop-color="#96CEDF"></svg:stop><svg:stop offset="1" stop-color="#D8F3FC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSlgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
