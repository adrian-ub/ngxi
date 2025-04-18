import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBoxLargeIcon],svg[carbon-box-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V9h2v17h20V9h2v17a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M14 21V9h-2v14h8v-2zM4 4h24v2H4z"></svg:path>`,
})
export class CarbonBoxLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
