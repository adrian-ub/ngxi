import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinArchiveIcon],svg[vaadin-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v3H0zm1 4v11h14V5zm10 4H5V7h6z"></svg:path>`,
})
export class VaadinArchiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
