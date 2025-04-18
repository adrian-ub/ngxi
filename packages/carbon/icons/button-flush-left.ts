import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonButtonFlushLeftIcon],svg[carbon-button-flush-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h14v2H6z"></svg:path><svg:path fill="currentColor" d="M28 22H4c-1.103 0-2-.897-2-2v-8c0-1.103.897-2 2-2h24c1.103 0 2 .897 2 2v8c0 1.103-.897 2-2 2M4 12v8h24v-8z"></svg:path>`,
})
export class CarbonButtonFlushLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
