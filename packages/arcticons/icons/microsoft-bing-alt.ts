import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftBingAltIcon],svg[arcticons-microsoft-bing-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.57 4.5l7.85 2.87l-.05 27.16l10.43-6.05l-5.2-2.8l-3.28-8.18l16.88 5.88l.23 9L18.37 43.5L10.65 39Z"></svg:path>`,
})
export class ArcticonsMicrosoftBingAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
