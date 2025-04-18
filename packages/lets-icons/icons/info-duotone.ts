import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInfoDuotoneIcon],svg[lets-icons-info-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path fill="currentColor" d="M13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" d="M12 16.5v-5c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C10.697 9.5 10.464 9.5 10 9.5m2 7h1.5m-1.5 0h-1.5"></svg:path></svg:g>`,
})
export class LetsIconsInfoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
