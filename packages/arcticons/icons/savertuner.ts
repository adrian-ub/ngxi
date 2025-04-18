import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSavertunerIcon],svg[arcticons-savertuner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5h-9.75V8.4h5.85V4.5h7.8v3.9h5.85v35.1zm0-21.45v-7.8m-3.9 3.9h7.8M24 37.65v-7.8m-3.9 3.9h7.8"></svg:path>`,
})
export class ArcticonsSavertunerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
