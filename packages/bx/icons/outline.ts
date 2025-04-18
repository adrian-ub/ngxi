import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxOutlineIcon],svg[bx-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2M5 14V5h9v3h-4c-1.103 0-2 .897-2 2v4zm9.001 0H10v-4h4.001zM10 16h4c1.103 0 2-.897 2-2v-4h3l.001 9H10z"></svg:path>`,
})
export class BxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
