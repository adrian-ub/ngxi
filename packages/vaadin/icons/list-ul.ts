import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinListUlIcon],svg[vaadin-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h3v3H0zm0 5h3v3H0zm0 5h3v3H0zM5 1h11v3H5zm0 5h11v3H5zm0 5h11v3H5z"></svg:path>`,
})
export class VaadinListUlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
