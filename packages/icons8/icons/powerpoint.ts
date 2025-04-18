import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8PowerpointIcon],svg[icons8-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm5 6v2h4c1.19 0 2 .81 2 2s-.81 2-2 2s-2-.81-2-2h-2v7h2v-3.594c.594.35 1.26.594 2 .594c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></svg:path>`,
})
export class Icons8PowerpointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
