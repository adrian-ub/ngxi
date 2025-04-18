import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTurnrightIcon],svg[whh-turnright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M995 581L581 995q-29 29-69 29t-69-29L29 581Q0 552 0 512t29-69L443 29q29-29 69-29t69 29l414 414q29 29 29 69t-29 69M696 457L549 327q-15-17-37 8v113h-64q-53 0-90.5 37.5T320 576v65h64v-65q0-26 19-45t45-19h64v114q23 25 37 8l147-130q8-9 8-23t-8-24"></svg:path>`,
})
export class WhhTurnrightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
