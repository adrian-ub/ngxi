import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCloud24Icon],svg[fluent-color-cloud-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCloud240)" d="M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98"></svg:path><svg:path fill="url(#fluentColorCloud241)" fill-opacity=".3" d="M11 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path fill="url(#fluentColorCloud242)" fill-opacity=".3" d="M12 16a6 6 0 1 0-5.92-6.98Q6.287 9 6.5 9a4.5 4.5 0 0 1 3.881 6.779A6 6 0 0 0 12 16"></svg:path><svg:path fill="url(#fluentColorCloud243)" d="M12 16a6 6 0 1 0-5.92-6.98Q6.287 9 6.5 9a4.5 4.5 0 0 1 3.881 6.779A6 6 0 0 0 12 16"></svg:path><svg:path fill="url(#fluentColorCloud244)" fill-opacity=".5" d="M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98"></svg:path><svg:defs><svg:lineargradient id="fluentColorCloud240" x1="2.714" x2="11.675" y1="6.625" y2="19.925" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud241" x1="2" x2="8.067" y1="10.542" y2="15.912" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud242" x1="8.146" x2="9.739" y1="4.675" y2="12.946" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorCloud243" cx="0" cy="0" r="1" gradientTransform="matrix(6.71887 -2.85 2.55285 6.01833 6.546 13.825)" gradientUnits="userSpaceOnUse"><svg:stop offset=".412" stop-color="#2C87F5"></svg:stop><svg:stop offset="1" stop-color="#2C87F5" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCloud244" cx="0" cy="0" r="1" gradientTransform="matrix(7.70831 15.51136 -111.9801 55.64808 11.167 3.125)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#DD3CE2" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCloud24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
