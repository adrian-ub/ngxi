import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlertForEmbraceWatchIcon],svg[arcticons-alert-for-embrace-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="17.451" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="13.292" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.689 23.998l-1.512-1.49c-1.253-1.235-1.253-3.236 0-4.47s3.284-1.235 4.536 0l1.513 1.49m-4.537 4.47l-1.512 1.49c-.81.799-1.127 1.963-.83 3.054s1.16 1.943 2.268 2.235s2.288-.02 3.098-.818l1.513-1.49m2.268-6.706l2.268 2.235l-2.268 2.235"></svg:path>`,
})
export class ArcticonsAlertForEmbraceWatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
