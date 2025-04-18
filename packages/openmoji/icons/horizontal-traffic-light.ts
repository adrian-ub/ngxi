import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHorizontalTrafficLightIcon],svg[openmoji-horizontal-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10"><svg:path fill="#d0cfce" d="M54.09 46.91h-36c-3.85 0-7-3.15-7-7v-8c0-3.85 3.15-7 7-7h36c3.85 0 7 3.15 7 7v8c0 3.85-3.15 7-7 7"></svg:path><svg:circle cx="21.618" cy="35.91" r="5" fill="#b1cc33"></svg:circle><svg:circle cx="35.618" cy="35.91" r="5" fill="#f4aa41"></svg:circle><svg:circle cx="50.618" cy="35.91" r="5" fill="#ea5a47"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-miterlimit="10"><svg:path d="M54.09 46.91h-36c-3.85 0-7-3.15-7-7v-8c0-3.85 3.15-7 7-7h36c3.85 0 7 3.15 7 7v8c0 3.85-3.15 7-7 7z"></svg:path><svg:circle cx="21.618" cy="35.91" r="5"></svg:circle><svg:circle cx="35.618" cy="35.91" r="5"></svg:circle><svg:circle cx="50.618" cy="35.91" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M53.91 46.91h-36c-3.85 0-7-3.15-7-7v-8c0-3.85 3.15-7 7-7h36c3.85 0 7 3.15 7 7v8c0 3.85-3.15 7-7 7"></svg:path><svg:circle cx="21.438" cy="35.91" r="5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:circle cx="35.438" cy="35.91" r="5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:circle cx="50.438" cy="35.91" r="5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle></svg:g>`,
})
export class OpenmojiHorizontalTrafficLightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
