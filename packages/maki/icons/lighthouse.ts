import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLighthouseIcon],svg[maki-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6L0 7v-.5l4.5-1zm0-2.5L0 2.5V3l4.5 1zm6 0V4L15 3v-.5zm0 2.5L15 7v-.5l-4.5-1zM8 7V2h2.5a.51.51 0 0 0 .2-1l-3-1a.5.5 0 0 0-.41 0l-3 1a.51.51 0 0 0 .2 1H7v5H5l-2 7h9l-2-7z"></svg:path>`,
})
export class MakiLighthouseIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
