import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNucleusSmartIcon],svg[arcticons-nucleus-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 10V2.5M24 38v7.5m-6.477-20.043a3.97 3.97 0 0 1 4.357-3.949c2.063.197 3.578 2.047 3.578 4.12v2.502c0 .491.399.89.89.89h3.238a.89.89 0 0 0 .89-.89v-2.402c0-3.546-2.732-6.638-6.277-6.745a6.477 6.477 0 0 0-6.676 6.474"></svg:path>`,
})
export class ArcticonsNucleusSmartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
