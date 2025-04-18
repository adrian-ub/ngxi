import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsstaircaseIcon],svg[cbi-roomsstaircase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28H11.414L28 11.414V27a1 1 0 0 1-1 1M23 4h5v4.586L8.586 28H4v-5a1 1 0 0 1 1-1h5v-5a1 1 0 0 1 1-1h5v-5a1 1 0 0 1 1-1h5V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class CbiRoomsstaircaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
