import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsMagnifyingGlassCircle16SolidIcon],svg[heroicons-magnifying-glass-circle-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.94 8.06a1.5 1.5 0 1 1 2.12-2.12a1.5 1.5 0 0 1-2.12 2.12"></svg:path><svg:path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M4.879 4.879a3 3 0 0 0 3.645 4.706L9.72 10.78a.75.75 0 0 0 1.061-1.06L9.585 8.524A3.001 3.001 0 0 0 4.879 4.88" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsMagnifyingGlassCircle16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
