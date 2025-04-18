import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCentIcon],svg[proicons-cent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.085 3.875v2.417m0 14.083v-2.417m4.382-1.705a5.84 5.84 0 0 1-4.382 1.705m4.382-9.961a5.84 5.84 0 0 0-4.382-1.705m0 11.666A5.836 5.836 0 0 1 6.5 12.125a5.84 5.84 0 0 1 5.585-5.833"></svg:path>`,
})
export class ProiconsCentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
