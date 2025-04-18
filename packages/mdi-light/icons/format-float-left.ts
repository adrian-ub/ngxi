import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatFloatLeftIcon],svg[mdi-light-format-float-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17v1H3zm9 4h8v1h-8zm0 4h8v1h-8zm-9 4h13v1H3zm17 4v1H3v-1zM3 7h7v7H3zm6 1H4v5h5z"></svg:path>`,
})
export class MdiLightFormatFloatLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
