import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatWrapInlineIcon],svg[mdi-light-format-wrap-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v1H3V4zm0 12v1h-6v-1zm0 4v1H3v-1zM7.5 8l4.5 9H3zm0 2.24L4.62 16h5.76z"></svg:path>`,
})
export class MdiLightFormatWrapInlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
