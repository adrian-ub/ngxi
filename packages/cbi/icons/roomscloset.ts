import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsclosetIcon],svg[cbi-roomscloset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2m0 6h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2m0 6h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2m-7 2a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0zm-5-8h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2M26 1H6a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h1v1a1 1 0 1 0 2 0v-1h14v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"></svg:path>`,
})
export class CbiRoomsclosetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
