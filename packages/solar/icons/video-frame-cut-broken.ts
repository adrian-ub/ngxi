import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCutBrokenIcon],svg[solar-video-frame-cut-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 3.5v17"></svg:path><svg:path stroke-dasharray="3 3" d="M12 2v20"></svg:path><svg:path d="M7 3.5v17m-4-12h4m14 0h-4m-14 7h4m14 0h-4"></svg:path><svg:path stroke-linejoin="round" d="M14.5 3.003c2.794.02 4.324.163 5.328 1.168C20.892 5.234 20.99 6.885 21 10m-6.5 10.996c2.794-.02 4.324-.163 5.328-1.168c1.064-1.063 1.162-2.714 1.171-5.829M9.5 20.996c-2.793-.02-4.323-.163-5.327-1.168C3 18.656 3 16.771 3 13v-2c0-3.773 0-5.658 1.172-6.83C5.176 3.166 6.706 3.023 9.5 3.003"></svg:path></svg:g>`,
})
export class SolarVideoFrameCutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
