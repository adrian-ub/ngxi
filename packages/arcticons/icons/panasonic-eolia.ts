import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPanasonicEoliaIcon],svg[arcticons-panasonic-eolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 28c0 2.77-2.23 5-5 5h-29c-2.77 0-5-2.23-5-5V17c0-1.108.892-2 2-2h35c1.108 0 2 .892 2 2zm-32.934-.73h26.868"></svg:path>`,
})
export class ArcticonsPanasonicEoliaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
