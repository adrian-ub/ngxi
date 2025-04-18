import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVanishQuarterIcon],svg[mdi-vanish-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v5h-2zM4.9 6.3l1.4-1.4l2.8 2.8l-1.3 1.5zM8 13H3v-2h5z"></svg:path>`,
})
export class MdiVanishQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
