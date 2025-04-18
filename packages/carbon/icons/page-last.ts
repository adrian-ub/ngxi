import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPageLastIcon],svg[carbon-page-last-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16L8 26l-1.4-1.4l8.6-8.6l-8.6-8.6L8 6zm4-12h2v24h-2z"></svg:path>`,
})
export class CarbonPageLastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
