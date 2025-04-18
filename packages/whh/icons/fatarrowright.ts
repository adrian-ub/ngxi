import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowrightIcon],svg[whh-fatarrowright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m995.86 607l-284 378q-29 39-71 39l-512 1q-53 0-90.5-37.5T.86 897V128q0-53 37.5-90.5T128.86 0h512q42 0 71 39l284 378q29 40 29 95t-29 95"></svg:path>`,
})
export class WhhFatarrowrightIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
