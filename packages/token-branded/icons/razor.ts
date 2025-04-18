import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRazorIcon],svg[token-branded-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4FA8FF" d="M20.177 9.001c-.452 0-.817.35-.817.785v4.443c.005.43.381.774.828.769a.8.8 0 0 0 .807-.769V9.786c0-.436-.365-.785-.818-.785"></svg:path><svg:path fill="url(#tokenBrandedRazor0)" d="M17.451 6.822c-.452 0-.817.349-.817.774v8.787c-.011.43.349.785.801.796c.447.011.823-.327.834-.758V7.596c0-.425-.365-.774-.818-.774"></svg:path><svg:path fill="url(#tokenBrandedRazor1)" d="M14.726 3.005c-.453 0-.818.344-.818.774v16.447c0 .425.365.768.818.768s.817-.343.817-.768V3.779c0-.43-.365-.774-.817-.774"></svg:path><svg:path fill="url(#tokenBrandedRazor2)" d="M12 7.367c-.453 0-.818.332-.818.747v7.228c0 .409.365.747.818.747s.818-.333.818-.747V8.114c0-.415-.366-.747-.818-.747"></svg:path><svg:path fill="url(#tokenBrandedRazor3)" d="M9.274 3.005c-.452 0-.817.344-.817.77V20.23c0 .426.365.769.817.769c.453 0 .818-.343.818-.769V3.77c0-.426-.365-.764-.818-.769z"></svg:path><svg:path fill="url(#tokenBrandedRazor4)" d="M6.548 5.732c-.452 0-.817.338-.817.752v11.033c0 .415.365.753.817.753c.453 0 .818-.338.818-.753V6.484c0-.414-.365-.752-.818-.752"></svg:path><svg:path fill="url(#tokenBrandedRazor5)" d="M3.823 9.001c-.453 0-.818.338-.818.753v4.497c0 .409.365.747.818.747s.817-.338.817-.747V9.754c0-.415-.365-.753-.817-.753"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRazor0" x1="-152.754" x2="34.365" y1="10.276" y2="10.276" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14779A"></svg:stop><svg:stop offset="1" stop-color="#4FA8FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRazor1" x1="-122.798" x2="64.348" y1="11.024" y2="11.024" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14779A"></svg:stop><svg:stop offset="1" stop-color="#4FA8FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRazor2" x1="-92.756" x2="94.27" y1="10.043" y2="10.043" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14779A"></svg:stop><svg:stop offset="1" stop-color="#4FA8FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRazor3" x1="-62.775" x2="124.252" y1="11.024" y2="11.024" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14779A"></svg:stop><svg:stop offset="1" stop-color="#4FA8FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRazor4" x1="-32.853" x2="154.294" y1="10.631" y2="10.631" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14779A"></svg:stop><svg:stop offset="1" stop-color="#4FA8FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRazor5" x1="2.471" x2="19.484" y1="11.051" y2="11.051" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14779A"></svg:stop><svg:stop offset="1" stop-color="#4FA8FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRazorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
