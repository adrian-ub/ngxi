import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTapeMeasureIcon],svg[mdi-tape-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a7 7 0 0 1 7 7h1v3h-1v4H9a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 3a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m8 9h5v4h-2v-2h-3z"></svg:path>`,
})
export class MdiTapeMeasureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
