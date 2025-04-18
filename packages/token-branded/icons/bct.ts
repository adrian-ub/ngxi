import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBctIcon],svg[token-branded-bct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FEFEFE" d="M11.643 3.146a.51.51 0 0 1 .716 0l3.613 3.613a.515.515 0 0 1 0 .727l-3.608 3.608a.51.51 0 0 1-.726 0L8.03 7.486a.51.51 0 0 1 0-.727z"></svg:path><svg:path fill="#00A0E1" d="M16.514 8.03a.51.51 0 0 1 .726 0l3.608 3.607a.52.52 0 0 1 .152.364a.5.5 0 0 1-.152.363l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.514.514 0 0 1 0-.727zm-4.872 4.876a.51.51 0 0 1 .716 0l3.613 3.608a.513.513 0 0 1 0 .727l-3.608 3.608a.51.51 0 0 1-.726 0L8.029 17.24a.51.51 0 0 1 0-.727l3.608-3.608zM6.76 8.03a.51.51 0 0 1 .726 0l3.608 3.608a.52.52 0 0 1 .112.56a.5.5 0 0 1-.112.167l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.513.513 0 0 1 0-.727z"></svg:path></svg:g>`,
})
export class TokenBrandedBctIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
