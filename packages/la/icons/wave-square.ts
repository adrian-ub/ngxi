import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWaveSquareIcon],svg[la-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v9H2v2h8V8h5v18h9v-9h6v-2h-8v9h-5V6z"></svg:path>`,
})
export class LaWaveSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
