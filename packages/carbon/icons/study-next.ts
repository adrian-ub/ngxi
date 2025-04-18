import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStudyNextIcon],svg[carbon-study-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M23.93 21L30 15l-6.07-6l-1.43 1.41L27.14 15l-4.64 4.59L23.93 21z" fill="currentColor"></svg:path><svg:path d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" fill="currentColor"></svg:path><svg:path d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyNextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
