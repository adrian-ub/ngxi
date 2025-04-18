import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftOutlookIcon],svg[arcticons-microsoft-outlook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.92 25.3v-4.77h0V7.5a2 2 0 0 0-2-2H15.55a2 2 0 0 0-2 2V14m4.64 8.19a3.68 3.68 0 0 0-3.89-3.68a3.83 3.83 0 0 0-3.49 3.89v3.41a3.69 3.69 0 0 0 3.69 3.69h0a3.69 3.69 0 0 0 3.69-3.69h0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2m39 26.5l-19-10.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.67 34v8.5H43.5V24.39l-15.91 9.17"></svg:path>`,
})
export class ArcticonsMicrosoftOutlookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
