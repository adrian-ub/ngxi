import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatLtrIcon],svg[zmdi-format-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 173q-35 0-60-25T0 88t25-60T85 3h171v42h-43v235h-42V45h-43v235H85zm256 171l-85 85v-64H0v-42h256v-64z"></svg:path>`,
})
export class ZmdiFormatLtrIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
