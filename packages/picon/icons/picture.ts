import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPictureIcon],svg[picon-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H2V2h1m0 3l3-3l1 4H1l1-2m6 3V1H0v6"></svg:path>`,
})
export class PiconPictureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
