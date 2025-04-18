import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDownArrowIcon],svg[subway-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M289.7 341.3V0h-85.4v341.3L33.7 170.7v128L247 512l213.3-213.3v-128z"></svg:path>`,
})
export class SubwayDownArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
