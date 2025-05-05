import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSawIcon],svg[picon-saw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2l6 6l-2 2V6L4 7V5L2 6V4L0 5m1-4v2h1V1"></svg:path>`,
})
export class PiconSawIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
