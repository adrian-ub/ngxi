import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPdtIcon],svg[token-branded-pdt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8CDC48" d="M12 6.258L8.34 12h.006l-.84 1.332H7.5L3 20.4V3.6l3.654 5.742l-.846 1.326l-1.362-2.142v6.948L6.654 12l.84-1.332H7.5L12 3.6l3.654 5.742l-.846 1.326zm4.5 4.41L21 3.6v16.8l-3.66-5.742l.852-1.332l1.362 2.148V8.526l-1.656 2.598l-.552.876L12 20.4l-3.654-5.742l.846-1.326L12 17.742L15.654 12l.84-1.332z"></svg:path>`,
})
export class TokenBrandedPdtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
