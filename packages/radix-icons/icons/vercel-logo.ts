import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsVercelLogoIcon],svg[radix-icons-vercel-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.5 1l-.577 1.003L1.175 12L.6 13h13.8l-.575-1l-5.748-9.997zm0 2.006L2.329 12H12.67z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsVercelLogoIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
