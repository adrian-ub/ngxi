import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTurnleftIcon],svg[whh-turnleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M995 581L581 995q-29 29-69 29t-69-29L29 581Q0 552 0 512t29-69L443 29q29-29 69-29t69 29l414 414q29 29 29 69t-29 69m-291-5q0-53-37.5-90.5T576 448h-64V335q-22-25-37-8L328 457q-8 10-8 24t8 23l147 130q14 17 37-8V512h64q26 0 45 19t19 45v64h64z"></svg:path>`,
})
export class WhhTurnleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
