import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftFamilySafetyIcon],svg[arcticons-microsoft-family-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.143 5.036C9.608 5.036 3.5 11.144 3.5 18.679a13.62 13.62 0 0 0 5.293 10.79v.001a7.612 7.612 0 0 1 5.94-12.373h3.236a6.03 6.03 0 0 0 0-12.061z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.857 5.036c7.535 0 13.643 6.108 13.643 13.643a13.62 13.62 0 0 1-5.293 10.79v.001a7.612 7.612 0 0 0-5.94-12.373h-3.236a6.03 6.03 0 0 1 0-12.061z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.793 29.47l12.285 12.284a4.13 4.13 0 0 0 5.844 0l12.285-12.285"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.566 31.243c3.79 3.791 9.937 3.791 13.728 0l5.438-5.438a9.92 9.92 0 0 0 2.904-7.013v-1.695"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.49 31.047l-5.242-5.242a9.92 9.92 0 0 1-2.905-7.013v-1.695"></svg:path>`,
})
export class ArcticonsMicrosoftFamilySafetyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
