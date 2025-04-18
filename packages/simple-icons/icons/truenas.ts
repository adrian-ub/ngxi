import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTruenasIcon],svg[simple-icons-truenas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10.049v5.114l-10.949 6.324v-5.114zm-24 0v5.114l10.956 6.324v-5.114zm12.004-.605l-4.433 2.559l4.433 2.559l4.429-2.559zm10.952-1.207l-9.905-5.723v5.118l5.473 3.164zm-12-.605V2.513L1.044 8.236l4.432 2.555z"></svg:path>`,
})
export class SimpleIconsTruenasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
