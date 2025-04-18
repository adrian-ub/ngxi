import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinNewspaperIcon],svg[vaadin-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h11v4H2zm0-2h11v1H2zm6 11h3v1H8zm0-2h5v1H8zm0-2h5v1H8zm-6 4h5v1H2zm0-2h5v1H2zm0-2h5v1H2z"></svg:path><svg:path fill="currentColor" d="M15 2V0H0v14.5A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2zM1.5 15a.5.5 0 0 1-.5-.5V1h13v12.5c0 1.5 1 1.5 1 1.5z"></svg:path>`,
})
export class VaadinNewspaperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
