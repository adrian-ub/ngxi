import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesDefinitionIcon],svg[carbon-web-services-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h2v2h-2zm0-4h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M21 23H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1m-9-2h8V11h-8z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
