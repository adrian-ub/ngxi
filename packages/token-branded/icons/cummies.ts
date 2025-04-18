import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCummiesIcon],svg[token-branded-cummies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCummies0)" d="M13.901 6.937h-3.026l.776-2.25h-1.423L6.094 14.813h1.468l1.063-2.25h3.071l-1.035 2.402L8.496 16.5h-4.67L3 14.964L7.106 4.536L9.187 3h4.714l.912 1.536z"></svg:path><svg:path fill="url(#tokenBrandedCummies1)" fill-rule="evenodd" d="m18.024 17.316l-1.62.82l.822 1.238l-.71 1.626h-2.93l.945-2.25H13.07L12.163 21H9.187l5.108-12.375h5.636L21 10.251zm-3.729-1.35c-.023-.13-.045-.231-.04-.287c.023-.175.04-.214.338-.36c-.259-.113-.208-.433-.146-.574c-.163.04-.534.158-.754.32c-.073-.663.478-.978.765-1.057c-.067-.107-.084-.607.388-1.772c.473-1.158 1.705-1.766 2.262-1.923c.303.534.793 1.89.32 3.048c-.472 1.165-.844 1.496-.967 1.52c.157.27.343.905-.18 1.304a2.7 2.7 0 0 0-.338-.787c-.056.14-.242.399-.517.28c.118.327.106.366 0 .507c-.04.045-.124.096-.237.169c-.236.14-.579.349-.826.709a2.8 2.8 0 0 0-.068-1.097" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCummies0" x1="7.179" x2="16.661" y1="4.607" y2="19.071" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F000E1"></svg:stop><svg:stop offset=".38" stop-color="#FD00B3"></svg:stop><svg:stop offset=".74" stop-color="#F0A"></svg:stop><svg:stop offset="1" stop-color="#D517D1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCummies1" x1="7.179" x2="16.661" y1="4.607" y2="19.071" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F000E1"></svg:stop><svg:stop offset=".38" stop-color="#FD00B3"></svg:stop><svg:stop offset=".74" stop-color="#F0A"></svg:stop><svg:stop offset="1" stop-color="#D517D1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCummiesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
