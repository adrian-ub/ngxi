import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGiaohangnhanhIcon],svg[arcticons-giaohangnhanh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.963 5.57v14.47l-.002-.001l-5.92-4.911v.006l-5.995 4.898l-.009.009V5.57m12.09 30.665v-9.619l6.373 9.619v-9.619m-15.811-.001v9.62m6.373-9.62v9.62m-6.373-4.828h6.373m-9.189-1.605a3.187 3.187 0 0 0-3.187-3.186h0a3.187 3.187 0 0 0-3.186 3.186v3.247a3.187 3.187 0 0 0 3.186 3.186h0a3.187 3.187 0 0 0 3.187-3.186h-3.187"></svg:path>`,
})
export class ArcticonsGiaohangnhanhIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
