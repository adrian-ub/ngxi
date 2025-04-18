import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWindyStrongIcon],svg[carbon-windy-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 30a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H4v-2h9a5 5 0 0 1 0 10"></svg:path><svg:path fill="currentColor" d="M25 25a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H2v-2h23a5 5 0 0 1 0 10m-4-13H6v-2h15a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5"></svg:path>`,
})
export class CarbonWindyStrongIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
