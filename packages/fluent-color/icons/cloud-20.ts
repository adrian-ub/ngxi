import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCloud20Icon],svg[fluent-color-cloud-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCloud200)" d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377S16.53 15 14.718 15H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4"></svg:path><svg:path fill="url(#fluentColorCloud201)" fill-opacity=".3" d="M9 11.5a3.5 3.5 0 1 1-7 0c0-1.933 1.567-3.25 3.5-3.25S9 9.567 9 11.5"></svg:path><svg:path fill="url(#fluentColorCloud202)" fill-opacity=".3" d="M10 14c2.761 0 4.7-2.239 4.7-5S13 4 10 4C7.276 4 5.624 5.846 5.343 8.253q.078-.003.157-.003C7.433 8.25 9 9.567 9 11.5a3.48 3.48 0 0 1-.753 2.169A4.7 4.7 0 0 0 10 14"></svg:path><svg:path fill="url(#fluentColorCloud203)" d="M10 14c2.761 0 4.7-2.239 4.7-5S13 4 10 4C7.276 4 5.624 5.846 5.343 8.253q.078-.003.157-.003C7.433 8.25 9 9.567 9 11.5a3.48 3.48 0 0 1-.753 2.169A4.7 4.7 0 0 0 10 14"></svg:path><svg:path fill="url(#fluentColorCloud204)" fill-opacity=".5" d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377S16.53 15 14.718 15H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorCloud200" x1="2.571" x2="9.564" y1="6.063" y2="16.629" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud201" x1="2" x2="6.568" y1="9.406" y2="13.599" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud202" x1="6.965" x2="8.367" y1="4.563" y2="11.424" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorCloud203" cx="0" cy="0" r="1" gradientTransform="matrix(5.2742 -2.375 2.2155 4.92001 5.71 12.188)" gradientUnits="userSpaceOnUse"><svg:stop offset=".412" stop-color="#2C87F5"></svg:stop><svg:stop offset="1" stop-color="#2C87F5" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCloud204" cx="0" cy="0" r="1" gradientTransform="matrix(6.16666 12.1875 -88.93793 45.00101 9.333 3.313)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#DD3CE2" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCloud20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
