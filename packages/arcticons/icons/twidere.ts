import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTwidereIcon],svg[arcticons-twidere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.57 14.64l-6.32 6.42l-6.33-6.42l6.33-6.37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 8.27h12.76l-6.33 6.37zm6.42 6.37l6.33 6.42l-6.35 6.34z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.2 39.72l-9.24-9.36l9.29-9.3zm.05.01V21.06l18.59 18.6z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.4 34.22L17.25 21.06H43.5z"></svg:path>`,
})
export class ArcticonsTwidereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
