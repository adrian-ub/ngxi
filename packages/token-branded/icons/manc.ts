import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMancIcon],svg[token-branded-manc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#252060"><svg:path d="M8.106 6.788A5.13 5.13 0 0 0 3 11.937v4.088a1.184 1.184 0 0 0 2.368 0V12.07c0-1.61 1.142-2.913 2.738-2.913c1.601 0 2.473 1.307 2.473 2.913v3.822a1.32 1.32 0 1 0 2.638 0v-3.955c0-2.842-2.287-5.149-5.11-5.149"></svg:path><svg:path d="M15.894 6.788c-2.824 0-5.315 2.307-5.315 5.149v3.851a1.42 1.42 0 0 0 2.842 0V12.07c0-1.61.872-2.913 2.473-2.913c1.596 0 2.737 1.307 2.737 2.913v3.955a1.184 1.184 0 0 0 2.369 0v-4.088c0-2.842-2.288-5.149-5.106-5.149"></svg:path></svg:g>`,
})
export class TokenBrandedMancIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
