import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsDice3Icon],svg[bxs-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M8 9.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8 9.5m4 4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 13.5m4 4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 16 17.5"></svg:path>`,
})
export class BxsDice3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
