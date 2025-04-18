import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftThinIcon],svg[mdi-arrow-bottom-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.07 19l-2.83-2.82L19 6.42L17.58 5l-9.76 9.76L5 11.94V19Z"></svg:path>`,
})
export class MdiArrowBottomLeftThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
