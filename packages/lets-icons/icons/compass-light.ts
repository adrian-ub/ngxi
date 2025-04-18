import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassLightIcon],svg[lets-icons-compass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M8.918 10.907a12.5 12.5 0 0 1-.395-2.384a12.5 12.5 0 0 1 2.384.395c1.013.278 2.031.727 2.74 1.435c.708.709 1.157 1.727 1.435 2.74c.258.943.357 1.838.395 2.384a12.5 12.5 0 0 1-2.384-.396c-1.014-.277-2.031-.726-2.74-1.435c-.708-.708-1.157-1.726-1.435-2.74Z"></svg:path><svg:circle cx="12" cy="12" r="8.5"></svg:circle></svg:g>`,
})
export class LetsIconsCompassLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
