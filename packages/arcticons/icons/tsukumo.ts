import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTsukumoIcon],svg[arcticons-tsukumo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.022 11.999l23.814-6.381a3.393 3.393 0 0 1 4.165 2.404l6.381 23.814a3.393 3.393 0 0 1-2.404 4.165l-23.814 6.381a3.393 3.393 0 0 1-4.165-2.404L5.618 16.164a3.393 3.393 0 0 1 2.404-4.165"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.235 14.465c3.485 3.116 4.393 11.845 4.426 14.386s1.642 9.237 9.487 7.332c7.845-1.904 9.474-8.288 5.791-15.35c-1.351-2.592-.299-4.43-.299-4.43"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.714 28.757c1.247 2 6.427 6.38 7.636 5.76s4.987-7.169 5.288-10.426"></svg:path><svg:circle cx="27.03" cy="21.714" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.714" cy="25.347" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsTsukumoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
