import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPlaceOfWorshipIcon],svg[maki-place-of-worship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 0l-2 2v2h4V2zm-2 4.5L4 6h7L9.5 4.5zM2 6.5a1 1 0 0 0-1 1V13h2V7.5a1 1 0 0 0-1-1m2 0V13h7V6.5zm9 0a1 1 0 0 0-1 1V13h2V7.5a1 1 0 0 0-1-1"></svg:path>`,
})
export class MakiPlaceOfWorshipIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
