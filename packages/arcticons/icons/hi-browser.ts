import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHiBrowserIcon],svg[arcticons-hi-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="8.872" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.35 45.497c-8.386.137-15.295-6.55-15.431-14.937c-.137-8.386 6.55-15.295 14.937-15.431"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.658 30.978c-2.722-7.933 1.504-16.57 9.437-19.292c7.933-2.721 16.57 1.504 19.292 9.437"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.08 6.813c6.704-5.04 16.224-3.69 21.264 3.014s3.69 16.224-3.014 21.264"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.353 6.401c6.865 4.819 8.524 14.29 3.705 21.155s-14.29 8.523-21.154 3.705"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.559 30.312c-2.462 8.017-10.957 12.522-18.974 10.06c-8.018-2.461-12.523-10.957-10.061-18.974"></svg:path>`,
})
export class ArcticonsHiBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
