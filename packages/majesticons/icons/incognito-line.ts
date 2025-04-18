import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsIncognitoLineIcon],svg[majesticons-incognito-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 11h2m16.5 0H19m0 0V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5m14 0H5"></svg:path><svg:circle cx="7" cy="17" r="3"></svg:circle><svg:circle cx="17" cy="17" r="3"></svg:circle><svg:path d="M10 16h4"></svg:path></svg:g>`,
})
export class MajesticonsIncognitoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
