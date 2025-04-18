import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCardOffIcon],svg[zmdi-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m354 43l1 249L113 50l50-50h149q17 0 29.5 12.5T354 43M27 19l373 372l-27 28l-40-41q-10 6-21 6H99q-18 0-30.5-12.5T56 341V102L0 46z"></svg:path>`,
})
export class ZmdiCardOffIcon {
  readonly viewBox = input("0 0 400 424")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
