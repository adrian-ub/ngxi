import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMapCenterIcon],svg[carbon-map-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 26h2v4h-2zm0-8h2v4h-2zm3 5h4v2h-4zm-8 0h4v2h-4zm7.342-12.94l-22-8A1 1 0 0 0 2.06 3.341l8 22a1 1 0 0 0 .924.659H11a1 1 0 0 0 .929-.629l3.841-9.602l9.602-3.84a1 1 0 0 0-.03-1.87zm-10.714 4.01l-.398.16l-.159.398l-3.026 7.568L4.672 4.672l17.524 6.372z"></svg:path>`,
})
export class CarbonMapCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
