import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFastforwardIcon],svg[whh-fastforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961.12 1024q-26.5 0-45.5-19t-19-45V571l-386 442q-24 27-62-13V570l-386 443q-25 27-62-13V24q37-40 62-13l386 444V24q37-40 62-13l386 443V64q0-27 19-45.5T961.12 0t45 18.5t18.5 45.5v896q0 26-18.5 45t-45 19"></svg:path>`,
})
export class WhhFastforwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
