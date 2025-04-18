import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLineHIcon],svg[vaadin-line-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h16v1H0z"></svg:path>`,
})
export class VaadinLineHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
