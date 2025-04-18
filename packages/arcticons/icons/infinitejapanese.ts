import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinitejapaneseIcon],svg[arcticons-infinitejapanese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.706 8.048c-1.746 10.97-1.898 20.7.476 28.939"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.988 13.765a160 160 0 0 0 24.353-1.132m-3.631 4.704c-3.312 9.734-7.69 17.186-14.53 19.173c-8.876 2.58-7.402-5.154-5.24-8.455c4.498-6.863 11.14-7.611 15.005-7.86c10.89-.699 13.399 8.68 10.837 12.505c-2.686 4.012-6.127 5.571-10.241 6.252"></svg:path>`,
})
export class ArcticonsInfinitejapaneseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
