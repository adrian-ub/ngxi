import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiGlobeIcon],svg[maki-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.981 9.481l-.721-.721a4.979 4.979 0 1 1-7.02-7.02l-.721-.721A5.991 5.991 0 0 0 7 11.475V13h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H8v-1.527a5.98 5.98 0 0 0 3.981-1.992M7.5 9A3.5 3.5 0 1 0 4 5.5A3.5 3.5 0 0 0 7.5 9m1-5l.364-.592a2.5 2.5 0 0 1 .823.9L9.5 5h-1Zm-1.844-.844L7.5 4v1L8 6h1.94a2.5 2.5 0 0 1-1.5 1.814L8 7H6.5L5.05 5a2.5 2.5 0 0 1 1.606-1.844"></svg:path>`,
})
export class MakiGlobeIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
