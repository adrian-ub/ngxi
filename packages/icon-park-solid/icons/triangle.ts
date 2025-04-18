import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTriangleIcon],svg[icon-park-solid-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.27 6.99c.77-1.33 2.69-1.33 3.46 0l18.532 32.008c.772 1.333-.19 3.002-1.73 3.002H5.468c-1.54 0-2.503-1.669-1.731-3.002z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkSolidTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
