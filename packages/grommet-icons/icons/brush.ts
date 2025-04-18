import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBrushIcon],svg[grommet-icons-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M9.312 11.73a5 5 0 0 0-5.362 1.12c-1.953 1.952-1.414 8.485-1.414 8.485s6.532.538 8.485-1.415a5 5 0 0 0 1.12-5.362L22.334 4.364a1.997 1.997 0 0 0 0-2.828a1.995 1.995 0 0 0-2.828 0zm1.002-1.617l1.838 1.838l1.697 1.697"></svg:path>`,
})
export class GrommetIconsBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
