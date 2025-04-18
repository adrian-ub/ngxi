import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGreentoothIcon],svg[arcticons-greentooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.425 24l-.017 19.5l10.416-9.779L11.5 13.788m13.704 7.614l7.62-7.123L22.408 4.5v14.29M11.5 34.212L22.425 24m10.399 9.721l3.676 3.433M22.408 18.79l2.796 2.612"></svg:path>`,
})
export class ArcticonsGreentoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
