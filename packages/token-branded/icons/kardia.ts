import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKardiaIcon],svg[token-branded-kardia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9C2131" d="m3.009 8.101l3.117 6.912l5.177 5.087L6.17 4.325z"></svg:path><svg:path fill="#576B98" d="M3.009 8.101L8.44 11.31L6.17 4.325z"></svg:path><svg:path fill="#D71B2A" d="m8.085 3.9l1.796 5.53l1.12.397l1.322-4.147z"></svg:path><svg:path fill="#C41A24" d="m20.992 9.113l-2.488 3.434l-5.706-2.051l1.623-4.942l4.41-1.112z"></svg:path><svg:path fill="#C71C26" d="m17.327 14.173l-4.056 5.53l-2.616-7.924z"></svg:path><svg:path fill="#A71927" d="m10.382 6.222l.62 3.605l1.322-4.147z"></svg:path><svg:path fill="#61395F" d="m9.854 9.438l1.148.398l-.62-3.605L8.085 3.9z"></svg:path><svg:path fill="#614268" d="m8.432 11.309l-2.315 3.704L3 8.101z"></svg:path><svg:path fill="#DA1728" d="m14.412 5.562l2.068 3.163l-3.682 1.78z"></svg:path><svg:path fill="#E42735" d="M18.823 4.451L16.48 8.725l-2.068-3.163z"></svg:path><svg:path fill="#A61D1E" d="m18.503 12.547l-2.014-3.831L21 9.113z"></svg:path><svg:path fill="#D71B2A" d="m13.417 14.841l-.146 4.861l-2.616-7.924z"></svg:path><svg:path fill="#A51C1C" d="m13.272 19.702l.146-4.86l3.91-.67z"></svg:path><svg:path fill="#721919" d="m11.321 20.1l-5.204-5.087l3.737.696z"></svg:path></svg:g>`,
})
export class TokenBrandedKardiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
