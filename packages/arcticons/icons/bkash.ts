import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBkashIcon],svg[arcticons-bkash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.981 8.632s-4.163 14.704-3.809 14.704s16.476 2.923 16.476 2.923Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.981 8.632L6.329 6.152l12.843 17.184l2.215 10.186l14.261-7.263l3.72-8.814l-8.975 1.501m7.536 1.909H43l-3.632-3.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.387 33.522l.354 1.905l-8.016 6.421l5.447-18.512m16.476 2.923l-.531 2.879l-12.269 3.64M8.455 8.997H5L16.044 19.15"></svg:path>`,
})
export class ArcticonsBkashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
