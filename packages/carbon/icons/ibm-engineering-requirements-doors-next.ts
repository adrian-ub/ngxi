import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmEngineeringRequirementsDoorsNextIcon],svg[carbon-ibm-engineering-requirements-doors-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4h-3v2l3-.001V26h-3v2h3c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2"></svg:path><svg:circle cx="16" cy="17" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 4v24c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2M4 28h16V3.999L4 4z"></svg:path>`,
})
export class CarbonIbmEngineeringRequirementsDoorsNextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
