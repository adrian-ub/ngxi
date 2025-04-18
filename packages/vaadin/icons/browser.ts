import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBrowserIcon],svg[vaadin-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1V0H0v15h1v1h15V1zM3 1h9v1H3zM1 1h1v1H1zm0 2h13v11H1z"></svg:path>`,
})
export class VaadinBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
