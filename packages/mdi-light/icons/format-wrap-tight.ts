import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatWrapTightIcon],svg[mdi-light-format-wrap-tight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 8l4.5 9H7zm0 2.24L8.62 16h5.76zM3 4h17v1H3zm11 4h6v1h-6zM3 8h6v1H3zm0 4h4v1H3zm0 4h2v1H3zm15 0h2v1h-2zm-2-4h4v1h-4zM3 20h17v1H3z"></svg:path>`,
})
export class MdiLightFormatWrapTightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
