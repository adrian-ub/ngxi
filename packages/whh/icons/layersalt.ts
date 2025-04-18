import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLayersaltIcon],svg[whh-layersalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 378L607 615q-40 24-95 24t-95-24L39 378Q0 354 0 319.5T39 260L417 24q40-24 95-24t95 24l378 236q39 25 39 59.5T985 378M39 644l111-69l267 168q40 24 95 24t95-24l267-168l111 69q39 25 39 59.5T985 762L607 999q-40 24-95 24t-95-24L39 762Q0 738 0 703.5T39 644"></svg:path>`,
})
export class WhhLayersaltIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
