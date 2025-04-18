import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpentIcon],svg[whh-pigpent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m970.79 597l-808 417q-39 20-82 9.5t-65.5-45t-11-73t50.5-57.5l647-334l-647-333q-39-20-50.5-58.5t11-73t65.5-45t82 9.5l808 417q1 0 2 1t2 1q23 13 36 33q22 35 10.5 73.5t-50.5 57.5"></svg:path>`,
})
export class WhhPigpentIcon {
  readonly viewBox = input("0 0 1026 1028")
  readonly width = input("1em")
  readonly height = input("1em")
}
