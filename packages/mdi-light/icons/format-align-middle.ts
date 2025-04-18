import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatAlignMiddleIcon],svg[mdi-light-format-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13v-1h17v1zm8-9h1v4.25L14.25 6l.75.66l-3.5 3.5L8 6.66L8.75 6L11 8.25zm0 17v-4.25L8.75 19L8 18.34l3.5-3.5l3.5 3.5l-.75.66L12 16.75V21z"></svg:path>`,
})
export class MdiLightFormatAlignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
