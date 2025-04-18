import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatUnderlineIcon],svg[mdi-light-format-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11.5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 6 11.5V4h1v7.5C7 14 9 16 11.5 16s4.5-2 4.5-4.5V4h1zM5 21v-1h13v1z"></svg:path>`,
})
export class MdiLightFormatUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
