import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonProgressBarIcon],svg[carbon-progress-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 21H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 13v6h24v-6Z"></svg:path><svg:path fill="currentColor" d="M6 15h14v2H6z"></svg:path>`,
})
export class CarbonProgressBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
