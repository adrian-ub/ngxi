import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTrendUpSolidIcon],svg[teenyicons-trend-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3h7v7h-1V4.707l-6 6l-3-3l-4.146 4.147l-.708-.708L5 6.293l3 3L13.293 4H8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsTrendUpSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
