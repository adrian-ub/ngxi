import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGftIcon],svg[token-branded-gft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#DFF8DA" d="m12 3.895l7.205 4.05v8.11l-7.2 4.05l-7.21-4.05v-8.11L12 3.9z"></svg:path><svg:path fill="#3B896A" d="m6.49 12.745l-2.15-2.46l3.816-.72z"></svg:path><svg:path fill="#4ED9AB" d="M8 17.8v-5.665l4.185-7.455l3.55 6.95z"></svg:path><svg:path fill="#3B896A" d="m16.795 17.916l-4.69-2.63l3.79-2.89z"></svg:path><svg:path fill="#4CDAC7" d="M16.045 11.345L14.6 8.52l4.28.915z"></svg:path><svg:path fill="#4ED9AB" d="M7.35 11.71L5.2 9.25l3.816-.72z"></svg:path><svg:path fill="#4EDBC8" fill-rule="evenodd" d="M20 7.5L12 3L4 7.5v9l8 4.5l8-4.5zm-1 .545l-7-3.96l-7 3.96v7.905l7 3.96l7-3.96z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedGftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
