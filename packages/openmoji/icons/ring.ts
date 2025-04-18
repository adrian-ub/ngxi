import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRingIcon],svg[openmoji-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M37.625 25.042c8.8 0 15.958 7.159 15.958 15.958s-7.158 15.958-15.958 15.958S21.667 49.8 21.667 41s7.159-15.958 15.958-15.958m0-4c-11.023 0-19.958 8.935-19.958 19.958s8.935 19.958 19.958 19.958S57.583 52.023 57.583 41s-8.935-19.958-19.958-19.958"></svg:path><svg:path fill="#61B2E4" d="M41.314 17h-7.668l-1-5.043h9.668z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="37.625" cy="41" r="19.958"></svg:circle><svg:path d="m27.933 11.958l3.25 6.47m15.692-6.471l-3.25 6.469M41.314 17h-7.668l-1-5.043h9.668z"></svg:path></svg:g>`,
})
export class OpenmojiRingIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
