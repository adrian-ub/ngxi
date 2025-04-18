import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTsacdopIcon],svg[arcticons-tsacdop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.46 15.683V40.04a3.46 3.46 0 0 1-6.92 0V15.683a3.46 3.46 0 1 1 6.92 0m8.534-3.769a7.34 7.34 0 1 1-5.07 13.777M12.006 18.73a7.34 7.34 0 1 1 5.07-13.777m-.001 0l18.919 6.96m-5.069 13.778L12.006 18.73"></svg:path>`,
})
export class ArcticonsTsacdopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
