import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmGcmIcon],svg[carbon-ibm-gcm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h15.172l-3.586 3.586L15 22l6-6l-6-6l-1.414 1.414L17.172 15H2z"></svg:path><svg:path fill="currentColor" d="m28.504 8.136l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 3 9v3h2V9.574l11-6.416l11 6.416v12.852l-11 6.416L4.273 22l-1.008 1.728l12.231 7.136a1 1 0 0 0 1.008 0l12-7A1 1 0 0 0 29 23V9a1 1 0 0 0-.496-.864"></svg:path>`,
})
export class CarbonIbmGcmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
