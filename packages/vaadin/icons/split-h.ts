import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSplitHIcon],svg[vaadin-split-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm1 3h6.5v10H1zm14 10H8.5V4H15zm0-11h-1V2h1z"></svg:path>`,
})
export class VaadinSplitHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
