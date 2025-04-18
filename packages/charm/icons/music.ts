import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMusicIcon],svg[charm-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="4" cy="12" r="2.25"></svg:circle><svg:circle cx="12" cy="11" r="2.25"></svg:circle><svg:path d="M6.25 12V2.75l8-1V11"></svg:path></svg:g>`,
})
export class CharmMusicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
