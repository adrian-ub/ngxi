import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEspejoIcon],svg[arcticons-espejo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.97 25.822l28.946 16.655M8.969 21.79l30.06 17.297M8.97 18.631l30.06 17.296M17.698 4.501L39.03 16.776M12.626 4.5h22.75a3.64 3.64 0 0 1 3.655 3.627v31.73a3.64 3.64 0 0 1-3.639 3.643H12.626a3.64 3.64 0 0 1-3.655-3.627V8.143A3.64 3.64 0 0 1 12.61 4.5z"></svg:path>`,
})
export class ArcticonsEspejoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
