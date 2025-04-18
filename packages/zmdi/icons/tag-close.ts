import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTagCloseIcon],svg[zmdi-tag-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0q18 0 30.5 12.5T512 43v298q0 18-12.5 30.5T469 384H149q-21 0-34-19L0 192L115 19q13-19 34-19zm-64 269l-76-77l76-77l-30-30l-76 77l-77-77l-30 30l77 77l-77 77l30 30l77-77l76 77z"></svg:path>`,
})
export class ZmdiTagCloseIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
