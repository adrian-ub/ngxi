import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMinimizeIcon],svg[mage-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.531 21.25v-3.469A2.31 2.31 0 0 0 6.22 15.47H2.75m12.719 5.78v-3.469a2.31 2.31 0 0 1 2.312-2.312h3.469M8.531 2.75v3.469A2.31 2.31 0 0 1 6.22 8.53H2.75m18.5.001h-3.469A2.31 2.31 0 0 1 15.47 6.22V2.75"></svg:path>`,
})
export class MageMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
