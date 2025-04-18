import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile8Icon],svg[subway-file-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M300.7 0H66v512h384V149.3H300.7zm10.6 245.3L354 288l-53.3 53.3l53.3 53.3l-42.7 42.7L258 384l-53.3 53.3l-42.7-42.6l53.3-53.3L162 288l42.7-42.7l53.3 53.3zM322 0v128h128z"></svg:path>`,
})
export class SubwayFile8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
