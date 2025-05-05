import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAdIcon],svg[picon-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V5h1v1h1C3 .5 0 .5 0 6m4 0c4 0 4-4 0-4m1 1h1v2H5M1 3h1v1H1"></svg:path>`,
})
export class PiconAdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
