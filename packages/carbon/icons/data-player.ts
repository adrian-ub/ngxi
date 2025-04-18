import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataPlayerIcon],svg[carbon-data-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 24v2H15.816a2.983 2.983 0 0 0-5.632 0H4v-2H2v6h2v-2h6.184a2.983 2.983 0 0 0 5.632 0H28v2h2v-6zM13 7.5v8.999L21 12z"></svg:path><svg:path fill="currentColor" d="M16 22a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10m0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8"></svg:path>`,
})
export class CarbonDataPlayerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
