import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChoicesIcon],svg[carbon-choices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 13V4h-9v2h5.586L16 14.586L7.414 6H13V4H4v9h2V7.414l9 9V26H4v2h24v-2H17v-9.586l9-9V13z"></svg:path>`,
})
export class CarbonChoicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
