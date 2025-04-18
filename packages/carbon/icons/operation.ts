import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOperationIcon],svg[carbon-operation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M23 26h-2l5-10l-5-10h2l5 10l-5 10z" fill="currentColor"></svg:path><svg:path d="M4 6h2v20H4z" fill="currentColor"></svg:path><svg:path d="M16 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zm0 12h-4V11h4z" fill="currentColor"></svg:path><svg:path d="M13 15h2v2h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonOperationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
