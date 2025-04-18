import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLangeasylexisIcon],svg[arcticons-langeasylexis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.099 9.216H29.33m-5.344.436v10.69m1.718-10.734l-6.644 6.798m7.346-2.689l2.755 2.689m-3.739 11.741v3.542l3.805.13m-6.436-3.67v3.671l-3.796.262m1.705 7.937v-6.297h6.887v6.1h-1.18m-5.639-1.965h4.524m-4.455-2.231h4.454m.131-6.102l3.805-.262m-9.866.262l3.254-.132"></svg:path><svg:circle cx="24.001" cy="13.761" r="9.261" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.999" cy="34.239" r="9.261" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLangeasylexisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
