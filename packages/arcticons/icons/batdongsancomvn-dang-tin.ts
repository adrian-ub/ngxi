import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBatdongsancomvnDangTinIcon],svg[arcticons-batdongsancomvn-dang-tin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.888 5.623a2.245 2.245 0 0 1 3.181 0l12.726 12.726c.882.881.882 2.3 0 3.182l-4.772 4.772c-.881.881-2.3.881-3.181 0m-12.727 0l4.773-4.772a2.245 2.245 0 0 1 3.181 0l4.772 4.772m-12.726 0c-.881.881-2.3.881-3.182 0L5.161 21.53a2.245 2.245 0 0 1 0-3.182L17.888 5.623a2.245 2.245 0 0 1 3.181 0"></svg:path><svg:path d="M17.888 12.935a2.245 2.245 0 0 1 3.181 0l12.726 12.727c.882.881.882 2.3 0 3.181l-1.808 1.809m-5.54 3.397a2.3 2.3 0 0 1-.605-.433m-12.727 0l4.772-4.773a2.245 2.245 0 0 1 3.182 0l4.772 4.773m-12.726 0c-.882.88-2.3.88-3.182 0l-4.772-4.773a2.245 2.245 0 0 1 0-3.181l12.726-12.726a2.245 2.245 0 0 1 3.182 0m3.081-4.232V7.407c0-2.25 3.181-2.25 3.181 0v4.478m6.972 22.254l-1.3 2.952l2.988-1.265m-1.688-1.687l7.51-7.51m-5.822 9.197l7.509-7.51l-1.687-1.687m-2.91 15.284c0 .624-.503 1.125-1.126 1.125H27.653a1.12 1.12 0 0 1-1.125-1.125V31.79c0-.623.502-1.125 1.125-1.125h10.124m1.125 2.25v8.998"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.777 34.04h3.973m-3.973 6.749h4.5m1.687 0h2.285m-8.472-3.34h2.848"></svg:path>`,
})
export class ArcticonsBatdongsancomvnDangTinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
