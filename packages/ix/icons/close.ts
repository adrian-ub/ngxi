import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloseIcon],svg[ix-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m390.249 91.582l30.17 30.17L286.169 256l134.25 134.249l-30.17 30.17L256 286.169l-134.248 134.25l-30.17-30.17L225.83 256L91.582 121.752l30.17-30.17L256 225.83z"></svg:path>`,
})
export class IxCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
