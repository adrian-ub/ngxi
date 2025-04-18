import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExiferaserIcon],svg[arcticons-exiferaser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.024 15.82H43.5v24.476H19.024z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.024 36.565l7.036-7.035l4.122 4.123l6.905-6.904l6.38 6.38M9.993 22.477v-7.639a7.133 7.133 0 0 1 14.267 0v3.583"></svg:path><svg:circle cx="29.299" cy="23.477" r="3.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.487 23.011l-5.494-4.06l-5.493 4.06v16.56h10.987z"></svg:path>`,
})
export class ArcticonsExiferaserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
