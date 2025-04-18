import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUpArrow1Icon],svg[subway-up-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 0L74.3 213.3h128V512h85.4V213.3h128z"></svg:path>`,
})
export class SubwayUpArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
