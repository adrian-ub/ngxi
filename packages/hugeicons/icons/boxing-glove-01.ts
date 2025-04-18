import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBoxingGlove01Icon],svg[hugeicons-boxing-glove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.982 11.246c-.087 2.723 3.12 6.078 6.129 7.133m-6.13-7.133c-.304.523-3.415 3.017-3.47 4.073c-.263 2.098 3.301 6.039 6.05 6.173c1.026.146 2.449-1.58 3.892-2.864c.795-.707 1.94-.87 6.524-2.008c1.664-.289 3.663-3.159.7-5.59m-13.695.216c.928-2.201 2.532-6.456 5.68-8.137c1.277-.726 4.597-1.394 7.85 1.698c1.119.94 3.058 3.002 1.253 5.377c-1.204 1.403-3.024.997-3.2 3.423" color="currentColor"></svg:path>`,
})
export class HugeiconsBoxingGlove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
