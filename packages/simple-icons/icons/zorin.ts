import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZorinIcon],svg[simple-icons-zorin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18.944L5.995 22.4h12.01L20 18.944zM24 12l-2.013 3.488H9.216l12.771-6.976zM0 12l2.013-3.488h12.771L2.013 15.488zm4-6.944L5.995 1.6h12.01L20 5.056z"></svg:path>`,
})
export class SimpleIconsZorinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
