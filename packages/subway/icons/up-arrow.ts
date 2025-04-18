import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUpArrowIcon],svg[subway-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.5 0L34.2 213.3v128l170.6-170.6V512h85.4V170.7l170.6 170.6v-128z"></svg:path>`,
})
export class SubwayUpArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
