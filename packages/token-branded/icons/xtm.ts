import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXtmIcon],svg[token-branded-xtm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedXtm0)" d="M3.922 15.025v-6.76a1.61 1.61 0 0 1 .86-1.423l6.528-3.423a1.61 1.61 0 0 1 1.59.054l6.367 3.885a1.61 1.61 0 0 1 .773 1.38v6.303a1.61 1.61 0 0 1-.709 1.332l-6.324 4.293a1.61 1.61 0 0 1-1.789.01L4.653 16.38a1.61 1.61 0 0 1-.731-1.354"></svg:path><svg:path fill="#fff" d="M14.13 19.924c-.553.37-1.45 1.112-2.149 1.074c-.66-.032-1.343-.73-1.88-1.074c.053-.08.268-.269.268-.806v-6.985l-1.53.806c-.463.178-1.49.376-1.935-.268c-.548-.806-.269-1.88.28-2.15c.322-.16 1.38-.897 2.288-1.526c.339-.236.645-.456.898-.623c.273-.177 1.074-.537 1.611-.537s1.338.36 1.612.537l2.955 1.88c.457.27 1.21 1.075.548 2.15c-.66 1.074-1.934.628-2.482.269l-1.02-.538v6.985c0 .537.402.688.537.806"></svg:path><svg:path fill="url(#tokenBrandedXtm1)" d="M4.46 15.035v-3.492a.268.268 0 1 0-.538 0v3.492a1.61 1.61 0 0 0 .73 1.349l4.498 2.955a.27.27 0 0 0 .29-.457l-4.497-2.944a1.07 1.07 0 0 1-.484-.903"></svg:path><svg:path fill="#ED83B3" d="M19.81 14.799a.27.27 0 0 0 .268-.27V8.503a1.61 1.61 0 0 0-.773-1.376l-6.373-3.89a1.61 1.61 0 0 0-1.584-.054L6.754 5.595A.268.268 0 1 0 7 6.068l4.594-2.407a1.08 1.08 0 0 1 1.058.032l6.372 3.89a1.07 1.07 0 0 1 .516.913v6.034c0 .15.119.269.269.269"></svg:path><svg:path fill="#FFD6E9" d="M13.62 3.955a.27.27 0 0 1 .37-.091l4.32 2.648a.269.269 0 0 1-.28.457L13.71 4.32a.27.27 0 0 1-.09-.365"></svg:path><svg:path fill="#FC81B8" d="M9.767 8.496a.27.27 0 0 0 .354.038l.237-.162c.269-.177 1.074-.537 1.612-.537c.537 0 1.332.36 1.612.537l2.95 1.88c.456.27 1.208 1.076.547 2.15l-.048.075c-.097.145-.075.36.08.446c.108.054.232.033.302-.053l.123-.188c.43-.688.414-1.344.183-1.876a2.3 2.3 0 0 0-.908-1.01l-2.94-1.88a4.5 4.5 0 0 0-1.901-.618a4.5 4.5 0 0 0-1.908.623l-.01.005l-.237.167a.27.27 0 0 0-.053.403z"></svg:path><svg:path fill="#FDD2E0" d="M13.41 7.96a.27.27 0 0 1 .376-.086l2.138 1.349a.27.27 0 0 1 .123.273a.27.27 0 0 1-.408.184L13.49 8.33a.27.27 0 0 1-.12-.277a.3.3 0 0 1 .04-.099z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedXtm0" x1="15.969" x2="7.788" y1="4.4" y2="18.89" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F2445B"></svg:stop><svg:stop offset="1" stop-color="#A023B1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedXtm1" x1="2.384" x2="15.637" y1="5.673" y2="22.82" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7A1981"></svg:stop><svg:stop offset=".63" stop-color="#BD27C1"></svg:stop><svg:stop offset="1" stop-color="#600A67"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedXtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
