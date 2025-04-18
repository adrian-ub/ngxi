import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUUpRightIcon],svg[mdi-arrow-u-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.5 9.5l-1.41 1.42L17 7.83v5.67a6.5 6.5 0 1 1-13 0V6h2v7.5C6 16 8 18 10.5 18s4.5-2 4.5-4.5V7.83l-3.09 3.08L10.5 9.5L16 4z"></svg:path>`,
})
export class MdiArrowUUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
