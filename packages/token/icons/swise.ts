import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSwiseIcon],svg[token-swise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.5 17.2l7.505 3.8v-7.455L4.5 17.195zm7.505 3.8l7.495-3.785l-7.495-3.67z"></svg:path><svg:path fill="currentColor" d="m12.004 13.545l7.495 3.67l-3.06-5.82L12 13.55z"></svg:path><svg:path fill="currentColor" d="m4.5 17.2l7.505-3.655l-4.425-2.16z"></svg:path><svg:path fill="currentColor" d="m7.579 11.385l4.42 2.16V3l-4.425 8.385zm4.425 2.16l4.435-2.15L12 3v10.55z"></svg:path>`,
})
export class TokenSwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
