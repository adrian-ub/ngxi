import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRouterIcon],svg[picon-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c1-3-4-3-3 0c-4-4 7-4 3 0M6 6H5v1h1M4 6H3v1h1M2 6H1v1h1M0 8V5h5V2h1v3h2v3"></svg:path>`,
})
export class PiconRouterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
