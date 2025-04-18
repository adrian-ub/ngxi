import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetlifeIcon],svg[arcticons-metlife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.792 41.168H7.608a2.11 2.11 0 0 1-2.108-2.11V8.162a1.33 1.33 0 0 1 1.454-1.323c12.74 1.235 22.838 18.445 22.838 31.373z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.208 41.168h22.184a2.11 2.11 0 0 0 2.108-2.109V8.162a1.33 1.33 0 0 0-1.454-1.323c-12.74 1.235-22.838 18.445-22.838 31.373z"></svg:path>`,
})
export class ArcticonsMetlifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
