import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBarsIcon],svg[la-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z"></svg:path>`,
})
export class LaBarsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
