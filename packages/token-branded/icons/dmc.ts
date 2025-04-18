import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDmcIcon],svg[token-branded-dmc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#02828B" d="m6.33 10.594l-1.4-6.188l3.729 6.188z"></svg:path><svg:path fill="#00514F" d="m6.33 10.594l-3.33 9l5.659-9z"></svg:path><svg:path fill="#001E1E" d="M4.912 4.424L3 19.594l3.375-9z"></svg:path><svg:path fill="#02828B" d="m17.67 10.594l1.4-6.188l-3.73 6.188z"></svg:path><svg:path fill="#00514F" d="m17.67 10.594l3.33 9l-5.66-9z"></svg:path><svg:path fill="#001E1E" d="M19.088 4.424L21 19.594l-3.375-9z"></svg:path><svg:path fill="#00504F" d="M12 9.356s-2.138.765-3.212 1.136l3.211 5.18z"></svg:path><svg:path fill="#001E1E" d="M12 9.349s2.15.77 3.218 1.142l-3.212 5.18V9.355z"></svg:path><svg:path fill="#01A0A6" d="m12 9.373l-3.212 1.136l3.211-5.175z"></svg:path><svg:path fill="#028188" d="m12 9.373l3.218 1.125L12 5.334z"></svg:path></svg:g>`,
})
export class TokenBrandedDmcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
