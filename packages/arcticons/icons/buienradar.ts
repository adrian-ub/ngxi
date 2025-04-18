import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBuienradarIcon],svg[arcticons-buienradar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.748 31.237A21.507 21.507 0 0 1 35.235 5.666m7.099 7.098a21.51 21.51 0 0 1-25.571 31.488M4.11 36.11a5.5 5.5 0 0 0 7.78 7.78L45.5 2.5Z"></svg:path>`,
})
export class ArcticonsBuienradarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
