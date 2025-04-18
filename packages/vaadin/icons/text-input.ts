import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTextInputIcon],svg[vaadin-text-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h1v4H2z"></svg:path><svg:path fill="currentColor" d="M1 0C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h15V0zm12 15H1V1h12zm2 0h-1v-1h1zm0-2h-1V3h1zm0-11h-1V1h1z"></svg:path>`,
})
export class VaadinTextInputIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
