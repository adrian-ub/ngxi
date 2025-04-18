import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCloud16Icon],svg[fluent-color-cloud-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCloud160)" d="M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493"></svg:path><svg:path fill="url(#fluentColorCloud161)" fill-opacity=".3" d="M7.5 8.75a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"></svg:path><svg:path fill="url(#fluentColorCloud162)" fill-opacity=".3" d="M8 10a4 4 0 1 0-3.97-4.493q.11-.007.22-.007a3.25 3.25 0 0 1 3.027 4.435Q7.63 10 8 10"></svg:path><svg:path fill="url(#fluentColorCloud163)" d="M8 10a4 4 0 1 0-3.97-4.493q.11-.007.22-.007a3.25 3.25 0 0 1 3.027 4.435Q7.63 10 8 10"></svg:path><svg:path fill="url(#fluentColorCloud164)" fill-opacity=".5" d="M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493"></svg:path><svg:defs><svg:lineargradient id="fluentColorCloud160" x1="1.5" x2="7.948" y1="3.875" y2="13.254" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud161" x1="1" x2="5.382" y1="6.613" y2="10.492" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud162" x1="5.412" x2="6.47" y1="2.45" y2="7.965" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorCloud163" cx="0" cy="0" r="1" gradientTransform="matrix(4.49228 -1.9 1.69846 4.01577 4.342 8.55)" gradientUnits="userSpaceOnUse"><svg:stop offset=".412" stop-color="#2C87F5"></svg:stop><svg:stop offset="1" stop-color="#2C87F5" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCloud164" cx="0" cy="0" r="1" gradientTransform="matrix(5.39581 11.07954 -79.00581 38.47637 7.417 1.375)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#DD3CE2" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCloud16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
