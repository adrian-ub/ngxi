import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenModeIcon],svg[token-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.984 19.963h-3.511v-7.938l1.406-4.527l-.998-.355l-4.553 12.82h-2.672L6.1 7.143l-.994.355l1.405 4.527v7.941H3V4.034h5.227l3.243 9.118v2.68h1.06v-2.68l3.243-9.118H21v15.93z"></svg:path>`,
})
export class TokenModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
