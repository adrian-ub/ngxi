import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRiderIcon],svg[arcticons-rider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M36.07 29.808a5.408 5.408 0 0 1 6.195 5.352h0a5.409 5.409 0 1 1-10.817 0h0a5.41 5.41 0 0 1 2.09-4.27"></svg:path><svg:path d="m32.607 29.912l5.376 5.652l.782-1.622l-3.667-5.614M11.664 15.985l11.58 3.004l.756 5.32l-15.053-6.07z"></svg:path><svg:path d="m18.97 22.282l.071.867l11.007 8.22l.895-1.249l1.664-.208l2.491-1.584h0l1.56-.911l-2.374-3.346l-3.718-2.468l-12.079-5.199l.113 1.382"></svg:path><svg:path d="m30.824 30.285l-4.644-5.774l8.712.416M15.917 21.05A5.408 5.408 0 0 1 5.5 19.01h0a5.41 5.41 0 0 1 5.408-5.41h0a5.41 5.41 0 0 1 5.06 3.5m9.512-.08l.824-.638l4.692.035l7.703 3.106l3.8 6.05l-.555.182l-.95-.407l-2.847-3.697"></svg:path><svg:path d="m14.016 7.43l7.923 6.558l9.813 8.401M16.444 9.54l4.328 7.847m20.23 7.963l-2.74.28l-2.197-1.58l-.133 2.343"></svg:path></svg:g>`,
})
export class ArcticonsRiderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
