import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineMusicIcon],svg[arcticons-line-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.883 10.577a2.22 2.22 0 0 1 1.796-2.186l19.673-3.848a2.217 2.217 0 0 1 2.606 1.743m-24.075 9.55a2.22 2.22 0 0 1 1.796-2.186l19.673-3.848A2.217 2.217 0 0 1 41 11.977m0 0l-.031 19.936M16.883 15.836v22.717"></svg:path><svg:circle cx="11.946" cy="38.553" r="4.947" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.023" cy="31.913" r="4.947" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLineMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
