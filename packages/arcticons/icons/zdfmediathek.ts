import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZdfmediathekIcon],svg[arcticons-zdfmediathek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.37 17.831h5.295a6.586 6.586 0 0 1 0 13.167h-2.086m8.501-13.379h6.42m-6.42 6.583h4.173m-4.173-6.583v13.166"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.072 22.11a4.343 4.343 0 0 1 4.173-4.443a4.477 4.477 0 0 1 4.333 4.443a4.56 4.56 0 0 1-1.284 3.128c-1.765 1.481-7.222 5.76-7.222 5.76h8.506"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.427 31.092a12.587 12.587 0 1 1 .57-13.264"></svg:path>`,
})
export class ArcticonsZdfmediathekIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
