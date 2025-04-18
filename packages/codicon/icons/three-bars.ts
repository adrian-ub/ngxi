import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconThreeBarsIcon],svg[codicon-three-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconThreeBarsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
