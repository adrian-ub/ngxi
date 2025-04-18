import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBingxIcon],svg[arcticons-bingx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.398c-8.503 0-13.462-4.697-19.5-12.398S13.003 11.602 4.5 11.602"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 11.602c-8.503 0-13.462 4.697-19.5 12.398S13.003 36.398 4.5 36.398"></svg:path>`,
})
export class ArcticonsBingxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
