import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLinesListIcon],svg[vaadin-lines-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h3v2H0zm0 4h3v2H0zm0 4h3v2H0zm0 4h3v2H0zM4 1h12v2H4zm0 4h12v2H4zm0 4h12v2H4zm0 4h12v2H4z"></svg:path>`,
})
export class VaadinLinesListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
