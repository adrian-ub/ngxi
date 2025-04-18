import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosStackoverflowIconIcon],svg[logos-stackoverflow-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BCBBBB" d="M216.33 276.188v-81.211h26.953v108.165H0V194.977h26.954v81.211z"></svg:path><svg:path fill="#F48023" d="m56.708 187.276l132.318 27.654l5.6-26.604L62.31 160.672zm17.502-63.009l122.517 57.058l11.202-24.503L85.412 99.414zm33.955-60.208l103.964 86.462l17.152-20.653l-103.964-86.462zM175.375 0L153.67 16.102l80.511 108.515l21.703-16.102zM53.906 248.884h135.119V221.93H53.907z"></svg:path>`,
})
export class LogosStackoverflowIconIcon {
  readonly viewBox = input("0 0 256 304")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
