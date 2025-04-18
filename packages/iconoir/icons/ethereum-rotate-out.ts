import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEthereumRotateOutIcon],svg[iconoir-ethereum-rotate-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.168 8A10 10 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9"></svg:path><svg:path d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6c5.186 0 9.45-3.947 9.951-9"></svg:path><svg:path d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20M7 12l5 7l5-7M7 12l5-7m-5 7l5 1m0-8l5 7m-5-7v8m5-1l-5 1"></svg:path></svg:g>`,
})
export class IconoirEthereumRotateOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
