import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFindomesticIcon],svg[arcticons-findomestic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.152 43.5l18.673-.028m7.023-37.46c-2.837-1.52-7.023-1.848-9.222-1.19c-2.445.73-4.506 2.141-5.758 3.874c-.932 1.289-1.393 2.153-1.393 3.186V36.6M33.87 20.637l-13.395-.034"></svg:path>`,
})
export class ArcticonsFindomesticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
