import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrightness3Icon],svg[material-symbols-light-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.192 21q-.252 0-.485-.026t-.476-.078q2.496-1.294 3.93-3.688T13.597 12t-1.434-5.208T8.23 3.104q.244-.052.477-.078T9.192 3q1.868 0 3.51.708t2.858 1.923t1.923 2.857q.71 1.642.71 3.509t-.71 3.51t-1.923 2.859t-2.858 1.925t-3.51.709"></svg:path>`,
})
export class MaterialSymbolsLightBrightness3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
