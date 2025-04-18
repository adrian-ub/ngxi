import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUpsideIcon],svg[arcticons-upside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.641c-10.201 0-18.5-8.298-18.5-18.5v-9.92h8.816v9.92c0 5.34 4.344 9.684 9.684 9.684s9.684-4.343 9.684-9.684v-9.92H42.5v9.92c0 10.202-8.299 18.5-18.5 18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.777 23.081V5.359H42.5z"></svg:path>`,
})
export class ArcticonsUpsideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
