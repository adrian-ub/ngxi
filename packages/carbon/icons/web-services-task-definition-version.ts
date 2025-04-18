import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWebServicesTaskDefinitionVersionIcon],svg[carbon-web-services-task-definition-version-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 15h-1.75L20 22.031l-2.208-7.03H16L18.5 23h3z"></svg:path><svg:path fill="currentColor" d="M16 23h-5a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h-2v-3h-8v10h4z"></svg:path><svg:path fill="currentColor" d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"></svg:path>`,
})
export class CarbonWebServicesTaskDefinitionVersionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
