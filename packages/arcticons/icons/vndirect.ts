import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVndirectIcon],svg[arcticons-vndirect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.41 35.625v-23.5h5.5c6 0 10.5 4.5 10.5 10.25v3c0 5.5-4.5 10.25-10.5 10.25z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.56 6.875h8.5c8 0 12.63 7.5 12.63 15l-.03 4.25c-.049 7-4.6 15-12.6 15h-8.75"></svg:path>`,
})
export class ArcticonsVndirectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
