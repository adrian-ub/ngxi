import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatItalicIcon],svg[mdi-light-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-1h3l4-11h-3V4h7v1h-3l-4 11h3v1z"></svg:path>`,
})
export class MdiLightFormatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
