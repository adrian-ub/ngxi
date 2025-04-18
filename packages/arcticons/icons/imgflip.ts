import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImgflipIcon],svg[arcticons-imgflip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.12 24.216c0-3.154 2.572-5.711 5.746-5.711h0c3.175 0 5.748 2.557 5.748 5.71v9.138M15.119 18.505v14.848m11.495-9.137c0-3.154 2.573-5.711 5.747-5.711h0c3.174 0 5.747 2.557 5.747 5.71v9.138"></svg:path><svg:ellipse cx="11.814" cy="15.472" fill="currentColor" rx=".755" ry=".75"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.814 18.505v14.848"></svg:path>`,
})
export class ArcticonsImgflipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
