import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStrokeInputMethodIcon],svg[arcticons-stroke-input-method-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.655 11.492v11.446M9.69 21.054h8.783m17.44-7.922c-2.66 3.973-5.089 5.411-7.432 6.731m-11.027 6.249l5.003 10.365m.895-8.824h10.327m-1.859 5.035l1.859-5.035"></svg:path>`,
})
export class ArcticonsStrokeInputMethodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
