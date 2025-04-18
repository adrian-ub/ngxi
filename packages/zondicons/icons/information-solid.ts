import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsInformationSolidIcon],svg[zondicons-information-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M9 11v4h2V9H9zm0-6v2h2V5z"></svg:path>`,
})
export class ZondiconsInformationSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
