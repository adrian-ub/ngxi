import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMsofficeIcon],svg[picon-msoffice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 6l6 1V1.5l-4 1V5zV2l6-2l2 1v6L6 8"></svg:path>`,
})
export class PiconMsofficeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
