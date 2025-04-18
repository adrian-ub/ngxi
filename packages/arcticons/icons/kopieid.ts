import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKopieidIcon],svg[arcticons-kopieid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.5v-25a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v25a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.051 17.5h13v13h-13zm18.074 3.796h8.252m-8.281 5.467l12.197.028"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.055 28.43a9.47 9.47 0 0 0-4.516-2.372a3.168 3.168 0 1 0-3.975 0A9.47 9.47 0 0 0 8.05 28.43"></svg:path>`,
})
export class ArcticonsKopieidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
