import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStickerlyIcon],svg[arcticons-stickerly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.83 45.268C10.023 43.67 1.835 34.032 2.543 22.628c.664-10.707 9.378-19.42 20.085-20.085c11.404-.708 21.043 7.48 22.64 18.287a6 6 0 0 1-1.704 5.106L25.936 43.564a6 6 0 0 1-5.106 1.704"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="17.402" cy="18.3" rx="3.046" ry="4.3"></svg:ellipse><svg:ellipse cx="30.598" cy="18.3" rx="3.046" ry="4.3"></svg:ellipse><svg:path d="M33.644 27.835C32.184 32.454 27.982 34 24.39 34s-7.256-1.322-9.255-6.165"></svg:path></svg:g>`,
})
export class ArcticonsStickerlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
