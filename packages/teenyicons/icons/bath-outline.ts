import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBathOutlineIcon],svg[teenyicons-bath-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 7.5h15m-10.5 5h6m-6 0a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h2V2m-2 10.5V15m6-2.5a3 3 0 0 0 3-3v-2m-3 5V15M5 3.5h3"></svg:path>`,
})
export class TeenyiconsBathOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
