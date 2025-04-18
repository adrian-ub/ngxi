import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProtonIcon],svg[arcticons-proton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.59 33.344V43.5h7.12v-9.717a3.56 3.56 0 0 1 3.56-3.564h7.3A12.86 12.86 0 0 0 26.568 4.5H8.59v12.695h7.12V11.21h10.378a6.084 6.084 0 0 1 0 12.168h-7.545a9.96 9.96 0 0 0-9.953 9.966"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.268 30.219A10.686 10.686 0 0 0 8.59 40.91v2.59"></svg:path>`,
})
export class ArcticonsProtonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
