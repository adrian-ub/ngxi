import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmContentServicesIcon],svg[carbon-ibm-content-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 32l-2.139-1.012A5.02 5.02 0 0 1 21 26.468V20h10v6.468a5.02 5.02 0 0 1-2.861 4.52zm-1.283-2.82l1.283.607l1.283-.607A3.01 3.01 0 0 0 29 26.468V22h-6v4.468c0 1.154.674 2.219 1.717 2.712"></svg:path><svg:path fill="currentColor" d="M17 10.586A2 2 0 0 0 15.586 10H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9v-2h-9V12h4v4a2 2 0 0 0 2 2h4.292c.693 0 1.312-.414 1.577-1.054s.12-1.37-.37-1.861zM16 16v-3.586L19.585 16z"></svg:path><svg:path fill="currentColor" d="M28 6H16l-3.414-3.414A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h2v-2H4V4h7.172l4 4H28v10h2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonIbmContentServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
