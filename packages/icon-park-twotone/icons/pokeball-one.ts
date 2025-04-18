import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePokeballOneIcon],svg[icon-park-twotone-pokeball-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPokeballOne0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:circle cx="24" cy="24" r="6" fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 24h14M4 24h14"></svg:path><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPokeballOne0)"></svg:path>`,
})
export class IconParkTwotonePokeballOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
