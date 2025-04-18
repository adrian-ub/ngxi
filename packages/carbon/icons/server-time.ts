import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonServerTimeIcon],svg[carbon-server-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 22v6h24v-6Z"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m19 11.586l-2-2V6h-2v4.414L17.586 13z"></svg:path><svg:path fill="currentColor" d="M16 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6"></svg:path>`,
})
export class CarbonServerTimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
