import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTabletIcon],svg[carbon-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 24v2h-6v-2z"></svg:path><svg:path fill="currentColor" d="M25 30H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v24a2.003 2.003 0 0 1-2 2M7 4v24h18V4Z"></svg:path>`,
})
export class CarbonTabletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
