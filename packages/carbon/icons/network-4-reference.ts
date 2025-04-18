import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNetwork4ReferenceIcon],svg[carbon-network-4-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21" cy="26" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:circle cx="21" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 12a3.996 3.996 0 0 0-3.858 3h-4.284a3.966 3.966 0 0 0-5.491-2.643l-3.177-3.97A3.96 3.96 0 0 0 12 6a4 4 0 1 0-4 4a4 4 0 0 0 1.634-.357l3.176 3.97A3.96 3.96 0 0 0 12 16a3.992 3.992 0 0 0 7.858 1h4.284A3.993 3.993 0 1 0 28 12M8 8a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 10a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m12 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonNetwork4ReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
