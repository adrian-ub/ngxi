import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWindChimeIcon],svg[openmoji-wind-chime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M55.177 38.627a19.7 19.7 0 0 0 .494-9.215A19.997 19.997 0 0 0 16 33a19.7 19.7 0 0 0 .824 5.63a2.005 2.005 0 0 0 1.924 1.43h34.504a2.01 2.01 0 0 0 1.925-1.434"></svg:path><svg:path fill="#f1b31c" d="M39 41a3 3 0 0 1-6 0"></svg:path><svg:path fill="#d0cfce" d="M16 54a14.42 14.42 0 0 0 14-4l4 6a14.42 14.42 0 0 1-14 4Z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M55.177 38.627a19.7 19.7 0 0 0 .494-9.215A19.997 19.997 0 0 0 16 33a19.7 19.7 0 0 0 .824 5.63a2.005 2.005 0 0 0 1.924 1.43h34.504a2.01 2.01 0 0 0 1.925-1.434Z"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M36 13s.789-4.106-1-5"></svg:path><svg:path stroke-miterlimit="10" d="M36 44s1 6-4 9"></svg:path><svg:path stroke-miterlimit="10" d="M39 41a3 3 0 0 1-6 0"></svg:path><svg:path stroke-linejoin="round" d="M16 54a14.42 14.42 0 0 0 14-4l4 6a14.42 14.42 0 0 1-14 4Z"></svg:path></svg:g>`,
})
export class OpenmojiWindChimeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
