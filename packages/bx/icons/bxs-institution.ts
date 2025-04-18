import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsInstitutionIcon],svg[bx-bxs-institution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.857 8.485l-3-5A.997.997 0 0 0 18 3h-4.586l-.707-.707a.999.999 0 0 0-1.414 0L10.586 3H6a.997.997 0 0 0-.857.485l-3 5A1.001 1.001 0 0 0 2.002 9H2v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9h-.002c0-.178-.046-.356-.141-.515zM20 18h-6v-4h-4v4H4v-8h2.414l.293-.293l2-2L12 4.414l4.293 4.293l1 1l.293.293H20v8z" fill="currentColor"></svg:path><svg:circle cx="11.895" cy="9.895" r="2.105" fill="currentColor"></svg:circle><svg:path d="M6 12h2v3H6zm10 0h2v3h-2z" fill="currentColor"></svg:path>`,
})
export class BxBxsInstitutionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
