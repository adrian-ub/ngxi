import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSnowpackIcon],svg[simple-icons-snowpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.81 19.751l-10.8-16.8a1.2 1.2 0 0 0-2.02 0l-10.8 16.8a1.2 1.2 0 0 0-.043 1.224A1.2 1.2 0 0 0 1.2 21.6h21.6a1.2 1.2 0 0 0 1.053-.625a1.2 1.2 0 0 0-.044-1.224M12 5.82l3.202 4.981H12l-2.4 2.4l-1.427-1.427z"></svg:path>`,
})
export class SimpleIconsSnowpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
