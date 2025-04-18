import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiArMeasureIcon],svg[arcticons-huawei-ar-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="41.879" cy="33.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.622" ry="1.612"></svg:ellipse><svg:circle cx="38.303" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.697" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.273" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.849" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.424" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.576" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.151" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.727" cy="33.39" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.303 20.857v7.923m-3.576-7.923v7.923m-14.303-7.923v7.923m7.152-7.923v7.923m3.576-7.923v7.923m-14.303-7.923v7.923M6.121 12.988V28.78m35.758-15.792V28.78M9.697 20.857v7.923m3.576-7.923v7.923M24 16.574v12.204"></svg:path><svg:circle cx="6.121" cy="33.39" r="1.622" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsHuaweiArMeasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
