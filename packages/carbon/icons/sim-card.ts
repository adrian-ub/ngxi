import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSimCardIcon],svg[carbon-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 4h-3v-2h3Zm-3 2h3v2h-3Zm-2-4v10h-3v-7a1 1 0 0 0-1-1H8v-2Zm-5 6H8v-2h3Zm-3 2h3v2H8Zm10 2v-2h3v2Z"></svg:path><svg:path fill="currentColor" d="M23.532 27H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v12.638a2 2 0 0 1-.464 1.28l-4.468 5.362a2 2 0 0 1-1.536.72M4 7v18h19.532L28 19.638V7Z"></svg:path>`,
})
export class CarbonSimCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
