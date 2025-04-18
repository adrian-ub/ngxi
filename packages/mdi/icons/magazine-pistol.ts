import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMagazinePistolIcon],svg[mdi-magazine-pistol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 1l-2 2H7l2 18H8v2h10v-2L16 1M9 5h3l.24 2h-3m.23 2h3l.24 2h-3m.23 2h3l.24 2h-3m.23 2h3l.24 2h-3Z"></svg:path>`,
})
export class MdiMagazinePistolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
