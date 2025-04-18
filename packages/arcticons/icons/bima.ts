import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBimaIcon],svg[arcticons-bima-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 28.073s-1.894-3.694-7.293-4.452L33.745 7.804L24 8.941l-9.745-1.137l-2.462 15.817C6.394 24.38 4.5 28.073 4.5 28.073zm-31.623 0c0 6.695 5.428 12.123 12.123 12.123s12.123-5.428 12.123-12.123"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.833 32.05a4.167 4.167 0 0 0 8.334 0z"></svg:path>`,
})
export class ArcticonsBimaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
