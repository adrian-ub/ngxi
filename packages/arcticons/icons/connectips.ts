import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectipsIcon],svg[arcticons-connectips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsConnectips0" fill="none" stroke="currentColor" d="M35.682 14.75a9.24 9.24 0 0 0-9.23-9.25h-5.478a9.24 9.24 0 0 0-9.23 9.25a9.24 9.24 0 0 0 9.23 9.25h6.052a9.24 9.24 0 0 1 9.23 9.25a9.24 9.24 0 0 1-9.23 9.25h-5.478"></svg:path><svg:path id="arcticonsConnectips1" fill="none" stroke="currentColor" d="M33.25 35.682a9.24 9.24 0 0 0 9.25-9.23v-5.478a9.24 9.24 0 0 0-9.25-9.23a9.24 9.24 0 0 0-9.25 9.23v6.052a9.24 9.24 0 0 1-9.25 9.23a9.24 9.24 0 0 1-9.25-9.23v-5.478"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.925 15.998l2.085 3.288l3.288-2.084"></svg:path><svg:use href="#arcticonsConnectips0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsConnectips0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.682 14.75a13.6 13.6 0 0 1-.672 4.536M15.075 32.002l-2.085-3.288l-3.288 2.084m2.616 2.452a9.24 9.24 0 0 0 9.23 9.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.318 33.25a9.24 9.24 0 0 0 9.23 9.25m-9.23-9.25a13.6 13.6 0 0 1 .672-4.536m19.012 4.211l-3.288 2.085l2.084 3.288"></svg:path><svg:use href="#arcticonsConnectips1" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsConnectips1" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.25 35.682a13.6 13.6 0 0 1-4.536-.672M15.998 15.075l3.288-2.085l-2.084-3.288m-2.452 2.616a9.24 9.24 0 0 0-9.25 9.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 12.318a9.24 9.24 0 0 0-9.25 9.23m9.25-9.23a13.6 13.6 0 0 1 4.536.672"></svg:path>`,
})
export class ArcticonsConnectipsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
