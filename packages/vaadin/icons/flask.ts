import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFlaskIcon],svg[vaadin-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h12l-4-8V1h1V0H5v1h1v7zM9 1v7.2l1.9 3.8H5.1L7 8.2V1z"></svg:path>`,
})
export class VaadinFlaskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
