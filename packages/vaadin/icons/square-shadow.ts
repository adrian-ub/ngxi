import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSquareShadowIcon],svg[vaadin-square-shadow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2V0H0v14h2v2h14V2zm-1 11H1V1h12z"></svg:path>`,
})
export class VaadinSquareShadowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
