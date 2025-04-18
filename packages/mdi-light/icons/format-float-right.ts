import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatFloatRightIcon],svg[mdi-light-format-float-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v1H3V4zm-9 4v1H3V8zm-8 4h5v1H3zm0 4h13v1H3zm0 4h17v1H3zM20 7v7h-7V7zm-1 1h-5v5h5z"></svg:path>`,
})
export class MdiLightFormatFloatRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
