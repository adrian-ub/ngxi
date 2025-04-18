import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCoffeeHotIcon],svg[proicons-coffee-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.5 10.682c0-.875.71-1.585 1.585-1.585H16.52c.876 0 1.585.71 1.585 1.585v3.265a7.303 7.303 0 0 1-7.302 7.303v0A7.303 7.303 0 0 1 3.5 13.947z"></svg:path><svg:path d="M18.105 10.556h1.464A2.43 2.43 0 0 1 22 12.986v0a2.43 2.43 0 0 1-2.43 2.43h-1.465M6.421 3.75v2.43m4.382-2.43v2.43m4.381-2.43v2.43"></svg:path></svg:g>`,
})
export class ProiconsCoffeeHotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
