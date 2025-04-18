import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiGlobe15Icon],svg[maki-globe-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.98 9.48l-.72-.72c-.918 1.057-2.254 1.74-3.76 1.74c-2.757 0-5-2.243-5-5c0-1.506.683-2.842 1.74-3.76l-.72-.72A5.978 5.978 0 0 0 1.5 5.5c0 3.145 2.42 5.72 5.5 5.975V13h-.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 0-1H8v-1.527a5.982 5.982 0 0 0 3.98-1.992z" fill="currentColor"></svg:path><svg:path d="M7.5 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7zm1-5l.364-.592a2.5 2.5 0 0 1 .823.905L9.5 5h-1V4zm-1.844-.844L7.5 4v1L8 6h1.94a2.495 2.495 0 0 1-1.502 1.814L8 7H6.5L5.05 5a2.496 2.496 0 0 1 1.606-1.844z" fill="currentColor"></svg:path>`,
})
export class MakiGlobe15Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
