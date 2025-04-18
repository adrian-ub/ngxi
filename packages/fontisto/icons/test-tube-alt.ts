import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoTestTubeAltIcon],svg[fontisto-test-tube-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.403 0h-9.586v1.958h.73v18.035a4.063 4.063 0 1 0 8.126 0v-.06v.003V1.958h.73zm-1.93 4.844h-5.735V1.952h5.737zM9.586 0H0v1.958h.73v18.035a4.063 4.063 0 1 0 8.126 0v-.06v.003V1.958h.73zm-1.92 19.938a2.87 2.87 0 0 1-5.736.005V1.961h5.737z"></svg:path>`,
})
export class FontistoTestTubeAltIcon {
  readonly viewBox = input("0 0 22 24")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
