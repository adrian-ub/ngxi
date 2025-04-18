import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingRightIcon],svg[vaadin-padding-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H0v16h16zm-3 15v-1h-1v1H1V1h12v1h1V1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1z"></svg:path><svg:path fill="currentColor" d="M13 3h1v1h-1zm-1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1z"></svg:path>`,
})
export class VaadinPaddingRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
