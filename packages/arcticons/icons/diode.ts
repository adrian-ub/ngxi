import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiodeIcon],svg[arcticons-diode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.75 43.5h16.5m-8.25 0L13.79 25.8h20.43zm8.25-39h-16.5m8.25 0l10.22 17.69H13.79z"></svg:path>`,
})
export class ArcticonsDiodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
